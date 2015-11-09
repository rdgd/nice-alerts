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

	__webpack_require__(1);

	var util = __webpack_require__(5);
	var markup = __webpack_require__(6);

	function UserAlert () {
	  this.options = {};
	  this._makeView();
	  this._selectElements();
	  this.defaultOptions = {
	    message: 'This is an alert!',
	    type: 'info',
	    duration: 0,
	    closeHandler: null,
	    yesHandler: null,
	    noHandler: null,
	    yesText: 'Yes',
	    noText: 'No'
	  };

	  this._setHooks();
	}

	UserAlert.prototype = {
	  _makeView: function () {
	    this.alertContainer = document.createElement('div');
	    document.body.appendChild(this.alertContainer);
	    this.alertContainer.outerHTML = markup;
	  },

	  _selectElements: function () {
	    this.alertContainer = document.getElementById('user-alert');
	    this.yesBtn = document.getElementById('btn-yes');
	    this.noBtn = document.getElementById('btn-no');
	    this.message = document.createElement('span');
	    this.messageContainer = this.alertContainer.querySelector('.user-alert-message');
	    this.closeBtn = this.alertContainer.querySelector('.close');
	    this.footer = this.alertContainer.querySelector('.user-alert-footer');
	  },

	  _setHooks: function () {
	    this.closeBtn.addEventListener('click', this.hide.bind(this));
	  },

	  setContainerClass: function (alertType) {
	    var className;
	    switch (alertType) {
	      case 'success': {
	        className = 'message-success';
	        break;
	      }
	      case 'failure': {
	        className = 'message-failure';
	        break;
	      }
	      case 'confirm': {
	        className = 'message-confirm';
	        break;
	      }
	      case 'info': {
	        className = 'message-info';
	        break;
	      }
	      default: {
	        className = 'message-info';
	        break;
	      }
	    }
	    this.alertContainer.setAttribute('class', className);
	  },

	  setMessage: function (msg) {
	    this.messageContainer.innerHTML = '';
	    this.message.innerHTML = msg;
	    this.messageContainer.appendChild(this.message);
	  },

	  show: function (userOptions) {
	    this.options = {};
	    util.extend(this.options, this.defaultOptions, userOptions);
	    this.setContainerClass(this.options.type);
	    this.setMessage(this.options.message);

	    if (this.options.type == 'confirm') {
	      this.footer.classList.remove('hide');
	      this.makeConfirm();
	    } else {
	      this.footer.classList.add('hide');
	    }

	    if (this.options.duration === 0) {
	      this.closeBtn.classList.remove('hide');
	      util.fadeIn(this.alertContainer);
	    } else {
	      this.closeBtn.classList.add('hide');
	      util.fadeIn(this.alertContainer, function() {
	        // Set timeout here... this.options.duration
	        this.hide(this.options.closeHandler);
	      });
	    }
	  },

	  makeConfirm: function () {
	    this.noBtn.textContent(this.options.noText);
	    this.yesBtn.textContent(this.options.yesText);

	    this.yesBtn.addEventListener('click', this.handleYesClick.bind(this));
	    this.noBtn.addEventListener('click', this.handleNoClick.bind(this));

	    this.alertContainer.querySelectorAll('.user-alert-footer').innerHTML = confBtnWrap.outerHTML;
	  },

	  handleYesClick: function (e) {
	    this.hide(this.options.closeHandler);
	    if (this.options.yesHandler) { this.options.yesHandler(); }
	  },

	  handleNoClick: function (e) {
	    this.hide(this.options.closeHandler);
	    if (this.options.noHandler) { this.options.noHandler(); }
	  },

	  hide: function (callback) {
	    this.alertContainer.classList.add('hide');
	    if (typeof callback == 'function') { callback(); }
	  }
	};

	window.UserAlert = new UserAlert();


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
	exports.push([module.id, ".hide {\n  display: none; }\n\n#user-alert {\n  padding: 20px; }\n  #user-alert .close {\n    color: #555555;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    height: 45px;\n    width: 45px;\n    padding: 0;\n    background: white;\n    z-index: 9999999;\n    border: none; }\n    #user-alert .close:hover {\n      color: #E74C3C; }\n  #user-alert .user-message-container {\n    display: block;\n    width: 100%; }\n    #user-alert .user-message-container > div {\n      display: inline-block;\n      height: 100%;\n      vertical-align: middle; }\n      #user-alert .user-message-container > div:last-child {\n        padding-left: 0; }\n    #user-alert .user-message-container .user-alert-icon {\n      width: 19%; }\n      #user-alert .user-message-container .user-alert-icon i {\n        font-size: 60px;\n        font-size: 6.12rem; }\n    #user-alert .user-message-container .message-text-container {\n      width: 75%;\n      margin-left: 2%; }\n  #user-alert .user-alert-footer .btn {\n    min-width: 100px; }\n  #user-alert .user-alert-footer .btn-close-confirm {\n    margin-right: 8px;\n    background-color: #E74C3C;\n    background-color: #E74C3C; }\n    #user-alert .user-alert-footer .btn-close-confirm:hover {\n      background-color: #e12e1c; }\n    #user-alert .user-alert-footer .btn-close-confirm:hover {\n      background-color: #e12e1c; }\n    #user-alert .user-alert-footer .btn-close-confirm:focus {\n      background-color: #e12e1c; }\n      #user-alert .user-alert-footer .btn-close-confirm:focus:hover {\n        background-color: #e12e1c; }\n\n.message-success,\n.message-failure,\n.message-info,\n.message-confirm {\n  position: fixed;\n  left: 22%;\n  top: 30%;\n  background-color: white;\n  border: 3px solid #555555;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  background-clip: padding-box;\n  /* stops bg color from leaking */\n  font-size: 14px;\n  font-size: 1.428rem;\n  color: #555555;\n  z-index: 9999;\n  width: 55%;\n  max-width: 600px; }\n  .message-success i,\n  .message-failure i,\n  .message-info i,\n  .message-confirm i {\n    font-size: 26px;\n    font-size: 2.652rem; }\n\n.message-info .btn-close-confirm {\n  background-color: #e6931c; }\n  .message-info .btn-close-confirm:hover {\n    background-color: #d18517; }\n  .message-info .btn-close-confirm:focus {\n    background-color: #d18517; }\n    .message-info .btn-close-confirm:focus:hover {\n      background-color: #d18517; }\n\n.message-success .btn-close-confirm {\n  background-color: #009DAD; }\n  .message-success .btn-close-confirm:hover {\n    background-color: #006f7a; }\n\n.message-success .close {\n  display: none; }\n", ""]);

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
/***/ function(module, exports) {

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
	    if (callback) { callback(); }
	  }
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div id=\"user-alert\" class=\"hide\">\n  <div class=\"close text-right\"><i class=\"material-icons\">clear</i></div>\n  <section class=\"row user-message-container\">\n    <div class=\"user-alert-icon text-center\">\n      <i class=\"material-icons\">info</i>\n    </div>\n    <div class=\"message-text-container\">\n      <div class=\"user-alert-message\"></div>\n    </div>\n  </section>\n  <section class=\"row user-alert-footer\">\n    <div class=\"row text-center\">\n      <div>\n        <hr>\n        <div>\n          <button id=\"btn-yes\" class=\"btn btn-close-confirm\"></button>\n        </div>\n        <div>\n          <button id=\"btn-no\" class=\"btn\"></button>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n";

/***/ }
/******/ ]);