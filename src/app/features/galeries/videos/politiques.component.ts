import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document, TypeDocument } from '../../../core/models';
import { ApiService } from '../../../core/services/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-politiques',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './politiques.component.html',
  styleUrls: ['./politiques.component.scss']
})
export class PolitiquesComponent {
private readonly API_URL = environment.FileUrl;

  selectedType = signal<string | null>(null); // null = tous les documents
allDocuments = signal<Document[]>([]); // tous les documents récupérés



projects = signal<TypeDocument[]>([]);
 documents = signal<Document[]>([]);
 loading = signal(true);
   searchQuery = '';
   pageSize = 5; // nombre de documents par page
currentPage = signal(1);
totalPages = signal(1);

   
   constructor(private apiService: ApiService, private http: HttpClient) {}
   
   ngOnInit(): void {
     this.loadDocuments(); this.loadProjects();
   }


   selectType(typeName: string) {
  if (this.selectedType() === typeName) {
    this.selectedType.set(null); // reclique = désélectionner
  } else {
    this.selectedType.set(typeName);
  }
  this.currentPage.set(1);

  // Refiltrer les documents
  this.filterDocuments();
}


filterDocuments() {
  const filtered = this.allDocuments().filter(doc =>
    !this.selectedType() || doc.typeName === this.selectedType()
  );
// Calcul du nombre total de pages
 this.totalPages.set(Math.ceil(filtered.length / this.pageSize));

  const start = (this.currentPage() - 1) * this.pageSize;
  const paginated = filtered.slice(start, start + this.pageSize);

  this.documents.set(paginated);
}


pages = computed(() => {
  return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
});


goToPage(page: number) {
  if (page < 1 || page > this.totalPages()) return;
  this.currentPage.set(page);
  this.filterDocuments();
}

nextPage() {
  this.goToPage(this.currentPage() + 1);
}

prevPage() {
  this.goToPage(this.currentPage() - 1);
}

   
   loadDocuments(): void {
     this.loading.set(true);
     this.apiService.getPublicDocuments(0, 20).subscribe({
       next: (response) => {
        if (response.success) {
        // Filtrer les documents pour ne garder que ceux de catégorie "DOCUMENT_SIMPLE"
        const filteredDocs = response.data.content.filter(
          (doc: Document) => doc.typeDocument === 'DOCUMENT POLITIQUE'
        );
        this.allDocuments.set(filteredDocs);
        this.filterDocuments();
      }
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

       
loadProjects(): void {
  

  this.apiService.getAllTypes().subscribe({
    next: (response) => {
      console.log("RESPONSE =", response); // 👈 ici le tableau

      this.projects.set(response); // ✅ DIRECTEMENT
      console.log("PROJECTS =", this.projects());

      
    },
    error: (err) => {
      console.error("Erreur API", err);
      
    }
  });
}

getImageUrl(path?: string): string | null {
     console.log(path);
    return path ? this.API_URL + path : null;
   
  }

  downloadFile(doc: any) {
  this.http.get(this.getImageUrl(doc.filePath)!, {
    responseType: 'blob'
  }).subscribe(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.title + '.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  });
}

}
