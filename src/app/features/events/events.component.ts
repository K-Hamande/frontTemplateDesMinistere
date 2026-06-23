import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Events } from '../../core/models/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-[#00843B] to-[#006B30] text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4" style="color: white;">Agenda des Événements</h1>
          <p class="text-xl text-emerald-100">Découvrez les événements organisés par le ministère</p>
        </div>
      </section>

      <!-- Filter Tabs -->
      <section class="py-6 bg-white shadow-sm">
        <div class="container mx-auto px-4">
          <div class="flex gap-4">

  <button
    (click)="filterByStatus('all')"
    [ngClass]="selectedStatus === 'all' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
    class="px-6 py-2 rounded-lg font-medium transition-colors"
    [style.background-color]="selectedStatus === 'all' ? '#006B30' : ''"
  >
    Tous
  </button>

  <button
    (click)="filterByStatus('UPCOMING')"
    [ngClass]="selectedStatus === 'UPCOMING' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
    class="px-6 py-2 rounded-lg font-medium transition-colors"
    [style.background-color]="selectedStatus === 'UPCOMING' ? '#006B30' : ''"
  >
    À venir
  </button>

  <button
    (click)="filterByStatus('ONGOING')"
    [ngClass]="selectedStatus === 'ONGOING' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
    class="px-6 py-2 rounded-lg font-medium transition-colors"
    [style.background-color]="selectedStatus === 'ONGOING' ? '#006B30' : ''"
  >
    En cours
  </button>

  <button
    (click)="filterByStatus('COMPLETED')"
    [ngClass]="selectedStatus === 'COMPLETED' ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
    class="px-6 py-2 rounded-lg font-medium transition-colors"
    [style.background-color]="selectedStatus === 'COMPLETED' ? '#006B30' : ''"
  >
    Passés
  </button>

</div>

        </div>
      </section>

      <!-- Events List -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          @if (loading()) {
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
              <p class="mt-4 text-gray-600">Chargement des événements...</p>
            </div>
          } @else if (filteredEvents().length === 0) {
            <div class="text-center py-12 bg-white rounded-xl shadow-sm">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p class="text-gray-500 text-lg">Aucun événement trouvé</p>
            </div>
          } @else {
            <div class="space-y-6">
              @for (event of filteredEvents(); track event.id) {
                <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div class="md:flex">
                    <!-- Date Badge -->
                    <div class="md:w-32 bg-emerald-600 text-white p-6 flex flex-col items-center justify-center text-center">
                      <span class="text-3xl font-bold">{{ getDay(event.startDate) }}</span>
                      <span class="text-sm uppercase">{{ getMonth(event.startDate) }}</span>
                      <span class="text-sm">{{ getYear(event.startDate) }}</span>
                    </div>
                    
                    <!-- Event Content -->
                    <div class="flex-1 p-6">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex-1">
                          <div class="flex items-center gap-2 mb-2">
                            <span [class]="getStatusClass(event.statut)" class="px-3 py-1 rounded-full text-xs font-medium">
                              {{ getStatusLabel(event.statut) }}
                            </span>
                            @if (event.isOnline) {
                              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                En ligne
                              </span>
                            }
                            @if (event.isFree) {
                              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                Gratuit
                              </span>
                            }
                          </div>
                          
                          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ event.title }}</h3>
                          <p class="text-gray-600 mb-4 line-clamp-2">{{ event.description }}</p>
                          
                          <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div class="flex items-center gap-1">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                              <span>{{ formatTime(event.startDate) }} - {{ formatTime(event.endDate) }}</span>
                            </div>
                            @if (event.location) {
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>{{ event.location }}</span>
                              </div>
                            }
                            @if (event.maxParticipants) {
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <span>{{ event.currentParticipants }}/{{ event.maxParticipants }} participants</span>
                              </div>
                            }
                          </div>
                        </div>
                        
                        @if (event.statut === 'UPCOMING') {
                          <button class="flex-shrink-0 bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                            S'inscrire
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class EventsComponent implements OnInit {
  events = signal<Events[]>([]);
  filteredEvents = signal<Events[]>([]);
  loading = signal(true);
  selectedStatus = 'all';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.loading.set(true);
    this.apiService.getPublicEvents().subscribe({
      next: (response) => {
       
          const eventsList = response.content || [];
          this.events.set(eventsList);
          this.filteredEvents.set(eventsList);
        
        this.loading.set(false);
      },
      error: () => {
        // Données de démonstration
        const mockEvents: Events[] = [
          {
            id: 1,
            title: "Forum National sur la Transformation Digitale",
            description: "Le ministère organise le forum national sur la transformation digitale du Burkina Faso. Cet événement réunira les acteurs clés du secteur numérique.",
            content: "",
            location: "Ouagadougou",
            address: "Centre International de Conférences de Ouaga 2000",
            startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            endDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000).toISOString(),
            registrationDeadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
            maxParticipants: 500,
            currentParticipants: 234,
            imageUrl: "",
            category: "Forum",
            statut: 'UPCOMING',
            isOnline: false,
            onlineUrl: "",
            isFree: true,
            price: 0,
            organizerName: "Memc",
            organizerEmail: "evenements@memc.gov.bf",
            organizerPhone: "+226 25 30 XX XX",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isPublic: true,
          },
          {
            id: 2,
            title: "Webinaire : Cybersécurité et Protection des Données",
            description: "Session de formation en ligne sur les bonnes pratiques de cybersécurité et la protection des données personnelles.",
            content: "",
            location: "",
            address: "",
            startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
            endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000).toISOString(),
            registrationDeadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
            maxParticipants: 200,
            currentParticipants: 156,
            imageUrl: "",
            category: "Webinaire",
            statut: 'UPCOMING',
            isOnline: true,
            onlineUrl: "https://zoom.us/j/xxxxx",
            isFree: true,
            price: 0,
            organizerName: "ANSSI",
            organizerEmail: "formation@anssi.bf",
            organizerPhone: "+226 25 30 XX XX",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isPublic: true,
          },
          {
            id: 3,
            title: "Atelier de Formation sur les Services Postaux Numériques",
            description: "Formation pratique sur la digitalisation des services postaux et l'intégration des solutions e-commerce.",
            content: "",
            location: "Bobo-Dioulasso",
            address: "Chambre de Commerce",
            startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
            registrationDeadline: "",
            maxParticipants: 50,
            currentParticipants: 50,
            imageUrl: "",
            category: "Atelier",
            statut: 'ONGOING',
            isOnline: false,
            onlineUrl: "",
            isFree: false,
            price: 25000,
            organizerName: "SONAPOST",
            organizerEmail: "formation@sonapost.bf",
            organizerPhone: "+226 25 30 XX XX",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isPublic: true,
          }
        ];
        this.events.set(mockEvents);
        this.filteredEvents.set(mockEvents);
        this.loading.set(false);
      }
    });
  }

  filterByStatus(status: string) {
    this.selectedStatus = status;
    if (status === 'all') {
      this.filteredEvents.set(this.events());
    } else {
      this.filteredEvents.set(this.events().filter(e => e.statut === status));
    }
  }

  getDay(dateStr: string): string {
    return new Date(dateStr).getDate().toString().padStart(2, '0');
  }

  getMonth(dateStr: string): string {
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    return months[new Date(dateStr).getMonth()];
  }

  getYear(dateStr: string): string {
    return new Date(dateStr).getFullYear().toString();
  }

  formatTime(dateStr: string): string {
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'UPCOMING': return 'bg-blue-100 text-blue-700';
      case 'ONGOING': return 'bg-green-100 text-green-700';
      case 'COMPLETED': return 'bg-gray-100 text-gray-700';
      case 'CANCELLED': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'UPCOMING': return 'À venir';
      case 'ONGOING': return 'En cours';
      case 'COMPLETED': return 'Terminé';
      case 'CANCELLED': return 'Annulé';
      default: return status;
    }
  }
}
