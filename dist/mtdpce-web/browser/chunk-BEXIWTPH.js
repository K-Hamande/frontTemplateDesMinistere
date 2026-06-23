import {
  RouterModule
} from "./chunk-YDHKLCGD.js";
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-WCAZC6LL.js";

// src/app/features/events/events.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EventsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275domElement(1, "div", 12);
    \u0275\u0275domElementStart(2, "p", 13);
    \u0275\u0275text(3, "Chargement des \xE9v\xE9nements...");
    \u0275\u0275domElementEnd()();
  }
}
function EventsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 14);
    \u0275\u0275domElement(2, "path", 15);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "p", 16);
    \u0275\u0275text(4, "Aucun \xE9v\xE9nement trouv\xE9");
    \u0275\u0275domElementEnd()();
  }
}
function EventsComponent_Conditional_22_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 28);
    \u0275\u0275text(1, " En ligne ");
    \u0275\u0275domElementEnd();
  }
}
function EventsComponent_Conditional_22_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 29);
    \u0275\u0275text(1, " Gratuit ");
    \u0275\u0275domElementEnd();
  }
}
function EventsComponent_Conditional_22_For_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 34);
    \u0275\u0275domElement(2, "path", 37)(3, "path", 38);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r1.location);
  }
}
function EventsComponent_Conditional_22_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 34);
    \u0275\u0275domElement(2, "path", 39);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", event_r1.currentParticipants, "/", event_r1.maxParticipants, " participants");
  }
}
function EventsComponent_Conditional_22_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "button", 36);
    \u0275\u0275text(1, " S'inscrire ");
    \u0275\u0275domElementEnd();
  }
}
function EventsComponent_Conditional_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 23)(10, "div", 24)(11, "div", 25)(12, "div", 26)(13, "span", 27);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(15, EventsComponent_Conditional_22_For_2_Conditional_15_Template, 2, 0, "span", 28);
    \u0275\u0275conditionalCreate(16, EventsComponent_Conditional_22_For_2_Conditional_16_Template, 2, 0, "span", 29);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "h3", 30);
    \u0275\u0275text(18);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(19, "p", 31);
    \u0275\u0275text(20);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(21, "div", 32)(22, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(23, "svg", 34);
    \u0275\u0275domElement(24, "path", 35);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(27, EventsComponent_Conditional_22_For_2_Conditional_27_Template, 6, 1, "div", 33);
    \u0275\u0275conditionalCreate(28, EventsComponent_Conditional_22_For_2_Conditional_28_Template, 5, 2, "div", 33);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(29, EventsComponent_Conditional_22_For_2_Conditional_29_Template, 2, 0, "button", 36);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getDay(event_r1.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getMonth(event_r1.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getYear(event_r1.startDate));
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.getStatusClass(event_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(event_r1.status), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.isOnline ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.isFree ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r1.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.formatTime(event_r1.startDate), " - ", ctx_r1.formatTime(event_r1.endDate));
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.location ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.maxParticipants ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r1.status === "UPCOMING" ? 29 : -1);
  }
}
function EventsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, EventsComponent_Conditional_22_For_2_Template, 30, 15, "div", 17, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredEvents());
  }
}
var EventsComponent = class _EventsComponent {
  apiService;
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : []);
  filteredEvents = signal([], ...ngDevMode ? [{ debugName: "filteredEvents" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedStatus = "all";
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadEvents();
  }
  loadEvents() {
    this.loading.set(true);
    this.apiService.getPublicEvents().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const eventsList = response.data.content || [];
          this.events.set(eventsList);
          this.filteredEvents.set(eventsList);
        }
        this.loading.set(false);
      },
      error: () => {
        const mockEvents = [
          {
            id: 1,
            title: "Forum National sur la Transformation Digitale",
            description: "Le minist\xE8re organise le forum national sur la transformation digitale du Burkina Faso. Cet \xE9v\xE9nement r\xE9unira les acteurs cl\xE9s du secteur num\xE9rique.",
            content: "",
            location: "Ouagadougou",
            address: "Centre International de Conf\xE9rences de Ouaga 2000",
            startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3).toISOString(),
            endDate: new Date(Date.now() + 8 * 24 * 60 * 60 * 1e3).toISOString(),
            registrationDeadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1e3).toISOString(),
            maxParticipants: 500,
            currentParticipants: 234,
            imageUrl: "",
            category: "Forum",
            status: "UPCOMING",
            isOnline: false,
            onlineUrl: "",
            isFree: true,
            price: 0,
            organizerName: "Memc",
            organizerEmail: "evenements@Memc.gov.bf",
            organizerPhone: "+226 25 30 XX XX",
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 2,
            title: "Webinaire : Cybers\xE9curit\xE9 et Protection des Donn\xE9es",
            description: "Session de formation en ligne sur les bonnes pratiques de cybers\xE9curit\xE9 et la protection des donn\xE9es personnelles.",
            content: "",
            location: "",
            address: "",
            startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1e3).toISOString(),
            endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1e3 + 3 * 60 * 60 * 1e3).toISOString(),
            registrationDeadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1e3).toISOString(),
            maxParticipants: 200,
            currentParticipants: 156,
            imageUrl: "",
            category: "Webinaire",
            status: "UPCOMING",
            isOnline: true,
            onlineUrl: "https://zoom.us/j/xxxxx",
            isFree: true,
            price: 0,
            organizerName: "ANSSI",
            organizerEmail: "formation@anssi.bf",
            organizerPhone: "+226 25 30 XX XX",
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 3,
            title: "Atelier de Formation sur les Services Postaux Num\xE9riques",
            description: "Formation pratique sur la digitalisation des services postaux et l'int\xE9gration des solutions e-commerce.",
            content: "",
            location: "Bobo-Dioulasso",
            address: "Chambre de Commerce",
            startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1e3).toISOString(),
            endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1e3).toISOString(),
            registrationDeadline: "",
            maxParticipants: 50,
            currentParticipants: 50,
            imageUrl: "",
            category: "Atelier",
            status: "ONGOING",
            isOnline: false,
            onlineUrl: "",
            isFree: false,
            price: 25e3,
            organizerName: "SONAPOST",
            organizerEmail: "formation@sonapost.bf",
            organizerPhone: "+226 25 30 XX XX",
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        ];
        this.events.set(mockEvents);
        this.filteredEvents.set(mockEvents);
        this.loading.set(false);
      }
    });
  }
  filterByStatus(status) {
    this.selectedStatus = status;
    if (status === "all") {
      this.filteredEvents.set(this.events());
    } else {
      this.filteredEvents.set(this.events().filter((e) => e.status === status));
    }
  }
  getDay(dateStr) {
    return new Date(dateStr).getDate().toString().padStart(2, "0");
  }
  getMonth(dateStr) {
    const months = ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Juin", "Juil", "Ao\xFBt", "Sep", "Oct", "Nov", "D\xE9c"];
    return months[new Date(dateStr).getMonth()];
  }
  getYear(dateStr) {
    return new Date(dateStr).getFullYear().toString();
  }
  formatTime(dateStr) {
    return new Date(dateStr).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }
  getStatusClass(status) {
    switch (status) {
      case "UPCOMING":
        return "bg-blue-100 text-blue-700";
      case "ONGOING":
        return "bg-green-100 text-green-700";
      case "COMPLETED":
        return "bg-gray-100 text-gray-700";
      case "CANCELLED":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "UPCOMING":
        return "\xC0 venir";
      case "ONGOING":
        return "En cours";
      case "COMPLETED":
        return "Termin\xE9";
      case "CANCELLED":
        return "Annul\xE9";
      default:
        return status;
    }
  }
  static \u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], decls: 23, vars: 9, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-gradient-to-r", "from-emerald-600", "to-emerald-700", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-xl", "text-emerald-100"], [1, "py-6", "bg-white", "shadow-sm"], [1, "flex", "gap-4"], [1, "px-6", "py-2", "rounded-lg", "font-medium", "transition-colors", 3, "click"], [1, "py-12"], [1, "text-center", "py-12"], [1, "text-center", "py-12", "bg-white", "rounded-xl", "shadow-sm"], [1, "space-y-6"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-emerald-600", "mx-auto"], [1, "mt-4", "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-300", "mx-auto", "mb-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "text-gray-500", "text-lg"], [1, "bg-white", "rounded-xl", "shadow-sm", "overflow-hidden", "hover:shadow-md", "transition-shadow"], [1, "md:flex"], [1, "md:w-32", "bg-emerald-600", "text-white", "p-6", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "text-3xl", "font-bold"], [1, "text-sm", "uppercase"], [1, "text-sm"], [1, "flex-1", "p-6"], [1, "flex", "items-start", "justify-between", "gap-4"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-medium"], [1, "px-3", "py-1", "bg-blue-100", "text-blue-700", "rounded-full", "text-xs", "font-medium"], [1, "px-3", "py-1", "bg-green-100", "text-green-700", "rounded-full", "text-xs", "font-medium"], [1, "text-xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-gray-600", "mb-4", "line-clamp-2"], [1, "flex", "flex-wrap", "gap-4", "text-sm", "text-gray-500"], [1, "flex", "items-center", "gap-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "flex-shrink-0", "bg-emerald-600", "text-white", "px-6", "py-2", "rounded-lg", "font-medium", "hover:bg-emerald-700", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"]], template: function EventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Agenda des \xC9v\xE9nements");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "D\xE9couvrez les \xE9v\xE9nements organis\xE9s par le minist\xE8re");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "section", 5)(8, "div", 2)(9, "div", 6)(10, "button", 7);
      \u0275\u0275domListener("click", function EventsComponent_Template_button_click_10_listener() {
        return ctx.filterByStatus("all");
      });
      \u0275\u0275text(11, " Tous ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "button", 7);
      \u0275\u0275domListener("click", function EventsComponent_Template_button_click_12_listener() {
        return ctx.filterByStatus("UPCOMING");
      });
      \u0275\u0275text(13, " \xC0 venir ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "button", 7);
      \u0275\u0275domListener("click", function EventsComponent_Template_button_click_14_listener() {
        return ctx.filterByStatus("ONGOING");
      });
      \u0275\u0275text(15, " En cours ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "button", 7);
      \u0275\u0275domListener("click", function EventsComponent_Template_button_click_16_listener() {
        return ctx.filterByStatus("COMPLETED");
      });
      \u0275\u0275text(17, " Pass\xE9s ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(18, "section", 8)(19, "div", 2);
      \u0275\u0275conditionalCreate(20, EventsComponent_Conditional_20_Template, 4, 0, "div", 9)(21, EventsComponent_Conditional_21_Template, 5, 0, "div", 10)(22, EventsComponent_Conditional_22_Template, 3, 0, "div", 11);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classMap(ctx.selectedStatus === "all" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.selectedStatus === "UPCOMING" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.selectedStatus === "ONGOING" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.selectedStatus === "COMPLETED" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 20 : ctx.filteredEvents().length === 0 ? 21 : 22);
    }
  }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsComponent, [{
    type: Component,
    args: [{
      selector: "app-events",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Agenda des \xC9v\xE9nements</h1>
          <p class="text-xl text-emerald-100">D\xE9couvrez les \xE9v\xE9nements organis\xE9s par le minist\xE8re</p>
        </div>
      </section>

      <!-- Filter Tabs -->
      <section class="py-6 bg-white shadow-sm">
        <div class="container mx-auto px-4">
          <div class="flex gap-4">
            <button
              (click)="filterByStatus('all')"
              [class]="selectedStatus === 'all' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Tous
            </button>
            <button
              (click)="filterByStatus('UPCOMING')"
              [class]="selectedStatus === 'UPCOMING' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-lg font-medium transition-colors"
            >
              \xC0 venir
            </button>
            <button
              (click)="filterByStatus('ONGOING')"
              [class]="selectedStatus === 'ONGOING' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-lg font-medium transition-colors"
            >
              En cours
            </button>
            <button
              (click)="filterByStatus('COMPLETED')"
              [class]="selectedStatus === 'COMPLETED' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Pass\xE9s
            </button>
          </div>
        </div>
      </section>

      <!-- Events List -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          @if (loading()) {
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
              <p class="mt-4 text-gray-600">Chargement des \xE9v\xE9nements...</p>
            </div>
          } @else if (filteredEvents().length === 0) {
            <div class="text-center py-12 bg-white rounded-xl shadow-sm">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <p class="text-gray-500 text-lg">Aucun \xE9v\xE9nement trouv\xE9</p>
            </div>
          } @else {
            <div class="space-y-6">
              @for (event of filteredEvents(); track event.id) {
                <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div class="md:flex">
                    <!-- Date Badge -->
                    <div class="md:w-32 bg-emerald-600 text-white p-6 flex flex-col items-center justify-center text-center">
                      <span class="text-3xl font-bold">{{ getDay(event.startDate) }}</span>
                      <span class="text-sm uppercase">{{ getMonth(event.startDate) }}</span>
                      <span class="text-sm">{{ getYear(event.startDate) }}</span>
                    </div>
                    
                    <!-- Event Content -->
                    <div class="flex-1 p-6">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex-1">
                          <div class="flex items-center gap-2 mb-2">
                            <span [class]="getStatusClass(event.status)" class="px-3 py-1 rounded-full text-xs font-medium">
                              {{ getStatusLabel(event.status) }}
                            </span>
                            @if (event.isOnline) {
                              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                En ligne
                              </span>
                            }
                            @if (event.isFree) {
                              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                Gratuit
                              </span>
                            }
                          </div>
                          
                          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ event.title }}</h3>
                          <p class="text-gray-600 mb-4 line-clamp-2">{{ event.description }}</p>
                          
                          <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div class="flex items-center gap-1">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                              <span>{{ formatTime(event.startDate) }} - {{ formatTime(event.endDate) }}</span>
                            </div>
                            @if (event.location) {
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>{{ event.location }}</span>
                              </div>
                            }
                            @if (event.maxParticipants) {
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                                <span>{{ event.currentParticipants }}/{{ event.maxParticipants }} participants</span>
                              </div>
                            }
                          </div>
                        </div>
                        
                        @if (event.status === 'UPCOMING') {
                          <button class="flex-shrink-0 bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                            S'inscrire
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </section>
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "src/app/features/events/events.component.ts", lineNumber: 151 });
})();
export {
  EventsComponent
};
//# sourceMappingURL=chunk-BEXIWTPH.js.map
