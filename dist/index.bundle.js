/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/light-theme.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/light-theme.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --black: #323232;
    --black-filter: invert(17%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(93%) contrast(89%);;
    --black-transparent: rgb(0, 0, 0, 0.25);
    --white: #F2F2F2;
    --white-filter: invert(99%) sepia(2%) saturate(143%) hue-rotate(198deg) brightness(116%) contrast(90%);
    --day: linear-gradient(135deg, #0087E7, #C29900);
    --power-primary: #00131A;
    --power-secondary: #64D1F3;
    --power-tertiary: invert(100%) sepia(36%) saturate(4010%) hue-rotate(176deg) brightness(103%) contrast(101%);
    --power-quaternary: #7FA9D6;
    --transparent: rgb(46, 68, 87, 0.5);
    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);
    --additional-forecast: rgba(242, 242, 242, 0.2);
    --additional-forecast-2: rgba(242, 242, 242, 0.7);
    --card: rgb(250, 250, 250, 0.1);
    --navigation: rgb(242, 242, 242, 0.2);
    --dropshadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.1);
    --modal-result: #EAEEEF;  
}

body {
    background: var(--day);
}



/** COLOR CLASS STYLES **/

.secondary {
    color: var(--power-secondary);
}

.tertiary {
    filter: var(--power-tertiary);
}

.black-filter {
    filter: var(--black-filter);
}



/** OTHER GENERAL STYLES **/
button {
    background-color: var(--power-primary);
}

.button:hover {
    background-color: var(--black);
}



/** NAVIGATION STYLES **/

nav {
    color: var(--white);
}

nav.main-nav img {
    filter: var(--white-filter);
}

nav.side-nav-container {
    color: var(--black);
}

nav .side-nav {
    background-color: var(--navigation);
}

nav.side-nav-container .logo,
nav.side-nav-container .divider {
    filter: var(--black-filter);
}

nav.side-nav-container .exit img {
	filter: var(--white-filter);
}


/** SLIDER SWITCH STYLES **/
.slider {
    background-color: var(--transparent);
    border: solid 1px var(--white);
}

.slider:before {
    background-color: var(--white);
}

input:checked + .slider {
	background: var(--power-quaternary);
}
  
input:focus + .slider {
    box-shadow: 0 0 1px var(--power-quaternary);
}



/** MOBILE SEARCH MODAL STYLES **/
.mobile-search-modal {
    color: var(--black);
}

.mobile-search-modal .container {
    background-color: var(--white);
}

.mobile-search-modal .search-result:hover {
	background-color: var(--modal-result);
}



/** SETTINGS MODAL **/
.mobile-settings-modal .container {
    background-color: var(--white);
    color: var(--black);
}



/** CURRENT FORECAST STYLES **/

section#current-forecast {
    background-color: var(--additional-forecast);
    color: var(--white);
}

    /* DESKTOP STYLE */
    @media only screen and (min-width: 1024px) {
        #current-forecast {
            box-shadow: var(--dropshadow);
        }
    }


/** MORE CURRENT FORECAST DETAILS STYLES **/

#more-current-forecast-details-container {
    background: var(--power-primary);

    /* MOBILE STYLE */
    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);
}

    /* DESKTOP STYLE */
    @media only screen and (min-width: 1024px) {
        #more-current-forecast-details-container {
            box-shadow: var(--dropshadow);
        }
    }


/** ADDITIONAL FORECAST DETAILS STYLES **/
#additional-forecast {
    background-color: var(--additional-forecast);
}

    /* DESKTOP STYLE */
    @media only screen and (min-width: 1024px) {
        #additional-forecast {
            box-shadow: var(--dropshadow);
        }
    }


/** HOURLY FORECAST STYLES **/

.custom-scrollbar {
    scrollbar-color: var(--additional-forecast-2) var(--additional-forecast) !important;
    scrollbar-width: thin;
}

.custom-scrollbar:hover {
    scrollbar-color: var(--white) var(--additional-forecast);
}

.custom-scrollbar::-webkit-scrollbar-track {
	background-color: var(--additional-forecast);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
	background-color: var(--additional-forecast-2);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: var(--white);
}

    
/** HOURLY CARD STYLES **/
.hourly-card {
    background-color: var(--card);
}

/** 3-DAY FORECAST CARD STYLES **/`, "",{"version":3,"sources":["webpack://./src/light-theme.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kGAAkG;IAClG,uCAAuC;IACvC,gBAAgB;IAChB,sGAAsG;IACtG,gDAAgD;IAChD,wBAAwB;IACxB,0BAA0B;IAC1B,4GAA4G;IAC5G,2BAA2B;IAC3B,mCAAmC;IACnC,yHAAyH;IACzH,+CAA+C;IAC/C,iDAAiD;IACjD,+BAA+B;IAC/B,qCAAqC;IACrC,gDAAgD;IAChD,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;;;AAIA,yBAAyB;;AAEzB;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;AAC/B;;;;AAIA,2BAA2B;AAC3B;IACI,sCAAsC;AAC1C;;AAEA;IACI,8BAA8B;AAClC;;;;AAIA,wBAAwB;;AAExB;IACI,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;CACC,2BAA2B;AAC5B;;;AAGA,2BAA2B;AAC3B;IACI,oCAAoC;IACpC,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;IACI,2CAA2C;AAC/C;;;;AAIA,iCAAiC;AACjC;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,qCAAqC;AACtC;;;;AAIA,qBAAqB;AACrB;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;;;AAIA,8BAA8B;;AAE9B;IACI,4CAA4C;IAC5C,mBAAmB;AACvB;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,2CAA2C;;AAE3C;IACI,gCAAgC;;IAEhC,iBAAiB;IACjB,0DAA0D;AAC9D;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,yCAAyC;AACzC;IACI,4CAA4C;AAChD;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,6BAA6B;;AAE7B;IACI,mFAAmF;IACnF,qBAAqB;AACzB;;AAEA;IACI,wDAAwD;AAC5D;;AAEA;CACC,4CAA4C;AAC7C;;AAEA;CACC,8CAA8C;AAC/C;;AAEA;IACI,8BAA8B;AAClC;;;AAGA,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA,iCAAiC","sourcesContent":[":root {\r\n    --black: #323232;\r\n    --black-filter: invert(17%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(93%) contrast(89%);;\r\n    --black-transparent: rgb(0, 0, 0, 0.25);\r\n    --white: #F2F2F2;\r\n    --white-filter: invert(99%) sepia(2%) saturate(143%) hue-rotate(198deg) brightness(116%) contrast(90%);\r\n    --day: linear-gradient(135deg, #0087E7, #C29900);\r\n    --power-primary: #00131A;\r\n    --power-secondary: #64D1F3;\r\n    --power-tertiary: invert(100%) sepia(36%) saturate(4010%) hue-rotate(176deg) brightness(103%) contrast(101%);\r\n    --power-quaternary: #7FA9D6;\r\n    --transparent: rgb(46, 68, 87, 0.5);\r\n    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);\r\n    --additional-forecast: rgba(242, 242, 242, 0.2);\r\n    --additional-forecast-2: rgba(242, 242, 242, 0.7);\r\n    --card: rgb(250, 250, 250, 0.1);\r\n    --navigation: rgb(242, 242, 242, 0.2);\r\n    --dropshadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.1);\r\n    --modal-result: #EAEEEF;  \r\n}\r\n\r\nbody {\r\n    background: var(--day);\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n\r\n.secondary {\r\n    color: var(--power-secondary);\r\n}\r\n\r\n.tertiary {\r\n    filter: var(--power-tertiary);\r\n}\r\n\r\n.black-filter {\r\n    filter: var(--black-filter);\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\nbutton {\r\n    background-color: var(--power-primary);\r\n}\r\n\r\n.button:hover {\r\n    background-color: var(--black);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n    color: var(--white);\r\n}\r\n\r\nnav.main-nav img {\r\n    filter: var(--white-filter);\r\n}\r\n\r\nnav.side-nav-container {\r\n    color: var(--black);\r\n}\r\n\r\nnav .side-nav {\r\n    background-color: var(--navigation);\r\n}\r\n\r\nnav.side-nav-container .logo,\r\nnav.side-nav-container .divider {\r\n    filter: var(--black-filter);\r\n}\r\n\r\nnav.side-nav-container .exit img {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n.slider {\r\n    background-color: var(--transparent);\r\n    border: solid 1px var(--white);\r\n}\r\n\r\n.slider:before {\r\n    background-color: var(--white);\r\n}\r\n\r\ninput:checked + .slider {\r\n\tbackground: var(--power-quaternary);\r\n}\r\n  \r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px var(--power-quaternary);\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n    color: var(--black);\r\n}\r\n\r\n.mobile-search-modal .container {\r\n    background-color: var(--white);\r\n}\r\n\r\n.mobile-search-modal .search-result:hover {\r\n\tbackground-color: var(--modal-result);\r\n}\r\n\r\n\r\n\r\n/** SETTINGS MODAL **/\r\n.mobile-settings-modal .container {\r\n    background-color: var(--white);\r\n    color: var(--black);\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n\r\nsection#current-forecast {\r\n    background-color: var(--additional-forecast);\r\n    color: var(--white);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #current-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details-container {\r\n    background: var(--power-primary);\r\n\r\n    /* MOBILE STYLE */\r\n    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #more-current-forecast-details-container {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** ADDITIONAL FORECAST DETAILS STYLES **/\r\n#additional-forecast {\r\n    background-color: var(--additional-forecast);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #additional-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n\r\n.custom-scrollbar {\r\n    scrollbar-color: var(--additional-forecast-2) var(--additional-forecast) !important;\r\n    scrollbar-width: thin;\r\n}\r\n\r\n.custom-scrollbar:hover {\r\n    scrollbar-color: var(--white) var(--additional-forecast);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-track {\r\n\tbackground-color: var(--additional-forecast);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\tbackground-color: var(--additional-forecast-2);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--white);\r\n}\r\n\r\n    \r\n/** HOURLY CARD STYLES **/\r\n.hourly-card {\r\n    background-color: var(--card);\r\n}\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Barlow-Regular.ttf */ "./src/assets/fonts/Barlow-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Barlow-Bold.ttf */ "./src/assets/fonts/Barlow-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Barlow-Medium.ttf */ "./src/assets/fonts/Barlow-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Barlow-Thin.ttf */ "./src/assets/fonts/Barlow-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Regular.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Bold.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Thin.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid-desktop.svg */ "./src/assets/images/layout/magnifying-glass-solid-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid.svg */ "./src/assets/images/layout/magnifying-glass-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



:root {
	--black: #222222;
	--white: #F2F2F2;
	--gray: #A0A0A0;
	--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);
	--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);
	--transparent: rgb(242, 242, 242, 0.8);
	--transparent-dark-30: rgba(40, 40, 40, 0.5);
	--transparent-dark-70: rgba(40, 40, 40, 0.7);
	--input-placeholder: rgb(242, 242, 242, 0.7);
}



@font-face {
	font-family: 'Barlow Regular';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Bold';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Medium';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Thin';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed Bold';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed Thin';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

body {
	font-family: 'Barlow Regular', 'Arial', sans-serif;
	color: var(--white);

	/** MOBILE **/
	background-attachment: scroll;
    min-height: 100vh;
	font-size: 16px;
}



/** COLOR CLASS STYLES **/
.white-filter {
	filter: var(--white-filter);
}

.transparent {
	filter: var(--white-filter) opacity(80%);
}



/** GENERAL FONT STYLES **/

h1 {
	font-family: 'Barlow Semi-Condensed';
	font-size: 2rem;
	line-height: 2rem;
}

h2 {
	font-family: 'Barlow Regular';
	font-size: 1.5rem;
	line-height: 1.5rem;
}

h2.bold {
	font-family: 'Barlow Bold';
}

h2.small {
	font-size: 1rem;
	line-height: 1rem;
}

h2.medium {
	font-size: 2rem;
	line-height: 2rem;
}

h2.large {
	font-size: 3rem;
	line-height: 4rem;
}

h3 {
	font-family: 'Barlow Regular';
	font-size: 2rem;
	line-height: 2rem;
}

h3.small {
	font-size: 1rem;
	line-height: 1rem;
}

h3.bold {
	font-family: 'Barlow Bold';
	font-size: 2rem;
	line-height: 2rem;
}

h3.bold.small {
	font-size: 1rem;
	line-height: 1rem;
}

h4 {
	font-family: 'Barlow Regular';
	font-size: 1.5rem;
	line-height: 1.5rem;
}

h4.bold {
	font-family: 'Barlow Bold';
	font-size: 1.5rem;
	line-height: 1.5rem;
}

h5 {
	font-family: 'Barlow Regular';
	font-size: 1rem;
	line-height: 1rem;
}

h5.small {
	font-size: 0.75rem;
	line-height: 0.75rem;
}

h5.small.bold {
	font-family: 'Barlow Bold';
}

p {
	font-family: 'Barlow Regular';
	font-size: 1rem;
	line-height: 1rem;
}

p.large {
	font-family: 'Barlow Regular';
	font-size: 4rem;
	line-height: 4rem;
}

p.medium {
	font-family: 'Barlow Regular';
	font-size: 2rem;
	line-height: 2rem;
}

p.small {
	font-family: 'Barlow Regular';
	font-size: 0.75rem;
	line-height: 0.75rem;
}

p.bold {
	font-family: 'Barlow Bold';
	font-size: 1rem;
	line-height: 1rem;
}

a {
	font-family: 'Barlow Medium';
	font-size: 1rem;
	line-height: 1rem;
}



/** OTHER GENERAL STYLES **/
.hidden {
	display: none;
}

#hidden {
	display: none;
}

input[type=text] {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
	padding: 0.5rem;
	padding-left: 2.5rem;
	border: solid 1px;
	border-radius: 0.5rem;

	font-family: 'Barlow Regular';
	font-size: 1rem;
}

button {
	border: none;
	border-radius: 0.5rem;

	font-family: 'Barlow Regular';
	font-size: 1rem;
	padding: 0.5rem 1rem;
	color: var(--white);
}




/** NAVIGATION STYLES **/

nav {
	display: flex;
}

nav.main-nav {
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}

/** DESKTOP BELOW **/
@media only screen and (min-width: 1024px) {
	nav.main-nav  {
		padding: 1rem 5rem;
	}
}

nav.main-nav img {
	height: 1rem;
}

nav.main-nav .logo, nav.side-nav .logo {
	height: 1.5rem;
}

nav.main-nav .options {
	display: flex;
	gap: 3rem;
}

nav.main-nav .options .switches {
	display: none;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		nav.main-nav .options .switches {
			display: flex;
			gap: 1rem;
		}
	}

nav.main-nav .options .additional-options {
	display: flex;
	gap: 1rem;
}


nav.main-nav .options .additional-options button {
	padding: 0;
	background-color: transparent;
}
	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		nav.main-nav .additional-options .menu-button {
			display: none;
		}
	}

nav.main-nav .desktop-search {
	display: none;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		nav.main-nav .desktop-search {
			display: block;
		}
	}


nav.main-nav .desktop-search input {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
	border: solid 1px var(--white);
	width: 15rem;
	background-color: transparent;
	color: var(--white);
}

nav.main-nav .desktop-search input::placeholder {
	color: var(--input-placeholder);
}

nav.side-nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    height: 100vh;
    padding: 0;
    z-index: 1;
    gap: 0;

	background-color: rgb(0, 0, 0, 0.7);
}

nav.side-nav-container button {
	border: none;
	background-color: transparent;
}

nav.side-nav-container .side-nav {
    padding: 1rem;
    flex: 4;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

nav.side-nav-container li {
    margin: 1rem 0rem;
}

nav.side-nav-container .exit {
    padding: 1rem 1rem;
	flex: 1;
}

nav.side-nav-container hr {
    border: none;
    border-top: solid 1px var(--power-secondary);
	margin: 2rem 0rem;
}



/** MOBILE SEARCH MODAL STYLES **/
.mobile-search-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	z-index: 2;
	background-color: var(--transparent-dark-30);
}

.mobile-search-modal .container {
	padding: 1rem;
	height: 100%;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		.mobile-search-modal .container {
			padding: 1.5rem;
			max-width: 50rem;
			margin: 5rem auto;
			height: auto;
			border-radius: 0.5rem;
		}
	}

.mobile-search-modal .search-bar {
	display: flex;
	gap: 0.5rem;
}

.mobile-search-modal .mobile-search {
	width: 100%;
}

.mobile-search-modal input {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
	border: solid 1px var(--gray);

	width: 100%;
	box-sizing: border-box;
}

.mobile-search-modal .output-container {
	padding-left: 1rem;
}

.mobile-search-modal .results-container {
	display: flex;
	flex-direction: column;
	padding: 2rem 0rem;
}

.mobile-search-modal .search-result {
	display: flex;
	gap: 0.75rem;
	align-items: center;
	padding: 0.5rem 0;
}

.mobile-search-modal .search-result:hover {
	cursor:	default;
}

.mobile-search-modal .search-result img {
	filter: var(--gray-filter);
}



/** SEARCH TIP STYLES **/
.tips-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.tip {
	display: flex;
	gap: 1rem;
	align-items: center;
}

.tip p {
	line-height: 1.5rem;
}

.tip .tip-img {
	padding-top: 0.3rem;
}

.tip .tip-img img {
	filter: var(--gray-filter);
}


/** SLIDER SWITCH STYLES **/

.switch {
	position: relative;
	display: inline-block;
	width: 2.75rem;
	height: 1.5rem;
}

.switch input { 
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	-webkit-transition: .2s;
	transition: .2s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 1rem;
	width: 1rem;
	left: 4px;
	bottom: 3px;
	-webkit-transition: .2s;
	transition: .2s;
}

input:checked + .slider:before {
	-webkit-transform: translateX(18px);
	-ms-transform: translateX(18px);
	transform: translateX(18px);
}
  
/* Rounded sliders */
.slider.round {
	border-radius: 32px;
}
  
.slider.round:before {
	border-radius: 50%;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		.toggle-div {
			display: flex;
			gap: 0.5rem;
			align-items: center;
		}
	}



/** MAIN-CONTAINER STYLES **/

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		.main-container {
			margin: 5rem;
		}

		.grid-container {
			display: grid;
			gap: 1rem;
			grid-template: 4fr 1fr / 50% 50%;

			min-width: 50rem;
			max-width: 80rem;
			margin: auto;
		}
	}



/** SETTINGS MODAL **/
.mobile-settings-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	z-index: 3;

	display: flex;
	background-color: var(--transparent-dark-70);
}

	@media only screen and (min-width: 1024px) {
		.mobile-settings-modal {
			display: none;
		}
	}

.mobile-settings-modal .container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 70vw;
	padding: 1rem;
}

	@media only screen and (min-width: 425px) {
		.mobile-settings-modal .container {
			width: 20rem;
		}
	}

.mobile-settings-modal button {
	background-color: transparent;
	height: fit-content;
}

.mobile-settings-modal button img {
	filter: var(--white-filter);
	height: 1.5rem;
}

.mobile-settings-modal li {
	display: flex;
	align-items: center;
	gap: 1rem;
}


/** CURRENT FORECAST STYLES - MOBILE **/

#current-forecast {
	display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
	padding: 3rem 1rem;
	padding-bottom: 10rem;
	height: 83vh;
	box-sizing: border-box;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#current-forecast {
			align-items: stretch;
			justify-content: space-between;
			padding: 3rem;
			border-radius: 1.75rem;
			height: auto;

			grid-column-start: 1;
			grid-column-end: 2;
			grid-row-start: 1;
			grid-row-end: 2;
		}
	}

#current-forecast .forecast-details,
#current-forecast .forecast-details .bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#current-forecast .forecast-details {
			flex-direction: row-reverse;
			justify-content: space-between;
		}
	}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#current-forecast .forecast-details .bottom {
			align-items: flex-start;
		}
	}

#current-forecast .forecast-details {
	gap: 5rem;	
}

#current-forecast .high-low {
	display: flex;
    justify-content: center;
    gap: 1rem;
}

#current-forecast img#current-weather {
	width: 8rem;
}



/** MORE CURRENT FORECAST DETAILS STYLES **/

#more-current-forecast-details {
	margin: 0rem 1rem;
	/** MOBILE BELOW **/
	position: absolute;
    top: 43rem;
    width: calc(100% - 2rem);
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#more-current-forecast-details {
			margin: auto;
			position: static;
			width: 100%;

			grid-column-start: 1;
			grid-column-end: 2;
			grid-row-start: 2;
			grid-row-end: 3;
		}
	}

#more-current-forecast-details-container {
	display: flex;
	gap: 2rem;
	justify-content: center;
	padding: 1.5rem;
	border-radius: 1.75rem;
}
	/** TABLET BELOW **/
	@media only screen and (min-width: 426px) {
		#more-current-forecast-details-container {
			max-width: 25rem;
			margin-left: auto;
			margin-right: auto;

			justify-content: space-evenly;
			padding: 1.5rem 3rem;
		}
	}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#more-current-forecast-details-container {
			max-width: 100%;
		}
	}

#more-current-forecast-details img {
	filter: var(--white-filter) opacity(80%);
	height: 1.5rem;
}

#more-current-forecast-details .module {
	display: flex;
    flex-direction: column;
	gap: 0.5rem;
	text-align: center;
}



/** ADDITIONAL FORECAST STYLES - MOBILE **/

#additional-forecast {
	display: flex;
	flex-direction: column;
	gap: 5rem;
	padding: 3rem 1rem;
	padding-top: 7rem;

	height: 70vh;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#additional-forecast {
			border-radius: 1.75rem;
			padding: 3rem;
			padding-bottom: 4rem;
			height: auto;

			grid-column-start: 2;
			grid-column-end: 3;
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}



/** HOURLY FORECAST STYLES **/
.hourly-forecast {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}



/** HOURLY FORECAST CARD STYLES **/
.hourly-card {
	padding: 1.5rem;
    padding-top: 1rem;
    border-radius: 0.75rem;
}

.hourly-card .container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	width: 2.5rem;
}

.hourly-card img {
	height: 1.5rem;
}



/** HOURLY FORECAST CAROUSEL STYLES **/

.hourly-forecast-carousel {
	overflow-x: auto;
}
.custom-scrollbar::-webkit-scrollbar {
	height: 0.5rem;
}

.custom-scrollbar::-webkit-scrollbar-track {
	border-radius: 1rem;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
	border-radius: 1rem;
}

	/*@media only screen and (min-width: 1024px) {
		.custom-scrollbar::-webkit-scrollbar {
			height: 0.5rem;
		}
		
		.custom-scrollbar::-webkit-scrollbar-track {
			border-radius: 1rem;
		}
		
		.custom-scrollbar::-webkit-scrollbar-thumb {
			border-radius: 1rem;
		}
	}*/

.hourly-forecast-carousel > .container {
	display: flex;
	gap: 0.5rem;
	padding-bottom: 1rem;
}



/** 3-DAY FORECAST STYLES **/
.three-day-forecast {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.three-day-forecast-list {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}




/** 3-DAY FORECAST CARD STYLES **/
.daily-bar {
	display: flex;
	align-items: center;
	gap: 1rem;
	
	padding: 0.5rem 0rem;
}

.daily-bar .day-container {
	flex: 1;
}

.daily-bar .details {
	display: flex;
	align-items: center;
	flex: 10;
	gap: 1rem; /** MOBILE **/
}

.daily-bar .forecast,
.daily-bar .temperatures,
.daily-bar .chance-of-rain {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.daily-bar .forecast {
	flex: 1;
}

.daily-bar .forecast .icon {
	width: 1.5rem;
}

.daily-bar .chance-of-rain .icon {
	height: 1rem;
}

.daily-bar h4 {
	font-size: 1rem;
}

.daily-bar .chance-of-rain {
	display: none;
}

.daily-bar .temperatures {
	width: 5rem;
}

.daily-bar .high,
.daily-bar .low {
	flex: 1;
	display: flex;
	justify-content: flex-end;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;;;AAIA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,eAAe;CACf,sGAAsG;CACtG,kGAAkG;CAClG,sCAAsC;CACtC,4CAA4C;CAC5C,4CAA4C;CAC5C,4CAA4C;AAC7C;;;;AAIA;CACC,6BAA6B;CAC7B,+DAAqE;CACrE,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,0BAA0B;CAC1B,+DAAkE;CAClE,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,4BAA4B;CAC5B,+DAAoE;CACpE,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,0BAA0B;CAC1B,+DAAkE;CAClE,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,oCAAoC;CACpC,+DAAkF;CAClF,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;CACzC,+DAA+E;CAC/E,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,yCAAyC;CACzC,+DAA+E;CAC/E,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,kDAAkD;CAClD,mBAAmB;;CAEnB,aAAa;CACb,6BAA6B;IAC1B,iBAAiB;CACpB,eAAe;AAChB;;;;AAIA,yBAAyB;AACzB;CACC,2BAA2B;AAC5B;;AAEA;CACC,wCAAwC;AACzC;;;;AAIA,0BAA0B;;AAE1B;CACC,oCAAoC;CACpC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,0BAA0B;CAC1B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,0BAA0B;CAC1B,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,6BAA6B;CAC7B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,6BAA6B;CAC7B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,6BAA6B;CAC7B,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC,0BAA0B;CAC1B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,4BAA4B;CAC5B,eAAe;CACf,iBAAiB;AAClB;;;;AAIA,2BAA2B;AAC3B;CACC,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,0FAAwH;CACxH,eAAe;CACf,oBAAoB;CACpB,iBAAiB;CACjB,qBAAqB;;CAErB,6BAA6B;CAC7B,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,qBAAqB;;CAErB,6BAA6B;CAC7B,eAAe;CACf,oBAAoB;CACpB,mBAAmB;AACpB;;;;;AAKA,wBAAwB;;AAExB;CACC,aAAa;AACd;;AAEA;CACC,SAAS;CACT,8BAA8B;CAC9B,mBAAmB;CACnB,aAAa;AACd;;AAEA,oBAAoB;AACpB;CACC;EACC,kBAAkB;CACnB;AACD;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;CACC,aAAa;AACd;;CAEC,oBAAoB;CACpB;EACC;GACC,aAAa;GACb,SAAS;EACV;CACD;;AAED;CACC,aAAa;CACb,SAAS;AACV;;;AAGA;CACC,UAAU;CACV,6BAA6B;AAC9B;CACC,oBAAoB;CACpB;EACC;GACC,aAAa;EACd;CACD;;AAED;CACC,aAAa;AACd;;CAEC,oBAAoB;CACpB;EACC;GACC,cAAc;EACf;CACD;;;AAGD;CACC,0FAAwH;CACxH,8BAA8B;CAC9B,YAAY;CACZ,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;;IAER,aAAa;IACb,UAAU;IACV,UAAU;IACV,MAAM;;CAET,mCAAmC;AACpC;;AAEA;CACC,YAAY;CACZ,6BAA6B;AAC9B;;AAEA;IACI,aAAa;IACb,OAAO;;IAEP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;CACrB,OAAO;AACR;;AAEA;IACI,YAAY;IACZ,4CAA4C;CAC/C,iBAAiB;AAClB;;;;AAIA,iCAAiC;AACjC;CACC,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,aAAa;CACb,UAAU;CACV,4CAA4C;AAC7C;;AAEA;CACC,aAAa;CACb,YAAY;AACb;;CAEC,oBAAoB;CACpB;EACC;GACC,eAAe;GACf,gBAAgB;GAChB,iBAAiB;GACjB,YAAY;GACZ,qBAAqB;EACtB;CACD;;AAED;CACC,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,0FAAgH;CAChH,6BAA6B;;CAE7B,WAAW;CACX,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,iBAAiB;AAClB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,0BAA0B;AAC3B;;;;AAIA,wBAAwB;AACxB;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,SAAS;CACT,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,0BAA0B;AAC3B;;;AAGA,2BAA2B;;AAE3B;CACC,kBAAkB;CAClB,qBAAqB;CACrB,cAAc;CACd,cAAc;AACf;;AAEA;CACC,UAAU;CACV,QAAQ;CACR,SAAS;AACV;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,SAAS;CACT,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,WAAW;CACX,SAAS;CACT,WAAW;CACX,uBAAuB;CACvB,eAAe;AAChB;;AAEA;CACC,mCAAmC;CACnC,+BAA+B;CAC/B,2BAA2B;AAC5B;;AAEA,oBAAoB;AACpB;CACC,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;AACnB;;CAEC,oBAAoB;CACpB;EACC;GACC,aAAa;GACb,WAAW;GACX,mBAAmB;EACpB;CACD;;;;AAID,4BAA4B;;CAE3B,oBAAoB;CACpB;EACC;GACC,YAAY;EACb;;EAEA;GACC,aAAa;GACb,SAAS;GACT,gCAAgC;;GAEhC,gBAAgB;GAChB,gBAAgB;GAChB,YAAY;EACb;CACD;;;;AAID,qBAAqB;AACrB;CACC,eAAe;CACf,MAAM;CACN,OAAO;CACP,QAAQ;CACR,aAAa;CACb,UAAU;;CAEV,aAAa;CACb,4CAA4C;AAC7C;;CAEC;EACC;GACC,aAAa;EACd;CACD;;AAED;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,WAAW;CACX,aAAa;AACd;;CAEC;EACC;GACC,YAAY;EACb;CACD;;AAED;CACC,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,2BAA2B;CAC3B,cAAc;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;;AAGA,uCAAuC;;AAEvC;CACC,aAAa;IACV,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;CACZ,kBAAkB;CAClB,qBAAqB;CACrB,YAAY;CACZ,sBAAsB;AACvB;;CAEC,oBAAoB;CACpB;EACC;GACC,oBAAoB;GACpB,8BAA8B;GAC9B,aAAa;GACb,sBAAsB;GACtB,YAAY;;GAEZ,oBAAoB;GACpB,kBAAkB;GAClB,iBAAiB;GACjB,eAAe;EAChB;CACD;;AAED;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;CAEC,oBAAoB;CACpB;EACC;GACC,2BAA2B;GAC3B,8BAA8B;EAC/B;CACD;;CAEA,oBAAoB;CACpB;EACC;GACC,uBAAuB;EACxB;CACD;;AAED;CACC,SAAS;AACV;;AAEA;CACC,aAAa;IACV,uBAAuB;IACvB,SAAS;AACb;;AAEA;CACC,WAAW;AACZ;;;;AAIA,2CAA2C;;AAE3C;CACC,iBAAiB;CACjB,mBAAmB;CACnB,kBAAkB;IACf,UAAU;IACV,wBAAwB;AAC5B;;CAEC,oBAAoB;CACpB;EACC;GACC,YAAY;GACZ,gBAAgB;GAChB,WAAW;;GAEX,oBAAoB;GACpB,kBAAkB;GAClB,iBAAiB;GACjB,eAAe;EAChB;CACD;;AAED;CACC,aAAa;CACb,SAAS;CACT,uBAAuB;CACvB,eAAe;CACf,sBAAsB;AACvB;CACC,mBAAmB;CACnB;EACC;GACC,gBAAgB;GAChB,iBAAiB;GACjB,kBAAkB;;GAElB,6BAA6B;GAC7B,oBAAoB;EACrB;CACD;;CAEA,oBAAoB;CACpB;EACC;GACC,eAAe;EAChB;CACD;;AAED;CACC,wCAAwC;CACxC,cAAc;AACf;;AAEA;CACC,aAAa;IACV,sBAAsB;CACzB,WAAW;CACX,kBAAkB;AACnB;;;;AAIA,0CAA0C;;AAE1C;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,kBAAkB;CAClB,iBAAiB;;CAEjB,YAAY;AACb;;CAEC,oBAAoB;CACpB;EACC;GACC,sBAAsB;GACtB,aAAa;GACb,oBAAoB;GACpB,YAAY;;GAEZ,oBAAoB;GACpB,kBAAkB;GAClB,iBAAiB;GACjB,eAAe;EAChB;CACD;;;;AAID,6BAA6B;AAC7B;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;;;AAIA,kCAAkC;AAClC;CACC,eAAe;IACZ,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,WAAW;CACX,aAAa;AACd;;AAEA;CACC,cAAc;AACf;;;;AAIA,sCAAsC;;AAEtC;CACC,gBAAgB;AACjB;AACA;CACC,cAAc;AACf;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,mBAAmB;AACpB;;CAEC;;;;;;;;;;;;GAYE;;AAEH;CACC,aAAa;CACb,WAAW;CACX,oBAAoB;AACrB;;;;AAIA,4BAA4B;AAC5B;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;AACZ;;;;;AAKA,iCAAiC;AACjC;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;;CAET,oBAAoB;AACrB;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,QAAQ;CACR,SAAS,EAAE,aAAa;AACzB;;AAEA;;;CAGC,aAAa;CACb,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,WAAW;AACZ;;AAEA;;CAEC,OAAO;CACP,aAAa;CACb,yBAAyB;AAC1B","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n\t--black: #222222;\r\n\t--white: #F2F2F2;\r\n\t--gray: #A0A0A0;\r\n\t--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);\r\n\t--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);\r\n\t--transparent: rgb(242, 242, 242, 0.8);\r\n\t--transparent-dark-30: rgba(40, 40, 40, 0.5);\r\n\t--transparent-dark-70: rgba(40, 40, 40, 0.7);\r\n\t--input-placeholder: rgb(242, 242, 242, 0.7);\r\n}\r\n\r\n\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Medium';\r\n\tsrc: url('../src/assets/fonts/Barlow-Medium.ttf') format('truetype');\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Thin';\r\n\tsrc: url('../src/assets/fonts/Barlow-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\tcolor: var(--white);\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.white-filter {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n.transparent {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL FONT STYLES **/\r\n\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\nh2.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh2.medium {\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2.large {\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.bold.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh4 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh4.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh5 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh5.small {\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\nh5.small.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np.large {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 4rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\np.medium {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\np.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\na {\r\n\tfont-family: 'Barlow Medium';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n#hidden {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=text] {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tpadding: 0.5rem;\r\n\tpadding-left: 2.5rem;\r\n\tborder: solid 1px;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: var(--white);\r\n}\r\n\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav.main-nav {\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n}\r\n\r\n/** DESKTOP BELOW **/\r\n@media only screen and (min-width: 1024px) {\r\n\tnav.main-nav  {\r\n\t\tpadding: 1rem 5rem;\r\n\t}\r\n}\r\n\r\nnav.main-nav img {\r\n\theight: 1rem;\r\n}\r\n\r\nnav.main-nav .logo, nav.side-nav .logo {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav.main-nav .options {\r\n\tdisplay: flex;\r\n\tgap: 3rem;\r\n}\r\n\r\nnav.main-nav .options .switches {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .options .switches {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 1rem;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .options .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\nnav.main-nav .options .additional-options button {\r\n\tpadding: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .additional-options .menu-button {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .desktop-search {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .desktop-search {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\t}\r\n\r\n\r\nnav.main-nav .desktop-search input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--white);\r\n\twidth: 15rem;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--white);\r\n}\r\n\r\nnav.main-nav .desktop-search input::placeholder {\r\n\tcolor: var(--input-placeholder);\r\n}\r\n\r\nnav.side-nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 1;\r\n    gap: 0;\r\n\r\n\tbackground-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\nnav.side-nav-container button {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.side-nav-container .side-nav {\r\n    padding: 1rem;\r\n    flex: 4;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nnav.side-nav-container li {\r\n    margin: 1rem 0rem;\r\n}\r\n\r\nnav.side-nav-container .exit {\r\n    padding: 1rem 1rem;\r\n\tflex: 1;\r\n}\r\n\r\nnav.side-nav-container hr {\r\n    border: none;\r\n    border-top: solid 1px var(--power-secondary);\r\n\tmargin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: var(--transparent-dark-30);\r\n}\r\n\r\n.mobile-search-modal .container {\r\n\tpadding: 1rem;\r\n\theight: 100%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.mobile-search-modal .container {\r\n\t\t\tpadding: 1.5rem;\r\n\t\t\tmax-width: 50rem;\r\n\t\t\tmargin: 5rem auto;\r\n\t\t\theight: auto;\r\n\t\t\tborder-radius: 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-search-modal .search-bar {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .mobile-search {\r\n\twidth: 100%;\r\n}\r\n\r\n.mobile-search-modal input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--gray);\r\n\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.mobile-search-modal .output-container {\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.mobile-search-modal .results-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 2rem 0rem;\r\n}\r\n\r\n.mobile-search-modal .search-result {\r\n\tdisplay: flex;\r\n\tgap: 0.75rem;\r\n\talign-items: center;\r\n\tpadding: 0.5rem 0;\r\n}\r\n\r\n.mobile-search-modal .search-result:hover {\r\n\tcursor:\tdefault;\r\n}\r\n\r\n.mobile-search-modal .search-result img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n\r\n/** SEARCH TIP STYLES **/\r\n.tips-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n\talign-items: center;\r\n}\r\n\r\n.tip p {\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n.tip .tip-img {\r\n\tpadding-top: 0.3rem;\r\n}\r\n\r\n.tip .tip-img img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n\r\n.switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.75rem;\r\n\theight: 1.5rem;\r\n}\r\n\r\n.switch input { \r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n\r\n.slider {\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\n.slider:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\theight: 1rem;\r\n\twidth: 1rem;\r\n\tleft: 4px;\r\n\tbottom: 3px;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n\t-webkit-transform: translateX(18px);\r\n\t-ms-transform: translateX(18px);\r\n\ttransform: translateX(18px);\r\n}\r\n  \r\n/* Rounded sliders */\r\n.slider.round {\r\n\tborder-radius: 32px;\r\n}\r\n  \r\n.slider.round:before {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.toggle-div {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5rem;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** MAIN-CONTAINER STYLES **/\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.main-container {\r\n\t\t\tmargin: 5rem;\r\n\t\t}\r\n\r\n\t\t.grid-container {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgap: 1rem;\r\n\t\t\tgrid-template: 4fr 1fr / 50% 50%;\r\n\r\n\t\t\tmin-width: 50rem;\r\n\t\t\tmax-width: 80rem;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** SETTINGS MODAL **/\r\n.mobile-settings-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 3;\r\n\r\n\tdisplay: flex;\r\n\tbackground-color: var(--transparent-dark-70);\r\n}\r\n\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.mobile-settings-modal {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-settings-modal .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n\twidth: 70vw;\r\n\tpadding: 1rem;\r\n}\r\n\r\n\t@media only screen and (min-width: 425px) {\r\n\t\t.mobile-settings-modal .container {\r\n\t\t\twidth: 20rem;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-settings-modal button {\r\n\tbackground-color: transparent;\r\n\theight: fit-content;\r\n}\r\n\r\n.mobile-settings-modal button img {\r\n\tfilter: var(--white-filter);\r\n\theight: 1.5rem;\r\n}\r\n\r\n.mobile-settings-modal li {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\n/** CURRENT FORECAST STYLES - MOBILE **/\r\n\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-bottom: 10rem;\r\n\theight: 83vh;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast {\r\n\t\t\talign-items: stretch;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 2;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details,\r\n#current-forecast .forecast-details .bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details .bottom {\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details {\r\n\tgap: 5rem;\t\r\n}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\twidth: 8rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n\t/** MOBILE BELOW **/\r\n\tposition: absolute;\r\n    top: 43rem;\r\n    width: calc(100% - 2rem);\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: auto;\r\n\t\t\tposition: static;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 2;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: center;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\t/** TABLET BELOW **/\r\n\t@media only screen and (min-width: 426px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 25rem;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tmargin-right: auto;\r\n\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding: 1.5rem 3rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details img {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n\theight: 1.5rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-top: 7rem;\r\n\r\n\theight: 70vh;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#additional-forecast {\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tpadding-bottom: 4rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 2;\r\n\t\t\tgrid-column-end: 3;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n.hourly-card {\r\n\tpadding: 1.5rem;\r\n    padding-top: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n.hourly-card .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n\twidth: 2.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\theight: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n\r\n.hourly-forecast-carousel {\r\n\toverflow-x: auto;\r\n}\r\n.custom-scrollbar::-webkit-scrollbar {\r\n\theight: 0.5rem;\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-track {\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n\t/*@media only screen and (min-width: 1024px) {\r\n\t\t.custom-scrollbar::-webkit-scrollbar {\r\n\t\t\theight: 0.5rem;\r\n\t\t}\r\n\t\t\r\n\t\t.custom-scrollbar::-webkit-scrollbar-track {\r\n\t\t\tborder-radius: 1rem;\r\n\t\t}\r\n\t\t\r\n\t\t.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\t\t\tborder-radius: 1rem;\r\n\t\t}\r\n\t}*/\r\n\r\n.hourly-forecast-carousel > .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST STYLES **/\r\n.three-day-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n.three-day-forecast-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\t\r\n\tpadding: 0.5rem 0rem;\r\n}\r\n\r\n.daily-bar .day-container {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 10;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\twidth: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: none;\r\n}\r\n\r\n.daily-bar .temperatures {\r\n\twidth: 5rem;\r\n}\r\n\r\n.daily-bar .high,\r\n.daily-bar .low {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/light-theme.css":
/*!*****************************!*\
  !*** ./src/light-theme.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_light_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./light-theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/light-theme.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_light_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_light_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_light_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_light_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/additional-current-forecast-layout.js":
/*!***************************************************!*\
  !*** ./src/additional-current-forecast-layout.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMoreCurrentForecastDetails),
/* harmony export */   updateAdditionalCurrentForecastLayout: () => (/* binding */ updateAdditionalCurrentForecastLayout)
/* harmony export */ });
function printOutHumidity(query) {
  return `${query.currentWeather.humidity}%`;
}

function printOutWindSpeed(query) {
  return `${Math.floor(query.currentWeather.wind)}mph`;
}

function printOutUVIndex(query) {
  const uv = query.daily.uv_index_max[0];
  const result = Math.floor(uv);

  return `${result} of 10`;
}

function printOutChanceOfRain(query) {
  return `${query.currentWeather.precipitation}%`;
}

function updateAdditionalCurrentForecastLayout(query) {
  const cor = document.getElementById('chance-of-rain');
  cor.textContent = printOutChanceOfRain(query);

  const humidity = document.getElementById('humidity');
  humidity.textContent = printOutHumidity(query);

  const windSpeed = document.getElementById('wind');
  windSpeed.textContent = printOutWindSpeed(query);

  const uv = document.getElementById('uv-index');
  uv.textContent = printOutUVIndex(query);
}

function createChanceOfRain() {
  const corDiv = document.createElement('div');
  corDiv.classList.add('cor', 'module');

  const corIconDiv = document.createElement('div');
  const corImg = document.createElement('img');
  corImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corImg);
  corDiv.appendChild(corIconDiv);

  const corPercentDiv = document.createElement('div');
  const corPercent = document.createElement('p');
  corPercent.id = 'chance-of-rain';
  corPercentDiv.appendChild(corPercent);

  const corTitleDiv = document.createElement('div');
  const corTitle = document.createElement('h5');
  corTitle.classList.add('secondary', 'small');
  corTitle.textContent = 'Rain';
  corTitleDiv.appendChild(corTitle);

  corDiv.append(corPercentDiv, corTitleDiv);

  return corDiv;
}

function createHumidity() {
  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('humidity', 'module');

  const humidityIconDiv = document.createElement('div');
  const humidityImg = document.createElement('img');
  humidityImg.src = '../src/assets/images/forecast-details/waves-fill-svgrepo-com.svg';
  humidityIconDiv.appendChild(humidityImg);
  humidityDiv.appendChild(humidityIconDiv);

  const humidityPercentDiv = document.createElement('div');
  const humidityPercent = document.createElement('p');
  humidityPercent.id = 'humidity';
  humidityPercentDiv.appendChild(humidityPercent);

  const humidityTitleDiv = document.createElement('div');
  const humidityTitle = document.createElement('h5');
  humidityTitle.classList.add('secondary', 'small');
  humidityTitle.textContent = 'Humidity';
  humidityTitleDiv.appendChild(humidityTitle);

  humidityDiv.append(humidityPercentDiv, humidityTitleDiv);

  return humidityDiv;
}

function createWind() {
  const windDiv = document.createElement('div');
  windDiv.classList.add('wind', 'module');

  const windIconDiv = document.createElement('div');
  const windImg = document.createElement('img');
  windImg.src = '../src/assets/images/forecast-details/wind-fill-svgrepo-com.svg';
  windIconDiv.appendChild(windImg);
  windDiv.appendChild(windIconDiv);

  const windSpeedDiv = document.createElement('div');
  const windSpeed = document.createElement('p');
  windSpeed.id = 'wind';
  windSpeedDiv.appendChild(windSpeed);

  const windTitleDiv = document.createElement('div');
  const windTitle = document.createElement('h5');
  windTitle.classList.add('secondary', 'small');
  windTitle.textContent = 'Wind';
  windTitleDiv.appendChild(windTitle);

  windDiv.append(windSpeedDiv, windTitleDiv);

  return windDiv;
}

function createUV() {
  const uvDiv = document.createElement('div');
  uvDiv.classList.add('uv', 'module');

  const uvIconDiv = document.createElement('div');
  const uvImg = document.createElement('img');
  uvImg.src = '../src/assets/images/forecast-details/sun-filled-svgrepo-com.svg';
  uvIconDiv.appendChild(uvImg);
  uvDiv.appendChild(uvIconDiv);

  const uvIndexDiv = document.createElement('div');
  const uvIndex = document.createElement('p');
  uvIndex.id = 'uv-index';
  uvIndexDiv.appendChild(uvIndex);

  const uvTitleDiv = document.createElement('div');
  const uvTitle = document.createElement('h5');
  uvTitle.classList.add('secondary', 'small');
  uvTitle.textContent = 'UV Index';
  uvTitleDiv.appendChild(uvTitle);

  uvDiv.append(uvIndexDiv, uvTitleDiv);

  return uvDiv;
}

function createMoreCurrentForecastDetails() {
  const section = document.createElement('section');
  section.id = 'more-current-forecast-details';

  const moreForecastDetailsDiv = document.createElement('div');
  moreForecastDetailsDiv.id = 'more-current-forecast-details-container';

  const chanceOfRain = createChanceOfRain();
  const humidity = createHumidity();
  const wind = createWind();
  const uv = createUV();

  moreForecastDetailsDiv.append(chanceOfRain, humidity, wind, uv);

  section.appendChild(moreForecastDetailsDiv);

  return section;
}


/***/ }),

/***/ "./src/additional-forecast-layout.js":
/*!*******************************************!*\
  !*** ./src/additional-forecast-layout.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAdditionalForecast),
/* harmony export */   update3DayForecastLayout: () => (/* binding */ update3DayForecastLayout),
/* harmony export */   updateHourlyForecastLayout: () => (/* binding */ updateHourlyForecastLayout)
/* harmony export */ });
/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather */ "./src/fetch-weather.js");


function createHourlyCard(hour, temp, icon) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('hourly-card');

  const time = document.createElement('h3');
  time.classList.add('small');
  time.textContent = hour;

  const forecastIcon = document.createElement('img');
  forecastIcon.src = icon;

  const hourlyTemp = document.createElement('p');
  hourlyTemp.classList.add('temp');
  hourlyTemp.textContent = `${Math.floor(temp)}°`;

  const container = document.createElement('div');
  container.classList.add('container');
  container.append(time, forecastIcon, hourlyTemp);
  cardDiv.appendChild(container);

  return cardDiv;
}

function convertTimeTo12Hr(hour) {
  let t;
  if (hour === 12 || hour === 36) {
    t = '12pm';
  } else if (hour === 0 || hour === 24) {
    t = '12am';
  } else if ((hour > 0 && hour < 12) || (hour > 24 && hour < 36)) {
    const h = hour % 12;
    t = `${h}am`;
  } else {
    const h = hour % 12;
    t = `${h}pm`;
  }

  return t;
}

function create24HourForecast(data) {
  const container = document.createElement('div');

  const currentHour = (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__.convertTZ)(new Date(), data.timezone).getHours();
  const hourlyRange = currentHour + 24;

  for (let i = currentHour; i <= hourlyRange; i += 1) {
    const temp = data.hourly.temperature_2m[i];
    const hour = convertTimeTo12Hr(i);
    const code = data.hourly.weathercode[i];
    const isDay = data.hourly.is_day[i];
    const icon = (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherIcon)(code, isDay);
    const card = createHourlyCard(hour, temp, icon);
    container.appendChild(card);
  }

  return container;
}

function createHourlyForecast() {
  const hourlyForecast = document.createElement('div');
  hourlyForecast.classList.add('hourly-forecast');

  const hourlyForecastTitleDiv = document.createElement('div');
  const hourlyForecastTitle = document.createElement('h2');
  hourlyForecastTitle.classList.add('bold', 'small');
  hourlyForecastTitle.textContent = 'Hourly Forecast';
  hourlyForecastTitleDiv.appendChild(hourlyForecastTitle);

  const hourlyForecastCarousel = document.createElement('div');
  hourlyForecastCarousel.classList.add('hourly-forecast-carousel', 'custom-scrollbar');

  const hourlyForecastContainer = document.createElement('div');
  hourlyForecastContainer.classList.add('container');

  hourlyForecastCarousel.appendChild(hourlyForecastContainer);

  hourlyForecast.append(hourlyForecastTitleDiv, hourlyForecastCarousel);

  return hourlyForecast;
}

function updateHourlyForecastLayout(query) {
  const container = create24HourForecast(query);
  container.classList.add('container');

  const carousel = document.getElementsByClassName('hourly-forecast-carousel')[0];
  carousel.innerHTML = '';
  carousel.appendChild(container);
}

function createDailyForecastBar(high, low, day, cor, desc, icon) {
  const forecastBar = document.createElement('div');
  forecastBar.classList.add('daily-bar');

  const container = document.createElement('div');
  container.classList.add('container');

  const dayDiv = document.createElement('div');
  dayDiv.classList.add('day-container');

  const dayOfTheWeek = document.createElement('h4');
  dayOfTheWeek.classList.add('day');
  dayOfTheWeek.textContent = day.substring(0, 3);

  dayDiv.appendChild(dayOfTheWeek);
  forecastBar.appendChild(dayDiv);

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');

  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('forecast');

  const weatherIconDiv = document.createElement('div');
  weatherIconDiv.classList.add('weather-icon');
  const iconImg = document.createElement('img');
  iconImg.classList.add('icon');
  iconImg.src = icon;

  weatherIconDiv.appendChild(iconImg);
  forecastDiv.appendChild(weatherIconDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');

  const description = document.createElement('p');
  description.textContent = desc;

  descriptionDiv.appendChild(description);
  forecastDiv.appendChild(descriptionDiv);
  detailsDiv.appendChild(forecastDiv);

  const temperaturesDiv = document.createElement('div');
  temperaturesDiv.classList.add('temperatures');

  const highDiv = document.createElement('div');
  highDiv.classList.add('high');

  const highP = document.createElement('p');
  highP.classList.add('bold', 'temp');
  highP.textContent = `${high}°`;
  highDiv.appendChild(highP);

  const lowDiv = document.createElement('div');
  lowDiv.classList.add('low');

  const lowP = document.createElement('p');
  lowP.classList.add('temp');
  lowP.textContent = `${low}°`;
  lowDiv.appendChild(lowP);

  temperaturesDiv.append(highDiv, lowDiv);

  const corDiv = document.createElement('div');
  corDiv.classList.add('chance-of-rain');
  const corIconDiv = document.createElement('div');
  const corIconImg = document.createElement('img');
  corIconImg.classList.add('icon', 'white-filter');
  corIconImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corIconImg);
  corDiv.appendChild(corIconDiv);

  const percentageDiv = document.createElement('div');
  const percentage = document.createElement('p');
  percentage.classList.add('percentage');
  percentage.textContent = `${cor}%`;
  percentageDiv.appendChild(percentage);
  corDiv.appendChild(percentageDiv);

  const numbersDiv = document.createElement('div');
  numbersDiv.classList.add('numbers');
  numbersDiv.append(temperaturesDiv, corDiv);
  detailsDiv.appendChild(numbersDiv);

  forecastBar.appendChild(detailsDiv);

  return forecastBar;
}

function create3DayForecast() {
  const threeDayForecast = document.createElement('div');
  threeDayForecast.classList.add('three-day-forecast');

  const threeDayForecastTitleDiv = document.createElement('div');
  const threeDayForecastTitle = document.createElement('h2');
  threeDayForecastTitle.classList.add('bold', 'small');
  threeDayForecastTitle.textContent = '3-Day Forecast';
  threeDayForecastTitleDiv.appendChild(threeDayForecastTitle);

  const threeDayForecastList = document.createElement('div');
  threeDayForecastList.classList.add('three-day-forecast-list');
  const container = document.createElement('div');
  threeDayForecastList.appendChild(container);

  threeDayForecast.append(threeDayForecastTitleDiv, threeDayForecastList);

  return threeDayForecast;
}

function update3DayForecastLayout(query) {
  const container = document.createElement('div');
  container.classList.add('three-day-forecast-list');
  for (let i = 0; i < 3; i += 1) {
    const high = Math.floor(query.threeDayForecast.high[i]);
    const low = Math.floor(query.threeDayForecast.low[i]);
    const day = query.threeDayForecast.days[i];
    const cor = query.threeDayForecast.cor[i];
    const desc = query.threeDayForecast.weatherDescription[i];
    const icon = (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherIcon)(query.threeDayForecast.weatherCode[i], 1);
    const bar = createDailyForecastBar(high, low, day, cor, desc, icon);

    container.appendChild(bar);
  }

  const threeDayForeCastContainer = document.getElementsByClassName('three-day-forecast-list')[0];
  threeDayForeCastContainer.innerHTML = '';
  threeDayForeCastContainer.appendChild(container);
}

function createAdditionalForecast() {
  const section = document.createElement('section');
  section.id = 'additional-forecast';

  const hourlyForecast = createHourlyForecast();
  const threeDayForecast = create3DayForecast();

  section.append(hourlyForecast, threeDayForecast);

  return section;
}


/***/ }),

/***/ "./src/current-forecast-layout.js":
/*!****************************************!*\
  !*** ./src/current-forecast-layout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCurrentForecast),
/* harmony export */   updateCurrentForecastLayout: () => (/* binding */ updateCurrentForecastLayout)
/* harmony export */ });
/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-weather */ "./src/fetch-weather.js");


function printOutHigh(query) {
  const high = Math.floor(query.currentWeather.dailyHigh);
  return `${high}°`;
}

function printOutLow(query) {
  const low = Math.floor(query.currentWeather.dailyLow);
  return `${low}°`;
}

function printOutCurrentTemp(query) {
  const temp = Math.floor(query.currentWeather.currentTemp);
  return `${temp}°`;
}

function printOutCity(query) {
  return query.cityName;
}

function printOutDescription(query) {
  return query.currentWeather.weatherDescription;
}

function printOutWeatherIcon(query) {
  const localHour = (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__.convertTZ)(new Date(), query.timezone).getHours();
  const code = query.hourly.weathercode[localHour];
  const value = query.hourly.is_day[localHour];

  return (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherIcon)(code, value);
}

function updateCurrentForecastLayout(query) {
  const currentCity = document.getElementById('current-city');
  currentCity.textContent = printOutCity(query);

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = printOutCurrentTemp(query);

  const dailyHigh = document.getElementById('current-high');
  dailyHigh.textContent = printOutHigh(query);

  const dailyLow = document.getElementById('current-low');
  dailyLow.textContent = printOutLow(query);

  const forecastDescription = document.getElementById('forecast-description');
  forecastDescription.textContent = printOutDescription(query);

  const currentWeatherIcon = document.getElementById('current-weather');
  currentWeatherIcon.src = printOutWeatherIcon(query);
}

function createCurrentForecast() {
  const section = document.createElement('section');
  section.id = 'current-forecast';

  const currentCityDiv = document.createElement('div');
  const currentCity = document.createElement('h1');
  currentCity.id = 'current-city';
  currentCityDiv.appendChild(currentCity);

  const currentDetailsDiv = document.createElement('div');
  currentDetailsDiv.classList.add('forecast-details');

  const currentWeatherDiv = document.createElement('div');
  const currentWeatherImg = document.createElement('img');
  currentWeatherImg.id = 'current-weather';
  currentWeatherDiv.appendChild(currentWeatherImg);

  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottom');

  const currentTempDiv = document.createElement('div');
  const currentTemp = document.createElement('p');
  currentTemp.classList.add('large', 'temp');
  currentTemp.id = 'current-temp';
  currentTempDiv.appendChild(currentTemp);
  bottomDiv.appendChild(currentTempDiv);

  const forecastDescriptionDiv = document.createElement('div');
  const forecastDescription = document.createElement('p');
  forecastDescription.classList.add('medium');
  forecastDescription.id = 'forecast-description';
  forecastDescriptionDiv.appendChild(forecastDescription);
  bottomDiv.appendChild(forecastDescriptionDiv);

  const highLowDiv = document.createElement('div');
  highLowDiv.classList.add('high-low');

  const highDiv = document.createElement('div');
  const highP = document.createElement('p');
  highP.textContent = 'H: ';

  const high = document.createElement('span');
  high.classList.add('temp');
  high.id = 'current-high';
  highP.appendChild(high);
  highDiv.appendChild(highP);

  const lowDiv = document.createElement('div');
  const lowP = document.createElement('p');
  lowP.textContent = 'L: ';

  const low = document.createElement('span');
  low.classList.add('temp');
  low.id = 'current-low';
  lowP.appendChild(low);
  lowDiv.appendChild(lowP);

  highLowDiv.append(highDiv, lowDiv);
  bottomDiv.appendChild(highLowDiv);

  currentDetailsDiv.append(currentWeatherDiv, bottomDiv);

  section.append(currentCityDiv, currentDetailsDiv);

  return section;
}


/***/ }),

/***/ "./src/fetch-cities.js":
/*!*****************************!*\
  !*** ./src/fetch-cities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkQuery)
/* harmony export */ });
function joinQuery(query) {
  const newQuery = query.split(', ').join();
  return newQuery;
}

async function checkByPostalCode(query) {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${query}&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // return error
    console.log(error);
    return error;
  }
}

async function checkByCity(query) {
  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=8dd447f0efae8324f15c24f2efdd7e9f`, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // return error
    console.log(error);
    return error;
  }
}

async function checkQuery(query) {
  // break up query into correct parts (eg. city, state, country, zip code)
  const searchQuery = joinQuery(query);
  const postalCodeResult = await checkByPostalCode(searchQuery);
  const cityResult = await checkByCity(searchQuery);

  if (!(postalCodeResult instanceof Error) && postalCodeResult.length !== 0) {
    // display a clickable result containing city weather info
    console.log('we found a zip code that matches! result: ', postalCodeResult);

    return postalCodeResult;
  } if (!(cityResult instanceof Error) && cityResult.length !== 0) {
    // display a clickable result containing city weather info
    console.log('we found a city that matches! result: ', cityResult);

    return cityResult;
  }
  // display an error that the search query was not found along with search tips
  console.log('no city found :(');

  return `No results found for '${query}'`;
}


/***/ }),

/***/ "./src/fetch-weather.js":
/*!******************************!*\
  !*** ./src/fetch-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFToC: () => (/* binding */ convertFToC),
/* harmony export */   convertTZ: () => (/* binding */ convertTZ),
/* harmony export */   "default": () => (/* binding */ fetchWeather),
/* harmony export */   fetchDefaultWeather: () => (/* binding */ fetchDefaultWeather),
/* harmony export */   fetchWeatherIcon: () => (/* binding */ fetchWeatherIcon)
/* harmony export */ });
function convertTZ(date, tzString) {
  return new Date(date.toLocaleString('en-US', { timeZone: tzString }));
}

function convertFToC(temp) {
  return (temp - 32) * (5 / 9);
}

function fetchWeatherIcon(code, isDay) {
  let src;
  const string = '../src/assets/images/weather-icons/';
  switch (code) {
    case 0:
      if (isDay === 1) {
        src = `${string}clear-sky-sunny.svg`;
      } else {
        src = `${string}clear-sky-moon.svg`;
      }
      break;
    case 1:
      if (isDay === 1) {
        src = `${string}mostly-clear-sunny.svg`;
      } else {
        src = `${string}mostly-clear-moon.svg`;
      }
      break;
    case 2:
      if (isDay === 1) {
        src = `${string}partly-cloudy-sunny.svg`;
      } else {
        src = `${string}partly-cloudy-moon.svg`;
      }
      break;
    case 3:
      src = `${string}overcast.svg`;
      break;
    case 45:
    case 48:
      src = `${string}fog.svg`;
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 80:
    case 81:
    case 82:
      src = `${string}drizzle.svg`;
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      src = `${string}rain.svg`;
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      src = `${string}snow.svg`;
      break;
    case 95:
    case 96:
    case 99:
      src = `${string}thunderstorm.svg`;
      break;
    default:
      break;
  }

  return src;
}

function getWeatherDescription(code) {
  const weatherCodes = {
    0: 'Clear Sky',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing Rime Fog',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    56: 'Freezing, Light Drizzle',
    57: 'Freezing, Dense Drizzle',
    61: 'Light Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    66: 'Freezing, Light Rain',
    67: 'Freezing, Heavy Rain',
    71: 'Light Snow',
    73: 'Moderate Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Light Showers',
    81: 'Moderate Showers',
    82: 'Heavy Showers',
    85: 'Light Snow Shower',
    86: 'Heavy Snow Shower',
    95: 'Thunderstorm',
    96: 'Thunderstorm and Light Hail',
    99: 'Thunderstorm and Heavy Hail',
  };

  return weatherCodes[code];
}

function getDay(code) {
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  return days[code];
}

function createCurrentWeather(query) {
  const currentHour = convertTZ(new Date(), query.timezone).getHours();
  const currentTemp = query.hourly.temperature_2m[currentHour];
  const dailyHigh = query.daily.temperature_2m_max[0];
  const dailyLow = query.daily.temperature_2m_min[0];
  const weatherCode = query.hourly.weathercode[currentHour];
  const weatherDescription = getWeatherDescription(weatherCode);
  const precipitation = query.hourly.precipitation_probability[currentHour];
  const humidity = query.hourly.relativehumidity_2m[currentHour];
  const wind = query.hourly.windspeed_10m[currentHour];

  return {
    currentTemp, dailyHigh, dailyLow, weatherDescription, precipitation, humidity, wind,
  };
}

async function fetchCurrentWeather(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const cityName = query.name;

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`);

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }
    const result = await response.json();
    const currentWeather = createCurrentWeather(result);
    const weatherData = { cityName, ...result, currentWeather };

    return weatherData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchWeatherDefaultLocation() {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,precipitation_probability,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');

    if (!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`);
    }

    const result = await response.json();
    const currentWeather = createCurrentWeather(result);
    const cityName = 'London';
    const weatherData = { cityName, ...result, currentWeather };

    return weatherData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getThreeDayForecast(query) {
  const date = new Date();
  const day = date.getDay();
  const high = [];
  const low = [];
  const cor = [];
  const weatherDescription = [];
  const weatherCode = [];
  const days = [];
  // get temps
  for (let i = 1; i < 4; i += 1) {
    high.push(query.daily.temperature_2m_max[i]);
    low.push(query.daily.temperature_2m_min[i]);
    cor.push(query.daily.precipitation_probability_max[i]);
    weatherDescription.push(getWeatherDescription(query.daily.weathercode[i]));
    weatherCode.push(query.daily.weathercode[i]);
  }
  // assign days
  for (let i = day + 1; i < (day + 4); i += 1) {
    days.push(getDay(i % 7));
  }

  return {
    high, low, cor, days, weatherDescription, weatherCode,
  };
}

async function fetchDefaultWeather() {
  const currentWeatherData = await fetchWeatherDefaultLocation();
  const threeDayForecast = await getThreeDayForecast(currentWeatherData);

  return { ...currentWeatherData, threeDayForecast };
}

async function fetchWeather(query) {
  const currentWeatherData = await fetchCurrentWeather(query);
  const threeDayForecast = await getThreeDayForecast(currentWeatherData);

  return { ...currentWeatherData, threeDayForecast };
}


/***/ }),

/***/ "./src/page-layout.js":
/*!****************************!*\
  !*** ./src/page-layout.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPage)
/* harmony export */ });
/* harmony import */ var _current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-forecast-layout */ "./src/current-forecast-layout.js");
/* harmony import */ var _additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./additional-current-forecast-layout */ "./src/additional-current-forecast-layout.js");
/* harmony import */ var _additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./additional-forecast-layout */ "./src/additional-forecast-layout.js");
/* harmony import */ var _fetch_cities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-cities */ "./src/fetch-cities.js");
/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-weather */ "./src/fetch-weather.js");






let tempData = [];

function clearTips() {
  const tipsContainer = document.getElementsByClassName('tips-container')[0];
  tipsContainer.innerHTML = '';
}

function createCityResultText(result) {
  if (result.zip === undefined) {
    const cityName = result.name;
    const { state } = result;
    const { country } = result;

    return `${cityName}, ${state}, ${country}`;
  }
  const { zip } = result;
  const cityName = result.name;
  const { country } = result;

  return `${zip}, ${cityName}, ${country}`;
}

function createQueryResult(searchResult) {
  const locationIcon = document.createElement('div');
  const icon = document.createElement('img');
  icon.src = '../src/assets/images/layout/location-marker.svg';
  locationIcon.appendChild(icon);

  const textResult = document.createElement('div');
  textResult.textContent = createCityResultText(searchResult);

  const result = document.createElement('div');
  result.classList.add('search-result');

  result.append(locationIcon, textResult);

  return result;
}

function createTip(text) {
  const tipImgDiv = document.createElement('div');
  tipImgDiv.classList.add('tip-img');
  const tipImg = document.createElement('img');
  tipImg.src = '../src/assets/images/layout/tip.svg';
  tipImgDiv.appendChild(tipImg);

  const tipDiv = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML = `${text}`;
  tipDiv.appendChild(p);

  const tip = document.createElement('div');
  tip.classList.add('tip');
  tip.append(tipImgDiv, tipDiv);

  return tip;
}

function displaySearchError(input) {
  console.log(`${input}`);

  const resultsContainer = document.getElementsByClassName('results-container')[0];
  const messageDiv = document.createElement('div');
  const message = document.createElement('h2');
  message.classList.add('bold', 'medium');
  message.textContent = `${input}`;
  messageDiv.appendChild(message);

  resultsContainer.appendChild(messageDiv);
}

function createRefineSuggestions() {
  const headline = document.createElement('h3');
  headline.classList.add('bold', 'small');
  headline.textContent = 'Try the following tips for more accurate results:';

  const textOne = 'Enter city and country code (eg. Essex, GB)';
  const tipOne = createTip(textOne);

  const textTwo = 'For US cities, enter city name, state, and country code (eg. Essex, MA, US)';
  const tipTwo = createTip(textTwo);

  const tipsContainer = document.getElementsByClassName('tips-container')[0];
  tipsContainer.append(headline, tipOne, tipTwo);
}

function createSearchSuggestions() {
  const headline = document.createElement('h3');
  headline.classList.add('bold', 'small');
  headline.textContent = 'Try the following tips to refine your search:';

  const textOne = 'Ensure the spelling of your search query is correct';
  const tipOne = createTip(textOne);

  const textTwo = 'For cities in the US, enter city followed by state and country code (eg. Los Angeles, CA, US)';
  const tipTwo = createTip(textTwo);

  const textThree = 'For cities outside the US, enter city followed by country code (eg. London, GB)';
  const tipThree = createTip(textThree);

  const textFour = 'To search by postal/zip code, enter postal/zip code followed by country code (eg. 33701, US)';
  const tipFour = createTip(textFour);

  const tipsContainer = document.getElementsByClassName('tips-container')[0];
  tipsContainer.append(headline, tipOne, tipTwo, tipThree, tipFour);
}

function createSearchInstructions() {
  const textOne = 'To search for city in the US, enter city, state, and country code (eg. Phoenix, AZ, US)';
  const tipOne = createTip(textOne);

  const textTwo = 'To search for city outside US, enter city and country code (eg. London, GB)';
  const tipTwo = createTip(textTwo);

  const textThree = 'You can also search by postal/zip code followed by country code (eg. 33701, US)';
  const tipThree = createTip(textThree);

  const textFour = 'Use <a href=\'https://www.iso.org/obp/ui/#search\' target=\'_blank\'>ISO 3166 country codes</a> when searching by country';
  const tipFour = createTip(textFour);

  const instructions = document.createElement('div');
  instructions.classList.add('tips-container');
  instructions.append(tipOne, tipTwo, tipThree, tipFour);

  return instructions;
}

function toggleSearchModal() {
  const mobileSearchModal = document.getElementsByClassName('mobile-search-modal')[0];
  if (mobileSearchModal.classList.contains('hidden')) {
    mobileSearchModal.classList.remove('hidden');
    const outputContainer = document.getElementsByClassName('tips-container')[0];
    outputContainer.appendChild(createSearchInstructions());
  } else {
    const searchInput = document.getElementById('city-mobile');
    searchInput.value = '';
    const resultsContainer = document.getElementsByClassName('results-container')[0];
    resultsContainer.innerHTML = '';
    clearTips();
    mobileSearchModal.classList.add('hidden');
  }
}

function toggleSettingsModal() {
  const settingsModal = document.getElementsByClassName('mobile-settings-modal')[0];
  if (settingsModal.id === 'hidden') {
    settingsModal.id = '';
  } else {
    settingsModal.id = 'hidden';
  }
}

function clearResults() {
  const resultsContainer = document.getElementsByClassName('results-container')[0];
  resultsContainer.innerHTML = '';
}

function displaySearchResults(results) {
  const resultsContainer = document.getElementsByClassName('results-container')[0];

  if (Array.isArray(results)) {
    for (let i = 0; i < results.length; i += 1) {
      const query = results[i];
      const queryResult = createQueryResult(query);
      queryResult.addEventListener('click', async () => {
        toggleSearchModal();
        // call the fetch weather function
        console.log('fetching weather!');
        const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(query);
        console.log(result);
        (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__.updateCurrentForecastLayout)(result);
        (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__.updateAdditionalCurrentForecastLayout)(result);
        (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.updateHourlyForecastLayout)(result);
        (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.update3DayForecastLayout)(result);
      });

      resultsContainer.appendChild(queryResult);
    }
  } else {
    const queryResult = createQueryResult(results);
    queryResult.addEventListener('click', async () => {
      toggleSearchModal();
      console.log('fetching weather!');
      const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(results);
      console.log(result);
      (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__.updateCurrentForecastLayout)(result);
      (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__.updateAdditionalCurrentForecastLayout)(result);
      (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.updateHourlyForecastLayout)(result);
      (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.update3DayForecastLayout)(result);
    });

    resultsContainer.appendChild(queryResult);
  }
}

function createCityInputFormMobile() {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('mobile-search');
  const form = document.createElement('form');

  const label = document.createElement('label');
  label.for = 'city-mobile';

  const input = document.createElement('input');
  input.id = 'city-mobile';
  input.type = 'text';
  input.placeholder = 'Search city';
  label.appendChild(input);

  form.appendChild(label);
  inputContainer.appendChild(form);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearResults();
    const result = await (0,_fetch_cities__WEBPACK_IMPORTED_MODULE_3__["default"])(input.value);
    if (result instanceof Object) {
      clearTips();
      displaySearchResults(result);
      createRefineSuggestions();
    } else {
      clearTips();
      displaySearchError(result);
      createSearchSuggestions();
    }
  });

  return inputContainer;
}

function createToggleSwitch(toggleName) {
  const label = document.createElement('label');
  label.classList.add('switch');
  label.setAttribute('for', toggleName);

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = toggleName;

  const span = document.createElement('span');
  span.classList.add('slider', 'round');

  label.append(input, span);

  return label;
}

function checkTempConversion() {
  const fcSwitch = document.getElementById('farenheit-celsius-switch');
  const body = document.getElementsByTagName('body')[0];
  const tempMode = document.getElementById('temp-mode');

  if (!(body.classList.contains('celsius'))) {
    const temps = document.getElementsByClassName('temp');
    body.classList.add('celsius');
    tempMode.textContent = 'Fahrenheit';
    fcSwitch.checked = true;

    for (let i = 0; i < temps.length; i += 1) {
      const original = temps[i].textContent;
      const substring = original.slice(0, original.length - 1);
      const num = parseInt(substring, 10);
      const converted = `${Math.floor((0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__.convertFToC)(num))}°`;
      tempData.push(temps[i].textContent);
      temps[i].textContent = converted;
    }
  } else {
    const temps = document.getElementsByClassName('temp');
    body.classList.remove('celsius');
    tempMode.textContent = 'Celsius';
    fcSwitch.checked = false;

    for (let i = 0; i < temps.length; i += 1) {
      temps[i].textContent = tempData[i];
    }
  }
}

function createNavigationMenu() {
  const nav = document.createElement('nav');
  nav.classList.add('main-nav');
  const searchImg = document.createElement('img');
  searchImg.src = '../src/assets/images/layout/magnifying-glass-solid.svg';

  const logoDiv = document.createElement('div');
  const logoImg = document.createElement('img');
  logoImg.classList.add('logo');
  logoImg.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logoImg);

  const searchDiv = document.createElement('div');
  const searchContainerDiv = document.createElement('div');
  searchContainerDiv.classList.add('search-container');

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search-city';
  searchInput.placeholder = 'Enter city (eg. Los Angeles)';

  searchContainerDiv.append(searchImg, searchInput);
  searchDiv.appendChild(searchContainerDiv);

  const hamburgerMenuButton = document.createElement('button');
  hamburgerMenuButton.classList.add('menu-button');
  const hamburgerMenuImg = document.createElement('img');
  hamburgerMenuImg.classList.add('menu');
  hamburgerMenuImg.src = '../src/assets/images/layout/hamburger-svgrepo-com.svg';
  hamburgerMenuButton.appendChild(hamburgerMenuImg);
  hamburgerMenuButton.addEventListener('click', toggleSettingsModal);

  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');
  searchButton.appendChild(searchImg);

  searchButton.addEventListener('click', toggleSearchModal);

  const darkLightModeSwitchDiv = document.createElement('div');
  darkLightModeSwitchDiv.classList.add('toggle-div', 'hidden');
  darkLightModeSwitchDiv.id = 'hidden';

  const darkLightModeSwitchP = document.createElement('p');
  darkLightModeSwitchP.classList.add('dark-light-switch', 'small');
  darkLightModeSwitchP.textContent = 'Enable Dark Mode';

  const darkLightModeSwitch = createToggleSwitch();
  darkLightModeSwitch.id = 'dark-light-switch';

  darkLightModeSwitchDiv.append(darkLightModeSwitchP, darkLightModeSwitch);

  const farenheitCelsiusSwitchDiv = document.createElement('div');
  farenheitCelsiusSwitchDiv.classList.add('toggle-div');

  const farenheitCelsiusSwitchP = document.createElement('p');
  farenheitCelsiusSwitchP.classList.add('farenheit-celsius-switch', 'small');
  farenheitCelsiusSwitchP.textContent = 'Enable Celsius';

  const farenheitCelsiusSwitch = createToggleSwitch('farenheit-celsius-switch');

  farenheitCelsiusSwitchDiv.append(farenheitCelsiusSwitchP, farenheitCelsiusSwitch);

  const switchesDiv = document.createElement('div');
  switchesDiv.classList.add('switches');
  switchesDiv.append(darkLightModeSwitchDiv, farenheitCelsiusSwitchDiv);

  const additionalOptionsDiv = document.createElement('div');
  additionalOptionsDiv.classList.add('additional-options');
  additionalOptionsDiv.append(searchButton, hamburgerMenuButton);

  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.append(switchesDiv, additionalOptionsDiv);

  nav.append(logoDiv, optionsDiv);

  return nav;
}

function createSideNavigation() {
  const sideNavContainer = document.createElement('nav');
  sideNavContainer.classList.add('side-nav-container', 'hidden');

  const sideNav = document.createElement('div');
  sideNav.classList.add('side-nav');

  const logoDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logo);
  sideNav.appendChild(logoDiv);

  const navItems = document.createElement('div');
  const topList = document.createElement('ul');

  const darkMode = document.createElement('li');
  darkMode.textContent = 'Dark Mode';

  const setToCelsius = document.createElement('li');
  setToCelsius.textContent = 'Set to Celsius';

  topList.append(darkMode, setToCelsius);

  const divider = document.createElement('hr');
  navItems.append(topList, divider);

  const bottomList = document.createElement('ul');

  const about = document.createElement('li');
  about.textContent = 'About';
  bottomList.appendChild(about);
  navItems.appendChild(bottomList);

  sideNav.appendChild(navItems);
  sideNavContainer.appendChild(sideNav);

  const exitDiv = document.createElement('div');
  exitDiv.classList.add('exit');

  const exitBtn = document.createElement('button');
  const exitImg = document.createElement('img');
  exitImg.src = '../src/assets/images/layout/exit.svg';
  exitBtn.appendChild(exitImg);
  exitDiv.appendChild(exitBtn);

  sideNavContainer.appendChild(exitDiv);

  return sideNavContainer;
}

function createMobileSearchModal() {
  const modal = document.createElement('div');
  modal.classList.add('mobile-search-modal', 'hidden');

  const container = document.createElement('div');
  container.classList.add('container');

  const cityInputForm = createCityInputFormMobile();

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('button', 'primary');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', toggleSearchModal);

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-bar');
  searchContainer.append(cityInputForm, cancelButton);

  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');

  const tipsContainer = document.createElement('div');
  tipsContainer.classList.add('tips-container');

  const outputContainer = document.createElement('div');
  outputContainer.classList.add('output-container');
  outputContainer.append(resultsContainer, tipsContainer);

  container.append(searchContainer, outputContainer);
  modal.append(container);

  return modal;
}

function createSettingsModal() {
  const modal = document.createElement('div');
  modal.classList.add('mobile-settings-modal');
  modal.id = 'hidden';

  const container = document.createElement('div');
  container.classList.add('container');

  const logoDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.classList.add('black-filter');
  logo.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logo);

  const linksDiv = document.createElement('div');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const a = document.createElement('a');
  const tempImg = document.createElement('img');

  li.addEventListener('click', checkTempConversion);

  tempImg.classList.add('black-filter');
  tempImg.src = '../src/assets/images/layout/temperature.svg';
  a.innerHTML = 'Set to <span id=\'temp-mode\'>Celsius</span>';
  li.append(tempImg, a);
  ul.appendChild(li);
  linksDiv.appendChild(ul);

  container.append(logoDiv, linksDiv);

  const closeButton = document.createElement('button');
  const xImg = document.createElement('img');
  xImg.src = '../src/assets/images/layout/close-md-svgrepo-com.svg';
  closeButton.appendChild(xImg);
  closeButton.addEventListener('click', toggleSettingsModal);

  modal.append(container, closeButton);

  return modal;
}

async function loadDefaultWeather() {
  const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__.fetchDefaultWeather)();
  (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__.updateCurrentForecastLayout)(result);
  (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__.updateAdditionalCurrentForecastLayout)(result);
  (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.updateHourlyForecastLayout)(result);
  (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.update3DayForecastLayout)(result);
}

async function createPage() {
  const body = document.getElementsByTagName('body')[0];
  const mainContainer = document.createElement('main');
  mainContainer.classList.add('main-container');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  const navigationMenu = createNavigationMenu();
  const sideNavigation = createSideNavigation();
  const searchMobile = createMobileSearchModal();
  const settingsModal = createSettingsModal();
  const currentForecast = (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const moreCurrentForecastDetails = (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const additionalForecastDetails = (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();

  body.append(navigationMenu, sideNavigation, searchMobile, settingsModal);
  gridContainer.append(currentForecast, moreCurrentForecastDetails, additionalForecastDetails);
  mainContainer.appendChild(gridContainer);

  body.appendChild(mainContainer);
  const fcSwitch = document.getElementById('farenheit-celsius-switch');
  fcSwitch.addEventListener('click', checkTempConversion);

  await loadDefaultWeather();
}


/***/ }),

/***/ "./src/assets/fonts/Barlow-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Barlow-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cb1ab864072bf9e0991.ttf";

/***/ }),

/***/ "./src/assets/fonts/Barlow-Medium.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Barlow-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4afdc134fc10b739bab.ttf";

/***/ }),

/***/ "./src/assets/fonts/Barlow-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Barlow-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7eb634d040a6f384033.ttf";

/***/ }),

/***/ "./src/assets/fonts/Barlow-Thin.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Barlow-Thin.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed7c51aed47c9fd3db93.ttf";

/***/ }),

/***/ "./src/assets/fonts/BarlowSemiCondensed-Bold.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Bold.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6454195504604ebe42c3.ttf";

/***/ }),

/***/ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05cbb3ba9db7b5e1da6e.ttf";

/***/ }),

/***/ "./src/assets/fonts/BarlowSemiCondensed-Thin.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Thin.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f73fa0adcccb37c041e.ttf";

/***/ }),

/***/ "./src/assets/images/layout/magnifying-glass-solid-desktop.svg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/layout/magnifying-glass-solid-desktop.svg ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96e722487c813158dacb.svg";

/***/ }),

/***/ "./src/assets/images/layout/magnifying-glass-solid.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/layout/magnifying-glass-solid.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e69e2b89f37403d0c843.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _light_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light-theme.css */ "./src/light-theme.css");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout */ "./src/page-layout.js");




(async () => {
  await (0,_page_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLFNBQVMsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsTUFBTSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxTQUFTLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sUUFBUSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssUUFBUSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFNBQVMsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sZ0JBQWdCLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsb0JBQW9CLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUss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O0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQSxZQUFZLDhCQUE4QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxZQUFZLHNDQUFzQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUVBQW1CO0FBQzFDLEVBQUUscUZBQTJCO0FBQzdCLEVBQUUsMEdBQXFDO0FBQ3ZDLEVBQUUsdUZBQTBCO0FBQzVCLEVBQUUscUZBQXdCO0FBQzFCO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9FQUFxQjtBQUMvQyxxQ0FBcUMsK0VBQWdDO0FBQ3JFLG9DQUFvQyx1RUFBd0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNnQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDSztBQUNZO0FBQ3ZDO0FBQ0E7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWdodC10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbGlnaHQtdGhlbWUuY3NzPzdiZGMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYWRkaXRpb25hbC1jdXJyZW50LWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZGRpdGlvbmFsLWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50LWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC1jaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWJsYWNrOiAjMzIzMjMyO1xyXG4gICAgLS1ibGFjay1maWx0ZXI6IGludmVydCgxNyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNmRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDg5JSk7O1xyXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgLS13aGl0ZTogI0YyRjJGMjtcclxuICAgIC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgyJSkgc2F0dXJhdGUoMTQzJSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTE2JSkgY29udHJhc3QoOTAlKTtcclxuICAgIC0tZGF5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4N0U3LCAjQzI5OTAwKTtcclxuICAgIC0tcG93ZXItcHJpbWFyeTogIzAwMTMxQTtcclxuICAgIC0tcG93ZXItc2Vjb25kYXJ5OiAjNjREMUYzO1xyXG4gICAgLS1wb3dlci10ZXJ0aWFyeTogaW52ZXJ0KDEwMCUpIHNlcGlhKDM2JSkgc2F0dXJhdGUoNDAxMCUpIGh1ZS1yb3RhdGUoMTc2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMSUpO1xyXG4gICAgLS1wb3dlci1xdWF0ZXJuYXJ5OiAjN0ZBOUQ2O1xyXG4gICAgLS10cmFuc3BhcmVudDogcmdiKDQ2LCA2OCwgODcsIDAuNSk7XHJcbiAgICAtLXRyYW5zcGFyZW50LWZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgyOTklKSBodWUtcm90YXRlKDE2NmRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSkgb3BhY2l0eSg1MCUpO1xyXG4gICAgLS1hZGRpdGlvbmFsLWZvcmVjYXN0OiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuMik7XHJcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjcpO1xyXG4gICAgLS1jYXJkOiByZ2IoMjUwLCAyNTAsIDI1MCwgMC4xKTtcclxuICAgIC0tbmF2aWdhdGlvbjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuMik7XHJcbiAgICAtLWRyb3BzaGFkb3c6IDByZW0gMC41cmVtIDFyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtLW1vZGFsLXJlc3VsdDogI0VBRUVFRjsgIFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRheSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cclxuXHJcbi5zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi50ZXJ0aWFyeSB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXBvd2VyLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLmJsYWNrLWZpbHRlciB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cclxuXHJcbm5hdiB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgaW1nIHtcclxuICAgIGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG5uYXYgLnNpZGUtbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5sb2dvLFxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5kaXZpZGVyIHtcclxuICAgIGZpbHRlcjogdmFyKC0tYmxhY2stZmlsdGVyKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZXhpdCBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxuXHJcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cclxuLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXF1YXRlcm5hcnkpO1xyXG59XHJcbiAgXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXBvd2VyLXF1YXRlcm5hcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1yZXN1bHQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTRVRUSU5HUyBNT0RBTCAqKi9cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG5cclxuc2VjdGlvbiNjdXJyZW50LWZvcmVjYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI2N1cnJlbnQtZm9yZWNhc3Qge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcblxyXG4gICAgLyogTU9CSUxFIFNUWUxFICovXHJcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG4jYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcclxufVxyXG5cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMikgdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCkgIWltcG9ydGFudDtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxufVxyXG5cclxuLmN1c3RvbS1zY3JvbGxiYXI6aG92ZXIge1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS13aGl0ZSkgdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdC0yKTtcclxufVxyXG5cclxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuICAgIFxyXG4vKiogSE9VUkxZIENBUkQgU1RZTEVTICoqL1xyXG4uaG91cmx5LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XHJcbn1cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWdodC10aGVtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0dBQWtHO0lBQ2xHLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsc0dBQXNHO0lBQ3RHLGdEQUFnRDtJQUNoRCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDRHQUE0RztJQUM1RywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHlIQUF5SDtJQUN6SCwrQ0FBK0M7SUFDL0MsaURBQWlEO0lBQ2pELCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsZ0RBQWdEO0lBQ2hELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7OztBQUlBLHlCQUF5Qjs7QUFFekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7Ozs7QUFJQSx3QkFBd0I7O0FBRXhCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7O0FBR0EsMkJBQTJCO0FBQzNCO0lBQ0ksb0NBQW9DO0lBQ3BDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7OztBQUlBLGlDQUFpQztBQUNqQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7OztBQUlBLHFCQUFxQjtBQUNyQjtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7Ozs7QUFJQSw4QkFBOEI7O0FBRTlCO0lBQ0ksNENBQTRDO0lBQzVDLG1CQUFtQjtBQUN2Qjs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOzs7QUFHSiwyQ0FBMkM7O0FBRTNDO0lBQ0ksZ0NBQWdDOztJQUVoQyxpQkFBaUI7SUFDakIsMERBQTBEO0FBQzlEOztJQUVJLGtCQUFrQjtJQUNsQjtRQUNJO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7OztBQUdKLHlDQUF5QztBQUN6QztJQUNJLDRDQUE0QztBQUNoRDs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOzs7QUFHSiw2QkFBNkI7O0FBRTdCO0lBQ0ksbUZBQW1GO0lBQ25GLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdEQUF3RDtBQUM1RDs7QUFFQTtDQUNDLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLDhDQUE4QztBQUMvQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7O0FBR0EseUJBQXlCO0FBQ3pCO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLGlDQUFpQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XFxyXFxuICAgIC0tYmxhY2stZmlsdGVyOiBpbnZlcnQoMTclKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTZkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4OSUpOztcXHJcXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xcclxcbiAgICAtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDE0MyUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDkwJSk7XFxyXFxuICAgIC0tZGF5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4N0U3LCAjQzI5OTAwKTtcXHJcXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xcclxcbiAgICAtLXBvd2VyLXNlY29uZGFyeTogIzY0RDFGMztcXHJcXG4gICAgLS1wb3dlci10ZXJ0aWFyeTogaW52ZXJ0KDEwMCUpIHNlcGlhKDM2JSkgc2F0dXJhdGUoNDAxMCUpIGh1ZS1yb3RhdGUoMTc2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XFxyXFxuICAgIC0tdHJhbnNwYXJlbnQ6IHJnYig0NiwgNjgsIDg3LCAwLjUpO1xcclxcbiAgICAtLXRyYW5zcGFyZW50LWZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgyOTklKSBodWUtcm90YXRlKDE2NmRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSkgb3BhY2l0eSg1MCUpO1xcclxcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWZvcmVjYXN0LTI6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC43KTtcXHJcXG4gICAgLS1jYXJkOiByZ2IoMjUwLCAyNTAsIDI1MCwgMC4xKTtcXHJcXG4gICAgLS1uYXZpZ2F0aW9uOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC4yKTtcXHJcXG4gICAgLS1kcm9wc2hhZG93OiAwcmVtIDAuNXJlbSAxcmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAtLW1vZGFsLXJlc3VsdDogI0VBRUVFRjsgIFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGF5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi50ZXJ0aWFyeSB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxhY2stZmlsdGVyIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS1ibGFjay1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgaW1nIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zaWRlLW5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5sb2dvLFxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmRpdmlkZXIge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcG93ZXItcXVhdGVybmFyeSk7XFxyXFxufVxcclxcbiAgXFxyXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wb3dlci1xdWF0ZXJuYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXJlc3VsdCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTRVRUSU5HUyBNT0RBTCAqKi9cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5zZWN0aW9uI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICAgICNjdXJyZW50LWZvcmVjYXN0IHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xcclxcblxcclxcbiAgICAvKiBNT0JJTEUgU1RZTEUgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMHJlbSAwLjEyNXJlbSAwLjI1cmVtIHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICAgICNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICAgICNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyIHtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0LTIpIHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpICFpbXBvcnRhbnQ7XFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXI6aG92ZXIge1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLXdoaXRlKSB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0LTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbiAgICBcXHJcXG4vKiogSE9VUkxZIENBUkQgU1RZTEVTICoqL1xcclxcbi5ob3VybHktY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQtZGVza3RvcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuOnJvb3Qge1xyXG5cdC0tYmxhY2s6ICMyMjIyMjI7XHJcblx0LS13aGl0ZTogI0YyRjJGMjtcclxuXHQtLWdyYXk6ICNBMEEwQTA7XHJcblx0LS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMTA2JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5MCUpO1xyXG5cdC0tZ3JheS1maWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNTNkZWcpIGJyaWdodG5lc3MoNzglKSBjb250cmFzdCg4NiUpO1xyXG5cdC0tdHJhbnNwYXJlbnQ6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjgpO1xyXG5cdC0tdHJhbnNwYXJlbnQtZGFyay0zMDogcmdiYSg0MCwgNDAsIDQwLCAwLjUpO1xyXG5cdC0tdHJhbnNwYXJlbnQtZGFyay03MDogcmdiYSg0MCwgNDAsIDQwLCAwLjcpO1xyXG5cdC0taW5wdXQtcGxhY2Vob2xkZXI6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjcpO1xyXG59XHJcblxyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBNZWRpdW0nO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgVGhpbic7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBCb2xkJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIFRoaW4nO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0LyoqIE1PQklMRSAqKi9cclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xyXG4ud2hpdGUtZmlsdGVyIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudCB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogR0VORVJBTCBGT05UIFNUWUxFUyAqKi9cclxuXHJcbmgxIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuaDIuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcbn1cclxuXHJcbmgyLnNtYWxsIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmgyLm1lZGl1bSB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMi5sYXJnZSB7XHJcblx0Zm9udC1zaXplOiAzcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG5oMyB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMy5zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oMy5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmgzLmJvbGQuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuaDQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbmg0LmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbmg1IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmg1LnNtYWxsIHtcclxuXHRmb250LXNpemU6IDAuNzVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XHJcbn1cclxuXHJcbmg1LnNtYWxsLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbnAubGFyZ2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogNHJlbTtcclxuXHRsaW5lLWhlaWdodDogNHJlbTtcclxufVxyXG5cclxucC5tZWRpdW0ge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxucC5zbWFsbCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xyXG59XHJcblxyXG5wLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuYSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgTWVkaXVtJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG5cdGJvcmRlcjogc29saWQgMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcblxyXG5uYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiB7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdG5hdi5tYWluLW5hdiAge1xyXG5cdFx0cGFkZGluZzogMXJlbSA1cmVtO1xyXG5cdH1cclxufVxyXG5cclxubmF2Lm1haW4tbmF2IGltZyB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLmxvZ28sIG5hdi5zaWRlLW5hdiAubG9nbyB7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDNyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdG5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRnYXA6IDFyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMgYnV0dG9uIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIC5tZW51LWJ1dHRvbiB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxubmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0IHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xyXG5cdHdpZHRoOiAxNXJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVyKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGdhcDogMDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgYnV0dG9uIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLnNpZGUtbmF2IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmbGV4OiA0O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGxpIHtcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGhyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xyXG5cdG1hcmdpbjogMnJlbSAwcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyay0zMCk7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQubW9iaWxlLXNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcclxuXHRcdFx0cGFkZGluZzogMS41cmVtO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDUwcmVtO1xyXG5cdFx0XHRtYXJnaW46IDVyZW0gYXV0bztcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1iYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5tb2JpbGUtc2VhcmNoIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgaW5wdXQge1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcclxuXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLm91dHB1dC1jb250YWluZXIge1xyXG5cdHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnJlc3VsdHMtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMnJlbSAwcmVtO1xyXG59XHJcblxyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDAuNzVyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xyXG5cdGN1cnNvcjpcdGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNFQVJDSCBUSVAgU1RZTEVTICoqL1xyXG4udGlwcy1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcbi50aXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXAgcCB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnRpcCAudGlwLWltZyB7XHJcblx0cGFkZGluZy10b3A6IDAuM3JlbTtcclxufVxyXG5cclxuLnRpcCAudGlwLWltZyBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xyXG5cclxuLnN3aXRjaCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMi43NXJlbTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7IFxyXG5cdG9wYWNpdHk6IDA7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDFyZW07XHJcblx0d2lkdGg6IDFyZW07XHJcblx0bGVmdDogNHB4O1xyXG5cdGJvdHRvbTogM3B4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG5cdHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxufVxyXG4gIFxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMzJweDtcclxufVxyXG4gIFxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQudG9nZ2xlLWRpdiB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGdhcDogMC41cmVtO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLyoqIE1BSU4tQ09OVEFJTkVSIFNUWUxFUyAqKi9cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC5tYWluLWNvbnRhaW5lciB7XHJcblx0XHRcdG1hcmdpbjogNXJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQuZ3JpZC1jb250YWluZXIge1xyXG5cdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRnYXA6IDFyZW07XHJcblx0XHRcdGdyaWQtdGVtcGxhdGU6IDRmciAxZnIgLyA1MCUgNTAlO1xyXG5cclxuXHRcdFx0bWluLXdpZHRoOiA1MHJlbTtcclxuXHRcdFx0bWF4LXdpZHRoOiA4MHJlbTtcclxuXHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLyoqIFNFVFRJTkdTIE1PREFMICoqL1xyXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHR6LWluZGV4OiAzO1xyXG5cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstNzApO1xyXG59XHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQubW9iaWxlLXNldHRpbmdzLW1vZGFsIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDJyZW07XHJcblx0d2lkdGg6IDcwdnc7XHJcblx0cGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcblx0XHQubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogMjByZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCBidXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgYnV0dG9uIGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIGxpIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNXJlbTtcclxuXHRwYWRkaW5nOiAzcmVtIDFyZW07XHJcblx0cGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG5cdGhlaWdodDogODN2aDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCB7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdHBhZGRpbmc6IDNyZW07XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMsXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0Z2FwOiA1cmVtO1x0XHJcbn1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5oaWdoLWxvdyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCBpbWcjY3VycmVudC13ZWF0aGVyIHtcclxuXHR3aWR0aDogOHJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRtYXJnaW46IDByZW0gMXJlbTtcclxuXHQvKiogTU9CSUxFIEJFTE9XICoqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDNyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0cG9zaXRpb246IHN0YXRpYztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHRncmlkLWNvbHVtbi1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xyXG5cdFx0XHRncmlkLXJvdy1zdGFydDogMjtcclxuXHRcdFx0Z3JpZC1yb3ctZW5kOiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAycmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDEuNXJlbTtcclxuXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG59XHJcblx0LyoqIFRBQkxFVCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSB7XHJcblx0XHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAyNXJlbTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdFx0XHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDAuNXJlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xyXG5cclxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDVyZW07XHJcblx0cGFkZGluZzogM3JlbSAxcmVtO1xyXG5cdHBhZGRpbmctdG9wOiA3cmVtO1xyXG5cclxuXHRoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcclxuXHRcdFx0cGFkZGluZzogM3JlbTtcclxuXHRcdFx0cGFkZGluZy1ib3R0b206IDRyZW07XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDM7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuLmhvdXJseS1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMnJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xyXG4uaG91cmx5LWNhcmQge1xyXG5cdHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxufVxyXG5cclxuLmhvdXJseS1jYXJkIC5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMS41cmVtO1xyXG5cdHdpZHRoOiAyLjVyZW07XHJcbn1cclxuXHJcbi5ob3VybHktY2FyZCBpbWcge1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FST1VTRUwgU1RZTEVTICoqL1xyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCB7XHJcblx0b3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdGhlaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0Ym9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuXHQvKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQuY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdFx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcclxuXHRcdH1cclxuXHR9Ki9cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwgPiAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC41cmVtO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcbi50aHJlZS1kYXktZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDJyZW07XHJcbn1cclxuXHJcbi50aHJlZS1kYXktZm9yZWNhc3QtbGlzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXHJcbi5kYWlseS1iYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDFyZW07XHJcblx0XHJcblx0cGFkZGluZzogMC41cmVtIDByZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmRheS1jb250YWluZXIge1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmRldGFpbHMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmbGV4OiAxMDtcclxuXHRnYXA6IDFyZW07IC8qKiBNT0JJTEUgKiovXHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0LFxyXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMsXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0IHtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5mb3JlY2FzdCAuaWNvbiB7XHJcblx0d2lkdGg6IDEuNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4gLmljb24ge1xyXG5cdGhlaWdodDogMXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciBoNCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzIHtcclxuXHR3aWR0aDogNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuaGlnaCxcclxuLmRhaWx5LWJhciAubG93IHtcclxuXHRmbGV4OiAxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Ms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RUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixTQUFTLEVBQUUsYUFBYTtBQUN6Qjs7QUFFQTs7O0NBR0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBOztDQUVDLE9BQU87Q0FDUCxhQUFhO0NBQ2IseUJBQXlCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcblxcdC0tYmxhY2s6ICMyMjIyMjI7XFxyXFxuXFx0LS13aGl0ZTogI0YyRjJGMjtcXHJcXG5cXHQtLWdyYXk6ICNBMEEwQTA7XFxyXFxuXFx0LS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMTA2JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5MCUpO1xcclxcblxcdC0tZ3JheS1maWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNTNkZWcpIGJyaWdodG5lc3MoNzglKSBjb250cmFzdCg4NiUpO1xcclxcblxcdC0tdHJhbnNwYXJlbnQ6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjgpO1xcclxcblxcdC0tdHJhbnNwYXJlbnQtZGFyay0zMDogcmdiYSg0MCwgNDAsIDQwLCAwLjUpO1xcclxcblxcdC0tdHJhbnNwYXJlbnQtZGFyay03MDogcmdiYSg0MCwgNDAsIDQwLCAwLjcpO1xcclxcblxcdC0taW5wdXQtcGxhY2Vob2xkZXI6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgTWVkaXVtJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgVGhpbic7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVRoaW4udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgQm9sZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgVGhpbic7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG5cXHQvKiogTU9CSUxFICoqL1xcclxcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXFxyXFxuLndoaXRlLWZpbHRlciB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNwYXJlbnQge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIEZPTlQgU1RZTEVTICoqL1xcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxufVxcclxcblxcclxcbmgyLnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmgyLm1lZGl1bSB7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMi5sYXJnZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmgzLmJvbGQuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmg0LmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmg1LnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbmg1LnNtYWxsLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnAubGFyZ2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogNHJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5tZWRpdW0ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5zbWFsbCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgTWVkaXVtJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IHtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRuYXYubWFpbi1uYXYgIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxcmVtIDVyZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAubG9nbywgbmF2LnNpZGUtbmF2IC5sb2dvIHtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHRuYXYubWFpbi1uYXYgLm9wdGlvbnMgLnN3aXRjaGVzIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuYWRkaXRpb25hbC1vcHRpb25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIC5tZW51LWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2gge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xcclxcblxcdHdpZHRoOiAxNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGdhcDogMDtcXHJcXG5cXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuc2lkZS1uYXYge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmbGV4OiA0O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgbGkge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZXhpdCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGhyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstMzApO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQubW9iaWxlLXNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiA1MHJlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDVyZW0gYXV0bztcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5tb2JpbGUtc2VhcmNoIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgaW5wdXQge1xcclxcblxcdGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JheSk7XFxyXFxuXFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLm91dHB1dC1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzogMnJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDAuNzVyZW07XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcclxcblxcdGN1cnNvcjpcXHRkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0VBUkNIIFRJUCBTVFlMRVMgKiovXFxyXFxuLnRpcHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIHAge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50aXAgLnRpcC1pbWcge1xcclxcblxcdHBhZGRpbmctdG9wOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi50aXAgLnRpcC1pbWcgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLWdyYXktZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xcclxcblxcclxcbi5zd2l0Y2gge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDIuNzVyZW07XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2ggaW5wdXQgeyBcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHdpZHRoOiAwO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxyXFxuXFx0dHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG5cXHR3aWR0aDogMXJlbTtcXHJcXG5cXHRsZWZ0OiA0cHg7XFxyXFxuXFx0Ym90dG9tOiAzcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxyXFxuXFx0dHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcbn1cXHJcXG4gIFxcclxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcclxcbi5zbGlkZXIucm91bmQge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQudG9nZ2xlLWRpdiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRnYXA6IDAuNXJlbTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1BSU4tQ09OVEFJTkVSIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5tYWluLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiA1cmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuZ3JpZC1jb250YWluZXIge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdFxcdGdyaWQtdGVtcGxhdGU6IDRmciAxZnIgLyA1MCUgNTAlO1xcclxcblxcclxcblxcdFxcdFxcdG1pbi13aWR0aDogNTByZW07XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiA4MHJlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0VUVElOR1MgTU9EQUwgKiovXFxyXFxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ei1pbmRleDogMztcXHJcXG5cXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstNzApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5tb2JpbGUtc2V0dGluZ3MtbW9kYWwge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxuXFx0d2lkdGg6IDcwdnc7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xcclxcblxcdFxcdC5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDIwcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCBidXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgYnV0dG9uIGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIGxpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAzcmVtIDFyZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDEwcmVtO1xcclxcblxcdGhlaWdodDogODN2aDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNjdXJyZW50LWZvcmVjYXN0IHtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogM3JlbTtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1lbmQ6IDI7XFxyXFxuXFx0XFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1yb3ctZW5kOiAyO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMsXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMgLmJvdHRvbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMgLmJvdHRvbSB7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0Z2FwOiA1cmVtO1xcdFxcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCAuaGlnaC1sb3cge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IGltZyNjdXJyZW50LXdlYXRoZXIge1xcclxcblxcdHdpZHRoOiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0bWFyZ2luOiAwcmVtIDFyZW07XFxyXFxuXFx0LyoqIE1PQklMRSBCRUxPVyAqKi9cXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDNyZW07XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdFxcdFxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMnJlbTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcXHJcXG59XFxyXFxuXFx0LyoqIFRBQkxFVCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSB7XFxyXFxuXFx0XFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAyNXJlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xcclxcblxcclxcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA1cmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG5cXHRwYWRkaW5nLXRvcDogN3JlbTtcXHJcXG5cXHJcXG5cXHRoZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogM3JlbTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogNHJlbTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbi5ob3VybHktZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmhvdXJseS1jYXJkIHtcXHJcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNhcmQgLmNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxLjVyZW07XFxyXFxuXFx0d2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIGltZyB7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FST1VTRUwgU1RZTEVTICoqL1xcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwge1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0aGVpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0LmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDAuNXJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH0qL1xcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwgPiAuY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbi50aHJlZS1kYXktZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aHJlZS1kYXktZm9yZWNhc3QtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmRhaWx5LWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZGF5LWNvbnRhaW5lciB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZGV0YWlscyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXg6IDEwO1xcclxcblxcdGdhcDogMXJlbTsgLyoqIE1PQklMRSAqKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3QsXFxyXFxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzLFxcclxcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCAuaWNvbiB7XFxyXFxuXFx0d2lkdGg6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4gLmljb24ge1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciBoNCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuaGlnaCxcXHJcXG4uZGFpbHktYmFyIC5sb3cge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlnaHQtdGhlbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saWdodC10aGVtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcHJpbnRPdXRIdW1pZGl0eShxdWVyeSkge1xyXG4gIHJldHVybiBgJHtxdWVyeS5jdXJyZW50V2VhdGhlci5odW1pZGl0eX0lYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRXaW5kU3BlZWQocXVlcnkpIHtcclxuICByZXR1cm4gYCR7TWF0aC5mbG9vcihxdWVyeS5jdXJyZW50V2VhdGhlci53aW5kKX1tcGhgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFVWSW5kZXgocXVlcnkpIHtcclxuICBjb25zdCB1diA9IHF1ZXJ5LmRhaWx5LnV2X2luZGV4X21heFswXTtcclxuICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHV2KTtcclxuXHJcbiAgcmV0dXJuIGAke3Jlc3VsdH0gb2YgMTBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSkge1xyXG4gIHJldHVybiBgJHtxdWVyeS5jdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9ufSVgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dChxdWVyeSkge1xyXG4gIGNvbnN0IGNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuY2Utb2YtcmFpbicpO1xyXG4gIGNvci50ZXh0Q29udGVudCA9IHByaW50T3V0Q2hhbmNlT2ZSYWluKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcclxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IHByaW50T3V0SHVtaWRpdHkocXVlcnkpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IHByaW50T3V0V2luZFNwZWVkKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgdXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXYtaW5kZXgnKTtcclxuICB1di50ZXh0Q29udGVudCA9IHByaW50T3V0VVZJbmRleChxdWVyeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoYW5jZU9mUmFpbigpIHtcclxuICBjb25zdCBjb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JEaXYuY2xhc3NMaXN0LmFkZCgnY29yJywgJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBjb3JJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29ySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY29ySW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL2Ryb3BsZXQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjb3JJY29uRGl2LmFwcGVuZENoaWxkKGNvckltZyk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKGNvckljb25EaXYpO1xyXG5cclxuICBjb25zdCBjb3JQZXJjZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29yUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb3JQZXJjZW50LmlkID0gJ2NoYW5jZS1vZi1yYWluJztcclxuICBjb3JQZXJjZW50RGl2LmFwcGVuZENoaWxkKGNvclBlcmNlbnQpO1xyXG5cclxuICBjb25zdCBjb3JUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICBjb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnc21hbGwnKTtcclxuICBjb3JUaXRsZS50ZXh0Q29udGVudCA9ICdSYWluJztcclxuICBjb3JUaXRsZURpdi5hcHBlbmRDaGlsZChjb3JUaXRsZSk7XHJcblxyXG4gIGNvckRpdi5hcHBlbmQoY29yUGVyY2VudERpdiwgY29yVGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gY29yRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIdW1pZGl0eSgpIHtcclxuICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5JywgJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGh1bWlkaXR5SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dhdmVzLWZpbGwtc3ZncmVwby1jb20uc3ZnJztcclxuICBodW1pZGl0eUljb25EaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbWcpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBodW1pZGl0eVBlcmNlbnQuaWQgPSAnaHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5UGVyY2VudERpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnQpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnc21hbGwnKTtcclxuICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcclxuICBodW1pZGl0eVRpdGxlRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xyXG5cclxuICBodW1pZGl0eURpdi5hcHBlbmQoaHVtaWRpdHlQZXJjZW50RGl2LCBodW1pZGl0eVRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIGh1bWlkaXR5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kKCkge1xyXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQnLCAnbW9kdWxlJyk7XHJcblxyXG4gIGNvbnN0IHdpbmRJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHdpbmRJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvd2luZC1maWxsLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgd2luZEljb25EaXYuYXBwZW5kQ2hpbGQod2luZEltZyk7XHJcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB3aW5kU3BlZWQuaWQgPSAnd2luZCc7XHJcbiAgd2luZFNwZWVkRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XHJcblxyXG4gIGNvbnN0IHdpbmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScsICdzbWFsbCcpO1xyXG4gIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9ICdXaW5kJztcclxuICB3aW5kVGl0bGVEaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcclxuXHJcbiAgd2luZERpdi5hcHBlbmQod2luZFNwZWVkRGl2LCB3aW5kVGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gd2luZERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVVYoKSB7XHJcbiAgY29uc3QgdXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB1dkRpdi5jbGFzc0xpc3QuYWRkKCd1dicsICdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgdXZJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB1dkltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9zdW4tZmlsbGVkLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgdXZJY29uRGl2LmFwcGVuZENoaWxkKHV2SW1nKTtcclxuICB1dkRpdi5hcHBlbmRDaGlsZCh1dkljb25EaXYpO1xyXG5cclxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB1dkluZGV4LmlkID0gJ3V2LWluZGV4JztcclxuICB1dkluZGV4RGl2LmFwcGVuZENoaWxkKHV2SW5kZXgpO1xyXG5cclxuICBjb25zdCB1dlRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnc21hbGwnKTtcclxuICB1dlRpdGxlLnRleHRDb250ZW50ID0gJ1VWIEluZGV4JztcclxuICB1dlRpdGxlRGl2LmFwcGVuZENoaWxkKHV2VGl0bGUpO1xyXG5cclxuICB1dkRpdi5hcHBlbmQodXZJbmRleERpdiwgdXZUaXRsZURpdik7XHJcblxyXG4gIHJldHVybiB1dkRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzJztcclxuXHJcbiAgY29uc3QgbW9yZUZvcmVjYXN0RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuaWQgPSAnbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluID0gY3JlYXRlQ2hhbmNlT2ZSYWluKCk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBjcmVhdGVIdW1pZGl0eSgpO1xyXG4gIGNvbnN0IHdpbmQgPSBjcmVhdGVXaW5kKCk7XHJcbiAgY29uc3QgdXYgPSBjcmVhdGVVVigpO1xyXG5cclxuICBtb3JlRm9yZWNhc3REZXRhaWxzRGl2LmFwcGVuZChjaGFuY2VPZlJhaW4sIGh1bWlkaXR5LCB3aW5kLCB1dik7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQobW9yZUZvcmVjYXN0RGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUWiwgZmV0Y2hXZWF0aGVySWNvbiB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkKGhvdXIsIHRlbXAsIGljb24pIHtcclxuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdob3VybHktY2FyZCcpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IGhvdXI7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGZvcmVjYXN0SWNvbi5zcmMgPSBpY29uO1xyXG5cclxuICBjb25zdCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJseVRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKHRlbXApfcKwYDtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQodGltZSwgZm9yZWNhc3RJY29uLCBob3VybHlUZW1wKTtcclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBjYXJkRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VGltZVRvMTJIcihob3VyKSB7XHJcbiAgbGV0IHQ7XHJcbiAgaWYgKGhvdXIgPT09IDEyIHx8IGhvdXIgPT09IDM2KSB7XHJcbiAgICB0ID0gJzEycG0nO1xyXG4gIH0gZWxzZSBpZiAoaG91ciA9PT0gMCB8fCBob3VyID09PSAyNCkge1xyXG4gICAgdCA9ICcxMmFtJztcclxuICB9IGVsc2UgaWYgKChob3VyID4gMCAmJiBob3VyIDwgMTIpIHx8IChob3VyID4gMjQgJiYgaG91ciA8IDM2KSkge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofWFtYDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofXBtYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUyNEhvdXJGb3JlY2FzdChkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gY29udmVydFRaKG5ldyBEYXRlKCksIGRhdGEudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgaG91cmx5UmFuZ2UgPSBjdXJyZW50SG91ciArIDI0O1xyXG5cclxuICBmb3IgKGxldCBpID0gY3VycmVudEhvdXI7IGkgPD0gaG91cmx5UmFuZ2U7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdGVtcCA9IGRhdGEuaG91cmx5LnRlbXBlcmF0dXJlXzJtW2ldO1xyXG4gICAgY29uc3QgaG91ciA9IGNvbnZlcnRUaW1lVG8xMkhyKGkpO1xyXG4gICAgY29uc3QgY29kZSA9IGRhdGEuaG91cmx5LndlYXRoZXJjb2RlW2ldO1xyXG4gICAgY29uc3QgaXNEYXkgPSBkYXRhLmhvdXJseS5pc19kYXlbaV07XHJcbiAgICBjb25zdCBpY29uID0gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSk7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlSG91cmx5Q2FyZChob3VyLCB0ZW1wLCBpY29uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJseSBGb3JlY2FzdCc7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsJywgJ2N1c3RvbS1zY3JvbGxiYXInKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENvbnRhaW5lcik7XHJcblxyXG4gIGhvdXJseUZvcmVjYXN0LmFwcGVuZChob3VybHlGb3JlY2FzdFRpdGxlRGl2LCBob3VybHlGb3JlY2FzdENhcm91c2VsKTtcclxuXHJcbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUyNEhvdXJGb3JlY2FzdChxdWVyeSk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCcpWzBdO1xyXG4gIGNhcm91c2VsLmlubmVySFRNTCA9ICcnO1xyXG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoaGlnaCwgbG93LCBkYXksIGNvciwgZGVzYywgaWNvbikge1xyXG4gIGNvbnN0IGZvcmVjYXN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3RCYXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktYmFyJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5T2ZUaGVXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBkYXlPZlRoZVdlZWsuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XHJcbiAgZGF5T2ZUaGVXZWVrLnRleHRDb250ZW50ID0gZGF5LnN1YnN0cmluZygwLCAzKTtcclxuXHJcbiAgZGF5RGl2LmFwcGVuZENoaWxkKGRheU9mVGhlV2Vlayk7XHJcbiAgZm9yZWNhc3RCYXIuYXBwZW5kQ2hpbGQoZGF5RGl2KTtcclxuXHJcbiAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcmVjYXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckljb25EaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1pY29uJyk7XHJcbiAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGljb25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGljb25JbWcuc3JjID0gaWNvbjtcclxuXHJcbiAgd2VhdGhlckljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbkltZyk7XHJcbiAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQod2VhdGhlckljb25EaXYpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcclxuXHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGl2KTtcclxuXHJcbiAgY29uc3QgdGVtcGVyYXR1cmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcGVyYXR1cmVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlcycpO1xyXG5cclxuICBjb25zdCBoaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGlnaERpdi5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XHJcblxyXG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAndGVtcCcpO1xyXG4gIGhpZ2hQLnRleHRDb250ZW50ID0gYCR7aGlnaH3CsGA7XHJcbiAgaGlnaERpdi5hcHBlbmRDaGlsZChoaWdoUCk7XHJcblxyXG4gIGNvbnN0IGxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxvd0Rpdi5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcclxuXHJcbiAgY29uc3QgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBsb3dQLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBsb3dQLnRleHRDb250ZW50ID0gYCR7bG93fcKwYDtcclxuICBsb3dEaXYuYXBwZW5kQ2hpbGQobG93UCk7XHJcblxyXG4gIHRlbXBlcmF0dXJlc0Rpdi5hcHBlbmQoaGlnaERpdiwgbG93RGl2KTtcclxuXHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NoYW5jZS1vZi1yYWluJyk7XHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjb3JJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nLCAnd2hpdGUtZmlsdGVyJyk7XHJcbiAgY29ySWNvbkltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9kcm9wbGV0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgY29ySWNvbkRpdi5hcHBlbmRDaGlsZChjb3JJY29uSW1nKTtcclxuICBjb3JEaXYuYXBwZW5kQ2hpbGQoY29ySWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IHBlcmNlbnRhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHBlcmNlbnRhZ2UuY2xhc3NMaXN0LmFkZCgncGVyY2VudGFnZScpO1xyXG4gIHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBgJHtjb3J9JWA7XHJcbiAgcGVyY2VudGFnZURpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlKTtcclxuICBjb3JEaXYuYXBwZW5kQ2hpbGQocGVyY2VudGFnZURpdik7XHJcblxyXG4gIGNvbnN0IG51bWJlcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBudW1iZXJzRGl2LmNsYXNzTGlzdC5hZGQoJ251bWJlcnMnKTtcclxuICBudW1iZXJzRGl2LmFwcGVuZCh0ZW1wZXJhdHVyZXNEaXYsIGNvckRpdik7XHJcbiAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChudW1iZXJzRGl2KTtcclxuXHJcbiAgZm9yZWNhc3RCYXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBmb3JlY2FzdEJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlM0RheUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aHJlZURheUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NtYWxsJyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJzMtRGF5IEZvcmVjYXN0JztcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQodGhyZWVEYXlGb3JlY2FzdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aHJlZURheUZvcmVjYXN0TGlzdC5jbGFzc0xpc3QuYWRkKCd0aHJlZS1kYXktZm9yZWNhc3QtbGlzdCcpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RMaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIHRocmVlRGF5Rm9yZWNhc3QuYXBwZW5kKHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdiwgdGhyZWVEYXlGb3JlY2FzdExpc3QpO1xyXG5cclxuICByZXR1cm4gdGhyZWVEYXlGb3JlY2FzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZTNEYXlGb3JlY2FzdExheW91dChxdWVyeSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aHJlZS1kYXktZm9yZWNhc3QtbGlzdCcpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBoaWdoID0gTWF0aC5mbG9vcihxdWVyeS50aHJlZURheUZvcmVjYXN0LmhpZ2hbaV0pO1xyXG4gICAgY29uc3QgbG93ID0gTWF0aC5mbG9vcihxdWVyeS50aHJlZURheUZvcmVjYXN0Lmxvd1tpXSk7XHJcbiAgICBjb25zdCBkYXkgPSBxdWVyeS50aHJlZURheUZvcmVjYXN0LmRheXNbaV07XHJcbiAgICBjb25zdCBjb3IgPSBxdWVyeS50aHJlZURheUZvcmVjYXN0LmNvcltpXTtcclxuICAgIGNvbnN0IGRlc2MgPSBxdWVyeS50aHJlZURheUZvcmVjYXN0LndlYXRoZXJEZXNjcmlwdGlvbltpXTtcclxuICAgIGNvbnN0IGljb24gPSBmZXRjaFdlYXRoZXJJY29uKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3Qud2VhdGhlckNvZGVbaV0sIDEpO1xyXG4gICAgY29uc3QgYmFyID0gY3JlYXRlRGFpbHlGb3JlY2FzdEJhcihoaWdoLCBsb3csIGRheSwgY29yLCBkZXNjLCBpY29uKTtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFyKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZUNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aHJlZS1kYXktZm9yZWNhc3QtbGlzdCcpWzBdO1xyXG4gIHRocmVlRGF5Rm9yZUNhc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGRpdGlvbmFsRm9yZWNhc3QoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2FkZGl0aW9uYWwtZm9yZWNhc3QnO1xyXG5cclxuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGNyZWF0ZUhvdXJseUZvcmVjYXN0KCk7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGNyZWF0ZTNEYXlGb3JlY2FzdCgpO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZChob3VybHlGb3JlY2FzdCwgdGhyZWVEYXlGb3JlY2FzdCk7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUWiwgZmV0Y2hXZWF0aGVySWNvbiB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5mdW5jdGlvbiBwcmludE91dEhpZ2gocXVlcnkpIHtcclxuICBjb25zdCBoaWdoID0gTWF0aC5mbG9vcihxdWVyeS5jdXJyZW50V2VhdGhlci5kYWlseUhpZ2gpO1xyXG4gIHJldHVybiBgJHtoaWdofcKwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRMb3cocXVlcnkpIHtcclxuICBjb25zdCBsb3cgPSBNYXRoLmZsb29yKHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLmRhaWx5TG93KTtcclxuICByZXR1cm4gYCR7bG93fcKwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRDdXJyZW50VGVtcChxdWVyeSkge1xyXG4gIGNvbnN0IHRlbXAgPSBNYXRoLmZsb29yKHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLmN1cnJlbnRUZW1wKTtcclxuICByZXR1cm4gYCR7dGVtcH3CsGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0Q2l0eShxdWVyeSkge1xyXG4gIHJldHVybiBxdWVyeS5jaXR5TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXREZXNjcmlwdGlvbihxdWVyeSkge1xyXG4gIHJldHVybiBxdWVyeS5jdXJyZW50V2VhdGhlci53ZWF0aGVyRGVzY3JpcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0V2VhdGhlckljb24ocXVlcnkpIHtcclxuICBjb25zdCBsb2NhbEhvdXIgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgcXVlcnkudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgY29kZSA9IHF1ZXJ5LmhvdXJseS53ZWF0aGVyY29kZVtsb2NhbEhvdXJdO1xyXG4gIGNvbnN0IHZhbHVlID0gcXVlcnkuaG91cmx5LmlzX2RheVtsb2NhbEhvdXJdO1xyXG5cclxuICByZXR1cm4gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50Q2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNpdHknKTtcclxuICBjdXJyZW50Q2l0eS50ZXh0Q29udGVudCA9IHByaW50T3V0Q2l0eShxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGVtcCcpO1xyXG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gcHJpbnRPdXRDdXJyZW50VGVtcChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGRhaWx5SGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWhpZ2gnKTtcclxuICBkYWlseUhpZ2gudGV4dENvbnRlbnQgPSBwcmludE91dEhpZ2gocXVlcnkpO1xyXG5cclxuICBjb25zdCBkYWlseUxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWxvdycpO1xyXG4gIGRhaWx5TG93LnRleHRDb250ZW50ID0gcHJpbnRPdXRMb3cocXVlcnkpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0LWRlc2NyaXB0aW9uJyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByaW50T3V0RGVzY3JpcHRpb24ocXVlcnkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyJyk7XHJcbiAgY3VycmVudFdlYXRoZXJJY29uLnNyYyA9IHByaW50T3V0V2VhdGhlckljb24ocXVlcnkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDdXJyZW50Rm9yZWNhc3QoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2N1cnJlbnQtZm9yZWNhc3QnO1xyXG5cclxuICBjb25zdCBjdXJyZW50Q2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjdXJyZW50Q2l0eS5pZCA9ICdjdXJyZW50LWNpdHknO1xyXG4gIGN1cnJlbnRDaXR5RGl2LmFwcGVuZENoaWxkKGN1cnJlbnRDaXR5KTtcclxuXHJcbiAgY29uc3QgY3VycmVudERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjdXJyZW50V2VhdGhlckltZy5pZCA9ICdjdXJyZW50LXdlYXRoZXInO1xyXG4gIGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVySW1nKTtcclxuXHJcbiAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbScpO1xyXG5cclxuICBjb25zdCBjdXJyZW50VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGN1cnJlbnRUZW1wLmNsYXNzTGlzdC5hZGQoJ2xhcmdlJywgJ3RlbXAnKTtcclxuICBjdXJyZW50VGVtcC5pZCA9ICdjdXJyZW50LXRlbXAnO1xyXG4gIGN1cnJlbnRUZW1wRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXYpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb24uaWQgPSAnZm9yZWNhc3QtZGVzY3JpcHRpb24nO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REZXNjcmlwdGlvbik7XHJcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGVzY3JpcHRpb25EaXYpO1xyXG5cclxuICBjb25zdCBoaWdoTG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGlnaExvd0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWdoLWxvdycpO1xyXG5cclxuICBjb25zdCBoaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaGlnaFAudGV4dENvbnRlbnQgPSAnSDogJztcclxuXHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBoaWdoLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBoaWdoLmlkID0gJ2N1cnJlbnQtaGlnaCc7XHJcbiAgaGlnaFAuYXBwZW5kQ2hpbGQoaGlnaCk7XHJcbiAgaGlnaERpdi5hcHBlbmRDaGlsZChoaWdoUCk7XHJcblxyXG4gIGNvbnN0IGxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMOiAnO1xyXG5cclxuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbG93LmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBsb3cuaWQgPSAnY3VycmVudC1sb3cnO1xyXG4gIGxvd1AuYXBwZW5kQ2hpbGQobG93KTtcclxuICBsb3dEaXYuYXBwZW5kQ2hpbGQobG93UCk7XHJcblxyXG4gIGhpZ2hMb3dEaXYuYXBwZW5kKGhpZ2hEaXYsIGxvd0Rpdik7XHJcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGhpZ2hMb3dEaXYpO1xyXG5cclxuICBjdXJyZW50RGV0YWlsc0Rpdi5hcHBlbmQoY3VycmVudFdlYXRoZXJEaXYsIGJvdHRvbURpdik7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKGN1cnJlbnRDaXR5RGl2LCBjdXJyZW50RGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImZ1bmN0aW9uIGpvaW5RdWVyeShxdWVyeSkge1xyXG4gIGNvbnN0IG5ld1F1ZXJ5ID0gcXVlcnkuc3BsaXQoJywgJykuam9pbigpO1xyXG4gIHJldHVybiBuZXdRdWVyeTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tCeVBvc3RhbENvZGUocXVlcnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvemlwP3ppcD0ke3F1ZXJ5fSZhcHBpZD04ZGQ0NDdmMGVmYWU4MzI0ZjE1YzI0ZjJlZmRkN2U5ZmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyByZXR1cm4gZXJyb3JcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQnlDaXR5KHF1ZXJ5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7cXVlcnl9JmxpbWl0PTUmYXBwaWQ9OGRkNDQ3ZjBlZmFlODMyNGYxNWMyNGYyZWZkZDdlOWZgLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9LCAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gcmV0dXJuIGVycm9yXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjaGVja1F1ZXJ5KHF1ZXJ5KSB7XHJcbiAgLy8gYnJlYWsgdXAgcXVlcnkgaW50byBjb3JyZWN0IHBhcnRzIChlZy4gY2l0eSwgc3RhdGUsIGNvdW50cnksIHppcCBjb2RlKVxyXG4gIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gam9pblF1ZXJ5KHF1ZXJ5KTtcclxuICBjb25zdCBwb3N0YWxDb2RlUmVzdWx0ID0gYXdhaXQgY2hlY2tCeVBvc3RhbENvZGUoc2VhcmNoUXVlcnkpO1xyXG4gIGNvbnN0IGNpdHlSZXN1bHQgPSBhd2FpdCBjaGVja0J5Q2l0eShzZWFyY2hRdWVyeSk7XHJcblxyXG4gIGlmICghKHBvc3RhbENvZGVSZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikgJiYgcG9zdGFsQ29kZVJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgIC8vIGRpc3BsYXkgYSBjbGlja2FibGUgcmVzdWx0IGNvbnRhaW5pbmcgY2l0eSB3ZWF0aGVyIGluZm9cclxuICAgIGNvbnNvbGUubG9nKCd3ZSBmb3VuZCBhIHppcCBjb2RlIHRoYXQgbWF0Y2hlcyEgcmVzdWx0OiAnLCBwb3N0YWxDb2RlUmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gcG9zdGFsQ29kZVJlc3VsdDtcclxuICB9IGlmICghKGNpdHlSZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikgJiYgY2l0eVJlc3VsdC5sZW5ndGggIT09IDApIHtcclxuICAgIC8vIGRpc3BsYXkgYSBjbGlja2FibGUgcmVzdWx0IGNvbnRhaW5pbmcgY2l0eSB3ZWF0aGVyIGluZm9cclxuICAgIGNvbnNvbGUubG9nKCd3ZSBmb3VuZCBhIGNpdHkgdGhhdCBtYXRjaGVzISByZXN1bHQ6ICcsIGNpdHlSZXN1bHQpO1xyXG5cclxuICAgIHJldHVybiBjaXR5UmVzdWx0O1xyXG4gIH1cclxuICAvLyBkaXNwbGF5IGFuIGVycm9yIHRoYXQgdGhlIHNlYXJjaCBxdWVyeSB3YXMgbm90IGZvdW5kIGFsb25nIHdpdGggc2VhcmNoIHRpcHNcclxuICBjb25zb2xlLmxvZygnbm8gY2l0eSBmb3VuZCA6KCcpO1xyXG5cclxuICByZXR1cm4gYE5vIHJlc3VsdHMgZm91bmQgZm9yICcke3F1ZXJ5fSdgO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VFooZGF0ZSwgdHpTdHJpbmcpIHtcclxuICByZXR1cm4gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHRpbWVab25lOiB0elN0cmluZyB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RlRvQyh0ZW1wKSB7XHJcbiAgcmV0dXJuICh0ZW1wIC0gMzIpICogKDUgLyA5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoV2VhdGhlckljb24oY29kZSwgaXNEYXkpIHtcclxuICBsZXQgc3JjO1xyXG4gIGNvbnN0IHN0cmluZyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy93ZWF0aGVyLWljb25zLyc7XHJcbiAgc3dpdGNoIChjb2RlKSB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIGlmIChpc0RheSA9PT0gMSkge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31jbGVhci1za3ktc3Vubnkuc3ZnYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzcmMgPSBgJHtzdHJpbmd9Y2xlYXItc2t5LW1vb24uc3ZnYDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKGlzRGF5ID09PSAxKSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfW1vc3RseS1jbGVhci1zdW5ueS5zdmdgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31tb3N0bHktY2xlYXItbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICBpZiAoaXNEYXkgPT09IDEpIHtcclxuICAgICAgICBzcmMgPSBgJHtzdHJpbmd9cGFydGx5LWNsb3VkeS1zdW5ueS5zdmdgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31wYXJ0bHktY2xvdWR5LW1vb24uc3ZnYDtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfW92ZXJjYXN0LnN2Z2A7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0NTpcclxuICAgIGNhc2UgNDg6XHJcbiAgICAgIHNyYyA9IGAke3N0cmluZ31mb2cuc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDUxOlxyXG4gICAgY2FzZSA1MzpcclxuICAgIGNhc2UgNTU6XHJcbiAgICBjYXNlIDU2OlxyXG4gICAgY2FzZSA1NzpcclxuICAgIGNhc2UgODA6XHJcbiAgICBjYXNlIDgxOlxyXG4gICAgY2FzZSA4MjpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfWRyaXp6bGUuc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDYxOlxyXG4gICAgY2FzZSA2MzpcclxuICAgIGNhc2UgNjU6XHJcbiAgICBjYXNlIDY2OlxyXG4gICAgY2FzZSA2NzpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfXJhaW4uc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDcxOlxyXG4gICAgY2FzZSA3MzpcclxuICAgIGNhc2UgNzU6XHJcbiAgICBjYXNlIDc3OlxyXG4gICAgY2FzZSA4NTpcclxuICAgIGNhc2UgODY6XHJcbiAgICAgIHNyYyA9IGAke3N0cmluZ31zbm93LnN2Z2A7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA5NTpcclxuICAgIGNhc2UgOTY6XHJcbiAgICBjYXNlIDk5OlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9dGh1bmRlcnN0b3JtLnN2Z2A7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3JjO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXZWF0aGVyRGVzY3JpcHRpb24oY29kZSkge1xyXG4gIGNvbnN0IHdlYXRoZXJDb2RlcyA9IHtcclxuICAgIDA6ICdDbGVhciBTa3knLFxyXG4gICAgMTogJ01haW5seSBDbGVhcicsXHJcbiAgICAyOiAnUGFydGx5IENsb3VkeScsXHJcbiAgICAzOiAnT3ZlcmNhc3QnLFxyXG4gICAgNDU6ICdGb2cnLFxyXG4gICAgNDg6ICdEZXBvc2l0aW5nIFJpbWUgRm9nJyxcclxuICAgIDUxOiAnTGlnaHQgRHJpenpsZScsXHJcbiAgICA1MzogJ01vZGVyYXRlIERyaXp6bGUnLFxyXG4gICAgNTU6ICdEZW5zZSBEcml6emxlJyxcclxuICAgIDU2OiAnRnJlZXppbmcsIExpZ2h0IERyaXp6bGUnLFxyXG4gICAgNTc6ICdGcmVlemluZywgRGVuc2UgRHJpenpsZScsXHJcbiAgICA2MTogJ0xpZ2h0IFJhaW4nLFxyXG4gICAgNjM6ICdNb2RlcmF0ZSBSYWluJyxcclxuICAgIDY1OiAnSGVhdnkgUmFpbicsXHJcbiAgICA2NjogJ0ZyZWV6aW5nLCBMaWdodCBSYWluJyxcclxuICAgIDY3OiAnRnJlZXppbmcsIEhlYXZ5IFJhaW4nLFxyXG4gICAgNzE6ICdMaWdodCBTbm93JyxcclxuICAgIDczOiAnTW9kZXJhdGUgU25vdycsXHJcbiAgICA3NTogJ0hlYXZ5IFNub3cnLFxyXG4gICAgNzc6ICdTbm93IEdyYWlucycsXHJcbiAgICA4MDogJ0xpZ2h0IFNob3dlcnMnLFxyXG4gICAgODE6ICdNb2RlcmF0ZSBTaG93ZXJzJyxcclxuICAgIDgyOiAnSGVhdnkgU2hvd2VycycsXHJcbiAgICA4NTogJ0xpZ2h0IFNub3cgU2hvd2VyJyxcclxuICAgIDg2OiAnSGVhdnkgU25vdyBTaG93ZXInLFxyXG4gICAgOTU6ICdUaHVuZGVyc3Rvcm0nLFxyXG4gICAgOTY6ICdUaHVuZGVyc3Rvcm0gYW5kIExpZ2h0IEhhaWwnLFxyXG4gICAgOTk6ICdUaHVuZGVyc3Rvcm0gYW5kIEhlYXZ5IEhhaWwnLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB3ZWF0aGVyQ29kZXNbY29kZV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERheShjb2RlKSB7XHJcbiAgY29uc3QgZGF5cyA9IHtcclxuICAgIDA6ICdTdW5kYXknLFxyXG4gICAgMTogJ01vbmRheScsXHJcbiAgICAyOiAnVHVlc2RheScsXHJcbiAgICAzOiAnV2VkbmVzZGF5JyxcclxuICAgIDQ6ICdUaHVyc2RheScsXHJcbiAgICA1OiAnRnJpZGF5JyxcclxuICAgIDY6ICdTYXR1cmRheScsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRheXNbY29kZV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKHF1ZXJ5KSB7XHJcbiAgY29uc3QgY3VycmVudEhvdXIgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgcXVlcnkudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBxdWVyeS5ob3VybHkudGVtcGVyYXR1cmVfMm1bY3VycmVudEhvdXJdO1xyXG4gIGNvbnN0IGRhaWx5SGlnaCA9IHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heFswXTtcclxuICBjb25zdCBkYWlseUxvdyA9IHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21pblswXTtcclxuICBjb25zdCB3ZWF0aGVyQ29kZSA9IHF1ZXJ5LmhvdXJseS53ZWF0aGVyY29kZVtjdXJyZW50SG91cl07XHJcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZ2V0V2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJDb2RlKTtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uID0gcXVlcnkuaG91cmx5LnByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlbY3VycmVudEhvdXJdO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gcXVlcnkuaG91cmx5LnJlbGF0aXZlaHVtaWRpdHlfMm1bY3VycmVudEhvdXJdO1xyXG4gIGNvbnN0IHdpbmQgPSBxdWVyeS5ob3VybHkud2luZHNwZWVkXzEwbVtjdXJyZW50SG91cl07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjdXJyZW50VGVtcCwgZGFpbHlIaWdoLCBkYWlseUxvdywgd2VhdGhlckRlc2NyaXB0aW9uLCBwcmVjaXBpdGF0aW9uLCBodW1pZGl0eSwgd2luZCxcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnRXZWF0aGVyKHF1ZXJ5KSB7XHJcbiAgY29uc3QgbGF0aXR1ZGUgPSBxdWVyeS5sYXQ7XHJcbiAgY29uc3QgbG9uZ2l0dWRlID0gcXVlcnkubG9uO1xyXG4gIGNvbnN0IGNpdHlOYW1lID0gcXVlcnkubmFtZTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0maG91cmx5PXRlbXBlcmF0dXJlXzJtLHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHkscmVsYXRpdmVodW1pZGl0eV8ybSx3ZWF0aGVyY29kZSx3aW5kc3BlZWRfMTBtLGlzX2RheSZkYWlseT13ZWF0aGVyY29kZSx0ZW1wZXJhdHVyZV8ybV9tYXgsdGVtcGVyYXR1cmVfMm1fbWluLHV2X2luZGV4X21heCxwcmVjaXBpdGF0aW9uX3Byb2JhYmlsaXR5X21heCZ0ZW1wZXJhdHVyZV91bml0PWZhaHJlbmhlaXQmd2luZHNwZWVkX3VuaXQ9bXBoJnByZWNpcGl0YXRpb25fdW5pdD1pbmNoJnRpbWV6b25lPWF1dG9gKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9LCAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGNyZWF0ZUN1cnJlbnRXZWF0aGVyKHJlc3VsdCk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHsgY2l0eU5hbWUsIC4uLnJlc3VsdCwgY3VycmVudFdlYXRoZXIgfTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRlZmF1bHRMb2NhdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9NTEuNTA4NSZsb25naXR1ZGU9LTAuMTI1NyZob3VybHk9dGVtcGVyYXR1cmVfMm0scHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eSxyZWxhdGl2ZWh1bWlkaXR5XzJtLHdlYXRoZXJjb2RlLHdpbmRzcGVlZF8xMG0saXNfZGF5JmRhaWx5PXdlYXRoZXJjb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sdXZfaW5kZXhfbWF4LHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4JnRlbXBlcmF0dXJlX3VuaXQ9ZmFocmVuaGVpdCZ3aW5kc3BlZWRfdW5pdD1tcGgmcHJlY2lwaXRhdGlvbl91bml0PWluY2gmdGltZXpvbmU9YXV0bycpO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGNyZWF0ZUN1cnJlbnRXZWF0aGVyKHJlc3VsdCk7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9ICdMb25kb24nO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSB7IGNpdHlOYW1lLCAuLi5yZXN1bHQsIGN1cnJlbnRXZWF0aGVyIH07XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRUaHJlZURheUZvcmVjYXN0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcclxuICBjb25zdCBoaWdoID0gW107XHJcbiAgY29uc3QgbG93ID0gW107XHJcbiAgY29uc3QgY29yID0gW107XHJcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gW107XHJcbiAgY29uc3Qgd2VhdGhlckNvZGUgPSBbXTtcclxuICBjb25zdCBkYXlzID0gW107XHJcbiAgLy8gZ2V0IHRlbXBzXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpICs9IDEpIHtcclxuICAgIGhpZ2gucHVzaChxdWVyeS5kYWlseS50ZW1wZXJhdHVyZV8ybV9tYXhbaV0pO1xyXG4gICAgbG93LnB1c2gocXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluW2ldKTtcclxuICAgIGNvci5wdXNoKHF1ZXJ5LmRhaWx5LnByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4W2ldKTtcclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5wdXNoKGdldFdlYXRoZXJEZXNjcmlwdGlvbihxdWVyeS5kYWlseS53ZWF0aGVyY29kZVtpXSkpO1xyXG4gICAgd2VhdGhlckNvZGUucHVzaChxdWVyeS5kYWlseS53ZWF0aGVyY29kZVtpXSk7XHJcbiAgfVxyXG4gIC8vIGFzc2lnbiBkYXlzXHJcbiAgZm9yIChsZXQgaSA9IGRheSArIDE7IGkgPCAoZGF5ICsgNCk7IGkgKz0gMSkge1xyXG4gICAgZGF5cy5wdXNoKGdldERheShpICUgNykpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGhpZ2gsIGxvdywgY29yLCBkYXlzLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHdlYXRoZXJDb2RlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERlZmF1bHRXZWF0aGVyKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRlZmF1bHRMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBhd2FpdCBnZXRUaHJlZURheUZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gIHJldHVybiB7IC4uLmN1cnJlbnRXZWF0aGVyRGF0YSwgdGhyZWVEYXlGb3JlY2FzdCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaEN1cnJlbnRXZWF0aGVyKHF1ZXJ5KTtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gYXdhaXQgZ2V0VGhyZWVEYXlGb3JlY2FzdChjdXJyZW50V2VhdGhlckRhdGEpO1xyXG5cclxuICByZXR1cm4geyAuLi5jdXJyZW50V2VhdGhlckRhdGEsIHRocmVlRGF5Rm9yZWNhc3QgfTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQ3VycmVudEZvcmVjYXN0LCB7IHVwZGF0ZUN1cnJlbnRGb3JlY2FzdExheW91dCB9IGZyb20gJy4vY3VycmVudC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5pbXBvcnQgY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMsIHsgdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dCB9IGZyb20gJy4vYWRkaXRpb25hbC1jdXJyZW50LWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjcmVhdGVBZGRpdGlvbmFsRm9yZWNhc3QsIHsgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0LCB1cGRhdGVIb3VybHlGb3JlY2FzdExheW91dCB9IGZyb20gJy4vYWRkaXRpb25hbC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5pbXBvcnQgY2hlY2tRdWVyeSBmcm9tICcuL2ZldGNoLWNpdGllcyc7XHJcbmltcG9ydCBmZXRjaFdlYXRoZXIsIHsgY29udmVydEZUb0MsIGZldGNoRGVmYXVsdFdlYXRoZXIgfSBmcm9tICcuL2ZldGNoLXdlYXRoZXInO1xyXG5cclxubGV0IHRlbXBEYXRhID0gW107XHJcblxyXG5mdW5jdGlvbiBjbGVhclRpcHMoKSB7XHJcbiAgY29uc3QgdGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpcHMtY29udGFpbmVyJylbMF07XHJcbiAgdGlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2l0eVJlc3VsdFRleHQocmVzdWx0KSB7XHJcbiAgaWYgKHJlc3VsdC56aXAgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY2l0eU5hbWUgPSByZXN1bHQubmFtZTtcclxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHJlc3VsdDtcclxuICAgIGNvbnN0IHsgY291bnRyeSB9ID0gcmVzdWx0O1xyXG5cclxuICAgIHJldHVybiBgJHtjaXR5TmFtZX0sICR7c3RhdGV9LCAke2NvdW50cnl9YDtcclxuICB9XHJcbiAgY29uc3QgeyB6aXAgfSA9IHJlc3VsdDtcclxuICBjb25zdCBjaXR5TmFtZSA9IHJlc3VsdC5uYW1lO1xyXG4gIGNvbnN0IHsgY291bnRyeSB9ID0gcmVzdWx0O1xyXG5cclxuICByZXR1cm4gYCR7emlwfSwgJHtjaXR5TmFtZX0sICR7Y291bnRyeX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVRdWVyeVJlc3VsdChzZWFyY2hSZXN1bHQpIHtcclxuICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2xvY2F0aW9uLW1hcmtlci5zdmcnO1xyXG4gIGxvY2F0aW9uSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgY29uc3QgdGV4dFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRleHRSZXN1bHQudGV4dENvbnRlbnQgPSBjcmVhdGVDaXR5UmVzdWx0VGV4dChzZWFyY2hSZXN1bHQpO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXN1bHQuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLXJlc3VsdCcpO1xyXG5cclxuICByZXN1bHQuYXBwZW5kKGxvY2F0aW9uSWNvbiwgdGV4dFJlc3VsdCk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpcCh0ZXh0KSB7XHJcbiAgY29uc3QgdGlwSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwSW1nRGl2LmNsYXNzTGlzdC5hZGQoJ3RpcC1pbWcnKTtcclxuICBjb25zdCB0aXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB0aXBJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC90aXAuc3ZnJztcclxuICB0aXBJbWdEaXYuYXBwZW5kQ2hpbGQodGlwSW1nKTtcclxuXHJcbiAgY29uc3QgdGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLmlubmVySFRNTCA9IGAke3RleHR9YDtcclxuICB0aXBEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIGNvbnN0IHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpcC5jbGFzc0xpc3QuYWRkKCd0aXAnKTtcclxuICB0aXAuYXBwZW5kKHRpcEltZ0RpdiwgdGlwRGl2KTtcclxuXHJcbiAgcmV0dXJuIHRpcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNlYXJjaEVycm9yKGlucHV0KSB7XHJcbiAgY29uc29sZS5sb2coYCR7aW5wdXR9YCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG4gIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnbWVkaXVtJyk7XHJcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGAke2lucHV0fWA7XHJcbiAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuXHJcbiAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVmaW5lU3VnZ2VzdGlvbnMoKSB7XHJcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdUcnkgdGhlIGZvbGxvd2luZyB0aXBzIGZvciBtb3JlIGFjY3VyYXRlIHJlc3VsdHM6JztcclxuXHJcbiAgY29uc3QgdGV4dE9uZSA9ICdFbnRlciBjaXR5IGFuZCBjb3VudHJ5IGNvZGUgKGVnLiBFc3NleCwgR0IpJztcclxuICBjb25zdCB0aXBPbmUgPSBjcmVhdGVUaXAodGV4dE9uZSk7XHJcblxyXG4gIGNvbnN0IHRleHRUd28gPSAnRm9yIFVTIGNpdGllcywgZW50ZXIgY2l0eSBuYW1lLCBzdGF0ZSwgYW5kIGNvdW50cnkgY29kZSAoZWcuIEVzc2V4LCBNQSwgVVMpJztcclxuICBjb25zdCB0aXBUd28gPSBjcmVhdGVUaXAodGV4dFR3byk7XHJcblxyXG4gIGNvbnN0IHRpcHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXBzLWNvbnRhaW5lcicpWzBdO1xyXG4gIHRpcHNDb250YWluZXIuYXBwZW5kKGhlYWRsaW5lLCB0aXBPbmUsIHRpcFR3byk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFN1Z2dlc3Rpb25zKCkge1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NtYWxsJyk7XHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnVHJ5IHRoZSBmb2xsb3dpbmcgdGlwcyB0byByZWZpbmUgeW91ciBzZWFyY2g6JztcclxuXHJcbiAgY29uc3QgdGV4dE9uZSA9ICdFbnN1cmUgdGhlIHNwZWxsaW5nIG9mIHlvdXIgc2VhcmNoIHF1ZXJ5IGlzIGNvcnJlY3QnO1xyXG4gIGNvbnN0IHRpcE9uZSA9IGNyZWF0ZVRpcCh0ZXh0T25lKTtcclxuXHJcbiAgY29uc3QgdGV4dFR3byA9ICdGb3IgY2l0aWVzIGluIHRoZSBVUywgZW50ZXIgY2l0eSBmb2xsb3dlZCBieSBzdGF0ZSBhbmQgY291bnRyeSBjb2RlIChlZy4gTG9zIEFuZ2VsZXMsIENBLCBVUyknO1xyXG4gIGNvbnN0IHRpcFR3byA9IGNyZWF0ZVRpcCh0ZXh0VHdvKTtcclxuXHJcbiAgY29uc3QgdGV4dFRocmVlID0gJ0ZvciBjaXRpZXMgb3V0c2lkZSB0aGUgVVMsIGVudGVyIGNpdHkgZm9sbG93ZWQgYnkgY291bnRyeSBjb2RlIChlZy4gTG9uZG9uLCBHQiknO1xyXG4gIGNvbnN0IHRpcFRocmVlID0gY3JlYXRlVGlwKHRleHRUaHJlZSk7XHJcblxyXG4gIGNvbnN0IHRleHRGb3VyID0gJ1RvIHNlYXJjaCBieSBwb3N0YWwvemlwIGNvZGUsIGVudGVyIHBvc3RhbC96aXAgY29kZSBmb2xsb3dlZCBieSBjb3VudHJ5IGNvZGUgKGVnLiAzMzcwMSwgVVMpJztcclxuICBjb25zdCB0aXBGb3VyID0gY3JlYXRlVGlwKHRleHRGb3VyKTtcclxuXHJcbiAgY29uc3QgdGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpcHMtY29udGFpbmVyJylbMF07XHJcbiAgdGlwc0NvbnRhaW5lci5hcHBlbmQoaGVhZGxpbmUsIHRpcE9uZSwgdGlwVHdvLCB0aXBUaHJlZSwgdGlwRm91cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEluc3RydWN0aW9ucygpIHtcclxuICBjb25zdCB0ZXh0T25lID0gJ1RvIHNlYXJjaCBmb3IgY2l0eSBpbiB0aGUgVVMsIGVudGVyIGNpdHksIHN0YXRlLCBhbmQgY291bnRyeSBjb2RlIChlZy4gUGhvZW5peCwgQVosIFVTKSc7XHJcbiAgY29uc3QgdGlwT25lID0gY3JlYXRlVGlwKHRleHRPbmUpO1xyXG5cclxuICBjb25zdCB0ZXh0VHdvID0gJ1RvIHNlYXJjaCBmb3IgY2l0eSBvdXRzaWRlIFVTLCBlbnRlciBjaXR5IGFuZCBjb3VudHJ5IGNvZGUgKGVnLiBMb25kb24sIEdCKSc7XHJcbiAgY29uc3QgdGlwVHdvID0gY3JlYXRlVGlwKHRleHRUd28pO1xyXG5cclxuICBjb25zdCB0ZXh0VGhyZWUgPSAnWW91IGNhbiBhbHNvIHNlYXJjaCBieSBwb3N0YWwvemlwIGNvZGUgZm9sbG93ZWQgYnkgY291bnRyeSBjb2RlIChlZy4gMzM3MDEsIFVTKSc7XHJcbiAgY29uc3QgdGlwVGhyZWUgPSBjcmVhdGVUaXAodGV4dFRocmVlKTtcclxuXHJcbiAgY29uc3QgdGV4dEZvdXIgPSAnVXNlIDxhIGhyZWY9XFwnaHR0cHM6Ly93d3cuaXNvLm9yZy9vYnAvdWkvI3NlYXJjaFxcJyB0YXJnZXQ9XFwnX2JsYW5rXFwnPklTTyAzMTY2IGNvdW50cnkgY29kZXM8L2E+IHdoZW4gc2VhcmNoaW5nIGJ5IGNvdW50cnknO1xyXG4gIGNvbnN0IHRpcEZvdXIgPSBjcmVhdGVUaXAodGV4dEZvdXIpO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZCgndGlwcy1jb250YWluZXInKTtcclxuICBpbnN0cnVjdGlvbnMuYXBwZW5kKHRpcE9uZSwgdGlwVHdvLCB0aXBUaHJlZSwgdGlwRm91cik7XHJcblxyXG4gIHJldHVybiBpbnN0cnVjdGlvbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNlYXJjaE1vZGFsKCkge1xyXG4gIGNvbnN0IG1vYmlsZVNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iaWxlLXNlYXJjaC1tb2RhbCcpWzBdO1xyXG4gIGlmIChtb2JpbGVTZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICBtb2JpbGVTZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNvbnN0IG91dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpcHMtY29udGFpbmVyJylbMF07XHJcbiAgICBvdXRwdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoSW5zdHJ1Y3Rpb25zKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW1vYmlsZScpO1xyXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNsZWFyVGlwcygpO1xyXG4gICAgbW9iaWxlU2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTZXR0aW5nc01vZGFsKCkge1xyXG4gIGNvbnN0IHNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2JpbGUtc2V0dGluZ3MtbW9kYWwnKVswXTtcclxuICBpZiAoc2V0dGluZ3NNb2RhbC5pZCA9PT0gJ2hpZGRlbicpIHtcclxuICAgIHNldHRpbmdzTW9kYWwuaWQgPSAnJztcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0dGluZ3NNb2RhbC5pZCA9ICdoaWRkZW4nO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTZWFyY2hSZXN1bHRzKHJlc3VsdHMpIHtcclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cy1jb250YWluZXInKVswXTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0cykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IHJlc3VsdHNbaV07XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gY3JlYXRlUXVlcnlSZXN1bHQocXVlcnkpO1xyXG4gICAgICBxdWVyeVJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICB0b2dnbGVTZWFyY2hNb2RhbCgpO1xyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZldGNoIHdlYXRoZXIgZnVuY3Rpb25cclxuICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgd2VhdGhlciEnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFdlYXRoZXIocXVlcnkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gICAgICAgIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyeVJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gY3JlYXRlUXVlcnlSZXN1bHQocmVzdWx0cyk7XHJcbiAgICBxdWVyeVJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgdG9nZ2xlU2VhcmNoTW9kYWwoKTtcclxuICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIHdlYXRoZXIhJyk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJ5UmVzdWx0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNpdHlJbnB1dEZvcm1Nb2JpbGUoKSB7XHJcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoJyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmZvciA9ICdjaXR5LW1vYmlsZSc7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9ICdjaXR5LW1vYmlsZSc7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggY2l0eSc7XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrUXVlcnkoaW5wdXQudmFsdWUpO1xyXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICBjbGVhclRpcHMoKTtcclxuICAgICAgZGlzcGxheVNlYXJjaFJlc3VsdHMocmVzdWx0KTtcclxuICAgICAgY3JlYXRlUmVmaW5lU3VnZ2VzdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGlwcygpO1xyXG4gICAgICBkaXNwbGF5U2VhcmNoRXJyb3IocmVzdWx0KTtcclxuICAgICAgY3JlYXRlU2VhcmNoU3VnZ2VzdGlvbnMoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGVTd2l0Y2godG9nZ2xlTmFtZSkge1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcclxuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRvZ2dsZU5hbWUpO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgaW5wdXQuaWQgPSB0b2dnbGVOYW1lO1xyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJywgJ3JvdW5kJyk7XHJcblxyXG4gIGxhYmVsLmFwcGVuZChpbnB1dCwgc3Bhbik7XHJcblxyXG4gIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tUZW1wQ29udmVyc2lvbigpIHtcclxuICBjb25zdCBmY1N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICBjb25zdCB0ZW1wTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wLW1vZGUnKTtcclxuXHJcbiAgaWYgKCEoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbHNpdXMnKSkpIHtcclxuICAgIGNvbnN0IHRlbXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcCcpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XHJcbiAgICB0ZW1wTW9kZS50ZXh0Q29udGVudCA9ICdGYWhyZW5oZWl0JztcclxuICAgIGZjU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3Qgb3JpZ2luYWwgPSB0ZW1wc1tpXS50ZXh0Q29udGVudDtcclxuICAgICAgY29uc3Qgc3Vic3RyaW5nID0gb3JpZ2luYWwuc2xpY2UoMCwgb3JpZ2luYWwubGVuZ3RoIC0gMSk7XHJcbiAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHN1YnN0cmluZywgMTApO1xyXG4gICAgICBjb25zdCBjb252ZXJ0ZWQgPSBgJHtNYXRoLmZsb29yKGNvbnZlcnRGVG9DKG51bSkpfcKwYDtcclxuICAgICAgdGVtcERhdGEucHVzaCh0ZW1wc1tpXS50ZXh0Q29udGVudCk7XHJcbiAgICAgIHRlbXBzW2ldLnRleHRDb250ZW50ID0gY29udmVydGVkO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCB0ZW1wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXAnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY2Vsc2l1cycpO1xyXG4gICAgdGVtcE1vZGUudGV4dENvbnRlbnQgPSAnQ2Vsc2l1cyc7XHJcbiAgICBmY1N3aXRjaC5jaGVja2VkID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICB0ZW1wc1tpXS50ZXh0Q29udGVudCA9IHRlbXBEYXRhW2ldO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbk1lbnUoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XHJcbiAgY29uc3Qgc2VhcmNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgc2VhcmNoSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmcnO1xyXG5cclxuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gIGxvZ29JbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC93ZWF0aGVyLWFwcC1sb2dvLnN2Zyc7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHNlYXJjaElucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWNpdHknO1xyXG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGNpdHkgKGVnLiBMb3MgQW5nZWxlcyknO1xyXG5cclxuICBzZWFyY2hDb250YWluZXJEaXYuYXBwZW5kKHNlYXJjaEltZywgc2VhcmNoSW5wdXQpO1xyXG4gIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXJEaXYpO1xyXG5cclxuICBjb25zdCBoYW1idXJnZXJNZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgaGFtYnVyZ2VyTWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpO1xyXG4gIGNvbnN0IGhhbWJ1cmdlck1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBoYW1idXJnZXJNZW51SW1nLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICBoYW1idXJnZXJNZW51SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvaGFtYnVyZ2VyLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgaGFtYnVyZ2VyTWVudUJ1dHRvbi5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51SW1nKTtcclxuICBoYW1idXJnZXJNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2V0dGluZ3NNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbiAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEltZyk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNlYXJjaE1vZGFsKTtcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWRpdicsICdoaWRkZW4nKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LmlkID0gJ2hpZGRlbic7XHJcblxyXG4gIGNvbnN0IGRhcmtMaWdodE1vZGVTd2l0Y2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hQLmNsYXNzTGlzdC5hZGQoJ2RhcmstbGlnaHQtc3dpdGNoJywgJ3NtYWxsJyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaFAudGV4dENvbnRlbnQgPSAnRW5hYmxlIERhcmsgTW9kZSc7XHJcblxyXG4gIGNvbnN0IGRhcmtMaWdodE1vZGVTd2l0Y2ggPSBjcmVhdGVUb2dnbGVTd2l0Y2goKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoLmlkID0gJ2RhcmstbGlnaHQtc3dpdGNoJztcclxuXHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaERpdi5hcHBlbmQoZGFya0xpZ2h0TW9kZVN3aXRjaFAsIGRhcmtMaWdodE1vZGVTd2l0Y2gpO1xyXG5cclxuICBjb25zdCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQLmNsYXNzTGlzdC5hZGQoJ2ZhcmVuaGVpdC1jZWxzaXVzLXN3aXRjaCcsICdzbWFsbCcpO1xyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQLnRleHRDb250ZW50ID0gJ0VuYWJsZSBDZWxzaXVzJztcclxuXHJcbiAgY29uc3QgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaCA9IGNyZWF0ZVRvZ2dsZVN3aXRjaCgnZmFyZW5oZWl0LWNlbHNpdXMtc3dpdGNoJyk7XHJcblxyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hEaXYuYXBwZW5kKGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQLCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzd2l0Y2hlc0Rpdi5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hlcycpO1xyXG4gIHN3aXRjaGVzRGl2LmFwcGVuZChkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2KTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbE9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsT3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLW9wdGlvbnMnKTtcclxuICBhZGRpdGlvbmFsT3B0aW9uc0Rpdi5hcHBlbmQoc2VhcmNoQnV0dG9uLCBoYW1idXJnZXJNZW51QnV0dG9uKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xyXG4gIG9wdGlvbnNEaXYuYXBwZW5kKHN3aXRjaGVzRGl2LCBhZGRpdGlvbmFsT3B0aW9uc0Rpdik7XHJcblxyXG4gIG5hdi5hcHBlbmQobG9nb0Rpdiwgb3B0aW9uc0Rpdik7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IHNpZGVOYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBzaWRlTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LWNvbnRhaW5lcicsICdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNpZGVOYXYuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYnKTtcclxuXHJcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICBsb2dvLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvd2VhdGhlci1hcHAtbG9nby5zdmcnO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgc2lkZU5hdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcclxuXHJcbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0b3BMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgZGFya01vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGRhcmtNb2RlLnRleHRDb250ZW50ID0gJ0RhcmsgTW9kZSc7XHJcblxyXG4gIGNvbnN0IHNldFRvQ2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgc2V0VG9DZWxzaXVzLnRleHRDb250ZW50ID0gJ1NldCB0byBDZWxzaXVzJztcclxuXHJcbiAgdG9wTGlzdC5hcHBlbmQoZGFya01vZGUsIHNldFRvQ2Vsc2l1cyk7XHJcblxyXG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gIG5hdkl0ZW1zLmFwcGVuZCh0b3BMaXN0LCBkaXZpZGVyKTtcclxuXHJcbiAgY29uc3QgYm90dG9tTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgYm90dG9tTGlzdC5hcHBlbmRDaGlsZChhYm91dCk7XHJcbiAgbmF2SXRlbXMuYXBwZW5kQ2hpbGQoYm90dG9tTGlzdCk7XHJcblxyXG4gIHNpZGVOYXYuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xyXG4gIHNpZGVOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XHJcblxyXG4gIGNvbnN0IGV4aXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBleGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcclxuXHJcbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGV4aXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBleGl0SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvZXhpdC5zdmcnO1xyXG4gIGV4aXRCdG4uYXBwZW5kQ2hpbGQoZXhpdEltZyk7XHJcbiAgZXhpdERpdi5hcHBlbmRDaGlsZChleGl0QnRuKTtcclxuXHJcbiAgc2lkZU5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0RGl2KTtcclxuXHJcbiAgcmV0dXJuIHNpZGVOYXZDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZVNlYXJjaE1vZGFsKCkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXNlYXJjaC1tb2RhbCcsICdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjaXR5SW5wdXRGb3JtID0gY3JlYXRlQ2l0eUlucHV0Rm9ybU1vYmlsZSgpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ3ByaW1hcnknKTtcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTZWFyY2hNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChjaXR5SW5wdXRGb3JtLCBjYW5jZWxCdXR0b24pO1xyXG5cclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzdWx0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0aXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aXBzLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBvdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdXRwdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0cHV0LWNvbnRhaW5lcicpO1xyXG4gIG91dHB1dENvbnRhaW5lci5hcHBlbmQocmVzdWx0c0NvbnRhaW5lciwgdGlwc0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoc2VhcmNoQ29udGFpbmVyLCBvdXRwdXRDb250YWluZXIpO1xyXG4gIG1vZGFsLmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gbW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdzTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2V0dGluZ3MtbW9kYWwnKTtcclxuICBtb2RhbC5pZCA9ICdoaWRkZW4nO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdibGFjay1maWx0ZXInKTtcclxuICBsb2dvLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvd2VhdGhlci1hcHAtbG9nby5zdmcnO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gIGNvbnN0IGxpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnN0IHRlbXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1RlbXBDb252ZXJzaW9uKTtcclxuXHJcbiAgdGVtcEltZy5jbGFzc0xpc3QuYWRkKCdibGFjay1maWx0ZXInKTtcclxuICB0ZW1wSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvdGVtcGVyYXR1cmUuc3ZnJztcclxuICBhLmlubmVySFRNTCA9ICdTZXQgdG8gPHNwYW4gaWQ9XFwndGVtcC1tb2RlXFwnPkNlbHNpdXM8L3NwYW4+JztcclxuICBsaS5hcHBlbmQodGVtcEltZywgYSk7XHJcbiAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIGxpbmtzRGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChsb2dvRGl2LCBsaW5rc0Rpdik7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgeEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHhJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9jbG9zZS1tZC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKHhJbWcpO1xyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2V0dGluZ3NNb2RhbCk7XHJcblxyXG4gIG1vZGFsLmFwcGVuZChjb250YWluZXIsIGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkRGVmYXVsdFdlYXRoZXIoKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hEZWZhdWx0V2VhdGhlcigpO1xyXG4gIHVwZGF0ZUN1cnJlbnRGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGVIb3VybHlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gIHVwZGF0ZTNEYXlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRpb25NZW51ID0gY3JlYXRlTmF2aWdhdGlvbk1lbnUoKTtcclxuICBjb25zdCBzaWRlTmF2aWdhdGlvbiA9IGNyZWF0ZVNpZGVOYXZpZ2F0aW9uKCk7XHJcbiAgY29uc3Qgc2VhcmNoTW9iaWxlID0gY3JlYXRlTW9iaWxlU2VhcmNoTW9kYWwoKTtcclxuICBjb25zdCBzZXR0aW5nc01vZGFsID0gY3JlYXRlU2V0dGluZ3NNb2RhbCgpO1xyXG4gIGNvbnN0IGN1cnJlbnRGb3JlY2FzdCA9IGNyZWF0ZUN1cnJlbnRGb3JlY2FzdCgpO1xyXG4gIGNvbnN0IG1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzID0gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKTtcclxuICBjb25zdCBhZGRpdGlvbmFsRm9yZWNhc3REZXRhaWxzID0gY3JlYXRlQWRkaXRpb25hbEZvcmVjYXN0KCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kKG5hdmlnYXRpb25NZW51LCBzaWRlTmF2aWdhdGlvbiwgc2VhcmNoTW9iaWxlLCBzZXR0aW5nc01vZGFsKTtcclxuICBncmlkQ29udGFpbmVyLmFwcGVuZChjdXJyZW50Rm9yZWNhc3QsIG1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzLCBhZGRpdGlvbmFsRm9yZWNhc3REZXRhaWxzKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG4gIGNvbnN0IGZjU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhcmVuaGVpdC1jZWxzaXVzLXN3aXRjaCcpO1xyXG4gIGZjU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tUZW1wQ29udmVyc2lvbik7XHJcblxyXG4gIGF3YWl0IGxvYWREZWZhdWx0V2VhdGhlcigpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL2xpZ2h0LXRoZW1lLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vcGFnZS1sYXlvdXQnO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBjcmVhdGVQYWdlKCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==