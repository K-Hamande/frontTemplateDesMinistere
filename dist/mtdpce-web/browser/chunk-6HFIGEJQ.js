import {
  Router
} from "./chunk-YDHKLCGD.js";
import {
  environment
} from "./chunk-DGOPQNLS.js";
import {
  HttpClient,
  Injectable,
  catchError,
  computed,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-WCAZC6LL.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  API_URL = environment.apiUrl;
  TOKEN_KEY = "Memc_token";
  USER_KEY = "Memc_user";
  currentUserSignal = signal(this.getStoredUser(), ...ngDevMode ? [{ debugName: "currentUserSignal" }] : []);
  currentUser = computed(() => this.currentUserSignal(), ...ngDevMode ? [{ debugName: "currentUser" }] : []);
  isAuthenticated = computed(() => !!this.currentUserSignal(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  isAdmin = computed(() => {
    const user = this.currentUserSignal();
    return user?.roles?.some((role) => role === "ROLE_ADMIN" || role === "ROLE_SUPER_ADMIN") ?? false;
  }, ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  isModerator = computed(() => {
    const user = this.currentUserSignal();
    return user?.roles?.some((role) => role === "ROLE_MODERATOR" || role === "ROLE_ADMIN" || role === "ROLE_SUPER_ADMIN") ?? false;
  }, ...ngDevMode ? [{ debugName: "isModerator" }] : []);
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  login(credentials) {
    return this.http.post(`${environment.authUrl}/login`, credentials).pipe(tap((response) => {
      if (response.success && response.data) {
        this.storeToken(response.data.token);
        this.storeUser(response.data);
        this.currentUserSignal.set(response.data);
      }
    }), catchError((error) => {
      console.error("Login error:", error);
      return throwError(() => error);
    }));
  }
  register(data) {
    return this.http.post(`${environment.authUrl}/register`, data);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSignal.set(null);
    this.router.navigate(["/"]);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  storeToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  storeUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  getStoredUser() {
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
  hasRole(role) {
    const user = this.currentUserSignal();
    return user?.roles?.includes(role) ?? false;
  }
  hasAnyRole(roles) {
    const user = this.currentUserSignal();
    return roles.some((role) => user?.roles?.includes(role)) ?? false;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-6HFIGEJQ.js.map
