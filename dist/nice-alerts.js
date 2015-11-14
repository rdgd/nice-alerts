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

	/*
	  Main point of entry for webpack. Exists primarily because of separation of style from
	  code to be unit tested.
	*/
	__webpack_require__(1);
	var NiceAlert = __webpack_require__(5);

	window.niceAlert = new NiceAlert();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./general.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./general.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

	// module
	exports.push([module.id, "html, body {\n  font-family: \"droid_sans\", Helvetica-, Arial, sans-serif; }\n\n.hide {\n  display: none; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-left {\n  text-align: left; }\n\nbody {\n  background: aquamarine; }\n\n#user-alert {\n  padding: 20px;\n  position: fixed;\n  left: 22%;\n  top: 30%;\n  background-color: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  background-clip: padding-box;\n  /* stops bg color from leaking */\n  font-size: 14px;\n  font-size: 1.428rem;\n  color: #555555;\n  z-index: 100;\n  width: 55%;\n  max-width: 650px !important; }\n  #user-alert i {\n    font-size: 26px;\n    font-size: 2.652rem; }\n  #user-alert .close {\n    color: #555555;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    height: 45px !important;\n    width: 45px;\n    padding: 0;\n    background: white;\n    z-index: 200;\n    cursor: pointer;\n    -webkit-transition: color 200ms ease-in-out;\n    -moz-transition: color 200ms ease-in-out;\n    -ms-transition: color 200ms ease-in-out;\n    -o-transition: color 200ms ease-in-out;\n    transition: color 200ms ease-in-out; }\n    #user-alert .close:hover {\n      color: #E74C3C; }\n  #user-alert .user-message-container {\n    display: block;\n    width: 100%; }\n    #user-alert .user-message-container > .user-alert-icon, #user-alert .user-message-container .message-text-container {\n      display: inline-block;\n      height: 100%;\n      vertical-align: middle; }\n      #user-alert .user-message-container > .user-alert-icon:last-child, #user-alert .user-message-container .message-text-container:last-child {\n        padding-left: 0; }\n    #user-alert .user-message-container .user-alert-icon {\n      width: 19%; }\n      #user-alert .user-message-container .user-alert-icon i {\n        font-size: 60px;\n        font-size: 6.12rem; }\n    #user-alert .user-message-container .message-text-container {\n      width: 75%; }\n  #user-alert .user-alert-footer {\n    text-align: right;\n    margin-top: 20px; }\n    #user-alert .user-alert-footer .btn-wrapper {\n      width: 30%;\n      min-width: 125px;\n      display: inline-block; }\n      #user-alert .user-alert-footer .btn-wrapper .btn {\n        width: 90%;\n        height: 50px;\n        border: none;\n        cursor: pointer;\n        color: white;\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 10px;\n        font-size: 1.02rem;\n        -webkit-border-radius: 3px;\n        border-radius: 3px;\n        background-clip: padding-box;\n        /* stops bg color from leaking */\n        -webkit-transition: background-color 200ms ease-in-out;\n        -moz-transition: background-color 200ms ease-in-out;\n        -ms-transition: background-color 200ms ease-in-out;\n        -o-transition: background-color 200ms ease-in-out;\n        transition: background-color 200ms ease-in-out;\n        -webkit-transition: box-shadow 200ms ease-in-out;\n        -moz-transition: box-shadow 200ms ease-in-out;\n        -ms-transition: box-shadow 200ms ease-in-out;\n        -o-transition: box-shadow 200ms ease-in-out;\n        transition: box-shadow 200ms ease-in-out;\n        -webkit-transition: -moz-box-shadow 200ms ease-in-out;\n        -moz-transition: -moz-box-shadow 200ms ease-in-out;\n        -ms-transition: -moz-box-shadow 200ms ease-in-out;\n        -o-transition: -moz-box-shadow 200ms ease-in-out;\n        transition: -moz-box-shadow 200ms ease-in-out;\n        -webkit-transition: -webkit-box-shadow 200ms ease-in-out;\n        -moz-transition: -webkit-box-shadow 200ms ease-in-out;\n        -ms-transition: -webkit-box-shadow 200ms ease-in-out;\n        -o-transition: -webkit-box-shadow 200ms ease-in-out;\n        transition: -webkit-box-shadow 200ms ease-in-out; }\n      #user-alert .user-alert-footer .btn-wrapper #btn-no {\n        background-color: #e12e1c; }\n        #user-alert .user-alert-footer .btn-wrapper #btn-no:hover {\n          background-color: #E74C3C;\n          -webkit-box-shadow: 0px 1px 3px #131313;\n          -moz-box-shadow: 0px 1px 3px #131313;\n          box-shadow: 0px 1px 3px #131313; }\n        #user-alert .user-alert-footer .btn-wrapper #btn-no:focus {\n          background-color: #E74C3C;\n          -webkit-box-shadow: 0px 1px 3px #131313;\n          -moz-box-shadow: 0px 1px 3px #131313;\n          box-shadow: 0px 1px 3px #131313; }\n          #user-alert .user-alert-footer .btn-wrapper #btn-no:focus:hover {\n            background-color: #E74C3C;\n            -webkit-box-shadow: 0px 1px 3px #131313;\n            -moz-box-shadow: 0px 1px 3px #131313;\n            box-shadow: 0px 1px 3px #131313; }\n      #user-alert .user-alert-footer .btn-wrapper #btn-yes {\n        background-color: #33ba80; }\n        #user-alert .user-alert-footer .btn-wrapper #btn-yes:hover {\n          background-color: #51cf99;\n          -webkit-box-shadow: 0px 1px 3px #131313;\n          -moz-box-shadow: 0px 1px 3px #131313;\n          box-shadow: 0px 1px 3px #131313; }\n        #user-alert .user-alert-footer .btn-wrapper #btn-yes:focus {\n          background-color: #51cf99;\n          -webkit-box-shadow: 0px 1px 3px #131313;\n          -moz-box-shadow: 0px 1px 3px #131313;\n          box-shadow: 0px 1px 3px #131313; }\n          #user-alert .user-alert-footer .btn-wrapper #btn-yes:focus:hover {\n            background-color: #51cf99;\n            -webkit-box-shadow: 0px 1px 3px #131313;\n            -moz-box-shadow: 0px 1px 3px #131313;\n            box-shadow: 0px 1px 3px #131313; }\n\n.message-info .user-alert-icon i {\n  color: #5bc0de; }\n\n.message-success .user-alert-icon i {\n  color: #51cf99; }\n\n.message-confirm .user-alert-icon i {\n  color: #009DAD; }\n\n.message-warning .user-alert-icon i {\n  color: #f0ad4e; }\n\n.message-failure .user-alert-icon i {\n  color: #E74C3C; }\n\n@media (max-width: 440px) {\n  #user-alert {\n    left: 19%; }\n  .message-text-container {\n    display: block !important;\n    margin: auto;\n    text-align: center !important; }\n  .user-alert-icon {\n    margin: 10px auto !important;\n    width: 100% !important; }\n  .user-alert-footer {\n    text-align: center !important; }\n  .btn-wrapper {\n    width: 45% !important; } }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (max-width: 875px) {\n  #user-alert {\n    left: 19%; }\n  .message-text-container {\n    display: block !important;\n    margin: auto;\n    text-align: center !important; }\n  .user-alert-icon {\n    margin: 10px auto !important;\n    width: 100% !important; }\n  .user-alert-footer {\n    text-align: center !important; }\n  .btn-wrapper {\n    width: 45% !important; } }\n\n@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (max-width: 475px) {\n  #user-alert .user-message-container .message-text-container {\n    width: 90%; }\n  .user-alert-footer {\n    text-align: center !important; }\n  .btn-wrapper {\n    display: block !important;\n    width: 100% !important; }\n    .btn-wrapper .btn {\n      width: 100% !important; }\n  #btn-yes {\n    margin-bottom: 10px; } }\n\n@media (max-width: 240px) {\n  #user-alert .user-message-container .message-text-container {\n    width: 90%; }\n  .user-alert-footer {\n    text-align: center !important; }\n  .btn-wrapper {\n    display: block !important;\n    width: 100% !important; }\n    .btn-wrapper .btn {\n      width: 100% !important; }\n  #btn-yes {\n    margin-bottom: 10px; } }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(6);
	var NiceAlertView = __webpack_require__(7);

	// Constructing the view, setting up defaults, and setting hooks
	function NiceAlert () {
	  this.view = new NiceAlertView();
	  this.defaultOptions = {
	    message: 'This is an alert!',
	    type: 'info',
	    duration: 0,
	    closeHandler: null,
	    confirmHandler: null,
	    denyHandler: null,
	    confirmText: 'Yes',
	    denyText: 'No'
	  };
	  this._setHooks();
	}

	NiceAlert.prototype = {
	  _setHooks: function () {
	    this.view.confirmBtn.addEventListener('click', this.confirm.bind(this));
	    this.view.denyBtn.addEventListener('click', this.deny.bind(this));
	    this.view.closeBtn.addEventListener('click', this.hide.bind(this));
	    document.addEventListener('keydown', this.trapESCKey.bind(this));
	  },

	  /*
	    The NiceAlert class is only instantiated once. But every time a user calls they
	    have to opportunity to display what appears to be and behaves like a new alert.
	    I didn't want to repeatedly create and destroy a bunch of DOM.
	  */
	  show: function (userOptions) {
	    this._setup(userOptions);
	    this._show(this.options.duration);
	  },

	  // Handling user passed options. Manipulating DOM depending on these options.
	  _setup: function (opts) {
	    this.options = {};
	    util.extend(this.options, this.defaultOptions, opts);

	    this.view.setContainerClass(this.options.type);
	    this.view.setMessage(this.options.message);

	    // All the alerts only differ by icon and icon color, except for 'confirm'.
	    if (this.options.type !== 'confirm') {
	      this.view.hideFooter();
	    } else {
	      this.view.setDenyText(this.options.denyText);
	      this.view.setConfirmText(this.options.confirmText);
	      this.view.showFooter();
	    }
	  },

	  // Calling this method is what really shows the view. The show() method is just for users.
	  _show: function (duration) {
	    if (duration === 0) {
	      this.view.fadeIn();
	    } else {
	      var callback = function () { setTimeout(this.hide.bind(this), duration); };
	      this.view.fadeIn(callback.bind(this));
	    }
	  },

	  // Alert type 'confirm' only. When the confirm/green button is clicked.
	  confirm: function (e) {
	    this.hide(this.options.confirmHandler);
	  },

	  // Alert type 'confirm' only. When the deny/red button is clicked.
	  deny: function (e) {
	    this.hide(this.options.denyHandler);
	  },

	  hide: function (callback) {
	    this.view.fadeOut(this.options.closeHandler, callback);
	  },

	  trapESCKey:  function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27 && this.view.isVisible()) { this.hide(); }
	  }
	};

	module.exports = NiceAlert;


/***/ },
/* 6 */
/***/ function(module, exports) {

	window.Element.prototype.triggerCustomEvent = function (evt, data) {
	  var event;
	  if (window.CustomEvent) {
	    event = new CustomEvent(evt, data);
	  } else {
	    event = document.createEvent('CustomEvent');
	    event.initCustomEvent(evt, true, true, data);
	  }

	  this.dispatchEvent(event);
	};

	document.triggerCustomEvent = function (evt, data) {
	  var event;
	  if (window.CustomEvent) {
	    event = new CustomEvent(evt, data);
	  } else {
	    event = document.createEvent('CustomEvent');
	    event.initCustomEvent(evt, true, true, data);
	  }

	  document.dispatchEvent(event);
	};

	module.exports = {
	  extend: function (out) {
	    out = out || {};

	    for (var i = 1; i < arguments.length; i++) {
	      if (!arguments[i]) {
	        continue;
	      }

	      for (var key in arguments[i]) {
	        if (arguments[i].hasOwnProperty(key)) {
	          out[key] = arguments[i][key];
	        }
	      }
	    }

	    return out;
	  },

	  fadeIn: function (el, callback) {
	    el.classList.remove('hide');
	    el.style.opacity = 0;
	    var last = +new Date();
	    var tick = function() {
	      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
	      last = +new Date();

	      if (+el.style.opacity < 1) {
	        if (window.requestAnimationFrame) {
	          requestAnimationFrame(tick);
	        }
	        setTimeout(tick, 16);
	      }
	    };

	    tick();
	    if (callback && typeof callback == 'function') { callback(); }
	  },

	  fadeOut: function (el, callback) {
	    el.style.opacity = 1;
	    (function fade () {
	      if ((el.style.opacity -= 0.1) < 0) {
	        el.classList.add('hide');
	      } else {
	        requestAnimationFrame(fade);
	      }
	    })();
	    if (callback && typeof callback == 'function') { callback(); }
	  }
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(6);

	function NiceAlertView () {
	  this._makeView();
	}

	NiceAlertView.prototype = {
	  /*
	    Could consdier accepting some options in order to template, a better flow.
	    This will require approaching the project in a different way though, as it
	    implies DOM construction on more than one occaision. Fine for now.
	  */
	  _makeView: function () {
	    // Create elements
	    this.wrapper = document.createElement('div');
	    var userMessageContainer = document.createElement('section');
	    var userAlertIconWrap = document.createElement('div');
	    this.icon = document.createElement('i');
	    var messageTextContainer = document.createElement('div');
	    this.messageContainer = document.createElement('div');
	    this.closeBtn = document.createElement('div');
	    var closeBtnIcon = document.createElement('i');
	    this.footer = document.createElement('div');
	    var confirmBtnWrap = document.createElement('div');
	    this.confirmBtn = document.createElement('button');
	    var denyBtnWrap = document.createElement('div');
	    this.denyBtn = document.createElement('button');
	    this.message = document.createElement('span');

	    // Assign ID's
	    this.wrapper.id = 'user-alert';
	    this.confirmBtn.id = 'btn-yes';
	    this.denyBtn.id = 'btn-no';

	    // Add classes
	    this.wrapper.classList.add('hide');
	    userMessageContainer.classList.add('user-message-container');
	    userAlertIconWrap.classList.add('user-alert-icon');
	    userAlertIconWrap.classList.add('text-center');
	    this.icon.classList.add('material-icons');
	    messageTextContainer.classList.add('message-text-container');
	    messageTextContainer.classList.add('text-left');
	    this.messageContainer.classList.add('user-alert-message');
	    this.closeBtn.classList.add('close');
	    this.closeBtn.classList.add('text-right');
	    closeBtnIcon.classList.add('material-icons');
	    this.footer.classList.add('user-alert-footer');
	    confirmBtnWrap.classList.add('btn-wrapper');
	    denyBtnWrap.classList.add('btn-wrapper');
	    this.confirmBtn.classList.add('btn');
	    this.denyBtn.classList.add('btn');

	    // Add innerHTML
	    this.icon.innerHTML = 'info';
	    closeBtnIcon.innerHTML = 'clear';

	    // Append together all of the pieces
	    this.wrapper.appendChild(userMessageContainer);
	    userMessageContainer.appendChild(userAlertIconWrap);
	    userAlertIconWrap.appendChild(this.icon);
	    userMessageContainer.appendChild(messageTextContainer);
	    messageTextContainer.appendChild(this.messageContainer);
	    userMessageContainer.appendChild(this.closeBtn);
	    this.closeBtn.appendChild(closeBtnIcon);
	    this.wrapper.appendChild(this.footer);
	    this.footer.appendChild(confirmBtnWrap);
	    confirmBtnWrap.appendChild(this.confirmBtn);
	    this.footer.appendChild(denyBtnWrap);
	    denyBtnWrap.appendChild(this.denyBtn);

	    // Now on page
	    document.body.appendChild(this.wrapper);
	  },

	  /*
	    Each of the following two methods accepts a callback.
	    We have util functions which fade elements in and out. They also accept callbacks.
	    We want to pass the callback to the util fade function so that once the face is complete,
	    the callback will be ran. The tricky part is, we ALSO want trigger a custom event
	    at this time, so we can't just pass the callback along, and simply pasting
	    the event trigger in our util sullys object scope. This is why we are passing
	    an anonymous function bound to the NiceAlertView class context, and then passing
	    our callback as an arg after specifying the context. EEK.
	  */
	  fadeIn: function (callback) {
	    util.fadeIn(this.wrapper, function (callback) {
	      document.triggerCustomEvent('nice:shown', { target: this.wrapper });
	      if (callback) { callback(); }
	    }.bind(this, callback));
	  },

	  fadeOut: function (callback) {
	    var callbacks = arguments;
	    util.fadeOut(this.wrapper, function (callbacks) {
	      document.triggerCustomEvent('nice:hidden', { target: this.wrapper });
	      for (var i = 0; i < callbacks.length; i++) {
	        if (callbacks[i] && typeof callbacks[i] === 'function') { callbacks[i](); }
	      }
	    }.bind(this, callbacks));
	  },

	  setMessage: function (msg) {
	    this.messageContainer.innerHTML = '';
	    this.message.innerHTML = msg;
	    this.messageContainer.appendChild(this.message);
	  },

	  setConfirmText: function (txt) {
	    this.confirmBtn.textContent = txt;
	  },

	  setDenyText: function (txt) {
	    this.denyBtn.textContent = txt;
	  },

	  hideFooter: function () {
	    this.footer.classList.add('hide');
	  },

	  showFooter: function () {
	    this.footer.classList.remove('hide');
	  },

	  // Should use Object.defineProperty, but I don't like the way it looks aesthetically.
	  isVisible: function () {
	    return !this.wrapper.classList.contains('hide');
	  },
	  /*
	    We are setting a different class on our container for each type of alert.
	    The icon names correspond to Google Material Icons font. https://www.google.com/design/icons/
	  */
	  setContainerClass: function (alertType) {
	    // Defaults
	    var className = 'message-info';
	    var iconName = 'info';

	    switch (alertType) {
	      case 'success': {
	        className = 'message-success';
	        iconName = 'check_circle';
	        break;
	      }
	      case 'failure': {
	        className = 'message-failure';
	        iconName = 'error';
	        break;
	      }
	      case 'warning': {
	        className = 'message-warning';
	        iconName = 'warning';
	        break;
	      }
	      case 'confirm': {
	        className = 'message-confirm';
	        iconName = 'question_answer';
	        break;
	      }
	      case 'info': { break; }
	      default: { break; }
	    }
	    this.wrapper.setAttribute('class', className);
	    this.icon.textContent = iconName;
	  }
	};

	module.exports = NiceAlertView;


/***/ }
/******/ ]);