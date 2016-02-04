(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var core_1 = __webpack_require__(2);
	var mongo_cursor_differ_1 = __webpack_require__(3);
	var bootstrap_1 = __webpack_require__(4);
	var change_detection_1 = __webpack_require__(5);
	function meteorProviders() {
	    var providers = [];
	    var factories = change_detection_1.defaultIterableDiffers.factories;
	    if (factories) {
	        factories.push(new mongo_cursor_differ_1.MongoCursorDifferFactory());
	    }
	    providers.push(core_1.provide(core_1.IterableDiffers, {
	        useValue: new core_1.IterableDiffers(factories)
	    }));
	    return providers;
	}
	exports.METEOR_PROVIDERS = meteorProviders();
	// Bootstrap with Meteor providers.
	function bootstrap(appComponentType, providers) {
	    if (providers === void 0) { providers = null; }
	    bootstrap_1.bootstrap(appComponentType, [].concat(exports.METEOR_PROVIDERS, providers || []));
	}
	exports.bootstrap = bootstrap;
	function MeteorApp(args) {
	    if (args === void 0) { args = {}; }
	    return function (cls) {
	        var annotations = Reflect.getMetadata('annotations', cls) || [];
	        if (!args.selector)
	            args.selector = 'app';
	        // Create @Component.
	        annotations.push(new core_1.Component(args));
	        // Define metadata with added annotations.
	        Reflect.defineMetadata('annotations', annotations, cls);
	        bootstrap(cls, args.providers);
	        return cls;
	    };
	}
	exports.MeteorApp = MeteorApp;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("angular2/core");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("angular2-meteor/mongo_cursor_differ");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2/bootstrap");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("angular2/src/core/change_detection/change_detection");

/***/ }
/******/ ])));