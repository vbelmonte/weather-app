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
	justify-content: space-between;

	position: relative;
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

	/** SCREENS < 320PX BELOW**/ 
	@media only screen and (max-width: 320px) {
		nav.main-nav {
			padding: 0.5rem;
		}
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

nav.main-nav .options .additional-options button:hover {
	cursor: pointer;
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

	/** SCREENS < 320PX BELOW**/ 
	@media only screen and (max-width: 320px) {
		#current-forecast {
			padding: 3rem 0.5rem;
		}
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

	/** SCREENS < 320PX BELOW**/ 
	@media only screen and (max-width: 320px) {
		#more-current-forecast-details {
			margin: 0rem 0.5rem;
		}
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

	/** SCREENS < 320PX BELOW**/ 
	@media only screen and (max-width: 320px) {
		#additional-forecast {
			padding: 3rem 0.5rem;
		}
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



/*** FOOTER STYLES **/
footer {
	display: flex;
	justify-content: center;
	text-align: center;
}

footer div {
	padding: 2rem 0.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n\t--black: #222222;\r\n\t--white: #F2F2F2;\r\n\t--gray: #A0A0A0;\r\n\t--light-gray: #D1D1D1;\r\n\t--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);\r\n\t--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);\r\n\t--transparent: rgb(242, 242, 242, 0.8);\r\n\t--transparent-dark-30: rgba(40, 40, 40, 0.5);\r\n\t--transparent-dark-70: rgba(40, 40, 40, 0.7);\r\n\t--input-placeholder: rgb(242, 242, 242, 0.7);\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Medium';\r\n\tsrc: url('../src/assets/fonts/Barlow-Medium.ttf') format('truetype');\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\tcolor: var(--white);\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\r\n\tposition: relative;\r\n}\r\n\r\n/** DESKTOP BELOW **/\r\n@media only screen and (min-width: 1024px) {\r\n\tbody {\r\n\t\tpadding: 0rem 5rem;\r\n\t\tgap: 4rem;\r\n\t}\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.white-filter {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n.transparent {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL FONT STYLES **/\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\nh2.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh2.medium {\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh2.large {\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh3.extra-small {\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh3.bold.small {\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np.large {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 4rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\np.medium {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\np.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0.75rem;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\na {\r\n\tfont-family: 'Barlow Medium';\r\n\tfont-size: 1rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\n#hidden {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=text] {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tpadding: 0.5rem;\r\n\tpadding-left: 2.5rem;\r\n\tborder: solid 1px;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: var(--white);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\nnav {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav.main-nav {\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n\r\n\talign-self: center;\r\n\twidth: 100%;\r\n\tmax-width: 80rem;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\t/** SCREENS < 320PX BELOW**/ \r\n\t@media only screen and (max-width: 320px) {\r\n\t\tnav.main-nav {\r\n\t\t\tpadding: 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav  {\r\n\t\t\tpadding: 1rem 0rem;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav img {\r\n\theight: 1rem;\r\n}\r\n\r\nnav.main-nav .logo, nav.side-nav .logo {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav.main-nav .options {\r\n\tdisplay: flex;\r\n\tgap: 3rem;\r\n}\r\n\r\nnav.main-nav .options .switches {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .options .switches {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 1rem;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .options .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\nnav.main-nav .options .additional-options button {\r\n\tpadding: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.main-nav .options .additional-options button:hover {\r\n\tcursor: pointer;\r\n}\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .additional-options .menu-button {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\nnav.side-nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 1;\r\n    gap: 0;\r\n\r\n\tbackground-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\nnav.side-nav-container button {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.side-nav-container .side-nav {\r\n    padding: 1rem;\r\n    flex: 4;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nnav.side-nav-container li {\r\n    margin: 1rem 0rem;\r\n}\r\n\r\nnav.side-nav-container .exit {\r\n    padding: 1rem 1rem;\r\n\tflex: 1;\r\n}\r\n\r\nnav.side-nav-container hr {\r\n    border: none;\r\n    border-top: solid 1px var(--power-secondary);\r\n\tmargin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.search-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tbackground-color: var(--transparent-dark-30);\r\n}\r\n\r\n.search-modal .container {\r\n\tpadding: 1rem;\r\n\theight: 100%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.search-modal .container {\r\n\t\t\tpadding: 1.5rem;\r\n\t\t\tmax-width: 50rem;\r\n\t\t\tmargin: 5rem auto;\r\n\t\t\theight: auto;\r\n\t\t\tborder-radius: 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n.search-modal .search-bar {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.search-modal .mobile-search {\r\n\twidth: 100%;\r\n}\r\n\r\n.search-modal input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--gray);\r\n\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.search-modal .output-container {\r\n\tpadding-left: 1rem;\r\n}\r\n\r\n.search-modal .results-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 2rem 0rem;\r\n}\r\n\r\n.search-modal .search-result {\r\n\tdisplay: flex;\r\n\tgap: 0.75rem;\r\n\talign-items: center;\r\n\tpadding: 0.5rem 0;\r\n}\r\n\r\n.search-modal .search-result:hover {\r\n\tcursor:\tdefault;\r\n}\r\n\r\n.search-modal .search-result img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n\r\n/** SEARCH TIP STYLES **/\r\n.tips-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n.tip {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n\talign-items: center;\r\n}\r\n\r\n.tip p {\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n.tip .tip-img {\r\n\tpadding-top: 0.3rem;\r\n}\r\n\r\n.tip .tip-img img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n\r\n.switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.75rem;\r\n\theight: 1.5rem;\r\n}\r\n\r\n.switch input { \r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n\r\n.slider {\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\n.slider:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\theight: 1rem;\r\n\twidth: 1rem;\r\n\tleft: 4px;\r\n\tbottom: 3px;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n\t-webkit-transform: translateX(18px);\r\n\t-ms-transform: translateX(18px);\r\n\ttransform: translateX(18px);\r\n}\r\n  \r\n/* Rounded sliders */\r\n.slider.round {\r\n\tborder-radius: 32px;\r\n}\r\n  \r\n.slider.round:before {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.toggle-div {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5rem;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** MAIN-CONTAINER STYLES **/\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.grid-container {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgap: 1rem;\r\n\t\t\tgrid-template: 4fr 1fr / 1fr 1fr;\r\n\t\t\tmax-width: 80rem;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** SETTINGS MODAL **/\r\n.mobile-settings-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 3;\r\n\r\n\tdisplay: flex;\r\n\tbackground-color: var(--transparent-dark-70);\r\n}\r\n\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.mobile-settings-modal {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-settings-modal .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n\twidth: 70vw;\r\n\tpadding: 1rem;\r\n}\r\n\r\n\t@media only screen and (min-width: 425px) {\r\n\t\t.mobile-settings-modal .container {\r\n\t\t\twidth: 20rem;\r\n\t\t}\r\n\t}\r\n\r\n.mobile-settings-modal button {\r\n\tbackground-color: transparent;\r\n\theight: fit-content;\r\n}\r\n\r\n.mobile-settings-modal button img {\r\n\tfilter: var(--white-filter);\r\n\theight: 1.5rem;\r\n}\r\n\r\n.mobile-settings-modal li {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n}\r\n\r\n\t/** SCREENS < 320PX BELOW**/ \r\n\t@media only screen and (max-width: 320px) {\r\n\t\t#current-forecast {\r\n\t\t\tpadding: 3rem 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast {\r\n\t\t\talign-items: stretch;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 2;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details,\r\n#current-forecast .forecast-details .bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details .bottom {\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details {\r\n\tgap: 5rem;\t\r\n}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\twidth: 8rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n}\r\n\r\n\t/** SCREENS < 320PX BELOW**/ \r\n\t@media only screen and (max-width: 320px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: 0rem 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: auto;\r\n\t\t\tposition: static;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 2;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: center;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\t/** TABLET BELOW **/\r\n\t@media only screen and (min-width: 426px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 25rem;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tmargin-right: auto;\r\n\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding: 1.5rem 3rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details img {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n\theight: 1.5rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n}\r\n\r\n\t/** SCREENS < 320PX BELOW**/ \r\n\t@media only screen and (max-width: 320px) {\r\n\t\t#additional-forecast {\r\n\t\t\tpadding: 3rem 0.5rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#additional-forecast {\r\n\t\t\toverflow: hidden;\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tpadding-bottom: 4rem;\r\n\t\t\theight: auto;\r\n\r\n\t\t\tgrid-column-start: 2;\r\n\t\t\tgrid-column-end: 3;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n.hourly-card {\r\n\tpadding: 1.5rem;\r\n    padding-top: 1rem;\r\n    border-radius: 0.75rem;\r\n}\r\n\r\n.hourly-card .container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n\twidth: 2.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\theight: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n.hourly-forecast-carousel {\r\n\toverflow-x: auto;\r\n}\r\n.custom-scrollbar::-webkit-scrollbar {\r\n\theight: 0.5rem;\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-track {\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n.custom-scrollbar::-webkit-scrollbar-thumb {\r\n\tborder-radius: 1rem;\r\n}\r\n\r\n.hourly-forecast-carousel > .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST STYLES **/\r\n.three-day-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n.three-day-forecast-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 1rem;\r\n\t\r\n\tpadding: 0.5rem 0rem;\r\n}\r\n\r\n.daily-bar .day-container {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 10;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\twidth: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: none;\r\n}\r\n\r\n.daily-bar .temperatures {\r\n\twidth: 5rem;\r\n}\r\n\r\n.daily-bar .high,\r\n.daily-bar .low {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n\r\n\r\n/*** FOOTER STYLES **/\r\nfooter {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\ttext-align: center;\r\n}\r\n\r\nfooter div {\r\n\tpadding: 2rem 0.5rem;\r\n}\r\n\r\n\r\n\r\n/** LOADING ANIMATION STYLES **/\r\n.loader {\r\n\tmargin: auto;\r\n\tborder: 0.25rem solid var(--light-gray);\r\n\tborder-radius: 50%;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tanimation: spinner 1s linear infinite;\r\n}\r\n  \r\n  @keyframes spinner {\r\n\t0% { transform: rotate(0deg); }\r\n\t100% { transform: rotate(360deg); }\r\n}\r\n\r\n.loader.absolute {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n}"],"sourceRoot":""}]);
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
  corImg.src = './src/assets/images/forecast-details/droplet-svgrepo-com.svg';
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
  humidityImg.src = './src/assets/images/forecast-details/waves-fill-svgrepo-com.svg';
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
  windImg.src = './src/assets/images/forecast-details/wind-fill-svgrepo-com.svg';
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
  uvImg.src = './src/assets/images/forecast-details/sun-filled-svgrepo-com.svg';
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
  corIconImg.src = './src/assets/images/forecast-details/droplet-svgrepo-com.svg';
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

    return postalCodeResult;
  } if (!(cityResult instanceof Error) && cityResult.length !== 0) {
    // display a clickable result containing city weather info

    return cityResult;
  }
  // display an error that the search query was not found along with search tips

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
  const string = './src/assets/images/weather-icons/';
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
        toggleGridContainer(true);
        togglePageLoadingAnimation(true);
        const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(query);
        setTimeout(delayDisplayingGrid, 500, result);
      });

      resultsContainer.appendChild(queryResult);
    }
  } else {
    const queryResult = createQueryResult(results);
    queryResult.addEventListener('click', async () => {
      toggleSearchModal();
      toggleGridContainer(true);
      togglePageLoadingAnimation(true);
      const result = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_4__["default"])(results);
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

function createFooter() {
  const footer = document.createElement('footer');
  const div = document.createElement('div');

  const p = document.createElement('p');
  p.innerHTML = 'Designed and developed by <a href=\'https://www.github.com/vbelmonte\' target=\'_blank\'>Villy Belmonte</a href>';

  div.appendChild(p);
  footer.appendChild(div);

  return footer;
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
  const footer = createFooter();

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

  body.append(mainContainer, footer);
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

module.exports = __webpack_require__.p + "9d17da2305589c6ab24d.svg";

/***/ }),

/***/ "./src/assets/images/layout/magnifying-glass-solid.svg":
/*!*************************************************************!*\
  !*** ./src/assets/images/layout/magnifying-glass-solid.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9036027600a5e51e97cb.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sWUFBWSxhQUFhLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxRQUFRLFlBQVksTUFBTSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8s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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxRQUFRLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sUUFBUSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLFFBQVEsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxZ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O0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFKOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXLDJEQUFXLE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1FQUFtQjtBQUMxQyxFQUFFLHFGQUEyQjtBQUM3QixFQUFFLDBHQUFxQztBQUN2QyxFQUFFLHVGQUEwQjtBQUM1QixFQUFFLHFGQUF3QjtBQUMxQjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9FQUFxQjtBQUMvQyxxQ0FBcUMsK0VBQWdDO0FBQ3JFLG9DQUFvQyx1RUFBd0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xrQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDSztBQUNZO0FBQ3ZDO0FBQ0E7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWdodC10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbGlnaHQtdGhlbWUuY3NzPzdiZGMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYWRkaXRpb25hbC1jdXJyZW50LWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZGRpdGlvbmFsLWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50LWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mZXRjaC1jaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWJsYWNrOiAjMzIzMjMyO1xyXG4gICAgLS1ibGFjay1maWx0ZXI6IGludmVydCgxNyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNmRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDg5JSk7O1xyXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgLS13aGl0ZTogI0YyRjJGMjtcclxuICAgIC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSgyJSkgc2F0dXJhdGUoMTQzJSkgaHVlLXJvdGF0ZSgxOThkZWcpIGJyaWdodG5lc3MoMTE2JSkgY29udHJhc3QoOTAlKTtcclxuICAgIC0tZGF5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4N0U3LCAjQzI5OTAwKTtcclxuICAgIC0tcG93ZXItcHJpbWFyeTogIzAwMTMxQTtcclxuICAgIC0tcG93ZXItc2Vjb25kYXJ5OiAjNjREMUYzO1xyXG4gICAgLS1wb3dlci10ZXJ0aWFyeTogaW52ZXJ0KDEwMCUpIHNlcGlhKDM2JSkgc2F0dXJhdGUoNDAxMCUpIGh1ZS1yb3RhdGUoMTc2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMSUpO1xyXG4gICAgLS1wb3dlci1xdWF0ZXJuYXJ5OiAjN0ZBOUQ2O1xyXG4gICAgLS10cmFuc3BhcmVudDogcmdiKDQ2LCA2OCwgODcsIDAuNSk7XHJcbiAgICAtLXRyYW5zcGFyZW50LWZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgyOTklKSBodWUtcm90YXRlKDE2NmRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSkgb3BhY2l0eSg1MCUpO1xyXG4gICAgLS1hZGRpdGlvbmFsLWZvcmVjYXN0OiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuMik7XHJcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjcpO1xyXG4gICAgLS1jYXJkOiByZ2IoMjUwLCAyNTAsIDI1MCwgMC4xKTtcclxuICAgIC0tbmF2aWdhdGlvbjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuMik7XHJcbiAgICAtLWRyb3BzaGFkb3c6IDByZW0gMC41cmVtIDFyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtLW1vZGFsLXJlc3VsdDogI0VBRUVFRjsgIFxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRheSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cclxuLnNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnRlcnRpYXJ5IHtcclxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xyXG59XHJcblxyXG4uYmxhY2stZmlsdGVyIHtcclxuICAgIGZpbHRlcjogdmFyKC0tYmxhY2stZmlsdGVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cclxubmF2IHtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiBpbWcge1xyXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbm5hdiAuc2lkZS1uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2aWdhdGlvbik7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmxvZ28sXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmRpdmlkZXIge1xyXG4gICAgZmlsdGVyOiB2YXIoLS1ibGFjay1maWx0ZXIpO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cclxuLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xyXG59XHJcbiAgXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHZhcigtLXBvd2VyLXByaW1hcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cclxuLnNlYXJjaC1tb2RhbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2RhbC1yZXN1bHQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTRVRUSU5HUyBNT0RBTCAqKi9cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCAuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG5zZWN0aW9uI2N1cnJlbnQtZm9yZWNhc3Qge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxufSAgIFxyXG5cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI2N1cnJlbnQtZm9yZWNhc3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xyXG5cclxuICAgIC8qIE1PQklMRSBTVFlMRSAqL1xyXG4gICAgYm94LXNoYWRvdzogMHJlbSAwLjEyNXJlbSAwLjI1cmVtIHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcclxufVxyXG5cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuICAgIC8qIERFU0tUT1AgU1RZTEUgKi9cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuLmN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0LTIpIHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpICFpbXBvcnRhbnQ7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOmhvdmVyIHtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0td2hpdGUpIHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMik7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcblxyXG4gICAgXHJcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXHJcbi5ob3VybHktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTE9BRElORyBBTklNQVRJT04gU1RZTEVTICoqL1xyXG4ubG9hZGVyIHtcclxuICAgIGJvcmRlci10b3A6IDAuMjVyZW0gc29saWQgdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saWdodC10aGVtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0dBQWtHO0lBQ2xHLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsc0dBQXNHO0lBQ3RHLGdEQUFnRDtJQUNoRCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLDRHQUE0RztJQUM1RywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHlIQUF5SDtJQUN6SCwrQ0FBK0M7SUFDL0MsaURBQWlEO0lBQ2pELCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsZ0RBQWdEO0lBQ2hELHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7OztBQUlBLHlCQUF5QjtBQUN6QjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7OztBQUlBLDJCQUEyQjtBQUMzQjtJQUNJLHNDQUFzQztJQUN0Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7Ozs7QUFJQSx3QkFBd0I7QUFDeEI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOzs7O0FBSUEsMkJBQTJCO0FBQzNCO0lBQ0ksb0NBQW9DO0lBQ3BDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLGdDQUFnQztBQUNqQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7OztBQUlBLGlDQUFpQztBQUNqQztJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7OztBQUlBLHFCQUFxQjtBQUNyQjtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7Ozs7QUFJQSw4QkFBOEI7QUFDOUI7SUFDSSxtQkFBbUI7QUFDdkI7O0lBRUksa0JBQWtCO0lBQ2xCO1FBQ0k7WUFDSSw0Q0FBNEM7WUFDNUMsNkJBQTZCO1FBQ2pDO0lBQ0o7Ozs7QUFJSiwyQ0FBMkM7QUFDM0M7SUFDSSxnQ0FBZ0M7O0lBRWhDLGlCQUFpQjtJQUNqQiwwREFBMEQ7QUFDOUQ7O0lBRUksa0JBQWtCO0lBQ2xCO1FBQ0k7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjs7O0FBR0oseUNBQXlDO0lBQ3JDLGtCQUFrQjtJQUNsQjtRQUNJO1lBQ0ksNENBQTRDO1lBQzVDLDZCQUE2QjtRQUNqQztJQUNKOzs7O0FBSUosNkJBQTZCO0FBQzdCO0lBQ0ksbUZBQW1GO0lBQ25GLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdEQUF3RDtBQUM1RDs7QUFFQTtDQUNDLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLDhDQUE4QztBQUMvQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7OztBQUlBLHlCQUF5QjtBQUN6QjtJQUNJLDZCQUE2QjtBQUNqQzs7OztBQUlBLCtCQUErQjtBQUMvQjtJQUNJLDhDQUE4QztBQUNsRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XFxyXFxuICAgIC0tYmxhY2stZmlsdGVyOiBpbnZlcnQoMTclKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTZkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4OSUpOztcXHJcXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xcclxcbiAgICAtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDE0MyUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDkwJSk7XFxyXFxuICAgIC0tZGF5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4N0U3LCAjQzI5OTAwKTtcXHJcXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xcclxcbiAgICAtLXBvd2VyLXNlY29uZGFyeTogIzY0RDFGMztcXHJcXG4gICAgLS1wb3dlci10ZXJ0aWFyeTogaW52ZXJ0KDEwMCUpIHNlcGlhKDM2JSkgc2F0dXJhdGUoNDAxMCUpIGh1ZS1yb3RhdGUoMTc2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XFxyXFxuICAgIC0tdHJhbnNwYXJlbnQ6IHJnYig0NiwgNjgsIDg3LCAwLjUpO1xcclxcbiAgICAtLXRyYW5zcGFyZW50LWZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgyOTklKSBodWUtcm90YXRlKDE2NmRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSkgb3BhY2l0eSg1MCUpO1xcclxcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWZvcmVjYXN0LTI6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC43KTtcXHJcXG4gICAgLS1jYXJkOiByZ2IoMjUwLCAyNTAsIDI1MCwgMC4xKTtcXHJcXG4gICAgLS1uYXZpZ2F0aW9uOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC4yKTtcXHJcXG4gICAgLS1kcm9wc2hhZG93OiAwcmVtIDAuNXJlbSAxcmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAtLW1vZGFsLXJlc3VsdDogI0VBRUVFRjsgIFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGF5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENPTE9SIENMQVNTIFNUWUxFUyAqKi9cXHJcXG4uc2Vjb25kYXJ5IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi50ZXJ0aWFyeSB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxhY2stZmlsdGVyIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS1ibGFjay1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cXHJcXG5uYXYge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgaW1nIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zaWRlLW5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5sb2dvLFxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmRpdmlkZXIge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxufVxcclxcbiAgXFxyXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5zZWFyY2gtbW9kYWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vZGFsLXJlc3VsdCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTRVRUSU5HUyBNT0RBTCAqKi9cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIC5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG5zZWN0aW9uI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn0gICBcXHJcXG5cXHJcXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgICAgI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxuXFxyXFxuICAgIC8qIE1PQklMRSBTVFlMRSAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgICAgI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgICAgI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBTVFlMRVMgKiovXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXIge1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMikgdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCkgIWltcG9ydGFudDtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjpob3ZlciB7XFxyXFxuICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0td2hpdGUpIHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QtMik7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuICAgIFxcclxcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmhvdXJseS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBMT0FESU5HIEFOSU1BVElPTiBTVFlMRVMgKiovXFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IDAuMjVyZW0gc29saWQgdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC1kZXNrdG9wLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcclxuICAgdjIuMCB8IDIwMTEwMTI2XHJcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXHJcbiovXHJcblxyXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5IHtcclxuXHRsaW5lLWhlaWdodDogMTtcclxufVxyXG5vbCwgdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZSwgcSB7XHJcblx0cXVvdGVzOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSwgcTphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0Y29udGVudDogbm9uZTtcclxufVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuXHJcblxyXG46cm9vdCB7XHJcblx0LS1ibGFjazogIzIyMjIyMjtcclxuXHQtLXdoaXRlOiAjRjJGMkYyO1xyXG5cdC0tZ3JheTogI0EwQTBBMDtcclxuXHQtLWxpZ2h0LWdyYXk6ICNEMUQxRDE7XHJcblx0LS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDkwJSkgc2F0dXJhdGUoMTA2JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5MCUpO1xyXG5cdC0tZ3JheS1maWx0ZXI6IGludmVydCg4MyUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxNTNkZWcpIGJyaWdodG5lc3MoNzglKSBjb250cmFzdCg4NiUpO1xyXG5cdC0tdHJhbnNwYXJlbnQ6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjgpO1xyXG5cdC0tdHJhbnNwYXJlbnQtZGFyay0zMDogcmdiYSg0MCwgNDAsIDQwLCAwLjUpO1xyXG5cdC0tdHJhbnNwYXJlbnQtZGFyay03MDogcmdiYSg0MCwgNDAsIDQwLCAwLjcpO1xyXG5cdC0taW5wdXQtcGxhY2Vob2xkZXI6IHJnYigyNDIsIDI0MiwgMjQyLCAwLjcpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgTWVkaXVtJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcblxyXG5cdC8qKiBNT0JJTEUgKiovXHJcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyoqIERFU0tUT1AgQkVMT1cgKiovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0Ym9keSB7XHJcblx0XHRwYWRkaW5nOiAwcmVtIDVyZW07XHJcblx0XHRnYXA6IDRyZW07XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXHJcbi53aGl0ZS1maWx0ZXIge1xyXG5cdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50IHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcikgb3BhY2l0eSg4MCUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBHRU5FUkFMIEZPTlQgU1RZTEVTICoqL1xyXG5oMSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQnO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuaDIge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbmgyLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG59XHJcblxyXG5oMi5zbWFsbCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oMi5tZWRpdW0ge1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuaDIubGFyZ2Uge1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRsaW5lLWhlaWdodDogNHJlbTtcclxufVxyXG5cclxuaDMge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuaDMuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuaDMuZXh0cmEtc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMC43NXJlbTtcclxufVxyXG5cclxuaDMuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oMy5ib2xkLnNtYWxsIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxucC5sYXJnZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG5wLm1lZGl1bSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5wLnNtYWxsIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDAuNzVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDAuNzVyZW07XHJcbn1cclxuXHJcbnAuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5hIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBNZWRpdW0nO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXHJcbi5oaWRkZW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNoaWRkZW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcblx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xyXG5cclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xyXG5uYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiB7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblxyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDgwcmVtO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcblx0LyoqIFNDUkVFTlMgPCAzMjBQWCBCRUxPVyoqLyBcclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcblx0XHRuYXYubWFpbi1uYXYge1xyXG5cdFx0XHRwYWRkaW5nOiAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2ICB7XHJcblx0XHRcdHBhZGRpbmc6IDFyZW0gMHJlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYubWFpbi1uYXYgaW1nIHtcclxuXHRoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAubG9nbywgbmF2LnNpZGUtbmF2IC5sb2dvIHtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogM3JlbTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5vcHRpb25zIC5zd2l0Y2hlcyB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGdhcDogMXJlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyBidXR0b24ge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuYWRkaXRpb25hbC1vcHRpb25zIGJ1dHRvbjpob3ZlciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIC5tZW51LWJ1dHRvbiB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGdhcDogMDtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgYnV0dG9uIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLnNpZGUtbmF2IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmbGV4OiA0O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGxpIHtcclxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGhyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xyXG5cdG1hcmdpbjogMnJlbSAwcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cclxuLnNlYXJjaC1tb2RhbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ei1pbmRleDogMjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudC1kYXJrLTMwKTtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0LnNlYXJjaC1tb2RhbCAuY29udGFpbmVyIHtcclxuXHRcdFx0cGFkZGluZzogMS41cmVtO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDUwcmVtO1xyXG5cdFx0XHRtYXJnaW46IDVyZW0gYXV0bztcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLWJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCAubW9iaWxlLXNlYXJjaCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtbW9kYWwgaW5wdXQge1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcclxuXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcclxuXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCAub3V0cHV0LWNvbnRhaW5lciB7XHJcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLW1vZGFsIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdHBhZGRpbmc6IDJyZW0gMHJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDAuNzVyZW07XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdDpob3ZlciB7XHJcblx0Y3Vyc29yOlx0ZGVmYXVsdDtcclxufVxyXG5cclxuLnNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTRUFSQ0ggVElQIFNUWUxFUyAqKi9cclxuLnRpcHMtY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG4udGlwIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMXJlbTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGlwIHAge1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi50aXAgLnRpcC1pbWcge1xyXG5cdHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbn1cclxuXHJcbi50aXAgLnRpcC1pbWcgaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLWdyYXktZmlsdGVyKTtcclxufVxyXG5cclxuXHJcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cclxuXHJcbi5zd2l0Y2gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDIuNzVyZW07XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQgeyBcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG5cdHdpZHRoOiAxcmVtO1xyXG5cdGxlZnQ6IDRweDtcclxuXHRib3R0b206IDNweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcbn1cclxuICBcclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbn1cclxuICBcclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0LnRvZ2dsZS1kaXYge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRnYXA6IDAuNXJlbTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcbi8qKiBNQUlOLUNPTlRBSU5FUiBTVFlMRVMgKiovXHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQuZ3JpZC1jb250YWluZXIge1xyXG5cdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRnYXA6IDFyZW07XHJcblx0XHRcdGdyaWQtdGVtcGxhdGU6IDRmciAxZnIgLyAxZnIgMWZyO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDgwcmVtO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG4vKiogU0VUVElOR1MgTU9EQUwgKiovXHJcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHotaW5kZXg6IDM7XHJcblxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyay03MCk7XHJcbn1cclxuXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC5tb2JpbGUtc2V0dGluZ3MtbW9kYWwge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgLmNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMnJlbTtcclxuXHR3aWR0aDogNzB2dztcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI1cHgpIHtcclxuXHRcdC5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgLmNvbnRhaW5lciB7XHJcblx0XHRcdHdpZHRoOiAyMHJlbTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIGJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0aGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCBidXR0b24gaW1nIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgbGkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENVUlJFTlQgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG4jY3VycmVudC1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cmVtO1xyXG5cdHBhZGRpbmc6IDNyZW0gMXJlbTtcclxufVxyXG5cclxuXHQvKiogU0NSRUVOUyA8IDMyMFBYIEJFTE9XKiovIFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IHtcclxuXHRcdFx0cGFkZGluZzogM3JlbSAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2N1cnJlbnQtZm9yZWNhc3Qge1xyXG5cdFx0XHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRwYWRkaW5nOiAzcmVtO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRncmlkLWNvbHVtbi1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xyXG5cdFx0XHRncmlkLXJvdy1zdGFydDogMTtcclxuXHRcdFx0Z3JpZC1yb3ctZW5kOiAyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzLFxyXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyAuYm90dG9tIHtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xyXG5cdGdhcDogNXJlbTtcdFxyXG59XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuaGlnaC1sb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgaW1nI2N1cnJlbnQtd2VhdGhlciB7XHJcblx0d2lkdGg6IDhyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRtYXJnaW46IDByZW0gMXJlbTtcclxufVxyXG5cclxuXHQvKiogU0NSRUVOUyA8IDMyMFBYIEJFTE9XKiovIFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0XHRcdG1hcmdpbjogMHJlbSAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAyO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDJyZW07XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcbn1cclxuXHQvKiogVEFCTEVUIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDI1cmVtO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRcdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIC5tb2R1bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMC41cmVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXHJcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiA1cmVtO1xyXG5cdHBhZGRpbmc6IDNyZW0gMXJlbTtcclxufVxyXG5cclxuXHQvKiogU0NSRUVOUyA8IDMyMFBYIEJFTE9XKiovIFxyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuXHRcdCNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcclxuXHRcdFx0cGFkZGluZzogM3JlbSAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG5cdFx0XHRwYWRkaW5nOiAzcmVtO1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuXHRcdFx0aGVpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcblx0XHRcdGdyaWQtY29sdW1uLWVuZDogMztcclxuXHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtcm93LWVuZDogMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG4uaG91cmx5LWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAycmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXHJcbi5ob3VybHktY2FyZCB7XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgLmNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxLjVyZW07XHJcblx0d2lkdGg6IDIuNXJlbTtcclxufVxyXG5cclxuLmhvdXJseS1jYXJkIGltZyB7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJPVVNFTCBTVFlMRVMgKiovXHJcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwge1xyXG5cdG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRoZWlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuXHRib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwgPiAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC41cmVtO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcbi50aHJlZS1kYXktZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDJyZW07XHJcbn1cclxuXHJcbi50aHJlZS1kYXktZm9yZWNhc3QtbGlzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cclxuLmRhaWx5LWJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMXJlbTtcclxuXHRcclxuXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGF5LWNvbnRhaW5lciB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXg6IDEwO1xyXG5cdGdhcDogMXJlbTsgLyoqIE1PQklMRSAqKi9cclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3QsXHJcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyxcclxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3Qge1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0IC5pY29uIHtcclxuXHR3aWR0aDogMS41cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIGg0IHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMge1xyXG5cdHdpZHRoOiA1cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5oaWdoLFxyXG4uZGFpbHktYmFyIC5sb3cge1xyXG5cdGZsZXg6IDE7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiogRk9PVEVSIFNUWUxFUyAqKi9cclxuZm9vdGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9vdGVyIGRpdiB7XHJcblx0cGFkZGluZzogMnJlbSAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIExPQURJTkcgQU5JTUFUSU9OIFNUWUxFUyAqKi9cclxuLmxvYWRlciB7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGJvcmRlcjogMC4yNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0d2lkdGg6IDNyZW07XHJcblx0aGVpZ2h0OiAzcmVtO1xyXG5cdGFuaW1hdGlvbjogc3Bpbm5lciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW5uZXIge1xyXG5cdDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuXHQxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4ubG9hZGVyLmFic29sdXRlIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7O0FBSUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsc0dBQXNH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QXFDO0FBQ3RDOztFQUVFO0NBQ0QsS0FBSyx1QkFBdUIsRUFBRTtDQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ25DOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixTQUFTO0NBQ1QsT0FBTztDQUNQLFFBQVE7QUFDVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWJsYWNrOiAjMjIyMjIyO1xcclxcblxcdC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuXFx0LS1ncmF5OiAjQTBBMEEwO1xcclxcblxcdC0tbGlnaHQtZ3JheTogI0QxRDFEMTtcXHJcXG5cXHQtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoOTAlKSBzYXR1cmF0ZSgxMDYlKSBodWUtcm90YXRlKDUxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDkwJSk7XFxyXFxuXFx0LS1ncmF5LWZpbHRlcjogaW52ZXJ0KDgzJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE1M2RlZykgYnJpZ2h0bmVzcyg3OCUpIGNvbnRyYXN0KDg2JSk7XFxyXFxuXFx0LS10cmFuc3BhcmVudDogcmdiKDI0MiwgMjQyLCAyNDIsIDAuOCk7XFxyXFxuXFx0LS10cmFuc3BhcmVudC1kYXJrLTMwOiByZ2JhKDQwLCA0MCwgNDAsIDAuNSk7XFxyXFxuXFx0LS10cmFuc3BhcmVudC1kYXJrLTcwOiByZ2JhKDQwLCA0MCwgNDAsIDAuNyk7XFxyXFxuXFx0LS1pbnB1dC1wbGFjZWhvbGRlcjogcmdiKDI0MiwgMjQyLCAyNDIsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBNZWRpdW0nO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG5cXHQvKiogTU9CSUxFICoqL1xcclxcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0Ym9keSB7XFxyXFxuXFx0XFx0cGFkZGluZzogMHJlbSA1cmVtO1xcclxcblxcdFxcdGdhcDogNHJlbTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXFxyXFxuLndoaXRlLWZpbHRlciB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNwYXJlbnQge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIEZPTlQgU1RZTEVTICoqL1xcclxcbmgxIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxufVxcclxcblxcclxcbmgyLnNtYWxsIHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmgyLm1lZGl1bSB7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMi5sYXJnZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5leHRyYS1zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmgzLmJvbGQuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLmxhcmdlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDRyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbnAubWVkaXVtIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbnAuc21hbGwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucC5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IE1lZGl1bSc7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogT1RIRVIgR0VORVJBTCBTVFlMRVMgKiovXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hpZGRlbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuXFx0YmFja2dyb3VuZDogdXJsKCcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC1kZXNrdG9wLnN2ZycpIG5vLXJlcGVhdCBzY3JvbGwgMC43NXJlbSA1MCUvMXJlbSAxcmVtO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG5cXHRib3JkZXI6IHNvbGlkIDFweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuXFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuXFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cXHJcXG5uYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiB7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1heC13aWR0aDogODByZW07XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIFNDUkVFTlMgPCAzMjBQWCBCRUxPVyoqLyBcXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2IHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdG5hdi5tYWluLW5hdiAge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDFyZW0gMHJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5tYWluLW5hdiBpbWcge1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5sb2dvLCBuYXYuc2lkZS1uYXYgLmxvZ28ge1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLnN3aXRjaGVzIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdG5hdi5tYWluLW5hdiAub3B0aW9ucyAuc3dpdGNoZXMge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5vcHRpb25zIC5hZGRpdGlvbmFsLW9wdGlvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLm9wdGlvbnMgLmFkZGl0aW9uYWwtb3B0aW9ucyBidXR0b24ge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAub3B0aW9ucyAuYWRkaXRpb25hbC1vcHRpb25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIC5tZW51LWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgYnV0dG9uIHtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLnNpZGUtbmF2IHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZmxleDogNDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGxpIHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBociB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XFxyXFxuXFx0bWFyZ2luOiAycmVtIDByZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNT0JJTEUgU0VBUkNIIE1PREFMIFNUWUxFUyAqKi9cXHJcXG4uc2VhcmNoLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50LWRhcmstMzApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5jb250YWluZXIge1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC5zZWFyY2gtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMS41cmVtO1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogNTByZW07XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiA1cmVtIGF1dG87XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLm1vYmlsZS1zZWFyY2gge1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLnN2ZycpIG5vLXJlcGVhdCBzY3JvbGwgMC43NXJlbSA1MCUvMXJlbSAxcmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyYXkpO1xcclxcblxcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLm91dHB1dC1jb250YWluZXIge1xcclxcblxcdHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1tb2RhbCAucmVzdWx0cy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjc1cmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcclxcblxcdGN1cnNvcjpcXHRkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTRUFSQ0ggVElQIFNUWUxFUyAqKi9cXHJcXG4udGlwcy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50aXAge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXAgcCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpcCAudGlwLWltZyB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpcCAudGlwLWltZyBpbWcge1xcclxcblxcdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiogU0xJREVSIFNXSVRDSCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHR3aWR0aDogMi43NXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCBpbnB1dCB7IFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0d2lkdGg6IDA7XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcXHJcXG5cXHR0cmFuc2l0aW9uOiAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcblxcdHdpZHRoOiAxcmVtO1xcclxcblxcdGxlZnQ6IDRweDtcXHJcXG5cXHRib3R0b206IDNweDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcXHJcXG5cXHR0cmFuc2l0aW9uOiAuMnM7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XFxyXFxufVxcclxcbiAgXFxyXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxyXFxuLnNsaWRlci5yb3VuZCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG59XFxyXFxuICBcXHJcXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC50b2dnbGUtZGl2IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGdhcDogMC41cmVtO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUFJTi1DT05UQUlORVIgU1RZTEVTICoqL1xcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0LmdyaWQtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHRcXHRncmlkLXRlbXBsYXRlOiA0ZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDgwcmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTRVRUSU5HUyBNT0RBTCAqKi9cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR6LWluZGV4OiAzO1xcclxcblxcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQtZGFyay03MCk7XFxyXFxufVxcclxcblxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0Lm1vYmlsZS1zZXR0aW5ncy1tb2RhbCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgLmNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMnJlbTtcXHJcXG5cXHR3aWR0aDogNzB2dztcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XFxyXFxuXFx0XFx0Lm1vYmlsZS1zZXR0aW5ncy1tb2RhbCAuY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjByZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4ubW9iaWxlLXNldHRpbmdzLW1vZGFsIGJ1dHRvbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFx0aGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZXR0aW5ncy1tb2RhbCBidXR0b24gaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2V0dGluZ3MtbW9kYWwgbGkge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG4jY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIFNDUkVFTlMgPCAzMjBQWCBCRUxPVyoqLyBcXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDNyZW0gMC41cmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDNyZW07XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzLFxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdGdhcDogNXJlbTtcXHRcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmhpZ2gtbG93IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCBpbWcjY3VycmVudC13ZWF0aGVyIHtcXHJcXG5cXHR3aWR0aDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdG1hcmdpbjogMHJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogU0NSRUVOUyA8IDMyMFBYIEJFTE9XKiovIFxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdFxcdFxcdG1hcmdpbjogMHJlbSAwLjVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHQvKiogVEFCTEVUIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDI1cmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIC5tb2R1bGUge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXFxyXFxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDVyZW07XFxyXFxuXFx0cGFkZGluZzogM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogU0NSRUVOUyA8IDMyMFBYIEJFTE9XKiovIFxcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcXHJcXG5cXHRcXHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogM3JlbSAwLjVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG5cXHRcXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogM3JlbTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogNHJlbTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbi5ob3VybHktZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXFxyXFxuLmhvdXJseS1jYXJkIHtcXHJcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNhcmQgLmNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAxLjVyZW07XFxyXFxuXFx0d2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIGltZyB7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FST1VTRUwgU1RZTEVTICoqL1xcclxcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwge1xcclxcblxcdG92ZXJmbG93LXg6IGF1dG87XFxyXFxufVxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0aGVpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsID4gLmNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDAuNXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIDMtREFZIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG4udGhyZWUtZGF5LWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGhyZWUtZGF5LWZvcmVjYXN0LWxpc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xcclxcbi5kYWlseS1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxuXFx0XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmRheS1jb250YWluZXIge1xcclxcblxcdGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmRldGFpbHMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRmbGV4OiAxMDtcXHJcXG5cXHRnYXA6IDFyZW07IC8qKiBNT0JJTEUgKiovXFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0LFxcclxcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyxcXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3QgLmljb24ge1xcclxcblxcdHdpZHRoOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIC5pY29uIHtcXHJcXG5cXHRoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgaDQge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuY2hhbmNlLW9mLXJhaW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyB7XFxyXFxuXFx0d2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmhpZ2gsXFxyXFxuLmRhaWx5LWJhciAubG93IHtcXHJcXG5cXHRmbGV4OiAxO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqKiBGT09URVIgU1RZTEVTICoqL1xcclxcbmZvb3RlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBkaXYge1xcclxcblxcdHBhZGRpbmc6IDJyZW0gMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTE9BRElORyBBTklNQVRJT04gU1RZTEVTICoqL1xcclxcbi5sb2FkZXIge1xcclxcblxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRib3JkZXI6IDAuMjVyZW0gc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdHdpZHRoOiAzcmVtO1xcclxcblxcdGhlaWdodDogM3JlbTtcXHJcXG5cXHRhbmltYXRpb246IHNwaW5uZXIgMXMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBzcGlubmVyIHtcXHJcXG5cXHQwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxyXFxuXFx0MTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlci5hYnNvbHV0ZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRib3R0b206IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpZ2h0LXRoZW1lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlnaHQtdGhlbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHByaW50T3V0SHVtaWRpdHkocXVlcnkpIHtcclxuICByZXR1cm4gYCR7cXVlcnkuY3VycmVudFdlYXRoZXIuaHVtaWRpdHl9JWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0V2luZFNwZWVkKHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIGAke01hdGguZmxvb3IocXVlcnkuY3VycmVudFdlYXRoZXIud2luZCl9bXBoYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRVVkluZGV4KHF1ZXJ5KSB7XHJcbiAgY29uc3QgdXYgPSBxdWVyeS5kYWlseS51dl9pbmRleF9tYXhbMF07XHJcbiAgY29uc3QgcmVzdWx0ID0gTWF0aC5mbG9vcih1dik7XHJcblxyXG4gIHJldHVybiBgJHtyZXN1bHR9IG9mIDEwYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRDaGFuY2VPZlJhaW4ocXVlcnkpIHtcclxuICByZXR1cm4gYCR7cXVlcnkuY3VycmVudFdlYXRoZXIucHJlY2lwaXRhdGlvbn0lYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmNlLW9mLXJhaW4nKTtcclxuICBjb3IudGV4dENvbnRlbnQgPSBwcmludE91dENoYW5jZU9mUmFpbihxdWVyeSk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBwcmludE91dEh1bWlkaXR5KHF1ZXJ5KTtcclxuXHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBwcmludE91dFdpbmRTcGVlZChxdWVyeSk7XHJcblxyXG4gIGNvbnN0IHV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3V2LWluZGV4Jyk7XHJcbiAgdXYudGV4dENvbnRlbnQgPSBwcmludE91dFVWSW5kZXgocXVlcnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGFuY2VPZlJhaW4oKSB7XHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcicsICdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckltZy5zcmMgPSAnLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL2Ryb3BsZXQtc3ZncmVwby1jb20uc3ZnJztcclxuICBjb3JJY29uRGl2LmFwcGVuZENoaWxkKGNvckltZyk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKGNvckljb25EaXYpO1xyXG5cclxuICBjb25zdCBjb3JQZXJjZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29yUGVyY2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb3JQZXJjZW50LmlkID0gJ2NoYW5jZS1vZi1yYWluJztcclxuICBjb3JQZXJjZW50RGl2LmFwcGVuZENoaWxkKGNvclBlcmNlbnQpO1xyXG5cclxuICBjb25zdCBjb3JUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnZXh0cmEtc21hbGwnKTtcclxuICBjb3JUaXRsZS50ZXh0Q29udGVudCA9ICdSYWluJztcclxuICBjb3JUaXRsZURpdi5hcHBlbmRDaGlsZChjb3JUaXRsZSk7XHJcblxyXG4gIGNvckRpdi5hcHBlbmQoY29yUGVyY2VudERpdiwgY29yVGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gY29yRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIdW1pZGl0eSgpIHtcclxuICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5JywgJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGh1bWlkaXR5SW1nLnNyYyA9ICcuL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvd2F2ZXMtZmlsbC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGh1bWlkaXR5SWNvbkRpdi5hcHBlbmRDaGlsZChodW1pZGl0eUltZyk7XHJcbiAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHlQZXJjZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGh1bWlkaXR5UGVyY2VudC5pZCA9ICdodW1pZGl0eSc7XHJcbiAgaHVtaWRpdHlQZXJjZW50RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5UGVyY2VudCk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBodW1pZGl0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScsICdleHRyYS1zbWFsbCcpO1xyXG4gIGh1bWlkaXR5VGl0bGUudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZSk7XHJcblxyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZChodW1pZGl0eVBlcmNlbnREaXYsIGh1bWlkaXR5VGl0bGVEaXYpO1xyXG5cclxuICByZXR1cm4gaHVtaWRpdHlEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmQoKSB7XHJcbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZCgnd2luZCcsICdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3Qgd2luZEljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgd2luZEltZy5zcmMgPSAnLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dpbmQtZmlsbC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIHdpbmRJY29uRGl2LmFwcGVuZENoaWxkKHdpbmRJbWcpO1xyXG4gIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZEljb25EaXYpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgd2luZFNwZWVkLmlkID0gJ3dpbmQnO1xyXG4gIHdpbmRTcGVlZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xyXG5cclxuICBjb25zdCB3aW5kVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHdpbmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnZXh0cmEtc21hbGwnKTtcclxuICB3aW5kVGl0bGUudGV4dENvbnRlbnQgPSAnV2luZCc7XHJcbiAgd2luZFRpdGxlRGl2LmFwcGVuZENoaWxkKHdpbmRUaXRsZSk7XHJcblxyXG4gIHdpbmREaXYuYXBwZW5kKHdpbmRTcGVlZERpdiwgd2luZFRpdGxlRGl2KTtcclxuXHJcbiAgcmV0dXJuIHdpbmREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVVWKCkge1xyXG4gIGNvbnN0IHV2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdXZEaXYuY2xhc3NMaXN0LmFkZCgndXYnLCAnbW9kdWxlJyk7XHJcblxyXG4gIGNvbnN0IHV2SWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHV2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgdXZJbWcuc3JjID0gJy4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9zdW4tZmlsbGVkLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgdXZJY29uRGl2LmFwcGVuZENoaWxkKHV2SW1nKTtcclxuICB1dkRpdi5hcHBlbmRDaGlsZCh1dkljb25EaXYpO1xyXG5cclxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB1dkluZGV4LmlkID0gJ3V2LWluZGV4JztcclxuICB1dkluZGV4RGl2LmFwcGVuZENoaWxkKHV2SW5kZXgpO1xyXG5cclxuICBjb25zdCB1dlRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgdXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWNvbmRhcnknLCAnZXh0cmEtc21hbGwnKTtcclxuICB1dlRpdGxlLnRleHRDb250ZW50ID0gJ1VWIEluZGV4JztcclxuICB1dlRpdGxlRGl2LmFwcGVuZENoaWxkKHV2VGl0bGUpO1xyXG5cclxuICB1dkRpdi5hcHBlbmQodXZJbmRleERpdiwgdXZUaXRsZURpdik7XHJcblxyXG4gIHJldHVybiB1dkRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzJztcclxuXHJcbiAgY29uc3QgbW9yZUZvcmVjYXN0RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuaWQgPSAnbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluID0gY3JlYXRlQ2hhbmNlT2ZSYWluKCk7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBjcmVhdGVIdW1pZGl0eSgpO1xyXG4gIGNvbnN0IHdpbmQgPSBjcmVhdGVXaW5kKCk7XHJcbiAgY29uc3QgdXYgPSBjcmVhdGVVVigpO1xyXG5cclxuICBtb3JlRm9yZWNhc3REZXRhaWxzRGl2LmFwcGVuZChjaGFuY2VPZlJhaW4sIGh1bWlkaXR5LCB3aW5kLCB1dik7XHJcblxyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQobW9yZUZvcmVjYXN0RGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IGNvbnZlcnRUWiwgZmV0Y2hXZWF0aGVySWNvbiB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkKGhvdXIsIHRlbXAsIGljb24pIHtcclxuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdob3VybHktY2FyZCcpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IGhvdXI7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGZvcmVjYXN0SWNvbi5zcmMgPSBpY29uO1xyXG5cclxuICBjb25zdCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJseVRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKHRlbXApfcKwYDtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQodGltZSwgZm9yZWNhc3RJY29uLCBob3VybHlUZW1wKTtcclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBjYXJkRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VGltZVRvMTJIcihob3VyKSB7XHJcbiAgbGV0IHQ7XHJcbiAgaWYgKGhvdXIgPT09IDEyIHx8IGhvdXIgPT09IDM2KSB7XHJcbiAgICB0ID0gJzEycG0nO1xyXG4gIH0gZWxzZSBpZiAoaG91ciA9PT0gMCB8fCBob3VyID09PSAyNCkge1xyXG4gICAgdCA9ICcxMmFtJztcclxuICB9IGVsc2UgaWYgKChob3VyID4gMCAmJiBob3VyIDwgMTIpIHx8IChob3VyID4gMjQgJiYgaG91ciA8IDM2KSkge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofWFtYDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaCA9IGhvdXIgJSAxMjtcclxuICAgIHQgPSBgJHtofXBtYDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUyNEhvdXJGb3JlY2FzdChkYXRhKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gY29udmVydFRaKG5ldyBEYXRlKCksIGRhdGEudGltZXpvbmUpLmdldEhvdXJzKCk7XHJcbiAgY29uc3QgaG91cmx5UmFuZ2UgPSBjdXJyZW50SG91ciArIDI0O1xyXG5cclxuICBmb3IgKGxldCBpID0gY3VycmVudEhvdXI7IGkgPD0gaG91cmx5UmFuZ2U7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgdGVtcCA9IGRhdGEuaG91cmx5LnRlbXBlcmF0dXJlXzJtW2ldO1xyXG4gICAgY29uc3QgaG91ciA9IGNvbnZlcnRUaW1lVG8xMkhyKGkpO1xyXG4gICAgY29uc3QgY29kZSA9IGRhdGEuaG91cmx5LndlYXRoZXJjb2RlW2ldO1xyXG4gICAgY29uc3QgaXNEYXkgPSBkYXRhLmhvdXJseS5pc19kYXlbaV07XHJcbiAgICBjb25zdCBpY29uID0gZmV0Y2hXZWF0aGVySWNvbihjb2RlLCBpc0RheSk7XHJcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlSG91cmx5Q2FyZChob3VyLCB0ZW1wLCBpY29uKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnLCAnc21hbGwnKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJseSBGb3JlY2FzdCc7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsJywgJ2N1c3RvbS1zY3JvbGxiYXInKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENvbnRhaW5lcik7XHJcblxyXG4gIGhvdXJseUZvcmVjYXN0LmFwcGVuZChob3VybHlGb3JlY2FzdFRpdGxlRGl2LCBob3VybHlGb3JlY2FzdENhcm91c2VsKTtcclxuXHJcbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSG91cmx5Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGUyNEhvdXJGb3JlY2FzdChxdWVyeSk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCcpWzBdO1xyXG4gIGNhcm91c2VsLmlubmVySFRNTCA9ICcnO1xyXG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoaGlnaCwgbG93LCBkYXksIGNvciwgZGVzYywgaWNvbikge1xyXG4gIGNvbnN0IGZvcmVjYXN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3RCYXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktYmFyJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF5T2ZUaGVXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBkYXlPZlRoZVdlZWsuY2xhc3NMaXN0LmFkZCgnc21hbGwnKTtcclxuICBkYXlPZlRoZVdlZWsudGV4dENvbnRlbnQgPSBkYXkuc3Vic3RyaW5nKDAsIDMpO1xyXG5cclxuICBkYXlEaXYuYXBwZW5kQ2hpbGQoZGF5T2ZUaGVXZWVrKTtcclxuICBmb3JlY2FzdEJhci5hcHBlbmRDaGlsZChkYXlEaXYpO1xyXG5cclxuICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3REaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbkRpdi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWljb24nKTtcclxuICBjb25zdCBpY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaWNvbkltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgaWNvbkltZy5zcmMgPSBpY29uO1xyXG5cclxuICB3ZWF0aGVySWNvbkRpdi5hcHBlbmRDaGlsZChpY29uSW1nKTtcclxuICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xyXG5cclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REaXYpO1xyXG5cclxuICBjb25zdCB0ZW1wZXJhdHVyZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wZXJhdHVyZXNEaXYuY2xhc3NMaXN0LmFkZCgndGVtcGVyYXR1cmVzJyk7XHJcblxyXG4gIGNvbnN0IGhpZ2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoaWdoRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcclxuXHJcbiAgY29uc3QgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaGlnaFAuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICd0ZW1wJyk7XHJcbiAgaGlnaFAudGV4dENvbnRlbnQgPSBgJHtoaWdofcKwYDtcclxuICBoaWdoRGl2LmFwcGVuZENoaWxkKGhpZ2hQKTtcclxuXHJcbiAgY29uc3QgbG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG93RGl2LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xyXG5cclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxvd1AuY2xhc3NMaXN0LmFkZCgndGVtcCcpO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSBgJHtsb3d9wrBgO1xyXG4gIGxvd0Rpdi5hcHBlbmRDaGlsZChsb3dQKTtcclxuXHJcbiAgdGVtcGVyYXR1cmVzRGl2LmFwcGVuZChoaWdoRGl2LCBsb3dEaXYpO1xyXG5cclxuICBjb25zdCBjb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb3JEaXYuY2xhc3NMaXN0LmFkZCgnY2hhbmNlLW9mLXJhaW4nKTtcclxuICBjb25zdCBjb3JJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29ySWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckljb25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicsICd3aGl0ZS1maWx0ZXInKTtcclxuICBjb3JJY29uSW1nLnNyYyA9ICcuL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvZHJvcGxldC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGNvckljb25EaXYuYXBwZW5kQ2hpbGQoY29ySWNvbkltZyk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKGNvckljb25EaXYpO1xyXG5cclxuICBjb25zdCBwZXJjZW50YWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwZXJjZW50YWdlLmNsYXNzTGlzdC5hZGQoJ3BlcmNlbnRhZ2UnKTtcclxuICBwZXJjZW50YWdlLnRleHRDb250ZW50ID0gYCR7Y29yfSVgO1xyXG4gIHBlcmNlbnRhZ2VEaXYuYXBwZW5kQ2hpbGQocGVyY2VudGFnZSk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VEaXYpO1xyXG5cclxuICBjb25zdCBudW1iZXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbnVtYmVyc0Rpdi5jbGFzc0xpc3QuYWRkKCdudW1iZXJzJyk7XHJcbiAgbnVtYmVyc0Rpdi5hcHBlbmQodGVtcGVyYXR1cmVzRGl2LCBjb3JEaXYpO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQobnVtYmVyc0Rpdik7XHJcblxyXG4gIGZvcmVjYXN0QmFyLmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gZm9yZWNhc3RCYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZTNEYXlGb3JlY2FzdCgpIHtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCd0aHJlZS1kYXktZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICdzbWFsbCcpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZS50ZXh0Q29udGVudCA9ICczLURheSBGb3JlY2FzdCc7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2LmFwcGVuZENoaWxkKHRocmVlRGF5Rm9yZWNhc3RUaXRsZSk7XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuY2xhc3NMaXN0LmFkZCgndGhyZWUtZGF5LWZvcmVjYXN0LWxpc3QnKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aHJlZURheUZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICB0aHJlZURheUZvcmVjYXN0LmFwcGVuZCh0aHJlZURheUZvcmVjYXN0VGl0bGVEaXYsIHRocmVlRGF5Rm9yZWNhc3RMaXN0KTtcclxuXHJcbiAgcmV0dXJuIHRocmVlRGF5Rm9yZWNhc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQocXVlcnkpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGhyZWUtZGF5LWZvcmVjYXN0LWxpc3QnKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgaGlnaCA9IE1hdGguZmxvb3IocXVlcnkudGhyZWVEYXlGb3JlY2FzdC5oaWdoW2ldKTtcclxuICAgIGNvbnN0IGxvdyA9IE1hdGguZmxvb3IocXVlcnkudGhyZWVEYXlGb3JlY2FzdC5sb3dbaV0pO1xyXG4gICAgY29uc3QgZGF5ID0gcXVlcnkudGhyZWVEYXlGb3JlY2FzdC5kYXlzW2ldO1xyXG4gICAgY29uc3QgY29yID0gcXVlcnkudGhyZWVEYXlGb3JlY2FzdC5jb3JbaV07XHJcbiAgICBjb25zdCBkZXNjID0gcXVlcnkudGhyZWVEYXlGb3JlY2FzdC53ZWF0aGVyRGVzY3JpcHRpb25baV07XHJcbiAgICBjb25zdCBpY29uID0gZmV0Y2hXZWF0aGVySWNvbihxdWVyeS50aHJlZURheUZvcmVjYXN0LndlYXRoZXJDb2RlW2ldLCAxKTtcclxuICAgIGNvbnN0IGJhciA9IGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoaGlnaCwgbG93LCBkYXksIGNvciwgZGVzYywgaWNvbik7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhcik7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVDYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGhyZWUtZGF5LWZvcmVjYXN0LWxpc3QnKVswXTtcclxuICB0aHJlZURheUZvcmVDYXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIHRocmVlRGF5Rm9yZUNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWRkaXRpb25hbEZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdhZGRpdGlvbmFsLWZvcmVjYXN0JztcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBjcmVhdGVIb3VybHlGb3JlY2FzdCgpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBjcmVhdGUzRGF5Rm9yZWNhc3QoKTtcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmQoaG91cmx5Rm9yZWNhc3QsIHRocmVlRGF5Rm9yZWNhc3QpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBjb252ZXJ0VFosIGZldGNoV2VhdGhlckljb24gfSBmcm9tICcuL2ZldGNoLXdlYXRoZXInO1xyXG5cclxuZnVuY3Rpb24gcHJpbnRPdXRIaWdoKHF1ZXJ5KSB7XHJcbiAgY29uc3QgaGlnaCA9IE1hdGguZmxvb3IocXVlcnkuY3VycmVudFdlYXRoZXIuZGFpbHlIaWdoKTtcclxuICByZXR1cm4gYCR7aGlnaH3CsGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0TG93KHF1ZXJ5KSB7XHJcbiAgY29uc3QgbG93ID0gTWF0aC5mbG9vcihxdWVyeS5jdXJyZW50V2VhdGhlci5kYWlseUxvdyk7XHJcbiAgcmV0dXJuIGAke2xvd33CsGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0Q3VycmVudFRlbXAocXVlcnkpIHtcclxuICBjb25zdCB0ZW1wID0gTWF0aC5mbG9vcihxdWVyeS5jdXJyZW50V2VhdGhlci5jdXJyZW50VGVtcCk7XHJcbiAgcmV0dXJuIGAke3RlbXB9wrBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dENpdHkocXVlcnkpIHtcclxuICByZXR1cm4gcXVlcnkuY2l0eU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50T3V0RGVzY3JpcHRpb24ocXVlcnkpIHtcclxuICByZXR1cm4gcXVlcnkuY3VycmVudFdlYXRoZXIud2VhdGhlckRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludE91dFdlYXRoZXJJY29uKHF1ZXJ5KSB7XHJcbiAgY29uc3QgbG9jYWxIb3VyID0gY29udmVydFRaKG5ldyBEYXRlKCksIHF1ZXJ5LnRpbWV6b25lKS5nZXRIb3VycygpO1xyXG4gIGNvbnN0IGNvZGUgPSBxdWVyeS5ob3VybHkud2VhdGhlcmNvZGVbbG9jYWxIb3VyXTtcclxuICBjb25zdCB2YWx1ZSA9IHF1ZXJ5LmhvdXJseS5pc19kYXlbbG9jYWxIb3VyXTtcclxuXHJcbiAgcmV0dXJuIGZldGNoV2VhdGhlckljb24oY29kZSwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0KHF1ZXJ5KSB7XHJcbiAgY29uc3QgY3VycmVudENpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1jaXR5Jyk7XHJcbiAgY3VycmVudENpdHkudGV4dENvbnRlbnQgPSBwcmludE91dENpdHkocXVlcnkpO1xyXG5cclxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXRlbXAnKTtcclxuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IHByaW50T3V0Q3VycmVudFRlbXAocXVlcnkpO1xyXG5cclxuICBjb25zdCBkYWlseUhpZ2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1oaWdoJyk7XHJcbiAgZGFpbHlIaWdoLnRleHRDb250ZW50ID0gcHJpbnRPdXRIaWdoKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgZGFpbHlMb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1sb3cnKTtcclxuICBkYWlseUxvdy50ZXh0Q29udGVudCA9IHByaW50T3V0TG93KHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdC1kZXNjcmlwdGlvbicpO1xyXG4gIGZvcmVjYXN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcmludE91dERlc2NyaXB0aW9uKHF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtd2VhdGhlcicpO1xyXG4gIGN1cnJlbnRXZWF0aGVySWNvbi5zcmMgPSBwcmludE91dFdlYXRoZXJJY29uKHF1ZXJ5KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ3VycmVudEZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdjdXJyZW50LWZvcmVjYXN0JztcclxuXHJcbiAgY29uc3QgY3VycmVudENpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50Q2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY3VycmVudENpdHkuaWQgPSAnY3VycmVudC1jaXR5JztcclxuICBjdXJyZW50Q2l0eURpdi5hcHBlbmRDaGlsZChjdXJyZW50Q2l0eSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY3VycmVudERldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGV0YWlscycpO1xyXG5cclxuICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY3VycmVudFdlYXRoZXJJbWcuaWQgPSAnY3VycmVudC13ZWF0aGVyJztcclxuICBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckltZyk7XHJcblxyXG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCdib3R0b20nKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdsYXJnZScsICd0ZW1wJyk7XHJcbiAgY3VycmVudFRlbXAuaWQgPSAnY3VycmVudC10ZW1wJztcclxuICBjdXJyZW50VGVtcERpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XHJcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRGl2KTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGZvcmVjYXN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uLmlkID0gJ2ZvcmVjYXN0LWRlc2NyaXB0aW9uJztcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGVzY3JpcHRpb24pO1xyXG4gIGJvdHRvbURpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgY29uc3QgaGlnaExvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhpZ2hMb3dEaXYuY2xhc3NMaXN0LmFkZCgnaGlnaC1sb3cnKTtcclxuXHJcbiAgY29uc3QgaGlnaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhpZ2hQLnRleHRDb250ZW50ID0gJ0g6ICc7XHJcblxyXG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaGlnaC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgaGlnaC5pZCA9ICdjdXJyZW50LWhpZ2gnO1xyXG4gIGhpZ2hQLmFwcGVuZENoaWxkKGhpZ2gpO1xyXG4gIGhpZ2hEaXYuYXBwZW5kQ2hpbGQoaGlnaFApO1xyXG5cclxuICBjb25zdCBsb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxvd1AudGV4dENvbnRlbnQgPSAnTDogJztcclxuXHJcbiAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGxvdy5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgbG93LmlkID0gJ2N1cnJlbnQtbG93JztcclxuICBsb3dQLmFwcGVuZENoaWxkKGxvdyk7XHJcbiAgbG93RGl2LmFwcGVuZENoaWxkKGxvd1ApO1xyXG5cclxuICBoaWdoTG93RGl2LmFwcGVuZChoaWdoRGl2LCBsb3dEaXYpO1xyXG4gIGJvdHRvbURpdi5hcHBlbmRDaGlsZChoaWdoTG93RGl2KTtcclxuXHJcbiAgY3VycmVudERldGFpbHNEaXYuYXBwZW5kKGN1cnJlbnRXZWF0aGVyRGl2LCBib3R0b21EaXYpO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZChjdXJyZW50Q2l0eURpdiwgY3VycmVudERldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJmdW5jdGlvbiBqb2luUXVlcnkocXVlcnkpIHtcclxuICBjb25zdCBuZXdRdWVyeSA9IHF1ZXJ5LnNwbGl0KCcsICcpLmpvaW4oKTtcclxuICByZXR1cm4gbmV3UXVlcnk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQnlQb3N0YWxDb2RlKHF1ZXJ5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3ppcD96aXA9JHtxdWVyeX0mYXBwaWQ9OGRkNDQ3ZjBlZmFlODMyNGYxNWMyNGYyZWZkZDdlOWZgLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9LCAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gcmV0dXJuIGVycm9yXHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0J5Q2l0eShxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3F1ZXJ5fSZsaW1pdD01JmFwcGlkPThkZDQ0N2YwZWZhZTgzMjRmMTVjMjRmMmVmZGQ3ZTlmYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIHJldHVybiBlcnJvclxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2hlY2tRdWVyeShxdWVyeSkge1xyXG4gIC8vIGJyZWFrIHVwIHF1ZXJ5IGludG8gY29ycmVjdCBwYXJ0cyAoZWcuIGNpdHksIHN0YXRlLCBjb3VudHJ5LCB6aXAgY29kZSlcclxuICBjb25zdCBzZWFyY2hRdWVyeSA9IGpvaW5RdWVyeShxdWVyeSk7XHJcbiAgY29uc3QgcG9zdGFsQ29kZVJlc3VsdCA9IGF3YWl0IGNoZWNrQnlQb3N0YWxDb2RlKHNlYXJjaFF1ZXJ5KTtcclxuICBjb25zdCBjaXR5UmVzdWx0ID0gYXdhaXQgY2hlY2tCeUNpdHkoc2VhcmNoUXVlcnkpO1xyXG5cclxuICBpZiAoIShwb3N0YWxDb2RlUmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIHBvc3RhbENvZGVSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcblxyXG4gICAgcmV0dXJuIHBvc3RhbENvZGVSZXN1bHQ7XHJcbiAgfSBpZiAoIShjaXR5UmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIGNpdHlSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcblxyXG4gICAgcmV0dXJuIGNpdHlSZXN1bHQ7XHJcbiAgfVxyXG4gIC8vIGRpc3BsYXkgYW4gZXJyb3IgdGhhdCB0aGUgc2VhcmNoIHF1ZXJ5IHdhcyBub3QgZm91bmQgYWxvbmcgd2l0aCBzZWFyY2ggdGlwc1xyXG5cclxuICByZXR1cm4gYE5vIHJlc3VsdHMgZm91bmQgZm9yICcke3F1ZXJ5fSdgO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VFooZGF0ZSwgdHpTdHJpbmcpIHtcclxuICByZXR1cm4gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7IHRpbWVab25lOiB0elN0cmluZyB9KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RlRvQyh0ZW1wKSB7XHJcbiAgcmV0dXJuICh0ZW1wIC0gMzIpICogKDUgLyA5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoV2VhdGhlckljb24oY29kZSwgaXNEYXkpIHtcclxuICBsZXQgc3JjO1xyXG4gIGNvbnN0IHN0cmluZyA9ICcuL3NyYy9hc3NldHMvaW1hZ2VzL3dlYXRoZXItaWNvbnMvJztcclxuICBzd2l0Y2ggKGNvZGUpIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgaWYgKGlzRGF5ID09PSAxKSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfWNsZWFyLXNreS1zdW5ueS5zdmdgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31jbGVhci1za3ktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBpZiAoaXNEYXkgPT09IDEpIHtcclxuICAgICAgICBzcmMgPSBgJHtzdHJpbmd9bW9zdGx5LWNsZWFyLXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfW1vc3RseS1jbGVhci1tb29uLnN2Z2A7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIGlmIChpc0RheSA9PT0gMSkge1xyXG4gICAgICAgIHNyYyA9IGAke3N0cmluZ31wYXJ0bHktY2xvdWR5LXN1bm55LnN2Z2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3JjID0gYCR7c3RyaW5nfXBhcnRseS1jbG91ZHktbW9vbi5zdmdgO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAzOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9b3ZlcmNhc3Quc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDQ1OlxyXG4gICAgY2FzZSA0ODpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfWZvZy5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNTE6XHJcbiAgICBjYXNlIDUzOlxyXG4gICAgY2FzZSA1NTpcclxuICAgIGNhc2UgNTY6XHJcbiAgICBjYXNlIDU3OlxyXG4gICAgY2FzZSA4MDpcclxuICAgIGNhc2UgODE6XHJcbiAgICBjYXNlIDgyOlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9ZHJpenpsZS5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNjE6XHJcbiAgICBjYXNlIDYzOlxyXG4gICAgY2FzZSA2NTpcclxuICAgIGNhc2UgNjY6XHJcbiAgICBjYXNlIDY3OlxyXG4gICAgICBzcmMgPSBgJHtzdHJpbmd9cmFpbi5zdmdgO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNzE6XHJcbiAgICBjYXNlIDczOlxyXG4gICAgY2FzZSA3NTpcclxuICAgIGNhc2UgNzc6XHJcbiAgICBjYXNlIDg1OlxyXG4gICAgY2FzZSA4NjpcclxuICAgICAgc3JjID0gYCR7c3RyaW5nfXNub3cuc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDk1OlxyXG4gICAgY2FzZSA5NjpcclxuICAgIGNhc2UgOTk6XHJcbiAgICAgIHNyYyA9IGAke3N0cmluZ310aHVuZGVyc3Rvcm0uc3ZnYDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBzcmM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXJEZXNjcmlwdGlvbihjb2RlKSB7XHJcbiAgY29uc3Qgd2VhdGhlckNvZGVzID0ge1xyXG4gICAgMDogJ0NsZWFyIFNreScsXHJcbiAgICAxOiAnTWFpbmx5IENsZWFyJyxcclxuICAgIDI6ICdQYXJ0bHkgQ2xvdWR5JyxcclxuICAgIDM6ICdPdmVyY2FzdCcsXHJcbiAgICA0NTogJ0ZvZycsXHJcbiAgICA0ODogJ0RlcG9zaXRpbmcgUmltZSBGb2cnLFxyXG4gICAgNTE6ICdMaWdodCBEcml6emxlJyxcclxuICAgIDUzOiAnTW9kZXJhdGUgRHJpenpsZScsXHJcbiAgICA1NTogJ0RlbnNlIERyaXp6bGUnLFxyXG4gICAgNTY6ICdGcmVlemluZywgTGlnaHQgRHJpenpsZScsXHJcbiAgICA1NzogJ0ZyZWV6aW5nLCBEZW5zZSBEcml6emxlJyxcclxuICAgIDYxOiAnTGlnaHQgUmFpbicsXHJcbiAgICA2MzogJ01vZGVyYXRlIFJhaW4nLFxyXG4gICAgNjU6ICdIZWF2eSBSYWluJyxcclxuICAgIDY2OiAnRnJlZXppbmcsIExpZ2h0IFJhaW4nLFxyXG4gICAgNjc6ICdGcmVlemluZywgSGVhdnkgUmFpbicsXHJcbiAgICA3MTogJ0xpZ2h0IFNub3cnLFxyXG4gICAgNzM6ICdNb2RlcmF0ZSBTbm93JyxcclxuICAgIDc1OiAnSGVhdnkgU25vdycsXHJcbiAgICA3NzogJ1Nub3cgR3JhaW5zJyxcclxuICAgIDgwOiAnTGlnaHQgU2hvd2VycycsXHJcbiAgICA4MTogJ01vZGVyYXRlIFNob3dlcnMnLFxyXG4gICAgODI6ICdIZWF2eSBTaG93ZXJzJyxcclxuICAgIDg1OiAnTGlnaHQgU25vdyBTaG93ZXInLFxyXG4gICAgODY6ICdIZWF2eSBTbm93IFNob3dlcicsXHJcbiAgICA5NTogJ1RodW5kZXJzdG9ybScsXHJcbiAgICA5NjogJ1RodW5kZXJzdG9ybSBhbmQgTGlnaHQgSGFpbCcsXHJcbiAgICA5OTogJ1RodW5kZXJzdG9ybSBhbmQgSGVhdnkgSGFpbCcsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJDb2Rlc1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF5KGNvZGUpIHtcclxuICBjb25zdCBkYXlzID0ge1xyXG4gICAgMDogJ1N1bmRheScsXHJcbiAgICAxOiAnTW9uZGF5JyxcclxuICAgIDI6ICdUdWVzZGF5JyxcclxuICAgIDM6ICdXZWRuZXNkYXknLFxyXG4gICAgNDogJ1RodXJzZGF5JyxcclxuICAgIDU6ICdGcmlkYXknLFxyXG4gICAgNjogJ1NhdHVyZGF5JyxcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGF5c1tjb2RlXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBjdXJyZW50SG91ciA9IGNvbnZlcnRUWihuZXcgRGF0ZSgpLCBxdWVyeS50aW1lem9uZSkuZ2V0SG91cnMoKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IHF1ZXJ5LmhvdXJseS50ZW1wZXJhdHVyZV8ybVtjdXJyZW50SG91cl07XHJcbiAgY29uc3QgZGFpbHlIaWdoID0gcXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWF4WzBdO1xyXG4gIGNvbnN0IGRhaWx5TG93ID0gcXVlcnkuZGFpbHkudGVtcGVyYXR1cmVfMm1fbWluWzBdO1xyXG4gIGNvbnN0IHdlYXRoZXJDb2RlID0gcXVlcnkuaG91cmx5LndlYXRoZXJjb2RlW2N1cnJlbnRIb3VyXTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBnZXRXZWF0aGVyRGVzY3JpcHRpb24od2VhdGhlckNvZGUpO1xyXG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBxdWVyeS5ob3VybHkucHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eVtjdXJyZW50SG91cl07XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBxdWVyeS5ob3VybHkucmVsYXRpdmVodW1pZGl0eV8ybVtjdXJyZW50SG91cl07XHJcbiAgY29uc3Qgd2luZCA9IHF1ZXJ5LmhvdXJseS53aW5kc3BlZWRfMTBtW2N1cnJlbnRIb3VyXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGN1cnJlbnRUZW1wLCBkYWlseUhpZ2gsIGRhaWx5TG93LCB3ZWF0aGVyRGVzY3JpcHRpb24sIHByZWNpcGl0YXRpb24sIGh1bWlkaXR5LCB3aW5kLFxyXG4gIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQ3VycmVudFdlYXRoZXIocXVlcnkpIHtcclxuICBjb25zdCBsYXRpdHVkZSA9IHF1ZXJ5LmxhdDtcclxuICBjb25zdCBsb25naXR1ZGUgPSBxdWVyeS5sb247XHJcbiAgY29uc3QgY2l0eU5hbWUgPSBxdWVyeS5uYW1lO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9JHtsYXRpdHVkZX0mbG9uZ2l0dWRlPSR7bG9uZ2l0dWRlfSZob3VybHk9dGVtcGVyYXR1cmVfMm0scHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eSxyZWxhdGl2ZWh1bWlkaXR5XzJtLHdlYXRoZXJjb2RlLHdpbmRzcGVlZF8xMG0saXNfZGF5JmRhaWx5PXdlYXRoZXJjb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sdXZfaW5kZXhfbWF4LHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4JnRlbXBlcmF0dXJlX3VuaXQ9ZmFocmVuaGVpdCZ3aW5kc3BlZWRfdW5pdD1tcGgmcHJlY2lwaXRhdGlvbl91bml0PWluY2gmdGltZXpvbmU9YXV0b2ApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIocmVzdWx0KTtcclxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0geyBjaXR5TmFtZSwgLi4ucmVzdWx0LCBjdXJyZW50V2VhdGhlciB9O1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGVmYXVsdExvY2F0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9sYXRpdHVkZT01MS41MDg1JmxvbmdpdHVkZT0tMC4xMjU3JmhvdXJseT10ZW1wZXJhdHVyZV8ybSxwcmVjaXBpdGF0aW9uX3Byb2JhYmlsaXR5LHJlbGF0aXZlaHVtaWRpdHlfMm0sd2VhdGhlcmNvZGUsd2luZHNwZWVkXzEwbSxpc19kYXkmZGFpbHk9d2VhdGhlcmNvZGUsdGVtcGVyYXR1cmVfMm1fbWF4LHRlbXBlcmF0dXJlXzJtX21pbix1dl9pbmRleF9tYXgscHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXgmdGVtcGVyYXR1cmVfdW5pdD1mYWhyZW5oZWl0JndpbmRzcGVlZF91bml0PW1waCZwcmVjaXBpdGF0aW9uX3VuaXQ9aW5jaCZ0aW1lem9uZT1hdXRvJyk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIocmVzdWx0KTtcclxuICAgIGNvbnN0IGNpdHlOYW1lID0gJ0xvbmRvbic7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHsgY2l0eU5hbWUsIC4uLnJlc3VsdCwgY3VycmVudFdlYXRoZXIgfTtcclxuXHJcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRocmVlRGF5Rm9yZWNhc3QocXVlcnkpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xyXG4gIGNvbnN0IGhpZ2ggPSBbXTtcclxuICBjb25zdCBsb3cgPSBbXTtcclxuICBjb25zdCBjb3IgPSBbXTtcclxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBbXTtcclxuICBjb25zdCB3ZWF0aGVyQ29kZSA9IFtdO1xyXG4gIGNvbnN0IGRheXMgPSBbXTtcclxuICAvLyBnZXQgdGVtcHNcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkgKz0gMSkge1xyXG4gICAgaGlnaC5wdXNoKHF1ZXJ5LmRhaWx5LnRlbXBlcmF0dXJlXzJtX21heFtpXSk7XHJcbiAgICBsb3cucHVzaChxdWVyeS5kYWlseS50ZW1wZXJhdHVyZV8ybV9taW5baV0pO1xyXG4gICAgY29yLnB1c2gocXVlcnkuZGFpbHkucHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXhbaV0pO1xyXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLnB1c2goZ2V0V2VhdGhlckRlc2NyaXB0aW9uKHF1ZXJ5LmRhaWx5LndlYXRoZXJjb2RlW2ldKSk7XHJcbiAgICB3ZWF0aGVyQ29kZS5wdXNoKHF1ZXJ5LmRhaWx5LndlYXRoZXJjb2RlW2ldKTtcclxuICB9XHJcbiAgLy8gYXNzaWduIGRheXNcclxuICBmb3IgKGxldCBpID0gZGF5ICsgMTsgaSA8IChkYXkgKyA0KTsgaSArPSAxKSB7XHJcbiAgICBkYXlzLnB1c2goZ2V0RGF5KGkgJSA3KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaGlnaCwgbG93LCBjb3IsIGRheXMsIHdlYXRoZXJEZXNjcmlwdGlvbiwgd2VhdGhlckNvZGUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGVmYXVsdFdlYXRoZXIoKSB7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGVmYXVsdExvY2F0aW9uKCk7XHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdCA9IGF3YWl0IGdldFRocmVlRGF5Rm9yZWNhc3QoY3VycmVudFdlYXRoZXJEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgLi4uY3VycmVudFdlYXRoZXJEYXRhLCB0aHJlZURheUZvcmVjYXN0IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcihxdWVyeSkge1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoQ3VycmVudFdlYXRoZXIocXVlcnkpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBhd2FpdCBnZXRUaHJlZURheUZvcmVjYXN0KGN1cnJlbnRXZWF0aGVyRGF0YSk7XHJcblxyXG4gIHJldHVybiB7IC4uLmN1cnJlbnRXZWF0aGVyRGF0YSwgdGhyZWVEYXlGb3JlY2FzdCB9O1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVDdXJyZW50Rm9yZWNhc3QsIHsgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9jdXJyZW50LWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjcmVhdGVNb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscywgeyB1cGRhdGVBZGRpdGlvbmFsQ3VycmVudEZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0JztcclxuaW1wb3J0IGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCwgeyB1cGRhdGUzRGF5Rm9yZWNhc3RMYXlvdXQsIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0IH0gZnJvbSAnLi9hZGRpdGlvbmFsLWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjaGVja1F1ZXJ5IGZyb20gJy4vZmV0Y2gtY2l0aWVzJztcclxuaW1wb3J0IGZldGNoV2VhdGhlciwgeyBjb252ZXJ0RlRvQywgZmV0Y2hEZWZhdWx0V2VhdGhlciB9IGZyb20gJy4vZmV0Y2gtd2VhdGhlcic7XHJcblxyXG5sZXQgdGVtcERhdGEgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyVGlwcygpIHtcclxuICBjb25zdCB0aXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlwcy1jb250YWluZXInKVswXTtcclxuICB0aXBzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaXR5UmVzdWx0VGV4dChyZXN1bHQpIHtcclxuICBpZiAocmVzdWx0LnppcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjaXR5TmFtZSA9IHJlc3VsdC5uYW1lO1xyXG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcmVzdWx0O1xyXG4gICAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXN1bHQ7XHJcblxyXG4gICAgcmV0dXJuIGAke2NpdHlOYW1lfSwgJHtzdGF0ZX0sICR7Y291bnRyeX1gO1xyXG4gIH1cclxuICBjb25zdCB7IHppcCB9ID0gcmVzdWx0O1xyXG4gIGNvbnN0IGNpdHlOYW1lID0gcmVzdWx0Lm5hbWU7XHJcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSByZXN1bHQ7XHJcblxyXG4gIHJldHVybiBgJHt6aXB9LCAke2NpdHlOYW1lfSwgJHtjb3VudHJ5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVF1ZXJ5UmVzdWx0KHNlYXJjaFJlc3VsdCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbG9jYXRpb24tbWFya2VyLnN2Zyc7XHJcbiAgbG9jYXRpb25JY29uLmFwcGVuZENoaWxkKGljb24pO1xyXG5cclxuICBjb25zdCB0ZXh0UmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGV4dFJlc3VsdC50ZXh0Q29udGVudCA9IGNyZWF0ZUNpdHlSZXN1bHRUZXh0KHNlYXJjaFJlc3VsdCk7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gIHJlc3VsdC5hcHBlbmQobG9jYXRpb25JY29uLCB0ZXh0UmVzdWx0KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGlwKHRleHQpIHtcclxuICBjb25zdCB0aXBJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aXBJbWdEaXYuY2xhc3NMaXN0LmFkZCgndGlwLWltZycpO1xyXG4gIGNvbnN0IHRpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHRpcEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3RpcC5zdmcnO1xyXG4gIHRpcEltZ0Rpdi5hcHBlbmRDaGlsZCh0aXBJbWcpO1xyXG5cclxuICBjb25zdCB0aXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xyXG4gIHRpcERpdi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgY29uc3QgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwLmNsYXNzTGlzdC5hZGQoJ3RpcCcpO1xyXG4gIHRpcC5hcHBlbmQodGlwSW1nRGl2LCB0aXBEaXYpO1xyXG5cclxuICByZXR1cm4gdGlwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2VhcmNoRXJyb3IoaW5wdXQpIHtcclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cy1jb250YWluZXInKVswXTtcclxuICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ21lZGl1bScpO1xyXG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHtpbnB1dH1gO1xyXG4gIG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcblxyXG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlZmluZVN1Z2dlc3Rpb25zKCkge1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NtYWxsJyk7XHJcbiAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnVHJ5IHRoZSBmb2xsb3dpbmcgdGlwcyBmb3IgbW9yZSBhY2N1cmF0ZSByZXN1bHRzOic7XHJcblxyXG4gIGNvbnN0IHRleHRPbmUgPSAnRW50ZXIgY2l0eSBhbmQgY291bnRyeSBjb2RlIChlZy4gRXNzZXgsIEdCKSc7XHJcbiAgY29uc3QgdGlwT25lID0gY3JlYXRlVGlwKHRleHRPbmUpO1xyXG5cclxuICBjb25zdCB0ZXh0VHdvID0gJ0ZvciBVUyBjaXRpZXMsIGVudGVyIGNpdHkgbmFtZSwgc3RhdGUsIGFuZCBjb3VudHJ5IGNvZGUgKGVnLiBFc3NleCwgTUEsIFVTKSc7XHJcbiAgY29uc3QgdGlwVHdvID0gY3JlYXRlVGlwKHRleHRUd28pO1xyXG5cclxuICBjb25zdCB0aXBzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGlwcy1jb250YWluZXInKVswXTtcclxuICB0aXBzQ29udGFpbmVyLmFwcGVuZChoZWFkbGluZSwgdGlwT25lLCB0aXBUd28pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hTdWdnZXN0aW9ucygpIHtcclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnYm9sZCcsICdzbWFsbCcpO1xyXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1RyeSB0aGUgZm9sbG93aW5nIHRpcHMgdG8gcmVmaW5lIHlvdXIgc2VhcmNoOic7XHJcblxyXG4gIGNvbnN0IHRleHRPbmUgPSAnRW5zdXJlIHRoZSBzcGVsbGluZyBvZiB5b3VyIHNlYXJjaCBxdWVyeSBpcyBjb3JyZWN0JztcclxuICBjb25zdCB0aXBPbmUgPSBjcmVhdGVUaXAodGV4dE9uZSk7XHJcblxyXG4gIGNvbnN0IHRleHRUd28gPSAnRm9yIGNpdGllcyBpbiB0aGUgVVMsIGVudGVyIGNpdHkgZm9sbG93ZWQgYnkgc3RhdGUgYW5kIGNvdW50cnkgY29kZSAoZWcuIExvcyBBbmdlbGVzLCBDQSwgVVMpJztcclxuICBjb25zdCB0aXBUd28gPSBjcmVhdGVUaXAodGV4dFR3byk7XHJcblxyXG4gIGNvbnN0IHRleHRUaHJlZSA9ICdGb3IgY2l0aWVzIG91dHNpZGUgdGhlIFVTLCBlbnRlciBjaXR5IGZvbGxvd2VkIGJ5IGNvdW50cnkgY29kZSAoZWcuIExvbmRvbiwgR0IpJztcclxuICBjb25zdCB0aXBUaHJlZSA9IGNyZWF0ZVRpcCh0ZXh0VGhyZWUpO1xyXG5cclxuICBjb25zdCB0ZXh0Rm91ciA9ICdUbyBzZWFyY2ggYnkgcG9zdGFsL3ppcCBjb2RlLCBlbnRlciBwb3N0YWwvemlwIGNvZGUgZm9sbG93ZWQgYnkgY291bnRyeSBjb2RlIChlZy4gMzM3MDEsIFVTKSc7XHJcbiAgY29uc3QgdGlwRm91ciA9IGNyZWF0ZVRpcCh0ZXh0Rm91cik7XHJcblxyXG4gIGNvbnN0IHRpcHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXBzLWNvbnRhaW5lcicpWzBdO1xyXG4gIHRpcHNDb250YWluZXIuYXBwZW5kKGhlYWRsaW5lLCB0aXBPbmUsIHRpcFR3bywgdGlwVGhyZWUsIHRpcEZvdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hJbnN0cnVjdGlvbnMoKSB7XHJcbiAgY29uc3QgdGV4dE9uZSA9ICdUbyBzZWFyY2ggZm9yIGNpdHkgaW4gdGhlIFVTLCBlbnRlciBjaXR5LCBzdGF0ZSwgYW5kIGNvdW50cnkgY29kZSAoZWcuIFBob2VuaXgsIEFaLCBVUyknO1xyXG4gIGNvbnN0IHRpcE9uZSA9IGNyZWF0ZVRpcCh0ZXh0T25lKTtcclxuXHJcbiAgY29uc3QgdGV4dFR3byA9ICdUbyBzZWFyY2ggZm9yIGNpdHkgb3V0c2lkZSBVUywgZW50ZXIgY2l0eSBhbmQgY291bnRyeSBjb2RlIChlZy4gTG9uZG9uLCBHQiknO1xyXG4gIGNvbnN0IHRpcFR3byA9IGNyZWF0ZVRpcCh0ZXh0VHdvKTtcclxuXHJcbiAgY29uc3QgdGV4dFRocmVlID0gJ1lvdSBjYW4gYWxzbyBzZWFyY2ggYnkgcG9zdGFsL3ppcCBjb2RlIGZvbGxvd2VkIGJ5IGNvdW50cnkgY29kZSAoZWcuIDMzNzAxLCBVUyknO1xyXG4gIGNvbnN0IHRpcFRocmVlID0gY3JlYXRlVGlwKHRleHRUaHJlZSk7XHJcblxyXG4gIGNvbnN0IHRleHRGb3VyID0gJ1VzZSA8YSBocmVmPVxcJ2h0dHBzOi8vd3d3Lmlzby5vcmcvb2JwL3VpLyNzZWFyY2hcXCcgdGFyZ2V0PVxcJ19ibGFua1xcJz5JU08gMzE2NiBjb3VudHJ5IGNvZGVzPC9hPiB3aGVuIHNlYXJjaGluZyBieSBjb3VudHJ5JztcclxuICBjb25zdCB0aXBGb3VyID0gY3JlYXRlVGlwKHRleHRGb3VyKTtcclxuXHJcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoJ3RpcHMtY29udGFpbmVyJyk7XHJcbiAgaW5zdHJ1Y3Rpb25zLmFwcGVuZCh0aXBPbmUsIHRpcFR3bywgdGlwVGhyZWUsIHRpcEZvdXIpO1xyXG5cclxuICByZXR1cm4gaW5zdHJ1Y3Rpb25zO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTZWFyY2hNb2RhbCgpIHtcclxuICBjb25zdCBtb2JpbGVTZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaC1tb2RhbCcpWzBdO1xyXG4gIGlmIChtb2JpbGVTZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICBtb2JpbGVTZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGNvbnN0IG91dHB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpcHMtY29udGFpbmVyJylbMF07XHJcbiAgICBvdXRwdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoSW5zdHJ1Y3Rpb25zKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LW1vYmlsZScpO1xyXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNsZWFyVGlwcygpO1xyXG4gICAgbW9iaWxlU2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTZXR0aW5nc01vZGFsKCkge1xyXG4gIGNvbnN0IHNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2JpbGUtc2V0dGluZ3MtbW9kYWwnKVswXTtcclxuICBpZiAoc2V0dGluZ3NNb2RhbC5pZCA9PT0gJ2hpZGRlbicpIHtcclxuICAgIHNldHRpbmdzTW9kYWwuaWQgPSAnJztcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0dGluZ3NNb2RhbC5pZCA9ICdoaWRkZW4nO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlR3JpZENvbnRhaW5lcihzdGF0ZSkge1xyXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdncmlkLWNvbnRhaW5lcicpWzBdO1xyXG5cclxuICBpZiAoc3RhdGUpIHtcclxuICAgIGdyaWRDb250YWluZXIuaWQgPSAnaGlkZGVuJztcclxuICB9IGVsc2Uge1xyXG4gICAgZ3JpZENvbnRhaW5lci5pZCA9ICcnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlUGFnZUxvYWRpbmdBbmltYXRpb24oc3RhdGUpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcclxuXHJcbiAgaWYgKHN0YXRlKSB7XHJcbiAgICBjb25zdCBsb2FkaW5nQW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2FkaW5nQW5pbWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicsICdhYnNvbHV0ZScpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2FkaW5nQW5pbWF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRlcicpWzBdO1xyXG4gICAgbG9hZGluZ0FuaW1hdGlvbi5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVNlYXJjaExvYWRpbmdBbmltYXRpb24oc3RhdGUpIHtcclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVzdWx0cy1jb250YWluZXInKVswXTtcclxuXHJcbiAgaWYgKHN0YXRlKSB7XHJcbiAgICBjb25zdCBsb2FkaW5nQW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2FkaW5nQW5pbWF0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicpO1xyXG4gICAgcmVzdWx0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkaW5nQW5pbWF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGF5RGlzcGxheWluZ0dyaWQocmVzdWx0KSB7XHJcbiAgdG9nZ2xlUGFnZUxvYWRpbmdBbmltYXRpb24oZmFsc2UpO1xyXG4gIHRvZ2dsZUdyaWRDb250YWluZXIoZmFsc2UpO1xyXG4gIHVwZGF0ZUN1cnJlbnRGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gIHVwZGF0ZUFkZGl0aW9uYWxDdXJyZW50Rm9yZWNhc3RMYXlvdXQocmVzdWx0KTtcclxuICB1cGRhdGVIb3VybHlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gIHVwZGF0ZTNEYXlGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclJlc3VsdHMoKSB7XHJcbiAgY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Jlc3VsdHMtY29udGFpbmVyJylbMF07XHJcbiAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNlYXJjaFJlc3VsdHMocmVzdWx0cykge1xyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXN1bHRzLWNvbnRhaW5lcicpWzBdO1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRzKSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVzdWx0c1tpXTtcclxuICAgICAgY29uc3QgcXVlcnlSZXN1bHQgPSBjcmVhdGVRdWVyeVJlc3VsdChxdWVyeSk7XHJcbiAgICAgIHF1ZXJ5UmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZVNlYXJjaE1vZGFsKCk7XHJcbiAgICAgICAgLy8gY2FsbCB0aGUgZmV0Y2ggd2VhdGhlciBmdW5jdGlvblxyXG4gICAgICAgIHRvZ2dsZUdyaWRDb250YWluZXIodHJ1ZSk7XHJcbiAgICAgICAgdG9nZ2xlUGFnZUxvYWRpbmdBbmltYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hXZWF0aGVyKHF1ZXJ5KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRlbGF5RGlzcGxheWluZ0dyaWQsIDUwMCwgcmVzdWx0KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXN1bHRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXJ5UmVzdWx0KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcXVlcnlSZXN1bHQgPSBjcmVhdGVRdWVyeVJlc3VsdChyZXN1bHRzKTtcclxuICAgIHF1ZXJ5UmVzdWx0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVTZWFyY2hNb2RhbCgpO1xyXG4gICAgICB0b2dnbGVHcmlkQ29udGFpbmVyKHRydWUpO1xyXG4gICAgICB0b2dnbGVQYWdlTG9hZGluZ0FuaW1hdGlvbih0cnVlKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hXZWF0aGVyKHJlc3VsdHMpO1xyXG4gICAgICBzZXRUaW1lb3V0KGRlbGF5RGlzcGxheWluZ0dyaWQsIDUwMCwgcmVzdWx0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlcnlSZXN1bHQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2l0eUlucHV0Rm9ybU1vYmlsZSgpIHtcclxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1zZWFyY2gnKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwuZm9yID0gJ2NpdHktbW9iaWxlJztcclxuXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LmlkID0gJ2NpdHktbW9iaWxlJztcclxuICBpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGlucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBjaXR5JztcclxuICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNsZWFyUmVzdWx0cygpO1xyXG4gICAgdG9nZ2xlU2VhcmNoTG9hZGluZ0FuaW1hdGlvbih0cnVlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNoZWNrUXVlcnkoaW5wdXQudmFsdWUpO1xyXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICB0b2dnbGVTZWFyY2hMb2FkaW5nQW5pbWF0aW9uKGZhbHNlKTtcclxuICAgICAgY2xlYXJUaXBzKCk7XHJcbiAgICAgIGRpc3BsYXlTZWFyY2hSZXN1bHRzKHJlc3VsdCk7XHJcbiAgICAgIGNyZWF0ZVJlZmluZVN1Z2dlc3Rpb25zKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2dnbGVTZWFyY2hMb2FkaW5nQW5pbWF0aW9uKGZhbHNlKTtcclxuICAgICAgY2xlYXJUaXBzKCk7XHJcbiAgICAgIGRpc3BsYXlTZWFyY2hFcnJvcihyZXN1bHQpO1xyXG4gICAgICBjcmVhdGVTZWFyY2hTdWdnZXN0aW9ucygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaW5wdXRDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZ2dsZVN3aXRjaCh0b2dnbGVOYW1lKSB7XHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpO1xyXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdG9nZ2xlTmFtZSk7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICBpbnB1dC5pZCA9IHRvZ2dsZU5hbWU7XHJcblxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXInLCAncm91bmQnKTtcclxuXHJcbiAgbGFiZWwuYXBwZW5kKGlucHV0LCBzcGFuKTtcclxuXHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1RlbXBDb252ZXJzaW9uKCkge1xyXG4gIGNvbnN0IGZjU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhcmVuaGVpdC1jZWxzaXVzLXN3aXRjaCcpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG4gIGNvbnN0IHRlbXBNb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtbW9kZScpO1xyXG5cclxuICBpZiAoIShib2R5LmNsYXNzTGlzdC5jb250YWlucygnY2Vsc2l1cycpKSkge1xyXG4gICAgY29uc3QgdGVtcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcclxuICAgIHRlbXBNb2RlLnRleHRDb250ZW50ID0gJ0ZhaHJlbmhlaXQnO1xyXG4gICAgZmNTd2l0Y2guY2hlY2tlZCA9IHRydWU7XHJcblxyXG4gICAgdGVtcERhdGEgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsID0gdGVtcHNbaV0udGV4dENvbnRlbnQ7XHJcbiAgICAgIGNvbnN0IHN1YnN0cmluZyA9IG9yaWdpbmFsLnNsaWNlKDAsIG9yaWdpbmFsLmxlbmd0aCAtIDEpO1xyXG4gICAgICBjb25zdCBudW0gPSBwYXJzZUludChzdWJzdHJpbmcsIDEwKTtcclxuICAgICAgY29uc3QgY29udmVydGVkID0gYCR7TWF0aC5mbG9vcihjb252ZXJ0RlRvQyhudW0pKX3CsGA7XHJcbiAgICAgIHRlbXBEYXRhLnB1c2godGVtcHNbaV0udGV4dENvbnRlbnQpO1xyXG4gICAgICB0ZW1wc1tpXS50ZXh0Q29udGVudCA9IGNvbnZlcnRlZDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdGVtcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wJyk7XHJcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NlbHNpdXMnKTtcclxuICAgIHRlbXBNb2RlLnRleHRDb250ZW50ID0gJ0NlbHNpdXMnO1xyXG4gICAgZmNTd2l0Y2guY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGVtcHNbaV0udGV4dENvbnRlbnQgPSB0ZW1wRGF0YVtpXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25NZW51KCkge1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdicpO1xyXG4gIGNvbnN0IHNlYXJjaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHNlYXJjaEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnJztcclxuXHJcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICBsb2dvSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvd2VhdGhlci1hcHAtbG9nby5zdmcnO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaC1jaXR5JztcclxuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBjaXR5IChlZy4gTG9zIEFuZ2VsZXMpJztcclxuXHJcbiAgc2VhcmNoQ29udGFpbmVyRGl2LmFwcGVuZChzZWFyY2hJbWcsIHNlYXJjaElucHV0KTtcclxuICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyRGl2KTtcclxuXHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhhbWJ1cmdlck1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcclxuICBjb25zdCBoYW1idXJnZXJNZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2hhbWJ1cmdlci1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGhhbWJ1cmdlck1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUltZyk7XHJcbiAgaGFtYnVyZ2VyTWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNldHRpbmdzTW9kYWwpO1xyXG5cclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG4gIHNlYXJjaEJ1dHRvbi5hcHBlbmRDaGlsZChzZWFyY2hJbWcpO1xyXG5cclxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTZWFyY2hNb2RhbCk7XHJcblxyXG4gIGNvbnN0IGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1kaXYnLCAnaGlkZGVuJyk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaERpdi5pZCA9ICdoaWRkZW4nO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoUC5jbGFzc0xpc3QuYWRkKCdkYXJrLWxpZ2h0LXN3aXRjaCcsICdzbWFsbCcpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hQLnRleHRDb250ZW50ID0gJ0VuYWJsZSBEYXJrIE1vZGUnO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoID0gY3JlYXRlVG9nZ2xlU3dpdGNoKCk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaC5pZCA9ICdkYXJrLWxpZ2h0LXN3aXRjaCc7XHJcblxyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuYXBwZW5kKGRhcmtMaWdodE1vZGVTd2l0Y2hQLCBkYXJrTGlnaHRNb2RlU3dpdGNoKTtcclxuXHJcbiAgY29uc3QgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hEaXYuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWRpdicpO1xyXG5cclxuICBjb25zdCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoUC5jbGFzc0xpc3QuYWRkKCdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnLCAnc21hbGwnKTtcclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoUC50ZXh0Q29udGVudCA9ICdFbmFibGUgQ2Vsc2l1cyc7XHJcblxyXG4gIGNvbnN0IGZhcmVuaGVpdENlbHNpdXNTd2l0Y2ggPSBjcmVhdGVUb2dnbGVTd2l0Y2goJ2ZhcmVuaGVpdC1jZWxzaXVzLXN3aXRjaCcpO1xyXG5cclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmFwcGVuZChmYXJlbmhlaXRDZWxzaXVzU3dpdGNoUCwgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaCk7XHJcblxyXG4gIGNvbnN0IHN3aXRjaGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3dpdGNoZXNEaXYuY2xhc3NMaXN0LmFkZCgnc3dpdGNoZXMnKTtcclxuICBzd2l0Y2hlc0Rpdi5hcHBlbmQoZGFya0xpZ2h0TW9kZVN3aXRjaERpdiwgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdik7XHJcblxyXG4gIGNvbnN0IGFkZGl0aW9uYWxPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1vcHRpb25zJyk7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuYXBwZW5kKHNlYXJjaEJ1dHRvbiwgaGFtYnVyZ2VyTWVudUJ1dHRvbik7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ29wdGlvbnMnKTtcclxuICBvcHRpb25zRGl2LmFwcGVuZChzd2l0Y2hlc0RpdiwgYWRkaXRpb25hbE9wdGlvbnNEaXYpO1xyXG5cclxuICBuYXYuYXBwZW5kKGxvZ29EaXYsIG9wdGlvbnNEaXYpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBzaWRlTmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgc2lkZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi1jb250YWluZXInLCAnaGlkZGVuJyk7XHJcblxyXG4gIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2Jyk7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgbG9nby5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L3dlYXRoZXItYXBwLWxvZ28uc3ZnJztcclxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIHNpZGVOYXYuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XHJcblxyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdG9wTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBkYXJrTW9kZS50ZXh0Q29udGVudCA9ICdEYXJrIE1vZGUnO1xyXG5cclxuICBjb25zdCBzZXRUb0NlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIHNldFRvQ2Vsc2l1cy50ZXh0Q29udGVudCA9ICdTZXQgdG8gQ2Vsc2l1cyc7XHJcblxyXG4gIHRvcExpc3QuYXBwZW5kKGRhcmtNb2RlLCBzZXRUb0NlbHNpdXMpO1xyXG5cclxuICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcclxuICBuYXZJdGVtcy5hcHBlbmQodG9wTGlzdCwgZGl2aWRlcik7XHJcblxyXG4gIGNvbnN0IGJvdHRvbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xyXG4gIGJvdHRvbUxpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gIG5hdkl0ZW1zLmFwcGVuZENoaWxkKGJvdHRvbUxpc3QpO1xyXG5cclxuICBzaWRlTmF2LmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcclxuICBzaWRlTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVOYXYpO1xyXG5cclxuICBjb25zdCBleGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZXhpdERpdi5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XHJcblxyXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBleGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgZXhpdEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2V4aXQuc3ZnJztcclxuICBleGl0QnRuLmFwcGVuZENoaWxkKGV4aXRJbWcpO1xyXG4gIGV4aXREaXYuYXBwZW5kQ2hpbGQoZXhpdEJ0bik7XHJcblxyXG4gIHNpZGVOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdERpdik7XHJcblxyXG4gIHJldHVybiBzaWRlTmF2Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1tb2RhbCcsICdoaWRkZW4nKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjaXR5SW5wdXRGb3JtID0gY3JlYXRlQ2l0eUlucHV0Rm9ybU1vYmlsZSgpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ3ByaW1hcnknKTtcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTZWFyY2hNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZChjaXR5SW5wdXRGb3JtLCBjYW5jZWxCdXR0b24pO1xyXG5cclxuICBjb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzdWx0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXN1bHRzLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCB0aXBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGlwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aXBzLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBvdXRwdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBvdXRwdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0cHV0LWNvbnRhaW5lcicpO1xyXG4gIG91dHB1dENvbnRhaW5lci5hcHBlbmQocmVzdWx0c0NvbnRhaW5lciwgdGlwc0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoc2VhcmNoQ29udGFpbmVyLCBvdXRwdXRDb250YWluZXIpO1xyXG4gIG1vZGFsLmFwcGVuZChjb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gbW9kYWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNldHRpbmdzTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2V0dGluZ3MtbW9kYWwnKTtcclxuICBtb2RhbC5pZCA9ICdoaWRkZW4nO1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdibGFjay1maWx0ZXInKTtcclxuICBsb2dvLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvd2VhdGhlci1hcHAtbG9nby5zdmcnO1xyXG4gIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gIGNvbnN0IGxpbmtzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnN0IHRlbXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1RlbXBDb252ZXJzaW9uKTtcclxuXHJcbiAgdGVtcEltZy5jbGFzc0xpc3QuYWRkKCdibGFjay1maWx0ZXInKTtcclxuICB0ZW1wSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvdGVtcGVyYXR1cmUuc3ZnJztcclxuICBhLmlubmVySFRNTCA9ICdTZXQgdG8gPHNwYW4gaWQ9XFwndGVtcC1tb2RlXFwnPkNlbHNpdXM8L3NwYW4+JztcclxuICBsaS5hcHBlbmQodGVtcEltZywgYSk7XHJcbiAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIGxpbmtzRGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChsb2dvRGl2LCBsaW5rc0Rpdik7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgeEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHhJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9jbG9zZS1tZC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKHhJbWcpO1xyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlU2V0dGluZ3NNb2RhbCk7XHJcblxyXG4gIG1vZGFsLmFwcGVuZChjb250YWluZXIsIGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcC5pbm5lckhUTUwgPSAnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSA8YSBocmVmPVxcJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vdmJlbG1vbnRlXFwnIHRhcmdldD1cXCdfYmxhbmtcXCc+VmlsbHkgQmVsbW9udGU8L2EgaHJlZj4nO1xyXG5cclxuICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREZWZhdWx0V2VhdGhlcigpIHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaERlZmF1bHRXZWF0aGVyKCk7XHJcbiAgdXBkYXRlQ3VycmVudEZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgdXBkYXRlQWRkaXRpb25hbEN1cnJlbnRGb3JlY2FzdExheW91dChyZXN1bHQpO1xyXG4gIHVwZGF0ZUhvdXJseUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbiAgdXBkYXRlM0RheUZvcmVjYXN0TGF5b3V0KHJlc3VsdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKTtcclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZpZ2F0aW9uTWVudSgpO1xyXG4gIGNvbnN0IHNpZGVOYXZpZ2F0aW9uID0gY3JlYXRlU2lkZU5hdmlnYXRpb24oKTtcclxuICBjb25zdCBzZWFyY2hNb2JpbGUgPSBjcmVhdGVTZWFyY2hNb2RhbCgpO1xyXG4gIGNvbnN0IHNldHRpbmdzTW9kYWwgPSBjcmVhdGVTZXR0aW5nc01vZGFsKCk7XHJcbiAgY29uc3QgY3VycmVudEZvcmVjYXN0ID0gY3JlYXRlQ3VycmVudEZvcmVjYXN0KCk7XHJcbiAgY29uc3QgbW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMgPSBjcmVhdGVNb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscygpO1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxGb3JlY2FzdERldGFpbHMgPSBjcmVhdGVBZGRpdGlvbmFsRm9yZWNhc3QoKTtcclxuXHJcbiAgYm9keS5hcHBlbmQobmF2aWdhdGlvbk1lbnUsIHNpZGVOYXZpZ2F0aW9uLCBzZWFyY2hNb2JpbGUsIHNldHRpbmdzTW9kYWwpO1xyXG4gIGdyaWRDb250YWluZXIuYXBwZW5kKGN1cnJlbnRGb3JlY2FzdCwgbW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMsIGFkZGl0aW9uYWxGb3JlY2FzdERldGFpbHMpO1xyXG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XHJcblxyXG4gIGJvZHkuYXBwZW5kKG1haW5Db250YWluZXIsIGZvb3Rlcik7XHJcbiAgY29uc3QgZmNTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFyZW5oZWl0LWNlbHNpdXMtc3dpdGNoJyk7XHJcbiAgZmNTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1RlbXBDb252ZXJzaW9uKTtcclxuXHJcbiAgYXdhaXQgbG9hZERlZmF1bHRXZWF0aGVyKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgJy4vbGlnaHQtdGhlbWUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSAnLi9wYWdlLWxheW91dCc7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGNyZWF0ZVBhZ2UoKTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9