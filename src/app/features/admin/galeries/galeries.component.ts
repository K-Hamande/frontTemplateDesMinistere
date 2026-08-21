import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Router } from '@angular/router';

type MediaType = 'PHOTO' | 'VIDEO';

interface GalleryItem {
  id: number;
  type: MediaType;
  titre: string;
  url: string; // imageUrl ou videoUrl/youtubeUrl selon le type
}

@Component({
  selector: 'app-galeries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galeries.component.html',
  styleUrls: ['./galeries.component.scss']
})
export class GaleriesComponent {

  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
    show: false,
    message: '',
    type: 'success'
  });

  articles = signal<GalleryItem[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingArticle = signal<GalleryItem | null>(null);
  saving = signal(false);
  selectedFile: File | null = null;
  fileError = false;
  currentPage = signal(1);
  pageSize = 7;
  totalPages = signal(1);

  // Media actuellement affiché dans la lightbox (null = fermée)
  viewingArticle = signal<GalleryItem | null>(null);

  form: { mediaType: MediaType } = {
    mediaType: 'PHOTO',
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  // Charge photos + videos et les fusionne pour l'affichage
  loadArticles(): void {
    this.loading.set(true);

    this.apiService.getAllPhotos().subscribe({
      next: (photosResponse: any) => {
        const photos: GalleryItem[] = (photosResponse.data || []).map((p: any) => ({
          id: p.id,
          type: 'PHOTO' as MediaType,
          titre: p.titre || p.name || `Photo #${p.id}`,
          url: p.imageUrl,
        }));

        this.apiService.getAllVideos().subscribe({
          next: (videosResponse: any) => {
            const videos: GalleryItem[] = (videosResponse.data || []).map((v: any) => ({
              id: v.id,
              type: 'VIDEO' as MediaType,
              titre: v.youtubeUrl ? `Video YouTube #${v.id}` : `Video #${v.id}`,
              url: v.videoUrl || v.youtubeUrl,
            }));

            const all = [...photos, ...videos];
            this.totalPages.set(Math.ceil(all.length / this.pageSize) || 1);
            const start = (this.currentPage() - 1) * this.pageSize;
            this.articles.set(all.slice(start, start + this.pageSize));
            this.loading.set(false);
          },
          error: (err: any) => {
            console.error('Erreur chargement videos', err);
            this.loading.set(false);
          },
        });
      },
      error: (err: any) => {
        console.error('Erreur chargement photos', err);
        this.loading.set(false);
      },
    });
  }

  getFullUrl(path: string): string {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return 'http://localhost:8096' + path; // a remplacer par environment.apiUrl en production
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p) => p + 1);
      this.loadArticles();
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p) => p - 1);
      this.loadArticles();
    }
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.loadArticles();
  }

  pages(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  openModal(): void {
    this.form = { mediaType: 'PHOTO' };
    this.selectedFile = null;
    this.fileError = false;
    this.editingArticle.set(null);
    this.showModal.set(true);
  }

  closeModal(form?: NgForm): void {
    this.showModal.set(false);
    this.editingArticle.set(null);
    this.selectedFile = null;
    this.fileError = false;
    form?.resetForm();
  }

  onMediaTypeChange(): void {
    this.selectedFile = null;
    this.fileError = false;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      return;
    }

    const file = input.files[0];
    const expectedPrefix = this.form.mediaType === 'PHOTO' ? 'image/' : 'video/';

    if (!file.type.startsWith(expectedPrefix)) {
      this.fileError = true;
      input.value = '';
      this.selectedFile = null;
      return;
    }

    this.fileError = false;
    this.selectedFile = file;
  }

  // Ouvre la visionneuse sur la meme page (au lieu d'un nouvel onglet)
  viewArticle(article: GalleryItem): void {
    this.viewingArticle.set(article);
  }

  closeViewModal(): void {
    this.viewingArticle.set(null);
  }

  editArticle(article: GalleryItem): void {
    this.form = { mediaType: article.type };
    this.selectedFile = null;
    this.fileError = false;
    this.editingArticle.set(article);
    this.showModal.set(true);
  }

  saveArticle(form?: NgForm): void {
    const editing = this.editingArticle();
    const isCreating = !editing;

    if (isCreating && !this.selectedFile) {
      this.showNotification('Un fichier est requis.', 'error');
      return;
    }

    this.saving.set(true);
    const formData = new FormData();

    if (this.form.mediaType === 'PHOTO') {
      const titreAuto = this.selectedFile
        ? this.selectedFile.name.replace(/\.[^/.]+$/, '')
        : (editing?.titre || '');
      formData.append('photo', JSON.stringify({ titre: titreAuto }));
      if (this.selectedFile) formData.append('file', this.selectedFile);

      const request = editing
        ? this.apiService.updatePhoto(editing.id, formData)
        : this.apiService.createPhoto(formData);

      this.handleSaveResponse(request, editing, form);

    } else {
      formData.append('video', JSON.stringify({}));
      if (this.selectedFile) formData.append('file', this.selectedFile);

      const request = editing
        ? this.apiService.updateVideo(editing.id, formData)
        : this.apiService.createVideo(formData);

      this.handleSaveResponse(request, editing, form);
    }
  }

  private handleSaveResponse(request: any, editing: GalleryItem | null, form?: NgForm): void {
    request.subscribe({
      next: () => {
        this.loadArticles();
        this.closeModal(form);
        this.saving.set(false);
        this.showNotification(editing ? 'Media mis a jour avec succès' : 'Media cree avec succès', 'success');
      },
      error: (err: any) => {
        console.error('Erreur lors de la sauvegarde', err);
        this.saving.set(false);
        this.showNotification("Erreur lors de la sauvegarde : " + (err.error?.message || err.message || ''), 'error');
      }
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  trackByArticleId(index: number, article: GalleryItem) { return article.id; }

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2000) {
    this.notification.set({ show: true, message, type });
    setTimeout(() => this.notification.update(n => ({ ...n, show: false })), duration);
  }

  confirmModal = signal<{ show: boolean; message: string; onConfirm: () => void }>({
    show: false,
    message: '',
    onConfirm: () => {}
  });

  openConfirmModal(message: string, onConfirm: () => void) {
    this.confirmModal.set({ show: true, message, onConfirm });
  }

  closeConfirmModal() {
    this.confirmModal.update(c => ({ ...c, show: false }));
  }

  deleteArticle(article: GalleryItem): void {
    this.openConfirmModal(`Voulez-vous vraiment supprimer "${article.titre}" ?`, () => {
      const request = article.type === 'PHOTO'
        ? this.apiService.deletePhoto(article.id)
        : this.apiService.deleteVideo(article.id);

      request.subscribe({
        next: () => {
          this.loadArticles();
          this.closeConfirmModal();
          this.showNotification('Media supprime avec succès', 'success');
        },
        error: () => {
          this.showNotification("Erreur lors de la suppression", "error");
          this.closeConfirmModal();
        }
      });
    });
  }
}