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

/** HOURLY CARD STYLES **/
.hourly-card {
    background-color: var(--card);
}

/** 3-DAY FORECAST CARD STYLES **/`, "",{"version":3,"sources":["webpack://./src/light-theme.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kGAAkG;IAClG,uCAAuC;IACvC,gBAAgB;IAChB,sGAAsG;IACtG,gDAAgD;IAChD,wBAAwB;IACxB,0BAA0B;IAC1B,4GAA4G;IAC5G,2BAA2B;IAC3B,mCAAmC;IACnC,yHAAyH;IACzH,+CAA+C;IAC/C,+BAA+B;IAC/B,qCAAqC;IACrC,gDAAgD;AACpD;;AAEA;IACI,sBAAsB;AAC1B;;;;AAIA,yBAAyB;;AAEzB;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;;;AAIA,2BAA2B;AAC3B;IACI,sCAAsC;AAC1C;;;;AAIA,wBAAwB;;AAExB;IACI,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;CACC,2BAA2B;AAC5B;;;AAGA,2BAA2B;AAC3B;IACI,oCAAoC;IACpC,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;IACI,2CAA2C;AAC/C;;;;AAIA,iCAAiC;AACjC;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;;;AAIA,8BAA8B;;AAE9B;IACI,4CAA4C;IAC5C,mBAAmB;IACnB,6BAA6B;AACjC;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,2CAA2C;;AAE3C;IACI,gCAAgC;;IAEhC,iBAAiB;IACjB,0DAA0D;AAC9D;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,yCAAyC;AACzC;IACI,4CAA4C;AAChD;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;AAEJ,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA,iCAAiC","sourcesContent":[":root {\r\n    --black: #323232;\r\n    --black-filter: invert(17%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(93%) contrast(89%);;\r\n    --black-transparent: rgb(0, 0, 0, 0.25);\r\n    --white: #F2F2F2;\r\n    --white-filter: invert(99%) sepia(2%) saturate(143%) hue-rotate(198deg) brightness(116%) contrast(90%);\r\n    --day: linear-gradient(135deg, #0087E7, #C29900);\r\n    --power-primary: #00131A;\r\n    --power-secondary: #64D1F3;\r\n    --power-tertiary: invert(100%) sepia(36%) saturate(4010%) hue-rotate(176deg) brightness(103%) contrast(101%);\r\n    --power-quaternary: #7FA9D6;\r\n    --transparent: rgb(46, 68, 87, 0.5);\r\n    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);\r\n    --additional-forecast: rgba(242, 242, 242, 0.2);\r\n    --card: rgb(250, 250, 250, 0.1);\r\n    --navigation: rgb(242, 242, 242, 0.2);\r\n    --dropshadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.1);  \r\n}\r\n\r\nbody {\r\n    background: var(--day);\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n\r\n.secondary {\r\n    color: var(--power-secondary);\r\n}\r\n\r\n.tertiary {\r\n    filter: var(--power-tertiary);\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\nbutton {\r\n    background-color: var(--power-primary);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n    color: var(--white);\r\n}\r\n\r\nnav.main-nav img {\r\n    filter: var(--white-filter);\r\n}\r\n\r\nnav.side-nav-container {\r\n    color: var(--black);\r\n}\r\n\r\nnav .side-nav {\r\n    background-color: var(--navigation);\r\n}\r\n\r\nnav.side-nav-container .logo,\r\nnav.side-nav-container .divider {\r\n    filter: var(--black-filter);\r\n}\r\n\r\nnav.side-nav-container .exit img {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n.slider {\r\n    background-color: var(--transparent);\r\n    border: solid 1px var(--white);\r\n}\r\n\r\n.slider:before {\r\n    background-color: var(--white);\r\n}\r\n\r\ninput:checked + .slider {\r\n\tbackground: var(--power-quaternary);\r\n}\r\n  \r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px var(--power-quaternary);\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n    color: var(--black);\r\n}\r\n\r\n.mobile-search-modal .container {\r\n    background-color: var(--white);\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n\r\nsection#current-forecast {\r\n    background-color: var(--additional-forecast);\r\n    color: var(--white);\r\n    box-shadow: var(--dropshadow);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #current-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details-container {\r\n    background: var(--power-primary);\r\n\r\n    /* MOBILE STYLE */\r\n    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #more-current-forecast-details-container {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** ADDITIONAL FORECAST DETAILS STYLES **/\r\n#additional-forecast {\r\n    background-color: var(--additional-forecast);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #additional-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n/** HOURLY CARD STYLES **/\r\n.hourly-card {\r\n    background-color: var(--card);\r\n}\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/"],"sourceRoot":""}]);
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
	display: flex;
	gap: 1rem;
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
	overflow-x: auto;
}

.no-scrollbar {
	scrollbar-color: transparent transparent;
}

.no-scrollbar::-webkit-scrollbar {
	height: 0px;
}

.hourly-forecast-carousel > .container {
	display: flex;
	gap: 0.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n\t--black: #222222;\r\n\t--white: #F2F2F2;\r\n\t--gray: #A0A0A0;\r\n\t--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);\r\n\t--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);\r\n\t--transparent: rgb(242, 242, 242, 0.8);\r\n\t--transparent-dark: rgba(34, 34, 34, 0.2);\r\n\t--input-placeholder: rgb(242, 242, 242, 0.7);\r\n}\r\n\r\n\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Thin';\r\n\tsrc: url('../src/assets/fonts/Barlow-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\tcolor: var(--white);\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.white-filter {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n.transparent {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL FONT STYLES **/\r\n\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh2.bold.small {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.bold.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh4 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh4.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh5 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh5.small {\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\nh5.small.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np.large {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 4rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\np.medium {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\np.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n#hidden {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=text] {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tpadding: 0.5rem;\r\n\tpadding-left: 2.5rem;\r\n\tborder: solid 1px;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: var(--white);\r\n}\r\n\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav.main-nav {\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n}\r\n\r\n/** DESKTOP BELOW **/\r\n@media only screen and (min-width: 1024px) {\r\n\tnav.main-nav  {\r\n\t\tpadding: 1rem 5rem;\r\n\t}\r\n}\r\n\r\nnav.main-nav img {\r\n\theight: 1rem;\r\n}\r\n\r\nnav.main-nav .logo, nav.side-nav .logo {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav.main-nav .options {\r\n\tdisplay: flex;\r\n\tgap: 3rem;\r\n}\r\n\r\nnav.main-nav .options .switches {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\nnav.main-nav .options .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\nnav.main-nav .options .additional-options button {\r\n\tpadding: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .additional-options .menu-button {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .desktop-search {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .desktop-search {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\t}\r\n\r\n\r\nnav.main-nav .desktop-search input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--white);\r\n\twidth: 15rem;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--white);\r\n}\r\n\r\nnav.main-nav .desktop-search input::placeholder {\r\n\tcolor: var(--input-placeholder);\r\n}\r\n\r\nnav.side-nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 1;\r\n    gap: 0;\r\n\r\n\tbackground-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\nnav.side-nav-container button {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.side-nav-container .side-nav {\r\n    padding: 1rem;\r\n    flex: 4;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nnav.side-nav-container li {\r\n    margin: 1rem 0rem;\r\n}\r\n\r\nnav.side-nav-container .exit {\r\n    padding: 1rem 1rem;\r\n\tflex: 1;\r\n}\r\n\r\nnav.side-nav-container hr {\r\n    border: none;\r\n    border-top: solid 1px var(--power-secondary);\r\n\tmargin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: var(--transparent-dark);\r\n}\r\n\r\n.mobile-search-modal .container {\r\n\tpadding: 1rem;\r\n\theight: 100%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.mobile-search-modal .container {\r\n\t\t\tpadding: 1.5rem;\r\n\t\t\tmax-width: 50rem;\r\n\t\t\tmargin: 5rem auto;\r\n\t\t\theight: auto;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-search-modal .search-bar {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .mobile-search {\r\n\twidth: 100%;\r\n}\r\n\r\n.mobile-search-modal input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--gray);\r\n\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.mobile-search-modal .results-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n\tpadding: 2rem 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .search-result {\r\n\tdisplay: flex;\r\n\tgap: 0.75rem;\r\n\talign-items: center;\r\n}\r\n\r\n.mobile-search-modal .search-result img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n\r\n/** SEARCH TIP STYLES **/\r\n.tips-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip .tip-img {\r\n\tpadding-top: 0.3rem;\r\n}\r\n\r\n.tip .tip-img img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n\r\n.switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.75rem;\r\n\theight: 1.5rem;\r\n}\r\n\r\n.switch input { \r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n\r\n.slider {\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\n.slider:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\theight: 1rem;\r\n\twidth: 1rem;\r\n\tleft: 4px;\r\n\tbottom: 3px;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n\t-webkit-transform: translateX(18px);\r\n\t-ms-transform: translateX(18px);\r\n\ttransform: translateX(18px);\r\n}\r\n  \r\n/* Rounded sliders */\r\n.slider.round {\r\n\tborder-radius: 32px;\r\n}\r\n  \r\n.slider.round:before {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.toggle-div {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5rem;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** MAIN-CONTAINER STYLES **/\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.main-container {\r\n\t\t\tmargin: 5rem;\r\n\t\t}\r\n\r\n\t\t.grid-container {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgap: 1rem;\r\n\t\t\tgrid-template: 4fr 1fr / 50% 50%;\r\n\r\n\t\t\tmin-width: 50rem;\r\n\t\t\tmax-width: 80rem;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES - MOBILE **/\r\n\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-bottom: 10rem;\r\n\theight: 83vh;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast {\r\n\t\t\talign-items: stretch;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 2;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details,\r\n#current-forecast .forecast-details .bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details .bottom {\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details {\r\n\tgap: 5rem;\t\r\n}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\twidth: 8rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n\t/** MOBILE BELOW **/\r\n\tposition: absolute;\r\n    top: 43rem;\r\n    width: calc(100% - 2rem);\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: auto;\r\n\t\t\tposition: static;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 2;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: center;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\t/** TABLET BELOW **/\r\n\t@media only screen and (min-width: 426px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 25rem;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tmargin-right: auto;\r\n\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding: 1.5rem 3rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details img {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n\theight: 1.5rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-top: 7rem;\r\n\r\n\theight: 70vh;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#additional-forecast {\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tpadding-bottom: 4rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 2;\r\n\t\t\tgrid-column-end: 3;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n.hourly-card {\r\n\tpadding: 1.5rem;\r\n    padding-top: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n.hourly-card .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n\twidth: 2.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\theight: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n\r\n.hourly-forecast-carousel {\r\n\toverflow-x: auto;\r\n}\r\n\r\n.no-scrollbar {\r\n\tscrollbar-color: transparent transparent;\r\n}\r\n\r\n.no-scrollbar::-webkit-scrollbar {\r\n\theight: 0px;\r\n}\r\n\r\n.hourly-forecast-carousel > .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST STYLES **/\r\n.three-day-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n.three-day-forecast-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\t\r\n\tpadding: 0.5rem 0rem;\r\n}\r\n\r\n.daily-bar .day-container {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 10;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\twidth: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: none;\r\n}\r\n\r\n.daily-bar .temperatures {\r\n\twidth: 5rem;\r\n}\r\n\r\n.daily-bar .high,\r\n.daily-bar .low {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}"],"sourceRoot":""}]);
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
  corDiv.classList.add('cor');
  corDiv.classList.add('module');

  const corIconDiv = document.createElement('div');
  const corImg = document.createElement('img');
  corImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corImg);
  corDiv.appendChild(corIconDiv);

  const corPercentDiv = document.createElement('div');
  const corPercent = document.createElement('p');
  corPercent.id = 'chance-of-rain';
  corPercent.textContent = '0%';
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
  humidityDiv.classList.add('humidity');
  humidityDiv.classList.add('module');

  const humidityIconDiv = document.createElement('div');
  const humidityImg = document.createElement('img');
  humidityImg.src = '../src/assets/images/forecast-details/waves-fill-svgrepo-com.svg';
  humidityIconDiv.appendChild(humidityImg);
  humidityDiv.appendChild(humidityIconDiv);

  const humidityPercentDiv = document.createElement('div');
  const humidityPercent = document.createElement('p');
  humidityPercent.id = 'humidity';
  humidityPercent.textContent = '20%';
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
  windDiv.classList.add('wind');
  windDiv.classList.add('module');

  const windIconDiv = document.createElement('div');
  const windImg = document.createElement('img');
  windImg.src = '../src/assets/images/forecast-details/wind-fill-svgrepo-com.svg';
  windIconDiv.appendChild(windImg);
  windDiv.appendChild(windIconDiv);

  const windSpeedDiv = document.createElement('div');
  const windSpeed = document.createElement('p');
  windSpeed.id = 'wind';
  windSpeed.textContent = '5mph';
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
  uvDiv.classList.add('uv');
  uvDiv.classList.add('module');

  const uvIconDiv = document.createElement('div');
  const uvImg = document.createElement('img');
  uvImg.src = '../src/assets/images/forecast-details/sun-filled-svgrepo-com.svg';
  uvIconDiv.appendChild(uvImg);
  uvDiv.appendChild(uvIconDiv);

  const uvIndexDiv = document.createElement('div');
  const uvIndex = document.createElement('p');
  uvIndex.id = 'uv-index';
  uvIndex.textContent = '5 of 10';
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
  moreForecastDetailsDiv.appendChild(chanceOfRain);

  const humidity = createHumidity();
  moreForecastDetailsDiv.appendChild(humidity);

  const wind = createWind();
  moreForecastDetailsDiv.appendChild(wind);

  const uv = createUV();
  moreForecastDetailsDiv.appendChild(uv);

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

  /*(cardDiv.appendChild(time);
  cardDiv.appendChild(forecastIcon);
  cardDiv.appendChild(hourlyTemp);*/

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
  hourlyForecastCarousel.classList.add('hourly-forecast-carousel');
  hourlyForecastCarousel.classList.add('no-scrollbar');

  const hourlyForecastContainer = document.createElement('div');
  hourlyForecastContainer.classList.add('container');

  for (let i = 0; i < 7; i += 1) {
    const hourlyCard = createHourlyCard();
    hourlyForecastContainer.appendChild(hourlyCard);
  }

  hourlyForecastCarousel.appendChild(hourlyForecastContainer);

  hourlyForecast.appendChild(hourlyForecastTitleDiv);
  hourlyForecast.appendChild(hourlyForecastCarousel);

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
  corIconImg.classList.add('icon');
  corIconImg.classList.add('white-filter');
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
  threeDayForecast.appendChild(threeDayForecastTitleDiv);

  const threeDayForecastList = document.createElement('div');
  threeDayForecastList.classList.add('three-day-forecast-list');
  const container = document.createElement('div');
  threeDayForecastList.appendChild(container);

  threeDayForecast.appendChild(threeDayForecastList);

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
  section.appendChild(hourlyForecast);

  const threeDayForecast = create3DayForecast();
  section.appendChild(threeDayForecast);

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
  currentCity.textContent = 'Ventura';
  currentCityDiv.appendChild(currentCity);

  const currentDetailsDiv = document.createElement('div');
  currentDetailsDiv.classList.add('forecast-details');

  const currentWeatherDiv = document.createElement('div');
  const currentWeatherImg = document.createElement('img');
  currentWeatherImg.id = 'current-weather';
  currentWeatherImg.src = '../src/assets/images/forecast-current/partly-cloudy.svg';
  currentWeatherDiv.appendChild(currentWeatherImg);

  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottom');

  const currentTempDiv = document.createElement('div');
  const currentTemp = document.createElement('p');
  currentTemp.classList.add('large');
  currentTemp.id = 'current-temp';
  currentTemp.textContent = '74°F';
  currentTempDiv.appendChild(currentTemp);
  bottomDiv.appendChild(currentTempDiv);

  const forecastDescriptionDiv = document.createElement('div');
  const forecastDescription = document.createElement('p');
  forecastDescription.classList.add('medium');
  forecastDescription.id = 'forecast-description';
  forecastDescription.textContent = 'Partly cloudy';
  forecastDescriptionDiv.appendChild(forecastDescription);
  bottomDiv.appendChild(forecastDescriptionDiv);

  const highLowDiv = document.createElement('div');
  highLowDiv.classList.add('high-low');

  const highDiv = document.createElement('div');
  const highP = document.createElement('p');
  highP.textContent = 'H: ';

  const high = document.createElement('span');
  high.id = 'current-high';
  high.textContent = '74°';
  highP.appendChild(high);
  highDiv.appendChild(highP);

  const lowDiv = document.createElement('div');
  const lowP = document.createElement('p');
  lowP.textContent = 'L: ';

  const low = document.createElement('span');
  low.id = 'current-low';
  low.textContent = '54°';
  lowP.appendChild(low);
  lowDiv.appendChild(lowP);

  highLowDiv.appendChild(highDiv);
  highLowDiv.appendChild(lowDiv);
  bottomDiv.appendChild(highLowDiv);

  currentDetailsDiv.appendChild(currentWeatherDiv);
  currentDetailsDiv.appendChild(bottomDiv);

  section.appendChild(currentCityDiv);
  section.appendChild(currentDetailsDiv);

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
  const date = new Date();
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
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`);

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

  result.appendChild(locationIcon);
  result.appendChild(textResult);

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

  label.appendChild(input);
  label.appendChild(span);

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

  searchContainerDiv.appendChild(searchImg);
  searchContainerDiv.appendChild(searchInput);
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

  darkLightModeSwitchDiv.appendChild(darkLightModeSwitchP);
  darkLightModeSwitchDiv.appendChild(darkLightModeSwitch);

  const farenheitCelsiusSwitchDiv = document.createElement('div');
  farenheitCelsiusSwitchDiv.classList.add('toggle-div');

  const farenheitCelsiusSwitchP = document.createElement('p');
  farenheitCelsiusSwitchP.classList.add('farenheit-celsius-switch', 'small');
  farenheitCelsiusSwitchP.textContent = 'Enable Celsius';

  const farenheitCelsiusSwitch = createToggleSwitch();
  farenheitCelsiusSwitch.id = 'farenheit-celsius-switch';

  farenheitCelsiusSwitchDiv.appendChild(farenheitCelsiusSwitchP);
  farenheitCelsiusSwitchDiv.appendChild(farenheitCelsiusSwitch);

  const switchesDiv = document.createElement('div');
  switchesDiv.classList.add('switches');
  switchesDiv.append(darkLightModeSwitchDiv, farenheitCelsiusSwitchDiv);

  const additionalOptionsDiv = document.createElement('div');
  additionalOptionsDiv.classList.add('additional-options');
  additionalOptionsDiv.append(searchButton, hamburgerMenuButton);

  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.append(switchesDiv, additionalOptionsDiv);

  nav.appendChild(logoDiv);
  nav.appendChild(optionsDiv);

  return nav;
}

function createSideNavigation() {
  const sideNavContainer = document.createElement('nav');
  sideNavContainer.classList.add('side-nav-container');
  sideNavContainer.classList.add('hidden');

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
  topList.appendChild(darkMode);

  const setToCelsius = document.createElement('li');
  setToCelsius.textContent = 'Set to Celsius';
  topList.appendChild(setToCelsius);
  navItems.appendChild(topList);

  const divider = document.createElement('hr');
  navItems.appendChild(divider);

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
  searchContainer.appendChild(cityInputForm);
  searchContainer.appendChild(cancelButton);

  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');
  /* const testResult = createQueryResult('Los Angeles, CA');
  resultsContainer.appendChild(testResult); */

  const searchInstructions = createSearchInstructions();

  container.append(searchContainer, resultsContainer, searchInstructions);
  modal.append(container);

  return modal;
}

async function loadDefaultWeather() {
  const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__.fetchDefaultWeather)();
  (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__.updateCurrentForecastLayout)(result);
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

  body.appendChild(navigationMenu);
  body.appendChild(sideNavigation);
  body.appendChild(searchMobile);
  gridContainer.appendChild(currentForecast);
  gridContainer.appendChild(moreCurrentForecastDetails);
  gridContainer.appendChild(additionalForecastDetails);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxRQUFRLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsV0FBVyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFX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Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFVO0FBQ25DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEtBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1FQUFtQjtBQUMxQyxFQUFFLHFGQUEyQjtBQUM3QixFQUFFLHVGQUEwQjtBQUM1QixFQUFFLHFGQUF3QjtBQUMxQjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0VBQXFCO0FBQy9DLHFDQUFxQywrRUFBZ0M7QUFDckUsb0NBQW9DLHVFQUF3QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNLO0FBQ1k7QUFDdkM7QUFDQTtBQUNBLFFBQVEsd0RBQVU7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xpZ2h0LXRoZW1lLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWdodC10aGVtZS5jc3M/N2JkYyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FkZGl0aW9uYWwtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnQtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWNpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XHJcbiAgICAtLWJsYWNrLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODklKTs7XHJcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xyXG4gICAgLS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxNDMlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5MCUpO1xyXG4gICAgLS1kYXk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg3RTcsICNDMjk5MDApO1xyXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xyXG4gICAgLS1wb3dlci1zZWNvbmRhcnk6ICM2NEQxRjM7XHJcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoMTAwJSkgc2VwaWEoMzYlKSBzYXR1cmF0ZSg0MDEwJSkgaHVlLXJvdGF0ZSgxNzZkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XHJcbiAgICAtLXRyYW5zcGFyZW50OiByZ2IoNDYsIDY4LCA4NywgMC41KTtcclxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XHJcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcclxuICAgIC0tY2FyZDogcmdiKDI1MCwgMjUwLCAyNTAsIDAuMSk7XHJcbiAgICAtLW5hdmlnYXRpb246IHJnYigyNDIsIDI0MiwgMjQyLCAwLjIpO1xyXG4gICAgLS1kcm9wc2hhZG93OiAwcmVtIDAuNXJlbSAxcmVtIHJnYigwLCAwLCAwLCAwLjEpOyAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGF5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xyXG5cclxuLnNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnRlcnRpYXJ5IHtcclxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cclxuXHJcbm5hdiB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgaW1nIHtcclxuICAgIGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG5uYXYgLnNpZGUtbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5sb2dvLFxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5kaXZpZGVyIHtcclxuICAgIGZpbHRlcjogdmFyKC0tYmxhY2stZmlsdGVyKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZXhpdCBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxuXHJcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cclxuLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXF1YXRlcm5hcnkpO1xyXG59XHJcbiAgXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXBvd2VyLXF1YXRlcm5hcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG5cclxuc2VjdGlvbiNjdXJyZW50LWZvcmVjYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjY3VycmVudC1mb3JlY2FzdCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcclxuXHJcbiAgICAvKiBNT0JJTEUgU1RZTEUgKi9cclxuICAgIGJveC1zaGFkb3c6IDByZW0gMC4xMjVyZW0gMC4yNXJlbSB2YXIoLS1ibGFjay10cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXHJcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXHJcbi5ob3VybHktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcclxufVxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpZ2h0LXRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrR0FBa0c7SUFDbEcsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixzR0FBc0c7SUFDdEcsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsNEdBQTRHO0lBQzVHLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMseUhBQXlIO0lBQ3pILCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7OztBQUlBLHlCQUF5Qjs7QUFFekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7SUFDSSxzQ0FBc0M7QUFDMUM7Ozs7QUFJQSx3QkFBd0I7O0FBRXhCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7O0FBR0EsMkJBQTJCO0FBQzNCO0lBQ0ksb0NBQW9DO0lBQ3BDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7OztBQUlBLGlDQUFpQztBQUNqQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7OztBQUlBLDhCQUE4Qjs7QUFFOUI7SUFDSSw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOzs7QUFHSiwyQ0FBMkM7O0FBRTNDO0lBQ0ksZ0NBQWdDOztJQUVoQyxpQkFBaUI7SUFDakIsMERBQTBEO0FBQzlEOztJQUVJLGtCQUFrQjtJQUNsQjtRQUNJO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7OztBQUdKLHlDQUF5QztBQUN6QztJQUNJLDRDQUE0QztBQUNoRDs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOztBQUVKLHlCQUF5QjtBQUN6QjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSxpQ0FBaUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJsYWNrOiAjMzIzMjMyO1xcclxcbiAgICAtLWJsYWNrLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODklKTs7XFxyXFxuICAgIC0tYmxhY2stdHJhbnNwYXJlbnQ6IHJnYigwLCAwLCAwLCAwLjI1KTtcXHJcXG4gICAgLS13aGl0ZTogI0YyRjJGMjtcXHJcXG4gICAgLS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxNDMlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5MCUpO1xcclxcbiAgICAtLWRheTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwODdFNywgI0MyOTkwMCk7XFxyXFxuICAgIC0tcG93ZXItcHJpbWFyeTogIzAwMTMxQTtcXHJcXG4gICAgLS1wb3dlci1zZWNvbmRhcnk6ICM2NEQxRjM7XFxyXFxuICAgIC0tcG93ZXItdGVydGlhcnk6IGludmVydCgxMDAlKSBzZXBpYSgzNiUpIHNhdHVyYXRlKDQwMTAlKSBodWUtcm90YXRlKDE3NmRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDElKTtcXHJcXG4gICAgLS1wb3dlci1xdWF0ZXJuYXJ5OiAjN0ZBOUQ2O1xcclxcbiAgICAtLXRyYW5zcGFyZW50OiByZ2IoNDYsIDY4LCA4NywgMC41KTtcXHJcXG4gICAgLS10cmFuc3BhcmVudC1maWx0ZXI6IGludmVydCgyMyUpIHNlcGlhKDcwJSkgc2F0dXJhdGUoMjk5JSkgaHVlLXJvdGF0ZSgxNjZkZWcpIGJyaWdodG5lc3MoODYlKSBjb250cmFzdCg5MCUpIG9wYWNpdHkoNTAlKTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWZvcmVjYXN0OiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuMik7XFxyXFxuICAgIC0tY2FyZDogcmdiKDI1MCwgMjUwLCAyNTAsIDAuMSk7XFxyXFxuICAgIC0tbmF2aWdhdGlvbjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuMik7XFxyXFxuICAgIC0tZHJvcHNoYWRvdzogMHJlbSAwLjVyZW0gMXJlbSByZ2IoMCwgMCwgMCwgMC4xKTsgIFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGF5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi50ZXJ0aWFyeSB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgaW1nIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zaWRlLW5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5sb2dvLFxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmRpdmlkZXIge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcG93ZXItcXVhdGVybmFyeSk7XFxyXFxufVxcclxcbiAgXFxyXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wb3dlci1xdWF0ZXJuYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcblxcclxcbnNlY3Rpb24jY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICAgICNjdXJyZW50LWZvcmVjYXN0IHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xcclxcblxcclxcbiAgICAvKiBNT0JJTEUgU1RZTEUgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMHJlbSAwLjEyNXJlbSAwLjI1cmVtIHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICAgICNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cXHJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICAgICNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmhvdXJseS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxyXFxufVxcclxcblxcclxcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuOnJvb3Qge1xyXG5cdC0tYmxhY2s6ICMyMjIyMjI7XHJcblx0LS13aGl0ZTogI0YyRjJGMjtcclxuXHQtLWdyYXk6ICNBMEEwQTA7XHJcblx0LS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMTA2JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5MCUpO1xyXG5cdC0tZ3JheS1maWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNTNkZWcpIGJyaWdodG5lc3MoNzglKSBjb250cmFzdCg4NiUpO1xyXG5cdC0tdHJhbnNwYXJlbnQ6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjgpO1xyXG5cdC0tdHJhbnNwYXJlbnQtZGFyazogcmdiYSgzNCwgMzQsIDM0LCAwLjIpO1xyXG5cdC0taW5wdXQtcGxhY2Vob2xkZXI6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjcpO1xyXG59XHJcblxyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBUaGluJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIEJvbGQnO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgVGhpbic7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG5cclxuXHQvKiogTU9CSUxFICoqL1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXHJcbi53aGl0ZS1maWx0ZXIge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50IHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBHRU5FUkFMIEZPTlQgU1RZTEVTICoqL1xyXG5cclxuaDEge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oMi5ib2xkLnNtYWxsIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmgyLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRsaW5lLWhlaWdodDogNHJlbTtcclxufVxyXG5cclxuaDMge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuaDMuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuaDMuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMy5ib2xkLnNtYWxsIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmg0IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oNC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oNSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oNS5zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xyXG59XHJcblxyXG5oNS5zbWFsbC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5wLmxhcmdlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDRyZW07XHJcblx0bGluZS1oZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbnAubWVkaXVtIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbnAuc21hbGwge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMC43NXJlbTtcclxufVxyXG5cclxucC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG5cdGJvcmRlcjogc29saWQgMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcblxyXG5uYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiB7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdG5hdi5tYWluLW5hdiAge1xyXG5cdFx0cGFkZGluZzogMXJlbSA1cmVtO1xyXG5cdH1cclxufVxyXG5cclxubmF2Lm1haW4tbmF2IGltZyB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLmxvZ28sIG5hdi5zaWRlLW5hdiAubG9nbyB7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDNyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyBidXR0b24ge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMgLm1lbnUtYnV0dG9uIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHRuYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2ggaW5wdXQge1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcclxuXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XHJcblx0d2lkdGg6IDE1cmVtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogdmFyKC0taW5wdXQtcGxhY2Vob2xkZXIpO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZ2FwOiAwO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBidXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuc2lkZS1uYXYge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZsZXg6IDQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgbGkge1xyXG4gICAgbWFyZ2luOiAxcmVtIDByZW07XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgaHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XHJcblx0bWFyZ2luOiAycmVtIDByZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ei1pbmRleDogMjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrKTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG5cdFx0XHRwYWRkaW5nOiAxLjVyZW07XHJcblx0XHRcdG1heC13aWR0aDogNTByZW07XHJcblx0XHRcdG1hcmdpbjogNXJlbSBhdXRvO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1iYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5tb2JpbGUtc2VhcmNoIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgaW5wdXQge1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcclxuXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnJlc3VsdHMtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAxcmVtO1xyXG5cdHBhZGRpbmc6IDJyZW0gMC41cmVtO1xyXG59XHJcblxyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDAuNzVyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLWdyYXktZmlsdGVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogU0VBUkNIIFRJUCBTVFlMRVMgKiovXHJcbi50aXBzLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMXJlbTtcclxufVxyXG5cclxuLnRpcCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcbi50aXAgLnRpcC1pbWcge1xyXG5cdHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbn1cclxuXHJcbi50aXAgLnRpcC1pbWcgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLWdyYXktZmlsdGVyKTtcclxufVxyXG5cclxuXHJcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cclxuXHJcbi5zd2l0Y2gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDIuNzVyZW07XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQgeyBcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG5cdHdpZHRoOiAxcmVtO1xyXG5cdGxlZnQ6IDRweDtcclxuXHRib3R0b206IDNweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcbn1cclxuICBcclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbn1cclxuICBcclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0LnRvZ2dsZS1kaXYge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRnYXA6IDAuNXJlbTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcbi8qKiBNQUlOLUNPTlRBSU5FUiBTVFlMRVMgKiovXHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQubWFpbi1jb250YWluZXIge1xyXG5cdFx0XHRtYXJnaW46IDVyZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LmdyaWQtY29udGFpbmVyIHtcclxuXHRcdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdFx0Z2FwOiAxcmVtO1xyXG5cdFx0XHRncmlkLXRlbXBsYXRlOiA0ZnIgMWZyIC8gNTAlIDUwJTtcclxuXHJcblx0XHRcdG1pbi13aWR0aDogNTByZW07XHJcblx0XHRcdG1heC13aWR0aDogODByZW07XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAtIE1PQklMRSAqKi9cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVyZW07XHJcblx0cGFkZGluZzogM3JlbSAxcmVtO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMHJlbTtcclxuXHRoZWlnaHQ6IDgzdmg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2N1cnJlbnQtZm9yZWNhc3Qge1xyXG5cdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRwYWRkaW5nOiAzcmVtO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRncmlkLWNvbHVtbi1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xyXG5cdFx0XHRncmlkLXJvdy1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1yb3ctZW5kOiAyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzLFxyXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xyXG5cdGdhcDogNXJlbTtcdFxyXG59XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuaGlnaC1sb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgaW1nI2N1cnJlbnQtd2VhdGhlciB7XHJcblx0d2lkdGg6IDhyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0bWFyZ2luOiAwcmVtIDFyZW07XHJcblx0LyoqIE1PQklMRSBCRUxPVyAqKi9cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQzcmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtY29sdW1uLWVuZDogMjtcclxuXHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LWVuZDogMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMnJlbTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcclxufVxyXG5cdC8qKiBUQUJMRVQgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0XHRcdG1heC13aWR0aDogMjVyZW07XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRcdFx0cGFkZGluZzogMS41cmVtIDNyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgLm1vZHVsZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAwLjVyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIFNUWUxFUyAtIE1PQklMRSAqKi9cclxuXHJcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiA1cmVtO1xyXG5cdHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuXHRwYWRkaW5nLXRvcDogN3JlbTtcclxuXHJcblx0aGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcblx0XHRcdHBhZGRpbmc6IDNyZW07XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRncmlkLWNvbHVtbi1zdGFydDogMjtcclxuXHRcdFx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xyXG5cdFx0XHRncmlkLXJvdy1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1yb3ctZW5kOiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcbi5ob3VybHktZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cclxuLmhvdXJseS1jYXJkIHtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5ob3VybHktY2FyZCAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDEuNXJlbTtcclxuXHR3aWR0aDogMi41cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgaW1nIHtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUk9VU0VMIFNUWUxFUyAqKi9cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwge1xyXG5cdG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5uby1zY3JvbGxiYXIge1xyXG5cdHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uby1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRoZWlnaHQ6IDBweDtcclxufVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCA+IC5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuLnRocmVlLWRheS1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMnJlbTtcclxufVxyXG5cclxuLnRocmVlLWRheS1mb3JlY2FzdC1saXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cclxuLmRhaWx5LWJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMXJlbTtcclxuXHRcclxuXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGF5LWNvbnRhaW5lciB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXg6IDEwO1xyXG5cdGdhcDogMXJlbTsgLyoqIE1PQklMRSAqKi9cclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3QsXHJcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyxcclxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3Qge1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0IC5pY29uIHtcclxuXHR3aWR0aDogMS41cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIGg0IHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMge1xyXG5cdHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5oaWdoLFxyXG4uZGFpbHktYmFyIC5sb3cge1xyXG5cdGZsZXg6IDE7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7O0FBSUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixzR0FBc0c7Q0FDdEcsa0dBQWtHO0NBQ2xHLHNDQUFzQztDQUN0Qyx5Q0FBeUM7Q0FDekMsNENBQTRDO0FBQzdDOzs7O0FBSUE7Q0FDQyw2QkFBNkI7Q0FDN0IsK0RBQXFFO0NBQ3JFLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsK0RBQWtFO0NBQ2xFLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsK0RBQWtFO0NBQ2xFLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsK0RBQWtGO0NBQ2xGLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5Q0FBeUM7Q0FDekMsK0RBQStFO0NBQy9FLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5Q0FBeUM7Q0FDekMsK0RBQStFO0NBQy9FLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrREFBa0Q7Q0FDbEQsbUJBQW1COztDQUVuQixhQUFhO0NBQ2IsNkJBQTZCO0lBQzFCLGlCQUFpQjtD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QztBQUNsQztDQUNDLGVBQWU7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7OztBQUlBLHNDQUFzQzs7QUFFdEM7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztBQUNaOzs7O0FBSUEsNEJBQTRCO0FBQzVCO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFdBQVc7QUFDWjs7Ozs7QUFLQSxpQ0FBaUM7QUFDakM7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7O0NBRVQsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixRQUFRO0NBQ1IsU0FBUyxFQUFFLGFBQWE7QUFDekI7O0FBRUE7OztDQUdDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTs7Q0FFQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHlCQUF5QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWJsYWNrOiAjMjIyMjIyO1xcclxcblxcdC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuXFx0LS1ncmF5OiAjQTBBMEEwO1xcclxcblxcdC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDEwNiUpIGh1ZS1yb3RhdGUoNTFkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoOTAlKTtcXHJcXG5cXHQtLWdyYXktZmlsdGVyOiBpbnZlcnQoODMlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTUzZGVnKSBicmlnaHRuZXNzKDc4JSkgY29udHJhc3QoODYlKTtcXHJcXG5cXHQtLXRyYW5zcGFyZW50OiByZ2IoMjQyLCAyNDIsIDI0MiwgMC44KTtcXHJcXG5cXHQtLXRyYW5zcGFyZW50LWRhcms6IHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcXHJcXG5cXHQtLWlucHV0LXBsYWNlaG9sZGVyOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFRoaW4nO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQnO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIEJvbGQnO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIFRoaW4nO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuXFx0LyoqIE1PQklMRSAqKi9cXHJcXG5cXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xcclxcbi53aGl0ZS1maWx0ZXIge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zcGFyZW50IHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogR0VORVJBTCBGT05UIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQnO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyLmJvbGQuc21hbGwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmgzLmJvbGQuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmg0LmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmg1LnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbmg1LnNtYWxsLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnAubGFyZ2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogNHJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5tZWRpdW0ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5zbWFsbCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xcclxcbi5oaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNoaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcblxcdGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQtZGVza3RvcC5zdmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYge1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdG5hdi5tYWluLW5hdiAge1xcclxcblxcdFxcdHBhZGRpbmc6IDFyZW0gNXJlbTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiBpbWcge1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5sb2dvLCBuYXYuc2lkZS1uYXYgLmxvZ28ge1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLnN3aXRjaGVzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyBidXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMgLm1lbnUtYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHRuYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2ggaW5wdXQge1xcclxcblxcdGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQtZGVza3RvcC5zdmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XFxyXFxuXFx0d2lkdGg6IDE1cmVtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0taW5wdXQtcGxhY2Vob2xkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZ2FwOiAwO1xcclxcblxcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5zaWRlLW5hdiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZsZXg6IDQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBsaSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcblxcdGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgaHIge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xcclxcblxcdG1hcmdpbjogMnJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9CSUxFIFNFQVJDSCBNT0RBTCBTVFlMRVMgKiovXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5tb2JpbGUtc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDUwcmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbjogNXJlbSBhdXRvO1xcclxcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtYmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAubW9iaWxlLXNlYXJjaCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLnN2ZycpIG5vLXJlcGVhdCBzY3JvbGwgMC43NXJlbSA1MCUvMXJlbSAxcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyYXkpO1xcclxcblxcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5yZXN1bHRzLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjc1cmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTRUFSQ0ggVElQIFNUWUxFUyAqKi9cXHJcXG4udGlwcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aXAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIC50aXAtaW1nIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIC50aXAtaW1nIGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uc3dpdGNoIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHdpZHRoOiAyLjc1cmVtO1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIGlucHV0IHsgXFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHR3aWR0aDogMDtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcclxcblxcdHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRoZWlnaHQ6IDFyZW07XFxyXFxuXFx0d2lkdGg6IDFyZW07XFxyXFxuXFx0bGVmdDogNHB4O1xcclxcblxcdGJvdHRvbTogM3B4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcclxcblxcdHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG59XFxyXFxuICBcXHJcXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0LnRvZ2dsZS1kaXYge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Z2FwOiAwLjVyZW07XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNQUlOLUNPTlRBSU5FUiBTVFlMRVMgKiovXFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQubWFpbi1jb250YWluZXIge1xcclxcblxcdFxcdFxcdG1hcmdpbjogNXJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmdyaWQtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlOiA0ZnIgMWZyIC8gNTAlIDUwJTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRtaW4td2lkdGg6IDUwcmVtO1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogODByZW07XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuXFx0cGFkZGluZzogM3JlbSAxcmVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXHJcXG5cXHRoZWlnaHQ6IDgzdmg7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDNyZW07XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzLFxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdGdhcDogNXJlbTtcXHRcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmhpZ2gtbG93IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCBpbWcjY3VycmVudC13ZWF0aGVyIHtcXHJcXG5cXHR3aWR0aDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdG1hcmdpbjogMHJlbSAxcmVtO1xcclxcblxcdC8qKiBNT0JJTEUgQkVMT1cgKiovXFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDQzcmVtO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHN0YXRpYztcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLWNvbHVtbi1lbmQ6IDI7XFxyXFxuXFx0XFx0XFx0Z3JpZC1yb3ctc3RhcnQ6IDI7XFxyXFxuXFx0XFx0XFx0Z3JpZC1yb3ctZW5kOiAzO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMS41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XFxyXFxufVxcclxcblxcdC8qKiBUQUJMRVQgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xcclxcblxcdFxcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMjVyZW07XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgLm1vZHVsZSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDAuNXJlbTtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIFNUWUxFUyAtIE1PQklMRSAqKi9cXHJcXG5cXHJcXG4jYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogNXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAzcmVtIDFyZW07XFxyXFxuXFx0cGFkZGluZy10b3A6IDdyZW07XFxyXFxuXFxyXFxuXFx0aGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDNyZW07XFxyXFxuXFx0XFx0XFx0cGFkZGluZy1ib3R0b206IDRyZW07XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xcclxcbi5ob3VybHktY2FyZCB7XFxyXFxuXFx0cGFkZGluZzogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIC5jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMS41cmVtO1xcclxcblxcdHdpZHRoOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2FyZCBpbWcge1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUk9VU0VMIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsIHtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tc2Nyb2xsYmFyIHtcXHJcXG5cXHRzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0aGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwgPiAuY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbi50aHJlZS1kYXktZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50aHJlZS1kYXktZm9yZWNhc3QtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmRhaWx5LWJhciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZGF5LWNvbnRhaW5lciB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZGV0YWlscyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGZsZXg6IDEwO1xcclxcblxcdGdhcDogMXJlbTsgLyoqIE1PQklMRSAqKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3QsXFxyXFxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzLFxcclxcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCAuaWNvbiB7XFxyXFxuXFx0d2lkdGg6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4gLmljb24ge1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciBoNCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuaGlnaCxcXHJcXG4uZGFpbHktYmFyIC5sb3cge1xcclxcblxcdGZsZXg6IDE7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlnaHQtdGhlbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saWdodC10aGVtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcHJpbnRPdXRIdW1pZGl0eShxdWVyeSkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgcmV0dXJuIGAke3F1ZXJ5LmhvdXJseS5yZWxhdGl2ZWh1bWlkaXR5XzJtW2hvdXJdfSVgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFdpbmRTcGVlZChxdWVyeSkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcihxdWVyeS5ob3VybHkud2luZHNwZWVkXzEwbVtob3VyXSk7XHJcbiAgcmV0dXJuIGAke3Jlc3VsdH1tcGhgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFVWSW5kZXgocXVlcnkpIHtcclxuICBjb25zdCB1diA9IHF1ZXJ5LmRhaWx5LnV2X2luZGV4X21heFswXTtcclxuICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHV2KTtcclxuXHJcbiAgcmV0dXJuIGAke3Jlc3VsdH0gb2YgMTBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSkge1xyXG4gIHJldHVybiBgJHtxdWVyeS5kYWlseS5wcmVjaXBpdGF0aW9uX3Byb2JhYmlsaXR5X21heFswXX0lYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmNlLW9mLXJhaW4nKTtcclxuICBjb3IudGV4dENvbnRlbnQgPSBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBwcmludE91dEh1bWlkaXR5KHF1ZXJ5KTtcclxuXHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBwcmludE91dFdpbmRTcGVlZChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IHV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3V2LWluZGV4Jyk7XHJcbiAgdXYudGV4dENvbnRlbnQgPSBwcmludE91dFVWSW5kZXgocXVlcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGFuY2VPZlJhaW4oKSB7XHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcicpO1xyXG4gIGNvckRpdi5jbGFzc0xpc3QuYWRkKCdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9kcm9wbGV0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgY29ySWNvbkRpdi5hcHBlbmRDaGlsZChjb3JJbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgY29yUGVyY2VudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29yUGVyY2VudC5pZCA9ICdjaGFuY2Utb2YtcmFpbic7XHJcbiAgY29yUGVyY2VudC50ZXh0Q29udGVudCA9ICcwJSc7XHJcbiAgY29yUGVyY2VudERpdi5hcHBlbmRDaGlsZChjb3JQZXJjZW50KTtcclxuXHJcbiAgY29uc3QgY29yVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgY29yVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5JywgJ3NtYWxsJyk7XHJcbiAgY29yVGl0bGUudGV4dENvbnRlbnQgPSAnUmFpbic7XHJcbiAgY29yVGl0bGVEaXYuYXBwZW5kQ2hpbGQoY29yVGl0bGUpO1xyXG5cclxuICBjb3JEaXYuYXBwZW5kKGNvclBlcmNlbnREaXYsIGNvclRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIGNvckRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHVtaWRpdHkoKSB7XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGh1bWlkaXR5SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dhdmVzLWZpbGwtc3ZncmVwby1jb20uc3ZnJztcclxuICBodW1pZGl0eUljb25EaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbWcpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBodW1pZGl0eVBlcmNlbnQuaWQgPSAnaHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5UGVyY2VudC50ZXh0Q29udGVudCA9ICcyMCUnO1xyXG4gIGh1bWlkaXR5UGVyY2VudERpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnQpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnc21hbGwnKTtcclxuICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcclxuICBodW1pZGl0eVRpdGxlRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xyXG5cclxuICBodW1pZGl0eURpdi5hcHBlbmQoaHVtaWRpdHlQZXJjZW50RGl2LCBodW1pZGl0eVRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIGh1bWlkaXR5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kKCkge1xyXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQnKTtcclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCB3aW5kSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB3aW5kSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dpbmQtZmlsbC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIHdpbmRJY29uRGl2LmFwcGVuZENoaWxkKHdpbmRJbWcpO1xyXG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZEljb25EaXYpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgd2luZFNwZWVkLmlkID0gJ3dpbmQnO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9ICc1bXBoJztcclxuICB3aW5kU3BlZWREaXYuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcclxuXHJcbiAgY29uc3Qgd2luZFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICB3aW5kVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5JywgJ3NtYWxsJyk7XHJcbiAgd2luZFRpdGxlLnRleHRDb250ZW50ID0gJ1dpbmQnO1xyXG4gIHdpbmRUaXRsZURpdi5hcHBlbmRDaGlsZCh3aW5kVGl0bGUpO1xyXG5cclxuICB3aW5kRGl2LmFwcGVuZCh3aW5kU3BlZWREaXYsIHdpbmRUaXRsZURpdik7XHJcblxyXG4gIHJldHVybiB3aW5kRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVVVigpIHtcclxuICBjb25zdCB1dkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHV2RGl2LmNsYXNzTGlzdC5hZGQoJ3V2Jyk7XHJcbiAgdXZEaXYuY2xhc3NMaXN0LmFkZCgnbW9kdWxlJyk7XHJcblxyXG4gIGNvbnN0IHV2SWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHV2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgdXZJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvc3VuLWZpbGxlZC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIHV2SWNvbkRpdi5hcHBlbmRDaGlsZCh1dkltZyk7XHJcbiAgdXZEaXYuYXBwZW5kQ2hpbGQodXZJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgdXZJbmRleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgdXZJbmRleC5pZCA9ICd1di1pbmRleCc7XHJcbiAgdXZJbmRleC50ZXh0Q29udGVudCA9ICc1IG9mIDEwJztcclxuICB1dkluZGV4RGl2LmFwcGVuZENoaWxkKHV2SW5kZXgpO1xyXG5cclxuICBjb25zdCB1dlRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnc21hbGwnKTtcclxuICB1dlRpdGxlLnRleHRDb250ZW50ID0gJ1VWIEluZGV4JztcclxuICB1dlRpdGxlRGl2LmFwcGVuZENoaWxkKHV2VGl0bGUpO1xyXG5cclxuICB1dkRpdi5hcHBlbmQodXZJbmRleERpdiwgdXZUaXRsZURpdik7XHJcblxyXG4gIHJldHVybiB1dkRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzJztcclxuXHJcbiAgY29uc3QgbW9yZUZvcmVjYXN0RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuaWQgPSAnbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluID0gY3JlYXRlQ2hhbmNlT2ZSYWluKCk7XHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW4pO1xyXG5cclxuICBjb25zdCBodW1pZGl0eSA9IGNyZWF0ZUh1bWlkaXR5KCk7XHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcblxyXG4gIGNvbnN0IHdpbmQgPSBjcmVhdGVXaW5kKCk7XHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh3aW5kKTtcclxuXHJcbiAgY29uc3QgdXYgPSBjcmVhdGVVVigpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuYXBwZW5kQ2hpbGQodXYpO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKG1vcmVGb3JlY2FzdERldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjb252ZXJ0VFosIGZldGNoV2VhdGhlckljb24gfSBmcm9tICcuL2ZldGNoLXdlYXRoZXInO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cmx5Q2FyZChob3VyLCB0ZW1wLCBpY29uKSB7XHJcbiAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWNhcmQnKTtcclxuXHJcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgdGltZS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xyXG4gIHRpbWUudGV4dENvbnRlbnQgPSBob3VyO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBmb3JlY2FzdEljb24uc3JjID0gaWNvbjtcclxuXHJcbiAgY29uc3QgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob3VybHlUZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcih0ZW1wKX3CsGA7XHJcblxyXG4gIC8qKGNhcmREaXYuYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pO1xyXG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcCk7Ki9cclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQodGltZSwgZm9yZWNhc3RJY29uLCBob3VybHlUZW1wKTtcclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBjYXJkRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VGltZVRvMTJIcihob3VyKSB7XHJcbiAgbGV0IHQ7XHJcbiAgaWYgKGhvdXIgPT09IDEyIHx8IGhvdXIgPT09IDM2KSB7XHJcbiAgICB0ID0gJzEycG0nO1xyXG4gIH0gZWxzZSBpZiAoaG91ciA9PT0gMCB8fCBob3VyID09PSAyNCkge1xyXG4gICAgdCA9ICcxMmFtJztcclxuICB9IGVsc2UgaWYgKChob3VyID4gMCAmJiBob3VyIDwgMTIpIHx8IChob3VyID4gMjQgJiYgaG91ciA8IDM2KSkge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofWFtYDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofXBtYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUyNEhvdXJGb3JlY2FzdChkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gY29udmVydFRaKG5ldyBEYXRlKCksIGRhdGEudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgaG91cmx5UmFuZ2UgPSBjdXJyZW50SG91ciArIDI0O1xyXG5cclxuICBmb3IgKGxldCBpID0gY3VycmVudEhvdXI7IGkgPD0gaG91cmx5UmFuZ2U7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdGVtcCA9IGRhdGEuaG91cmx5LnRlbXBlcmF0dXJlXzJtW2ldO1xyXG4gICAgY29uc3QgaG91ciA9IGNvbnZlcnRUaW1lVG8xMkhyKGkpO1xyXG4gICAgY29uc3QgY29kZSA9IGRhdGEuaG91cmx5LndlYXRoZXJjb2RlW2ldO1xyXG4gICAgY29uc3QgaXNEYXkgPSBkYXRhLmhvdXJseS5pc19kYXlbaV07XHJcbiAgICBjb25zdCBpY29uID0gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSk7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlSG91cmx5Q2FyZChob3VyLCB0ZW1wLCBpY29uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJseSBGb3JlY2FzdCc7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsJyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbC5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGxiYXInKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhvdXJseUNhcmQgPSBjcmVhdGVIb3VybHlDYXJkKCk7XHJcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlDYXJkKTtcclxuICB9XHJcblxyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RDb250YWluZXIpO1xyXG5cclxuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlRGl2KTtcclxuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENhcm91c2VsKTtcclxuXHJcbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUyNEhvdXJGb3JlY2FzdChxdWVyeSk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCcpWzBdO1xyXG4gIGNhcm91c2VsLmlubmVySFRNTCA9ICcnO1xyXG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoaGlnaCwgbG93LCBkYXksIGNvciwgZGVzYywgaWNvbikge1xyXG4gIGNvbnN0IGZvcmVjYXN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3RCYXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktYmFyJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5T2ZUaGVXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBkYXlPZlRoZVdlZWsuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XHJcbiAgZGF5T2ZUaGVXZWVrLnRleHRDb250ZW50ID0gZGF5LnN1YnN0cmluZygwLCAzKTtcclxuXHJcbiAgZGF5RGl2LmFwcGVuZENoaWxkKGRheU9mVGhlV2Vlayk7XHJcbiAgZm9yZWNhc3RCYXIuYXBwZW5kQ2hpbGQoZGF5RGl2KTtcclxuXHJcbiAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcmVjYXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckljb25EaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1pY29uJyk7XHJcbiAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGljb25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGljb25JbWcuc3JjID0gaWNvbjtcclxuXHJcbiAgd2VhdGhlckljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbkltZyk7XHJcbiAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQod2VhdGhlckljb25EaXYpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcclxuXHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGl2KTtcclxuXHJcbiAgY29uc3QgdGVtcGVyYXR1cmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcGVyYXR1cmVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlcycpO1xyXG5cclxuICBjb25zdCBoaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGlnaERpdi5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XHJcblxyXG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICBoaWdoUC50ZXh0Q29udGVudCA9IGAke2hpZ2h9wrBgO1xyXG4gIGhpZ2hEaXYuYXBwZW5kQ2hpbGQoaGlnaFApO1xyXG5cclxuICBjb25zdCBsb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsb3dEaXYuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XHJcblxyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9IGAke2xvd33CsGA7XHJcbiAgbG93RGl2LmFwcGVuZENoaWxkKGxvd1ApO1xyXG5cclxuICB0ZW1wZXJhdHVyZXNEaXYuYXBwZW5kKGhpZ2hEaXYsIGxvd0Rpdik7XHJcblxyXG4gIGNvbnN0IGNvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvckRpdi5jbGFzc0xpc3QuYWRkKCdjaGFuY2Utb2YtcmFpbicpO1xyXG4gIGNvbnN0IGNvckljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3JJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY29ySWNvbkltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY29ySWNvbkltZy5jbGFzc0xpc3QuYWRkKCd3aGl0ZS1maWx0ZXInKTtcclxuICBjb3JJY29uSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL2Ryb3BsZXQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjb3JJY29uRGl2LmFwcGVuZENoaWxkKGNvckljb25JbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuICBjb25zdCBwZXJjZW50YWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwZXJjZW50YWdlLmNsYXNzTGlzdC5hZGQoJ3BlcmNlbnRhZ2UnKTtcclxuICBwZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7Y29yfSVgO1xyXG4gIHBlcmNlbnRhZ2VEaXYuYXBwZW5kQ2hpbGQocGVyY2VudGFnZSk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VEaXYpO1xyXG5cclxuICBjb25zdCBudW1iZXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbnVtYmVyc0Rpdi5jbGFzc0xpc3QuYWRkKCdudW1iZXJzJyk7XHJcbiAgbnVtYmVyc0Rpdi5hcHBlbmQodGVtcGVyYXR1cmVzRGl2LCBjb3JEaXYpO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobnVtYmVyc0Rpdik7XHJcblxyXG4gIGZvcmVjYXN0QmFyLmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gZm9yZWNhc3RCYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZTNEYXlGb3JlY2FzdCgpIHtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCd0aHJlZS1kYXktZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICdzbWFsbCcpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZS50ZXh0Q29udGVudCA9ICczLURheSBGb3JlY2FzdCc7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2LmFwcGVuZENoaWxkKHRocmVlRGF5Rm9yZWNhc3RUaXRsZSk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0VGl0bGVEaXYpO1xyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0TGlzdCk7XHJcblxyXG4gIHJldHVybiB0aHJlZURheUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhpZ2ggPSBNYXRoLmZsb29yKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuaGlnaFtpXSk7XHJcbiAgICBjb25zdCBsb3cgPSBNYXRoLmZsb29yKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QubG93W2ldKTtcclxuICAgIGNvbnN0IGRheSA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuZGF5c1tpXTtcclxuICAgIGNvbnN0IGNvciA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuY29yW2ldO1xyXG4gICAgY29uc3QgZGVzYyA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3Qud2VhdGhlckRlc2NyaXB0aW9uW2ldO1xyXG4gICAgY29uc3QgaWNvbiA9IGZldGNoV2VhdGhlckljb24ocXVlcnkudGhyZWVEYXlGb3JlY2FzdC53ZWF0aGVyQ29kZVtpXSwgMSk7XHJcbiAgICBjb25zdCBiYXIgPSBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKGhpZ2gsIGxvdywgZGF5LCBjb3IsIGRlc2MsIGljb24pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0JylbMF07XHJcbiAgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB0aHJlZURheUZvcmVDYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWRkaXRpb25hbC1mb3JlY2FzdCc7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gY3JlYXRlSG91cmx5Rm9yZWNhc3QoKTtcclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0KTtcclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGNyZWF0ZTNEYXlGb3JlY2FzdCgpO1xyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGhyZWVEYXlGb3JlY2FzdCk7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUWiwgZmV0Y2hXZWF0aGVySWNvbiB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5mdW5jdGlvbiBwcmludE91dEhpZ2gocXVlcnkpIHtcclxuICBjb25zdCBoaWdoID0gTWF0aC5mbG9vcihxdWVyeS5jdXJyZW50V2VhdGhlci5kYWlseUhpZ2gpO1xyXG4gIHJldHVybiBgJHtoaWdofcKwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRMb3cocXVlcnkpIHtcclxuICBjb25zdCBsb3cgPSBNYXRoLmZsb29yKHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLmRhaWx5TG93KTtcclxuICByZXR1cm4gYCR7bG93fcKwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRDdXJyZW50VGVtcChxdWVyeSkge1xyXG4gIGNvbnN0IHRlbXAgPSBNYXRoLmZsb29yKHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLmN1cnJlbnRUZW1wKTtcclxuICByZXR1cm4gYCR7dGVtcH3CsGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0Q2l0eShxdWVyeSkge1xyXG4gIHJldHVybiBxdWVyeS5jaXR5TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXREZXNjcmlwdGlvbihxdWVyeSkge1xyXG4gIHJldHVybiBxdWVyeS5jdXJyZW50V2VhdGhlci53ZWF0aGVyRGVzY3JpcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0V2VhdGhlckljb24ocXVlcnkpIHtcclxuICBjb25zdCBsb2NhbEhvdXIgPSBjb252ZXJ0VFoobmV3IERhdGUoKSwgcXVlcnkudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgY29kZSA9IHF1ZXJ5LmhvdXJseS53ZWF0aGVyY29kZVtsb2NhbEhvdXJdO1xyXG4gIGNvbnN0IHZhbHVlID0gcXVlcnkuaG91cmx5LmlzX2RheVtsb2NhbEhvdXJdO1xyXG5cclxuICByZXR1cm4gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50Q2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNpdHknKTtcclxuICBjdXJyZW50Q2l0eS50ZXh0Q29udGVudCA9IHByaW50T3V0Q2l0eShxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGVtcCcpO1xyXG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gcHJpbnRPdXRDdXJyZW50VGVtcChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGRhaWx5SGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWhpZ2gnKTtcclxuICBkYWlseUhpZ2gudGV4dENvbnRlbnQgPSBwcmludE91dEhpZ2gocXVlcnkpO1xyXG5cclxuICBjb25zdCBkYWlseUxvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWxvdycpO1xyXG4gIGRhaWx5TG93LnRleHRDb250ZW50ID0gcHJpbnRPdXRMb3cocXVlcnkpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0LWRlc2NyaXB0aW9uJyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByaW50T3V0RGVzY3JpcHRpb24ocXVlcnkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC13ZWF0aGVyJyk7XHJcbiAgY3VycmVudFdlYXRoZXJJY29uLnNyYyA9IHByaW50T3V0V2VhdGhlckljb24ocXVlcnkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDdXJyZW50Rm9yZWNhc3QoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2N1cnJlbnQtZm9yZWNhc3QnO1xyXG5cclxuICBjb25zdCBjdXJyZW50Q2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjdXJyZW50Q2l0eS5pZCA9ICdjdXJyZW50LWNpdHknO1xyXG4gIGN1cnJlbnRDaXR5LnRleHRDb250ZW50ID0gJ1ZlbnR1cmEnO1xyXG4gIGN1cnJlbnRDaXR5RGl2LmFwcGVuZENoaWxkKGN1cnJlbnRDaXR5KTtcclxuXHJcbiAgY29uc3QgY3VycmVudERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjdXJyZW50V2VhdGhlckltZy5pZCA9ICdjdXJyZW50LXdlYXRoZXInO1xyXG4gIGN1cnJlbnRXZWF0aGVySW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1jdXJyZW50L3BhcnRseS1jbG91ZHkuc3ZnJztcclxuICBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckltZyk7XHJcblxyXG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCdib3R0b20nKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdsYXJnZScpO1xyXG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnQtdGVtcCc7XHJcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSAnNzTCsEYnO1xyXG4gIGN1cnJlbnRUZW1wRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXYpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb24uaWQgPSAnZm9yZWNhc3QtZGVzY3JpcHRpb24nO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUGFydGx5IGNsb3VkeSc7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERlc2NyaXB0aW9uKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REZXNjcmlwdGlvbkRpdik7XHJcblxyXG4gIGNvbnN0IGhpZ2hMb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoaWdoTG93RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtbG93Jyk7XHJcblxyXG4gIGNvbnN0IGhpZ2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBoaWdoUC50ZXh0Q29udGVudCA9ICdIOiAnO1xyXG5cclxuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGhpZ2guaWQgPSAnY3VycmVudC1oaWdoJztcclxuICBoaWdoLnRleHRDb250ZW50ID0gJzc0wrAnO1xyXG4gIGhpZ2hQLmFwcGVuZENoaWxkKGhpZ2gpO1xyXG4gIGhpZ2hEaXYuYXBwZW5kQ2hpbGQoaGlnaFApO1xyXG5cclxuICBjb25zdCBsb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSAnTDogJztcclxuXHJcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvdy5pZCA9ICdjdXJyZW50LWxvdyc7XHJcbiAgbG93LnRleHRDb250ZW50ID0gJzU0wrAnO1xyXG4gIGxvd1AuYXBwZW5kQ2hpbGQobG93KTtcclxuICBsb3dEaXYuYXBwZW5kQ2hpbGQobG93UCk7XHJcblxyXG4gIGhpZ2hMb3dEaXYuYXBwZW5kQ2hpbGQoaGlnaERpdik7XHJcbiAgaGlnaExvd0Rpdi5hcHBlbmRDaGlsZChsb3dEaXYpO1xyXG4gIGJvdHRvbURpdi5hcHBlbmRDaGlsZChoaWdoTG93RGl2KTtcclxuXHJcbiAgY3VycmVudERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEaXYpO1xyXG4gIGN1cnJlbnREZXRhaWxzRGl2LmFwcGVuZENoaWxkKGJvdHRvbURpdik7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3VycmVudENpdHlEaXYpO1xyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3VycmVudERldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJmdW5jdGlvbiBqb2luUXVlcnkocXVlcnkpIHtcclxuICBjb25zdCBuZXdRdWVyeSA9IHF1ZXJ5LnNwbGl0KCcsICcpLmpvaW4oKTtcclxuICByZXR1cm4gbmV3UXVlcnk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQnlQb3N0YWxDb2RlKHF1ZXJ5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3ppcD96aXA9JHtxdWVyeX0mYXBwaWQ9OGRkNDQ3ZjBlZmFlODMyNGYxNWMyNGYyZWZkZDdlOWZgLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9LCAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gcmV0dXJuIGVycm9yXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0J5Q2l0eShxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3F1ZXJ5fSZsaW1pdD01JmFwcGlkPThkZDQ0N2YwZWZhZTgzMjRmMTVjMjRmMmVmZGQ3ZTlmYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIHJldHVybiBlcnJvclxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2hlY2tRdWVyeShxdWVyeSkge1xyXG4gIC8vIGJyZWFrIHVwIHF1ZXJ5IGludG8gY29ycmVjdCBwYXJ0cyAoZWcuIGNpdHksIHN0YXRlLCBjb3VudHJ5LCB6aXAgY29kZSlcclxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGpvaW5RdWVyeShxdWVyeSk7XHJcbiAgY29uc3QgcG9zdGFsQ29kZVJlc3VsdCA9IGF3YWl0IGNoZWNrQnlQb3N0YWxDb2RlKHNlYXJjaFF1ZXJ5KTtcclxuICBjb25zdCBjaXR5UmVzdWx0ID0gYXdhaXQgY2hlY2tCeUNpdHkoc2VhcmNoUXVlcnkpO1xyXG5cclxuICBpZiAoIShwb3N0YWxDb2RlUmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIHBvc3RhbENvZGVSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcbiAgICBjb25zb2xlLmxvZygnd2UgZm91bmQgYSB6aXAgY29kZSB0aGF0IG1hdGNoZXMhIHJlc3VsdDogJywgcG9zdGFsQ29kZVJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIHBvc3RhbENvZGVSZXN1bHQ7XHJcbiAgfSBpZiAoIShjaXR5UmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIGNpdHlSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcbiAgICBjb25zb2xlLmxvZygnd2UgZm91bmQgYSBjaXR5IHRoYXQgbWF0Y2hlcyEgcmVzdWx0OiAnLCBjaXR5UmVzdWx0KTtcclxuXHJcbiAgICByZXR1cm4gY2l0eVJlc3VsdDtcclxuICB9XHJcbiAgLy8gZGlzcGxheSBhbiBlcnJvciB0aGF0IHRoZSBzZWFyY2ggcXVlcnkgd2FzIG5vdCBmb3VuZCBhbG9uZyB3aXRoIHNlYXJjaCB0aXBzXHJcbiAgY29uc29sZS5sb2coJ25vIGNpdHkgZm91bmQgOignKTtcclxuXHJcbiAgcmV0dXJuICdObyBjaXR5IGZvdW5kJztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRaKGRhdGUsIHR6U3RyaW5nKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyB0aW1lWm9uZTogdHpTdHJpbmcgfSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSkge1xyXG4gIGxldCBzcmM7XHJcbiAgY29uc3Qgc3RyaW5nID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItaWNvbnMvJztcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgaWYgKGlzRGF5ID09PSAxKSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfWNsZWFyLXNreS1zdW5ueS5zdmdgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31jbGVhci1za3ktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBpZiAoaXNEYXkgPT09IDEpIHtcclxuICAgICAgICBzcmMgPSBgJHtzdHJpbmd9bW9zdGx5LWNsZWFyLXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfW1vc3RseS1jbGVhci1tb29uLnN2Z2A7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIGlmIChpc0RheSA9PT0gMSkge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31wYXJ0bHktY2xvdWR5LXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfXBhcnRseS1jbG91ZHktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9b3ZlcmNhc3Quc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDQ1OlxyXG4gICAgY2FzZSA0ODpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfWZvZy5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNTE6XHJcbiAgICBjYXNlIDUzOlxyXG4gICAgY2FzZSA1NTpcclxuICAgIGNhc2UgNTY6XHJcbiAgICBjYXNlIDU3OlxyXG4gICAgY2FzZSA4MDpcclxuICAgIGNhc2UgODE6XHJcbiAgICBjYXNlIDgyOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9ZHJpenpsZS5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNjE6XHJcbiAgICBjYXNlIDYzOlxyXG4gICAgY2FzZSA2NTpcclxuICAgIGNhc2UgNjY6XHJcbiAgICBjYXNlIDY3OlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9cmFpbi5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNzE6XHJcbiAgICBjYXNlIDczOlxyXG4gICAgY2FzZSA3NTpcclxuICAgIGNhc2UgNzc6XHJcbiAgICBjYXNlIDg1OlxyXG4gICAgY2FzZSA4NjpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfXNub3cuc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDk1OlxyXG4gICAgY2FzZSA5NjpcclxuICAgIGNhc2UgOTk6XHJcbiAgICAgIHNyYyA9IGAke3N0cmluZ310aHVuZGVyc3Rvcm0uc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBzcmM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJEZXNjcmlwdGlvbihjb2RlKSB7XHJcbiAgY29uc3Qgd2VhdGhlckNvZGVzID0ge1xyXG4gICAgMDogJ0NsZWFyIFNreScsXHJcbiAgICAxOiAnTWFpbmx5IENsZWFyJyxcclxuICAgIDI6ICdQYXJ0bHkgQ2xvdWR5JyxcclxuICAgIDM6ICdPdmVyY2FzdCcsXHJcbiAgICA0NTogJ0ZvZycsXHJcbiAgICA0ODogJ0RlcG9zaXRpbmcgUmltZSBGb2cnLFxyXG4gICAgNTE6ICdMaWdodCBEcml6emxlJyxcclxuICAgIDUzOiAnTW9kZXJhdGUgRHJpenpsZScsXHJcbiAgICA1NTogJ0RlbnNlIERyaXp6bGUnLFxyXG4gICAgNTY6ICdGcmVlemluZywgTGlnaHQgRHJpenpsZScsXHJcbiAgICA1NzogJ0ZyZWV6aW5nLCBEZW5zZSBEcml6emxlJyxcclxuICAgIDYxOiAnTGlnaHQgUmFpbicsXHJcbiAgICA2MzogJ01vZGVyYXRlIFJhaW4nLFxyXG4gICAgNjU6ICdIZWF2eSBSYWluJyxcclxuICAgIDY2OiAnRnJlZXppbmcsIExpZ2h0IFJhaW4nLFxyXG4gICAgNjc6ICdGcmVlemluZywgSGVhdnkgUmFpbicsXHJcbiAgICA3MTogJ0xpZ2h0IFNub3cnLFxyXG4gICAgNzM6ICdNb2RlcmF0ZSBTbm93JyxcclxuICAgIDc1OiAnSGVhdnkgU25vdycsXHJcbiAgICA3NzogJ1Nub3cgR3JhaW5zJyxcclxuICAgIDgwOiAnTGlnaHQgU2hvd2VycycsXHJcbiAgICA4MTogJ01vZGVyYXRlIFNob3dlcnMnLFxyXG4gICAgODI6ICdIZWF2eSBTaG93ZXJzJyxcclxuICAgIDg1OiAnTGlnaHQgU25vdyBTaG93ZXInLFxyXG4gICAgODY6ICdIZWF2eSBTbm93IFNob3dlcicsXHJcbiAgICA5NTogJ1RodW5kZXJzdG9ybScsXHJcbiAgICA5NjogJ1RodW5kZXJzdG9ybSBhbmQgTGlnaHQgSGFpbCcsXHJcbiAgICA5OTogJ1RodW5kZXJzdG9ybSBhbmQgSGVhdnkgSGFpbCcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF5KGNvZGUpIHtcclxuICBjb25zdCBkYXlzID0ge1xyXG4gICAgMDogJ1N1bmRheScsXHJcbiAgICAxOiAnTW9uZGF5JyxcclxuICAgIDI6ICdUdWVzZGF5JyxcclxuICAgIDM6ICdXZWRuZXNkYXknLFxyXG4gICAgNDogJ1RodXJzZGF5JyxcclxuICAgIDU6ICdGcmlkYXknLFxyXG4gICAgNjogJ1NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF5c1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBjdXJyZW50SG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBxdWVyeS50aW1lem9uZSkuZ2V0SG91cnMoKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBxdWVyeS5ob3VybHkudGVtcGVyYXR1cmVfMm1bY3VycmVudEhvdXJdO1xyXG4gIGNvbnN0IGRhaWx5SGlnaCA9IHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heFswXTtcclxuICBjb25zdCBkYWlseUxvdyA9IHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21pblswXTtcclxuICBjb25zdCB3ZWF0aGVyQ29kZSA9IHF1ZXJ5LmhvdXJseS53ZWF0aGVyY29kZVtjdXJyZW50SG91cl07XHJcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZ2V0V2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJDb2RlKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGN1cnJlbnRUZW1wLCBkYWlseUhpZ2gsIGRhaWx5TG93LCB3ZWF0aGVyRGVzY3JpcHRpb24sXHJcbiAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hDdXJyZW50V2VhdGhlcihxdWVyeSkge1xyXG4gIGNvbnN0IGxhdGl0dWRlID0gcXVlcnkubGF0O1xyXG4gIGNvbnN0IGxvbmdpdHVkZSA9IHF1ZXJ5LmxvbjtcclxuICBjb25zdCBjaXR5TmFtZSA9IHF1ZXJ5Lm5hbWU7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9sYXRpdHVkZT0ke2xhdGl0dWRlfSZsb25naXR1ZGU9JHtsb25naXR1ZGV9JmhvdXJseT10ZW1wZXJhdHVyZV8ybSxyZWxhdGl2ZWh1bWlkaXR5XzJtLHdlYXRoZXJjb2RlLHdpbmRzcGVlZF8xMG0saXNfZGF5JmRhaWx5PXdlYXRoZXJjb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sdXZfaW5kZXhfbWF4LHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4JnRlbXBlcmF0dXJlX3VuaXQ9ZmFocmVuaGVpdCZ3aW5kc3BlZWRfdW5pdD1tcGgmcHJlY2lwaXRhdGlvbl91bml0PWluY2gmdGltZXpvbmU9YXV0b2ApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIocmVzdWx0KTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0geyBjaXR5TmFtZSwgLi4ucmVzdWx0LCBjdXJyZW50V2VhdGhlciB9O1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGVmYXVsdExvY2F0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9sYXRpdHVkZT01MS41MDg1JmxvbmdpdHVkZT0tMC4xMjU3JmhvdXJseT10ZW1wZXJhdHVyZV8ybSxyZWxhdGl2ZWh1bWlkaXR5XzJtLHdlYXRoZXJjb2RlLHdpbmRzcGVlZF8xMG0saXNfZGF5JmRhaWx5PXdlYXRoZXJjb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sdXZfaW5kZXhfbWF4LHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4JnRlbXBlcmF0dXJlX3VuaXQ9ZmFocmVuaGVpdCZ3aW5kc3BlZWRfdW5pdD1tcGgmcHJlY2lwaXRhdGlvbl91bml0PWluY2gmdGltZXpvbmU9YXV0b2ApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGNyZWF0ZUN1cnJlbnRXZWF0aGVyKHJlc3VsdCk7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9ICdMb25kb24nO1xyXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSB7IGNpdHlOYW1lLCAuLi5yZXN1bHQsIGN1cnJlbnRXZWF0aGVyIH07XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRUaHJlZURheUZvcmVjYXN0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcclxuICBjb25zdCBoaWdoID0gW107XHJcbiAgY29uc3QgbG93ID0gW107XHJcbiAgY29uc3QgY29yID0gW107XHJcbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gW107XHJcbiAgY29uc3Qgd2VhdGhlckNvZGUgPSBbXTtcclxuICBjb25zdCBkYXlzID0gW107XHJcbiAgLy8gZ2V0IHRlbXBzXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA0OyBpICs9IDEpIHtcclxuICAgIGhpZ2gucHVzaChxdWVyeS5kYWlseS50ZW1wZXJhdHVyZV8ybV9tYXhbaV0pO1xyXG4gICAgbG93LnB1c2gocXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluW2ldKTtcclxuICAgIGNvci5wdXNoKHF1ZXJ5LmRhaWx5LnByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4W2ldKTtcclxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5wdXNoKGdldFdlYXRoZXJEZXNjcmlwdGlvbihxdWVyeS5kYWlseS53ZWF0aGVyY29kZVtpXSkpO1xyXG4gICAgd2VhdGhlckNvZGUucHVzaChxdWVyeS5kYWlseS53ZWF0aGVyY29kZVtpXSk7XHJcbiAgfVxyXG4gIC8vIGFzc2lnbiBkYXlzXHJcbiAgZm9yIChsZXQgaSA9IGRheSArIDE7IGkgPCAoZGF5ICsgNCk7IGkgKz0gMSkge1xyXG4gICAgZGF5cy5wdXNoKGdldERheShpICUgNykpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGhpZ2gsIGxvdywgY29yLCBkYXlzLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHdlYXRoZXJDb2RlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERlZmF1bHRXZWF0aGVyKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRlZmF1bHRMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBhd2FpdCBnZXRUaHJlZURheUZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gIHJldHVybiB7IC4uLmN1cnJlbnRXZWF0aGVyRGF0YSwgdGhyZWVEYXlGb3JlY2FzdCB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50V2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaEN1cnJlbnRXZWF0aGVyKHF1ZXJ5KTtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gYXdhaXQgZ2V0VGhyZWVEYXlGb3JlY2FzdChjdXJyZW50V2VhdGhlckRhdGEpO1xyXG5cclxuICByZXR1cm4geyAuLi5jdXJyZW50V2VhdGhlckRhdGEsIHRocmVlRGF5Rm9yZWNhc3QgfTtcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQ3VycmVudEZvcmVjYXN0LCB7IHVwZGF0ZUN1cnJlbnRGb3JlY2FzdExheW91dCB9IGZyb20gJy4vY3VycmVudC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5pbXBvcnQgY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMsIHsgdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dCB9IGZyb20gJy4vYWRkaXRpb25hbC1jdXJyZW50LWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjcmVhdGVBZGRpdGlvbmFsRm9yZWNhc3QsIHsgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0LCB1cGRhdGVIb3VybHlGb3JlY2FzdExheW91dCB9IGZyb20gJy4vYWRkaXRpb25hbC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5pbXBvcnQgY2hlY2tRdWVyeSBmcm9tICcuL2ZldGNoLWNpdGllcyc7XHJcbmltcG9ydCBmZXRjaFdlYXRoZXIsIHsgZmV0Y2hEZWZhdWx0V2VhdGhlciB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaXR5UmVzdWx0VGV4dChyZXN1bHQpIHtcclxuICBpZiAocmVzdWx0LnppcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IHJlc3VsdC5uYW1lO1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcmVzdWx0O1xyXG4gICAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXN1bHQ7XHJcblxyXG4gICAgcmV0dXJuIGAke2NpdHlOYW1lfSwgJHtzdGF0ZX0sICR7Y291bnRyeX1gO1xyXG4gIH1cclxuICBjb25zdCB7IHppcCB9ID0gcmVzdWx0O1xyXG4gIGNvbnN0IGNpdHlOYW1lID0gcmVzdWx0Lm5hbWU7XHJcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXN1bHQ7XHJcblxyXG4gIHJldHVybiBgJHt6aXB9LCAke2NpdHlOYW1lfSwgJHtjb3VudHJ5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5UmVzdWx0KHNlYXJjaFJlc3VsdCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbG9jYXRpb24tbWFya2VyLnN2Zyc7XHJcbiAgbG9jYXRpb25JY29uLmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICBjb25zdCB0ZXh0UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGV4dFJlc3VsdC50ZXh0Q29udGVudCA9IGNyZWF0ZUNpdHlSZXN1bHRUZXh0KHNlYXJjaFJlc3VsdCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gIHJlc3VsdC5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xyXG4gIHJlc3VsdC5hcHBlbmRDaGlsZCh0ZXh0UmVzdWx0KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNlYXJjaFJlc3VsdHMocmVzdWx0cykge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVzdWx0c1tpXTtcclxuICAgICAgY29uc3QgcXVlcnlSZXN1bHQgPSBjcmVhdGVRdWVyeVJlc3VsdChxdWVyeSk7XHJcbiAgICAgIHF1ZXJ5UmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZldGNoIHdlYXRoZXIgZnVuY3Rpb25cclxuICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgd2VhdGhlciEnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFdlYXRoZXIocXVlcnkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gICAgICAgIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgICAgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVyeVJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gY3JlYXRlUXVlcnlSZXN1bHQocmVzdWx0cyk7XHJcbiAgICBxdWVyeVJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIHdlYXRoZXIhJyk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICAgIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICAgICAgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJ5UmVzdWx0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyUmVzdWx0cygpIHtcclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cy1jb250YWluZXInKVswXTtcclxuICByZXN1bHRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaXR5SW5wdXRGb3JtTW9iaWxlKCkge1xyXG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXNlYXJjaCcpO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5mb3IgPSAnY2l0eS1tb2JpbGUnO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQuaWQgPSAnY2l0eS1tb2JpbGUnO1xyXG4gIGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoIGNpdHknO1xyXG4gIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2xlYXJSZXN1bHRzKCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVja1F1ZXJ5KGlucHV0LnZhbHVlKTtcclxuICAgIGRpc3BsYXlTZWFyY2hSZXN1bHRzKHJlc3VsdCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBpbnB1dENvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9nZ2xlU3dpdGNoKHRvZ2dsZU5hbWUpIHtcclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XHJcbiAgbGFiZWwuZm9yID0gdG9nZ2xlTmFtZTtcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGlucHV0LmlkID0gdG9nZ2xlTmFtZTtcclxuXHJcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicsICdyb3VuZCcpO1xyXG5cclxuICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9iaWxlU2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2JpbGUtc2VhcmNoLW1vZGFsJylbMF07XHJcbiAgaWYgKG1vYmlsZVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgIG1vYmlsZVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2JpbGVTZWFyY2hNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25NZW51KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdicpO1xyXG4gIGNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHNlYXJjaEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnJztcclxuXHJcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICBsb2dvSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvd2VhdGhlci1hcHAtbG9nby5zdmcnO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1jaXR5JztcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBjaXR5IChlZy4gTG9zIEFuZ2VsZXMpJztcclxuXHJcbiAgc2VhcmNoQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHNlYXJjaEltZyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyRGl2KTtcclxuXHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhhbWJ1cmdlck1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcclxuICBjb25zdCBoYW1idXJnZXJNZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2hhbWJ1cmdlci1tZW51LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgaGFtYnVyZ2VyTWVudUJ1dHRvbi5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51SW1nKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1idXR0b24nKTtcclxuICBzZWFyY2hCdXR0b24uYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKTtcclxuXHJcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoTW9kYWwpO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaERpdi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtZGl2JywgJ2hpZGRlbicpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuaWQgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaFAuY2xhc3NMaXN0LmFkZCgnZGFyay1saWdodC1zd2l0Y2gnLCAnc21hbGwnKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoUC50ZXh0Q29udGVudCA9ICdFbmFibGUgRGFyayBNb2RlJztcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaCA9IGNyZWF0ZVRvZ2dsZVN3aXRjaCgpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2guaWQgPSAnZGFyay1saWdodC1zd2l0Y2gnO1xyXG5cclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LmFwcGVuZENoaWxkKGRhcmtMaWdodE1vZGVTd2l0Y2hQKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LmFwcGVuZENoaWxkKGRhcmtMaWdodE1vZGVTd2l0Y2gpO1xyXG5cclxuICBjb25zdCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQLmNsYXNzTGlzdC5hZGQoJ2ZhcmVuaGVpdC1jZWxzaXVzLXN3aXRjaCcsICdzbWFsbCcpO1xyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQLnRleHRDb250ZW50ID0gJ0VuYWJsZSBDZWxzaXVzJztcclxuXHJcbiAgY29uc3QgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaCA9IGNyZWF0ZVRvZ2dsZVN3aXRjaCgpO1xyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2guaWQgPSAnZmFyZW5oZWl0LWNlbHNpdXMtc3dpdGNoJztcclxuXHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdi5hcHBlbmRDaGlsZChmYXJlbmhlaXRDZWxzaXVzU3dpdGNoUCk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdi5hcHBlbmRDaGlsZChmYXJlbmhlaXRDZWxzaXVzU3dpdGNoKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzd2l0Y2hlc0Rpdi5jbGFzc0xpc3QuYWRkKCdzd2l0Y2hlcycpO1xyXG4gIHN3aXRjaGVzRGl2LmFwcGVuZChkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2KTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbE9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsT3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLW9wdGlvbnMnKTtcclxuICBhZGRpdGlvbmFsT3B0aW9uc0Rpdi5hcHBlbmQoc2VhcmNoQnV0dG9uLCBoYW1idXJnZXJNZW51QnV0dG9uKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucycpO1xyXG4gIG9wdGlvbnNEaXYuYXBwZW5kKHN3aXRjaGVzRGl2LCBhZGRpdGlvbmFsT3B0aW9uc0Rpdik7XHJcblxyXG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQob3B0aW9uc0Rpdik7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpZGVOYXZpZ2F0aW9uKCkge1xyXG4gIGNvbnN0IHNpZGVOYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBzaWRlTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LWNvbnRhaW5lcicpO1xyXG4gIHNpZGVOYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2Jyk7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgbG9nby5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3dlYXRoZXItYXBwLWxvZ28uc3ZnJztcclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIHNpZGVOYXYuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdG9wTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBkYXJrTW9kZS50ZXh0Q29udGVudCA9ICdEYXJrIE1vZGUnO1xyXG4gIHRvcExpc3QuYXBwZW5kQ2hpbGQoZGFya01vZGUpO1xyXG5cclxuICBjb25zdCBzZXRUb0NlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIHNldFRvQ2Vsc2l1cy50ZXh0Q29udGVudCA9ICdTZXQgdG8gQ2Vsc2l1cyc7XHJcbiAgdG9wTGlzdC5hcHBlbmRDaGlsZChzZXRUb0NlbHNpdXMpO1xyXG4gIG5hdkl0ZW1zLmFwcGVuZENoaWxkKHRvcExpc3QpO1xyXG5cclxuICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICBuYXZJdGVtcy5hcHBlbmRDaGlsZChkaXZpZGVyKTtcclxuXHJcbiAgY29uc3QgYm90dG9tTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcbiAgYm90dG9tTGlzdC5hcHBlbmRDaGlsZChhYm91dCk7XHJcbiAgbmF2SXRlbXMuYXBwZW5kQ2hpbGQoYm90dG9tTGlzdCk7XHJcblxyXG4gIHNpZGVOYXYuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xyXG4gIHNpZGVOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XHJcblxyXG4gIGNvbnN0IGV4aXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBleGl0RGl2LmNsYXNzTGlzdC5hZGQoJ2V4aXQnKTtcclxuXHJcbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IGV4aXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBleGl0SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvZXhpdC5zdmcnO1xyXG4gIGV4aXRCdG4uYXBwZW5kQ2hpbGQoZXhpdEltZyk7XHJcbiAgZXhpdERpdi5hcHBlbmRDaGlsZChleGl0QnRuKTtcclxuXHJcbiAgc2lkZU5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChleGl0RGl2KTtcclxuXHJcbiAgcmV0dXJuIHNpZGVOYXZDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpcCh0ZXh0KSB7XHJcbiAgY29uc3QgdGlwSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwSW1nRGl2LmNsYXNzTGlzdC5hZGQoJ3RpcC1pbWcnKTtcclxuICBjb25zdCB0aXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB0aXBJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC90aXAuc3ZnJztcclxuICB0aXBJbWdEaXYuYXBwZW5kQ2hpbGQodGlwSW1nKTtcclxuXHJcbiAgY29uc3QgdGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwLnRleHRDb250ZW50ID0gYCR7dGV4dH1gO1xyXG4gIHRpcERpdi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwLmNsYXNzTGlzdC5hZGQoJ3RpcCcpO1xyXG4gIHRpcC5hcHBlbmQodGlwSW1nRGl2LCB0aXBEaXYpO1xyXG5cclxuICByZXR1cm4gdGlwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hJbnN0cnVjdGlvbnMoKSB7XHJcbiAgY29uc3QgdGV4dE9uZSA9ICdUbyBzZWFyY2ggZm9yIGNpdHkgaW4gdGhlIFVTLCBlbnRlciBjaXR5LCBzdGF0ZSwgYW5kIGNvdW50cnkgY29kZSAoZWcuIFBob2VuaXgsIEFaLCBVUyknO1xyXG4gIGNvbnN0IHRpcE9uZSA9IGNyZWF0ZVRpcCh0ZXh0T25lKTtcclxuXHJcbiAgY29uc3QgdGV4dFR3byA9ICdUbyBzZWFyY2ggZm9yIGNpdHkgb3V0c2lkZSBVUywgZW50ZXIgY2l0eSBhbmQgY291bnRyeSBjb2RlIChlZy4gTG9uZG9uLCBVSyknO1xyXG4gIGNvbnN0IHRpcFR3byA9IGNyZWF0ZVRpcCh0ZXh0VHdvKTtcclxuXHJcbiAgY29uc3QgdGV4dFRocmVlID0gJ1lvdSBjYW4gYWxzbyBzZWFyY2ggYnkgcG9zdGFsL3ppcCBjb2RlIGZvbGxvd2VkIGJ5IGNvdW50cnkgY29kZSAoZWcuIDMzNzAxLCBVUyknO1xyXG4gIGNvbnN0IHRpcFRocmVlID0gY3JlYXRlVGlwKHRleHRUaHJlZSk7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluc3RydWN0aW9ucy5jbGFzc0xpc3QuYWRkKCd0aXBzLWNvbnRhaW5lcicpO1xyXG4gIGluc3RydWN0aW9ucy5hcHBlbmQodGlwT25lLCB0aXBUd28sIHRpcFRocmVlKTtcclxuXHJcbiAgcmV0dXJuIGluc3RydWN0aW9ucztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9iaWxlU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoLW1vZGFsJywgJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlJbnB1dEZvcm0gPSBjcmVhdGVDaXR5SW5wdXRGb3JtTW9iaWxlKCk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAncHJpbWFyeScpO1xyXG4gIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNlYXJjaE1vZGFsKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1iYXInKTtcclxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUlucHV0Rm9ybSk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXN1bHRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdHMtY29udGFpbmVyJyk7XHJcbiAgLyogY29uc3QgdGVzdFJlc3VsdCA9IGNyZWF0ZVF1ZXJ5UmVzdWx0KCdMb3MgQW5nZWxlcywgQ0EnKTtcclxuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlc3RSZXN1bHQpOyAqL1xyXG5cclxuICBjb25zdCBzZWFyY2hJbnN0cnVjdGlvbnMgPSBjcmVhdGVTZWFyY2hJbnN0cnVjdGlvbnMoKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChzZWFyY2hDb250YWluZXIsIHJlc3VsdHNDb250YWluZXIsIHNlYXJjaEluc3RydWN0aW9ucyk7XHJcbiAgbW9kYWwuYXBwZW5kKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBtb2RhbDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERlZmF1bHRXZWF0aGVyKCkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRGVmYXVsdFdlYXRoZXIoKTtcclxuICB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGVIb3VybHlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gIHVwZGF0ZTNEYXlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRpb25NZW51ID0gY3JlYXRlTmF2aWdhdGlvbk1lbnUoKTtcclxuICBjb25zdCBzaWRlTmF2aWdhdGlvbiA9IGNyZWF0ZVNpZGVOYXZpZ2F0aW9uKCk7XHJcbiAgY29uc3Qgc2VhcmNoTW9iaWxlID0gY3JlYXRlTW9iaWxlU2VhcmNoTW9kYWwoKTtcclxuICBjb25zdCBjdXJyZW50Rm9yZWNhc3QgPSBjcmVhdGVDdXJyZW50Rm9yZWNhc3QoKTtcclxuICBjb25zdCBtb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscyA9IGNyZWF0ZU1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzKCk7XHJcbiAgY29uc3QgYWRkaXRpb25hbEZvcmVjYXN0RGV0YWlscyA9IGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCgpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKG5hdmlnYXRpb25NZW51KTtcclxuICBib2R5LmFwcGVuZENoaWxkKHNpZGVOYXZpZ2F0aW9uKTtcclxuICBib2R5LmFwcGVuZENoaWxkKHNlYXJjaE1vYmlsZSk7XHJcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Rm9yZWNhc3QpO1xyXG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMpO1xyXG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbEZvcmVjYXN0RGV0YWlscyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuICBhd2FpdCBsb2FkRGVmYXVsdFdlYXRoZXIoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9saWdodC10aGVtZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL3BhZ2UtbGF5b3V0JztcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgY3JlYXRlUGFnZSgpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=