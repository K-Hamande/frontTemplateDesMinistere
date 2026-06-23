import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer  class="bg-slate-50 border-t border-slate-100" >
      <!-- Contenu principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- À propos -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <span class="font-semibold text-slate-800">Memc</span>
                <span class="text-danger-500 font-bold ml-1">Burkina Faso</span>
              </div>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">
              Ministère de la Transition Digitale, des Postes et des Communications Électroniques du Burkina Faso.
            </p>
          </div>
          
          <!-- Liens rapides -->
          <div>
            <h4 class="font-semibold text-slate-800 mb-4">Liens rapides</h4>
            <ul class="space-y-2">
              <li>
                <a routerLink="/" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Accueil</a>
              </li>
              <li>
                <a routerLink="/ministere/ministre" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Le Ministre</a>
              </li>
              <li>
                <a routerLink="/actualites" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Actualités</a>
              </li>
              <li>
                <a routerLink="/projets" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Projets et Programmes</a>
              </li>
              <li>
                <a routerLink="/documents" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Documents</a>
              </li>
              <li>
                <a routerLink="/contact" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <!-- Annuaire officiel -->
          <div>
            <h4 class="font-semibold text-slate-800 mb-4">Annuaire officiel</h4>
            <ul class="space-y-2">
              <li>
                <a href="https://www.presidence.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Présidence du Faso</a>
              </li>
              <li>
                <a href="https://www.gouvernement.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Gouvernement</a>
              </li>
              <li>
                <a href="https://www.an.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Assemblée Nationale</a>
              </li>
              <li>
                <a href="https://www.sig.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">SIG</a>
              </li>
              <li>
                <a href="https://www.anptic.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">ANPTIC</a>
              </li>
              <li>
                <a href="https://www.service-public.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Service Public</a>
              </li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div>
            <h4 class="font-semibold text-slate-800 mb-4">Contact</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-sm text-slate-600">Ouagadougou, Burkina Faso</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-sm text-slate-600">+226 25 30 XX XX</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-sm text-slate-600">contact&#64;Memc.gov.bf</span>
              </li>
            </ul>
            
            <!-- Réseaux sociaux -->
            <div class="flex items-center gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" class="w-9 h-9 bg-slate-200 hover:bg-primary-500 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" class="w-9 h-9 bg-slate-200 hover:bg-primary-500 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" class="w-9 h-9 bg-slate-200 hover:bg-primary-500 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" class="w-9 h-9 bg-slate-200 hover:bg-primary-500 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-slate-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-sm text-slate-500">
              © {{ currentYear }} Memc Burkina Faso. Tous droits réservés.
            </p>
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <a href="#" class="hover:text-primary-600 transition-colors">Mentions légales</a>
              <span>•</span>
              <a href="#" class="hover:text-primary-600 transition-colors">Politique de confidentialité</a>
              <span>•</span>
              <a href="#" class="hover:text-primary-600 transition-colors">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
