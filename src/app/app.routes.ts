import { Routes } from '@angular/router';
import { authGuard, adminGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Public routes with layout
  {
    path: '',
    loadComponent: () => import('./layouts/public/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent) },
      { path: 'actualites', loadComponent: () => import('./features/articles/articles/articles.component').then(m => m.ArticlesComponent) },
      { path: 'actualites/:id', loadComponent: () => import('./features/articles/detail-articles/detail-articles.component').then(m => m.DetailArticlesComponent) },
      { path: 'projets', loadComponent: () => import('./features/projects/projets/projets.component').then(m => m.ProjetsComponent) },
      { path: 'projets/:id', loadComponent: () => import('./features/projects/detail-projets/detail-projets.component').then(m => m.DetailProjetsComponent) },
      { path: 'ressources/documents', loadComponent: () => import('./features/documents/documents/documents.component').then(m => m.DocumentsComponent) },
      { path: 'ressources/galeries', loadComponent: () => import('./features/galeries/photos/photos.component').then(m => m.PhotosComponent) },
      { path: 'ressources/galeries', loadComponent: () => import('./features/galeries/videos/videos.component').then(m => m.VideosComponent) },
      { path: 'contact', loadComponent: () => import('./features/contact/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'ministere/ministre', loadComponent: () => import('./features/ministere/ministre/ministre.component').then(m => m.MinistreComponent) },
      { path: 'ministere/missions', loadComponent: () => import('./features/ministere/mission/mission.component').then(m => m.MissionComponent) },
      { path: 'ministere/organigramme', loadComponent: () => import('./features/ministere/organigramme/organigramme.component').then(m => m.OrganigrammeComponent) },
      { path: 'ministere/structures', loadComponent: () => import('./features/ministere/structurerattaches/structurerattaches.component').then(m => m.StructurerattachesComponent) },
      { path: 'faq', loadComponent: () => import('./features/faq/faq.component').then(m => m.FAQComponent) },
      { path: 'services', loadComponent: () => import('./features/services/service/service.component').then(m => m.ServiceComponent) },
      { path: 'evenements', loadComponent: () => import('./features/events/evenements/evenements.component').then(m => m.EvenementsComponent) },
      { path: 'agendas', loadComponent: () => import('./features/agendas/agendas.component').then(m => m.AgendasComponent) },
      { path: 'agendas/:id', loadComponent: () => import('./features/agendas/detail-agenda/detail-agenda.component').then(m => m.DetailAgendaComponent) },
      { path: 'communiques', loadComponent: () => import('./features/communiques/communiques.component').then(m => m.CommuniquesComponent) },

    
      // Redirections pour compatibilité
      { path: 'articles', redirectTo: 'actualites', pathMatch: 'full' },
      
      { path: 'articles/:id', redirectTo: 'actualites/:id', pathMatch: 'full' },
      { path: 'projects', redirectTo: 'projets', pathMatch: 'full' },
      { path: 'projects/:id', redirectTo: 'projets/:id', pathMatch: 'full' },
      { path: 'documents', redirectTo: 'ressources/documents', pathMatch: 'full' },
       { path: 'politiques', redirectTo: 'ressources/politiques', pathMatch: 'full' },
       { path: 'services', redirectTo: 'services', pathMatch: 'full' },
     
    ]
  },
  
  // Auth routes (no layout)
  { 
    path: 'auth/login', 
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent),
    canActivate: [guestGuard]
  },
  
  // Admin routes
  {
    path: 'admin',  
    loadComponent: () => import('./layouts/admin/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [adminGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./features/admin/dashboard/dashbord/dashbord.component').then(m => m.DashbordComponent) },
      { path: 'articlest', loadComponent: () => import('./features/admin/articles/admin-articles.component').then(m => m.AdminArticlesComponent) },
      { path: 'project', loadComponent: () => import('./features/admin/projects/admin-projects.component').then(m => m.AdminProjectsComponent) },
      { path: 'projects', loadComponent: () => import('./features/admin/projet/projet.component').then(m => m.ProjetComponent) },
      { path: 'documentst', loadComponent: () => import('./features/admin/documents/admin-documents.component').then(m => m.AdminDocumentsComponent) },
      { path: 'contacts', loadComponent: () => import('./features/admin/contacts/contacts/contacts.component').then(m => m.ContactsComponent) },
      { path: 'users', loadComponent: () => import('./features/admin/users/users/users.component').then(m => m.UsersComponent) },
      { path: 'articles', loadComponent: () => import('./features/admin/article/article.component').then(m => m.ArticleComponent) },
      { path: 'Articles/:id', loadComponent: () => import('./features/admin/article/detail-article/detail-article.component').then(m => m.DetailArticleComponent) },
      { path: 'documents', loadComponent: () => import('./features/admin/documents/documents/documents.component').then(m => m.DocumentsComponent) },
      { path: 'types', loadComponent: () => import('./features/admin/types/types.component').then(m => m.TypesComponent) },
      { path: 'types-projets', loadComponent: () => import('./features/admin/projet/types/types.component').then(m => m.TypesComponent) },
     { path: 'agendas', loadComponent: () => import('./features/admin/article/agenda/agenda.component').then(m => m.AgendaComponent) },
     { path: 'services', loadComponent: () => import('./features/admin/services/services.component').then(m => m.ServicesComponent) },
     { path: 'evenements', loadComponent: () => import('./features/admin/evenements/evenements.component').then(m => m.EvenementsComponent) },
     { path: 'ministère', loadComponent: () => import('./features/admin/ministere/ministere.component').then(m => m.MinistereComponent) },
     { path: 'organigramme', loadComponent: () => import('./features/admin/organigramme/organigramme.component').then(m => m.OrganigrammeComponent) },
     { path: 'missions', loadComponent: () => import('./features/admin/mission/mission.component').then(m => m.MissionComponent) },
     { path: 'domains', loadComponent: () => import('./features/admin/domains/domains.component').then(m => m.DomainsComponent) },
     { path: 'ministre', loadComponent: () => import('./features/admin/ministere/ministre/ministre.component').then(m => m.MinistreComponent) },
     { path: 'etats', loadComponent: () => import('./features/admin/ministere/etats/etats.component').then(m => m.EtatsComponent) },
     { path: 'structures', loadComponent: () => import('./features/admin/structure-rattaches/structure-rattaches.component').then(m => m.StructureRattachesComponent) },
     { path: 'galeries', loadComponent: () => import('./features/admin/galeries/galeries.component').then(m => m.GaleriesComponent) },
    


     
    ]
  },
  
  // Fallback
  { path: '**', redirectTo: '' }
];
