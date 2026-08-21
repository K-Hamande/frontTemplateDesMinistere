import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface MediaItem {
  id: number;
  type: 'PHOTO' | 'VIDEO';
  title: string;
  description?: string;
  url: string;
  createdAt?: string;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  private readonly FILE_URL = environment.FileUrl;

  allMedia = signal<MediaItem[]>([]);
  media = signal<MediaItem[]>([]);
  loading = signal(true);

  selectedType = signal<'PHOTO' | 'VIDEO' | null>(null);
  selectedMedia = signal<MediaItem | null>(null);
  selectedIndex = signal<number>(-1);
  searchQuery = '';

  pageSize = 12;
  currentPage = signal(1);
  totalPages = signal(1);

  pages = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMedia();
  }

  loadMedia(): void {
    this.loading.set(true);

    forkJoin({
      photos: this.apiService.getAllPhotos(),
      videos: this.apiService.getAllVideos()
    }).subscribe({
      next: ({ photos, videos }) => {
        console.log('RAW PHOTOS =', photos);
        console.log('RAW VIDEOS =', videos);

        const photoList = this.extractArray(photos).map(p => this.mapToMediaItem(p, 'PHOTO'));
        const videoList = this.extractArray(videos).map(v => this.mapToMediaItem(v, 'VIDEO'));

        const combined = [...photoList, ...videoList].sort((a, b) =>
          (b.createdAt || '').localeCompare(a.createdAt || '')
        );

        this.allMedia.set(combined);
        this.filterMedia();
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erreur chargement médias', err);
        this.loading.set(false);
      }
    });
  }

  private extractArray(response: any): any[] {
    if (Array.isArray(response)) return response;
    if (Array.isArray(response?.data)) return response.data;
    if (Array.isArray(response?.data?.content)) return response.data.content;
    if (Array.isArray(response?.content)) return response.content;
    return [];
  }

  private mapToMediaItem(raw: any, type: 'PHOTO' | 'VIDEO'): MediaItem {
    const rawUrl =
      raw.url ?? raw.imageUrl ?? raw.photoUrl ?? raw.videoUrl ??
      raw.fileUrl ?? raw.path ?? raw.filePath ?? '';

    return {
      id: raw.id,
      type,
      title: raw.title ?? raw.name ?? '',
      description: raw.description ?? '',
      url: this.resolveUrl(rawUrl),
      createdAt: raw.createdAt ?? raw.createdDate ?? ''
    };
  }

  private resolveUrl(path: string): string {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return this.FILE_URL + path;
  }

  selectType(type: 'PHOTO' | 'VIDEO'): void {
    this.selectedType.set(this.selectedType() === type ? null : type);
    this.currentPage.set(1);
    this.filterMedia();
  }

  search(): void {
    this.currentPage.set(1);
    this.filterMedia();
  }

  filterMedia(): void {
    const query = this.searchQuery.trim().toLowerCase();

    const filtered = this.allMedia().filter(item => {
      const matchesType = !this.selectedType() || item.type === this.selectedType();
      const matchesQuery = !query || item.title.toLowerCase().includes(query);
      return matchesType && matchesQuery;
    });

    this.totalPages.set(Math.max(1, Math.ceil(filtered.length / this.pageSize)));
    const start = (this.currentPage() - 1) * this.pageSize;
    this.media.set(filtered.slice(start, start + this.pageSize));
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage.set(page);
    this.filterMedia();
  }

  nextPage(): void { this.goToPage(this.currentPage() + 1); }
  prevPage(): void { this.goToPage(this.currentPage() - 1); }

  openLightbox(item: MediaItem): void {
    const index = this.media().findIndex(m => m.id === item.id);
    this.selectedIndex.set(index);
    this.selectedMedia.set(item);
  }

  closeLightbox(): void {
    this.selectedMedia.set(null);
    this.selectedIndex.set(-1);
  }

  nextMedia(): void {
    const list = this.media();
    if (list.length === 0) return;
    const next = (this.selectedIndex() + 1) % list.length;
    this.selectedIndex.set(next);
    this.selectedMedia.set(list[next]);
  }

  prevMedia(): void {
    const list = this.media();
    if (list.length === 0) return;
    const prev = (this.selectedIndex() - 1 + list.length) % list.length;
    this.selectedIndex.set(prev);
    this.selectedMedia.set(list[prev]);
  }
}