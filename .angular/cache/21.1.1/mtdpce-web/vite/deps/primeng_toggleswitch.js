import {
  BaseComponent,
  BaseEditableHolder,
  Bind,
  BindModule,
  PARENT_INSTANCE
} from "./chunk-EEBIRFAS.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-DNDLE2DP.js";
import {
  BaseStyle
} from "./chunk-PRS7RXYI.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-BHKY4BFX.js";
import "./chunk-E7DL4EJZ.js";
import {
  x
} from "./chunk-VI4B5AYV.js";
import {
  CommonModule,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-GH67OUVR.js";
import "./chunk-5YBPA2Z4.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-RKHNDKAG.js";
import "./chunk-RSS3ODKE.js";
import "./chunk-KWSTWQNB.js";

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left, origin2 = "top";
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      origin2 = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      origin2 = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    if (gutter) {
      const gutterValue = x(/-anchor-gutter$/)?.value;
      element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
    }
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        if (window.requestAnimationFrame)
          window.requestAnimationFrame(tick);
        else
          setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style3 = getComputedStyle(el);
      width += parseFloat(style3.marginLeft) + parseFloat(style3.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style3 = getComputedStyle(el);
    return parseFloat(style3.paddingLeft) + parseFloat(style3.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style3 = getComputedStyle(el);
    return parseFloat(style3.marginLeft) + parseFloat(style3.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style3 = getComputedStyle(el);
    width += parseFloat(style3.paddingLeft) + parseFloat(style3.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style3 = getComputedStyle(el);
    width -= parseFloat(style3.paddingLeft) + parseFloat(style3.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style3 = getComputedStyle(el);
    height += parseFloat(style3.paddingTop) + parseFloat(style3.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style3 = getComputedStyle(el);
      height += parseFloat(style3.marginTop) + parseFloat(style3.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style3 = getComputedStyle(el);
    height -= parseFloat(style3.paddingTop) + parseFloat(style3.paddingBottom) + parseFloat(style3.borderTopWidth) + parseFloat(style3.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style3 = getComputedStyle(el);
    width -= parseFloat(style3.paddingLeft) + parseFloat(style3.paddingRight) + parseFloat(style3.borderLeftWidth) + parseFloat(style3.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode?.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style3 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style3.borderLeftWidth) - parseFloat(style3.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection && window.getSelection()) {
      if (window.getSelection()?.empty) {
        window.getSelection()?.empty();
      } else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) {
        window.getSelection()?.removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection()?.toString();
    else if (document.getSelection)
      return document.getSelection()?.toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement?.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v) => {
          if (v !== null && v !== void 0) {
            const type = typeof v;
            if (type === "string" || type === "number") {
              cv.push(v);
            } else if (type === "object") {
              const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  onAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  onAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (ɵAutoFocus_BaseFactory || (ɵAutoFocus_BaseFactory = ɵɵgetInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [0, "pAutoFocus", "autofocus"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static ɵfac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/toggleswitch/index.mjs
var style = "\n    .p-toggleswitch {\n        display: inline-block;\n        width: dt('toggleswitch.width');\n        height: dt('toggleswitch.height');\n    }\n\n    .p-toggleswitch-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border-radius: dt('toggleswitch.border.radius');\n    }\n\n    .p-toggleswitch-slider {\n        cursor: pointer;\n        width: 100%;\n        height: 100%;\n        border-width: dt('toggleswitch.border.width');\n        border-style: solid;\n        border-color: dt('toggleswitch.border.color');\n        background: dt('toggleswitch.background');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            border-color dt('toggleswitch.transition.duration'),\n            outline-color dt('toggleswitch.transition.duration'),\n            box-shadow dt('toggleswitch.transition.duration');\n        border-radius: dt('toggleswitch.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('toggleswitch.shadow');\n    }\n\n    .p-toggleswitch-handle {\n        position: absolute;\n        top: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: dt('toggleswitch.handle.background');\n        color: dt('toggleswitch.handle.color');\n        width: dt('toggleswitch.handle.size');\n        height: dt('toggleswitch.handle.size');\n        inset-inline-start: dt('toggleswitch.gap');\n        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));\n        border-radius: dt('toggleswitch.handle.border.radius');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            inset-inline-start dt('toggleswitch.slide.duration'),\n            box-shadow dt('toggleswitch.slide.duration');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.background');\n        border-color: dt('toggleswitch.checked.border.color');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.background');\n        color: dt('toggleswitch.handle.checked.color');\n        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {\n        background: dt('toggleswitch.hover.background');\n        border-color: dt('toggleswitch.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.hover.background');\n        color: dt('toggleswitch.handle.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.hover.background');\n        border-color: dt('toggleswitch.checked.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.hover.background');\n        color: dt('toggleswitch.handle.checked.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {\n        box-shadow: dt('toggleswitch.focus.ring.shadow');\n        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');\n        outline-offset: dt('toggleswitch.focus.ring.offset');\n    }\n\n    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {\n        border-color: dt('toggleswitch.invalid.border.color');\n    }\n\n    .p-toggleswitch.p-disabled {\n        opacity: 1;\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-slider {\n        background: dt('toggleswitch.disabled.background');\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.disabled.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-toggleswitch.mjs
var _c0 = ["handle"];
var _c1 = ["input"];
var _c2 = (a0) => ({
  checked: a0
});
function ToggleSwitch_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToggleSwitch_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleSwitch_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.handleTemplate || ctx_r1._handleTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.checked()));
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: ({
    instance
  }) => ["p-toggleswitch p-component", {
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid()
  }],
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
};
var ToggleSwitchStyle = class _ToggleSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  style = style2;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleSwitchStyle_BaseFactory;
    return function ToggleSwitchStyle_Factory(__ngFactoryType__) {
      return (ɵToggleSwitchStyle_BaseFactory || (ɵToggleSwitchStyle_BaseFactory = ɵɵgetInheritedFactory(_ToggleSwitchStyle)))(__ngFactoryType__ || _ToggleSwitchStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ToggleSwitchStyle,
    factory: _ToggleSwitchStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleSwitchClasses;
(function(ToggleSwitchClasses2) {
  ToggleSwitchClasses2["root"] = "p-toggleswitch";
  ToggleSwitchClasses2["input"] = "p-toggleswitch-input";
  ToggleSwitchClasses2["slider"] = "p-toggleswitch-slider";
})(ToggleSwitchClasses || (ToggleSwitchClasses = {}));
var TOGGLESWITCH_INSTANCE = new InjectionToken("TOGGLESWITCH_INSTANCE");
var TOGGLESWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleSwitch),
  multi: true
};
var ToggleSwitch = class _ToggleSwitch extends BaseEditableHolder {
  componentName = "ToggleSwitch";
  $pcToggleSwitch = inject(TOGGLESWITCH_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {ToggleSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  /**
   * Custom handle template.
   * @param {ToggleSwitchHandleTemplateContext} context - handle context.
   * @see {@link ToggleSwitchHandleTemplateContext}
   * @group Templates
   */
  handleTemplate;
  _handleTemplate;
  focused = false;
  _componentStyle = inject(ToggleSwitchStyle);
  templates;
  onHostClick(event) {
    this.onClick(event);
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "handle":
          this._handleTemplate = item.template;
          break;
        default:
          this._handleTemplate = item.template;
          break;
      }
    });
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.writeModelValue(this.checked() ? this.falseValue : this.trueValue);
      this.onModelChange(this.modelValue());
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue()
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  checked() {
    return this.modelValue() === this.trueValue;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      checked: this.checked(),
      disabled: this.$disabled(),
      invalid: this.invalid()
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleSwitch_BaseFactory;
    return function ToggleSwitch_Factory(__ngFactoryType__) {
      return (ɵToggleSwitch_BaseFactory || (ɵToggleSwitch_BaseFactory = ɵɵgetInheritedFactory(_ToggleSwitch)))(__ngFactoryType__ || _ToggleSwitch);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ToggleSwitch,
    selectors: [["p-toggleswitch"], ["p-toggleSwitch"], ["p-toggle-switch"]],
    contentQueries: function ToggleSwitch_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ToggleSwitch_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 7,
    hostBindings: function ToggleSwitch_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ToggleSwitch_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-p-checked", ctx.checked())("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        ɵɵstyleMap(ctx.sx("root"));
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      size: [1, "size"],
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
      provide: TOGGLESWITCH_INSTANCE,
      useExisting: _ToggleSwitch
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleSwitch
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 22,
    consts: [["input", ""], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "checked", "pAutoFocus", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ToggleSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("focus", function ToggleSwitch_Template_input_focus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function ToggleSwitch_Template_input_blur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2)(3, "div", 2);
        ɵɵconditionalCreate(4, ToggleSwitch_Conditional_4_Template, 1, 4, "ng-container");
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("input"));
        ɵɵproperty("checked", ctx.checked())("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        ɵɵattribute("id", ctx.inputId)("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name())("tabindex", ctx.tabindex);
        ɵɵadvance(2);
        ɵɵclassMap(ctx.cx("slider"));
        ɵɵproperty("pBind", ctx.ptm("slider"));
        ɵɵattribute("data-p", ctx.dataP);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("handle"));
        ɵɵproperty("pBind", ctx.ptm("handle"));
        ɵɵattribute("data-p", ctx.dataP);
        ɵɵadvance();
        ɵɵconditional(ctx.handleTemplate || ctx._handleTemplate ? 4 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitch, [{
    type: Component,
    args: [{
      selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            role="switch"
            [class]="cx('input')"
            [checked]="checked()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-checked]="checked()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.name]="name()"
            [attr.tabindex]="tabindex"
            (focus)="onFocus()"
            (blur)="onBlur()"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('slider')" [pBind]="ptm('slider')" [attr.data-p]="dataP">
            <div [class]="cx('handle')" [pBind]="ptm('handle')" [attr.data-p]="dataP">
                @if (handleTemplate || _handleTemplate) {
                    <ng-container *ngTemplateOutlet="handleTemplate || _handleTemplate; context: { checked: checked() }" />
                }
            </div>
        </div>
    `,
      providers: [TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
        provide: TOGGLESWITCH_INSTANCE,
        useExisting: ToggleSwitch
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleSwitch
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-p-checked]": "checked()",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    handleTemplate: [{
      type: ContentChild,
      args: ["handle", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ToggleSwitchModule = class _ToggleSwitchModule {
  static ɵfac = function ToggleSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleSwitchModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToggleSwitchModule,
    imports: [ToggleSwitch, SharedModule],
    exports: [ToggleSwitch, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ToggleSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleSwitch, SharedModule],
      exports: [ToggleSwitch, SharedModule]
    }]
  }], null, null);
})();
export {
  TOGGLESWITCH_VALUE_ACCESSOR,
  ToggleSwitch,
  ToggleSwitchClasses,
  ToggleSwitchModule,
  ToggleSwitchStyle
};
//# sourceMappingURL=primeng_toggleswitch.js.map
