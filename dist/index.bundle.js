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
    --black-transparent: rgb(0, 0, 0, 0.25);
    --white: #F2F2F2;
    --day: linear-gradient(135deg, #ABD2EE, #D1C196);
    --power-primary: linear-gradient(135deg, #FFF3B5, #B5DBFF);
    --power-secondary: #888888;
    --power-tertiary: invert(71%) sepia(26%) saturate(620%) hue-rotate(170deg) brightness(99%) contrast(76%);
    --transparent: rgb(46, 68, 87, 0.5);
    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);
    --additional-forecast: rgb(242, 242, 242, 0.7);
    --card: #FAFAFA;
}

body {
    background: var(--day);
    color: var(--black);
}



/** TEXT STYLES **/

.secondary {
    color: var(--power-secondary);
}



/** SVG STYLES **/
.tertiary {
    filter: var(--power-tertiary);
}



/** NAVIGATION STYLES **/

nav {
    background-color: var(--transparent);
    color: var(--white);
}

nav .additional-options img {
    filter: invert(100%) sepia(2%) saturate(355%) hue-rotate(51deg) brightness(114%) contrast(90%);
}



/** CURRENT FORECAST STYLES **/

section#current-forecast {
    color: var(--white);
}


/** MORE CURRENT FORECAST DETAILS STYLES **/

#more-current-forecast-details-container {
    background: var(--power-primary);

    /* MOBILE STYLE */
    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);
}

#more-current-forecast-details-container img {
    filter: var(--transparent-filter);
}


/** ADDITIONAL FORECAST DETAILS STYLES **/
#additional-forecast {
    background-color: var(--additional-forecast);
}

/** HOURLY CARD STYLES **/
.hourly-card {
    background-color: var(--card);
}

/** 3-DAY FORECAST CARD STYLES **/`, "",{"version":3,"sources":["webpack://./src/light-theme.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,uCAAuC;IACvC,gBAAgB;IAChB,gDAAgD;IAChD,0DAA0D;IAC1D,0BAA0B;IAC1B,wGAAwG;IACxG,mCAAmC;IACnC,yHAAyH;IACzH,8CAA8C;IAC9C,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;;;AAIA,kBAAkB;;AAElB;IACI,6BAA6B;AACjC;;;;AAIA,iBAAiB;AACjB;IACI,6BAA6B;AACjC;;;;AAIA,wBAAwB;;AAExB;IACI,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,8FAA8F;AAClG;;;;AAIA,8BAA8B;;AAE9B;IACI,mBAAmB;AACvB;;;AAGA,2CAA2C;;AAE3C;IACI,gCAAgC;;IAEhC,iBAAiB;IACjB,0DAA0D;AAC9D;;AAEA;IACI,iCAAiC;AACrC;;;AAGA,yCAAyC;AACzC;IACI,4CAA4C;AAChD;;AAEA,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA,iCAAiC","sourcesContent":[":root {\r\n    --black: #323232;\r\n    --black-transparent: rgb(0, 0, 0, 0.25);\r\n    --white: #F2F2F2;\r\n    --day: linear-gradient(135deg, #ABD2EE, #D1C196);\r\n    --power-primary: linear-gradient(135deg, #FFF3B5, #B5DBFF);\r\n    --power-secondary: #888888;\r\n    --power-tertiary: invert(71%) sepia(26%) saturate(620%) hue-rotate(170deg) brightness(99%) contrast(76%);\r\n    --transparent: rgb(46, 68, 87, 0.5);\r\n    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);\r\n    --additional-forecast: rgb(242, 242, 242, 0.7);\r\n    --card: #FAFAFA;\r\n}\r\n\r\nbody {\r\n    background: var(--day);\r\n    color: var(--black);\r\n}\r\n\r\n\r\n\r\n/** TEXT STYLES **/\r\n\r\n.secondary {\r\n    color: var(--power-secondary);\r\n}\r\n\r\n\r\n\r\n/** SVG STYLES **/\r\n.tertiary {\r\n    filter: var(--power-tertiary);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n    background-color: var(--transparent);\r\n    color: var(--white);\r\n}\r\n\r\nnav .additional-options img {\r\n    filter: invert(100%) sepia(2%) saturate(355%) hue-rotate(51deg) brightness(114%) contrast(90%);\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n\r\nsection#current-forecast {\r\n    color: var(--white);\r\n}\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details-container {\r\n    background: var(--power-primary);\r\n\r\n    /* MOBILE STYLE */\r\n    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);\r\n}\r\n\r\n#more-current-forecast-details-container img {\r\n    filter: var(--transparent-filter);\r\n}\r\n\r\n\r\n/** ADDITIONAL FORECAST DETAILS STYLES **/\r\n#additional-forecast {\r\n    background-color: var(--additional-forecast);\r\n}\r\n\r\n/** HOURLY CARD STYLES **/\r\n.hourly-card {\r\n    background-color: var(--card);\r\n}\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Bold.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/BarlowSemiCondensed-Thin.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
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
	font-family: 'Barlow Semi-Condensed Bold';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'Barlow Semi-Condensed Thin';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
	font-weight: 400;
	font-style: normal;
}

body {
	font-family: 'Barlow Regular', 'Arial', sans-serif;

	/** MOBILE **/
	background-attachment: scroll;
    min-height: 100vh;
	font-size: 16px;
}

h1 {
	font-family: 'Barlow Semi-Condensed Thin';
	font-size: 4rem;
	line-height: 5rem;
}

h1.bold {
	font-family: 'Barlow Semi-Condensed Bold';
	font-size: 5rem;
	line-height: 5rem;
}

h2 {
	font-family: 'Barlow Regular';
	font-size: 3rem;
	line-height: 4rem;
}

h2.bold {
	font-family: 'Barlow Bold';
	font-size: 3rem;
	line-height: 4rem;
}

h3 {
	font-family: 'Barlow Regular';
	font-size: 2rem;
	line-height: 3rem;
}

h3.bold {
	font-family: 'Barlow Bold';
	font-size: 2rem;
	line-height: 3rem;
}

h4 {
	font-family: 'Barlow Regular';
	font-size: 1.5rem;
	line-height: 2rem;
}

h4.bold {
	font-family: 'Barlow Bold';
	font-size: 1.5rem;
	line-height: 2rem;
}

h5 {
	font-family: 'Barlow Regular';
	font-size: 1rem;
	line-height: 1.5rem;
}

h5.bold {
	font-family: 'Barlow Bold';
	font-size: 1rem;
	line-height: 1.5rem;
}

h5.small {
	font-family: 'Barlow Regular';
	font-size: 0.75rem;
	line-height: 1rem;
}

p {
	font-family: 'Barlow Regular';
	font-size: 1rem;
	line-height: 1.5rem;
}

p.bold {
	font-family: 'Barlow Bold';
	font-size: 1rem;
	line-height: 1.5rem;
}



/** NAVIGATION STYLES **/

nav {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	padding: 1rem;
}

nav img {
	height: 1.5rem;
}

nav .additional-options {
	display: flex;
	gap: 1rem;
}




/** CURRENT FORECAST STYLES - MOBILE **/

#current-forecast {
	display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
	margin: 3rem 1rem;
}

#current-forecast .forecast-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

#current-forecast .high-low {
	display: flex;
    justify-content: center;
    gap: 1rem;
}

#current-forecast img#current-weather {
	height: 9rem;
}



/** MORE CURRENT FORECAST DETAILS STYLES **/

#more-current-forecast-details {
	margin: 0rem 1rem;
}

#more-current-forecast-details-container {
	display: flex;
	gap: 2rem;
	justify-content: space-evenly;
	padding: 1.5rem;
	border-radius: 1.75rem;
}

#more-current-forecast-details img {
	height: 2rem;
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
	gap: 3rem;
	padding: 3rem 1rem;
}

#additional-forecast h3 {
	font-size: 1.5rem;
}

/** HOURLY FORECAST STYLES **/
.hourly-forecast {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

/** HOURLY FORECAST CARD STYLES **/

.hourly-card {
	padding: 1rem;
	padding-bottom: 1.5rem;
	border-radius: 0.75rem;
	min-width: 5rem; /** MOBILE **/

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
}

.hourly-card img {
	width: 2rem;
}

.hourly-card h4 {
	font-size: 1rem;
	line-height: 1.5rem;
}

.hourly-card p {
	font-size: 1.5rem;
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

.hourly-forecast-carousel .container {
	display: flex;
	gap: 0.5rem;
}

/** 3-DAY FORECAST CARD STYLES **/
.daily-bar {
	display: flex;
	align-items: center;
	gap: 2rem;
	
	padding: 1rem 0rem;
}

.daily-bar .details {
	display: flex;
	align-items: center;
	flex: 1;
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
	height: 1.5rem;
}

.daily-bar .chance-of-rain .icon {
	height: 1rem;
}

.daily-bar h4 {
	font-size: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Thin';\r\n\tsrc: url('../src/assets/fonts/Barlow-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n}\r\n\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tfont-size: 4rem;\r\n\tline-height: 5rem;\r\n}\r\n\r\nh1.bold {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tfont-size: 5rem;\r\n\tline-height: 5rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 3rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 3rem;\r\n}\r\n\r\nh4 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh4.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh5 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh5.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh5.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\tpadding: 1rem;\r\n}\r\n\r\nnav img {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES - MOBILE **/\r\n\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tmargin: 3rem 1rem;\r\n}\r\n\r\n#current-forecast .forecast-details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\theight: 9rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: space-evenly;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\r\n#more-current-forecast-details img {\r\n\theight: 2rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 3rem;\r\n\tpadding: 3rem 1rem;\r\n}\r\n\r\n#additional-forecast h3 {\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n\r\n.hourly-card {\r\n\tpadding: 1rem;\r\n\tpadding-bottom: 1.5rem;\r\n\tborder-radius: 0.75rem;\r\n\tmin-width: 5rem; /** MOBILE **/\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\twidth: 2rem;\r\n}\r\n\r\n.hourly-card h4 {\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n.hourly-card p {\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n\r\n.hourly-forecast-carousel {\r\n\toverflow-x: auto;\r\n}\r\n\r\n.no-scrollbar {\r\n\tscrollbar-color: transparent transparent;\r\n}\r\n\r\n.no-scrollbar::-webkit-scrollbar {\r\n\theight: 0px;\r\n}\r\n\r\n.hourly-forecast-carousel .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 2rem;\r\n\t\r\n\tpadding: 1rem 0rem;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 1;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\theight: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ createMoreCurrentForecastDetails)
/* harmony export */ });
function createChanceOfRain() {
  const corDiv = document.createElement('div');
  corDiv.classList.add('cor');
  corDiv.classList.add('module');

  const corIconDiv = document.createElement('div');
  const corImg = document.createElement('img');
  corImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corImg);
  corDiv.appendChild(corIconDiv);

  const containerDiv = document.createElement('div');

  const corPercentDiv = document.createElement('div');
  const corPercent = document.createElement('p');
  corPercent.classList.add('bold');
  corPercent.id = 'chance-of-rain';
  corPercent.textContent = '0%';
  corPercentDiv.appendChild(corPercent);
  containerDiv.appendChild(corPercentDiv);

  const corTitleDiv = document.createElement('div');
  const corTitle = document.createElement('h5');
  corTitle.classList.add('small');
  corTitle.classList.add('secondary');
  corTitle.textContent = 'Rain';
  corTitleDiv.appendChild(corTitle);
  containerDiv.appendChild(corTitleDiv);

  corDiv.appendChild(containerDiv);

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

  const containerDiv = document.createElement('div');

  const humidityPercentDiv = document.createElement('div');
  const humidityPercent = document.createElement('p');
  humidityPercent.classList.add('bold');
  humidityPercent.id = 'humidity';
  humidityPercent.textContent = '20%';
  humidityPercentDiv.appendChild(humidityPercent);
  containerDiv.appendChild(humidityPercentDiv);

  const humidityTitleDiv = document.createElement('div');
  const humidityTitle = document.createElement('h5');
  humidityTitle.classList.add('small');
  humidityTitle.classList.add('secondary');
  humidityTitle.textContent = 'Humidity';
  humidityTitleDiv.appendChild(humidityTitle);
  containerDiv.appendChild(humidityTitleDiv);

  humidityDiv.appendChild(containerDiv);

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

  const containerDiv = document.createElement('div');

  const windSpeedDiv = document.createElement('div');
  const windSpeed = document.createElement('p');
  windSpeed.classList.add('bold');
  windSpeed.id = 'wind';
  windSpeed.textContent = '5mph';
  windSpeedDiv.appendChild(windSpeed);
  containerDiv.appendChild(windSpeedDiv);

  const windTitleDiv = document.createElement('div');
  const windTitle = document.createElement('h5');
  windTitle.classList.add('small');
  windTitle.classList.add('secondary');
  windTitle.textContent = 'Wind';
  windTitleDiv.appendChild(windTitle);
  containerDiv.appendChild(windTitleDiv);

  windDiv.appendChild(containerDiv);

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

  const containerDiv = document.createElement('div');

  const uvIndexDiv = document.createElement('div');
  const uvIndex = document.createElement('p');
  uvIndex.classList.add('bold');
  uvIndex.id = 'uv-index';
  uvIndex.textContent = '5 of 10';
  uvIndexDiv.appendChild(uvIndex);
  containerDiv.appendChild(uvIndexDiv);

  const uvTitleDiv = document.createElement('div');
  const uvTitle = document.createElement('h5');
  uvTitle.classList.add('small');
  uvTitle.classList.add('secondary');
  uvTitle.textContent = 'UV Index';
  uvTitleDiv.appendChild(uvTitle);
  containerDiv.appendChild(uvTitleDiv);

  uvDiv.appendChild(containerDiv);

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
/* harmony export */   "default": () => (/* binding */ createAdditionalForecast)
/* harmony export */ });
function createHourlyCard() {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('hourly-card');

  const time = document.createElement('h4');
  time.classList.add('secondary');
  time.textContent = '2pm';

  const forecastIcon = document.createElement('img');
  forecastIcon.classList.add('tertiary');
  forecastIcon.src = '../src/assets/images/forecast-details/weather-partly-cloudy-day-svgrepo-com.svg';

  const hourlyTemp = document.createElement('p');
  hourlyTemp.textContent = '78°';

  cardDiv.appendChild(time);
  cardDiv.appendChild(forecastIcon);
  cardDiv.appendChild(hourlyTemp);

  return cardDiv;
}

function createHourlyForecast() {
  const hourlyForecast = document.createElement('div');
  hourlyForecast.classList.add('hourly-forecast');

  const hourlyForecastTitleDiv = document.createElement('div');
  const hourlyForecastTitle = document.createElement('h3');
  hourlyForecastTitle.classList.add('bold');
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

function createDailyForecastBar() {
  const forecastBar = document.createElement('div');
  forecastBar.classList.add('daily-bar');

  const dayDiv = document.createElement('div');
  const day = document.createElement('h4');
  day.classList.add('day');
  day.classList.add('secondary');
  day.textContent = 'Wed';
  dayDiv.appendChild(day);
  forecastBar.appendChild(dayDiv);

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');

  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('forecast');

  const weatherIconDiv = document.createElement('div');
  const iconImg = document.createElement('img');
  iconImg.classList.add('icon');
  iconImg.classList.add('tertiary');
  iconImg.src = '../src/assets/images/forecast-details/sun-outline-svgrepo-com.svg';
  weatherIconDiv.appendChild(iconImg);
  forecastDiv.appendChild(weatherIconDiv);

  const descriptionDiv = document.createElement('div');
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Sunny and clear';
  descriptionDiv.appendChild(description);
  forecastDiv.appendChild(descriptionDiv);

  detailsDiv.appendChild(forecastDiv);

  const temperaturesDiv = document.createElement('div');
  temperaturesDiv.classList.add('temperatures');
  const highP = document.createElement('p');
  highP.classList.add('high');
  highP.textContent = '80°';
  const lowP = document.createElement('p');
  lowP.classList.add('low');
  lowP.textContent = '62°';
  temperaturesDiv.appendChild(highP);
  temperaturesDiv.appendChild(lowP);
  detailsDiv.appendChild(temperaturesDiv);

  const corDiv = document.createElement('div');
  corDiv.classList.add('chance-of-rain');
  const corIconDiv = document.createElement('div');
  const corIconImg = document.createElement('img');
  corIconImg.classList.add('icon');
  corIconImg.classList.add('tertiary');
  corIconImg.src = '../src/assets/images/forecast-details/droplet-svgrepo-com.svg';
  corIconDiv.appendChild(corIconImg);
  corDiv.appendChild(corIconDiv);
  const percentageDiv = document.createElement('div');
  const percentage = document.createElement('p');
  percentage.classList.add('percentage');
  percentage.textContent = '0%';
  percentageDiv.appendChild(percentage);
  corDiv.appendChild(percentageDiv);
  detailsDiv.appendChild(corDiv);

  forecastBar.appendChild(detailsDiv);

  return forecastBar;
}

function create3DayForecast() {
  const threeDayForecast = document.createElement('div');
  threeDayForecast.classList.add('3-day-forecast');

  const threeDayForecastTitleDiv = document.createElement('div');
  const threeDayForecastTitle = document.createElement('h3');
  threeDayForecastTitle.classList.add('bold');
  threeDayForecastTitle.textContent = '3-Day Forecast';
  threeDayForecastTitleDiv.appendChild(threeDayForecastTitle);
  threeDayForecast.appendChild(threeDayForecastTitleDiv);

  const threeDayForecastList = document.createElement('div');
  threeDayForecastList.classList.add('3-day-forecast-list');

  const dayOne = createDailyForecastBar();
  const dayTwo = createDailyForecastBar();
  const dayThree = createDailyForecastBar();

  threeDayForecastList.appendChild(dayOne);
  threeDayForecastList.appendChild(dayTwo);
  threeDayForecastList.appendChild(dayThree);

  threeDayForecast.appendChild(threeDayForecastList);

  return threeDayForecast;
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
/* harmony export */   "default": () => (/* binding */ createCurrentForecast)
/* harmony export */ });
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

  const currentTempDiv = document.createElement('div');
  const currentTemp = document.createElement('h1');
  currentTemp.classList.add('bold');
  currentTemp.id = 'current-temp';
  currentTemp.textContent = '74°F';
  currentTempDiv.appendChild(currentTemp);

  const forecastDescriptionDiv = document.createElement('div');
  const forecastDescription = document.createElement('h4');
  forecastDescription.classList.add('bold');
  forecastDescription.id = 'forecast-description';
  forecastDescription.textContent = 'Partly cloudy';
  forecastDescriptionDiv.appendChild(forecastDescription);

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

  currentDetailsDiv.appendChild(currentWeatherDiv);
  currentDetailsDiv.appendChild(currentTempDiv);
  currentDetailsDiv.appendChild(forecastDescriptionDiv);
  currentDetailsDiv.appendChild(highLowDiv);

  section.appendChild(currentCityDiv);
  section.appendChild(currentDetailsDiv);

  return section;
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




function createNavigationMenu() {
  const nav = document.createElement('nav');
  const searchImg = document.createElement('img');
  searchImg.src = '../src/assets/images/layout/magnifying-glass-solid.svg';

  const logoDiv = document.createElement('div');
  const logoImg = document.createElement('img');
  logoImg.src = '../src/assets/images/layout/weather-app-logo.svg';
  logoDiv.appendChild(logoImg);
  logoDiv.classList.add('logo');

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

  const hamburgerMenuLink = document.createElement('a');
  const hamburgerMenuImg = document.createElement('img');
  hamburgerMenuImg.src = '../src/assets/images/layout/hamburger-menu-svgrepo-com.svg';
  hamburgerMenuLink.appendChild(hamburgerMenuImg);

  const searchLink = document.createElement('a');
  searchLink.appendChild(searchImg);

  const additionalOptionsDiv = document.createElement('div');
  additionalOptionsDiv.appendChild(searchLink);
  additionalOptionsDiv.appendChild(hamburgerMenuLink);
  additionalOptionsDiv.classList.add('additional-options');

  nav.appendChild(logoDiv);
  nav.appendChild(additionalOptionsDiv);

  return nav;
}

function createPage() {
  const body = document.getElementsByTagName('body')[0];
  const navigationMenu = createNavigationMenu();
  const currentForecast = (0,_current_forecast_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const moreCurrentForecastDetails = (0,_additional_current_forecast_layout__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const additionalForecastDetails = (0,_additional_forecast_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();

  body.appendChild(navigationMenu);
  body.appendChild(currentForecast);
  body.appendChild(moreCurrentForecastDetails);
  body.appendChild(additionalForecastDetails);
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

/***/ "./src/assets/fonts/BarlowSemiCondensed-Thin.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Thin.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f73fa0adcccb37c041e.ttf";

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




(() => {
  (0,_page_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxTQUFTLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLHNCQUFzQixXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1B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QzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9KZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFOEQ7QUFDc0I7QUFDaEI7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQixvRUFBcUI7QUFDL0MscUNBQXFDLCtFQUFnQztBQUNyRSxvQ0FBb0MsdUVBQXdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ0s7QUFDWTtBQUN2QztBQUNBO0FBQ0EsRUFBRSx3REFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWdodC10aGVtZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbGlnaHQtdGhlbWUuY3NzPzdiZGMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYWRkaXRpb25hbC1jdXJyZW50LWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hZGRpdGlvbmFsLWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50LWZvcmVjYXN0LWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlLWxheW91dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWJsYWNrOiAjMzIzMjMyO1xyXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgLS13aGl0ZTogI0YyRjJGMjtcclxuICAgIC0tZGF5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjQUJEMkVFLCAjRDFDMTk2KTtcclxuICAgIC0tcG93ZXItcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZGRjNCNSwgI0I1REJGRik7XHJcbiAgICAtLXBvd2VyLXNlY29uZGFyeTogIzg4ODg4ODtcclxuICAgIC0tcG93ZXItdGVydGlhcnk6IGludmVydCg3MSUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoNjIwJSkgaHVlLXJvdGF0ZSgxNzBkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg3NiUpO1xyXG4gICAgLS10cmFuc3BhcmVudDogcmdiKDQ2LCA2OCwgODcsIDAuNSk7XHJcbiAgICAtLXRyYW5zcGFyZW50LWZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgyOTklKSBodWUtcm90YXRlKDE2NmRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSkgb3BhY2l0eSg1MCUpO1xyXG4gICAgLS1hZGRpdGlvbmFsLWZvcmVjYXN0OiByZ2IoMjQyLCAyNDIsIDI0MiwgMC43KTtcclxuICAgIC0tY2FyZDogI0ZBRkFGQTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXkpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVEVYVCBTVFlMRVMgKiovXHJcblxyXG4uc2Vjb25kYXJ5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1wb3dlci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTVkcgU1RZTEVTICoqL1xyXG4udGVydGlhcnkge1xyXG4gICAgZmlsdGVyOiB2YXIoLS1wb3dlci10ZXJ0aWFyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbm5hdiAuYWRkaXRpb25hbC1vcHRpb25zIGltZyB7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyJSkgc2F0dXJhdGUoMzU1JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCg5MCUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuXHJcbnNlY3Rpb24jY3VycmVudC1mb3JlY2FzdCB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5cclxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XHJcblxyXG4gICAgLyogTU9CSUxFIFNUWUxFICovXHJcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIGltZyB7XHJcbiAgICBmaWx0ZXI6IHZhcigtLXRyYW5zcGFyZW50LWZpbHRlcik7XHJcbn1cclxuXHJcblxyXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1mb3JlY2FzdCk7XHJcbn1cclxuXHJcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXHJcbi5ob3VybHktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcclxufVxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpZ2h0LXRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGdEQUFnRDtJQUNoRCwwREFBMEQ7SUFDMUQsMEJBQTBCO0lBQzFCLHdHQUF3RztJQUN4RyxtQ0FBbUM7SUFDbkMseUhBQXlIO0lBQ3pILDhDQUE4QztJQUM5QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7OztBQUlBLGtCQUFrQjs7QUFFbEI7SUFDSSw2QkFBNkI7QUFDakM7Ozs7QUFJQSxpQkFBaUI7QUFDakI7SUFDSSw2QkFBNkI7QUFDakM7Ozs7QUFJQSx3QkFBd0I7O0FBRXhCO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhGQUE4RjtBQUNsRzs7OztBQUlBLDhCQUE4Qjs7QUFFOUI7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBLDJDQUEyQzs7QUFFM0M7SUFDSSxnQ0FBZ0M7O0lBRWhDLGlCQUFpQjtJQUNqQiwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7OztBQUdBLHlDQUF5QztBQUN6QztJQUNJLDRDQUE0QztBQUNoRDs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUEsaUNBQWlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1ibGFjazogIzMyMzIzMjtcXHJcXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xcclxcbiAgICAtLWRheTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0FCRDJFRSwgI0QxQzE5Nik7XFxyXFxuICAgIC0tcG93ZXItcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZGRjNCNSwgI0I1REJGRik7XFxyXFxuICAgIC0tcG93ZXItc2Vjb25kYXJ5OiAjODg4ODg4O1xcclxcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoNzElKSBzZXBpYSgyNiUpIHNhdHVyYXRlKDYyMCUpIGh1ZS1yb3RhdGUoMTcwZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoNzYlKTtcXHJcXG4gICAgLS10cmFuc3BhcmVudDogcmdiKDQ2LCA2OCwgODcsIDAuNSk7XFxyXFxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XFxyXFxuICAgIC0tYWRkaXRpb25hbC1mb3JlY2FzdDogcmdiKDI0MiwgMjQyLCAyNDIsIDAuNyk7XFxyXFxuICAgIC0tY2FyZDogI0ZBRkFGQTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRheSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBURVhUIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uc2Vjb25kYXJ5IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTVkcgU1RZTEVTICoqL1xcclxcbi50ZXJ0aWFyeSB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmFkZGl0aW9uYWwtb3B0aW9ucyBpbWcge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyJSkgc2F0dXJhdGUoMzU1JSkgaHVlLXJvdGF0ZSg1MWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCg5MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuc2VjdGlvbiNjdXJyZW50LWZvcmVjYXN0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxuXFxyXFxuICAgIC8qIE1PQklMRSBTVFlMRSAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIGltZyB7XFxyXFxuICAgIGZpbHRlcjogdmFyKC0tdHJhbnNwYXJlbnQtZmlsdGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWZvcmVjYXN0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBDQVJEIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFRoaW4nO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgQm9sZCc7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBUaGluJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG5cclxuXHQvKiogTU9CSUxFICoqL1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgVGhpbic7XHJcblx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG5oMS5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBCb2xkJztcclxuXHRmb250LXNpemU6IDVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDNyZW07XHJcblx0bGluZS1oZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbmgyLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRsaW5lLWhlaWdodDogNHJlbTtcclxufVxyXG5cclxuaDMge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogM3JlbTtcclxufVxyXG5cclxuaDMuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5oNCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmg0LmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG5oNSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbmg1LmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5oNS5zbWFsbCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAwLjc1cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5wIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxucC5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcblxyXG5uYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5uYXYgaW1nIHtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxubmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cmVtO1xyXG5cdG1hcmdpbjogM3JlbSAxcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5oaWdoLWxvdyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCBpbWcjY3VycmVudC13ZWF0aGVyIHtcclxuXHRoZWlnaHQ6IDlyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0bWFyZ2luOiAwcmVtIDFyZW07XHJcbn1cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAycmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdHBhZGRpbmc6IDEuNXJlbTtcclxuXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG59XHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgaW1nIHtcclxuXHRoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDAuNXJlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xyXG5cclxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDNyZW07XHJcblx0cGFkZGluZzogM3JlbSAxcmVtO1xyXG59XHJcblxyXG4jYWRkaXRpb25hbC1mb3JlY2FzdCBoMyB7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG4uaG91cmx5LWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAxcmVtO1xyXG59XHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xyXG5cclxuLmhvdXJseS1jYXJkIHtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuXHRtaW4td2lkdGg6IDVyZW07IC8qKiBNT0JJTEUgKiovXHJcblxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgaW1nIHtcclxuXHR3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLmhvdXJseS1jYXJkIGg0IHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmhvdXJseS1jYXJkIHAge1xyXG5cdGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUk9VU0VMIFNUWUxFUyAqKi9cclxuXHJcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwge1xyXG5cdG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi5uby1zY3JvbGxiYXIge1xyXG5cdHNjcm9sbGJhci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uby1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHRoZWlnaHQ6IDBweDtcclxufVxyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCAuY29udGFpbmVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4vKiogMy1EQVkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXHJcbi5kYWlseS1iYXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDJyZW07XHJcblx0XHJcblx0cGFkZGluZzogMXJlbSAwcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5kZXRhaWxzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZmxleDogMTtcclxuXHRnYXA6IDFyZW07IC8qKiBNT0JJTEUgKiovXHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0LFxyXG4uZGFpbHktYmFyIC50ZW1wZXJhdHVyZXMsXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmZvcmVjYXN0IHtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5mb3JlY2FzdCAuaWNvbiB7XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgLmNoYW5jZS1vZi1yYWluIC5pY29uIHtcclxuXHRoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5kYWlseS1iYXIgaDQge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7OztBQUlBO0NBQ0MsNkJBQTZCO0NBQzdCLCtEQUFxRTtDQUNyRSxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLCtEQUFrRTtDQUNsRSxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FB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OztBQUVBO0NBQ0Msd0NBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7QUFDWjs7QUFFQSxpQ0FBaUM7QUFDakM7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7O0NBRVQsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsU0FBUyxFQUFFLGFBQWE7QUFDekI7O0FBRUE7OztDQUdDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBUaGluJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIEJvbGQnO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIFRoaW4nO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcblxcdC8qKiBNT0JJTEUgKiovXFxyXFxuXFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcblxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIFRoaW4nO1xcclxcblxcdGZvbnQtc2l6ZTogNHJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiA1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMi5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmgzLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNC5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDUge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oNS5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDUuc21hbGwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbnAuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG5cXHRtYXJnaW46IDNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5oaWdoLWxvdyB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgaW1nI2N1cnJlbnQtd2VhdGhlciB7XFxyXFxuXFx0aGVpZ2h0OiA5cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0bWFyZ2luOiAwcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcblxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMgaW1nIHtcXHJcXG5cXHRoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xcclxcblxcclxcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAzcmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZGl0aW9uYWwtZm9yZWNhc3QgaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xcclxcblxcclxcbi5ob3VybHktY2FyZCB7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxyXFxuXFx0bWluLXdpZHRoOiA1cmVtOyAvKiogTU9CSUxFICoqL1xcclxcblxcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWNhcmQgaW1nIHtcXHJcXG5cXHR3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIGg0IHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIHAge1xcclxcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUk9VU0VMIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsIHtcXHJcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tc2Nyb2xsYmFyIHtcXHJcXG5cXHRzY3JvbGxiYXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0aGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktZm9yZWNhc3QtY2Fyb3VzZWwgLmNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xcclxcbi5kYWlseS1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxuXFx0XFxyXFxuXFx0cGFkZGluZzogMXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRnYXA6IDFyZW07IC8qKiBNT0JJTEUgKiovXFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0LFxcclxcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyxcXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3QgLmljb24ge1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIGg0IHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saWdodC10aGVtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpZ2h0LXRoZW1lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDaGFuY2VPZlJhaW4oKSB7XHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcicpO1xyXG4gIGNvckRpdi5jbGFzc0xpc3QuYWRkKCdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9kcm9wbGV0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgY29ySWNvbkRpdi5hcHBlbmRDaGlsZChjb3JJbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNvclBlcmNlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3JQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvclBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gIGNvclBlcmNlbnQuaWQgPSAnY2hhbmNlLW9mLXJhaW4nO1xyXG4gIGNvclBlcmNlbnQudGV4dENvbnRlbnQgPSAnMCUnO1xyXG4gIGNvclBlcmNlbnREaXYuYXBwZW5kQ2hpbGQoY29yUGVyY2VudCk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvclBlcmNlbnREaXYpO1xyXG5cclxuICBjb25zdCBjb3JUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICBjb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xyXG4gIGNvclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScpO1xyXG4gIGNvclRpdGxlLnRleHRDb250ZW50ID0gJ1JhaW4nO1xyXG4gIGNvclRpdGxlRGl2LmFwcGVuZENoaWxkKGNvclRpdGxlKTtcclxuICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY29yVGl0bGVEaXYpO1xyXG5cclxuICBjb3JEaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcclxuXHJcbiAgcmV0dXJuIGNvckRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHVtaWRpdHkoKSB7XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGh1bWlkaXR5SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dhdmVzLWZpbGwtc3ZncmVwby1jb20uc3ZnJztcclxuICBodW1pZGl0eUljb25EaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbWcpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVBlcmNlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaHVtaWRpdHlQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICBodW1pZGl0eVBlcmNlbnQuaWQgPSAnaHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5UGVyY2VudC50ZXh0Q29udGVudCA9ICcyMCUnO1xyXG4gIGh1bWlkaXR5UGVyY2VudERpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnQpO1xyXG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnREaXYpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xyXG4gIGh1bWlkaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5Jyk7XHJcbiAgaHVtaWRpdHlUaXRsZS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eSc7XHJcbiAgaHVtaWRpdHlUaXRsZURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVRpdGxlKTtcclxuICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZURpdik7XHJcblxyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XHJcblxyXG4gIHJldHVybiBodW1pZGl0eURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2luZCgpIHtcclxuICBjb25zdCB3aW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKCd3aW5kJyk7XHJcbiAgd2luZERpdi5jbGFzc0xpc3QuYWRkKCdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3Qgd2luZEljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgd2luZEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy93aW5kLWZpbGwtc3ZncmVwby1jb20uc3ZnJztcclxuICB3aW5kSWNvbkRpdi5hcHBlbmRDaGlsZCh3aW5kSW1nKTtcclxuICB3aW5kRGl2LmFwcGVuZENoaWxkKHdpbmRJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gIHdpbmRTcGVlZC5pZCA9ICd3aW5kJztcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSAnNW1waCc7XHJcbiAgd2luZFNwZWVkRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZERpdik7XHJcblxyXG4gIGNvbnN0IHdpbmRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHdpbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XHJcbiAgd2luZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY29uZGFyeScpO1xyXG4gIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9ICdXaW5kJztcclxuICB3aW5kVGl0bGVEaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcclxuICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlRGl2KTtcclxuXHJcbiAgd2luZERpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG5cclxuICByZXR1cm4gd2luZERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVVYoKSB7XHJcbiAgY29uc3QgdXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB1dkRpdi5jbGFzc0xpc3QuYWRkKCd1dicpO1xyXG4gIHV2RGl2LmNsYXNzTGlzdC5hZGQoJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCB1dkljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB1dkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHV2SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3N1bi1maWxsZWQtc3ZncmVwby1jb20uc3ZnJztcclxuICB1dkljb25EaXYuYXBwZW5kQ2hpbGQodXZJbWcpO1xyXG4gIHV2RGl2LmFwcGVuZENoaWxkKHV2SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB1dkluZGV4LmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICB1dkluZGV4LmlkID0gJ3V2LWluZGV4JztcclxuICB1dkluZGV4LnRleHRDb250ZW50ID0gJzUgb2YgMTAnO1xyXG4gIHV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleCk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHV2SW5kZXhEaXYpO1xyXG5cclxuICBjb25zdCB1dlRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xyXG4gIHV2VGl0bGUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5Jyk7XHJcbiAgdXZUaXRsZS50ZXh0Q29udGVudCA9ICdVViBJbmRleCc7XHJcbiAgdXZUaXRsZURpdi5hcHBlbmRDaGlsZCh1dlRpdGxlKTtcclxuICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQodXZUaXRsZURpdik7XHJcblxyXG4gIHV2RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XHJcblxyXG4gIHJldHVybiB1dkRpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzJztcclxuXHJcbiAgY29uc3QgbW9yZUZvcmVjYXN0RGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuaWQgPSAnbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyJztcclxuXHJcbiAgY29uc3QgY2hhbmNlT2ZSYWluID0gY3JlYXRlQ2hhbmNlT2ZSYWluKCk7XHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChjaGFuY2VPZlJhaW4pO1xyXG5cclxuICBjb25zdCBodW1pZGl0eSA9IGNyZWF0ZUh1bWlkaXR5KCk7XHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcblxyXG4gIGNvbnN0IHdpbmQgPSBjcmVhdGVXaW5kKCk7XHJcbiAgbW9yZUZvcmVjYXN0RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZCh3aW5kKTtcclxuXHJcbiAgY29uc3QgdXYgPSBjcmVhdGVVVigpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuYXBwZW5kQ2hpbGQodXYpO1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKG1vcmVGb3JlY2FzdERldGFpbHNEaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJmdW5jdGlvbiBjcmVhdGVIb3VybHlDYXJkKCkge1xyXG4gIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1jYXJkJyk7XHJcblxyXG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIHRpbWUuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5Jyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9ICcycG0nO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBmb3JlY2FzdEljb24uY2xhc3NMaXN0LmFkZCgndGVydGlhcnknKTtcclxuICBmb3JlY2FzdEljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvd2VhdGhlci1wYXJ0bHktY2xvdWR5LWRheS1zdmdyZXBvLWNvbS5zdmcnO1xyXG5cclxuICBjb25zdCBob3VybHlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSAnNzjCsCc7XHJcblxyXG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pO1xyXG4gIGNhcmREaXYuYXBwZW5kQ2hpbGQoaG91cmx5VGVtcCk7XHJcblxyXG4gIHJldHVybiBjYXJkRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlGb3JlY2FzdCgpIHtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZS50ZXh0Q29udGVudCA9ICdIb3VybHkgRm9yZWNhc3QnO1xyXG4gIGhvdXJseUZvcmVjYXN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RUaXRsZSk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENhcm91c2VsLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCcpO1xyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnbm8tc2Nyb2xsYmFyJyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBob3VybHlDYXJkID0gY3JlYXRlSG91cmx5Q2FyZCgpO1xyXG4gICAgaG91cmx5Rm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cmx5Q2FyZCk7XHJcbiAgfVxyXG5cclxuICBob3VybHlGb3JlY2FzdENhcm91c2VsLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0Q29udGFpbmVyKTtcclxuXHJcbiAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RUaXRsZURpdik7XHJcbiAgaG91cmx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCk7XHJcblxyXG4gIHJldHVybiBob3VybHlGb3JlY2FzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGFpbHlGb3JlY2FzdEJhcigpIHtcclxuICBjb25zdCBmb3JlY2FzdEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcmVjYXN0QmFyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWJhcicpO1xyXG5cclxuICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gIGRheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcclxuICBkYXkuY2xhc3NMaXN0LmFkZCgnc2Vjb25kYXJ5Jyk7XHJcbiAgZGF5LnRleHRDb250ZW50ID0gJ1dlZCc7XHJcbiAgZGF5RGl2LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgZm9yZWNhc3RCYXIuYXBwZW5kQ2hpbGQoZGF5RGl2KTtcclxuXHJcbiAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZvcmVjYXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaWNvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGljb25JbWcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gIGljb25JbWcuY2xhc3NMaXN0LmFkZCgndGVydGlhcnknKTtcclxuICBpY29uSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3N1bi1vdXRsaW5lLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgd2VhdGhlckljb25EaXYuYXBwZW5kQ2hpbGQoaWNvbkltZyk7XHJcbiAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQod2VhdGhlckljb25EaXYpO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnU3VubnkgYW5kIGNsZWFyJztcclxuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xyXG5cclxuICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGl2KTtcclxuXHJcbiAgY29uc3QgdGVtcGVyYXR1cmVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcGVyYXR1cmVzRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlcycpO1xyXG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcclxuICBoaWdoUC50ZXh0Q29udGVudCA9ICc4MMKwJztcclxuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxvd1AuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICc2MsKwJztcclxuICB0ZW1wZXJhdHVyZXNEaXYuYXBwZW5kQ2hpbGQoaGlnaFApO1xyXG4gIHRlbXBlcmF0dXJlc0Rpdi5hcHBlbmRDaGlsZChsb3dQKTtcclxuICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlc0Rpdik7XHJcblxyXG4gIGNvbnN0IGNvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvckRpdi5jbGFzc0xpc3QuYWRkKCdjaGFuY2Utb2YtcmFpbicpO1xyXG4gIGNvbnN0IGNvckljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3JJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY29ySWNvbkltZy5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XHJcbiAgY29ySWNvbkltZy5jbGFzc0xpc3QuYWRkKCd0ZXJ0aWFyeScpO1xyXG4gIGNvckljb25JbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvZHJvcGxldC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGNvckljb25EaXYuYXBwZW5kQ2hpbGQoY29ySWNvbkltZyk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKGNvckljb25EaXYpO1xyXG4gIGNvbnN0IHBlcmNlbnRhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHBlcmNlbnRhZ2UuY2xhc3NMaXN0LmFkZCgncGVyY2VudGFnZScpO1xyXG4gIHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSAnMCUnO1xyXG4gIHBlcmNlbnRhZ2VEaXYuYXBwZW5kQ2hpbGQocGVyY2VudGFnZSk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VEaXYpO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY29yRGl2KTtcclxuXHJcbiAgZm9yZWNhc3RCYXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBmb3JlY2FzdEJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlM0RheUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aHJlZURheUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJzMtZGF5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGUudGV4dENvbnRlbnQgPSAnMy1EYXkgRm9yZWNhc3QnO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0VGl0bGUpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVEYXlGb3JlY2FzdFRpdGxlRGl2KTtcclxuXHJcbiAgY29uc3QgdGhyZWVEYXlGb3JlY2FzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aHJlZURheUZvcmVjYXN0TGlzdC5jbGFzc0xpc3QuYWRkKCczLWRheS1mb3JlY2FzdC1saXN0Jyk7XHJcblxyXG4gIGNvbnN0IGRheU9uZSA9IGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoKTtcclxuICBjb25zdCBkYXlUd28gPSBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKCk7XHJcbiAgY29uc3QgZGF5VGhyZWUgPSBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKCk7XHJcblxyXG4gIHRocmVlRGF5Rm9yZWNhc3RMaXN0LmFwcGVuZENoaWxkKGRheU9uZSk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoZGF5VHdvKTtcclxuICB0aHJlZURheUZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChkYXlUaHJlZSk7XHJcblxyXG4gIHRocmVlRGF5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQodGhyZWVEYXlGb3JlY2FzdExpc3QpO1xyXG5cclxuICByZXR1cm4gdGhyZWVEYXlGb3JlY2FzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWRkaXRpb25hbEZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdhZGRpdGlvbmFsLWZvcmVjYXN0JztcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBjcmVhdGVIb3VybHlGb3JlY2FzdCgpO1xyXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3QpO1xyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0ID0gY3JlYXRlM0RheUZvcmVjYXN0KCk7XHJcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ3VycmVudEZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdjdXJyZW50LWZvcmVjYXN0JztcclxuXHJcbiAgY29uc3QgY3VycmVudENpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50Q2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY3VycmVudENpdHkuaWQgPSAnY3VycmVudC1jaXR5JztcclxuICBjdXJyZW50Q2l0eS50ZXh0Q29udGVudCA9ICdWZW50dXJhJztcclxuICBjdXJyZW50Q2l0eURpdi5hcHBlbmRDaGlsZChjdXJyZW50Q2l0eSk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnREZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY3VycmVudERldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGV0YWlscycpO1xyXG5cclxuICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgY3VycmVudFdlYXRoZXJJbWcuaWQgPSAnY3VycmVudC13ZWF0aGVyJztcclxuICBjdXJyZW50V2VhdGhlckltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtY3VycmVudC9wYXJ0bHktY2xvdWR5LnN2Zyc7XHJcbiAgY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJJbWcpO1xyXG5cclxuICBjb25zdCBjdXJyZW50VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgY3VycmVudFRlbXAuaWQgPSAnY3VycmVudC10ZW1wJztcclxuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9ICc3NMKwRic7XHJcbiAgY3VycmVudFRlbXBEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5pZCA9ICdmb3JlY2FzdC1kZXNjcmlwdGlvbic7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQYXJ0bHkgY2xvdWR5JztcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGVzY3JpcHRpb24pO1xyXG5cclxuICBjb25zdCBoaWdoTG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGlnaExvd0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWdoLWxvdycpO1xyXG5cclxuICBjb25zdCBoaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaGlnaFAudGV4dENvbnRlbnQgPSAnSDogJztcclxuXHJcbiAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBoaWdoLmlkID0gJ2N1cnJlbnQtaGlnaCc7XHJcbiAgaGlnaC50ZXh0Q29udGVudCA9ICc3NMKwJztcclxuICBoaWdoUC5hcHBlbmRDaGlsZChoaWdoKTtcclxuICBoaWdoRGl2LmFwcGVuZENoaWxkKGhpZ2hQKTtcclxuXHJcbiAgY29uc3QgbG93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBsb3dQLnRleHRDb250ZW50ID0gJ0w6ICc7XHJcblxyXG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBsb3cuaWQgPSAnY3VycmVudC1sb3cnO1xyXG4gIGxvdy50ZXh0Q29udGVudCA9ICc1NMKwJztcclxuICBsb3dQLmFwcGVuZENoaWxkKGxvdyk7XHJcbiAgbG93RGl2LmFwcGVuZENoaWxkKGxvd1ApO1xyXG5cclxuICBoaWdoTG93RGl2LmFwcGVuZENoaWxkKGhpZ2hEaXYpO1xyXG4gIGhpZ2hMb3dEaXYuYXBwZW5kQ2hpbGQobG93RGl2KTtcclxuXHJcbiAgY3VycmVudERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXJEaXYpO1xyXG4gIGN1cnJlbnREZXRhaWxzRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRGl2KTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERlc2NyaXB0aW9uRGl2KTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChoaWdoTG93RGl2KTtcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50Q2l0eURpdik7XHJcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50RGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVDdXJyZW50Rm9yZWNhc3QgZnJvbSAnLi9jdXJyZW50LWZvcmVjYXN0LWxheW91dCc7XHJcbmltcG9ydCBjcmVhdGVNb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscyBmcm9tICcuL2FkZGl0aW9uYWwtY3VycmVudC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5pbXBvcnQgY3JlYXRlQWRkaXRpb25hbEZvcmVjYXN0IGZyb20gJy4vYWRkaXRpb25hbC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbk1lbnUoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgY29uc3Qgc2VhcmNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgc2VhcmNoSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmcnO1xyXG5cclxuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxvZ29JbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC93ZWF0aGVyLWFwcC1sb2dvLnN2Zyc7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHNlYXJjaElucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWNpdHknO1xyXG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGNpdHkgKGVnLiBMb3MgQW5nZWxlcyknO1xyXG5cclxuICBzZWFyY2hDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKTtcclxuICBzZWFyY2hDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG4gIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXJEaXYpO1xyXG5cclxuICBjb25zdCBoYW1idXJnZXJNZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBjb25zdCBoYW1idXJnZXJNZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaGFtYnVyZ2VyTWVudUltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2hhbWJ1cmdlci1tZW51LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgaGFtYnVyZ2VyTWVudUxpbmsuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUltZyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgc2VhcmNoTGluay5hcHBlbmRDaGlsZChzZWFyY2hJbWcpO1xyXG5cclxuICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZGl0aW9uYWxPcHRpb25zRGl2LmFwcGVuZENoaWxkKHNlYXJjaExpbmspO1xyXG4gIGFkZGl0aW9uYWxPcHRpb25zRGl2LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVMaW5rKTtcclxuICBhZGRpdGlvbmFsT3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLW9wdGlvbnMnKTtcclxuXHJcbiAgbmF2LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChhZGRpdGlvbmFsT3B0aW9uc0Rpdik7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZpZ2F0aW9uTWVudSgpO1xyXG4gIGNvbnN0IGN1cnJlbnRGb3JlY2FzdCA9IGNyZWF0ZUN1cnJlbnRGb3JlY2FzdCgpO1xyXG4gIGNvbnN0IG1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzID0gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKTtcclxuICBjb25zdCBhZGRpdGlvbmFsRm9yZWNhc3REZXRhaWxzID0gY3JlYXRlQWRkaXRpb25hbEZvcmVjYXN0KCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbk1lbnUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3VycmVudEZvcmVjYXN0KTtcclxuICBib2R5LmFwcGVuZENoaWxkKG1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGFkZGl0aW9uYWxGb3JlY2FzdERldGFpbHMpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL2xpZ2h0LXRoZW1lLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vcGFnZS1sYXlvdXQnO1xyXG5cclxuKCgpID0+IHtcclxuICBjcmVhdGVQYWdlKCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==