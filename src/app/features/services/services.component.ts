import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { EService } from '../../core/models/event.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4" style="color: white;">Nos Services</h1>
          <p class="text-xl text-emerald-100">Découvrez l'ensemble des services proposés par le ministère</p>
        </div>
      </section>

      <!-- Categories Filter -->
      <section class="py-6 bg-white shadow-sm sticky top-0 z-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-3">
  <!-- Bouton "Tous les services" -->
  <button
    (click)="filterByCategory('all')"
    [class]="selectedCategory === 'all' ? 'bg-[#006B30] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
    class="px-5 py-2 rounded-lg font-medium transition-colors"
  >
    Tous les services
  </button>

  <!-- Boutons des autres catégories -->
  @for (category of categories; track category) {
    <button
      (click)="filterByCategory(category)"
      [class]="selectedCategory === category ? 'bg-[#006B30] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
      class="px-5 py-2 rounded-lg font-medium transition-colors"
    >
      {{ category }}
    </button>
  }
</div>

        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          @if (loading()) {
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
              <p class="mt-4 text-gray-600">Chargement des services...</p>
            </div>
          } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (service of filteredServices(); track service.id) {
                <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div class="p-6">
                    <div class="flex items-start gap-4 mb-4">
                      <div class="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                        <svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          @switch (service.iconName || 'default') {
                            @case ('document') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            }
                            @case ('license') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            }
                            @case ('security') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            }
                            @case ('mail') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            }
                            @default {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            }
                          }
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="font-bold text-gray-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                          {{ service.name }}
                        </h3>
                        <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {{ service.category }}
                        </span>
                      </div>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                      {{ service.description }}
                    </p>
                    
                    <div class="space-y-2 mb-4">
                      @if (service.processingTime) {
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>Délai : {{ service.processingTime }}</span>
                        </div>
                      }
                      @if (service.cost !== null && service.cost !== undefined) {
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>{{ service.cost === 0 ? 'Gratuit' : service.cost + ' FCFA' }}</span>
                        </div>
                      }
                    </div>
                    
                    <div class="flex items-center gap-2 pt-4 border-t border-gray-100">
                      @if (service.isOnline && service.onlineUrl) {
                        <a
                          [href]="service.onlineUrl"
                          target="_blank"
                          class="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          Accéder en ligne
                        </a>
                      }
                      <button
                        (click)="showServiceDetails(service)"
                        class="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </section>

      <!-- Service Detail Modal -->
      @if (selectedService) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" (click)="closeModal()">
          <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" (click)="$event.stopPropagation()">
            <div class="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 class="text-xl font-bold text-gray-900">{{ selectedService.name }}</h2>
              <button (click)="closeModal()" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="p-6 space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Description</h3>
                <p class="text-gray-600">{{ selectedService.description }}</p>
              </div>
              
              @if (selectedService.requiredDocuments && selectedService.requiredDocuments.length > 0) {
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Documents requis</h3>
                  <ul class="space-y-2">
                    @for (doc of selectedService.requiredDocuments; track doc) {
                      <li class="flex items-start gap-2 text-gray-600">
                        <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {{ doc }}
                      </li>
                    }
                  </ul>
                </div>
              }
              
              @if (selectedService.procedureSteps) {
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Procédure</h3>
                  <p class="text-gray-600 whitespace-pre-line">{{ selectedService.procedureSteps }}</p>
                </div>
              }
              
              <div class="grid grid-cols-2 gap-4">
                @if (selectedService.processingTime) {
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Délai de traitement</p>
                    <p class="font-semibold text-gray-900">{{ selectedService.processingTime }}</p>
                  </div>
                }
                @if (selectedService.cost !== null && selectedService.cost !== undefined) {
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Coût</p>
                    <p class="font-semibold text-gray-900">{{ selectedService.cost === 0 ? 'Gratuit' : selectedService.cost + ' FCFA' }}</p>
                  </div>
                }
              </div>
              
              @if (selectedService.contactEmail || selectedService.contactPhone) {
                <div class="bg-emerald-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-emerald-900 mb-2">Contact</h3>
                  <div class="space-y-1 text-emerald-800">
                    @if (selectedService.contactEmail) {
                      <p>Email : {{ selectedService.contactEmail }}</p>
                    }
                    @if (selectedService.contactPhone) {
                      <p>Téléphone : {{ selectedService.contactPhone }}</p>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class ServicesComponent implements OnInit {
  services = signal<EService[]>([]);
  filteredServices = signal<EService[]>([]);
  loading = signal(true);
  selectedCategory = 'all';
  selectedService: EService | null = null;
  categories: string[] = ['Agrément technique', 'Licences Télécom', 'Cybersécurité', 'Services Postaux'];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.loading.set(true);
    this.apiService.getPublicServices().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const servicesList = response.data.content || [];
          this.services.set(servicesList);
          this.filteredServices.set(servicesList);
        }
        this.loading.set(false);
      },
      error: () => {
        // Données de démonstration
        const mockServices: EService[] = [
          {
            id: 1,
            name: "Demande d'agrément technique",
            description: "Procédure de demande d'agrément technique pour les entreprises du secteur des TIC souhaitant exercer au Burkina Faso.",
            category: "Agrément technique",
            subcategory: "",
            targetAudience: "ENTREPRISES",
            cost: 50000,
            costDetails: "Frais de dossier",
            processingTime: "15 jours ouvrables",
            accessConditions: "Entreprise légalement constituée",
            requiredDocuments: ["Copie des statuts", "Registre de commerce", "Attestation fiscale", "Plan d'affaires"],
            procedureSteps: "1. Dépôt du dossier\\n2. Vérification des documents\\n3. Étude technique\\n4. Décision",
            onlineUrl: "https://services.Memc.gov.bf/agrement",
            physicalAddress: "Ministère TDPCE, Ouagadougou",
            contactEmail: "agrement@Memc.gov.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "document",
            isOnline: true,
            isActive: true,
            displayOrder: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 2,
            name: "Licence d'opérateur télécom",
            description: "Attribution de licences pour l'exploitation de réseaux et services de télécommunications.",
            category: "Licences Télécom",
            subcategory: "",
            targetAudience: "ENTREPRISES",
            cost: 500000,
            costDetails: "Frais de licence",
            processingTime: "30 jours ouvrables",
            accessConditions: "Capital minimum requis",
            requiredDocuments: ["Dossier technique", "Plan de couverture", "Garantie financière"],
            procedureSteps: "1. Soumission du dossier\\n2. Évaluation technique\\n3. Commission d'attribution\\n4. Signature de la convention",
            onlineUrl: "",
            physicalAddress: "ARCEP, Ouagadougou",
            contactEmail: "licences@arcep.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "license",
            isOnline: false,
            isActive: true,
            displayOrder: 2,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 3,
            name: "Certification cybersécurité",
            description: "Certification des systèmes d'information et audit de sécurité pour les organisations.",
            category: "Cybersécurité",
            subcategory: "",
            targetAudience: "BOTH",
            cost: 100000,
            costDetails: "Selon la taille de l'organisation",
            processingTime: "20 jours ouvrables",
            accessConditions: "",
            requiredDocuments: ["Documentation technique", "Politique de sécurité", "Rapport d'audit interne"],
            procedureSteps: "1. Demande de certification\\n2. Audit sur site\\n3. Rapport d'évaluation\\n4. Délivrance du certificat",
            onlineUrl: "https://anssi.bf/certification",
            physicalAddress: "ANSSI, Ouagadougou",
            contactEmail: "certification@anssi.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "security",
            isOnline: true,
            isActive: true,
            displayOrder: 3,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: 4,
            name: "Autorisation d'exploitation postale",
            description: "Autorisation pour l'exploitation de services postaux et de courrier express.",
            category: "Services Postaux",
            subcategory: "",
            targetAudience: "ENTREPRISES",
            cost: 75000,
            costDetails: "Frais d'autorisation",
            processingTime: "10 jours ouvrables",
            accessConditions: "Entreprise de droit burkinabè",
            requiredDocuments: ["Statuts de l'entreprise", "Plan d'exploitation", "Garantie de service"],
            procedureSteps: "1. Dépôt de la demande\\n2. Étude du dossier\\n3. Visite des locaux\\n4. Délivrance de l'autorisation",
            onlineUrl: "",
            physicalAddress: "ARCE, Ouagadougou",
            contactEmail: "postal@arce.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "mail",
            isOnline: false,
            isActive: true,
            displayOrder: 4,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];
        this.services.set(mockServices);
        this.filteredServices.set(mockServices);
        this.loading.set(false);
      }
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredServices.set(this.services());
    } else {
      this.filteredServices.set(this.services().filter(s => s.category === category));
    }
  }

  showServiceDetails(service: EService) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }
}
