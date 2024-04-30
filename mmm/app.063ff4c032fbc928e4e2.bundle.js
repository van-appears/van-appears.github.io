/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/mmm.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/mmm.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/icons.png */ "./src/img/icons.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", \"Helvetica\", sans-serif;\n  height: 100%;\n  width: 100%;\n  background: #ddd;\n  overflow-y: hidden;\n}\n\nbody {\n  text-align: center;\n}\n\n.controls,\n.started .info {\n  display: none;\n}\n\n.started .controls {\n  display: block;\n}\n\n.wrapper {\n  display: inline-block;\n  background: #ffffff;\n  width: 300px;\n  padding: 20px;\n}\n\n.controls div label {\n  width: 100px;\n}\n\n.controls > *,\n.controls .control input,\n.controls .control select {\n  display: none;\n}\n.controls.playable .play {\n  display: block;\n}\n.controls.types .types {\n  display: block;\n}\n.controls.control1in .control:nth-child(3),\n.controls.control1val .control:nth-child(3) {\n  display: block;\n}\n.controls.control1in #control1in {\n  display: inline;\n}\n.controls.control1val #control1val {\n  display: inline;\n}\n.controls.control2in .control:nth-child(4),\n.controls.control2val .control:nth-child(4) {\n  display: block;\n}\n.controls.control2in #control2in {\n  display: inline;\n}\n.controls.control2val #control2val {\n  display: inline;\n}\n.controls.control3in .control:nth-child(5),\n.controls.control3val .control:nth-child(5) {\n  display: block;\n}\n.controls.control3in #control3in {\n  display: inline;\n}\n.controls.control3val #control3val {\n  display: inline;\n}\n.controls.control4in .control:nth-child(6),\n.controls.control4val .control:nth-child(6) {\n  display: block;\n}\n.controls.control4in #control4in {\n  display: inline;\n}\n.controls.control4val #control4val {\n  display: inline;\n}\n.controls.control5in .control:nth-child(7),\n.controls.control5val .control:nth-child(7) {\n  display: block;\n}\n.controls.control5in #control5in {\n  display: inline;\n}\n.controls.control5val #control5val {\n  display: inline;\n}\n\ninput[type=\"number\"] {\n  width: 100px;\n}\n\na.home,\na.sourceCode {\n  display: inline-block;\n  cursor: pointer;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -99999px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\na.home {\n  background-position: -736px -32px;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n\na.sourceCode {\n  background-position: -736px 0;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/mmm.css":
/*!*************************!*\
  !*** ./src/css/mmm.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./mmm.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/mmm.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/img/icons.png":
/*!***************************!*\
  !*** ./src/img/icons.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "da5a77bc5b89b89c97e2eafa70ae459d.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_mmm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mmm.js */ "./src/js/mmm.js");
/* harmony import */ var _js_mmm_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_mmm_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_mmm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/mmm.css */ "./src/css/mmm.css");
/* harmony import */ var _css_mmm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_mmm_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/Node.js":
/*!************************!*\
  !*** ./src/js/Node.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Node {
  constructor(ctx, model, idx, type, playable) {
    this.ctx = ctx;
    this.model = model;
    this.idx = idx;
    this.type = type;
    this.playable = playable;
    this.playing = false;
  }
  connector() {
    return {
      connect() {},
      disconnect() {}
    };
  }
  disconnectOtherFromParam(otherIdx, param, key) {
    if (otherIdx >= 0) {
      this.model.items[otherIdx].connector().disconnect(param);
      delete this.model.connections[this.idx][`${this.idx}_${key}`];
    }
  }
  connectOtherToParam(otherIdx, param, key) {
    if (otherIdx >= 0) {
      this.model.items[otherIdx].connector().connect(param);
      this.model.connections[this.idx][`${otherIdx}_${key}`] = param;
    }
  }
  replaceOtherOnParam(oldIdx, newIdx, param, key) {
    this.disconnectOtherFromParam(oldIdx, param, key);
    this.connectOtherToParam(newIdx, param, key);
  }
  play(bool) {
    if (bool) {
      this.connector().connect(this.ctx.destination);
      this.playing = true;
    } else {
      this.connector().disconnect(this.ctx.destination);
      this.playing = false;
    }
  }
  subtype() {
    return {
      values: null,
      set(val) {},
      get() {
        return "";
      }
    };
  }
  label() {
    return `${this.idx} ${this.type} ${this.subtype().get()}`;
  }
  controls() {
    return [];
  }
  setValuesTo(newNode) {
    const lastControls = this.controls() || [];
    const newControls = newNode.controls() || [];
    for (let index = 0; index < lastControls.length; index++) {
      if (!newControls[index]) {
        return;
      }
      if (lastControls[index].type === newControls[index].type) {
        newControls[index].set(lastControls[index].get());
      }
    }
  }
  destroy() {
    if (this.playing) {
      this.play(false);
    }
  }
}
module.exports = Node;

/***/ }),

/***/ "./src/js/connect-audio.js":
/*!*********************************!*\
  !*** ./src/js/connect-audio.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function connectAudio(callback) {
  const MEDIA_CONSTRAINTS = {
    audio: true,
    video: false
  };
  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia(MEDIA_CONSTRAINTS).then(function (mediaStream) {
      callback(null, mediaStream);
    }).catch(function (err) {
      callback(err);
    });
  } else {
    callback(new Error("navigator.mediaDevices not supported"));
  }
};

/***/ }),

/***/ "./src/js/connect-listeners.js":
/*!*************************************!*\
  !*** ./src/js/connect-listeners.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const convert = __webpack_require__(/*! ./convert-node */ "./src/js/convert-node.js");
const constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
const qs = id => {
  const nodes = document.querySelectorAll(id);
  return nodes.length > 1 ? nodes : nodes[0];
};
module.exports = function connectListeners(model) {
  const {
    items,
    types,
    connections
  } = model;
  let currentIdx = null;
  let current = null;
  const controlArea = qs(".controls");
  const label = qs("#name");
  const play = qs("#play");
  const typeEl = qs("#type");
  const controlValEls = qs(".controls .control input");
  const controlInEls = qs(".controls .control select");
  const convertEls = qs(".nodes button");
  play.checked = false;
  function connect(index) {
    currentIdx = index;
    current = items[index];
    label.innerHTML = current.label();
    const {
      playing,
      playable
    } = current;
    let classes = "controls ";
    if (playable) {
      classes += "playable ";
      play.checked = playing;
    }
    const subtypes = current && current.subtype().values;
    if (subtypes && subtypes.length) {
      classes += "types ";
      typeEl.replaceChildren();
      for (let subtype of subtypes) {
        const option = document.createElement("option");
        option.setAttribute("value", subtype);
        if (subtype === current.subtype().get()) {
          option.setAttribute("selected", true);
        }
        option.text = subtype;
        typeEl.appendChild(option);
      }
    }
    const controls = current.controls();
    for (let cIndex = 0; cIndex < controls.length; cIndex++) {
      const control = controls[cIndex];
      classes += "control" + (cIndex + 1) + control.type + " ";
      qs("label[for=control" + (cIndex + 1) + "val]").innerHTML = control.label();
      if (control.type === "val") {
        controlValEls[cIndex].value = control.get();
      } else {
        controlInEls[cIndex].replaceChildren();
        const unselected = document.createElement("option");
        unselected.setAttribute("value", -1);
        unselected.text = "-";
        if (control.get() === null || control.get() === undefined) {
          unselected.setAttribute("selected", true);
        }
        controlInEls[cIndex].appendChild(unselected);
        for (let nIndex = 0; nIndex < items.length; nIndex++) {
          if (nIndex === index || items[nIndex].type === constants.EMPTY) {
            continue;
          }
          const option = document.createElement("option");
          option.setAttribute("value", nIndex);
          option.text = items[nIndex].label();
          if (control.get() === nIndex) {
            option.setAttribute("selected", true);
          }
          controlInEls[cIndex].appendChild(option);
        }
      }
    }
    controlArea.className = classes;
  }
  typeEl.onchange = function (evt) {
    if (current) {
      current.subtype().set(evt.target.value);
    }
  };
  const options = qs(".options button");
  for (let index = 0; index < options.length; index++) {
    options[index].onclick = function () {
      connect(index);
    };
  }
  play.onclick = function (evt) {
    if (current) {
      current.play(evt.target.checked);
    }
  };
  for (let index = 0; index < controlValEls.length; index++) {
    controlValEls[index].value = null;
    controlValEls[index].onchange = function (evt) {
      if (current) {
        current.controls()[index].set(evt.target.value);
      }
    };
  }
  for (let index = 0; index < controlInEls.length; index++) {
    controlInEls[index].onchange = function (evt) {
      if (current) {
        current.controls()[index].set(parseInt(evt.target.value));
      }
    };
  }
  for (let index = 0; index < convertEls.length; index++) {
    convertEls[index].onclick = function (evt) {
      if (current) {
        const lastControl = items[currentIdx];
        const newControl = types[evt.target.value](currentIdx);
        lastControl.setValuesTo(newControl);
        const currentConnections = model.connections[currentIdx];
        Object.keys(currentConnections).forEach(key => {
          lastControl.connector().connect(currentConnections[key]);
          newControl.connector().connect(currentConnections[key]);
        });
        lastControl.destroy();
        items[currentIdx] = newControl;
        connect(currentIdx);
      }
    };
  }
};

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  EMPTY: "empty",
  FILTER: "filter",
  MICROPHONE: "microphone",
  OSCILLATOR: "oscillator"
};

/***/ }),

/***/ "./src/js/convert-node.js":
/*!********************************!*\
  !*** ./src/js/convert-node.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function convertNode(ctx, items) {};

/***/ }),

/***/ "./src/js/create-filter.js":
/*!*********************************!*\
  !*** ./src/js/create-filter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/Node.js");
const thistype = "filter";
class Filter extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, thistype, true);
    this.model = model;
    this.filter = ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this._controls = this.initControls();
    this._controls[0].set(100);
    this._controls[2].set(0.707);
  }
  connector() {
    return this.filter;
  }
  subtype() {
    const that = this;
    return {
      values: ["lowpass", "highpass", "bandpass", "notch"],
      set(val) {
        that.filter.type = val;
      },
      get() {
        return that.filter.type;
      }
    };
  }
  destroy() {
    super.destroy();
    this.disconnectOtherFromParam(this.freqConnectValue, this.filter.frequency);
    this.disconnectOtherFromParam(this.qConnectValue, this.filter.Q);
  }
  controls() {
    return this._controls;
  }
  initControls() {
    const that = this;
    return [{
      type: "val",
      label() {
        return "Freq";
      },
      set(val) {
        that.freqValue = val;
        that.filter.frequency.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.freqValue;
      }
    }, {
      type: "in",
      label() {
        return "Freq Mod";
      },
      set(val) {
        that.replaceOtherOnParam(that.freqConnectValue, val, that.filter.frequency, "freqConnect");
        that.freqConnectValue = val;
      },
      get() {
        return that.freqConnectValue;
      }
    }, {
      type: "val",
      label() {
        return "Q";
      },
      set(val) {
        that.qValue = val;
        that.filter.Q.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.qValue;
      }
    }, {
      type: "in",
      label() {
        return "Q Mod";
      },
      set(val) {
        that.replaceOtherOnParam(that.qConnectValue, val, that.filter.Q, "qConnect");
        that.qConnectValue = val;
      },
      get() {
        return that.qConnectValue;
      }
    }, {
      type: "in",
      label() {
        return "Input";
      },
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.filter, "input");
        that.inputConnectValue = val;
      },
      get() {
        return that.inputConnectValue;
      }
    }];
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if (last.type === thistype) {
      return last;
    }
    return new Filter(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/create-microphone.js":
/*!*************************************!*\
  !*** ./src/js/create-microphone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/Node.js");
const constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
class Microphone extends Node {
  constructor(ctx, model, idx, stream) {
    super(ctx, model, idx, constants.MICROPHONE, false);
    this.input = ctx.createMediaStreamSource(stream);
    this.gain = ctx.createGain();
    this.input.connect(this.gain);
  }
  connector() {
    return this.gain;
  }
  controls() {
    const that = this;
    return [{
      type: "val",
      label() {
        return "Gain";
      },
      set(val) {
        that.gainValue = val;
        that.gain.gain.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.gainValue;
      }
    }];
  }
  destroy() {
    // do nothing
  }
}
module.exports = function (ctx, model, idx, stream) {
  return new Microphone(ctx, model, idx, stream);
};

/***/ }),

/***/ "./src/js/create-model.js":
/*!********************************!*\
  !*** ./src/js/create-model.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
const createMicrophone = __webpack_require__(/*! ./create-microphone */ "./src/js/create-microphone.js");
const createOscillator = __webpack_require__(/*! ./create-oscillator */ "./src/js/create-oscillator.js");
const createFilter = __webpack_require__(/*! ./create-filter */ "./src/js/create-filter.js");
const Node = __webpack_require__(/*! ./Node */ "./src/js/Node.js");
module.exports = function createModel(stream) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const items = new Array(10);
  const connections = new Array(10).fill(0).map(x => ({}));
  const types = {};
  const model = {
    items,
    types,
    connections
  };
  types.oscillator = createOscillator(audioCtx, model);
  types.filter = createFilter(audioCtx, model);
  items[0] = createMicrophone(audioCtx, model, 0, stream);
  for (let index = 1; index < 10; index++) {
    items[index] = new Node(audioCtx, model, index, constants.EMPTY, false);
  }

  // for diagnostics
  window.model = model;
  return model;
};

/***/ }),

/***/ "./src/js/create-oscillator.js":
/*!*************************************!*\
  !*** ./src/js/create-oscillator.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/Node.js");
const constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
class Oscillator extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.OSCILLATOR, true);
    this.osc = ctx.createOscillator();
    this.gain = ctx.createGain();
    this.osc.type = "sine";
    this.osc.connect(this.gain);
    this.osc.start(0);
    this._controls = this.initControls();
    this._controls[0].set(100);
    this._controls[2].set(1);
  }
  connector() {
    return this.gain;
  }
  subtype() {
    const that = this;
    return {
      values: ["sawtooth", "sine", "square", "triangle"],
      set(val) {
        that.osc.type = val;
      },
      get() {
        return that.osc.type;
      }
    };
  }
  destroy() {
    super.destroy();
    this.disconnectOtherFromParam(this.freqConnectValue, this.osc.frequency);
    this.disconnectOtherFromParam(this.gainConnectValue, this.gain.gain);
    this.osc.stop();
  }
  controls() {
    return this._controls;
  }
  initControls() {
    const that = this;
    return [{
      type: "val",
      label() {
        return "Freq";
      },
      set(val) {
        that.freqValue = val;
        that.osc.frequency.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.freqValue;
      }
    }, {
      type: "in",
      label() {
        return "Freq Mod";
      },
      set(val) {
        that.replaceOtherOnParam(that.freqConnectValue, val, that.osc.frequency, "freqConnect");
        that.freqConnectValue = val;
      },
      get() {
        return that.freqConnectValue;
      }
    }, {
      type: "val",
      label() {
        return "Gain";
      },
      set(val) {
        that.gainValue = val;
        that.gain.gain.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.gainValue;
      }
    }, {
      type: "in",
      label() {
        return "Amp Mod";
      },
      set(val) {
        that.replaceOtherOnParam(that.gainConnectValue, val, that.gain.gain, "gainConnect");
        that.gainConnectValue = val;
      },
      get() {
        return that.gainValue;
      }
    }];
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if (last.type === constants.OSCILLATOR) {
      return last;
    }
    return new Oscillator(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/mmm.js":
/*!***********************!*\
  !*** ./src/js/mmm.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const connectAudio = __webpack_require__(/*! ./connect-audio */ "./src/js/connect-audio.js");
const connectListeners = __webpack_require__(/*! ./connect-listeners */ "./src/js/connect-listeners.js");
const createModel = __webpack_require__(/*! ./create-model */ "./src/js/create-model.js");
window.onload = function () {
  connectAudio(function (err, audio) {
    if (err) {
      //document.querySelector(".info").innerHTML =
      //  "Failed to connect to audio: " + err.message;
      console.log(err);
    } else {
      document.body.className = "started";
      const model = createModel(audio);
      connectListeners(model);
    }
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tbW0uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tbW0uY3NzPzRhMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ob2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWF1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb252ZXJ0LW5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZS1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZS1taWNyb3Bob25lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGUtbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZS1vc2NpbGxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tbW0uanMiXSwibmFtZXMiOlsiTm9kZSIsImNvbnN0cnVjdG9yIiwiY3R4IiwibW9kZWwiLCJpZHgiLCJ0eXBlIiwicGxheWFibGUiLCJwbGF5aW5nIiwiY29ubmVjdG9yIiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0T3RoZXJGcm9tUGFyYW0iLCJvdGhlcklkeCIsInBhcmFtIiwia2V5IiwiaXRlbXMiLCJjb25uZWN0aW9ucyIsImNvbm5lY3RPdGhlclRvUGFyYW0iLCJyZXBsYWNlT3RoZXJPblBhcmFtIiwib2xkSWR4IiwibmV3SWR4IiwicGxheSIsImJvb2wiLCJkZXN0aW5hdGlvbiIsInN1YnR5cGUiLCJ2YWx1ZXMiLCJzZXQiLCJ2YWwiLCJnZXQiLCJsYWJlbCIsImNvbnRyb2xzIiwic2V0VmFsdWVzVG8iLCJuZXdOb2RlIiwibGFzdENvbnRyb2xzIiwibmV3Q29udHJvbHMiLCJpbmRleCIsImxlbmd0aCIsImRlc3Ryb3kiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29ubmVjdEF1ZGlvIiwiY2FsbGJhY2siLCJNRURJQV9DT05TVFJBSU5UUyIsImF1ZGlvIiwidmlkZW8iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwibWVkaWFTdHJlYW0iLCJjYXRjaCIsImVyciIsIkVycm9yIiwiY29udmVydCIsInJlcXVpcmUiLCJjb25zdGFudHMiLCJxcyIsImlkIiwibm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25uZWN0TGlzdGVuZXJzIiwidHlwZXMiLCJjdXJyZW50SWR4IiwiY3VycmVudCIsImNvbnRyb2xBcmVhIiwidHlwZUVsIiwiY29udHJvbFZhbEVscyIsImNvbnRyb2xJbkVscyIsImNvbnZlcnRFbHMiLCJjaGVja2VkIiwiaW5uZXJIVE1MIiwiY2xhc3NlcyIsInN1YnR5cGVzIiwicmVwbGFjZUNoaWxkcmVuIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHQiLCJhcHBlbmRDaGlsZCIsImNJbmRleCIsImNvbnRyb2wiLCJ2YWx1ZSIsInVuc2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJuSW5kZXgiLCJFTVBUWSIsImNsYXNzTmFtZSIsIm9uY2hhbmdlIiwiZXZ0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIm9uY2xpY2siLCJwYXJzZUludCIsImxhc3RDb250cm9sIiwibmV3Q29udHJvbCIsImN1cnJlbnRDb25uZWN0aW9ucyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiRklMVEVSIiwiTUlDUk9QSE9ORSIsIk9TQ0lMTEFUT1IiLCJjb252ZXJ0Tm9kZSIsInRoaXN0eXBlIiwiRmlsdGVyIiwiZmlsdGVyIiwiY3JlYXRlQmlxdWFkRmlsdGVyIiwiX2NvbnRyb2xzIiwiaW5pdENvbnRyb2xzIiwidGhhdCIsImZyZXFDb25uZWN0VmFsdWUiLCJmcmVxdWVuY3kiLCJxQ29ubmVjdFZhbHVlIiwiUSIsImZyZXFWYWx1ZSIsInNldFRhcmdldEF0VGltZSIsInFWYWx1ZSIsImlucHV0Q29ubmVjdFZhbHVlIiwibGFzdCIsIk1pY3JvcGhvbmUiLCJzdHJlYW0iLCJpbnB1dCIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiZ2FpbiIsImNyZWF0ZUdhaW4iLCJnYWluVmFsdWUiLCJjcmVhdGVNaWNyb3Bob25lIiwiY3JlYXRlT3NjaWxsYXRvciIsImNyZWF0ZUZpbHRlciIsImNyZWF0ZU1vZGVsIiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4Iiwib3NjaWxsYXRvciIsIk9zY2lsbGF0b3IiLCJvc2MiLCJzdGFydCIsImdhaW5Db25uZWN0VmFsdWUiLCJzdG9wIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImJvZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURB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QUFPLEdBQUcsVUFBVXJDLEdBQUcsRUFBRUMsS0FBSyxFQUFFO0VBQ3JDLE9BQU8sVUFBVUMsR0FBRyxFQUFFO0lBQ3BCLE1BQU1tSCxJQUFJLEdBQUdwSCxLQUFLLENBQUNZLEtBQUssQ0FBQ1gsR0FBRyxDQUFDO0lBQzdCLElBQUltSCxJQUFJLENBQUNsSCxJQUFJLEtBQUtrRCxTQUFTLENBQUMrQyxVQUFVLEVBQUU7TUFDdEMsT0FBT2lCLElBQUk7SUFDYjtJQUNBLE9BQU8sSUFBSXFCLFVBQVUsQ0FBQzFJLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLENBQUM7RUFDeEMsQ0FBQztBQUNILENBQUMsQzs7Ozs7Ozs7Ozs7QUMxSEQsTUFBTW9DLFlBQVksR0FBR2MsbUJBQU8sQ0FBQyxrREFBaUIsQ0FBQztBQUMvQyxNQUFNTyxnQkFBZ0IsR0FBR1AsbUJBQU8sQ0FBQywwREFBcUIsQ0FBQztBQUN2RCxNQUFNNEUsV0FBVyxHQUFHNUUsbUJBQU8sQ0FBQyxnREFBZ0IsQ0FBQztBQUU3QzhFLE1BQU0sQ0FBQ2EsTUFBTSxHQUFHLFlBQVk7RUFDMUJ6RyxZQUFZLENBQUMsVUFBVVcsR0FBRyxFQUFFUixLQUFLLEVBQUU7SUFDakMsSUFBSVEsR0FBRyxFQUFFO01BQ1A7TUFDQTtNQUNBK0YsT0FBTyxDQUFDQyxHQUFHLENBQUNoRyxHQUFHLENBQUM7SUFDbEIsQ0FBQyxNQUFNO01BQ0xRLFFBQVEsQ0FBQ3lGLElBQUksQ0FBQzdELFNBQVMsR0FBRyxTQUFTO01BQ25DLE1BQU1wRixLQUFLLEdBQUcrSCxXQUFXLENBQUN2RixLQUFLLENBQUM7TUFDaENrQixnQkFBZ0IsQ0FBQzFELEtBQUssQ0FBQztJQUN6QjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQyIsImZpbGUiOiJhcHAuMDYzZmY0YzAzMmZiYzkyOGU0ZTIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9pY29ucy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRyb2xzLFxcbi5zdGFydGVkIC5pbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydGVkIC5jb250cm9scyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb250cm9scyBkaXYgbGFiZWwge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY29udHJvbHMgPiAqLFxcbi5jb250cm9scyAuY29udHJvbCBpbnB1dCxcXG4uY29udHJvbHMgLmNvbnRyb2wgc2VsZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250cm9scy5wbGF5YWJsZSAucGxheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbnRyb2xzLnR5cGVzIC50eXBlcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wxaW4gLmNvbnRyb2w6bnRoLWNoaWxkKDMpLFxcbi5jb250cm9scy5jb250cm9sMXZhbCAuY29udHJvbDpudGgtY2hpbGQoMykge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb250cm9scy5jb250cm9sMWluICNjb250cm9sMWluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wxdmFsICNjb250cm9sMXZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sMmluIC5jb250cm9sOm50aC1jaGlsZCg0KSxcXG4uY29udHJvbHMuY29udHJvbDJ2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDQpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDJpbiAjY29udHJvbDJpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sMnZhbCAjY29udHJvbDJ2YWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDNpbiAuY29udHJvbDpudGgtY2hpbGQoNSksXFxuLmNvbnRyb2xzLmNvbnRyb2wzdmFsIC5jb250cm9sOm50aC1jaGlsZCg1KSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wzaW4gI2NvbnRyb2wzaW4ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDN2YWwgI2NvbnRyb2wzdmFsIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w0aW4gLmNvbnRyb2w6bnRoLWNoaWxkKDYpLFxcbi5jb250cm9scy5jb250cm9sNHZhbCAuY29udHJvbDpudGgtY2hpbGQoNikge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb250cm9scy5jb250cm9sNGluICNjb250cm9sNGluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w0dmFsICNjb250cm9sNHZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNWluIC5jb250cm9sOm50aC1jaGlsZCg3KSxcXG4uY29udHJvbHMuY29udHJvbDV2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDcpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDVpbiAjY29udHJvbDVpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNXZhbCAjY29udHJvbDV2YWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmEuaG9tZSxcXG5hLnNvdXJjZUNvZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5OXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmEuaG9tZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzM2cHggLTMycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMzZweDtcXG4gIHRvcDogMnB4O1xcbn1cXG5cXG5hLnNvdXJjZUNvZGUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTczNnB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMzZweDtcXG4gIHRvcDogMnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW1tLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRhNWE3N2JjNWI4OWI4OWM5N2UyZWFmYTcwYWU0NTlkLnBuZ1wiOyIsImltcG9ydCBcIi4vanMvbW1tLmpzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tbW0uY3NzXCI7XG4iLCJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4LCB0eXBlLCBwbGF5YWJsZSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLmlkeCA9IGlkeDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGxheWFibGUgPSBwbGF5YWJsZTtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbm5lY3RvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ubmVjdCgpIHt9LFxuICAgICAgZGlzY29ubmVjdCgpIHt9XG4gICAgfTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbShvdGhlcklkeCwgcGFyYW0sIGtleSkge1xuICAgIGlmIChvdGhlcklkeCA+PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLml0ZW1zW290aGVySWR4XS5jb25uZWN0b3IoKS5kaXNjb25uZWN0KHBhcmFtKTtcbiAgICAgIGRlbGV0ZSB0aGlzLm1vZGVsLmNvbm5lY3Rpb25zW3RoaXMuaWR4XVtgJHt0aGlzLmlkeH1fJHtrZXl9YF07XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdE90aGVyVG9QYXJhbShvdGhlcklkeCwgcGFyYW0sIGtleSkge1xuICAgIGlmIChvdGhlcklkeCA+PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLml0ZW1zW290aGVySWR4XS5jb25uZWN0b3IoKS5jb25uZWN0KHBhcmFtKTtcbiAgICAgIHRoaXMubW9kZWwuY29ubmVjdGlvbnNbdGhpcy5pZHhdW2Ake290aGVySWR4fV8ke2tleX1gXSA9IHBhcmFtO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VPdGhlck9uUGFyYW0ob2xkSWR4LCBuZXdJZHgsIHBhcmFtLCBrZXkpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbShvbGRJZHgsIHBhcmFtLCBrZXkpO1xuICAgIHRoaXMuY29ubmVjdE90aGVyVG9QYXJhbShuZXdJZHgsIHBhcmFtLCBrZXkpO1xuICB9XG5cbiAgcGxheShib29sKSB7XG4gICAgaWYgKGJvb2wpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yKCkuY29ubmVjdCh0aGlzLmN0eC5kZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbm5lY3RvcigpLmRpc2Nvbm5lY3QodGhpcy5jdHguZGVzdGluYXRpb24pO1xuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3VidHlwZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWVzOiBudWxsLFxuICAgICAgc2V0KHZhbCkge30sXG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBsYWJlbCgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5pZHh9ICR7dGhpcy50eXBlfSAke3RoaXMuc3VidHlwZSgpLmdldCgpfWA7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBzZXRWYWx1ZXNUbyhuZXdOb2RlKSB7XG4gICAgY29uc3QgbGFzdENvbnRyb2xzID0gdGhpcy5jb250cm9scygpIHx8IFtdO1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gbmV3Tm9kZS5jb250cm9scygpIHx8IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsYXN0Q29udHJvbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoIW5ld0NvbnRyb2xzW2luZGV4XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobGFzdENvbnRyb2xzW2luZGV4XS50eXBlID09PSBuZXdDb250cm9sc1tpbmRleF0udHlwZSkge1xuICAgICAgICBuZXdDb250cm9sc1tpbmRleF0uc2V0KGxhc3RDb250cm9sc1tpbmRleF0uZ2V0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgdGhpcy5wbGF5KGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb25uZWN0QXVkaW8oY2FsbGJhY2spIHtcbiAgY29uc3QgTUVESUFfQ09OU1RSQUlOVFMgPSB7XG4gICAgYXVkaW86IHRydWUsXG4gICAgdmlkZW86IGZhbHNlXG4gIH07XG5cbiAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAuZ2V0VXNlck1lZGlhKE1FRElBX0NPTlNUUkFJTlRTKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKG1lZGlhU3RyZWFtKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIG1lZGlhU3RyZWFtKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2sobmV3IEVycm9yKFwibmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBub3Qgc3VwcG9ydGVkXCIpKTtcbiAgfVxufTtcbiIsImNvbnN0IGNvbnZlcnQgPSByZXF1aXJlKFwiLi9jb252ZXJ0LW5vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmNvbnN0IHFzID0gaWQgPT4ge1xuICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaWQpO1xuICByZXR1cm4gbm9kZXMubGVuZ3RoID4gMSA/IG5vZGVzIDogbm9kZXNbMF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbm5lY3RMaXN0ZW5lcnMobW9kZWwpIHtcbiAgY29uc3QgeyBpdGVtcywgdHlwZXMsIGNvbm5lY3Rpb25zIH0gPSBtb2RlbDtcbiAgbGV0IGN1cnJlbnRJZHggPSBudWxsO1xuICBsZXQgY3VycmVudCA9IG51bGw7XG5cbiAgY29uc3QgY29udHJvbEFyZWEgPSBxcyhcIi5jb250cm9sc1wiKTtcbiAgY29uc3QgbGFiZWwgPSBxcyhcIiNuYW1lXCIpO1xuICBjb25zdCBwbGF5ID0gcXMoXCIjcGxheVwiKTtcbiAgY29uc3QgdHlwZUVsID0gcXMoXCIjdHlwZVwiKTtcbiAgY29uc3QgY29udHJvbFZhbEVscyA9IHFzKFwiLmNvbnRyb2xzIC5jb250cm9sIGlucHV0XCIpO1xuICBjb25zdCBjb250cm9sSW5FbHMgPSBxcyhcIi5jb250cm9scyAuY29udHJvbCBzZWxlY3RcIik7XG4gIGNvbnN0IGNvbnZlcnRFbHMgPSBxcyhcIi5ub2RlcyBidXR0b25cIik7XG4gIHBsYXkuY2hlY2tlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGNvbm5lY3QoaW5kZXgpIHtcbiAgICBjdXJyZW50SWR4ID0gaW5kZXg7XG4gICAgY3VycmVudCA9IGl0ZW1zW2luZGV4XTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBjdXJyZW50LmxhYmVsKCk7XG4gICAgY29uc3QgeyBwbGF5aW5nLCBwbGF5YWJsZSB9ID0gY3VycmVudDtcblxuICAgIGxldCBjbGFzc2VzID0gXCJjb250cm9scyBcIjtcbiAgICBpZiAocGxheWFibGUpIHtcbiAgICAgIGNsYXNzZXMgKz0gXCJwbGF5YWJsZSBcIjtcbiAgICAgIHBsYXkuY2hlY2tlZCA9IHBsYXlpbmc7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VidHlwZXMgPSBjdXJyZW50ICYmIGN1cnJlbnQuc3VidHlwZSgpLnZhbHVlcztcbiAgICBpZiAoc3VidHlwZXMgJiYgc3VidHlwZXMubGVuZ3RoKSB7XG4gICAgICBjbGFzc2VzICs9IFwidHlwZXMgXCI7XG4gICAgICB0eXBlRWwucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBmb3IgKGxldCBzdWJ0eXBlIG9mIHN1YnR5cGVzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBzdWJ0eXBlKTtcbiAgICAgICAgaWYgKHN1YnR5cGUgPT09IGN1cnJlbnQuc3VidHlwZSgpLmdldCgpKSB7XG4gICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gc3VidHlwZTtcbiAgICAgICAgdHlwZUVsLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udHJvbHMgPSBjdXJyZW50LmNvbnRyb2xzKCk7XG4gICAgZm9yIChsZXQgY0luZGV4ID0gMDsgY0luZGV4IDwgY29udHJvbHMubGVuZ3RoOyBjSW5kZXgrKykge1xuICAgICAgY29uc3QgY29udHJvbCA9IGNvbnRyb2xzW2NJbmRleF07XG4gICAgICBjbGFzc2VzICs9IFwiY29udHJvbFwiICsgKGNJbmRleCArIDEpICsgY29udHJvbC50eXBlICsgXCIgXCI7XG4gICAgICBxcyhcImxhYmVsW2Zvcj1jb250cm9sXCIgKyAoY0luZGV4ICsgMSkgKyBcInZhbF1cIikuaW5uZXJIVE1MID1cbiAgICAgICAgY29udHJvbC5sYWJlbCgpO1xuXG4gICAgICBpZiAoY29udHJvbC50eXBlID09PSBcInZhbFwiKSB7XG4gICAgICAgIGNvbnRyb2xWYWxFbHNbY0luZGV4XS52YWx1ZSA9IGNvbnRyb2wuZ2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250cm9sSW5FbHNbY0luZGV4XS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgdW5zZWxlY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHVuc2VsZWN0ZWQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgLTEpO1xuICAgICAgICB1bnNlbGVjdGVkLnRleHQgPSBcIi1cIjtcbiAgICAgICAgaWYgKGNvbnRyb2wuZ2V0KCkgPT09IG51bGwgfHwgY29udHJvbC5nZXQoKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdW5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sSW5FbHNbY0luZGV4XS5hcHBlbmRDaGlsZCh1bnNlbGVjdGVkKTtcblxuICAgICAgICBmb3IgKGxldCBuSW5kZXggPSAwOyBuSW5kZXggPCBpdGVtcy5sZW5ndGg7IG5JbmRleCsrKSB7XG4gICAgICAgICAgaWYgKG5JbmRleCA9PT0gaW5kZXggfHwgaXRlbXNbbkluZGV4XS50eXBlID09PSBjb25zdGFudHMuRU1QVFkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBuSW5kZXgpO1xuICAgICAgICAgIG9wdGlvbi50ZXh0ID0gaXRlbXNbbkluZGV4XS5sYWJlbCgpO1xuICAgICAgICAgIGlmIChjb250cm9sLmdldCgpID09PSBuSW5kZXgpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udHJvbEluRWxzW2NJbmRleF0uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRyb2xBcmVhLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gIH1cblxuICB0eXBlRWwub25jaGFuZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnQuc3VidHlwZSgpLnNldChldnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHFzKFwiLm9wdGlvbnMgYnV0dG9uXCIpO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBvcHRpb25zW2luZGV4XS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29ubmVjdChpbmRleCk7XG4gICAgfTtcbiAgfVxuXG4gIHBsYXkub25jbGljayA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgY3VycmVudC5wbGF5KGV2dC50YXJnZXQuY2hlY2tlZCk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250cm9sVmFsRWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnRyb2xWYWxFbHNbaW5kZXhdLnZhbHVlID0gbnVsbDtcbiAgICBjb250cm9sVmFsRWxzW2luZGV4XS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnQuY29udHJvbHMoKVtpbmRleF0uc2V0KGV2dC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29udHJvbEluRWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnRyb2xJbkVsc1tpbmRleF0ub25jaGFuZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBjdXJyZW50LmNvbnRyb2xzKClbaW5kZXhdLnNldChwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb252ZXJ0RWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnZlcnRFbHNbaW5kZXhdLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBjb25zdCBsYXN0Q29udHJvbCA9IGl0ZW1zW2N1cnJlbnRJZHhdO1xuICAgICAgICBjb25zdCBuZXdDb250cm9sID0gdHlwZXNbZXZ0LnRhcmdldC52YWx1ZV0oY3VycmVudElkeCk7XG4gICAgICAgIGxhc3RDb250cm9sLnNldFZhbHVlc1RvKG5ld0NvbnRyb2wpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0aW9ucyA9IG1vZGVsLmNvbm5lY3Rpb25zW2N1cnJlbnRJZHhdO1xuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29ubmVjdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBsYXN0Q29udHJvbC5jb25uZWN0b3IoKS5jb25uZWN0KGN1cnJlbnRDb25uZWN0aW9uc1trZXldKTtcbiAgICAgICAgICBuZXdDb250cm9sLmNvbm5lY3RvcigpLmNvbm5lY3QoY3VycmVudENvbm5lY3Rpb25zW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYXN0Q29udHJvbC5kZXN0cm95KCk7XG4gICAgICAgIGl0ZW1zW2N1cnJlbnRJZHhdID0gbmV3Q29udHJvbDtcbiAgICAgICAgY29ubmVjdChjdXJyZW50SWR4KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVNUFRZOiBcImVtcHR5XCIsXG4gIEZJTFRFUjogXCJmaWx0ZXJcIixcbiAgTUlDUk9QSE9ORTogXCJtaWNyb3Bob25lXCIsXG4gIE9TQ0lMTEFUT1I6IFwib3NjaWxsYXRvclwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb252ZXJ0Tm9kZShjdHgsIGl0ZW1zKSB7fTtcbiIsImNvbnN0IE5vZGUgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xuY29uc3QgdGhpc3R5cGUgPSBcImZpbHRlclwiO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCB0aGlzdHlwZSwgdHJ1ZSk7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuZmlsdGVyID0gY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIHRoaXMuZmlsdGVyLnR5cGUgPSBcImxvd3Bhc3NcIjtcblxuICAgIHRoaXMuX2NvbnRyb2xzID0gdGhpcy5pbml0Q29udHJvbHMoKTtcbiAgICB0aGlzLl9jb250cm9sc1swXS5zZXQoMTAwKTtcbiAgICB0aGlzLl9jb250cm9sc1syXS5zZXQoMC43MDcpO1xuICB9XG5cbiAgY29ubmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcjtcbiAgfVxuXG4gIHN1YnR5cGUoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlczogW1wibG93cGFzc1wiLCBcImhpZ2hwYXNzXCIsIFwiYmFuZHBhc3NcIiwgXCJub3RjaFwiXSxcbiAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgdGhhdC5maWx0ZXIudHlwZSA9IHZhbDtcbiAgICAgIH0sXG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGF0LmZpbHRlci50eXBlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmZyZXFDb25uZWN0VmFsdWUsIHRoaXMuZmlsdGVyLmZyZXF1ZW5jeSk7XG4gICAgdGhpcy5kaXNjb25uZWN0T3RoZXJGcm9tUGFyYW0odGhpcy5xQ29ubmVjdFZhbHVlLCB0aGlzLmZpbHRlci5RKTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9scztcbiAgfVxuXG4gIGluaXRDb250cm9scygpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcInZhbFwiLFxuICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICByZXR1cm4gXCJGcmVxXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LmZyZXFWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGF0LmZpbHRlci5mcmVxdWVuY3kuc2V0VGFyZ2V0QXRUaW1lKHZhbCwgMCwgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5mcmVxVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5cIixcbiAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFwiRnJlcSBNb2RcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQucmVwbGFjZU90aGVyT25QYXJhbShcbiAgICAgICAgICAgIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZSxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIHRoYXQuZmlsdGVyLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIFwiZnJlcUNvbm5lY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhhdC5mcmVxQ29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcbiAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFwiUVwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5xVmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhhdC5maWx0ZXIuUS5zZXRUYXJnZXRBdFRpbWUodmFsLCAwLCAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LnFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpblwiLFxuICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICByZXR1cm4gXCJRIE1vZFwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxuICAgICAgICAgICAgdGhhdC5xQ29ubmVjdFZhbHVlLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgdGhhdC5maWx0ZXIuUSxcbiAgICAgICAgICAgIFwicUNvbm5lY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhhdC5xQ29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQucUNvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpblwiLFxuICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICByZXR1cm4gXCJJbnB1dFwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxuICAgICAgICAgICAgdGhhdC5pbnB1dENvbm5lY3RWYWx1ZSxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIHRoYXQuZmlsdGVyLFxuICAgICAgICAgICAgXCJpbnB1dFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuaW5wdXRDb25uZWN0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbW9kZWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZHgpIHtcbiAgICBjb25zdCBsYXN0ID0gbW9kZWwuaXRlbXNbaWR4XTtcbiAgICBpZiAobGFzdC50eXBlID09PSB0aGlzdHlwZSkge1xuICAgICAgcmV0dXJuIGxhc3Q7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRmlsdGVyKGN0eCwgbW9kZWwsIGlkeCk7XG4gIH07XG59O1xuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmNsYXNzIE1pY3JvcGhvbmUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4LCBzdHJlYW0pIHtcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5NSUNST1BIT05FLCBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dCA9IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuICAgIHRoaXMuZ2FpbiA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5pbnB1dC5jb25uZWN0KHRoaXMuZ2Fpbik7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FpbjtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidmFsXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIkdhaW5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQuZ2FpblZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbW9kZWwsIGlkeCwgc3RyZWFtKSB7XG4gIHJldHVybiBuZXcgTWljcm9waG9uZShjdHgsIG1vZGVsLCBpZHgsIHN0cmVhbSk7XG59O1xuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY3JlYXRlTWljcm9waG9uZSA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1taWNyb3Bob25lXCIpO1xuY29uc3QgY3JlYXRlT3NjaWxsYXRvciA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1vc2NpbGxhdG9yXCIpO1xuY29uc3QgY3JlYXRlRmlsdGVyID0gcmVxdWlyZShcIi4vY3JlYXRlLWZpbHRlclwiKTtcbmNvbnN0IE5vZGUgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKHN0cmVhbSkge1xuICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICBjb25zdCBpdGVtcyA9IG5ldyBBcnJheSgxMCk7XG4gIGNvbnN0IGNvbm5lY3Rpb25zID0gbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCh4ID0+ICh7fSkpO1xuICBjb25zdCB0eXBlcyA9IHt9O1xuICBjb25zdCBtb2RlbCA9IHtcbiAgICBpdGVtcyxcbiAgICB0eXBlcyxcbiAgICBjb25uZWN0aW9uc1xuICB9O1xuICB0eXBlcy5vc2NpbGxhdG9yID0gY3JlYXRlT3NjaWxsYXRvcihhdWRpb0N0eCwgbW9kZWwpO1xuICB0eXBlcy5maWx0ZXIgPSBjcmVhdGVGaWx0ZXIoYXVkaW9DdHgsIG1vZGVsKTtcblxuICBpdGVtc1swXSA9IGNyZWF0ZU1pY3JvcGhvbmUoYXVkaW9DdHgsIG1vZGVsLCAwLCBzdHJlYW0pO1xuICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcbiAgICBpdGVtc1tpbmRleF0gPSBuZXcgTm9kZShhdWRpb0N0eCwgbW9kZWwsIGluZGV4LCBjb25zdGFudHMuRU1QVFksIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZvciBkaWFnbm9zdGljc1xuICB3aW5kb3cubW9kZWwgPSBtb2RlbDtcblxuICByZXR1cm4gbW9kZWw7XG59O1xuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbmNsYXNzIE9zY2lsbGF0b3IgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCBjb25zdGFudHMuT1NDSUxMQVRPUiwgdHJ1ZSk7XG4gICAgdGhpcy5vc2MgPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIHRoaXMuZ2FpbiA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5vc2MudHlwZSA9IFwic2luZVwiO1xuICAgIHRoaXMub3NjLmNvbm5lY3QodGhpcy5nYWluKTtcbiAgICB0aGlzLm9zYy5zdGFydCgwKTtcblxuICAgIHRoaXMuX2NvbnRyb2xzID0gdGhpcy5pbml0Q29udHJvbHMoKTtcbiAgICB0aGlzLl9jb250cm9sc1swXS5zZXQoMTAwKTtcbiAgICB0aGlzLl9jb250cm9sc1syXS5zZXQoMSk7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FpbjtcbiAgfVxuXG4gIHN1YnR5cGUoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlczogW1wic2F3dG9vdGhcIiwgXCJzaW5lXCIsIFwic3F1YXJlXCIsIFwidHJpYW5nbGVcIl0sXG4gICAgICBzZXQodmFsKSB7XG4gICAgICAgIHRoYXQub3NjLnR5cGUgPSB2YWw7XG4gICAgICB9LFxuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhhdC5vc2MudHlwZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5kaXNjb25uZWN0T3RoZXJGcm9tUGFyYW0odGhpcy5mcmVxQ29ubmVjdFZhbHVlLCB0aGlzLm9zYy5mcmVxdWVuY3kpO1xuICAgIHRoaXMuZGlzY29ubmVjdE90aGVyRnJvbVBhcmFtKHRoaXMuZ2FpbkNvbm5lY3RWYWx1ZSwgdGhpcy5nYWluLmdhaW4pO1xuICAgIHRoaXMub3NjLnN0b3AoKTtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250cm9scztcbiAgfVxuXG4gIGluaXRDb250cm9scygpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcInZhbFwiLFxuICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICByZXR1cm4gXCJGcmVxXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LmZyZXFWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGF0Lm9zYy5mcmVxdWVuY3kuc2V0VGFyZ2V0QXRUaW1lKHZhbCwgMCwgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5mcmVxVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5cIixcbiAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFwiRnJlcSBNb2RcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQucmVwbGFjZU90aGVyT25QYXJhbShcbiAgICAgICAgICAgIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZSxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIHRoYXQub3NjLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIFwiZnJlcUNvbm5lY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhhdC5mcmVxQ29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcbiAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFwiR2FpblwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5nYWluVmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhhdC5nYWluLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHZhbCwgMCwgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5nYWluVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5cIixcbiAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFwiQW1wIE1vZFwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxuICAgICAgICAgICAgdGhhdC5nYWluQ29ubmVjdFZhbHVlLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgdGhhdC5nYWluLmdhaW4sXG4gICAgICAgICAgICBcImdhaW5Db25uZWN0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZSA9IHZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LmdhaW5WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkeCkge1xuICAgIGNvbnN0IGxhc3QgPSBtb2RlbC5pdGVtc1tpZHhdO1xuICAgIGlmIChsYXN0LnR5cGUgPT09IGNvbnN0YW50cy5PU0NJTExBVE9SKSB7XG4gICAgICByZXR1cm4gbGFzdDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPc2NpbGxhdG9yKGN0eCwgbW9kZWwsIGlkeCk7XG4gIH07XG59O1xuIiwiY29uc3QgY29ubmVjdEF1ZGlvID0gcmVxdWlyZShcIi4vY29ubmVjdC1hdWRpb1wiKTtcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSByZXF1aXJlKFwiLi9jb25uZWN0LWxpc3RlbmVyc1wiKTtcbmNvbnN0IGNyZWF0ZU1vZGVsID0gcmVxdWlyZShcIi4vY3JlYXRlLW1vZGVsXCIpO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25uZWN0QXVkaW8oZnVuY3Rpb24gKGVyciwgYXVkaW8pIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKS5pbm5lckhUTUwgPVxuICAgICAgLy8gIFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gYXVkaW86IFwiICsgZXJyLm1lc3NhZ2U7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwic3RhcnRlZFwiO1xuICAgICAgY29uc3QgbW9kZWwgPSBjcmVhdGVNb2RlbChhdWRpbyk7XG4gICAgICBjb25uZWN0TGlzdGVuZXJzKG1vZGVsKTtcbiAgICB9XG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=