/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: Apache-2.0
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["common"] = factory();
	else
		root["demo"] = root["demo"] || {}, root["demo"]["common"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["objectValues"] = objectValues;
/* harmony export (immutable) */ __webpack_exports__["objectEntries"] = objectEntries;
/* harmony export (immutable) */ __webpack_exports__["matches"] = matches;
/* harmony export (immutable) */ __webpack_exports__["closest"] = closest;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Object ponyfills from TC39 proposal (MIT license).
 * https://github.com/tc39/proposal-object-values-entries/blob/7c2a54c56a529af1925a881e1b4c9e8b2d885a6c/polyfill.js
 */

var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var concat = Function.bind.call(Function.call, Array.prototype.concat);
var keys = Object.keys;

/**
 * @param {!Object} obj
 * @return {!Array<*>} An array of [key, value] pairs.
 */
function objectValues(obj) {
  return reduce(keys(obj), function (v, k) {
    return concat(v, typeof k === 'string' && isEnumerable(obj, k) ? [obj[k]] : []);
  }, []);
}

/**
 * @param {!Object} obj
 * @return {!Array<!Array<*>>} An array of [key, value] pairs.
 */
function objectEntries(obj) {
  return reduce(keys(obj), function (e, k) {
    return concat(e, typeof k === 'string' && isEnumerable(obj, k) ? [[k, obj[k]]] : []);
  }, []);
}

/*
 * DOM ponyfills
 */

/**
 * @param {!Element} elem
 * @param {string} selector
 * @return {boolean}
 */
function matches(elem, selector) {
  var nativeMatches = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector || elem.oMatchesSelector;
  return nativeMatches.call(elem, selector);
}

/**
 * @param {!Element} elem
 * @param {string} selector
 * @return {?Element}
 */
function closest(elem, selector) {
  if (elem.closest) {
    return elem.closest(selector);
  }
  while (elem) {
    if (matches(elem, selector)) {
      return elem;
    }
    elem = elem.parentElement;
  }
  return null;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getAll"] = getAll;
/* harmony export (immutable) */ __webpack_exports__["getDocument"] = getDocument;
/* harmony export (immutable) */ __webpack_exports__["getWindow"] = getWindow;
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {string} query
 * @param {!Document|!Element=} root
 * @return {!Array<!Element>}
 */
function getAll(query) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  return [].slice.call(root.querySelectorAll(query));
}

/**
 * @param {!Window|!Document|!Element} root
 * @return {!Document|undefined}
 */
function getDocument(root) {
  return root.ownerDocument || root.document || (root.documentElement ? root : undefined);
}

/**
 * @param {!Window|!Document|!Element} root
 * @return {!Window|undefined}
 */
function getWindow(root) {
  var doc = getDocument(root);
  return doc.defaultView || doc.parentWindow || (root.document ? root : undefined);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["objectForEach"] = objectForEach;
/* harmony export (immutable) */ __webpack_exports__["debounce"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Simplifies iterating over an object's own enumerable, non-prototype properties.
 * @param {!Object} obj
 * @param {function(value:*, key:*, i:number, pair:!Array<*>)} func
 */
function objectForEach(obj, func) {
  __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["objectEntries"](obj).forEach(function (_ref, i, pair) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return func(value, key, i, pair);
  });
}

/**
 * Returns a function that, as long as it continues to be invoked, will not be triggered.
 * The function will be called after it stops being called for `waitInMs` milliseconds.
 * If `runImmediately` is `true`, the function will be triggered on the leading edge, instead of the trailing.
 *
 * From https://davidwalsh.name/javascript-debounce-function (MIT license).
 *
 * @param {function(...args)} func
 * @param {number=} waitInMs
 * @param {boolean=} runImmediately
 * @return {function(...args)}
 */
function debounce(func) {
  var waitInMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var runImmediately = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var timeout = void 0;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var callNow = runImmediately && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!runImmediately) {
        func.apply(undefined, args);
      }
    }, waitInMs);

    if (callNow) {
      func.apply(undefined, args);
    }
  };
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InteractivityProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToolbarProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotSwapper; });
/* harmony export (immutable) */ __webpack_exports__["d"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ponyfill_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_js__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var classes = {
  TOOLBAR_PROGRESS_BAR_ACTIVE: 'demo-toolbar-progress-bar--active'
};

var attrs = {
  HOT_SWAP: 'data-hot',
  IS_LOADING: 'data-is-loading'
};

var ids = {
  TOOLBAR_PROGRESS_BAR: 'demo-toolbar-progress-bar'
};

/** @abstract */
var InteractivityProvider = function () {
  function InteractivityProvider(root) {
    _classCallCheck(this, InteractivityProvider);

    /** @protected {!Document|!Element} */
    this.root_ = root;

    /** @protected {!Document} */
    this.document_ = __WEBPACK_IMPORTED_MODULE_0__dom_js__["getDocument"](this.root_);

    /** @protected {!Window} */
    this.window_ = __WEBPACK_IMPORTED_MODULE_0__dom_js__["getWindow"](this.root_);
  }

  _createClass(InteractivityProvider, [{
    key: 'lazyInit',
    value: function lazyInit() {}

    /**
     * @param {string} selector
     * @param {!Document|!Element=} root
     * @return {!Array<!Element>}
     * @protected
     */

  }, {
    key: 'querySelectorAll_',
    value: function querySelectorAll_(selector) {
      var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root_;

      return __WEBPACK_IMPORTED_MODULE_0__dom_js__["getAll"](selector, root);
    }
  }]);

  return InteractivityProvider;
}();

var ToolbarProvider = function (_InteractivityProvide) {
  _inherits(ToolbarProvider, _InteractivityProvide);

  function ToolbarProvider() {
    _classCallCheck(this, ToolbarProvider);

    return _possibleConstructorReturn(this, (ToolbarProvider.__proto__ || Object.getPrototypeOf(ToolbarProvider)).apply(this, arguments));
  }

  _createClass(ToolbarProvider, [{
    key: 'lazyInit',


    /** @override */
    value: function lazyInit() {
      /** @type {?Element} */
      this.progressBarEl_ = this.root_.getElementById(ids.TOOLBAR_PROGRESS_BAR);
    }

    /** @param {boolean} isLoading */

  }, {
    key: 'setIsLoading',
    value: function setIsLoading(isLoading) {
      if (!this.progressBarEl_) {
        return;
      }

      if (isLoading) {
        this.progressBarEl_.classList.add(classes.TOOLBAR_PROGRESS_BAR_ACTIVE);
      } else {
        this.progressBarEl_.classList.remove(classes.TOOLBAR_PROGRESS_BAR_ACTIVE);
      }
    }
  }], [{
    key: 'attachTo',

    /** @param {!Document|!Element} root */
    value: function attachTo(root) {
      var instance = new ToolbarProvider(root);
      instance.lazyInit();
      return instance;
    }
  }]);

  return ToolbarProvider;
}(InteractivityProvider);

/** @type {?HotSwapper} */
var hotSwapperInstance = null;

var HotSwapper = function (_InteractivityProvide2) {
  _inherits(HotSwapper, _InteractivityProvide2);

  function HotSwapper() {
    _classCallCheck(this, HotSwapper);

    return _possibleConstructorReturn(this, (HotSwapper.__proto__ || Object.getPrototypeOf(HotSwapper)).apply(this, arguments));
  }

  _createClass(HotSwapper, [{
    key: 'lazyInit',


    /**
     * @param {!ToolbarProvider} toolbarProvider
     * @override
     */
    value: function lazyInit(toolbarProvider) {
      /** @type {!ToolbarProvider} */
      this.toolbarProvider_ = toolbarProvider;

      /** @type {!Array<string>} */
      this.pendingRequests_ = [];

      this.registerHotUpdateHandler_();
    }

    /** @private */

  }, {
    key: 'registerHotUpdateHandler_',
    value: function registerHotUpdateHandler_() {
      var _this3 = this;

      var hotSwapAllStylesheets = __WEBPACK_IMPORTED_MODULE_2__util_js__["debounce"](function () {
        _this3.hotSwapAllStylesheets_();
      }, HotSwapper.hotUpdateWaitPeriodMs_);

      this.window_.addEventListener('message', function (evt) {
        if (_this3.isWebpackRecompileStart_(evt)) {
          _this3.toolbarProvider_.setIsLoading(true);
        } else if (_this3.isWebpackRecompileEnd_(evt)) {
          hotSwapAllStylesheets();
        }
      });
    }

    /**
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isWebpackRecompileStart_',
    value: function isWebpackRecompileStart_(evt) {
      return Boolean(evt.data) && evt.data.type === 'webpackInvalid';
    }

    /**
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isWebpackRecompileEnd_',
    value: function isWebpackRecompileEnd_(evt) {
      return typeof evt.data === 'string' && evt.data.indexOf('webpackHotUpdate') === 0;
    }

    /** @private */

  }, {
    key: 'hotSwapAllStylesheets_',
    value: function hotSwapAllStylesheets_() {
      var _this4 = this;

      this.querySelectorAll_('link[' + attrs.HOT_SWAP + ']:not([' + attrs.IS_LOADING + '])').forEach(function (link) {
        _this4.hotSwapStylesheet(link);
      });
    }

    /**
     * @param {!Element} oldLink
     * @param {string=} newUri
     */

  }, {
    key: 'hotSwapStylesheet',
    value: function hotSwapStylesheet(oldLink, newUri) {
      var oldUri = oldLink.getAttribute('href');

      // Reload existing stylesheet
      if (!newUri) {
        newUri = oldUri;
      }

      // Force IE 11 and Edge to bypass the cache and request a fresh copy of the CSS.
      newUri = this.bustCache_(newUri);

      this.swapItLikeItsHot_(oldLink, oldUri, newUri);
    }

    /**
     * @param {!Element} oldLink
     * @param {string} oldUri
     * @param {string} newUri
     * @private
     */

  }, {
    key: 'swapItLikeItsHot_',
    value: function swapItLikeItsHot_(oldLink, oldUri, newUri) {
      var _this5 = this;

      this.logHotSwap_('swapping', oldUri, newUri, '...');

      // Ensure that oldLink has a unique ID so we can remove all stale stylesheets from the DOM after newLink loads.
      // This is a more robust approach than holding a reference to oldLink and removing it directly, because a user might
      // quickly switch themes several times before the first stylesheet finishes loading (especially over a slow network)
      // and each new stylesheet would try to remove the first one, leaving multiple conflicting stylesheets in the DOM.
      if (!oldLink.id) {
        oldLink.id = 'stylesheet-' + Math.floor(Math.random() * Date.now());
      }

      var newLink = /** @type {!Element} */oldLink.cloneNode(false);
      newLink.setAttribute('href', newUri);
      newLink.setAttribute(attrs.IS_LOADING, 'true');

      // IE 11 and Edge fire the `load` event twice for `<link>` elements.
      newLink.addEventListener('load', __WEBPACK_IMPORTED_MODULE_2__util_js__["debounce"](function () {
        _this5.handleStylesheetLoad_(newLink, newUri, oldUri);
      }, 50));

      oldLink.parentNode.insertBefore(newLink, oldLink);

      this.pendingRequests_.push(newUri);
      this.toolbarProvider_.setIsLoading(true);
    }

    /**
     * @param {!Element} newLink
     * @param {string} newUri
     * @param {string} oldUri
     * @private
     */

  }, {
    key: 'handleStylesheetLoad_',
    value: function handleStylesheetLoad_(newLink, newUri, oldUri) {
      var _this6 = this;

      this.pendingRequests_.splice(this.pendingRequests_.indexOf(newUri), 1);
      if (this.pendingRequests_.length === 0) {
        this.toolbarProvider_.setIsLoading(false);
      }

      setTimeout(function () {
        _this6.purgeOldStylesheets_(newLink);

        // Remove the 'loading' attribute *after* purging old stylesheets to avoid purging this one.
        newLink.removeAttribute(attrs.IS_LOADING);

        _this6.logHotSwap_('swapped', oldUri, newUri, '!');
      });
    }

    /**
     * @param {!Element} newLink
     * @private
     */

  }, {
    key: 'purgeOldStylesheets_',
    value: function purgeOldStylesheets_(newLink) {
      var _this7 = this;

      var oldLinks = void 0;

      var getOldLinks = function getOldLinks() {
        return _this7.querySelectorAll_('link[id="' + newLink.id + '"]:not([' + attrs.IS_LOADING + '])');
      };

      while ((oldLinks = getOldLinks()).length > 0) {
        oldLinks.forEach(function (oldLink) {
          // Link has already been detached from the DOM. I'm not sure what causes this to happen; I've only seen it in
          // IE 11 and/or Edge so far, and only occasionally.
          if (!oldLink.parentNode) {
            return;
          }
          oldLink.parentNode.removeChild(oldLink);
        });
      }
    }

    /**
     * Adds a timestamp to the given URI to force IE 11 and Edge to bypass the cache and request a fresh copy of the CSS.
     * @param oldUri
     * @return {string}
     * @private
     */

  }, {
    key: 'bustCache_',
    value: function bustCache_(oldUri) {
      var newUri = oldUri
      // Remove previous timestamp param (if present)
      .replace(/[?&]timestamp=\d+(&|$)/, '')
      // Remove trailing '?' or '&' char (if present)
      .replace(/[?&]$/, '');
      var separator = newUri.indexOf('?') === -1 ? '?' : '&';
      return '' + newUri + separator + 'timestamp=' + Date.now();
    }

    /**
     * @param {string} verb
     * @param {string} oldUri
     * @param {string} newUri
     * @param {string} trailingPunctuation
     * @private
     */

  }, {
    key: 'logHotSwap_',
    value: function logHotSwap_(verb, oldUri, newUri, trailingPunctuation) {
      var swapMessage = '"' + oldUri + '"' + (newUri ? ' with "' + newUri + '"' : '');
      console.log('Hot ' + verb + ' stylesheet ' + swapMessage + trailingPunctuation);
    }

    /**
     * @param {!Document|!Element} root
     * @return {!HotSwapper}
     */

  }], [{
    key: 'attachTo',

    /**
     * @param {!Document|!Element} root
     * @param {!ToolbarProvider} toolbarProvider
     */
    value: function attachTo(root, toolbarProvider) {
      var instance = new HotSwapper(root);
      instance.lazyInit(toolbarProvider);
      return instance;
    }

    /** @private {number} */

  }, {
    key: 'getInstance',
    value: function getInstance(root) {
      if (!hotSwapperInstance) {
        hotSwapperInstance = HotSwapper.attachTo(root, ToolbarProvider.attachTo(root));
      }
      return hotSwapperInstance;
    }
  }, {
    key: 'hotUpdateWaitPeriodMs_',
    get: function get() {
      return 250;
    }
  }]);

  return HotSwapper;
}(InteractivityProvider);

var HashLinker = function (_InteractivityProvide3) {
  _inherits(HashLinker, _InteractivityProvide3);

  function HashLinker() {
    _classCallCheck(this, HashLinker);

    return _possibleConstructorReturn(this, (HashLinker.__proto__ || Object.getPrototypeOf(HashLinker)).apply(this, arguments));
  }

  _createClass(HashLinker, [{
    key: 'lazyInit',


    /** @override */
    value: function lazyInit() {
      var _this9 = this;

      this.root_.addEventListener('click', function (evt) {
        if (_this9.shouldPreventDefault_(evt)) {
          evt.preventDefault();
        }
      });
    }

    /** @private */

  }, {
    key: 'shouldPreventDefault_',
    value: function shouldPreventDefault_(evt) {
      return __WEBPACK_IMPORTED_MODULE_1__ponyfill_js__["closest"](evt.target, 'a[href="#"], [data-demo-disable-hash-link-navigation] a[href^="#"]');
    }
  }], [{
    key: 'attachTo',

    /** @param {!Document|!Element} root */
    value: function attachTo(root) {
      var instance = new HashLinker(root);
      instance.lazyInit();
      return instance;
    }
  }]);

  return HashLinker;
}(InteractivityProvider);

/** @param {!Document|!Element} root */


function init(root) {
  HotSwapper.getInstance(root);
  HashLinker.attachTo(root);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interactivity_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ponyfill_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_js__ = __webpack_require__(2);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return __WEBPACK_IMPORTED_MODULE_1__dom_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "pony", function() { return __WEBPACK_IMPORTED_MODULE_2__ponyfill_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util_js__; });
/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



demoReady(function (root) {
  __WEBPACK_IMPORTED_MODULE_0__interactivity_js__["d" /* init */](root);
});

// Export useful libs to aid debugging/experimentation in the browser's dev tools console.





/***/ })
/******/ ]);
});
//# sourceMappingURL=common.js.map