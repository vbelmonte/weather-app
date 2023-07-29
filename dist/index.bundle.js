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
    transition: background-color 0.1s linear;
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
	background: var(--power-primary);
}
  
input:focus + .slider {
    box-shadow: 0 0 1px var(--power-primary);
}



/** MOBILE SEARCH MODAL STYLES **/
.search-modal {
    color: var(--black);
}

.search-modal .container {
    background-color: var(--white);
}

.search-modal .search-result:hover {
	background-color: var(--modal-result);
}



/** SETTINGS MODAL **/
.mobile-settings-modal .container {
    background-color: var(--white);
    color: var(--black);
}



/** CURRENT FORECAST STYLES **/
section#current-forecast {
    color: var(--white);
}   

    /* DESKTOP STYLE */
    @media only screen and (min-width: 1024px) {
        #current-forecast {
            background-color: var(--additional-forecast);
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
    /* DESKTOP STYLE */
    @media only screen and (min-width: 1024px) {
        #additional-forecast {
            background-color: var(--additional-forecast);
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



/** LOADING ANIMATION STYLES **/
.loader {
    border-top: 0.25rem solid var(--power-primary);
}`, "",{"version":3,"sources":["webpack://./src/light-theme.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kGAAkG;IAClG,uCAAuC;IACvC,gBAAgB;IAChB,sGAAsG;IACtG,gDAAgD;IAChD,wBAAwB;IACxB,0BAA0B;IAC1B,4GAA4G;IAC5G,2BAA2B;IAC3B,mCAAmC;IACnC,yHAAyH;IACzH,+CAA+C;IAC/C,iDAAiD;IACjD,+BAA+B;IAC/B,qCAAqC;IACrC,gDAAgD;IAChD,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;;;AAIA,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;AAC/B;;;;AAIA,2BAA2B;AAC3B;IACI,sCAAsC;IACtC,wCAAwC;AAC5C;;AAEA;IACI,8BAA8B;AAClC;;;;AAIA,wBAAwB;AACxB;IACI,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;CACC,2BAA2B;AAC5B;;;;AAIA,2BAA2B;AAC3B;IACI,oCAAoC;IACpC,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,gCAAgC;AACjC;;AAEA;IACI,wCAAwC;AAC5C;;;;AAIA,iCAAiC;AACjC;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,qCAAqC;AACtC;;;;AAIA,qBAAqB;AACrB;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;;;AAIA,8BAA8B;AAC9B;IACI,mBAAmB;AACvB;;IAEI,kBAAkB;IAClB;QACI;YACI,4CAA4C;YAC5C,6BAA6B;QACjC;IACJ;;;;AAIJ,2CAA2C;AAC3C;IACI,gCAAgC;;IAEhC,iBAAiB;IACjB,0DAA0D;AAC9D;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,yCAAyC;IACrC,kBAAkB;IAClB;QACI;YACI,4CAA4C;YAC5C,6BAA6B;QACjC;IACJ;;;;AAIJ,6BAA6B;AAC7B;IACI,mFAAmF;IACnF,qBAAqB;AACzB;;AAEA;IACI,wDAAwD;AAC5D;;AAEA;CACC,4CAA4C;AAC7C;;AAEA;CACC,8CAA8C;AAC/C;;AAEA;IACI,8BAA8B;AAClC;;;;AAIA,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;;;AAIA,+BAA+B;AAC/B;IACI,8CAA8C;AAClD","sourcesContent":[":root {\r\n    --black: #323232;\r\n    --black-filter: invert(17%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(93%) contrast(89%);;\r\n    --black-transparent: rgb(0, 0, 0, 0.25);\r\n    --white: #F2F2F2;\r\n    --white-filter: invert(99%) sepia(2%) saturate(143%) hue-rotate(198deg) brightness(116%) contrast(90%);\r\n    --day: linear-gradient(135deg, #0087E7, #C29900);\r\n    --power-primary: #00131A;\r\n    --power-secondary: #64D1F3;\r\n    --power-tertiary: invert(100%) sepia(36%) saturate(4010%) hue-rotate(176deg) brightness(103%) contrast(101%);\r\n    --power-quaternary: #7FA9D6;\r\n    --transparent: rgb(46, 68, 87, 0.5);\r\n    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);\r\n    --additional-forecast: rgba(242, 242, 242, 0.2);\r\n    --additional-forecast-2: rgba(242, 242, 242, 0.7);\r\n    --card: rgb(250, 250, 250, 0.1);\r\n    --navigation: rgb(242, 242, 242, 0.2);\r\n    --dropshadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.1);\r\n    --modal-result: #EAEEEF;  \r\n}\r\n\r\nbody {\r\n    background: var(--day);\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.secondary {\r\n    color: var(--power-secondary);\r\n}\r\n\r\n.tertiary {\r\n    filter: var(--power-tertiary);\r\n}\r\n\r\n.black-filter {\r\n    filter: var(--black-filter);\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\nbutton {\r\n    background-color: var(--power-primary);\r\n    transition: background-color 0.1s linear;\r\n}\r\n\r\n.button:hover {\r\n    background-color: var(--black);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\nnav {\r\n    color: var(--white);\r\n}\r\n\r\nnav.main-nav img {\r\n    filter: var(--white-filter);\r\n}\r\n\r\nnav.side-nav-container {\r\n    color: var(--black);\r\n}\r\n\r\nnav .side-nav {\r\n    background-color: var(--navigation);\r\n}\r\n\r\nnav.side-nav-container .logo,\r\nnav.side-nav-container .divider {\r\n    filter: var(--black-filter);\r\n}\r\n\r\nnav.side-nav-container .exit img {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n.slider {\r\n    background-color: var(--transparent);\r\n    border: solid 1px var(--white);\r\n}\r\n\r\n.slider:before {\r\n    background-color: var(--white);\r\n}\r\n\r\ninput:checked + .slider {\r\n\tbackground: var(--power-primary);\r\n}\r\n  \r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px var(--power-primary);\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.search-modal {\r\n    color: var(--black);\r\n}\r\n\r\n.search-modal .container {\r\n    background-color: var(--white);\r\n}\r\n\r\n.search-modal .search-result:hover {\r\n\tbackground-color: var(--modal-result);\r\n}\r\n\r\n\r\n\r\n/** SETTINGS MODAL **/\r\n.mobile-settings-modal .container {\r\n    background-color: var(--white);\r\n    color: var(--black);\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\nsection#current-forecast {\r\n    color: var(--white);\r\n}   \r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #current-forecast {\r\n            background-color: var(--additional-forecast);\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n#more-current-forecast-details-container {\r\n    background: var(--power-primary);\r\n\r\n    /* MOBILE STYLE */\r\n    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #more-current-forecast-details-container {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** ADDITIONAL FORECAST DETAILS STYLES **/\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #additional-forecast {\r\n            background-color: var(--additional-forecast);\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.custom-scrollbar {\r\n    scrollbar-color: var(--additional-forecast-2) var(--additional-forecast) !important;\r\n    scrollbar-width: thin;\r\n}\r\n\r\n.custom-scrollbar:hover {\r\n    scrollbar-color: var(--white) var(--additional-forecast);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-track {\r\n\tbackground-color: var(--additional-forecast);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\tbackground-color: var(--additional-forecast-2);\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--white);\r\n}\r\n\r\n\r\n    \r\n/** HOURLY CARD STYLES **/\r\n.hourly-card {\r\n    background-color: var(--card);\r\n}\r\n\r\n\r\n\r\n/** LOADING ANIMATION STYLES **/\r\n.loader {\r\n    border-top: 0.25rem solid var(--power-primary);\r\n}"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Regular.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid-desktop.svg */ "./src/assets/images/layout/magnifying-glass-solid-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid.svg */ "./src/assets/images/layout/magnifying-glass-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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
	--light-gray: #D1D1D1;
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
	font-family: 'Barlow Semi-Condensed';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
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

	display: flex;
	flex-direction: column;
}

/** DESKTOP BELOW **/
@media only screen and (min-width: 1024px) {
	body {
		padding: 0rem 5rem;
		gap: 4rem;
	}
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

h3.extra-small {
	font-size: 0.75rem;
	line-height: 0.75rem;
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
	background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
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

	align-self: center;
	width: 100%;
	max-width: 80rem;
	box-sizing: border-box;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		nav.main-nav  {
			padding: 1rem 0rem;
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
.search-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 100vh;
	z-index: 2;
	background-color: var(--transparent-dark-30);
}

.search-modal .container {
	padding: 1rem;
	height: 100%;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		.search-modal .container {
			padding: 1.5rem;
			max-width: 50rem;
			margin: 5rem auto;
			height: auto;
			border-radius: 0.5rem;
		}
	}

.search-modal .search-bar {
	display: flex;
	gap: 0.5rem;
}

.search-modal .mobile-search {
	width: 100%;
}

.search-modal input {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
	border: solid 1px var(--gray);

	width: 100%;
	box-sizing: border-box;
}

.search-modal .output-container {
	padding-left: 1rem;
}

.search-modal .results-container {
	display: flex;
	flex-direction: column;
	padding: 2rem 0rem;
}

.search-modal .search-result {
	display: flex;
	gap: 0.75rem;
	align-items: center;
	padding: 0.5rem 0;
}

.search-modal .search-result:hover {
	cursor:	default;
}

.search-modal .search-result img {
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
		.grid-container {
			display: grid;
			gap: 1rem;
			grid-template: 4fr 1fr / 1fr 1fr;
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



/** CURRENT FORECAST STYLES **/
#current-forecast {
	display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
	padding: 3rem 1rem;
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
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#additional-forecast {
			overflow: hidden;
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
}



/** LOADING ANIMATION STYLES **/
.loader {
	margin: auto;
	border: 0.25rem solid var(--light-gray);
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	animation: spinner 1s linear infinite;
}
  
  @keyframes spinner {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

.loader.absolute {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n\t--black: #222222;\r\n\t--white: #F2F2F2;\r\n\t--gray: #A0A0A0;\r\n\t--light-gray: #D1D1D1;\r\n\t--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);\r\n\t--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);\r\n\t--transparent: rgb(242, 242, 242, 0.8);\r\n\t--transparent-dark-30: rgba(40, 40, 40, 0.5);\r\n\t--transparent-dark-70: rgba(40, 40, 40, 0.7);\r\n\t--input-placeholder: rgb(242, 242, 242, 0.7);\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Medium';\r\n\tsrc: url('../src/assets/fonts/Barlow-Medium.ttf') format('truetype');\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\tcolor: var(--white);\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n/** DESKTOP BELOW **/\r\n@media only screen and (min-width: 1024px) {\r\n\tbody {\r\n\t\tpadding: 0rem 5rem;\r\n\t\tgap: 4rem;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.white-filter {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n.transparent {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL FONT STYLES **/\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\nh2.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh2.medium {\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2.large {\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh3.extra-small {\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.bold.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np.large {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 4rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\np.medium {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\np.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\na {\r\n\tfont-family: 'Barlow Medium';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n#hidden {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=text] {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tpadding: 0.5rem;\r\n\tpadding-left: 2.5rem;\r\n\tborder: solid 1px;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: var(--white);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\nnav {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav.main-nav {\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n\r\n\talign-self: center;\r\n\twidth: 100%;\r\n\tmax-width: 80rem;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav  {\r\n\t\t\tpadding: 1rem 0rem;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav img {\r\n\theight: 1rem;\r\n}\r\n\r\nnav.main-nav .logo, nav.side-nav .logo {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav.main-nav .options {\r\n\tdisplay: flex;\r\n\tgap: 3rem;\r\n}\r\n\r\nnav.main-nav .options .switches {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .options .switches {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 1rem;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .options .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\nnav.main-nav .options .additional-options button {\r\n\tpadding: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .additional-options .menu-button {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\nnav.side-nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 1;\r\n    gap: 0;\r\n\r\n\tbackground-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\nnav.side-nav-container button {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.side-nav-container .side-nav {\r\n    padding: 1rem;\r\n    flex: 4;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nnav.side-nav-container li {\r\n    margin: 1rem 0rem;\r\n}\r\n\r\nnav.side-nav-container .exit {\r\n    padding: 1rem 1rem;\r\n\tflex: 1;\r\n}\r\n\r\nnav.side-nav-container hr {\r\n    border: none;\r\n    border-top: solid 1px var(--power-secondary);\r\n\tmargin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.search-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: var(--transparent-dark-30);\r\n}\r\n\r\n.search-modal .container {\r\n\tpadding: 1rem;\r\n\theight: 100%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.search-modal .container {\r\n\t\t\tpadding: 1.5rem;\r\n\t\t\tmax-width: 50rem;\r\n\t\t\tmargin: 5rem auto;\r\n\t\t\theight: auto;\r\n\t\t\tborder-radius: 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n.search-modal .search-bar {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.search-modal .mobile-search {\r\n\twidth: 100%;\r\n}\r\n\r\n.search-modal input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--gray);\r\n\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.search-modal .output-container {\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.search-modal .results-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 2rem 0rem;\r\n}\r\n\r\n.search-modal .search-result {\r\n\tdisplay: flex;\r\n\tgap: 0.75rem;\r\n\talign-items: center;\r\n\tpadding: 0.5rem 0;\r\n}\r\n\r\n.search-modal .search-result:hover {\r\n\tcursor:\tdefault;\r\n}\r\n\r\n.search-modal .search-result img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n\r\n/** SEARCH TIP STYLES **/\r\n.tips-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n\talign-items: center;\r\n}\r\n\r\n.tip p {\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n.tip .tip-img {\r\n\tpadding-top: 0.3rem;\r\n}\r\n\r\n.tip .tip-img img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n\r\n.switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.75rem;\r\n\theight: 1.5rem;\r\n}\r\n\r\n.switch input { \r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n\r\n.slider {\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\n.slider:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\theight: 1rem;\r\n\twidth: 1rem;\r\n\tleft: 4px;\r\n\tbottom: 3px;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n\t-webkit-transform: translateX(18px);\r\n\t-ms-transform: translateX(18px);\r\n\ttransform: translateX(18px);\r\n}\r\n  \r\n/* Rounded sliders */\r\n.slider.round {\r\n\tborder-radius: 32px;\r\n}\r\n  \r\n.slider.round:before {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.toggle-div {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5rem;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** MAIN-CONTAINER STYLES **/\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.grid-container {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgap: 1rem;\r\n\t\t\tgrid-template: 4fr 1fr / 1fr 1fr;\r\n\t\t\tmax-width: 80rem;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** SETTINGS MODAL **/\r\n.mobile-settings-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 3;\r\n\r\n\tdisplay: flex;\r\n\tbackground-color: var(--transparent-dark-70);\r\n}\r\n\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.mobile-settings-modal {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-settings-modal .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n\twidth: 70vw;\r\n\tpadding: 1rem;\r\n}\r\n\r\n\t@media only screen and (min-width: 425px) {\r\n\t\t.mobile-settings-modal .container {\r\n\t\t\twidth: 20rem;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-settings-modal button {\r\n\tbackground-color: transparent;\r\n\theight: fit-content;\r\n}\r\n\r\n.mobile-settings-modal button img {\r\n\tfilter: var(--white-filter);\r\n\theight: 1.5rem;\r\n}\r\n\r\n.mobile-settings-modal li {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast {\r\n\t\t\talign-items: stretch;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 2;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details,\r\n#current-forecast .forecast-details .bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details .bottom {\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details {\r\n\tgap: 5rem;\t\r\n}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\twidth: 8rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: auto;\r\n\t\t\tposition: static;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 2;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: center;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\t/** TABLET BELOW **/\r\n\t@media only screen and (min-width: 426px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 25rem;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tmargin-right: auto;\r\n\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding: 1.5rem 3rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details img {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n\theight: 1.5rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#additional-forecast {\r\n\t\t\toverflow: hidden;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tpadding-bottom: 4rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 2;\r\n\t\t\tgrid-column-end: 3;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n.hourly-card {\r\n\tpadding: 1.5rem;\r\n    padding-top: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n.hourly-card .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n\twidth: 2.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\theight: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n.hourly-forecast-carousel {\r\n\toverflow-x: auto;\r\n}\r\n.custom-scrollbar::-webkit-scrollbar {\r\n\theight: 0.5rem;\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-track {\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n.hourly-forecast-carousel > .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST STYLES **/\r\n.three-day-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n.three-day-forecast-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\t\r\n\tpadding: 0.5rem 0rem;\r\n}\r\n\r\n.daily-bar .day-container {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 10;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\twidth: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: none;\r\n}\r\n\r\n.daily-bar .temperatures {\r\n\twidth: 5rem;\r\n}\r\n\r\n.daily-bar .high,\r\n.daily-bar .low {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n\r\n\r\n/** LOADING ANIMATION STYLES **/\r\n.loader {\r\n\tmargin: auto;\r\n\tborder: 0.25rem solid var(--light-gray);\r\n\tborder-radius: 50%;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tanimation: spinner 1s linear infinite;\r\n}\r\n  \r\n  @keyframes spinner {\r\n\t0% { transform: rotate(0deg); }\r\n\t100% { transform: rotate(360deg); }\r\n}\r\n\r\n.loader.absolute {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n}"],"sourceRoot":""}]);
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
  const corTitle = document.createElement('h3');
  corTitle.classList.add('secondary', 'extra-small');
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
  const humidityTitle = document.createElement('h3');
  humidityTitle.classList.add('secondary', 'extra-small');
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
  const windTitle = document.createElement('h3');
  windTitle.classList.add('secondary', 'extra-small');
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
  const uvTitle = document.createElement('h3');
  uvTitle.classList.add('secondary', 'extra-small');
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

  const dayOfTheWeek = document.createElement('h3');
  dayOfTheWeek.classList.add('small');
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
  const mobileSearchModal = document.getElementsByClassName('search-modal')[0];
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

function toggleGridContainer(state) {
  const gridContainer = document.getElementsByClassName('grid-container')[0];

  if (state) {
    gridContainer.id = 'hidden';
  } else {
    gridContainer.id = '';
  }
}

function togglePageLoadingAnimation(state) {
  const main = document.getElementsByTagName('main')[0];

  if (state) {
    const loadingAnimation = document.createElement('div');
    loadingAnimation.classList.add('loader', 'absolute');
    main.appendChild(loadingAnimation);
  } else {
    const loadingAnimation = document.getElementsByClassName('loader')[0];
    loadingAnimation.remove();
  }
}

function toggleSearchLoadingAnimation(state) {
  const resultsContainer = document.getElementsByClassName('results-container')[0];

  if (state) {
    const loadingAnimation = document.createElement('div');
    loadingAnimation.classList.add('loader');
    resultsContainer.appendChild(loadingAnimation);
  } else {
    resultsContainer.innerHTML = '';
  }
}

function delayDisplayingGrid(result) {
  togglePageLoadingAnimation(false);
  toggleGridContainer(false);
  (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__.updateCurrentForecastLayout)(result);
  (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__.updateAdditionalCurrentForecastLayout)(result);
  (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.updateHourlyForecastLayout)(result);
  (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__.update3DayForecastLayout)(result);
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
        toggleGridContainer(true);
        togglePageLoadingAnimation(true);
        const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(query);
        console.log(result);
        setTimeout(delayDisplayingGrid, 500, result);
      });

      resultsContainer.appendChild(queryResult);
    }
  } else {
    const queryResult = createQueryResult(results);
    queryResult.addEventListener('click', async () => {
      toggleSearchModal();
      console.log('fetching weather!');
      toggleGridContainer(true);
      togglePageLoadingAnimation(true);
      const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(results);
      console.log(result);
      setTimeout(delayDisplayingGrid, 500, result);
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
    toggleSearchLoadingAnimation(true);
    const result = await (0,_fetch_cities__WEBPACK_IMPORTED_MODULE_3__["default"])(input.value);
    if (result instanceof Object) {
      toggleSearchLoadingAnimation(false);
      clearTips();
      displaySearchResults(result);
      createRefineSuggestions();
    } else {
      toggleSearchLoadingAnimation(false);
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

    tempData = [];

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

function createSearchModal() {
  const modal = document.createElement('div');
  modal.classList.add('search-modal', 'hidden');

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
  const searchMobile = createSearchModal();
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

/***/ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05cbb3ba9db7b5e1da6e.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxRQUFRLFlBQVksTUFBTSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8s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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLFFBQVEsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxTQUFTLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxRQUFRLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssUUFBUSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsUUFBUSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxTQUFTLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFFBQVEsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxR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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtRUFBbUI7QUFDMUMsRUFBRSxxRkFBMkI7QUFDN0IsRUFBRSwwR0FBcUM7QUFDdkMsRUFBRSx1RkFBMEI7QUFDNUIsRUFBRSxxRkFBd0I7QUFDMUI7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0VBQXFCO0FBQy9DLHFDQUFxQywrRUFBZ0M7QUFDckUsb0NBQW9DLHVFQUF3QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMWpCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNLO0FBQ1k7QUFDdkM7QUFDQTtBQUNBLFFBQVEsd0RBQVU7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xpZ2h0LXRoZW1lLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWdodC10aGVtZS5jc3M/N2JkYyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FkZGl0aW9uYWwtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2N1cnJlbnQtZm9yZWNhc3QtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoLWNpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XHJcbiAgICAtLWJsYWNrLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODklKTs7XHJcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xyXG4gICAgLS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxNDMlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5MCUpO1xyXG4gICAgLS1kYXk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg3RTcsICNDMjk5MDApO1xyXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xyXG4gICAgLS1wb3dlci1zZWNvbmRhcnk6ICM2NEQxRjM7XHJcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoMTAwJSkgc2VwaWEoMzYlKSBzYXR1cmF0ZSg0MDEwJSkgaHVlLXJvdGF0ZSgxNzZkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XHJcbiAgICAtLXRyYW5zcGFyZW50OiByZ2IoNDYsIDY4LCA4NywgMC41KTtcclxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XHJcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcclxuICAgIC0tYWRkaXRpb25hbC1mb3JlY2FzdC0yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNyk7XHJcbiAgICAtLWNhcmQ6IHJnYigyNTAsIDI1MCwgMjUwLCAwLjEpO1xyXG4gICAgLS1uYXZpZ2F0aW9uOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC4yKTtcclxuICAgIC0tZHJvcHNoYWRvdzogMHJlbSAwLjVyZW0gMXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tbW9kYWwtcmVzdWx0OiAjRUFFRUVGOyAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGF5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xyXG4uc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4udGVydGlhcnkge1xyXG4gICAgZmlsdGVyOiB2YXIoLS1wb3dlci10ZXJ0aWFyeSk7XHJcbn1cclxuXHJcbi5ibGFjay1maWx0ZXIge1xyXG4gICAgZmlsdGVyOiB2YXIoLS1ibGFjay1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xyXG5uYXYge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IGltZyB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxubmF2IC5zaWRlLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uKTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAubG9nbyxcclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZGl2aWRlciB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xyXG4uc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcbn1cclxuICBcclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xyXG4uc2VhcmNoLW1vZGFsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi5zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXJlc3VsdCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNFVFRJTkdTIE1PREFMICoqL1xyXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcbnNlY3Rpb24jY3VycmVudC1mb3JlY2FzdCB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59ICAgXHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjY3VycmVudC1mb3JlY2FzdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcblxyXG4gICAgLyogTU9CSUxFIFNUWUxFICovXHJcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG4uY3VzdG9tLXNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMikgdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCkgIWltcG9ydGFudDtcclxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxufVxyXG5cclxuLmN1c3RvbS1zY3JvbGxiYXI6aG92ZXIge1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS13aGl0ZSkgdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdC0yKTtcclxufVxyXG5cclxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuXHJcbiAgICBcclxuLyoqIEhPVVJMWSBDQVJEIFNUWUxFUyAqKi9cclxuLmhvdXJseS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBMT0FESU5HIEFOSU1BVElPTiBTVFlMRVMgKiovXHJcbi5sb2FkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMC4yNXJlbSBzb2xpZCB2YXIoLS1wb3dlci1wcmltYXJ5KTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpZ2h0LXRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrR0FBa0c7SUFDbEcsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixzR0FBc0c7SUFDdEcsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsNEdBQTRHO0lBQzVHLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMseUhBQXlIO0lBQ3pILCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQsK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQyxnREFBZ0Q7SUFDaEQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7O0FBSUEseUJBQXlCO0FBQ3pCO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7O0FBSUEsMkJBQTJCO0FBQzNCO0lBQ0ksc0NBQXNDO0lBQ3RDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7OztBQUlBLHdCQUF3QjtBQUN4QjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7SUFDSSxvQ0FBb0M7SUFDcEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0NBQ0MsZ0NBQWdDO0FBQ2pDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOzs7O0FBSUEsaUNBQWlDO0FBQ2pDO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOzs7O0FBSUEscUJBQXFCO0FBQ3JCO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7OztBQUlBLDhCQUE4QjtBQUM5QjtJQUNJLG1CQUFtQjtBQUN2Qjs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDRDQUE0QztZQUM1Qyw2QkFBNkI7UUFDakM7SUFDSjs7OztBQUlKLDJDQUEyQztBQUMzQztJQUNJLGdDQUFnQzs7SUFFaEMsaUJBQWlCO0lBQ2pCLDBEQUEwRDtBQUM5RDs7SUFFSSxrQkFBa0I7SUFDbEI7UUFDSTtZQUNJLDZCQUE2QjtRQUNqQztJQUNKOzs7QUFHSix5Q0FBeUM7SUFDckMsa0JBQWtCO0lBQ2xCO1FBQ0k7WUFDSSw0Q0FBNEM7WUFDNUMsNkJBQTZCO1FBQ2pDO0lBQ0o7Ozs7QUFJSiw2QkFBNkI7QUFDN0I7SUFDSSxtRkFBbUY7SUFDbkYscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0RBQXdEO0FBQzVEOztBQUVBO0NBQ0MsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MsOENBQThDO0FBQy9DOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7O0FBSUEseUJBQXlCO0FBQ3pCO0lBQ0ksNkJBQTZCO0FBQ2pDOzs7O0FBSUEsK0JBQStCO0FBQy9CO0lBQ0ksOENBQThDO0FBQ2xEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1ibGFjazogIzMyMzIzMjtcXHJcXG4gICAgLS1ibGFjay1maWx0ZXI6IGludmVydCgxNyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNmRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDg5JSk7O1xcclxcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2IoMCwgMCwgMCwgMC4yNSk7XFxyXFxuICAgIC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuICAgIC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgyJSkgc2F0dXJhdGUoMTQzJSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTE2JSkgY29udHJhc3QoOTAlKTtcXHJcXG4gICAgLS1kYXk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg3RTcsICNDMjk5MDApO1xcclxcbiAgICAtLXBvd2VyLXByaW1hcnk6ICMwMDEzMUE7XFxyXFxuICAgIC0tcG93ZXItc2Vjb25kYXJ5OiAjNjREMUYzO1xcclxcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoMTAwJSkgc2VwaWEoMzYlKSBzYXR1cmF0ZSg0MDEwJSkgaHVlLXJvdGF0ZSgxNzZkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XFxyXFxuICAgIC0tcG93ZXItcXVhdGVybmFyeTogIzdGQTlENjtcXHJcXG4gICAgLS10cmFuc3BhcmVudDogcmdiKDQ2LCA2OCwgODcsIDAuNSk7XFxyXFxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XFxyXFxuICAgIC0tYWRkaXRpb25hbC1mb3JlY2FzdDogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjIpO1xcclxcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjcpO1xcclxcbiAgICAtLWNhcmQ6IHJnYigyNTAsIDI1MCwgMjUwLCAwLjEpO1xcclxcbiAgICAtLW5hdmlnYXRpb246IHJnYigyNDIsIDI0MiwgMjQyLCAwLjIpO1xcclxcbiAgICAtLWRyb3BzaGFkb3c6IDByZW0gMC41cmVtIDFyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIC0tbW9kYWwtcmVzdWx0OiAjRUFFRUVGOyAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xcclxcbi5zZWNvbmRhcnkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlcnRpYXJ5IHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS1wb3dlci10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcbi5ibGFjay1maWx0ZXIge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xcclxcbm5hdiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiBpbWcge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnNpZGUtbmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2aWdhdGlvbik7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmxvZ28sXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZGl2aWRlciB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tYmxhY2stZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZXhpdCBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xcclxcbi5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuICBcXHJcXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXBvd2VyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9CSUxFIFNFQVJDSCBNT0RBTCBTVFlMRVMgKiovXFxyXFxuLnNlYXJjaC1tb2RhbCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdDpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9kYWwtcmVzdWx0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFNFVFRJTkdTIE1PREFMICoqL1xcclxcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbnNlY3Rpb24jY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufSAgIFxcclxcblxcclxcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgICAjY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG5cXHJcXG4gICAgLyogTU9CSUxFIFNUWUxFICovXFxyXFxuICAgIGJveC1zaGFkb3c6IDByZW0gMC4xMjVyZW0gMC4yNXJlbSB2YXIoLS1ibGFjay10cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgICAjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xcclxcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgICAjYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG4uY3VzdG9tLXNjcm9sbGJhciB7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdC0yKSB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KSAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOmhvdmVyIHtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS13aGl0ZSkgdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdC0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gICAgXFxyXFxuLyoqIEhPVVJMWSBDQVJEIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIExPQURJTkcgQU5JTUFUSU9OIFNUWUxFUyAqKi9cXHJcXG4ubG9hZGVyIHtcXHJcXG4gICAgYm9yZGVyLXRvcDogMC4yNXJlbSBzb2xpZCB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbjpyb290IHtcclxuXHQtLWJsYWNrOiAjMjIyMjIyO1xyXG5cdC0td2hpdGU6ICNGMkYyRjI7XHJcblx0LS1ncmF5OiAjQTBBMEEwO1xyXG5cdC0tbGlnaHQtZ3JheTogI0QxRDFEMTtcclxuXHQtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSgxMDYlKSBodWUtcm90YXRlKDUxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDkwJSk7XHJcblx0LS1ncmF5LWZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE1M2RlZykgYnJpZ2h0bmVzcyg3OCUpIGNvbnRyYXN0KDg2JSk7XHJcblx0LS10cmFuc3BhcmVudDogcmdiKDI0MiwgMjQyLCAyNDIsIDAuOCk7XHJcblx0LS10cmFuc3BhcmVudC1kYXJrLTMwOiByZ2JhKDQwLCA0MCwgNDAsIDAuNSk7XHJcblx0LS10cmFuc3BhcmVudC1kYXJrLTcwOiByZ2JhKDQwLCA0MCwgNDAsIDAuNyk7XHJcblx0LS1pbnB1dC1wbGFjZWhvbGRlcjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuNyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBNZWRpdW0nO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQnO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0LyoqIE1PQklMRSAqKi9cclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiogREVTS1RPUCBCRUxPVyAqKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRib2R5IHtcclxuXHRcdHBhZGRpbmc6IDByZW0gNXJlbTtcclxuXHRcdGdhcDogNHJlbTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cclxuLndoaXRlLWZpbHRlciB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEdFTkVSQUwgRk9OVCBTVFlMRVMgKiovXHJcbmgxIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMiB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuaDIuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcbn1cclxuXHJcbmgyLnNtYWxsIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmgyLm1lZGl1bSB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMi5sYXJnZSB7XHJcblx0Zm9udC1zaXplOiAzcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG5oMyB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMy5zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oMy5leHRyYS1zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xyXG59XHJcblxyXG5oMy5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmgzLmJvbGQuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5wLmxhcmdlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDRyZW07XHJcblx0bGluZS1oZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbnAubWVkaXVtIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbnAuc21hbGwge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMC43NXJlbTtcclxufVxyXG5cclxucC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmEge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IE1lZGl1bSc7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cclxuLmhpZGRlbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2hpZGRlbiB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcblx0YmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIG5vLXJlcGVhdCBzY3JvbGwgMC43NXJlbSA1MCUvMXJlbSAxcmVtO1xyXG5cdHBhZGRpbmc6IDAuNXJlbTtcclxuXHRwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcclxuXHRib3JkZXI6IHNvbGlkIDFweDtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0cGFkZGluZzogMC41cmVtIDFyZW07XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcbm5hdiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IHtcclxuXHRnYXA6IDFyZW07XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogODByZW07XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2ICB7XHJcblx0XHRcdHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYubWFpbi1uYXYgaW1nIHtcclxuXHRoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAubG9nbywgbmF2LnNpZGUtbmF2IC5sb2dvIHtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogM3JlbTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGdhcDogMXJlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyBidXR0b24ge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMgLm1lbnUtYnV0dG9uIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZ2FwOiAwO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBidXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuc2lkZS1uYXYge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZsZXg6IDQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgbGkge1xyXG4gICAgbWFyZ2luOiAxcmVtIDByZW07XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgaHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XHJcblx0bWFyZ2luOiAycmVtIDByZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xyXG4uc2VhcmNoLW1vZGFsIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstMzApO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQuc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG5cdFx0XHRwYWRkaW5nOiAxLjVyZW07XHJcblx0XHRcdG1heC13aWR0aDogNTByZW07XHJcblx0XHRcdG1hcmdpbjogNXJlbSBhdXRvO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtYmFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5tb2JpbGUtc2VhcmNoIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCBpbnB1dCB7XHJcblx0YmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIG5vLXJlcGVhdCBzY3JvbGwgMC43NXJlbSA1MCUvMXJlbSAxcmVtO1xyXG5cdGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyYXkpO1xyXG5cclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5vdXRwdXQtY29udGFpbmVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtbW9kYWwgLnJlc3VsdHMtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0cGFkZGluZzogMnJlbSAwcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC43NXJlbTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0OmhvdmVyIHtcclxuXHRjdXJzb3I6XHRkZWZhdWx0O1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFNFQVJDSCBUSVAgU1RZTEVTICoqL1xyXG4udGlwcy1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcbi50aXAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXAgcCB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnRpcCAudGlwLWltZyB7XHJcblx0cGFkZGluZy10b3A6IDAuM3JlbTtcclxufVxyXG5cclxuLnRpcCAudGlwLWltZyBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xyXG5cclxuLnN3aXRjaCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMi43NXJlbTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7IFxyXG5cdG9wYWNpdHk6IDA7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDFyZW07XHJcblx0d2lkdGg6IDFyZW07XHJcblx0bGVmdDogNHB4O1xyXG5cdGJvdHRvbTogM3B4O1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG5cdHRyYW5zaXRpb246IC4ycztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxufVxyXG4gIFxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcblx0Ym9yZGVyLXJhZGl1czogMzJweDtcclxufVxyXG4gIFxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQudG9nZ2xlLWRpdiB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGdhcDogMC41cmVtO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLyoqIE1BSU4tQ09OVEFJTkVSIFNUWUxFUyAqKi9cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC5ncmlkLWNvbnRhaW5lciB7XHJcblx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdGdhcDogMXJlbTtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDFmciAxZnI7XHJcblx0XHRcdG1heC13aWR0aDogODByZW07XHJcblx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcbi8qKiBTRVRUSU5HUyBNT0RBTCAqKi9cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ei1pbmRleDogMztcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrLTcwKTtcclxufVxyXG5cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0Lm1vYmlsZS1zZXR0aW5ncy1tb2RhbCB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAycmVtO1xyXG5cdHdpZHRoOiA3MHZ3O1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xyXG5cdFx0Lm1vYmlsZS1zZXR0aW5ncy1tb2RhbCAuY29udGFpbmVyIHtcclxuXHRcdFx0d2lkdGg6IDIwcmVtO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIGJ1dHRvbiBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCBsaSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcbiNjdXJyZW50LWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVyZW07XHJcblx0cGFkZGluZzogM3JlbSAxcmVtO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCB7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdHBhZGRpbmc6IDNyZW07XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMsXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0Z2FwOiA1cmVtO1x0XHJcbn1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5oaWdoLWxvdyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCBpbWcjY3VycmVudC13ZWF0aGVyIHtcclxuXHR3aWR0aDogOHJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xyXG5cdG1hcmdpbjogMHJlbSAxcmVtO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdHBvc2l0aW9uOiBzdGF0aWM7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtY29sdW1uLWVuZDogMjtcclxuXHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LWVuZDogMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMnJlbTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcclxufVxyXG5cdC8qKiBUQUJMRVQgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0XHRcdG1heC13aWR0aDogMjVyZW07XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRcdFx0cGFkZGluZzogMS41cmVtIDNyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0XHRcdG1heC13aWR0aDogMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgLm1vZHVsZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAwLjVyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBBRERJVElPTkFMIEZPUkVDQVNUIFNUWUxFUyAtIE1PQklMRSAqKi9cclxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDVyZW07XHJcblx0cGFkZGluZzogM3JlbSAxcmVtO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcblx0XHRcdHBhZGRpbmc6IDNyZW07XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRncmlkLWNvbHVtbi1zdGFydDogMjtcclxuXHRcdFx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xyXG5cdFx0XHRncmlkLXJvdy1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1yb3ctZW5kOiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcbi5ob3VybHktZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDJyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cclxuLmhvdXJseS1jYXJkIHtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5ob3VybHktY2FyZCAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDEuNXJlbTtcclxuXHR3aWR0aDogMi41cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgaW1nIHtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUk9VU0VMIFNUWUxFUyAqKi9cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCB7XHJcblx0b3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdGhlaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0Ym9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCA+IC5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjVyZW07XHJcblx0cGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuLnRocmVlLWRheS1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMnJlbTtcclxufVxyXG5cclxuLnRocmVlLWRheS1mb3JlY2FzdC1saXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xyXG4uZGFpbHktYmFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdFxyXG5cdHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5kYXktY29udGFpbmVyIHtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZmxleDogMTA7XHJcblx0Z2FwOiAxcmVtOyAvKiogTU9CSUxFICoqL1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5mb3JlY2FzdCxcclxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzLFxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5mb3JlY2FzdCB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3QgLmljb24ge1xyXG5cdHdpZHRoOiAxLjVyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIC5pY29uIHtcclxuXHRoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgaDQge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyB7XHJcblx0d2lkdGg6IDVyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmhpZ2gsXHJcbi5kYWlseS1iYXIgLmxvdyB7XHJcblx0ZmxleDogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIExPQURJTkcgQU5JTUFUSU9OIFNUWUxFUyAqKi9cclxuLmxvYWRlciB7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGJvcmRlcjogMC4yNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0d2lkdGg6IDNyZW07XHJcblx0aGVpZ2h0OiAzcmVtO1xyXG5cdGFuaW1hdGlvbjogc3Bpbm5lciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG5cdDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuXHQxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4ubG9hZGVyLmFic29sdXRlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtB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bnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWJsYWNrOiAjMjIyMjIyO1xcclxcblxcdC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuXFx0LS1ncmF5OiAjQTBBMEEwO1xcclxcblxcdC0tbGlnaHQtZ3JheTogI0QxRDFEMTtcXHJcXG5cXHQtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSgxMDYlKSBodWUtcm90YXRlKDUxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDkwJSk7XFxyXFxuXFx0LS1ncmF5LWZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE1M2RlZykgYnJpZ2h0bmVzcyg3OCUpIGNvbnRyYXN0KDg2JSk7XFxyXFxuXFx0LS10cmFuc3BhcmVudDogcmdiKDI0MiwgMjQyLCAyNDIsIDAuOCk7XFxyXFxuXFx0LS10cmFuc3BhcmVudC1kYXJrLTMwOiByZ2JhKDQwLCA0MCwgNDAsIDAuNSk7XFxyXFxuXFx0LS10cmFuc3BhcmVudC1kYXJrLTcwOiByZ2JhKDQwLCA0MCwgNDAsIDAuNyk7XFxyXFxuXFx0LS1pbnB1dC1wbGFjZWhvbGRlcjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBNZWRpdW0nO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG5cXHQvKiogTU9CSUxFICoqL1xcclxcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdGJvZHkge1xcclxcblxcdFxcdHBhZGRpbmc6IDByZW0gNXJlbTtcXHJcXG5cXHRcXHRnYXA6IDRyZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xcclxcbi53aGl0ZS1maWx0ZXIge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRyYW5zcGFyZW50IHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogR0VORVJBTCBGT05UIFNUWUxFUyAqKi9cXHJcXG5oMSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQnO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgyLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcbn1cXHJcXG5cXHJcXG5oMi5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMi5tZWRpdW0ge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIubGFyZ2Uge1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMuZXh0cmEtc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5ib2xkLnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5sYXJnZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiA0cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLm1lZGl1bSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLnNtYWxsIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbnAuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBNZWRpdW0nO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xcclxcbi5oaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNoaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcblxcdGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQtZGVza3RvcC5zdmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcblxcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXFxyXFxubmF2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYge1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXgtd2lkdGg6IDgwcmVtO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2ICB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMXJlbSAwcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IGltZyB7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmxvZ28sIG5hdi5zaWRlLW5hdiAubG9nbyB7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAub3B0aW9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuYWRkaXRpb25hbC1vcHRpb25zIGJ1dHRvbiB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHRuYXYubWFpbi1uYXYgLmFkZGl0aW9uYWwtb3B0aW9ucyAubWVudS1idXR0b24ge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZ2FwOiAwO1xcclxcblxcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5zaWRlLW5hdiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZsZXg6IDQ7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBsaSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcblxcdGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgaHIge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xcclxcblxcdG1hcmdpbjogMnJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9CSUxFIFNFQVJDSCBNT0RBTCBTVFlMRVMgKiovXFxyXFxuLnNlYXJjaC1tb2RhbCB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrLTMwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQuc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDUwcmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbjogNXJlbSBhdXRvO1xcclxcblxcdFxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtYmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5tb2JpbGUtc2VhcmNoIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1tb2RhbCBpbnB1dCB7XFxyXFxuXFx0YmFja2dyb3VuZDogdXJsKCcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5vdXRwdXQtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0cGFkZGluZzogMnJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC43NXJlbTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0OmhvdmVyIHtcXHJcXG5cXHRjdXJzb3I6XFx0ZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0VBUkNIIFRJUCBTVFlMRVMgKiovXFxyXFxuLnRpcHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGlwIHAge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50aXAgLnRpcC1pbWcge1xcclxcblxcdHBhZGRpbmctdG9wOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi50aXAgLnRpcC1pbWcgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLWdyYXktZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xcclxcblxcclxcbi5zd2l0Y2gge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDIuNzVyZW07XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2ggaW5wdXQgeyBcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHdpZHRoOiAwO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxyXFxuXFx0dHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG5cXHR3aWR0aDogMXJlbTtcXHJcXG5cXHRsZWZ0OiA0cHg7XFxyXFxuXFx0Ym90dG9tOiAzcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XFxyXFxuXFx0dHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcbn1cXHJcXG4gIFxcclxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcclxcbi5zbGlkZXIucm91bmQge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxufVxcclxcbiAgXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQudG9nZ2xlLWRpdiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRnYXA6IDAuNXJlbTtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1BSU4tQ09OVEFJTkVSIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5ncmlkLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDFmciAxZnI7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiA4MHJlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0VUVElOR1MgTU9EQUwgKiovXFxyXFxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ei1pbmRleDogMztcXHJcXG5cXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstNzApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5tb2JpbGUtc2V0dGluZ3MtbW9kYWwge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxuXFx0d2lkdGg6IDcwdnc7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xcclxcblxcdFxcdC5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDIwcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCBidXR0b24ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcblxcdGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgYnV0dG9uIGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIGxpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgKiovXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG5cXHRwYWRkaW5nOiAzcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAzcmVtO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyxcXHJcXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRnYXA6IDVyZW07XFx0XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5oaWdoLWxvdyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgaW1nI2N1cnJlbnQtd2VhdGhlciB7XFxyXFxuXFx0d2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRtYXJnaW46IDByZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdFxcdFxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogc3RhdGljO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMjtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMnJlbTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcXHJcXG59XFxyXFxuXFx0LyoqIFRBQkxFVCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSB7XFxyXFxuXFx0XFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAyNXJlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xcclxcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiA1cmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuXFx0XFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDNyZW07XFxyXFxuXFx0XFx0XFx0cGFkZGluZy1ib3R0b206IDRyZW07XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xcclxcbi5ob3VybHktY2FyZCB7XFxyXFxuXFx0cGFkZGluZzogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIC5jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMS41cmVtO1xcclxcblxcdHdpZHRoOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2FyZCBpbWcge1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUk9VU0VMIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsIHtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdGhlaWdodDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCA+IC5jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiAzLURBWSBGT1JFQ0FTVCBTVFlMRVMgKiovXFxyXFxuLnRocmVlLWRheS1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRocmVlLWRheS1mb3JlY2FzdC1saXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cXHJcXG4uZGFpbHktYmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5kYXktY29udGFpbmVyIHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleDogMTA7XFxyXFxuXFx0Z2FwOiAxcmVtOyAvKiogTU9CSUxFICoqL1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCxcXHJcXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMsXFxyXFxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3Qge1xcclxcblxcdGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0IC5pY29uIHtcXHJcXG5cXHR3aWR0aDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIGg0IHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMge1xcclxcblxcdHdpZHRoOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5oaWdoLFxcclxcbi5kYWlseS1iYXIgLmxvdyB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBMT0FESU5HIEFOSU1BVElPTiBTVFlMRVMgKiovXFxyXFxuLmxvYWRlciB7XFxyXFxuXFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdGJvcmRlcjogMC4yNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0d2lkdGg6IDNyZW07XFxyXFxuXFx0aGVpZ2h0OiAzcmVtO1xcclxcblxcdGFuaW1hdGlvbjogc3Bpbm5lciAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xcclxcblxcdDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXHJcXG5cXHQxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcclxcbn1cXHJcXG5cXHJcXG4ubG9hZGVyLmFic29sdXRlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlnaHQtdGhlbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saWdodC10aGVtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gcHJpbnRPdXRIdW1pZGl0eShxdWVyeSkge1xyXG4gIHJldHVybiBgJHtxdWVyeS5jdXJyZW50V2VhdGhlci5odW1pZGl0eX0lYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRXaW5kU3BlZWQocXVlcnkpIHtcclxuICByZXR1cm4gYCR7TWF0aC5mbG9vcihxdWVyeS5jdXJyZW50V2VhdGhlci53aW5kKX1tcGhgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFVWSW5kZXgocXVlcnkpIHtcclxuICBjb25zdCB1diA9IHF1ZXJ5LmRhaWx5LnV2X2luZGV4X21heFswXTtcclxuICBjb25zdCByZXN1bHQgPSBNYXRoLmZsb29yKHV2KTtcclxuXHJcbiAgcmV0dXJuIGAke3Jlc3VsdH0gb2YgMTBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSkge1xyXG4gIHJldHVybiBgJHtxdWVyeS5jdXJyZW50V2VhdGhlci5wcmVjaXBpdGF0aW9ufSVgO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dChxdWVyeSkge1xyXG4gIGNvbnN0IGNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuY2Utb2YtcmFpbicpO1xyXG4gIGNvci50ZXh0Q29udGVudCA9IHByaW50T3V0Q2hhbmNlT2ZSYWluKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcclxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IHByaW50T3V0SHVtaWRpdHkocXVlcnkpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IHByaW50T3V0V2luZFNwZWVkKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgdXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXYtaW5kZXgnKTtcclxuICB1di50ZXh0Q29udGVudCA9IHByaW50T3V0VVZJbmRleChxdWVyeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoYW5jZU9mUmFpbigpIHtcclxuICBjb25zdCBjb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JEaXYuY2xhc3NMaXN0LmFkZCgnY29yJywgJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBjb3JJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29ySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY29ySW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL2Ryb3BsZXQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjb3JJY29uRGl2LmFwcGVuZENoaWxkKGNvckltZyk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKGNvckljb25EaXYpO1xyXG5cclxuICBjb25zdCBjb3JQZXJjZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29yUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb3JQZXJjZW50LmlkID0gJ2NoYW5jZS1vZi1yYWluJztcclxuICBjb3JQZXJjZW50RGl2LmFwcGVuZENoaWxkKGNvclBlcmNlbnQpO1xyXG5cclxuICBjb25zdCBjb3JUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnZXh0cmEtc21hbGwnKTtcclxuICBjb3JUaXRsZS50ZXh0Q29udGVudCA9ICdSYWluJztcclxuICBjb3JUaXRsZURpdi5hcHBlbmRDaGlsZChjb3JUaXRsZSk7XHJcblxyXG4gIGNvckRpdi5hcHBlbmQoY29yUGVyY2VudERpdiwgY29yVGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gY29yRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIdW1pZGl0eSgpIHtcclxuICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5JywgJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGh1bWlkaXR5SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dhdmVzLWZpbGwtc3ZncmVwby1jb20uc3ZnJztcclxuICBodW1pZGl0eUljb25EaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbWcpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGh1bWlkaXR5UGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBodW1pZGl0eVBlcmNlbnQuaWQgPSAnaHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5UGVyY2VudERpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnQpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnZXh0cmEtc21hbGwnKTtcclxuICBodW1pZGl0eVRpdGxlLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcclxuICBodW1pZGl0eVRpdGxlRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGUpO1xyXG5cclxuICBodW1pZGl0eURpdi5hcHBlbmQoaHVtaWRpdHlQZXJjZW50RGl2LCBodW1pZGl0eVRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIGh1bWlkaXR5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXaW5kKCkge1xyXG4gIGNvbnN0IHdpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3aW5kRGl2LmNsYXNzTGlzdC5hZGQoJ3dpbmQnLCAnbW9kdWxlJyk7XHJcblxyXG4gIGNvbnN0IHdpbmRJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHdpbmRJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvd2luZC1maWxsLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgd2luZEljb25EaXYuYXBwZW5kQ2hpbGQod2luZEltZyk7XHJcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB3aW5kU3BlZWQuaWQgPSAnd2luZCc7XHJcbiAgd2luZFNwZWVkRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XHJcblxyXG4gIGNvbnN0IHdpbmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScsICdleHRyYS1zbWFsbCcpO1xyXG4gIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9ICdXaW5kJztcclxuICB3aW5kVGl0bGVEaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcclxuXHJcbiAgd2luZERpdi5hcHBlbmQod2luZFNwZWVkRGl2LCB3aW5kVGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gd2luZERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVVYoKSB7XHJcbiAgY29uc3QgdXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB1dkRpdi5jbGFzc0xpc3QuYWRkKCd1dicsICdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgdXZJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB1dkltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9zdW4tZmlsbGVkLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgdXZJY29uRGl2LmFwcGVuZENoaWxkKHV2SW1nKTtcclxuICB1dkRpdi5hcHBlbmRDaGlsZCh1dkljb25EaXYpO1xyXG5cclxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB1dkluZGV4LmlkID0gJ3V2LWluZGV4JztcclxuICB1dkluZGV4RGl2LmFwcGVuZENoaWxkKHV2SW5kZXgpO1xyXG5cclxuICBjb25zdCB1dlRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgdXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnZXh0cmEtc21hbGwnKTtcclxuICB1dlRpdGxlLnRleHRDb250ZW50ID0gJ1VWIEluZGV4JztcclxuICB1dlRpdGxlRGl2LmFwcGVuZENoaWxkKHV2VGl0bGUpO1xyXG5cclxuICB1dkRpdi5hcHBlbmQodXZJbmRleERpdiwgdXZUaXRsZURpdik7XHJcblxyXG4gIHJldHVybiB1dkRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzJztcclxuXHJcbiAgY29uc3QgbW9yZUZvcmVjYXN0RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuaWQgPSAnbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluID0gY3JlYXRlQ2hhbmNlT2ZSYWluKCk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBjcmVhdGVIdW1pZGl0eSgpO1xyXG4gIGNvbnN0IHdpbmQgPSBjcmVhdGVXaW5kKCk7XHJcbiAgY29uc3QgdXYgPSBjcmVhdGVVVigpO1xyXG5cclxuICBtb3JlRm9yZWNhc3REZXRhaWxzRGl2LmFwcGVuZChjaGFuY2VPZlJhaW4sIGh1bWlkaXR5LCB3aW5kLCB1dik7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQobW9yZUZvcmVjYXN0RGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUWiwgZmV0Y2hXZWF0aGVySWNvbiB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkKGhvdXIsIHRlbXAsIGljb24pIHtcclxuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdob3VybHktY2FyZCcpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IGhvdXI7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGZvcmVjYXN0SWNvbi5zcmMgPSBpY29uO1xyXG5cclxuICBjb25zdCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJseVRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKHRlbXApfcKwYDtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQodGltZSwgZm9yZWNhc3RJY29uLCBob3VybHlUZW1wKTtcclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBjYXJkRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VGltZVRvMTJIcihob3VyKSB7XHJcbiAgbGV0IHQ7XHJcbiAgaWYgKGhvdXIgPT09IDEyIHx8IGhvdXIgPT09IDM2KSB7XHJcbiAgICB0ID0gJzEycG0nO1xyXG4gIH0gZWxzZSBpZiAoaG91ciA9PT0gMCB8fCBob3VyID09PSAyNCkge1xyXG4gICAgdCA9ICcxMmFtJztcclxuICB9IGVsc2UgaWYgKChob3VyID4gMCAmJiBob3VyIDwgMTIpIHx8IChob3VyID4gMjQgJiYgaG91ciA8IDM2KSkge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofWFtYDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofXBtYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUyNEhvdXJGb3JlY2FzdChkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gY29udmVydFRaKG5ldyBEYXRlKCksIGRhdGEudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgaG91cmx5UmFuZ2UgPSBjdXJyZW50SG91ciArIDI0O1xyXG5cclxuICBmb3IgKGxldCBpID0gY3VycmVudEhvdXI7IGkgPD0gaG91cmx5UmFuZ2U7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdGVtcCA9IGRhdGEuaG91cmx5LnRlbXBlcmF0dXJlXzJtW2ldO1xyXG4gICAgY29uc3QgaG91ciA9IGNvbnZlcnRUaW1lVG8xMkhyKGkpO1xyXG4gICAgY29uc3QgY29kZSA9IGRhdGEuaG91cmx5LndlYXRoZXJjb2RlW2ldO1xyXG4gICAgY29uc3QgaXNEYXkgPSBkYXRhLmhvdXJseS5pc19kYXlbaV07XHJcbiAgICBjb25zdCBpY29uID0gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSk7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlSG91cmx5Q2FyZChob3VyLCB0ZW1wLCBpY29uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJseSBGb3JlY2FzdCc7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsJywgJ2N1c3RvbS1zY3JvbGxiYXInKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENvbnRhaW5lcik7XHJcblxyXG4gIGhvdXJseUZvcmVjYXN0LmFwcGVuZChob3VybHlGb3JlY2FzdFRpdGxlRGl2LCBob3VybHlGb3JlY2FzdENhcm91c2VsKTtcclxuXHJcbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUyNEhvdXJGb3JlY2FzdChxdWVyeSk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCcpWzBdO1xyXG4gIGNhcm91c2VsLmlubmVySFRNTCA9ICcnO1xyXG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoaGlnaCwgbG93LCBkYXksIGNvciwgZGVzYywgaWNvbikge1xyXG4gIGNvbnN0IGZvcmVjYXN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3RCYXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktYmFyJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5T2ZUaGVXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBkYXlPZlRoZVdlZWsuY2xhc3NMaXN0LmFkZCgnc21hbGwnKTtcclxuICBkYXlPZlRoZVdlZWsudGV4dENvbnRlbnQgPSBkYXkuc3Vic3RyaW5nKDAsIDMpO1xyXG5cclxuICBkYXlEaXYuYXBwZW5kQ2hpbGQoZGF5T2ZUaGVXZWVrKTtcclxuICBmb3JlY2FzdEJhci5hcHBlbmRDaGlsZChkYXlEaXYpO1xyXG5cclxuICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3REaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbkRpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWljb24nKTtcclxuICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaWNvbkltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgaWNvbkltZy5zcmMgPSBpY29uO1xyXG5cclxuICB3ZWF0aGVySWNvbkRpdi5hcHBlbmRDaGlsZChpY29uSW1nKTtcclxuICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xyXG5cclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REaXYpO1xyXG5cclxuICBjb25zdCB0ZW1wZXJhdHVyZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wZXJhdHVyZXNEaXYuY2xhc3NMaXN0LmFkZCgndGVtcGVyYXR1cmVzJyk7XHJcblxyXG4gIGNvbnN0IGhpZ2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoaWdoRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcclxuXHJcbiAgY29uc3QgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaGlnaFAuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICd0ZW1wJyk7XHJcbiAgaGlnaFAudGV4dENvbnRlbnQgPSBgJHtoaWdofcKwYDtcclxuICBoaWdoRGl2LmFwcGVuZENoaWxkKGhpZ2hQKTtcclxuXHJcbiAgY29uc3QgbG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG93RGl2LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xyXG5cclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxvd1AuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSBgJHtsb3d9wrBgO1xyXG4gIGxvd0Rpdi5hcHBlbmRDaGlsZChsb3dQKTtcclxuXHJcbiAgdGVtcGVyYXR1cmVzRGl2LmFwcGVuZChoaWdoRGl2LCBsb3dEaXYpO1xyXG5cclxuICBjb25zdCBjb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JEaXYuY2xhc3NMaXN0LmFkZCgnY2hhbmNlLW9mLXJhaW4nKTtcclxuICBjb25zdCBjb3JJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29ySWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckljb25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicsICd3aGl0ZS1maWx0ZXInKTtcclxuICBjb3JJY29uSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL2Ryb3BsZXQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjb3JJY29uRGl2LmFwcGVuZENoaWxkKGNvckljb25JbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgcGVyY2VudGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcGVyY2VudGFnZS5jbGFzc0xpc3QuYWRkKCdwZXJjZW50YWdlJyk7XHJcbiAgcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IGAke2Nvcn0lYDtcclxuICBwZXJjZW50YWdlRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2UpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlRGl2KTtcclxuXHJcbiAgY29uc3QgbnVtYmVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG51bWJlcnNEaXYuY2xhc3NMaXN0LmFkZCgnbnVtYmVycycpO1xyXG4gIG51bWJlcnNEaXYuYXBwZW5kKHRlbXBlcmF0dXJlc0RpdiwgY29yRGl2KTtcclxuICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKG51bWJlcnNEaXYpO1xyXG5cclxuICBmb3JlY2FzdEJhci5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcclxuXHJcbiAgcmV0dXJuIGZvcmVjYXN0QmFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUzRGF5Rm9yZWNhc3QoKSB7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgndGhyZWUtZGF5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGUudGV4dENvbnRlbnQgPSAnMy1EYXkgRm9yZWNhc3QnO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0VGl0bGUpO1xyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5hcHBlbmQodGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2LCB0aHJlZURheUZvcmVjYXN0TGlzdCk7XHJcblxyXG4gIHJldHVybiB0aHJlZURheUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhpZ2ggPSBNYXRoLmZsb29yKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuaGlnaFtpXSk7XHJcbiAgICBjb25zdCBsb3cgPSBNYXRoLmZsb29yKHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QubG93W2ldKTtcclxuICAgIGNvbnN0IGRheSA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuZGF5c1tpXTtcclxuICAgIGNvbnN0IGNvciA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3QuY29yW2ldO1xyXG4gICAgY29uc3QgZGVzYyA9IHF1ZXJ5LnRocmVlRGF5Rm9yZWNhc3Qud2VhdGhlckRlc2NyaXB0aW9uW2ldO1xyXG4gICAgY29uc3QgaWNvbiA9IGZldGNoV2VhdGhlckljb24ocXVlcnkudGhyZWVEYXlGb3JlY2FzdC53ZWF0aGVyQ29kZVtpXSwgMSk7XHJcbiAgICBjb25zdCBiYXIgPSBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKGhpZ2gsIGxvdywgZGF5LCBjb3IsIGRlc2MsIGljb24pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RocmVlLWRheS1mb3JlY2FzdC1saXN0JylbMF07XHJcbiAgdGhyZWVEYXlGb3JlQ2FzdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB0aHJlZURheUZvcmVDYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnYWRkaXRpb25hbC1mb3JlY2FzdCc7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gY3JlYXRlSG91cmx5Rm9yZWNhc3QoKTtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gY3JlYXRlM0RheUZvcmVjYXN0KCk7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kKGhvdXJseUZvcmVjYXN0LCB0aHJlZURheUZvcmVjYXN0KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgY29udmVydFRaLCBmZXRjaFdlYXRoZXJJY29uIH0gZnJvbSAnLi9mZXRjaC13ZWF0aGVyJztcclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0SGlnaChxdWVyeSkge1xyXG4gIGNvbnN0IGhpZ2ggPSBNYXRoLmZsb29yKHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLmRhaWx5SGlnaCk7XHJcbiAgcmV0dXJuIGAke2hpZ2h9wrBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dExvdyhxdWVyeSkge1xyXG4gIGNvbnN0IGxvdyA9IE1hdGguZmxvb3IocXVlcnkuY3VycmVudFdlYXRoZXIuZGFpbHlMb3cpO1xyXG4gIHJldHVybiBgJHtsb3d9wrBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dEN1cnJlbnRUZW1wKHF1ZXJ5KSB7XHJcbiAgY29uc3QgdGVtcCA9IE1hdGguZmxvb3IocXVlcnkuY3VycmVudFdlYXRoZXIuY3VycmVudFRlbXApO1xyXG4gIHJldHVybiBgJHt0ZW1wfcKwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRDaXR5KHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHF1ZXJ5LmNpdHlOYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dERlc2NyaXB0aW9uKHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHF1ZXJ5LmN1cnJlbnRXZWF0aGVyLndlYXRoZXJEZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRXZWF0aGVySWNvbihxdWVyeSkge1xyXG4gIGNvbnN0IGxvY2FsSG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBxdWVyeS50aW1lem9uZSkuZ2V0SG91cnMoKTtcclxuICBjb25zdCBjb2RlID0gcXVlcnkuaG91cmx5LndlYXRoZXJjb2RlW2xvY2FsSG91cl07XHJcbiAgY29uc3QgdmFsdWUgPSBxdWVyeS5ob3VybHkuaXNfZGF5W2xvY2FsSG91cl07XHJcblxyXG4gIHJldHVybiBmZXRjaFdlYXRoZXJJY29uKGNvZGUsIHZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRGb3JlY2FzdExheW91dChxdWVyeSkge1xyXG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtY2l0eScpO1xyXG4gIGN1cnJlbnRDaXR5LnRleHRDb250ZW50ID0gcHJpbnRPdXRDaXR5KHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10ZW1wJyk7XHJcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBwcmludE91dEN1cnJlbnRUZW1wKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgZGFpbHlIaWdoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtaGlnaCcpO1xyXG4gIGRhaWx5SGlnaC50ZXh0Q29udGVudCA9IHByaW50T3V0SGlnaChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGRhaWx5TG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbG93Jyk7XHJcbiAgZGFpbHlMb3cudGV4dENvbnRlbnQgPSBwcmludE91dExvdyhxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3QtZGVzY3JpcHRpb24nKTtcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJpbnRPdXREZXNjcmlwdGlvbihxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXdlYXRoZXInKTtcclxuICBjdXJyZW50V2VhdGhlckljb24uc3JjID0gcHJpbnRPdXRXZWF0aGVySWNvbihxdWVyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRGb3JlY2FzdCgpIHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb24uaWQgPSAnY3VycmVudC1mb3JlY2FzdCc7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRDaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGN1cnJlbnRDaXR5LmlkID0gJ2N1cnJlbnQtY2l0eSc7XHJcbiAgY3VycmVudENpdHlEaXYuYXBwZW5kQ2hpbGQoY3VycmVudENpdHkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGN1cnJlbnREZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRldGFpbHMnKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50V2VhdGhlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGN1cnJlbnRXZWF0aGVySW1nLmlkID0gJ2N1cnJlbnQtd2VhdGhlcic7XHJcbiAgY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJbWcpO1xyXG5cclxuICBjb25zdCBib3R0b21EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib3R0b21EaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tJyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRUZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZCgnbGFyZ2UnLCAndGVtcCcpO1xyXG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnQtdGVtcCc7XHJcbiAgY3VycmVudFRlbXBEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xyXG4gIGJvdHRvbURpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcERpdik7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0RGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5pZCA9ICdmb3JlY2FzdC1kZXNjcmlwdGlvbic7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERlc2NyaXB0aW9uKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REZXNjcmlwdGlvbkRpdik7XHJcblxyXG4gIGNvbnN0IGhpZ2hMb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoaWdoTG93RGl2LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtbG93Jyk7XHJcblxyXG4gIGNvbnN0IGhpZ2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBoaWdoUC50ZXh0Q29udGVudCA9ICdIOiAnO1xyXG5cclxuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGhpZ2guY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGhpZ2guaWQgPSAnY3VycmVudC1oaWdoJztcclxuICBoaWdoUC5hcHBlbmRDaGlsZChoaWdoKTtcclxuICBoaWdoRGl2LmFwcGVuZENoaWxkKGhpZ2hQKTtcclxuXHJcbiAgY29uc3QgbG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBsb3dQLnRleHRDb250ZW50ID0gJ0w6ICc7XHJcblxyXG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb3cuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGxvdy5pZCA9ICdjdXJyZW50LWxvdyc7XHJcbiAgbG93UC5hcHBlbmRDaGlsZChsb3cpO1xyXG4gIGxvd0Rpdi5hcHBlbmRDaGlsZChsb3dQKTtcclxuXHJcbiAgaGlnaExvd0Rpdi5hcHBlbmQoaGlnaERpdiwgbG93RGl2KTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoaGlnaExvd0Rpdik7XHJcblxyXG4gIGN1cnJlbnREZXRhaWxzRGl2LmFwcGVuZChjdXJyZW50V2VhdGhlckRpdiwgYm90dG9tRGl2KTtcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmQoY3VycmVudENpdHlEaXYsIGN1cnJlbnREZXRhaWxzRGl2KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiZnVuY3Rpb24gam9pblF1ZXJ5KHF1ZXJ5KSB7XHJcbiAgY29uc3QgbmV3UXVlcnkgPSBxdWVyeS5zcGxpdCgnLCAnKS5qb2luKCk7XHJcbiAgcmV0dXJuIG5ld1F1ZXJ5O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0J5UG9zdGFsQ29kZShxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC96aXA/emlwPSR7cXVlcnl9JmFwcGlkPThkZDQ0N2YwZWZhZTgzMjRmMTVjMjRmMmVmZGQ3ZTlmYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIHJldHVybiBlcnJvclxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tCeUNpdHkocXVlcnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtxdWVyeX0mbGltaXQ9NSZhcHBpZD04ZGQ0NDdmMGVmYWU4MzI0ZjE1YzI0ZjJlZmRkN2U5ZmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyByZXR1cm4gZXJyb3JcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUXVlcnkocXVlcnkpIHtcclxuICAvLyBicmVhayB1cCBxdWVyeSBpbnRvIGNvcnJlY3QgcGFydHMgKGVnLiBjaXR5LCBzdGF0ZSwgY291bnRyeSwgemlwIGNvZGUpXHJcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBqb2luUXVlcnkocXVlcnkpO1xyXG4gIGNvbnN0IHBvc3RhbENvZGVSZXN1bHQgPSBhd2FpdCBjaGVja0J5UG9zdGFsQ29kZShzZWFyY2hRdWVyeSk7XHJcbiAgY29uc3QgY2l0eVJlc3VsdCA9IGF3YWl0IGNoZWNrQnlDaXR5KHNlYXJjaFF1ZXJ5KTtcclxuXHJcbiAgaWYgKCEocG9zdGFsQ29kZVJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSAmJiBwb3N0YWxDb2RlUmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgLy8gZGlzcGxheSBhIGNsaWNrYWJsZSByZXN1bHQgY29udGFpbmluZyBjaXR5IHdlYXRoZXIgaW5mb1xyXG4gICAgY29uc29sZS5sb2coJ3dlIGZvdW5kIGEgemlwIGNvZGUgdGhhdCBtYXRjaGVzISByZXN1bHQ6ICcsIHBvc3RhbENvZGVSZXN1bHQpO1xyXG5cclxuICAgIHJldHVybiBwb3N0YWxDb2RlUmVzdWx0O1xyXG4gIH0gaWYgKCEoY2l0eVJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSAmJiBjaXR5UmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgLy8gZGlzcGxheSBhIGNsaWNrYWJsZSByZXN1bHQgY29udGFpbmluZyBjaXR5IHdlYXRoZXIgaW5mb1xyXG4gICAgY29uc29sZS5sb2coJ3dlIGZvdW5kIGEgY2l0eSB0aGF0IG1hdGNoZXMhIHJlc3VsdDogJywgY2l0eVJlc3VsdCk7XHJcblxyXG4gICAgcmV0dXJuIGNpdHlSZXN1bHQ7XHJcbiAgfVxyXG4gIC8vIGRpc3BsYXkgYW4gZXJyb3IgdGhhdCB0aGUgc2VhcmNoIHF1ZXJ5IHdhcyBub3QgZm91bmQgYWxvbmcgd2l0aCBzZWFyY2ggdGlwc1xyXG4gIGNvbnNvbGUubG9nKCdubyBjaXR5IGZvdW5kIDooJyk7XHJcblxyXG4gIHJldHVybiBgTm8gcmVzdWx0cyBmb3VuZCBmb3IgJyR7cXVlcnl9J2A7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUWihkYXRlLCB0elN0cmluZykge1xyXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHsgdGltZVpvbmU6IHR6U3RyaW5nIH0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRGVG9DKHRlbXApIHtcclxuICByZXR1cm4gKHRlbXAgLSAzMikgKiAoNSAvIDkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSkge1xyXG4gIGxldCBzcmM7XHJcbiAgY29uc3Qgc3RyaW5nID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItaWNvbnMvJztcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgaWYgKGlzRGF5ID09PSAxKSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfWNsZWFyLXNreS1zdW5ueS5zdmdgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31jbGVhci1za3ktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBpZiAoaXNEYXkgPT09IDEpIHtcclxuICAgICAgICBzcmMgPSBgJHtzdHJpbmd9bW9zdGx5LWNsZWFyLXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfW1vc3RseS1jbGVhci1tb29uLnN2Z2A7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIGlmIChpc0RheSA9PT0gMSkge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31wYXJ0bHktY2xvdWR5LXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfXBhcnRseS1jbG91ZHktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9b3ZlcmNhc3Quc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDQ1OlxyXG4gICAgY2FzZSA0ODpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfWZvZy5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNTE6XHJcbiAgICBjYXNlIDUzOlxyXG4gICAgY2FzZSA1NTpcclxuICAgIGNhc2UgNTY6XHJcbiAgICBjYXNlIDU3OlxyXG4gICAgY2FzZSA4MDpcclxuICAgIGNhc2UgODE6XHJcbiAgICBjYXNlIDgyOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9ZHJpenpsZS5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNjE6XHJcbiAgICBjYXNlIDYzOlxyXG4gICAgY2FzZSA2NTpcclxuICAgIGNhc2UgNjY6XHJcbiAgICBjYXNlIDY3OlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9cmFpbi5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNzE6XHJcbiAgICBjYXNlIDczOlxyXG4gICAgY2FzZSA3NTpcclxuICAgIGNhc2UgNzc6XHJcbiAgICBjYXNlIDg1OlxyXG4gICAgY2FzZSA4NjpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfXNub3cuc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDk1OlxyXG4gICAgY2FzZSA5NjpcclxuICAgIGNhc2UgOTk6XHJcbiAgICAgIHNyYyA9IGAke3N0cmluZ310aHVuZGVyc3Rvcm0uc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBzcmM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJEZXNjcmlwdGlvbihjb2RlKSB7XHJcbiAgY29uc3Qgd2VhdGhlckNvZGVzID0ge1xyXG4gICAgMDogJ0NsZWFyIFNreScsXHJcbiAgICAxOiAnTWFpbmx5IENsZWFyJyxcclxuICAgIDI6ICdQYXJ0bHkgQ2xvdWR5JyxcclxuICAgIDM6ICdPdmVyY2FzdCcsXHJcbiAgICA0NTogJ0ZvZycsXHJcbiAgICA0ODogJ0RlcG9zaXRpbmcgUmltZSBGb2cnLFxyXG4gICAgNTE6ICdMaWdodCBEcml6emxlJyxcclxuICAgIDUzOiAnTW9kZXJhdGUgRHJpenpsZScsXHJcbiAgICA1NTogJ0RlbnNlIERyaXp6bGUnLFxyXG4gICAgNTY6ICdGcmVlemluZywgTGlnaHQgRHJpenpsZScsXHJcbiAgICA1NzogJ0ZyZWV6aW5nLCBEZW5zZSBEcml6emxlJyxcclxuICAgIDYxOiAnTGlnaHQgUmFpbicsXHJcbiAgICA2MzogJ01vZGVyYXRlIFJhaW4nLFxyXG4gICAgNjU6ICdIZWF2eSBSYWluJyxcclxuICAgIDY2OiAnRnJlZXppbmcsIExpZ2h0IFJhaW4nLFxyXG4gICAgNjc6ICdGcmVlemluZywgSGVhdnkgUmFpbicsXHJcbiAgICA3MTogJ0xpZ2h0IFNub3cnLFxyXG4gICAgNzM6ICdNb2RlcmF0ZSBTbm93JyxcclxuICAgIDc1OiAnSGVhdnkgU25vdycsXHJcbiAgICA3NzogJ1Nub3cgR3JhaW5zJyxcclxuICAgIDgwOiAnTGlnaHQgU2hvd2VycycsXHJcbiAgICA4MTogJ01vZGVyYXRlIFNob3dlcnMnLFxyXG4gICAgODI6ICdIZWF2eSBTaG93ZXJzJyxcclxuICAgIDg1OiAnTGlnaHQgU25vdyBTaG93ZXInLFxyXG4gICAgODY6ICdIZWF2eSBTbm93IFNob3dlcicsXHJcbiAgICA5NTogJ1RodW5kZXJzdG9ybScsXHJcbiAgICA5NjogJ1RodW5kZXJzdG9ybSBhbmQgTGlnaHQgSGFpbCcsXHJcbiAgICA5OTogJ1RodW5kZXJzdG9ybSBhbmQgSGVhdnkgSGFpbCcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF5KGNvZGUpIHtcclxuICBjb25zdCBkYXlzID0ge1xyXG4gICAgMDogJ1N1bmRheScsXHJcbiAgICAxOiAnTW9uZGF5JyxcclxuICAgIDI6ICdUdWVzZGF5JyxcclxuICAgIDM6ICdXZWRuZXNkYXknLFxyXG4gICAgNDogJ1RodXJzZGF5JyxcclxuICAgIDU6ICdGcmlkYXknLFxyXG4gICAgNjogJ1NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF5c1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50SG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBxdWVyeS50aW1lem9uZSkuZ2V0SG91cnMoKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IHF1ZXJ5LmhvdXJseS50ZW1wZXJhdHVyZV8ybVtjdXJyZW50SG91cl07XHJcbiAgY29uc3QgZGFpbHlIaWdoID0gcXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWF4WzBdO1xyXG4gIGNvbnN0IGRhaWx5TG93ID0gcXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluWzBdO1xyXG4gIGNvbnN0IHdlYXRoZXJDb2RlID0gcXVlcnkuaG91cmx5LndlYXRoZXJjb2RlW2N1cnJlbnRIb3VyXTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBnZXRXZWF0aGVyRGVzY3JpcHRpb24od2VhdGhlckNvZGUpO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBxdWVyeS5ob3VybHkucHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eVtjdXJyZW50SG91cl07XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBxdWVyeS5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybVtjdXJyZW50SG91cl07XHJcbiAgY29uc3Qgd2luZCA9IHF1ZXJ5LmhvdXJseS53aW5kc3BlZWRfMTBtW2N1cnJlbnRIb3VyXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGN1cnJlbnRUZW1wLCBkYWlseUhpZ2gsIGRhaWx5TG93LCB3ZWF0aGVyRGVzY3JpcHRpb24sIHByZWNpcGl0YXRpb24sIGh1bWlkaXR5LCB3aW5kLFxyXG4gIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBsYXRpdHVkZSA9IHF1ZXJ5LmxhdDtcclxuICBjb25zdCBsb25naXR1ZGUgPSBxdWVyeS5sb247XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBxdWVyeS5uYW1lO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9JHtsYXRpdHVkZX0mbG9uZ2l0dWRlPSR7bG9uZ2l0dWRlfSZob3VybHk9dGVtcGVyYXR1cmVfMm0scHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eSxyZWxhdGl2ZWh1bWlkaXR5XzJtLHdlYXRoZXJjb2RlLHdpbmRzcGVlZF8xMG0saXNfZGF5JmRhaWx5PXdlYXRoZXJjb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sdXZfaW5kZXhfbWF4LHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4JnRlbXBlcmF0dXJlX3VuaXQ9ZmFocmVuaGVpdCZ3aW5kc3BlZWRfdW5pdD1tcGgmcHJlY2lwaXRhdGlvbl91bml0PWluY2gmdGltZXpvbmU9YXV0b2ApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIocmVzdWx0KTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0geyBjaXR5TmFtZSwgLi4ucmVzdWx0LCBjdXJyZW50V2VhdGhlciB9O1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGVmYXVsdExvY2F0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9sYXRpdHVkZT01MS41MDg1JmxvbmdpdHVkZT0tMC4xMjU3JmhvdXJseT10ZW1wZXJhdHVyZV8ybSxwcmVjaXBpdGF0aW9uX3Byb2JhYmlsaXR5LHJlbGF0aXZlaHVtaWRpdHlfMm0sd2VhdGhlcmNvZGUsd2luZHNwZWVkXzEwbSxpc19kYXkmZGFpbHk9d2VhdGhlcmNvZGUsdGVtcGVyYXR1cmVfMm1fbWF4LHRlbXBlcmF0dXJlXzJtX21pbix1dl9pbmRleF9tYXgscHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXgmdGVtcGVyYXR1cmVfdW5pdD1mYWhyZW5oZWl0JndpbmRzcGVlZF91bml0PW1waCZwcmVjaXBpdGF0aW9uX3VuaXQ9aW5jaCZ0aW1lem9uZT1hdXRvJyk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIocmVzdWx0KTtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gJ0xvbmRvbic7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHsgY2l0eU5hbWUsIC4uLnJlc3VsdCwgY3VycmVudFdlYXRoZXIgfTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRocmVlRGF5Rm9yZWNhc3QocXVlcnkpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xyXG4gIGNvbnN0IGhpZ2ggPSBbXTtcclxuICBjb25zdCBsb3cgPSBbXTtcclxuICBjb25zdCBjb3IgPSBbXTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBbXTtcclxuICBjb25zdCB3ZWF0aGVyQ29kZSA9IFtdO1xyXG4gIGNvbnN0IGRheXMgPSBbXTtcclxuICAvLyBnZXQgdGVtcHNcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkgKz0gMSkge1xyXG4gICAgaGlnaC5wdXNoKHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heFtpXSk7XHJcbiAgICBsb3cucHVzaChxdWVyeS5kYWlseS50ZW1wZXJhdHVyZV8ybV9taW5baV0pO1xyXG4gICAgY29yLnB1c2gocXVlcnkuZGFpbHkucHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXhbaV0pO1xyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnB1c2goZ2V0V2VhdGhlckRlc2NyaXB0aW9uKHF1ZXJ5LmRhaWx5LndlYXRoZXJjb2RlW2ldKSk7XHJcbiAgICB3ZWF0aGVyQ29kZS5wdXNoKHF1ZXJ5LmRhaWx5LndlYXRoZXJjb2RlW2ldKTtcclxuICB9XHJcbiAgLy8gYXNzaWduIGRheXNcclxuICBmb3IgKGxldCBpID0gZGF5ICsgMTsgaSA8IChkYXkgKyA0KTsgaSArPSAxKSB7XHJcbiAgICBkYXlzLnB1c2goZ2V0RGF5KGkgJSA3KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaGlnaCwgbG93LCBjb3IsIGRheXMsIHdlYXRoZXJEZXNjcmlwdGlvbiwgd2VhdGhlckNvZGUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGVmYXVsdFdlYXRoZXIoKSB7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGVmYXVsdExvY2F0aW9uKCk7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGF3YWl0IGdldFRocmVlRGF5Rm9yZWNhc3QoY3VycmVudFdlYXRoZXJEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgLi4uY3VycmVudFdlYXRoZXJEYXRhLCB0aHJlZURheUZvcmVjYXN0IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihxdWVyeSkge1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoQ3VycmVudFdlYXRoZXIocXVlcnkpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBhd2FpdCBnZXRUaHJlZURheUZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gIHJldHVybiB7IC4uLmN1cnJlbnRXZWF0aGVyRGF0YSwgdGhyZWVEYXlGb3JlY2FzdCB9O1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVDdXJyZW50Rm9yZWNhc3QsIHsgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9jdXJyZW50LWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjcmVhdGVNb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscywgeyB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0JztcclxuaW1wb3J0IGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCwgeyB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQsIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9hZGRpdGlvbmFsLWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjaGVja1F1ZXJ5IGZyb20gJy4vZmV0Y2gtY2l0aWVzJztcclxuaW1wb3J0IGZldGNoV2VhdGhlciwgeyBjb252ZXJ0RlRvQywgZmV0Y2hEZWZhdWx0V2VhdGhlciB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5sZXQgdGVtcERhdGEgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyVGlwcygpIHtcclxuICBjb25zdCB0aXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlwcy1jb250YWluZXInKVswXTtcclxuICB0aXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaXR5UmVzdWx0VGV4dChyZXN1bHQpIHtcclxuICBpZiAocmVzdWx0LnppcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IHJlc3VsdC5uYW1lO1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcmVzdWx0O1xyXG4gICAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXN1bHQ7XHJcblxyXG4gICAgcmV0dXJuIGAke2NpdHlOYW1lfSwgJHtzdGF0ZX0sICR7Y291bnRyeX1gO1xyXG4gIH1cclxuICBjb25zdCB7IHppcCB9ID0gcmVzdWx0O1xyXG4gIGNvbnN0IGNpdHlOYW1lID0gcmVzdWx0Lm5hbWU7XHJcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXN1bHQ7XHJcblxyXG4gIHJldHVybiBgJHt6aXB9LCAke2NpdHlOYW1lfSwgJHtjb3VudHJ5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5UmVzdWx0KHNlYXJjaFJlc3VsdCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbG9jYXRpb24tbWFya2VyLnN2Zyc7XHJcbiAgbG9jYXRpb25JY29uLmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICBjb25zdCB0ZXh0UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGV4dFJlc3VsdC50ZXh0Q29udGVudCA9IGNyZWF0ZUNpdHlSZXN1bHRUZXh0KHNlYXJjaFJlc3VsdCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gIHJlc3VsdC5hcHBlbmQobG9jYXRpb25JY29uLCB0ZXh0UmVzdWx0KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGlwKHRleHQpIHtcclxuICBjb25zdCB0aXBJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aXBJbWdEaXYuY2xhc3NMaXN0LmFkZCgndGlwLWltZycpO1xyXG4gIGNvbnN0IHRpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHRpcEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3RpcC5zdmcnO1xyXG4gIHRpcEltZ0Rpdi5hcHBlbmRDaGlsZCh0aXBJbWcpO1xyXG5cclxuICBjb25zdCB0aXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xyXG4gIHRpcERpdi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwLmNsYXNzTGlzdC5hZGQoJ3RpcCcpO1xyXG4gIHRpcC5hcHBlbmQodGlwSW1nRGl2LCB0aXBEaXYpO1xyXG5cclxuICByZXR1cm4gdGlwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2VhcmNoRXJyb3IoaW5wdXQpIHtcclxuICBjb25zb2xlLmxvZyhgJHtpbnB1dH1gKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMtY29udGFpbmVyJylbMF07XHJcbiAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICdtZWRpdW0nKTtcclxuICBtZXNzYWdlLnRleHRDb250ZW50ID0gYCR7aW5wdXR9YDtcclxuICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xyXG5cclxuICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZWZpbmVTdWdnZXN0aW9ucygpIHtcclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICdzbWFsbCcpO1xyXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1RyeSB0aGUgZm9sbG93aW5nIHRpcHMgZm9yIG1vcmUgYWNjdXJhdGUgcmVzdWx0czonO1xyXG5cclxuICBjb25zdCB0ZXh0T25lID0gJ0VudGVyIGNpdHkgYW5kIGNvdW50cnkgY29kZSAoZWcuIEVzc2V4LCBHQiknO1xyXG4gIGNvbnN0IHRpcE9uZSA9IGNyZWF0ZVRpcCh0ZXh0T25lKTtcclxuXHJcbiAgY29uc3QgdGV4dFR3byA9ICdGb3IgVVMgY2l0aWVzLCBlbnRlciBjaXR5IG5hbWUsIHN0YXRlLCBhbmQgY291bnRyeSBjb2RlIChlZy4gRXNzZXgsIE1BLCBVUyknO1xyXG4gIGNvbnN0IHRpcFR3byA9IGNyZWF0ZVRpcCh0ZXh0VHdvKTtcclxuXHJcbiAgY29uc3QgdGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpcHMtY29udGFpbmVyJylbMF07XHJcbiAgdGlwc0NvbnRhaW5lci5hcHBlbmQoaGVhZGxpbmUsIHRpcE9uZSwgdGlwVHdvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoU3VnZ2VzdGlvbnMoKSB7XHJcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9ICdUcnkgdGhlIGZvbGxvd2luZyB0aXBzIHRvIHJlZmluZSB5b3VyIHNlYXJjaDonO1xyXG5cclxuICBjb25zdCB0ZXh0T25lID0gJ0Vuc3VyZSB0aGUgc3BlbGxpbmcgb2YgeW91ciBzZWFyY2ggcXVlcnkgaXMgY29ycmVjdCc7XHJcbiAgY29uc3QgdGlwT25lID0gY3JlYXRlVGlwKHRleHRPbmUpO1xyXG5cclxuICBjb25zdCB0ZXh0VHdvID0gJ0ZvciBjaXRpZXMgaW4gdGhlIFVTLCBlbnRlciBjaXR5IGZvbGxvd2VkIGJ5IHN0YXRlIGFuZCBjb3VudHJ5IGNvZGUgKGVnLiBMb3MgQW5nZWxlcywgQ0EsIFVTKSc7XHJcbiAgY29uc3QgdGlwVHdvID0gY3JlYXRlVGlwKHRleHRUd28pO1xyXG5cclxuICBjb25zdCB0ZXh0VGhyZWUgPSAnRm9yIGNpdGllcyBvdXRzaWRlIHRoZSBVUywgZW50ZXIgY2l0eSBmb2xsb3dlZCBieSBjb3VudHJ5IGNvZGUgKGVnLiBMb25kb24sIEdCKSc7XHJcbiAgY29uc3QgdGlwVGhyZWUgPSBjcmVhdGVUaXAodGV4dFRocmVlKTtcclxuXHJcbiAgY29uc3QgdGV4dEZvdXIgPSAnVG8gc2VhcmNoIGJ5IHBvc3RhbC96aXAgY29kZSwgZW50ZXIgcG9zdGFsL3ppcCBjb2RlIGZvbGxvd2VkIGJ5IGNvdW50cnkgY29kZSAoZWcuIDMzNzAxLCBVUyknO1xyXG4gIGNvbnN0IHRpcEZvdXIgPSBjcmVhdGVUaXAodGV4dEZvdXIpO1xyXG5cclxuICBjb25zdCB0aXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlwcy1jb250YWluZXInKVswXTtcclxuICB0aXBzQ29udGFpbmVyLmFwcGVuZChoZWFkbGluZSwgdGlwT25lLCB0aXBUd28sIHRpcFRocmVlLCB0aXBGb3VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoSW5zdHJ1Y3Rpb25zKCkge1xyXG4gIGNvbnN0IHRleHRPbmUgPSAnVG8gc2VhcmNoIGZvciBjaXR5IGluIHRoZSBVUywgZW50ZXIgY2l0eSwgc3RhdGUsIGFuZCBjb3VudHJ5IGNvZGUgKGVnLiBQaG9lbml4LCBBWiwgVVMpJztcclxuICBjb25zdCB0aXBPbmUgPSBjcmVhdGVUaXAodGV4dE9uZSk7XHJcblxyXG4gIGNvbnN0IHRleHRUd28gPSAnVG8gc2VhcmNoIGZvciBjaXR5IG91dHNpZGUgVVMsIGVudGVyIGNpdHkgYW5kIGNvdW50cnkgY29kZSAoZWcuIExvbmRvbiwgR0IpJztcclxuICBjb25zdCB0aXBUd28gPSBjcmVhdGVUaXAodGV4dFR3byk7XHJcblxyXG4gIGNvbnN0IHRleHRUaHJlZSA9ICdZb3UgY2FuIGFsc28gc2VhcmNoIGJ5IHBvc3RhbC96aXAgY29kZSBmb2xsb3dlZCBieSBjb3VudHJ5IGNvZGUgKGVnLiAzMzcwMSwgVVMpJztcclxuICBjb25zdCB0aXBUaHJlZSA9IGNyZWF0ZVRpcCh0ZXh0VGhyZWUpO1xyXG5cclxuICBjb25zdCB0ZXh0Rm91ciA9ICdVc2UgPGEgaHJlZj1cXCdodHRwczovL3d3dy5pc28ub3JnL29icC91aS8jc2VhcmNoXFwnIHRhcmdldD1cXCdfYmxhbmtcXCc+SVNPIDMxNjYgY291bnRyeSBjb2RlczwvYT4gd2hlbiBzZWFyY2hpbmcgYnkgY291bnRyeSc7XHJcbiAgY29uc3QgdGlwRm91ciA9IGNyZWF0ZVRpcCh0ZXh0Rm91cik7XHJcblxyXG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGluc3RydWN0aW9ucy5jbGFzc0xpc3QuYWRkKCd0aXBzLWNvbnRhaW5lcicpO1xyXG4gIGluc3RydWN0aW9ucy5hcHBlbmQodGlwT25lLCB0aXBUd28sIHRpcFRocmVlLCB0aXBGb3VyKTtcclxuXHJcbiAgcmV0dXJuIGluc3RydWN0aW9ucztcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9iaWxlU2VhcmNoTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtbW9kYWwnKVswXTtcclxuICBpZiAobW9iaWxlU2VhcmNoTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgbW9iaWxlU2VhcmNoTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBjb25zdCBvdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXBzLWNvbnRhaW5lcicpWzBdO1xyXG4gICAgb3V0cHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaEluc3RydWN0aW9ucygpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1tb2JpbGUnKTtcclxuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cy1jb250YWluZXInKVswXTtcclxuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjbGVhclRpcHMoKTtcclxuICAgIG1vYmlsZVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlU2V0dGluZ3NNb2RhbCgpIHtcclxuICBjb25zdCBzZXR0aW5nc01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iaWxlLXNldHRpbmdzLW1vZGFsJylbMF07XHJcbiAgaWYgKHNldHRpbmdzTW9kYWwuaWQgPT09ICdoaWRkZW4nKSB7XHJcbiAgICBzZXR0aW5nc01vZGFsLmlkID0gJyc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldHRpbmdzTW9kYWwuaWQgPSAnaGlkZGVuJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUdyaWRDb250YWluZXIoc3RhdGUpIHtcclxuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ3JpZC1jb250YWluZXInKVswXTtcclxuXHJcbiAgaWYgKHN0YXRlKSB7XHJcbiAgICBncmlkQ29udGFpbmVyLmlkID0gJ2hpZGRlbic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdyaWRDb250YWluZXIuaWQgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVBhZ2VMb2FkaW5nQW5pbWF0aW9uKHN0YXRlKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylbMF07XHJcblxyXG4gIGlmIChzdGF0ZSkge1xyXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9hZGluZ0FuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2FkZXInLCAnYWJzb2x1dGUnKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobG9hZGluZ0FuaW1hdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkZXInKVswXTtcclxuICAgIGxvYWRpbmdBbmltYXRpb24ucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTZWFyY2hMb2FkaW5nQW5pbWF0aW9uKHN0YXRlKSB7XHJcbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMtY29udGFpbmVyJylbMF07XHJcblxyXG4gIGlmIChzdGF0ZSkge1xyXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9hZGluZ0FuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcclxuICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGluZ0FuaW1hdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxheURpc3BsYXlpbmdHcmlkKHJlc3VsdCkge1xyXG4gIHRvZ2dsZVBhZ2VMb2FkaW5nQW5pbWF0aW9uKGZhbHNlKTtcclxuICB0b2dnbGVHcmlkQ29udGFpbmVyKGZhbHNlKTtcclxuICB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJSZXN1bHRzKCkge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG4gIHJlc3VsdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlTZWFyY2hSZXN1bHRzKHJlc3VsdHMpIHtcclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cy1jb250YWluZXInKVswXTtcclxuXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0cykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IHJlc3VsdHNbaV07XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UmVzdWx0ID0gY3JlYXRlUXVlcnlSZXN1bHQocXVlcnkpO1xyXG4gICAgICBxdWVyeVJlc3VsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICB0b2dnbGVTZWFyY2hNb2RhbCgpO1xyXG4gICAgICAgIC8vIGNhbGwgdGhlIGZldGNoIHdlYXRoZXIgZnVuY3Rpb25cclxuICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgd2VhdGhlciEnKTtcclxuICAgICAgICB0b2dnbGVHcmlkQ29udGFpbmVyKHRydWUpO1xyXG4gICAgICAgIHRvZ2dsZVBhZ2VMb2FkaW5nQW5pbWF0aW9uKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlcihxdWVyeSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5RGlzcGxheWluZ0dyaWQsIDUwMCwgcmVzdWx0KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJ5UmVzdWx0KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcXVlcnlSZXN1bHQgPSBjcmVhdGVRdWVyeVJlc3VsdChyZXN1bHRzKTtcclxuICAgIHF1ZXJ5UmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVTZWFyY2hNb2RhbCgpO1xyXG4gICAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgd2VhdGhlciEnKTtcclxuICAgICAgdG9nZ2xlR3JpZENvbnRhaW5lcih0cnVlKTtcclxuICAgICAgdG9nZ2xlUGFnZUxvYWRpbmdBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoV2VhdGhlcihyZXN1bHRzKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgc2V0VGltZW91dChkZWxheURpc3BsYXlpbmdHcmlkLCA1MDAsIHJlc3VsdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJ5UmVzdWx0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNpdHlJbnB1dEZvcm1Nb2JpbGUoKSB7XHJcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoJyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmZvciA9ICdjaXR5LW1vYmlsZSc7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9ICdjaXR5LW1vYmlsZSc7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggY2l0eSc7XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbGVhclJlc3VsdHMoKTtcclxuICAgIHRvZ2dsZVNlYXJjaExvYWRpbmdBbmltYXRpb24odHJ1ZSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVja1F1ZXJ5KGlucHV0LnZhbHVlKTtcclxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgdG9nZ2xlU2VhcmNoTG9hZGluZ0FuaW1hdGlvbihmYWxzZSk7XHJcbiAgICAgIGNsZWFyVGlwcygpO1xyXG4gICAgICBkaXNwbGF5U2VhcmNoUmVzdWx0cyhyZXN1bHQpO1xyXG4gICAgICBjcmVhdGVSZWZpbmVTdWdnZXN0aW9ucygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9nZ2xlU2VhcmNoTG9hZGluZ0FuaW1hdGlvbihmYWxzZSk7XHJcbiAgICAgIGNsZWFyVGlwcygpO1xyXG4gICAgICBkaXNwbGF5U2VhcmNoRXJyb3IocmVzdWx0KTtcclxuICAgICAgY3JlYXRlU2VhcmNoU3VnZ2VzdGlvbnMoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGVTd2l0Y2godG9nZ2xlTmFtZSkge1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcclxuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRvZ2dsZU5hbWUpO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgaW5wdXQuaWQgPSB0b2dnbGVOYW1lO1xyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJywgJ3JvdW5kJyk7XHJcblxyXG4gIGxhYmVsLmFwcGVuZChpbnB1dCwgc3Bhbik7XHJcblxyXG4gIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tUZW1wQ29udmVyc2lvbigpIHtcclxuICBjb25zdCBmY1N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICBjb25zdCB0ZW1wTW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wLW1vZGUnKTtcclxuXHJcbiAgaWYgKCEoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbHNpdXMnKSkpIHtcclxuICAgIGNvbnN0IHRlbXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcCcpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XHJcbiAgICB0ZW1wTW9kZS50ZXh0Q29udGVudCA9ICdGYWhyZW5oZWl0JztcclxuICAgIGZjU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuICAgIHRlbXBEYXRhID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBvcmlnaW5hbCA9IHRlbXBzW2ldLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zdCBzdWJzdHJpbmcgPSBvcmlnaW5hbC5zbGljZSgwLCBvcmlnaW5hbC5sZW5ndGggLSAxKTtcclxuICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoc3Vic3RyaW5nLCAxMCk7XHJcbiAgICAgIGNvbnN0IGNvbnZlcnRlZCA9IGAke01hdGguZmxvb3IoY29udmVydEZUb0MobnVtKSl9wrBgO1xyXG4gICAgICB0ZW1wRGF0YS5wdXNoKHRlbXBzW2ldLnRleHRDb250ZW50KTtcclxuICAgICAgdGVtcHNbaV0udGV4dENvbnRlbnQgPSBjb252ZXJ0ZWQ7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHRlbXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcCcpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjZWxzaXVzJyk7XHJcbiAgICB0ZW1wTW9kZS50ZXh0Q29udGVudCA9ICdDZWxzaXVzJztcclxuICAgIGZjU3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHRlbXBzW2ldLnRleHRDb250ZW50ID0gdGVtcERhdGFbaV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZpZ2F0aW9uTWVudSgpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICBuYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1uYXYnKTtcclxuICBjb25zdCBzZWFyY2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBzZWFyY2hJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLnN2Zyc7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgbG9nb0ltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3dlYXRoZXItYXBwLWxvZ28uc3ZnJztcclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG5cclxuICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzZWFyY2hDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWFyY2hDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtY2l0eSc7XHJcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgY2l0eSAoZWcuIExvcyBBbmdlbGVzKSc7XHJcblxyXG4gIHNlYXJjaENvbnRhaW5lckRpdi5hcHBlbmQoc2VhcmNoSW1nLCBzZWFyY2hJbnB1dCk7XHJcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lckRpdik7XHJcblxyXG4gIGNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBoYW1idXJnZXJNZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGhhbWJ1cmdlck1lbnVJbWcuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIGhhbWJ1cmdlck1lbnVJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9oYW1idXJnZXItc3ZncmVwby1jb20uc3ZnJztcclxuICBoYW1idXJnZXJNZW51QnV0dG9uLmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVJbWcpO1xyXG4gIGhhbWJ1cmdlck1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTZXR0aW5nc01vZGFsKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1idXR0b24nKTtcclxuICBzZWFyY2hCdXR0b24uYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKTtcclxuXHJcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoTW9kYWwpO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaERpdi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtZGl2JywgJ2hpZGRlbicpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuaWQgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaFAuY2xhc3NMaXN0LmFkZCgnZGFyay1saWdodC1zd2l0Y2gnLCAnc21hbGwnKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoUC50ZXh0Q29udGVudCA9ICdFbmFibGUgRGFyayBNb2RlJztcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaCA9IGNyZWF0ZVRvZ2dsZVN3aXRjaCgpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2guaWQgPSAnZGFyay1saWdodC1zd2l0Y2gnO1xyXG5cclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LmFwcGVuZChkYXJrTGlnaHRNb2RlU3dpdGNoUCwgZGFya0xpZ2h0TW9kZVN3aXRjaCk7XHJcblxyXG4gIGNvbnN0IGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1kaXYnKTtcclxuXHJcbiAgY29uc3QgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAuY2xhc3NMaXN0LmFkZCgnZmFyZW5oZWl0LWNlbHNpdXMtc3dpdGNoJywgJ3NtYWxsJyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAudGV4dENvbnRlbnQgPSAnRW5hYmxlIENlbHNpdXMnO1xyXG5cclxuICBjb25zdCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoID0gY3JlYXRlVG9nZ2xlU3dpdGNoKCdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnKTtcclxuXHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdi5hcHBlbmQoZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAsIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2gpO1xyXG5cclxuICBjb25zdCBzd2l0Y2hlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHN3aXRjaGVzRGl2LmNsYXNzTGlzdC5hZGQoJ3N3aXRjaGVzJyk7XHJcbiAgc3dpdGNoZXNEaXYuYXBwZW5kKGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYsIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hEaXYpO1xyXG5cclxuICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZGl0aW9uYWxPcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtb3B0aW9ucycpO1xyXG4gIGFkZGl0aW9uYWxPcHRpb25zRGl2LmFwcGVuZChzZWFyY2hCdXR0b24sIGhhbWJ1cmdlck1lbnVCdXR0b24pO1xyXG5cclxuICBjb25zdCBvcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdvcHRpb25zJyk7XHJcbiAgb3B0aW9uc0Rpdi5hcHBlbmQoc3dpdGNoZXNEaXYsIGFkZGl0aW9uYWxPcHRpb25zRGl2KTtcclxuXHJcbiAgbmF2LmFwcGVuZChsb2dvRGl2LCBvcHRpb25zRGl2KTtcclxuXHJcbiAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2lkZU5hdmlnYXRpb24oKSB7XHJcbiAgY29uc3Qgc2lkZU5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIHNpZGVOYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYtY29udGFpbmVyJywgJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdicpO1xyXG5cclxuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gIGxvZ28uc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC93ZWF0aGVyLWFwcC1sb2dvLnN2Zyc7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBzaWRlTmF2LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xyXG5cclxuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRvcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgZGFya01vZGUudGV4dENvbnRlbnQgPSAnRGFyayBNb2RlJztcclxuXHJcbiAgY29uc3Qgc2V0VG9DZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBzZXRUb0NlbHNpdXMudGV4dENvbnRlbnQgPSAnU2V0IHRvIENlbHNpdXMnO1xyXG5cclxuICB0b3BMaXN0LmFwcGVuZChkYXJrTW9kZSwgc2V0VG9DZWxzaXVzKTtcclxuXHJcbiAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgbmF2SXRlbXMuYXBwZW5kKHRvcExpc3QsIGRpdmlkZXIpO1xyXG5cclxuICBjb25zdCBib3R0b21MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcclxuICBib3R0b21MaXN0LmFwcGVuZENoaWxkKGFib3V0KTtcclxuICBuYXZJdGVtcy5hcHBlbmRDaGlsZChib3R0b21MaXN0KTtcclxuXHJcbiAgc2lkZU5hdi5hcHBlbmRDaGlsZChuYXZJdGVtcyk7XHJcbiAgc2lkZU5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlTmF2KTtcclxuXHJcbiAgY29uc3QgZXhpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGV4aXREaXYuY2xhc3NMaXN0LmFkZCgnZXhpdCcpO1xyXG5cclxuICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgZXhpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGV4aXRJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9leGl0LnN2Zyc7XHJcbiAgZXhpdEJ0bi5hcHBlbmRDaGlsZChleGl0SW1nKTtcclxuICBleGl0RGl2LmFwcGVuZENoaWxkKGV4aXRCdG4pO1xyXG5cclxuICBzaWRlTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGV4aXREaXYpO1xyXG5cclxuICByZXR1cm4gc2lkZU5hdkNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtbW9kYWwnLCAnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2l0eUlucHV0Rm9ybSA9IGNyZWF0ZUNpdHlJbnB1dEZvcm1Nb2JpbGUoKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdwcmltYXJ5Jyk7XHJcbiAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2VhcmNoTW9kYWwpO1xyXG5cclxuICBjb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJhcicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmQoY2l0eUlucHV0Rm9ybSwgY2FuY2VsQnV0dG9uKTtcclxuXHJcbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJlc3VsdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVzdWx0cy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgdGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGlwcy1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3Qgb3V0cHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgb3V0cHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dHB1dC1jb250YWluZXInKTtcclxuICBvdXRwdXRDb250YWluZXIuYXBwZW5kKHJlc3VsdHNDb250YWluZXIsIHRpcHNDb250YWluZXIpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKHNlYXJjaENvbnRhaW5lciwgb3V0cHV0Q29udGFpbmVyKTtcclxuICBtb2RhbC5hcHBlbmQoY29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZXR0aW5nc01vZGFsKCkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXNldHRpbmdzLW1vZGFsJyk7XHJcbiAgbW9kYWwuaWQgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnYmxhY2stZmlsdGVyJyk7XHJcbiAgbG9nby5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3dlYXRoZXItYXBwLWxvZ28uc3ZnJztcclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICBjb25zdCBsaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb25zdCB0ZW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tUZW1wQ29udmVyc2lvbik7XHJcblxyXG4gIHRlbXBJbWcuY2xhc3NMaXN0LmFkZCgnYmxhY2stZmlsdGVyJyk7XHJcbiAgdGVtcEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3RlbXBlcmF0dXJlLnN2Zyc7XHJcbiAgYS5pbm5lckhUTUwgPSAnU2V0IHRvIDxzcGFuIGlkPVxcJ3RlbXAtbW9kZVxcJz5DZWxzaXVzPC9zcGFuPic7XHJcbiAgbGkuYXBwZW5kKHRlbXBJbWcsIGEpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICBsaW5rc0Rpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQobG9nb0RpdiwgbGlua3NEaXYpO1xyXG5cclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbnN0IHhJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICB4SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvY2xvc2UtbWQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZCh4SW1nKTtcclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNldHRpbmdzTW9kYWwpO1xyXG5cclxuICBtb2RhbC5hcHBlbmQoY29udGFpbmVyLCBjbG9zZUJ1dHRvbik7XHJcblxyXG4gIHJldHVybiBtb2RhbDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERlZmF1bHRXZWF0aGVyKCkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRGVmYXVsdFdlYXRoZXIoKTtcclxuICB1cGRhdGVDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcclxuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBuYXZpZ2F0aW9uTWVudSA9IGNyZWF0ZU5hdmlnYXRpb25NZW51KCk7XHJcbiAgY29uc3Qgc2lkZU5hdmlnYXRpb24gPSBjcmVhdGVTaWRlTmF2aWdhdGlvbigpO1xyXG4gIGNvbnN0IHNlYXJjaE1vYmlsZSA9IGNyZWF0ZVNlYXJjaE1vZGFsKCk7XHJcbiAgY29uc3Qgc2V0dGluZ3NNb2RhbCA9IGNyZWF0ZVNldHRpbmdzTW9kYWwoKTtcclxuICBjb25zdCBjdXJyZW50Rm9yZWNhc3QgPSBjcmVhdGVDdXJyZW50Rm9yZWNhc3QoKTtcclxuICBjb25zdCBtb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscyA9IGNyZWF0ZU1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzKCk7XHJcbiAgY29uc3QgYWRkaXRpb25hbEZvcmVjYXN0RGV0YWlscyA9IGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCgpO1xyXG5cclxuICBib2R5LmFwcGVuZChuYXZpZ2F0aW9uTWVudSwgc2lkZU5hdmlnYXRpb24sIHNlYXJjaE1vYmlsZSwgc2V0dGluZ3NNb2RhbCk7XHJcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmQoY3VycmVudEZvcmVjYXN0LCBtb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscywgYWRkaXRpb25hbEZvcmVjYXN0RGV0YWlscyk7XHJcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxuICBjb25zdCBmY1N3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnKTtcclxuICBmY1N3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrVGVtcENvbnZlcnNpb24pO1xyXG5cclxuICBhd2FpdCBsb2FkRGVmYXVsdFdlYXRoZXIoKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9saWdodC10aGVtZS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlUGFnZSBmcm9tICcuL3BhZ2UtbGF5b3V0JztcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgY3JlYXRlUGFnZSgpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=