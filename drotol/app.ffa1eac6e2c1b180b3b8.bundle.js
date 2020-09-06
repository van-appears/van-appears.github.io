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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/drotol.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/drotol.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/icons.png */ "./src/img/icons.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", \"Helvetica\", sans-serif;\n  height: 100%;\n  width: 100%;\n  background: #efefef;\n  overflow-y: hidden;\n}\n\nbody {\n  text-align: center;\n}\n\ncanvas {\n  margin: 0;\n  border: none;\n  position: absolute;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  display: none;\n}\n\ninput[type=\"radio\"] + label,\ninput[type=\"checkbox\"] + label {\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\ninput[type=\"range\"] {\n  margin: 0;\n  padding: 0;\n  width: 220px;\n  height: 32px;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -99999px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\nlabel[for=\"oscillator1\"] {\n  background-position: 0 0;\n}\n\nlabel[for=\"oscillator2\"] {\n  background-position: -32px 0;\n}\n\nlabel[for=\"gain\"] {\n  background-position: -64px 0;\n}\n\nlabel[for=\"filterFrequency\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"filterQ\"] {\n  background-position: -128px 0;\n}\n\nlabel[for=\"echo\"] {\n  background-position: -160px 0;\n}\n\nlabel[for=\"sine\"] {\n  background-position: -192px 0;\n}\n\nlabel[for=\"sawtooth\"] {\n  background-position: -224px 0;\n}\n\nlabel[for=\"triangle\"] {\n  background-position: -256px 0;\n}\n\nlabel[for=\"square\"] {\n  background-position: -288px 0;\n}\n\nlabel[for=\"allpass\"] {\n  background-position: -320px 0;\n}\n\nlabel[for=\"highpass\"] {\n  background-position: -352px 0;\n}\n\nlabel[for=\"lowpass\"] {\n  background-position: -384px 0;\n}\n\nlabel[for=\"bandpass\"] {\n  background-position: -416px 0;\n}\n\nlabel[for=\"speed\"] {\n  background-position: -448px 0;\n}\n\nlabel[for=\"echoOnOff\"] {\n  background-position: -544px 0;\n}\n\nlabel[for=\"echoLength\"] {\n  background-position: -512px 0;\n}\n\nlabel[for=\"echoSustain\"] {\n  background-position: -512px -32px;\n}\n\nlabel[for=\"lfoOnOff\"] {\n  background-position: -480px 0px;\n}\n\ninput[type=\"radio\"]:checked + label,\ninput[type=\"checkbox\"]:checked + label {\n  background-position-y: -32px;\n}\n\n.oscillatorControls {\n  display: none;\n}\n\n.selected_oscillator1Frequency .oscillatorControls,\n.selected_oscillator2Frequency .oscillatorControls {\n  display: block;\n}\n\n.filterControls {\n  display: none;\n}\n\n.selected_filterFrequency .filterControls {\n  display: block;\n}\n\n.echoControls {\n  display: none;\n}\n\n.selected_echo .echoControls {\n  display: block;\n}\n\n.selected_echo .lineControls {\n  display: none;\n}\n\n.selected_echo canvas {\n  display: none;\n}\n\n.wrapper {\n  display: inline-block;\n  background: #ffffff;\n  width: 300px;\n  padding: 20px;\n}\n\n.model {\n  height: 34px;\n}\n\n.what {\n  margin: 10px 0;\n  height: 20px;\n}\n\n.layers {\n  position: relative;\n  text-align: left;\n  display: inline-block;\n  background: #dddddd;\n  width: 255px;\n  height: 255px;\n}\n", ""]);
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

  if (sourceMap && btoa) {
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

/***/ "./src/css/drotol.css":
/*!****************************!*\
  !*** ./src/css/drotol.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./drotol.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/drotol.css");

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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f2f2db280db38160d737444c68a4b83b.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_drotol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/drotol.js */ "./src/js/drotol.js");
/* harmony import */ var _js_drotol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_drotol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_drotol_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/drotol.css */ "./src/css/drotol.css");
/* harmony import */ var _css_drotol_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_drotol_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/AudioGraphControl.js":
/*!*************************************!*\
  !*** ./src/js/AudioGraphControl.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function updateModelPosition(block) {
  block.dataPos += block.dataSpeed;

  if (block.dataPos >= 128) {
    block.dataPos -= 128;
  }
}

function updateModelPositions(model) {
  updateModelPosition(model.oscillator1Frequency);
  updateModelPosition(model.oscillator2Frequency);
  updateModelPosition(model.gain);
  updateModelPosition(model.filterFrequency);
  updateModelPosition(model.filterQ);
}

function getScaledValue(block) {
  return (254.0 - block.data[Math.floor(block.dataPos)]) / 254.0;
}

function getFrequency(block) {
  if (block.lfoEnabled) {
    return 0.2 * Math.pow(16, getScaledValue(block));
  }

  return 60 * Math.pow(8, getScaledValue(block));
}

function AudioGraphControl(audioGraph, model) {
  this.model = model;
  this.audioGraph = audioGraph;
  this.lastOscillator1Type = audioGraph.oscillator1.type;
  this.lastOscillator2Type = audioGraph.oscillator2.type;
  this.lastFilterType = audioGraph.filter.type;
  this.lastEchoLength = audioGraph.delay.delayTime.value;
}

AudioGraphControl.prototype.start = function () {
  this.audioGraph.oscillator1.start();
  this.audioGraph.oscillator2.start();
};

AudioGraphControl.prototype.update = function () {
  if (this.model.oscillator1Frequency.type !== this.lastOscillator1Type) {
    this.lastOscillator1Type = this.model.oscillator1Frequency.type;
    this.audioGraph.oscillator1.type = this.lastOscillator1Type;
  }

  if (this.model.oscillator2Frequency.type !== this.lastOscillator2Type) {
    this.lastOscillator2Type = this.model.oscillator2Frequency.type;
    this.audioGraph.oscillator2.type = this.lastOscillator2Type;
  }

  if (this.model.filterFrequency.type !== this.lastFilterType) {
    this.lastFilterType = this.model.filterFrequency.type;
    this.audioGraph.filter.type = this.lastFilterType;
  }

  if (this.model.echo.length !== this.lastEchoLength) {
    this.lastEchoLength = this.model.echo.length;
    this.audioGraph.delay.delayTime.value = this.lastEchoLength;
  }

  updateModelPositions(this.model);
  this.audioGraph.delayGain.gain.value = this.model.echo.enabled ? this.model.echo.sustain : 0;
  const frequency1 = getFrequency(this.model.oscillator1Frequency);
  this.audioGraph.oscillator1.frequency.value = frequency1;
  const frequency2 = getFrequency(this.model.oscillator2Frequency);
  this.audioGraph.oscillator2.frequency.value = frequency2;
  const gain = getScaledValue(this.model.gain);
  this.audioGraph.oscillatorGain.gain.value = gain;
  const filterFrequency = 60 * Math.pow(100, getScaledValue(this.model.filterFrequency));
  this.audioGraph.filter.frequency.value = filterFrequency;
  const filterQ = this.model.filterQ.multiplier * getScaledValue(this.model.filterQ);
  this.audioGraph.filter.Q.value = filterQ;
};

module.exports = AudioGraphControl;

/***/ }),

/***/ "./src/js/CanvasControl.js":
/*!*********************************!*\
  !*** ./src/js/CanvasControl.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const layersRect = document.querySelector(".layers").getBoundingClientRect();
const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
context.lineWidth = 1.0;
let layersLeft = 0;
let layersTop = 0;
let lastX = 0;
let lastY = 0;
let isStarted = false;
let isDragging = false;

function renderCentreLine() {
  const bgCanvas = document.querySelector("#bg");
  const bgContext = canvas.getContext("2d");
  bgContext.beginPath();
  bgContext.strokeStyle = "#ddd";
  bgContext.lineWidth = 1.0;
  bgContext.moveTo(0, 128);
  bgContext.lineTo(255, 128);
  bgContext.stroke();
  bgContext.closePath();
}

function renderData(data) {
  context.clearRect(0, 0, 255, 255);
  context.beginPath();
  context.strokeStyle = "#999";
  let v1 = data[0];
  context.moveTo(0, v1);

  for (let i = 1; i < 128; i++) {
    const v2 = data[i];
    context.lineTo(i * 2, v2);
    v1 = v2;
  }

  context.stroke();
  context.closePath();
}

function renderPlayline(dataPos) {
  context.beginPath();
  context.strokeStyle = "#090";
  context.moveTo(dataPos * 2, 0);
  context.lineTo(dataPos * 2, 255);
  context.stroke();
  context.closePath();
}

function setRange(data, startX, startY, endX, endY) {
  const dist = (endY - startY) / (endX - startX);

  if (startX < endX) {
    for (let i = startX; i <= endX; i++) {
      data[i] = startY;
      startY += dist;
    }
  } else {
    for (let i = startX; i >= endX; i--) {
      data[i] = startY;
      startY -= dist;
    }
  }
}

function asX(evt) {
  const useEvent = evt.changedTouches ? evt.changedTouches[0] : evt;
  return Math.floor((useEvent.pageX - layersLeft) / 2);
}

function asY(evt) {
  const useEvent = evt.changedTouches ? evt.changedTouches[0] : evt;
  return useEvent.pageY - layersTop;
}

function CanvasControl(model) {
  this.model = model;
  canvas.addEventListener("mousedown", this.mouseDown.bind(this));
  canvas.addEventListener("mousemove", this.mouseMove.bind(this));
  canvas.addEventListener("mouseout", this.mouseUp.bind(this));
  canvas.addEventListener("mouseup", this.mouseUp.bind(this));
  canvas.addEventListener("touchstart", this.mouseDown.bind(this));
  canvas.addEventListener("touchmove", this.mouseMove.bind(this));
  canvas.addEventListener("touchend", this.mouseUp.bind(this));
  canvas.addEventListener("touchcancel", this.mouseUp.bind(this));
  renderCentreLine();
  const layersRect = document.querySelector(".layers").getBoundingClientRect();
  layersLeft = layersRect.left;
  layersTop = layersRect.top;
}

CanvasControl.prototype.update = function () {
  const active = this.model[this.model.active];
  this.data = active && active.data;
  this.updated = false;
  if (!this.data) return;
  renderData(this.data);
  renderPlayline(active && active.dataPos);
};

CanvasControl.prototype.mouseDown = function (mouseEvt) {
  if (!this.data) return;
  lastX = asX(mouseEvt);
  lastY = asY(mouseEvt);
  this.data[lastX] = lastY;
  isStarted = true;
};

CanvasControl.prototype.mouseUp = function (mouseEvt) {
  if (!this.data) return;
  const toX = asX(mouseEvt);
  const toY = asY(mouseEvt);

  if (isDragging) {
    setRange(this.data, lastX, lastY, toX, toY);
  } else if (isStarted) {
    this.data[toX] = toY;
  }

  isStarted = false;
  isDragging = false;
  lastX = null;
  lastY = null;
};

CanvasControl.prototype.mouseMove = function (mouseEvt) {
  if (!this.data || this.updated) {
    return;
  }

  if (isStarted) {
    const toX = asX(mouseEvt);
    const toY = asY(mouseEvt);
    setRange(this.data, lastX, lastY, toX, toY);
    this.updated = true;
    isDragging = true;
    lastX = toX;
    lastY = toY;
  }
};

module.exports = CanvasControl;

/***/ }),

/***/ "./src/js/connect-listeners.js":
/*!*************************************!*\
  !*** ./src/js/connect-listeners.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function connectListeners(model) {
  const speed = document.querySelector("#speed");
  const filterType = document.querySelector("#filterType");
  const echoEnabled = document.querySelector("#echoOnOff");
  const echoLength = document.querySelector("#echoLength");
  const echoSustain = document.querySelector("#echoSustain");
  const lfoEnabled = document.querySelector("#lfoOnOff");
  const activeControlLabel = document.querySelector(".what");
  const body = document.querySelector("body");
  let active = model[model.active];

  function setLabel(label, attr) {
    activeControlLabel.innerHTML = label;
  }

  function selectOscillatorType(type) {
    document.querySelector('input[name="oscillatorType"][value="' + type + '"]').click();
  }

  function radioClick(evt) {
    const selected = evt.target.value;
    body.className = "selected_" + selected;
    model.active = selected;
    active = model[selected];
    setLabel(active.label, active.type);
    speed.value = Math.log(active.dataSpeed) / Math.log(2);

    if (selected === "oscillator1Frequency") {
      selectOscillatorType(model.oscillator1Frequency.type);
      lfoEnabled.checked = model.oscillator1Frequency.lfoEnabled;
    } else if (selected === "oscillator2Frequency") {
      selectOscillatorType(model.oscillator2Frequency.type);
      lfoEnabled.checked = model.oscillator2Frequency.lfoEnabled;
    }
  }

  function speedChange(evt) {
    active.dataSpeed = Math.pow(2, evt.target.value);
  }

  function echoLengthChange(evt) {
    active.length = evt.target.value;
  }

  function echoSustainChange(evt) {
    active.sustain = evt.target.value;
  }

  function echoEnabledChange(evt) {
    active.enabled = evt.target.checked;
  }

  function lfoEnabledChange(evt) {
    active.lfoEnabled = evt.target.checked;
  }

  function filterTypeChange(evt) {
    const selected = evt.target.value;
    model.filterFrequency.type = selected;
    setLabel(active.label, model.filterFrequency.type);

    switch (selected) {
      case "notch":
      case "bandpass":
        model.filterQ.multiplier = 30;
        model.filterQ.label = "Filter bandwidth";
        break;

      default:
        model.filterQ.multiplier = 20;
        model.filterQ.label = "Filter resonance";
    }
  }

  function oscillatorTypeChange(evt) {
    active.type = evt.target.value;
  }

  speed.addEventListener("input", speedChange);
  echoLength.addEventListener("change", echoLengthChange);
  echoSustain.addEventListener("input", echoSustainChange);
  echoEnabled.addEventListener("change", echoEnabledChange);
  lfoEnabled.addEventListener("change", lfoEnabledChange);
  const radios = document.querySelectorAll('input[name="box"]');

  for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = radioClick;
  }

  radios[0].click();
  const filterTypeRadios = document.querySelectorAll('input[name="filterType"]');

  for (let i = 0; i < filterTypeRadios.length; i++) {
    filterTypeRadios[i].onclick = filterTypeChange;
  }

  filterTypeRadios[0].click();
  const oscillatorTypeRadios = document.querySelectorAll('input[name="oscillatorType"]');

  for (let i = 0; i < oscillatorTypeRadios.length; i++) {
    oscillatorTypeRadios[i].onclick = oscillatorTypeChange;
  }

  oscillatorTypeRadios[0].click();
};

/***/ }),

/***/ "./src/js/create-audio-graph.js":
/*!**************************************!*\
  !*** ./src/js/create-audio-graph.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const oscillator1 = audioCtx.createOscillator();
const oscillator2 = audioCtx.createOscillator();
const ringMod = audioCtx.createGain();
const oscillatorGain = audioCtx.createGain();
const filter = audioCtx.createBiquadFilter();
const delay = audioCtx.createDelay();
const delayGain = audioCtx.createGain();
oscillator1.connect(ringMod);
oscillator2.connect(ringMod.gain);
ringMod.connect(oscillatorGain);
oscillatorGain.connect(filter);
filter.connect(audioCtx.destination);
filter.connect(delay);
delay.connect(delayGain);
delayGain.connect(audioCtx.destination);
delayGain.connect(delay);

module.exports = function createAudioGraph() {
  return {
    oscillator1: oscillator1,
    oscillator2: oscillator2,
    oscillatorGain: oscillatorGain,
    filter: filter,
    delay: delay,
    delayGain: delayGain
  };
};

/***/ }),

/***/ "./src/js/create-model.js":
/*!********************************!*\
  !*** ./src/js/create-model.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function canvasFields() {
  const arr = new Array(128);

  for (let i = 0; i < 128; i++) {
    arr[i] = 128;
  }

  return {
    data: arr,
    dataPos: 0,
    dataSpeed: 0.5
  };
}

function extend(obj, additional) {
  for (let key in additional) {
    if (Object.prototype.hasOwnProperty.call(additional, key)) {
      obj[key] = additional[key];
    }
  }

  return obj;
}

module.exports = function createModel() {
  return {
    active: "oscillator1Frequency",
    oscillator1Frequency: extend({
      label: "Frequency",
      type: "triangle",
      lfo: false
    }, canvasFields()),
    oscillator2Frequency: extend({
      label: "Frequency",
      type: "triangle",
      lfo: false
    }, canvasFields()),
    gain: extend({
      label: "Gain"
    }, canvasFields()),
    filterFrequency: extend({
      label: "Filter frequency",
      type: "allpass"
    }, canvasFields()),
    filterQ: extend({
      label: "Filter resonance",
      multiplier: 1
    }, canvasFields()),
    echo: {
      label: "Echo",
      length: 0.1,
      sustain: 0.5,
      enabled: true
    }
  };
};

/***/ }),

/***/ "./src/js/drotol.js":
/*!**************************!*\
  !*** ./src/js/drotol.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createModel = __webpack_require__(/*! ./create-model */ "./src/js/create-model.js");

const createAudioGraph = __webpack_require__(/*! ./create-audio-graph */ "./src/js/create-audio-graph.js");

const AudioGraphControl = __webpack_require__(/*! ./AudioGraphControl */ "./src/js/AudioGraphControl.js");

const CanvasControl = __webpack_require__(/*! ./CanvasControl */ "./src/js/CanvasControl.js");

const connectListeners = __webpack_require__(/*! ./connect-listeners */ "./src/js/connect-listeners.js");

const initialiseValues = __webpack_require__(/*! ./initialise-values */ "./src/js/initialise-values.js");

window.onload = function () {
  const model = createModel();
  const audioGraph = createAudioGraph();
  const graphControl = new AudioGraphControl(audioGraph, model);
  const canvasControl = new CanvasControl(model);
  initialiseValues(audioGraph, model);
  connectListeners(model);
  graphControl.start();
  setInterval(function () {
    graphControl.update();
    canvasControl.update();
  }, 40);
};

/***/ }),

/***/ "./src/js/initialise-values.js":
/*!*************************************!*\
  !*** ./src/js/initialise-values.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function initialiseValues(audioGraph, model) {
  audioGraph.oscillator1.type = model.oscillator1Frequency.type;
  audioGraph.oscillator2.type = model.oscillator2Frequency.type;
  const lfoOnOff = document.querySelector("#lfoOnOff");
  lfoOnOff.checked = model.oscillator1Frequency.lfo;
  const echoEnabled = document.querySelector("#echoOnOff");
  echoEnabled.checked = model.echo.enabled;
  const echoLength = document.querySelector("#echoLength");
  echoLength.value = model.echo.length;
  audioGraph.delay.delayTime.value = model.echo.length;
  const echoSustain = document.querySelector("#echoSustain");
  echoSustain.value = model.echo.sustain;
  audioGraph.delayGain.gain.value = model.echo.sustain;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kcm90b2wuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kcm90b2wuY3NzP2EwY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BdWRpb0dyYXBoQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ2FudmFzQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29ubmVjdC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZS1hdWRpby1ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kcm90b2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luaXRpYWxpc2UtdmFsdWVzLmpzIl0sIm5hbWVzIjpbInVwZGF0ZU1vZGVsUG9zaXRpb24iLCJibG9jayIsImRhdGFQb3MiLCJkYXRhU3BlZWQiLCJ1cGRhdGVNb2RlbFBvc2l0aW9ucyIsIm1vZGVsIiwib3NjaWxsYXRvcjFGcmVxdWVuY3kiLCJvc2NpbGxhdG9yMkZyZXF1ZW5jeSIsImdhaW4iLCJmaWx0ZXJGcmVxdWVuY3kiLCJmaWx0ZXJRIiwiZ2V0U2NhbGVkVmFsdWUiLCJkYXRhIiwiTWF0aCIsImZsb29yIiwiZ2V0RnJlcXVlbmN5IiwibGZvRW5hYmxlZCIsInBvdyIsIkF1ZGlvR3JhcGhDb250cm9sIiwiYXVkaW9HcmFwaCIsImxhc3RPc2NpbGxhdG9yMVR5cGUiLCJvc2NpbGxhdG9yMSIsInR5cGUiLCJsYXN0T3NjaWxsYXRvcjJUeXBlIiwib3NjaWxsYXRvcjIiLCJsYXN0RmlsdGVyVHlwZSIsImZpbHRlciIsImxhc3RFY2hvTGVuZ3RoIiwiZGVsYXkiLCJkZWxheVRpbWUiLCJ2YWx1ZSIsInByb3RvdHlwZSIsInN0YXJ0IiwidXBkYXRlIiwiZWNobyIsImxlbmd0aCIsImRlbGF5R2FpbiIsImVuYWJsZWQiLCJzdXN0YWluIiwiZnJlcXVlbmN5MSIsImZyZXF1ZW5jeSIsImZyZXF1ZW5jeTIiLCJvc2NpbGxhdG9yR2FpbiIsIm11bHRpcGxpZXIiLCJRIiwibW9kdWxlIiwiZXhwb3J0cyIsImxheWVyc1JlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxpbmVXaWR0aCIsImxheWVyc0xlZnQiLCJsYXllcnNUb3AiLCJsYXN0WCIsImxhc3RZIiwiaXNTdGFydGVkIiwiaXNEcmFnZ2luZyIsInJlbmRlckNlbnRyZUxpbmUiLCJiZ0NhbnZhcyIsImJnQ29udGV4dCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwicmVuZGVyRGF0YSIsImNsZWFyUmVjdCIsInYxIiwiaSIsInYyIiwicmVuZGVyUGxheWxpbmUiLCJzZXRSYW5nZSIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwiZGlzdCIsImFzWCIsImV2dCIsInVzZUV2ZW50IiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsImFzWSIsInBhZ2VZIiwiQ2FudmFzQ29udHJvbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb3VzZURvd24iLCJiaW5kIiwibW91c2VNb3ZlIiwibW91c2VVcCIsImxlZnQiLCJ0b3AiLCJhY3RpdmUiLCJ1cGRhdGVkIiwibW91c2VFdnQiLCJ0b1giLCJ0b1kiLCJjb25uZWN0TGlzdGVuZXJzIiwic3BlZWQiLCJmaWx0ZXJUeXBlIiwiZWNob0VuYWJsZWQiLCJlY2hvTGVuZ3RoIiwiZWNob1N1c3RhaW4iLCJhY3RpdmVDb250cm9sTGFiZWwiLCJib2R5Iiwic2V0TGFiZWwiLCJsYWJlbCIsImF0dHIiLCJpbm5lckhUTUwiLCJzZWxlY3RPc2NpbGxhdG9yVHlwZSIsImNsaWNrIiwicmFkaW9DbGljayIsInNlbGVjdGVkIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwibG9nIiwiY2hlY2tlZCIsInNwZWVkQ2hhbmdlIiwiZWNob0xlbmd0aENoYW5nZSIsImVjaG9TdXN0YWluQ2hhbmdlIiwiZWNob0VuYWJsZWRDaGFuZ2UiLCJsZm9FbmFibGVkQ2hhbmdlIiwiZmlsdGVyVHlwZUNoYW5nZSIsIm9zY2lsbGF0b3JUeXBlQ2hhbmdlIiwicmFkaW9zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uY2xpY2siLCJmaWx0ZXJUeXBlUmFkaW9zIiwib3NjaWxsYXRvclR5cGVSYWRpb3MiLCJhdWRpb0N0eCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZU9zY2lsbGF0b3IiLCJyaW5nTW9kIiwiY3JlYXRlR2FpbiIsImNyZWF0ZUJpcXVhZEZpbHRlciIsImNyZWF0ZURlbGF5IiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiY3JlYXRlQXVkaW9HcmFwaCIsImNhbnZhc0ZpZWxkcyIsImFyciIsIkFycmF5IiwiZXh0ZW5kIiwib2JqIiwiYWRkaXRpb25hbCIsImtleSIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNyZWF0ZU1vZGVsIiwibGZvIiwicmVxdWlyZSIsImluaXRpYWxpc2VWYWx1ZXMiLCJvbmxvYWQiLCJncmFwaENvbnRyb2wiLCJjYW52YXNDb250cm9sIiwic2V0SW50ZXJ2YWwiLCJsZm9Pbk9mZiJdLCJtYXBwaW5n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SixHQUE5QztBQUVBLFFBQU1wRCxXQUFXLEdBQUd6RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBcEI7QUFDQXdELGFBQVcsQ0FBQ2dCLE9BQVosR0FBc0JwSCxLQUFLLENBQUM2QixJQUFOLENBQVdHLE9BQWpDO0FBRUEsUUFBTXFFLFVBQVUsR0FBRzFELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUNBeUQsWUFBVSxDQUFDNUUsS0FBWCxHQUFtQnpCLEtBQUssQ0FBQzZCLElBQU4sQ0FBV0MsTUFBOUI7QUFDQWhCLFlBQVUsQ0FBQ1MsS0FBWCxDQUFpQkMsU0FBakIsQ0FBMkJDLEtBQTNCLEdBQW1DekIsS0FBSyxDQUFDNkIsSUFBTixDQUFXQyxNQUE5QztBQUVBLFFBQU13RSxXQUFXLEdBQUczRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBcEI7QUFDQTBELGFBQVcsQ0FBQzdFLEtBQVosR0FBb0J6QixLQUFLLENBQUM2QixJQUFOLENBQVdJLE9BQS9CO0FBQ0FuQixZQUFVLENBQUNpQixTQUFYLENBQXFCNUIsSUFBckIsQ0FBMEJzQixLQUExQixHQUFrQ3pCLEtBQUssQ0FBQzZCLElBQU4sQ0FBV0ksT0FBN0M7QUFDRCxDQWpCRCxDIiwiZmlsZSI6ImFwcC5mZmExZWFjNmUyYzFiMTgwYjNiOC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vaW1nL2ljb25zLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSArIGxhYmVsLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbCB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcIm9zY2lsbGF0b3IxXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcIm9zY2lsbGF0b3IyXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJnYWluXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJmaWx0ZXJGcmVxdWVuY3lcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImZpbHRlclFcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJlY2hvXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwic2luZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInNhd3Rvb3RoXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwidHJpYW5nbGVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjU2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzcXVhcmVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJhbGxwYXNzXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMyMHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiaGlnaHBhc3NcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzUycHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJsb3dwYXNzXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM4NHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiYmFuZHBhc3NcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDE2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzcGVlZFxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00NDhweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImVjaG9Pbk9mZlxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01NDRweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImVjaG9MZW5ndGhcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTEycHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJlY2hvU3VzdGFpblxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01MTJweCAtMzJweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJsZm9Pbk9mZlxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00ODBweCAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTMycHg7XFxufVxcblxcbi5vc2NpbGxhdG9yQ29udHJvbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkX29zY2lsbGF0b3IxRnJlcXVlbmN5IC5vc2NpbGxhdG9yQ29udHJvbHMsXFxuLnNlbGVjdGVkX29zY2lsbGF0b3IyRnJlcXVlbmN5IC5vc2NpbGxhdG9yQ29udHJvbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5maWx0ZXJDb250cm9scyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWRfZmlsdGVyRnJlcXVlbmN5IC5maWx0ZXJDb250cm9scyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmVjaG9Db250cm9scyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWRfZWNobyAuZWNob0NvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VsZWN0ZWRfZWNobyAubGluZUNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RlZF9lY2hvIGNhbnZhcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGVsIHtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLndoYXQge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5sYXllcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQ7XFxuICB3aWR0aDogMjU1cHg7XFxuICBoZWlnaHQ6IDI1NXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3RvbC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMmYyZGIyODBkYjM4MTYwZDczNzQ0NGM2OGE0YjgzYi5wbmdcIjsiLCJpbXBvcnQgXCIuL2pzL2Ryb3RvbC5qc1wiO1xuaW1wb3J0IFwiLi9jc3MvZHJvdG9sLmNzc1wiO1xuIiwiZnVuY3Rpb24gdXBkYXRlTW9kZWxQb3NpdGlvbihibG9jaykge1xuICBibG9jay5kYXRhUG9zICs9IGJsb2NrLmRhdGFTcGVlZDtcbiAgaWYgKGJsb2NrLmRhdGFQb3MgPj0gMTI4KSB7XG4gICAgYmxvY2suZGF0YVBvcyAtPSAxMjg7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTW9kZWxQb3NpdGlvbnMobW9kZWwpIHtcbiAgdXBkYXRlTW9kZWxQb3NpdGlvbihtb2RlbC5vc2NpbGxhdG9yMUZyZXF1ZW5jeSk7XG4gIHVwZGF0ZU1vZGVsUG9zaXRpb24obW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kpO1xuICB1cGRhdGVNb2RlbFBvc2l0aW9uKG1vZGVsLmdhaW4pO1xuICB1cGRhdGVNb2RlbFBvc2l0aW9uKG1vZGVsLmZpbHRlckZyZXF1ZW5jeSk7XG4gIHVwZGF0ZU1vZGVsUG9zaXRpb24obW9kZWwuZmlsdGVyUSk7XG59XG5cbmZ1bmN0aW9uIGdldFNjYWxlZFZhbHVlKGJsb2NrKSB7XG4gIHJldHVybiAoMjU0LjAgLSBibG9jay5kYXRhW01hdGguZmxvb3IoYmxvY2suZGF0YVBvcyldKSAvIDI1NC4wO1xufVxuXG5mdW5jdGlvbiBnZXRGcmVxdWVuY3koYmxvY2spIHtcbiAgaWYgKGJsb2NrLmxmb0VuYWJsZWQpIHtcbiAgICByZXR1cm4gMC4yICogTWF0aC5wb3coMTYsIGdldFNjYWxlZFZhbHVlKGJsb2NrKSk7XG4gIH1cbiAgcmV0dXJuIDYwICogTWF0aC5wb3coOCwgZ2V0U2NhbGVkVmFsdWUoYmxvY2spKTtcbn1cblxuZnVuY3Rpb24gQXVkaW9HcmFwaENvbnRyb2woYXVkaW9HcmFwaCwgbW9kZWwpIHtcbiAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB0aGlzLmF1ZGlvR3JhcGggPSBhdWRpb0dyYXBoO1xuICB0aGlzLmxhc3RPc2NpbGxhdG9yMVR5cGUgPSBhdWRpb0dyYXBoLm9zY2lsbGF0b3IxLnR5cGU7XG4gIHRoaXMubGFzdE9zY2lsbGF0b3IyVHlwZSA9IGF1ZGlvR3JhcGgub3NjaWxsYXRvcjIudHlwZTtcbiAgdGhpcy5sYXN0RmlsdGVyVHlwZSA9IGF1ZGlvR3JhcGguZmlsdGVyLnR5cGU7XG4gIHRoaXMubGFzdEVjaG9MZW5ndGggPSBhdWRpb0dyYXBoLmRlbGF5LmRlbGF5VGltZS52YWx1ZTtcbn1cblxuQXVkaW9HcmFwaENvbnRyb2wucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjEuc3RhcnQoKTtcbiAgdGhpcy5hdWRpb0dyYXBoLm9zY2lsbGF0b3IyLnN0YXJ0KCk7XG59O1xuXG5BdWRpb0dyYXBoQ29udHJvbC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5tb2RlbC5vc2NpbGxhdG9yMUZyZXF1ZW5jeS50eXBlICE9PSB0aGlzLmxhc3RPc2NpbGxhdG9yMVR5cGUpIHtcbiAgICB0aGlzLmxhc3RPc2NpbGxhdG9yMVR5cGUgPSB0aGlzLm1vZGVsLm9zY2lsbGF0b3IxRnJlcXVlbmN5LnR5cGU7XG4gICAgdGhpcy5hdWRpb0dyYXBoLm9zY2lsbGF0b3IxLnR5cGUgPSB0aGlzLmxhc3RPc2NpbGxhdG9yMVR5cGU7XG4gIH1cbiAgaWYgKHRoaXMubW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kudHlwZSAhPT0gdGhpcy5sYXN0T3NjaWxsYXRvcjJUeXBlKSB7XG4gICAgdGhpcy5sYXN0T3NjaWxsYXRvcjJUeXBlID0gdGhpcy5tb2RlbC5vc2NpbGxhdG9yMkZyZXF1ZW5jeS50eXBlO1xuICAgIHRoaXMuYXVkaW9HcmFwaC5vc2NpbGxhdG9yMi50eXBlID0gdGhpcy5sYXN0T3NjaWxsYXRvcjJUeXBlO1xuICB9XG4gIGlmICh0aGlzLm1vZGVsLmZpbHRlckZyZXF1ZW5jeS50eXBlICE9PSB0aGlzLmxhc3RGaWx0ZXJUeXBlKSB7XG4gICAgdGhpcy5sYXN0RmlsdGVyVHlwZSA9IHRoaXMubW9kZWwuZmlsdGVyRnJlcXVlbmN5LnR5cGU7XG4gICAgdGhpcy5hdWRpb0dyYXBoLmZpbHRlci50eXBlID0gdGhpcy5sYXN0RmlsdGVyVHlwZTtcbiAgfVxuICBpZiAodGhpcy5tb2RlbC5lY2hvLmxlbmd0aCAhPT0gdGhpcy5sYXN0RWNob0xlbmd0aCkge1xuICAgIHRoaXMubGFzdEVjaG9MZW5ndGggPSB0aGlzLm1vZGVsLmVjaG8ubGVuZ3RoO1xuICAgIHRoaXMuYXVkaW9HcmFwaC5kZWxheS5kZWxheVRpbWUudmFsdWUgPSB0aGlzLmxhc3RFY2hvTGVuZ3RoO1xuICB9XG5cbiAgdXBkYXRlTW9kZWxQb3NpdGlvbnModGhpcy5tb2RlbCk7XG4gIHRoaXMuYXVkaW9HcmFwaC5kZWxheUdhaW4uZ2Fpbi52YWx1ZSA9IHRoaXMubW9kZWwuZWNoby5lbmFibGVkXG4gICAgPyB0aGlzLm1vZGVsLmVjaG8uc3VzdGFpblxuICAgIDogMDtcblxuICBjb25zdCBmcmVxdWVuY3kxID0gZ2V0RnJlcXVlbmN5KHRoaXMubW9kZWwub3NjaWxsYXRvcjFGcmVxdWVuY3kpO1xuICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjEuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5MTtcblxuICBjb25zdCBmcmVxdWVuY3kyID0gZ2V0RnJlcXVlbmN5KHRoaXMubW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kpO1xuICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjIuZnJlcXVlbmN5LnZhbHVlID0gZnJlcXVlbmN5MjtcblxuICBjb25zdCBnYWluID0gZ2V0U2NhbGVkVmFsdWUodGhpcy5tb2RlbC5nYWluKTtcbiAgdGhpcy5hdWRpb0dyYXBoLm9zY2lsbGF0b3JHYWluLmdhaW4udmFsdWUgPSBnYWluO1xuXG4gIGNvbnN0IGZpbHRlckZyZXF1ZW5jeSA9XG4gICAgNjAgKiBNYXRoLnBvdygxMDAsIGdldFNjYWxlZFZhbHVlKHRoaXMubW9kZWwuZmlsdGVyRnJlcXVlbmN5KSk7XG4gIHRoaXMuYXVkaW9HcmFwaC5maWx0ZXIuZnJlcXVlbmN5LnZhbHVlID0gZmlsdGVyRnJlcXVlbmN5O1xuXG4gIGNvbnN0IGZpbHRlclEgPVxuICAgIHRoaXMubW9kZWwuZmlsdGVyUS5tdWx0aXBsaWVyICogZ2V0U2NhbGVkVmFsdWUodGhpcy5tb2RlbC5maWx0ZXJRKTtcbiAgdGhpcy5hdWRpb0dyYXBoLmZpbHRlci5RLnZhbHVlID0gZmlsdGVyUTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXVkaW9HcmFwaENvbnRyb2w7XG4iLCJjb25zdCBsYXllcnNSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllcnNcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RyYXdcIik7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnRleHQubGluZVdpZHRoID0gMS4wO1xuXG5sZXQgbGF5ZXJzTGVmdCA9IDA7XG5sZXQgbGF5ZXJzVG9wID0gMDtcbmxldCBsYXN0WCA9IDA7XG5sZXQgbGFzdFkgPSAwO1xubGV0IGlzU3RhcnRlZCA9IGZhbHNlO1xubGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gcmVuZGVyQ2VudHJlTGluZSgpIHtcbiAgY29uc3QgYmdDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnXCIpO1xuICBjb25zdCBiZ0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBiZ0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGJnQ29udGV4dC5zdHJva2VTdHlsZSA9IFwiI2RkZFwiO1xuICBiZ0NvbnRleHQubGluZVdpZHRoID0gMS4wO1xuICBiZ0NvbnRleHQubW92ZVRvKDAsIDEyOCk7XG4gIGJnQ29udGV4dC5saW5lVG8oMjU1LCAxMjgpO1xuICBiZ0NvbnRleHQuc3Ryb2tlKCk7XG4gIGJnQ29udGV4dC5jbG9zZVBhdGgoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGF0YShkYXRhKSB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDI1NSwgMjU1KTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzk5OVwiO1xuICBsZXQgdjEgPSBkYXRhWzBdO1xuICBjb250ZXh0Lm1vdmVUbygwLCB2MSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjb25zdCB2MiA9IGRhdGFbaV07XG4gICAgY29udGV4dC5saW5lVG8oaSAqIDIsIHYyKTtcbiAgICB2MSA9IHYyO1xuICB9XG4gIGNvbnRleHQuc3Ryb2tlKCk7XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXlsaW5lKGRhdGFQb3MpIHtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzA5MFwiO1xuICBjb250ZXh0Lm1vdmVUbyhkYXRhUG9zICogMiwgMCk7XG4gIGNvbnRleHQubGluZVRvKGRhdGFQb3MgKiAyLCAyNTUpO1xuICBjb250ZXh0LnN0cm9rZSgpO1xuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xufVxuXG5mdW5jdGlvbiBzZXRSYW5nZShkYXRhLCBzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuICBjb25zdCBkaXN0ID0gKGVuZFkgLSBzdGFydFkpIC8gKGVuZFggLSBzdGFydFgpO1xuICBpZiAoc3RhcnRYIDwgZW5kWCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPD0gZW5kWDsgaSsrKSB7XG4gICAgICBkYXRhW2ldID0gc3RhcnRZO1xuICAgICAgc3RhcnRZICs9IGRpc3Q7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPj0gZW5kWDsgaS0tKSB7XG4gICAgICBkYXRhW2ldID0gc3RhcnRZO1xuICAgICAgc3RhcnRZIC09IGRpc3Q7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzWChldnQpIHtcbiAgY29uc3QgdXNlRXZlbnQgPSBldnQuY2hhbmdlZFRvdWNoZXMgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldnQ7XG4gIHJldHVybiBNYXRoLmZsb29yKCh1c2VFdmVudC5wYWdlWCAtIGxheWVyc0xlZnQpIC8gMik7XG59XG5cbmZ1bmN0aW9uIGFzWShldnQpIHtcbiAgY29uc3QgdXNlRXZlbnQgPSBldnQuY2hhbmdlZFRvdWNoZXMgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldnQ7XG4gIHJldHVybiB1c2VFdmVudC5wYWdlWSAtIGxheWVyc1RvcDtcbn1cblxuZnVuY3Rpb24gQ2FudmFzQ29udHJvbChtb2RlbCkge1xuICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgcmVuZGVyQ2VudHJlTGluZSgpO1xuXG4gIGNvbnN0IGxheWVyc1JlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyc1wiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGF5ZXJzTGVmdCA9IGxheWVyc1JlY3QubGVmdDtcbiAgbGF5ZXJzVG9wID0gbGF5ZXJzUmVjdC50b3A7XG59XG5cbkNhbnZhc0NvbnRyb2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWN0aXZlID0gdGhpcy5tb2RlbFt0aGlzLm1vZGVsLmFjdGl2ZV07XG4gIHRoaXMuZGF0YSA9IGFjdGl2ZSAmJiBhY3RpdmUuZGF0YTtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIGlmICghdGhpcy5kYXRhKSByZXR1cm47XG4gIHJlbmRlckRhdGEodGhpcy5kYXRhKTtcbiAgcmVuZGVyUGxheWxpbmUoYWN0aXZlICYmIGFjdGl2ZS5kYXRhUG9zKTtcbn07XG5cbkNhbnZhc0NvbnRyb2wucHJvdG90eXBlLm1vdXNlRG93biA9IGZ1bmN0aW9uIChtb3VzZUV2dCkge1xuICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuO1xuICBsYXN0WCA9IGFzWChtb3VzZUV2dCk7XG4gIGxhc3RZID0gYXNZKG1vdXNlRXZ0KTtcbiAgdGhpcy5kYXRhW2xhc3RYXSA9IGxhc3RZO1xuICBpc1N0YXJ0ZWQgPSB0cnVlO1xufTtcblxuQ2FudmFzQ29udHJvbC5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uIChtb3VzZUV2dCkge1xuICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuO1xuICBjb25zdCB0b1ggPSBhc1gobW91c2VFdnQpO1xuICBjb25zdCB0b1kgPSBhc1kobW91c2VFdnQpO1xuICBpZiAoaXNEcmFnZ2luZykge1xuICAgIHNldFJhbmdlKHRoaXMuZGF0YSwgbGFzdFgsIGxhc3RZLCB0b1gsIHRvWSk7XG4gIH0gZWxzZSBpZiAoaXNTdGFydGVkKSB7XG4gICAgdGhpcy5kYXRhW3RvWF0gPSB0b1k7XG4gIH1cbiAgaXNTdGFydGVkID0gZmFsc2U7XG4gIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgbGFzdFggPSBudWxsO1xuICBsYXN0WSA9IG51bGw7XG59O1xuXG5DYW52YXNDb250cm9sLnByb3RvdHlwZS5tb3VzZU1vdmUgPSBmdW5jdGlvbiAobW91c2VFdnQpIHtcbiAgaWYgKCF0aGlzLmRhdGEgfHwgdGhpcy51cGRhdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpc1N0YXJ0ZWQpIHtcbiAgICBjb25zdCB0b1ggPSBhc1gobW91c2VFdnQpO1xuICAgIGNvbnN0IHRvWSA9IGFzWShtb3VzZUV2dCk7XG4gICAgc2V0UmFuZ2UodGhpcy5kYXRhLCBsYXN0WCwgbGFzdFksIHRvWCwgdG9ZKTtcbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgIGxhc3RYID0gdG9YO1xuICAgIGxhc3RZID0gdG9ZO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0NvbnRyb2w7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbm5lY3RMaXN0ZW5lcnMobW9kZWwpIHtcbiAgY29uc3Qgc3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwZWVkXCIpO1xuICBjb25zdCBmaWx0ZXJUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWx0ZXJUeXBlXCIpO1xuICBjb25zdCBlY2hvRW5hYmxlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWNob09uT2ZmXCIpO1xuICBjb25zdCBlY2hvTGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlY2hvTGVuZ3RoXCIpO1xuICBjb25zdCBlY2hvU3VzdGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWNob1N1c3RhaW5cIik7XG4gIGNvbnN0IGxmb0VuYWJsZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xmb09uT2ZmXCIpO1xuICBjb25zdCBhY3RpdmVDb250cm9sTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoYXRcIik7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IGFjdGl2ZSA9IG1vZGVsW21vZGVsLmFjdGl2ZV07XG5cbiAgZnVuY3Rpb24gc2V0TGFiZWwobGFiZWwsIGF0dHIpIHtcbiAgICBhY3RpdmVDb250cm9sTGFiZWwuaW5uZXJIVE1MID0gbGFiZWw7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RPc2NpbGxhdG9yVHlwZSh0eXBlKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwib3NjaWxsYXRvclR5cGVcIl1bdmFsdWU9XCInICsgdHlwZSArICdcIl0nKVxuICAgICAgLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiByYWRpb0NsaWNrKGV2dCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICBib2R5LmNsYXNzTmFtZSA9IFwic2VsZWN0ZWRfXCIgKyBzZWxlY3RlZDtcbiAgICBtb2RlbC5hY3RpdmUgPSBzZWxlY3RlZDtcbiAgICBhY3RpdmUgPSBtb2RlbFtzZWxlY3RlZF07XG5cbiAgICBzZXRMYWJlbChhY3RpdmUubGFiZWwsIGFjdGl2ZS50eXBlKTtcbiAgICBzcGVlZC52YWx1ZSA9IE1hdGgubG9nKGFjdGl2ZS5kYXRhU3BlZWQpIC8gTWF0aC5sb2coMik7XG4gICAgaWYgKHNlbGVjdGVkID09PSBcIm9zY2lsbGF0b3IxRnJlcXVlbmN5XCIpIHtcbiAgICAgIHNlbGVjdE9zY2lsbGF0b3JUeXBlKG1vZGVsLm9zY2lsbGF0b3IxRnJlcXVlbmN5LnR5cGUpO1xuICAgICAgbGZvRW5hYmxlZC5jaGVja2VkID0gbW9kZWwub3NjaWxsYXRvcjFGcmVxdWVuY3kubGZvRW5hYmxlZDtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBcIm9zY2lsbGF0b3IyRnJlcXVlbmN5XCIpIHtcbiAgICAgIHNlbGVjdE9zY2lsbGF0b3JUeXBlKG1vZGVsLm9zY2lsbGF0b3IyRnJlcXVlbmN5LnR5cGUpO1xuICAgICAgbGZvRW5hYmxlZC5jaGVja2VkID0gbW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kubGZvRW5hYmxlZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzcGVlZENoYW5nZShldnQpIHtcbiAgICBhY3RpdmUuZGF0YVNwZWVkID0gTWF0aC5wb3coMiwgZXZ0LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlY2hvTGVuZ3RoQ2hhbmdlKGV2dCkge1xuICAgIGFjdGl2ZS5sZW5ndGggPSBldnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZWNob1N1c3RhaW5DaGFuZ2UoZXZ0KSB7XG4gICAgYWN0aXZlLnN1c3RhaW4gPSBldnQudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZWNob0VuYWJsZWRDaGFuZ2UoZXZ0KSB7XG4gICAgYWN0aXZlLmVuYWJsZWQgPSBldnQudGFyZ2V0LmNoZWNrZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZm9FbmFibGVkQ2hhbmdlKGV2dCkge1xuICAgIGFjdGl2ZS5sZm9FbmFibGVkID0gZXZ0LnRhcmdldC5jaGVja2VkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyVHlwZUNoYW5nZShldnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgbW9kZWwuZmlsdGVyRnJlcXVlbmN5LnR5cGUgPSBzZWxlY3RlZDtcbiAgICBzZXRMYWJlbChhY3RpdmUubGFiZWwsIG1vZGVsLmZpbHRlckZyZXF1ZW5jeS50eXBlKTtcblxuICAgIHN3aXRjaCAoc2VsZWN0ZWQpIHtcbiAgICAgIGNhc2UgXCJub3RjaFwiOlxuICAgICAgY2FzZSBcImJhbmRwYXNzXCI6XG4gICAgICAgIG1vZGVsLmZpbHRlclEubXVsdGlwbGllciA9IDMwO1xuICAgICAgICBtb2RlbC5maWx0ZXJRLmxhYmVsID0gXCJGaWx0ZXIgYmFuZHdpZHRoXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbW9kZWwuZmlsdGVyUS5tdWx0aXBsaWVyID0gMjA7XG4gICAgICAgIG1vZGVsLmZpbHRlclEubGFiZWwgPSBcIkZpbHRlciByZXNvbmFuY2VcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvc2NpbGxhdG9yVHlwZUNoYW5nZShldnQpIHtcbiAgICBhY3RpdmUudHlwZSA9IGV2dC50YXJnZXQudmFsdWU7XG4gIH1cblxuICBzcGVlZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgc3BlZWRDaGFuZ2UpO1xuICBlY2hvTGVuZ3RoLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZWNob0xlbmd0aENoYW5nZSk7XG4gIGVjaG9TdXN0YWluLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlY2hvU3VzdGFpbkNoYW5nZSk7XG4gIGVjaG9FbmFibGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZWNob0VuYWJsZWRDaGFuZ2UpO1xuICBsZm9FbmFibGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgbGZvRW5hYmxlZENoYW5nZSk7XG5cbiAgY29uc3QgcmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cImJveFwiXScpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgIHJhZGlvc1tpXS5vbmNsaWNrID0gcmFkaW9DbGljaztcbiAgfVxuICByYWRpb3NbMF0uY2xpY2soKTtcblxuICBjb25zdCBmaWx0ZXJUeXBlUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnaW5wdXRbbmFtZT1cImZpbHRlclR5cGVcIl0nXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyVHlwZVJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgIGZpbHRlclR5cGVSYWRpb3NbaV0ub25jbGljayA9IGZpbHRlclR5cGVDaGFuZ2U7XG4gIH1cbiAgZmlsdGVyVHlwZVJhZGlvc1swXS5jbGljaygpO1xuXG4gIGNvbnN0IG9zY2lsbGF0b3JUeXBlUmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnaW5wdXRbbmFtZT1cIm9zY2lsbGF0b3JUeXBlXCJdJ1xuICApO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG9zY2lsbGF0b3JUeXBlUmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgb3NjaWxsYXRvclR5cGVSYWRpb3NbaV0ub25jbGljayA9IG9zY2lsbGF0b3JUeXBlQ2hhbmdlO1xuICB9XG4gIG9zY2lsbGF0b3JUeXBlUmFkaW9zWzBdLmNsaWNrKCk7XG59O1xuIiwiY29uc3QgYXVkaW9DdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcblxuY29uc3Qgb3NjaWxsYXRvcjEgPSBhdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5jb25zdCBvc2NpbGxhdG9yMiA9IGF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbmNvbnN0IHJpbmdNb2QgPSBhdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5jb25zdCBvc2NpbGxhdG9yR2FpbiA9IGF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcbmNvbnN0IGZpbHRlciA9IGF1ZGlvQ3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuY29uc3QgZGVsYXkgPSBhdWRpb0N0eC5jcmVhdGVEZWxheSgpO1xuY29uc3QgZGVsYXlHYWluID0gYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuXG5vc2NpbGxhdG9yMS5jb25uZWN0KHJpbmdNb2QpO1xub3NjaWxsYXRvcjIuY29ubmVjdChyaW5nTW9kLmdhaW4pO1xucmluZ01vZC5jb25uZWN0KG9zY2lsbGF0b3JHYWluKTtcbm9zY2lsbGF0b3JHYWluLmNvbm5lY3QoZmlsdGVyKTtcbmZpbHRlci5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbmZpbHRlci5jb25uZWN0KGRlbGF5KTtcbmRlbGF5LmNvbm5lY3QoZGVsYXlHYWluKTtcbmRlbGF5R2Fpbi5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcbmRlbGF5R2Fpbi5jb25uZWN0KGRlbGF5KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVBdWRpb0dyYXBoKCkge1xuICByZXR1cm4ge1xuICAgIG9zY2lsbGF0b3IxOiBvc2NpbGxhdG9yMSxcbiAgICBvc2NpbGxhdG9yMjogb3NjaWxsYXRvcjIsXG4gICAgb3NjaWxsYXRvckdhaW46IG9zY2lsbGF0b3JHYWluLFxuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIGRlbGF5OiBkZWxheSxcbiAgICBkZWxheUdhaW46IGRlbGF5R2FpbixcbiAgfTtcbn07XG4iLCJmdW5jdGlvbiBjYW52YXNGaWVsZHMoKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheSgxMjgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgYXJyW2ldID0gMTI4O1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YTogYXJyLFxuICAgIGRhdGFQb3M6IDAsXG4gICAgZGF0YVNwZWVkOiAwLjUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmosIGFkZGl0aW9uYWwpIHtcbiAgZm9yIChsZXQga2V5IGluIGFkZGl0aW9uYWwpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFkZGl0aW9uYWwsIGtleSkpIHtcbiAgICAgIG9ialtrZXldID0gYWRkaXRpb25hbFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKCkge1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogXCJvc2NpbGxhdG9yMUZyZXF1ZW5jeVwiLFxuICAgIG9zY2lsbGF0b3IxRnJlcXVlbmN5OiBleHRlbmQoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkZyZXF1ZW5jeVwiLFxuICAgICAgICB0eXBlOiBcInRyaWFuZ2xlXCIsXG4gICAgICAgIGxmbzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgY2FudmFzRmllbGRzKClcbiAgICApLFxuICAgIG9zY2lsbGF0b3IyRnJlcXVlbmN5OiBleHRlbmQoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkZyZXF1ZW5jeVwiLFxuICAgICAgICB0eXBlOiBcInRyaWFuZ2xlXCIsXG4gICAgICAgIGxmbzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgY2FudmFzRmllbGRzKClcbiAgICApLFxuICAgIGdhaW46IGV4dGVuZChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiR2FpblwiLFxuICAgICAgfSxcbiAgICAgIGNhbnZhc0ZpZWxkcygpXG4gICAgKSxcbiAgICBmaWx0ZXJGcmVxdWVuY3k6IGV4dGVuZChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRmlsdGVyIGZyZXF1ZW5jeVwiLFxuICAgICAgICB0eXBlOiBcImFsbHBhc3NcIixcbiAgICAgIH0sXG4gICAgICBjYW52YXNGaWVsZHMoKVxuICAgICksXG4gICAgZmlsdGVyUTogZXh0ZW5kKFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJGaWx0ZXIgcmVzb25hbmNlXCIsXG4gICAgICAgIG11bHRpcGxpZXI6IDEsXG4gICAgICB9LFxuICAgICAgY2FudmFzRmllbGRzKClcbiAgICApLFxuICAgIGVjaG86IHtcbiAgICAgIGxhYmVsOiBcIkVjaG9cIixcbiAgICAgIGxlbmd0aDogMC4xLFxuICAgICAgc3VzdGFpbjogMC41LFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xufTtcbiIsImNvbnN0IGNyZWF0ZU1vZGVsID0gcmVxdWlyZShcIi4vY3JlYXRlLW1vZGVsXCIpO1xuY29uc3QgY3JlYXRlQXVkaW9HcmFwaCA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1hdWRpby1ncmFwaFwiKTtcbmNvbnN0IEF1ZGlvR3JhcGhDb250cm9sID0gcmVxdWlyZShcIi4vQXVkaW9HcmFwaENvbnRyb2xcIik7XG5jb25zdCBDYW52YXNDb250cm9sID0gcmVxdWlyZShcIi4vQ2FudmFzQ29udHJvbFwiKTtcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSByZXF1aXJlKFwiLi9jb25uZWN0LWxpc3RlbmVyc1wiKTtcbmNvbnN0IGluaXRpYWxpc2VWYWx1ZXMgPSByZXF1aXJlKFwiLi9pbml0aWFsaXNlLXZhbHVlc1wiKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbW9kZWwgPSBjcmVhdGVNb2RlbCgpO1xuICBjb25zdCBhdWRpb0dyYXBoID0gY3JlYXRlQXVkaW9HcmFwaCgpO1xuICBjb25zdCBncmFwaENvbnRyb2wgPSBuZXcgQXVkaW9HcmFwaENvbnRyb2woYXVkaW9HcmFwaCwgbW9kZWwpO1xuICBjb25zdCBjYW52YXNDb250cm9sID0gbmV3IENhbnZhc0NvbnRyb2wobW9kZWwpO1xuICBpbml0aWFsaXNlVmFsdWVzKGF1ZGlvR3JhcGgsIG1vZGVsKTtcbiAgY29ubmVjdExpc3RlbmVycyhtb2RlbCk7XG4gIGdyYXBoQ29udHJvbC5zdGFydCgpO1xuXG4gIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBncmFwaENvbnRyb2wudXBkYXRlKCk7XG4gICAgY2FudmFzQ29udHJvbC51cGRhdGUoKTtcbiAgfSwgNDApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5pdGlhbGlzZVZhbHVlcyhhdWRpb0dyYXBoLCBtb2RlbCkge1xuICBhdWRpb0dyYXBoLm9zY2lsbGF0b3IxLnR5cGUgPSBtb2RlbC5vc2NpbGxhdG9yMUZyZXF1ZW5jeS50eXBlO1xuICBhdWRpb0dyYXBoLm9zY2lsbGF0b3IyLnR5cGUgPSBtb2RlbC5vc2NpbGxhdG9yMkZyZXF1ZW5jeS50eXBlO1xuXG4gIGNvbnN0IGxmb09uT2ZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZm9Pbk9mZlwiKTtcbiAgbGZvT25PZmYuY2hlY2tlZCA9IG1vZGVsLm9zY2lsbGF0b3IxRnJlcXVlbmN5LmxmbztcblxuICBjb25zdCBlY2hvRW5hYmxlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWNob09uT2ZmXCIpO1xuICBlY2hvRW5hYmxlZC5jaGVja2VkID0gbW9kZWwuZWNoby5lbmFibGVkO1xuXG4gIGNvbnN0IGVjaG9MZW5ndGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VjaG9MZW5ndGhcIik7XG4gIGVjaG9MZW5ndGgudmFsdWUgPSBtb2RlbC5lY2hvLmxlbmd0aDtcbiAgYXVkaW9HcmFwaC5kZWxheS5kZWxheVRpbWUudmFsdWUgPSBtb2RlbC5lY2hvLmxlbmd0aDtcblxuICBjb25zdCBlY2hvU3VzdGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWNob1N1c3RhaW5cIik7XG4gIGVjaG9TdXN0YWluLnZhbHVlID0gbW9kZWwuZWNoby5zdXN0YWluO1xuICBhdWRpb0dyYXBoLmRlbGF5R2Fpbi5nYWluLnZhbHVlID0gbW9kZWwuZWNoby5zdXN0YWluO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=