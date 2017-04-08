/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responsiveData = {};
var resposiveComponents = {};
var responsiveConfig;
var window = window || { addEventListener: () => { }, innerWith: 0 };
var initialized = false;
function isVisible(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}
;
function init(config) {
    var mergedConfig = mergeConfig(config);
    window.addEventListener('resize', (e) => {
        calculateSizes();
    });
    calculateSizes();
    initialized = true;
}
function calculateSizes() {
    responsiveData.xs = window.innerWidth > responsiveConfig.breakpoints.xs;
    responsiveData.sm = window.innerWidth >= responsiveConfig.breakpoints.sm;
    responsiveData.md = window.innerWidth >= responsiveConfig.breakpoints.md;
    responsiveData.lg = window.innerWidth >= responsiveConfig.breakpoints.lg;
    responsiveData.xl = window.innerWidth >= responsiveConfig.breakpoints.xl;
}
function mergeConfig(config) {
    responsiveConfig = new TsResponsiveConfig();
    return Object.assign(responsiveConfig, config);
}
function getData() {
    if (!initialized)
        init();
    return responsiveData;
}
class TsResponsiveConfig {
    constructor() {
        this.breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 };
    }
}
exports.TsResponsiveConfig = TsResponsiveConfig;
exports.TsResponsive = {
    isVisible: isVisible,
    init: init,
    data: getData()
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const responsive_1 = __webpack_require__(0);
console.log('test', responsive_1.TsResponsive.data);


/***/ })
/******/ ]);