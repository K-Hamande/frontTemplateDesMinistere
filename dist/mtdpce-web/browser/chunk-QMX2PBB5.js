import {
  AuthService
} from "./chunk-6HFIGEJQ.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-YDHKLCGD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-4JYODSSI.js";
import "./chunk-DGOPQNLS.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/auth/login.component.ts
function LoginComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 58);
    \u0275\u0275element(2, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LoginComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "path", 61);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "path", 62)(2, "path", 63);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 64);
    \u0275\u0275element(1, "circle", 65)(2, "path", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Connexion en cours... ");
  }
}
function LoginComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Se connecter ");
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  router;
  route;
  username = "";
  password = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
  }
  onSubmit() {
    if (!this.username || !this.password) {
      this.error.set("Veuillez remplir tous les champs");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (response) => {
        if (response.success) {
          const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";
          this.router.navigateByUrl(returnUrl);
        } else {
          this.error.set(response.message || "Erreur de connexion");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || "Identifiants incorrects");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 102, vars: 8, consts: [[1, "min-h-screen", "flex"], [1, "hidden", "lg:flex", "lg:w-1/2", "bg-gradient-to-br", "from-burkina-green-50", "via-white", "to-burkina-yellow-50", "relative", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "w-96", "h-96", "bg-burkina-green-100/50", "rounded-full", "-translate-y-1/2", "translate-x-1/2", "blur-3xl"], [1, "absolute", "bottom-0", "left-0", "w-80", "h-80", "bg-burkina-yellow-100/50", "rounded-full", "translate-y-1/2", "-translate-x-1/2", "blur-3xl"], [1, "absolute", "top-1/2", "left-1/2", "w-64", "h-64", "bg-burkina-red-100/30", "rounded-full", "-translate-x-1/2", "-translate-y-1/2", "blur-3xl"], [1, "absolute", "top-0", "left-0", "right-0", "h-1.5", "bg-gradient-to-r", "from-burkina-green", "via-burkina-yellow", "to-burkina-red"], [1, "relative", "z-10", "flex", "flex-col", "justify-between", "p-12", "w-full"], ["routerLink", "/", 1, "flex", "items-center", "gap-3"], [1, "w-14", "h-14", "rounded-xl", "bg-gradient-to-br", "from-burkina-green", "via-burkina-yellow", "to-burkina-red", "flex", "items-center", "justify-center", "shadow-soft"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-white"], ["d", "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"], [1, "font-heading", "font-bold", "text-xl", "text-slate-900"], [1, "text-sm", "text-slate-500"], [1, "max-w-md"], [1, "text-4xl", "font-heading", "font-bold", "text-slate-900", "mb-6"], [1, "text-lg", "text-slate-600", "leading-relaxed", "mb-8"], [1, "flex", "items-center", "gap-4"], [1, "flex", "-space-x-3"], [1, "w-10", "h-10", "rounded-full", "bg-burkina-green", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-medium", "border-2", "border-white", "shadow-soft"], [1, "w-10", "h-10", "rounded-full", "bg-burkina-yellow", "flex", "items-center", "justify-center", "text-slate-900", "text-sm", "font-medium", "border-2", "border-white", "shadow-soft"], [1, "w-10", "h-10", "rounded-full", "bg-burkina-red", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-medium", "border-2", "border-white", "shadow-soft"], [1, "text-sm", "text-slate-600"], [1, "text-slate-900", "font-medium"], [1, "w-full", "lg:w-1/2", "flex", "items-center", "justify-center", "p-8", "bg-white"], [1, "w-full", "max-w-md"], [1, "lg:hidden", "mb-8", "text-center"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-xl", "bg-gradient-to-br", "from-burkina-green", "via-burkina-yellow", "to-burkina-red", "flex", "items-center", "justify-center", "shadow-soft"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-white"], [1, "text-left"], [1, "font-heading", "font-bold", "text-lg", "text-slate-900"], [1, "text-xs", "text-slate-500"], [1, "card", "p-8", "bg-white", "border", "border-slate-200"], [1, "text-center", "mb-8"], [1, "text-2xl", "font-heading", "font-bold", "text-slate-900", "mb-2"], [1, "text-slate-500"], [1, "mb-6", "p-4", "bg-burkina-red-50", "border", "border-burkina-red-200", "rounded-xl", "flex", "items-start", "gap-3"], [1, "space-y-5", 3, "ngSubmit"], [1, "input-label"], [1, "relative"], [1, "absolute", "inset-y-0", "left-0", "pl-4", "flex", "items-center", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["type", "text", "name", "username", "placeholder", "Entrez votre nom d'utilisateur", "required", "", "autocomplete", "username", 1, "input", "pl-12", 3, "ngModelChange", "ngModel"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"], ["name", "password", "placeholder", "Entrez votre mot de passe", "required", "", "autocomplete", "current-password", 1, "input", "pl-12", "pr-12", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "inset-y-0", "right-0", "pr-4", "flex", "items-center", "text-slate-400", "hover:text-slate-600", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["type", "submit", 1, "btn-primary", "w-full", "btn-lg", 3, "disabled"], [1, "mt-8", "pt-6", "border-t", "border-slate-200"], [1, "text-center", "text-sm", "text-slate-500"], ["routerLink", "/", 1, "text-burkina-green", "hover:text-burkina-green-700", "font-medium"], [1, "mt-6", "p-4", "bg-slate-50", "rounded-xl", "border", "border-slate-200"], [1, "text-xs", "font-medium", "text-slate-500", "uppercase", "tracking-wide", "mb-3"], [1, "space-y-2", "text-sm"], [1, "flex", "items-center", "justify-between"], [1, "text-slate-600"], [1, "px-2", "py-0.5", "bg-white", "border", "border-slate-200", "rounded", "text-xs"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-burkina-red", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-sm", "text-burkina-red-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div")(8, "a", 7)(9, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div")(13, "div", 11);
      \u0275\u0275text(14, "Memc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "Burkina Faso");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 13)(18, "h1", 14);
      \u0275\u0275text(19, " Portail d'Administration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 15);
      \u0275\u0275text(21, " Acc\xE9dez \xE0 l'espace d'administration du Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "div", 18);
      \u0275\u0275text(25, "SA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 19);
      \u0275\u0275text(27, "AD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275text(29, "MO");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 21)(31, "span", 22);
      \u0275\u0275text(32, "3 r\xF4les");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " disponibles ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 12);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 23)(37, "div", 24)(38, "div", 25)(39, "a", 26)(40, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 28);
      \u0275\u0275element(42, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "div", 29)(44, "div", 30);
      \u0275\u0275text(45, "Memc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 31);
      \u0275\u0275text(47, "Burkina Faso");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 32)(49, "div", 33)(50, "h2", 34);
      \u0275\u0275text(51, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 35);
      \u0275\u0275text(53, "Entrez vos identifiants pour acc\xE9der \xE0 votre compte");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(54, LoginComponent_Conditional_54_Template, 5, 1, "div", 36);
      \u0275\u0275elementStart(55, "form", 37);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_55_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(56, "div")(57, "label", 38);
      \u0275\u0275text(58, "Nom d'utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 39)(60, "div", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 41);
      \u0275\u0275element(62, "path", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div")(65, "label", 38);
      \u0275\u0275text(66, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 39)(68, "div", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 41);
      \u0275\u0275element(70, "path", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(71, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 46);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_72_listener() {
        return ctx.showPassword.set(!ctx.showPassword());
      });
      \u0275\u0275conditionalCreate(73, LoginComponent_Conditional_73_Template, 2, 0, ":svg:svg", 47)(74, LoginComponent_Conditional_74_Template, 3, 0, ":svg:svg", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "button", 48);
      \u0275\u0275conditionalCreate(76, LoginComponent_Conditional_76_Template, 4, 0)(77, LoginComponent_Conditional_77_Template, 3, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 49)(79, "p", 50);
      \u0275\u0275text(80, " Retour \xE0 ");
      \u0275\u0275elementStart(81, "a", 51);
      \u0275\u0275text(82, "la page d'accueil");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 52)(84, "div", 53);
      \u0275\u0275text(85, "Comptes de d\xE9monstration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 54)(87, "div", 55)(88, "span", 56);
      \u0275\u0275text(89, "Super Admin:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "code", 57);
      \u0275\u0275text(91, "superadmin / SuperAdmin2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 55)(93, "span", 56);
      \u0275\u0275text(94, "Admin:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "code", 57);
      \u0275\u0275text(96, "admin / Admin2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 55)(98, "span", 56);
      \u0275\u0275text(99, "Mod\xE9rateur:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "code", 57);
      \u0275\u0275text(101, "moderateur / Moderateur2024");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " Memc - Burkina Faso ");
      \u0275\u0275advance(19);
      \u0275\u0275conditional(ctx.error() ? 54 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showPassword() ? 73 : 74);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 76 : 77);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      standalone: true,
      imports: [CommonModule, RouterModule, FormsModule],
      template: `
    <div class="min-h-screen flex">
      <!-- Left Panel - Light Branding -->
      <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-burkina-green-50 via-white to-burkina-yellow-50 relative overflow-hidden">
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-burkina-green-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-burkina-yellow-100/50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-burkina-red-100/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        
        <!-- Flag Stripe -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-burkina-green via-burkina-yellow to-burkina-red"></div>
        
        <div class="relative z-10 flex flex-col justify-between p-12 w-full">
          <div>
            <a routerLink="/" class="flex items-center gap-3">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-burkina-green via-burkina-yellow to-burkina-red flex items-center justify-center shadow-soft">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div class="font-heading font-bold text-xl text-slate-900">Memc</div>
                <div class="text-sm text-slate-500">Burkina Faso</div>
              </div>
            </a>
          </div>
          
          <div class="max-w-md">
            <h1 class="text-4xl font-heading font-bold text-slate-900 mb-6">
              Portail d'Administration
            </h1>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
              Acc\xE9dez \xE0 l'espace d'administration du Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques.
            </p>
            <div class="flex items-center gap-4">
              <div class="flex -space-x-3">
                <div class="w-10 h-10 rounded-full bg-burkina-green flex items-center justify-center text-white text-sm font-medium border-2 border-white shadow-soft">SA</div>
                <div class="w-10 h-10 rounded-full bg-burkina-yellow flex items-center justify-center text-slate-900 text-sm font-medium border-2 border-white shadow-soft">AD</div>
                <div class="w-10 h-10 rounded-full bg-burkina-red flex items-center justify-center text-white text-sm font-medium border-2 border-white shadow-soft">MO</div>
              </div>
              <div class="text-sm text-slate-600">
                <span class="text-slate-900 font-medium">3 r\xF4les</span> disponibles
              </div>
            </div>
          </div>
          
          <div class="text-sm text-slate-500">
            \xA9 {{ currentYear }} Memc - Burkina Faso
          </div>
        </div>
      </div>
      
      <!-- Right Panel - Login Form -->
      <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div class="w-full max-w-md">
          <div class="lg:hidden mb-8 text-center">
            <a routerLink="/" class="inline-flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-burkina-green via-burkina-yellow to-burkina-red flex items-center justify-center shadow-soft">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div class="text-left">
                <div class="font-heading font-bold text-lg text-slate-900">Memc</div>
                <div class="text-xs text-slate-500">Burkina Faso</div>
              </div>
            </a>
          </div>

          <div class="card p-8 bg-white border border-slate-200">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-heading font-bold text-slate-900 mb-2">Connexion</h2>
              <p class="text-slate-500">Entrez vos identifiants pour acc\xE9der \xE0 votre compte</p>
            </div>

            @if (error()) {
              <div class="mb-6 p-4 bg-burkina-red-50 border border-burkina-red-200 rounded-xl flex items-start gap-3">
                <svg class="w-5 h-5 text-burkina-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="text-sm text-burkina-red-700">{{ error() }}</div>
              </div>
            }

            <form (ngSubmit)="onSubmit()" class="space-y-5">
              <div>
                <label class="input-label">Nom d'utilisateur</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <input type="text" [(ngModel)]="username" name="username" class="input pl-12" placeholder="Entrez votre nom d'utilisateur" required autocomplete="username">
                </div>
              </div>

              <div>
                <label class="input-label">Mot de passe</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <input [type]="showPassword() ? 'text' : 'password'" [(ngModel)]="password" name="password" class="input pl-12 pr-12" placeholder="Entrez votre mot de passe" required autocomplete="current-password">
                  <button type="button" (click)="showPassword.set(!showPassword())" class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600">
                    @if (showPassword()) {
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
                    } @else {
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    }
                  </button>
                </div>
              </div>

              <button type="submit" [disabled]="loading()" class="btn-primary w-full btn-lg">
                @if (loading()) {
                  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Connexion en cours...
                } @else {
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/></svg>
                  Se connecter
                }
              </button>
            </form>

            <div class="mt-8 pt-6 border-t border-slate-200">
              <p class="text-center text-sm text-slate-500">
                Retour \xE0 <a routerLink="/" class="text-burkina-green hover:text-burkina-green-700 font-medium">la page d'accueil</a>
              </p>
            </div>
          </div>

          <div class="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div class="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Comptes de d\xE9monstration</div>
            <div class="space-y-2 text-sm">
              <div class="flex items-center justify-between"><span class="text-slate-600">Super Admin:</span><code class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs">superadmin / SuperAdmin2024</code></div>
              <div class="flex items-center justify-between"><span class="text-slate-600">Admin:</span><code class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs">admin / Admin2024</code></div>
              <div class="flex items-center justify-between"><span class="text-slate-600">Mod\xE9rateur:</span><code class="px-2 py-0.5 bg-white border border-slate-200 rounded text-xs">moderateur / Moderateur2024</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
    }]
  }], () => [{ type: AuthService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login.component.ts", lineNumber: 158 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QMX2PBB5.js.map
