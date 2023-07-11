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
    background-color: var(--navigation);
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
	background-color: var(--white);
    color: var(--black);
}



/** CURRENT FORECAST STYLES **/

section#current-forecast {
    background-color: lightskyblue;
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

/** 3-DAY FORECAST CARD STYLES **/`, "",{"version":3,"sources":["webpack://./src/light-theme.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kGAAkG;IAClG,uCAAuC;IACvC,gBAAgB;IAChB,sGAAsG;IACtG,gDAAgD;IAChD,wBAAwB;IACxB,0BAA0B;IAC1B,4GAA4G;IAC5G,2BAA2B;IAC3B,mCAAmC;IACnC,yHAAyH;IACzH,+CAA+C;IAC/C,+BAA+B;IAC/B,qCAAqC;IACrC,gDAAgD;AACpD;;AAEA;IACI,sBAAsB;AAC1B;;;;AAIA,yBAAyB;;AAEzB;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;;;AAIA,2BAA2B;AAC3B;IACI,sCAAsC;AAC1C;;;;AAIA,wBAAwB;;AAExB;IACI,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;CACC,2BAA2B;AAC5B;;;AAGA,2BAA2B;AAC3B;IACI,oCAAoC;IACpC,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;IACI,2CAA2C;AAC/C;;;;AAIA,iCAAiC;AACjC;CACC,8BAA8B;IAC3B,mBAAmB;AACvB;;;;AAIA,8BAA8B;;AAE9B;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;AACjC;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,2CAA2C;;AAE3C;IACI,gCAAgC;;IAEhC,iBAAiB;IACjB,0DAA0D;AAC9D;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;;AAGJ,yCAAyC;AACzC;IACI,4CAA4C;AAChD;;IAEI,kBAAkB;IAClB;QACI;YACI,6BAA6B;QACjC;IACJ;;AAEJ,yBAAyB;AACzB;IACI,6BAA6B;AACjC;;AAEA,iCAAiC","sourcesContent":[":root {\r\n    --black: #323232;\r\n    --black-filter: invert(17%) sepia(0%) saturate(0%) hue-rotate(16deg) brightness(93%) contrast(89%);;\r\n    --black-transparent: rgb(0, 0, 0, 0.25);\r\n    --white: #F2F2F2;\r\n    --white-filter: invert(99%) sepia(2%) saturate(143%) hue-rotate(198deg) brightness(116%) contrast(90%);\r\n    --day: linear-gradient(135deg, #0087E7, #C29900);\r\n    --power-primary: #00131A;\r\n    --power-secondary: #64D1F3;\r\n    --power-tertiary: invert(100%) sepia(36%) saturate(4010%) hue-rotate(176deg) brightness(103%) contrast(101%);\r\n    --power-quaternary: #7FA9D6;\r\n    --transparent: rgb(46, 68, 87, 0.5);\r\n    --transparent-filter: invert(23%) sepia(70%) saturate(299%) hue-rotate(166deg) brightness(86%) contrast(90%) opacity(50%);\r\n    --additional-forecast: rgba(242, 242, 242, 0.2);\r\n    --card: rgb(250, 250, 250, 0.1);\r\n    --navigation: rgb(242, 242, 242, 0.2);\r\n    --dropshadow: 0rem 0.5rem 1rem rgb(0, 0, 0, 0.1);  \r\n}\r\n\r\nbody {\r\n    background: var(--day);\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n\r\n.secondary {\r\n    color: var(--power-secondary);\r\n}\r\n\r\n.tertiary {\r\n    filter: var(--power-tertiary);\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\nbutton {\r\n    background-color: var(--power-primary);\r\n}\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n    background-color: var(--navigation);\r\n    color: var(--white);\r\n}\r\n\r\nnav.main-nav img {\r\n    filter: var(--white-filter);\r\n}\r\n\r\nnav.side-nav-container {\r\n    color: var(--black);\r\n}\r\n\r\nnav .side-nav {\r\n    background-color: var(--navigation);\r\n}\r\n\r\nnav.side-nav-container .logo,\r\nnav.side-nav-container .divider {\r\n    filter: var(--black-filter);\r\n}\r\n\r\nnav.side-nav-container .exit img {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n.slider {\r\n    background-color: var(--transparent);\r\n    border: solid 1px var(--white);\r\n}\r\n\r\n.slider:before {\r\n    background-color: var(--white);\r\n}\r\n\r\ninput:checked + .slider {\r\n\tbackground: var(--power-quaternary);\r\n}\r\n  \r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px var(--power-quaternary);\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n\tbackground-color: var(--white);\r\n    color: var(--black);\r\n}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES **/\r\n\r\nsection#current-forecast {\r\n    background-color: lightskyblue;\r\n    color: var(--white);\r\n    box-shadow: var(--dropshadow);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #current-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details-container {\r\n    background: var(--power-primary);\r\n\r\n    /* MOBILE STYLE */\r\n    box-shadow: 0rem 0.125rem 0.25rem var(--black-transparent);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #more-current-forecast-details-container {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n\r\n/** ADDITIONAL FORECAST DETAILS STYLES **/\r\n#additional-forecast {\r\n    background-color: var(--additional-forecast);\r\n}\r\n\r\n    /* DESKTOP STYLE */\r\n    @media only screen and (min-width: 1024px) {\r\n        #additional-forecast {\r\n            box-shadow: var(--dropshadow);\r\n        }\r\n    }\r\n\r\n/** HOURLY CARD STYLES **/\r\n.hourly-card {\r\n    background-color: var(--card);\r\n}\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid-desktop.svg */ "./src/assets/images/layout/magnifying-glass-solid-desktop.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/layout/magnifying-glass-solid.svg */ "./src/assets/images/layout/magnifying-glass-solid.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
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

h5.small {
	font-size: 0.75rem;
	line-height: 1rem;
}

h5.small.bold {
	font-family: 'Barlow Bold';
}

p {
	font-family: 'Barlow Regular';
	font-size: 1rem;
	line-height: 1.5rem;
}

p.small {
	font-family: 'Barlow Regular';
	font-size: 0.75rem;
	line-height: 0;
}

p.bold {
	font-family: 'Barlow Bold';
	font-size: 1rem;
	line-height: 1.5rem;
}



/** OTHER GENERAL STYLES **/
.hidden {
	display: none;
}

input[type=text] {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
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

nav.main-nav img {
	height: 1rem;
}

nav.main-nav .logo, nav.side-nav .logo {
	height: 1.5rem;
}

nav.main-nav .additional-options {
	display: flex;
	gap: 1rem;
}

nav.main-nav .additional-options button {
	padding: 0;
	background-color: transparent;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		nav.main-nav .additional-options button {
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
	background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
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
	padding: 0.5rem;
}

.mobile-search-modal .search-bar {
	display: flex;
	gap: 0.5rem;
}

.mobile-search-modal .mobile-search {
	width: 100%;
}

.mobile-search-modal input {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) no-repeat scroll 0.75rem 50%/1rem 1rem;
	border: solid 1px var(--gray);

	width: 100%;
	box-sizing: border-box;
}

.mobile-search-modal .results-container {
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

.toggle-div {
	display: none;
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
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#current-forecast {
			align-items: stretch;
			justify-content: space-between;
			padding: 3rem;
			border-radius: 1.75rem;

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
	padding-top: 8rem;
}

	/** DESKTOP BELOW **/
	@media only screen and (min-width: 1024px) {
		#additional-forecast {
			border-radius: 1.75rem;
			padding: 3rem;
			padding-bottom: 4rem;

			grid-column-start: 2;
			grid-column-end: 3;
			grid-row-start: 1;
			grid-row-end: 3;
		}
	}

#additional-forecast h3 {
	font-size: 1.5rem;
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



/** 3-DAY FORECAST STYLES **/
.three-day-forecast {
	display: flex;
	flex-direction: column;
	gap: 1rem;
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
	gap: 2rem;
	
	padding: 0.5rem 0rem;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n:root {\r\n\t--black: #222222;\r\n\t--white: #F2F2F2;\r\n\t--gray: #A0A0A0;\r\n\t--white-filter: invert(99%) sepia(90%) saturate(106%) hue-rotate(51deg) brightness(112%) contrast(90%);\r\n\t--gray-filter: invert(83%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(78%) contrast(86%);\r\n\t--transparent: rgb(242, 242, 242, 0.8);\r\n\t--transparent-dark: rgba(34, 34, 34, 0.2);\r\n\t--input-placeholder: rgb(242, 242, 242, 0.7);\r\n}\r\n\r\n\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Regular';\r\n\tsrc: url('../src/assets/fonts/Barlow-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Bold';\r\n\tsrc: url('../src/assets/fonts/Barlow-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Thin';\r\n\tsrc: url('../src/assets/fonts/Barlow-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Bold.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tsrc: url('../src/assets/fonts/BarlowSemiCondensed-Thin.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Barlow Regular', 'Arial', sans-serif;\r\n\tcolor: var(--white);\r\n\r\n\t/** MOBILE **/\r\n\tbackground-attachment: scroll;\r\n    min-height: 100vh;\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n/** COLOR CLASS STYLES **/\r\n.white-filter {\r\n\tfilter: var(--white-filter);\r\n}\r\n\r\n.transparent {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL FONT STYLES **/\r\n\r\nh1 {\r\n\tfont-family: 'Barlow Semi-Condensed Thin';\r\n\tfont-size: 4rem;\r\n\tline-height: 5rem;\r\n}\r\n\r\nh1.bold {\r\n\tfont-family: 'Barlow Semi-Condensed Bold';\r\n\tfont-size: 5rem;\r\n\tline-height: 5rem;\r\n}\r\n\r\nh2 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh2.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 3rem;\r\n\tline-height: 4rem;\r\n}\r\n\r\nh3 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 2rem;\r\n\tline-height: 3rem;\r\n}\r\n\r\nh3.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 2rem;\r\n\tline-height: 3rem;\r\n}\r\n\r\nh4 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh4.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2rem;\r\n}\r\n\r\nh5 {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\nh5.small {\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1rem;\r\n}\r\n\r\nh5.small.bold {\r\n\tfont-family: 'Barlow Bold';\r\n}\r\n\r\np {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\np.small {\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 0.75rem;\r\n\tline-height: 0;\r\n}\r\n\r\np.bold {\r\n\tfont-family: 'Barlow Bold';\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/** OTHER GENERAL STYLES **/\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=text] {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tpadding: 0.5rem;\r\n\tpadding-left: 2.5rem;\r\n\tborder: solid 1px;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n}\r\n\r\nbutton {\r\n\tborder: none;\r\n\tborder-radius: 0.5rem;\r\n\r\n\tfont-family: 'Barlow Regular';\r\n\tfont-size: 1rem;\r\n\tpadding: 0.5rem 1rem;\r\n\tcolor: var(--white);\r\n}\r\n\r\n\r\n\r\n\r\n/** NAVIGATION STYLES **/\r\n\r\nnav {\r\n\tdisplay: flex;\r\n}\r\n\r\nnav.main-nav {\r\n\tgap: 1rem;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 1rem;\r\n}\r\n\r\nnav.main-nav img {\r\n\theight: 1rem;\r\n}\r\n\r\nnav.main-nav .logo, nav.side-nav .logo {\r\n\theight: 1.5rem;\r\n}\r\n\r\nnav.main-nav .additional-options {\r\n\tdisplay: flex;\r\n\tgap: 1rem;\r\n}\r\n\r\nnav.main-nav .additional-options button {\r\n\tpadding: 0;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .additional-options button {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\nnav.main-nav .desktop-search {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\tnav.main-nav .desktop-search {\r\n\t\t\tdisplay: block;\r\n\t\t}\r\n\t}\r\n\r\n\r\nnav.main-nav .desktop-search input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid-desktop.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--white);\r\n\twidth: 15rem;\r\n\tbackground-color: transparent;\r\n\tcolor: var(--white);\r\n}\r\n\r\nnav.main-nav .desktop-search input::placeholder {\r\n\tcolor: var(--input-placeholder);\r\n}\r\n\r\nnav.side-nav-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    \r\n    height: 100vh;\r\n    padding: 0;\r\n    z-index: 1;\r\n    gap: 0;\r\n\r\n\tbackground-color: rgb(0, 0, 0, 0.7);\r\n}\r\n\r\nnav.side-nav-container button {\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nnav.side-nav-container .side-nav {\r\n    padding: 1rem;\r\n    flex: 4;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nnav.side-nav-container li {\r\n    margin: 1rem 0rem;\r\n}\r\n\r\nnav.side-nav-container .exit {\r\n    padding: 1rem 1rem;\r\n\tflex: 1;\r\n}\r\n\r\nnav.side-nav-container hr {\r\n    border: none;\r\n    border-top: solid 1px var(--power-secondary);\r\n\tmargin: 2rem 0rem;\r\n}\r\n\r\n\r\n\r\n/** MOBILE SEARCH MODAL STYLES **/\r\n.mobile-search-modal {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\theight: 100vh;\r\n\tz-index: 2;\r\n\tpadding: 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .search-bar {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .mobile-search {\r\n\twidth: 100%;\r\n}\r\n\r\n.mobile-search-modal input {\r\n\tbackground: url('../src/assets/images/layout/magnifying-glass-solid.svg') no-repeat scroll 0.75rem 50%/1rem 1rem;\r\n\tborder: solid 1px var(--gray);\r\n\r\n\twidth: 100%;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.mobile-search-modal .results-container {\r\n\tpadding: 2rem 0.5rem;\r\n}\r\n\r\n.mobile-search-modal .search-result {\r\n\tdisplay: flex;\r\n\tgap: 0.75rem;\r\n\talign-items: center;\r\n}\r\n\r\n.mobile-search-modal .search-result img {\r\n\tfilter: var(--gray-filter);\r\n}\r\n\r\n\r\n\r\n/** SLIDER SWITCH STYLES **/\r\n\r\n.switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.75rem;\r\n\theight: 1.5rem;\r\n}\r\n\r\n.switch input { \r\n\topacity: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n\r\n.slider {\r\n\tposition: absolute;\r\n\tcursor: pointer;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\n.slider:before {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\theight: 1rem;\r\n\twidth: 1rem;\r\n\tleft: 4px;\r\n\tbottom: 3px;\r\n\t-webkit-transition: .2s;\r\n\ttransition: .2s;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n\t-webkit-transform: translateX(18px);\r\n\t-ms-transform: translateX(18px);\r\n\ttransform: translateX(18px);\r\n}\r\n  \r\n/* Rounded sliders */\r\n.slider.round {\r\n\tborder-radius: 32px;\r\n}\r\n  \r\n.slider.round:before {\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.toggle-div {\r\n\tdisplay: none;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.toggle-div {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 0.5rem;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** MAIN-CONTAINER STYLES **/\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t.main-container {\r\n\t\t\tmargin: 5rem;\r\n\t\t}\r\n\r\n\t\t.grid-container {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgap: 1rem;\r\n\t\t\tgrid-template: 4fr 1fr / 50% 50%;\r\n\r\n\t\t\tmin-width: 50rem;\r\n\t\t\tmax-width: 80rem;\r\n\t\t\tmargin: auto;\r\n\t\t}\r\n\t}\r\n\r\n\r\n\r\n/** CURRENT FORECAST STYLES - MOBILE **/\r\n\r\n#current-forecast {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-bottom: 10rem;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast {\r\n\t\t\talign-items: stretch;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tborder-radius: 1.75rem;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 2;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .forecast-details,\r\n#current-forecast .forecast-details .bottom {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details {\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#current-forecast .forecast-details .bottom {\r\n\t\t\talign-items: flex-start;\r\n\t\t}\r\n\t}\r\n\r\n#current-forecast .high-low {\r\n\tdisplay: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n#current-forecast img#current-weather {\r\n\theight: 9rem;\r\n}\r\n\r\n\r\n\r\n/** MORE CURRENT FORECAST DETAILS STYLES **/\r\n\r\n#more-current-forecast-details {\r\n\tmargin: 0rem 1rem;\r\n\t/** MOBILE BELOW **/\r\n\tposition: absolute;\r\n    top: 43rem;\r\n    width: calc(100% - 2rem);\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details {\r\n\t\t\tmargin: auto;\r\n\t\t\tposition: static;\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\tgrid-column-start: 1;\r\n\t\t\tgrid-column-end: 2;\r\n\t\t\tgrid-row-start: 2;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details-container {\r\n\tdisplay: flex;\r\n\tgap: 2rem;\r\n\tjustify-content: center;\r\n\tpadding: 1.5rem;\r\n\tborder-radius: 1.75rem;\r\n}\r\n\t/** TABLET BELOW **/\r\n\t@media only screen and (min-width: 426px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 25rem;\r\n\t\t\tmargin-left: auto;\r\n\t\t\tmargin-right: auto;\r\n\r\n\t\t\tjustify-content: space-evenly;\r\n\t\t\tpadding: 1.5rem 3rem;\r\n\t\t}\r\n\t}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#more-current-forecast-details-container {\r\n\t\t\tmax-width: 100%;\r\n\t\t}\r\n\t}\r\n\r\n#more-current-forecast-details img {\r\n\tfilter: var(--white-filter) opacity(80%);\r\n\theight: 2rem;\r\n}\r\n\r\n#more-current-forecast-details .module {\r\n\tdisplay: flex;\r\n    flex-direction: column;\r\n\tgap: 0.5rem;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n/** ADDITIONAL FORECAST STYLES - MOBILE **/\r\n\r\n#additional-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 3rem;\r\n\tpadding: 3rem 1rem;\r\n\tpadding-top: 8rem;\r\n}\r\n\r\n\t/** DESKTOP BELOW **/\r\n\t@media only screen and (min-width: 1024px) {\r\n\t\t#additional-forecast {\r\n\t\t\tborder-radius: 1.75rem;\r\n\t\t\tpadding: 3rem;\r\n\t\t\tpadding-bottom: 4rem;\r\n\r\n\t\t\tgrid-column-start: 2;\r\n\t\t\tgrid-column-end: 3;\r\n\t\t\tgrid-row-start: 1;\r\n\t\t\tgrid-row-end: 3;\r\n\t\t}\r\n\t}\r\n\r\n#additional-forecast h3 {\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n/** HOURLY FORECAST STYLES **/\r\n.hourly-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 2rem;\r\n}\r\n\r\n/** HOURLY FORECAST CARD STYLES **/\r\n\r\n.hourly-card {\r\n\tpadding: 1.5rem;\r\n\tpadding-top: 1rem;\r\n\tborder-radius: 0.75rem;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgap: 1.5rem;\r\n}\r\n\r\n.hourly-card img {\r\n\twidth: 2rem;\r\n}\r\n\r\n.hourly-card h4 {\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n\r\n.hourly-card p {\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n/** HOURLY FORECAST CAROUSEL STYLES **/\r\n\r\n.hourly-forecast-carousel {\r\n\toverflow-x: auto;\r\n}\r\n\r\n.no-scrollbar {\r\n\tscrollbar-color: transparent transparent;\r\n}\r\n\r\n.no-scrollbar::-webkit-scrollbar {\r\n\theight: 0px;\r\n}\r\n\r\n.hourly-forecast-carousel .container {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n/** 3-DAY FORECAST STYLES **/\r\n.three-day-forecast {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 1rem;\r\n}\r\n\r\n.three-day-forecast-list {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n/** 3-DAY FORECAST CARD STYLES **/\r\n.daily-bar {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 2rem;\r\n\t\r\n\tpadding: 0.5rem 0rem;\r\n}\r\n\r\n.daily-bar .details {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex: 1;\r\n\tgap: 1rem; /** MOBILE **/\r\n}\r\n\r\n.daily-bar .forecast,\r\n.daily-bar .temperatures,\r\n.daily-bar .chance-of-rain {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.daily-bar .forecast {\r\n\tflex: 1;\r\n}\r\n\r\n.daily-bar .forecast .icon {\r\n\theight: 1.5rem;\r\n}\r\n\r\n.daily-bar .chance-of-rain .icon {\r\n\theight: 1rem;\r\n}\r\n\r\n.daily-bar h4 {\r\n\tfont-size: 1rem;\r\n}"],"sourceRoot":""}]);
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
  corTitle.classList.add('bold', 'secondary', 'small');
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
  humidityTitle.classList.add('bold', 'secondary', 'small');
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
  windTitle.classList.add('bold', 'secondary', 'small');
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
  uvTitle.classList.add('bold', 'secondary', 'small');
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
  highP.classList.add('bold');
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
  corIconImg.classList.add('white-filter');
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
  threeDayForecast.classList.add('three-day-forecast');

  const threeDayForecastTitleDiv = document.createElement('div');
  const threeDayForecastTitle = document.createElement('h3');
  threeDayForecastTitle.classList.add('bold');
  threeDayForecastTitle.textContent = '3-Day Forecast';
  threeDayForecastTitleDiv.appendChild(threeDayForecastTitle);
  threeDayForecast.appendChild(threeDayForecastTitleDiv);

  const threeDayForecastList = document.createElement('div');
  threeDayForecastList.classList.add('three-day-forecast-list');

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

  const bottomDiv = document.createElement('div');
  bottomDiv.classList.add('bottom');

  const currentTempDiv = document.createElement('div');
  const currentTemp = document.createElement('h1');
  currentTemp.classList.add('bold');
  currentTemp.id = 'current-temp';
  currentTemp.textContent = '74°F';
  currentTempDiv.appendChild(currentTemp);
  bottomDiv.appendChild(currentTempDiv);

  const forecastDescriptionDiv = document.createElement('div');
  const forecastDescription = document.createElement('h4');
  forecastDescription.classList.add('bold');
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
  /*currentDetailsDiv.appendChild(currentTempDiv);
  currentDetailsDiv.appendChild(forecastDescriptionDiv);
  currentDetailsDiv.appendChild(highLowDiv);*/

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
  } else if (!(cityResult instanceof Error) && cityResult.length !== 0) {
    // display a clickable result containing city weather info
    console.log('we found a city that matches! result: ', cityResult);
  } else {
    // display an error that the search query was not found along with search tips
    console.log('no city found :(');
  }
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





function createCityInputForm() {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('desktop-search');
  const form = document.createElement('form');

  const label = document.createElement('label');
  label.for = 'city-desktop';

  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'city-desktop';
  input.placeholder = 'Search city';
  label.appendChild(input);

  form.appendChild(label);
  inputContainer.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    (0,_fetch_cities__WEBPACK_IMPORTED_MODULE_3__["default"])(input.value);
  });

  return inputContainer;
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

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    (0,_fetch_cities__WEBPACK_IMPORTED_MODULE_3__["default"])(input.value);
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

  const desktopSearchCityForm = createCityInputForm();

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
  darkLightModeSwitchDiv.classList.add('toggle-div');

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

  const additionalOptionsDiv = document.createElement('div');
  additionalOptionsDiv.appendChild(searchButton);
  additionalOptionsDiv.appendChild(hamburgerMenuButton);
  additionalOptionsDiv.appendChild(darkLightModeSwitchDiv);
  additionalOptionsDiv.appendChild(farenheitCelsiusSwitchDiv);
  additionalOptionsDiv.classList.add('additional-options');

  nav.appendChild(logoDiv);
  nav.appendChild(desktopSearchCityForm);
  nav.appendChild(additionalOptionsDiv);

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

function createQueryResultBar(searchResult) {
  const locationIcon = document.createElement('div');
  const icon = document.createElement('img');
  icon.src = '../src/assets/images/layout/location-marker.svg';
  locationIcon.appendChild(icon);

  const textResult = document.createElement('div');
  textResult.textContent = searchResult;

  const result = document.createElement('div');
  result.classList.add('search-result');

  result.appendChild(locationIcon);
  result.appendChild(textResult);

  return result;
}

function createMobileSearchModal() {
  const modal = document.createElement('div');
  modal.classList.add('mobile-search-modal', 'hidden');

  const cityInputForm = createCityInputFormMobile();

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('button', 'primary');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', toggleSearchModal);

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-bar');
  searchContainer.appendChild(cityInputForm);
  searchContainer.appendChild(cancelButton);
  modal.appendChild(searchContainer);

  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('results-container');

  const testResult = createQueryResultBar('Los Angeles, CA');

  resultsContainer.appendChild(testResult);

  modal.appendChild(resultsContainer);

  return modal;
}

function createPage() {
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




(() => {
  (0,_page_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsWUFBWSxNQUFNLFlBQVksU0FBUyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLFlBQVksTUFBTSxZQUFZLGFBQWEsU0FBUyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE1BQU0sYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sdUNBQXVDLHlCQUF5Qiw0R0FBNEcsZ0RBQWdELHlCQUF5QiwrR0FBK0cseURBQXlELGlDQUFpQyxtQ0FBbUMscUhBQXFILG9DQUFvQyw0Q0FBNEMsa0lBQWtJLHdEQUF3RCx3Q0FBd0MsOENBQThDLDJEQUEyRCxLQUFLLGNBQWMsK0JBQStCLEtBQUssOERBQThELHNDQUFzQyxLQUFLLG1CQUFtQixzQ0FBc0MsS0FBSyx3REFBd0QsK0NBQStDLEtBQUssc0RBQXNELDRDQUE0Qyw0QkFBNEIsS0FBSywwQkFBMEIsb0NBQW9DLEtBQUssZ0NBQWdDLDRCQUE0QixLQUFLLHVCQUF1Qiw0Q0FBNEMsS0FBSywwRUFBMEUsb0NBQW9DLEtBQUssMENBQTBDLGtDQUFrQyxLQUFLLHFEQUFxRCw2Q0FBNkMsdUNBQXVDLEtBQUssd0JBQXdCLHVDQUF1QyxLQUFLLGlDQUFpQywwQ0FBMEMsS0FBSyxpQ0FBaUMsb0RBQW9ELEtBQUssNEVBQTRFLHFDQUFxQyw0QkFBNEIsS0FBSyxpRkFBaUYsdUNBQXVDLDRCQUE0QixzQ0FBc0MsS0FBSyxtRkFBbUYsK0JBQStCLDhDQUE4QyxhQUFhLFNBQVMsMEdBQTBHLHlDQUF5QyxpR0FBaUcsS0FBSyxtRkFBbUYsc0RBQXNELDhDQUE4QyxhQUFhLFNBQVMsZ0ZBQWdGLHFEQUFxRCxLQUFLLG1GQUFtRixrQ0FBa0MsOENBQThDLGFBQWEsU0FBUyxvREFBb0Qsc0NBQXNDLEtBQUssNkRBQTZEO0FBQ253SjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SnZDO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG9KQUF5RDtBQUNyRyw0Q0FBNEMsOElBQXNEO0FBQ2xHLDRDQUE0Qyw4SUFBc0Q7QUFDbEcsNENBQTRDLHdLQUFtRTtBQUMvRyw0Q0FBNEMsd0tBQW1FO0FBQy9HLDRDQUE0QyxvTUFBaUY7QUFDN0gsNENBQTRDLG9MQUF5RTtBQUNySCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLFNBQVMsWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFNBQVMsWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFNBQVMsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sUUFBUSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxRQUFRLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVB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QUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUplO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixNQUFNLDRDQUE0QyxjQUFjO0FBQ25KO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLElBQUksb0JBQW9CO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsTUFBTSxvREFBb0QsY0FBYztBQUM1SjtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQixJQUFJLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEOEQ7QUFDc0I7QUFDaEI7QUFDNUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0VBQXFCO0FBQy9DLHFDQUFxQywrRUFBZ0M7QUFDckUsb0NBQW9DLHVFQUF3QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNLO0FBQ1k7QUFDdkM7QUFDQTtBQUNBLEVBQUUsd0RBQVU7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbGlnaHQtdGhlbWUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xpZ2h0LXRoZW1lLmNzcz83YmRjIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FkZGl0aW9uYWwtY3VycmVudC1mb3JlY2FzdC1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYWRkaXRpb25hbC1mb3JlY2FzdC1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3VycmVudC1mb3JlY2FzdC1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZmV0Y2gtY2l0aWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2UtbGF5b3V0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XHJcbiAgICAtLWJsYWNrLWZpbHRlcjogaW52ZXJ0KDE3JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE2ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoODklKTs7XHJcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2IoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xyXG4gICAgLS13aGl0ZS1maWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDIlKSBzYXR1cmF0ZSgxNDMlKSBodWUtcm90YXRlKDE5OGRlZykgYnJpZ2h0bmVzcygxMTYlKSBjb250cmFzdCg5MCUpO1xyXG4gICAgLS1kYXk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDg3RTcsICNDMjk5MDApO1xyXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xyXG4gICAgLS1wb3dlci1zZWNvbmRhcnk6ICM2NEQxRjM7XHJcbiAgICAtLXBvd2VyLXRlcnRpYXJ5OiBpbnZlcnQoMTAwJSkgc2VwaWEoMzYlKSBzYXR1cmF0ZSg0MDEwJSkgaHVlLXJvdGF0ZSgxNzZkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTAxJSk7XHJcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XHJcbiAgICAtLXRyYW5zcGFyZW50OiByZ2IoNDYsIDY4LCA4NywgMC41KTtcclxuICAgIC0tdHJhbnNwYXJlbnQtZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDI5OSUpIGh1ZS1yb3RhdGUoMTY2ZGVnKSBicmlnaHRuZXNzKDg2JSkgY29udHJhc3QoOTAlKSBvcGFjaXR5KDUwJSk7XHJcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcclxuICAgIC0tY2FyZDogcmdiKDI1MCwgMjUwLCAyNTAsIDAuMSk7XHJcbiAgICAtLW5hdmlnYXRpb246IHJnYigyNDIsIDI0MiwgMjQyLCAwLjIpO1xyXG4gICAgLS1kcm9wc2hhZG93OiAwcmVtIDAuNXJlbSAxcmVtIHJnYigwLCAwLCAwLCAwLjEpOyAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGF5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xyXG5cclxuLnNlY29uZGFyeSB7XHJcbiAgICBjb2xvcjogdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLnRlcnRpYXJ5IHtcclxuICAgIGZpbHRlcjogdmFyKC0tcG93ZXItdGVydGlhcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvd2VyLXByaW1hcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBOQVZJR0FUSU9OIFNUWUxFUyAqKi9cclxuXHJcbm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uKTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiBpbWcge1xyXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbm5hdiAuc2lkZS1uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2aWdhdGlvbik7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmxvZ28sXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmRpdmlkZXIge1xyXG4gICAgZmlsdGVyOiB2YXIoLS1ibGFjay1maWx0ZXIpO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5leGl0IGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuLyoqIFNMSURFUiBTV0lUQ0ggU1RZTEVTICoqL1xyXG4uc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXdoaXRlKTtcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tcG93ZXItcXVhdGVybmFyeSk7XHJcbn1cclxuICBcclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggdmFyKC0tcG93ZXItcXVhdGVybmFyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgKiovXHJcblxyXG5zZWN0aW9uI2N1cnJlbnQtZm9yZWNhc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjY3VycmVudC1mb3JlY2FzdCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4vKiogTU9SRSBDVVJSRU5UIEZPUkVDQVNUIERFVEFJTFMgU1RZTEVTICoqL1xyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcclxuXHJcbiAgICAvKiBNT0JJTEUgU1RZTEUgKi9cclxuICAgIGJveC1zaGFkb3c6IDByZW0gMC4xMjVyZW0gMC4yNXJlbSB2YXIoLS1ibGFjay10cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbiAgICAvKiBERVNLVE9QIFNUWUxFICovXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1kcm9wc2hhZG93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXHJcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xyXG59XHJcblxyXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAjYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbi8qKiBIT1VSTFkgQ0FSRCBTVFlMRVMgKiovXHJcbi5ob3VybHktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcclxufVxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xpZ2h0LXRoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrR0FBa0c7SUFDbEcsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixzR0FBc0c7SUFDdEcsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsNEdBQTRHO0lBQzVHLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMseUhBQXlIO0lBQ3pILCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7OztBQUlBLHlCQUF5Qjs7QUFFekI7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7Ozs7QUFJQSwyQkFBMkI7QUFDM0I7SUFDSSxzQ0FBc0M7QUFDMUM7Ozs7QUFJQSx3QkFBd0I7O0FBRXhCO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7OztBQUdBLDJCQUEyQjtBQUMzQjtJQUNJLG9DQUFvQztJQUNwQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Q0FDQyxtQ0FBbUM7QUFDcEM7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7Ozs7QUFJQSxpQ0FBaUM7QUFDakM7Q0FDQyw4QkFBOEI7SUFDM0IsbUJBQW1CO0FBQ3ZCOzs7O0FBSUEsOEJBQThCOztBQUU5QjtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztJQUVJLGtCQUFrQjtJQUNsQjtRQUNJO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7OztBQUdKLDJDQUEyQzs7QUFFM0M7SUFDSSxnQ0FBZ0M7O0lBRWhDLGlCQUFpQjtJQUNqQiwwREFBMEQ7QUFDOUQ7O0lBRUksa0JBQWtCO0lBQ2xCO1FBQ0k7WUFDSSw2QkFBNkI7UUFDakM7SUFDSjs7O0FBR0oseUNBQXlDO0FBQ3pDO0lBQ0ksNENBQTRDO0FBQ2hEOztJQUVJLGtCQUFrQjtJQUNsQjtRQUNJO1lBQ0ksNkJBQTZCO1FBQ2pDO0lBQ0o7O0FBRUoseUJBQXlCO0FBQ3pCO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLGlDQUFpQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tYmxhY2s6ICMzMjMyMzI7XFxyXFxuICAgIC0tYmxhY2stZmlsdGVyOiBpbnZlcnQoMTclKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTZkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg4OSUpOztcXHJcXG4gICAgLS1ibGFjay10cmFuc3BhcmVudDogcmdiKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgICAtLXdoaXRlOiAjRjJGMkYyO1xcclxcbiAgICAtLXdoaXRlLWZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoMiUpIHNhdHVyYXRlKDE0MyUpIGh1ZS1yb3RhdGUoMTk4ZGVnKSBicmlnaHRuZXNzKDExNiUpIGNvbnRyYXN0KDkwJSk7XFxyXFxuICAgIC0tZGF5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA4N0U3LCAjQzI5OTAwKTtcXHJcXG4gICAgLS1wb3dlci1wcmltYXJ5OiAjMDAxMzFBO1xcclxcbiAgICAtLXBvd2VyLXNlY29uZGFyeTogIzY0RDFGMztcXHJcXG4gICAgLS1wb3dlci10ZXJ0aWFyeTogaW52ZXJ0KDEwMCUpIHNlcGlhKDM2JSkgc2F0dXJhdGUoNDAxMCUpIGh1ZS1yb3RhdGUoMTc2ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwMSUpO1xcclxcbiAgICAtLXBvd2VyLXF1YXRlcm5hcnk6ICM3RkE5RDY7XFxyXFxuICAgIC0tdHJhbnNwYXJlbnQ6IHJnYig0NiwgNjgsIDg3LCAwLjUpO1xcclxcbiAgICAtLXRyYW5zcGFyZW50LWZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSgyOTklKSBodWUtcm90YXRlKDE2NmRlZykgYnJpZ2h0bmVzcyg4NiUpIGNvbnRyYXN0KDkwJSkgb3BhY2l0eSg1MCUpO1xcclxcbiAgICAtLWFkZGl0aW9uYWwtZm9yZWNhc3Q6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC4yKTtcXHJcXG4gICAgLS1jYXJkOiByZ2IoMjUwLCAyNTAsIDI1MCwgMC4xKTtcXHJcXG4gICAgLS1uYXZpZ2F0aW9uOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC4yKTtcXHJcXG4gICAgLS1kcm9wc2hhZG93OiAwcmVtIDAuNXJlbSAxcmVtIHJnYigwLCAwLCAwLCAwLjEpOyAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xcclxcblxcclxcbi5zZWNvbmRhcnkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlcnRpYXJ5IHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS1wb3dlci10ZXJ0aWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wb3dlci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgaW1nIHtcXHJcXG4gICAgZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zaWRlLW5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIC5sb2dvLFxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmRpdmlkZXIge1xcclxcbiAgICBmaWx0ZXI6IHZhcigtLWJsYWNrLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQgaW1nIHtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tcG93ZXItcXVhdGVybmFyeSk7XFxyXFxufVxcclxcbiAgXFxyXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1wb3dlci1xdWF0ZXJuYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG5zZWN0aW9uI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgICAgI2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PUkUgQ1VSUkVOVCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcG93ZXItcHJpbWFyeSk7XFxyXFxuXFxyXFxuICAgIC8qIE1PQklMRSBTVFlMRSAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwcmVtIDAuMTI1cmVtIDAuMjVyZW0gdmFyKC0tYmxhY2stdHJhbnNwYXJlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgICAgI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tZHJvcHNoYWRvdyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiogQURESVRJT05BTCBGT1JFQ0FTVCBERVRBSUxTIFNUWUxFUyAqKi9cXHJcXG4jYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtZm9yZWNhc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLyogREVTS1RPUCBTVFlMRSAqL1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgICAgI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWRyb3BzaGFkb3cpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBDQVJEIFNUWUxFUyAqKi9cXHJcXG4uaG91cmx5LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIDMtREFZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQtZGVza3RvcC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbjpyb290IHtcclxuXHQtLWJsYWNrOiAjMjIyMjIyO1xyXG5cdC0td2hpdGU6ICNGMkYyRjI7XHJcblx0LS1ncmF5OiAjQTBBMEEwO1xyXG5cdC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDEwNiUpIGh1ZS1yb3RhdGUoNTFkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoOTAlKTtcclxuXHQtLWdyYXktZmlsdGVyOiBpbnZlcnQoODMlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTUzZGVnKSBicmlnaHRuZXNzKDc4JSkgY29udHJhc3QoODYlKTtcclxuXHQtLXRyYW5zcGFyZW50OiByZ2IoMjQyLCAyNDIsIDI0MiwgMC44KTtcclxuXHQtLXRyYW5zcGFyZW50LWRhcms6IHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcclxuXHQtLWlucHV0LXBsYWNlaG9sZGVyOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC43KTtcclxufVxyXG5cclxuXHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IEJvbGQnO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgVGhpbic7XHJcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBCb2xkJztcclxuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIFRoaW4nO1xyXG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcblx0LyoqIE1PQklMRSAqKi9cclxuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ09MT1IgQ0xBU1MgU1RZTEVTICoqL1xyXG4ud2hpdGUtZmlsdGVyIHtcclxuXHRmaWx0ZXI6IHZhcigtLXdoaXRlLWZpbHRlcik7XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudCB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogR0VORVJBTCBGT05UIFNUWUxFUyAqKi9cclxuXHJcbmgxIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBUaGluJztcclxuXHRmb250LXNpemU6IDRyZW07XHJcblx0bGluZS1oZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbmgxLmJvbGQge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIEJvbGQnO1xyXG5cdGZvbnQtc2l6ZTogNXJlbTtcclxuXHRsaW5lLWhlaWdodDogNXJlbTtcclxufVxyXG5cclxuaDIge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogM3JlbTtcclxuXHRsaW5lLWhlaWdodDogNHJlbTtcclxufVxyXG5cclxuaDIuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAzcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG59XHJcblxyXG5oMyB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG5oMy5ib2xkIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0bGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbmg0IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuaDQuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbmg1IHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuaDUuc21hbGwge1xyXG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcclxuXHRsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuaDUuc21hbGwuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5wLnNtYWxsIHtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcclxuXHRmb250LXNpemU6IDAuNzVyZW07XHJcblx0bGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnAuYm9sZCB7XHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE9USEVSIEdFTkVSQUwgU1RZTEVTICoqL1xyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0cGFkZGluZzogMC41cmVtO1xyXG5cdHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG5cdGJvcmRlcjogc29saWQgMXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcblx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG5cdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiogTkFWSUdBVElPTiBTVFlMRVMgKiovXHJcblxyXG5uYXYge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiB7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiBpbWcge1xyXG5cdGhlaWdodDogMXJlbTtcclxufVxyXG5cclxubmF2Lm1haW4tbmF2IC5sb2dvLCBuYXYuc2lkZS1uYXYgLmxvZ28ge1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5uYXYubWFpbi1uYXYgLmFkZGl0aW9uYWwtb3B0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDFyZW07XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIGJ1dHRvbiB7XHJcblx0cGFkZGluZzogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0bmF2Lm1haW4tbmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMgYnV0dG9uIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHRuYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2ggaW5wdXQge1xyXG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSBuby1yZXBlYXQgc2Nyb2xsIDAuNzVyZW0gNTAlLzFyZW0gMXJlbTtcclxuXHRib3JkZXI6IHNvbGlkIDFweCB2YXIoLS13aGl0ZSk7XHJcblx0d2lkdGg6IDE1cmVtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogdmFyKC0taW5wdXQtcGxhY2Vob2xkZXIpO1xyXG59XHJcblxyXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZ2FwOiAwO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBidXR0b24ge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuc2lkZS1uYXYge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZsZXg6IDQ7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgbGkge1xyXG4gICAgbWFyZ2luOiAxcmVtIDByZW07XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgLmV4aXQge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG5cdGZsZXg6IDE7XHJcbn1cclxuXHJcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgaHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLXBvd2VyLXNlY29uZGFyeSk7XHJcblx0bWFyZ2luOiAycmVtIDByZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ei1pbmRleDogMjtcclxuXHRwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtYmFyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAubW9iaWxlLXNlYXJjaCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIGlucHV0IHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSkgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JheSk7XHJcblxyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5yZXN1bHRzLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMnJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogMC43NXJlbTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9iaWxlLXNlYXJjaC1tb2RhbCAuc2VhcmNoLXJlc3VsdCBpbWcge1xyXG5cdGZpbHRlcjogdmFyKC0tZ3JheS1maWx0ZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cclxuXHJcbi5zd2l0Y2gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDIuNzVyZW07XHJcblx0aGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQgeyBcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcblx0dHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG5cdHdpZHRoOiAxcmVtO1xyXG5cdGxlZnQ6IDRweDtcclxuXHRib3R0b206IDNweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMThweCk7XHJcbn1cclxuICBcclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbn1cclxuICBcclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnRvZ2dsZS1kaXYge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdC50b2dnbGUtZGl2IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0Z2FwOiAwLjVyZW07XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG4vKiogTUFJTi1DT05UQUlORVIgU1RZTEVTICoqL1xyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0Lm1haW4tY29udGFpbmVyIHtcclxuXHRcdFx0bWFyZ2luOiA1cmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5ncmlkLWNvbnRhaW5lciB7XHJcblx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdGdhcDogMXJlbTtcclxuXHRcdFx0Z3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDUwJSA1MCU7XHJcblxyXG5cdFx0XHRtaW4td2lkdGg6IDUwcmVtO1xyXG5cdFx0XHRtYXgtd2lkdGg6IDgwcmVtO1xyXG5cdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG4vKiogQ1VSUkVOVCBGT1JFQ0FTVCBTVFlMRVMgLSBNT0JJTEUgKiovXHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cmVtO1xyXG5cdHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTByZW07XHJcbn1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IHtcclxuXHRcdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0cGFkZGluZzogM3JlbTtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMsXHJcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjY3VycmVudC1mb3JlY2FzdCAuZm9yZWNhc3QtZGV0YWlscyB7XHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jY3VycmVudC1mb3JlY2FzdCAuaGlnaC1sb3cge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtZm9yZWNhc3QgaW1nI2N1cnJlbnQtd2VhdGhlciB7XHJcblx0aGVpZ2h0OiA5cmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXHJcblxyXG4jbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMge1xyXG5cdG1hcmdpbjogMHJlbSAxcmVtO1xyXG5cdC8qKiBNT0JJTEUgQkVMT1cgKiovXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0M3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcclxufVxyXG5cclxuXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG5cdFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcclxuXHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG5cdFx0XHRncmlkLWNvbHVtbi1lbmQ6IDI7XHJcblx0XHRcdGdyaWQtcm93LXN0YXJ0OiAyO1xyXG5cdFx0XHRncmlkLXJvdy1lbmQ6IDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDJyZW07XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0cGFkZGluZzogMS41cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcbn1cclxuXHQvKiogVEFCTEVUIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDI1cmVtO1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRcdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqIERFU0tUT1AgQkVMT1cgKiovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIGltZyB7XHJcblx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcclxuXHRoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDAuNXJlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xyXG5cclxuI2FkZGl0aW9uYWwtZm9yZWNhc3Qge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDNyZW07XHJcblx0cGFkZGluZzogM3JlbSAxcmVtO1xyXG5cdHBhZGRpbmctdG9wOiA4cmVtO1xyXG59XHJcblxyXG5cdC8qKiBERVNLVE9QIEJFTE9XICoqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcblx0XHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XHJcblx0XHRcdHBhZGRpbmc6IDNyZW07XHJcblx0XHRcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG5cclxuXHRcdFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcblx0XHRcdGdyaWQtY29sdW1uLWVuZDogMztcclxuXHRcdFx0Z3JpZC1yb3ctc3RhcnQ6IDE7XHJcblx0XHRcdGdyaWQtcm93LWVuZDogMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG4jYWRkaXRpb25hbC1mb3JlY2FzdCBoMyB7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xyXG4uaG91cmx5LWZvcmVjYXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAycmVtO1xyXG59XHJcblxyXG4vKiogSE9VUkxZIEZPUkVDQVNUIENBUkQgU1RZTEVTICoqL1xyXG5cclxuLmhvdXJseS1jYXJkIHtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0cGFkZGluZy10b3A6IDFyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Z2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5ob3VybHktY2FyZCBpbWcge1xyXG5cdHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgaDQge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uaG91cmx5LWNhcmQgcCB7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FST1VTRUwgU1RZTEVTICoqL1xyXG5cclxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCB7XHJcblx0b3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLm5vLXNjcm9sbGJhciB7XHJcblx0c2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5vLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdGhlaWdodDogMHB4O1xyXG59XHJcblxyXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsIC5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIDMtREFZIEZPUkVDQVNUIFNUWUxFUyAqKi9cclxuLnRocmVlLWRheS1mb3JlY2FzdCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMXJlbTtcclxufVxyXG5cclxuLnRocmVlLWRheS1mb3JlY2FzdC1saXN0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Z2FwOiAwLjVyZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cclxuLmRhaWx5LWJhciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMnJlbTtcclxuXHRcclxuXHRwYWRkaW5nOiAwLjVyZW0gMHJlbTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZGV0YWlscyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXg6IDE7XHJcblx0Z2FwOiAxcmVtOyAvKiogTU9CSUxFICoqL1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5mb3JlY2FzdCxcclxuLmRhaWx5LWJhciAudGVtcGVyYXR1cmVzLFxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5mb3JlY2FzdCB7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLmRhaWx5LWJhciAuZm9yZWNhc3QgLmljb24ge1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XHJcblx0aGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYmFyIGg0IHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7Ozs7QUFJQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHNHQUFzRztDQUN0RyxrR0FBa0c7Q0FDbEcsc0NBQXNDO0NBQ3RDLHlDQUF5QztDQUN6Qyw0Q0FBNEM7QUFDN0M7Ozs7QUFJQTtDQUNDLDZCQUE2QjtDQUM3QiwrREFBcUU7Q0FDckUsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQiwrREFBa0U7Q0FDbEUsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQiwrREFBa0U7Q0FDbEUsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHlDQUF5QztDQUN6QywrREFBK0U7Q0FDL0UsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHlDQUF5QztDQUN6QywrREFBK0U7Q0FDL0UsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7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QWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbjpyb290IHtcXHJcXG5cXHQtLWJsYWNrOiAjMjIyMjIyO1xcclxcblxcdC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuXFx0LS1ncmF5OiAjQTBBMEEwO1xcclxcblxcdC0td2hpdGUtZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg5MCUpIHNhdHVyYXRlKDEwNiUpIGh1ZS1yb3RhdGUoNTFkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoOTAlKTtcXHJcXG5cXHQtLWdyYXktZmlsdGVyOiBpbnZlcnQoODMlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTUzZGVnKSBicmlnaHRuZXNzKDc4JSkgY29udHJhc3QoODYlKTtcXHJcXG5cXHQtLXRyYW5zcGFyZW50OiByZ2IoMjQyLCAyNDIsIDI0MiwgMC44KTtcXHJcXG5cXHQtLXRyYW5zcGFyZW50LWRhcms6IHJnYmEoMzQsIDM0LCAzNCwgMC4yKTtcXHJcXG5cXHQtLWlucHV0LXBsYWNlaG9sZGVyOiByZ2IoMjQyLCAyNDIsIDI0MiwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRzcmM6IHVybCgnLi4vc3JjL2Fzc2V0cy9mb250cy9CYXJsb3ctQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFRoaW4nO1xcclxcblxcdHNyYzogdXJsKCcuLi9zcmMvYXNzZXRzL2ZvbnRzL0Jhcmxvdy1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgQm9sZCc7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaS1Db25kZW5zZWQgVGhpbic7XFxyXFxuXFx0c3JjOiB1cmwoJy4uL3NyYy9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1UaGluLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcicsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG5cXHJcXG5cXHQvKiogTU9CSUxFICoqL1xcclxcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDT0xPUiBDTEFTUyBTVFlMRVMgKiovXFxyXFxuLndoaXRlLWZpbHRlciB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4udHJhbnNwYXJlbnQge1xcclxcblxcdGZpbHRlcjogdmFyKC0td2hpdGUtZmlsdGVyKSBvcGFjaXR5KDgwJSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIEZPTlQgU1RZTEVTICoqL1xcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pLUNvbmRlbnNlZCBUaGluJztcXHJcXG5cXHRmb250LXNpemU6IDRyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbmgxLmJvbGQge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWktQ29uZGVuc2VkIEJvbGQnO1xcclxcblxcdGZvbnQtc2l6ZTogNXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgUmVndWxhcic7XFxyXFxuXFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMy5ib2xkIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBCb2xkJztcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDQuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDUuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDUuc21hbGwuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnQmFybG93IFJlZ3VsYXInO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5wLnNtYWxsIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbnAuYm9sZCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQm9sZCc7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBPVEhFUiBHRU5FUkFMIFNUWUxFUyAqKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtO1xcclxcblxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcblxcdGJvcmRlcjogc29saWQgMXB4O1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG5cXHJcXG5cXHRmb250LWZhbWlseTogJ0JhcmxvdyBSZWd1bGFyJztcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE5BVklHQVRJT04gU1RZTEVTICoqL1xcclxcblxcclxcbm5hdiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IHtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0cGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IGltZyB7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmxvZ28sIG5hdi5zaWRlLW5hdiAubG9nbyB7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Lm1haW4tbmF2IC5hZGRpdGlvbmFsLW9wdGlvbnMgYnV0dG9uIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdG5hdi5tYWluLW5hdiAuYWRkaXRpb25hbC1vcHRpb25zIGJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbm5hdi5tYWluLW5hdiAuZGVza3RvcC1zZWFyY2gge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0bmF2Lm1haW4tbmF2IC5kZXNrdG9wLXNlYXJjaCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9tYWduaWZ5aW5nLWdsYXNzLXNvbGlkLWRlc2t0b3Auc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0td2hpdGUpO1xcclxcblxcdHdpZHRoOiAxNXJlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYubWFpbi1uYXYgLmRlc2t0b3Atc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgXFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGdhcDogMDtcXHJcXG5cXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciBidXR0b24ge1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuc2lkZS1uYXYge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmbGV4OiA0O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdi5zaWRlLW5hdi1jb250YWluZXIgbGkge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2LnNpZGUtbmF2LWNvbnRhaW5lciAuZXhpdCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG5cXHRmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYuc2lkZS1uYXYtY29udGFpbmVyIGhyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tcG93ZXItc2Vjb25kYXJ5KTtcXHJcXG5cXHRtYXJnaW46IDJyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIE1PQklMRSBTRUFSQ0ggTU9EQUwgU1RZTEVTICoqL1xcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1iYXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5tb2JpbGUtc2VhcmNoIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgaW5wdXQge1xcclxcblxcdGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L21hZ25pZnlpbmctZ2xhc3Mtc29saWQuc3ZnJykgbm8tcmVwZWF0IHNjcm9sbCAwLjc1cmVtIDUwJS8xcmVtIDFyZW07XFxyXFxuXFx0Ym9yZGVyOiBzb2xpZCAxcHggdmFyKC0tZ3JheSk7XFxyXFxuXFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnJlc3VsdHMtY29udGFpbmVyIHtcXHJcXG5cXHRwYWRkaW5nOiAycmVtIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZS1zZWFyY2gtbW9kYWwgLnNlYXJjaC1yZXN1bHQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjc1cmVtO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGUtc2VhcmNoLW1vZGFsIC5zZWFyY2gtcmVzdWx0IGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS1ncmF5LWZpbHRlcik7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBTTElERVIgU1dJVENIIFNUWUxFUyAqKi9cXHJcXG5cXHJcXG4uc3dpdGNoIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdHdpZHRoOiAyLjc1cmVtO1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIGlucHV0IHsgXFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHR3aWR0aDogMDtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0cmlnaHQ6IDA7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcclxcblxcdHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRoZWlnaHQ6IDFyZW07XFxyXFxuXFx0d2lkdGg6IDFyZW07XFxyXFxuXFx0bGVmdDogNHB4O1xcclxcblxcdGJvdHRvbTogM3B4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xcclxcblxcdHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KTtcXHJcXG59XFxyXFxuICBcXHJcXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbn1cXHJcXG4gIFxcclxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdC50b2dnbGUtZGl2IHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGdhcDogMC41cmVtO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUFJTi1DT05UQUlORVIgU1RZTEVTICoqL1xcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0Lm1haW4tY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDVyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5ncmlkLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRcXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0XFx0Z3JpZC10ZW1wbGF0ZTogNGZyIDFmciAvIDUwJSA1MCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0bWluLXdpZHRoOiA1MHJlbTtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDgwcmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbjogYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBDVVJSRU5UIEZPUkVDQVNUIFNUWUxFUyAtIE1PQklMRSAqKi9cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTByZW07XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAzcmVtO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEuNzVyZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzLFxcclxcbiNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I2N1cnJlbnQtZm9yZWNhc3QgLmZvcmVjYXN0LWRldGFpbHMge1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNjdXJyZW50LWZvcmVjYXN0IC5mb3JlY2FzdC1kZXRhaWxzIC5ib3R0b20ge1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI2N1cnJlbnQtZm9yZWNhc3QgLmhpZ2gtbG93IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1mb3JlY2FzdCBpbWcjY3VycmVudC13ZWF0aGVyIHtcXHJcXG5cXHRoZWlnaHQ6IDlyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBNT1JFIENVUlJFTlQgRk9SRUNBU1QgREVUQUlMUyBTVFlMRVMgKiovXFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIHtcXHJcXG5cXHRtYXJnaW46IDByZW0gMXJlbTtcXHJcXG5cXHQvKiogTU9CSUxFIEJFTE9XICoqL1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0M3JlbTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG5cXHQvKiogREVTS1RPUCBCRUxPVyAqKi9cXHJcXG5cXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcblxcdFxcdCNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiBhdXRvO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuXFx0XFx0XFx0Z3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LXN0YXJ0OiAyO1xcclxcblxcdFxcdFxcdGdyaWQtcm93LWVuZDogMztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscy1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xcclxcbn1cXHJcXG5cXHQvKiogVEFCTEVUIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI2cHgpIHtcXHJcXG5cXHRcXHQjbW9yZS1jdXJyZW50LWZvcmVjYXN0LWRldGFpbHMtY29udGFpbmVyIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IDI1cmVtO1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8qKiBERVNLVE9QIEJFTE9XICoqL1xcclxcblxcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFx0XFx0I21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuI21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzIGltZyB7XFxyXFxuXFx0ZmlsdGVyOiB2YXIoLS13aGl0ZS1maWx0ZXIpIG9wYWNpdHkoODAlKTtcXHJcXG5cXHRoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyAubW9kdWxlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFERElUSU9OQUwgRk9SRUNBU1QgU1RZTEVTIC0gTU9CSUxFICoqL1xcclxcblxcclxcbiNhZGRpdGlvbmFsLWZvcmVjYXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAzcmVtO1xcclxcblxcdHBhZGRpbmc6IDNyZW0gMXJlbTtcXHJcXG5cXHRwYWRkaW5nLXRvcDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFx0LyoqIERFU0tUT1AgQkVMT1cgKiovXFxyXFxuXFx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHRcXHQjYWRkaXRpb25hbC1mb3JlY2FzdCB7XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMS43NXJlbTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAzcmVtO1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcblxcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcblxcdFxcdFxcdGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1zdGFydDogMTtcXHJcXG5cXHRcXHRcXHRncmlkLXJvdy1lbmQ6IDM7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG4jYWRkaXRpb25hbC1mb3JlY2FzdCBoMyB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgU1RZTEVTICoqL1xcclxcbi5ob3VybHktZm9yZWNhc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qKiBIT1VSTFkgRk9SRUNBU1QgQ0FSRCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIHtcXHJcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxyXFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXHJcXG5cXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJseS1jYXJkIGltZyB7XFxyXFxuXFx0d2lkdGg6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2FyZCBoNCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ob3VybHktY2FyZCBwIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEhPVVJMWSBGT1JFQ0FTVCBDQVJPVVNFTCBTVFlMRVMgKiovXFxyXFxuXFxyXFxuLmhvdXJseS1mb3JlY2FzdC1jYXJvdXNlbCB7XFxyXFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5vLXNjcm9sbGJhciB7XFxyXFxuXFx0c2Nyb2xsYmFyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdGhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsIC5jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiAzLURBWSBGT1JFQ0FTVCBTVFlMRVMgKiovXFxyXFxuLnRocmVlLWRheS1mb3JlY2FzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRocmVlLWRheS1mb3JlY2FzdC1saXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qKiAzLURBWSBGT1JFQ0FTVCBDQVJEIFNUWUxFUyAqKi9cXHJcXG4uZGFpbHktYmFyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcblxcdFxcclxcblxcdHBhZGRpbmc6IDAuNXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5kZXRhaWxzIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG5cXHRnYXA6IDFyZW07IC8qKiBNT0JJTEUgKiovXFxyXFxufVxcclxcblxcclxcbi5kYWlseS1iYXIgLmZvcmVjYXN0LFxcclxcbi5kYWlseS1iYXIgLnRlbXBlcmF0dXJlcyxcXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5mb3JlY2FzdCB7XFxyXFxuXFx0ZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWJhciAuZm9yZWNhc3QgLmljb24ge1xcclxcblxcdGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIC5jaGFuY2Utb2YtcmFpbiAuaWNvbiB7XFxyXFxuXFx0aGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYmFyIGg0IHtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saWdodC10aGVtZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpZ2h0LXRoZW1lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDaGFuY2VPZlJhaW4oKSB7XHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcicpO1xyXG4gIGNvckRpdi5jbGFzc0xpc3QuYWRkKCdtb2R1bGUnKTtcclxuXHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvckltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9kcm9wbGV0LXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgY29ySWNvbkRpdi5hcHBlbmRDaGlsZChjb3JJbWcpO1xyXG4gIGNvckRpdi5hcHBlbmRDaGlsZChjb3JJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGNvclBlcmNlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb3JQZXJjZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvclBlcmNlbnQuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gIGNvclBlcmNlbnQuaWQgPSAnY2hhbmNlLW9mLXJhaW4nO1xyXG4gIGNvclBlcmNlbnQudGV4dENvbnRlbnQgPSAnMCUnO1xyXG4gIGNvclBlcmNlbnREaXYuYXBwZW5kQ2hpbGQoY29yUGVyY2VudCk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvclBlcmNlbnREaXYpO1xyXG5cclxuICBjb25zdCBjb3JUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICBjb3JUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NlY29uZGFyeScsICdzbWFsbCcpO1xyXG4gIGNvclRpdGxlLnRleHRDb250ZW50ID0gJ1JhaW4nO1xyXG4gIGNvclRpdGxlRGl2LmFwcGVuZENoaWxkKGNvclRpdGxlKTtcclxuICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY29yVGl0bGVEaXYpO1xyXG5cclxuICBjb3JEaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcclxuXHJcbiAgcmV0dXJuIGNvckRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSHVtaWRpdHkoKSB7XHJcbiAgY29uc3QgaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eURpdi5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xyXG4gIGh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eUljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGh1bWlkaXR5SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3dhdmVzLWZpbGwtc3ZncmVwby1jb20uc3ZnJztcclxuICBodW1pZGl0eUljb25EaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbWcpO1xyXG4gIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVBlcmNlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBodW1pZGl0eVBlcmNlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaHVtaWRpdHlQZXJjZW50LmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICBodW1pZGl0eVBlcmNlbnQuaWQgPSAnaHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5UGVyY2VudC50ZXh0Q29udGVudCA9ICcyMCUnO1xyXG4gIGh1bWlkaXR5UGVyY2VudERpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnQpO1xyXG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChodW1pZGl0eVBlcmNlbnREaXYpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaHVtaWRpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgaHVtaWRpdHlUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NlY29uZGFyeScsICdzbWFsbCcpO1xyXG4gIGh1bWlkaXR5VGl0bGUudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xyXG4gIGh1bWlkaXR5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUaXRsZSk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGl0bGVEaXYpO1xyXG5cclxuICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG5cclxuICByZXR1cm4gaHVtaWRpdHlEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmQoKSB7XHJcbiAgY29uc3Qgd2luZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZCgnd2luZCcpO1xyXG4gIHdpbmREaXYuY2xhc3NMaXN0LmFkZCgnbW9kdWxlJyk7XHJcblxyXG4gIGNvbnN0IHdpbmRJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgd2luZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHdpbmRJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvd2luZC1maWxsLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbiAgd2luZEljb25EaXYuYXBwZW5kQ2hpbGQod2luZEltZyk7XHJcbiAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kSWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICB3aW5kU3BlZWQuaWQgPSAnd2luZCc7XHJcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gJzVtcGgnO1xyXG4gIHdpbmRTcGVlZERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xyXG4gIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWREaXYpO1xyXG5cclxuICBjb25zdCB3aW5kVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB3aW5kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIHdpbmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NlY29uZGFyeScsICdzbWFsbCcpO1xyXG4gIHdpbmRUaXRsZS50ZXh0Q29udGVudCA9ICdXaW5kJztcclxuICB3aW5kVGl0bGVEaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcclxuICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlRGl2KTtcclxuXHJcbiAgd2luZERpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG5cclxuICByZXR1cm4gd2luZERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVVYoKSB7XHJcbiAgY29uc3QgdXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB1dkRpdi5jbGFzc0xpc3QuYWRkKCd1dicpO1xyXG4gIHV2RGl2LmNsYXNzTGlzdC5hZGQoJ21vZHVsZScpO1xyXG5cclxuICBjb25zdCB1dkljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB1dkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIHV2SW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1kZXRhaWxzL3N1bi1maWxsZWQtc3ZncmVwby1jb20uc3ZnJztcclxuICB1dkljb25EaXYuYXBwZW5kQ2hpbGQodXZJbWcpO1xyXG4gIHV2RGl2LmFwcGVuZENoaWxkKHV2SWNvbkRpdik7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB1dkluZGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICB1dkluZGV4LmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICB1dkluZGV4LmlkID0gJ3V2LWluZGV4JztcclxuICB1dkluZGV4LnRleHRDb250ZW50ID0gJzUgb2YgMTAnO1xyXG4gIHV2SW5kZXhEaXYuYXBwZW5kQ2hpbGQodXZJbmRleCk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHV2SW5kZXhEaXYpO1xyXG5cclxuICBjb25zdCB1dlRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgdXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ3NlY29uZGFyeScsICdzbWFsbCcpO1xyXG4gIHV2VGl0bGUudGV4dENvbnRlbnQgPSAnVVYgSW5kZXgnO1xyXG4gIHV2VGl0bGVEaXYuYXBwZW5kQ2hpbGQodXZUaXRsZSk7XHJcbiAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHV2VGl0bGVEaXYpO1xyXG5cclxuICB1dkRpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xyXG5cclxuICByZXR1cm4gdXZEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzKCkge1xyXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbi5pZCA9ICdtb3JlLWN1cnJlbnQtZm9yZWNhc3QtZGV0YWlscyc7XHJcblxyXG4gIGNvbnN0IG1vcmVGb3JlY2FzdERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb3JlRm9yZWNhc3REZXRhaWxzRGl2LmlkID0gJ21vcmUtY3VycmVudC1mb3JlY2FzdC1kZXRhaWxzLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGNyZWF0ZUNoYW5jZU9mUmFpbigpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluKTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBjcmVhdGVIdW1pZGl0eSgpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG5cclxuICBjb25zdCB3aW5kID0gY3JlYXRlV2luZCgpO1xyXG4gIG1vcmVGb3JlY2FzdERldGFpbHNEaXYuYXBwZW5kQ2hpbGQod2luZCk7XHJcblxyXG4gIGNvbnN0IHV2ID0gY3JlYXRlVVYoKTtcclxuICBtb3JlRm9yZWNhc3REZXRhaWxzRGl2LmFwcGVuZENoaWxkKHV2KTtcclxuXHJcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChtb3JlRm9yZWNhc3REZXRhaWxzRGl2KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiZnVuY3Rpb24gY3JlYXRlSG91cmx5Q2FyZCgpIHtcclxuICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdob3VybHktY2FyZCcpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICB0aW1lLnRleHRDb250ZW50ID0gJzJwbSc7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGZvcmVjYXN0SWNvbi5jbGFzc0xpc3QuYWRkKCd0ZXJ0aWFyeScpO1xyXG4gIGZvcmVjYXN0SWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy93ZWF0aGVyLXBhcnRseS1jbG91ZHktZGF5LXN2Z3JlcG8tY29tLnN2Zyc7XHJcblxyXG4gIGNvbnN0IGhvdXJseVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgaG91cmx5VGVtcC50ZXh0Q29udGVudCA9ICc3OMKwJztcclxuXHJcbiAgY2FyZERpdi5hcHBlbmRDaGlsZCh0aW1lKTtcclxuICBjYXJkRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0SWNvbik7XHJcbiAgY2FyZERpdi5hcHBlbmRDaGlsZChob3VybHlUZW1wKTtcclxuXHJcbiAgcmV0dXJuIGNhcmREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJseUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob3VybHlGb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICBob3VybHlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJseSBGb3JlY2FzdCc7XHJcbiAgaG91cmx5Rm9yZWNhc3RUaXRsZURpdi5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWZvcmVjYXN0LWNhcm91c2VsJyk7XHJcbiAgaG91cmx5Rm9yZWNhc3RDYXJvdXNlbC5jbGFzc0xpc3QuYWRkKCduby1zY3JvbGxiYXInKTtcclxuXHJcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGhvdXJseUNhcmQgPSBjcmVhdGVIb3VybHlDYXJkKCk7XHJcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VybHlDYXJkKTtcclxuICB9XHJcblxyXG4gIGhvdXJseUZvcmVjYXN0Q2Fyb3VzZWwuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RDb250YWluZXIpO1xyXG5cclxuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdFRpdGxlRGl2KTtcclxuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENhcm91c2VsKTtcclxuXHJcbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYWlseUZvcmVjYXN0QmFyKCkge1xyXG4gIGNvbnN0IGZvcmVjYXN0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9yZWNhc3RCYXIuY2xhc3NMaXN0LmFkZCgnZGFpbHktYmFyJyk7XHJcblxyXG4gIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xyXG4gIGRheS50ZXh0Q29udGVudCA9ICdXZWQnO1xyXG4gIGRheURpdi5hcHBlbmRDaGlsZChkYXkpO1xyXG4gIGZvcmVjYXN0QmFyLmFwcGVuZENoaWxkKGRheURpdik7XHJcblxyXG4gIGNvbnN0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmb3JlY2FzdERpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBpY29uSW1nLmNsYXNzTGlzdC5hZGQoJ3RlcnRpYXJ5Jyk7XHJcbiAgaWNvbkltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9yZWNhc3QtZGV0YWlscy9zdW4tb3V0bGluZS1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIHdlYXRoZXJJY29uRGl2LmFwcGVuZENoaWxkKGljb25JbWcpO1xyXG4gIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJY29uRGl2KTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1N1bm55IGFuZCBjbGVhcic7XHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERpdik7XHJcblxyXG4gIGNvbnN0IHRlbXBlcmF0dXJlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBlcmF0dXJlc0Rpdi5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZXMnKTtcclxuICBjb25zdCBoaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBoaWdoUC5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XHJcbiAgaGlnaFAuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gIGhpZ2hQLnRleHRDb250ZW50ID0gJzgwwrAnO1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbG93UC5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcclxuICBsb3dQLnRleHRDb250ZW50ID0gJzYywrAnO1xyXG4gIHRlbXBlcmF0dXJlc0Rpdi5hcHBlbmRDaGlsZChoaWdoUCk7XHJcbiAgdGVtcGVyYXR1cmVzRGl2LmFwcGVuZENoaWxkKGxvd1ApO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVzRGl2KTtcclxuXHJcbiAgY29uc3QgY29yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29yRGl2LmNsYXNzTGlzdC5hZGQoJ2NoYW5jZS1vZi1yYWluJyk7XHJcbiAgY29uc3QgY29ySWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvckljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjb3JJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICBjb3JJY29uSW1nLmNsYXNzTGlzdC5hZGQoJ3doaXRlLWZpbHRlcicpO1xyXG4gIGNvckljb25JbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2ZvcmVjYXN0LWRldGFpbHMvZHJvcGxldC1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGNvckljb25EaXYuYXBwZW5kQ2hpbGQoY29ySWNvbkltZyk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKGNvckljb25EaXYpO1xyXG4gIGNvbnN0IHBlcmNlbnRhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHBlcmNlbnRhZ2UuY2xhc3NMaXN0LmFkZCgncGVyY2VudGFnZScpO1xyXG4gIHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSAnMCUnO1xyXG4gIHBlcmNlbnRhZ2VEaXYuYXBwZW5kQ2hpbGQocGVyY2VudGFnZSk7XHJcbiAgY29yRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VEaXYpO1xyXG4gIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoY29yRGl2KTtcclxuXHJcbiAgZm9yZWNhc3RCYXIuYXBwZW5kQ2hpbGQoZGV0YWlsc0Rpdik7XHJcblxyXG4gIHJldHVybiBmb3JlY2FzdEJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlM0RheUZvcmVjYXN0KCkge1xyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0aHJlZURheUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ3RocmVlLWRheS1mb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCB0aHJlZURheUZvcmVjYXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdFRpdGxlLnRleHRDb250ZW50ID0gJzMtRGF5IEZvcmVjYXN0JztcclxuICB0aHJlZURheUZvcmVjYXN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQodGhyZWVEYXlGb3JlY2FzdFRpdGxlKTtcclxuICB0aHJlZURheUZvcmVjYXN0LmFwcGVuZENoaWxkKHRocmVlRGF5Rm9yZWNhc3RUaXRsZURpdik7XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuY2xhc3NMaXN0LmFkZCgndGhyZWUtZGF5LWZvcmVjYXN0LWxpc3QnKTtcclxuXHJcbiAgY29uc3QgZGF5T25lID0gY3JlYXRlRGFpbHlGb3JlY2FzdEJhcigpO1xyXG4gIGNvbnN0IGRheVR3byA9IGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoKTtcclxuICBjb25zdCBkYXlUaHJlZSA9IGNyZWF0ZURhaWx5Rm9yZWNhc3RCYXIoKTtcclxuXHJcbiAgdGhyZWVEYXlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoZGF5T25lKTtcclxuICB0aHJlZURheUZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChkYXlUd28pO1xyXG4gIHRocmVlRGF5Rm9yZWNhc3RMaXN0LmFwcGVuZENoaWxkKGRheVRocmVlKTtcclxuXHJcbiAgdGhyZWVEYXlGb3JlY2FzdC5hcHBlbmRDaGlsZCh0aHJlZURheUZvcmVjYXN0TGlzdCk7XHJcblxyXG4gIHJldHVybiB0aHJlZURheUZvcmVjYXN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBZGRpdGlvbmFsRm9yZWNhc3QoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2FkZGl0aW9uYWwtZm9yZWNhc3QnO1xyXG5cclxuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGNyZWF0ZUhvdXJseUZvcmVjYXN0KCk7XHJcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdCk7XHJcblxyXG4gIGNvbnN0IHRocmVlRGF5Rm9yZWNhc3QgPSBjcmVhdGUzRGF5Rm9yZWNhc3QoKTtcclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKHRocmVlRGF5Rm9yZWNhc3QpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDdXJyZW50Rm9yZWNhc3QoKSB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uLmlkID0gJ2N1cnJlbnQtZm9yZWNhc3QnO1xyXG5cclxuICBjb25zdCBjdXJyZW50Q2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGN1cnJlbnRDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjdXJyZW50Q2l0eS5pZCA9ICdjdXJyZW50LWNpdHknO1xyXG4gIGN1cnJlbnRDaXR5LnRleHRDb250ZW50ID0gJ1ZlbnR1cmEnO1xyXG4gIGN1cnJlbnRDaXR5RGl2LmFwcGVuZENoaWxkKGN1cnJlbnRDaXR5KTtcclxuXHJcbiAgY29uc3QgY3VycmVudERldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kZXRhaWxzJyk7XHJcblxyXG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY3VycmVudFdlYXRoZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjdXJyZW50V2VhdGhlckltZy5pZCA9ICdjdXJyZW50LXdlYXRoZXInO1xyXG4gIGN1cnJlbnRXZWF0aGVySW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9mb3JlY2FzdC1jdXJyZW50L3BhcnRseS1jbG91ZHkuc3ZnJztcclxuICBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckltZyk7XHJcblxyXG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCdib3R0b20nKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgY3VycmVudFRlbXAuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnQtdGVtcCc7XHJcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSAnNzTCsEYnO1xyXG4gIGN1cnJlbnRUZW1wRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcclxuICBib3R0b21EaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXYpO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5pZCA9ICdmb3JlY2FzdC1kZXNjcmlwdGlvbic7XHJcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQYXJ0bHkgY2xvdWR5JztcclxuICBmb3JlY2FzdERlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGVzY3JpcHRpb24pO1xyXG4gIGJvdHRvbURpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERlc2NyaXB0aW9uRGl2KTtcclxuXHJcbiAgY29uc3QgaGlnaExvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhpZ2hMb3dEaXYuY2xhc3NMaXN0LmFkZCgnaGlnaC1sb3cnKTtcclxuXHJcbiAgY29uc3QgaGlnaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhpZ2hQLnRleHRDb250ZW50ID0gJ0g6ICc7XHJcblxyXG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaGlnaC5pZCA9ICdjdXJyZW50LWhpZ2gnO1xyXG4gIGhpZ2gudGV4dENvbnRlbnQgPSAnNzTCsCc7XHJcbiAgaGlnaFAuYXBwZW5kQ2hpbGQoaGlnaCk7XHJcbiAgaGlnaERpdi5hcHBlbmRDaGlsZChoaWdoUCk7XHJcblxyXG4gIGNvbnN0IGxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMOiAnO1xyXG5cclxuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgbG93LmlkID0gJ2N1cnJlbnQtbG93JztcclxuICBsb3cudGV4dENvbnRlbnQgPSAnNTTCsCc7XHJcbiAgbG93UC5hcHBlbmRDaGlsZChsb3cpO1xyXG4gIGxvd0Rpdi5hcHBlbmRDaGlsZChsb3dQKTtcclxuXHJcbiAgaGlnaExvd0Rpdi5hcHBlbmRDaGlsZChoaWdoRGl2KTtcclxuICBoaWdoTG93RGl2LmFwcGVuZENoaWxkKGxvd0Rpdik7XHJcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGhpZ2hMb3dEaXYpO1xyXG5cclxuICBjdXJyZW50RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckRpdik7XHJcbiAgY3VycmVudERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoYm90dG9tRGl2KTtcclxuICAvKmN1cnJlbnREZXRhaWxzRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRGl2KTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERlc2NyaXB0aW9uRGl2KTtcclxuICBjdXJyZW50RGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChoaWdoTG93RGl2KTsqL1xyXG5cclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGN1cnJlbnRDaXR5RGl2KTtcclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGN1cnJlbnREZXRhaWxzRGl2KTtcclxuXHJcbiAgcmV0dXJuIHNlY3Rpb247XHJcbn1cclxuIiwiZnVuY3Rpb24gam9pblF1ZXJ5KHF1ZXJ5KSB7XHJcbiAgY29uc3QgbmV3UXVlcnkgPSBxdWVyeS5zcGxpdCgnLCAnKS5qb2luKCk7XHJcbiAgcmV0dXJuIG5ld1F1ZXJ5O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0J5UG9zdGFsQ29kZShxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC96aXA/emlwPSR7cXVlcnl9JmFwcGlkPThkZDQ0N2YwZWZhZTgzMjRmMTVjMjRmMmVmZGQ3ZTlmYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7cmVzcG9uc2Uuc3RhdHVzfSwgJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIHJldHVybiBlcnJvclxyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tCeUNpdHkocXVlcnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtxdWVyeX0mbGltaXQ9NSZhcHBpZD04ZGQ0NDdmMGVmYWU4MzI0ZjE1YzI0ZjJlZmRkN2U5ZmAsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlc3BvbnNlLnN0YXR1c30sICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyByZXR1cm4gZXJyb3JcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrUXVlcnkocXVlcnkpIHtcclxuICAvLyBicmVhayB1cCBxdWVyeSBpbnRvIGNvcnJlY3QgcGFydHMgKGVnLiBjaXR5LCBzdGF0ZSwgY291bnRyeSwgemlwIGNvZGUpXHJcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSBqb2luUXVlcnkocXVlcnkpO1xyXG4gIGNvbnN0IHBvc3RhbENvZGVSZXN1bHQgPSBhd2FpdCBjaGVja0J5UG9zdGFsQ29kZShzZWFyY2hRdWVyeSk7XHJcbiAgY29uc3QgY2l0eVJlc3VsdCA9IGF3YWl0IGNoZWNrQnlDaXR5KHNlYXJjaFF1ZXJ5KTtcclxuXHJcbiAgaWYgKCEocG9zdGFsQ29kZVJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSAmJiBwb3N0YWxDb2RlUmVzdWx0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgLy8gZGlzcGxheSBhIGNsaWNrYWJsZSByZXN1bHQgY29udGFpbmluZyBjaXR5IHdlYXRoZXIgaW5mb1xyXG4gICAgY29uc29sZS5sb2coJ3dlIGZvdW5kIGEgemlwIGNvZGUgdGhhdCBtYXRjaGVzISByZXN1bHQ6ICcsIHBvc3RhbENvZGVSZXN1bHQpO1xyXG4gIH0gZWxzZSBpZiAoIShjaXR5UmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpICYmIGNpdHlSZXN1bHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAvLyBkaXNwbGF5IGEgY2xpY2thYmxlIHJlc3VsdCBjb250YWluaW5nIGNpdHkgd2VhdGhlciBpbmZvXHJcbiAgICBjb25zb2xlLmxvZygnd2UgZm91bmQgYSBjaXR5IHRoYXQgbWF0Y2hlcyEgcmVzdWx0OiAnLCBjaXR5UmVzdWx0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZGlzcGxheSBhbiBlcnJvciB0aGF0IHRoZSBzZWFyY2ggcXVlcnkgd2FzIG5vdCBmb3VuZCBhbG9uZyB3aXRoIHNlYXJjaCB0aXBzXHJcbiAgICBjb25zb2xlLmxvZygnbm8gY2l0eSBmb3VuZCA6KCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlQ3VycmVudEZvcmVjYXN0IGZyb20gJy4vY3VycmVudC1mb3JlY2FzdC1sYXlvdXQnO1xyXG5pbXBvcnQgY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMgZnJvbSAnLi9hZGRpdGlvbmFsLWN1cnJlbnQtZm9yZWNhc3QtbGF5b3V0JztcclxuaW1wb3J0IGNyZWF0ZUFkZGl0aW9uYWxGb3JlY2FzdCBmcm9tICcuL2FkZGl0aW9uYWwtZm9yZWNhc3QtbGF5b3V0JztcclxuaW1wb3J0IGNoZWNrUXVlcnkgZnJvbSAnLi9mZXRjaC1jaXRpZXMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2l0eUlucHV0Rm9ybSgpIHtcclxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2t0b3Atc2VhcmNoJyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmZvciA9ICdjaXR5LWRlc2t0b3AnO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dC5pZCA9ICdjaXR5LWRlc2t0b3AnO1xyXG4gIGlucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBjaXR5JztcclxuICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xyXG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNoZWNrUXVlcnkoaW5wdXQudmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaW5wdXRDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNpdHlJbnB1dEZvcm1Nb2JpbGUoKSB7XHJcbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoJyk7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsLmZvciA9ICdjaXR5LW1vYmlsZSc7XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dC5pZCA9ICdjaXR5LW1vYmlsZSc7XHJcbiAgaW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggY2l0eSc7XHJcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjaGVja1F1ZXJ5KGlucHV0LnZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2dnbGVTd2l0Y2godG9nZ2xlTmFtZSkge1xyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKTtcclxuICBsYWJlbC5mb3IgPSB0b2dnbGVOYW1lO1xyXG5cclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgaW5wdXQuaWQgPSB0b2dnbGVOYW1lO1xyXG5cclxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnc2xpZGVyJywgJ3JvdW5kJyk7XHJcblxyXG4gIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgcmV0dXJuIGxhYmVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVTZWFyY2hNb2RhbCgpIHtcclxuICBjb25zdCBtb2JpbGVTZWFyY2hNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vYmlsZS1zZWFyY2gtbW9kYWwnKVswXTtcclxuICBpZiAobW9iaWxlU2VhcmNoTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgbW9iaWxlU2VhcmNoTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vYmlsZVNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbk1lbnUoKSB7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ21haW4tbmF2Jyk7XHJcbiAgY29uc3Qgc2VhcmNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgc2VhcmNoSW1nLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sYXlvdXQvbWFnbmlmeWluZy1nbGFzcy1zb2xpZC5zdmcnO1xyXG5cclxuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gIGxvZ29JbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC93ZWF0aGVyLWFwcC1sb2dvLnN2Zyc7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuXHJcbiAgY29uc3QgZGVza3RvcFNlYXJjaENpdHlGb3JtID0gY3JlYXRlQ2l0eUlucHV0Rm9ybSgpO1xyXG5cclxuICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzZWFyY2hDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzZWFyY2hDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2gtY2l0eSc7XHJcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgY2l0eSAoZWcuIExvcyBBbmdlbGVzKSc7XHJcblxyXG4gIHNlYXJjaENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChzZWFyY2hJbWcpO1xyXG4gIHNlYXJjaENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lckRpdik7XHJcblxyXG4gIGNvbnN0IGhhbWJ1cmdlck1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBoYW1idXJnZXJNZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XHJcbiAgY29uc3QgaGFtYnVyZ2VyTWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGhhbWJ1cmdlck1lbnVJbWcuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIGhhbWJ1cmdlck1lbnVJbWcuc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC9oYW1idXJnZXItbWVudS1zdmdyZXBvLWNvbS5zdmcnO1xyXG4gIGhhbWJ1cmdlck1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUltZyk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XHJcbiAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEltZyk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNlYXJjaE1vZGFsKTtcclxuXHJcbiAgY29uc3QgZGFya0xpZ2h0TW9kZVN3aXRjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLWRpdicpO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkYXJrTGlnaHRNb2RlU3dpdGNoUC5jbGFzc0xpc3QuYWRkKCdkYXJrLWxpZ2h0LXN3aXRjaCcsICdzbWFsbCcpO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hQLnRleHRDb250ZW50ID0gJ0VuYWJsZSBEYXJrIE1vZGUnO1xyXG5cclxuICBjb25zdCBkYXJrTGlnaHRNb2RlU3dpdGNoID0gY3JlYXRlVG9nZ2xlU3dpdGNoKCk7XHJcbiAgZGFya0xpZ2h0TW9kZVN3aXRjaC5pZCA9ICdkYXJrLWxpZ2h0LXN3aXRjaCc7XHJcblxyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuYXBwZW5kQ2hpbGQoZGFya0xpZ2h0TW9kZVN3aXRjaFApO1xyXG4gIGRhcmtMaWdodE1vZGVTd2l0Y2hEaXYuYXBwZW5kQ2hpbGQoZGFya0xpZ2h0TW9kZVN3aXRjaCk7XHJcblxyXG4gIGNvbnN0IGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS1kaXYnKTtcclxuXHJcbiAgY29uc3QgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAuY2xhc3NMaXN0LmFkZCgnZmFyZW5oZWl0LWNlbHNpdXMtc3dpdGNoJywgJ3NtYWxsJyk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaFAudGV4dENvbnRlbnQgPSAnRW5hYmxlIENlbHNpdXMnO1xyXG5cclxuICBjb25zdCBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoID0gY3JlYXRlVG9nZ2xlU3dpdGNoKCk7XHJcbiAgZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaC5pZCA9ICdmYXJlbmhlaXQtY2Vsc2l1cy1zd2l0Y2gnO1xyXG5cclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmFwcGVuZENoaWxkKGZhcmVuaGVpdENlbHNpdXNTd2l0Y2hQKTtcclxuICBmYXJlbmhlaXRDZWxzaXVzU3dpdGNoRGl2LmFwcGVuZENoaWxkKGZhcmVuaGVpdENlbHNpdXNTd2l0Y2gpO1xyXG5cclxuICBjb25zdCBhZGRpdGlvbmFsT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZGl0aW9uYWxPcHRpb25zRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUJ1dHRvbik7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZGFya0xpZ2h0TW9kZVN3aXRjaERpdik7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZmFyZW5oZWl0Q2Vsc2l1c1N3aXRjaERpdik7XHJcbiAgYWRkaXRpb25hbE9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1vcHRpb25zJyk7XHJcblxyXG4gIG5hdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoZGVza3RvcFNlYXJjaENpdHlGb3JtKTtcclxuICBuYXYuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbE9wdGlvbnNEaXYpO1xyXG5cclxuICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaWRlTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBzaWRlTmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgc2lkZU5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi1jb250YWluZXInKTtcclxuICBzaWRlTmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdicpO1xyXG5cclxuICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gIGxvZ28uc3JjID0gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2xheW91dC93ZWF0aGVyLWFwcC1sb2dvLnN2Zyc7XHJcbiAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBzaWRlTmF2LmFwcGVuZENoaWxkKGxvZ29EaXYpO1xyXG5cclxuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHRvcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgZGFya01vZGUudGV4dENvbnRlbnQgPSAnRGFyayBNb2RlJztcclxuICB0b3BMaXN0LmFwcGVuZENoaWxkKGRhcmtNb2RlKTtcclxuXHJcbiAgY29uc3Qgc2V0VG9DZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBzZXRUb0NlbHNpdXMudGV4dENvbnRlbnQgPSAnU2V0IHRvIENlbHNpdXMnO1xyXG4gIHRvcExpc3QuYXBwZW5kQ2hpbGQoc2V0VG9DZWxzaXVzKTtcclxuICBuYXZJdGVtcy5hcHBlbmRDaGlsZCh0b3BMaXN0KTtcclxuXHJcbiAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgbmF2SXRlbXMuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XHJcblxyXG4gIGNvbnN0IGJvdHRvbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgYWJvdXQudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xyXG4gIGJvdHRvbUxpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gIG5hdkl0ZW1zLmFwcGVuZENoaWxkKGJvdHRvbUxpc3QpO1xyXG5cclxuICBzaWRlTmF2LmFwcGVuZENoaWxkKG5hdkl0ZW1zKTtcclxuICBzaWRlTmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVOYXYpO1xyXG5cclxuICBjb25zdCBleGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZXhpdERpdi5jbGFzc0xpc3QuYWRkKCdleGl0Jyk7XHJcblxyXG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb25zdCBleGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgZXhpdEltZy5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2V4aXQuc3ZnJztcclxuICBleGl0QnRuLmFwcGVuZENoaWxkKGV4aXRJbWcpO1xyXG4gIGV4aXREaXYuYXBwZW5kQ2hpbGQoZXhpdEJ0bik7XHJcblxyXG4gIHNpZGVOYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhpdERpdik7XHJcblxyXG4gIHJldHVybiBzaWRlTmF2Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVRdWVyeVJlc3VsdEJhcihzZWFyY2hSZXN1bHQpIHtcclxuICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGF5b3V0L2xvY2F0aW9uLW1hcmtlci5zdmcnO1xyXG4gIGxvY2F0aW9uSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuXHJcbiAgY29uc3QgdGV4dFJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRleHRSZXN1bHQudGV4dENvbnRlbnQgPSBzZWFyY2hSZXN1bHQ7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtcmVzdWx0Jyk7XHJcblxyXG4gIHJlc3VsdC5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xyXG4gIHJlc3VsdC5hcHBlbmRDaGlsZCh0ZXh0UmVzdWx0KTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9iaWxlU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoLW1vZGFsJywgJ2hpZGRlbicpO1xyXG5cclxuICBjb25zdCBjaXR5SW5wdXRGb3JtID0gY3JlYXRlQ2l0eUlucHV0Rm9ybU1vYmlsZSgpO1xyXG5cclxuICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ3ByaW1hcnknKTtcclxuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTZWFyY2hNb2RhbCk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlJbnB1dEZvcm0pO1xyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gIG1vZGFsLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXN1bHRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdHMtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHRlc3RSZXN1bHQgPSBjcmVhdGVRdWVyeVJlc3VsdEJhcignTG9zIEFuZ2VsZXMsIENBJyk7XHJcblxyXG4gIHJlc3VsdHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGVzdFJlc3VsdCk7XHJcblxyXG4gIG1vZGFsLmFwcGVuZENoaWxkKHJlc3VsdHNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gbW9kYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XHJcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgbmF2aWdhdGlvbk1lbnUgPSBjcmVhdGVOYXZpZ2F0aW9uTWVudSgpO1xyXG4gIGNvbnN0IHNpZGVOYXZpZ2F0aW9uID0gY3JlYXRlU2lkZU5hdmlnYXRpb24oKTtcclxuICBjb25zdCBzZWFyY2hNb2JpbGUgPSBjcmVhdGVNb2JpbGVTZWFyY2hNb2RhbCgpO1xyXG4gIGNvbnN0IGN1cnJlbnRGb3JlY2FzdCA9IGNyZWF0ZUN1cnJlbnRGb3JlY2FzdCgpO1xyXG4gIGNvbnN0IG1vcmVDdXJyZW50Rm9yZWNhc3REZXRhaWxzID0gY3JlYXRlTW9yZUN1cnJlbnRGb3JlY2FzdERldGFpbHMoKTtcclxuICBjb25zdCBhZGRpdGlvbmFsRm9yZWNhc3REZXRhaWxzID0gY3JlYXRlQWRkaXRpb25hbEZvcmVjYXN0KCk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbk1lbnUpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZU5hdmlnYXRpb24pO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoTW9iaWxlKTtcclxuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRGb3JlY2FzdCk7XHJcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChtb3JlQ3VycmVudEZvcmVjYXN0RGV0YWlscyk7XHJcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRpdGlvbmFsRm9yZWNhc3REZXRhaWxzKTtcclxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL2xpZ2h0LXRoZW1lLmNzcyc7XHJcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vcGFnZS1sYXlvdXQnO1xyXG5cclxuKCgpID0+IHtcclxuICBjcmVhdGVQYWdlKCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==