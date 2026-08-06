import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Page, Article, Project, Document, Contact, DashboardStats, User, TypeDocument, Agenda, Service } from '../models';
import { Events, FlashInfo, EService, FAQ, NewsletterSubscription, Structure, Ministere } from '../models/event.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}



  //Projets

  // Admin projects
  getAllService(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Service>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Service>>>(`${this.API_URL}/services`, { params });
  }

getAllServicepublic(): Observable<ApiResponse<Page<Service>>> {
  return this.http.get<ApiResponse<Page<Service>>>(`${this.API_URL}/services`);
}
 


  getServicesById(id: number): Observable<ApiResponse<Service>> {
    return this.http.get<ApiResponse<Service>>(`${this.API_URL}/services/${id}`);
  }

 

   createServices(formData: FormData): Observable<ApiResponse<Service>> {
    return this.http.post<ApiResponse<Service>>(
      `${this.API_URL}/services`,
      formData
    );
  }

  updateServices(id: number, formData: FormData): Observable<ApiResponse<Service>> {
    return this.http.put<ApiResponse<Service>>(
      `${this.API_URL}/services/${id}`,
      formData
    );
  }



  deleteServices(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/services/${id}`);
  }

  // ============ PUBLIC Agndas ============
  getAllAgendas(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Agenda>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Agenda>>>(`${this.API_URL}/agendas`, { params });
  }

 


  getAgendasById(id: number): Observable<ApiResponse<Agenda>> {
    return this.http.get<ApiResponse<Agenda>>(`${this.API_URL}/agendas/${id}`);
  }

 

   createAgendas(formData: FormData): Observable<ApiResponse<Agenda>> {
    return this.http.post<ApiResponse<Agenda>>(
      `${this.API_URL}/agendas`,
      formData
    );
  }

  updateAgendas(id: number, formData: FormData): Observable<ApiResponse<Agenda>> {
    return this.http.put<ApiResponse<Agenda>>(
      `${this.API_URL}/agendas/${id}`,
      formData
    );
  }



  deleteAgendas(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/agendas/${id}`);
  }

getPublishedAgendasLatest(): Observable<ApiResponse<Agenda[]>> {
  return this.http.get<ApiResponse<Agenda[]>>(`${this.API_URL}/agendas/published/latest`);
}


  getPublishedAgendaeById(id: number): Observable<ApiResponse<Agenda>> {
    return this.http.get<ApiResponse<Agenda>>(`${this.API_URL}/agendas/published/${id}`);
  }

   getPublishedAgendas(page = 0, size = 10): Observable<ApiResponse<Page<Agenda>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Agenda>>>(`${this.API_URL}/agendas/published`, { params });
  }


  // ============ PUBLIC ARTICLES ============
  getPublishedArticles(page = 0, size = 10): Observable<ApiResponse<Page<Article>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Article>>>(`${this.API_URL}/public/articles`, { params });
  }

  // Service pour récupérer les articles par catégorie
getArticlesByCategory(category: string, page: number = 0, size: number = 10): Observable<ApiResponse<Page<Article>>> {
  const params = new HttpParams()
    .set('page', page)
    .set('size', size);

  return this.http.get<ApiResponse<Page<Article>>>(`${this.API_URL}/public/articles/category/${category}`, { params });
}

  getAllCommuniques(): Observable<Article[]> {
  // Si ton backend accepte un paramètre "all=true"
  return this.http.get<Article[]>(`${this.API_URL}/public/articles`, { params: new HttpParams().set('category', 'COMMUNIQUE').set('all', 'true') });
}

  getLatestArticles(): Observable<ApiResponse<Article[]>> {
    return this.http.get<ApiResponse<Article[]>>(`${this.API_URL}/public/articles/latest`);
  }

  getFeaturedArticles(): Observable<ApiResponse<Article[]>> {
    return this.http.get<ApiResponse<Article[]>>(`${this.API_URL}/public/articles/featured`);
  }

  getPublishedArticleById(id: number): Observable<ApiResponse<Article>> {
    return this.http.get<ApiResponse<Article>>(`${this.API_URL}/public/articles/${id}`);
  }

  searchArticles(query: string, page = 0, size = 10): Observable<ApiResponse<Page<Article>>> {
    const params = new HttpParams().set('query', query).set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Article>>>(`${this.API_URL}/public/articles/search`, { params });
  }

  // Admin articles
  getAllArticles(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Article>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Article>>>(`${this.API_URL}/articles`, { params });
  }

 getAllArticles1(): Observable<ApiResponse<Article[]>> {
  const url = `${this.API_URL}/articles`;
  return this.http.get<ApiResponse<Article[]>>(url);
}


  getArticleById(id: number): Observable<ApiResponse<Article>> {
    return this.http.get<ApiResponse<Article>>(`${this.API_URL}/articles/${id}`);
  }

  createArticle1(article: Partial<Article>): Observable<ApiResponse<Article>> {
    return this.http.post<ApiResponse<Article>>(`${this.API_URL}/articles`, article);
  }

   createArticle(formData: FormData): Observable<ApiResponse<Article>> {
    return this.http.post<ApiResponse<Article>>(
      `${this.API_URL}/articles`,
      formData
    );
  }

  updateArticle(id: number, formData: FormData): Observable<ApiResponse<Article>> {
    return this.http.put<ApiResponse<Article>>(
      `${this.API_URL}/articles/${id}`,
      formData
    );
  }



  updateArticle1(id: number, article: Partial<Article>): Observable<ApiResponse<Article>> {
    return this.http.put<ApiResponse<Article>>(`${this.API_URL}/articles/${id}`, article);
  }



  deleteArticle(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/articles/${id}`);
  }

  // ============ PUBLIC PROJECTS ============
  getPublicProjects(page = 0, size = 10): Observable<ApiResponse<Page<Project>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Project>>>(`${this.API_URL}/public/projects`, { params });
  }

  getLatestProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(`${this.API_URL}/public/projects/latest`);
  }

  getPublicProjectById(id: number): Observable<ApiResponse<Project>> {
    return this.http.get<ApiResponse<Project>>(`${this.API_URL}/public/projects/${id}`);
  }

  searchProjects(query: string, page = 0, size = 10): Observable<ApiResponse<Page<Project>>> {
    const params = new HttpParams().set('query', query).set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Project>>>(`${this.API_URL}/public/projects/search`, { params });
  }

  // Admin projects
  getAllProjects(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Project>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Project>>>(`${this.API_URL}/projects`, { params });
  }

  getProjectById(id: number): Observable<ApiResponse<Project>> {
    return this.http.get<ApiResponse<Project>>(`${this.API_URL}/projects/${id}`);
  }

  createProject(project: Partial<Project>): Observable<ApiResponse<Project>> {
    return this.http.post<ApiResponse<Project>>(`${this.API_URL}/projects`, project);
  }

  updateProject(id: number, project: Partial<Project>): Observable<ApiResponse<Project>> {
    return this.http.put<ApiResponse<Project>>(`${this.API_URL}/projects/${id}`, project);
  }

  deleteProject(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/projects/${id}`);
  }


    // Admin Types document
  getAllTypes1(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<TypeDocument>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<TypeDocument>>>(`${this.API_URL}/types`, { params });
  }

getAllTypes(): Observable<TypeDocument[]> {
  return this.http.get<TypeDocument[]>(`${this.API_URL}/types`);
}



  getypesById(id: number): Observable<ApiResponse<TypeDocument>> {
    return this.http.get<ApiResponse<TypeDocument>>(`${this.API_URL}/types/${id}`);
  }

  createTypes(project: Partial<TypeDocument>): Observable<ApiResponse<TypeDocument>> {
    return this.http.post<ApiResponse<TypeDocument>>(`${this.API_URL}/types`, project);
  }

  updateTypes(id: number, project: Partial<TypeDocument>): Observable<ApiResponse<TypeDocument>> {
    return this.http.put<ApiResponse<TypeDocument>>(`${this.API_URL}/types/${id}`, project);
  }

  deleteTypes(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/types/${id}`);
  }
  // ============ PUBLIC DOCUMENTS ============
  getPublicDocuments(page = 0, size = 10): Observable<ApiResponse<Page<Document>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Document>>>(`${this.API_URL}/public/documents`, { params });
  }

  searchDocuments(query: string, page = 0, size = 10): Observable<ApiResponse<Page<Document>>> {
    const params = new HttpParams().set('query', query).set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Document>>>(`${this.API_URL}/public/documents/search`, { params });
  }

downloadDocument(id: number) {
  return this.http.post(
    `${this.API_URL}/documents/public/${id}/download/`, // ID dans l'URL
    {}, // body vide (ou mets {} si backend exige POST)
    {
      responseType: 'blob' // IMPORTANT
    }
  );
}

//type rpojets

  // Admin Types document
  getAllTypeProjets(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<TypeDocument>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<TypeDocument>>>(`${this.API_URL}/projetcategories`, { params });
  }

  getTypes(): Observable<TypeDocument[]> {
  return this.http.get<TypeDocument[]>(`${this.API_URL}/projetcategories`);
}


getAllTypesProjets(): Observable<TypeDocument[]> {
  return this.http.get<TypeDocument[]>(`${this.API_URL}/projetcategories`);
}



  getypesByIdProjets(id: number): Observable<ApiResponse<TypeDocument>> {
    return this.http.get<ApiResponse<TypeDocument>>(`${this.API_URL}/projetcategories/${id}`);
  }

  createTypesProjets(project: Partial<TypeDocument>): Observable<ApiResponse<TypeDocument>> {
    return this.http.post<ApiResponse<TypeDocument>>(`${this.API_URL}/projetcategories`, project);
  }

  updateTypesProjets(id: number, project: Partial<TypeDocument>): Observable<ApiResponse<TypeDocument>> {
    return this.http.put<ApiResponse<TypeDocument>>(`${this.API_URL}/projetcategories/${id}`, project);
  }

  deleteTypesProjets(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/projetcategories/${id}`);
  }



  // Admin documents
  getAllDocuments(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Document>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Document>>>(`${this.API_URL}/documents`, { params });
  }

  getDocumentById(id: number): Observable<ApiResponse<Document>> {
    return this.http.get<ApiResponse<Document>>(`${this.API_URL}/documents/${id}`);
  }

  createDocument1(document: Partial<Document>): Observable<ApiResponse<Document>> {
    return this.http.post<ApiResponse<Document>>(`${this.API_URL}/documents`, document);
  }

  updateDocument1(id: number, document: Partial<Document>): Observable<ApiResponse<Document>> {
    return this.http.put<ApiResponse<Document>>(`${this.API_URL}/documents/${id}`, document);
  }

  // documents.service.ts ou api.service.ts
createDocument(formData: FormData): Observable<ApiResponse<Document>> {
  return this.http.post<ApiResponse<Document>>(`${this.API_URL}/documents`, formData);
}

updateDocument(id: number, formData: FormData): Observable<ApiResponse<Document>> {
  return this.http.put<ApiResponse<Document>>(`${this.API_URL}/documents/${id}`, formData);
}


  deleteDocument(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/documents/${id}`);
  }

  // ============ PUBLIC CONTACTS ============
  submitContact(contact: Partial<Contact>): Observable<ApiResponse<Contact>> {
    return this.http.post<ApiResponse<Contact>>(`${this.API_URL}/public/contacts`, contact);
  }

  // Admin contacts
  getAllContacts(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Contact>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Contact>>>(`${this.API_URL}/contacts`, { params });
  }

  getContactById(id: number): Observable<ApiResponse<Contact>> {
    return this.http.get<ApiResponse<Contact>>(`${this.API_URL}/contacts/${id}`);
  }

  updateContactStatus(id: number, status: string): Observable<ApiResponse<Contact>> {
    return this.http.put<ApiResponse<Contact>>(`${this.API_URL}/contacts/${id}/status`, { status });
  }

  respondToContact(id: number, response: string): Observable<ApiResponse<Contact>> {
    return this.http.post<ApiResponse<Contact>>(`${this.API_URL}/contacts/${id}/respond`, { response });
  }

  deleteContact(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/contacts/${id}`);
  }

  // ============ USERS ============
  getAllUsers(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<User>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<User>>>(`${this.API_URL}/users`, { params });
  }

  getCurrentUser(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.API_URL}/users/me`);
  }

  getUserById(id: number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.API_URL}/users/${id}`);
  }

  createUser(user: any): Observable<ApiResponse<User>> {
    return this.http.post<ApiResponse<User>>(`${this.API_URL}/users`, user);
  }

  updateUser(id: number, user: Partial<User>): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(`${this.API_URL}/users/${id}`, user);
  }

  changePassword(id: number, oldPassword: string, newPassword: string): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(`${this.API_URL}/users/${id}/password`, { oldPassword, newPassword });
  }

  toggleUserStatus(id: number): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(`${this.API_URL}/users/${id}/toggle-status`, {});
  }

  deleteUser(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/users/${id}`);
  }

  // ============ DASHBOARD ============
  getDashboardStats(): Observable<ApiResponse<DashboardStats>> {
    return this.http.get<ApiResponse<DashboardStats>>(`${this.API_URL}/dashboard/stats`);
  }

  // Alias methods for dashboard
  getArticles(page = 0, size = 10): Observable<ApiResponse<Page<Article>>> {
    return this.getAllArticles(page, size);
  }

  getContacts(page = 0, size = 10): Observable<ApiResponse<Page<Contact>>> {
    return this.getAllContacts(page, size);
  }


  //minsitère

  
   getAllMins(page = 0, size = 10, sortBy = 'createdAt', sortDir = 'desc'): Observable<ApiResponse<Page<Ministere>>> {
    const params = new HttpParams()
      .set('page', page).set('size', size)
      .set('sortBy', sortBy).set('sortDir', sortDir);
    return this.http.get<ApiResponse<Page<Ministere>>>(`${this.API_URL}/ministeres`, { params });
  }



  getminById(id: number): Observable<ApiResponse<Ministere>> {
    return this.http.get<ApiResponse<Ministere>>(`${this.API_URL}/ministeres/${id}`);
  }



 
  createmin(formData: FormData): Observable<ApiResponse<Ministere>> {
    return this.http.post<ApiResponse<Ministere>>(
      `${this.API_URL}/ministeres`,
      formData
    );
  }

  updatemin(id: number, formData: FormData): Observable<ApiResponse<Ministere>> {
    return this.http.put<ApiResponse<Ministere>>(
      `${this.API_URL}/ministeres/${id}`,
      formData
    );
  }

 
  deleteMin(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/ministeres/${id}`);
  }

  // ============ EVENTS ============
  getPublicEvents(page = 0, size = 10): Observable<Page<Events>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<Page<Events>>(`${this.API_URL}/events/public`, { params });
  }

  getUpcomingEvents(): Observable<ApiResponse<Events[]>> {
    return this.http.get<ApiResponse<Events[]>>(`${this.API_URL}/events/public/upcoming`);
  }

  getEventById(id: number): Observable<ApiResponse<Events>> {
    return this.http.get<ApiResponse<Events>>(`${this.API_URL}/events/public/${id}`);
  }

  getAllEvents1(page = 0, size = 10): Observable<ApiResponse<Page<Events>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Events>>>(`${this.API_URL}/events`, { params });
  }

getAllEvents(page = 0, size = 10): Observable<Page<Events>> {
  const token = localStorage.getItem('token');

  console.log('TOKEN =', token); // 👈 pour voir le token

  const params = new HttpParams()
    .set('page', page)
    .set('size', size);

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.get<Page<Events>>(`${this.API_URL}/events`, { params, headers });
}

  getAllEvents2(page = 0, size = 10) {
  const token = localStorage.getItem('token');

  const params = new HttpParams()
    .set('page', page)
    .set('size', size);

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.get(`${this.API_URL}/events`, { params, headers });
}

  createEven1t(event: Partial<Event>): Observable<ApiResponse<Events>> {
    return this.http.post<ApiResponse<Events>>(`${this.API_URL}/events`, event);
  }

  createEvent(formData: FormData): Observable<ApiResponse<Events>> {
    return this.http.post<ApiResponse<Events>>(
      `${this.API_URL}/events`,
      formData
    );
  }

  updateEvent(id: number, formData: FormData): Observable<ApiResponse<Events>> {
    return this.http.put<ApiResponse<Events>>(
      `${this.API_URL}/events/${id}`,
      formData
    );
  }

  updateEvent1(id: number, event: Partial<Events>): Observable<ApiResponse<Events>> {
    return this.http.put<ApiResponse<Events>>(`${this.API_URL}/events/${id}`, event);
  }

  deleteEvent(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/events/${id}`);
  }

  // ============ FLASH INFOS ============
  getActiveFlashInfos(): Observable<ApiResponse<FlashInfo[]>> {
    return this.http.get<ApiResponse<FlashInfo[]>>(`${this.API_URL}/flash-infos/public/active`);
  }

  getAllFlashInfos(page = 0, size = 10): Observable<ApiResponse<Page<FlashInfo>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<FlashInfo>>>(`${this.API_URL}/flash-infos`, { params });
  }

  createFlashInfo(flashInfo: Partial<FlashInfo>): Observable<ApiResponse<FlashInfo>> {
    return this.http.post<ApiResponse<FlashInfo>>(`${this.API_URL}/flash-infos`, flashInfo);
  }

  updateFlashInfo(id: number, flashInfo: Partial<FlashInfo>): Observable<ApiResponse<FlashInfo>> {
    return this.http.put<ApiResponse<FlashInfo>>(`${this.API_URL}/flash-infos/${id}`, flashInfo);
  }

  deleteFlashInfo(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/flash-infos/${id}`);
  }

  // ============ E-SERVICES ============
  getPublicServices(page = 0, size = 10): Observable<ApiResponse<Page<EService>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<EService>>>(`${this.API_URL}/services/public`, { params });
  }

  getServicesByCategory(category: string): Observable<ApiResponse<EService[]>> {
    return this.http.get<ApiResponse<EService[]>>(`${this.API_URL}/services/public/category/${category}`);
  }

  getServiceById(id: number): Observable<ApiResponse<EService>> {
    return this.http.get<ApiResponse<EService>>(`${this.API_URL}/services/public/${id}`);
  }

  getAllServices(page = 0, size = 10): Observable<ApiResponse<Page<EService>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<EService>>>(`${this.API_URL}/services`, { params });
  }

  createService(service: Partial<EService>): Observable<ApiResponse<EService>> {
    return this.http.post<ApiResponse<EService>>(`${this.API_URL}/services`, service);
  }

  updateService(id: number, service: Partial<EService>): Observable<ApiResponse<EService>> {
    return this.http.put<ApiResponse<EService>>(`${this.API_URL}/services/${id}`, service);
  }

  deleteService(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/services/${id}`);
  }

  // ============ FAQ ============
  getPublicFAQs(): Observable<ApiResponse<FAQ[]>> {
    return this.http.get<ApiResponse<FAQ[]>>(`${this.API_URL}/faqs/public`);
  }

  getFAQsByCategory(category: string): Observable<ApiResponse<FAQ[]>> {
    return this.http.get<ApiResponse<FAQ[]>>(`${this.API_URL}/faqs/public/category/${category}`);
  }

  searchFAQs(query: string): Observable<ApiResponse<FAQ[]>> {
    const params = new HttpParams().set('query', query);
    return this.http.get<ApiResponse<FAQ[]>>(`${this.API_URL}/faqs/public/search`, { params });
  }

  getAllFAQs(page = 0, size = 10): Observable<ApiResponse<Page<FAQ>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<FAQ>>>(`${this.API_URL}/faqs`, { params });
  }

  createFAQ(faq: Partial<FAQ>): Observable<ApiResponse<FAQ>> {
    return this.http.post<ApiResponse<FAQ>>(`${this.API_URL}/faqs`, faq);
  }

  updateFAQ(id: number, faq: Partial<FAQ>): Observable<ApiResponse<FAQ>> {
    return this.http.put<ApiResponse<FAQ>>(`${this.API_URL}/faqs/${id}`, faq);
  }

  deleteFAQ(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/faqs/${id}`);
  }

  // ============ NEWSLETTER ============
  subscribeNewsletter(subscription: Partial<NewsletterSubscription>): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API_URL}/newsletter/public/subscribe`, subscription);
  }

  unsubscribeNewsletter(token: string): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(`${this.API_URL}/newsletter/public/unsubscribe`, { token });
  }

  getAllSubscriptions(page = 0, size = 10): Observable<ApiResponse<Page<NewsletterSubscription>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<NewsletterSubscription>>>(`${this.API_URL}/newsletter`, { params });
  }

  // ============ STRUCTURES (ANNUAIRE) ============
  getPublicStructures(): Observable<ApiResponse<Structure[]>> {
    return this.http.get<ApiResponse<Structure[]>>(`${this.API_URL}/structures/public`);
  }

  getStructuresByType(type: string): Observable<ApiResponse<Structure[]>> {
    return this.http.get<ApiResponse<Structure[]>>(`${this.API_URL}/structures/public/type/${type}`);
  }

  getAllStructures(page = 0, size = 10): Observable<ApiResponse<Page<Structure>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Structure>>>(`${this.API_URL}/structures`, { params });
  }

  createStructure(structure: Partial<Structure>): Observable<ApiResponse<Structure>> {
    return this.http.post<ApiResponse<Structure>>(`${this.API_URL}/structures`, structure);
  }

  updateStructure(id: number, structure: Partial<Structure>): Observable<ApiResponse<Structure>> {
    return this.http.put<ApiResponse<Structure>>(`${this.API_URL}/structures/${id}`, structure);
  }

  deleteStructure(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API_URL}/structures/${id}`);
  }

  // mediathèque
/* ===========================================================
   PHOTOS
=========================================================== */

private readonly photoUrl = `${environment.apiUrl}/photos`;

/**
 * Liste des photos
 */
getAllPhotos(): Observable<any> {
  return this.http.get<any>(this.photoUrl);
}

/**
 * Détail d'une photo
 */
getPhotoById(id: number): Observable<any> {
  return this.http.get<any>(`${this.photoUrl}/${id}`);
}

/**
 * Ajouter une photo
 */
createPhoto(formData: FormData): Observable<any> {
  return this.http.post<any>(
    this.photoUrl,
    formData
  );
}

/**
 * Modifier une photo
 */
updatePhoto(id: number, formData: FormData): Observable<any> {
  return this.http.put<any>(
    `${this.photoUrl}/${id}`,
    formData
  );
}

/**
 * Supprimer une photo
 */
deletePhoto(id: number): Observable<any> {
  return this.http.delete<any>(
    `${this.photoUrl}/${id}`
  );
}


/* ===========================================================
   VIDEOS
=========================================================== */

private readonly videoUrl = `${environment.apiUrl}/videos`;

/**
 * Liste des vidéos
 */
getAllVideos(): Observable<any> {
  return this.http.get<any>(this.videoUrl);
}

/**
 * Détail d'une vidéo
 */
getVideoById(id: number): Observable<any> {
  return this.http.get<any>(
    `${this.videoUrl}/${id}`
  );
}

/**
 * Ajouter une vidéo
 */
createVideo(formData: FormData): Observable<any> {
  return this.http.post<any>(
    this.videoUrl,
    formData
  );
}

/**
 * Modifier une vidéo
 */
updateVideo(id: number, formData: FormData): Observable<any> {
  return this.http.put<any>(
    `${this.videoUrl}/${id}`,
    formData
  );
}

/**
 * Supprimer une vidéo
 */
deleteVideo(id: number): Observable<any> {
  return this.http.delete<any>(
    `${this.videoUrl}/${id}`
  );
}
}
