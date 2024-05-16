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
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", \"Helvetica\", sans-serif;\n  height: 100%;\n  width: 100%;\n  background: #ddd;\n  overflow-y: hidden;\n}\n\nbody {\n  text-align: center;\n}\n\n.controls,\n.started .info {\n  display: none;\n}\n\n.started .controls {\n  display: block;\n  text-align: left;\n}\n\n.wrapper {\n  display: inline-block;\n  background: #ffffff;\n  width: 300px;\n  padding: 20px;\n}\n\n.controls div label {\n  width: 100px;\n}\n\n.controls > *,\n.controls .control input,\n.controls .control select,\n.wrapper .graph,\n.wrapper .sequencer {\n  display: none;\n}\n\n.wrapper.graph .graph {\n  display: block;\n}\n.wrapper.sequencer .sequencer {\n  display: block;\n}\n\n.controls.playable .play {\n  display: block;\n}\n.controls.types .types {\n  display: block;\n}\n.controls.control1in .control:nth-child(3),\n.controls.control1val .control:nth-child(3),\n.controls.control1type .control:nth-child(3) {\n  display: block;\n}\n.controls.control1in #control1in,\n.controls.control1type #control1in {\n  display: inline;\n}\n.controls.control1val #control1val {\n  display: inline;\n}\n.controls.control2in .control:nth-child(4),\n.controls.control2val .control:nth-child(4),\n.controls.control2type .control:nth-child(4) {\n  display: block;\n}\n.controls.control2in #control2in,\n.controls.control2type #control2in {\n  display: inline;\n}\n.controls.control2val #control2val {\n  display: inline;\n}\n.controls.control3in .control:nth-child(5),\n.controls.control3val .control:nth-child(5),\n.controls.control3type .control:nth-child(5) {\n  display: block;\n}\n.controls.control3in #control3in,\n.controls.control3type #control3in {\n  display: inline;\n}\n.controls.control3val #control3val {\n  display: inline;\n}\n.controls.control4in .control:nth-child(6),\n.controls.control4val .control:nth-child(6),\n.controls.control4type .control:nth-child(6) {\n  display: block;\n}\n.controls.control4in #control4in,\n.controls.control4type #control4in {\n  display: inline;\n}\n.controls.control4val #control4val {\n  display: inline;\n}\n.controls.control5in .control:nth-child(7),\n.controls.control5val .control:nth-child(7),\n.controls.control5type .control:nth-child(7) {\n  display: block;\n}\n.controls.control5in #control5in,\n.controls.control5type #control5in {\n  display: inline;\n}\n.controls.control5val #control5val {\n  display: inline;\n}\n.controls.control6in .control:nth-child(8),\n.controls.control6val .control:nth-child(8),\n.controls.control6type .control:nth-child(8) {\n  display: block;\n}\n.controls.control6in #control6in,\n.controls.control6type #control6in {\n  display: inline;\n}\n.controls.control6val #control6val {\n  display: inline;\n}\n\ninput[type=\"number\"] {\n  width: 100px;\n}\n\na.home,\na.sourceCode {\n  display: inline-block;\n  cursor: pointer;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -99999px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\na.home {\n  background-position: -736px -32px;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n\na.sourceCode {\n  background-position: -736px 0;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n\nol {\n  font-family: monospace;\n  white-space: pre;\n}\n\nli::marker {\n  font-size: 10px;\n  color: grey;\n}\n", ""]);
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

const constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
const fillOptions = __webpack_require__(/*! ./fill-options */ "./src/js/fill-options.js");
const sequencerFactory = __webpack_require__(/*! ./sequencer */ "./src/js/sequencer.js");
const select = __webpack_require__(/*! ./select */ "./src/js/select.js");
module.exports = function connectListeners(model) {
  const {
    items,
    types,
    connections
  } = model;
  const sequencer = sequencerFactory(model);
  let currentIdx = null;
  let current = null;
  const wrapper = select(".wrapper");
  const controlArea = select(".controls");
  const label = select("#name");
  const play = select("#play");
  const controlValEls = select(".controls .control input");
  const controlInEls = select(".controls .control select");
  const convertEls = select(".nodes button");
  play.checked = false;
  function connect(index) {
    currentIdx = index;
    current = items[index];
    label.textContent = current.label();
    const {
      playing,
      playable
    } = current;
    let classes = "controls ";
    if (playable) {
      classes += "playable ";
      play.checked = playing;
    }
    const controls = current.controls();
    for (let cIndex = 0; cIndex < controls.length; cIndex++) {
      const control = controls[cIndex];
      classes += "control" + (cIndex + 1) + control.type + " ";
      select("label[for=control" + (cIndex + 1) + "val]").textContent = control.label;
      if (control.type === "val") {
        controlValEls[cIndex].value = control.get();
      } else if (control.type === "in") {
        console.log(control);
        fillOptions(controlInEls[cIndex], control.get(), items.map(x => x.asOption()).filter(x => x.value !== index && x.type !== constants.EMPTY), true);
      } else if (control.type === "type") {
        fillOptions(controlInEls[cIndex], control.get(), control.values.map(x => ({
          value: x,
          label: x
        })));
      }
    }
    controlArea.className = classes;
  }
  const sequencerControl = select("#sequencerControl");
  sequencerControl.onclick = function () {
    sequencer.toggle();
  };
  const options = select(".options button");
  for (let index = 0; index < options.length; index++) {
    options[index].onclick = function () {
      connect(index);
    };
  }
  const windowGraph = select("button[value=graph]");
  windowGraph.onclick = function () {
    wrapper.className = "wrapper graph";
  };
  const windowSequencer = select("button[value=sequencer]");
  windowSequencer.onclick = function () {
    wrapper.className = "wrapper sequencer";
  };
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
        label.textContent = current.label();
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
  DELAY: "delay",
  ECHO: "echo",
  EMPTY: "empty",
  FILTER: "filter",
  GAIN: "gain",
  MICROPHONE: "microphone",
  OSCILLATOR: "oscillator",
  FALLBACK_DELAY: 1000
};

/***/ }),

/***/ "./src/js/create-model.js":
/*!********************************!*\
  !*** ./src/js/create-model.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const constants = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
const createMicrophone = __webpack_require__(/*! ./nodes/create-microphone */ "./src/js/nodes/create-microphone.js");
const createOscillator = __webpack_require__(/*! ./nodes/create-oscillator */ "./src/js/nodes/create-oscillator.js");
const createFilter = __webpack_require__(/*! ./nodes/create-filter */ "./src/js/nodes/create-filter.js");
const createDelay = __webpack_require__(/*! ./nodes/create-delay */ "./src/js/nodes/create-delay.js");
const createEcho = __webpack_require__(/*! ./nodes/create-echo */ "./src/js/nodes/create-echo.js");
const createGain = __webpack_require__(/*! ./nodes/create-gain */ "./src/js/nodes/create-gain.js");
const Node = __webpack_require__(/*! ./nodes/Node */ "./src/js/nodes/Node.js");
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
  types.delay = createDelay(audioCtx, model);
  types.echo = createEcho(audioCtx, model);
  types.gain = createGain(audioCtx, model);
  items[0] = createMicrophone(audioCtx, model, 0, stream);
  for (let index = 1; index < 10; index++) {
    items[index] = new Node(audioCtx, model, index, constants.EMPTY, false);
  }

  // for diagnostics
  window.model = model;
  return model;
};

/***/ }),

/***/ "./src/js/fill-options.js":
/*!********************************!*\
  !*** ./src/js/fill-options.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (selectEl, currentVal, items, includeEmpty) {
  selectEl.replaceChildren();
  if (includeEmpty) {
    const unselected = document.createElement("option");
    unselected.setAttribute("value", "");
    unselected.text = "-";
    if (currentVal === null || currentVal === undefined || currentVal === "") {
      unselected.setAttribute("selected", true);
    }
    selectEl.appendChild(unselected);
  }
  for (let index = 0; index < items.length; index++) {
    const {
      value,
      label
    } = items[index];
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.text = label;
    if (currentVal === value) {
      option.setAttribute("selected", true);
    }
    selectEl.appendChild(option);
  }
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

/***/ }),

/***/ "./src/js/nodes/Node.js":
/*!******************************!*\
  !*** ./src/js/nodes/Node.js ***!
  \******************************/
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
  label() {
    return `${this.idx} ${this.type}`;
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
  asOption() {
    return {
      value: this.idx,
      label: this.label(),
      type: this.type
    };
  }
}
module.exports = Node;

/***/ }),

/***/ "./src/js/nodes/create-delay.js":
/*!**************************************!*\
  !*** ./src/js/nodes/create-delay.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
class Delay extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.DELAY, true);
    this.delay = ctx.createDelay();
    this._controls = this.initControls();
    this._controls[0].set(1000);
  }
  connector() {
    return this.delay;
  }
  controls() {
    return this._controls;
  }
  initControls() {
    const that = this;
    return [{
      type: "val",
      short: "t",
      label: "Time (ms)",
      set(val) {
        that.delayTimeValue = val;
        that.delay.delayTime.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.delayTimeValue;
      }
    }, {
      type: "in",
      short: "i",
      label: "Input",
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.delay, "input");
        that.inputConnectValue = val;
      },
      get() {
        return that.inputConnectValue;
      }
    }];
  }
  destroy() {
    super.destroy();
    this.disconnectOtherFromParam(this.inputConnectValue, this.delay);
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if ([constants.DELAY, constants.MICROPHONE].includes(last.type)) {
      return last;
    }
    return new Delay(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/nodes/create-echo.js":
/*!*************************************!*\
  !*** ./src/js/nodes/create-echo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
class Echo extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.ECHO, true);
    this.delay = ctx.createDelay();
    this.gain = ctx.createGain();
    this.delay.connect(this.gain);
    this.gain.connect(this.delay);
    this._controls = this.initControls();
    this._controls[0].set(1000);
    this._controls[1].set(0.5);
  }
  connector() {
    return this.gain;
  }
  controls() {
    return this._controls;
  }
  initControls() {
    const that = this;
    return [{
      type: "val",
      short: "t",
      label: "Time (ms)",
      set(val) {
        that.delayTimeValue = val;
        that.delay.delayTime.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.delayTimeValue;
      }
    }, {
      type: "val",
      short: "s",
      label: "Sustain",
      set(val) {
        that.gainValue = val;
        that.gain.gain.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.gainValue;
      }
    }, {
      type: "in",
      short: "i",
      label: "Input",
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.delay, "input");
        that.inputConnectValue = val;
      },
      get() {
        return that.inputConnectValue;
      }
    }];
  }
  destroy() {
    super.destroy();
    this.disconnectOtherFromParam(this.inputConnectValue, this.delay);
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if ([constants.ECHO, constants.MICROPHONE].includes(last.type)) {
      return last;
    }
    return new Echo(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/nodes/create-filter.js":
/*!***************************************!*\
  !*** ./src/js/nodes/create-filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
const TYPES = ["lowpass", "highpass", "bandpass", "notch"];
class Filter extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.FILTER, true);
    this.model = model;
    this.filter = ctx.createBiquadFilter();
    this._controls = this.initControls();
    this._controls[0].set(100);
    this._controls[2].set(0.707);
    this._controls[4].set("lowpass");
  }
  label() {
    return `${this.idx} ${this.type} ${this.filter.type}`;
  }
  connector() {
    return this.filter;
  }
  controls() {
    return this._controls;
  }
  initControls() {
    const that = this;
    return [{
      type: "val",
      short: "f",
      label: "Freq",
      set(val) {
        that.freqValue = val;
        that.filter.frequency.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.freqValue;
      }
    }, {
      type: "in",
      short: "fm",
      label: "Freq Mod",
      set(val) {
        that.replaceOtherOnParam(that.freqConnectValue, val, that.filter.frequency, "freqConnect");
        that.freqConnectValue = val;
      },
      get() {
        return that.freqConnectValue;
      }
    }, {
      type: "val",
      short: "q",
      label: "Q",
      set(val) {
        that.qValue = val;
        that.filter.Q.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.qValue;
      }
    }, {
      type: "in",
      short: "qm",
      label: "Q Mod",
      set(val) {
        that.replaceOtherOnParam(that.qConnectValue, val, that.filter.Q, "qConnect");
        that.qConnectValue = val;
      },
      get() {
        return that.qConnectValue;
      }
    }, {
      type: "type",
      short: "t",
      label: "Type",
      values: TYPES,
      set(val) {
        if (!TYPES.includes(val)) {
          return;
        }
        that.filter.type = val;
      },
      get() {
        return that.filter.type;
      }
    }, {
      type: "in",
      short: "i",
      label: "Input",
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.filter, "input");
        that.inputConnectValue = val;
      },
      get() {
        return that.inputConnectValue;
      }
    }];
  }
  destroy() {
    super.destroy();
    this.disconnectOtherFromParam(this.freqConnectValue, this.filter.frequency);
    this.disconnectOtherFromParam(this.qConnectValue, this.filter.Q);
    this.disconnectOtherFromParam(this.inputConnectValue, this.filter);
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if ([constants.FILTER, constants.MICROPHONE].includes(last.type)) {
      return last;
    }
    return new Filter(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/nodes/create-gain.js":
/*!*************************************!*\
  !*** ./src/js/nodes/create-gain.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
class Gain extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.GAIN, true);
    this.gain = ctx.createGain();
    this._controls = this.initControls();
    this._controls[0].set(1);
  }
  connector() {
    return this.gain;
  }
  controls() {
    return this._controls;
  }
  initControls() {
    const that = this;
    return [{
      type: "val",
      short: "g",
      label: "Gain",
      set(val) {
        that.gainValue = val;
        that.gain.gain.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.gainValue;
      }
    }, {
      type: "in",
      short: "g",
      label: "Gain Mod",
      set(val) {
        that.replaceOtherOnParam(that.gainConnectValue, val, that.gain.gain, "gainConnect");
        that.gainConnectValue = val;
      },
      get() {
        return that.gainConnectValue;
      }
    }, {
      type: "in",
      short: "i",
      label: "Input",
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.gain, "input");
        that.inputConnectValue = val;
      },
      get() {
        return that.inputConnectValue;
      }
    }];
  }
  destroy() {
    super.destroy();
    this.disconnectOtherFromParam(this.inputConnectValue, this.gain);
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if ([constants.GAIN, constants.MICROPHONE].includes(last.type)) {
      return last;
    }
    return new Gain(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/nodes/create-microphone.js":
/*!*******************************************!*\
  !*** ./src/js/nodes/create-microphone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
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
      short: "g",
      label: "Gain",
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

/***/ "./src/js/nodes/create-oscillator.js":
/*!*******************************************!*\
  !*** ./src/js/nodes/create-oscillator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
const TYPES = ["sawtooth", "sine", "square", "triangle"];
class Oscillator extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.OSCILLATOR, true);
    this.osc = ctx.createOscillator();
    this.gain = ctx.createGain();
    this.delay = ctx.createDelay();
    this.osc.connect(this.gain);
    this.gain.connect(this.delay);
    this.osc.start(0);
    this.delay.delayTime.setTargetAtTime(0.001, 0, 0);
    this._controls = this.initControls();
    this._controls[0].set(100);
    this._controls[2].set(1);
    this._controls[4].set("sine");
    console.log(ctx);
  }
  label() {
    return `${this.idx} ${this.type} ${this.osc.type}`;
  }
  connector() {
    return this.delay;
  }
  subtype() {
    const that = this;
    return {
      values: [],
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
      short: "f",
      label: "Freq",
      set(val) {
        that.freqValue = val;
        that.osc.frequency.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.freqValue;
      }
    }, {
      type: "in",
      short: "fm",
      label: "Freq Mod",
      set(val) {
        that.replaceOtherOnParam(that.freqConnectValue, val, that.osc.frequency, "freqConnect");
        that.freqConnectValue = val;
      },
      get() {
        return that.freqConnectValue;
      }
    }, {
      type: "val",
      short: "g",
      label: "Gain",
      set(val) {
        that.gainValue = val;
        that.gain.gain.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.gainValue;
      }
    }, {
      type: "in",
      short: "g",
      label: "Gain Mod",
      set(val) {
        that.replaceOtherOnParam(that.gainConnectValue, val, that.gain.gain, "gainConnect");
        that.gainConnectValue = val;
      },
      get() {
        return that.gainConnectValue;
      }
    }, {
      type: "type",
      short: "t",
      label: "Type",
      values: TYPES,
      set(val) {
        if (!TYPES.includes(val)) {
          return;
        }
        that.osc.type = val;
      },
      get() {
        return that.osc.type;
      }
    }];
  }
}
module.exports = function (ctx, model) {
  return function (idx) {
    const last = model.items[idx];
    if ([constants.OSCILLATOR, constants.MICROPHONE].includes(last.type)) {
      return last;
    }
    return new Oscillator(ctx, model, idx);
  };
};

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (id) {
  const nodes = document.querySelectorAll(id);
  return nodes.length > 1 ? nodes : nodes[0];
};

/***/ }),

/***/ "./src/js/sequencer.js":
/*!*****************************!*\
  !*** ./src/js/sequencer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const select = __webpack_require__(/*! ./select */ "./src/js/select.js");
const {
  FALLBACK_DELAY
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
const commandSplitter = /^([0-9]{1}) *([a-zA-Z]{1,2}) *([0-9.]*)$/;
const commandSplitterNoIdx = /^([a-zA-Z]{1,2}) *([0-9.]*)$/;
const waitSplitter = /^w *([0-9.]*)(.*)$/;
module.exports = function (model) {
  const linesEl = select("#sequence");
  const delay = select("#delay");
  let lineNum = 0;
  let timeoutId = null;
  let running = false;
  let lastIdx = -1;
  function executeCommand(idx, key, value) {
    if (idx < 0) {
      return;
    }
    const controls = model.items[idx].controls() || [];
    const control = controls.find(x => x.short === key) || {};
    if (control.type === "val") {
      const parsed = parseFloat(value);
      if (parsed) {
        control.set(parsed);
      }
    } else if (control.type === "in") {
      const parsed = parseInt(value);
      if (parsed && idx !== parsed) {
        control.set(parsed);
      }
    } else if (control.type === "type") {
      control.set(value);
    }
  }
  function parseDelay() {
    return parseFloat(delay) || FALLBACK_DELAY;
  }
  function processLine() {
    const lines = linesEl.value.split("\n");
    if (lineNum >= lines.length) {
      lineNum = 0;
    }
    const pieces = (lines[lineNum] || "").split(";");
    for (let piece of pieces) {
      const command = commandSplitter.exec(piece.trim());
      if (command) {
        const [, idx, key, value] = command;
        executeCommand(idx, key, value);
        lastIdx = idx;
      } else {
        const command2 = commandSplitterNoIdx.exec(piece.trim());
        if (command2) {
          const [, key, value] = command2;
          executeCommand(lastIdx, key, value);
        } else {
          const waitCommand = waitSplitter.exec(piece.trim());
          if (waitCommand) {
            const [, duration, optUnit] = waitCommand;
            const delay = optUnit === "ms" ? Math.floor(duration) : Math.floor(duration * 1000);
            lineNum++;
            timeoutId = setTimeout(processLine, delay);
            return;
          }
        }
      }
    }
    if (running) {
      lineNum++;
      timeoutId = setTimeout(processLine, parseDelay());
    }
  }
  return {
    toggle() {
      running = !running;
      if (running) {
        timeoutId = setTimeout(processLine, parseDelay());
      } else {
        clearTimeout(timeoutId);
      }
    }
  };
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tbW0uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tbW0uY3NzPzRhMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWF1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGUtbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpbGwtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW1tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9jcmVhdGUtZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25vZGVzL2NyZWF0ZS1lY2hvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9jcmVhdGUtZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9jcmVhdGUtZ2Fpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbm9kZXMvY3JlYXRlLW1pY3JvcGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25vZGVzL2NyZWF0ZS1vc2NpbGxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcXVlbmNlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY29ubmVjdEF1ZGlvIiwiY2FsbGJhY2siLCJNRURJQV9DT05TVFJBSU5UUyIsImF1ZGlvIiwidmlkZW8iLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwibWVkaWFTdHJlYW0iLCJjYXRjaCIsImVyciIsIkVycm9yIiwiY29uc3RhbnRzIiwicmVxdWlyZSIsImZpbGxPcHRpb25zIiwic2VxdWVuY2VyRmFjdG9yeSIsInNlbGVjdCIsImNvbm5lY3RMaXN0ZW5lcnMiLCJtb2RlbCIsIml0ZW1zIiwidHlwZXMiLCJjb25uZWN0aW9ucyIsInNlcXVlbmNlciIsImN1cnJlbnRJZHgiLCJjdXJyZW50Iiwid3JhcHBlciIsImNvbnRyb2xBcmVhIiwibGFiZWwiLCJwbGF5IiwiY29udHJvbFZhbEVscyIsImNvbnRyb2xJbkVscyIsImNvbnZlcnRFbHMiLCJjaGVja2VkIiwiY29ubmVjdCIsImluZGV4IiwidGV4dENvbnRlbnQiLCJwbGF5aW5nIiwicGxheWFibGUiLCJjbGFzc2VzIiwiY29udHJvbHMiLCJjSW5kZXgiLCJsZW5ndGgiLCJjb250cm9sIiwidHlwZSIsInZhbHVlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsIngiLCJhc09wdGlvbiIsImZpbHRlciIsIkVNUFRZIiwidmFsdWVzIiwiY2xhc3NOYW1lIiwic2VxdWVuY2VyQ29udHJvbCIsIm9uY2xpY2siLCJ0b2dnbGUiLCJvcHRpb25zIiwid2luZG93R3JhcGgiLCJ3aW5kb3dTZXF1ZW5jZXIiLCJldnQiLCJ0YXJnZXQiLCJvbmNoYW5nZSIsInNldCIsInBhcnNlSW50IiwibGFzdENvbnRyb2wiLCJuZXdDb250cm9sIiwic2V0VmFsdWVzVG8iLCJjdXJyZW50Q29ubmVjdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImNvbm5lY3RvciIsImRlc3Ryb3kiLCJERUxBWSIsIkVDSE8iLCJGSUxURVIiLCJHQUlOIiwiTUlDUk9QSE9ORSIsIk9TQ0lMTEFUT1IiLCJGQUxMQkFDS19ERUxBWSIsImNyZWF0ZU1pY3JvcGhvbmUiLCJjcmVhdGVPc2NpbGxhdG9yIiwiY3JlYXRlRmlsdGVyIiwiY3JlYXRlRGVsYXkiLCJjcmVhdGVFY2hvIiwiY3JlYXRlR2FpbiIsIk5vZGUiLCJjcmVhdGVNb2RlbCIsInN0cmVhbSIsImF1ZGlvQ3R4Iiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiQXJyYXkiLCJmaWxsIiwib3NjaWxsYXRvciIsImRlbGF5IiwiZWNobyIsImdhaW4iLCJzZWxlY3RFbCIsImN1cnJlbnRWYWwiLCJpbmNsdWRlRW1wdHkiLCJyZXBsYWNlQ2hpbGRyZW4iLCJ1bnNlbGVjdGVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dCIsInVuZGVmaW5lZCIsImFwcGVuZENoaWxkIiwib3B0aW9uIiwib25sb2FkIiwiYm9keSIsImNvbnN0cnVjdG9yIiwiY3R4IiwiaWR4IiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSIsIm90aGVySWR4IiwicGFyYW0iLCJjb25uZWN0T3RoZXJUb1BhcmFtIiwicmVwbGFjZU90aGVyT25QYXJhbSIsIm9sZElkeCIsIm5ld0lkeCIsImJvb2wiLCJkZXN0aW5hdGlvbiIsIm5ld05vZGUiLCJsYXN0Q29udHJvbHMiLCJuZXdDb250cm9scyIsIkRlbGF5IiwiX2NvbnRyb2xzIiwiaW5pdENvbnRyb2xzIiwidGhhdCIsInNob3J0IiwidmFsIiwiZGVsYXlUaW1lVmFsdWUiLCJkZWxheVRpbWUiLCJzZXRUYXJnZXRBdFRpbWUiLCJpbnB1dENvbm5lY3RWYWx1ZSIsImxhc3QiLCJpbmNsdWRlcyIsIkVjaG8iLCJnYWluVmFsdWUiLCJUWVBFUyIsIkZpbHRlciIsImNyZWF0ZUJpcXVhZEZpbHRlciIsImZyZXFWYWx1ZSIsImZyZXF1ZW5jeSIsImZyZXFDb25uZWN0VmFsdWUiLCJxVmFsdWUiLCJRIiwicUNvbm5lY3RWYWx1ZSIsIkdhaW4iLCJnYWluQ29ubmVjdFZhbHVlIiwiTWljcm9waG9uZSIsImlucHV0IiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJPc2NpbGxhdG9yIiwib3NjIiwic3RhcnQiLCJzdWJ0eXBlIiwic3RvcCIsImlkIiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29tbWFuZFNwbGl0dGVyIiwiY29tbWFuZFNwbGl0dGVyTm9JZHgiLCJ3YWl0U3BsaXR0ZXIiLCJsaW5lc0VsIiwibGluZU51bSIsInRpbWVvdXRJZCIsInJ1bm5pbmciLCJsYXN0SWR4IiwiZXhlY3V0ZUNvbW1hbmQiLCJmaW5kIiwicGFyc2VkIiwicGFyc2VGbG9hdCIsInBhcnNlRGVsYXkiLCJwcm9jZXNzTGluZSIsImxpbmVzIiwic3BsaXQiLCJwaWVjZXMiLCJwaWVjZSIsImNvbW1hbmQiLCJleGVjIiwidHJpbSIsImNvbW1hbmQyIiwid2FpdENvbW1hbmQiLCJkdXJhdGlvbiIsIm9wdFVuaXQiLCJNYXRoIiwiZmxvb3IiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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QUFDLEdBQUdpSixRQUFRO1VBQy9CYixjQUFjLENBQUNELE9BQU8sRUFBRXRHLEdBQUcsRUFBRTdCLEtBQUssQ0FBQztRQUNyQyxDQUFDLE1BQU07VUFDTCxNQUFNa0osV0FBVyxHQUFHcEIsWUFBWSxDQUFDaUIsSUFBSSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDbkQsSUFBSUUsV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxHQUFHRixXQUFXO1lBQ3pDLE1BQU0zRixLQUFLLEdBQUc2RixPQUFPLEtBQUssSUFBSSxHQUMxQkMsSUFBSSxDQUFDQyxLQUFLLENBQUNILFFBQVEsQ0FBQyxHQUNwQkUsSUFBSSxDQUFDQyxLQUFLLENBQUNILFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFL0JuQixPQUFPLEVBQUU7WUFDVEMsU0FBUyxHQUFHc0IsVUFBVSxDQUFDZCxXQUFXLEVBQUVsRixLQUFLLENBQUM7WUFDMUM7VUFDRjtRQUNGO01BQ0Y7SUFDRjtJQUVBLElBQUkyRSxPQUFPLEVBQUU7TUFDWEYsT0FBTyxFQUFFO01BQ1RDLFNBQVMsR0FBR3NCLFVBQVUsQ0FBQ2QsV0FBVyxFQUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25EO0VBQ0Y7RUFFQSxPQUFPO0lBQ0wzSCxNQUFNQSxDQUFBLEVBQUk7TUFDUnFILE9BQU8sR0FBRyxDQUFDQSxPQUFPO01BQ2xCLElBQUlBLE9BQU8sRUFBRTtRQUNYRCxTQUFTLEdBQUdzQixVQUFVLENBQUNkLFdBQVcsRUFBRUQsVUFBVSxDQUFDLENBQUMsQ0FBQztNQUNuRCxDQUFDLE1BQU07UUFDTGdCLFlBQVksQ0FBQ3ZCLFNBQVMsQ0FBQztNQUN6QjtJQUNGO0VBQ0YsQ0FBQztBQUNILENBQUMsQyIsImZpbGUiOiJhcHAuYTI0NjA1MTYwNzRlZjg4NWU0M2MuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9pY29ucy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRyb2xzLFxcbi5zdGFydGVkIC5pbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydGVkIC5jb250cm9scyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY29udHJvbHMgZGl2IGxhYmVsIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmNvbnRyb2xzID4gKixcXG4uY29udHJvbHMgLmNvbnRyb2wgaW5wdXQsXFxuLmNvbnRyb2xzIC5jb250cm9sIHNlbGVjdCxcXG4ud3JhcHBlciAuZ3JhcGgsXFxuLndyYXBwZXIgLnNlcXVlbmNlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlci5ncmFwaCAuZ3JhcGgge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi53cmFwcGVyLnNlcXVlbmNlciAuc2VxdWVuY2VyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29udHJvbHMucGxheWFibGUgLnBsYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb250cm9scy50eXBlcyAudHlwZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb250cm9scy5jb250cm9sMWluIC5jb250cm9sOm50aC1jaGlsZCgzKSxcXG4uY29udHJvbHMuY29udHJvbDF2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDMpLFxcbi5jb250cm9scy5jb250cm9sMXR5cGUgLmNvbnRyb2w6bnRoLWNoaWxkKDMpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDFpbiAjY29udHJvbDFpbixcXG4uY29udHJvbHMuY29udHJvbDF0eXBlICNjb250cm9sMWluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wxdmFsICNjb250cm9sMXZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sMmluIC5jb250cm9sOm50aC1jaGlsZCg0KSxcXG4uY29udHJvbHMuY29udHJvbDJ2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDQpLFxcbi5jb250cm9scy5jb250cm9sMnR5cGUgLmNvbnRyb2w6bnRoLWNoaWxkKDQpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDJpbiAjY29udHJvbDJpbixcXG4uY29udHJvbHMuY29udHJvbDJ0eXBlICNjb250cm9sMmluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wydmFsICNjb250cm9sMnZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sM2luIC5jb250cm9sOm50aC1jaGlsZCg1KSxcXG4uY29udHJvbHMuY29udHJvbDN2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDUpLFxcbi5jb250cm9scy5jb250cm9sM3R5cGUgLmNvbnRyb2w6bnRoLWNoaWxkKDUpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDNpbiAjY29udHJvbDNpbixcXG4uY29udHJvbHMuY29udHJvbDN0eXBlICNjb250cm9sM2luIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wzdmFsICNjb250cm9sM3ZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNGluIC5jb250cm9sOm50aC1jaGlsZCg2KSxcXG4uY29udHJvbHMuY29udHJvbDR2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDYpLFxcbi5jb250cm9scy5jb250cm9sNHR5cGUgLmNvbnRyb2w6bnRoLWNoaWxkKDYpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDRpbiAjY29udHJvbDRpbixcXG4uY29udHJvbHMuY29udHJvbDR0eXBlICNjb250cm9sNGluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w0dmFsICNjb250cm9sNHZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNWluIC5jb250cm9sOm50aC1jaGlsZCg3KSxcXG4uY29udHJvbHMuY29udHJvbDV2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDcpLFxcbi5jb250cm9scy5jb250cm9sNXR5cGUgLmNvbnRyb2w6bnRoLWNoaWxkKDcpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDVpbiAjY29udHJvbDVpbixcXG4uY29udHJvbHMuY29udHJvbDV0eXBlICNjb250cm9sNWluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w1dmFsICNjb250cm9sNXZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNmluIC5jb250cm9sOm50aC1jaGlsZCg4KSxcXG4uY29udHJvbHMuY29udHJvbDZ2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDgpLFxcbi5jb250cm9scy5jb250cm9sNnR5cGUgLmNvbnRyb2w6bnRoLWNoaWxkKDgpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDZpbiAjY29udHJvbDZpbixcXG4uY29udHJvbHMuY29udHJvbDZ0eXBlICNjb250cm9sNmluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w2dmFsICNjb250cm9sNnZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuYS5ob21lLFxcbmEuc291cmNlQ29kZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB0ZXh0LWluZGVudDogLTk5OTk5cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuYS5ob21lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC03MzZweCAtMzJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEzNnB4O1xcbiAgdG9wOiAycHg7XFxufVxcblxcbmEuc291cmNlQ29kZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzM2cHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEzNnB4O1xcbiAgdG9wOiAycHg7XFxufVxcblxcbm9sIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG5saTo6bWFya2VyIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW1tLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRhNWE3N2JjNWI4OWI4OWM5N2UyZWFmYTcwYWU0NTlkLnBuZ1wiOyIsImltcG9ydCBcIi4vanMvbW1tLmpzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tbW0uY3NzXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbm5lY3RBdWRpbyhjYWxsYmFjaykge1xuICBjb25zdCBNRURJQV9DT05TVFJBSU5UUyA9IHtcbiAgICBhdWRpbzogdHJ1ZSxcbiAgICB2aWRlbzogZmFsc2VcbiAgfTtcblxuICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoTUVESUFfQ09OU1RSQUlOVFMpXG4gICAgICAudGhlbihmdW5jdGlvbiAobWVkaWFTdHJlYW0pIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgbWVkaWFTdHJlYW0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICB9XG59O1xuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY29uc3QgZmlsbE9wdGlvbnMgPSByZXF1aXJlKFwiLi9maWxsLW9wdGlvbnNcIik7XG5jb25zdCBzZXF1ZW5jZXJGYWN0b3J5ID0gcmVxdWlyZShcIi4vc2VxdWVuY2VyXCIpO1xuY29uc3Qgc2VsZWN0ID0gcmVxdWlyZShcIi4vc2VsZWN0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbm5lY3RMaXN0ZW5lcnMobW9kZWwpIHtcbiAgY29uc3QgeyBpdGVtcywgdHlwZXMsIGNvbm5lY3Rpb25zIH0gPSBtb2RlbDtcbiAgY29uc3Qgc2VxdWVuY2VyID0gc2VxdWVuY2VyRmFjdG9yeShtb2RlbCk7XG4gIGxldCBjdXJyZW50SWR4ID0gbnVsbDtcbiAgbGV0IGN1cnJlbnQgPSBudWxsO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBzZWxlY3QoXCIud3JhcHBlclwiKTtcbiAgY29uc3QgY29udHJvbEFyZWEgPSBzZWxlY3QoXCIuY29udHJvbHNcIik7XG4gIGNvbnN0IGxhYmVsID0gc2VsZWN0KFwiI25hbWVcIik7XG4gIGNvbnN0IHBsYXkgPSBzZWxlY3QoXCIjcGxheVwiKTtcbiAgY29uc3QgY29udHJvbFZhbEVscyA9IHNlbGVjdChcIi5jb250cm9scyAuY29udHJvbCBpbnB1dFwiKTtcbiAgY29uc3QgY29udHJvbEluRWxzID0gc2VsZWN0KFwiLmNvbnRyb2xzIC5jb250cm9sIHNlbGVjdFwiKTtcbiAgY29uc3QgY29udmVydEVscyA9IHNlbGVjdChcIi5ub2RlcyBidXR0b25cIik7XG4gIHBsYXkuY2hlY2tlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGNvbm5lY3QoaW5kZXgpIHtcbiAgICBjdXJyZW50SWR4ID0gaW5kZXg7XG4gICAgY3VycmVudCA9IGl0ZW1zW2luZGV4XTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGN1cnJlbnQubGFiZWwoKTtcbiAgICBjb25zdCB7IHBsYXlpbmcsIHBsYXlhYmxlIH0gPSBjdXJyZW50O1xuXG4gICAgbGV0IGNsYXNzZXMgPSBcImNvbnRyb2xzIFwiO1xuICAgIGlmIChwbGF5YWJsZSkge1xuICAgICAgY2xhc3NlcyArPSBcInBsYXlhYmxlIFwiO1xuICAgICAgcGxheS5jaGVja2VkID0gcGxheWluZztcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9scyA9IGN1cnJlbnQuY29udHJvbHMoKTtcbiAgICBmb3IgKGxldCBjSW5kZXggPSAwOyBjSW5kZXggPCBjb250cm9scy5sZW5ndGg7IGNJbmRleCsrKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gY29udHJvbHNbY0luZGV4XTtcbiAgICAgIGNsYXNzZXMgKz0gXCJjb250cm9sXCIgKyAoY0luZGV4ICsgMSkgKyBjb250cm9sLnR5cGUgKyBcIiBcIjtcbiAgICAgIHNlbGVjdChcImxhYmVsW2Zvcj1jb250cm9sXCIgKyAoY0luZGV4ICsgMSkgKyBcInZhbF1cIikudGV4dENvbnRlbnQgPVxuICAgICAgICBjb250cm9sLmxhYmVsO1xuXG4gICAgICBpZiAoY29udHJvbC50eXBlID09PSBcInZhbFwiKSB7XG4gICAgICAgIGNvbnRyb2xWYWxFbHNbY0luZGV4XS52YWx1ZSA9IGNvbnRyb2wuZ2V0KCk7XG4gICAgICB9IGVsc2UgaWYgKGNvbnRyb2wudHlwZSA9PT0gXCJpblwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRyb2wpO1xuICAgICAgICBmaWxsT3B0aW9ucyhcbiAgICAgICAgICBjb250cm9sSW5FbHNbY0luZGV4XSxcbiAgICAgICAgICBjb250cm9sLmdldCgpLFxuICAgICAgICAgIGl0ZW1zXG4gICAgICAgICAgICAubWFwKHggPT4geC5hc09wdGlvbigpKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHgudmFsdWUgIT09IGluZGV4ICYmIHgudHlwZSAhPT0gY29uc3RhbnRzLkVNUFRZKSxcbiAgICAgICAgICB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbC50eXBlID09PSBcInR5cGVcIikge1xuICAgICAgICBmaWxsT3B0aW9ucyhcbiAgICAgICAgICBjb250cm9sSW5FbHNbY0luZGV4XSxcbiAgICAgICAgICBjb250cm9sLmdldCgpLFxuICAgICAgICAgIGNvbnRyb2wudmFsdWVzLm1hcCh4ID0+ICh7dmFsdWU6IHgsbGFiZWw6IHh9KSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRyb2xBcmVhLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gIH1cblxuICBjb25zdCBzZXF1ZW5jZXJDb250cm9sID0gc2VsZWN0KFwiI3NlcXVlbmNlckNvbnRyb2xcIik7XG4gIHNlcXVlbmNlckNvbnRyb2wub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXF1ZW5jZXIudG9nZ2xlKCk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gc2VsZWN0KFwiLm9wdGlvbnMgYnV0dG9uXCIpO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgb3B0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBvcHRpb25zW2luZGV4XS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29ubmVjdChpbmRleCk7XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHdpbmRvd0dyYXBoID0gc2VsZWN0KFwiYnV0dG9uW3ZhbHVlPWdyYXBoXVwiKTtcbiAgd2luZG93R3JhcGgub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFwid3JhcHBlciBncmFwaFwiO1xuICB9XG5cbiAgY29uc3Qgd2luZG93U2VxdWVuY2VyID0gc2VsZWN0KFwiYnV0dG9uW3ZhbHVlPXNlcXVlbmNlcl1cIik7XG4gIHdpbmRvd1NlcXVlbmNlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJ3cmFwcGVyIHNlcXVlbmNlclwiO1xuICB9XG5cbiAgcGxheS5vbmNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICBjdXJyZW50LnBsYXkoZXZ0LnRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRyb2xWYWxFbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29udHJvbFZhbEVsc1tpbmRleF0udmFsdWUgPSBudWxsO1xuICAgIGNvbnRyb2xWYWxFbHNbaW5kZXhdLm9uY2hhbmdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudC5jb250cm9scygpW2luZGV4XS5zZXQoZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gY3VycmVudC5sYWJlbCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29udHJvbEluRWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnRyb2xJbkVsc1tpbmRleF0ub25jaGFuZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBjdXJyZW50LmNvbnRyb2xzKClbaW5kZXhdLnNldChwYXJzZUludChldnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb252ZXJ0RWxzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnZlcnRFbHNbaW5kZXhdLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBjb25zdCBsYXN0Q29udHJvbCA9IGl0ZW1zW2N1cnJlbnRJZHhdO1xuICAgICAgICBjb25zdCBuZXdDb250cm9sID0gdHlwZXNbZXZ0LnRhcmdldC52YWx1ZV0oY3VycmVudElkeCk7XG4gICAgICAgIGxhc3RDb250cm9sLnNldFZhbHVlc1RvKG5ld0NvbnRyb2wpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0aW9ucyA9IG1vZGVsLmNvbm5lY3Rpb25zW2N1cnJlbnRJZHhdO1xuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29ubmVjdGlvbnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICBsYXN0Q29udHJvbC5jb25uZWN0b3IoKS5jb25uZWN0KGN1cnJlbnRDb25uZWN0aW9uc1trZXldKTtcbiAgICAgICAgICBuZXdDb250cm9sLmNvbm5lY3RvcigpLmNvbm5lY3QoY3VycmVudENvbm5lY3Rpb25zW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYXN0Q29udHJvbC5kZXN0cm95KCk7XG4gICAgICAgIGl0ZW1zW2N1cnJlbnRJZHhdID0gbmV3Q29udHJvbDtcbiAgICAgICAgY29ubmVjdChjdXJyZW50SWR4KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIERFTEFZOiBcImRlbGF5XCIsXG4gIEVDSE86IFwiZWNob1wiLFxuICBFTVBUWTogXCJlbXB0eVwiLFxuICBGSUxURVI6IFwiZmlsdGVyXCIsXG4gIEdBSU46IFwiZ2FpblwiLFxuICBNSUNST1BIT05FOiBcIm1pY3JvcGhvbmVcIixcbiAgT1NDSUxMQVRPUjogXCJvc2NpbGxhdG9yXCIsXG4gIEZBTExCQUNLX0RFTEFZOiAxMDAwXG59O1xuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY29uc3QgY3JlYXRlTWljcm9waG9uZSA9IHJlcXVpcmUoXCIuL25vZGVzL2NyZWF0ZS1taWNyb3Bob25lXCIpO1xuY29uc3QgY3JlYXRlT3NjaWxsYXRvciA9IHJlcXVpcmUoXCIuL25vZGVzL2NyZWF0ZS1vc2NpbGxhdG9yXCIpO1xuY29uc3QgY3JlYXRlRmlsdGVyID0gcmVxdWlyZShcIi4vbm9kZXMvY3JlYXRlLWZpbHRlclwiKTtcbmNvbnN0IGNyZWF0ZURlbGF5ID0gcmVxdWlyZShcIi4vbm9kZXMvY3JlYXRlLWRlbGF5XCIpO1xuY29uc3QgY3JlYXRlRWNobyA9IHJlcXVpcmUoXCIuL25vZGVzL2NyZWF0ZS1lY2hvXCIpO1xuY29uc3QgY3JlYXRlR2FpbiA9IHJlcXVpcmUoXCIuL25vZGVzL2NyZWF0ZS1nYWluXCIpO1xuY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL25vZGVzL05vZGVcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlTW9kZWwoc3RyZWFtKSB7XG4gIGNvbnN0IGF1ZGlvQ3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG4gIGNvbnN0IGl0ZW1zID0gbmV3IEFycmF5KDEwKTtcbiAgY29uc3QgY29ubmVjdGlvbnMgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCkubWFwKHggPT4gKHt9KSk7XG4gIGNvbnN0IHR5cGVzID0ge307XG4gIGNvbnN0IG1vZGVsID0ge1xuICAgIGl0ZW1zLFxuICAgIHR5cGVzLFxuICAgIGNvbm5lY3Rpb25zXG4gIH07XG4gIHR5cGVzLm9zY2lsbGF0b3IgPSBjcmVhdGVPc2NpbGxhdG9yKGF1ZGlvQ3R4LCBtb2RlbCk7XG4gIHR5cGVzLmZpbHRlciA9IGNyZWF0ZUZpbHRlcihhdWRpb0N0eCwgbW9kZWwpO1xuICB0eXBlcy5kZWxheSA9IGNyZWF0ZURlbGF5KGF1ZGlvQ3R4LCBtb2RlbCk7XG4gIHR5cGVzLmVjaG8gPSBjcmVhdGVFY2hvKGF1ZGlvQ3R4LCBtb2RlbCk7XG4gIHR5cGVzLmdhaW4gPSBjcmVhdGVHYWluKGF1ZGlvQ3R4LCBtb2RlbCk7XG5cbiAgaXRlbXNbMF0gPSBjcmVhdGVNaWNyb3Bob25lKGF1ZGlvQ3R4LCBtb2RlbCwgMCwgc3RyZWFtKTtcbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG4gICAgaXRlbXNbaW5kZXhdID0gbmV3IE5vZGUoYXVkaW9DdHgsIG1vZGVsLCBpbmRleCwgY29uc3RhbnRzLkVNUFRZLCBmYWxzZSk7XG4gIH1cblxuICAvLyBmb3IgZGlhZ25vc3RpY3NcbiAgd2luZG93Lm1vZGVsID0gbW9kZWw7XG5cbiAgcmV0dXJuIG1vZGVsO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VsZWN0RWwsIGN1cnJlbnRWYWwsIGl0ZW1zLCBpbmNsdWRlRW1wdHkpIHtcclxuICBzZWxlY3RFbC5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuXHJcbiAgaWYgKGluY2x1ZGVFbXB0eSkge1xyXG4gICAgY29uc3QgdW5zZWxlY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICB1bnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xyXG4gICAgdW5zZWxlY3RlZC50ZXh0ID0gXCItXCI7XHJcbiAgICBpZiAoY3VycmVudFZhbCA9PT0gbnVsbCB8fCBjdXJyZW50VmFsID09PSB1bmRlZmluZWQgfHwgY3VycmVudFZhbCA9PT0gXCJcIikge1xyXG4gICAgICB1bnNlbGVjdGVkLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0RWwuYXBwZW5kQ2hpbGQodW5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBsYWJlbCB9ID0gaXRlbXNbaW5kZXhdO1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSk7XHJcbiAgICBvcHRpb24udGV4dCA9IGxhYmVsO1xyXG4gICAgaWYgKGN1cnJlbnRWYWwgPT09IHZhbHVlKSB7XHJcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEVsLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGNvbm5lY3RBdWRpbyA9IHJlcXVpcmUoXCIuL2Nvbm5lY3QtYXVkaW9cIik7XG5jb25zdCBjb25uZWN0TGlzdGVuZXJzID0gcmVxdWlyZShcIi4vY29ubmVjdC1saXN0ZW5lcnNcIik7XG5jb25zdCBjcmVhdGVNb2RlbCA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1tb2RlbFwiKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29ubmVjdEF1ZGlvKGZ1bmN0aW9uIChlcnIsIGF1ZGlvKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikuaW5uZXJIVE1MID1cbiAgICAgIC8vICBcIkZhaWxlZCB0byBjb25uZWN0IHRvIGF1ZGlvOiBcIiArIGVyci5tZXNzYWdlO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcInN0YXJ0ZWRcIjtcbiAgICAgIGNvbnN0IG1vZGVsID0gY3JlYXRlTW9kZWwoYXVkaW8pO1xuICAgICAgY29ubmVjdExpc3RlbmVycyhtb2RlbCk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4LCB0eXBlLCBwbGF5YWJsZSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLmlkeCA9IGlkeDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGxheWFibGUgPSBwbGF5YWJsZTtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbm5lY3RvcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ubmVjdCgpIHt9LFxuICAgICAgZGlzY29ubmVjdCgpIHt9XG4gICAgfTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbShvdGhlcklkeCwgcGFyYW0sIGtleSkge1xuICAgIGlmIChvdGhlcklkeCA+PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLml0ZW1zW290aGVySWR4XS5jb25uZWN0b3IoKS5kaXNjb25uZWN0KHBhcmFtKTtcbiAgICAgIGRlbGV0ZSB0aGlzLm1vZGVsLmNvbm5lY3Rpb25zW3RoaXMuaWR4XVtgJHt0aGlzLmlkeH1fJHtrZXl9YF07XG4gICAgfVxuICB9XG5cbiAgY29ubmVjdE90aGVyVG9QYXJhbShvdGhlcklkeCwgcGFyYW0sIGtleSkge1xuICAgIGlmIChvdGhlcklkeCA+PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLml0ZW1zW290aGVySWR4XS5jb25uZWN0b3IoKS5jb25uZWN0KHBhcmFtKTtcbiAgICAgIHRoaXMubW9kZWwuY29ubmVjdGlvbnNbdGhpcy5pZHhdW2Ake290aGVySWR4fV8ke2tleX1gXSA9IHBhcmFtO1xuICAgIH1cbiAgfVxuXG4gIHJlcGxhY2VPdGhlck9uUGFyYW0ob2xkSWR4LCBuZXdJZHgsIHBhcmFtLCBrZXkpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbShvbGRJZHgsIHBhcmFtLCBrZXkpO1xuICAgIHRoaXMuY29ubmVjdE90aGVyVG9QYXJhbShuZXdJZHgsIHBhcmFtLCBrZXkpO1xuICB9XG5cbiAgcGxheShib29sKSB7XG4gICAgaWYgKGJvb2wpIHtcbiAgICAgIHRoaXMuY29ubmVjdG9yKCkuY29ubmVjdCh0aGlzLmN0eC5kZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbm5lY3RvcigpLmRpc2Nvbm5lY3QodGhpcy5jdHguZGVzdGluYXRpb24pO1xuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbGFiZWwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR4fSAke3RoaXMudHlwZX1gO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2V0VmFsdWVzVG8obmV3Tm9kZSkge1xuICAgIGNvbnN0IGxhc3RDb250cm9scyA9IHRoaXMuY29udHJvbHMoKSB8fCBbXTtcbiAgICBjb25zdCBuZXdDb250cm9scyA9IG5ld05vZGUuY29udHJvbHMoKSB8fCBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGFzdENvbnRyb2xzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKCFuZXdDb250cm9sc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGxhc3RDb250cm9sc1tpbmRleF0udHlwZSA9PT0gbmV3Q29udHJvbHNbaW5kZXhdLnR5cGUpIHtcbiAgICAgICAgbmV3Q29udHJvbHNbaW5kZXhdLnNldChsYXN0Q29udHJvbHNbaW5kZXhdLmdldCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGxheShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXNPcHRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLmlkeCxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsKCksXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGU7XG4iLCJjb25zdCBOb2RlID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcclxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcclxuXHJcbmNsYXNzIERlbGF5IGV4dGVuZHMgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XHJcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5ERUxBWSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmRlbGF5ID0gY3R4LmNyZWF0ZURlbGF5KCk7XHJcblxyXG4gICAgdGhpcy5fY29udHJvbHMgPSB0aGlzLmluaXRDb250cm9scygpO1xyXG4gICAgdGhpcy5fY29udHJvbHNbMF0uc2V0KDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVsYXk7XHJcbiAgfVxyXG5cclxuICBjb250cm9scygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250cm9scztcclxuICB9XHJcblxyXG4gIGluaXRDb250cm9scygpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidmFsXCIsXHJcbiAgICAgICAgc2hvcnQ6IFwidFwiLFxyXG4gICAgICAgIGxhYmVsOiBcIlRpbWUgKG1zKVwiLFxyXG4gICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgIHRoYXQuZGVsYXlUaW1lVmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICB0aGF0LmRlbGF5LmRlbGF5VGltZS5zZXRUYXJnZXRBdFRpbWUodmFsLCAwLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0LmRlbGF5VGltZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiaW5cIixcclxuICAgICAgICBzaG9ydDogXCJpXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiSW5wdXRcIixcclxuICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXHJcbiAgICAgICAgICAgIHRoYXQuaW5wdXRDb25uZWN0VmFsdWUsXHJcbiAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgdGhhdC5kZWxheSxcclxuICAgICAgICAgICAgXCJpbnB1dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhhdC5pbnB1dENvbm5lY3RWYWx1ZSA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0LmlucHV0Q29ubmVjdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmlucHV0Q29ubmVjdFZhbHVlLCB0aGlzLmRlbGF5KTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbW9kZWwpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGlkeCkge1xyXG4gICAgY29uc3QgbGFzdCA9IG1vZGVsLml0ZW1zW2lkeF07XHJcbiAgICBpZiAoW2NvbnN0YW50cy5ERUxBWSwgY29uc3RhbnRzLk1JQ1JPUEhPTkVdLmluY2x1ZGVzKGxhc3QudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IERlbGF5KGN0eCwgbW9kZWwsIGlkeCk7XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XHJcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XHJcblxyXG5jbGFzcyBFY2hvIGV4dGVuZHMgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XHJcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5FQ0hPLCB0cnVlKTtcclxuICAgIHRoaXMuZGVsYXkgPSBjdHguY3JlYXRlRGVsYXkoKTtcclxuICAgIHRoaXMuZ2FpbiA9IGN0eC5jcmVhdGVHYWluKCk7XHJcblxyXG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZ2Fpbik7XHJcbiAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmRlbGF5KTtcclxuICAgIHRoaXMuX2NvbnRyb2xzID0gdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICAgIHRoaXMuX2NvbnRyb2xzWzBdLnNldCgxMDAwKTtcclxuICAgIHRoaXMuX2NvbnRyb2xzWzFdLnNldCgwLjUpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2FpbjtcclxuICB9XHJcblxyXG4gIGNvbnRyb2xzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xzO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbnRyb2xzKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcclxuICAgICAgICBzaG9ydDogXCJ0XCIsXHJcbiAgICAgICAgbGFiZWw6IFwiVGltZSAobXMpXCIsXHJcbiAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgdGhhdC5kZWxheVRpbWVWYWx1ZSA9IHZhbDtcclxuICAgICAgICAgIHRoYXQuZGVsYXkuZGVsYXlUaW1lLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuZGVsYXlUaW1lVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcclxuICAgICAgICBzaG9ydDogXCJzXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiU3VzdGFpblwiLFxyXG4gICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgIHRoYXQuZ2FpblZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgdGhhdC5nYWluLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHZhbCwgMCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhhdC5nYWluVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJpblwiLFxyXG4gICAgICAgIHNob3J0OiBcImlcIixcclxuICAgICAgICBsYWJlbDogXCJJbnB1dFwiLFxyXG4gICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgIHRoYXQucmVwbGFjZU90aGVyT25QYXJhbShcclxuICAgICAgICAgICAgdGhhdC5pbnB1dENvbm5lY3RWYWx1ZSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICB0aGF0LmRlbGF5LFxyXG4gICAgICAgICAgICBcImlucHV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuaW5wdXRDb25uZWN0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHN1cGVyLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuZGlzY29ubmVjdE90aGVyRnJvbVBhcmFtKHRoaXMuaW5wdXRDb25uZWN0VmFsdWUsIHRoaXMuZGVsYXkpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaWR4KSB7XHJcbiAgICBjb25zdCBsYXN0ID0gbW9kZWwuaXRlbXNbaWR4XTtcclxuICAgIGlmIChbY29uc3RhbnRzLkVDSE8sIGNvbnN0YW50cy5NSUNST1BIT05FXS5pbmNsdWRlcyhsYXN0LnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBFY2hvKGN0eCwgbW9kZWwsIGlkeCk7XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgVFlQRVMgPSBbXCJsb3dwYXNzXCIsIFwiaGlnaHBhc3NcIiwgXCJiYW5kcGFzc1wiLCBcIm5vdGNoXCJdO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCBjb25zdGFudHMuRklMVEVSLCB0cnVlKTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5maWx0ZXIgPSBjdHguY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG5cbiAgICB0aGlzLl9jb250cm9scyA9IHRoaXMuaW5pdENvbnRyb2xzKCk7XG4gICAgdGhpcy5fY29udHJvbHNbMF0uc2V0KDEwMCk7XG4gICAgdGhpcy5fY29udHJvbHNbMl0uc2V0KDAuNzA3KTtcbiAgICB0aGlzLl9jb250cm9sc1s0XS5zZXQoXCJsb3dwYXNzXCIpO1xuICB9XG5cbiAgbGFiZWwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR4fSAke3RoaXMudHlwZX0gJHt0aGlzLmZpbHRlci50eXBlfWA7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xzO1xuICB9XG5cbiAgaW5pdENvbnRyb2xzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidmFsXCIsXG4gICAgICAgIHNob3J0OiBcImZcIixcbiAgICAgICAgbGFiZWw6IFwiRnJlcVwiLFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5mcmVxVmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhhdC5maWx0ZXIuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZnJlcVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImluXCIsXG4gICAgICAgIHNob3J0OiBcImZtXCIsXG4gICAgICAgIGxhYmVsOiBcIkZyZXEgTW9kXCIsXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXG4gICAgICAgICAgICB0aGF0LmZyZXFDb25uZWN0VmFsdWUsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICB0aGF0LmZpbHRlci5mcmVxdWVuY3ksXG4gICAgICAgICAgICBcImZyZXFDb25uZWN0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZSA9IHZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LmZyZXFDb25uZWN0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidmFsXCIsXG4gICAgICAgIHNob3J0OiBcInFcIixcbiAgICAgICAgbGFiZWw6IFwiUVwiLFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5xVmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhhdC5maWx0ZXIuUS5zZXRUYXJnZXRBdFRpbWUodmFsLCAwLCAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LnFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpblwiLFxuICAgICAgICBzaG9ydDogXCJxbVwiLFxuICAgICAgICBsYWJlbDogXCJRIE1vZFwiLFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxuICAgICAgICAgICAgdGhhdC5xQ29ubmVjdFZhbHVlLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgdGhhdC5maWx0ZXIuUSxcbiAgICAgICAgICAgIFwicUNvbm5lY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhhdC5xQ29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQucUNvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0eXBlXCIsXG4gICAgICAgIHNob3J0OiBcInRcIixcbiAgICAgICAgbGFiZWw6IFwiVHlwZVwiLFxuICAgICAgICB2YWx1ZXM6IFRZUEVTLFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgaWYgKCFUWVBFUy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoYXQuZmlsdGVyLnR5cGUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5maWx0ZXIudHlwZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpblwiLFxuICAgICAgICBzaG9ydDogXCJpXCIsXG4gICAgICAgIGxhYmVsOiBcIklucHV0XCIsXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXG4gICAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgdGhhdC5maWx0ZXIsXG4gICAgICAgICAgICBcImlucHV0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoYXQuaW5wdXRDb25uZWN0VmFsdWUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5pbnB1dENvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmZyZXFDb25uZWN0VmFsdWUsIHRoaXMuZmlsdGVyLmZyZXF1ZW5jeSk7XG4gICAgdGhpcy5kaXNjb25uZWN0T3RoZXJGcm9tUGFyYW0odGhpcy5xQ29ubmVjdFZhbHVlLCB0aGlzLmZpbHRlci5RKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmlucHV0Q29ubmVjdFZhbHVlLCB0aGlzLmZpbHRlcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkeCkge1xuICAgIGNvbnN0IGxhc3QgPSBtb2RlbC5pdGVtc1tpZHhdO1xuICAgIGlmIChbY29uc3RhbnRzLkZJTFRFUiwgY29uc3RhbnRzLk1JQ1JPUEhPTkVdLmluY2x1ZGVzKGxhc3QudHlwZSkpIHtcbiAgICAgIHJldHVybiBsYXN0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZpbHRlcihjdHgsIG1vZGVsLCBpZHgpO1xuICB9O1xufTtcbiIsImNvbnN0IE5vZGUgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xyXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xyXG5cclxuY2xhc3MgR2FpbiBleHRlbmRzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgbW9kZWwsIGlkeCkge1xyXG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCBjb25zdGFudHMuR0FJTiwgdHJ1ZSk7XHJcbiAgICB0aGlzLmdhaW4gPSBjdHguY3JlYXRlR2FpbigpO1xyXG5cclxuICAgIHRoaXMuX2NvbnRyb2xzID0gdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICAgIHRoaXMuX2NvbnRyb2xzWzBdLnNldCgxKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmdhaW47XHJcbiAgfVxyXG5cclxuICBjb250cm9scygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250cm9scztcclxuICB9XHJcblxyXG4gIGluaXRDb250cm9scygpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidmFsXCIsXHJcbiAgICAgICAgc2hvcnQ6IFwiZ1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIkdhaW5cIixcclxuICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICB0aGF0LmdhaW5WYWx1ZSA9IHZhbDtcclxuICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiaW5cIixcclxuICAgICAgICBzaG9ydDogXCJnXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiR2FpbiBNb2RcIixcclxuICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXHJcbiAgICAgICAgICAgIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICB0aGF0LmdhaW4uZ2FpbixcclxuICAgICAgICAgICAgXCJnYWluQ29ubmVjdFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhhdC5nYWluQ29ubmVjdFZhbHVlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImluXCIsXHJcbiAgICAgICAgc2hvcnQ6IFwiaVwiLFxyXG4gICAgICAgIGxhYmVsOiBcIklucHV0XCIsXHJcbiAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxyXG4gICAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlLFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIHRoYXQuZ2FpbixcclxuICAgICAgICAgICAgXCJpbnB1dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhhdC5pbnB1dENvbm5lY3RWYWx1ZSA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0LmlucHV0Q29ubmVjdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmlucHV0Q29ubmVjdFZhbHVlLCB0aGlzLmdhaW4pO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaWR4KSB7XHJcbiAgICBjb25zdCBsYXN0ID0gbW9kZWwuaXRlbXNbaWR4XTtcclxuICAgIGlmIChbY29uc3RhbnRzLkdBSU4sIGNvbnN0YW50cy5NSUNST1BIT05FXS5pbmNsdWRlcyhsYXN0LnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBHYWluKGN0eCwgbW9kZWwsIGlkeCk7XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5jbGFzcyBNaWNyb3Bob25lIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgbW9kZWwsIGlkeCwgc3RyZWFtKSB7XG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCBjb25zdGFudHMuTUlDUk9QSE9ORSwgZmFsc2UpO1xuICAgIHRoaXMuaW5wdXQgPSBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcbiAgICB0aGlzLmdhaW4gPSBjdHguY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuaW5wdXQuY29ubmVjdCh0aGlzLmdhaW4pO1xuICB9XG5cbiAgY29ubmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdhaW47XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcInZhbFwiLFxuICAgICAgICBzaG9ydDogXCJnXCIsXG4gICAgICAgIGxhYmVsOiBcIkdhaW5cIixcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQuZ2FpblZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbW9kZWwsIGlkeCwgc3RyZWFtKSB7XG4gIHJldHVybiBuZXcgTWljcm9waG9uZShjdHgsIG1vZGVsLCBpZHgsIHN0cmVhbSk7XG59O1xuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgVFlQRVMgPSBbXCJzYXd0b290aFwiLCBcInNpbmVcIiwgXCJzcXVhcmVcIiwgXCJ0cmlhbmdsZVwiXTtcblxuY2xhc3MgT3NjaWxsYXRvciBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihjdHgsIG1vZGVsLCBpZHgpIHtcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5PU0NJTExBVE9SLCB0cnVlKTtcbiAgICB0aGlzLm9zYyA9IGN0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgdGhpcy5nYWluID0gY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLmRlbGF5ID0gY3R4LmNyZWF0ZURlbGF5KCk7XG4gICAgdGhpcy5vc2MuY29ubmVjdCh0aGlzLmdhaW4pO1xuICAgIHRoaXMuZ2Fpbi5jb25uZWN0KHRoaXMuZGVsYXkpO1xuICAgIHRoaXMub3NjLnN0YXJ0KDApO1xuXG4gICAgdGhpcy5kZWxheS5kZWxheVRpbWUuc2V0VGFyZ2V0QXRUaW1lKDAuMDAxLCAwLCAwKTtcbiAgICB0aGlzLl9jb250cm9scyA9IHRoaXMuaW5pdENvbnRyb2xzKCk7XG4gICAgdGhpcy5fY29udHJvbHNbMF0uc2V0KDEwMCk7XG4gICAgdGhpcy5fY29udHJvbHNbMl0uc2V0KDEpO1xuICAgIHRoaXMuX2NvbnRyb2xzWzRdLnNldChcInNpbmVcIik7XG5cbiAgICBjb25zb2xlLmxvZyhjdHgpO1xuICB9XG5cbiAgbGFiZWwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR4fSAke3RoaXMudHlwZX0gJHt0aGlzLm9zYy50eXBlfWA7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsYXk7XG4gIH1cblxuICBzdWJ0eXBlKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZXM6IFtdLFxuICAgICAgc2V0KHZhbCkge1xuICAgICAgICB0aGF0Lm9zYy50eXBlID0gdmFsO1xuICAgICAgfSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQub3NjLnR5cGU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZGlzY29ubmVjdE90aGVyRnJvbVBhcmFtKHRoaXMuZnJlcUNvbm5lY3RWYWx1ZSwgdGhpcy5vc2MuZnJlcXVlbmN5KTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmdhaW5Db25uZWN0VmFsdWUsIHRoaXMuZ2Fpbi5nYWluKTtcbiAgICB0aGlzLm9zYy5zdG9wKCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbHM7XG4gIH1cblxuICBpbml0Q29udHJvbHMoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcbiAgICAgICAgc2hvcnQ6IFwiZlwiLFxuICAgICAgICBsYWJlbDogXCJGcmVxXCIsXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LmZyZXFWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGF0Lm9zYy5mcmVxdWVuY3kuc2V0VGFyZ2V0QXRUaW1lKHZhbCwgMCwgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5mcmVxVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwiaW5cIixcbiAgICAgICAgc2hvcnQ6IFwiZm1cIixcbiAgICAgICAgbGFiZWw6IFwiRnJlcSBNb2RcIixcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQucmVwbGFjZU90aGVyT25QYXJhbShcbiAgICAgICAgICAgIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZSxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIHRoYXQub3NjLmZyZXF1ZW5jeSxcbiAgICAgICAgICAgIFwiZnJlcUNvbm5lY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhhdC5mcmVxQ29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcbiAgICAgICAgc2hvcnQ6IFwiZ1wiLFxuICAgICAgICBsYWJlbDogXCJHYWluXCIsXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LmdhaW5WYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGF0LmdhaW4uZ2Fpbi5zZXRUYXJnZXRBdFRpbWUodmFsLCAwLCAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LmdhaW5WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpblwiLFxuICAgICAgICBzaG9ydDogXCJnXCIsXG4gICAgICAgIGxhYmVsOiBcIkdhaW4gTW9kXCIsXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXG4gICAgICAgICAgICB0aGF0LmdhaW5Db25uZWN0VmFsdWUsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICB0aGF0LmdhaW4uZ2FpbixcbiAgICAgICAgICAgIFwiZ2FpbkNvbm5lY3RcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhhdC5nYWluQ29ubmVjdFZhbHVlID0gdmFsO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ0eXBlXCIsXG4gICAgICAgIHNob3J0OiBcInRcIixcbiAgICAgICAgbGFiZWw6IFwiVHlwZVwiLFxuICAgICAgICB2YWx1ZXM6IFRZUEVTLFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgaWYgKCFUWVBFUy5pbmNsdWRlcyh2YWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoYXQub3NjLnR5cGUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5vc2MudHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkeCkge1xuICAgIGNvbnN0IGxhc3QgPSBtb2RlbC5pdGVtc1tpZHhdO1xuICAgIGlmIChbY29uc3RhbnRzLk9TQ0lMTEFUT1IsIGNvbnN0YW50cy5NSUNST1BIT05FXS5pbmNsdWRlcyhsYXN0LnR5cGUpKSB7XG4gICAgICByZXR1cm4gbGFzdDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPc2NpbGxhdG9yKGN0eCwgbW9kZWwsIGlkeCk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpZCkge1xyXG4gIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpZCk7XHJcbiAgcmV0dXJuIG5vZGVzLmxlbmd0aCA+IDEgPyBub2RlcyA6IG5vZGVzWzBdO1xyXG59IiwiY29uc3Qgc2VsZWN0ID0gcmVxdWlyZShcIi4vc2VsZWN0XCIpO1xyXG5jb25zdCB7IEZBTExCQUNLX0RFTEFZIH0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XHJcbmNvbnN0IGNvbW1hbmRTcGxpdHRlciA9IC9eKFswLTldezF9KSAqKFthLXpBLVpdezEsMn0pICooWzAtOS5dKikkLztcclxuY29uc3QgY29tbWFuZFNwbGl0dGVyTm9JZHggPSAvXihbYS16QS1aXXsxLDJ9KSAqKFswLTkuXSopJC87XHJcbmNvbnN0IHdhaXRTcGxpdHRlciA9IC9edyAqKFswLTkuXSopKC4qKSQvO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2RlbCkge1xyXG4gIGNvbnN0IGxpbmVzRWwgPSBzZWxlY3QoXCIjc2VxdWVuY2VcIik7XHJcbiAgY29uc3QgZGVsYXkgPSBzZWxlY3QoXCIjZGVsYXlcIik7XHJcbiAgbGV0IGxpbmVOdW0gPSAwO1xyXG4gIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gIGxldCBydW5uaW5nID0gZmFsc2U7XHJcbiAgbGV0IGxhc3RJZHggPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQoaWR4LCBrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udHJvbHMgPSBtb2RlbC5pdGVtc1tpZHhdLmNvbnRyb2xzKCkgfHwgW107XHJcbiAgICBjb25zdCBjb250cm9sID0gY29udHJvbHMuZmluZCh4ID0+IHguc2hvcnQgPT09IGtleSkgfHwge307XHJcbiAgICBpZiAoY29udHJvbC50eXBlID09PSBcInZhbFwiKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICBpZiAocGFyc2VkKSB7XHJcbiAgICAgICAgY29udHJvbC5zZXQocGFyc2VkKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjb250cm9sLnR5cGUgPT09IFwiaW5cIikge1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgIGlmIChwYXJzZWQgJiYgaWR4ICE9PSBwYXJzZWQpIHtcclxuICAgICAgICBjb250cm9sLnNldChwYXJzZWQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNvbnRyb2wudHlwZSA9PT0gXCJ0eXBlXCIpIHtcclxuICAgICAgY29udHJvbC5zZXQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VEZWxheSgpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KGRlbGF5KSB8fCBGQUxMQkFDS19ERUxBWTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NMaW5lKCkge1xyXG4gICAgY29uc3QgbGluZXMgPSBsaW5lc0VsLnZhbHVlLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgaWYgKGxpbmVOdW0gPj0gbGluZXMubGVuZ3RoKSB7XHJcbiAgICAgIGxpbmVOdW0gPSAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGllY2VzID0gKGxpbmVzW2xpbmVOdW1dIHx8IFwiXCIpLnNwbGl0KFwiO1wiKTtcclxuICAgIGZvciAobGV0IHBpZWNlIG9mIHBpZWNlcykge1xyXG4gICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZFNwbGl0dGVyLmV4ZWMocGllY2UudHJpbSgpKTtcclxuICAgICAgaWYgKGNvbW1hbmQpIHtcclxuICAgICAgICBjb25zdCBbLCBpZHgsIGtleSwgdmFsdWVdID0gY29tbWFuZDtcclxuICAgICAgICBleGVjdXRlQ29tbWFuZChpZHgsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIGxhc3RJZHggPSBpZHg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY29tbWFuZDIgPSBjb21tYW5kU3BsaXR0ZXJOb0lkeC5leGVjKHBpZWNlLnRyaW0oKSk7XHJcbiAgICAgICAgaWYgKGNvbW1hbmQyKSB7XHJcbiAgICAgICAgICBjb25zdCBbLCBrZXksIHZhbHVlXSA9IGNvbW1hbmQyO1xyXG4gICAgICAgICAgZXhlY3V0ZUNvbW1hbmQobGFzdElkeCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHdhaXRDb21tYW5kID0gd2FpdFNwbGl0dGVyLmV4ZWMocGllY2UudHJpbSgpKTtcclxuICAgICAgICAgIGlmICh3YWl0Q29tbWFuZCkge1xyXG4gICAgICAgICAgICBjb25zdCBbLCBkdXJhdGlvbiwgb3B0VW5pdF0gPSB3YWl0Q29tbWFuZDtcclxuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBvcHRVbml0ID09PSBcIm1zXCJcclxuICAgICAgICAgICAgICA/IE1hdGguZmxvb3IoZHVyYXRpb24pXHJcbiAgICAgICAgICAgICAgOiBNYXRoLmZsb29yKGR1cmF0aW9uICogMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBsaW5lTnVtKys7XHJcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQocHJvY2Vzc0xpbmUsIGRlbGF5KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGxpbmVOdW0rKztcclxuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChwcm9jZXNzTGluZSwgcGFyc2VEZWxheSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2dnbGUgKCkge1xyXG4gICAgICBydW5uaW5nID0gIXJ1bm5pbmc7XHJcbiAgICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChwcm9jZXNzTGluZSwgcGFyc2VEZWxheSgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9