import {
  RouterLink
} from "./chunk-YDHKLCGD.js";
import {
  ApiService
} from "./chunk-ECCWOC2D.js";
import "./chunk-DGOPQNLS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  inject,
  interval,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/features/home/home.component.ts
var _c0 = (a0) => ["/actualites", a0];
var _forTrack0 = ($index, $item) => $item.id;
function HomeComponent_Conditional_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 93);
    \u0275\u0275element(2, "circle", 94)(3, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mise \xE0 jour... ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "span", 6);
    \u0275\u0275text(2, " En direct ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "path", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3", 98);
    \u0275\u0275text(4, "Aucune actualit\xE9 disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 54);
    \u0275\u0275text(6, "Les actualit\xE9s seront affich\xE9es ici d\xE8s leur publication.");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_164_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 102);
  }
  if (rf & 2) {
    const article_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", article_r1.featuredImage, \u0275\u0275sanitizeUrl)("alt", article_r1.title);
  }
}
function HomeComponent_Conditional_164_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 103);
    \u0275\u0275element(1, "path", 97);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_164_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1, " NOUVEAU ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_164_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 108);
    \u0275\u0275text(1, " \xC0 la une ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_164_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 100)(1, "div", 101);
    \u0275\u0275conditionalCreate(2, HomeComponent_Conditional_164_For_2_Conditional_2_Template, 1, 2, "img", 102)(3, HomeComponent_Conditional_164_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 103);
    \u0275\u0275conditionalCreate(4, HomeComponent_Conditional_164_For_2_Conditional_4_Template, 2, 0, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105)(6, "div", 106)(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HomeComponent_Conditional_164_For_2_Conditional_9_Template, 2, 0, "span", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 109)(11, "a", 110);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 111);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 112)(16, "span", 113);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 114);
    \u0275\u0275element(18, "path", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span", 113);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 114);
    \u0275\u0275element(23, "path", 116)(24, "path", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const \u0275$index_307_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", \u0275$index_307_r2 * 100, "ms");
    \u0275\u0275classProp("animate-fadeIn", ctx_r2.isNewArticle(article_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(article_r1.featuredImage ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isNewArticle(article_r1.id) ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getCategoryClass(article_r1.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryLabel(article_r1.category), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(article_r1.featured ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, article_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(article_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.summary);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(20, 15, article_r1.createdAt, "dd MMM yyyy", "", "fr"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", article_r1.viewCount, " vues ");
  }
}
function HomeComponent_Conditional_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_164_For_2_Template, 26, 22, "article", 99, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.articles().slice(0, 8));
  }
}
function HomeComponent_For_186_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 38);
    \u0275\u0275element(3, "path", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 119);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 120)(9, "div", 121)(10, "span", 54);
    \u0275\u0275text(11, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 122);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 123);
    \u0275\u0275element(15, "div", 124);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(project_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", project_r4.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", project_r4.progressPercentage, "%");
  }
}
var HomeComponent = class _HomeComponent {
  apiService = inject(ApiService);
  refreshSubscription;
  previousArticleIds = /* @__PURE__ */ new Set();
  articles = signal([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  projects = signal([], ...ngDevMode ? [{ debugName: "projects" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  lastUpdate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "lastUpdate" }] : []);
  newArticleIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "newArticleIds" }] : []);
  // Intervalle de rafraîchissement en millisecondes (30 secondes)
  REFRESH_INTERVAL = 3e4;
  ngOnInit() {
    this.loadData();
    this.startAutoRefresh();
  }
  ngOnDestroy() {
    this.stopAutoRefresh();
  }
  loadData() {
    this.loadArticles();
    this.loadProjects();
  }
  loadArticles() {
    this.isLoading.set(true);
    this.apiService.getPublishedArticles().subscribe({
      next: (response) => {
        const data = response.content || response || [];
        const currentIds = new Set(data.map((a) => a.id));
        const newIds = /* @__PURE__ */ new Set();
        if (this.previousArticleIds.size > 0) {
          currentIds.forEach((id) => {
            if (!this.previousArticleIds.has(id)) {
              newIds.add(id);
            }
          });
        }
        this.newArticleIds.set(newIds);
        this.previousArticleIds = currentIds;
        this.articles.set(data);
        this.lastUpdate.set(/* @__PURE__ */ new Date());
        this.isLoading.set(false);
        if (newIds.size > 0) {
          setTimeout(() => {
            this.newArticleIds.set(/* @__PURE__ */ new Set());
          }, 1e4);
        }
      },
      error: (err) => {
        console.error("Erreur chargement articles:", err);
        this.isLoading.set(false);
      }
    });
  }
  loadProjects() {
    this.apiService.getPublicProjects().subscribe({
      next: (response) => {
        const data = response.content || response || [];
        this.projects.set(data);
      },
      error: (err) => console.error("Erreur chargement projets:", err)
    });
  }
  refreshArticles() {
    this.loadArticles();
  }
  startAutoRefresh() {
    this.refreshSubscription = interval(this.REFRESH_INTERVAL).subscribe(() => {
      this.loadArticles();
    });
  }
  stopAutoRefresh() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  isNewArticle(id) {
    return this.newArticleIds().has(id);
  }
  getCategoryClass(category) {
    const classes = {
      "ACTUALITE": "bg-primary-50 text-primary-600",
      "COMMUNIQUE": "bg-blue-50 text-blue-600",
      "EVENEMENT": "bg-purple-50 text-purple-600",
      "PROJET": "bg-accent-50 text-accent-600",
      "RAPPORT": "bg-slate-100 text-slate-600",
      "DISCOURS": "bg-rose-50 text-rose-600"
    };
    return classes[category] || "bg-slate-100 text-slate-600";
  }
  getCategoryLabel(category) {
    const labels = {
      "ACTUALITE": "Actualit\xE9",
      "COMMUNIQUE": "Communiqu\xE9",
      "EVENEMENT": "\xC9v\xE9nement",
      "PROJET": "Projet",
      "RAPPORT": "Rapport",
      "DISCOURS": "Discours"
    };
    return labels[category] || category;
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 197, vars: 11, consts: [[1, "relative", "bg-white", "py-16", "md:py-24", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "w-1/3", "h-full", "bg-gradient-to-l", "from-primary-50", "to-transparent"], [1, "absolute", "bottom-0", "left-0", "w-64", "h-64", "bg-accent-50", "rounded-full", "blur-3xl", "-translate-x-1/2", "translate-y-1/2", "opacity-50"], [1, "relative", "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "grid", "lg:grid-cols-2", "gap-12", "items-center"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "bg-primary-50", "text-primary-600", "text-sm", "font-medium", "rounded-full", "mb-6"], [1, "w-2", "h-2", "bg-primary-500", "rounded-full", "animate-pulse"], [1, "text-4xl", "md:text-5xl", "font-bold", "text-slate-800", "leading-tight", "mb-6"], [1, "text-primary-500"], [1, "text-lg", "text-slate-600", "mb-8", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-4"], ["routerLink", "/actualites", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-3", "bg-primary-500", "text-white", "font-medium", "rounded-lg", "hover:bg-primary-600", "transition-colors", "shadow-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 8l4 4m0 0l-4 4m4-4H3"], ["routerLink", "/contact", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-3", "border", "border-slate-200", "text-slate-700", "font-medium", "rounded-lg", "hover:bg-slate-50", "transition-colors"], [1, "hidden", "lg:block"], [1, "relative"], [1, "w-full", "h-80", "bg-gradient-to-br", "from-primary-100", "to-accent-50", "rounded-2xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-48", "h-48", "text-primary-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "absolute", "-bottom-4", "-right-4", "w-24", "h-24", "bg-accent-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-accent-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "py-16", "bg-slate-50"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "text-center", "mb-12"], [1, "text-2xl", "font-bold", "text-slate-800", "mb-2"], [1, "text-slate-600"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-4", "gap-6"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-100", "hover:border-primary-200", "hover:shadow-soft", "transition-all"], [1, "w-12", "h-12", "bg-primary-50", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-primary-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "font-semibold", "text-slate-800", "mb-2"], [1, "text-sm", "text-slate-600", "mb-4"], ["routerLink", "/services", 1, "text-primary-600", "text-sm", "font-medium", "hover:text-primary-700", "transition-colors"], [1, "bg-white", "p-6", "rounded-xl", "border", "border-slate-100", "hover:border-accent-200", "hover:shadow-soft", "transition-all"], [1, "w-12", "h-12", "bg-accent-50", "rounded-lg", "flex", "items-center", "justify-center", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-accent-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "py-16", "bg-white"], [1, "grid", "lg:grid-cols-5", "gap-12", "items-start"], [1, "lg:col-span-2"], [1, "bg-slate-50", "rounded-2xl", "p-8"], [1, "w-32", "h-32", "mx-auto", "bg-primary-100", "rounded-full", "flex", "items-center", "justify-center", "mb-6"], [1, "text-4xl", "font-bold", "text-primary-600"], [1, "text-center", "mb-6"], [1, "inline-block", "px-3", "py-1", "bg-primary-100", "text-primary-700", "text-xs", "font-medium", "rounded-full", "mb-3"], [1, "text-xl", "font-bold", "text-slate-800"], [1, "text-primary-600", "text-sm", "font-medium"], [1, "space-y-3", "text-sm"], [1, "flex", "justify-between", "py-2", "border-b", "border-slate-200"], [1, "text-slate-500"], [1, "font-medium", "text-slate-700"], [1, "flex", "justify-between", "py-2"], ["routerLink", "/ministere/ministre", 1, "mt-6", "w-full", "inline-flex", "items-center", "justify-center", "gap-2", "px-4", "py-3", "bg-primary-500", "text-white", "font-medium", "rounded-lg", "hover:bg-primary-600", "transition-colors"], [1, "lg:col-span-3"], [1, "text-2xl", "font-bold", "text-slate-800", "mb-6"], [1, "prose", "prose-slate", "max-w-none"], [1, "text-slate-600", "leading-relaxed", "mb-4"], [1, "text-slate-600", "leading-relaxed"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4", "mt-8"], [1, "text-center", "p-4", "bg-slate-50", "rounded-xl"], [1, "text-2xl", "font-bold", "text-primary-600"], [1, "text-xs", "text-slate-500", "mt-1"], [1, "text-2xl", "font-bold", "text-accent-600"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "flex", "items-center", "gap-3"], [1, "text-2xl", "font-bold", "text-slate-800"], [1, "flex", "items-center", "gap-2", "px-3", "py-1", "bg-primary-50", "text-primary-600", "text-xs", "font-medium", "rounded-full"], [1, "text-slate-600", "mt-1"], [1, "hidden", "sm:flex", "items-center", "gap-4"], [1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "border", "border-slate-200", "text-slate-600", "font-medium", "rounded-lg", "hover:bg-slate-50", "transition-colors", 3, "click", "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], ["routerLink", "/actualites", 1, "inline-flex", "items-center", "gap-2", "text-primary-600", "font-medium", "hover:text-primary-700", "transition-colors"], [1, "text-center", "py-12", "bg-white", "rounded-xl", "border", "border-slate-100"], [1, "flex", "items-center", "justify-between", "mt-6", "pt-4", "border-t", "border-slate-200"], [1, "text-xs", "text-slate-400"], [1, "sm:hidden"], ["routerLink", "/actualites", 1, "inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-primary-500", "text-white", "text-sm", "font-medium", "rounded-lg", "hover:bg-primary-600", "transition-colors"], ["routerLink", "/projets", 1, "hidden", "sm:inline-flex", "items-center", "gap-2", "text-primary-600", "font-medium", "hover:text-primary-700", "transition-colors"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "p-6", "hover:shadow-soft", "hover:border-slate-200", "transition-all"], [1, "py-16", "bg-primary-500"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "text-center"], [1, "text-2xl", "md:text-3xl", "font-bold", "text-white", "mb-4"], [1, "text-primary-100", "mb-8", "max-w-2xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "gap-3", "justify-center", "max-w-md", "mx-auto"], ["type", "email", "placeholder", "Votre adresse email", 1, "flex-1", "px-4", "py-3", "rounded-lg", "border-0", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-white/50"], [1, "px-6", "py-3", "bg-white", "text-primary-600", "font-medium", "rounded-lg", "hover:bg-primary-50", "transition-colors"], ["fill", "none", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "animate-spin"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-slate-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], [1, "text-lg", "font-semibold", "text-slate-700", "mb-2"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "overflow-hidden", "hover:shadow-soft", "hover:border-slate-200", "transition-all", "group", 3, "animate-fadeIn", "animation-delay"], [1, "bg-white", "rounded-xl", "border", "border-slate-100", "overflow-hidden", "hover:shadow-soft", "hover:border-slate-200", "transition-all", "group"], [1, "h-40", "bg-gradient-to-br", "from-primary-50", "to-accent-50", "flex", "items-center", "justify-center", "relative", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src", "alt"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-primary-200"], [1, "absolute", "top-2", "right-2", "px-2", "py-1", "bg-accent-500", "text-white", "text-xs", "font-bold", "rounded"], [1, "p-4"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "inline-block", "px-2", "py-0.5", "text-xs", "font-medium", "rounded"], [1, "inline-block", "px-2", "py-0.5", "bg-accent-50", "text-accent-600", "text-xs", "font-medium", "rounded"], [1, "font-semibold", "text-slate-800", "mb-2", "line-clamp-2", "text-sm", "group-hover:text-primary-600", "transition-colors"], [3, "routerLink"], [1, "text-xs", "text-slate-500", "line-clamp-2", "mb-3"], [1, "flex", "items-center", "justify-between", "text-xs", "text-slate-400"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "text-sm", "text-slate-600", "mb-4", "line-clamp-2"], [1, "space-y-2"], [1, "flex", "items-center", "justify-between", "text-sm"], [1, "font-medium", "text-primary-600"], [1, "h-2", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-primary-500", "rounded-full", "transition-all", "duration-500"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
      \u0275\u0275element(7, "span", 6);
      \u0275\u0275text(8, " Minist\xE8re de la Transition Digitale ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 7);
      \u0275\u0275text(10, " Votre portail pour la ");
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "transformation digitale");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " du Burkina Faso ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 9);
      \u0275\u0275text(15, " Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques \u0153uvre pour le d\xE9veloppement de l'\xE9conomie num\xE9rique et la modernisation des services publics. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "a", 11);
      \u0275\u0275text(18, " D\xE9couvrir les actualit\xE9s ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 12);
      \u0275\u0275element(20, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "a", 14);
      \u0275\u0275text(22, " Nous contacter ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 18);
      \u0275\u0275element(27, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 21);
      \u0275\u0275element(30, "path", 22);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "section", 23)(32, "div", 24)(33, "div", 25)(34, "h2", 26);
      \u0275\u0275text(35, "Nos Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 27);
      \u0275\u0275text(37, "Acc\xE9dez rapidement aux services du minist\xE8re");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 28)(39, "div", 29)(40, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 31);
      \u0275\u0275element(42, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "h3", 33);
      \u0275\u0275text(44, "Agr\xE9ment Technique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 34);
      \u0275\u0275text(46, "Demande d'agr\xE9ment pour les entreprises du secteur informatique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 35);
      \u0275\u0275text(48, " En savoir plus \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 36)(50, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 38);
      \u0275\u0275element(52, "path", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "h3", 33);
      \u0275\u0275text(54, "Licences T\xE9l\xE9com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 34);
      \u0275\u0275text(56, "Proc\xE9dures d'obtention des licences de t\xE9l\xE9communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 35);
      \u0275\u0275text(58, " En savoir plus \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 29)(60, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 31);
      \u0275\u0275element(62, "path", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "h3", 33);
      \u0275\u0275text(64, "Cybers\xE9curit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "p", 34);
      \u0275\u0275text(66, "Protection des syst\xE8mes d'information et donn\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 35);
      \u0275\u0275text(68, " En savoir plus \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 36)(70, "div", 37);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 38);
      \u0275\u0275element(72, "path", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "h3", 33);
      \u0275\u0275text(74, "Services Postaux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p", 34);
      \u0275\u0275text(76, "D\xE9veloppement et modernisation du secteur postal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 35);
      \u0275\u0275text(78, " En savoir plus \u2192 ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "section", 42)(80, "div", 24)(81, "div", 43)(82, "div", 44)(83, "div", 45)(84, "div", 46)(85, "span", 47);
      \u0275\u0275text(86, "AZ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 48)(88, "span", 49);
      \u0275\u0275text(89, " La Ministre ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h3", 50);
      \u0275\u0275text(91, "Dr Aminata ZERBO/SABANE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p", 51);
      \u0275\u0275text(93, "Ministre de la Transition Digitale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 52)(95, "div", 53)(96, "span", 54);
      \u0275\u0275text(97, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 55);
      \u0275\u0275text(99, "ZERBO/SABANE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 53)(101, "span", 54);
      \u0275\u0275text(102, "Pr\xE9nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 55);
      \u0275\u0275text(104, "Aminata");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 56)(106, "span", 54);
      \u0275\u0275text(107, "Profession");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 55);
      \u0275\u0275text(109, "Enseignante en Informatique");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "a", 57);
      \u0275\u0275text(111, " Voir la biographie ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 58)(113, "h2", 59);
      \u0275\u0275text(114, "Le Minist\xE8re");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 60)(116, "p", 61);
      \u0275\u0275text(117, " Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques assure la mise en \u0153uvre et le suivi de la politique du gouvernement en mati\xE8re de d\xE9veloppement de l'\xE9conomie num\xE9rique, des postes et de la transformation digitale. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 61);
      \u0275\u0275text(119, " \xC0 ce titre et en relation avec les d\xE9partements minist\xE9riels comp\xE9tents, il est charg\xE9 entre autres du d\xE9veloppement des infrastructures des communications \xE9lectroniques, de l'accompagnement, de la promotion des usages des TIC, du d\xE9veloppement des services en ligne et des contenus locaux. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p", 62);
      \u0275\u0275text(121, " Le Minist\xE8re \u0153uvre \xE9galement pour le d\xE9veloppement d'une industrie locale bas\xE9e sur les TIC, ainsi que pour la modernisation et le d\xE9veloppement du secteur postal au Burkina Faso. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 63)(123, "div", 64)(124, "p", 65);
      \u0275\u0275text(125, "500+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p", 66);
      \u0275\u0275text(127, "Km Fibre Optique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 64)(129, "p", 67);
      \u0275\u0275text(130, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "p", 66);
      \u0275\u0275text(132, "Centres Num\xE9riques");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 64)(134, "p", 65);
      \u0275\u0275text(135, "5000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 66);
      \u0275\u0275text(137, "Agents Form\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 64)(139, "p", 67);
      \u0275\u0275text(140, "90%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p", 66);
      \u0275\u0275text(142, "Couverture 4G");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(143, "section", 23)(144, "div", 24)(145, "div", 68)(146, "div")(147, "div", 69)(148, "h2", 70);
      \u0275\u0275text(149, "Actualit\xE9s r\xE9centes");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(150, HomeComponent_Conditional_150_Template, 5, 0, "div", 71)(151, HomeComponent_Conditional_151_Template, 3, 0, "div", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 72);
      \u0275\u0275text(153, "Restez inform\xE9 des derni\xE8res nouvelles \u2022 Mise \xE0 jour automatique toutes les 30 secondes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 73)(155, "button", 74);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_155_listener() {
        return ctx.refreshArticles();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(156, "svg", 75);
      \u0275\u0275element(157, "path", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275text(158, " Actualiser ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(159, "a", 77);
      \u0275\u0275text(160, " Voir toutes ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(161, "svg", 75);
      \u0275\u0275element(162, "path", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(163, HomeComponent_Conditional_163_Template, 7, 0, "div", 78)(164, HomeComponent_Conditional_164_Template, 3, 0, "div", 28);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(165, "div", 79)(166, "p", 80);
      \u0275\u0275text(167);
      \u0275\u0275pipe(168, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 81)(170, "a", 82);
      \u0275\u0275text(171, " Voir toutes les actualit\xE9s ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(172, "section", 42)(173, "div", 24)(174, "div", 68)(175, "div")(176, "h2", 70);
      \u0275\u0275text(177, "Projets et Programmes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p", 72);
      \u0275\u0275text(179, "Nos initiatives pour la transformation digitale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "a", 83);
      \u0275\u0275text(181, " Voir tous ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(182, "svg", 75);
      \u0275\u0275element(183, "path", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(184, "div", 84);
      \u0275\u0275repeaterCreate(185, HomeComponent_For_186_Template, 16, 5, "div", 85, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(187, "section", 86)(188, "div", 87)(189, "h2", 88);
      \u0275\u0275text(190, "Restez inform\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "p", 89);
      \u0275\u0275text(192, " Inscrivez-vous \xE0 notre newsletter pour recevoir les derni\xE8res actualit\xE9s du minist\xE8re. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 90);
      \u0275\u0275element(194, "input", 91);
      \u0275\u0275elementStart(195, "button", 92);
      \u0275\u0275text(196, " S'abonner ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(150);
      \u0275\u0275conditional(ctx.isLoading() ? 150 : 151);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275classProp("animate-spin", ctx.isLoading());
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.articles().length === 0 && !ctx.isLoading() ? 163 : 164);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" Derni\xE8re mise \xE0 jour : ", \u0275\u0275pipeBind4(168, 6, ctx.lastUpdate(), "dd/MM/yyyy \xE0 HH:mm:ss", "", "fr"), " ");
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.projects().slice(0, 3));
    }
  }, dependencies: [CommonModule, RouterLink, DatePipe], styles: ["\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out forwards;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterLink], template: `
    <!-- Hero Section - Design soft et \xE9pur\xE9 -->
    <section class="relative bg-white py-16 md:py-24 overflow-hidden">
      <!-- D\xE9coration subtile -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-6">
              <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              Minist\xE8re de la Transition Digitale
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Votre portail pour la 
              <span class="text-primary-500">transformation digitale</span> 
              du Burkina Faso
            </h1>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques 
              \u0153uvre pour le d\xE9veloppement de l'\xE9conomie num\xE9rique et la modernisation des services publics.
            </p>
            <div class="flex flex-wrap gap-4">
              <a routerLink="/actualites" class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-sm">
                D\xE9couvrir les actualit\xE9s
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a routerLink="/contact" class="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                Nous contacter
              </a>
            </div>
          </div>
          
          <!-- Illustration -->
          <div class="hidden lg:block">
            <div class="relative">
              <div class="w-full h-80 bg-gradient-to-br from-primary-100 to-accent-50 rounded-2xl flex items-center justify-center">
                <svg class="w-48 h-48 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-100 rounded-xl flex items-center justify-center">
                <svg class="w-12 h-12 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Cards - Style soft -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-bold text-slate-800 mb-2">Nos Services</h2>
          <p class="text-slate-600">Acc\xE9dez rapidement aux services du minist\xE8re</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Agr\xE9ment Technique</h3>
            <p class="text-sm text-slate-600 mb-4">Demande d'agr\xE9ment pour les entreprises du secteur informatique</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus \u2192
            </a>
          </div>
          
          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-accent-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Licences T\xE9l\xE9com</h3>
            <p class="text-sm text-slate-600 mb-4">Proc\xE9dures d'obtention des licences de t\xE9l\xE9communication</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus \u2192
            </a>
          </div>
          
          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Cybers\xE9curit\xE9</h3>
            <p class="text-sm text-slate-600 mb-4">Protection des syst\xE8mes d'information et donn\xE9es</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus \u2192
            </a>
          </div>
          
          <!-- Card 4 -->
          <div class="bg-white p-6 rounded-xl border border-slate-100 hover:border-accent-200 hover:shadow-soft transition-all">
            <div class="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Services Postaux</h3>
            <p class="text-sm text-slate-600 mb-4">D\xE9veloppement et modernisation du secteur postal</p>
            <a routerLink="/services" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
              En savoir plus \u2192
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section La Ministre -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Photo et infos -->
          <div class="lg:col-span-2">
            <div class="bg-slate-50 rounded-2xl p-8">
              <div class="w-32 h-32 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <span class="text-4xl font-bold text-primary-600">AZ</span>
              </div>
              <div class="text-center mb-6">
                <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-3">
                  La Ministre
                </span>
                <h3 class="text-xl font-bold text-slate-800">Dr Aminata ZERBO/SABANE</h3>
                <p class="text-primary-600 text-sm font-medium">Ministre de la Transition Digitale</p>
              </div>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between py-2 border-b border-slate-200">
                  <span class="text-slate-500">Nom</span>
                  <span class="font-medium text-slate-700">ZERBO/SABANE</span>
                </div>
                <div class="flex justify-between py-2 border-b border-slate-200">
                  <span class="text-slate-500">Pr\xE9nom</span>
                  <span class="font-medium text-slate-700">Aminata</span>
                </div>
                <div class="flex justify-between py-2">
                  <span class="text-slate-500">Profession</span>
                  <span class="font-medium text-slate-700">Enseignante en Informatique</span>
                </div>
              </div>
              <a routerLink="/ministere/ministre" class="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
                Voir la biographie
              </a>
            </div>
          </div>
          
          <!-- Description du minist\xE8re -->
          <div class="lg:col-span-3">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Le Minist\xE8re</h2>
            <div class="prose prose-slate max-w-none">
              <p class="text-slate-600 leading-relaxed mb-4">
                Le Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques 
                assure la mise en \u0153uvre et le suivi de la politique du gouvernement en mati\xE8re de 
                d\xE9veloppement de l'\xE9conomie num\xE9rique, des postes et de la transformation digitale.
              </p>
              <p class="text-slate-600 leading-relaxed mb-4">
                \xC0 ce titre et en relation avec les d\xE9partements minist\xE9riels comp\xE9tents, il est charg\xE9 
                entre autres du d\xE9veloppement des infrastructures des communications \xE9lectroniques, 
                de l'accompagnement, de la promotion des usages des TIC, du d\xE9veloppement des services 
                en ligne et des contenus locaux.
              </p>
              <p class="text-slate-600 leading-relaxed">
                Le Minist\xE8re \u0153uvre \xE9galement pour le d\xE9veloppement d'une industrie locale bas\xE9e sur les TIC, 
                ainsi que pour la modernisation et le d\xE9veloppement du secteur postal au Burkina Faso.
              </p>
            </div>
            
            <!-- Statistiques -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-primary-600">500+</p>
                <p class="text-xs text-slate-500 mt-1">Km Fibre Optique</p>
              </div>
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-accent-600">20</p>
                <p class="text-xs text-slate-500 mt-1">Centres Num\xE9riques</p>
              </div>
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-primary-600">5000+</p>
                <p class="text-xs text-slate-500 mt-1">Agents Form\xE9s</p>
              </div>
              <div class="text-center p-4 bg-slate-50 rounded-xl">
                <p class="text-2xl font-bold text-accent-600">90%</p>
                <p class="text-xs text-slate-500 mt-1">Couverture 4G</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Actualit\xE9s Dynamiques avec Auto-Refresh -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <div class="flex items-center gap-3">
              <h2 class="text-2xl font-bold text-slate-800">Actualit\xE9s r\xE9centes</h2>
              @if (isLoading()) {
                <div class="flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                  <svg class="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mise \xE0 jour...
                </div>
              } @else {
                <div class="flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                  <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  En direct
                </div>
              }
            </div>
            <p class="text-slate-600 mt-1">Restez inform\xE9 des derni\xE8res nouvelles \u2022 Mise \xE0 jour automatique toutes les 30 secondes</p>
          </div>
          <div class="hidden sm:flex items-center gap-4">
            <button (click)="refreshArticles()" 
                    class="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    [disabled]="isLoading()">
              <svg class="w-4 h-4" [class.animate-spin]="isLoading()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Actualiser
            </button>
            <a routerLink="/actualites" class="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Voir toutes
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Grille d'actualit\xE9s -->
        @if (articles().length === 0 && !isLoading()) {
          <div class="text-center py-12 bg-white rounded-xl border border-slate-100">
            <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            <h3 class="text-lg font-semibold text-slate-700 mb-2">Aucune actualit\xE9 disponible</h3>
            <p class="text-slate-500">Les actualit\xE9s seront affich\xE9es ici d\xE8s leur publication.</p>
          </div>
        } @else {
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (article of articles().slice(0, 8); track article.id; let i = $index) {
              <article class="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-soft hover:border-slate-200 transition-all group"
                       [class.animate-fadeIn]="isNewArticle(article.id)"
                       [style.animation-delay.ms]="i * 100">
                <!-- Image ou placeholder -->
                <div class="h-40 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center relative overflow-hidden">
                  @if (article.featuredImage) {
                    <img [src]="article.featuredImage" [alt]="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  } @else {
                    <svg class="w-12 h-12 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                  }
                  <!-- Badge nouveau -->
                  @if (isNewArticle(article.id)) {
                    <div class="absolute top-2 right-2 px-2 py-1 bg-accent-500 text-white text-xs font-bold rounded">
                      NOUVEAU
                    </div>
                  }
                </div>
                <div class="p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="inline-block px-2 py-0.5 text-xs font-medium rounded"
                          [class]="getCategoryClass(article.category)">
                      {{ getCategoryLabel(article.category) }}
                    </span>
                    @if (article.featured) {
                      <span class="inline-block px-2 py-0.5 bg-accent-50 text-accent-600 text-xs font-medium rounded">
                        \xC0 la une
                      </span>
                    }
                  </div>
                  <h3 class="font-semibold text-slate-800 mb-2 line-clamp-2 text-sm group-hover:text-primary-600 transition-colors">
                    <a [routerLink]="['/actualites', article.id]">{{ article.title }}</a>
                  </h3>
                  <p class="text-xs text-slate-500 line-clamp-2 mb-3">{{ article.summary }}</p>
                  <div class="flex items-center justify-between text-xs text-slate-400">
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {{ article.createdAt | date:'dd MMM yyyy':'':'fr' }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      {{ article.viewCount }} vues
                    </span>
                  </div>
                </div>
              </article>
            }
          </div>
        }
        
        <!-- Derni\xE8re mise \xE0 jour -->
        <div class="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
          <p class="text-xs text-slate-400">
            Derni\xE8re mise \xE0 jour : {{ lastUpdate() | date:'dd/MM/yyyy \xE0 HH:mm:ss':'':'fr' }}
          </p>
          <div class="sm:hidden">
            <a routerLink="/actualites" class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors">
              Voir toutes les actualit\xE9s
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl font-bold text-slate-800">Projets et Programmes</h2>
            <p class="text-slate-600 mt-1">Nos initiatives pour la transformation digitale</p>
          </div>
          <a routerLink="/projets" class="hidden sm:inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
            Voir tous
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects().slice(0, 3); track project.id) {
            <div class="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-soft hover:border-slate-200 transition-all">
              <div class="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-slate-800 mb-2">{{ project.name }}</h3>
              <p class="text-sm text-slate-600 mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-500">Progression</span>
                  <span class="font-medium text-primary-600">{{ project.progressPercentage }}%</span>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div class="h-full bg-primary-500 rounded-full transition-all duration-500" [style.width.%]="project.progressPercentage"></div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA Newsletter -->
    <section class="py-16 bg-primary-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Restez inform\xE9</h2>
        <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
          Inscrivez-vous \xE0 notre newsletter pour recevoir les derni\xE8res actualit\xE9s du minist\xE8re.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input type="email" placeholder="Votre adresse email" 
                 class="flex-1 px-4 py-3 rounded-lg border-0 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50">
          <button class="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors">
            S'abonner
          </button>
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:scss;f372ff439daa3e7704aac10b8bb2f110774c7b0754fc93b159880b15e88086f5;/home/ubuntu/Memc-burkina/frontend/Memc-web/src/app/features/home/home.component.ts */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fadeIn {\n  animation: fadeIn 0.5s ease-out forwards;\n}\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 416 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-WYI5EAPC.js.map
