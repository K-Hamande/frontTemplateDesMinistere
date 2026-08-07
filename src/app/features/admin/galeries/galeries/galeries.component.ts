import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../../../core/services/api.service';
import { Document as Media, DocumentType as MediaFormat } from '../../../../core/models';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-galeries',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galeries.component.html',
  styleUrls: ['./galeries.component.scss']
})
export class GaleriesComponent {

  private readonly API_URL = environment.FileUrl;

  // Types de fichiers acceptés pour la galerie
  private readonly ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm', 'video/quicktime'];
  private readonly MAX_SIZE_MB = 50;

  notification = signal<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
    show: false,
    message: '',
    type: 'success'
  });

  medias = signal<Media[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingMedia = signal<Media | null>(null);
  saving = signal(false);

  selectedFile: File | null = null;
  previewUrl = signal<string | null>(null);
  previewType = signal<'image' | 'video' | null>(null);

  currentPage = signal(1);
  pageSize = 8; // grille galerie
  totalPages = signal(1);

  form: { typeDocument: MediaFormat; isPublic: boolean } = {
    typeDocument: MediaFormat.DOCUMENT,
    isPublic: true
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMedias();
  }

  loadMedias(page: number = 0): void {
    this.loading.set(true);
    this.apiService.getAllDocuments(page, this.pageSize).subscribe({
      next: (response) => {
        if (response.success) {
          this.medias.set(response.data.content);
          this.totalPages.set(response.data.totalPages);
          this.currentPage.set(page + 1);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.loadMedias(this.currentPage());
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.loadMedias(this.currentPage() - 2);
    }
  }

  goToPage(page: number) {
    this.loadMedias(page - 1);
  }

  pages(): number[] {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  }

  openModal(): void {
    this.form = { typeDocument: MediaFormat.DOCUMENT, isPublic: true };
    this.selectedFile = null;
    this.previewUrl.set(null);
    this.previewType.set(null);
    this.editingMedia.set(null);
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
    this.editingMedia.set(null);
    this.revokePreview();
  }

  editMedia(media: Media): void {
    this.form = {
      typeDocument: media.typeDocument,
      isPublic: media.isPublic
    };
    this.selectedFile = null;
    this.previewUrl.set(this.getMediaUrl(media.filePath) ?? null);
    this.previewType.set(this.getMediaType(media.filePath));
    this.editingMedia.set(media);
    this.showModal.set(true);
  }

  // ----------------- SÉLECTION FICHIER (photo ou vidéo) -----------------
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      this.revokePreview();
      return;
    }

    const file = input.files[0];

    if (!this.ACCEPTED_TYPES.includes(file.type)) {
      this.showNotification('Format non supporté. Utilisez une photo (jpg, png, webp, gif) ou une vidéo (mp4, webm, mov)', 'error');
      input.value = '';
      this.selectedFile = null;
      return;
    }

    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > this.MAX_SIZE_MB) {
      this.showNotification(`Fichier trop volumineux (max ${this.MAX_SIZE_MB} Mo)`, 'error');
      input.value = '';
      this.selectedFile = null;
      return;
    }

    this.selectedFile = file;
    this.revokePreview();
    const url = URL.createObjectURL(file);
    this.previewUrl.set(url);
    this.previewType.set(file.type.startsWith('video/') ? 'video' : 'image');
  }

  private revokePreview(): void {
    const current = this.previewUrl();
    if (current && current.startsWith('blob:')) {
      URL.revokeObjectURL(current);
    }
    this.previewUrl.set(null);
    this.previewType.set(null);
  }

  saveMedia(): void {
    if (!this.selectedFile && !this.editingMedia()) {
      this.showNotification('Veuillez sélectionner un fichier', 'error');
      return;
    }

    this.saving.set(true);
    const editing = this.editingMedia();

    // Titre auto-généré depuis le nom du fichier (si le backend l'exige encore)
    const autoTitle = this.selectedFile?.name || editing?.title || 'Média';

    const mediaDTO = {
      title: autoTitle,
      description: '',
      category: 'AUTRE',
      typeDocument: this.form.typeDocument,
      typeId: 0,
      typeName: '',
      isPublic: this.form.isPublic
    };

    const formData = new FormData();
    formData.append('document', new Blob([JSON.stringify(mediaDTO)], { type: 'application/json' }));
    if (this.selectedFile) formData.append('file', this.selectedFile);

    const request = editing
      ? this.apiService.updateDocument(editing.id, formData)
      : this.apiService.createDocument(formData);

    request.subscribe({
      next: (response) => {
        if (response.success) {
          this.loadMedias();
          this.closeModal();
        }
        this.saving.set(false);
        this.showNotification(editing ? 'Média mis à jour avec succès' : 'Média ajouté à la galerie avec succès', 'success');
      },
      error: (err) => {
        console.error('Erreur lors de la sauvegarde', err);
        this.saving.set(false);
        this.showNotification('Erreur lors de la sauvegarde', 'error');
      }
    });
  }

  formatDate(dateStr: string): string {
    return dateStr ? new Date(dateStr).toLocaleDateString('fr-FR') : '';
  }

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2000) {
    this.notification.set({ show: true, message, type });
    setTimeout(() => this.notification.update(n => ({ ...n, show: false })), duration);
  }

  // ----------------- CONFIRMATION MODAL -----------------
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

  deleteMedia(media: Media): void {
    this.openConfirmModal(`Voulez-vous vraiment supprimer ce média ?`, () => {
      this.apiService.deleteDocument(media.id).subscribe({
        next: () => {
          this.loadMedias();
          this.closeConfirmModal();
          this.showNotification('Média supprimé avec succès', 'success');
        },
        error: () => {
          this.showNotification('Erreur lors de la suppression', 'error');
          this.closeConfirmModal();
        }
      });
    });
  }

  // ----------------- HELPERS MÉDIA -----------------
  getMediaUrl(path?: string): string | null {
    return path ? this.API_URL + path : null;
  }

  getMediaType(path?: string): 'image' | 'video' | null {
    if (!path) return null;
    const ext = path.split('.').pop()?.toLowerCase();
    if (!ext) return null;
    const videoExts = ['mp4', 'webm', 'mov'];
    const imageExts = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    if (videoExts.includes(ext)) return 'video';
    if (imageExts.includes(ext)) return 'image';
    return null;
  }

  isVideo(media: Media): boolean {
    return this.getMediaType(media.filePath) === 'video';
  }

  isImage(media: Media): boolean {
    return this.getMediaType(media.filePath) === 'image';
  }
}