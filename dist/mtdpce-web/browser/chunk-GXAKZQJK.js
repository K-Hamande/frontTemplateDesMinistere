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
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-WCAZC6LL.js";

// src/app/features/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 7);
    \u0275\u0275domListener("click", function ServicesComponent_For_13_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedCategory === category_r2 ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2, " ");
  }
}
function ServicesComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10);
    \u0275\u0275domElement(1, "div", 13);
    \u0275\u0275domElementStart(2, "p", 14);
    \u0275\u0275text(3, "Chargement des services...");
    \u0275\u0275domElementEnd()();
  }
}
function ServicesComponent_Conditional_17_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 20);
  }
}
function ServicesComponent_Conditional_17_For_2_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 21);
  }
}
function ServicesComponent_Conditional_17_For_2_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 22);
  }
}
function ServicesComponent_Conditional_17_For_2_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 23);
  }
}
function ServicesComponent_Conditional_17_For_2_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "path", 24);
  }
}
function ServicesComponent_Conditional_17_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 34);
    \u0275\u0275domElement(2, "path", 36);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const service_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("D\xE9lai : ", service_r5.processingTime);
  }
}
function ServicesComponent_Conditional_17_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 34);
    \u0275\u0275domElement(2, "path", 37);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const service_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(service_r5.cost === 0 ? "Gratuit" : service_r5.cost + " FCFA");
  }
}
function ServicesComponent_Conditional_17_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 34);
    \u0275\u0275domElement(2, "path", 38);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Acc\xE9der en ligne ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const service_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("href", service_r5.onlineUrl, \u0275\u0275sanitizeUrl);
  }
}
function ServicesComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(4, "svg", 19);
    \u0275\u0275conditionalCreate(5, ServicesComponent_Conditional_17_For_2_Case_5_Template, 1, 0, ":svg:path", 20)(6, ServicesComponent_Conditional_17_For_2_Case_6_Template, 1, 0, ":svg:path", 21)(7, ServicesComponent_Conditional_17_For_2_Case_7_Template, 1, 0, ":svg:path", 22)(8, ServicesComponent_Conditional_17_For_2_Case_8_Template, 1, 0, ":svg:path", 23)(9, ServicesComponent_Conditional_17_For_2_Case_9_Template, 1, 0, ":svg:path", 24);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(10, "div", 25)(11, "h3", 26);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 27);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(15, "p", 28);
    \u0275\u0275text(16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(17, "div", 29);
    \u0275\u0275conditionalCreate(18, ServicesComponent_Conditional_17_For_2_Conditional_18_Template, 5, 1, "div", 30);
    \u0275\u0275conditionalCreate(19, ServicesComponent_Conditional_17_For_2_Conditional_19_Template, 5, 1, "div", 30);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div", 31);
    \u0275\u0275conditionalCreate(21, ServicesComponent_Conditional_17_For_2_Conditional_21_Template, 4, 1, "a", 32);
    \u0275\u0275domElementStart(22, "button", 33);
    \u0275\u0275domListener("click", function ServicesComponent_Conditional_17_For_2_Template_button_click_22_listener() {
      const service_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showServiceDetails(service_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(23, "svg", 34);
    \u0275\u0275domElement(24, "path", 35);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(25, " D\xE9tails ");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const service_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_11_0 = service_r5.iconName || "default") === "document" ? 5 : tmp_11_0 === "license" ? 6 : tmp_11_0 === "security" ? 7 : tmp_11_0 === "mail" ? 8 : 9);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", service_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", service_r5.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", service_r5.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(service_r5.processingTime ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(service_r5.cost !== null && service_r5.cost !== void 0 ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(service_r5.isOnline && service_r5.onlineUrl ? 21 : -1);
  }
}
function ServicesComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, ServicesComponent_Conditional_17_For_2_Template, 26, 7, "div", 15, _forTrack0);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredServices());
  }
}
function ServicesComponent_Conditional_18_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 54);
    \u0275\u0275domElement(2, "path", 55);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const doc_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", doc_r7, " ");
  }
}
function ServicesComponent_Conditional_18_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "h3", 47);
    \u0275\u0275text(2, "Documents requis");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "ul", 52);
    \u0275\u0275repeaterCreate(4, ServicesComponent_Conditional_18_Conditional_14_For_5_Template, 4, 1, "li", 53, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.selectedService.requiredDocuments);
  }
}
function ServicesComponent_Conditional_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div")(1, "h3", 47);
    \u0275\u0275text(2, "Proc\xE9dure");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 56);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedService.procedureSteps);
  }
}
function ServicesComponent_Conditional_18_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 50)(1, "p", 57);
    \u0275\u0275text(2, "D\xE9lai de traitement");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 58);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedService.processingTime);
  }
}
function ServicesComponent_Conditional_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 50)(1, "p", 57);
    \u0275\u0275text(2, "Co\xFBt");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p", 58);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedService.cost === 0 ? "Gratuit" : ctx_r2.selectedService.cost + " FCFA");
  }
}
function ServicesComponent_Conditional_18_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Email : ", ctx_r2.selectedService.contactEmail);
  }
}
function ServicesComponent_Conditional_18_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("T\xE9l\xE9phone : ", ctx_r2.selectedService.contactPhone);
  }
}
function ServicesComponent_Conditional_18_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 51)(1, "h3", 59);
    \u0275\u0275text(2, "Contact");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 60);
    \u0275\u0275conditionalCreate(4, ServicesComponent_Conditional_18_Conditional_19_Conditional_4_Template, 2, 1, "p");
    \u0275\u0275conditionalCreate(5, ServicesComponent_Conditional_18_Conditional_19_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.selectedService.contactEmail ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedService.contactPhone ? 5 : -1);
  }
}
function ServicesComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 39);
    \u0275\u0275domListener("click", function ServicesComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275domElementStart(1, "div", 40);
    \u0275\u0275domListener("click", function ServicesComponent_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275domElementStart(2, "div", 41)(3, "h2", 42);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 43);
    \u0275\u0275domListener("click", function ServicesComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 44);
    \u0275\u0275domElement(7, "path", 45);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(8, "div", 46)(9, "div")(10, "h3", 47);
    \u0275\u0275text(11, "Description");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "p", 48);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(14, ServicesComponent_Conditional_18_Conditional_14_Template, 6, 0, "div");
    \u0275\u0275conditionalCreate(15, ServicesComponent_Conditional_18_Conditional_15_Template, 5, 1, "div");
    \u0275\u0275domElementStart(16, "div", 49);
    \u0275\u0275conditionalCreate(17, ServicesComponent_Conditional_18_Conditional_17_Template, 5, 1, "div", 50);
    \u0275\u0275conditionalCreate(18, ServicesComponent_Conditional_18_Conditional_18_Template, 5, 1, "div", 50);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(19, ServicesComponent_Conditional_18_Conditional_19_Template, 6, 2, "div", 51);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedService.name);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.selectedService.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedService.requiredDocuments && ctx_r2.selectedService.requiredDocuments.length > 0 ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedService.procedureSteps ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedService.processingTime ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedService.cost !== null && ctx_r2.selectedService.cost !== void 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedService.contactEmail || ctx_r2.selectedService.contactPhone ? 19 : -1);
  }
}
var ServicesComponent = class _ServicesComponent {
  apiService;
  services = signal([], ...ngDevMode ? [{ debugName: "services" }] : []);
  filteredServices = signal([], ...ngDevMode ? [{ debugName: "filteredServices" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedCategory = "all";
  selectedService = null;
  categories = ["Agr\xE9ment technique", "Licences T\xE9l\xE9com", "Cybers\xE9curit\xE9", "Services Postaux"];
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadServices();
  }
  loadServices() {
    this.loading.set(true);
    this.apiService.getPublicServices().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const servicesList = response.data.content || [];
          this.services.set(servicesList);
          this.filteredServices.set(servicesList);
        }
        this.loading.set(false);
      },
      error: () => {
        const mockServices = [
          {
            id: 1,
            name: "Demande d'agr\xE9ment technique",
            description: "Proc\xE9dure de demande d'agr\xE9ment technique pour les entreprises du secteur des TIC souhaitant exercer au Burkina Faso.",
            category: "Agr\xE9ment technique",
            subcategory: "",
            targetAudience: "ENTREPRISES",
            cost: 5e4,
            costDetails: "Frais de dossier",
            processingTime: "15 jours ouvrables",
            accessConditions: "Entreprise l\xE9galement constitu\xE9e",
            requiredDocuments: ["Copie des statuts", "Registre de commerce", "Attestation fiscale", "Plan d'affaires"],
            procedureSteps: "1. D\xE9p\xF4t du dossier\\n2. V\xE9rification des documents\\n3. \xC9tude technique\\n4. D\xE9cision",
            onlineUrl: "https://services.Memc.gov.bf/agrement",
            physicalAddress: "Minist\xE8re TDPCE, Ouagadougou",
            contactEmail: "agrement@Memc.gov.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "document",
            isOnline: true,
            isActive: true,
            displayOrder: 1,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 2,
            name: "Licence d'op\xE9rateur t\xE9l\xE9com",
            description: "Attribution de licences pour l'exploitation de r\xE9seaux et services de t\xE9l\xE9communications.",
            category: "Licences T\xE9l\xE9com",
            subcategory: "",
            targetAudience: "ENTREPRISES",
            cost: 5e5,
            costDetails: "Frais de licence",
            processingTime: "30 jours ouvrables",
            accessConditions: "Capital minimum requis",
            requiredDocuments: ["Dossier technique", "Plan de couverture", "Garantie financi\xE8re"],
            procedureSteps: "1. Soumission du dossier\\n2. \xC9valuation technique\\n3. Commission d'attribution\\n4. Signature de la convention",
            onlineUrl: "",
            physicalAddress: "ARCEP, Ouagadougou",
            contactEmail: "licences@arcep.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "license",
            isOnline: false,
            isActive: true,
            displayOrder: 2,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 3,
            name: "Certification cybers\xE9curit\xE9",
            description: "Certification des syst\xE8mes d'information et audit de s\xE9curit\xE9 pour les organisations.",
            category: "Cybers\xE9curit\xE9",
            subcategory: "",
            targetAudience: "BOTH",
            cost: 1e5,
            costDetails: "Selon la taille de l'organisation",
            processingTime: "20 jours ouvrables",
            accessConditions: "",
            requiredDocuments: ["Documentation technique", "Politique de s\xE9curit\xE9", "Rapport d'audit interne"],
            procedureSteps: "1. Demande de certification\\n2. Audit sur site\\n3. Rapport d'\xE9valuation\\n4. D\xE9livrance du certificat",
            onlineUrl: "https://anssi.bf/certification",
            physicalAddress: "ANSSI, Ouagadougou",
            contactEmail: "certification@anssi.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "security",
            isOnline: true,
            isActive: true,
            displayOrder: 3,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          {
            id: 4,
            name: "Autorisation d'exploitation postale",
            description: "Autorisation pour l'exploitation de services postaux et de courrier express.",
            category: "Services Postaux",
            subcategory: "",
            targetAudience: "ENTREPRISES",
            cost: 75e3,
            costDetails: "Frais d'autorisation",
            processingTime: "10 jours ouvrables",
            accessConditions: "Entreprise de droit burkinab\xE8",
            requiredDocuments: ["Statuts de l'entreprise", "Plan d'exploitation", "Garantie de service"],
            procedureSteps: "1. D\xE9p\xF4t de la demande\\n2. \xC9tude du dossier\\n3. Visite des locaux\\n4. D\xE9livrance de l'autorisation",
            onlineUrl: "",
            physicalAddress: "ARCE, Ouagadougou",
            contactEmail: "postal@arce.bf",
            contactPhone: "+226 25 30 XX XX",
            exampleFileUrl: "",
            iconName: "mail",
            isOnline: false,
            isActive: true,
            displayOrder: 4,
            createdAt: (/* @__PURE__ */ new Date()).toISOString(),
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        ];
        this.services.set(mockServices);
        this.filteredServices.set(mockServices);
        this.loading.set(false);
      }
    });
  }
  filterByCategory(category) {
    this.selectedCategory = category;
    if (category === "all") {
      this.filteredServices.set(this.services());
    } else {
      this.filteredServices.set(this.services().filter((s) => s.category === category));
    }
  }
  showServiceDetails(service) {
    this.selectedService = service;
  }
  closeModal() {
    this.selectedService = null;
  }
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 19, vars: 4, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-gradient-to-r", "from-emerald-600", "to-emerald-700", "text-white", "py-16"], [1, "container", "mx-auto", "px-4"], [1, "text-4xl", "font-bold", "mb-4"], [1, "text-xl", "text-emerald-100"], [1, "py-6", "bg-white", "shadow-sm", "sticky", "top-0", "z-10"], [1, "flex", "flex-wrap", "gap-3"], [1, "px-5", "py-2", "rounded-lg", "font-medium", "transition-colors", 3, "click"], [1, "px-5", "py-2", "rounded-lg", "font-medium", "transition-colors", 3, "class"], [1, "py-12"], [1, "text-center", "py-12"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-emerald-600", "mx-auto"], [1, "mt-4", "text-gray-600"], [1, "bg-white", "rounded-xl", "shadow-sm", "hover:shadow-md", "transition-shadow", "overflow-hidden", "group"], [1, "p-6"], [1, "flex", "items-start", "gap-4", "mb-4"], [1, "w-14", "h-14", "bg-emerald-100", "rounded-xl", "flex", "items-center", "justify-center", "flex-shrink-0", "group-hover:bg-emerald-200", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-7", "h-7", "text-emerald-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "flex-1"], [1, "font-bold", "text-gray-900", "text-lg", "mb-1", "group-hover:text-emerald-600", "transition-colors"], [1, "inline-block", "px-2", "py-1", "bg-gray-100", "text-gray-600", "text-xs", "rounded-full"], [1, "text-gray-600", "text-sm", "mb-4", "line-clamp-2"], [1, "space-y-2", "mb-4"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-500"], [1, "flex", "items-center", "gap-2", "pt-4", "border-t", "border-gray-100"], ["target", "_blank", 1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "bg-emerald-600", "text-white", "px-4", "py-2", "rounded-lg", "font-medium", "hover:bg-emerald-700", "transition-colors", "text-sm", 3, "href"], [1, "flex-1", "flex", "items-center", "justify-center", "gap-2", "bg-gray-100", "text-gray-700", "px-4", "py-2", "rounded-lg", "font-medium", "hover:bg-gray-200", "transition-colors", "text-sm", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"], [1, "fixed", "inset-0", "bg-black/50", "flex", "items-center", "justify-center", "z-50", "p-4", 3, "click"], [1, "bg-white", "rounded-2xl", "max-w-2xl", "w-full", "max-h-[90vh]", "overflow-y-auto", 3, "click"], [1, "p-6", "border-b", "border-gray-100", "flex", "items-center", "justify-between"], [1, "text-xl", "font-bold", "text-gray-900"], [1, "p-2", "hover:bg-gray-100", "rounded-lg", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-6", "space-y-6"], [1, "font-semibold", "text-gray-900", "mb-2"], [1, "text-gray-600"], [1, "grid", "grid-cols-2", "gap-4"], [1, "bg-gray-50", "p-4", "rounded-lg"], [1, "bg-emerald-50", "p-4", "rounded-lg"], [1, "space-y-2"], [1, "flex", "items-start", "gap-2", "text-gray-600"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-emerald-500", "flex-shrink-0", "mt-0.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-gray-600", "whitespace-pre-line"], [1, "text-sm", "text-gray-500"], [1, "font-semibold", "text-gray-900"], [1, "font-semibold", "text-emerald-900", "mb-2"], [1, "space-y-1", "text-emerald-800"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Nos Services");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 4);
      \u0275\u0275text(6, "D\xE9couvrez l'ensemble des services propos\xE9s par le minist\xE8re");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "section", 5)(8, "div", 2)(9, "div", 6)(10, "button", 7);
      \u0275\u0275domListener("click", function ServicesComponent_Template_button_click_10_listener() {
        return ctx.filterByCategory("all");
      });
      \u0275\u0275text(11, " Tous les services ");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(12, ServicesComponent_For_13_Template, 2, 3, "button", 8, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(14, "section", 9)(15, "div", 2);
      \u0275\u0275conditionalCreate(16, ServicesComponent_Conditional_16_Template, 4, 0, "div", 10)(17, ServicesComponent_Conditional_17_Template, 3, 0, "div", 11);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(18, ServicesComponent_Conditional_18_Template, 20, 7, "div", 12);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classMap(ctx.selectedCategory === "all" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 16 : 17);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedService ? 18 : -1);
    }
  }, dependencies: [CommonModule, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{
      selector: "app-services",
      standalone: true,
      imports: [CommonModule, RouterModule],
      template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold mb-4">Nos Services</h1>
          <p class="text-xl text-emerald-100">D\xE9couvrez l'ensemble des services propos\xE9s par le minist\xE8re</p>
        </div>
      </section>

      <!-- Categories Filter -->
      <section class="py-6 bg-white shadow-sm sticky top-0 z-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-3">
            <button
              (click)="filterByCategory('all')"
              [class]="selectedCategory === 'all' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Tous les services
            </button>
            @for (category of categories; track category) {
              <button
                (click)="filterByCategory(category)"
                [class]="selectedCategory === category ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
                class="px-5 py-2 rounded-lg font-medium transition-colors"
              >
                {{ category }}
              </button>
            }
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          @if (loading()) {
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
              <p class="mt-4 text-gray-600">Chargement des services...</p>
            </div>
          } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (service of filteredServices(); track service.id) {
                <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div class="p-6">
                    <div class="flex items-start gap-4 mb-4">
                      <div class="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                        <svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          @switch (service.iconName || 'default') {
                            @case ('document') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            }
                            @case ('license') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            }
                            @case ('security') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            }
                            @case ('mail') {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            }
                            @default {
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            }
                          }
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="font-bold text-gray-900 text-lg mb-1 group-hover:text-emerald-600 transition-colors">
                          {{ service.name }}
                        </h3>
                        <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {{ service.category }}
                        </span>
                      </div>
                    </div>
                    
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                      {{ service.description }}
                    </p>
                    
                    <div class="space-y-2 mb-4">
                      @if (service.processingTime) {
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>D\xE9lai : {{ service.processingTime }}</span>
                        </div>
                      }
                      @if (service.cost !== null && service.cost !== undefined) {
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          <span>{{ service.cost === 0 ? 'Gratuit' : service.cost + ' FCFA' }}</span>
                        </div>
                      }
                    </div>
                    
                    <div class="flex items-center gap-2 pt-4 border-t border-gray-100">
                      @if (service.isOnline && service.onlineUrl) {
                        <a
                          [href]="service.onlineUrl"
                          target="_blank"
                          class="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          Acc\xE9der en ligne
                        </a>
                      }
                      <button
                        (click)="showServiceDetails(service)"
                        class="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        D\xE9tails
                      </button>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </section>

      <!-- Service Detail Modal -->
      @if (selectedService) {
        <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" (click)="closeModal()">
          <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" (click)="$event.stopPropagation()">
            <div class="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 class="text-xl font-bold text-gray-900">{{ selectedService.name }}</h2>
              <button (click)="closeModal()" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="p-6 space-y-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Description</h3>
                <p class="text-gray-600">{{ selectedService.description }}</p>
              </div>
              
              @if (selectedService.requiredDocuments && selectedService.requiredDocuments.length > 0) {
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Documents requis</h3>
                  <ul class="space-y-2">
                    @for (doc of selectedService.requiredDocuments; track doc) {
                      <li class="flex items-start gap-2 text-gray-600">
                        <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {{ doc }}
                      </li>
                    }
                  </ul>
                </div>
              }
              
              @if (selectedService.procedureSteps) {
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Proc\xE9dure</h3>
                  <p class="text-gray-600 whitespace-pre-line">{{ selectedService.procedureSteps }}</p>
                </div>
              }
              
              <div class="grid grid-cols-2 gap-4">
                @if (selectedService.processingTime) {
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">D\xE9lai de traitement</p>
                    <p class="font-semibold text-gray-900">{{ selectedService.processingTime }}</p>
                  </div>
                }
                @if (selectedService.cost !== null && selectedService.cost !== undefined) {
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-gray-500">Co\xFBt</p>
                    <p class="font-semibold text-gray-900">{{ selectedService.cost === 0 ? 'Gratuit' : selectedService.cost + ' FCFA' }}</p>
                  </div>
                }
              </div>
              
              @if (selectedService.contactEmail || selectedService.contactPhone) {
                <div class="bg-emerald-50 p-4 rounded-lg">
                  <h3 class="font-semibold text-emerald-900 mb-2">Contact</h3>
                  <div class="space-y-1 text-emerald-800">
                    @if (selectedService.contactEmail) {
                      <p>Email : {{ selectedService.contactEmail }}</p>
                    }
                    @if (selectedService.contactPhone) {
                      <p>T\xE9l\xE9phone : {{ selectedService.contactPhone }}</p>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      }
    </div>
  `
    }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/features/services/services.component.ts", lineNumber: 220 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-GXAKZQJK.js.map
