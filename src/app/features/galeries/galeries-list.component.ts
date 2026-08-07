import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Document } from '../../core/models';

@Component({
  selector: 'app-documents-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Ressources</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          Consultez et téléchargez les documents officiels du ministère.
        </p>
      </div>
    </section>
    
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="card mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" [(ngModel)]="searchQuery" (keyup.enter)="search()" placeholder="Rechercher un document..." class="input pl-10">
            </div>
            <button (click)="search()" class="btn-primary">Rechercher</button>
          </div>
        </div>
        
        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="card animate-pulse">
                <div class="h-12 w-12 bg-neutral-200 rounded-xl mb-4"></div>
                <div class="h-5 bg-neutral-200 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-1/2"></div>
              </div>
            }
          </div>
        } @else if (documents().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun document trouvé</h3>
          </div>
        } @else {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (doc of documents(); track doc.id) {
              <div class="card group hover:shadow-medium transition-shadow">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-neutral-900 truncate group-hover:text-primary-600 transition-colors">{{ doc.title }}</h3>
                    <p class="text-sm text-neutral-500 truncate">{{ doc.description }}</p>
                    <div class="flex items-center gap-3 mt-2 text-xs text-neutral-400">
                      <span class="badge-primary">{{ getCategoryLabel(doc.category) }}</span>
                      @if (doc.fileSize) {
                        <span>{{ formatFileSize(doc.fileSize) }}</span>
                      }
                    </div>
                  </div>
                </div>
                @if (doc.fileUrl) {
                  <a [href]="doc.fileUrl" target="_blank" class="btn-outline w-full mt-4 text-sm">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Télécharger
                  </a>
                }
              </div>
            }
          </div>
        }
      </div>
    </section>
      <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4 text-white">Ressources</h1>
        <p class="text-primary-100 text-lg max-w-2xl">
          Consultez et téléchargez les documents officiels du ministère.
        </p>
      </div>
    </section>
    
    <section class="py-12 bg-neutral-50">
      <div class="container mx-auto px-4">
        <div class="card mb-8">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative">
              <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" [(ngModel)]="searchQuery" (keyup.enter)="search()" placeholder="Rechercher un document..." class="input pl-10" >
            </div>
            <button (click)="search()" class="btn-primary" style="background-color: #006B30;">Rechercher</button>
          </div>
        </div>
        
        @if (loading()) {
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="card animate-pulse">
                <div class="h-12 w-12 bg-neutral-200 rounded-xl mb-4"></div>
                <div class="h-5 bg-neutral-200 rounded w-3/4 mb-2"></div>
                <div class="h-4 bg-neutral-200 rounded w-1/2"></div>
              </div>
            }
          </div>
        } @else if (documents().length === 0) {
          <div class="text-center py-16">
            <svg class="w-16 h-16 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <h3 class="text-lg font-medium text-neutral-700 mb-2">Aucun document trouvé</h3>
          </div>
        } @else {
          
          

            <div class="bg-white rounded-xl shadow p-4">
            
            @for (doc of documents(); track doc.id) {
                <div class="flex items-center justify-between py-3 border-b last:border-b-0">
            

                <!-- Icône PDF à gauche -->
                <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl">
                    <svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <!-- Corps du fichier en rouge -->
                        <path d="M6 2H14L18 6V20C18 21.1046 17.1046 22 16 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z" fill="#E53E3E"/>
                        <!-- Coin plissé en blanc -->
                        <path d="M14 2V6H18" fill="white"/>
                    </svg>
                    </div>
            

                <!-- Titre + catégorie + taille -->
                <div class="flex-1 px-4 min-w-0">
                    <h3 class="text-sm font-semibold text-neutral-900 truncate">{{ doc.title }}</h3>
                    <div class="flex items-center gap-2 mt-1 text-xs text-neutral-400">
                    <span class="badge-primary">{{ getCategoryLabel(doc.category) }}</span>
                    @if (doc.fileSize) {
                        <span>{{ formatFileSize(doc.fileSize) }}</span>
                    }
                    </div>
                </div>

                <!-- Bouton Télécharger -->
                @if (doc.filePath) {
                    <a [href]="doc.fileUrl" target="_blank"
                    class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm rounded-xl hover:bg-red-700 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    Télécharger
                    </a>
                }

                </div>
            }
            
            </div>


        }
      </div>
    </section>



    
  `
})
export class DocumentsListComponent implements OnInit {
  documents = signal<Document[]>([]);
  loading = signal(true);
  searchQuery = '';
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.loadDocuments();
  }
  
  loadDocuments(): void {
    this.loading.set(true);
    this.apiService.getPublicDocuments(0, 20).subscribe({
      next: (response) => {
        if (response.success) this.documents.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  
  search(): void {
    if (!this.searchQuery.trim()) { this.loadDocuments(); return; }
    this.loading.set(true);
    this.apiService.searchDocuments(this.searchQuery, 0, 20).subscribe({
      next: (response) => {
        if (response.success) this.documents.set(response.data.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = { 'RAPPORT': 'Rapport', 'LOI': 'Loi', 'DECRET': 'Décret', 'ARRETE': 'Arrêté', 'CIRCULAIRE': 'Circulaire', 'FORMULAIRE': 'Formulaire', 'GUIDE': 'Guide', 'AUTRE': 'Autre' };
    return labels[category] || category;
  }
  
  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }
}
