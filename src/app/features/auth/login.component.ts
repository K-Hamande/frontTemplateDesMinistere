import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `




<div class="min-h-screen flex items-center justify-center bg-gray-100">

  <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
    <div class="w-full max-w-md">

      <!-- Logo centré avec texte du Ministère -->
      <div class="flex justify-center mb-8">
        <a routerLink="/" class="flex items-center gap-3">
          <!-- Logo -->
          <div class="w-16 h-16 flex-shrink-0">
            <img
              src="assets/images/armoirie.png"
              alt="Logo MEMC"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Sigle du Ministère + Burkina Faso -->
          <div class="flex flex-col leading-tight justify-center">
            <span class="text-xl font-bold text-slate-900">MEMC</span>
            <span class="text-sm font-medium text-danger-500">Burkina Faso</span>
          </div>
        </a>
      </div>

      <div class="bg-white shadow-lg rounded-2xl p-8 border border-slate-200">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Connexion</h2>
          <p class="text-slate-500">Entrez vos identifiants pour accéder à votre compte</p>
        </div>

        <!-- Error Message -->
        <div *ngIf="error()" class="mb-4 p-4 bg-burkina-red-50 border border-burkina-red-200 rounded-xl flex items-start gap-3">
          <svg class="w-5 h-5 text-burkina-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div class="text-sm text-burkina-red-700">{{ error() }}</div>
        </div>

        <!-- Formulaire -->
        <form (ngSubmit)="onSubmit()" class="space-y-5">

          <!-- Nom d'utilisateur -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Nom d'utilisateur</label>
            <div class="relative mt-1">
              <input type="text" [(ngModel)]="username" name="username"
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 focus:outline-none focus:ring-2 focus:ring-[#006B30] focus:border-[#006B30]"
                    placeholder="Entrez votre nom d'utilisateur"
                    required autocomplete="username"/>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Mot de passe -->
          <div>
            <label class="block text-sm font-medium text-slate-700">Mot de passe</label>
            <div class="relative mt-1">
              <input [type]="showPassword() ? 'text' : 'password'" [(ngModel)]="password" name="password"
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 pl-11 pr-11 focus:outline-none focus:ring-2 focus:ring-[#006B30] focus:border-[#006B30]"
                    placeholder="Entrez votre mot de passe"
                    required autocomplete="current-password"/>
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <button type="button" (click)="showPassword.set(!showPassword())"
                      class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600">
                <svg *ngIf="showPassword()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242"/>
                </svg>
                <svg *ngIf="!showPassword()" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Bouton de connexion -->
          <button type="submit"
                  [disabled]="loading()"
                  class="w-full bg-[#006B30] text-white font-medium rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-[#005026] transition-colors">
            <svg *ngIf="loading()" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span *ngIf="!loading()">Se connecter</span>
            <span *ngIf="loading()">Connexion en cours...</span>
          </button>

        </form>

        <div class="mt-6 text-center text-sm text-slate-500 border-t border-slate-200 pt-6">
          Retour à <a routerLink="/" class="text-[#006B30] font-medium hover:text-[#005026]">la page d'accueil</a>
        </div>
      </div>

    </div>
  </div>

</div>

  `
})
export class LoginComponent {
  username = '';
  password = '';
  loading = signal(false);
  error = signal('');
  showPassword = signal(false);
  currentYear = new Date().getFullYear();
  
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}
  
  onSubmit(): void {
    if (!this.username || !this.password) {
      this.error.set('Veuillez remplir tous les champs');
      return;
    }
    
    this.loading.set(true);
    this.error.set('');
    
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        if (response.success) {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
          this.router.navigateByUrl(returnUrl);
        } else {
          this.error.set(response.message || 'Erreur de connexion');
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Identifiants incorrects');
        this.loading.set(false);
      }
    });
  }
}
