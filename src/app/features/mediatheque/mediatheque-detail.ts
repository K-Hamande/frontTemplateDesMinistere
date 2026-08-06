import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

import { ApiService } from '../../core/services/api.service';
import {
  Photo,
  Video
} from '../../core/models/event.model';

import { environment } from '../../../environments/environment';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

@Component({
  selector: 'app-mediatheque-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './mediatheque-detail.html',
  styleUrls: ['./mediatheque-detail.scss']
})
export class MediathequeDetailComponent implements OnInit {

  fileUrl = environment.FileUrl;

  /**
   * Type du média :
   * photo ou video
   */
  type = signal<'photo' | 'video' | null>(null);

  /**
   * Média chargé
   */
  photo = signal<Photo | null>(null);

  video = signal<Video | null>(null);

  photos = signal<Photo[]>([]);

  currentPhotoIndex = signal<number>(0);

  loading = signal(true);

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {

  this.route.paramMap.subscribe(params => {

    const type = params.get('type');

    const id = Number(
      params.get('id')
    );

    if (
      (type === 'photo' || type === 'video') &&
      id
    ) {

      this.type.set(type);

      if (type === 'photo') {

        this.loadPhoto(id);

      } else {

        this.loadVideo(id);

      }

    }

  });

}

loadPhotos(): void {

  (this.apiService as any).getAllPhotos().subscribe({

    next: (res: ApiResponse<Photo[]>) => {

      if (res.success && res.data) {

        this.photos.set(res.data);

        this.updateCurrentPhoto();

      }

    },

    error: (err: any) => {

      console.error(err);

    }

  });

}


updateCurrentPhoto(): void {

  const currentPhoto = this.photo();

  if (!currentPhoto) {

    return;

  }

  const index = this.photos()
    .findIndex(
      photo => photo.id === currentPhoto.id
    );

  if (index !== -1) {

    this.currentPhotoIndex.set(index);

  }

}
  /**
   * ==========================
   * Charger une photo
   * ==========================
   */
  loadPhoto(id: number): void {

  this.loading.set(true);

  (this.apiService as any).getAllPhotos().subscribe({

    next: (photosRes: ApiResponse<Photo[]>) => {

      if (
        photosRes.success &&
        photosRes.data
      ) {

        this.photos.set(
          photosRes.data
        );

      }

      (this.apiService as any)
        .getPhotoById(id)
        .subscribe({

          next: (photoRes: ApiResponse<Photo>) => {

            if (
              photoRes.success &&
              photoRes.data
            ) {

              this.photo.set(
                photoRes.data
              );

              const index =
                this.photos().findIndex(
                  photo =>
                    photo.id === photoRes.data?.id
                );

              this.currentPhotoIndex.set(
                index
              );

            }

            this.loading.set(false);

          },

          error: (err: any) => {

            console.error(err);

            this.loading.set(false);

          }

        });

    },

    error: (err: any) => {

      console.error(err);

      this.loading.set(false);

    }

  });

}

previousPhoto(): void {

  const photos = this.photos();

  if (
    photos.length === 0 ||
    this.currentPhotoIndex() <= 0
  ) {

    return;

  }

  const newIndex =
    this.currentPhotoIndex() - 1;

  const previousPhoto =
    photos[newIndex];

  this.currentPhotoIndex.set(
    newIndex
  );

  this.photo.set(
    previousPhoto
  );

  this.updateUrl(
    previousPhoto.id!
  );

}

nextPhoto(): void {

  const photos = this.photos();

  if (
    photos.length === 0 ||
    this.currentPhotoIndex()
      >= photos.length - 1
  ) {

    return;

  }

  const newIndex =
    this.currentPhotoIndex() + 1;

  const nextPhoto =
    photos[newIndex];

  this.currentPhotoIndex.set(
    newIndex
  );

  this.photo.set(
    nextPhoto
  );

  this.updateUrl(
    nextPhoto.id!
  );

}

updateUrl(id: number): void {

  window.history.pushState(
    {},
    '',
    `/ressources/mediatheque/photo/${id}`
  );

}
  /**
   * ==========================
   * Charger une vidéo
   * ==========================
   */
  loadVideo(id: number): void {

    this.loading.set(true);

    (this.apiService as any).getVideoById(id).subscribe({

      next: (res: ApiResponse<Video>) => {

        console.log(res);

        if (res.success && res.data) {

          this.video.set(res.data);

        }

        this.loading.set(false);

      },

      error: (err: any) => {

        console.error(err);

        this.loading.set(false);

      }

    });

  }

  /**
   * ==========================
   * URL complète de l'image
   * ==========================
   */
  getImageUrl(path?: string): string {

    if (!path) {

      return 'assets/images/no-image.png';

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
   * URL complète de la vidéo
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
   * Vérifier si vidéo YouTube
   * ==========================
   */
  isYoutubeVideo(): boolean {

    return !!this.video()?.youtubeUrl;

  }

  /**
   * ==========================
   * URL d'intégration YouTube
   * ==========================
   */
  getYoutubeEmbedUrl(
    url?: string
  ): SafeResourceUrl {

    if (!url) {

      return this.sanitizer
        .bypassSecurityTrustResourceUrl('');

    }

    let videoId = '';

    if (url.includes('watch?v=')) {

      videoId =
        url
          .split('watch?v=')[1]
          .split('&')[0];

    }

    else if (url.includes('youtu.be/')) {

      videoId =
        url
          .split('youtu.be/')[1]
          .split('?')[0];

    }

    else {

      videoId = url;

    }

    return this.sanitizer
      .bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );

  }

}