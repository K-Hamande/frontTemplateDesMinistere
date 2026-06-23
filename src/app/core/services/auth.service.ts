import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ApiResponse, JwtResponse, LoginRequest, RegisterRequest, User } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;
  private readonly TOKEN_KEY = 'Memc_token';
  private readonly USER_KEY = 'Memc_user';

  private currentUserSignal = signal<JwtResponse | null>(this.getStoredUser());

  currentUser = computed(() => this.currentUserSignal());
  isAuthenticated = computed(() => !!this.currentUserSignal());
  isAdmin = computed(() => {
    const user = this.currentUserSignal();
    return user?.roles?.some(role => 
      role === 'ROLE_ADMIN' || role === 'ROLE_SUPER_ADMIN'
    ) ?? false;
  });
  isModerator = computed(() => {
    const user = this.currentUserSignal();
    return user?.roles?.some(role => 
      role === 'ROLE_MODERATOR' || role === 'ROLE_ADMIN' || role === 'ROLE_SUPER_ADMIN'
    ) ?? false;
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: LoginRequest): Observable<ApiResponse<JwtResponse>> {
    return this.http.post<ApiResponse<JwtResponse>>(`${environment.authUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (response.success && response.data) {
            this.storeToken(response.data.token);
            this.storeUser(response.data);
            this.currentUserSignal.set(response.data);
          }
        }),
        catchError(error => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  register(data: RegisterRequest): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${environment.authUrl}/register`, data);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSignal.set(null);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private storeUser(user: JwtResponse): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private getStoredUser(): JwtResponse | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  hasRole(role: string): boolean {
    const user = this.currentUserSignal();
    return user?.roles?.includes(role) ?? false;
  }

  hasAnyRole(roles: string[]): boolean {
    const user = this.currentUserSignal();
    return roles.some(role => user?.roles?.includes(role)) ?? false;
  }
}
