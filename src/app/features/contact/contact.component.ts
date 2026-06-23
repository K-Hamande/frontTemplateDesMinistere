import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section - Light Design -->
    <section class="relative bg-gradient-to-br from-white via-burkina-green-50 to-slate-50 py-16 overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-burkina-green-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-burkina-yellow-100/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-burkina-green-100 rounded-full text-burkina-green text-sm font-medium mb-4 border border-burkina-green-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Contact
        </div>
        <h1 class="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">Contactez-nous</h1>
        <p class="text-slate-600 text-lg max-w-2xl">
          Vous avez une question ou une demande ? Notre équipe est à votre disposition pour vous répondre.
        </p>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <div class="card p-6 mb-6 bg-white">
              <h3 class="text-lg font-semibold text-slate-900 mb-6">Informations de contact</h3>
              <ul class="space-y-5">
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Adresse</p>
                    <p class="text-slate-500 text-sm mt-1">Avenue de l'Indépendance<br>Ouagadougou, Burkina Faso</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Téléphone</p>
                    <p class="text-slate-500 text-sm mt-1">+226 25 30 60 00</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Email</p>
                    <p class="text-slate-500 text-sm mt-1">contact&#64;Memc.gov.bf</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Horaires</p>
                    <p class="text-slate-500 text-sm mt-1">Lun - Ven: 7h30 - 12h30, 15h - 17h30</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <!-- Map placeholder -->
            <div class="card p-0 overflow-hidden bg-white">
              <div class="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="card p-8 bg-white">
              <h3 class="text-xl font-semibold text-slate-900 mb-6">Envoyez-nous un message</h3>
              
              @if (success()) {
                <div class="flex items-center gap-3 p-4 bg-burkina-green-50 border border-burkina-green-200 rounded-xl text-burkina-green-800 mb-6">
                  <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</span>
                </div>
              }
              
              @if (error()) {
                <div class="flex items-center gap-3 p-4 bg-burkina-red-50 border border-burkina-red-200 rounded-xl text-burkina-red-800 mb-6">
                  <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{{ error() }}</span>
                </div>
              }
              
              <form (ngSubmit)="onSubmit()" class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label for="name" class="input-label">Nom complet <span class="text-burkina-red">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      [(ngModel)]="form.name"
                      class="input"
                      placeholder="Votre nom"
                      required>
                  </div>
                  <div>
                    <label for="email" class="input-label">Email <span class="text-burkina-red">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      [(ngModel)]="form.email"
                      class="input"
                      placeholder="votre@email.com"
                      required>
                  </div>
                </div>
                
                <div>
                  <label for="phone" class="input-label">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    [(ngModel)]="form.phone"
                    class="input"
                    placeholder="+226 XX XX XX XX">
                </div>
                
                <div>
                  <label for="subject" class="input-label">Sujet <span class="text-burkina-red">*</span></label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    [(ngModel)]="form.subject"
                    class="input"
                    placeholder="Objet de votre message"
                    required>
                </div>
                
                <div>
                  <label for="message" class="input-label">Message <span class="text-burkina-red">*</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    [(ngModel)]="form.message"
                    rows="5"
                    class="textarea"
                    placeholder="Décrivez votre demande..."
                    required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  [disabled]="loading()"
                  class="btn-primary py-3 px-6">
                  @if (loading()) {
                    <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  } @else {
                    Envoyer le message
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  loading = signal(false);
  success = signal(false);
  error = signal('');
  
  constructor(private apiService: ApiService) {}
  
  onSubmit(): void {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.error.set('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    this.loading.set(true);
    this.error.set('');
    this.success.set(false);
    
    this.apiService.submitContact(this.form).subscribe({
      next: (response) => {
        if (response.success) {
          this.success.set(true);
          this.form = { name: '', email: '', phone: '', subject: '', message: '' };
        } else {
          this.error.set(response.message || 'Une erreur est survenue');
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Une erreur est survenue lors de l\'envoi');
        this.loading.set(false);
      }
    });
  }
}
