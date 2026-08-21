import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-slate-50">
      <!-- Header -->
      <header class="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div class="flex items-center justify-between h-16 px-4 lg:px-8">
          <!-- Left: Toggle & Logo -->
          <div class="flex items-center gap-4">
            <button (click)="sidebarOpen.set(!sidebarOpen())" class="p-2 rounded-lg hover:bg-slate-100 lg:hidden transition-colors">
              <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <a routerLink="/admin" class="flex items-center gap-3">
  <div class="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
    <img src="assets/images/armoirie.png" alt="Logo" class="w-full h-full object-contain">
  </div>
  <span class="font-semibold text-slate-800 hidden sm:block">Administration</span>
</a>


          </div>
          
          <!-- Right: User menu -->
          <div class="flex items-center gap-4">
            <a routerLink="/" class="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary-600 transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </a>
            
            <div class="relative">
              <button (click)="userMenuOpen.set(!userMenuOpen())" class="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <div class="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span class="text-primary-600 font-semibold text-sm">
                    {{ authService.currentUser()?.firstName?.charAt(0) || 'U' }}
                  </span>
                </div>
                <span class="hidden sm:block text-sm font-medium text-slate-700">
                  {{ authService.currentUser()?.firstName || 'Utilisateur' }}
                </span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              @if (userMenuOpen()) {
                <div class="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-soft border border-slate-100 py-1 z-50">
                  <a routerLink="/admin/profile" (click)="userMenuOpen.set(false)" class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Mon profil
                  </a>
                  <hr class="my-1 border-slate-100">
                  <button (click)="logout()" class="flex items-center gap-3 px-4 py-2 text-sm text-danger-600 hover:bg-slate-50 w-full">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    Déconnexion
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
      
      <div class="flex">
        <!-- Sidebar -->
        <aside 
          class="fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-100 transform transition-transform duration-300 lg:translate-x-0"
          [class.translate-x-0]="sidebarOpen()"
          [class.-translate-x-full]="!sidebarOpen()"
          style="top: 64px;">
          <nav class="p-4 space-y-1">
            <a routerLink="/admin/dashboard" routerLinkActive="bg-primary-50 text-primary-600 font-medium" [routerLinkActiveOptions]="{exact: true}" 
               class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Tableau de bord
            </a>
            
            <div class="pt-4">
              <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Contenu</p>
              <a routerLink="/admin/articles" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                Articles
              </a>


               <a routerLink="/admin/services" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                Services Publics
              </a>

              <a routerLink="/admin/agendas" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                Agendas
              </a>
              <a routerLink="/admin/projects" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Projets
              </a>
              <a routerLink="/admin/documents" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                Documents
              </a>

              <a routerLink="/admin/evenements" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                Evènements
              </a>

              <a routerLink="/admin/galeries" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                Galeries
              </a>
            </div>
            
            <div class="pt-4">
              <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Communication</p>
              <a routerLink="/admin/contacts" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                 class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Messages
              </a>
            </div>
            
            @if (authService.isAdmin()) {
              <div class="pt-4">
                <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Administration</p>
                <a routerLink="/admin/users" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  Utilisateurs
                </a>

                <a routerLink="/admin/types-documents" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Type Documents
                </a>

                <a routerLink="/admin/types-projets" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Type Projets
                </a>
              </div>


               <div class="pt-4">
                <p class="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Ministère</p>
                

                <a routerLink="/admin/ministère" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Ministère
                </a>

                <a routerLink="/admin/ministre" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Ministre
                </a>
                

                <a routerLink="/admin/organigramme" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Organigramme
                </a>

                
                <a routerLink="/admin/domains" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Domaines
                </a>

                 <a routerLink="/admin/structures" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Structures Rattachées
                </a>

                <a routerLink="/admin/missions" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Attributions
                </a>

                <a routerLink="/admin/etats" routerLinkActive="bg-primary-50 text-primary-600 font-medium" 
                   class="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                  Etats
                </a>


    
 
                
              </div>
            }
          </nav>
        </aside>
        
        <!-- Overlay for mobile -->
        @if (sidebarOpen()) {
          <div (click)="sidebarOpen.set(false)" class="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-30 lg:hidden" style="top: 64px;"></div>
        }
        
        <!-- Main content -->
        <main class="flex-1 p-4 lg:p-8 min-h-[calc(100vh-64px)]">
          <router-outlet />
        </main>
      </div>
    </div>
  `
})
export class AdminLayoutComponent {
  sidebarOpen = signal(false);
  userMenuOpen = signal(false);
  
  constructor(public authService: AuthService) {}
  
  logout(): void {
    this.userMenuOpen.set(false);
    this.authService.logout();
  }
}
