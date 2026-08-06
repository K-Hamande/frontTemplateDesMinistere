import {
  Component,
  OnInit,
  signal,
  computed
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../../core/services/api.service';
import { Video } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-video',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './video.html'
})
export class VideoComponent implements OnInit {


  // ============================================================
  // URL DES FICHIERS
  // ============================================================

  fileUrl =
    (environment as any).fileUrl ||
    (environment as any).FileUrl ||
    'http://localhost:8096';


  // ============================================================
  // LISTE DES VIDEOS
  // ============================================================

  videos = signal<Video[]>([]);

  loading = signal(true);

  saving = signal(false);


  // ============================================================
  // MODAL AJOUT / MODIFICATION
  // ============================================================

  showModal = signal(false);

  editingVideo = signal<Video | null>(null);


  // ============================================================
  // FORMULAIRE
  // ============================================================

  form = {

    videoUrl: '',

    youtubeUrl: ''

  };


  selectedFile: File | null = null;

  preview = '';


  // ============================================================
  // MODE VIDEO
  // ============================================================

  mode = signal<'local' | 'youtube'>('youtube');


  // ============================================================
  // PAGINATION
  // ============================================================

  currentPage = signal(1);

  pageSize = 10;

  totalItems = signal(0);


  totalPages = computed(() =>

    Math.max(
      1,
      Math.ceil(
        this.totalItems() / this.pageSize
      )
    )

  );


  pages = computed(() =>

    Array.from(
      {
        length: this.totalPages()
      },

      (_, i) => i + 1

    )

  );


  // ============================================================
  // NOTIFICATION
  // ============================================================

  notification = signal<{

    show: boolean;

    type: 'success' | 'error';

    message: string;

  }>({

    show: false,

    type: 'success',

    message: ''

  });


  // ============================================================
  // MODAL CONFIRMATION
  // ============================================================

  confirmModal = signal<{

    show: boolean;

    message: string;

    onConfirm: () => void;

  }>({

    show: false,

    message: '',

    onConfirm: () => {}

  });


  constructor(

    private apiService: ApiService

  ) {}


  // ============================================================
  // INITIALISATION
  // ============================================================

  ngOnInit(): void {

    this.loadVideos();

  }


  // ============================================================
  // CHARGER LES VIDEOS
  // ============================================================

  loadVideos(): void {

    this.loading.set(true);

    this.apiService.getAllVideos().subscribe({

      next: (res: any) => {

        if (res.success && res.data) {

          this.videos.set(res.data);

          this.totalItems.set(
            res.data.length
          );

        }

        this.loading.set(false);

      },

      error: (err) => {

        console.error(
          'Erreur chargement vidéos :',
          err
        );

        this.showNotif(
          'error',
          'Erreur lors du chargement des vidéos'
        );

        this.loading.set(false);

      }

    });

  }


  // ============================================================
  // OUVRIR MODAL POUR AJOUT
  // ============================================================

  openModal(): void {

    this.editingVideo.set(null);

    this.resetForm();

    this.showModal.set(true);

  }


  // ============================================================
  // MODIFIER UNE VIDEO
  // ============================================================

  editVideo(video: Video): void {

    this.editingVideo.set(video);


    this.form = {

      videoUrl:
        video.videoUrl ?? '',

      youtubeUrl:
        video.youtubeUrl ?? ''

    };


    if (video.youtubeUrl) {

      this.mode.set('youtube');

    } else {

      this.mode.set('local');

      this.preview =
        this.getVideoUrl(
          video.videoUrl
        );

    }


    this.selectedFile = null;

    this.showModal.set(true);

  }


  // ============================================================
  // FERMER MODAL
  // ============================================================

  closeModal(): void {

    this.showModal.set(false);

    this.resetForm();

  }


  // ============================================================
  // RESET FORMULAIRE
  // ============================================================

  resetForm(): void {

    this.form = {

      videoUrl: '',

      youtubeUrl: ''

    };

    this.selectedFile = null;

    this.preview = '';

    this.mode.set('youtube');

  }


  // ============================================================
  // CHANGER LE TYPE
  // ============================================================

  changeMode(
    value: 'local' | 'youtube'
  ): void {

    this.mode.set(value);

    this.selectedFile = null;

    this.preview = '';

    this.form.videoUrl = '';

    this.form.youtubeUrl = '';

  }


  // ============================================================
  // SELECTIONNER UNE VIDEO
  // ============================================================

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;


    if (
      input.files &&
      input.files.length > 0
    ) {

      this.selectedFile =
        input.files[0];


      this.preview =
        URL.createObjectURL(
          this.selectedFile
        );

    }

  }


  // ============================================================
  // ENREGISTRER
  // ============================================================

  saveVideo(): void {


    if (
      this.mode() === 'youtube' &&
      !this.form.youtubeUrl.trim()
    ) {

      this.showNotif(

        'error',

        'Veuillez renseigner le lien YouTube'

      );

      return;

    }


    if (
      this.mode() === 'local' &&
      !this.selectedFile &&
      !this.editingVideo()
    ) {

      this.showNotif(

        'error',

        'Veuillez sélectionner une vidéo'

      );

      return;

    }


    this.saving.set(true);


    const formData =
      new FormData();


    const dto = {

      videoUrl:

        this.mode() === 'local'

          ? this.form.videoUrl

          : null,


      youtubeUrl:

        this.mode() === 'youtube'

          ? this.form.youtubeUrl.trim()

          : null

    };


    formData.append(

      'video',

      new Blob(

        [
          JSON.stringify(dto)
        ],

        {
          type:
            'application/json'
        }

      )

    );


    if (this.selectedFile) {

      formData.append(

        'file',

        this.selectedFile,

        this.selectedFile.name

      );

    }


    const editing =
      this.editingVideo();


    // ========================================================
    // MODIFICATION
    // ========================================================

    if (editing) {

      this.apiService
        .updateVideo(
          editing.id!,
          formData
        )
        .subscribe({

          next: (res: any) => {

            if (
              res.success !== false
            ) {

              this.showNotif(

                'success',

                'Vidéo modifiée avec succès'

              );

              this.closeModal();

              this.loadVideos();

            }

            this.saving.set(false);

          },


          error: (err) => {

            console.error(err);

            this.showNotif(

              'error',

              err?.error?.message ||

              'Erreur lors de la modification'

            );

            this.saving.set(false);

          }

        });


      return;

    }


    // ========================================================
    // CREATION
    // ========================================================

    this.apiService
      .createVideo(formData)
      .subscribe({

        next: () => {

          this.showNotif(

            'success',

            'Vidéo ajoutée avec succès'

          );

          this.closeModal();

          this.loadVideos();

          this.saving.set(false);

        },


        error: (err) => {

          console.error(err);

          this.showNotif(

            'error',

            err?.error?.message ||

            'Erreur lors de l\'enregistrement'

          );

          this.saving.set(false);

        }

      });

  }


  // ============================================================
  // SUPPRIMER UNE VIDEO
  // ============================================================

  deleteVideo(video: Video): void {

    this.confirmModal.set({

      show: true,


      message:

        'Voulez-vous vraiment supprimer cette vidéo ?',


      onConfirm: () => {


        this.apiService
          .deleteVideo(video.id!)
          .subscribe({

            next: (res: any) => {

              if (
                res.success !== false
              ) {

                this.showNotif(

                  'success',

                  'Vidéo supprimée avec succès'

                );

                this.closeConfirmModal();

                this.loadVideos();

              }

            },


            error: (err) => {

              console.error(err);

              this.showNotif(

                'error',

                err?.error?.message ||

                'Erreur lors de la suppression'

              );

              this.closeConfirmModal();

            }

          });

      }

    });

  }


  // ============================================================
  // FERMER CONFIRMATION
  // ============================================================

  closeConfirmModal(): void {

    this.confirmModal.set({

      show: false,

      message: '',

      onConfirm: () => {}

    });

  }


  // ============================================================
  // PAGINATION
  // ============================================================

  goToPage(page: number): void {

    this.currentPage.set(page);

  }


  prevPage(): void {

    if (
      this.currentPage() > 1
    ) {

      this.currentPage.update(

        p => p - 1

      );

    }

  }


  nextPage(): void {

    if (

      this.currentPage()
      <
      this.totalPages()

    ) {

      this.currentPage.update(

        p => p + 1

      );

    }

  }


  // ============================================================
  // NOTIFICATION
  // ============================================================

  showNotif(

    type: 'success' | 'error',

    message: string

  ): void {


    this.notification.set({

      show: true,

      type,

      message

    });


    setTimeout(() => {

      this.notification.set({

        show: false,

        type: 'success',

        message: ''

      });

    }, 4000);

  }


  // ============================================================
  // URL VIDEO
  // ============================================================

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


    const normalized =

      path.startsWith('/uploads/')

        ? path

        : `/uploads/${path}`;


    return (

      this.fileUrl.replace(/\/$/, '')

      +

      normalized

    );

  }


  // ============================================================
  // YOUTUBE
  // ============================================================

  isYoutube(video: Video): boolean {

    return !!video.youtubeUrl;

  }

}