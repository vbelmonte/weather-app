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



/** OTHER GENERAL STYLES **/
button {
    background-color: var(--power-primary);
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



/** CURRENT FORECAST STYLES **/

section#current-forecast {
    background-color: var(--additional-forecast);
    color: var(--white);
    box-shadow: var(--dropshadow);
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

/** 3-DAY FORECAST CARD STYLES **/`, "",{"version":3,"sources":["webpack://./src/light-theme.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kGAAkG;IAClG,uCAAuC;IACvC,gBAAgB;IAChB,sGAAsG;IACtG,gDAAgD;IAChD,wBAAwB;IACxB,0BAA0B;IAC1B,4GAA4G;IAC5G,2BAA2B;IAC3B,mCAAmC;IACnC,yHAAyH;IACzH,+CAA+C;IAC/C,iDAAiD;IACjD,+BAA+B;IAC/B,qCAAqC;IACrC,gDAAgD;AACpD;;AAEA;IACI,sBAAsB;AAC1B;;;;AAIA,yBAAyB;;AAEzB;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;;;AAIA,2BAA2B;AAC3B;IACI,sCAAsC;AAC1C;;;;AAIA,wBAAwB;;AAExB;IACI,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;CACC,2BAA2B;AAC5B;;;AAGA,2BAA2B;AAC3B;IACI,oCAAoC;IACpC,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;IACI,2CAA2C;AAC/C;;;;AAIA,iCAAiC;AACjC;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;;;AAIA,8BAA8B;;AAE9B;IACI,4CAA4C;IAC5C,mBAAmB;IACnB,6BAA6B;AACjC;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,2CAA2C;;AAE3C;IACI,gCAAgC;;IAEhC,iBAAiB;IACjB,0DAA0D;AAC9D;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,yCAAyC;AACzC;IACI,4CAA4C;AAChD;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,6BAA6B;;AAE7B;CACC,4CAA4C;AAC7C;;AAEA;CACC,8CAA8C;AAC/C;;AAEA;IACI,8BAA8B;AAClC;;;AAGA,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA,iCAAiC","sourcesContent":[":root {\r\n    --black: #323232;\r\n    --black-filter: invert(17%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(93%) contrast(89%);;\r\n    --black-transparent: rgb(0, 0, 0, 0.25);\r\n    --white: #F2F2F2;\r\n    --white-filter: invert(99%) sepia(2%) saturate(143%) hue-rotate(198deg) brightness(116%) contrast(90%);\r\n    --day: linear-gradient(135deg, #0087E7, #C29900);\r\n    --power-primary: #00131A;\r\n    --power-secondary: #64D1F3;\r\n    --power-tertiary: invert(100%) sepia(36%) saturate(4010%) hue-rotate(176deg) brightness(103%) contrast(101%);\r\n    --power-quaternary: #7FA9D6;\r\n    --transparent: rgb(46, 68, 87, 0.5);\r\n    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);\r\n    --additional-forecast: rgba(242, 242, 242, 0.2);\r\n    --additional-forecast-2: rgba(242, 242, 242, 0.7);\r\n    --card: rgb(250, 250, 250, 0.1);\r\n    --navigation: rgb(242, 242, 242, 0.2);\r\n    --dropshadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.1);  \r\n}\r\n\r\nbody {\r\n    background: var(--day);\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n\r\n.secondary {\r\n    color: var(--power-secondary);\r\n}\r\n\r\n.tertiary {\r\n    filter: var(--power-tertiary);\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\nbutton {\r\n    background-color: var(--power-primary);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n    color: var(--white);\r\n}\r\n\r\nnav.main-nav img {\r\n    filter: var(--white-filter);\r\n}\r\n\r\nnav.side-nav-container {\r\n    color: var(--black);\r\n}\r\n\r\nnav .side-nav {\r\n    background-color: var(--navigation);\r\n}\r\n\r\nnav.side-nav-container .logo,\r\nnav.side-nav-container .divider {\r\n    filter: var(--black-filter);\r\n}\r\n\r\nnav.side-nav-container .exit img {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n.slider {\r\n    background-color: var(--transparent);\r\n    border: solid 1px var(--white);\r\n}\r\n\r\n.slider:before {\r\n    background-color: var(--white);\r\n}\r\n\r\ninput:checked + .slider {\r\n\tbackground: var(--power-quaternary);\r\n}\r\n  \r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px var(--power-quaternary);\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n    color: var(--black);\r\n}\r\n\r\n.mobile-search-modal .container {\r\n    background-color: var(--white);\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n\r\nsection#current-forecast {\r\n    background-color: var(--additional-forecast);\r\n    color: var(--white);\r\n    box-shadow: var(--dropshadow);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #current-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details-container {\r\n    background: var(--power-primary);\r\n\r\n    /* MOBILE STYLE */\r\n    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #more-current-forecast-details-container {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** ADDITIONAL FORECAST DETAILS STYLES **/\r\n#additional-forecast {\r\n    background-color: var(--additional-forecast);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #additional-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n\r\n.custom-scrollbar::-webkit-scrollbar-track {\r\n\tbackground-color: var(--additional-forecast);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\tbackground-color: var(--additional-forecast-2);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--white);\r\n}\r\n\r\n    \r\n/** HOURLY CARD STYLES **/\r\n.hourly-card {\r\n    background-color: var(--card);\r\n}\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Barlow-Thin.ttf */ "./src/assets/fonts/Barlow-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Regular.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Bold.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Thin.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid-desktop.svg */ "./src/assets/images/layout/magnifying-glass-solid-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid.svg */ "./src/assets/images/layout/magnifying-glass-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
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
	--transparent-dark: rgba(34, 34, 34, 0.2);
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
	font-family: 'Barlow Thin';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed Bold';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed Thin';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('truetype');
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

h2.bold.small {
	font-family: 'Barlow Bold';
	font-size: 1rem;
	line-height: 1rem;
}

h2.bold {
	font-family: 'Barlow Bold';
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



/** OTHER GENERAL STYLES **/
.hidden {
	display: none;
}

#hidden {
	display: none;
}

input[type=text] {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
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
	background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
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
	background-color: var(--transparent-dark);
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
	background: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
	border: solid 1px var(--gray);

	width: 100%;
	box-sizing: border-box;
}

.mobile-search-modal .results-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem 0.5rem;
}

.mobile-search-modal .search-result {
	display: flex;
	gap: 0.75rem;
	align-items: center;
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
	overflow-x: hidden;
}

	@media only screen and (min-width: 1024px) {
		.custom-scrollbar {
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
	}

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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n\t--black: #222222;\r\n\t--white: #F2F2F2;\r\n\t--gray: #A0A0A0;\r\n\t--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);\r\n\t--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);\r\n\t--transparent: rgb(242, 242, 242, 0.8);\r\n\t--transparent-dark: rgba(34, 34, 34, 0.2);\r\n\t--input-placeholder: rgb(242, 242, 242, 0.7);\r\n}\r\n\r\n\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Thin';\r\n\tsrc: url('../src/assets/fonts/Barlow-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\tcolor: var(--white);\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.white-filter {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n.transparent {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL FONT STYLES **/\r\n\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh2.bold.small {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.bold.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh4 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh4.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh5 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh5.small {\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\nh5.small.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np.large {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 4rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\np.medium {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\np.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n#hidden {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=text] {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tpadding: 0.5rem;\r\n\tpadding-left: 2.5rem;\r\n\tborder: solid 1px;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: var(--white);\r\n}\r\n\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav.main-nav {\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n}\r\n\r\n/** DESKTOP BELOW **/\r\n@media only screen and (min-width: 1024px) {\r\n\tnav.main-nav  {\r\n\t\tpadding: 1rem 5rem;\r\n\t}\r\n}\r\n\r\nnav.main-nav img {\r\n\theight: 1rem;\r\n}\r\n\r\nnav.main-nav .logo, nav.side-nav .logo {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav.main-nav .options {\r\n\tdisplay: flex;\r\n\tgap: 3rem;\r\n}\r\n\r\nnav.main-nav .options .switches {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .options .switches {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 1rem;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .options .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\nnav.main-nav .options .additional-options button {\r\n\tpadding: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .additional-options .menu-button {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .desktop-search {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .desktop-search {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\t}\r\n\r\n\r\nnav.main-nav .desktop-search input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--white);\r\n\twidth: 15rem;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--white);\r\n}\r\n\r\nnav.main-nav .desktop-search input::placeholder {\r\n\tcolor: var(--input-placeholder);\r\n}\r\n\r\nnav.side-nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 1;\r\n    gap: 0;\r\n\r\n\tbackground-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\nnav.side-nav-container button {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.side-nav-container .side-nav {\r\n    padding: 1rem;\r\n    flex: 4;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nnav.side-nav-container li {\r\n    margin: 1rem 0rem;\r\n}\r\n\r\nnav.side-nav-container .exit {\r\n    padding: 1rem 1rem;\r\n\tflex: 1;\r\n}\r\n\r\nnav.side-nav-container hr {\r\n    border: none;\r\n    border-top: solid 1px var(--power-secondary);\r\n\tmargin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: var(--transparent-dark);\r\n}\r\n\r\n.mobile-search-modal .container {\r\n\tpadding: 1rem;\r\n\theight: 100%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.mobile-search-modal .container {\r\n\t\t\tpadding: 1.5rem;\r\n\t\t\tmax-width: 50rem;\r\n\t\t\tmargin: 5rem auto;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-search-modal .search-bar {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .mobile-search {\r\n\twidth: 100%;\r\n}\r\n\r\n.mobile-search-modal input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--gray);\r\n\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.mobile-search-modal .results-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n\tpadding: 2rem 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .search-result {\r\n\tdisplay: flex;\r\n\tgap: 0.75rem;\r\n\talign-items: center;\r\n}\r\n\r\n.mobile-search-modal .search-result img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n\r\n/** SEARCH TIP STYLES **/\r\n.tips-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip .tip-img {\r\n\tpadding-top: 0.3rem;\r\n}\r\n\r\n.tip .tip-img img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n\r\n.switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.75rem;\r\n\theight: 1.5rem;\r\n}\r\n\r\n.switch input { \r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n\r\n.slider {\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\n.slider:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\theight: 1rem;\r\n\twidth: 1rem;\r\n\tleft: 4px;\r\n\tbottom: 3px;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n\t-webkit-transform: translateX(18px);\r\n\t-ms-transform: translateX(18px);\r\n\ttransform: translateX(18px);\r\n}\r\n  \r\n/* Rounded sliders */\r\n.slider.round {\r\n\tborder-radius: 32px;\r\n}\r\n  \r\n.slider.round:before {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.toggle-div {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5rem;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** MAIN-CONTAINER STYLES **/\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.main-container {\r\n\t\t\tmargin: 5rem;\r\n\t\t}\r\n\r\n\t\t.grid-container {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgap: 1rem;\r\n\t\t\tgrid-template: 4fr 1fr / 50% 50%;\r\n\r\n\t\t\tmin-width: 50rem;\r\n\t\t\tmax-width: 80rem;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES - MOBILE **/\r\n\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-bottom: 10rem;\r\n\theight: 83vh;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast {\r\n\t\t\talign-items: stretch;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 2;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details,\r\n#current-forecast .forecast-details .bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details .bottom {\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details {\r\n\tgap: 5rem;\t\r\n}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\twidth: 8rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n\t/** MOBILE BELOW **/\r\n\tposition: absolute;\r\n    top: 43rem;\r\n    width: calc(100% - 2rem);\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: auto;\r\n\t\t\tposition: static;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 2;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: center;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\t/** TABLET BELOW **/\r\n\t@media only screen and (min-width: 426px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 25rem;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tmargin-right: auto;\r\n\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding: 1.5rem 3rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details img {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n\theight: 1.5rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-top: 7rem;\r\n\r\n\theight: 70vh;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#additional-forecast {\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tpadding-bottom: 4rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 2;\r\n\t\t\tgrid-column-end: 3;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n.hourly-card {\r\n\tpadding: 1.5rem;\r\n    padding-top: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n.hourly-card .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n\twidth: 2.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\theight: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n\r\n.hourly-forecast-carousel {\r\n\toverflow-x: hidden;\r\n}\r\n\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.custom-scrollbar {\r\n\t\t\toverflow-x: auto;\r\n\t\t}\r\n\t\t\r\n\t\t.custom-scrollbar::-webkit-scrollbar {\r\n\t\t\theight: 0.5rem;\r\n\t\t}\r\n\t\t\r\n\t\t.custom-scrollbar::-webkit-scrollbar-track {\r\n\t\t\tborder-radius: 1rem;\r\n\t\t}\r\n\t\t\r\n\t\t.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\t\t\tborder-radius: 1rem;\r\n\t\t}\r\n\t}\r\n\r\n.hourly-forecast-carousel > .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST STYLES **/\r\n.three-day-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n.three-day-forecast-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\t\r\n\tpadding: 0.5rem 0rem;\r\n}\r\n\r\n.daily-bar .day-container {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 10;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\twidth: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: none;\r\n}\r\n\r\n.daily-bar .temperatures {\r\n\twidth: 5rem;\r\n}\r\n\r\n.daily-bar .high,\r\n.daily-bar .low {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}"],"sourceRoot":""}]);
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
  const date = new Date();
  const hour = date.getHours();
  return `${query.hourly.relativehumidity_2m[hour]}%`;
}

function printOutWindSpeed(query) {
  const date = new Date();
  const hour = date.getHours();
  const result = Math.floor(query.hourly.windspeed_10m[hour]);
  return `${result}mph`;
}

function printOutUVIndex(query) {
  const uv = query.daily.uv_index_max[0];
  const result = Math.floor(uv);

  return `${result} of 10`;
}

function printOutChanceOfRain(query) {
  return `${query.daily.precipitation_probability_max[0]}%`;
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
  highP.classList.add('bold');
  highP.textContent = `${high}°`;
  highDiv.appendChild(highP);

  const lowDiv = document.createElement('div');
  lowDiv.classList.add('low');

  const lowP = document.createElement('p');
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
  currentTemp.classList.add('large');
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
  high.id = 'current-high';
  highP.appendChild(high);
  highDiv.appendChild(highP);

  const lowDiv = document.createElement('div');
  const lowP = document.createElement('p');
  lowP.textContent = 'L: ';

  const low = document.createElement('span');
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

  return 'No city found';
}


/***/ }),

/***/ "./src/fetch-weather.js":
/*!******************************!*\
  !*** ./src/fetch-weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTZ: () => (/* binding */ convertTZ),
/* harmony export */   "default": () => (/* binding */ fetchWeather),
/* harmony export */   fetchDefaultWeather: () => (/* binding */ fetchDefaultWeather),
/* harmony export */   fetchWeatherIcon: () => (/* binding */ fetchWeatherIcon)
/* harmony export */ });
function convertTZ(date, tzString) {
  return new Date(date.toLocaleString('en-US', { timeZone: tzString }));
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

  return {
    currentTemp, dailyHigh, dailyLow, weatherDescription,
  };
}

async function fetchCurrentWeather(query) {
  const latitude = query.lat;
  const longitude = query.lon;
  const cityName = query.name;

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`);

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
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto');

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

function displaySearchResults(results) {
  const resultsContainer = document.getElementsByClassName('results-container')[0];

  if (Array.isArray(results)) {
    for (let i = 0; i < results.length; i += 1) {
      const query = results[i];
      const queryResult = createQueryResult(query);
      queryResult.addEventListener('click', async () => {
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

function clearResults() {
  const resultsContainer = document.getElementsByClassName('results-container')[0];
  resultsContainer.innerHTML = '';
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
    displaySearchResults(result);
  });

  return inputContainer;
}

function createToggleSwitch(toggleName) {
  const label = document.createElement('label');
  label.classList.add('switch');
  label.for = toggleName;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = toggleName;

  const span = document.createElement('span');
  span.classList.add('slider', 'round');

  label.append(input, span);

  return label;
}

function toggleSearchModal() {
  const mobileSearchModal = document.getElementsByClassName('mobile-search-modal')[0];
  if (mobileSearchModal.classList.contains('hidden')) {
    mobileSearchModal.classList.remove('hidden');
  } else {
    mobileSearchModal.classList.add('hidden');
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
  hamburgerMenuImg.src = '../src/assets/images/layout/hamburger-menu-svgrepo-com.svg';
  hamburgerMenuButton.appendChild(hamburgerMenuImg);

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

  const farenheitCelsiusSwitch = createToggleSwitch();
  farenheitCelsiusSwitch.id = 'farenheit-celsius-switch';

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

function createTip(text) {
  const tipImgDiv = document.createElement('div');
  tipImgDiv.classList.add('tip-img');
  const tipImg = document.createElement('img');
  tipImg.src = '../src/assets/images/layout/tip.svg';
  tipImgDiv.appendChild(tipImg);

  const tipDiv = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = `${text}`;
  tipDiv.appendChild(p);

  const tip = document.createElement('div');
  tip.classList.add('tip');
  tip.append(tipImgDiv, tipDiv);

  return tip;
}

function createSearchInstructions() {
  const textOne = 'To search for city in the US, enter city, state, and country code (eg. Phoenix, AZ, US)';
  const tipOne = createTip(textOne);

  const textTwo = 'To search for city outside US, enter city and country code (eg. London, UK)';
  const tipTwo = createTip(textTwo);

  const textThree = 'You can also search by postal/zip code followed by country code (eg. 33701, US)';
  const tipThree = createTip(textThree);

  const instructions = document.createElement('div');
  instructions.classList.add('tips-container');
  instructions.append(tipOne, tipTwo, tipThree);

  return instructions;
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

  const searchInstructions = createSearchInstructions();

  container.append(searchContainer, resultsContainer, searchInstructions);
  modal.append(container);

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
  const currentForecast = (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const moreCurrentForecastDetails = (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const additionalForecastDetails = (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();

  body.append(navigationMenu, sideNavigation, searchMobile);
  gridContainer.append(currentForecast, moreCurrentForecastDetails, additionalForecastDetails);
  mainContainer.appendChild(gridContainer);

  body.appendChild(mainContainer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxRQUFRLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxTQUFTLFlBQVksTUFBTSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxvQkFBb0IsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxpcUJBQWlxQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixLQUFLLHNKQUFzSixxQkFBcUIsS0FBSyxVQUFVLHFCQUFxQixLQUFLLFlBQVksdUJBQXVCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLCtEQUErRCxrQkFBa0Isb0JBQW9CLEtBQUssV0FBVyxnQ0FBZ0Msd0JBQXdCLEtBQUssdUJBQXVCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLDZHQUE2Ryx5R0FBeUcsNkNBQTZDLGdEQUFnRCxtREFBbUQsS0FBSyw0QkFBNEIsb0NBQW9DLDRFQUE0RSx1QkFBdUIseUJBQXlCLEtBQUssb0JBQW9CLGlDQUFpQyx5RUFBeUUsdUJBQXVCLHlCQUF5QixLQUFLLG9CQUFvQixpQ0FBaUMseUVBQXlFLHVCQUF1Qix5QkFBeUIsS0FBSyxvQkFBb0IsMkNBQTJDLHlGQUF5Rix1QkFBdUIseUJBQXlCLEtBQUssb0JBQW9CLGdEQUFnRCxzRkFBc0YsdUJBQXVCLHlCQUF5QixLQUFLLG9CQUFvQixnREFBZ0Qsc0ZBQXNGLHVCQUF1Qix5QkFBeUIsS0FBSyxjQUFjLHlEQUF5RCwwQkFBMEIsNERBQTRELDBCQUEwQixzQkFBc0IsS0FBSyw2REFBNkQsa0NBQWtDLEtBQUssc0JBQXNCLCtDQUErQyxLQUFLLHVEQUF1RCwyQ0FBMkMsc0JBQXNCLHdCQUF3QixLQUFLLFlBQVksb0NBQW9DLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUIsaUNBQWlDLHNCQUFzQix3QkFBd0IsS0FBSyxpQkFBaUIsaUNBQWlDLHNCQUFzQix3QkFBd0IsS0FBSyxZQUFZLG9DQUFvQyxzQkFBc0Isd0JBQXdCLEtBQUssa0JBQWtCLHNCQUFzQix3QkFBd0IsS0FBSyxpQkFBaUIsaUNBQWlDLHNCQUFzQix3QkFBd0IsS0FBSyx1QkFBdUIsc0JBQXNCLHdCQUF3QixLQUFLLFlBQVksb0NBQW9DLHdCQUF3QiwwQkFBMEIsS0FBSyxpQkFBaUIsaUNBQWlDLHdCQUF3QiwwQkFBMEIsS0FBSyxZQUFZLG9DQUFvQyxzQkFBc0Isd0JBQXdCLEtBQUssa0JBQWtCLHlCQUF5QiwyQkFBMkIsS0FBSyx1QkFBdUIsaUNBQWlDLEtBQUssV0FBVyxvQ0FBb0Msc0JBQXNCLHdCQUF3QixLQUFLLGlCQUFpQixvQ0FBb0Msc0JBQXNCLHdCQUF3QixLQUFLLGtCQUFrQixvQ0FBb0Msc0JBQXNCLHdCQUF3QixLQUFLLGlCQUFpQixvQ0FBb0MseUJBQXlCLDJCQUEyQixLQUFLLGdCQUFnQixpQ0FBaUMsc0JBQXNCLHdCQUF3QixLQUFLLHlEQUF5RCxvQkFBb0IsS0FBSyxpQkFBaUIsb0JBQW9CLEtBQUssMEJBQTBCLCtIQUErSCxzQkFBc0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsd0NBQXdDLHNCQUFzQixLQUFLLGdCQUFnQixtQkFBbUIsNEJBQTRCLHdDQUF3QyxzQkFBc0IsMkJBQTJCLDBCQUEwQixLQUFLLDBEQUEwRCxvQkFBb0IsS0FBSyxzQkFBc0IsZ0JBQWdCLHFDQUFxQywwQkFBMEIsb0JBQW9CLEtBQUssNkVBQTZFLHFCQUFxQiwyQkFBMkIsT0FBTyxLQUFLLDBCQUEwQixtQkFBbUIsS0FBSyxnREFBZ0QscUJBQXFCLEtBQUssK0JBQStCLG9CQUFvQixnQkFBZ0IsS0FBSyx5Q0FBeUMsb0JBQW9CLEtBQUssaUZBQWlGLHlDQUF5Qyx3QkFBd0Isb0JBQW9CLFNBQVMsT0FBTyxtREFBbUQsb0JBQW9CLGdCQUFnQixLQUFLLDhEQUE4RCxpQkFBaUIsb0NBQW9DLEtBQUssNkVBQTZFLHVEQUF1RCx3QkFBd0IsU0FBUyxPQUFPLHNDQUFzQyxvQkFBb0IsS0FBSyxpRkFBaUYsc0NBQXNDLHlCQUF5QixTQUFTLE9BQU8sZ0RBQWdELCtIQUErSCxxQ0FBcUMsbUJBQW1CLG9DQUFvQywwQkFBMEIsS0FBSyx5REFBeUQsc0NBQXNDLEtBQUssZ0NBQWdDLHdCQUF3QixlQUFlLGdCQUFnQixpQkFBaUIsOEJBQThCLG1CQUFtQixtQkFBbUIsZUFBZSw4Q0FBOEMsS0FBSyx1Q0FBdUMsbUJBQW1CLG9DQUFvQyxLQUFLLDBDQUEwQyxzQkFBc0IsZ0JBQWdCLDBCQUEwQiwrQkFBK0Isa0JBQWtCLEtBQUssbUNBQW1DLDBCQUEwQixLQUFLLHNDQUFzQywyQkFBMkIsY0FBYyxLQUFLLG1DQUFtQyxxQkFBcUIscURBQXFELHdCQUF3QixLQUFLLDRFQUE0RSxzQkFBc0IsYUFBYSxjQUFjLGVBQWUsb0JBQW9CLGlCQUFpQixnREFBZ0QsS0FBSyx5Q0FBeUMsb0JBQW9CLG1CQUFtQixLQUFLLGlGQUFpRix5Q0FBeUMsMEJBQTBCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLFNBQVMsT0FBTywwQ0FBMEMsb0JBQW9CLGtCQUFrQixLQUFLLDZDQUE2QyxrQkFBa0IsS0FBSyxvQ0FBb0MsdUhBQXVILG9DQUFvQyxzQkFBc0IsNkJBQTZCLEtBQUssaURBQWlELG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDJCQUEyQixLQUFLLDZDQUE2QyxvQkFBb0IsbUJBQW1CLDBCQUEwQixLQUFLLGlEQUFpRCxpQ0FBaUMsS0FBSyw4REFBOEQsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyxjQUFjLG9CQUFvQixnQkFBZ0IsS0FBSyx1QkFBdUIsMEJBQTBCLEtBQUssMkJBQTJCLGlDQUFpQyxLQUFLLHlEQUF5RCx5QkFBeUIsNEJBQTRCLHFCQUFxQixxQkFBcUIsS0FBSyx3QkFBd0IsaUJBQWlCLGVBQWUsZ0JBQWdCLEtBQUssaUJBQWlCLHlCQUF5QixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDhCQUE4QixzQkFBc0IsS0FBSyx3QkFBd0IseUJBQXlCLG9CQUFvQixtQkFBbUIsa0JBQWtCLGdCQUFnQixrQkFBa0IsOEJBQThCLHNCQUFzQixLQUFLLHdDQUF3QywwQ0FBMEMsc0NBQXNDLGtDQUFrQyxLQUFLLGtEQUFrRCwwQkFBMEIsS0FBSyxnQ0FBZ0MseUJBQXlCLEtBQUssaUZBQWlGLHFCQUFxQix3QkFBd0Isc0JBQXNCLDhCQUE4QixTQUFTLE9BQU8sOEhBQThILHlCQUF5Qix1QkFBdUIsU0FBUyw2QkFBNkIsd0JBQXdCLG9CQUFvQiwyQ0FBMkMsK0JBQStCLDJCQUEyQix1QkFBdUIsU0FBUyxPQUFPLG1GQUFtRixvQkFBb0IsK0JBQStCLDRCQUE0QixrQkFBa0IseUJBQXlCLDRCQUE0QixtQkFBbUIsNkJBQTZCLEtBQUssaUZBQWlGLDJCQUEyQiwrQkFBK0IseUNBQXlDLHdCQUF3QixpQ0FBaUMsdUJBQXVCLG1DQUFtQyw2QkFBNkIsNEJBQTRCLDBCQUEwQixTQUFTLE9BQU8sNkZBQTZGLHNCQUFzQiwrQkFBK0Isa0JBQWtCLDRCQUE0QixLQUFLLGlGQUFpRiw2Q0FBNkMsc0NBQXNDLHlDQUF5QyxTQUFTLE9BQU8saUZBQWlGLHFEQUFxRCxrQ0FBa0MsU0FBUyxPQUFPLDZDQUE2QyxnQkFBZ0IsT0FBTyxxQ0FBcUMsb0JBQW9CLGdDQUFnQyxrQkFBa0IsS0FBSywrQ0FBK0Msa0JBQWtCLEtBQUssb0dBQW9HLHdCQUF3QixtREFBbUQsbUJBQW1CLGlDQUFpQyxLQUFLLGlGQUFpRix3Q0FBd0MsdUJBQXVCLDJCQUEyQixzQkFBc0IsbUNBQW1DLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLFNBQVMsT0FBTyxrREFBa0Qsb0JBQW9CLGdCQUFnQiw4QkFBOEIsc0JBQXNCLDZCQUE2QixLQUFLLDJFQUEyRSxrREFBa0QsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsNENBQTRDLCtCQUErQixTQUFTLE9BQU8saUZBQWlGLGtEQUFrRCwwQkFBMEIsU0FBUyxPQUFPLDRDQUE0QywrQ0FBK0MscUJBQXFCLEtBQUssZ0RBQWdELG9CQUFvQiwrQkFBK0Isa0JBQWtCLHlCQUF5QixLQUFLLHlGQUF5RixvQkFBb0IsNkJBQTZCLGdCQUFnQix5QkFBeUIsd0JBQXdCLHVCQUF1QixLQUFLLGlGQUFpRiw4QkFBOEIsaUNBQWlDLHdCQUF3QiwrQkFBK0IsdUJBQXVCLG1DQUFtQyw2QkFBNkIsNEJBQTRCLDBCQUEwQixTQUFTLE9BQU8sb0VBQW9FLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUsscUVBQXFFLHNCQUFzQiwwQkFBMEIsK0JBQStCLEtBQUssaUNBQWlDLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQixvQkFBb0IsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssMEZBQTBGLHlCQUF5QixLQUFLLHNEQUFzRCwyQkFBMkIsMkJBQTJCLFNBQVMsc0RBQXNELHlCQUF5QixTQUFTLDREQUE0RCw4QkFBOEIsU0FBUyw0REFBNEQsOEJBQThCLFNBQVMsT0FBTyxnREFBZ0Qsb0JBQW9CLGtCQUFrQiwyQkFBMkIsS0FBSyxzRUFBc0Usb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSyxzRUFBc0Usb0JBQW9CLDBCQUEwQixnQkFBZ0IsaUNBQWlDLEtBQUssbUNBQW1DLGNBQWMsS0FBSyw2QkFBNkIsb0JBQW9CLDBCQUEwQixlQUFlLGlCQUFpQixtQkFBbUIsMEZBQTBGLG9CQUFvQiwwQkFBMEIsa0JBQWtCLEtBQUssOEJBQThCLGNBQWMsS0FBSyxvQ0FBb0Msb0JBQW9CLEtBQUssMENBQTBDLG1CQUFtQixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyxvQ0FBb0Msb0JBQW9CLEtBQUssa0NBQWtDLGtCQUFrQixLQUFLLDhDQUE4QyxjQUFjLG9CQUFvQixnQ0FBZ0MsS0FBSyxtQkFBbUI7QUFDN2h1QjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3YzQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXlHO0FBQ3pHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEZBQU87Ozs7QUFJbUQ7QUFDM0UsT0FBTyxpRUFBZSw0RkFBTyxJQUFJLDRGQUFPLFVBQVUsNEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVDQUF1QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQTZDO0FBQ3pEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0o4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxXQUFXLEVBQUU7QUFDYixJQUFJO0FBQ0o7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFTO0FBQy9CO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsSUFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE84RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdFQUFnQjtBQUN6QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsTUFBTSw0Q0FBNEMsY0FBYztBQUNuSjtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQixJQUFJLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLE1BQU0sb0RBQW9ELGNBQWM7QUFDNUo7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsSUFBSSxvQkFBb0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURPO0FBQ1AsaURBQWlELG9CQUFvQjtBQUNyRTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsUUFBUTtBQUNSLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsUUFBUTtBQUNSLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsUUFBUTtBQUNSLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixTQUFTLGFBQWEsVUFBVTtBQUNwSDtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQixJQUFJLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsSUFBSSxvQkFBb0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TitGO0FBQ2dDO0FBQ0Q7QUFDdEY7QUFDNEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0EsY0FBYyxTQUFTLElBQUksTUFBTSxJQUFJLFFBQVE7QUFDN0M7QUFDQSxVQUFVLE1BQU07QUFDaEI7QUFDQSxVQUFVLFVBQVU7QUFDcEI7QUFDQSxZQUFZLElBQUksSUFBSSxTQUFTLElBQUksUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBEQUFZO0FBQ3pDO0FBQ0EsUUFBUSxxRkFBMkI7QUFDbkMsUUFBUSwwR0FBcUM7QUFDN0MsUUFBUSx1RkFBMEI7QUFDbEMsUUFBUSxxRkFBd0I7QUFDaEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQVk7QUFDdkM7QUFDQSxNQUFNLHFGQUEyQjtBQUNqQyxNQUFNLDBHQUFxQztBQUMzQyxNQUFNLHVGQUEwQjtBQUNoQyxNQUFNLHFGQUF3QjtBQUM5QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFVO0FBQ25DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixLQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUVBQW1CO0FBQzFDLEVBQUUscUZBQTJCO0FBQzdCLEVBQUUsMEdBQXFDO0FBQ3ZDLEVBQUUsdUZBQTBCO0FBQzVCLEVBQUUscUZBQXdCO0FBQzFCO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvRUFBcUI7QUFDL0MscUNBQXFDLCtFQUFnQztBQUNyRSxvQ0FBb0MsdUVBQXdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BXQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNLO0FBQ1k7QUFDdkM7QUFDQTtBQUNBLFFBQVEsd0RBQVU7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xpZ2h0LXRoZW1lLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWdodC10aGVtZS5jc3M/N2JkYyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FkZGl0aW9uYWwtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnQtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWNpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XHJcbiAgICAtLWJsYWNrLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODklKTs7XHJcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xyXG4gICAgLS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxNDMlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5MCUpO1xyXG4gICAgLS1kYXk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg3RTcsICNDMjk5MDApO1xyXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xyXG4gICAgLS1wb3dlci1zZWNvbmRhcnk6ICM2NEQxRjM7XHJcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoMTAwJSkgc2VwaWEoMzYlKSBzYXR1cmF0ZSg0MDEwJSkgaHVlLXJvdGF0ZSgxNzZkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XHJcbiAgICAtLXRyYW5zcGFyZW50OiByZ2IoNDYsIDY4LCA4NywgMC41KTtcclxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XHJcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcclxuICAgIC0tYWRkaXRpb25hbC1mb3JlY2FzdC0yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNyk7XHJcbiAgICAtLWNhcmQ6IHJnYigyNTAsIDI1MCwgMjUwLCAwLjEpO1xyXG4gICAgLS1uYXZpZ2F0aW9uOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC4yKTtcclxuICAgIC0tZHJvcHNoYWRvdzogMHJlbSAwLjVyZW0gMXJlbSByZ2IoMCwgMCwgMCwgMC4xKTsgIFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRheSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cclxuXHJcbi5zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi50ZXJ0aWFyeSB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXBvd2VyLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcblxyXG5uYXYge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IGltZyB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxubmF2IC5zaWRlLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAubG9nbyxcclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZGl2aWRlciB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG4vKiogU0xJREVSIFNXSVRDSCBTVFlMRVMgKiovXHJcbi5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1wb3dlci1xdWF0ZXJuYXJ5KTtcclxufVxyXG4gIFxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wb3dlci1xdWF0ZXJuYXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTU9CSUxFIFNFQVJDSCBNT0RBTCBTVFlMRVMgKiovXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuXHJcbnNlY3Rpb24jY3VycmVudC1mb3JlY2FzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxufVxyXG5cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI2N1cnJlbnQtZm9yZWNhc3Qge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcblxyXG4gICAgLyogTU9CSUxFIFNUWUxFICovXHJcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG4jYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcclxufVxyXG5cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMik7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbiAgICBcclxuLyoqIEhPVVJMWSBDQVJEIFNUWUxFUyAqKi9cclxuLmhvdXJseS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xyXG59XHJcblxyXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGlnaHQtdGhlbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtHQUFrRztJQUNsRyx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLHNHQUFzRztJQUN0RyxnREFBZ0Q7SUFDaEQsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiw0R0FBNEc7SUFDNUcsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyx5SEFBeUg7SUFDekgsK0NBQStDO0lBQy9DLGlEQUFpRDtJQUNqRCwrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7OztBQUlBLHlCQUF5Qjs7QUFFekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7SUFDSSxzQ0FBc0M7QUFDMUM7Ozs7QUFJQSx3QkFBd0I7O0FBRXhCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7O0FBR0EsMkJBQTJCO0FBQzNCO0lBQ0ksb0NBQW9DO0lBQ3BDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7OztBQUlBLGlDQUFpQztBQUNqQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7OztBQUlBLDhCQUE4Qjs7QUFFOUI7SUFDSSw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOzs7QUFHSiwyQ0FBMkM7O0FBRTNDO0lBQ0ksZ0NBQWdDOztJQUVoQyxpQkFBaUI7SUFDakIsMERBQTBEO0FBQzlEOztJQUVJLGtCQUFrQjtJQUNsQjtRQUNJO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7OztBQUdKLHlDQUF5QztBQUN6QztJQUNJLDRDQUE0QztBQUNoRDs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOzs7QUFHSiw2QkFBNkI7O0FBRTdCO0NBQ0MsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MsOENBQThDO0FBQy9DOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFHQSx5QkFBeUI7QUFDekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUEsaUNBQWlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1ibGFjazogIzMyMzIzMjtcXHJcXG4gICAgLS1ibGFjay1maWx0ZXI6IGludmVydCgxNyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNmRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDg5JSk7O1xcclxcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2IoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICAgIC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuICAgIC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgyJSkgc2F0dXJhdGUoMTQzJSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTE2JSkgY29udHJhc3QoOTAlKTtcXHJcXG4gICAgLS1kYXk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg3RTcsICNDMjk5MDApO1xcclxcbiAgICAtLXBvd2VyLXByaW1hcnk6ICMwMDEzMUE7XFxyXFxuICAgIC0tcG93ZXItc2Vjb25kYXJ5OiAjNjREMUYzO1xcclxcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoMTAwJSkgc2VwaWEoMzYlKSBzYXR1cmF0ZSg0MDEwJSkgaHVlLXJvdGF0ZSgxNzZkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAgIC0tcG93ZXItcXVhdGVybmFyeTogIzdGQTlENjtcXHJcXG4gICAgLS10cmFuc3BhcmVudDogcmdiKDQ2LCA2OCwgODcsIDAuNSk7XFxyXFxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XFxyXFxuICAgIC0tYWRkaXRpb25hbC1mb3JlY2FzdDogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjIpO1xcclxcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjcpO1xcclxcbiAgICAtLWNhcmQ6IHJnYigyNTAsIDI1MCwgMjUwLCAwLjEpO1xcclxcbiAgICAtLW5hdmlnYXRpb246IHJnYigyNDIsIDI0MiwgMjQyLCAwLjIpO1xcclxcbiAgICAtLWRyb3BzaGFkb3c6IDByZW0gMC41cmVtIDFyZW0gcmdiKDAsIDAsIDAsIDAuMSk7ICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRheSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLnNlY29uZGFyeSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGVydGlhcnkge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLXBvd2VyLXRlcnRpYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IGltZyB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbm5hdiAuc2lkZS1uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAubG9nbyxcXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5kaXZpZGVyIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS1ibGFjay1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0xJREVSIFNXSVRDSCBTVFlMRVMgKiovXFxyXFxuLnNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXF1YXRlcm5hcnkpO1xcclxcbn1cXHJcXG4gIFxcclxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcG93ZXItcXVhdGVybmFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5zZWN0aW9uI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgICAjY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG5cXHJcXG4gICAgLyogTU9CSUxFIFNUWUxFICovXFxyXFxuICAgIGJveC1zaGFkb3c6IDByZW0gMC4xMjVyZW0gMC4yNXJlbSB2YXIoLS1ibGFjay10cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgICAjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xcclxcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XFxyXFxufVxcclxcblxcclxcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgICAjYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMik7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIFxcclxcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmhvdXJseS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxyXFxufVxcclxcblxcclxcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuOnJvb3Qge1xyXG5cdC0tYmxhY2s6ICMyMjIyMjI7XHJcblx0LS13aGl0ZTogI0YyRjJGMjtcclxuXHQtLWdyYXk6ICNBMEEwQTA7XHJcblx0LS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMTA2JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5MCUpO1xyXG5cdC0tZ3JheS1maWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNTNkZWcpIGJyaWdodG5lc3MoNzglKSBjb250cmFzdCg4NiUpO1xyXG5cdC0tdHJhbnNwYXJlbnQ6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjgpO1xyXG5cdC0tdHJhbnNwYXJlbnQtZGFyazogcmdiYSgzNCwgMzQsIDM0LCAwLjIpO1xyXG5cdC0taW5wdXQtcGxhY2Vob2xkZXI6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjcpO1xyXG59XHJcblxyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBUaGluJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIEJvbGQnO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgVGhpbic7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuXHQvKiogTU9CSUxFICoqL1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXHJcbi53aGl0ZS1maWx0ZXIge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50IHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBHRU5FUkFMIEZPTlQgU1RZTEVTICoqL1xyXG5cclxuaDEge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oMi5ib2xkLnNtYWxsIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmgyLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRsaW5lLWhlaWdodDogNHJlbTtcclxufVxyXG5cclxuaDMge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuaDMuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuaDMuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMy5ib2xkLnNtYWxsIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmg0IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oNC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oNSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oNS5zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xyXG59XHJcblxyXG5oNS5zbWFsbC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5wLmxhcmdlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDRyZW07XHJcblx0bGluZS1oZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbnAubWVkaXVtIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbnAuc21hbGwge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMC43NXJlbTtcclxufVxyXG5cclxucC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG5cdGJvcmRlcjogc29saWQgMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcblxyXG5uYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiB7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdG5hdi5tYWluLW5hdiAge1xyXG5cdFx0cGFkZGluZzogMXJlbSA1cmVtO1xyXG5cdH1cclxufVxyXG5cclxubmF2Lm1haW4tbmF2IGltZyB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLmxvZ28sIG5hdi5zaWRlLW5hdiAubG9nbyB7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDNyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdG5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRnYXA6IDFyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMgYnV0dG9uIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIC5tZW51LWJ1dHRvbiB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxubmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0IHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xyXG5cdHdpZHRoOiAxNXJlbTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVyKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGdhcDogMDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgYnV0dG9uIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLnNpZGUtbmF2IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmbGV4OiA0O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGxpIHtcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGhyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xyXG5cdG1hcmdpbjogMnJlbSAwcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyayk7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQubW9iaWxlLXNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcclxuXHRcdFx0cGFkZGluZzogMS41cmVtO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDUwcmVtO1xyXG5cdFx0XHRtYXJnaW46IDVyZW0gYXV0bztcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtYmFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAubW9iaWxlLXNlYXJjaCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIGlucHV0IHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JheSk7XHJcblxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMXJlbTtcclxuXHRwYWRkaW5nOiAycmVtIDAuNXJlbTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjc1cmVtO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNFQVJDSCBUSVAgU1RZTEVTICoqL1xyXG4udGlwcy1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcbi50aXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG4udGlwIC50aXAtaW1nIHtcclxuXHRwYWRkaW5nLXRvcDogMC4zcmVtO1xyXG59XHJcblxyXG4udGlwIC50aXAtaW1nIGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG4vKiogU0xJREVSIFNXSVRDSCBTVFlMRVMgKiovXHJcblxyXG4uc3dpdGNoIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyLjc1cmVtO1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHsgXHJcblx0b3BhY2l0eTogMDtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG5cdHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMXJlbTtcclxuXHR3aWR0aDogMXJlbTtcclxuXHRsZWZ0OiA0cHg7XHJcblx0Ym90dG9tOiAzcHg7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xyXG59XHJcbiAgXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuXHRib3JkZXItcmFkaXVzOiAzMnB4O1xyXG59XHJcbiAgXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC50b2dnbGUtZGl2IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0Z2FwOiAwLjVyZW07XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG4vKiogTUFJTi1DT05UQUlORVIgU1RZTEVTICoqL1xyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0Lm1haW4tY29udGFpbmVyIHtcclxuXHRcdFx0bWFyZ2luOiA1cmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5ncmlkLWNvbnRhaW5lciB7XHJcblx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdGdhcDogMXJlbTtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDUwJSA1MCU7XHJcblxyXG5cdFx0XHRtaW4td2lkdGg6IDUwcmVtO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDgwcmVtO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cmVtO1xyXG5cdHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcblx0aGVpZ2h0OiA4M3ZoO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IHtcclxuXHRcdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0cGFkZGluZzogM3JlbTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtY29sdW1uLWVuZDogMjtcclxuXHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtcm93LWVuZDogMjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyxcclxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMgLmJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMgLmJvdHRvbSB7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRnYXA6IDVyZW07XHRcclxufVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgLmhpZ2gtbG93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IGltZyNjdXJyZW50LXdlYXRoZXIge1xyXG5cdHdpZHRoOiA4cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xyXG5cdG1hcmdpbjogMHJlbSAxcmVtO1xyXG5cdC8qKiBNT0JJTEUgQkVMT1cgKiovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0M3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAyO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDJyZW07XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcbn1cclxuXHQvKiogVEFCTEVUIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDI1cmVtO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRcdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIC5tb2R1bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMC41cmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXHJcblxyXG4jYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogNXJlbTtcclxuXHRwYWRkaW5nOiAzcmVtIDFyZW07XHJcblx0cGFkZGluZy10b3A6IDdyZW07XHJcblxyXG5cdGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG5cdFx0XHRwYWRkaW5nOiAzcmVtO1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcblx0XHRcdGdyaWQtY29sdW1uLWVuZDogMztcclxuXHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtcm93LWVuZDogMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG4uaG91cmx5LWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAycmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXHJcbi5ob3VybHktY2FyZCB7XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgLmNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxLjVyZW07XHJcblx0d2lkdGg6IDIuNXJlbTtcclxufVxyXG5cclxuLmhvdXJseS1jYXJkIGltZyB7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJPVVNFTCBTVFlMRVMgKiovXHJcblxyXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsIHtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC5jdXN0b20tc2Nyb2xsYmFyIHtcclxuXHRcdFx0b3ZlcmZsb3cteDogYXV0bztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRcdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCA+IC5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjVyZW07XHJcblx0cGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuLnRocmVlLWRheS1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMnJlbTtcclxufVxyXG5cclxuLnRocmVlLWRheS1mb3JlY2FzdC1saXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cclxuLmRhaWx5LWJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMXJlbTtcclxuXHRcclxuXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGF5LWNvbnRhaW5lciB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXg6IDEwO1xyXG5cdGdhcDogMXJlbTsgLyoqIE1PQklMRSAqKi9cclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3QsXHJcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyxcclxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3Qge1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0IC5pY29uIHtcclxuXHR3aWR0aDogMS41cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIGg0IHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMge1xyXG5cdHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5oaWdoLFxyXG4uZGFpbHktYmFyIC5sb3cge1xyXG5cdGZsZXg6IDE7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtD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QUNkOztBQUVBO0NBQ0MsY0FBYztBQUNmOzs7O0FBSUEsc0NBQXNDOztBQUV0QztDQUNDLGtCQUFrQjtBQUNuQjs7Q0FFQztFQUNDO0dBQ0MsZ0JBQWdCO0VBQ2pCOztFQUVBO0dBQ0MsY0FBYztFQUNmOztFQUVBO0dBQ0MsbUJBQW1CO0VBQ3BCOztFQUVBO0dBQ0MsbUJBQW1CO0VBQ3BCO0NBQ0Q7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLG9CQUFvQjtBQUNyQjs7OztBQUlBLDRCQUE0QjtBQUM1QjtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0FBQ1o7Ozs7O0FBS0EsaUNBQWlDO0FBQ2pDO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTOztDQUVULG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsUUFBUTtDQUNSLFNBQVMsRUFBRSxhQUFhO0FBQ3pCOztBQUVBOzs7Q0FHQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjs7QUFFQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsT0FBTztDQUNQLGFBQWE7Q0FDYix5QkFBeUI7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuXFx0LS1ibGFjazogIzIyMjIyMjtcXHJcXG5cXHQtLXdoaXRlOiAjRjJGMkYyO1xcclxcblxcdC0tZ3JheTogI0EwQTBBMDtcXHJcXG5cXHQtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSgxMDYlKSBodWUtcm90YXRlKDUxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDkwJSk7XFxyXFxuXFx0LS1ncmF5LWZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE1M2RlZykgYnJpZ2h0bmVzcyg3OCUpIGNvbnRyYXN0KDg2JSk7XFxyXFxuXFx0LS10cmFuc3BhcmVudDogcmdiKDI0MiwgMjQyLCAyNDIsIDAuOCk7XFxyXFxuXFx0LS10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDM0LCAzNCwgMzQsIDAuMik7XFxyXFxuXFx0LS1pbnB1dC1wbGFjZWhvbGRlcjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuNyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBUaGluJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBCb2xkJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBUaGluJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVRoaW4udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcblxcclxcblxcdC8qKiBNT0JJTEUgKiovXFxyXFxuXFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cXHJcXG4ud2hpdGUtZmlsdGVyIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbi50cmFuc3BhcmVudCB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEdFTkVSQUwgRk9OVCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMi5ib2xkLnNtYWxsIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmgyLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5ib2xkLnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNC5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNS5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNS5zbWFsbC5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLmxhcmdlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDRyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbnAubWVkaXVtIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbnAuc21hbGwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IHtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRuYXYubWFpbi1uYXYgIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxcmVtIDVyZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAubG9nbywgbmF2LnNpZGUtbmF2IC5sb2dvIHtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHRuYXYubWFpbi1uYXYgLm9wdGlvbnMgLnN3aXRjaGVzIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuYWRkaXRpb25hbC1vcHRpb25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIC5tZW51LWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2gge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xcclxcblxcdHdpZHRoOiAxNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGdhcDogMDtcXHJcXG5cXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuc2lkZS1uYXYge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmbGV4OiA0O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgbGkge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZXhpdCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGhyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQubW9iaWxlLXNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiA1MHJlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDVyZW0gYXV0bztcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLm1vYmlsZS1zZWFyY2gge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCBpbnB1dCB7XFxyXFxuXFx0YmFja2dyb3VuZDogdXJsKCcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAucmVzdWx0cy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxuXFx0cGFkZGluZzogMnJlbSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC43NXJlbTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0VBUkNIIFRJUCBTVFlMRVMgKiovXFxyXFxuLnRpcHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpcCAudGlwLWltZyB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpcCAudGlwLWltZyBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0xJREVSIFNXSVRDSCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHR3aWR0aDogMi43NXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCBpbnB1dCB7IFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcXHJcXG5cXHR0cmFuc2l0aW9uOiAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcblxcdHdpZHRoOiAxcmVtO1xcclxcblxcdGxlZnQ6IDRweDtcXHJcXG5cXHRib3R0b206IDNweDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcXHJcXG5cXHR0cmFuc2l0aW9uOiAuMnM7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxyXFxufVxcclxcbiAgXFxyXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC50b2dnbGUtZGl2IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGdhcDogMC41cmVtO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUFJTi1DT05UQUlORVIgU1RZTEVTICoqL1xcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0Lm1haW4tY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5ncmlkLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDUwJSA1MCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0bWluLXdpZHRoOiA1MHJlbTtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDgwcmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAtIE1PQklMRSAqKi9cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTByZW07XFxyXFxuXFx0aGVpZ2h0OiA4M3ZoO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAzcmVtO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyxcXHJcXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRnYXA6IDVyZW07XFx0XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5oaWdoLWxvdyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgaW1nI2N1cnJlbnQtd2VhdGhlciB7XFxyXFxuXFx0d2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRtYXJnaW46IDByZW0gMXJlbTtcXHJcXG5cXHQvKiogTU9CSUxFIEJFTE9XICoqL1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0M3JlbTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHQvKiogVEFCTEVUIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDI1cmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIC5tb2R1bGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXFxyXFxuXFxyXFxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDVyZW07XFxyXFxuXFx0cGFkZGluZzogM3JlbSAxcmVtO1xcclxcblxcdHBhZGRpbmctdG9wOiA3cmVtO1xcclxcblxcclxcblxcdGhlaWdodDogNzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAzcmVtO1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxuXFx0XFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1yb3ctZW5kOiAzO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBTVFlMRVMgKiovXFxyXFxuLmhvdXJseS1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWNhcmQge1xcclxcblxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2FyZCAuY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDEuNXJlbTtcXHJcXG5cXHR3aWR0aDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNhcmQgaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJPVVNFTCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCB7XFxyXFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5jdXN0b20tc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRcXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdFxcdGhlaWdodDogMC41cmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwgPiAuY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbi50aHJlZS1kYXktZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aHJlZS1kYXktZm9yZWNhc3QtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmRhaWx5LWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZGF5LWNvbnRhaW5lciB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZGV0YWlscyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXg6IDEwO1xcclxcblxcdGdhcDogMXJlbTsgLyoqIE1PQklMRSAqKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3QsXFxyXFxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzLFxcclxcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCAuaWNvbiB7XFxyXFxuXFx0d2lkdGg6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4gLmljb24ge1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciBoNCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuaGlnaCxcXHJcXG4uZGFpbHktYmFyIC5sb3cge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlnaHQtdGhlbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saWdodC10aGVtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcHJpbnRPdXRIdW1pZGl0eShxdWVyeSkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgcmV0dXJuIGAke3F1ZXJ5LmhvdXJseS5yZWxhdGl2ZWh1bWlkaXR5XzJtW2hvdXJdfSVgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFdpbmRTcGVlZChxdWVyeSkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcihxdWVyeS5ob3VybHkud2luZHNwZWVkXzEwbVtob3VyXSk7XHJcbiAgcmV0dXJuIGAke3Jlc3VsdH1tcGhgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFVWSW5kZXgocXVlcnkpIHtcclxuICBjb25zdCB1diA9IHF1ZXJ5LmRhaWx5LnV2X2luZGV4X21heFswXTtcclxuICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHV2KTtcclxuXHJcbiAgcmV0dXJuIGAke3Jlc3VsdH0gb2YgMTBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSkge1xyXG4gIHJldHVybiBgJHtxdWVyeS5kYWlseS5wcmVjaXBpdGF0aW9uX3Byb2JhYmlsaXR5X21heFswXX0lYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmNlLW9mLXJhaW4nKTtcclxuICBjb3IudGV4dENvbnRlbnQgPSBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBwcmludE91dEh1bWlkaXR5KHF1ZXJ5KTtcclxuXHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBwcmludE91dFdpbmRTcGVlZChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IHV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3V2LWluZGV4Jyk7XHJcbiAgdXYudGV4dENvbnRlbnQgPSBwcmludE91dFVWSW5kZXgocXVlcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGFuY2VPZlJhaW4oKSB7XHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcicsICdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9kcm9wbGV0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgY29ySWNvbkRpdi5hcHBlbmRDaGlsZChjb3JJbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgY29yUGVyY2VudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29yUGVyY2VudC5pZCA9ICdjaGFuY2Utb2YtcmFpbic7XHJcbiAgY29yUGVyY2VudERpdi5hcHBlbmRDaGlsZChjb3JQZXJjZW50KTtcclxuXHJcbiAgY29uc3QgY29yVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgY29yVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5JywgJ3NtYWxsJyk7XHJcbiAgY29yVGl0bGUudGV4dENvbnRlbnQgPSAnUmFpbic7XHJcbiAgY29yVGl0bGVEaXYuYXBwZW5kQ2hpbGQoY29yVGl0bGUpO1xyXG5cclxuICBjb3JEaXYuYXBwZW5kKGNvclBlcmNlbnREaXYsIGNvclRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIGNvckRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHVtaWRpdHkoKSB7XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScsICdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHlJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBodW1pZGl0eUltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy93YXZlcy1maWxsLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgaHVtaWRpdHlJY29uRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SW1nKTtcclxuICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eUljb25EaXYpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVBlcmNlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaHVtaWRpdHlQZXJjZW50LmlkID0gJ2h1bWlkaXR5JztcclxuICBodW1pZGl0eVBlcmNlbnREaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlQZXJjZW50KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIGh1bWlkaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5JywgJ3NtYWxsJyk7XHJcbiAgaHVtaWRpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSc7XHJcbiAgaHVtaWRpdHlUaXRsZURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcclxuXHJcbiAgaHVtaWRpdHlEaXYuYXBwZW5kKGh1bWlkaXR5UGVyY2VudERpdiwgaHVtaWRpdHlUaXRsZURpdik7XHJcblxyXG4gIHJldHVybiBodW1pZGl0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZCgpIHtcclxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKCd3aW5kJywgJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCB3aW5kSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB3aW5kSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dpbmQtZmlsbC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIHdpbmRJY29uRGl2LmFwcGVuZENoaWxkKHdpbmRJbWcpO1xyXG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZEljb25EaXYpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgd2luZFNwZWVkLmlkID0gJ3dpbmQnO1xyXG4gIHdpbmRTcGVlZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xyXG5cclxuICBjb25zdCB3aW5kVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIHdpbmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnc21hbGwnKTtcclxuICB3aW5kVGl0bGUudGV4dENvbnRlbnQgPSAnV2luZCc7XHJcbiAgd2luZFRpdGxlRGl2LmFwcGVuZENoaWxkKHdpbmRUaXRsZSk7XHJcblxyXG4gIHdpbmREaXYuYXBwZW5kKHdpbmRTcGVlZERpdiwgd2luZFRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIHdpbmREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVVWKCkge1xyXG4gIGNvbnN0IHV2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdXZEaXYuY2xhc3NMaXN0LmFkZCgndXYnLCAnbW9kdWxlJyk7XHJcblxyXG4gIGNvbnN0IHV2SWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHV2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgdXZJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvc3VuLWZpbGxlZC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIHV2SWNvbkRpdi5hcHBlbmRDaGlsZCh1dkltZyk7XHJcbiAgdXZEaXYuYXBwZW5kQ2hpbGQodXZJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgdXZJbmRleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdXZJbmRleC5pZCA9ICd1di1pbmRleCc7XHJcbiAgdXZJbmRleERpdi5hcHBlbmRDaGlsZCh1dkluZGV4KTtcclxuXHJcbiAgY29uc3QgdXZUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHV2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIHV2VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5JywgJ3NtYWxsJyk7XHJcbiAgdXZUaXRsZS50ZXh0Q29udGVudCA9ICdVViBJbmRleCc7XHJcbiAgdXZUaXRsZURpdi5hcHBlbmRDaGlsZCh1dlRpdGxlKTtcclxuXHJcbiAgdXZEaXYuYXBwZW5kKHV2SW5kZXhEaXYsIHV2VGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gdXZEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzKCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyc7XHJcblxyXG4gIGNvbnN0IG1vcmVGb3JlY2FzdERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb3JlRm9yZWNhc3REZXRhaWxzRGl2LmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGNyZWF0ZUNoYW5jZU9mUmFpbigpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gY3JlYXRlSHVtaWRpdHkoKTtcclxuICBjb25zdCB3aW5kID0gY3JlYXRlV2luZCgpO1xyXG4gIGNvbnN0IHV2ID0gY3JlYXRlVVYoKTtcclxuXHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmQoY2hhbmNlT2ZSYWluLCBodW1pZGl0eSwgd2luZCwgdXYpO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKG1vcmVGb3JlY2FzdERldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjb252ZXJ0VFosIGZldGNoV2VhdGhlckljb24gfSBmcm9tICcuL2ZldGNoLXdlYXRoZXInO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Q2FyZChob3VyLCB0ZW1wLCBpY29uKSB7XHJcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWNhcmQnKTtcclxuXHJcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgdGltZS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xyXG4gIHRpbWUudGV4dENvbnRlbnQgPSBob3VyO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBmb3JlY2FzdEljb24uc3JjID0gaWNvbjtcclxuXHJcbiAgY29uc3QgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3VybHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcih0ZW1wKX3CsGA7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICBjb250YWluZXIuYXBwZW5kKHRpbWUsIGZvcmVjYXN0SWNvbiwgaG91cmx5VGVtcCk7XHJcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gY2FyZERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRpbWVUbzEySHIoaG91cikge1xyXG4gIGxldCB0O1xyXG4gIGlmIChob3VyID09PSAxMiB8fCBob3VyID09PSAzNikge1xyXG4gICAgdCA9ICcxMnBtJztcclxuICB9IGVsc2UgaWYgKGhvdXIgPT09IDAgfHwgaG91ciA9PT0gMjQpIHtcclxuICAgIHQgPSAnMTJhbSc7XHJcbiAgfSBlbHNlIGlmICgoaG91ciA+IDAgJiYgaG91ciA8IDEyKSB8fCAoaG91ciA+IDI0ICYmIGhvdXIgPCAzNikpIHtcclxuICAgIGNvbnN0IGggPSBob3VyICUgMTI7XHJcbiAgICB0ID0gYCR7aH1hbWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGggPSBob3VyICUgMTI7XHJcbiAgICB0ID0gYCR7aH1wbWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlMjRIb3VyRm9yZWNhc3QoZGF0YSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBjdXJyZW50SG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBkYXRhLnRpbWV6b25lKS5nZXRIb3VycygpO1xyXG4gIGNvbnN0IGhvdXJseVJhbmdlID0gY3VycmVudEhvdXIgKyAyNDtcclxuXHJcbiAgZm9yIChsZXQgaSA9IGN1cnJlbnRIb3VyOyBpIDw9IGhvdXJseVJhbmdlOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHRlbXAgPSBkYXRhLmhvdXJseS50ZW1wZXJhdHVyZV8ybVtpXTtcclxuICAgIGNvbnN0IGhvdXIgPSBjb252ZXJ0VGltZVRvMTJIcihpKTtcclxuICAgIGNvbnN0IGNvZGUgPSBkYXRhLmhvdXJseS53ZWF0aGVyY29kZVtpXTtcclxuICAgIGNvbnN0IGlzRGF5ID0gZGF0YS5ob3VybHkuaXNfZGF5W2ldO1xyXG4gICAgY29uc3QgaWNvbiA9IGZldGNoV2VhdGhlckljb24oY29kZSwgaXNEYXkpO1xyXG4gICAgY29uc3QgY2FyZCA9IGNyZWF0ZUhvdXJseUNhcmQoaG91ciwgdGVtcCwgaWNvbik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlGb3JlY2FzdCgpIHtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NtYWxsJyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZS50ZXh0Q29udGVudCA9ICdIb3VybHkgRm9yZWNhc3QnO1xyXG4gIGhvdXJseUZvcmVjYXN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RUaXRsZSk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENhcm91c2VsLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCcsICdjdXN0b20tc2Nyb2xsYmFyJyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RDb250YWluZXIpO1xyXG5cclxuICBob3VybHlGb3JlY2FzdC5hcHBlbmQoaG91cmx5Rm9yZWNhc3RUaXRsZURpdiwgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCk7XHJcblxyXG4gIHJldHVybiBob3VybHlGb3JlY2FzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlMjRIb3VyRm9yZWNhc3QocXVlcnkpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwnKVswXTtcclxuICBjYXJvdXNlbC5pbm5lckhUTUwgPSAnJztcclxuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKGhpZ2gsIGxvdywgZGF5LCBjb3IsIGRlc2MsIGljb24pIHtcclxuICBjb25zdCBmb3JlY2FzdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcmVjYXN0QmFyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWJhcicpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRheURpdi5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGRheU9mVGhlV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgZGF5T2ZUaGVXZWVrLmNsYXNzTGlzdC5hZGQoJ2RheScpO1xyXG4gIGRheU9mVGhlV2Vlay50ZXh0Q29udGVudCA9IGRheS5zdWJzdHJpbmcoMCwgMyk7XHJcblxyXG4gIGRheURpdi5hcHBlbmRDaGlsZChkYXlPZlRoZVdlZWspO1xyXG4gIGZvcmVjYXN0QmFyLmFwcGVuZENoaWxkKGRheURpdik7XHJcblxyXG4gIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb3JlY2FzdERpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItaWNvbicpO1xyXG4gIGNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBpY29uSW1nLnNyYyA9IGljb247XHJcblxyXG4gIHdlYXRoZXJJY29uRGl2LmFwcGVuZENoaWxkKGljb25JbWcpO1xyXG4gIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XHJcblxyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XHJcbiAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERpdik7XHJcblxyXG4gIGNvbnN0IHRlbXBlcmF0dXJlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBlcmF0dXJlc0Rpdi5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZXMnKTtcclxuXHJcbiAgY29uc3QgaGlnaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhpZ2hEaXYuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xyXG5cclxuICBjb25zdCBoaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBoaWdoUC5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgaGlnaFAudGV4dENvbnRlbnQgPSBgJHtoaWdofcKwYDtcclxuICBoaWdoRGl2LmFwcGVuZENoaWxkKGhpZ2hQKTtcclxuXHJcbiAgY29uc3QgbG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG93RGl2LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xyXG5cclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSBgJHtsb3d9wrBgO1xyXG4gIGxvd0Rpdi5hcHBlbmRDaGlsZChsb3dQKTtcclxuXHJcbiAgdGVtcGVyYXR1cmVzRGl2LmFwcGVuZChoaWdoRGl2LCBsb3dEaXYpO1xyXG5cclxuICBjb25zdCBjb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JEaXYuY2xhc3NMaXN0LmFkZCgnY2hhbmNlLW9mLXJhaW4nKTtcclxuICBjb25zdCBjb3JJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29ySWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckljb25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicsICd3aGl0ZS1maWx0ZXInKTtcclxuICBjb3JJY29uSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL2Ryb3BsZXQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjb3JJY29uRGl2LmFwcGVuZENoaWxkKGNvckljb25JbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgcGVyY2VudGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcGVyY2VudGFnZS5jbGFzc0xpc3QuYWRkKCdwZXJjZW50YWdlJyk7XHJcbiAgcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke2Nvcn0lYDtcclxuICBwZXJjZW50YWdlRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2UpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlRGl2KTtcclxuXHJcbiAgY29uc3QgbnVtYmVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG51bWJlcnNEaXYuY2xhc3NMaXN0LmFkZCgnbnVtYmVycycpO1xyXG4gIG51bWJlcnNEaXYuYXBwZW5kKHRlbXBlcmF0dXJlc0RpdiwgY29yRGl2KTtcclxuICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKG51bWJlcnNEaXYpO1xyXG5cclxuICBmb3JlY2FzdEJhci5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcclxuXHJcbiAgcmV0dXJuIGZvcmVjYXN0QmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUzRGF5Rm9yZWNhc3QoKSB7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgndGhyZWUtZGF5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGUudGV4dENvbnRlbnQgPSAnMy1EYXkgRm9yZWNhc3QnO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0VGl0bGUpO1xyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5hcHBlbmQodGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2LCB0aHJlZURheUZvcmVjYXN0TGlzdCk7XHJcblxyXG4gIHJldHVybiB0aHJlZURheUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhpZ2ggPSBNYXRoLmZsb29yKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuaGlnaFtpXSk7XHJcbiAgICBjb25zdCBsb3cgPSBNYXRoLmZsb29yKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QubG93W2ldKTtcclxuICAgIGNvbnN0IGRheSA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuZGF5c1tpXTtcclxuICAgIGNvbnN0IGNvciA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuY29yW2ldO1xyXG4gICAgY29uc3QgZGVzYyA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3Qud2VhdGhlckRlc2NyaXB0aW9uW2ldO1xyXG4gICAgY29uc3QgaWNvbiA9IGZldGNoV2VhdGhlckljb24ocXVlcnkudGhyZWVEYXlGb3JlY2FzdC53ZWF0aGVyQ29kZVtpXSwgMSk7XHJcbiAgICBjb25zdCBiYXIgPSBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKGhpZ2gsIGxvdywgZGF5LCBjb3IsIGRlc2MsIGljb24pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0JylbMF07XHJcbiAgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB0aHJlZURheUZvcmVDYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWRkaXRpb25hbC1mb3JlY2FzdCc7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gY3JlYXRlSG91cmx5Rm9yZWNhc3QoKTtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gY3JlYXRlM0RheUZvcmVjYXN0KCk7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKGhvdXJseUZvcmVjYXN0LCB0aHJlZURheUZvcmVjYXN0KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udmVydFRaLCBmZXRjaFdlYXRoZXJJY29uIH0gZnJvbSAnLi9mZXRjaC13ZWF0aGVyJztcclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0SGlnaChxdWVyeSkge1xyXG4gIGNvbnN0IGhpZ2ggPSBNYXRoLmZsb29yKHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLmRhaWx5SGlnaCk7XHJcbiAgcmV0dXJuIGAke2hpZ2h9wrBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dExvdyhxdWVyeSkge1xyXG4gIGNvbnN0IGxvdyA9IE1hdGguZmxvb3IocXVlcnkuY3VycmVudFdlYXRoZXIuZGFpbHlMb3cpO1xyXG4gIHJldHVybiBgJHtsb3d9wrBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dEN1cnJlbnRUZW1wKHF1ZXJ5KSB7XHJcbiAgY29uc3QgdGVtcCA9IE1hdGguZmxvb3IocXVlcnkuY3VycmVudFdlYXRoZXIuY3VycmVudFRlbXApO1xyXG4gIHJldHVybiBgJHt0ZW1wfcKwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRDaXR5KHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHF1ZXJ5LmNpdHlOYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dERlc2NyaXB0aW9uKHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLndlYXRoZXJEZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRXZWF0aGVySWNvbihxdWVyeSkge1xyXG4gIGNvbnN0IGxvY2FsSG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBxdWVyeS50aW1lem9uZSkuZ2V0SG91cnMoKTtcclxuICBjb25zdCBjb2RlID0gcXVlcnkuaG91cmx5LndlYXRoZXJjb2RlW2xvY2FsSG91cl07XHJcbiAgY29uc3QgdmFsdWUgPSBxdWVyeS5ob3VybHkuaXNfZGF5W2xvY2FsSG91cl07XHJcblxyXG4gIHJldHVybiBmZXRjaFdlYXRoZXJJY29uKGNvZGUsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRGb3JlY2FzdExheW91dChxdWVyeSkge1xyXG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtY2l0eScpO1xyXG4gIGN1cnJlbnRDaXR5LnRleHRDb250ZW50ID0gcHJpbnRPdXRDaXR5KHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10ZW1wJyk7XHJcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBwcmludE91dEN1cnJlbnRUZW1wKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgZGFpbHlIaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtaGlnaCcpO1xyXG4gIGRhaWx5SGlnaC50ZXh0Q29udGVudCA9IHByaW50T3V0SGlnaChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGRhaWx5TG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbG93Jyk7XHJcbiAgZGFpbHlMb3cudGV4dENvbnRlbnQgPSBwcmludE91dExvdyhxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3QtZGVzY3JpcHRpb24nKTtcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJpbnRPdXREZXNjcmlwdGlvbihxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXInKTtcclxuICBjdXJyZW50V2VhdGhlckljb24uc3JjID0gcHJpbnRPdXRXZWF0aGVySWNvbihxdWVyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRGb3JlY2FzdCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnY3VycmVudC1mb3JlY2FzdCc7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRDaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGN1cnJlbnRDaXR5LmlkID0gJ2N1cnJlbnQtY2l0eSc7XHJcbiAgY3VycmVudENpdHlEaXYuYXBwZW5kQ2hpbGQoY3VycmVudENpdHkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGN1cnJlbnREZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRldGFpbHMnKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50V2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGN1cnJlbnRXZWF0aGVySW1nLmlkID0gJ2N1cnJlbnQtd2VhdGhlcic7XHJcbiAgY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJbWcpO1xyXG5cclxuICBjb25zdCBib3R0b21EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib3R0b21EaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tJyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZCgnbGFyZ2UnKTtcclxuICBjdXJyZW50VGVtcC5pZCA9ICdjdXJyZW50LXRlbXAnO1xyXG4gIGN1cnJlbnRUZW1wRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXYpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb24uaWQgPSAnZm9yZWNhc3QtZGVzY3JpcHRpb24nO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REZXNjcmlwdGlvbik7XHJcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGVzY3JpcHRpb25EaXYpO1xyXG5cclxuICBjb25zdCBoaWdoTG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGlnaExvd0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWdoLWxvdycpO1xyXG5cclxuICBjb25zdCBoaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaGlnaFAudGV4dENvbnRlbnQgPSAnSDogJztcclxuXHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBoaWdoLmlkID0gJ2N1cnJlbnQtaGlnaCc7XHJcbiAgaGlnaFAuYXBwZW5kQ2hpbGQoaGlnaCk7XHJcbiAgaGlnaERpdi5hcHBlbmRDaGlsZChoaWdoUCk7XHJcblxyXG4gIGNvbnN0IGxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMOiAnO1xyXG5cclxuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbG93LmlkID0gJ2N1cnJlbnQtbG93JztcclxuICBsb3dQLmFwcGVuZENoaWxkKGxvdyk7XHJcbiAgbG93RGl2LmFwcGVuZENoaWxkKGxvd1ApO1xyXG5cclxuICBoaWdoTG93RGl2LmFwcGVuZChoaWdoRGl2LCBsb3dEaXYpO1xyXG4gIGJvdHRvbURpdi5hcHBlbmRDaGlsZChoaWdoTG93RGl2KTtcclxuXHJcbiAgY3VycmVudERldGFpbHNEaXYuYXBwZW5kKGN1cnJlbnRXZWF0aGVyRGl2LCBib3R0b21EaXYpO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZChjdXJyZW50Q2l0eURpdiwgY3VycmVudERldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJmdW5jdGlvbiBqb2luUXVlcnkocXVlcnkpIHtcclxuICBjb25zdCBuZXdRdWVyeSA9IHF1ZXJ5LnNwbGl0KCcsICcpLmpvaW4oKTtcclxuICByZXR1cm4gbmV3UXVlcnk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQnlQb3N0YWxDb2RlKHF1ZXJ5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3ppcD96aXA9JHtxdWVyeX0mYXBwaWQ9OGRkNDQ3ZjBlZmFlODMyNGYxNWMyNGYyZWZkZDdlOWZgLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9LCAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gcmV0dXJuIGVycm9yXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0J5Q2l0eShxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3F1ZXJ5fSZsaW1pdD01JmFwcGlkPThkZDQ0N2YwZWZhZTgzMjRmMTVjMjRmMmVmZGQ3ZTlmYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIHJldHVybiBlcnJvclxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2hlY2tRdWVyeShxdWVyeSkge1xyXG4gIC8vIGJyZWFrIHVwIHF1ZXJ5IGludG8gY29ycmVjdCBwYXJ0cyAoZWcuIGNpdHksIHN0YXRlLCBjb3VudHJ5LCB6aXAgY29kZSlcclxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGpvaW5RdWVyeShxdWVyeSk7XHJcbiAgY29uc3QgcG9zdGFsQ29kZVJlc3VsdCA9IGF3YWl0IGNoZWNrQnlQb3N0YWxDb2RlKHNlYXJjaFF1ZXJ5KTtcclxuICBjb25zdCBjaXR5UmVzdWx0ID0gYXdhaXQgY2hlY2tCeUNpdHkoc2VhcmNoUXVlcnkpO1xyXG5cclxuICBpZiAoIShwb3N0YWxDb2RlUmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIHBvc3RhbENvZGVSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcbiAgICBjb25zb2xlLmxvZygnd2UgZm91bmQgYSB6aXAgY29kZSB0aGF0IG1hdGNoZXMhIHJlc3VsdDogJywgcG9zdGFsQ29kZVJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIHBvc3RhbENvZGVSZXN1bHQ7XHJcbiAgfSBpZiAoIShjaXR5UmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIGNpdHlSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcbiAgICBjb25zb2xlLmxvZygnd2UgZm91bmQgYSBjaXR5IHRoYXQgbWF0Y2hlcyEgcmVzdWx0OiAnLCBjaXR5UmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gY2l0eVJlc3VsdDtcclxuICB9XHJcbiAgLy8gZGlzcGxheSBhbiBlcnJvciB0aGF0IHRoZSBzZWFyY2ggcXVlcnkgd2FzIG5vdCBmb3VuZCBhbG9uZyB3aXRoIHNlYXJjaCB0aXBzXHJcbiAgY29uc29sZS5sb2coJ25vIGNpdHkgZm91bmQgOignKTtcclxuXHJcbiAgcmV0dXJuICdObyBjaXR5IGZvdW5kJztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRaKGRhdGUsIHR6U3RyaW5nKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZTogdHpTdHJpbmcgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSkge1xyXG4gIGxldCBzcmM7XHJcbiAgY29uc3Qgc3RyaW5nID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItaWNvbnMvJztcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgaWYgKGlzRGF5ID09PSAxKSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfWNsZWFyLXNreS1zdW5ueS5zdmdgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31jbGVhci1za3ktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBpZiAoaXNEYXkgPT09IDEpIHtcclxuICAgICAgICBzcmMgPSBgJHtzdHJpbmd9bW9zdGx5LWNsZWFyLXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfW1vc3RseS1jbGVhci1tb29uLnN2Z2A7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIGlmIChpc0RheSA9PT0gMSkge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31wYXJ0bHktY2xvdWR5LXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfXBhcnRseS1jbG91ZHktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9b3ZlcmNhc3Quc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDQ1OlxyXG4gICAgY2FzZSA0ODpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfWZvZy5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNTE6XHJcbiAgICBjYXNlIDUzOlxyXG4gICAgY2FzZSA1NTpcclxuICAgIGNhc2UgNTY6XHJcbiAgICBjYXNlIDU3OlxyXG4gICAgY2FzZSA4MDpcclxuICAgIGNhc2UgODE6XHJcbiAgICBjYXNlIDgyOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9ZHJpenpsZS5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNjE6XHJcbiAgICBjYXNlIDYzOlxyXG4gICAgY2FzZSA2NTpcclxuICAgIGNhc2UgNjY6XHJcbiAgICBjYXNlIDY3OlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9cmFpbi5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNzE6XHJcbiAgICBjYXNlIDczOlxyXG4gICAgY2FzZSA3NTpcclxuICAgIGNhc2UgNzc6XHJcbiAgICBjYXNlIDg1OlxyXG4gICAgY2FzZSA4NjpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfXNub3cuc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDk1OlxyXG4gICAgY2FzZSA5NjpcclxuICAgIGNhc2UgOTk6XHJcbiAgICAgIHNyYyA9IGAke3N0cmluZ310aHVuZGVyc3Rvcm0uc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBzcmM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJEZXNjcmlwdGlvbihjb2RlKSB7XHJcbiAgY29uc3Qgd2VhdGhlckNvZGVzID0ge1xyXG4gICAgMDogJ0NsZWFyIFNreScsXHJcbiAgICAxOiAnTWFpbmx5IENsZWFyJyxcclxuICAgIDI6ICdQYXJ0bHkgQ2xvdWR5JyxcclxuICAgIDM6ICdPdmVyY2FzdCcsXHJcbiAgICA0NTogJ0ZvZycsXHJcbiAgICA0ODogJ0RlcG9zaXRpbmcgUmltZSBGb2cnLFxyXG4gICAgNTE6ICdMaWdodCBEcml6emxlJyxcclxuICAgIDUzOiAnTW9kZXJhdGUgRHJpenpsZScsXHJcbiAgICA1NTogJ0RlbnNlIERyaXp6bGUnLFxyXG4gICAgNTY6ICdGcmVlemluZywgTGlnaHQgRHJpenpsZScsXHJcbiAgICA1NzogJ0ZyZWV6aW5nLCBEZW5zZSBEcml6emxlJyxcclxuICAgIDYxOiAnTGlnaHQgUmFpbicsXHJcbiAgICA2MzogJ01vZGVyYXRlIFJhaW4nLFxyXG4gICAgNjU6ICdIZWF2eSBSYWluJyxcclxuICAgIDY2OiAnRnJlZXppbmcsIExpZ2h0IFJhaW4nLFxyXG4gICAgNjc6ICdGcmVlemluZywgSGVhdnkgUmFpbicsXHJcbiAgICA3MTogJ0xpZ2h0IFNub3cnLFxyXG4gICAgNzM6ICdNb2RlcmF0ZSBTbm93JyxcclxuICAgIDc1OiAnSGVhdnkgU25vdycsXHJcbiAgICA3NzogJ1Nub3cgR3JhaW5zJyxcclxuICAgIDgwOiAnTGlnaHQgU2hvd2VycycsXHJcbiAgICA4MTogJ01vZGVyYXRlIFNob3dlcnMnLFxyXG4gICAgODI6ICdIZWF2eSBTaG93ZXJzJyxcclxuICAgIDg1OiAnTGlnaHQgU25vdyBTaG93ZXInLFxyXG4gICAgODY6ICdIZWF2eSBTbm93IFNob3dlcicsXHJcbiAgICA5NTogJ1RodW5kZXJzdG9ybScsXHJcbiAgICA5NjogJ1RodW5kZXJzdG9ybSBhbmQgTGlnaHQgSGFpbCcsXHJcbiAgICA5OTogJ1RodW5kZXJzdG9ybSBhbmQgSGVhdnkgSGFpbCcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF5KGNvZGUpIHtcclxuICBjb25zdCBkYXlzID0ge1xyXG4gICAgMDogJ1N1bmRheScsXHJcbiAgICAxOiAnTW9uZGF5JyxcclxuICAgIDI6ICdUdWVzZGF5JyxcclxuICAgIDM6ICdXZWRuZXNkYXknLFxyXG4gICAgNDogJ1RodXJzZGF5JyxcclxuICAgIDU6ICdGcmlkYXknLFxyXG4gICAgNjogJ1NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF5c1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50SG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBxdWVyeS50aW1lem9uZSkuZ2V0SG91cnMoKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IHF1ZXJ5LmhvdXJseS50ZW1wZXJhdHVyZV8ybVtjdXJyZW50SG91cl07XHJcbiAgY29uc3QgZGFpbHlIaWdoID0gcXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWF4WzBdO1xyXG4gIGNvbnN0IGRhaWx5TG93ID0gcXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluWzBdO1xyXG4gIGNvbnN0IHdlYXRoZXJDb2RlID0gcXVlcnkuaG91cmx5LndlYXRoZXJjb2RlW2N1cnJlbnRIb3VyXTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBnZXRXZWF0aGVyRGVzY3JpcHRpb24od2VhdGhlckNvZGUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3VycmVudFRlbXAsIGRhaWx5SGlnaCwgZGFpbHlMb3csIHdlYXRoZXJEZXNjcmlwdGlvbixcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEN1cnJlbnRXZWF0aGVyKHF1ZXJ5KSB7XHJcbiAgY29uc3QgbGF0aXR1ZGUgPSBxdWVyeS5sYXQ7XHJcbiAgY29uc3QgbG9uZ2l0dWRlID0gcXVlcnkubG9uO1xyXG4gIGNvbnN0IGNpdHlOYW1lID0gcXVlcnkubmFtZTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPSR7bGF0aXR1ZGV9JmxvbmdpdHVkZT0ke2xvbmdpdHVkZX0maG91cmx5PXRlbXBlcmF0dXJlXzJtLHJlbGF0aXZlaHVtaWRpdHlfMm0sd2VhdGhlcmNvZGUsd2luZHNwZWVkXzEwbSxpc19kYXkmZGFpbHk9d2VhdGhlcmNvZGUsdGVtcGVyYXR1cmVfMm1fbWF4LHRlbXBlcmF0dXJlXzJtX21pbix1dl9pbmRleF9tYXgscHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXgmdGVtcGVyYXR1cmVfdW5pdD1mYWhyZW5oZWl0JndpbmRzcGVlZF91bml0PW1waCZwcmVjaXBpdGF0aW9uX3VuaXQ9aW5jaCZ0aW1lem9uZT1hdXRvYCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBjcmVhdGVDdXJyZW50V2VhdGhlcihyZXN1bHQpO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSB7IGNpdHlOYW1lLCAuLi5yZXN1bHQsIGN1cnJlbnRXZWF0aGVyIH07XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEZWZhdWx0TG9jYXRpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0P2xhdGl0dWRlPTUxLjUwODUmbG9uZ2l0dWRlPS0wLjEyNTcmaG91cmx5PXRlbXBlcmF0dXJlXzJtLHJlbGF0aXZlaHVtaWRpdHlfMm0sd2VhdGhlcmNvZGUsd2luZHNwZWVkXzEwbSxpc19kYXkmZGFpbHk9d2VhdGhlcmNvZGUsdGVtcGVyYXR1cmVfMm1fbWF4LHRlbXBlcmF0dXJlXzJtX21pbix1dl9pbmRleF9tYXgscHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXgmdGVtcGVyYXR1cmVfdW5pdD1mYWhyZW5oZWl0JndpbmRzcGVlZF91bml0PW1waCZwcmVjaXBpdGF0aW9uX3VuaXQ9aW5jaCZ0aW1lem9uZT1hdXRvJyk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIocmVzdWx0KTtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gJ0xvbmRvbic7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHsgY2l0eU5hbWUsIC4uLnJlc3VsdCwgY3VycmVudFdlYXRoZXIgfTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRocmVlRGF5Rm9yZWNhc3QocXVlcnkpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xyXG4gIGNvbnN0IGhpZ2ggPSBbXTtcclxuICBjb25zdCBsb3cgPSBbXTtcclxuICBjb25zdCBjb3IgPSBbXTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBbXTtcclxuICBjb25zdCB3ZWF0aGVyQ29kZSA9IFtdO1xyXG4gIGNvbnN0IGRheXMgPSBbXTtcclxuICAvLyBnZXQgdGVtcHNcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkgKz0gMSkge1xyXG4gICAgaGlnaC5wdXNoKHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heFtpXSk7XHJcbiAgICBsb3cucHVzaChxdWVyeS5kYWlseS50ZW1wZXJhdHVyZV8ybV9taW5baV0pO1xyXG4gICAgY29yLnB1c2gocXVlcnkuZGFpbHkucHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXhbaV0pO1xyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnB1c2goZ2V0V2VhdGhlckRlc2NyaXB0aW9uKHF1ZXJ5LmRhaWx5LndlYXRoZXJjb2RlW2ldKSk7XHJcbiAgICB3ZWF0aGVyQ29kZS5wdXNoKHF1ZXJ5LmRhaWx5LndlYXRoZXJjb2RlW2ldKTtcclxuICB9XHJcbiAgLy8gYXNzaWduIGRheXNcclxuICBmb3IgKGxldCBpID0gZGF5ICsgMTsgaSA8IChkYXkgKyA0KTsgaSArPSAxKSB7XHJcbiAgICBkYXlzLnB1c2goZ2V0RGF5KGkgJSA3KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaGlnaCwgbG93LCBjb3IsIGRheXMsIHdlYXRoZXJEZXNjcmlwdGlvbiwgd2VhdGhlckNvZGUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGVmYXVsdFdlYXRoZXIoKSB7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGVmYXVsdExvY2F0aW9uKCk7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGF3YWl0IGdldFRocmVlRGF5Rm9yZWNhc3QoY3VycmVudFdlYXRoZXJEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgLi4uY3VycmVudFdlYXRoZXJEYXRhLCB0aHJlZURheUZvcmVjYXN0IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihxdWVyeSkge1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoQ3VycmVudFdlYXRoZXIocXVlcnkpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBhd2FpdCBnZXRUaHJlZURheUZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gIHJldHVybiB7IC4uLmN1cnJlbnRXZWF0aGVyRGF0YSwgdGhyZWVEYXlGb3JlY2FzdCB9O1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVDdXJyZW50Rm9yZWNhc3QsIHsgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9jdXJyZW50LWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjcmVhdGVNb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscywgeyB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0JztcclxuaW1wb3J0IGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCwgeyB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQsIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9hZGRpdGlvbmFsLWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjaGVja1F1ZXJ5IGZyb20gJy4vZmV0Y2gtY2l0aWVzJztcclxuaW1wb3J0IGZldGNoV2VhdGhlciwgeyBmZXRjaERlZmF1bHRXZWF0aGVyIH0gZnJvbSAnLi9mZXRjaC13ZWF0aGVyJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNpdHlSZXN1bHRUZXh0KHJlc3VsdCkge1xyXG4gIGlmIChyZXN1bHQuemlwID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gcmVzdWx0Lm5hbWU7XHJcbiAgICBjb25zdCB7IHN0YXRlIH0gPSByZXN1bHQ7XHJcbiAgICBjb25zdCB7IGNvdW50cnkgfSA9IHJlc3VsdDtcclxuXHJcbiAgICByZXR1cm4gYCR7Y2l0eU5hbWV9LCAke3N0YXRlfSwgJHtjb3VudHJ5fWA7XHJcbiAgfVxyXG4gIGNvbnN0IHsgemlwIH0gPSByZXN1bHQ7XHJcbiAgY29uc3QgY2l0eU5hbWUgPSByZXN1bHQubmFtZTtcclxuICBjb25zdCB7IGNvdW50cnkgfSA9IHJlc3VsdDtcclxuXHJcbiAgcmV0dXJuIGAke3ppcH0sICR7Y2l0eU5hbWV9LCAke2NvdW50cnl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVlcnlSZXN1bHQoc2VhcmNoUmVzdWx0KSB7XHJcbiAgY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9sb2NhdGlvbi1tYXJrZXIuc3ZnJztcclxuICBsb2NhdGlvbkljb24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcblxyXG4gIGNvbnN0IHRleHRSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZXh0UmVzdWx0LnRleHRDb250ZW50ID0gY3JlYXRlQ2l0eVJlc3VsdFRleHQoc2VhcmNoUmVzdWx0KTtcclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1yZXN1bHQnKTtcclxuXHJcbiAgcmVzdWx0LmFwcGVuZChsb2NhdGlvbkljb24sIHRleHRSZXN1bHQpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2VhcmNoUmVzdWx0cyhyZXN1bHRzKSB7XHJcbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMtY29udGFpbmVyJylbMF07XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdHMpKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgcXVlcnkgPSByZXN1bHRzW2ldO1xyXG4gICAgICBjb25zdCBxdWVyeVJlc3VsdCA9IGNyZWF0ZVF1ZXJ5UmVzdWx0KHF1ZXJ5KTtcclxuICAgICAgcXVlcnlSZXN1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY2FsbCB0aGUgZmV0Y2ggd2VhdGhlciBmdW5jdGlvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZyB3ZWF0aGVyIScpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlcihxdWVyeSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgICB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgICB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJ5UmVzdWx0KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcXVlcnlSZXN1bHQgPSBjcmVhdGVRdWVyeVJlc3VsdChyZXN1bHRzKTtcclxuICAgIHF1ZXJ5UmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgd2VhdGhlciEnKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hXZWF0aGVyKHJlc3VsdHMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gICAgICB1cGRhdGVIb3VybHlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gICAgICB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlcnlSZXN1bHQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNpdHlJbnB1dEZvcm1Nb2JpbGUoKSB7XHJcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoJyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmZvciA9ICdjaXR5LW1vYmlsZSc7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9ICdjaXR5LW1vYmlsZSc7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggY2l0eSc7XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrUXVlcnkoaW5wdXQudmFsdWUpO1xyXG4gICAgZGlzcGxheVNlYXJjaFJlc3VsdHMocmVzdWx0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGVTd2l0Y2godG9nZ2xlTmFtZSkge1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcclxuICBsYWJlbC5mb3IgPSB0b2dnbGVOYW1lO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgaW5wdXQuaWQgPSB0b2dnbGVOYW1lO1xyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJywgJ3JvdW5kJyk7XHJcblxyXG4gIGxhYmVsLmFwcGVuZChpbnB1dCwgc3Bhbik7XHJcblxyXG4gIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9iaWxlU2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2JpbGUtc2VhcmNoLW1vZGFsJylbMF07XHJcbiAgaWYgKG1vYmlsZVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgIG1vYmlsZVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2JpbGVTZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25NZW51KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdicpO1xyXG4gIGNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHNlYXJjaEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnJztcclxuXHJcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICBsb2dvSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvd2VhdGhlci1hcHAtbG9nby5zdmcnO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1jaXR5JztcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBjaXR5IChlZy4gTG9zIEFuZ2VsZXMpJztcclxuXHJcbiAgc2VhcmNoQ29udGFpbmVyRGl2LmFwcGVuZChzZWFyY2hJbWcsIHNlYXJjaElucHV0KTtcclxuICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyRGl2KTtcclxuXHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhhbWJ1cmdlck1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcclxuICBjb25zdCBoYW1idXJnZXJNZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2hhbWJ1cmdlci1tZW51LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgaGFtYnVyZ2VyTWVudUJ1dHRvbi5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51SW1nKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1idXR0b24nKTtcclxuICBzZWFyY2hCdXR0b24uYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKTtcclxuXHJcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoTW9kYWwpO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaERpdi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtZGl2JywgJ2hpZGRlbicpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuaWQgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaFAuY2xhc3NMaXN0LmFkZCgnZGFyay1saWdodC1zd2l0Y2gnLCAnc21hbGwnKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoUC50ZXh0Q29udGVudCA9ICdFbmFibGUgRGFyayBNb2RlJztcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaCA9IGNyZWF0ZVRvZ2dsZVN3aXRjaCgpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2guaWQgPSAnZGFyay1saWdodC1zd2l0Y2gnO1xyXG5cclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LmFwcGVuZChkYXJrTGlnaHRNb2RlU3dpdGNoUCwgZGFya0xpZ2h0TW9kZVN3aXRjaCk7XHJcblxyXG4gIGNvbnN0IGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1kaXYnKTtcclxuXHJcbiAgY29uc3QgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAuY2xhc3NMaXN0LmFkZCgnZmFyZW5oZWl0LWNlbHNpdXMtc3dpdGNoJywgJ3NtYWxsJyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAudGV4dENvbnRlbnQgPSAnRW5hYmxlIENlbHNpdXMnO1xyXG5cclxuICBjb25zdCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoID0gY3JlYXRlVG9nZ2xlU3dpdGNoKCk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaC5pZCA9ICdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnO1xyXG5cclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmFwcGVuZChmYXJlbmhlaXRDZWxzaXVzU3dpdGNoUCwgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaCk7XHJcblxyXG4gIGNvbnN0IHN3aXRjaGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3dpdGNoZXNEaXYuY2xhc3NMaXN0LmFkZCgnc3dpdGNoZXMnKTtcclxuICBzd2l0Y2hlc0Rpdi5hcHBlbmQoZGFya0xpZ2h0TW9kZVN3aXRjaERpdiwgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdik7XHJcblxyXG4gIGNvbnN0IGFkZGl0aW9uYWxPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1vcHRpb25zJyk7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuYXBwZW5kKHNlYXJjaEJ1dHRvbiwgaGFtYnVyZ2VyTWVudUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBvcHRpb25zRGl2LmFwcGVuZChzd2l0Y2hlc0RpdiwgYWRkaXRpb25hbE9wdGlvbnNEaXYpO1xyXG5cclxuICBuYXYuYXBwZW5kKGxvZ29EaXYsIG9wdGlvbnNEaXYpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBzaWRlTmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgc2lkZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi1jb250YWluZXInLCAnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2Jyk7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgbG9nby5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3dlYXRoZXItYXBwLWxvZ28uc3ZnJztcclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIHNpZGVOYXYuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdG9wTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBkYXJrTW9kZS50ZXh0Q29udGVudCA9ICdEYXJrIE1vZGUnO1xyXG5cclxuICBjb25zdCBzZXRUb0NlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIHNldFRvQ2Vsc2l1cy50ZXh0Q29udGVudCA9ICdTZXQgdG8gQ2Vsc2l1cyc7XHJcblxyXG4gIHRvcExpc3QuYXBwZW5kKGRhcmtNb2RlLCBzZXRUb0NlbHNpdXMpO1xyXG5cclxuICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICBuYXZJdGVtcy5hcHBlbmQodG9wTGlzdCwgZGl2aWRlcik7XHJcblxyXG4gIGNvbnN0IGJvdHRvbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xyXG4gIGJvdHRvbUxpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gIG5hdkl0ZW1zLmFwcGVuZENoaWxkKGJvdHRvbUxpc3QpO1xyXG5cclxuICBzaWRlTmF2LmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcclxuICBzaWRlTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVOYXYpO1xyXG5cclxuICBjb25zdCBleGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZXhpdERpdi5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XHJcblxyXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBleGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgZXhpdEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2V4aXQuc3ZnJztcclxuICBleGl0QnRuLmFwcGVuZENoaWxkKGV4aXRJbWcpO1xyXG4gIGV4aXREaXYuYXBwZW5kQ2hpbGQoZXhpdEJ0bik7XHJcblxyXG4gIHNpZGVOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdERpdik7XHJcblxyXG4gIHJldHVybiBzaWRlTmF2Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUaXAodGV4dCkge1xyXG4gIGNvbnN0IHRpcEltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpcEltZ0Rpdi5jbGFzc0xpc3QuYWRkKCd0aXAtaW1nJyk7XHJcbiAgY29uc3QgdGlwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgdGlwSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvdGlwLnN2Zyc7XHJcbiAgdGlwSW1nRGl2LmFwcGVuZENoaWxkKHRpcEltZyk7XHJcblxyXG4gIGNvbnN0IHRpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC50ZXh0Q29udGVudCA9IGAke3RleHR9YDtcclxuICB0aXBEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIGNvbnN0IHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpcC5jbGFzc0xpc3QuYWRkKCd0aXAnKTtcclxuICB0aXAuYXBwZW5kKHRpcEltZ0RpdiwgdGlwRGl2KTtcclxuXHJcbiAgcmV0dXJuIHRpcDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoSW5zdHJ1Y3Rpb25zKCkge1xyXG4gIGNvbnN0IHRleHRPbmUgPSAnVG8gc2VhcmNoIGZvciBjaXR5IGluIHRoZSBVUywgZW50ZXIgY2l0eSwgc3RhdGUsIGFuZCBjb3VudHJ5IGNvZGUgKGVnLiBQaG9lbml4LCBBWiwgVVMpJztcclxuICBjb25zdCB0aXBPbmUgPSBjcmVhdGVUaXAodGV4dE9uZSk7XHJcblxyXG4gIGNvbnN0IHRleHRUd28gPSAnVG8gc2VhcmNoIGZvciBjaXR5IG91dHNpZGUgVVMsIGVudGVyIGNpdHkgYW5kIGNvdW50cnkgY29kZSAoZWcuIExvbmRvbiwgVUspJztcclxuICBjb25zdCB0aXBUd28gPSBjcmVhdGVUaXAodGV4dFR3byk7XHJcblxyXG4gIGNvbnN0IHRleHRUaHJlZSA9ICdZb3UgY2FuIGFsc28gc2VhcmNoIGJ5IHBvc3RhbC96aXAgY29kZSBmb2xsb3dlZCBieSBjb3VudHJ5IGNvZGUgKGVnLiAzMzcwMSwgVVMpJztcclxuICBjb25zdCB0aXBUaHJlZSA9IGNyZWF0ZVRpcCh0ZXh0VGhyZWUpO1xyXG5cclxuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZCgndGlwcy1jb250YWluZXInKTtcclxuICBpbnN0cnVjdGlvbnMuYXBwZW5kKHRpcE9uZSwgdGlwVHdvLCB0aXBUaHJlZSk7XHJcblxyXG4gIHJldHVybiBpbnN0cnVjdGlvbnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZVNlYXJjaE1vZGFsKCkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXNlYXJjaC1tb2RhbCcsICdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjaXR5SW5wdXRGb3JtID0gY3JlYXRlQ2l0eUlucHV0Rm9ybU1vYmlsZSgpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ3ByaW1hcnknKTtcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTZWFyY2hNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChjaXR5SW5wdXRGb3JtLCBjYW5jZWxCdXR0b24pO1xyXG5cclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzdWx0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzZWFyY2hJbnN0cnVjdGlvbnMgPSBjcmVhdGVTZWFyY2hJbnN0cnVjdGlvbnMoKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChzZWFyY2hDb250YWluZXIsIHJlc3VsdHNDb250YWluZXIsIHNlYXJjaEluc3RydWN0aW9ucyk7XHJcbiAgbW9kYWwuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBtb2RhbDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERlZmF1bHRXZWF0aGVyKCkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRGVmYXVsdFdlYXRoZXIoKTtcclxuICB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcclxuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IGNyZWF0ZU5hdmlnYXRpb25NZW51KCk7XHJcbiAgY29uc3Qgc2lkZU5hdmlnYXRpb24gPSBjcmVhdGVTaWRlTmF2aWdhdGlvbigpO1xyXG4gIGNvbnN0IHNlYXJjaE1vYmlsZSA9IGNyZWF0ZU1vYmlsZVNlYXJjaE1vZGFsKCk7XHJcbiAgY29uc3QgY3VycmVudEZvcmVjYXN0ID0gY3JlYXRlQ3VycmVudEZvcmVjYXN0KCk7XHJcbiAgY29uc3QgbW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMgPSBjcmVhdGVNb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscygpO1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxGb3JlY2FzdERldGFpbHMgPSBjcmVhdGVBZGRpdGlvbmFsRm9yZWNhc3QoKTtcclxuXHJcbiAgYm9keS5hcHBlbmQobmF2aWdhdGlvbk1lbnUsIHNpZGVOYXZpZ2F0aW9uLCBzZWFyY2hNb2JpbGUpO1xyXG4gIGdyaWRDb250YWluZXIuYXBwZW5kKGN1cnJlbnRGb3JlY2FzdCwgbW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMsIGFkZGl0aW9uYWxGb3JlY2FzdERldGFpbHMpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbiAgYXdhaXQgbG9hZERlZmF1bHRXZWF0aGVyKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4vbGlnaHQtdGhlbWUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSAnLi9wYWdlLWxheW91dCc7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGNyZWF0ZVBhZ2UoKTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9