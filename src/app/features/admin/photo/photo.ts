import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from '../../../core/services/api.service';
import { Photo } from '../../../core/models/event.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './photo.html'
})
export class PhotoComponent implements OnInit {

  // ─────────────────────────────────────────────
  // URL des fichiers
  // ─────────────────────────────────────────────

  fileUrl =
    (environment as any).fileUrl ||
    (environment as any).FileUrl ||
    'http://localhost:8096';


  // ─────────────────────────────────────────────
  // Liste
  // ─────────────────────────────────────────────

  photos = signal<Photo[]>([]);

  loading = signal(true);

  saving = signal(false);


  // ─────────────────────────────────────────────
  // Modal
  // ─────────────────────────────────────────────

  showModal = signal(false);

  editingPhoto = signal<Photo | null>(null);


  // ─────────────────────────────────────────────
  // Formulaire
  // ─────────────────────────────────────────────

  selectedFile: File | null = null;

  preview: string | null = null;


  // ─────────────────────────────────────────────
  // Pagination
  // ─────────────────────────────────────────────

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


  // ─────────────────────────────────────────────
  // Notification
  // ─────────────────────────────────────────────

  notification = signal<{
    show: boolean;
    type: string;
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });


  // ─────────────────────────────────────────────
  // Confirmation suppression
  // ─────────────────────────────────────────────

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


  ngOnInit(): void {

    this.loadPhotos();

  }


  // ─────────────────────────────────────────────
  // Chargement des photos
  // ─────────────────────────────────────────────

  loadPhotos(): void {

    this.loading.set(true);

    this.apiService.getAllPhotos().subscribe({

      next: (res: any) => {

        if (
          res.success &&
          res.data
        ) {

          this.photos.set(res.data);

          this.totalItems.set(
            res.data.length
          );

        }

        this.loading.set(false);

      },

      error: (err) => {

        console.error(
          'Erreur chargement photos :',
          err
        );

        this.showNotif(
          'error',
          'Erreur lors du chargement des photos'
        );

        this.loading.set(false);

      }

    });

  }


  // ─────────────────────────────────────────────
  // Ouvrir la modal pour ajouter
  // ─────────────────────────────────────────────

  openModal(): void {

    this.editingPhoto.set(null);

    this.selectedFile = null;

    this.preview = null;

    this.showModal.set(true);

  }


  // ─────────────────────────────────────────────
  // Ouvrir la modal pour modifier
  // ─────────────────────────────────────────────

  editPhoto(photo: Photo): void {

    this.editingPhoto.set(photo);

    this.selectedFile = null;

    this.preview = this.getImageUrl(
      photo.imageUrl
    );

    this.showModal.set(true);

  }


  // ─────────────────────────────────────────────
  // Fermer la modal
  // ─────────────────────────────────────────────

  closeModal(): void {

    this.showModal.set(false);

    this.editingPhoto.set(null);

    this.selectedFile = null;

    this.preview = null;

  }


  // ─────────────────────────────────────────────
  // Sélection de l'image
  // ─────────────────────────────────────────────

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (
      input.files &&
      input.files.length > 0
    ) {

      this.selectedFile =
        input.files[0];

      const reader =
        new FileReader();

      reader.onload = () => {

        this.preview =
          reader.result as string;

      };

      reader.readAsDataURL(
        this.selectedFile
      );

    }

  }


  // ─────────────────────────────────────────────
  // Enregistrer une photo
  // ─────────────────────────────────────────────

  savePhoto(): void {

  const editing = this.editingPhoto();

  // En création, l'image est obligatoire
  if (!editing && !this.selectedFile) {

    this.showNotif(
      'error',
      'Veuillez sélectionner une image.'
    );

    return;

  }

  this.saving.set(true);

  const formData = new FormData();


  // Objet PhotoDTO
  const photoData: Photo = {

    id: editing?.id,

    imageUrl: editing?.imageUrl || ''

  };


  formData.append(

    'photo',

    new Blob(

      [
        JSON.stringify(photoData)

      ],

      {
        type: 'application/json'
      }

    )

  );


  // Nouveau fichier image
  if (this.selectedFile) {

    formData.append(

      'file',

      this.selectedFile,

      this.selectedFile.name

    );

  }


  // Modification
  if (editing) {

    this.apiService
      .updatePhoto(
        editing.id!,
        formData
      )
      .subscribe({

        next: (res: any) => {

          if (res?.success === false) {

            this.showNotif(

              'error',

              res.message ||
              'Erreur lors de la modification.'

            );

            this.saving.set(false);

            return;

          }


          this.showNotif(

            'success',

            'Photo modifiée avec succès.'

          );

          this.closeModal();

          this.loadPhotos();

          this.saving.set(false);

        },

        error: (err) => {

          console.error(

            'Erreur modification photo :',

            err

          );

          this.showNotif(

            'error',

            err?.error?.message ||

            'Erreur lors de la modification.'

          );

          this.saving.set(false);

        }

      });

    return;

  }


  // Création
  this.apiService
    .createPhoto(formData)
    .subscribe({

      next: () => {

        this.showNotif(

          'success',

          'Photo ajoutée avec succès.'

        );

        this.closeModal();

        this.loadPhotos();

        this.saving.set(false);

      },

      error: (err) => {

        console.error(

          'Erreur création photo :',

          err

        );

        this.showNotif(

          'error',

          err?.error?.message ||

          'Erreur lors de l’ajout de la photo.'

        );

        this.saving.set(false);

      }

    });

  }


  // ─────────────────────────────────────────────
  // Suppression
  // ─────────────────────────────────────────────

  deletePhoto(photo: Photo): void {

    this.confirmModal.set({

      show: true,

      message:
        'Voulez-vous vraiment supprimer cette photo ?',

      onConfirm: () => {

        this.apiService
          .deletePhoto(photo.id!)
          .subscribe({

            next: () => {

              this.showNotif(
                'success',
                'Photo supprimée avec succès'
              );

              this.closeConfirmModal();

              this.loadPhotos();

            },

            error: () => {

              this.showNotif(
                'error',
                'Erreur lors de la suppression'
              );

              this.closeConfirmModal();

            }

          });

      }

    });

  }


  closeConfirmModal(): void {

    this.confirmModal.set({

      show: false,

      message: '',

      onConfirm: () => {}

    });

  }


  // ─────────────────────────────────────────────
  // Pagination
  // ─────────────────────────────────────────────

  goToPage(page: number): void {

    this.currentPage.set(page);

  }


  prevPage(): void {

    if (
      this.currentPage() > 1
    ) {

      this.currentPage.update(
        page => page - 1
      );

    }

  }


  nextPage(): void {

    if (
      this.currentPage() <
      this.totalPages()
    ) {

      this.currentPage.update(
        page => page + 1
      );

    }

  }


  // ─────────────────────────────────────────────
  // Notification
  // ─────────────────────────────────────────────

  showNotif(
    type: string,
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

        type: '',

        message: ''

      });

    }, 4000);

  }

// ─────────────────────────────────────────────
// URL de l'image
// ─────────────────────────────────────────────

getImageUrl(path?: string): string {

  if (!path) {

    return 'assets/images/no-image.png';

  }

  // Si l'URL est déjà complète
  if (
    path.startsWith('http://') ||
    path.startsWith('https://')
  ) {

    return path;

  }

  // Évite de doubler /uploads/
  const cleanPath =
    path.startsWith('/uploads/')
      ? path
      : `/uploads/${path}`;

  return `${
    this.fileUrl.replace(/\/$/, '')
  }${cleanPath}`;

}

}