import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { FAQ } from '../../core/models/event.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4" style="color: white;">Foire Aux Questions</h1>
          <p class="text-xl text-emerald-100">Trouvez rapidement des réponses à vos questions</p>
        </div>
      </section>

      <!-- Search Section -->
      <section class="py-8 bg-white shadow-sm">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (input)="onSearch()"
                placeholder="Rechercher une question..."
                class="w-full px-6 py-4 pl-14 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
              />
              <svg class="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories -->
      <section class="py-6 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center gap-3">
            <!-- Bouton "Toutes les questions" -->
            <button
              (click)="filterByCategory('all')"
              [ngClass]="selectedCategory === 'all' ? 'bg-[#006B30] text-white border-[#006B30]' : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'"
              class="px-6 py-2 rounded-full font-medium transition-colors border"
            >
              Toutes les questions
            </button>

            <!-- Boutons des autres catégories -->
            @for (category of categories; track category) {
              <button
                (click)="filterByCategory(category)"
                [ngClass]="selectedCategory === category ? 'bg-[#006B30] text-white border-[#006B30]' : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'"
                class="px-6 py-2 rounded-full font-medium transition-colors border"
              >
                {{ category }}
              </button>
            }
          </div>

        </div>
      </section>

      <!-- FAQ List -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto space-y-4">
            @if (loading()) {
              <div class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">Chargement des questions...</p>
              </div>
            } @else if (filteredFaqs().length === 0) {
              <div class="text-center py-12 bg-white rounded-xl shadow-sm">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-gray-500 text-lg">Aucune question trouvée</p>
              </div>
            } @else {
              @for (faq of filteredFaqs(); track faq.id) {
                <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    (click)="toggleFaq(faq.id)"
                    class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div class="flex items-start gap-4">
                      <span class="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                        Q
                      </span>
                      <span class="font-medium text-gray-900">{{ faq.question }}</span>
                    </div>
                    <svg
                      [class]="expandedFaq === faq.id ? 'rotate-180' : ''"
                      class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  @if (expandedFaq === faq.id) {
                    <div class="px-6 pb-5 pt-2 border-t border-gray-100">
                      <div class="flex gap-4">
                        <span class="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm">
                          R
                        </span>
                        <div class="text-gray-600 leading-relaxed" [innerHTML]="faq.answer"></div>
                      </div>
                      <div class="mt-4 flex items-center gap-4 text-sm text-gray-400">
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                          </svg>
                          {{ faq.category }}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          {{ faq.viewCount }} vues
                        </span>
                      </div>
                    </div>
                  }
                </div>
              }
            }
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
            <p class="text-gray-600 mb-6">Notre équipe est disponible pour répondre à toutes vos questions.</p>
            <a
              routerLink="/contact" style="background-color: #006B30;"
              class="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class FAQComponent implements OnInit {
  faqs = signal<FAQ[]>([]);
  filteredFaqs = signal<FAQ[]>([]);
  loading = signal(true);
  searchQuery = '';
  selectedCategory = 'all';
  expandedFaq: number | null = null;
  categories: string[] = ['Services en ligne', 'Démarches administratives', 'Informations générales', 'Technique'];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadFAQs();
  }

  loadFAQs() {
    this.loading.set(true);
    this.apiService.getPublicFAQs().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.faqs.set(response.data);
          this.filteredFaqs.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => {
        // Données de démonstration
        const mockFaqs: FAQ[] = [
          {
            id: 1,
            question: "Comment puis-je accéder aux services en ligne du ministère ?",
            answer: "Pour accéder aux services en ligne, rendez-vous sur notre portail de services et créez un compte utilisateur. Une fois votre compte activé, vous pourrez effectuer vos démarches administratives en ligne.",
            category: "Services en ligne",
            displayOrder: 1,
            viewCount: 245,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 2,
            question: "Quels sont les documents nécessaires pour une demande d'agrément ?",
            answer: "Pour une demande d'agrément, vous devez fournir : une copie de votre pièce d'identité, un extrait de casier judiciaire de moins de 3 mois, les statuts de votre entreprise, et le formulaire de demande dûment rempli.",
            category: "Démarches administratives",
            displayOrder: 2,
            viewCount: 189,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 3,
            question: "Quel est le délai de traitement d'une demande ?",
            answer: "Le délai de traitement varie selon le type de demande. En général, comptez entre 5 et 15 jours ouvrables. Vous pouvez suivre l'état de votre demande en ligne via votre espace personnel.",
            category: "Démarches administratives",
            displayOrder: 3,
            viewCount: 312,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 4,
            question: "Comment contacter le service technique ?",
            answer: "Vous pouvez contacter notre service technique par email à support@memc.gov.bf ou par téléphone au +226 25 30 XX XX du lundi au vendredi de 8h à 17h.",
            category: "Technique",
            displayOrder: 4,
            viewCount: 156,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 5,
            question: "Quels sont les horaires d'ouverture du ministère ?",
            answer: "Le ministère est ouvert du lundi au vendredi de 7h30 à 12h30 et de 15h00 à 17h30. Les services d'accueil sont disponibles pendant ces horaires pour répondre à vos questions.",
            category: "Informations générales",
            displayOrder: 5,
            viewCount: 423,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];
        this.faqs.set(mockFaqs);
        this.filteredFaqs.set(mockFaqs);
        this.loading.set(false);
      }
    });
  }

  onSearch() {
    this.filterFaqs();
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filterFaqs();
  }

  filterFaqs() {
    let filtered = this.faqs();
    
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === this.selectedCategory);
    }
    
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }
    
    this.filteredFaqs.set(filtered);
  }

  toggleFaq(id: number) {
    this.expandedFaq = this.expandedFaq === id ? null : id;
  }
}
