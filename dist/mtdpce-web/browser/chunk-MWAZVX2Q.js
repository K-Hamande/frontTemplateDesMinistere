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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-WCAZC6LL.js";

// src/app/features/contact/contact.component.ts
function ContactComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Votre message a \xE9t\xE9 envoy\xE9 avec succ\xE8s. Nous vous r\xE9pondrons dans les plus brefs d\xE9lais.");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ContactComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "circle", 52)(2, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Envoi en cours... ");
  }
}
function ContactComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Envoyer le message ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 55);
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  apiService;
  form = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  };
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  success = signal(false, ...ngDevMode ? [{ debugName: "success" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor(apiService) {
    this.apiService = apiService;
  }
  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      this.error.set("Veuillez remplir tous les champs obligatoires");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.success.set(false);
    this.apiService.submitContact(this.form).subscribe({
      next: (response) => {
        if (response.success) {
          this.success.set(true);
          this.form = { name: "", email: "", phone: "", subject: "", message: "" };
        } else {
          this.error.set(response.message || "Une erreur est survenue");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.error?.message || "Une erreur est survenue lors de l'envoi");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 102, vars: 9, consts: [[1, "relative", "bg-gradient-to-br", "from-white", "via-burkina-green-50", "to-slate-50", "py-16", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "w-96", "h-96", "bg-burkina-green-100/30", "rounded-full", "-translate-y-1/2", "translate-x-1/2", "blur-3xl"], [1, "absolute", "bottom-0", "left-0", "w-72", "h-72", "bg-burkina-yellow-100/30", "rounded-full", "translate-y-1/2", "-translate-x-1/2", "blur-3xl"], [1, "container", "mx-auto", "px-4", "relative", "z-10"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "bg-burkina-green-100", "rounded-full", "text-burkina-green", "text-sm", "font-medium", "mb-4", "border", "border-burkina-green-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "text-4xl", "lg:text-5xl", "font-heading", "font-bold", "text-slate-900", "mb-4"], [1, "text-slate-600", "text-lg", "max-w-2xl"], [1, "py-16", "bg-white"], [1, "container", "mx-auto", "px-4"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-8"], [1, "lg:col-span-1"], [1, "card", "p-6", "mb-6", "bg-white"], [1, "text-lg", "font-semibold", "text-slate-900", "mb-6"], [1, "space-y-5"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "bg-burkina-green-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-burkina-green"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "font-medium", "text-slate-900"], [1, "text-slate-500", "text-sm", "mt-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "card", "p-0", "overflow-hidden", "bg-white"], [1, "h-48", "bg-gradient-to-br", "from-slate-100", "to-slate-200", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-12", "h-12", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"], [1, "lg:col-span-2"], [1, "card", "p-8", "bg-white"], [1, "text-xl", "font-semibold", "text-slate-900", "mb-6"], [1, "flex", "items-center", "gap-3", "p-4", "bg-burkina-green-50", "border", "border-burkina-green-200", "rounded-xl", "text-burkina-green-800", "mb-6"], [1, "flex", "items-center", "gap-3", "p-4", "bg-burkina-red-50", "border", "border-burkina-red-200", "rounded-xl", "text-burkina-red-800", "mb-6"], [1, "space-y-5", 3, "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5"], ["for", "name", 1, "input-label"], [1, "text-burkina-red"], ["type", "text", "id", "name", "name", "name", "placeholder", "Votre nom", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "input-label"], ["type", "email", "id", "email", "name", "email", "placeholder", "votre@email.com", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "phone", 1, "input-label"], ["type", "tel", "id", "phone", "name", "phone", "placeholder", "+226 XX XX XX XX", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "subject", 1, "input-label"], ["type", "text", "id", "subject", "name", "subject", "placeholder", "Objet de votre message", "required", "", 1, "input", 3, "ngModelChange", "ngModel"], ["for", "message", 1, "input-label"], ["id", "message", "name", "message", "rows", "5", "placeholder", "D\xE9crivez votre demande...", "required", "", 1, "textarea", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary", "py-3", "px-6", 3, "disabled"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-5", "h-5", "mr-2"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Contact ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, "Contactez-nous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, " Vous avez une question ou une demande ? Notre \xE9quipe est \xE0 votre disposition pour vous r\xE9pondre. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "section", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h3", 14);
      \u0275\u0275text(18, "Informations de contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul", 15)(20, "li", 16)(21, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 18);
      \u0275\u0275element(23, "path", 19)(24, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "div")(26, "p", 21);
      \u0275\u0275text(27, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 22);
      \u0275\u0275text(29, "Avenue de l'Ind\xE9pendance");
      \u0275\u0275element(30, "br");
      \u0275\u0275text(31, "Ouagadougou, Burkina Faso");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "li", 16)(33, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 18);
      \u0275\u0275element(35, "path", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "div")(37, "p", 21);
      \u0275\u0275text(38, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p", 22);
      \u0275\u0275text(40, "+226 25 30 60 00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "li", 16)(42, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 18);
      \u0275\u0275element(44, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div")(46, "p", 21);
      \u0275\u0275text(47, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "p", 22);
      \u0275\u0275text(49, "contact@Memc.gov.bf");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "li", 16)(51, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 18);
      \u0275\u0275element(53, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "div")(55, "p", 21);
      \u0275\u0275text(56, "Horaires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 22);
      \u0275\u0275text(58, "Lun - Ven: 7h30 - 12h30, 15h - 17h30");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(59, "div", 25)(60, "div", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 27);
      \u0275\u0275element(62, "path", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "div", 29)(64, "div", 30)(65, "h3", 31);
      \u0275\u0275text(66, "Envoyez-nous un message");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(67, ContactComponent_Conditional_67_Template, 5, 0, "div", 32);
      \u0275\u0275conditionalCreate(68, ContactComponent_Conditional_68_Template, 5, 1, "div", 33);
      \u0275\u0275elementStart(69, "form", 34);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_69_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(70, "div", 35)(71, "div")(72, "label", 36);
      \u0275\u0275text(73, "Nom complet ");
      \u0275\u0275elementStart(74, "span", 37);
      \u0275\u0275text(75, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.name, $event) || (ctx.form.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div")(78, "label", 39);
      \u0275\u0275text(79, "Email ");
      \u0275\u0275elementStart(80, "span", 37);
      \u0275\u0275text(81, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_82_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div")(84, "label", 41);
      \u0275\u0275text(85, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div")(88, "label", 43);
      \u0275\u0275text(89, "Sujet ");
      \u0275\u0275elementStart(90, "span", 37);
      \u0275\u0275text(91, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_input_ngModelChange_92_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.subject, $event) || (ctx.form.subject = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div")(94, "label", 45);
      \u0275\u0275text(95, "Message ");
      \u0275\u0275elementStart(96, "span", 37);
      \u0275\u0275text(97, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "textarea", 46);
      \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_98_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.message, $event) || (ctx.form.message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "button", 47);
      \u0275\u0275conditionalCreate(100, ContactComponent_Conditional_100_Template, 4, 0)(101, ContactComponent_Conditional_101_Template, 3, 0);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(67);
      \u0275\u0275conditional(ctx.success() ? 67 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 68 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.name);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.subject);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.message);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 100 : 101);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{
      selector: "app-contact",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <!-- Hero Section - Light Design -->
    <section class="relative bg-gradient-to-br from-white via-burkina-green-50 to-slate-50 py-16 overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-burkina-green-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-burkina-yellow-100/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-burkina-green-100 rounded-full text-burkina-green text-sm font-medium mb-4 border border-burkina-green-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Contact
        </div>
        <h1 class="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">Contactez-nous</h1>
        <p class="text-slate-600 text-lg max-w-2xl">
          Vous avez une question ou une demande ? Notre \xE9quipe est \xE0 votre disposition pour vous r\xE9pondre.
        </p>
      </div>
    </section>
    
    <!-- Content Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <div class="card p-6 mb-6 bg-white">
              <h3 class="text-lg font-semibold text-slate-900 mb-6">Informations de contact</h3>
              <ul class="space-y-5">
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Adresse</p>
                    <p class="text-slate-500 text-sm mt-1">Avenue de l'Ind\xE9pendance<br>Ouagadougou, Burkina Faso</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">T\xE9l\xE9phone</p>
                    <p class="text-slate-500 text-sm mt-1">+226 25 30 60 00</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Email</p>
                    <p class="text-slate-500 text-sm mt-1">contact&#64;Memc.gov.bf</p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-burkina-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-burkina-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-slate-900">Horaires</p>
                    <p class="text-slate-500 text-sm mt-1">Lun - Ven: 7h30 - 12h30, 15h - 17h30</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <!-- Map placeholder -->
            <div class="card p-0 overflow-hidden bg-white">
              <div class="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="card p-8 bg-white">
              <h3 class="text-xl font-semibold text-slate-900 mb-6">Envoyez-nous un message</h3>
              
              @if (success()) {
                <div class="flex items-center gap-3 p-4 bg-burkina-green-50 border border-burkina-green-200 rounded-xl text-burkina-green-800 mb-6">
                  <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Votre message a \xE9t\xE9 envoy\xE9 avec succ\xE8s. Nous vous r\xE9pondrons dans les plus brefs d\xE9lais.</span>
                </div>
              }
              
              @if (error()) {
                <div class="flex items-center gap-3 p-4 bg-burkina-red-50 border border-burkina-red-200 rounded-xl text-burkina-red-800 mb-6">
                  <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{{ error() }}</span>
                </div>
              }
              
              <form (ngSubmit)="onSubmit()" class="space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label for="name" class="input-label">Nom complet <span class="text-burkina-red">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      [(ngModel)]="form.name"
                      class="input"
                      placeholder="Votre nom"
                      required>
                  </div>
                  <div>
                    <label for="email" class="input-label">Email <span class="text-burkina-red">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      [(ngModel)]="form.email"
                      class="input"
                      placeholder="votre@email.com"
                      required>
                  </div>
                </div>
                
                <div>
                  <label for="phone" class="input-label">T\xE9l\xE9phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    [(ngModel)]="form.phone"
                    class="input"
                    placeholder="+226 XX XX XX XX">
                </div>
                
                <div>
                  <label for="subject" class="input-label">Sujet <span class="text-burkina-red">*</span></label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    [(ngModel)]="form.subject"
                    class="input"
                    placeholder="Objet de votre message"
                    required>
                </div>
                
                <div>
                  <label for="message" class="input-label">Message <span class="text-burkina-red">*</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    [(ngModel)]="form.message"
                    rows="5"
                    class="textarea"
                    placeholder="D\xE9crivez votre demande..."
                    required></textarea>
                </div>
                
                <button 
                  type="submit" 
                  [disabled]="loading()"
                  class="btn-primary py-3 px-6">
                  @if (loading()) {
                    <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  } @else {
                    Envoyer le message
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/features/contact/contact.component.ts", lineNumber: 207 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-MWAZVX2Q.js.map
