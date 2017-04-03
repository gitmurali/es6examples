/******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mprasanth on 03/04/2017.
	 */

	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _main = __webpack_require__(2);

	var _logger = __webpack_require__(3);

	var logger = _interopRequireWildcard(_logger);

	(0, _main.logDetails)("Murali");
	logger.log("starting..");
	logger.info("started..");
	logger.error("stopped");

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by mprasanth on 03/04/2017.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function logDetails(name) {
	  console.log("Hey there, " + name);
	}

	exports.logDetails = logDetails;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by mprasanth on 03/04/2017.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var funcs = {
	    log: function log(msg) {
	        console.log("" + msg);
	    },

	    warn: function warn(msg) {
	        console.warn("" + msg);
	    },

	    error: function error(msg) {
	        console.error("" + msg);
	    },

	    info: function info(msg) {
	        console.info("" + msg);
	    }
	};

	exports["default"] = funcs;
	module.exports = exports["default"];

/***/ }
/******/ ]);