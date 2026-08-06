import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ApiService } from '../../../core/services/api.service';
import { Photo } from '../../../core/models/event.model';
import { Video } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

@Component({
  selector: 'app-mediatheque',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './mediatheque.component.html',
  styleUrls: ['./mediatheque.component.scss']
})
export class MediathequeComponent implements OnInit {

  fileUrl = environment.FileUrl;

  photos = signal<Photo[]>([]);
  videos = signal<Video[]>([]);

  loadingPhotos = signal(true);
  loadingVideos = signal(true);

  photosPerPage = 8;

  currentPhotoPage = signal(1);

  constructor(
    private apiService: ApiService,
    private router: Router,
    private sanitizer: DomSanitizer

  ) {}

  ngOnInit(): void {

    this.loadPhotos();

    this.loadVideos();

  }

  /**
   * ==========================
   * Charger les photos
   * ==========================
   */
  loadPhotos(): void {

    this.loadingPhotos.set(true);

    (this.apiService as any).getAllPhotos?.().subscribe?.({

      next: (res: ApiResponse<Photo[]>) => {

        if (res.success && res.data) {

          this.photos.set(res.data);

        }

        this.loadingPhotos.set(false);

      },

      error: (err: any) => {

        console.error(err);

        this.loadingPhotos.set(false);

      }

    });

  }

  getTotalPhotoPages(): number {

  return Math.ceil(
    this.photos().length /
    this.photosPerPage
  );

}

getPaginatedPhotos(): Photo[] {

  const start =
    (this.currentPhotoPage() - 1)
    * this.photosPerPage;

  const end =
    start + this.photosPerPage;

  return this.photos().slice(
    start,
    end
  );

}

nextPhotoPage(): void {

  if (
    this.currentPhotoPage()
    < this.getTotalPhotoPages()
  ) {

    this.currentPhotoPage.update(
      page => page + 1
    );

  }

}

previousPhotoPage(): void {

  if (
    this.currentPhotoPage() > 1
  ) {

    this.currentPhotoPage.update(
      page => page - 1
    );

  }

}

  /**
   * ==========================
   * Charger les vidéos
   * ==========================
   */
  loadVideos(): void {

    this.loadingVideos.set(true);

    (this.apiService as any).getAllVideos?.().subscribe?.({

      next: (res: ApiResponse<Video[]>) => {

        if (res.success && res.data) {

          this.videos.set(res.data);

        }

        this.loadingVideos.set(false);

      },

      error: (err: any) => {

        console.error(err);

        this.loadingVideos.set(false);

      }

    });

  }

  /**
   * ==========================
   * URL complète d'une image
   * ==========================
   */
  getImageUrl(path?: string): string {

    if (!path) {

      return 'assets/images/no-image.jpg';

    }

    if (
      path.startsWith('http://') ||
      path.startsWith('https://')
    ) {

      return path;

    }

    const normalized = path.startsWith('/uploads/')
      ? path
      : `/uploads/${path}`;

    return `${this.fileUrl}${normalized}`;

  }

  /**
   * ==========================
   * URL complète d'une vidéo
   * ==========================
   */
  getVideoUrl(path?: string): string {

    if (!path) {

      return '';

    }

    if (
      path.startsWith('http://') ||
      path.startsWith('https://')
    ) {

      return path;

    }

    const normalized = path.startsWith('/uploads/')
      ? path
      : `/uploads/${path}`;

    return `${this.fileUrl}${normalized}`;

  }

  /**
   * ==========================
   * Vérifie si YouTube
   * ==========================
   */
  isYoutube(video: Video): boolean {

    return !!video.youtubeUrl;

  }

  /**
   * ==========================
   * Miniature YouTube
   * ==========================
   */
  getYoutubeThumbnail(url?: string): string {

    if (!url) {

      return 'assets/images/youtube-placeholder.jpg';

    }

    const regex =
      /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;

    const match = url.match(regex);

    if (!match) {

      return 'assets/images/youtube-placeholder.jpg';

    }

    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;

  }

  /**
   * ==========================
   * Détail photo
   * ==========================
   */
  openPhoto(photo: Photo): void {

  if (!photo.id) {
    return;
  }

  this.router.navigate([
    '/ressources/mediatheque',
    'photo',
    photo.id
  ]);

}

  /**
   * ==========================
   * Détail vidéo
   * ==========================
   */
  openVideo(video: Video): void {

  if (!video.id) {
    return;
  }

  this.router.navigate([
    '/ressources/mediatheque',
    'video',
    video.id
  ]);

}


getYoutubeEmbedUrl(url: string | undefined): SafeResourceUrl {

  if (!url) {

    return this.sanitizer.bypassSecurityTrustResourceUrl('');

  }

  let id = '';

  if (url.includes('watch?v=')) {

    id = url.split('watch?v=')[1].split('&')[0];

  } else if (url.includes('youtu.be/')) {

    id = url.split('youtu.be/')[1].split('?')[0];

  }

  return this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${id}`
  );

}

}