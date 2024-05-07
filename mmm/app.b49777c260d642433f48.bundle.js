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
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", \"Helvetica\", sans-serif;\n  height: 100%;\n  width: 100%;\n  background: #ddd;\n  overflow-y: hidden;\n}\n\nbody {\n  text-align: center;\n}\n\n.controls,\n.started .info {\n  display: none;\n}\n\n.started .controls {\n  display: block;\n}\n\n.wrapper {\n  display: inline-block;\n  background: #ffffff;\n  width: 300px;\n  padding: 20px;\n}\n\n.controls div label {\n  width: 100px;\n}\n\n.controls > *,\n.controls .control input,\n.controls .control select,\n.wrapper .graph,\n.wrapper .sequencer {\n  display: none;\n}\n\n.wrapper.graph .graph {\n  display: block;\n}\n.wrapper.sequencer .sequencer {\n  display: block;\n}\n\n.controls.playable .play {\n  display: block;\n}\n.controls.types .types {\n  display: block;\n}\n.controls.control1in .control:nth-child(3),\n.controls.control1val .control:nth-child(3) {\n  display: block;\n}\n.controls.control1in #control1in {\n  display: inline;\n}\n.controls.control1val #control1val {\n  display: inline;\n}\n.controls.control2in .control:nth-child(4),\n.controls.control2val .control:nth-child(4) {\n  display: block;\n}\n.controls.control2in #control2in {\n  display: inline;\n}\n.controls.control2val #control2val {\n  display: inline;\n}\n.controls.control3in .control:nth-child(5),\n.controls.control3val .control:nth-child(5) {\n  display: block;\n}\n.controls.control3in #control3in {\n  display: inline;\n}\n.controls.control3val #control3val {\n  display: inline;\n}\n.controls.control4in .control:nth-child(6),\n.controls.control4val .control:nth-child(6) {\n  display: block;\n}\n.controls.control4in #control4in {\n  display: inline;\n}\n.controls.control4val #control4val {\n  display: inline;\n}\n.controls.control5in .control:nth-child(7),\n.controls.control5val .control:nth-child(7) {\n  display: block;\n}\n.controls.control5in #control5in {\n  display: inline;\n}\n.controls.control5val #control5val {\n  display: inline;\n}\n\ninput[type=\"number\"] {\n  width: 100px;\n}\n\na.home,\na.sourceCode {\n  display: inline-block;\n  cursor: pointer;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -99999px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\na.home {\n  background-position: -736px -32px;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n\na.sourceCode {\n  background-position: -736px 0;\n  position: relative;\n  left: 136px;\n  top: 2px;\n}\n", ""]);
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
  const wrapper = qs(".wrapper");
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
        fillOptions(controlInEls[cIndex], control.get(), items.map(x => x.asOption()).filter(x => x.value !== index && x.type !== constants.EMPTY), true);
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
  const windowGraph = qs("button[value=graph]");
  windowGraph.onclick = function () {
    wrapper.className = "wrapper graph";
  };
  const windowSequencer = qs("button[value=sequencer]");
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
  OSCILLATOR: "oscillator"
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
      label() {
        return "Time (ms)";
      },
      set(val) {
        that.delayTimeValue = val;
        that.delay.delayTime.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.delayTimeValue;
      }
    }, {
      type: "in",
      label() {
        return "Input";
      },
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.delay, "input");
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
      label() {
        return "Time (ms)";
      },
      set(val) {
        that.delayTimeValue = val;
        that.delay.delayTime.setTargetAtTime(val, 0, 0);
      },
      get() {
        return that.delayTimeValue;
      }
    }, {
      type: "val",
      label() {
        return "Sustain";
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
        return "Input";
      },
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.delay, "input");
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
class Filter extends Node {
  constructor(ctx, model, idx) {
    super(ctx, model, idx, constants.FILTER, true);
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
        return "Gain Mod";
      },
      set(val) {
        that.replaceOtherOnParam(that.gainConnectValue, val, that.gain.gain, "gainConnect");
        that.gainConnectValue = val;
      },
      get() {
        return that.gainConnectValue;
      }
    }, {
      type: "in",
      label() {
        return "Input";
      },
      set(val) {
        that.replaceOtherOnParam(that.inputConnectValue, val, that.delay, "input");
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

/***/ "./src/js/nodes/create-oscillator.js":
/*!*******************************************!*\
  !*** ./src/js/nodes/create-oscillator.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Node = __webpack_require__(/*! ./Node */ "./src/js/nodes/Node.js");
const constants = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
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
        return that.gainConnectValue;
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tbW0uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tbW0uY3NzPzRhMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWF1ZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGUtbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpbGwtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW1tLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9jcmVhdGUtZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25vZGVzL2NyZWF0ZS1lY2hvLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9jcmVhdGUtZmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ub2Rlcy9jcmVhdGUtZ2Fpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbm9kZXMvY3JlYXRlLW1pY3JvcGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25vZGVzL2NyZWF0ZS1vc2NpbGxhdG9yLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjb25uZWN0QXVkaW8iLCJjYWxsYmFjayIsIk1FRElBX0NPTlNUUkFJTlRTIiwiYXVkaW8iLCJ2aWRlbyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJtZWRpYVN0cmVhbSIsImNhdGNoIiwiZXJyIiwiRXJyb3IiLCJjb25zdGFudHMiLCJyZXF1aXJlIiwiZmlsbE9wdGlvbnMiLCJxcyIsImlkIiwibm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjb25uZWN0TGlzdGVuZXJzIiwibW9kZWwiLCJpdGVtcyIsInR5cGVzIiwiY29ubmVjdGlvbnMiLCJjdXJyZW50SWR4IiwiY3VycmVudCIsIndyYXBwZXIiLCJjb250cm9sQXJlYSIsImxhYmVsIiwicGxheSIsInR5cGVFbCIsImNvbnRyb2xWYWxFbHMiLCJjb250cm9sSW5FbHMiLCJjb252ZXJ0RWxzIiwiY2hlY2tlZCIsImNvbm5lY3QiLCJpbmRleCIsImlubmVySFRNTCIsInBsYXlpbmciLCJwbGF5YWJsZSIsImNsYXNzZXMiLCJzdWJ0eXBlcyIsInN1YnR5cGUiLCJ2YWx1ZXMiLCJyZXBsYWNlQ2hpbGRyZW4iLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZ2V0IiwidGV4dCIsImFwcGVuZENoaWxkIiwiY29udHJvbHMiLCJjSW5kZXgiLCJjb250cm9sIiwidHlwZSIsInZhbHVlIiwibWFwIiwieCIsImFzT3B0aW9uIiwiZmlsdGVyIiwiRU1QVFkiLCJjbGFzc05hbWUiLCJvbmNoYW5nZSIsImV2dCIsInNldCIsInRhcmdldCIsIm9wdGlvbnMiLCJvbmNsaWNrIiwid2luZG93R3JhcGgiLCJ3aW5kb3dTZXF1ZW5jZXIiLCJwYXJzZUludCIsImxhc3RDb250cm9sIiwibmV3Q29udHJvbCIsInNldFZhbHVlc1RvIiwiY3VycmVudENvbm5lY3Rpb25zIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJjb25uZWN0b3IiLCJkZXN0cm95IiwiREVMQVkiLCJFQ0hPIiwiRklMVEVSIiwiR0FJTiIsIk1JQ1JPUEhPTkUiLCJPU0NJTExBVE9SIiwiY3JlYXRlTWljcm9waG9uZSIsImNyZWF0ZU9zY2lsbGF0b3IiLCJjcmVhdGVGaWx0ZXIiLCJjcmVhdGVEZWxheSIsImNyZWF0ZUVjaG8iLCJjcmVhdGVHYWluIiwiTm9kZSIsImNyZWF0ZU1vZGVsIiwic3RyZWFtIiwiYXVkaW9DdHgiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJBcnJheSIsImZpbGwiLCJvc2NpbGxhdG9yIiwiZGVsYXkiLCJlY2hvIiwiZ2FpbiIsInNlbGVjdEVsIiwiY3VycmVudFZhbCIsImluY2x1ZGVFbXB0eSIsInVuc2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImNvbnN0cnVjdG9yIiwiY3R4IiwiaWR4IiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSIsIm90aGVySWR4IiwicGFyYW0iLCJjb25uZWN0T3RoZXJUb1BhcmFtIiwicmVwbGFjZU90aGVyT25QYXJhbSIsIm9sZElkeCIsIm5ld0lkeCIsImJvb2wiLCJkZXN0aW5hdGlvbiIsInZhbCIsIm5ld05vZGUiLCJsYXN0Q29udHJvbHMiLCJuZXdDb250cm9scyIsIkRlbGF5IiwiX2NvbnRyb2xzIiwiaW5pdENvbnRyb2xzIiwidGhhdCIsImRlbGF5VGltZVZhbHVlIiwiZGVsYXlUaW1lIiwic2V0VGFyZ2V0QXRUaW1lIiwiaW5wdXRDb25uZWN0VmFsdWUiLCJsYXN0IiwiaW5jbHVkZXMiLCJFY2hvIiwiZ2FpblZhbHVlIiwiRmlsdGVyIiwiY3JlYXRlQmlxdWFkRmlsdGVyIiwiZnJlcUNvbm5lY3RWYWx1ZSIsImZyZXF1ZW5jeSIsInFDb25uZWN0VmFsdWUiLCJRIiwiZnJlcVZhbHVlIiwicVZhbHVlIiwiR2FpbiIsImdhaW5Db25uZWN0VmFsdWUiLCJNaWNyb3Bob25lIiwiaW5wdXQiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsIk9zY2lsbGF0b3IiLCJvc2MiLCJzdGFydCIsInN0b3AiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RixzQ0FBc0MsbUJBQU8sQ0FBQyw4R0FBc0Q7QUFDcEcsb0NBQW9DLG1CQUFPLENBQUMsNkNBQWtCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUyxnQkFBZ0IsY0FBYyxlQUFlLHNEQUFzRCxpQkFBaUIsZ0JBQWdCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHVCQUF1QixHQUFHLGdDQUFnQyxrQkFBa0IsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsY0FBYywwQkFBMEIsd0JBQXdCLGlCQUFpQixrQkFBa0IsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcs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YnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9pY29ucy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRyb2xzLFxcbi5zdGFydGVkIC5pbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdGFydGVkIC5jb250cm9scyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jb250cm9scyBkaXYgbGFiZWwge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY29udHJvbHMgPiAqLFxcbi5jb250cm9scyAuY29udHJvbCBpbnB1dCxcXG4uY29udHJvbHMgLmNvbnRyb2wgc2VsZWN0LFxcbi53cmFwcGVyIC5ncmFwaCxcXG4ud3JhcHBlciAuc2VxdWVuY2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi53cmFwcGVyLmdyYXBoIC5ncmFwaCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLndyYXBwZXIuc2VxdWVuY2VyIC5zZXF1ZW5jZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jb250cm9scy5wbGF5YWJsZSAucGxheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbnRyb2xzLnR5cGVzIC50eXBlcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wxaW4gLmNvbnRyb2w6bnRoLWNoaWxkKDMpLFxcbi5jb250cm9scy5jb250cm9sMXZhbCAuY29udHJvbDpudGgtY2hpbGQoMykge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb250cm9scy5jb250cm9sMWluICNjb250cm9sMWluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wxdmFsICNjb250cm9sMXZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sMmluIC5jb250cm9sOm50aC1jaGlsZCg0KSxcXG4uY29udHJvbHMuY29udHJvbDJ2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDQpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDJpbiAjY29udHJvbDJpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sMnZhbCAjY29udHJvbDJ2YWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDNpbiAuY29udHJvbDpudGgtY2hpbGQoNSksXFxuLmNvbnRyb2xzLmNvbnRyb2wzdmFsIC5jb250cm9sOm50aC1jaGlsZCg1KSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2wzaW4gI2NvbnRyb2wzaW4ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDN2YWwgI2NvbnRyb2wzdmFsIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w0aW4gLmNvbnRyb2w6bnRoLWNoaWxkKDYpLFxcbi5jb250cm9scy5jb250cm9sNHZhbCAuY29udHJvbDpudGgtY2hpbGQoNikge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb250cm9scy5jb250cm9sNGluICNjb250cm9sNGluIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmNvbnRyb2xzLmNvbnRyb2w0dmFsICNjb250cm9sNHZhbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNWluIC5jb250cm9sOm50aC1jaGlsZCg3KSxcXG4uY29udHJvbHMuY29udHJvbDV2YWwgLmNvbnRyb2w6bnRoLWNoaWxkKDcpIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29udHJvbHMuY29udHJvbDVpbiAjY29udHJvbDVpbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5jb250cm9scy5jb250cm9sNXZhbCAjY29udHJvbDV2YWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbmEuaG9tZSxcXG5hLnNvdXJjZUNvZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5OXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmEuaG9tZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzM2cHggLTMycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMzZweDtcXG4gIHRvcDogMnB4O1xcbn1cXG5cXG5hLnNvdXJjZUNvZGUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTczNnB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMzZweDtcXG4gIHRvcDogMnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW1tLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRhNWE3N2JjNWI4OWI4OWM5N2UyZWFmYTcwYWU0NTlkLnBuZ1wiOyIsImltcG9ydCBcIi4vanMvbW1tLmpzXCI7XG5pbXBvcnQgXCIuL2Nzcy9tbW0uY3NzXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbm5lY3RBdWRpbyhjYWxsYmFjaykge1xuICBjb25zdCBNRURJQV9DT05TVFJBSU5UUyA9IHtcbiAgICBhdWRpbzogdHJ1ZSxcbiAgICB2aWRlbzogZmFsc2VcbiAgfTtcblxuICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXNcbiAgICAgIC5nZXRVc2VyTWVkaWEoTUVESUFfQ09OU1RSQUlOVFMpXG4gICAgICAudGhlbihmdW5jdGlvbiAobWVkaWFTdHJlYW0pIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgbWVkaWFTdHJlYW0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICB9XG59O1xuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY29uc3QgZmlsbE9wdGlvbnMgPSByZXF1aXJlKFwiLi9maWxsLW9wdGlvbnNcIik7XG5cbmNvbnN0IHFzID0gaWQgPT4ge1xuICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaWQpO1xuICByZXR1cm4gbm9kZXMubGVuZ3RoID4gMSA/IG5vZGVzIDogbm9kZXNbMF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbm5lY3RMaXN0ZW5lcnMobW9kZWwpIHtcbiAgY29uc3QgeyBpdGVtcywgdHlwZXMsIGNvbm5lY3Rpb25zIH0gPSBtb2RlbDtcbiAgbGV0IGN1cnJlbnRJZHggPSBudWxsO1xuICBsZXQgY3VycmVudCA9IG51bGw7XG5cbiAgY29uc3Qgd3JhcHBlciA9IHFzKFwiLndyYXBwZXJcIik7XG4gIGNvbnN0IGNvbnRyb2xBcmVhID0gcXMoXCIuY29udHJvbHNcIik7XG4gIGNvbnN0IGxhYmVsID0gcXMoXCIjbmFtZVwiKTtcbiAgY29uc3QgcGxheSA9IHFzKFwiI3BsYXlcIik7XG4gIGNvbnN0IHR5cGVFbCA9IHFzKFwiI3R5cGVcIik7XG4gIGNvbnN0IGNvbnRyb2xWYWxFbHMgPSBxcyhcIi5jb250cm9scyAuY29udHJvbCBpbnB1dFwiKTtcbiAgY29uc3QgY29udHJvbEluRWxzID0gcXMoXCIuY29udHJvbHMgLmNvbnRyb2wgc2VsZWN0XCIpO1xuICBjb25zdCBjb252ZXJ0RWxzID0gcXMoXCIubm9kZXMgYnV0dG9uXCIpO1xuICBwbGF5LmNoZWNrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBjb25uZWN0KGluZGV4KSB7XG4gICAgY3VycmVudElkeCA9IGluZGV4O1xuICAgIGN1cnJlbnQgPSBpdGVtc1tpbmRleF07XG4gICAgbGFiZWwuaW5uZXJIVE1MID0gY3VycmVudC5sYWJlbCgpO1xuICAgIGNvbnN0IHsgcGxheWluZywgcGxheWFibGUgfSA9IGN1cnJlbnQ7XG5cbiAgICBsZXQgY2xhc3NlcyA9IFwiY29udHJvbHMgXCI7XG4gICAgaWYgKHBsYXlhYmxlKSB7XG4gICAgICBjbGFzc2VzICs9IFwicGxheWFibGUgXCI7XG4gICAgICBwbGF5LmNoZWNrZWQgPSBwbGF5aW5nO1xuICAgIH1cblxuICAgIGNvbnN0IHN1YnR5cGVzID0gY3VycmVudCAmJiBjdXJyZW50LnN1YnR5cGUoKS52YWx1ZXM7XG4gICAgaWYgKHN1YnR5cGVzICYmIHN1YnR5cGVzLmxlbmd0aCkge1xuICAgICAgY2xhc3NlcyArPSBcInR5cGVzIFwiO1xuICAgICAgdHlwZUVsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgZm9yIChsZXQgc3VidHlwZSBvZiBzdWJ0eXBlcykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgc3VidHlwZSk7XG4gICAgICAgIGlmIChzdWJ0eXBlID09PSBjdXJyZW50LnN1YnR5cGUoKS5nZXQoKSkge1xuICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24udGV4dCA9IHN1YnR5cGU7XG4gICAgICAgIHR5cGVFbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRyb2xzID0gY3VycmVudC5jb250cm9scygpO1xuICAgIGZvciAobGV0IGNJbmRleCA9IDA7IGNJbmRleCA8IGNvbnRyb2xzLmxlbmd0aDsgY0luZGV4KyspIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBjb250cm9sc1tjSW5kZXhdO1xuICAgICAgY2xhc3NlcyArPSBcImNvbnRyb2xcIiArIChjSW5kZXggKyAxKSArIGNvbnRyb2wudHlwZSArIFwiIFwiO1xuICAgICAgcXMoXCJsYWJlbFtmb3I9Y29udHJvbFwiICsgKGNJbmRleCArIDEpICsgXCJ2YWxdXCIpLmlubmVySFRNTCA9XG4gICAgICAgIGNvbnRyb2wubGFiZWwoKTtcblxuICAgICAgaWYgKGNvbnRyb2wudHlwZSA9PT0gXCJ2YWxcIikge1xuICAgICAgICBjb250cm9sVmFsRWxzW2NJbmRleF0udmFsdWUgPSBjb250cm9sLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsbE9wdGlvbnMoXG4gICAgICAgICAgY29udHJvbEluRWxzW2NJbmRleF0sXG4gICAgICAgICAgY29udHJvbC5nZXQoKSxcbiAgICAgICAgICBpdGVtc1xuICAgICAgICAgICAgLm1hcCh4ID0+IHguYXNPcHRpb24oKSlcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnZhbHVlICE9PSBpbmRleCAmJiB4LnR5cGUgIT09IGNvbnN0YW50cy5FTVBUWSksXG4gICAgICAgICAgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udHJvbEFyZWEuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgfVxuXG4gIHR5cGVFbC5vbmNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoY3VycmVudCkge1xuICAgICAgY3VycmVudC5zdWJ0eXBlKCkuc2V0KGV2dC50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvcHRpb25zID0gcXMoXCIub3B0aW9ucyBidXR0b25cIik7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBvcHRpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIG9wdGlvbnNbaW5kZXhdLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25uZWN0KGluZGV4KTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgd2luZG93R3JhcGggPSBxcyhcImJ1dHRvblt2YWx1ZT1ncmFwaF1cIik7XG4gIHdpbmRvd0dyYXBoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSBcIndyYXBwZXIgZ3JhcGhcIjtcbiAgfVxuXG4gIGNvbnN0IHdpbmRvd1NlcXVlbmNlciA9IHFzKFwiYnV0dG9uW3ZhbHVlPXNlcXVlbmNlcl1cIik7XG4gIHdpbmRvd1NlcXVlbmNlci5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJ3cmFwcGVyIHNlcXVlbmNlclwiO1xuICB9XG5cbiAgcGxheS5vbmNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICBjdXJyZW50LnBsYXkoZXZ0LnRhcmdldC5jaGVja2VkKTtcbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnRyb2xWYWxFbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29udHJvbFZhbEVsc1tpbmRleF0udmFsdWUgPSBudWxsO1xuICAgIGNvbnRyb2xWYWxFbHNbaW5kZXhdLm9uY2hhbmdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudC5jb250cm9scygpW2luZGV4XS5zZXQoZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb250cm9sSW5FbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29udHJvbEluRWxzW2luZGV4XS5vbmNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnQuY29udHJvbHMoKVtpbmRleF0uc2V0KHBhcnNlSW50KGV2dC50YXJnZXQudmFsdWUpKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbnZlcnRFbHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29udmVydEVsc1tpbmRleF0ub25jbGljayA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IGxhc3RDb250cm9sID0gaXRlbXNbY3VycmVudElkeF07XG4gICAgICAgIGNvbnN0IG5ld0NvbnRyb2wgPSB0eXBlc1tldnQudGFyZ2V0LnZhbHVlXShjdXJyZW50SWR4KTtcbiAgICAgICAgbGFzdENvbnRyb2wuc2V0VmFsdWVzVG8obmV3Q29udHJvbCk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudENvbm5lY3Rpb25zID0gbW9kZWwuY29ubmVjdGlvbnNbY3VycmVudElkeF07XG4gICAgICAgIE9iamVjdC5rZXlzKGN1cnJlbnRDb25uZWN0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGxhc3RDb250cm9sLmNvbm5lY3RvcigpLmNvbm5lY3QoY3VycmVudENvbm5lY3Rpb25zW2tleV0pO1xuICAgICAgICAgIG5ld0NvbnRyb2wuY29ubmVjdG9yKCkuY29ubmVjdChjdXJyZW50Q29ubmVjdGlvbnNba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhc3RDb250cm9sLmRlc3Ryb3koKTtcbiAgICAgICAgaXRlbXNbY3VycmVudElkeF0gPSBuZXdDb250cm9sO1xuICAgICAgICBjb25uZWN0KGN1cnJlbnRJZHgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgREVMQVk6IFwiZGVsYXlcIixcbiAgRUNITzogXCJlY2hvXCIsXG4gIEVNUFRZOiBcImVtcHR5XCIsXG4gIEZJTFRFUjogXCJmaWx0ZXJcIixcbiAgR0FJTjogXCJnYWluXCIsXG4gIE1JQ1JPUEhPTkU6IFwibWljcm9waG9uZVwiLFxuICBPU0NJTExBVE9SOiBcIm9zY2lsbGF0b3JcIlxufTtcbiIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbmNvbnN0IGNyZWF0ZU1pY3JvcGhvbmUgPSByZXF1aXJlKFwiLi9ub2Rlcy9jcmVhdGUtbWljcm9waG9uZVwiKTtcbmNvbnN0IGNyZWF0ZU9zY2lsbGF0b3IgPSByZXF1aXJlKFwiLi9ub2Rlcy9jcmVhdGUtb3NjaWxsYXRvclwiKTtcbmNvbnN0IGNyZWF0ZUZpbHRlciA9IHJlcXVpcmUoXCIuL25vZGVzL2NyZWF0ZS1maWx0ZXJcIik7XG5jb25zdCBjcmVhdGVEZWxheSA9IHJlcXVpcmUoXCIuL25vZGVzL2NyZWF0ZS1kZWxheVwiKTtcbmNvbnN0IGNyZWF0ZUVjaG8gPSByZXF1aXJlKFwiLi9ub2Rlcy9jcmVhdGUtZWNob1wiKTtcbmNvbnN0IGNyZWF0ZUdhaW4gPSByZXF1aXJlKFwiLi9ub2Rlcy9jcmVhdGUtZ2FpblwiKTtcbmNvbnN0IE5vZGUgPSByZXF1aXJlKFwiLi9ub2Rlcy9Ob2RlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKHN0cmVhbSkge1xuICBjb25zdCBhdWRpb0N0eCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICBjb25zdCBpdGVtcyA9IG5ldyBBcnJheSgxMCk7XG4gIGNvbnN0IGNvbm5lY3Rpb25zID0gbmV3IEFycmF5KDEwKS5maWxsKDApLm1hcCh4ID0+ICh7fSkpO1xuICBjb25zdCB0eXBlcyA9IHt9O1xuICBjb25zdCBtb2RlbCA9IHtcbiAgICBpdGVtcyxcbiAgICB0eXBlcyxcbiAgICBjb25uZWN0aW9uc1xuICB9O1xuICB0eXBlcy5vc2NpbGxhdG9yID0gY3JlYXRlT3NjaWxsYXRvcihhdWRpb0N0eCwgbW9kZWwpO1xuICB0eXBlcy5maWx0ZXIgPSBjcmVhdGVGaWx0ZXIoYXVkaW9DdHgsIG1vZGVsKTtcbiAgdHlwZXMuZGVsYXkgPSBjcmVhdGVEZWxheShhdWRpb0N0eCwgbW9kZWwpO1xuICB0eXBlcy5lY2hvID0gY3JlYXRlRWNobyhhdWRpb0N0eCwgbW9kZWwpO1xuICB0eXBlcy5nYWluID0gY3JlYXRlR2FpbihhdWRpb0N0eCwgbW9kZWwpO1xuXG4gIGl0ZW1zWzBdID0gY3JlYXRlTWljcm9waG9uZShhdWRpb0N0eCwgbW9kZWwsIDAsIHN0cmVhbSk7XG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuICAgIGl0ZW1zW2luZGV4XSA9IG5ldyBOb2RlKGF1ZGlvQ3R4LCBtb2RlbCwgaW5kZXgsIGNvbnN0YW50cy5FTVBUWSwgZmFsc2UpO1xuICB9XG5cbiAgLy8gZm9yIGRpYWdub3N0aWNzXG4gIHdpbmRvdy5tb2RlbCA9IG1vZGVsO1xuXG4gIHJldHVybiBtb2RlbDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlbGVjdEVsLCBjdXJyZW50VmFsLCBpdGVtcywgaW5jbHVkZUVtcHR5KSB7XHJcbiAgc2VsZWN0RWwucmVwbGFjZUNoaWxkcmVuKCk7XHJcblxyXG4gIGlmIChpbmNsdWRlRW1wdHkpIHtcclxuICAgIGNvbnN0IHVuc2VsZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgdW5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcclxuICAgIHVuc2VsZWN0ZWQudGV4dCA9IFwiLVwiO1xyXG4gICAgaWYgKGN1cnJlbnRWYWwgPT09IG51bGwgfHwgY3VycmVudFZhbCA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRWYWwgPT09IFwiXCIpIHtcclxuICAgICAgdW5zZWxlY3RlZC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEVsLmFwcGVuZENoaWxkKHVuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgbGFiZWwgfSA9IGl0ZW1zW2luZGV4XTtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpO1xyXG4gICAgb3B0aW9uLnRleHQgPSBsYWJlbDtcclxuICAgIGlmIChjdXJyZW50VmFsID09PSB2YWx1ZSkge1xyXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBjb25uZWN0QXVkaW8gPSByZXF1aXJlKFwiLi9jb25uZWN0LWF1ZGlvXCIpO1xuY29uc3QgY29ubmVjdExpc3RlbmVycyA9IHJlcXVpcmUoXCIuL2Nvbm5lY3QtbGlzdGVuZXJzXCIpO1xuY29uc3QgY3JlYXRlTW9kZWwgPSByZXF1aXJlKFwiLi9jcmVhdGUtbW9kZWxcIik7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbm5lY3RBdWRpbyhmdW5jdGlvbiAoZXJyLCBhdWRpbykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpLmlubmVySFRNTCA9XG4gICAgICAvLyAgXCJGYWlsZWQgdG8gY29ubmVjdCB0byBhdWRpbzogXCIgKyBlcnIubWVzc2FnZTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gXCJzdGFydGVkXCI7XG4gICAgICBjb25zdCBtb2RlbCA9IGNyZWF0ZU1vZGVsKGF1ZGlvKTtcbiAgICAgIGNvbm5lY3RMaXN0ZW5lcnMobW9kZWwpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgbW9kZWwsIGlkeCwgdHlwZSwgcGxheWFibGUpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5pZHggPSBpZHg7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBsYXlhYmxlID0gcGxheWFibGU7XG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbm5lY3QoKSB7fSxcbiAgICAgIGRpc2Nvbm5lY3QoKSB7fVxuICAgIH07XG4gIH1cblxuICBkaXNjb25uZWN0T3RoZXJGcm9tUGFyYW0ob3RoZXJJZHgsIHBhcmFtLCBrZXkpIHtcbiAgICBpZiAob3RoZXJJZHggPj0gMCkge1xuICAgICAgdGhpcy5tb2RlbC5pdGVtc1tvdGhlcklkeF0uY29ubmVjdG9yKCkuZGlzY29ubmVjdChwYXJhbSk7XG4gICAgICBkZWxldGUgdGhpcy5tb2RlbC5jb25uZWN0aW9uc1t0aGlzLmlkeF1bYCR7dGhpcy5pZHh9XyR7a2V5fWBdO1xuICAgIH1cbiAgfVxuXG4gIGNvbm5lY3RPdGhlclRvUGFyYW0ob3RoZXJJZHgsIHBhcmFtLCBrZXkpIHtcbiAgICBpZiAob3RoZXJJZHggPj0gMCkge1xuICAgICAgdGhpcy5tb2RlbC5pdGVtc1tvdGhlcklkeF0uY29ubmVjdG9yKCkuY29ubmVjdChwYXJhbSk7XG4gICAgICB0aGlzLm1vZGVsLmNvbm5lY3Rpb25zW3RoaXMuaWR4XVtgJHtvdGhlcklkeH1fJHtrZXl9YF0gPSBwYXJhbTtcbiAgICB9XG4gIH1cblxuICByZXBsYWNlT3RoZXJPblBhcmFtKG9sZElkeCwgbmV3SWR4LCBwYXJhbSwga2V5KSB7XG4gICAgdGhpcy5kaXNjb25uZWN0T3RoZXJGcm9tUGFyYW0ob2xkSWR4LCBwYXJhbSwga2V5KTtcbiAgICB0aGlzLmNvbm5lY3RPdGhlclRvUGFyYW0obmV3SWR4LCBwYXJhbSwga2V5KTtcbiAgfVxuXG4gIHBsYXkoYm9vbCkge1xuICAgIGlmIChib29sKSB7XG4gICAgICB0aGlzLmNvbm5lY3RvcigpLmNvbm5lY3QodGhpcy5jdHguZGVzdGluYXRpb24pO1xuICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25uZWN0b3IoKS5kaXNjb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTtcbiAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN1YnR5cGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlczogbnVsbCxcbiAgICAgIHNldCh2YWwpIHt9LFxuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbGFiZWwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuaWR4fSAke3RoaXMudHlwZX0gJHt0aGlzLnN1YnR5cGUoKS5nZXQoKX1gO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgc2V0VmFsdWVzVG8obmV3Tm9kZSkge1xuICAgIGNvbnN0IGxhc3RDb250cm9scyA9IHRoaXMuY29udHJvbHMoKSB8fCBbXTtcbiAgICBjb25zdCBuZXdDb250cm9scyA9IG5ld05vZGUuY29udHJvbHMoKSB8fCBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGFzdENvbnRyb2xzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKCFuZXdDb250cm9sc1tpbmRleF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGxhc3RDb250cm9sc1tpbmRleF0udHlwZSA9PT0gbmV3Q29udHJvbHNbaW5kZXhdLnR5cGUpIHtcbiAgICAgICAgbmV3Q29udHJvbHNbaW5kZXhdLnNldChsYXN0Q29udHJvbHNbaW5kZXhdLmdldCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGxheShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXNPcHRpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLmlkeCxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsKCksXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGU7XG4iLCJjb25zdCBOb2RlID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcclxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcclxuXHJcbmNsYXNzIERlbGF5IGV4dGVuZHMgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XHJcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5ERUxBWSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmRlbGF5ID0gY3R4LmNyZWF0ZURlbGF5KCk7XHJcblxyXG4gICAgdGhpcy5fY29udHJvbHMgPSB0aGlzLmluaXRDb250cm9scygpO1xyXG4gICAgdGhpcy5fY29udHJvbHNbMF0uc2V0KDEwMDApO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVsYXk7XHJcbiAgfVxyXG5cclxuICBjb250cm9scygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250cm9scztcclxuICB9XHJcblxyXG4gIGluaXRDb250cm9scygpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidmFsXCIsXHJcbiAgICAgICAgbGFiZWwoKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJUaW1lIChtcylcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgIHRoYXQuZGVsYXlUaW1lVmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICB0aGF0LmRlbGF5LmRlbGF5VGltZS5zZXRUYXJnZXRBdFRpbWUodmFsLCAwLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0LmRlbGF5VGltZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiaW5cIixcclxuICAgICAgICBsYWJlbCgpIHtcclxuICAgICAgICAgIHJldHVybiBcIklucHV0XCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXHJcbiAgICAgICAgICAgIHRoYXQuaW5wdXRDb25uZWN0VmFsdWUsXHJcbiAgICAgICAgICAgIHZhbCxcclxuICAgICAgICAgICAgdGhhdC5kZWxheSxcclxuICAgICAgICAgICAgXCJpbnB1dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhhdC5pbnB1dENvbm5lY3RWYWx1ZSA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldCgpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0LmlucHV0Q29ubmVjdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbW9kZWwpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGlkeCkge1xyXG4gICAgY29uc3QgbGFzdCA9IG1vZGVsLml0ZW1zW2lkeF07XHJcbiAgICBpZiAoW2NvbnN0YW50cy5ERUxBWSwgY29uc3RhbnRzLk1JQ1JPUEhPTkVdLmluY2x1ZGVzKGxhc3QudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IERlbGF5KGN0eCwgbW9kZWwsIGlkeCk7XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XHJcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XHJcblxyXG5jbGFzcyBFY2hvIGV4dGVuZHMgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XHJcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5FQ0hPLCB0cnVlKTtcclxuICAgIHRoaXMuZGVsYXkgPSBjdHguY3JlYXRlRGVsYXkoKTtcclxuICAgIHRoaXMuZ2FpbiA9IGN0eC5jcmVhdGVHYWluKCk7XHJcblxyXG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZ2Fpbik7XHJcbiAgICB0aGlzLmdhaW4uY29ubmVjdCh0aGlzLmRlbGF5KTtcclxuICAgIHRoaXMuX2NvbnRyb2xzID0gdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICAgIHRoaXMuX2NvbnRyb2xzWzBdLnNldCgxMDAwKTtcclxuICAgIHRoaXMuX2NvbnRyb2xzWzFdLnNldCgwLjUpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2FpbjtcclxuICB9XHJcblxyXG4gIGNvbnRyb2xzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xzO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbnRyb2xzKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcclxuICAgICAgICBsYWJlbCgpIHtcclxuICAgICAgICAgIHJldHVybiBcIlRpbWUgKG1zKVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgdGhhdC5kZWxheVRpbWVWYWx1ZSA9IHZhbDtcclxuICAgICAgICAgIHRoYXQuZGVsYXkuZGVsYXlUaW1lLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuZGVsYXlUaW1lVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcclxuICAgICAgICBsYWJlbCgpIHtcclxuICAgICAgICAgIHJldHVybiBcIlN1c3RhaW5cIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgIHRoYXQuZ2FpblZhbHVlID0gdmFsO1xyXG4gICAgICAgICAgdGhhdC5nYWluLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHZhbCwgMCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhhdC5nYWluVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJpblwiLFxyXG4gICAgICAgIGxhYmVsKCkge1xyXG4gICAgICAgICAgcmV0dXJuIFwiSW5wdXRcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgIHRoYXQucmVwbGFjZU90aGVyT25QYXJhbShcclxuICAgICAgICAgICAgdGhhdC5pbnB1dENvbm5lY3RWYWx1ZSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICB0aGF0LmRlbGF5LFxyXG4gICAgICAgICAgICBcImlucHV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuaW5wdXRDb25uZWN0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaWR4KSB7XHJcbiAgICBjb25zdCBsYXN0ID0gbW9kZWwuaXRlbXNbaWR4XTtcclxuICAgIGlmIChbY29uc3RhbnRzLkVDSE8sIGNvbnN0YW50cy5NSUNST1BIT05FXS5pbmNsdWRlcyhsYXN0LnR5cGUpKSB7XHJcbiAgICAgIHJldHVybiBsYXN0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBFY2hvKGN0eCwgbW9kZWwsIGlkeCk7XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4KSB7XG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCBjb25zdGFudHMuRklMVEVSLCB0cnVlKTtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5maWx0ZXIgPSBjdHguY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG4gICAgdGhpcy5maWx0ZXIudHlwZSA9IFwibG93cGFzc1wiO1xuXG4gICAgdGhpcy5fY29udHJvbHMgPSB0aGlzLmluaXRDb250cm9scygpO1xuICAgIHRoaXMuX2NvbnRyb2xzWzBdLnNldCgxMDApO1xuICAgIHRoaXMuX2NvbnRyb2xzWzJdLnNldCgwLjcwNyk7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyO1xuICB9XG5cbiAgc3VidHlwZSgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWVzOiBbXCJsb3dwYXNzXCIsIFwiaGlnaHBhc3NcIiwgXCJiYW5kcGFzc1wiLCBcIm5vdGNoXCJdLFxuICAgICAgc2V0KHZhbCkge1xuICAgICAgICB0aGF0LmZpbHRlci50eXBlID0gdmFsO1xuICAgICAgfSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQuZmlsdGVyLnR5cGU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZGlzY29ubmVjdE90aGVyRnJvbVBhcmFtKHRoaXMuZnJlcUNvbm5lY3RWYWx1ZSwgdGhpcy5maWx0ZXIuZnJlcXVlbmN5KTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLnFDb25uZWN0VmFsdWUsIHRoaXMuZmlsdGVyLlEpO1xuICB9XG5cbiAgY29udHJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xzO1xuICB9XG5cbiAgaW5pdENvbnRyb2xzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidmFsXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIkZyZXFcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQuZnJlcVZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoYXQuZmlsdGVyLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUodmFsLCAwLCAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LmZyZXFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJpblwiLFxuICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICByZXR1cm4gXCJGcmVxIE1vZFwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxuICAgICAgICAgICAgdGhhdC5mcmVxQ29ubmVjdFZhbHVlLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgdGhhdC5maWx0ZXIuZnJlcXVlbmN5LFxuICAgICAgICAgICAgXCJmcmVxQ29ubmVjdFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGF0LmZyZXFDb25uZWN0VmFsdWUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5mcmVxQ29ubmVjdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcInZhbFwiLFxuICAgICAgICBsYWJlbCgpIHtcbiAgICAgICAgICByZXR1cm4gXCJRXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnFWYWx1ZSA9IHZhbDtcbiAgICAgICAgICB0aGF0LmZpbHRlci5RLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQucVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImluXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIlEgTW9kXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXG4gICAgICAgICAgICB0aGF0LnFDb25uZWN0VmFsdWUsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICB0aGF0LmZpbHRlci5RLFxuICAgICAgICAgICAgXCJxQ29ubmVjdFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGF0LnFDb25uZWN0VmFsdWUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5xQ29ubmVjdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImluXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIklucHV0XCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXG4gICAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgdGhhdC5maWx0ZXIsXG4gICAgICAgICAgICBcImlucHV0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoYXQuaW5wdXRDb25uZWN0VmFsdWUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5pbnB1dENvbm5lY3RWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3R4LCBtb2RlbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGlkeCkge1xuICAgIGNvbnN0IGxhc3QgPSBtb2RlbC5pdGVtc1tpZHhdO1xuICAgIGlmIChbY29uc3RhbnRzLkZJTFRFUiwgY29uc3RhbnRzLk1JQ1JPUEhPTkVdLmluY2x1ZGVzKGxhc3QudHlwZSkpIHtcbiAgICAgIHJldHVybiBsYXN0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZpbHRlcihjdHgsIG1vZGVsLCBpZHgpO1xuICB9O1xufTtcbiIsImNvbnN0IE5vZGUgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xyXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xyXG5cclxuY2xhc3MgR2FpbiBleHRlbmRzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgbW9kZWwsIGlkeCkge1xyXG4gICAgc3VwZXIoY3R4LCBtb2RlbCwgaWR4LCBjb25zdGFudHMuR0FJTiwgdHJ1ZSk7XHJcbiAgICB0aGlzLmdhaW4gPSBjdHguY3JlYXRlR2FpbigpO1xyXG5cclxuICAgIHRoaXMuX2NvbnRyb2xzID0gdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICAgIHRoaXMuX2NvbnRyb2xzWzBdLnNldCgxKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RvcigpIHtcclxuICAgIHJldHVybiB0aGlzLmdhaW47XHJcbiAgfVxyXG5cclxuICBjb250cm9scygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250cm9scztcclxuICB9XHJcblxyXG4gIGluaXRDb250cm9scygpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidmFsXCIsXHJcbiAgICAgICAgbGFiZWwoKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJHYWluXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICB0aGF0LmdhaW5WYWx1ZSA9IHZhbDtcclxuICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiaW5cIixcclxuICAgICAgICBsYWJlbCgpIHtcclxuICAgICAgICAgIHJldHVybiBcIkdhaW4gTW9kXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXHJcbiAgICAgICAgICAgIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZSxcclxuICAgICAgICAgICAgdmFsLFxyXG4gICAgICAgICAgICB0aGF0LmdhaW4uZ2FpbixcclxuICAgICAgICAgICAgXCJnYWluQ29ubmVjdFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhhdC5nYWluQ29ubmVjdFZhbHVlID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImluXCIsXHJcbiAgICAgICAgbGFiZWwoKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJJbnB1dFwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgdGhhdC5yZXBsYWNlT3RoZXJPblBhcmFtKFxyXG4gICAgICAgICAgICB0aGF0LmlucHV0Q29ubmVjdFZhbHVlLFxyXG4gICAgICAgICAgICB2YWwsXHJcbiAgICAgICAgICAgIHRoYXQuZGVsYXksXHJcbiAgICAgICAgICAgIFwiaW5wdXRcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoYXQuaW5wdXRDb25uZWN0VmFsdWUgPSB2YWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhhdC5pbnB1dENvbm5lY3RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgsIG1vZGVsKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZHgpIHtcclxuICAgIGNvbnN0IGxhc3QgPSBtb2RlbC5pdGVtc1tpZHhdO1xyXG4gICAgaWYgKFtjb25zdGFudHMuR0FJTiwgY29uc3RhbnRzLk1JQ1JPUEhPTkVdLmluY2x1ZGVzKGxhc3QudHlwZSkpIHtcclxuICAgICAgcmV0dXJuIGxhc3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEdhaW4oY3R4LCBtb2RlbCwgaWR4KTtcclxuICB9O1xyXG59O1xyXG4iLCJjb25zdCBOb2RlID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbmNsYXNzIE1pY3JvcGhvbmUgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoY3R4LCBtb2RlbCwgaWR4LCBzdHJlYW0pIHtcbiAgICBzdXBlcihjdHgsIG1vZGVsLCBpZHgsIGNvbnN0YW50cy5NSUNST1BIT05FLCBmYWxzZSk7XG4gICAgdGhpcy5pbnB1dCA9IGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuICAgIHRoaXMuZ2FpbiA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5pbnB1dC5jb25uZWN0KHRoaXMuZ2Fpbik7XG4gIH1cblxuICBjb25uZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FpbjtcbiAgfVxuXG4gIGNvbnRyb2xzKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidmFsXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIkdhaW5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQuZ2FpblZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGN0eCwgbW9kZWwsIGlkeCwgc3RyZWFtKSB7XG4gIHJldHVybiBuZXcgTWljcm9waG9uZShjdHgsIG1vZGVsLCBpZHgsIHN0cmVhbSk7XG59O1xuIiwiY29uc3QgTm9kZSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5jbGFzcyBPc2NpbGxhdG9yIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgbW9kZWwsIGlkeCkge1xuICAgIHN1cGVyKGN0eCwgbW9kZWwsIGlkeCwgY29uc3RhbnRzLk9TQ0lMTEFUT1IsIHRydWUpO1xuICAgIHRoaXMub3NjID0gY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLmdhaW4gPSBjdHguY3JlYXRlR2FpbigpO1xuICAgIHRoaXMub3NjLnR5cGUgPSBcInNpbmVcIjtcbiAgICB0aGlzLm9zYy5jb25uZWN0KHRoaXMuZ2Fpbik7XG4gICAgdGhpcy5vc2Muc3RhcnQoMCk7XG5cbiAgICB0aGlzLl9jb250cm9scyA9IHRoaXMuaW5pdENvbnRyb2xzKCk7XG4gICAgdGhpcy5fY29udHJvbHNbMF0uc2V0KDEwMCk7XG4gICAgdGhpcy5fY29udHJvbHNbMl0uc2V0KDEpO1xuICB9XG5cbiAgY29ubmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmdhaW47XG4gIH1cblxuICBzdWJ0eXBlKCkge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZXM6IFtcInNhd3Rvb3RoXCIsIFwic2luZVwiLCBcInNxdWFyZVwiLCBcInRyaWFuZ2xlXCJdLFxuICAgICAgc2V0KHZhbCkge1xuICAgICAgICB0aGF0Lm9zYy50eXBlID0gdmFsO1xuICAgICAgfSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQub3NjLnR5cGU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZGlzY29ubmVjdE90aGVyRnJvbVBhcmFtKHRoaXMuZnJlcUNvbm5lY3RWYWx1ZSwgdGhpcy5vc2MuZnJlcXVlbmN5KTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RPdGhlckZyb21QYXJhbSh0aGlzLmdhaW5Db25uZWN0VmFsdWUsIHRoaXMuZ2Fpbi5nYWluKTtcbiAgICB0aGlzLm9zYy5zdG9wKCk7XG4gIH1cblxuICBjb250cm9scygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbHM7XG4gIH1cblxuICBpbml0Q29udHJvbHMoKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ2YWxcIixcbiAgICAgICAgbGFiZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIFwiRnJlcVwiO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsKSB7XG4gICAgICAgICAgdGhhdC5mcmVxVmFsdWUgPSB2YWw7XG4gICAgICAgICAgdGhhdC5vc2MuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZnJlcVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImluXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIkZyZXEgTW9kXCI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWwpIHtcbiAgICAgICAgICB0aGF0LnJlcGxhY2VPdGhlck9uUGFyYW0oXG4gICAgICAgICAgICB0aGF0LmZyZXFDb25uZWN0VmFsdWUsXG4gICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICB0aGF0Lm9zYy5mcmVxdWVuY3ksXG4gICAgICAgICAgICBcImZyZXFDb25uZWN0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoYXQuZnJlcUNvbm5lY3RWYWx1ZSA9IHZhbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGF0LmZyZXFDb25uZWN0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwidmFsXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIkdhaW5cIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQuZ2FpblZhbHVlID0gdmFsO1xuICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLnNldFRhcmdldEF0VGltZSh2YWwsIDAsIDApO1xuICAgICAgICB9LFxuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuZ2FpblZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcImluXCIsXG4gICAgICAgIGxhYmVsKCkge1xuICAgICAgICAgIHJldHVybiBcIkFtcCBNb2RcIjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KHZhbCkge1xuICAgICAgICAgIHRoYXQucmVwbGFjZU90aGVyT25QYXJhbShcbiAgICAgICAgICAgIHRoYXQuZ2FpbkNvbm5lY3RWYWx1ZSxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIHRoYXQuZ2Fpbi5nYWluLFxuICAgICAgICAgICAgXCJnYWluQ29ubmVjdFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGF0LmdhaW5Db25uZWN0VmFsdWUgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5nYWluQ29ubmVjdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgsIG1vZGVsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaWR4KSB7XG4gICAgY29uc3QgbGFzdCA9IG1vZGVsLml0ZW1zW2lkeF07XG4gICAgaWYgKFtjb25zdGFudHMuT1NDSUxMQVRPUiwgY29uc3RhbnRzLk1JQ1JPUEhPTkVdLmluY2x1ZGVzKGxhc3QudHlwZSkpIHtcbiAgICAgIHJldHVybiBsYXN0O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9zY2lsbGF0b3IoY3R4LCBtb2RlbCwgaWR4KTtcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9