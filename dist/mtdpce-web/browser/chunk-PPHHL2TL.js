import {
  AuthService
} from "./chunk-6HFIGEJQ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-YDHKLCGD.js";
import "./chunk-DGOPQNLS.js";
import {
  CommonModule,
  Component,
  HostListener,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/layouts/public/header.component.ts
var _c0 = () => ({ exact: true });
function HeaderComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 35);
  }
}
function HeaderComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 36);
  }
}
function HeaderComponent_Conditional_59_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "a", 53);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Conditional_9_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(2, "Le Ministre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 54);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Conditional_9_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(4, "Missions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 55);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Conditional_9_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(6, "Organigramme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 56);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Conditional_9_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(8, "Structures Rattach\xE9es");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "nav", 39)(2, "a", 40);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(3, " Accueil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "button", 41);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSubmenu("ministere"));
    });
    \u0275\u0275text(6, " Minist\xE8re ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 42);
    \u0275\u0275element(8, "path", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, HeaderComponent_Conditional_59_Conditional_9_Template, 9, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "a", 44);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(11, "Actualit\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 45);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(13, "Projets et Programmes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 46);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(15, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 47);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(17, "\xC9v\xE9nements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 48);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(19, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 49);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(21, "FAQ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 50);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(23, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 51)(25, "a", 52);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_59_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(26, " Administration ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("rotate-180", ctx_r1.openSubmenu() === "ministere");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.openSubmenu() === "ministere" ? 9 : -1);
  }
}
function HeaderComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 1)(2, "div", 57);
    \u0275\u0275element(3, "input", 58);
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 30);
    \u0275\u0275element(6, "path", 31);
    \u0275\u0275elementEnd()()()()();
  }
}
var HeaderComponent = class _HeaderComponent {
  authService = inject(AuthService);
  mobileMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileMenuOpen" }] : []);
  searchOpen = signal(false, ...ngDevMode ? [{ debugName: "searchOpen" }] : []);
  openSubmenu = signal(null, ...ngDevMode ? [{ debugName: "openSubmenu" }] : []);
  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
    if (!this.mobileMenuOpen()) {
      this.openSubmenu.set(null);
    }
  }
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    this.openSubmenu.set(null);
  }
  toggleSearch() {
    this.searchOpen.update((v) => !v);
  }
  toggleSubmenu(menu) {
    this.openSubmenu.update((v) => v === menu ? null : menu);
  }
  onResize() {
    if (window.innerWidth >= 1024) {
      this.mobileMenuOpen.set(false);
      this.openSubmenu.set(null);
    }
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function HeaderComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 61, vars: 5, consts: [[1, "bg-white", "sticky", "top-0", "z-50", "border-b", "border-slate-100"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "items-center", "justify-between", "h-16"], ["routerLink", "/", 1, "flex", "items-center", "gap-3", "group"], [1, "w-10", "h-10", "bg-primary-500", "rounded-lg", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "hidden", "md:block"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "text-sm", "text-danger-500", "font-bold", "ml-1"], [1, "hidden", "lg:flex", "items-center", "gap-1"], ["routerLink", "/", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors", 3, "routerLinkActiveOptions"], [1, "relative", "group"], [1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors", "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform", "group-hover:rotate-180"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "absolute", "top-full", "left-0", "mt-1", "w-56", "bg-white", "rounded-lg", "shadow-soft", "border", "border-slate-100", "py-1", "opacity-0", "invisible", "group-hover:opacity-100", "group-hover:visible", "transition-all", "duration-200"], ["routerLink", "/ministere/ministre", 1, "block", "px-4", "py-2.5", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors"], ["routerLink", "/ministere/missions", 1, "block", "px-4", "py-2.5", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors"], ["routerLink", "/ministere/organigramme", 1, "block", "px-4", "py-2.5", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors"], ["routerLink", "/ministere/structures", 1, "block", "px-4", "py-2.5", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors"], ["routerLink", "/actualites", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors"], ["routerLink", "/projets", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors"], ["routerLink", "/services", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors"], ["routerLink", "/evenements", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors"], ["routerLink", "/documents", 1, "block", "px-4", "py-2.5", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors"], ["routerLink", "/faq", 1, "block", "px-4", "py-2.5", "text-sm", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors"], ["routerLink", "/contact", "routerLinkActive", "text-primary-600 bg-primary-50", 1, "px-4", "py-2", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:text-primary-600", "hover:bg-primary-50", "transition-colors"], [1, "flex", "items-center", "gap-2"], [1, "p-2", "rounded-lg", "text-slate-500", "hover:text-slate-700", "hover:bg-slate-100", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["routerLink", "/admin", 1, "hidden", "sm:inline-flex", "items-center", "gap-2", "px-4", "py-2", "bg-primary-500", "text-white", "text-sm", "font-medium", "rounded-lg", "hover:bg-primary-600", "transition-colors"], [1, "lg:hidden", "p-2", "rounded-lg", "text-slate-500", "hover:text-slate-700", "hover:bg-slate-100", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], [1, "lg:hidden", "bg-white", "border-t", "border-slate-100"], [1, "bg-slate-50", "border-t", "border-slate-100", "py-4"], [1, "max-w-7xl", "mx-auto", "px-4", "py-4", "space-y-1"], ["routerLink", "/", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], [1, "w-full", "flex", "items-center", "justify-between", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "transition-transform"], [1, "ml-4", "mt-1", "space-y-1"], ["routerLink", "/actualites", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/projets", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/services", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/evenements", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/documents", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/faq", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/contact", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-slate-600", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], [1, "pt-2", "border-t", "border-slate-100"], ["routerLink", "/admin", 1, "block", "px-4", "py-2.5", "rounded-lg", "text-sm", "font-medium", "text-white", "bg-primary-500", "hover:bg-primary-600", "text-center", "transition-colors", 3, "click"], ["routerLink", "/ministere/ministre", 1, "block", "px-4", "py-2", "rounded-lg", "text-sm", "text-slate-500", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/ministere/missions", 1, "block", "px-4", "py-2", "rounded-lg", "text-sm", "text-slate-500", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/ministere/organigramme", 1, "block", "px-4", "py-2", "rounded-lg", "text-sm", "text-slate-500", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], ["routerLink", "/ministere/structures", 1, "block", "px-4", "py-2", "rounded-lg", "text-sm", "text-slate-500", "hover:bg-primary-50", "hover:text-primary-600", "transition-colors", 3, "click"], [1, "relative", "max-w-xl", "mx-auto"], ["type", "text", "placeholder", "Rechercher sur le site...", 1, "w-full", "px-4", "py-2.5", "pr-10", "rounded-lg", "border", "border-slate-200", "bg-white", "text-sm", "placeholder-slate-400", "focus:outline-none", "focus:ring-2", "focus:ring-primary-500/20", "focus:border-primary-500", "transition-all"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-slate-400", "hover:text-primary-500", "transition-colors"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7)(8, "span", 8);
      \u0275\u0275text(9, "Memc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "Burkina Faso");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "nav", 10)(13, "a", 11);
      \u0275\u0275text(14, " Accueil ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
      \u0275\u0275text(17, " Minist\xE8re ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 14);
      \u0275\u0275element(19, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "div", 16)(21, "a", 17);
      \u0275\u0275text(22, " Le Ministre ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 18);
      \u0275\u0275text(24, " Missions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 19);
      \u0275\u0275text(26, " Organigramme ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 20);
      \u0275\u0275text(28, " Structures Rattach\xE9es ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "a", 21);
      \u0275\u0275text(30, " Actualit\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 22);
      \u0275\u0275text(32, " Projets et Programmes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 23);
      \u0275\u0275text(34, " Services ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 24);
      \u0275\u0275text(36, " \xC9v\xE9nements ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 12)(38, "button", 13);
      \u0275\u0275text(39, " Ressources ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 14);
      \u0275\u0275element(41, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "div", 16)(43, "a", 25);
      \u0275\u0275text(44, " Documents ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "a", 26);
      \u0275\u0275text(46, " FAQ ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "a", 27);
      \u0275\u0275text(48, " Contact ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 28)(50, "button", 29);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_50_listener() {
        return ctx.toggleSearch();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(51, "svg", 30);
      \u0275\u0275element(52, "path", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "a", 32);
      \u0275\u0275text(54, " Administration ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 33);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_55_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 34);
      \u0275\u0275conditionalCreate(57, HeaderComponent_Conditional_57_Template, 1, 0, ":svg:path", 35)(58, HeaderComponent_Conditional_58_Template, 1, 0, ":svg:path", 36);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(59, HeaderComponent_Conditional_59_Template, 27, 3, "div", 37);
      \u0275\u0275conditionalCreate(60, HeaderComponent_Conditional_60_Template, 7, 0, "div", 38);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(44);
      \u0275\u0275conditional(ctx.mobileMenuOpen() ? 57 : 58);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.mobileMenuOpen() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.searchOpen() ? 60 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "app-header",
      standalone: true,
      imports: [CommonModule, RouterLink, RouterLinkActive],
      template: `
    <!-- Header Principal - Design soft inspir\xE9 de petitions.gov.bf -->
    <header class="bg-white sticky top-0 z-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo et Nom du Minist\xE8re -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div class="hidden md:block">
              <span class="text-sm font-semibold text-slate-800">Memc</span>
              <span class="text-sm text-danger-500 font-bold ml-1">Burkina Faso</span>
            </div>
          </a>
          
          <!-- Navigation Desktop -->
          <nav class="hidden lg:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="text-primary-600 bg-primary-50" [routerLinkActiveOptions]="{exact: true}"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Accueil
            </a>
            
            <!-- Menu Minist\xE8re -->
            <div class="relative group">
              <button class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center gap-1">
                Minist\xE8re
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
                  Structures Rattach\xE9es
                </a>
              </div>
            </div>
            
            <a routerLink="/actualites" routerLinkActive="text-primary-600 bg-primary-50"
               class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">
              Actualit\xE9s
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
              \xC9v\xE9nements
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
                Minist\xE8re
                <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openSubmenu() === 'ministere'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              @if (openSubmenu() === 'ministere') {
                <div class="ml-4 mt-1 space-y-1">
                  <a routerLink="/ministere/ministre" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Le Ministre</a>
                  <a routerLink="/ministere/missions" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Missions</a>
                  <a routerLink="/ministere/organigramme" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Organigramme</a>
                  <a routerLink="/ministere/structures" (click)="closeMobileMenu()" class="block px-4 py-2 rounded-lg text-sm text-slate-500 hover:bg-primary-50 hover:text-primary-600 transition-colors">Structures Rattach\xE9es</a>
                </div>
              }
            </div>
            
            <a routerLink="/actualites" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Actualit\xE9s</a>
            <a routerLink="/projets" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Projets et Programmes</a>
            <a routerLink="/services" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Services</a>
            <a routerLink="/evenements" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">\xC9v\xE9nements</a>
            <a routerLink="/documents" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">Documents</a>
            <a routerLink="/faq" (click)="closeMobileMenu()" class="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">FAQ</a>
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
    }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layouts/public/header.component.ts", lineNumber: 192 });
})();

// src/app/layouts/public/footer.component.ts
var FooterComponent = class _FooterComponent {
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 108, vars: 1, consts: [[1, "bg-slate-50", "border-t", "border-slate-100"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-12"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-4", "gap-8"], [1, "flex", "items-center", "gap-3", "mb-4"], [1, "w-10", "h-10", "bg-primary-500", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "font-semibold", "text-slate-800"], [1, "text-danger-500", "font-bold", "ml-1"], [1, "text-sm", "text-slate-600", "leading-relaxed"], [1, "font-semibold", "text-slate-800", "mb-4"], [1, "space-y-2"], ["routerLink", "/", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["routerLink", "/ministere/ministre", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["routerLink", "/actualites", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["routerLink", "/projets", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["routerLink", "/documents", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["routerLink", "/contact", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["href", "https://www.presidence.gov.bf", "target", "_blank", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["href", "https://www.gouvernement.gov.bf", "target", "_blank", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["href", "https://www.an.bf", "target", "_blank", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["href", "https://www.sig.gov.bf", "target", "_blank", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["href", "https://www.anptic.gov.bf", "target", "_blank", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], ["href", "https://www.service-public.gov.bf", "target", "_blank", 1, "text-sm", "text-slate-600", "hover:text-primary-600", "transition-colors"], [1, "space-y-3"], [1, "flex", "items-start", "gap-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-primary-500", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "text-sm", "text-slate-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "flex", "items-center", "gap-3", "mt-6"], ["href", "https://facebook.com", "target", "_blank", 1, "w-9", "h-9", "bg-slate-200", "hover:bg-primary-500", "text-slate-600", "hover:text-white", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["d", "M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"], ["href", "https://twitter.com", "target", "_blank", 1, "w-9", "h-9", "bg-slate-200", "hover:bg-primary-500", "text-slate-600", "hover:text-white", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["d", "M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14Z"], ["href", "https://youtube.com", "target", "_blank", 1, "w-9", "h-9", "bg-slate-200", "hover:bg-primary-500", "text-slate-600", "hover:text-white", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["d", "M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.56,31.56,0,0,0,0,12a31.56,31.56,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.56,31.56,0,0,0,24,12,31.56,31.56,0,0,0,23.5,6.19ZM9.55,15.57V8.43L15.82,12Z"], ["href", "https://linkedin.com", "target", "_blank", 1, "w-9", "h-9", "bg-slate-200", "hover:bg-primary-500", "text-slate-600", "hover:text-white", "rounded-lg", "flex", "items-center", "justify-center", "transition-colors"], ["d", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"], [1, "border-t", "border-slate-200", "bg-white"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-4"], [1, "flex", "flex-col", "md:flex-row", "items-center", "justify-between", "gap-4"], [1, "text-sm", "text-slate-500"], [1, "flex", "items-center", "gap-4", "text-sm", "text-slate-500"], ["href", "#", 1, "hover:text-primary-600", "transition-colors"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "div", 3)(5, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div")(9, "span", 7);
      \u0275\u0275text(10, "Memc");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 8);
      \u0275\u0275text(12, "Burkina Faso");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "p", 9);
      \u0275\u0275text(14, " Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques du Burkina Faso. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div")(16, "h4", 10);
      \u0275\u0275text(17, "Liens rapides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ul", 11)(19, "li")(20, "a", 12);
      \u0275\u0275text(21, "Accueil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 13);
      \u0275\u0275text(24, "Le Ministre");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 14);
      \u0275\u0275text(27, "Actualit\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 15);
      \u0275\u0275text(30, "Projets et Programmes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 16);
      \u0275\u0275text(33, "Documents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 17);
      \u0275\u0275text(36, "Contact");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div")(38, "h4", 10);
      \u0275\u0275text(39, "Annuaire officiel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "ul", 11)(41, "li")(42, "a", 18);
      \u0275\u0275text(43, "Pr\xE9sidence du Faso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 19);
      \u0275\u0275text(46, "Gouvernement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 20);
      \u0275\u0275text(49, "Assembl\xE9e Nationale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 21);
      \u0275\u0275text(52, "SIG");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 22);
      \u0275\u0275text(55, "ANPTIC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 23);
      \u0275\u0275text(58, "Service Public");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(59, "div")(60, "h4", 10);
      \u0275\u0275text(61, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "ul", 24)(63, "li", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 26);
      \u0275\u0275element(65, "path", 27)(66, "path", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "span", 29);
      \u0275\u0275text(68, "Ouagadougou, Burkina Faso");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(70, "svg", 26);
      \u0275\u0275element(71, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(72, "span", 29);
      \u0275\u0275text(73, "+226 25 30 XX XX");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(75, "svg", 26);
      \u0275\u0275element(76, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(77, "span", 29);
      \u0275\u0275text(78, "contact@Memc.gov.bf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 32)(80, "a", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(81, "svg", 34);
      \u0275\u0275element(82, "path", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(83, "a", 36);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 34);
      \u0275\u0275element(85, "path", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(86, "a", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 34);
      \u0275\u0275element(88, "path", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(89, "a", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(90, "svg", 34);
      \u0275\u0275element(91, "path", 41);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(92, "div", 42)(93, "div", 43)(94, "div", 44)(95, "p", 45);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 46)(98, "a", 47);
      \u0275\u0275text(99, "Mentions l\xE9gales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "span");
      \u0275\u0275text(101, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "a", 47);
      \u0275\u0275text(103, "Politique de confidentialit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span");
      \u0275\u0275text(105, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "a", 47);
      \u0275\u0275text(107, "Plan du site");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(96);
      \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " Memc Burkina Faso. Tous droits r\xE9serv\xE9s. ");
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "app-footer",
      standalone: true,
      imports: [CommonModule, RouterLink],
      template: `
    <footer class="bg-slate-50 border-t border-slate-100">
      <!-- Contenu principal -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- \xC0 propos -->
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
              Minist\xE8re de la Transition Digitale, des Postes et des Communications \xC9lectroniques du Burkina Faso.
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
                <a routerLink="/actualites" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Actualit\xE9s</a>
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
                <a href="https://www.presidence.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Pr\xE9sidence du Faso</a>
              </li>
              <li>
                <a href="https://www.gouvernement.gov.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Gouvernement</a>
              </li>
              <li>
                <a href="https://www.an.bf" target="_blank" class="text-sm text-slate-600 hover:text-primary-600 transition-colors">Assembl\xE9e Nationale</a>
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
            
            <!-- R\xE9seaux sociaux -->
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
              \xA9 {{ currentYear }} Memc Burkina Faso. Tous droits r\xE9serv\xE9s.
            </p>
            <div class="flex items-center gap-4 text-sm text-slate-500">
              <a href="#" class="hover:text-primary-600 transition-colors">Mentions l\xE9gales</a>
              <span>\u2022</span>
              <a href="#" class="hover:text-primary-600 transition-colors">Politique de confidentialit\xE9</a>
              <span>\u2022</span>
              <a href="#" class="hover:text-primary-600 transition-colors">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layouts/public/footer.component.ts", lineNumber: 146 });
})();

// src/app/layouts/public/public-layout.component.ts
var PublicLayoutComponent = class _PublicLayoutComponent {
  static \u0275fac = function PublicLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 5, vars: 0, consts: [[1, "min-h-screen", "flex", "flex-col"], [1, "flex-1"]], template: function PublicLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, HeaderComponent, FooterComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicLayoutComponent, [{
    type: Component,
    args: [{
      selector: "app-public-layout",
      standalone: true,
      imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
      template: `
    <div class="min-h-screen flex flex-col">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "src/app/layouts/public/public-layout.component.ts", lineNumber: 21 });
})();
export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-PPHHL2TL.js.map
