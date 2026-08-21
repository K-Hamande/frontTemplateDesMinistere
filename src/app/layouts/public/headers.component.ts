 import { Component, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Header Principal - Design soft inspiré de petitions.gov.bf -->
    <header class="bg-white sticky top-0 z-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo et Nom du Ministère -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div class="hidden md:block">
              <span class="text-sm font-semibold text-slate-800">Memc</span>
              <span class="text-sm text-danger-500 font-bold ml-1">Burkina Faso</span> <span class="text-sm font-medium text-danger-500">
    Burkina Faso
  </span>
            </div>
          </a>
          
          <!-- Navigation Desktop -->
          <nav class="hidden lg:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="text-primary-600 bg-primary-50" [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Accueil
            </a>
            
            <!-- Menu Ministère -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center gap-1">
                Ministère
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-soft border border-slate-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a routerLink="/ministere/ministre" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Le Ministre
                </a>
                <a routerLink="/ministere/missions" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Missions
                </a>
                <a routerLink="/ministere/organigramme" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Organigramme
                </a>
                <a routerLink="/ministere/structures" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Structures Rattachées
                </a>
              </div>
            </div>
            
            <a routerLink="/actualites" routerLinkActive="text-primary-600 bg-primary-50"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Actualités
            </a>
            
            <a routerLink="/projets" routerLinkActive="text-primary-600 bg-primary-50"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Projets et Programmes
            </a>
            
            <a routerLink="/services" routerLinkActive="text-primary-600 bg-primary-50"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Services
            </a>
            
            <a routerLink="/evenements" routerLinkActive="text-primary-600 bg-primary-50"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Événements
            </a>
            
            <!-- Menu Ressources -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center gap-1">
                Ressources
                <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-soft border border-slate-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a routerLink="/documents" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Documents
                </a>
                <a routerLink="/faq" class="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  FAQ
                </a>
              </div>
            </div>
            
            <a routerLink="/contact" routerLinkActive="text-primary-600 bg-primary-50"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Contact
            </a>
          </nav>
          
          <!-- Actions -->
          <div class="flex items-center gap-2">
            <!-- Bouton Recherche -->
            <button (click)="toggleSearch()" class="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
            
            <!-- Bouton Administration -->
            <a routerLink="/admin" class="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors">
              Administration
            </a>
            
            <!-- Bouton Menu Mobile -->
            <button (click)="toggleMobileMenu()" class="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                @if (mobileMenuOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Menu Mobile -->
      @if (mobileMenuOpen()) {
        <div class="lg:hidden bg-white border-t border-slate-100">
          <nav class="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <a routerLink="/" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
              Accueil
            </a>
            
            <div>
              <button (click)="toggleSubmenu('ministere')" class="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                Ministère
                <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openSubmenu() === 'ministere'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              @if (openSubmenu() === 'ministere') {
                <div class="ml-4 mt-1 space-y-1">
                  <a routerLink="/ministere/ministre" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Le Ministre</a>
                  <a routerLink="/ministere/missions" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Missions</a>
                  <a routerLink="/ministere/organigramme" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Organigramme</a>
                  <a routerLink="/ministere/structures" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Structures Rattachées</a>
                </div>
              }
            </div>
            
            <a routerLink="/actualites" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Actualités</a>
            <a routerLink="/projets" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Projets et Programmes</a>
            <a routerLink="/services" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Services</a>
            <a routerLink="/evenements" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Événements</a>
            <a routerLink="/documents" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Documents</a>
            <a routerLink="/faq" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">FAQ</a>
            <a routerLink="/galeries" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Galeries</a>

            <a routerLink="/contact" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Contact</a>
            
            <div class="pt-2 border-t border-slate-100">
              <a routerLink="/admin" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 text-center transition-colors">
                Administration
              </a>
            </div>
          </nav>
        </div>
      }
      
      <!-- Barre de recherche -->
      @if (searchOpen()) {
        <div class="bg-slate-50 border-t border-slate-100 py-4">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative max-w-xl mx-auto">
              <input type="text" placeholder="Rechercher sur le site..." 
                     class="w-full px-4 py-2.5 pr-10 rounded-lg border border-slate-200 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all">
              <button class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-500 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  private authService = inject(AuthService);
  
  mobileMenuOpen = signal(false);
  searchOpen = signal(false);
  openSubmenu = signal<string | null>(null);
  
  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
    if (!this.mobileMenuOpen()) {
      this.openSubmenu.set(null);
    }
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    this.openSubmenu.set(null);
  }
  
  toggleSearch() {
    this.searchOpen.update(v => !v);
  }
  
  toggleSubmenu(menu: string) {
    this.openSubmenu.update(v => v === menu ? null : menu);
  }
  
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
      this.openSubmenu.set(null);
    }
  }
}
