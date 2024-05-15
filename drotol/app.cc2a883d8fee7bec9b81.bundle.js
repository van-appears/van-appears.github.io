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
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", \"Helvetica\", sans-serif;\n  height: 100%;\n  width: 100%;\n  background: #ddd;\n  overflow-y: hidden;\n}\n\nbody {\n  text-align: center;\n}\n\ncanvas {\n  margin: 0;\n  border: none;\n  position: absolute;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  display: none;\n}\n\ninput[type=\"radio\"] + label,\ninput[type=\"checkbox\"] + label {\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\ninput[type=\"range\"] {\n  margin: 0;\n  padding: 0;\n  width: 220px;\n  height: 32px;\n}\n\nlabel,\na.home,\na.sourceCode {\n  display: inline-block;\n  cursor: pointer;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -99999px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\nlabel[for=\"oscillator1\"] {\n  background-position: 0 0;\n}\n\nlabel[for=\"oscillator2\"] {\n  background-position: -32px 0;\n}\n\nlabel[for=\"gain\"] {\n  background-position: -64px 0;\n}\n\nlabel[for=\"filterFrequency\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"filterQ\"] {\n  background-position: -128px 0;\n}\n\nlabel[for=\"echo\"] {\n  background-position: -160px 0;\n}\n\nlabel[for=\"sine\"] {\n  background-position: -192px 0;\n}\n\nlabel[for=\"sawtooth\"] {\n  background-position: -224px 0;\n}\n\nlabel[for=\"triangle\"] {\n  background-position: -256px 0;\n}\n\nlabel[for=\"square\"] {\n  background-position: -288px 0;\n}\n\nlabel[for=\"allpass\"] {\n  background-position: -320px 0;\n}\n\nlabel[for=\"highpass\"] {\n  background-position: -352px 0;\n}\n\nlabel[for=\"lowpass\"] {\n  background-position: -384px 0;\n}\n\nlabel[for=\"bandpass\"] {\n  background-position: -416px 0;\n}\n\nlabel[for=\"speed\"] {\n  background-position: -448px 0;\n}\n\nlabel[for=\"echoOnOff\"] {\n  background-position: -544px 0;\n}\n\nlabel[for=\"echoLength\"] {\n  background-position: -512px 0;\n}\n\nlabel[for=\"echoSustain\"] {\n  background-position: -512px -32px;\n}\n\nlabel[for=\"lfoOnOff\"] {\n  background-position: -480px 0px;\n}\n\ninput[type=\"radio\"]:checked + label,\ninput[type=\"checkbox\"]:checked + label {\n  background-position-y: -32px;\n}\n\n.oscillatorControls {\n  display: none;\n}\n\n.selected_oscillator1Frequency .oscillatorControls,\n.selected_oscillator2Frequency .oscillatorControls {\n  display: block;\n}\n\n.filterControls {\n  display: none;\n}\n\n.selected_filterFrequency .filterControls {\n  display: block;\n}\n\n.echoControls {\n  display: none;\n}\n\n.selected_echo .echoControls {\n  display: block;\n}\n\n.selected_echo .lineControls {\n  display: none;\n}\n\n.selected_echo canvas {\n  display: none;\n}\n\n.wrapper {\n  display: inline-block;\n  background: #ffffff;\n  width: 300px;\n  padding: 20px;\n}\n\n.model {\n  height: 34px;\n}\n\n.what {\n  margin: 10px 0;\n  height: 20px;\n}\n\n.layers {\n  position: relative;\n  text-align: left;\n  display: inline-block;\n  background: #dddddd;\n  width: 255px;\n  height: 255px;\n}\n\na.home {\n  background-position: -576px -32px;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n\na.sourceCode {\n  background-position: -576px 0;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n", ""]);
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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8396dff4f59d12df65a0882f89be9cce.png");

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
  return this.audioGraph.audioCtx.resume().then(() => {
    this.audioGraph.oscillator1.start(0);
    this.audioGraph.oscillator2.start(0);
  });
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
    this.audioGraph.delay.delayTime.setTargetAtTime(this.lastEchoLength, 0, 0);
  }
  updateModelPositions(this.model);
  this.audioGraph.delayGain.gain.setTargetAtTime(this.model.echo.enabled ? this.model.echo.sustain : 0, 0, 0);
  const frequency1 = getFrequency(this.model.oscillator1Frequency);
  this.audioGraph.oscillator1.frequency.setTargetAtTime(frequency1, 0, 0);
  const frequency2 = getFrequency(this.model.oscillator2Frequency);
  this.audioGraph.oscillator2.frequency.setTargetAtTime(frequency2, 0, 0);
  const gain = getScaledValue(this.model.gain);
  this.audioGraph.oscillatorGain.gain.setTargetAtTime(gain, 0, 0);
  const filterFrequency = 60 * Math.pow(100, getScaledValue(this.model.filterFrequency));
  this.audioGraph.filter.frequency.setTargetAtTime(filterFrequency, 0, 0);
  const filterQ = this.model.filterQ.multiplier * getScaledValue(this.model.filterQ);
  this.audioGraph.filter.Q.setTargetAtTime(filterQ, 0, 0);
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
  if (!this.started) {
    bgContext.font = "16px sans-serif";
    bgContext.fillText("click to start", 85, 120);
  }
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
function CanvasControl(model, startedCallback) {
  this.model = model;
  this.startedCallback = startedCallback;
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
  if (!this.model.started) {
    this.startedCallback();
  }
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
        model.filterQ.multiplier = 30; // should be small
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
    audioCtx: audioCtx,
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
    started: false,
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
  const canvasControl = new CanvasControl(model, () => {
    graphControl.start().then(() => {
      setInterval(function () {
        graphControl.update();
        canvasControl.update();
      }, 40);
    });
  });
  initialiseValues(audioGraph, model);
  connectListeners(model);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kcm90b2wuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kcm90b2wuY3NzP2EwY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BdWRpb0dyYXBoQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ2FudmFzQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29ubmVjdC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZS1hdWRpby1ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9kcm90b2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luaXRpYWxpc2UtdmFsdWVzLmpzIl0sIm5hbWVzIjpbInVwZGF0ZU1vZGVsUG9zaXRpb24iLCJibG9jayIsImRhdGFQb3MiLCJkYXRhU3BlZWQiLCJ1cGRhdGVNb2RlbFBvc2l0aW9ucyIsIm1vZGVsIiwib3NjaWxsYXRvcjFGcmVxdWVuY3kiLCJvc2NpbGxhdG9yMkZyZXF1ZW5jeSIsImdhaW4iLCJmaWx0ZXJGcmVxdWVuY3kiLCJmaWx0ZXJRIiwiZ2V0U2NhbGVkVmFsdWUiLCJkYXRhIiwiTWF0aCIsImZsb29yIiwiZ2V0RnJlcXVlbmN5IiwibGZvRW5hYmxlZCIsInBvdyIsIkF1ZGlvR3JhcGhDb250cm9sIiwiYXVkaW9HcmFwaCIsImxhc3RPc2NpbGxhdG9yMVR5cGUiLCJvc2NpbGxhdG9yMSIsInR5cGUiLCJsYXN0T3NjaWxsYXRvcjJUeXBlIiwib3NjaWxsYXRvcjIiLCJsYXN0RmlsdGVyVHlwZSIsImZpbHRlciIsImxhc3RFY2hvTGVuZ3RoIiwiZGVsYXkiLCJkZWxheVRpbWUiLCJ2YWx1ZSIsInByb3RvdHlwZSIsInN0YXJ0IiwiYXVkaW9DdHgiLCJyZXN1bWUiLCJ0aGVuIiwidXBkYXRlIiwiZWNobyIsImxlbmd0aCIsInNldFRhcmdldEF0VGltZSIsImRlbGF5R2FpbiIsImVuYWJsZWQiLCJzdXN0YWluIiwiZnJlcXVlbmN5MSIsImZyZXF1ZW5jeSIsImZyZXF1ZW5jeTIiLCJvc2NpbGxhdG9yR2FpbiIsIm11bHRpcGxpZXIiLCJRIiwibW9kdWxlIiwiZXhwb3J0cyIsImxheWVyc1JlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxpbmVXaWR0aCIsImxheWVyc0xlZnQiLCJsYXllcnNUb3AiLCJsYXN0WCIsImxhc3RZIiwiaXNTdGFydGVkIiwiaXNEcmFnZ2luZyIsInJlbmRlckNlbnRyZUxpbmUiLCJiZ0NhbnZhcyIsImJnQ29udGV4dCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwic3RhcnRlZCIsImZvbnQiLCJmaWxsVGV4dCIsInJlbmRlckRhdGEiLCJjbGVhclJlY3QiLCJ2MSIsImkiLCJ2MiIsInJlbmRlclBsYXlsaW5lIiwic2V0UmFuZ2UiLCJzdGFydFgiLCJzdGFydFkiLCJlbmRYIiwiZW5kWSIsImRpc3QiLCJhc1giLCJldnQiLCJ1c2VFdmVudCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJhc1kiLCJwYWdlWSIsIkNhbnZhc0NvbnRyb2wiLCJzdGFydGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VEb3duIiwiYmluZCIsIm1vdXNlTW92ZSIsIm1vdXNlVXAiLCJsZWZ0IiwidG9wIiwiYWN0aXZlIiwidXBkYXRlZCIsIm1vdXNlRXZ0IiwidG9YIiwidG9ZIiwiY29ubmVjdExpc3RlbmVycyIsInNwZWVkIiwiZmlsdGVyVHlwZSIsImVjaG9FbmFibGVkIiwiZWNob0xlbmd0aCIsImVjaG9TdXN0YWluIiwiYWN0aXZlQ29udHJvbExhYmVsIiwiYm9keSIsInNldExhYmVsIiwibGFiZWwiLCJhdHRyIiwiaW5uZXJIVE1MIiwic2VsZWN0T3NjaWxsYXRvclR5cGUiLCJjbGljayIsInJhZGlvQ2xpY2siLCJzZWxlY3RlZCIsInRhcmdldCIsImNsYXNzTmFtZSIsImxvZyIsImNoZWNrZWQiLCJzcGVlZENoYW5nZSIsImVjaG9MZW5ndGhDaGFuZ2UiLCJlY2hvU3VzdGFpbkNoYW5nZSIsImVjaG9FbmFibGVkQ2hhbmdlIiwibGZvRW5hYmxlZENoYW5nZSIsImZpbHRlclR5cGVDaGFuZ2UiLCJvc2NpbGxhdG9yVHlwZUNoYW5nZSIsInJhZGlvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvbmNsaWNrIiwiZmlsdGVyVHlwZVJhZGlvcyIsIm9zY2lsbGF0b3JUeXBlUmFkaW9zIiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlT3NjaWxsYXRvciIsInJpbmdNb2QiLCJjcmVhdGVHYWluIiwiY3JlYXRlQmlxdWFkRmlsdGVyIiwiY3JlYXRlRGVsYXkiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJjcmVhdGVBdWRpb0dyYXBoIiwiY2FudmFzRmllbGRzIiwiYXJyIiwiQXJyYXkiLCJleHRlbmQiLCJvYmoiLCJhZGRpdGlvbmFsIiwia2V5IiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY3JlYXRlTW9kZWwiLCJsZm8iLCJyZXF1aXJlIiwiaW5pdGlhbGlzZVZhbHVlcyIsIm9ubG9hZCIsImdyYXBoQ29udHJvbCIsImNhbnZhc0NvbnRyb2wiLCJzZXRJbnRlcnZhbCIsImxmb09uT2ZmIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Ysc0NBQXNDLG1CQUFPLENBQUMsOEdBQXNEO0FBQ3BHLG9DQUFvQyxtQkFBTyxDQUFDLDZDQUFrQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZ0JBQWdCLGNBQWMsZUFBZSxzREFBc0QsaUJBQWlCLGdCQUFnQixxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSx1QkFBdUIsR0FBRyxZQUFZLGNBQWMsaUJBQWlCLHVCQUF1QixHQUFHLHNEQUFzRCxrQkFBa0IsR0FBRyxzRUFBc0UsdUJBQXVCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLGNBQWMsZUFBZSxpQkFBaUIsaUJBQWlCLEdBQUcs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ZmVlN2JlYzliODEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9pY29ucy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuY2FudmFzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0gKyBsYWJlbCxcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWwge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5sYWJlbCxcXG5hLmhvbWUsXFxuYS5zb3VyY2VDb2RlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcIm9zY2lsbGF0b3IxXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcIm9zY2lsbGF0b3IyXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJnYWluXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJmaWx0ZXJGcmVxdWVuY3lcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImZpbHRlclFcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJlY2hvXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwic2luZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInNhd3Rvb3RoXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwidHJpYW5nbGVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjU2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzcXVhcmVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjg4cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJhbGxwYXNzXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMyMHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiaGlnaHBhc3NcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzUycHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJsb3dwYXNzXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM4NHB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiYmFuZHBhc3NcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDE2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzcGVlZFxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00NDhweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImVjaG9Pbk9mZlxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01NDRweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImVjaG9MZW5ndGhcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTEycHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJlY2hvU3VzdGFpblxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01MTJweCAtMzJweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJsZm9Pbk9mZlxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00ODBweCAwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZCArIGxhYmVsLFxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTMycHg7XFxufVxcblxcbi5vc2NpbGxhdG9yQ29udHJvbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkX29zY2lsbGF0b3IxRnJlcXVlbmN5IC5vc2NpbGxhdG9yQ29udHJvbHMsXFxuLnNlbGVjdGVkX29zY2lsbGF0b3IyRnJlcXVlbmN5IC5vc2NpbGxhdG9yQ29udHJvbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5maWx0ZXJDb250cm9scyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWRfZmlsdGVyRnJlcXVlbmN5IC5maWx0ZXJDb250cm9scyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmVjaG9Db250cm9scyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWRfZWNobyAuZWNob0NvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2VsZWN0ZWRfZWNobyAubGluZUNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RlZF9lY2hvIGNhbnZhcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm1vZGVsIHtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLndoYXQge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5sYXllcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQ7XFxuICB3aWR0aDogMjU1cHg7XFxuICBoZWlnaHQ6IDI1NXB4O1xcbn1cXG5cXG5hLmhvbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTU3NnB4IC0zMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTM2cHg7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuYS5zb3VyY2VDb2RlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01NzZweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTM2cHg7XFxuICB0b3A6IDJweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3RvbC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4Mzk2ZGZmNGY1OWQxMmRmNjVhMDg4MmY4OWJlOWNjZS5wbmdcIjsiLCJpbXBvcnQgXCIuL2pzL2Ryb3RvbC5qc1wiO1xuaW1wb3J0IFwiLi9jc3MvZHJvdG9sLmNzc1wiO1xuIiwiZnVuY3Rpb24gdXBkYXRlTW9kZWxQb3NpdGlvbihibG9jaykge1xuICBibG9jay5kYXRhUG9zICs9IGJsb2NrLmRhdGFTcGVlZDtcbiAgaWYgKGJsb2NrLmRhdGFQb3MgPj0gMTI4KSB7XG4gICAgYmxvY2suZGF0YVBvcyAtPSAxMjg7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTW9kZWxQb3NpdGlvbnMobW9kZWwpIHtcbiAgdXBkYXRlTW9kZWxQb3NpdGlvbihtb2RlbC5vc2NpbGxhdG9yMUZyZXF1ZW5jeSk7XG4gIHVwZGF0ZU1vZGVsUG9zaXRpb24obW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kpO1xuICB1cGRhdGVNb2RlbFBvc2l0aW9uKG1vZGVsLmdhaW4pO1xuICB1cGRhdGVNb2RlbFBvc2l0aW9uKG1vZGVsLmZpbHRlckZyZXF1ZW5jeSk7XG4gIHVwZGF0ZU1vZGVsUG9zaXRpb24obW9kZWwuZmlsdGVyUSk7XG59XG5cbmZ1bmN0aW9uIGdldFNjYWxlZFZhbHVlKGJsb2NrKSB7XG4gIHJldHVybiAoMjU0LjAgLSBibG9jay5kYXRhW01hdGguZmxvb3IoYmxvY2suZGF0YVBvcyldKSAvIDI1NC4wO1xufVxuXG5mdW5jdGlvbiBnZXRGcmVxdWVuY3koYmxvY2spIHtcbiAgaWYgKGJsb2NrLmxmb0VuYWJsZWQpIHtcbiAgICByZXR1cm4gMC4yICogTWF0aC5wb3coMTYsIGdldFNjYWxlZFZhbHVlKGJsb2NrKSk7XG4gIH1cbiAgcmV0dXJuIDYwICogTWF0aC5wb3coOCwgZ2V0U2NhbGVkVmFsdWUoYmxvY2spKTtcbn1cblxuZnVuY3Rpb24gQXVkaW9HcmFwaENvbnRyb2woYXVkaW9HcmFwaCwgbW9kZWwpIHtcbiAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB0aGlzLmF1ZGlvR3JhcGggPSBhdWRpb0dyYXBoO1xuICB0aGlzLmxhc3RPc2NpbGxhdG9yMVR5cGUgPSBhdWRpb0dyYXBoLm9zY2lsbGF0b3IxLnR5cGU7XG4gIHRoaXMubGFzdE9zY2lsbGF0b3IyVHlwZSA9IGF1ZGlvR3JhcGgub3NjaWxsYXRvcjIudHlwZTtcbiAgdGhpcy5sYXN0RmlsdGVyVHlwZSA9IGF1ZGlvR3JhcGguZmlsdGVyLnR5cGU7XG4gIHRoaXMubGFzdEVjaG9MZW5ndGggPSBhdWRpb0dyYXBoLmRlbGF5LmRlbGF5VGltZS52YWx1ZTtcbn1cblxuQXVkaW9HcmFwaENvbnRyb2wucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5hdWRpb0dyYXBoLmF1ZGlvQ3R4LnJlc3VtZSgpLnRoZW4oKCkgPT4ge1xuICAgIHRoaXMuYXVkaW9HcmFwaC5vc2NpbGxhdG9yMS5zdGFydCgwKTtcbiAgICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjIuc3RhcnQoMCk7XG4gIH0pO1xufTtcblxuQXVkaW9HcmFwaENvbnRyb2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMubW9kZWwub3NjaWxsYXRvcjFGcmVxdWVuY3kudHlwZSAhPT0gdGhpcy5sYXN0T3NjaWxsYXRvcjFUeXBlKSB7XG4gICAgdGhpcy5sYXN0T3NjaWxsYXRvcjFUeXBlID0gdGhpcy5tb2RlbC5vc2NpbGxhdG9yMUZyZXF1ZW5jeS50eXBlO1xuICAgIHRoaXMuYXVkaW9HcmFwaC5vc2NpbGxhdG9yMS50eXBlID0gdGhpcy5sYXN0T3NjaWxsYXRvcjFUeXBlO1xuICB9XG4gIGlmICh0aGlzLm1vZGVsLm9zY2lsbGF0b3IyRnJlcXVlbmN5LnR5cGUgIT09IHRoaXMubGFzdE9zY2lsbGF0b3IyVHlwZSkge1xuICAgIHRoaXMubGFzdE9zY2lsbGF0b3IyVHlwZSA9IHRoaXMubW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kudHlwZTtcbiAgICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjIudHlwZSA9IHRoaXMubGFzdE9zY2lsbGF0b3IyVHlwZTtcbiAgfVxuICBpZiAodGhpcy5tb2RlbC5maWx0ZXJGcmVxdWVuY3kudHlwZSAhPT0gdGhpcy5sYXN0RmlsdGVyVHlwZSkge1xuICAgIHRoaXMubGFzdEZpbHRlclR5cGUgPSB0aGlzLm1vZGVsLmZpbHRlckZyZXF1ZW5jeS50eXBlO1xuICAgIHRoaXMuYXVkaW9HcmFwaC5maWx0ZXIudHlwZSA9IHRoaXMubGFzdEZpbHRlclR5cGU7XG4gIH1cbiAgaWYgKHRoaXMubW9kZWwuZWNoby5sZW5ndGggIT09IHRoaXMubGFzdEVjaG9MZW5ndGgpIHtcbiAgICB0aGlzLmxhc3RFY2hvTGVuZ3RoID0gdGhpcy5tb2RlbC5lY2hvLmxlbmd0aDtcbiAgICB0aGlzLmF1ZGlvR3JhcGguZGVsYXkuZGVsYXlUaW1lLnNldFRhcmdldEF0VGltZSh0aGlzLmxhc3RFY2hvTGVuZ3RoLCAwLCAwKTtcbiAgfVxuXG4gIHVwZGF0ZU1vZGVsUG9zaXRpb25zKHRoaXMubW9kZWwpO1xuICB0aGlzLmF1ZGlvR3JhcGguZGVsYXlHYWluLmdhaW4uc2V0VGFyZ2V0QXRUaW1lXG4gICAgKHRoaXMubW9kZWwuZWNoby5lbmFibGVkID8gdGhpcy5tb2RlbC5lY2hvLnN1c3RhaW4gOiAwLCAwLCAwKTtcblxuICBjb25zdCBmcmVxdWVuY3kxID0gZ2V0RnJlcXVlbmN5KHRoaXMubW9kZWwub3NjaWxsYXRvcjFGcmVxdWVuY3kpO1xuICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjEuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShmcmVxdWVuY3kxLCAwLCAwKTtcblxuICBjb25zdCBmcmVxdWVuY3kyID0gZ2V0RnJlcXVlbmN5KHRoaXMubW9kZWwub3NjaWxsYXRvcjJGcmVxdWVuY3kpO1xuICB0aGlzLmF1ZGlvR3JhcGgub3NjaWxsYXRvcjIuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShmcmVxdWVuY3kyLCAwLCAwKTtcblxuICBjb25zdCBnYWluID0gZ2V0U2NhbGVkVmFsdWUodGhpcy5tb2RlbC5nYWluKTtcbiAgdGhpcy5hdWRpb0dyYXBoLm9zY2lsbGF0b3JHYWluLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKGdhaW4sIDAsIDApO1xuXG4gIGNvbnN0IGZpbHRlckZyZXF1ZW5jeSA9XG4gICAgNjAgKiBNYXRoLnBvdygxMDAsIGdldFNjYWxlZFZhbHVlKHRoaXMubW9kZWwuZmlsdGVyRnJlcXVlbmN5KSk7XG4gIHRoaXMuYXVkaW9HcmFwaC5maWx0ZXIuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShmaWx0ZXJGcmVxdWVuY3ksIDAsIDApO1xuXG4gIGNvbnN0IGZpbHRlclEgPVxuICAgIHRoaXMubW9kZWwuZmlsdGVyUS5tdWx0aXBsaWVyICogZ2V0U2NhbGVkVmFsdWUodGhpcy5tb2RlbC5maWx0ZXJRKTtcbiAgdGhpcy5hdWRpb0dyYXBoLmZpbHRlci5RLnNldFRhcmdldEF0VGltZShmaWx0ZXJRLCAwLCAwKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXVkaW9HcmFwaENvbnRyb2w7XG4iLCJjb25zdCBsYXllcnNSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllcnNcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RyYXdcIik7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnRleHQubGluZVdpZHRoID0gMS4wO1xuXG5sZXQgbGF5ZXJzTGVmdCA9IDA7XG5sZXQgbGF5ZXJzVG9wID0gMDtcbmxldCBsYXN0WCA9IDA7XG5sZXQgbGFzdFkgPSAwO1xubGV0IGlzU3RhcnRlZCA9IGZhbHNlO1xubGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gcmVuZGVyQ2VudHJlTGluZSgpIHtcbiAgY29uc3QgYmdDYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnXCIpO1xuICBjb25zdCBiZ0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBiZ0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGJnQ29udGV4dC5zdHJva2VTdHlsZSA9IFwiI2RkZFwiO1xuICBiZ0NvbnRleHQubGluZVdpZHRoID0gMS4wO1xuICBiZ0NvbnRleHQubW92ZVRvKDAsIDEyOCk7XG4gIGJnQ29udGV4dC5saW5lVG8oMjU1LCAxMjgpO1xuICBiZ0NvbnRleHQuc3Ryb2tlKCk7XG4gIGJnQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICBiZ0NvbnRleHQuZm9udCA9IFwiMTZweCBzYW5zLXNlcmlmXCI7XG4gICAgYmdDb250ZXh0LmZpbGxUZXh0KFwiY2xpY2sgdG8gc3RhcnRcIiwgODUsIDEyMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRGF0YShkYXRhKSB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDI1NSwgMjU1KTtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzk5OVwiO1xuICBsZXQgdjEgPSBkYXRhWzBdO1xuICBjb250ZXh0Lm1vdmVUbygwLCB2MSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTI4OyBpKyspIHtcbiAgICBjb25zdCB2MiA9IGRhdGFbaV07XG4gICAgY29udGV4dC5saW5lVG8oaSAqIDIsIHYyKTtcbiAgICB2MSA9IHYyO1xuICB9XG4gIGNvbnRleHQuc3Ryb2tlKCk7XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXlsaW5lKGRhdGFQb3MpIHtcbiAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiIzA5MFwiO1xuICBjb250ZXh0Lm1vdmVUbyhkYXRhUG9zICogMiwgMCk7XG4gIGNvbnRleHQubGluZVRvKGRhdGFQb3MgKiAyLCAyNTUpO1xuICBjb250ZXh0LnN0cm9rZSgpO1xuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xufVxuXG5mdW5jdGlvbiBzZXRSYW5nZShkYXRhLCBzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWSkge1xuICBjb25zdCBkaXN0ID0gKGVuZFkgLSBzdGFydFkpIC8gKGVuZFggLSBzdGFydFgpO1xuICBpZiAoc3RhcnRYIDwgZW5kWCkge1xuICAgIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPD0gZW5kWDsgaSsrKSB7XG4gICAgICBkYXRhW2ldID0gc3RhcnRZO1xuICAgICAgc3RhcnRZICs9IGRpc3Q7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSBzdGFydFg7IGkgPj0gZW5kWDsgaS0tKSB7XG4gICAgICBkYXRhW2ldID0gc3RhcnRZO1xuICAgICAgc3RhcnRZIC09IGRpc3Q7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzWChldnQpIHtcbiAgY29uc3QgdXNlRXZlbnQgPSBldnQuY2hhbmdlZFRvdWNoZXMgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldnQ7XG4gIHJldHVybiBNYXRoLmZsb29yKCh1c2VFdmVudC5wYWdlWCAtIGxheWVyc0xlZnQpIC8gMik7XG59XG5cbmZ1bmN0aW9uIGFzWShldnQpIHtcbiAgY29uc3QgdXNlRXZlbnQgPSBldnQuY2hhbmdlZFRvdWNoZXMgPyBldnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldnQ7XG4gIHJldHVybiB1c2VFdmVudC5wYWdlWSAtIGxheWVyc1RvcDtcbn1cblxuZnVuY3Rpb24gQ2FudmFzQ29udHJvbChtb2RlbCwgc3RhcnRlZENhbGxiYWNrKSB7XG4gIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgdGhpcy5zdGFydGVkQ2FsbGJhY2sgPSBzdGFydGVkQ2FsbGJhY2s7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgcmVuZGVyQ2VudHJlTGluZSgpO1xuXG4gIGNvbnN0IGxheWVyc1JlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyc1wiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGF5ZXJzTGVmdCA9IGxheWVyc1JlY3QubGVmdDtcbiAgbGF5ZXJzVG9wID0gbGF5ZXJzUmVjdC50b3A7XG59XG5cbkNhbnZhc0NvbnRyb2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWN0aXZlID0gdGhpcy5tb2RlbFt0aGlzLm1vZGVsLmFjdGl2ZV07XG4gIHRoaXMuZGF0YSA9IGFjdGl2ZSAmJiBhY3RpdmUuZGF0YTtcbiAgdGhpcy51cGRhdGVkID0gZmFsc2U7XG4gIGlmICghdGhpcy5kYXRhKSByZXR1cm47XG4gIHJlbmRlckRhdGEodGhpcy5kYXRhKTtcbiAgcmVuZGVyUGxheWxpbmUoYWN0aXZlICYmIGFjdGl2ZS5kYXRhUG9zKTtcbn07XG5cbkNhbnZhc0NvbnRyb2wucHJvdG90eXBlLm1vdXNlRG93biA9IGZ1bmN0aW9uIChtb3VzZUV2dCkge1xuICBpZiAoIXRoaXMuZGF0YSkgcmV0dXJuO1xuICBsYXN0WCA9IGFzWChtb3VzZUV2dCk7XG4gIGxhc3RZID0gYXNZKG1vdXNlRXZ0KTtcbiAgdGhpcy5kYXRhW2xhc3RYXSA9IGxhc3RZO1xuICBpc1N0YXJ0ZWQgPSB0cnVlO1xufTtcblxuQ2FudmFzQ29udHJvbC5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uIChtb3VzZUV2dCkge1xuICBpZiAoIXRoaXMubW9kZWwuc3RhcnRlZCkge1xuICAgIHRoaXMuc3RhcnRlZENhbGxiYWNrKCk7XG4gIH1cbiAgaWYgKCF0aGlzLmRhdGEpIHJldHVybjtcbiAgY29uc3QgdG9YID0gYXNYKG1vdXNlRXZ0KTtcbiAgY29uc3QgdG9ZID0gYXNZKG1vdXNlRXZ0KTtcbiAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICBzZXRSYW5nZSh0aGlzLmRhdGEsIGxhc3RYLCBsYXN0WSwgdG9YLCB0b1kpO1xuICB9IGVsc2UgaWYgKGlzU3RhcnRlZCkge1xuICAgIHRoaXMuZGF0YVt0b1hdID0gdG9ZO1xuICB9XG4gIGlzU3RhcnRlZCA9IGZhbHNlO1xuICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gIGxhc3RYID0gbnVsbDtcbiAgbGFzdFkgPSBudWxsO1xufTtcblxuQ2FudmFzQ29udHJvbC5wcm90b3R5cGUubW91c2VNb3ZlID0gZnVuY3Rpb24gKG1vdXNlRXZ0KSB7XG4gIGlmICghdGhpcy5kYXRhIHx8IHRoaXMudXBkYXRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNTdGFydGVkKSB7XG4gICAgY29uc3QgdG9YID0gYXNYKG1vdXNlRXZ0KTtcbiAgICBjb25zdCB0b1kgPSBhc1kobW91c2VFdnQpO1xuICAgIHNldFJhbmdlKHRoaXMuZGF0YSwgbGFzdFgsIGxhc3RZLCB0b1gsIHRvWSk7XG4gICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICBsYXN0WCA9IHRvWDtcbiAgICBsYXN0WSA9IHRvWTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNDb250cm9sO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb25uZWN0TGlzdGVuZXJzKG1vZGVsKSB7XG4gIGNvbnN0IHNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGVlZFwiKTtcbiAgY29uc3QgZmlsdGVyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyVHlwZVwiKTtcbiAgY29uc3QgZWNob0VuYWJsZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VjaG9Pbk9mZlwiKTtcbiAgY29uc3QgZWNob0xlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWNob0xlbmd0aFwiKTtcbiAgY29uc3QgZWNob1N1c3RhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VjaG9TdXN0YWluXCIpO1xuICBjb25zdCBsZm9FbmFibGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsZm9Pbk9mZlwiKTtcbiAgY29uc3QgYWN0aXZlQ29udHJvbExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGF0XCIpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGxldCBhY3RpdmUgPSBtb2RlbFttb2RlbC5hY3RpdmVdO1xuXG4gIGZ1bmN0aW9uIHNldExhYmVsKGxhYmVsLCBhdHRyKSB7XG4gICAgYWN0aXZlQ29udHJvbExhYmVsLmlubmVySFRNTCA9IGxhYmVsO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0T3NjaWxsYXRvclR5cGUodHlwZSkge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm9zY2lsbGF0b3JUeXBlXCJdW3ZhbHVlPVwiJyArIHR5cGUgKyAnXCJdJylcbiAgICAgIC5jbGljaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFkaW9DbGljayhldnQpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgYm9keS5jbGFzc05hbWUgPSBcInNlbGVjdGVkX1wiICsgc2VsZWN0ZWQ7XG4gICAgbW9kZWwuYWN0aXZlID0gc2VsZWN0ZWQ7XG4gICAgYWN0aXZlID0gbW9kZWxbc2VsZWN0ZWRdO1xuXG4gICAgc2V0TGFiZWwoYWN0aXZlLmxhYmVsLCBhY3RpdmUudHlwZSk7XG4gICAgc3BlZWQudmFsdWUgPSBNYXRoLmxvZyhhY3RpdmUuZGF0YVNwZWVkKSAvIE1hdGgubG9nKDIpO1xuICAgIGlmIChzZWxlY3RlZCA9PT0gXCJvc2NpbGxhdG9yMUZyZXF1ZW5jeVwiKSB7XG4gICAgICBzZWxlY3RPc2NpbGxhdG9yVHlwZShtb2RlbC5vc2NpbGxhdG9yMUZyZXF1ZW5jeS50eXBlKTtcbiAgICAgIGxmb0VuYWJsZWQuY2hlY2tlZCA9IG1vZGVsLm9zY2lsbGF0b3IxRnJlcXVlbmN5Lmxmb0VuYWJsZWQ7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gXCJvc2NpbGxhdG9yMkZyZXF1ZW5jeVwiKSB7XG4gICAgICBzZWxlY3RPc2NpbGxhdG9yVHlwZShtb2RlbC5vc2NpbGxhdG9yMkZyZXF1ZW5jeS50eXBlKTtcbiAgICAgIGxmb0VuYWJsZWQuY2hlY2tlZCA9IG1vZGVsLm9zY2lsbGF0b3IyRnJlcXVlbmN5Lmxmb0VuYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3BlZWRDaGFuZ2UoZXZ0KSB7XG4gICAgYWN0aXZlLmRhdGFTcGVlZCA9IE1hdGgucG93KDIsIGV2dC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWNob0xlbmd0aENoYW5nZShldnQpIHtcbiAgICBhY3RpdmUubGVuZ3RoID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVjaG9TdXN0YWluQ2hhbmdlKGV2dCkge1xuICAgIGFjdGl2ZS5zdXN0YWluID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVjaG9FbmFibGVkQ2hhbmdlKGV2dCkge1xuICAgIGFjdGl2ZS5lbmFibGVkID0gZXZ0LnRhcmdldC5jaGVja2VkO1xuICB9XG5cbiAgZnVuY3Rpb24gbGZvRW5hYmxlZENoYW5nZShldnQpIHtcbiAgICBhY3RpdmUubGZvRW5hYmxlZCA9IGV2dC50YXJnZXQuY2hlY2tlZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlclR5cGVDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBldnQudGFyZ2V0LnZhbHVlO1xuICAgIG1vZGVsLmZpbHRlckZyZXF1ZW5jeS50eXBlID0gc2VsZWN0ZWQ7XG4gICAgc2V0TGFiZWwoYWN0aXZlLmxhYmVsLCBtb2RlbC5maWx0ZXJGcmVxdWVuY3kudHlwZSk7XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkKSB7XG4gICAgICBjYXNlIFwibm90Y2hcIjpcbiAgICAgIGNhc2UgXCJiYW5kcGFzc1wiOlxuICAgICAgICBtb2RlbC5maWx0ZXJRLm11bHRpcGxpZXIgPSAzMDsgLy8gc2hvdWxkIGJlIHNtYWxsXG4gICAgICAgIG1vZGVsLmZpbHRlclEubGFiZWwgPSBcIkZpbHRlciBiYW5kd2lkdGhcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtb2RlbC5maWx0ZXJRLm11bHRpcGxpZXIgPSAyMDtcbiAgICAgICAgbW9kZWwuZmlsdGVyUS5sYWJlbCA9IFwiRmlsdGVyIHJlc29uYW5jZVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9zY2lsbGF0b3JUeXBlQ2hhbmdlKGV2dCkge1xuICAgIGFjdGl2ZS50eXBlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHNwZWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBzcGVlZENoYW5nZSk7XG4gIGVjaG9MZW5ndGguYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlY2hvTGVuZ3RoQ2hhbmdlKTtcbiAgZWNob1N1c3RhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVjaG9TdXN0YWluQ2hhbmdlKTtcbiAgZWNob0VuYWJsZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlY2hvRW5hYmxlZENoYW5nZSk7XG4gIGxmb0VuYWJsZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBsZm9FbmFibGVkQ2hhbmdlKTtcblxuICBjb25zdCByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiYm94XCJdJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgcmFkaW9zW2ldLm9uY2xpY2sgPSByYWRpb0NsaWNrO1xuICB9XG4gIHJhZGlvc1swXS5jbGljaygpO1xuXG4gIGNvbnN0IGZpbHRlclR5cGVSYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdpbnB1dFtuYW1lPVwiZmlsdGVyVHlwZVwiXSdcbiAgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJUeXBlUmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgZmlsdGVyVHlwZVJhZGlvc1tpXS5vbmNsaWNrID0gZmlsdGVyVHlwZUNoYW5nZTtcbiAgfVxuICBmaWx0ZXJUeXBlUmFkaW9zWzBdLmNsaWNrKCk7XG5cbiAgY29uc3Qgb3NjaWxsYXRvclR5cGVSYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdpbnB1dFtuYW1lPVwib3NjaWxsYXRvclR5cGVcIl0nXG4gICk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3NjaWxsYXRvclR5cGVSYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICBvc2NpbGxhdG9yVHlwZVJhZGlvc1tpXS5vbmNsaWNrID0gb3NjaWxsYXRvclR5cGVDaGFuZ2U7XG4gIH1cbiAgb3NjaWxsYXRvclR5cGVSYWRpb3NbMF0uY2xpY2soKTtcbn07XG4iLCJjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuXG5jb25zdCBvc2NpbGxhdG9yMSA9IGF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbmNvbnN0IG9zY2lsbGF0b3IyID0gYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuY29uc3QgcmluZ01vZCA9IGF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcbmNvbnN0IG9zY2lsbGF0b3JHYWluID0gYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuY29uc3QgZmlsdGVyID0gYXVkaW9DdHguY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG5jb25zdCBkZWxheSA9IGF1ZGlvQ3R4LmNyZWF0ZURlbGF5KCk7XG5jb25zdCBkZWxheUdhaW4gPSBhdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5cbm9zY2lsbGF0b3IxLmNvbm5lY3QocmluZ01vZCk7XG5vc2NpbGxhdG9yMi5jb25uZWN0KHJpbmdNb2QuZ2Fpbik7XG5yaW5nTW9kLmNvbm5lY3Qob3NjaWxsYXRvckdhaW4pO1xub3NjaWxsYXRvckdhaW4uY29ubmVjdChmaWx0ZXIpO1xuZmlsdGVyLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuZmlsdGVyLmNvbm5lY3QoZGVsYXkpO1xuZGVsYXkuY29ubmVjdChkZWxheUdhaW4pO1xuZGVsYXlHYWluLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuZGVsYXlHYWluLmNvbm5lY3QoZGVsYXkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUF1ZGlvR3JhcGgoKSB7XG4gIHJldHVybiB7XG4gICAgYXVkaW9DdHg6IGF1ZGlvQ3R4LFxuICAgIG9zY2lsbGF0b3IxOiBvc2NpbGxhdG9yMSxcbiAgICBvc2NpbGxhdG9yMjogb3NjaWxsYXRvcjIsXG4gICAgb3NjaWxsYXRvckdhaW46IG9zY2lsbGF0b3JHYWluLFxuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIGRlbGF5OiBkZWxheSxcbiAgICBkZWxheUdhaW46IGRlbGF5R2FpbixcbiAgfTtcbn07XG4iLCJmdW5jdGlvbiBjYW52YXNGaWVsZHMoKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheSgxMjgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEyODsgaSsrKSB7XG4gICAgYXJyW2ldID0gMTI4O1xuICB9XG4gIHJldHVybiB7XG4gICAgZGF0YTogYXJyLFxuICAgIGRhdGFQb3M6IDAsXG4gICAgZGF0YVNwZWVkOiAwLjUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmosIGFkZGl0aW9uYWwpIHtcbiAgZm9yIChsZXQga2V5IGluIGFkZGl0aW9uYWwpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFkZGl0aW9uYWwsIGtleSkpIHtcbiAgICAgIG9ialtrZXldID0gYWRkaXRpb25hbFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKCkge1xuICByZXR1cm4ge1xuICAgIHN0YXJ0ZWQ6IGZhbHNlLFxuICAgIGFjdGl2ZTogXCJvc2NpbGxhdG9yMUZyZXF1ZW5jeVwiLFxuICAgIG9zY2lsbGF0b3IxRnJlcXVlbmN5OiBleHRlbmQoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkZyZXF1ZW5jeVwiLFxuICAgICAgICB0eXBlOiBcInRyaWFuZ2xlXCIsXG4gICAgICAgIGxmbzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgY2FudmFzRmllbGRzKClcbiAgICApLFxuICAgIG9zY2lsbGF0b3IyRnJlcXVlbmN5OiBleHRlbmQoXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkZyZXF1ZW5jeVwiLFxuICAgICAgICB0eXBlOiBcInRyaWFuZ2xlXCIsXG4gICAgICAgIGxmbzogZmFsc2UsXG4gICAgICB9LFxuICAgICAgY2FudmFzRmllbGRzKClcbiAgICApLFxuICAgIGdhaW46IGV4dGVuZChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiR2FpblwiLFxuICAgICAgfSxcbiAgICAgIGNhbnZhc0ZpZWxkcygpXG4gICAgKSxcbiAgICBmaWx0ZXJGcmVxdWVuY3k6IGV4dGVuZChcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRmlsdGVyIGZyZXF1ZW5jeVwiLFxuICAgICAgICB0eXBlOiBcImFsbHBhc3NcIixcbiAgICAgIH0sXG4gICAgICBjYW52YXNGaWVsZHMoKVxuICAgICksXG4gICAgZmlsdGVyUTogZXh0ZW5kKFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJGaWx0ZXIgcmVzb25hbmNlXCIsXG4gICAgICAgIG11bHRpcGxpZXI6IDEsXG4gICAgICB9LFxuICAgICAgY2FudmFzRmllbGRzKClcbiAgICApLFxuICAgIGVjaG86IHtcbiAgICAgIGxhYmVsOiBcIkVjaG9cIixcbiAgICAgIGxlbmd0aDogMC4xLFxuICAgICAgc3VzdGFpbjogMC41LFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICB9LFxuICB9O1xufTtcbiIsImNvbnN0IGNyZWF0ZU1vZGVsID0gcmVxdWlyZShcIi4vY3JlYXRlLW1vZGVsXCIpO1xuY29uc3QgY3JlYXRlQXVkaW9HcmFwaCA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1hdWRpby1ncmFwaFwiKTtcbmNvbnN0IEF1ZGlvR3JhcGhDb250cm9sID0gcmVxdWlyZShcIi4vQXVkaW9HcmFwaENvbnRyb2xcIik7XG5jb25zdCBDYW52YXNDb250cm9sID0gcmVxdWlyZShcIi4vQ2FudmFzQ29udHJvbFwiKTtcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSByZXF1aXJlKFwiLi9jb25uZWN0LWxpc3RlbmVyc1wiKTtcbmNvbnN0IGluaXRpYWxpc2VWYWx1ZXMgPSByZXF1aXJlKFwiLi9pbml0aWFsaXNlLXZhbHVlc1wiKTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbW9kZWwgPSBjcmVhdGVNb2RlbCgpO1xuICBjb25zdCBhdWRpb0dyYXBoID0gY3JlYXRlQXVkaW9HcmFwaCgpO1xuICBjb25zdCBncmFwaENvbnRyb2wgPSBuZXcgQXVkaW9HcmFwaENvbnRyb2woYXVkaW9HcmFwaCwgbW9kZWwpO1xuICBjb25zdCBjYW52YXNDb250cm9sID0gbmV3IENhbnZhc0NvbnRyb2wobW9kZWwsICgpID0+IHtcbiAgICBncmFwaENvbnRyb2wuc3RhcnQoKS50aGVuKCgpID0+IHtcbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ3JhcGhDb250cm9sLnVwZGF0ZSgpO1xuICAgICAgICBjYW52YXNDb250cm9sLnVwZGF0ZSgpO1xuICAgICAgfSwgNDApO1xuICAgIH0pO1xuICB9KTtcblxuICBpbml0aWFsaXNlVmFsdWVzKGF1ZGlvR3JhcGgsIG1vZGVsKTtcbiAgY29ubmVjdExpc3RlbmVycyhtb2RlbCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbml0aWFsaXNlVmFsdWVzKGF1ZGlvR3JhcGgsIG1vZGVsKSB7XG4gIGF1ZGlvR3JhcGgub3NjaWxsYXRvcjEudHlwZSA9IG1vZGVsLm9zY2lsbGF0b3IxRnJlcXVlbmN5LnR5cGU7XG4gIGF1ZGlvR3JhcGgub3NjaWxsYXRvcjIudHlwZSA9IG1vZGVsLm9zY2lsbGF0b3IyRnJlcXVlbmN5LnR5cGU7XG5cbiAgY29uc3QgbGZvT25PZmYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xmb09uT2ZmXCIpO1xuICBsZm9Pbk9mZi5jaGVja2VkID0gbW9kZWwub3NjaWxsYXRvcjFGcmVxdWVuY3kubGZvO1xuXG4gIGNvbnN0IGVjaG9FbmFibGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlY2hvT25PZmZcIik7XG4gIGVjaG9FbmFibGVkLmNoZWNrZWQgPSBtb2RlbC5lY2hvLmVuYWJsZWQ7XG5cbiAgY29uc3QgZWNob0xlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWNob0xlbmd0aFwiKTtcbiAgZWNob0xlbmd0aC52YWx1ZSA9IG1vZGVsLmVjaG8ubGVuZ3RoO1xuICBhdWRpb0dyYXBoLmRlbGF5LmRlbGF5VGltZS52YWx1ZSA9IG1vZGVsLmVjaG8ubGVuZ3RoO1xuXG4gIGNvbnN0IGVjaG9TdXN0YWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlY2hvU3VzdGFpblwiKTtcbiAgZWNob1N1c3RhaW4udmFsdWUgPSBtb2RlbC5lY2hvLnN1c3RhaW47XG4gIGF1ZGlvR3JhcGguZGVsYXlHYWluLmdhaW4udmFsdWUgPSBtb2RlbC5lY2hvLnN1c3RhaW47XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==