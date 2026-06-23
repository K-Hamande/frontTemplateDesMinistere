import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-4JYODSSI.js";
import {
  ApiService
} from "./chunk-ECCWOC2D.js";
import "./chunk-DGOPQNLS.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/faq/faq.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FAQComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function FAQComponent_For_20_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedCategory === category_r2 ? "bg-emerald-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2, " ");
  }
}
function FAQComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p", 27);
    \u0275\u0275text(3, "Chargement des questions...");
    \u0275\u0275elementEnd()();
  }
}
function FAQComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4, "Aucune question trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function FAQComponent_Conditional_26_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, " R ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 42)(6, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 44);
    \u0275\u0275element(8, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 44);
    \u0275\u0275element(12, "path", 46)(13, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const faq_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", faq_r5.answer, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", faq_r5.category, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", faq_r5.viewCount, " vues ");
  }
}
function FAQComponent_Conditional_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "button", 32);
    \u0275\u0275listener("click", function FAQComponent_Conditional_26_For_1_Template_button_click_1_listener() {
      const faq_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFaq(faq_r5.id));
    });
    \u0275\u0275elementStart(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4, " Q ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 36);
    \u0275\u0275element(8, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, FAQComponent_Conditional_26_For_1_Conditional_9_Template, 15, 3, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(faq_r5.question);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.expandedFaq === faq_r5.id ? "rotate-180" : "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.expandedFaq === faq_r5.id ? 9 : -1);
  }
}
function FAQComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FAQComponent_Conditional_26_For_1_Template, 10, 4, "div", 31, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filteredFaqs());
  }
}
var FAQComponent = class _FAQComponent {
  apiService;
  faqs = signal([], ...ngDevMode ? [{ debugName: "faqs" }] : []);
  filteredFaqs = signal([], ...ngDevMode ? [{ debugName: "filteredFaqs" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  searchQuery = "";
  selectedCategory = "all";
  expandedFaq = null;
  categories = ["Services en ligne", "D\xE9marches administratives", "Informations g\xE9n\xE9rales", "Technique"];
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadFAQs();
  }
  loadFAQs() {
    this.loading.set(true);
    this.apiService.getPublicFAQs().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.faqs.set(response.data);
          this.filteredFaqs.set(response.data);
        }
        this.loading.set(false);
      },
      error: () => {
        const mockFaqs = [
          {
            id: 1,
            question: "Comment puis-je acc\xE9der aux services en ligne du minist\xE8re ?",
            answer: "Pour acc\xE9der aux services en ligne, rendez-vous sur notre portail de services et cr\xE9ez un compte utilisateur. Une fois votre compte activ\xE9, vous pourrez effectuer vos d\xE9marches administratives en ligne.",
            category: "Services en ligne",
            displayOrder: 1,
            viewCount: 245,
            isActive: true,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 2,
            question: "Quels sont les documents n\xE9cessaires pour une demande d'agr\xE9ment ?",
            answer: "Pour une demande d'agr\xE9ment, vous devez fournir : une copie de votre pi\xE8ce d'identit\xE9, un extrait de casier judiciaire de moins de 3 mois, les statuts de votre entreprise, et le formulaire de demande d\xFBment rempli.",
            category: "D\xE9marches administratives",
            displayOrder: 2,
            viewCount: 189,
            isActive: true,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 3,
            question: "Quel est le d\xE9lai de traitement d'une demande ?",
            answer: "Le d\xE9lai de traitement varie selon le type de demande. En g\xE9n\xE9ral, comptez entre 5 et 15 jours ouvrables. Vous pouvez suivre l'\xE9tat de votre demande en ligne via votre espace personnel.",
            category: "D\xE9marches administratives",
            displayOrder: 3,
            viewCount: 312,
            isActive: true,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 4,
            question: "Comment contacter le service technique ?",
            answer: "Vous pouvez contacter notre service technique par email \xE0 support@Memc.gov.bf ou par t\xE9l\xE9phone au +226 25 30 XX XX du lundi au vendredi de 8h \xE0 17h.",
            category: "Technique",
            displayOrder: 4,
            viewCount: 156,
            isActive: true,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 5,
            question: "Quels sont les horaires d'ouverture du minist\xE8re ?",
            answer: "Le minist\xE8re est ouvert du lundi au vendredi de 7h30 \xE0 12h30 et de 15h00 \xE0 17h30. Les services d'accueil sont disponibles pendant ces horaires pour r\xE9pondre \xE0 vos questions.",
            category: "Informations g\xE9n\xE9rales",
            displayOrder: 5,
            viewCount: 423,
            isActive: true,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        ];
        this.faqs.set(mockFaqs);
        this.filteredFaqs.set(mockFaqs);
        this.loading.set(false);
      }
    });
  }
  onSearch() {
    this.filterFaqs();
  }
  filterByCategory(category) {
    this.selectedCategory = category;
    this.filterFaqs();
  }
  filterFaqs() {
    let filtered = this.faqs();
    if (this.selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === this.selectedCategory);
    }
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((faq) => faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query));
    }
    this.filteredFaqs.set(filtered);
  }
  toggleFaq(id) {
    this.expandedFaq = this.expandedFaq === id ? null : id;
  }
  static \u0275fac = function FAQComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FAQComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FAQComponent, selectors: [["app-faq"]], decls: 38, vars: 4, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-gradient-to-r", "from-emerald-600", "to-emerald-700", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-xl", "text-emerald-100"], [1, "py-8", "bg-white", "shadow-sm"], [1, "max-w-2xl", "mx-auto"], [1, "relative"], ["type", "text", "placeholder", "Rechercher une question...", 1, "w-full", "px-6", "py-4", "pl-14", "border", "border-gray-200", "rounded-xl", "focus:ring-2", "focus:ring-emerald-500", "focus:border-emerald-500", "text-lg", 3, "ngModelChange", "input", "ngModel"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-5", "top-1/2", "transform", "-translate-y-1/2", "w-5", "h-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "py-6", "bg-gray-50"], [1, "flex", "flex-wrap", "justify-center", "gap-3"], [1, "px-6", "py-2", "rounded-full", "font-medium", "transition-colors", "border", "border-gray-200", 3, "click"], [1, "px-6", "py-2", "rounded-full", "font-medium", "transition-colors", "border", "border-gray-200", 3, "class"], [1, "py-12"], [1, "max-w-4xl", "mx-auto", "space-y-4"], [1, "text-center", "py-12"], [1, "text-center", "py-12", "bg-white", "rounded-xl", "shadow-sm"], [1, "py-12", "bg-white"], [1, "max-w-2xl", "mx-auto", "text-center"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600", "mb-6"], ["routerLink", "/contact", 1, "inline-flex", "items-center", "gap-2", "bg-emerald-600", "text-white", "px-8", "py-3", "rounded-lg", "font-medium", "hover:bg-emerald-700", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-emerald-600", "mx-auto"], [1, "mt-4", "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-gray-500", "text-lg"], [1, "bg-white", "rounded-xl", "shadow-sm", "overflow-hidden"], [1, "w-full", "px-6", "py-5", "text-left", "flex", "items-center", "justify-between", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex", "items-start", "gap-4"], [1, "flex-shrink-0", "w-8", "h-8", "bg-emerald-100", "text-emerald-600", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "text-sm"], [1, "font-medium", "text-gray-900"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-500", "transition-transform", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "px-6", "pb-5", "pt-2", "border-t", "border-gray-100"], [1, "flex", "gap-4"], [1, "flex-shrink-0", "w-8", "h-8", "bg-amber-100", "text-amber-600", "rounded-full", "flex", "items-center", "justify-center", "font-bold", "text-sm"], [1, "text-gray-600", "leading-relaxed", 3, "innerHTML"], [1, "mt-4", "flex", "items-center", "gap-4", "text-sm", "text-gray-400"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"]], template: function FAQComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Foire Aux Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Trouvez rapidement des r\xE9ponses \xE0 vos questions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 5)(8, "div", 2)(9, "div", 6)(10, "div", 7)(11, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function FAQComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function FAQComponent_Template_input_input_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 9);
      \u0275\u0275element(13, "path", 10);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "section", 11)(15, "div", 2)(16, "div", 12)(17, "button", 13);
      \u0275\u0275listener("click", function FAQComponent_Template_button_click_17_listener() {
        return ctx.filterByCategory("all");
      });
      \u0275\u0275text(18, " Toutes les questions ");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(19, FAQComponent_For_20_Template, 2, 3, "button", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "section", 15)(22, "div", 2)(23, "div", 16);
      \u0275\u0275conditionalCreate(24, FAQComponent_Conditional_24_Template, 4, 0, "div", 17)(25, FAQComponent_Conditional_25_Template, 5, 0, "div", 18)(26, FAQComponent_Conditional_26_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "section", 19)(28, "div", 2)(29, "div", 20)(30, "h2", 21);
      \u0275\u0275text(31, "Vous n'avez pas trouv\xE9 votre r\xE9ponse ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 22);
      \u0275\u0275text(33, "Notre \xE9quipe est disponible pour r\xE9pondre \xE0 toutes vos questions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "a", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 24);
      \u0275\u0275element(36, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " Nous contacter ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(6);
      \u0275\u0275classMap(ctx.selectedCategory === "all" ? "bg-emerald-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 24 : ctx.filteredFaqs().length === 0 ? 25 : 26);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FAQComponent, [{
    type: Component,
    args: [{
      selector: "app-faq",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Foire Aux Questions</h1>
          <p class="text-xl text-emerald-100">Trouvez rapidement des r\xE9ponses \xE0 vos questions</p>
        </div>
      </section>

      <!-- Search Section -->
      <section class="py-8 bg-white shadow-sm">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (input)="onSearch()"
                placeholder="Rechercher une question..."
                class="w-full px-6 py-4 pl-14 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
              />
              <svg class="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Categories -->
      <section class="py-6 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center gap-3">
            <button
              (click)="filterByCategory('all')"
              [class]="selectedCategory === 'all' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
              class="px-6 py-2 rounded-full font-medium transition-colors border border-gray-200"
            >
              Toutes les questions
            </button>
            @for (category of categories; track category) {
              <button
                (click)="filterByCategory(category)"
                [class]="selectedCategory === category ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
                class="px-6 py-2 rounded-full font-medium transition-colors border border-gray-200"
              >
                {{ category }}
              </button>
            }
          </div>
        </div>
      </section>

      <!-- FAQ List -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto space-y-4">
            @if (loading()) {
              <div class="text-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
                <p class="mt-4 text-gray-600">Chargement des questions...</p>
              </div>
            } @else if (filteredFaqs().length === 0) {
              <div class="text-center py-12 bg-white rounded-xl shadow-sm">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-gray-500 text-lg">Aucune question trouv\xE9e</p>
              </div>
            } @else {
              @for (faq of filteredFaqs(); track faq.id) {
                <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    (click)="toggleFaq(faq.id)"
                    class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div class="flex items-start gap-4">
                      <span class="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                        Q
                      </span>
                      <span class="font-medium text-gray-900">{{ faq.question }}</span>
                    </div>
                    <svg
                      [class]="expandedFaq === faq.id ? 'rotate-180' : ''"
                      class="w-5 h-5 text-gray-500 transition-transform flex-shrink-0"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  @if (expandedFaq === faq.id) {
                    <div class="px-6 pb-5 pt-2 border-t border-gray-100">
                      <div class="flex gap-4">
                        <span class="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm">
                          R
                        </span>
                        <div class="text-gray-600 leading-relaxed" [innerHTML]="faq.answer"></div>
                      </div>
                      <div class="mt-4 flex items-center gap-4 text-sm text-gray-400">
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                          </svg>
                          {{ faq.category }}
                        </span>
                        <span class="flex items-center gap-1">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          {{ faq.viewCount }} vues
                        </span>
                      </div>
                    </div>
                  }
                </div>
              }
            }
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Vous n'avez pas trouv\xE9 votre r\xE9ponse ?</h2>
            <p class="text-gray-600 mb-6">Notre \xE9quipe est disponible pour r\xE9pondre \xE0 toutes vos questions.</p>
            <a
              routerLink="/contact"
              class="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FAQComponent, { className: "FAQComponent", filePath: "src/app/features/faq/faq.component.ts", lineNumber: 155 });
})();
export {
  FAQComponent
};
//# sourceMappingURL=chunk-LLNPSI44.js.map
