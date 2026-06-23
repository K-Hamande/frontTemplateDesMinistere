import {
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
  Header,
  PrimeTemplate,
  SharedModule
} from "./chunk-BHKY4BFX.js";
import "./chunk-E7DL4EJZ.js";
import {
  z2 as z
} from "./chunk-VI4B5AYV.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformServer
} from "./chunk-GH67OUVR.js";
import "./chunk-5YBPA2Z4.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  afterNextRender,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-RKHNDKAG.js";
import "./chunk-RSS3ODKE.js";
import {
  __spreadValues
} from "./chunk-KWSTWQNB.js";

// node_modules/@primeuix/styles/dist/editor/index.mjs
var style = "\n    /*!\n* Quill Editor v1.3.3\n* https://quilljs.com/\n* Copyright (c) 2014, Jason Chen\n* Copyright (c) 2013, salesforce.com\n*/\n    .ql-container {\n        box-sizing: border-box;\n        font-family: Helvetica, Arial, sans-serif;\n        font-size: 13px;\n        height: 100%;\n        margin: 0;\n        position: relative;\n    }\n    .ql-container.ql-disabled .ql-tooltip {\n        visibility: hidden;\n    }\n    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n        pointer-events: none;\n    }\n    .ql-clipboard {\n        inset-inline-start: -100000px;\n        height: 1px;\n        overflow-y: hidden;\n        position: absolute;\n        top: 50%;\n    }\n    .ql-clipboard p {\n        margin: 0;\n        padding: 0;\n    }\n    .ql-editor {\n        box-sizing: border-box;\n        line-height: 1.42;\n        height: 100%;\n        outline: none;\n        overflow-y: auto;\n        padding: 12px 15px;\n        tab-size: 4;\n        -moz-tab-size: 4;\n        text-align: left;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n    }\n    .ql-editor > * {\n        cursor: text;\n    }\n    .ql-editor p,\n    .ql-editor ol,\n    .ql-editor ul,\n    .ql-editor pre,\n    .ql-editor blockquote,\n    .ql-editor h1,\n    .ql-editor h2,\n    .ql-editor h3,\n    .ql-editor h4,\n    .ql-editor h5,\n    .ql-editor h6 {\n        margin: 0;\n        padding: 0;\n        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol,\n    .ql-editor ul {\n        padding-inline-start: 1.5rem;\n    }\n    .ql-editor ol > li,\n    .ql-editor ul > li {\n        list-style-type: none;\n    }\n    .ql-editor ul > li::before {\n        content: '\\2022';\n    }\n    .ql-editor ul[data-checked='true'],\n    .ql-editor ul[data-checked='false'] {\n        pointer-events: none;\n    }\n    .ql-editor ul[data-checked='true'] > li *,\n    .ql-editor ul[data-checked='false'] > li * {\n        pointer-events: all;\n    }\n    .ql-editor ul[data-checked='true'] > li::before,\n    .ql-editor ul[data-checked='false'] > li::before {\n        color: #777;\n        cursor: pointer;\n        pointer-events: all;\n    }\n    .ql-editor ul[data-checked='true'] > li::before {\n        content: '\\2611';\n    }\n    .ql-editor ul[data-checked='false'] > li::before {\n        content: '\\2610';\n    }\n    .ql-editor li::before {\n        display: inline-block;\n        white-space: nowrap;\n        width: 1.2rem;\n    }\n    .ql-editor li:not(.ql-direction-rtl)::before {\n        margin-inline-start: -1.5rem;\n        margin-inline-end: 0.3rem;\n        text-align: right;\n    }\n    .ql-editor li.ql-direction-rtl::before {\n        margin-inline-start: 0.3rem;\n        margin-inline-end: -1.5rem;\n    }\n    .ql-editor ol li:not(.ql-direction-rtl),\n    .ql-editor ul li:not(.ql-direction-rtl) {\n        padding-inline-start: 1.5rem;\n    }\n    .ql-editor ol li.ql-direction-rtl,\n    .ql-editor ul li.ql-direction-rtl {\n        padding-inline-end: 1.5rem;\n    }\n    .ql-editor ol li {\n        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n        counter-increment: list-0;\n    }\n    .ql-editor ol li:before {\n        content: counter(list-0, decimal) '. ';\n    }\n    .ql-editor ol li.ql-indent-1 {\n        counter-increment: list-1;\n    }\n    .ql-editor ol li.ql-indent-1:before {\n        content: counter(list-1, lower-alpha) '. ';\n    }\n    .ql-editor ol li.ql-indent-1 {\n        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-2 {\n        counter-increment: list-2;\n    }\n    .ql-editor ol li.ql-indent-2:before {\n        content: counter(list-2, lower-roman) '. ';\n    }\n    .ql-editor ol li.ql-indent-2 {\n        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-3 {\n        counter-increment: list-3;\n    }\n    .ql-editor ol li.ql-indent-3:before {\n        content: counter(list-3, decimal) '. ';\n    }\n    .ql-editor ol li.ql-indent-3 {\n        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-4 {\n        counter-increment: list-4;\n    }\n    .ql-editor ol li.ql-indent-4:before {\n        content: counter(list-4, lower-alpha) '. ';\n    }\n    .ql-editor ol li.ql-indent-4 {\n        counter-reset: list-5 list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-5 {\n        counter-increment: list-5;\n    }\n    .ql-editor ol li.ql-indent-5:before {\n        content: counter(list-5, lower-roman) '. ';\n    }\n    .ql-editor ol li.ql-indent-5 {\n        counter-reset: list-6 list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-6 {\n        counter-increment: list-6;\n    }\n    .ql-editor ol li.ql-indent-6:before {\n        content: counter(list-6, decimal) '. ';\n    }\n    .ql-editor ol li.ql-indent-6 {\n        counter-reset: list-7 list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-7 {\n        counter-increment: list-7;\n    }\n    .ql-editor ol li.ql-indent-7:before {\n        content: counter(list-7, lower-alpha) '. ';\n    }\n    .ql-editor ol li.ql-indent-7 {\n        counter-reset: list-8 list-9;\n    }\n    .ql-editor ol li.ql-indent-8 {\n        counter-increment: list-8;\n    }\n    .ql-editor ol li.ql-indent-8:before {\n        content: counter(list-8, lower-roman) '. ';\n    }\n    .ql-editor ol li.ql-indent-8 {\n        counter-reset: list-9;\n    }\n    .ql-editor ol li.ql-indent-9 {\n        counter-increment: list-9;\n    }\n    .ql-editor ol li.ql-indent-9:before {\n        content: counter(list-9, decimal) '. ';\n    }\n    .ql-editor .ql-video {\n        display: block;\n        max-width: 100%;\n    }\n    .ql-editor .ql-video.ql-align-center {\n        margin: 0 auto;\n    }\n    .ql-editor .ql-video.ql-align-right {\n        margin: 0 0 0 auto;\n    }\n    .ql-editor .ql-bg-black {\n        background: #000;\n    }\n    .ql-editor .ql-bg-red {\n        background: #e60000;\n    }\n    .ql-editor .ql-bg-orange {\n        background: #f90;\n    }\n    .ql-editor .ql-bg-yellow {\n        background: #ff0;\n    }\n    .ql-editor .ql-bg-green {\n        background: #008a00;\n    }\n    .ql-editor .ql-bg-blue {\n        background: #06c;\n    }\n    .ql-editor .ql-bg-purple {\n        background: #93f;\n    }\n    .ql-editor .ql-color-white {\n        color: #fff;\n    }\n    .ql-editor .ql-color-red {\n        color: #e60000;\n    }\n    .ql-editor .ql-color-orange {\n        color: #f90;\n    }\n    .ql-editor .ql-color-yellow {\n        color: #ff0;\n    }\n    .ql-editor .ql-color-green {\n        color: #008a00;\n    }\n    .ql-editor .ql-color-blue {\n        color: #06c;\n    }\n    .ql-editor .ql-color-purple {\n        color: #93f;\n    }\n    .ql-editor .ql-font-serif {\n        font-family:\n            Georgia,\n            Times New Roman,\n            serif;\n    }\n    .ql-editor .ql-font-monospace {\n        font-family:\n            Monaco,\n            Courier New,\n            monospace;\n    }\n    .ql-editor .ql-size-small {\n        font-size: 0.75rem;\n    }\n    .ql-editor .ql-size-large {\n        font-size: 1.5rem;\n    }\n    .ql-editor .ql-size-huge {\n        font-size: 2.5rem;\n    }\n    .ql-editor .ql-direction-rtl {\n        direction: rtl;\n        text-align: inherit;\n    }\n    .ql-editor .ql-align-center {\n        text-align: center;\n    }\n    .ql-editor .ql-align-justify {\n        text-align: justify;\n    }\n    .ql-editor .ql-align-right {\n        text-align: right;\n    }\n    .ql-editor.ql-blank::before {\n        color: dt('form.field.placeholder.color');\n        content: attr(data-placeholder);\n        font-style: italic;\n        inset-inline-start: 15px;\n        pointer-events: none;\n        position: absolute;\n        inset-inline-end: 15px;\n    }\n    .ql-snow.ql-toolbar:after,\n    .ql-snow .ql-toolbar:after {\n        clear: both;\n        content: '';\n        display: table;\n    }\n    .ql-snow.ql-toolbar button,\n    .ql-snow .ql-toolbar button {\n        background: none;\n        border: none;\n        cursor: pointer;\n        display: inline-block;\n        float: left;\n        height: 24px;\n        padding-block: 3px;\n        padding-inline: 5px;\n        width: 28px;\n    }\n    .ql-snow.ql-toolbar button svg,\n    .ql-snow .ql-toolbar button svg {\n        float: left;\n        height: 100%;\n    }\n    .ql-snow.ql-toolbar button:active:hover,\n    .ql-snow .ql-toolbar button:active:hover {\n        outline: none;\n    }\n    .ql-snow.ql-toolbar input.ql-image[type='file'],\n    .ql-snow .ql-toolbar input.ql-image[type='file'] {\n        display: none;\n    }\n    .ql-snow.ql-toolbar button:hover,\n    .ql-snow .ql-toolbar button:hover,\n    .ql-snow.ql-toolbar button:focus,\n    .ql-snow .ql-toolbar button:focus,\n    .ql-snow.ql-toolbar button.ql-active,\n    .ql-snow .ql-toolbar button.ql-active,\n    .ql-snow.ql-toolbar .ql-picker-label:hover,\n    .ql-snow .ql-toolbar .ql-picker-label:hover,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active,\n    .ql-snow.ql-toolbar .ql-picker-item:hover,\n    .ql-snow .ql-toolbar .ql-picker-item:hover,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n        color: #06c;\n    }\n    .ql-snow.ql-toolbar button:hover .ql-fill,\n    .ql-snow .ql-toolbar button:hover .ql-fill,\n    .ql-snow.ql-toolbar button:focus .ql-fill,\n    .ql-snow .ql-toolbar button:focus .ql-fill,\n    .ql-snow.ql-toolbar button.ql-active .ql-fill,\n    .ql-snow .ql-toolbar button.ql-active .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n        fill: #06c;\n    }\n    .ql-snow.ql-toolbar button:hover .ql-stroke,\n    .ql-snow .ql-toolbar button:hover .ql-stroke,\n    .ql-snow.ql-toolbar button:focus .ql-stroke,\n    .ql-snow .ql-toolbar button:focus .ql-stroke,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n    .ql-snow .ql-toolbar button.ql-active .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n        stroke: #06c;\n    }\n    @media (pointer: coarse) {\n        .ql-snow.ql-toolbar button:hover:not(.ql-active),\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n            color: #444;\n        }\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n            fill: #444;\n        }\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n            stroke: #444;\n        }\n    }\n    .ql-snow {\n        box-sizing: border-box;\n    }\n    .ql-snow * {\n        box-sizing: border-box;\n    }\n    .ql-snow .ql-hidden {\n        display: none;\n    }\n    .ql-snow .ql-out-bottom,\n    .ql-snow .ql-out-top {\n        visibility: hidden;\n    }\n    .ql-snow .ql-tooltip {\n        position: absolute;\n        transform: translateY(10px);\n    }\n    .ql-snow .ql-tooltip a {\n        cursor: pointer;\n        text-decoration: none;\n    }\n    .ql-snow .ql-tooltip.ql-flip {\n        transform: translateY(-10px);\n    }\n    .ql-snow .ql-formats {\n        display: inline-block;\n        vertical-align: middle;\n    }\n    .ql-snow .ql-formats:after {\n        clear: both;\n        content: '';\n        display: table;\n    }\n    .ql-snow .ql-stroke {\n        fill: none;\n        stroke: #444;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 2;\n    }\n    .ql-snow .ql-stroke-miter {\n        fill: none;\n        stroke: #444;\n        stroke-miterlimit: 10;\n        stroke-width: 2;\n    }\n    .ql-snow .ql-fill,\n    .ql-snow .ql-stroke.ql-fill {\n        fill: #444;\n    }\n    .ql-snow .ql-empty {\n        fill: none;\n    }\n    .ql-snow .ql-even {\n        fill-rule: evenodd;\n    }\n    .ql-snow .ql-thin,\n    .ql-snow .ql-stroke.ql-thin {\n        stroke-width: 1;\n    }\n    .ql-snow .ql-transparent {\n        opacity: 0.4;\n    }\n    .ql-snow .ql-direction svg:last-child {\n        display: none;\n    }\n    .ql-snow .ql-direction.ql-active svg:last-child {\n        display: inline;\n    }\n    .ql-snow .ql-direction.ql-active svg:first-child {\n        display: none;\n    }\n    .ql-snow .ql-editor h1 {\n        font-size: 2rem;\n    }\n    .ql-snow .ql-editor h2 {\n        font-size: 1.5rem;\n    }\n    .ql-snow .ql-editor h3 {\n        font-size: 1.17rem;\n    }\n    .ql-snow .ql-editor h4 {\n        font-size: 1rem;\n    }\n    .ql-snow .ql-editor h5 {\n        font-size: 0.83rem;\n    }\n    .ql-snow .ql-editor h6 {\n        font-size: 0.67rem;\n    }\n    .ql-snow .ql-editor a {\n        text-decoration: underline;\n    }\n    .ql-snow .ql-editor blockquote {\n        border-inline-start: 4px solid #ccc;\n        margin-block-end: 5px;\n        margin-block-start: 5px;\n        padding-inline-start: 16px;\n    }\n    .ql-snow .ql-editor code,\n    .ql-snow .ql-editor pre {\n        background: #f0f0f0;\n        border-radius: 3px;\n    }\n    .ql-snow .ql-editor pre {\n        white-space: pre-wrap;\n        margin-block-end: 5px;\n        margin-block-start: 5px;\n        padding: 5px 10px;\n    }\n    .ql-snow .ql-editor code {\n        font-size: 85%;\n        padding: 2px 4px;\n    }\n    .ql-snow .ql-editor pre.ql-syntax {\n        background: #23241f;\n        color: #f8f8f2;\n        overflow: visible;\n    }\n    .ql-snow .ql-editor img {\n        max-width: 100%;\n    }\n    .ql-snow .ql-picker {\n        color: #444;\n        display: inline-block;\n        float: left;\n        inset-inline-start: 0;\n        font-size: 14px;\n        font-weight: 500;\n        height: 24px;\n        position: relative;\n        vertical-align: middle;\n    }\n    .ql-snow .ql-picker-label {\n        cursor: pointer;\n        display: inline-block;\n        height: 100%;\n        padding-inline-start: 8px;\n        padding-inline-end: 2px;\n        position: relative;\n        width: 100%;\n    }\n    .ql-snow .ql-picker-label::before {\n        display: inline-block;\n        line-height: 22px;\n    }\n    .ql-snow .ql-picker-options {\n        background: #fff;\n        display: none;\n        min-width: 100%;\n        padding: 4px 8px;\n        position: absolute;\n        white-space: nowrap;\n    }\n    .ql-snow .ql-picker-options .ql-picker-item {\n        cursor: pointer;\n        display: block;\n        padding-block-end: 5px;\n        padding-block-start: 5px;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-label {\n        color: #ccc;\n        z-index: 2;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n        fill: #ccc;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n        stroke: #ccc;\n    }\n    .ql-snow .ql-picker.ql-expanded .ql-picker-options {\n        display: block;\n        margin-block-start: -1px;\n        top: 100%;\n        z-index: 1;\n    }\n    .ql-snow .ql-color-picker,\n    .ql-snow .ql-icon-picker {\n        width: 28px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-label,\n    .ql-snow .ql-icon-picker .ql-picker-label {\n        padding: 2px 4px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-label svg,\n    .ql-snow .ql-icon-picker .ql-picker-label svg {\n        inset-inline-end: 4px;\n    }\n    .ql-snow .ql-icon-picker .ql-picker-options {\n        padding: 4px 0;\n    }\n    .ql-snow .ql-icon-picker .ql-picker-item {\n        height: 24px;\n        width: 24px;\n        padding: 2px 4px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-options {\n        padding: 3px 5px;\n        width: 152px;\n    }\n    .ql-snow .ql-color-picker .ql-picker-item {\n        border: 1px solid transparent;\n        float: left;\n        height: 16px;\n        margin: 2px;\n        padding: 0;\n        width: 16px;\n    }\n    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n        position: absolute;\n        margin-block-start: -9px;\n        inset-inline-end: 0;\n        top: 50%;\n        width: 18px;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n        content: attr(data-label);\n    }\n    .ql-snow .ql-picker.ql-header {\n        width: 98px;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item::before {\n        content: 'Normal';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n        content: 'Heading 1';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n        content: 'Heading 2';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n        content: 'Heading 3';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n        content: 'Heading 4';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n        content: 'Heading 5';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n        content: 'Heading 6';\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n        font-size: 2rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n        font-size: 1.5rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n        font-size: 1.17rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n        font-size: 1rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n        font-size: 0.83rem;\n    }\n    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n        font-size: 0.67rem;\n    }\n    .ql-snow .ql-picker.ql-font {\n        width: 108px;\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-label::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item::before {\n        content: 'Sans Serif';\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n        content: 'Serif';\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n        content: 'Monospace';\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n        font-family:\n            Georgia,\n            Times New Roman,\n            serif;\n    }\n    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n        font-family:\n            Monaco,\n            Courier New,\n            monospace;\n    }\n    .ql-snow .ql-picker.ql-size {\n        width: 98px;\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item::before {\n        content: 'Normal';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n        content: 'Small';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n        content: 'Large';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n        content: 'Huge';\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n        font-size: 10px;\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n        font-size: 18px;\n    }\n    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n        font-size: 32px;\n    }\n    .ql-snow .ql-color-picker.ql-background .ql-picker-item {\n        background: #fff;\n    }\n    .ql-snow .ql-color-picker.ql-color .ql-picker-item {\n        background: #000;\n    }\n    .ql-toolbar.ql-snow {\n        border: 1px solid #ccc;\n        box-sizing: border-box;\n        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n        padding: 8px;\n    }\n    .ql-toolbar.ql-snow .ql-formats {\n        margin-inline-end: 15px;\n    }\n    .ql-toolbar.ql-snow .ql-picker-label {\n        border: 1px solid transparent;\n    }\n    .ql-toolbar.ql-snow .ql-picker-options {\n        border: 1px solid transparent;\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n    }\n    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n        border-color: #ccc;\n    }\n    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n        border-color: #ccc;\n    }\n    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n        border-color: #000;\n    }\n    .ql-toolbar.ql-snow + .ql-container.ql-snow {\n        border-block-start: 0;\n    }\n    .ql-snow .ql-tooltip {\n        background: #fff;\n        border: 1px solid #ccc;\n        box-shadow: 0 0 5px #ddd;\n        color: #444;\n        padding: 5px 12px;\n        white-space: nowrap;\n    }\n    .ql-snow .ql-tooltip::before {\n        content: 'Visit URL:';\n        line-height: 26px;\n        margin-inline-end: 8px;\n    }\n    .ql-snow .ql-tooltip input[type='text'] {\n        display: none;\n        border: 1px solid #ccc;\n        font-size: 13px;\n        height: 26px;\n        margin: 0;\n        padding: 3px 5px;\n        width: 170px;\n    }\n    .ql-snow .ql-tooltip a.ql-preview {\n        display: inline-block;\n        max-width: 200px;\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        vertical-align: top;\n    }\n    .ql-snow .ql-tooltip a.ql-action::after {\n        border-inline-end: 1px solid #ccc;\n        content: 'Edit';\n        margin-inline-start: 16px;\n        padding-inline-end: 8px;\n    }\n    .ql-snow .ql-tooltip a.ql-remove::before {\n        content: 'Remove';\n        margin-inline-start: 8px;\n    }\n    .ql-snow .ql-tooltip a {\n        line-height: 26px;\n    }\n    .ql-snow .ql-tooltip.ql-editing a.ql-preview,\n    .ql-snow .ql-tooltip.ql-editing a.ql-remove {\n        display: none;\n    }\n    .ql-snow .ql-tooltip.ql-editing input[type='text'] {\n        display: inline-block;\n    }\n    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n        border-inline-end: 0;\n        content: 'Save';\n        padding-inline-end: 0;\n    }\n    .ql-snow .ql-tooltip[data-mode='link']::before {\n        content: 'Enter link:';\n    }\n    .ql-snow .ql-tooltip[data-mode='formula']::before {\n        content: 'Enter formula:';\n    }\n    .ql-snow .ql-tooltip[data-mode='video']::before {\n        content: 'Enter video:';\n    }\n    .ql-snow a {\n        color: #06c;\n    }\n    .ql-container.ql-snow {\n        border: 1px solid #ccc;\n    }\n\n    .p-editor {\n        display: block;\n    }\n\n    .p-editor .p-editor-toolbar {\n        background: dt('editor.toolbar.background');\n        border-start-end-radius: dt('editor.toolbar.border.radius');\n        border-start-start-radius: dt('editor.toolbar.border.radius');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow {\n        border: 1px solid dt('editor.toolbar.border.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {\n        stroke: dt('editor.toolbar.item.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-fill {\n        fill: dt('editor.toolbar.item.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {\n        border: 0 none;\n        color: dt('editor.toolbar.item.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {\n        color: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {\n        stroke: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {\n        fill: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n        color: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n        stroke: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n        fill: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n        background: dt('editor.overlay.background');\n        border: 1px solid dt('editor.overlay.border.color');\n        box-shadow: dt('editor.overlay.shadow');\n        border-radius: dt('editor.overlay.border.radius');\n        padding: dt('editor.overlay.padding');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {\n        color: dt('editor.overlay.option.color');\n        border-radius: dt('editor.overlay.option.border.radius');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {\n        background: dt('editor.overlay.option.focus.background');\n        color: dt('editor.overlay.option.focus.color');\n    }\n\n    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {\n        padding: dt('editor.overlay.option.padding');\n    }\n\n    .p-editor .p-editor-content {\n        border-end-end-radius: dt('editor.content.border.radius');\n        border-end-start-radius: dt('editor.content.border.radius');\n    }\n\n    .p-editor .p-editor-content.ql-snow {\n        border: 1px solid dt('editor.content.border.color');\n    }\n\n    .p-editor .p-editor-content .ql-editor {\n        background: dt('editor.content.background');\n        color: dt('editor.content.color');\n        border-end-end-radius: dt('editor.content.border.radius');\n        border-end-start-radius: dt('editor.content.border.radius');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button:hover,\n    .p-editor .ql-snow.ql-toolbar button:focus {\n        color: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,\n    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {\n        stroke: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,\n    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {\n        fill: dt('editor.toolbar.item.hover.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {\n        color: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {\n        stroke: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {\n        fill: dt('editor.toolbar.item.active.color');\n    }\n\n    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,\n    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {\n        color: dt('editor.toolbar.item.active.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-editor.mjs
var _c0 = ["header"];
var _c1 = [[["p-header"]]];
var _c2 = ["p-header"];
function Editor_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Editor_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵprojection(1);
    ɵɵtemplate(2, Editor_div_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("toolbar"));
    ɵɵproperty("pBind", ctx_r0.ptm("toolbar"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function Editor_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "span", 4)(2, "select", 5)(3, "option", 6);
    ɵɵtext(4, "Heading");
    ɵɵelementEnd();
    ɵɵelementStart(5, "option", 7);
    ɵɵtext(6, "Subheading");
    ɵɵelementEnd();
    ɵɵelementStart(7, "option", 8);
    ɵɵtext(8, "Normal");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "select", 9)(10, "option", 8);
    ɵɵtext(11, "Sans Serif");
    ɵɵelementEnd();
    ɵɵelementStart(12, "option", 10);
    ɵɵtext(13, "Serif");
    ɵɵelementEnd();
    ɵɵelementStart(14, "option", 11);
    ɵɵtext(15, "Monospace");
    ɵɵelementEnd()()();
    ɵɵelementStart(16, "span", 4);
    ɵɵelement(17, "button", 12)(18, "button", 13)(19, "button", 14);
    ɵɵelementEnd();
    ɵɵelementStart(20, "span", 4);
    ɵɵelement(21, "select", 15)(22, "select", 16);
    ɵɵelementEnd();
    ɵɵelementStart(23, "span", 4);
    ɵɵelement(24, "button", 17)(25, "button", 18);
    ɵɵelementStart(26, "select", 19);
    ɵɵelement(27, "option", 8);
    ɵɵelementStart(28, "option", 20);
    ɵɵtext(29, "center");
    ɵɵelementEnd();
    ɵɵelementStart(30, "option", 21);
    ɵɵtext(31, "right");
    ɵɵelementEnd();
    ɵɵelementStart(32, "option", 22);
    ɵɵtext(33, "justify");
    ɵɵelementEnd()()();
    ɵɵelementStart(34, "span", 4);
    ɵɵelement(35, "button", 23)(36, "button", 24)(37, "button", 25);
    ɵɵelementEnd();
    ɵɵelementStart(38, "span", 4);
    ɵɵelement(39, "button", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("toolbar"));
    ɵɵproperty("pBind", ctx_r0.ptm("toolbar"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("formats"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("header"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("select"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("formats"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("bold"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("italic"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("underline"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("formats"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("color"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("background"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("formats"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("list"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("list"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("select"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("option"));
    ɵɵadvance(2);
    ɵɵproperty("pBind", ctx_r0.ptm("formats"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("link"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("image"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("codeBlock"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("formats"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r0.ptm("clean"));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-editor", {
    "p-invalid": instance.invalid()
  }],
  toolbar: "p-editor-toolbar",
  content: "p-editor-content"
};
var EditorStyle = class _EditorStyle extends BaseStyle {
  name = "editor";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵEditorStyle_BaseFactory;
    return function EditorStyle_Factory(__ngFactoryType__) {
      return (ɵEditorStyle_BaseFactory || (ɵEditorStyle_BaseFactory = ɵɵgetInheritedFactory(_EditorStyle)))(__ngFactoryType__ || _EditorStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _EditorStyle,
    factory: _EditorStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorStyle, [{
    type: Injectable
  }], null, null);
})();
var EditorClasses;
(function(EditorClasses2) {
  EditorClasses2["root"] = "p-editor";
  EditorClasses2["toolbar"] = "p-editor-toolbar";
  EditorClasses2["content"] = "p-editor-content";
})(EditorClasses || (EditorClasses = {}));
var EDITOR_INSTANCE = new InjectionToken("EDITOR_INSTANCE");
var EDITOR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Editor),
  multi: true
};
var Editor = class _Editor extends BaseEditableHolder {
  componentName = "Editor";
  $pcEditor = inject(EDITOR_INSTANCE, {
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
   * Inline style of the container.
   * @group Props
   */
  style;
  /**
   * Style class of the container.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Placeholder text to show when editor is empty.
   * @group Props
   */
  placeholder;
  /**
   * Whitelist of formats to display, see [here](https://quilljs.com/docs/formats/) for available options.
   * @group Props
   */
  formats;
  /**
   * Modules configuration of Editor, see [here](https://quilljs.com/docs/modules/) for available options.
   * @group Props
   */
  modules;
  /**
   * DOM Element or a CSS selector for a DOM Element, within which the editor’s p elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.
   * @group Props
   */
  bounds;
  /**
   * DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling..
   * @group Props
   */
  scrollingContainer;
  /**
   * Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.
   * @group Props
   */
  debug;
  /**
   * Whether to instantiate the editor to read-only mode.
   * @group Props
   */
  get readonly() {
    return this._readonly;
  }
  set readonly(val) {
    this._readonly = val;
    if (this.quill) {
      if (this._readonly) this.quill.disable();
      else this.quill.enable();
    }
  }
  /**
   * Callback to invoke when the quill modules are loaded.
   * @param {EditorInitEvent} event - custom event.
   * @group Emits
   */
  onEditorInit = new EventEmitter();
  /**
   * Callback to invoke when text of editor changes.
   * @param {EditorTextChangeEvent} event - custom event.
   * @group Emits
   */
  onTextChange = new EventEmitter();
  /**
   * Callback to invoke when selection of the text changes.
   * @param {EditorSelectionChangeEvent} event - custom event.
   * @group Emits
   */
  onSelectionChange = new EventEmitter();
  /**
   * Callback to invoke when editor content changes (combines both text and selection changes).
   * @param {EditorChangeEvent} event - custom event.
   * @group Emits
   */
  onEditorChange = new EventEmitter();
  /**
   * Callback to invoke when editor receives focus.
   * @param {EditorFocusEvent} event - custom event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when editor loses focus.
   * @param {EditorBlurEvent} event - custom event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  toolbar;
  value;
  delayedCommand = null;
  _readonly = false;
  quill;
  dynamicQuill;
  /**
   * Custom item template.
   * @group Templates
   */
  headerTemplate;
  templates;
  _headerTemplate;
  get isAttachedQuillEditorToDOM() {
    return this.quillElements?.editorElement?.isConnected;
  }
  quillElements;
  focusListener = null;
  blurListener = null;
  _componentStyle = inject(EditorStyle);
  constructor() {
    super();
    afterNextRender(() => {
      this.initQuillElements();
      this.initQuillEditor();
    });
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    this.value = value;
    if (this.quill) {
      if (value) {
        const command = () => {
          this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2") ? {
            html: this.value
          } : this.value));
        };
        if (this.isAttachedQuillEditorToDOM) {
          command();
        } else {
          this.delayedCommand = command;
        }
      } else {
        const command = () => {
          this.quill.setText("");
        };
        if (this.isAttachedQuillEditorToDOM) {
          command();
        } else {
          this.delayedCommand = command;
        }
      }
    }
  }
  getQuill() {
    return this.quill;
  }
  initQuillEditor() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    if (!this.dynamicQuill) {
      import("./quill-ZH3KDYKY.js").then((quillModule) => {
        this.dynamicQuill = quillModule.default;
        this.createQuillEditor();
      }).catch((e) => console.error(e.message));
    } else {
      this.createQuillEditor();
    }
  }
  createQuillEditor() {
    this.initQuillElements();
    const {
      toolbarElement,
      editorElement
    } = this.quillElements;
    let defaultModule = {
      toolbar: toolbarElement
    };
    let modules = this.modules ? __spreadValues(__spreadValues({}, defaultModule), this.modules) : defaultModule;
    this.quill = new this.dynamicQuill(editorElement, {
      modules,
      placeholder: this.placeholder,
      readOnly: this.readonly,
      theme: "snow",
      formats: this.formats,
      bounds: this.bounds,
      debug: this.debug,
      scrollingContainer: this.scrollingContainer
    });
    const isQuill2 = this.dynamicQuill.version.startsWith("2");
    if (this.value) {
      this.quill.setContents(this.quill.clipboard.convert(isQuill2 ? {
        html: this.value
      } : this.value));
    }
    this.quill.on("text-change", (delta, oldContents, source) => {
      if (source === "user") {
        let html = isQuill2 ? this.quill.getSemanticHTML() : z(editorElement, ".ql-editor")?.innerHTML;
        let text = this.quill.getText().trim();
        if (html === "<p><br></p>") {
          html = null;
        }
        this.onTextChange.emit({
          htmlValue: html,
          textValue: text,
          delta,
          source
        });
        this.onModelChange(html);
        this.onModelTouched();
      }
    });
    this.quill.on("selection-change", (range, oldRange, source) => {
      this.onSelectionChange.emit({
        range,
        oldRange,
        source
      });
    });
    this.quill.on("editor-change", (eventName, ...args) => {
      this.onEditorChange.emit({
        eventName,
        args
      });
    });
    const editorEl = this.quill.root;
    this.focusListener = () => {
      this.onFocus.emit({
        source: "user"
      });
    };
    this.blurListener = () => {
      this.onBlur.emit({
        source: "user"
      });
    };
    editorEl.addEventListener("focus", this.focusListener);
    editorEl.addEventListener("blur", this.blurListener);
    this.onEditorInit.emit({
      editor: this.quill
    });
  }
  onDestroy() {
    if (this.quill && this.quill.root) {
      const editorEl = this.quill.root;
      if (this.focusListener) {
        editorEl.removeEventListener("focus", this.focusListener);
        this.focusListener = null;
      }
      if (this.blurListener) {
        editorEl.removeEventListener("blur", this.blurListener);
        this.blurListener = null;
      }
    }
  }
  initQuillElements() {
    if (!this.quillElements) {
      this.quillElements = {
        editorElement: z(this.el.nativeElement, 'div[data-pc-section="content"]'),
        toolbarElement: z(this.el.nativeElement, 'div[data-pc-section="toolbar"]')
      };
    }
  }
  static ɵfac = function Editor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Editor)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Editor,
    selectors: [["p-editor"]],
    contentQueries: function Editor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 5)(dirIndex, _c0, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function Editor_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      placeholder: "placeholder",
      formats: "formats",
      modules: "modules",
      bounds: "bounds",
      scrollingContainer: "scrollingContainer",
      debug: "debug",
      readonly: "readonly"
    },
    outputs: {
      onEditorInit: "onInit",
      onTextChange: "onTextChange",
      onSelectionChange: "onSelectionChange",
      onEditorChange: "onEditorChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([EDITOR_VALUE_ACCESSOR, EditorStyle, {
      provide: EDITOR_INSTANCE,
      useExisting: _Editor
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Editor
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 3,
    vars: 6,
    consts: [[3, "class", "pBind", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet"], [1, "ql-formats", 3, "pBind"], [1, "ql-header", 3, "pBind"], ["value", "1", 3, "pBind"], ["value", "2", 3, "pBind"], ["selected", "", 3, "pBind"], [1, "ql-font", 3, "pBind"], ["value", "serif", 3, "pBind"], ["value", "monospace", 3, "pBind"], ["aria-label", "Bold", "type", "button", 1, "ql-bold", 3, "pBind"], ["aria-label", "Italic", "type", "button", 1, "ql-italic", 3, "pBind"], ["aria-label", "Underline", "type", "button", 1, "ql-underline", 3, "pBind"], [1, "ql-color", 3, "pBind"], [1, "ql-background", 3, "pBind"], ["value", "ordered", "aria-label", "Ordered List", "type", "button", 1, "ql-list", 3, "pBind"], ["value", "bullet", "aria-label", "Unordered List", "type", "button", 1, "ql-list", 3, "pBind"], [1, "ql-align", 3, "pBind"], ["value", "center", 3, "pBind"], ["value", "right", 3, "pBind"], ["value", "justify", 3, "pBind"], ["aria-label", "Insert Link", "type", "button", 1, "ql-link", 3, "pBind"], ["aria-label", "Insert Image", "type", "button", 1, "ql-image", 3, "pBind"], ["aria-label", "Insert Code Block", "type", "button", 1, "ql-code-block", 3, "pBind"], ["aria-label", "Remove Styles", "type", "button", 1, "ql-clean", 3, "pBind"]],
    template: function Editor_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c1);
        ɵɵtemplate(0, Editor_div_0_Template, 3, 4, "div", 0)(1, Editor_div_1_Template, 40, 33, "div", 0);
        ɵɵelement(2, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.toolbar || ctx.headerTemplate || ctx._headerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.toolbar && !ctx.headerTemplate && !ctx._headerTemplate);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("content"));
        ɵɵproperty("ngStyle", ctx.style)("pBind", ctx.ptm("content"));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Editor, [{
    type: Component,
    args: [{
      selector: "p-editor",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [class]="cx('toolbar')" *ngIf="toolbar || headerTemplate || _headerTemplate" [pBind]="ptm('toolbar')">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [class]="cx('toolbar')" *ngIf="!toolbar && !headerTemplate && !_headerTemplate" [pBind]="ptm('toolbar')">
            <span class="ql-formats" [pBind]="ptm('formats')">
                <select class="ql-header" [pBind]="ptm('header')">
                    <option value="1" [pBind]="ptm('option')">Heading</option>
                    <option value="2" [pBind]="ptm('option')">Subheading</option>
                    <option selected [pBind]="ptm('option')">Normal</option>
                </select>
                <select class="ql-font" [pBind]="ptm('select')">
                    <option selected [pBind]="ptm('option')">Sans Serif</option>
                    <option value="serif" [pBind]="ptm('option')">Serif</option>
                    <option value="monospace" [pBind]="ptm('option')">Monospace</option>
                </select>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-bold" aria-label="Bold" type="button" [pBind]="ptm('bold')"></button>
                <button class="ql-italic" aria-label="Italic" type="button" [pBind]="ptm('italic')"></button>
                <button class="ql-underline" aria-label="Underline" type="button" [pBind]="ptm('underline')"></button>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <select class="ql-color" [pBind]="ptm('color')"></select>
                <select class="ql-background" [pBind]="ptm('background')"></select>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-list" value="ordered" aria-label="Ordered List" type="button" [pBind]="ptm('list')"></button>
                <button class="ql-list" value="bullet" aria-label="Unordered List" type="button" [pBind]="ptm('list')"></button>
                <select class="ql-align" [pBind]="ptm('select')">
                    <option selected [pBind]="ptm('option')"></option>
                    <option value="center" [pBind]="ptm('option')">center</option>
                    <option value="right" [pBind]="ptm('option')">right</option>
                    <option value="justify" [pBind]="ptm('option')">justify</option>
                </select>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-link" aria-label="Insert Link" type="button" [pBind]="ptm('link')"></button>
                <button class="ql-image" aria-label="Insert Image" type="button" [pBind]="ptm('image')"></button>
                <button class="ql-code-block" aria-label="Insert Code Block" type="button" [pBind]="ptm('codeBlock')"></button>
            </span>
            <span class="ql-formats" [pBind]="ptm('formats')">
                <button class="ql-clean" aria-label="Remove Styles" type="button" [pBind]="ptm('clean')"></button>
            </span>
        </div>
        <div [class]="cx('content')" [ngStyle]="style" [pBind]="ptm('content')"></div>
    `,
      providers: [EDITOR_VALUE_ACCESSOR, EditorStyle, {
        provide: EDITOR_INSTANCE,
        useExisting: Editor
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Editor
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    formats: [{
      type: Input
    }],
    modules: [{
      type: Input
    }],
    bounds: [{
      type: Input
    }],
    scrollingContainer: [{
      type: Input
    }],
    debug: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    onEditorInit: [{
      type: Output,
      args: ["onInit"]
    }],
    onTextChange: [{
      type: Output
    }],
    onSelectionChange: [{
      type: Output
    }],
    onEditorChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    toolbar: [{
      type: ContentChild,
      args: [Header]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var EditorModule = class _EditorModule {
  static ɵfac = function EditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditorModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _EditorModule,
    imports: [Editor, SharedModule],
    exports: [Editor, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Editor, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorModule, [{
    type: NgModule,
    args: [{
      imports: [Editor, SharedModule],
      exports: [Editor, SharedModule]
    }]
  }], null, null);
})();
export {
  EDITOR_VALUE_ACCESSOR,
  Editor,
  EditorClasses,
  EditorModule,
  EditorStyle
};
//# sourceMappingURL=primeng_editor.js.map
