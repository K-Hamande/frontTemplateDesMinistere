import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/services/api.service';
import { Document, DocumentCategory } from '../../../core/models';

@Component({
  selector: 'app-admin-documents',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-2xl font-bold text-neutral-900">Documents</h1>
          <p class="text-neutral-500">Gérez les ressources documentaires</p>
        </div>
        <button (click)="openModal()" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Nouveau document
        </button>
      </div>
      
      <div class="card p-0">
        @if (loading()) {
          <div class="p-8 text-center"><div class="spinner w-8 h-8 mx-auto"></div></div>
        } @else if (documents().length === 0) {
          <div class="p-8 text-center">
            <svg class="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <p class="text-neutral-500">Aucun document pour le moment</p>
          </div>
        } @else {
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Catégorie</th>
                  <th>Public</th>
                  <th>Date</th>
                  <th class="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                @for (doc of documents(); track doc.id) {
                  <tr>
                    <td>
                      <div class="max-w-xs">
                        <p class="font-medium text-neutral-900 truncate">{{ doc.title }}</p>
                        <p class="text-xs text-neutral-400 truncate">{{ doc.description }}</p>
                      </div>
                    </td>
                    <td><span class="badge-primary">{{ getCategoryLabel(doc.category) }}</span></td>
                    <td>
                      @if (doc.isPublic) {
                        <span class="badge-success">Oui</span>
                      } @else {
                        <span class="badge bg-neutral-100 text-neutral-600">Non</span>
                      }
                    </td>
                    <td class="text-sm text-neutral-500">{{ formatDate(doc.createdAt) }}</td>
                    <td class="text-right">
                      <div class="flex justify-end gap-2">
                        <button (click)="editDocument(doc)" class="btn-ghost p-2" title="Modifier">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                        <button (click)="deleteDocument(doc)" class="btn-ghost p-2 text-secondary-500" title="Supprimer">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
      
      @if (showModal()) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div class="p-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900">{{ editingDocument() ? 'Modifier le document' : 'Nouveau document' }}</h2>
            </div>
            <form (ngSubmit)="saveDocument()" class="p-6 space-y-5">
              <div>
                <label class="label">Titre <span class="text-secondary-500">*</span></label>
                <input type="text" [(ngModel)]="form.title" name="title" class="input" required>
              </div>
              <div>
                <label class="label">Description</label>
                <textarea [(ngModel)]="form.description" name="description" rows="2" class="input resize-none"></textarea>
              </div>
              <div>
                <label class="label">Catégorie</label>
                <select [(ngModel)]="form.category" name="category" class="input">
                  <option value="RAPPORT">Rapport</option>
                  <option value="LOI">Loi</option>
                  <option value="DECRET">Décret</option>
                  <option value="ARRETE">Arrêté</option>
                  <option value="CIRCULAIRE">Circulaire</option>
                  <option value="FORMULAIRE">Formulaire</option>
                  <option value="GUIDE">Guide</option>
                  <option value="AUTRE">Autre</option>
                </select>
              </div>
              <div>
                <label class="label">URL du fichier</label>
                <input type="url" [(ngModel)]="form.fileUrl" name="fileUrl" class="input" placeholder="https://...">
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" [(ngModel)]="form.isPublic" name="isPublic" id="isPublic" class="rounded border-neutral-300 text-primary-500 focus:ring-primary-500">
                <label for="isPublic" class="text-sm text-neutral-700">Document public</label>
              </div>
              <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
                <button type="button" (click)="closeModal()" class="btn-ghost">Annuler</button>
                <button type="submit" [disabled]="saving()" class="btn-primary">
                  @if (saving()) { <div class="spinner w-4 h-4 mr-2"></div> }
                  {{ editingDocument() ? 'Mettre à jour' : 'Créer' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  `
})
export class AdminDocumentsComponent implements OnInit {
  documents = signal<Document[]>([]);
  loading = signal(true);
  showModal = signal(false);
  editingDocument = signal<Document | null>(null);
  saving = signal(false);
  
  form: { title: string; description: string; category: DocumentCategory; fileUrl: string; isPublic: boolean } = { title: '', description: '', category: DocumentCategory.RAPPORT, fileUrl: '', isPublic: true };
  
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void { this.loadDocuments(); }
  
  loadDocuments(): void {
    this.apiService.getAllDocuments(0, 50).subscribe({
      next: (response) => { if (response.success) this.documents.set(response.data.content); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
  
  openModal(): void { this.form = { title: '', description: '', category: DocumentCategory.RAPPORT, fileUrl: '', isPublic: true }; this.editingDocument.set(null); this.showModal.set(true); }
  closeModal(): void { this.showModal.set(false); this.editingDocument.set(null); }
  
  editDocument(doc: Document): void {
    this.form = { title: doc.title, description: doc.description || '', category: doc.category, fileUrl: doc.fileUrl || '', isPublic: doc.isPublic };
    this.editingDocument.set(doc);
    this.showModal.set(true);
  }
  
  saveDocument(): void {
    if (!this.form.title) return;
    this.saving.set(true);
    const editing = this.editingDocument();
    const request = editing ? this.apiService.updateDocument1(editing.id, this.form) : this.apiService.createDocument1(this.form);
    request.subscribe({
      next: (response) => { if (response.success) { this.loadDocuments(); this.closeModal(); } this.saving.set(false); },
      error: () => this.saving.set(false)
    });
  }
  
  deleteDocument(doc: Document): void {
    if (confirm(`Supprimer le document "${doc.title}" ?`)) {
      this.apiService.deleteDocument(doc.id).subscribe({ next: () => this.loadDocuments() });
    }
  }
  
  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = { 'RAPPORT': 'Rapport', 'LOI': 'Loi', 'DECRET': 'Décret', 'ARRETE': 'Arrêté', 'CIRCULAIRE': 'Circulaire', 'FORMULAIRE': 'Formulaire', 'GUIDE': 'Guide', 'AUTRE': 'Autre' };
    return labels[category] || category;
  }
  
  formatDate(dateStr: string): string { return dateStr ? new Date(dateStr).toLocaleDateString('fr-FR') : ''; }
}
