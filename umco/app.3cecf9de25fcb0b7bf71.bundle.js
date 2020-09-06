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

/***/ "./node_modules/colorsys/colorsys.js":
/*!*******************************************!*\
  !*** ./node_modules/colorsys/colorsys.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


const RGB_MAX = 255
const HUE_MAX = 360
const SV_MAX = 100

var colorsys = module.exports = {}

colorsys.rgb2Hsl = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }
  // It converts [0,255] format, to [0,1]
  r = (r === RGB_MAX) ? 1 : (r % RGB_MAX / parseFloat(RGB_MAX))
  g = (g === RGB_MAX) ? 1 : (g % RGB_MAX / parseFloat(RGB_MAX))
  b = (b === RGB_MAX) ? 1 : (b % RGB_MAX / parseFloat(RGB_MAX))

  var max = Math.max(r, g, b)
  var min = Math.min(r, g, b)
  var h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.round(h * HUE_MAX),
    s: Math.round(s * SV_MAX),
    l: Math.round(l * SV_MAX)
  }
}

colorsys.rgb_to_hsl = colorsys.rgbToHsl = colorsys.rgb2Hsl

colorsys.rgb2Hsv = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }

  // It converts [0,255] format, to [0,1]
  r = (r === RGB_MAX) ? 1 : (r % RGB_MAX / parseFloat(RGB_MAX))
  g = (g === RGB_MAX) ? 1 : (g % RGB_MAX / parseFloat(RGB_MAX))
  b = (b === RGB_MAX) ? 1 : (b % RGB_MAX / parseFloat(RGB_MAX))

  var max = Math.max(r, g, b)
  var min = Math.min(r, g, b)
  var h, s, v = max

  var d = max - min

  s = max === 0 ? 0 : d / max

  if (max === min) {
    h = 0 // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.round(h * HUE_MAX),
    s: Math.round(s * SV_MAX),
    v: Math.round(v * SV_MAX)
  }
}

colorsys.rgb_to_hsv = colorsys.rgbToHsv = colorsys.rgb2Hsv

colorsys.hsl2Rgb = function (h, s, l) {
  if (typeof h === 'object') {
    const args = h
    h = args.h; s = args.s; l = args.l;
  }

  var r, g, b

  h = _normalizeAngle(h)
  h = (h === HUE_MAX) ? 1 : (h % HUE_MAX / parseFloat(HUE_MAX))
  s = (s === SV_MAX) ? 1 : (s % SV_MAX / parseFloat(SV_MAX))
  l = (l === SV_MAX) ? 1 : (l % SV_MAX / parseFloat(SV_MAX))

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = _hue2Rgb(p, q, h + 1 / 3)
    g = _hue2Rgb(p, q, h)
    b = _hue2Rgb(p, q, h - 1 / 3)
  }

  return {
    r: Math.round(r * RGB_MAX),
    g: Math.round(g * RGB_MAX),
    b: Math.round(b * RGB_MAX),
  }
}

colorsys.hsl_to_rgb = colorsys.hslToRgb = colorsys.hsl2Rgb

colorsys.hsv2Rgb = function (h, s, v) {
  if (typeof h === 'object') {
    const args = h
    h = args.h; s = args.s; v = args.v;
  }

  h = _normalizeAngle(h)
  h = (h === HUE_MAX) ? 1 : (h % HUE_MAX / parseFloat(HUE_MAX) * 6)
  s = (s === SV_MAX) ? 1 : (s % SV_MAX / parseFloat(SV_MAX))
  v = (v === SV_MAX) ? 1 : (v % SV_MAX / parseFloat(SV_MAX))

  var i = Math.floor(h)
  var f = h - i
  var p = v * (1 - s)
  var q = v * (1 - f * s)
  var t = v * (1 - (1 - f) * s)
  var mod = i % 6
  var r = [v, q, p, p, t, v][mod]
  var g = [t, v, v, q, p, p][mod]
  var b = [p, p, t, v, v, q][mod]

  return {
    r: Math.floor(r * RGB_MAX),
    g: Math.floor(g * RGB_MAX),
    b: Math.floor(b * RGB_MAX),
  }
}

colorsys.hsv_to_rgb = colorsys.hsv2Rgb
colorsys.hsvToRgb = colorsys.hsv2Rgb

colorsys.rgb2Hex = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }
  r = Math.round(r).toString(16)
  g = Math.round(g).toString(16)
  b = Math.round(b).toString(16)

  r = r.length === 1 ? '0' + r : r
  g = g.length === 1 ? '0' + g : g
  b = b.length === 1 ? '0' + b : b

  return '#' + r + g + b
}

colorsys.rgb_to_hex = colorsys.rgbToHex = colorsys.rgb2Hex

colorsys.hex2Rgb = function (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

colorsys.hex_to_rgb = colorsys.hexToRgb = colorsys.hex2Rgb

colorsys.hsv2Hex = function (h, s, v) {
  var rgb = colorsys.hsv2Rgb(h, s, v)
  return colorsys.rgb2Hex(rgb.r, rgb.g, rgb.b)
}

colorsys.hsv_to_hex = colorsys.hsv2Hex
colorsys.hsvToHex = colorsys.hsv2Hex

colorsys.hex2Hsv = function (hex) {
  var rgb = colorsys.hex2Rgb(hex)
  return colorsys.rgb2Hsv(rgb.r, rgb.g, rgb.b)
}

colorsys.hex_to_hsv = colorsys.hexToHsv = colorsys.hex2Hsv

colorsys.hsl2Hex = function (h, s, l) {
  var rgb = colorsys.hsl2Rgb(h, s, l)
  return colorsys.rgb2Hex(rgb.r, rgb.g, rgb.b)
}

colorsys.hsl_to_hex = colorsys.hslToHex = colorsys.hsl2Hex

colorsys.hex2Hsl = function (hex) {
  var rgb = colorsys.hex2Rgb(hex)
  return colorsys.rgb2Hsl(rgb.r, rgb.g, rgb.b)
}

colorsys.hex_to_hsl = colorsys.hexToHsl = colorsys.hex2Hsl

colorsys.rgb2Cmyk = function (r, g, b) {
  if (typeof r === 'object') {
    const args = r
    r = args.r; g = args.g; b = args.b;
  }

  var rprim = r / 255
  var gprim = g / 255
  var bprim = b / 255

  var k = 1 - Math.max(rprim, gprim, bprim)

  var c = (1 - rprim - k) / (1 - k)
  var m = (1 - gprim - k) / (1 - k)
  var y = (1 - bprim - k) / (1 - k)

  return {
    c: c.toFixed(3),
    m: m.toFixed(3),
    y: y.toFixed(3),
    k: k.toFixed(3)
  }
}

colorsys.rgb_to_cmyk = colorsys.rgbToCmyk = colorsys.rgb2Cmyk

colorsys.cmyk2Rgb = function (c, m, y, k) {
  if (typeof c === 'object') {
    const args = c
    c = args.c; m = args.m; y = args.y; k = args.k;
  }

  var r = 255 * (1 - c) * (1 - k)
  var g = 255 * (1 - m) * (1 - k)
  var b = 255 * (1 - y) * (1 - k)

  return {
    r: Math.floor(r),
    g: Math.floor(g),
    b: Math.floor(b)
  }
}

colorsys.cmyk_to_rgb = colorsys.cmykToRgb = colorsys.cmyk2Rgb

colorsys.hsv2Hsl = function (h, s, v) {
  if (typeof h === 'object') {
    const args = h
    h = args.h; s = args.s; v = args.v;
  }

  var l = (2 - s) * v / 2

  if (l !== 0) {
    if (l === SV_MAX) {
      s = 0
    } else if (l < SV_MAX / 2) {
      s = s * v / (l * 2)
    } else {
      s = s * v / (2 - l * 2)
    }
  }

  return { h: h, s: s, l: l }
}

colorsys.hsv_to_hsl = colorsys.hsvToHsl = colorsys.hsv2Hsl

colorsys.hsl2Hsv = function (h, s, l) {
  if (typeof h === 'object') {
    const args = h
    h = args.h; s = args.s; l = args.l;
  }

  s = s * (l < 50 ? l : (100 - l))

  return {
    h: h,
    s: Math.floor(2 * s / (l + s)),
    v: Math.floor(l + s),
  }
}

colorsys.hsl_to_hsv = colorsys.hslToHsv = colorsys.hsl2Hsv

/**
* Parses values from a string into a javascript object
* e.g: hsla(140, 30%, 40%, .5) => { h: 140, s: 30, l: 40, alpha: 0.5}
*/
colorsys.parseCss = function (cssString) {
  if (cssString.indexOf('#') > -1) {
    return colorsys.hex2Rgb(cssString)
  }

  const prefix = cssString.split('(')[0]
  const args = cssString.split('(')[1].split(')')[0].split(',')

  // Use the prefix as an array [r, g, b, a] to parse the colours
  return prefix.split('').reduce(function (color, param, idx) {
    const nextColor = color
    nextColor[param] = parseFloat(args[idx])
    return nextColor
  }, {})
}

colorsys.parse_css = colorsys.parseCss

colorsys.stringify = function (obj) {
  const prefix = Object.keys(obj).join('')
  const values = Object.keys(obj).map(function (key) {
    var val = obj[key]
    if (key === 's' || key === 'v' || key === 'l') {
      val = val + '%'
    }
    return val
  })
  return prefix + '(' + values.join(', ') + ')'
}

// Google Assistant API uses this format in SmartHome Apps. Example => "spectrumRGB": 16711680
colorsys.hex_to_decimal = colorsys.hexToDecimal = colorsys.hex2Decimal

colorsys.hex2Decimal = function(hexColor) {
  if (typeof hexColor === "string") {
    return parseInt(hexColor.replace("#", ""), 16)
  }
}
colorsys.decimal_to_hex = colorsys.decimalToHex = colorsys.decimal2Hex

colorsys.decimal2Hex = function(decimalColor) {
  if (typeof decimalColor === "string") {
    return "#" + parseInt(decimalColor).toString(16)
  }
  return "#" + decimalColor.toString(16)
}

// Will return a random hex colour
colorsys.random = function () {
  const base = '000000'
  const number = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + (base + number).substr(-6)
}

colorsys.rotateHue = function (hue, amount) {
  if (amount === void 0) { amount = 0; }
  const aux = typeof hue === 'object'
      ? (hue.h + amount) % 360
      : (hue + amount) % 360
      
  const nextHue = aux < 0 ? (360 + aux) : aux
  return typeof hue === 'object'
      ? Object.assign(hue, { h: nextHue })
      : nextHue
}


colorsys.getColorEncoding = function (color) {
  if (typeof color === 'string') {
    try {
      colorsys.hex2Rgb(color)
      return 'hex'
    } catch (err) { /* Silent catch */ }
  }

  if (typeof color !== 'object') {
    return 'unknown'
  }

  // Now check that the sum of the components is still a number
  // And different than NaN (for that the boolean check)
  const c = color

  if ((c.r + c.g + c.b) && typeof (c.r + c.g + c.b) === 'number') {
    return 'rgb'
  }

  if ((c.h + c.s + c.v) && typeof (c.h + c.s + c.v) === 'number') {
    return 'hsv'
  }

  if ((c.h + c.s + c.l) && typeof (c.h + c.s + c.l) === 'number') {
    return 'hsl'
  }

  if ((c.c + c.m + c.y + c.k) && typeof (c.c + c.m + c.y + c.k) === 'number') {
    return 'cmyk'
  }

  return 'unknown'
}

function _normalizeAngle (degrees) {
  return (degrees % 360 + 360) % 360;
}

function _hue2Rgb (p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) return p + (q - p) * 6 * t
  if (t < 1 / 2) return q
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}

// It's easier to change luminosity in HSL
colorsys.any2Hsl = function (color) {
  const colorEncoding = colorsys.getColorEncoding(color)

  switch (colorEncoding) {
    case 'hsl':
      return color
    case 'rgb':
      return colorsys.rgb2Hsl(color)
    case 'hex':
      return colorsys.hex2Hsl(color)
    case 'hsv':
      return colorsys.hsv2Hsl(color)
    case 'cmyk':
      return colorsys.rgb2Hsl(colorsys.cmyk2Rgb(color))
    default:
      return 'unknown'
  }
}

// Aliases
colorsys.any_to_hsl = colorsys.anyToHsl = colorsys.any2Hsl

// Will return the transforming to encode function
// or undefined
colorsys.getTransformEncodingFunction = function (color, desiredEncoding) {
  const originalEncoding = colorsys.getColorEncoding(color)
  return colorsys[originalEncoding + '_to_' + desiredEncoding]
}

// TODO:
// Create darken / lighten methods with same input/output format
colorsys.darken = function (color, percentage) {
  const encoding = colorsys.getColorEncoding(color)

  if (encoding === 'unknown') {
    return color
  }

  // Missing transformation function between hsl and cmyk
  // Also, this algo is simple and precise
  if (encoding === 'cmyk') {
    const nextCmyk = color
    nextCmyk.k = Math.min(100, 100 * percentage + nextCmyk.k)
    return nextCmyk
  }

  const hsl = colorsys.any2Hsl(color)
  const nextHsl = {h: hsl.h, s: hsl.s, l: Math.round(hsl.l * (1 - percentage))}

  const transformFn = encoding === 'hsl'
    ? c => c // If HSL return as incame
    : colorsys.getTransformEncodingFunction(nextHsl, encoding)

  if (typeof transformFn !== 'function') {
    return color
  }

  return transformFn(nextHsl)
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/umco.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/umco.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/icons.png */ "./src/img/icons.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Arial\", \"Helvetica\", sans-serif;\n  height: 100%;\n  width: 100%;\n  background: #efefef;\n  overscroll-behavior-y: contain;\n}\n\nbody {\n  text-align: center;\n}\n\n#video,\n#copy {\n  display: none;\n}\n\n#target {\n  margin: 0;\n  border: none;\n  display: inline;\n}\n\n.controls,\n.started .info,\nbutton,\ninput[type=\"radio\"] {\n  display: none;\n}\n\n.started .controls {\n  display: inline;\n}\n\nbutton + label,\ninput[type=\"radio\"] + label {\n  border-radius: 3px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: black;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  outline: 0;\n  width: 32px;\n  height: 32px;\n  text-indent: -99999px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n}\n\n#oscillatorColour[value=\"r\"] + label {\n  background-position: 0 0;\n}\n\n#oscillatorColour[value=\"g\"] + label {\n  background-position: -32px 0;\n}\n\n#oscillatorColour[value=\"b\"] + label {\n  background-position: -64px 0;\n}\n\n#filterColour[value=\"r\"] + label {\n  background-position: 0 -32px;\n}\n\n#filterColour[value=\"g\"] + label {\n  background-position: -32px -32px;\n}\n\n#filterColour[value=\"b\"] + label {\n  background-position: -64px -32px;\n}\n\n#resonanceColour[value=\"r\"] + label {\n  background-position: -96px 0;\n}\n\n#resonanceColour[value=\"g\"] + label {\n  background-position: -128px 0;\n}\n\n#resonanceColour[value=\"b\"] + label {\n  background-position: -160px 0;\n}\n\n#ringMod[value=\"off\"] + label {\n  background-position: -96px -32px;\n}\n\n#ringMod[value=\"horizontal\"] + label {\n  background-position: -128px -32px;\n}\n\n#ringMod[value=\"vertical\"] + label {\n  background-position: -160px -32px;\n}\n\n#collator[value=\"avg\"] + label {\n  background-position: -480px 0;\n}\n\n#collator[value=\"centre\"] + label {\n  background-position: -480px -32px;\n}\n\n#pitchRow[value=\"off\"] + label {\n  background-position: -512px 0;\n}\n\n#pitchRow[value=\"on\"] + label {\n  background-position: -512px -32px;\n}\n\n#connected[value=\"off\"] + label {\n  background-position: -448px 0;\n}\n\n#connected[value=\"on\"] + label {\n  background-position: -448px -32px;\n}\n\nlabel[for=\"filter\"] {\n  background-position: 0 -32px;\n}\n\nlabel[for=\"resonance\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"offRingMod\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"horizontalRingMod\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"verticalRingMod\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"collator\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"pitchRow\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"connected\"] {\n  background-position: -96px 0;\n}\n\nlabel[for=\"sine\"] {\n  background-position: -192px 0;\n}\n\nlabel[for=\"sawtooth\"] {\n  background-position: -224px 0;\n}\n\nlabel[for=\"triangle\"] {\n  background-position: -256px 0;\n}\n\nlabel[for=\"square\"] {\n  background-position: -288px 0;\n}\n\nlabel[for=\"allpass\"] {\n  background-position: -320px 0;\n}\n\nlabel[for=\"highpass\"] {\n  background-position: -352px 0;\n}\n\nlabel[for=\"lowpass\"] {\n  background-position: -384px 0;\n}\n\nlabel[for=\"bandpass\"] {\n  background-position: -416px 0;\n}\n\ninput[type=\"radio\"]:checked + label {\n  background-position-y: -32px;\n}\n", ""]);
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

/***/ "./src/css/umco.css":
/*!**************************!*\
  !*** ./src/css/umco.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./umco.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/umco.css");

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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a7aeb2829338ccd3886f29505b081b67.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_umco_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/umco.js */ "./src/js/umco.js");
/* harmony import */ var _js_umco_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_umco_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_umco_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/umco.css */ "./src/css/umco.css");
/* harmony import */ var _css_umco_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_umco_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/canvas-context.js":
/*!**********************************!*\
  !*** ./src/js/canvas-context.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  width,
  height
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

module.exports = function (selector) {
  const canvas = document.querySelector(selector);
  canvas.width = width;
  canvas.height = height;
  return canvas.getContext("2d");
};

/***/ }),

/***/ "./src/js/collators/avg-colour.js":
/*!****************************************!*\
  !*** ./src/js/collators/avg-colour.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function avgColourCollator(data) {
  const dataPerPixel = 4;
  const length = data.data.length;
  const pixels = length / dataPerPixel;
  let i = 0,
      r = 0,
      g = 0,
      b = 0;

  while (i < length) {
    r += data.data[i];
    g += data.data[i + 1];
    b += data.data[i + 2];
    i += dataPerPixel;
  }

  return {
    r: r / pixels,
    g: g / pixels,
    b: b / pixels
  };
};

/***/ }),

/***/ "./src/js/collators/centre-colour.js":
/*!*******************************************!*\
  !*** ./src/js/collators/centre-colour.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function centreColourCollator(data) {
  const dataPerPixel = 4;
  const length = data.data.length;
  const i = Math.floor(length / dataPerPixel / 2) * dataPerPixel;
  return {
    r: data.data[i],
    g: data.data[i + 1],
    b: data.data[i + 2]
  };
};

/***/ }),

/***/ "./src/js/collators/index.js":
/*!***********************************!*\
  !*** ./src/js/collators/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  avgColour: __webpack_require__(/*! ./avg-colour */ "./src/js/collators/avg-colour.js"),
  centreColour: __webpack_require__(/*! ./centre-colour */ "./src/js/collators/centre-colour.js")
};

/***/ }),

/***/ "./src/js/connect-camera.js":
/*!**********************************!*\
  !*** ./src/js/connect-camera.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  width,
  height
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

module.exports = function connectCamera(callback) {
  const MEDIA_CONSTRAINTS = {
    audio: false,
    video: {
      width: {
        ideal: width
      },
      height: {
        ideal: height
      }
    }
  };

  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia(MEDIA_CONSTRAINTS).then(function (mediaStream) {
      const video = document.querySelector("#video");
      video.srcObject = mediaStream;

      video.onloadedmetadata = function () {
        video.play();
        video.muted = true;
        callback(null, video);
      };
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

const model = __webpack_require__(/*! ./model */ "./src/js/model.js");

function connectRadioValue(radioName) {
  const radios = document.querySelectorAll(`input[name="${radioName}"]`);

  const radioValue = function (evt) {
    model.store(radioName, evt.target.value);
  };

  for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = radioValue;
  }

  radios[0].click();
}

function connectRotatingValue(buttonId, items) {
  const element = document.querySelector("#" + buttonId);
  let index = items.findIndex(x => x === element.value) - 1;

  const rotatingValue = function () {
    index = (index + 1) % items.length;
    model.store(buttonId, items[index]);
    element.value = items[index];
  };

  element.onclick = rotatingValue;
  element.click();
}

module.exports = function connectListeners() {
  connectRadioValue("oscillatorType");
  connectRadioValue("filterType");
  const colourOrder = ["r", "g", "b"];
  connectRotatingValue("oscillatorColour", colourOrder);
  connectRotatingValue("filterColour", colourOrder);
  connectRotatingValue("resonanceColour", colourOrder);
  const collatorOrder = ["avg", "centre"];
  connectRotatingValue("collator", collatorOrder);
  const ringModOrder = ["off", "horizontal", "vertical"];
  connectRotatingValue("ringMod", ringModOrder);
  const offOn = ["off", "on"];
  connectRotatingValue("pitchRow", offOn);
  connectRotatingValue("connected", offOn);
  return model;
};

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const rows = 3;
const columns = 3;
const total = rows * columns;
module.exports = {
  rows,
  columns,
  total,
  width: 300,
  height: 300,
  lowFreq: 80,

  asIndex(row, col) {
    return row * columns + col;
  },

  asRowCol(index) {
    return {
      row: Math.floor(index / columns),
      col: index % columns
    };
  }

};

/***/ }),

/***/ "./src/js/create-audio-graph.js":
/*!**************************************!*\
  !*** ./src/js/create-audio-graph.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  rows,
  columns,
  total,
  asIndex
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

module.exports = function createAudioGraph(model) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillators = new Array(total);
  const filters = new Array(total);
  const gains = new Array(total);

  for (let index = 0; index < total; index++) {
    gains[index] = audioCtx.createGain();
    filters[index] = audioCtx.createBiquadFilter();
    filters[index].connect(gains[index]);
    oscillators[index] = audioCtx.createOscillator();
    oscillators[index].connect(filters[index]);
  }

  function rewireNoRingMod() {
    for (let index = 0; index < total; index++) {
      gains[index].connect(audioCtx.destination);
      gains[index].gain.value = 1;
    }
  }

  function rewireHorizontalRingMod(enable) {
    for (let y = 0; y < rows; y++) {
      for (let x = 1; x < columns; x++) {
        const thisGain = gains[asIndex(y, x)];
        const previousGain = gains[asIndex(y, x - 1)];
        previousGain.disconnect(enable ? audioCtx.destination : thisGain.gain);
        previousGain.connect(enable ? thisGain.gain : audioCtx.destination);
      }
    }
  }

  function rewireVerticalRingMod(enable) {
    for (let x = 0; x < columns; x++) {
      for (let y = 1; y < rows; y++) {
        const thisGain = gains[asIndex(y, x)];
        const previousGain = gains[asIndex(y - 1, x)];
        previousGain.disconnect(enable ? audioCtx.destination : thisGain.gain);
        previousGain.connect(enable ? thisGain.gain : audioCtx.destination);
      }
    }
  }

  function start() {
    oscillators.forEach(function (oscillator) {
      oscillator.start();
    });
  }

  let currentRingMod = rewireNoRingMod;
  currentRingMod(true);
  model.listen(({
    field,
    value
  }) => {
    if (field === "oscillatorType") {
      oscillators.forEach(o => {
        o.type = value;
      });
    } else if (field === "filterType") {
      filters.forEach(f => {
        f.type = value;
      });
    } else if (field === "ringMod") {
      currentRingMod(false);

      if (value === "off") {
        currentRingMod = rewireNoRingMod;
      } else if (value === "horizontal") {
        currentRingMod = rewireHorizontalRingMod;
      } else if (value === "vertical") {
        currentRingMod = rewireVerticalRingMod;
      }

      currentRingMod(true);
    }
  });
  return {
    audioCtx,
    oscillators,
    filters,
    gains,
    start
  };
};

/***/ }),

/***/ "./src/js/fill-box.js":
/*!****************************!*\
  !*** ./src/js/fill-box.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  rows,
  columns,
  width,
  height,
  asIndex
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

const canvasContext = __webpack_require__(/*! ./canvas-context */ "./src/js/canvas-context.js");

module.exports = function fillBox(targetSelector) {
  const targetCtx = canvasContext(targetSelector);
  const boxWidth = width / columns;
  const boxHeight = height / rows;
  return boxColours => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const startX = col * boxWidth;
        const startY = row * boxHeight;
        const colour = boxColours[asIndex(row, col)];
        const {
          rgb
        } = colour;
        targetCtx.fillStyle = rgb;
        targetCtx.fillRect(startX, startY, boxWidth, boxHeight);
        targetCtx.fill();
      }
    }
  };
};

/***/ }),

/***/ "./src/js/get-colours.js":
/*!*******************************!*\
  !*** ./src/js/get-colours.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  rows,
  columns,
  total,
  width,
  height,
  asIndex
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

const canvasContext = __webpack_require__(/*! ./canvas-context */ "./src/js/canvas-context.js");

const colorsys = __webpack_require__(/*! colorsys */ "./node_modules/colorsys/colorsys.js");

module.exports = function getColours(sourceSelector, video) {
  const sourceCtx = canvasContext(sourceSelector);
  const boxWidth = width / columns;
  const boxHeight = height / rows;
  return collator => {
    sourceCtx.drawImage(video, 0, 0, width, height);
    const boxColours = new Array(total);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const startX = col * boxWidth;
        const startY = row * boxHeight;
        const data = sourceCtx.getImageData(startX, startY, boxWidth, boxHeight);
        const collatedColour = collator(data);
        const {
          r,
          g,
          b
        } = collatedColour;
        const {
          h,
          s,
          v
        } = colorsys.rgbToHsv(collatedColour);
        boxColours[asIndex(row, col)] = {
          rgb: `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
          r: r / 255,
          g: g / 255,
          b: b / 255,
          h: h / 360,
          s: s / 100,
          v: v / 100
        };
      }
    }

    return boxColours;
  };
};

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const listeners = [];
module.exports = {
  store(field, value) {
    this[field] = value;
    listeners.forEach(l => l({
      field,
      value
    }));
  },

  listen(listener) {
    listeners.push(listener);
  }

};

/***/ }),

/***/ "./src/js/umco.js":
/*!************************!*\
  !*** ./src/js/umco.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const createAudioGraph = __webpack_require__(/*! ./create-audio-graph */ "./src/js/create-audio-graph.js");

const connectCamera = __webpack_require__(/*! ./connect-camera */ "./src/js/connect-camera.js");

const connectListeners = __webpack_require__(/*! ./connect-listeners */ "./src/js/connect-listeners.js");

const getColoursFactory = __webpack_require__(/*! ./get-colours */ "./src/js/get-colours.js");

const fillBoxFactory = __webpack_require__(/*! ./fill-box */ "./src/js/fill-box.js");

const updateAudioGraphFactory = __webpack_require__(/*! ./update-audio-graph */ "./src/js/update-audio-graph.js");

const {
  avgColour,
  centreColour
} = __webpack_require__(/*! ./collators */ "./src/js/collators/index.js");

window.onload = function () {
  connectCamera(function (err, video) {
    if (err) {
      document.querySelector(".info").innerHTML = "Failed to connect to camera: " + err.message;
    } else {
      document.body.className = "started";
      const model = connectListeners();
      const audioGraph = createAudioGraph(model);
      const getColours = getColoursFactory("#copy", video);
      const fillBox = fillBoxFactory("#target");
      const updateAudioGraph = updateAudioGraphFactory(audioGraph, model); // debug!!

      model.listen(x => {
        console.log("Model change", x);
      });
      audioGraph.start();
      setInterval(function () {
        const collator = model.collator === "centre" ? centreColour : avgColour;
        const colours = getColours(collator);
        fillBox(colours);
        updateAudioGraph(colours);
      }, 100);
    }
  });
};

/***/ }),

/***/ "./src/js/update-audio-graph.js":
/*!**************************************!*\
  !*** ./src/js/update-audio-graph.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  rows,
  columns,
  asIndex,
  total,
  lowFreq
} = __webpack_require__(/*! ./constants */ "./src/js/constants.js");

function scale(colour, scalar = 1) {
  return Math.pow(Math.pow(2.0, scalar), colour);
}

function oscFreq(colour, row) {
  return lowFreq * (row ? Math.pow(2, row) * scale(colour, 1) : scale(colour, rows));
}

function cutoffFreq(colour) {
  return 500 * scale(colour);
}

function q(colour) {
  return 0.5 + colour / 2;
}

function relative(colour) {
  return 1.0 + (colour - 0.5) / 5;
}

module.exports = function (audioGraph, model) {
  const {
    audioCtx,
    oscillators,
    filters
  } = audioGraph;
  return colours => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const index = asIndex(row, col);
        const colour = colours[index];
        let oscillatorFreq;

        if (model.connected === "on") {
          const centreIndex = model.pitchRow === "on" ? asIndex(row, Math.floor(columns / 2)) : asIndex(Math.floor(row / 2), Math.floor(columns / 2));
          const relativeTo = oscFreq(colours[centreIndex][model.oscillatorColour], model.pitchRow === "on" ? row : null);
          oscillatorFreq = centreIndex === index ? relativeTo : relativeTo * relative(colour[model.oscillatorColour]);
        } else {
          oscillatorFreq = oscFreq(colour[model.oscillatorColour], model.pitchRow === "on" ? row : null);
        }

        oscillators[index].frequency.setTargetAtTime(oscillatorFreq, audioCtx.currentTime, 0.1);
        filters[index].frequency.setTargetAtTime(cutoffFreq(colour[model.filterColour]), audioCtx.currentTime, 0.1);
        filters[index].Q.setTargetAtTime(q(colour[model.resonanceColour]), audioCtx.currentTime, 0.1);
      }
    }
  };
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbG9yc3lzL2NvbG9yc3lzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvdW1jby5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3VtY28uY3NzP2Y0MTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jYW52YXMtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29sbGF0b3JzL2F2Zy1jb2xvdXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbGxhdG9ycy9jZW50cmUtY29sb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb2xsYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Nvbm5lY3QtY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25uZWN0LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGUtYXVkaW8tZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpbGwtYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nZXQtY29sb3Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VtY28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VwZGF0ZS1hdWRpby1ncmFwaC5qcyJdLCJuYW1lcyI6WyJ3aWR0aCIsImhlaWdodCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VsZWN0b3IiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiYXZnQ29sb3VyQ29sbGF0b3IiLCJkYXRhIiwiZGF0YVBlclBpeGVsIiwibGVuZ3RoIiwicGl4ZWxzIiwiaSIsInIiLCJnIiwiYiIsImNlbnRyZUNvbG91ckNvbGxhdG9yIiwiTWF0aCIsImZsb29yIiwiYXZnQ29sb3VyIiwiY2VudHJlQ29sb3VyIiwiY29ubmVjdENhbWVyYSIsImNhbGxiYWNrIiwiTUVESUFfQ09OU1RSQUlOVFMiLCJhdWRpbyIsInZpZGVvIiwiaWRlYWwiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJ0aGVuIiwibWVkaWFTdHJlYW0iLCJzcmNPYmplY3QiLCJvbmxvYWRlZG1ldGFkYXRhIiwicGxheSIsIm11dGVkIiwiY2F0Y2giLCJlcnIiLCJFcnJvciIsIm1vZGVsIiwiY29ubmVjdFJhZGlvVmFsdWUiLCJyYWRpb05hbWUiLCJyYWRpb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmFkaW9WYWx1ZSIsImV2dCIsInN0b3JlIiwidGFyZ2V0IiwidmFsdWUiLCJvbmNsaWNrIiwiY2xpY2siLCJjb25uZWN0Um90YXRpbmdWYWx1ZSIsImJ1dHRvbklkIiwiaXRlbXMiLCJlbGVtZW50IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ4Iiwicm90YXRpbmdWYWx1ZSIsImNvbm5lY3RMaXN0ZW5lcnMiLCJjb2xvdXJPcmRlciIsImNvbGxhdG9yT3JkZXIiLCJyaW5nTW9kT3JkZXIiLCJvZmZPbiIsInJvd3MiLCJjb2x1bW5zIiwidG90YWwiLCJsb3dGcmVxIiwiYXNJbmRleCIsInJvdyIsImNvbCIsImFzUm93Q29sIiwiY3JlYXRlQXVkaW9HcmFwaCIsImF1ZGlvQ3R4Iiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0Iiwib3NjaWxsYXRvcnMiLCJBcnJheSIsImZpbHRlcnMiLCJnYWlucyIsImNyZWF0ZUdhaW4iLCJjcmVhdGVCaXF1YWRGaWx0ZXIiLCJjb25uZWN0IiwiY3JlYXRlT3NjaWxsYXRvciIsInJld2lyZU5vUmluZ01vZCIsImRlc3RpbmF0aW9uIiwiZ2FpbiIsInJld2lyZUhvcml6b250YWxSaW5nTW9kIiwiZW5hYmxlIiwieSIsInRoaXNHYWluIiwicHJldmlvdXNHYWluIiwiZGlzY29ubmVjdCIsInJld2lyZVZlcnRpY2FsUmluZ01vZCIsInN0YXJ0IiwiZm9yRWFjaCIsIm9zY2lsbGF0b3IiLCJjdXJyZW50UmluZ01vZCIsImxpc3RlbiIsImZpZWxkIiwibyIsInR5cGUiLCJmIiwiY2FudmFzQ29udGV4dCIsImZpbGxCb3giLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEN0eCIsImJveFdpZHRoIiwiYm94SGVpZ2h0IiwiYm94Q29sb3VycyIsInN0YXJ0WCIsInN0YXJ0WSIsImNvbG91ciIsInJnYiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmlsbCIsImNvbG9yc3lzIiwiZ2V0Q29sb3VycyIsInNvdXJjZVNlbGVjdG9yIiwic291cmNlQ3R4IiwiY29sbGF0b3IiLCJkcmF3SW1hZ2UiLCJnZXRJbWFnZURhdGEiLCJjb2xsYXRlZENvbG91ciIsImgiLCJzIiwidiIsInJnYlRvSHN2IiwibGlzdGVuZXJzIiwibCIsImxpc3RlbmVyIiwicHVzaCIsImdldENvbG91cnNGYWN0b3J5IiwiZmlsbEJveEZhY3RvcnkiLCJ1cGRhdGVBdWRpb0dyYXBoRmFjdG9yeSIsIm9ubG9hZCIsImlubmVySFRNTCIsIm1lc3NhZ2UiLCJib2R5IiwiY2xhc3NOYW1lIiwiYXVkaW9HcmFwaCIsInVwZGF0ZUF1ZGlvR3JhcGgiLCJjb25zb2xlIiwibG9nIiwic2V0SW50ZXJ2YWwiLCJjb2xvdXJzIiwic2NhbGUiLCJzY2FsYXIiLCJwb3ciLCJvc2NGcmVxIiwiY3V0b2ZmRnJlcSIsInEiLCJyZWxhdGl2ZSIsIm9zY2lsbGF0b3JGcmVxIiwiY29ubmVjdGVkIiwiY2VudHJlSW5kZXgiLCJwaXRjaFJvdyIsInJlbGF0aXZlVG8iLCJvc2NpbGxhdG9yQ29sb3VyIiwiZnJlcXVlbmN5Iiwic2V0VGFyZ2V0QXRUaW1lIiwiY3VycmVudFRpbWUiLCJmaWx0ZXJDb2xvdXIiLCJRIiwicmVzb25hbmNlQ29sb3VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVksWUFBWTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssY0FBYztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VixVQUFVLENBQUN2QyxNQUFNLENBQUMxRSxLQUFLLENBQUM2SCxZQUFQLENBQVAsQ0FEWixFQUVFM0YsUUFBUSxDQUFDMEYsV0FGWCxFQUdFLEdBSEY7QUFLQXBGLGVBQU8sQ0FBQ3hCLEtBQUQsQ0FBUCxDQUFlOEcsQ0FBZixDQUFpQkgsZUFBakIsQ0FDRVQsQ0FBQyxDQUFDeEMsTUFBTSxDQUFDMUUsS0FBSyxDQUFDK0gsZUFBUCxDQUFQLENBREgsRUFFRTdGLFFBQVEsQ0FBQzBGLFdBRlgsRUFHRSxHQUhGO0FBS0Q7QUFDRjtBQUNGLEdBN0NEO0FBOENELENBakRELEMiLCJmaWxlIjoiYXBwLjNjZWNmOWRlMjVmY2IwYjdiZjcxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5jb25zdCBSR0JfTUFYID0gMjU1XG5jb25zdCBIVUVfTUFYID0gMzYwXG5jb25zdCBTVl9NQVggPSAxMDBcblxudmFyIGNvbG9yc3lzID0gbW9kdWxlLmV4cG9ydHMgPSB7fVxuXG5jb2xvcnN5cy5yZ2IySHNsID0gZnVuY3Rpb24gKHIsIGcsIGIpIHtcbiAgaWYgKHR5cGVvZiByID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGFyZ3MgPSByXG4gICAgciA9IGFyZ3MucjsgZyA9IGFyZ3MuZzsgYiA9IGFyZ3MuYjtcbiAgfVxuICAvLyBJdCBjb252ZXJ0cyBbMCwyNTVdIGZvcm1hdCwgdG8gWzAsMV1cbiAgciA9IChyID09PSBSR0JfTUFYKSA/IDEgOiAociAlIFJHQl9NQVggLyBwYXJzZUZsb2F0KFJHQl9NQVgpKVxuICBnID0gKGcgPT09IFJHQl9NQVgpID8gMSA6IChnICUgUkdCX01BWCAvIHBhcnNlRmxvYXQoUkdCX01BWCkpXG4gIGIgPSAoYiA9PT0gUkdCX01BWCkgPyAxIDogKGIgJSBSR0JfTUFYIC8gcGFyc2VGbG9hdChSR0JfTUFYKSlcblxuICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYilcbiAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXG4gIHZhciBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyXG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgaCA9IHMgPSAwIC8vIGFjaHJvbWF0aWNcbiAgfSBlbHNlIHtcbiAgICB2YXIgZCA9IG1heCAtIG1pblxuICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKVxuICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICBjYXNlIHI6XG4gICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBnOlxuICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIGI6XG4gICAgICAgIGggPSAociAtIGcpIC8gZCArIDRcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaCAvPSA2XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGg6IE1hdGgucm91bmQoaCAqIEhVRV9NQVgpLFxuICAgIHM6IE1hdGgucm91bmQocyAqIFNWX01BWCksXG4gICAgbDogTWF0aC5yb3VuZChsICogU1ZfTUFYKVxuICB9XG59XG5cbmNvbG9yc3lzLnJnYl90b19oc2wgPSBjb2xvcnN5cy5yZ2JUb0hzbCA9IGNvbG9yc3lzLnJnYjJIc2xcblxuY29sb3JzeXMucmdiMkhzdiA9IGZ1bmN0aW9uIChyLCBnLCBiKSB7XG4gIGlmICh0eXBlb2YgciA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBhcmdzID0gclxuICAgIHIgPSBhcmdzLnI7IGcgPSBhcmdzLmc7IGIgPSBhcmdzLmI7XG4gIH1cblxuICAvLyBJdCBjb252ZXJ0cyBbMCwyNTVdIGZvcm1hdCwgdG8gWzAsMV1cbiAgciA9IChyID09PSBSR0JfTUFYKSA/IDEgOiAociAlIFJHQl9NQVggLyBwYXJzZUZsb2F0KFJHQl9NQVgpKVxuICBnID0gKGcgPT09IFJHQl9NQVgpID8gMSA6IChnICUgUkdCX01BWCAvIHBhcnNlRmxvYXQoUkdCX01BWCkpXG4gIGIgPSAoYiA9PT0gUkdCX01BWCkgPyAxIDogKGIgJSBSR0JfTUFYIC8gcGFyc2VGbG9hdChSR0JfTUFYKSlcblxuICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYilcbiAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpXG4gIHZhciBoLCBzLCB2ID0gbWF4XG5cbiAgdmFyIGQgPSBtYXggLSBtaW5cblxuICBzID0gbWF4ID09PSAwID8gMCA6IGQgLyBtYXhcblxuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICBoID0gMCAvLyBhY2hyb21hdGljXG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChtYXgpIHtcbiAgICAgIGNhc2UgcjpcbiAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIGc6XG4gICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDJcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgYjpcbiAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNFxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBoIC89IDZcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaDogTWF0aC5yb3VuZChoICogSFVFX01BWCksXG4gICAgczogTWF0aC5yb3VuZChzICogU1ZfTUFYKSxcbiAgICB2OiBNYXRoLnJvdW5kKHYgKiBTVl9NQVgpXG4gIH1cbn1cblxuY29sb3JzeXMucmdiX3RvX2hzdiA9IGNvbG9yc3lzLnJnYlRvSHN2ID0gY29sb3JzeXMucmdiMkhzdlxuXG5jb2xvcnN5cy5oc2wyUmdiID0gZnVuY3Rpb24gKGgsIHMsIGwpIHtcbiAgaWYgKHR5cGVvZiBoID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGFyZ3MgPSBoXG4gICAgaCA9IGFyZ3MuaDsgcyA9IGFyZ3MuczsgbCA9IGFyZ3MubDtcbiAgfVxuXG4gIHZhciByLCBnLCBiXG5cbiAgaCA9IF9ub3JtYWxpemVBbmdsZShoKVxuICBoID0gKGggPT09IEhVRV9NQVgpID8gMSA6IChoICUgSFVFX01BWCAvIHBhcnNlRmxvYXQoSFVFX01BWCkpXG4gIHMgPSAocyA9PT0gU1ZfTUFYKSA/IDEgOiAocyAlIFNWX01BWCAvIHBhcnNlRmxvYXQoU1ZfTUFYKSlcbiAgbCA9IChsID09PSBTVl9NQVgpID8gMSA6IChsICUgU1ZfTUFYIC8gcGFyc2VGbG9hdChTVl9NQVgpKVxuXG4gIGlmIChzID09PSAwKSB7XG4gICAgciA9IGcgPSBiID0gbCAvLyBhY2hyb21hdGljXG4gIH0gZWxzZSB7XG4gICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgIHIgPSBfaHVlMlJnYihwLCBxLCBoICsgMSAvIDMpXG4gICAgZyA9IF9odWUyUmdiKHAsIHEsIGgpXG4gICAgYiA9IF9odWUyUmdiKHAsIHEsIGggLSAxIC8gMylcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcjogTWF0aC5yb3VuZChyICogUkdCX01BWCksXG4gICAgZzogTWF0aC5yb3VuZChnICogUkdCX01BWCksXG4gICAgYjogTWF0aC5yb3VuZChiICogUkdCX01BWCksXG4gIH1cbn1cblxuY29sb3JzeXMuaHNsX3RvX3JnYiA9IGNvbG9yc3lzLmhzbFRvUmdiID0gY29sb3JzeXMuaHNsMlJnYlxuXG5jb2xvcnN5cy5oc3YyUmdiID0gZnVuY3Rpb24gKGgsIHMsIHYpIHtcbiAgaWYgKHR5cGVvZiBoID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGFyZ3MgPSBoXG4gICAgaCA9IGFyZ3MuaDsgcyA9IGFyZ3MuczsgdiA9IGFyZ3MudjtcbiAgfVxuXG4gIGggPSBfbm9ybWFsaXplQW5nbGUoaClcbiAgaCA9IChoID09PSBIVUVfTUFYKSA/IDEgOiAoaCAlIEhVRV9NQVggLyBwYXJzZUZsb2F0KEhVRV9NQVgpICogNilcbiAgcyA9IChzID09PSBTVl9NQVgpID8gMSA6IChzICUgU1ZfTUFYIC8gcGFyc2VGbG9hdChTVl9NQVgpKVxuICB2ID0gKHYgPT09IFNWX01BWCkgPyAxIDogKHYgJSBTVl9NQVggLyBwYXJzZUZsb2F0KFNWX01BWCkpXG5cbiAgdmFyIGkgPSBNYXRoLmZsb29yKGgpXG4gIHZhciBmID0gaCAtIGlcbiAgdmFyIHAgPSB2ICogKDEgLSBzKVxuICB2YXIgcSA9IHYgKiAoMSAtIGYgKiBzKVxuICB2YXIgdCA9IHYgKiAoMSAtICgxIC0gZikgKiBzKVxuICB2YXIgbW9kID0gaSAlIDZcbiAgdmFyIHIgPSBbdiwgcSwgcCwgcCwgdCwgdl1bbW9kXVxuICB2YXIgZyA9IFt0LCB2LCB2LCBxLCBwLCBwXVttb2RdXG4gIHZhciBiID0gW3AsIHAsIHQsIHYsIHYsIHFdW21vZF1cblxuICByZXR1cm4ge1xuICAgIHI6IE1hdGguZmxvb3IociAqIFJHQl9NQVgpLFxuICAgIGc6IE1hdGguZmxvb3IoZyAqIFJHQl9NQVgpLFxuICAgIGI6IE1hdGguZmxvb3IoYiAqIFJHQl9NQVgpLFxuICB9XG59XG5cbmNvbG9yc3lzLmhzdl90b19yZ2IgPSBjb2xvcnN5cy5oc3YyUmdiXG5jb2xvcnN5cy5oc3ZUb1JnYiA9IGNvbG9yc3lzLmhzdjJSZ2JcblxuY29sb3JzeXMucmdiMkhleCA9IGZ1bmN0aW9uIChyLCBnLCBiKSB7XG4gIGlmICh0eXBlb2YgciA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBhcmdzID0gclxuICAgIHIgPSBhcmdzLnI7IGcgPSBhcmdzLmc7IGIgPSBhcmdzLmI7XG4gIH1cbiAgciA9IE1hdGgucm91bmQocikudG9TdHJpbmcoMTYpXG4gIGcgPSBNYXRoLnJvdW5kKGcpLnRvU3RyaW5nKDE2KVxuICBiID0gTWF0aC5yb3VuZChiKS50b1N0cmluZygxNilcblxuICByID0gci5sZW5ndGggPT09IDEgPyAnMCcgKyByIDogclxuICBnID0gZy5sZW5ndGggPT09IDEgPyAnMCcgKyBnIDogZ1xuICBiID0gYi5sZW5ndGggPT09IDEgPyAnMCcgKyBiIDogYlxuXG4gIHJldHVybiAnIycgKyByICsgZyArIGJcbn1cblxuY29sb3JzeXMucmdiX3RvX2hleCA9IGNvbG9yc3lzLnJnYlRvSGV4ID0gY29sb3JzeXMucmdiMkhleFxuXG5jb2xvcnN5cy5oZXgyUmdiID0gZnVuY3Rpb24gKGhleCkge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleClcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICB9IDogbnVsbFxufVxuXG5jb2xvcnN5cy5oZXhfdG9fcmdiID0gY29sb3JzeXMuaGV4VG9SZ2IgPSBjb2xvcnN5cy5oZXgyUmdiXG5cbmNvbG9yc3lzLmhzdjJIZXggPSBmdW5jdGlvbiAoaCwgcywgdikge1xuICB2YXIgcmdiID0gY29sb3JzeXMuaHN2MlJnYihoLCBzLCB2KVxuICByZXR1cm4gY29sb3JzeXMucmdiMkhleChyZ2IuciwgcmdiLmcsIHJnYi5iKVxufVxuXG5jb2xvcnN5cy5oc3ZfdG9faGV4ID0gY29sb3JzeXMuaHN2MkhleFxuY29sb3JzeXMuaHN2VG9IZXggPSBjb2xvcnN5cy5oc3YySGV4XG5cbmNvbG9yc3lzLmhleDJIc3YgPSBmdW5jdGlvbiAoaGV4KSB7XG4gIHZhciByZ2IgPSBjb2xvcnN5cy5oZXgyUmdiKGhleClcbiAgcmV0dXJuIGNvbG9yc3lzLnJnYjJIc3YocmdiLnIsIHJnYi5nLCByZ2IuYilcbn1cblxuY29sb3JzeXMuaGV4X3RvX2hzdiA9IGNvbG9yc3lzLmhleFRvSHN2ID0gY29sb3JzeXMuaGV4MkhzdlxuXG5jb2xvcnN5cy5oc2wySGV4ID0gZnVuY3Rpb24gKGgsIHMsIGwpIHtcbiAgdmFyIHJnYiA9IGNvbG9yc3lzLmhzbDJSZ2IoaCwgcywgbClcbiAgcmV0dXJuIGNvbG9yc3lzLnJnYjJIZXgocmdiLnIsIHJnYi5nLCByZ2IuYilcbn1cblxuY29sb3JzeXMuaHNsX3RvX2hleCA9IGNvbG9yc3lzLmhzbFRvSGV4ID0gY29sb3JzeXMuaHNsMkhleFxuXG5jb2xvcnN5cy5oZXgySHNsID0gZnVuY3Rpb24gKGhleCkge1xuICB2YXIgcmdiID0gY29sb3JzeXMuaGV4MlJnYihoZXgpXG4gIHJldHVybiBjb2xvcnN5cy5yZ2IySHNsKHJnYi5yLCByZ2IuZywgcmdiLmIpXG59XG5cbmNvbG9yc3lzLmhleF90b19oc2wgPSBjb2xvcnN5cy5oZXhUb0hzbCA9IGNvbG9yc3lzLmhleDJIc2xcblxuY29sb3JzeXMucmdiMkNteWsgPSBmdW5jdGlvbiAociwgZywgYikge1xuICBpZiAodHlwZW9mIHIgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3QgYXJncyA9IHJcbiAgICByID0gYXJncy5yOyBnID0gYXJncy5nOyBiID0gYXJncy5iO1xuICB9XG5cbiAgdmFyIHJwcmltID0gciAvIDI1NVxuICB2YXIgZ3ByaW0gPSBnIC8gMjU1XG4gIHZhciBicHJpbSA9IGIgLyAyNTVcblxuICB2YXIgayA9IDEgLSBNYXRoLm1heChycHJpbSwgZ3ByaW0sIGJwcmltKVxuXG4gIHZhciBjID0gKDEgLSBycHJpbSAtIGspIC8gKDEgLSBrKVxuICB2YXIgbSA9ICgxIC0gZ3ByaW0gLSBrKSAvICgxIC0gaylcbiAgdmFyIHkgPSAoMSAtIGJwcmltIC0gaykgLyAoMSAtIGspXG5cbiAgcmV0dXJuIHtcbiAgICBjOiBjLnRvRml4ZWQoMyksXG4gICAgbTogbS50b0ZpeGVkKDMpLFxuICAgIHk6IHkudG9GaXhlZCgzKSxcbiAgICBrOiBrLnRvRml4ZWQoMylcbiAgfVxufVxuXG5jb2xvcnN5cy5yZ2JfdG9fY215ayA9IGNvbG9yc3lzLnJnYlRvQ215ayA9IGNvbG9yc3lzLnJnYjJDbXlrXG5cbmNvbG9yc3lzLmNteWsyUmdiID0gZnVuY3Rpb24gKGMsIG0sIHksIGspIHtcbiAgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGFyZ3MgPSBjXG4gICAgYyA9IGFyZ3MuYzsgbSA9IGFyZ3MubTsgeSA9IGFyZ3MueTsgayA9IGFyZ3MuaztcbiAgfVxuXG4gIHZhciByID0gMjU1ICogKDEgLSBjKSAqICgxIC0gaylcbiAgdmFyIGcgPSAyNTUgKiAoMSAtIG0pICogKDEgLSBrKVxuICB2YXIgYiA9IDI1NSAqICgxIC0geSkgKiAoMSAtIGspXG5cbiAgcmV0dXJuIHtcbiAgICByOiBNYXRoLmZsb29yKHIpLFxuICAgIGc6IE1hdGguZmxvb3IoZyksXG4gICAgYjogTWF0aC5mbG9vcihiKVxuICB9XG59XG5cbmNvbG9yc3lzLmNteWtfdG9fcmdiID0gY29sb3JzeXMuY215a1RvUmdiID0gY29sb3JzeXMuY215azJSZ2JcblxuY29sb3JzeXMuaHN2MkhzbCA9IGZ1bmN0aW9uIChoLCBzLCB2KSB7XG4gIGlmICh0eXBlb2YgaCA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBhcmdzID0gaFxuICAgIGggPSBhcmdzLmg7IHMgPSBhcmdzLnM7IHYgPSBhcmdzLnY7XG4gIH1cblxuICB2YXIgbCA9ICgyIC0gcykgKiB2IC8gMlxuXG4gIGlmIChsICE9PSAwKSB7XG4gICAgaWYgKGwgPT09IFNWX01BWCkge1xuICAgICAgcyA9IDBcbiAgICB9IGVsc2UgaWYgKGwgPCBTVl9NQVggLyAyKSB7XG4gICAgICBzID0gcyAqIHYgLyAobCAqIDIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHMgPSBzICogdiAvICgyIC0gbCAqIDIpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgaDogaCwgczogcywgbDogbCB9XG59XG5cbmNvbG9yc3lzLmhzdl90b19oc2wgPSBjb2xvcnN5cy5oc3ZUb0hzbCA9IGNvbG9yc3lzLmhzdjJIc2xcblxuY29sb3JzeXMuaHNsMkhzdiA9IGZ1bmN0aW9uIChoLCBzLCBsKSB7XG4gIGlmICh0eXBlb2YgaCA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBhcmdzID0gaFxuICAgIGggPSBhcmdzLmg7IHMgPSBhcmdzLnM7IGwgPSBhcmdzLmw7XG4gIH1cblxuICBzID0gcyAqIChsIDwgNTAgPyBsIDogKDEwMCAtIGwpKVxuXG4gIHJldHVybiB7XG4gICAgaDogaCxcbiAgICBzOiBNYXRoLmZsb29yKDIgKiBzIC8gKGwgKyBzKSksXG4gICAgdjogTWF0aC5mbG9vcihsICsgcyksXG4gIH1cbn1cblxuY29sb3JzeXMuaHNsX3RvX2hzdiA9IGNvbG9yc3lzLmhzbFRvSHN2ID0gY29sb3JzeXMuaHNsMkhzdlxuXG4vKipcbiogUGFyc2VzIHZhbHVlcyBmcm9tIGEgc3RyaW5nIGludG8gYSBqYXZhc2NyaXB0IG9iamVjdFxuKiBlLmc6IGhzbGEoMTQwLCAzMCUsIDQwJSwgLjUpID0+IHsgaDogMTQwLCBzOiAzMCwgbDogNDAsIGFscGhhOiAwLjV9XG4qL1xuY29sb3JzeXMucGFyc2VDc3MgPSBmdW5jdGlvbiAoY3NzU3RyaW5nKSB7XG4gIGlmIChjc3NTdHJpbmcuaW5kZXhPZignIycpID4gLTEpIHtcbiAgICByZXR1cm4gY29sb3JzeXMuaGV4MlJnYihjc3NTdHJpbmcpXG4gIH1cblxuICBjb25zdCBwcmVmaXggPSBjc3NTdHJpbmcuc3BsaXQoJygnKVswXVxuICBjb25zdCBhcmdzID0gY3NzU3RyaW5nLnNwbGl0KCcoJylbMV0uc3BsaXQoJyknKVswXS5zcGxpdCgnLCcpXG5cbiAgLy8gVXNlIHRoZSBwcmVmaXggYXMgYW4gYXJyYXkgW3IsIGcsIGIsIGFdIHRvIHBhcnNlIHRoZSBjb2xvdXJzXG4gIHJldHVybiBwcmVmaXguc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbiAoY29sb3IsIHBhcmFtLCBpZHgpIHtcbiAgICBjb25zdCBuZXh0Q29sb3IgPSBjb2xvclxuICAgIG5leHRDb2xvcltwYXJhbV0gPSBwYXJzZUZsb2F0KGFyZ3NbaWR4XSlcbiAgICByZXR1cm4gbmV4dENvbG9yXG4gIH0sIHt9KVxufVxuXG5jb2xvcnN5cy5wYXJzZV9jc3MgPSBjb2xvcnN5cy5wYXJzZUNzc1xuXG5jb2xvcnN5cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IHByZWZpeCA9IE9iamVjdC5rZXlzKG9iaikuam9pbignJylcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XVxuICAgIGlmIChrZXkgPT09ICdzJyB8fCBrZXkgPT09ICd2JyB8fCBrZXkgPT09ICdsJykge1xuICAgICAgdmFsID0gdmFsICsgJyUnXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfSlcbiAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlcy5qb2luKCcsICcpICsgJyknXG59XG5cbi8vIEdvb2dsZSBBc3Npc3RhbnQgQVBJIHVzZXMgdGhpcyBmb3JtYXQgaW4gU21hcnRIb21lIEFwcHMuIEV4YW1wbGUgPT4gXCJzcGVjdHJ1bVJHQlwiOiAxNjcxMTY4MFxuY29sb3JzeXMuaGV4X3RvX2RlY2ltYWwgPSBjb2xvcnN5cy5oZXhUb0RlY2ltYWwgPSBjb2xvcnN5cy5oZXgyRGVjaW1hbFxuXG5jb2xvcnN5cy5oZXgyRGVjaW1hbCA9IGZ1bmN0aW9uKGhleENvbG9yKSB7XG4gIGlmICh0eXBlb2YgaGV4Q29sb3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoaGV4Q29sb3IucmVwbGFjZShcIiNcIiwgXCJcIiksIDE2KVxuICB9XG59XG5jb2xvcnN5cy5kZWNpbWFsX3RvX2hleCA9IGNvbG9yc3lzLmRlY2ltYWxUb0hleCA9IGNvbG9yc3lzLmRlY2ltYWwySGV4XG5cbmNvbG9yc3lzLmRlY2ltYWwySGV4ID0gZnVuY3Rpb24oZGVjaW1hbENvbG9yKSB7XG4gIGlmICh0eXBlb2YgZGVjaW1hbENvbG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgcGFyc2VJbnQoZGVjaW1hbENvbG9yKS50b1N0cmluZygxNilcbiAgfVxuICByZXR1cm4gXCIjXCIgKyBkZWNpbWFsQ29sb3IudG9TdHJpbmcoMTYpXG59XG5cbi8vIFdpbGwgcmV0dXJuIGEgcmFuZG9tIGhleCBjb2xvdXJcbmNvbG9yc3lzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYmFzZSA9ICcwMDAwMDAnXG4gIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNilcbiAgcmV0dXJuICcjJyArIChiYXNlICsgbnVtYmVyKS5zdWJzdHIoLTYpXG59XG5cbmNvbG9yc3lzLnJvdGF0ZUh1ZSA9IGZ1bmN0aW9uIChodWUsIGFtb3VudCkge1xuICBpZiAoYW1vdW50ID09PSB2b2lkIDApIHsgYW1vdW50ID0gMDsgfVxuICBjb25zdCBhdXggPSB0eXBlb2YgaHVlID09PSAnb2JqZWN0J1xuICAgICAgPyAoaHVlLmggKyBhbW91bnQpICUgMzYwXG4gICAgICA6IChodWUgKyBhbW91bnQpICUgMzYwXG4gICAgICBcbiAgY29uc3QgbmV4dEh1ZSA9IGF1eCA8IDAgPyAoMzYwICsgYXV4KSA6IGF1eFxuICByZXR1cm4gdHlwZW9mIGh1ZSA9PT0gJ29iamVjdCdcbiAgICAgID8gT2JqZWN0LmFzc2lnbihodWUsIHsgaDogbmV4dEh1ZSB9KVxuICAgICAgOiBuZXh0SHVlXG59XG5cblxuY29sb3JzeXMuZ2V0Q29sb3JFbmNvZGluZyA9IGZ1bmN0aW9uIChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJykge1xuICAgIHRyeSB7XG4gICAgICBjb2xvcnN5cy5oZXgyUmdiKGNvbG9yKVxuICAgICAgcmV0dXJuICdoZXgnXG4gICAgfSBjYXRjaCAoZXJyKSB7IC8qIFNpbGVudCBjYXRjaCAqLyB9XG4gIH1cblxuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAndW5rbm93bidcbiAgfVxuXG4gIC8vIE5vdyBjaGVjayB0aGF0IHRoZSBzdW0gb2YgdGhlIGNvbXBvbmVudHMgaXMgc3RpbGwgYSBudW1iZXJcbiAgLy8gQW5kIGRpZmZlcmVudCB0aGFuIE5hTiAoZm9yIHRoYXQgdGhlIGJvb2xlYW4gY2hlY2spXG4gIGNvbnN0IGMgPSBjb2xvclxuXG4gIGlmICgoYy5yICsgYy5nICsgYy5iKSAmJiB0eXBlb2YgKGMuciArIGMuZyArIGMuYikgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICdyZ2InXG4gIH1cblxuICBpZiAoKGMuaCArIGMucyArIGMudikgJiYgdHlwZW9mIChjLmggKyBjLnMgKyBjLnYpID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAnaHN2J1xuICB9XG5cbiAgaWYgKChjLmggKyBjLnMgKyBjLmwpICYmIHR5cGVvZiAoYy5oICsgYy5zICsgYy5sKSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gJ2hzbCdcbiAgfVxuXG4gIGlmICgoYy5jICsgYy5tICsgYy55ICsgYy5rKSAmJiB0eXBlb2YgKGMuYyArIGMubSArIGMueSArIGMuaykgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICdjbXlrJ1xuICB9XG5cbiAgcmV0dXJuICd1bmtub3duJ1xufVxuXG5mdW5jdGlvbiBfbm9ybWFsaXplQW5nbGUgKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICUgMzYwICsgMzYwKSAlIDM2MDtcbn1cblxuZnVuY3Rpb24gX2h1ZTJSZ2IgKHAsIHEsIHQpIHtcbiAgaWYgKHQgPCAwKSB0ICs9IDFcbiAgaWYgKHQgPiAxKSB0IC09IDFcbiAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHRcbiAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHFcbiAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2XG4gIHJldHVybiBwXG59XG5cbi8vIEl0J3MgZWFzaWVyIHRvIGNoYW5nZSBsdW1pbm9zaXR5IGluIEhTTFxuY29sb3JzeXMuYW55MkhzbCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICBjb25zdCBjb2xvckVuY29kaW5nID0gY29sb3JzeXMuZ2V0Q29sb3JFbmNvZGluZyhjb2xvcilcblxuICBzd2l0Y2ggKGNvbG9yRW5jb2RpbmcpIHtcbiAgICBjYXNlICdoc2wnOlxuICAgICAgcmV0dXJuIGNvbG9yXG4gICAgY2FzZSAncmdiJzpcbiAgICAgIHJldHVybiBjb2xvcnN5cy5yZ2IySHNsKGNvbG9yKVxuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXR1cm4gY29sb3JzeXMuaGV4MkhzbChjb2xvcilcbiAgICBjYXNlICdoc3YnOlxuICAgICAgcmV0dXJuIGNvbG9yc3lzLmhzdjJIc2woY29sb3IpXG4gICAgY2FzZSAnY215ayc6XG4gICAgICByZXR1cm4gY29sb3JzeXMucmdiMkhzbChjb2xvcnN5cy5jbXlrMlJnYihjb2xvcikpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndW5rbm93bidcbiAgfVxufVxuXG4vLyBBbGlhc2VzXG5jb2xvcnN5cy5hbnlfdG9faHNsID0gY29sb3JzeXMuYW55VG9Ic2wgPSBjb2xvcnN5cy5hbnkySHNsXG5cbi8vIFdpbGwgcmV0dXJuIHRoZSB0cmFuc2Zvcm1pbmcgdG8gZW5jb2RlIGZ1bmN0aW9uXG4vLyBvciB1bmRlZmluZWRcbmNvbG9yc3lzLmdldFRyYW5zZm9ybUVuY29kaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAoY29sb3IsIGRlc2lyZWRFbmNvZGluZykge1xuICBjb25zdCBvcmlnaW5hbEVuY29kaW5nID0gY29sb3JzeXMuZ2V0Q29sb3JFbmNvZGluZyhjb2xvcilcbiAgcmV0dXJuIGNvbG9yc3lzW29yaWdpbmFsRW5jb2RpbmcgKyAnX3RvXycgKyBkZXNpcmVkRW5jb2RpbmddXG59XG5cbi8vIFRPRE86XG4vLyBDcmVhdGUgZGFya2VuIC8gbGlnaHRlbiBtZXRob2RzIHdpdGggc2FtZSBpbnB1dC9vdXRwdXQgZm9ybWF0XG5jb2xvcnN5cy5kYXJrZW4gPSBmdW5jdGlvbiAoY29sb3IsIHBlcmNlbnRhZ2UpIHtcbiAgY29uc3QgZW5jb2RpbmcgPSBjb2xvcnN5cy5nZXRDb2xvckVuY29kaW5nKGNvbG9yKVxuXG4gIGlmIChlbmNvZGluZyA9PT0gJ3Vua25vd24nKSB7XG4gICAgcmV0dXJuIGNvbG9yXG4gIH1cblxuICAvLyBNaXNzaW5nIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIGJldHdlZW4gaHNsIGFuZCBjbXlrXG4gIC8vIEFsc28sIHRoaXMgYWxnbyBpcyBzaW1wbGUgYW5kIHByZWNpc2VcbiAgaWYgKGVuY29kaW5nID09PSAnY215aycpIHtcbiAgICBjb25zdCBuZXh0Q215ayA9IGNvbG9yXG4gICAgbmV4dENteWsuayA9IE1hdGgubWluKDEwMCwgMTAwICogcGVyY2VudGFnZSArIG5leHRDbXlrLmspXG4gICAgcmV0dXJuIG5leHRDbXlrXG4gIH1cblxuICBjb25zdCBoc2wgPSBjb2xvcnN5cy5hbnkySHNsKGNvbG9yKVxuICBjb25zdCBuZXh0SHNsID0ge2g6IGhzbC5oLCBzOiBoc2wucywgbDogTWF0aC5yb3VuZChoc2wubCAqICgxIC0gcGVyY2VudGFnZSkpfVxuXG4gIGNvbnN0IHRyYW5zZm9ybUZuID0gZW5jb2RpbmcgPT09ICdoc2wnXG4gICAgPyBjID0+IGMgLy8gSWYgSFNMIHJldHVybiBhcyBpbmNhbWVcbiAgICA6IGNvbG9yc3lzLmdldFRyYW5zZm9ybUVuY29kaW5nRnVuY3Rpb24obmV4dEhzbCwgZW5jb2RpbmcpXG5cbiAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1GbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjb2xvclxuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybUZuKG5leHRIc2wpXG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL2ltZy9pY29ucy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbFxcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBjb250YWluO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3ZpZGVvLFxcbiNjb3B5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXJnZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uY29udHJvbHMsXFxuLnN0YXJ0ZWQgLmluZm8sXFxuYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0YXJ0ZWQgLmNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuYnV0dG9uICsgbGFiZWwsXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSArIGxhYmVsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jb3NjaWxsYXRvckNvbG91clt2YWx1ZT1cXFwiclxcXCJdICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4jb3NjaWxsYXRvckNvbG91clt2YWx1ZT1cXFwiZ1xcXCJdICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDtcXG59XFxuXFxuI29zY2lsbGF0b3JDb2xvdXJbdmFsdWU9XFxcImJcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IDA7XFxufVxcblxcbiNmaWx0ZXJDb2xvdXJbdmFsdWU9XFxcInJcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMycHg7XFxufVxcblxcbiNmaWx0ZXJDb2xvdXJbdmFsdWU9XFxcImdcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0zMnB4O1xcbn1cXG5cXG4jZmlsdGVyQ29sb3VyW3ZhbHVlPVxcXCJiXFxcIl0gKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMzJweDtcXG59XFxuXFxuI3Jlc29uYW5jZUNvbG91clt2YWx1ZT1cXFwiclxcXCJdICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuXFxuI3Jlc29uYW5jZUNvbG91clt2YWx1ZT1cXFwiZ1xcXCJdICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IDA7XFxufVxcblxcbiNyZXNvbmFuY2VDb2xvdXJbdmFsdWU9XFxcImJcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAwO1xcbn1cXG5cXG4jcmluZ01vZFt2YWx1ZT1cXFwib2ZmXFxcIl0gKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDtcXG59XFxuXFxuI3JpbmdNb2RbdmFsdWU9XFxcImhvcml6b250YWxcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMzJweDtcXG59XFxuXFxuI3JpbmdNb2RbdmFsdWU9XFxcInZlcnRpY2FsXFxcIl0gKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTMycHg7XFxufVxcblxcbiNjb2xsYXRvclt2YWx1ZT1cXFwiYXZnXFxcIl0gKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDgwcHggMDtcXG59XFxuXFxuI2NvbGxhdG9yW3ZhbHVlPVxcXCJjZW50cmVcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00ODBweCAtMzJweDtcXG59XFxuXFxuI3BpdGNoUm93W3ZhbHVlPVxcXCJvZmZcXFwiXSArIGxhYmVsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01MTJweCAwO1xcbn1cXG5cXG4jcGl0Y2hSb3dbdmFsdWU9XFxcIm9uXFxcIl0gKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTEycHggLTMycHg7XFxufVxcblxcbiNjb25uZWN0ZWRbdmFsdWU9XFxcIm9mZlxcXCJdICsgbGFiZWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ0OHB4IDA7XFxufVxcblxcbiNjb25uZWN0ZWRbdmFsdWU9XFxcIm9uXFxcIl0gKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDQ4cHggLTMycHg7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiZmlsdGVyXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzJweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJyZXNvbmFuY2VcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcIm9mZlJpbmdNb2RcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImhvcml6b250YWxSaW5nTW9kXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ2ZXJ0aWNhbFJpbmdNb2RcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImNvbGxhdG9yXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJwaXRjaFJvd1xcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiY29ubmVjdGVkXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJzaW5lXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IDA7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwic2F3dG9vdGhcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0cmlhbmdsZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNTZweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInNxdWFyZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yODhweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImFsbHBhc3NcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzIwcHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJoaWdocGFzc1xcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zNTJweCAwO1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcImxvd3Bhc3NcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzg0cHggMDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJiYW5kcGFzc1xcXCJdIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00MTZweCAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0zMnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VtY28uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTdhZWIyODI5MzM4Y2NkMzg4NmYyOTUwNWIwODFiNjcucG5nXCI7IiwiaW1wb3J0IFwiLi9qcy91bWNvLmpzXCI7XG5pbXBvcnQgXCIuL2Nzcy91bWNvLmNzc1wiO1xuIiwiY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgcmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhdmdDb2xvdXJDb2xsYXRvcihkYXRhKSB7XG4gIGNvbnN0IGRhdGFQZXJQaXhlbCA9IDQ7XG4gIGNvbnN0IGxlbmd0aCA9IGRhdGEuZGF0YS5sZW5ndGg7XG4gIGNvbnN0IHBpeGVscyA9IGxlbmd0aCAvIGRhdGFQZXJQaXhlbDtcbiAgbGV0IGkgPSAwLFxuICAgIHIgPSAwLFxuICAgIGcgPSAwLFxuICAgIGIgPSAwO1xuICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgIHIgKz0gZGF0YS5kYXRhW2ldO1xuICAgIGcgKz0gZGF0YS5kYXRhW2kgKyAxXTtcbiAgICBiICs9IGRhdGEuZGF0YVtpICsgMl07XG4gICAgaSArPSBkYXRhUGVyUGl4ZWw7XG4gIH1cbiAgcmV0dXJuIHsgcjogciAvIHBpeGVscywgZzogZyAvIHBpeGVscywgYjogYiAvIHBpeGVscyB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2VudHJlQ29sb3VyQ29sbGF0b3IoZGF0YSkge1xuICBjb25zdCBkYXRhUGVyUGl4ZWwgPSA0O1xuICBjb25zdCBsZW5ndGggPSBkYXRhLmRhdGEubGVuZ3RoO1xuICBjb25zdCBpID0gTWF0aC5mbG9vcihsZW5ndGggLyBkYXRhUGVyUGl4ZWwgLyAyKSAqIGRhdGFQZXJQaXhlbDtcbiAgcmV0dXJuIHtcbiAgICByOiBkYXRhLmRhdGFbaV0sXG4gICAgZzogZGF0YS5kYXRhW2kgKyAxXSxcbiAgICBiOiBkYXRhLmRhdGFbaSArIDJdXG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGF2Z0NvbG91cjogcmVxdWlyZShcIi4vYXZnLWNvbG91clwiKSxcbiAgY2VudHJlQ29sb3VyOiByZXF1aXJlKFwiLi9jZW50cmUtY29sb3VyXCIpXG59O1xuIiwiY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29ubmVjdENhbWVyYShjYWxsYmFjaykge1xuICBjb25zdCBNRURJQV9DT05TVFJBSU5UUyA9IHtcbiAgICBhdWRpbzogZmFsc2UsXG4gICAgdmlkZW86IHtcbiAgICAgIHdpZHRoOiB7XG4gICAgICAgIGlkZWFsOiB3aWR0aFxuICAgICAgfSxcbiAgICAgIGhlaWdodDoge1xuICAgICAgICBpZGVhbDogaGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgLmdldFVzZXJNZWRpYShNRURJQV9DT05TVFJBSU5UUylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChtZWRpYVN0cmVhbSkge1xuICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlkZW9cIik7XG4gICAgICAgIHZpZGVvLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtO1xuICAgICAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgICAgICB2aWRlby5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgdmlkZW8pO1xuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICB9XG59O1xuIiwiY29uc3QgbW9kZWwgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcblxuZnVuY3Rpb24gY29ubmVjdFJhZGlvVmFsdWUocmFkaW9OYW1lKSB7XG4gIGNvbnN0IHJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9XCIke3JhZGlvTmFtZX1cIl1gKTtcbiAgY29uc3QgcmFkaW9WYWx1ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBtb2RlbC5zdG9yZShyYWRpb05hbWUsIGV2dC50YXJnZXQudmFsdWUpO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgIHJhZGlvc1tpXS5vbmNsaWNrID0gcmFkaW9WYWx1ZTtcbiAgfVxuICByYWRpb3NbMF0uY2xpY2soKTtcbn1cblxuZnVuY3Rpb24gY29ubmVjdFJvdGF0aW5nVmFsdWUoYnV0dG9uSWQsIGl0ZW1zKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgYnV0dG9uSWQpO1xuICBsZXQgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoeCA9PiB4ID09PSBlbGVtZW50LnZhbHVlKSAtIDE7XG4gIGNvbnN0IHJvdGF0aW5nVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW5kZXggPSAoaW5kZXggKyAxKSAlIGl0ZW1zLmxlbmd0aDtcbiAgICBtb2RlbC5zdG9yZShidXR0b25JZCwgaXRlbXNbaW5kZXhdKTtcbiAgICBlbGVtZW50LnZhbHVlID0gaXRlbXNbaW5kZXhdO1xuICB9O1xuICBlbGVtZW50Lm9uY2xpY2sgPSByb3RhdGluZ1ZhbHVlO1xuICBlbGVtZW50LmNsaWNrKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29ubmVjdExpc3RlbmVycygpIHtcbiAgY29ubmVjdFJhZGlvVmFsdWUoXCJvc2NpbGxhdG9yVHlwZVwiKTtcbiAgY29ubmVjdFJhZGlvVmFsdWUoXCJmaWx0ZXJUeXBlXCIpO1xuXG4gIGNvbnN0IGNvbG91ck9yZGVyID0gW1wiclwiLCBcImdcIiwgXCJiXCJdO1xuICBjb25uZWN0Um90YXRpbmdWYWx1ZShcIm9zY2lsbGF0b3JDb2xvdXJcIiwgY29sb3VyT3JkZXIpO1xuICBjb25uZWN0Um90YXRpbmdWYWx1ZShcImZpbHRlckNvbG91clwiLCBjb2xvdXJPcmRlcik7XG4gIGNvbm5lY3RSb3RhdGluZ1ZhbHVlKFwicmVzb25hbmNlQ29sb3VyXCIsIGNvbG91ck9yZGVyKTtcblxuICBjb25zdCBjb2xsYXRvck9yZGVyID0gW1wiYXZnXCIsIFwiY2VudHJlXCJdO1xuICBjb25uZWN0Um90YXRpbmdWYWx1ZShcImNvbGxhdG9yXCIsIGNvbGxhdG9yT3JkZXIpO1xuXG4gIGNvbnN0IHJpbmdNb2RPcmRlciA9IFtcIm9mZlwiLCBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgY29ubmVjdFJvdGF0aW5nVmFsdWUoXCJyaW5nTW9kXCIsIHJpbmdNb2RPcmRlcik7XG5cbiAgY29uc3Qgb2ZmT24gPSBbXCJvZmZcIiwgXCJvblwiXTtcbiAgY29ubmVjdFJvdGF0aW5nVmFsdWUoXCJwaXRjaFJvd1wiLCBvZmZPbik7XG4gIGNvbm5lY3RSb3RhdGluZ1ZhbHVlKFwiY29ubmVjdGVkXCIsIG9mZk9uKTtcblxuICByZXR1cm4gbW9kZWw7XG59O1xuIiwiY29uc3Qgcm93cyA9IDM7XG5jb25zdCBjb2x1bW5zID0gMztcbmNvbnN0IHRvdGFsID0gcm93cyAqIGNvbHVtbnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByb3dzLFxuICBjb2x1bW5zLFxuICB0b3RhbCxcbiAgd2lkdGg6IDMwMCxcbiAgaGVpZ2h0OiAzMDAsXG4gIGxvd0ZyZXE6IDgwLFxuICBhc0luZGV4KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHJvdyAqIGNvbHVtbnMgKyBjb2w7XG4gIH0sXG4gIGFzUm93Q29sKGluZGV4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdzogTWF0aC5mbG9vcihpbmRleCAvIGNvbHVtbnMpLFxuICAgICAgY29sOiBpbmRleCAlIGNvbHVtbnNcbiAgICB9O1xuICB9XG59O1xuIiwiY29uc3QgeyByb3dzLCBjb2x1bW5zLCB0b3RhbCwgYXNJbmRleCB9ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUF1ZGlvR3JhcGgobW9kZWwpIHtcbiAgY29uc3QgYXVkaW9DdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcblxuICBjb25zdCBvc2NpbGxhdG9ycyA9IG5ldyBBcnJheSh0b3RhbCk7XG4gIGNvbnN0IGZpbHRlcnMgPSBuZXcgQXJyYXkodG90YWwpO1xuICBjb25zdCBnYWlucyA9IG5ldyBBcnJheSh0b3RhbCk7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3RhbDsgaW5kZXgrKykge1xuICAgIGdhaW5zW2luZGV4XSA9IGF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcbiAgICBmaWx0ZXJzW2luZGV4XSA9IGF1ZGlvQ3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIGZpbHRlcnNbaW5kZXhdLmNvbm5lY3QoZ2FpbnNbaW5kZXhdKTtcbiAgICBvc2NpbGxhdG9yc1tpbmRleF0gPSBhdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgb3NjaWxsYXRvcnNbaW5kZXhdLmNvbm5lY3QoZmlsdGVyc1tpbmRleF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV3aXJlTm9SaW5nTW9kKCkge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b3RhbDsgaW5kZXgrKykge1xuICAgICAgZ2FpbnNbaW5kZXhdLmNvbm5lY3QoYXVkaW9DdHguZGVzdGluYXRpb24pO1xuICAgICAgZ2FpbnNbaW5kZXhdLmdhaW4udmFsdWUgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJld2lyZUhvcml6b250YWxSaW5nTW9kKGVuYWJsZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93czsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IGNvbHVtbnM7IHgrKykge1xuICAgICAgICBjb25zdCB0aGlzR2FpbiA9IGdhaW5zW2FzSW5kZXgoeSwgeCldO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhaW4gPSBnYWluc1thc0luZGV4KHksIHggLSAxKV07XG4gICAgICAgIHByZXZpb3VzR2Fpbi5kaXNjb25uZWN0KGVuYWJsZSA/IGF1ZGlvQ3R4LmRlc3RpbmF0aW9uIDogdGhpc0dhaW4uZ2Fpbik7XG4gICAgICAgIHByZXZpb3VzR2Fpbi5jb25uZWN0KGVuYWJsZSA/IHRoaXNHYWluLmdhaW4gOiBhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV3aXJlVmVydGljYWxSaW5nTW9kKGVuYWJsZSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgY29sdW1uczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMTsgeSA8IHJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCB0aGlzR2FpbiA9IGdhaW5zW2FzSW5kZXgoeSwgeCldO1xuICAgICAgICBjb25zdCBwcmV2aW91c0dhaW4gPSBnYWluc1thc0luZGV4KHkgLSAxLCB4KV07XG4gICAgICAgIHByZXZpb3VzR2Fpbi5kaXNjb25uZWN0KGVuYWJsZSA/IGF1ZGlvQ3R4LmRlc3RpbmF0aW9uIDogdGhpc0dhaW4uZ2Fpbik7XG4gICAgICAgIHByZXZpb3VzR2Fpbi5jb25uZWN0KGVuYWJsZSA/IHRoaXNHYWluLmdhaW4gOiBhdWRpb0N0eC5kZXN0aW5hdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgb3NjaWxsYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAob3NjaWxsYXRvcikge1xuICAgICAgb3NjaWxsYXRvci5zdGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRSaW5nTW9kID0gcmV3aXJlTm9SaW5nTW9kO1xuICBjdXJyZW50UmluZ01vZCh0cnVlKTtcblxuICBtb2RlbC5saXN0ZW4oKHsgZmllbGQsIHZhbHVlIH0pID0+IHtcbiAgICBpZiAoZmllbGQgPT09IFwib3NjaWxsYXRvclR5cGVcIikge1xuICAgICAgb3NjaWxsYXRvcnMuZm9yRWFjaChvID0+IHtcbiAgICAgICAgby50eXBlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImZpbHRlclR5cGVcIikge1xuICAgICAgZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgICBmLnR5cGUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwicmluZ01vZFwiKSB7XG4gICAgICBjdXJyZW50UmluZ01vZChmYWxzZSk7XG4gICAgICBpZiAodmFsdWUgPT09IFwib2ZmXCIpIHtcbiAgICAgICAgY3VycmVudFJpbmdNb2QgPSByZXdpcmVOb1JpbmdNb2Q7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBjdXJyZW50UmluZ01vZCA9IHJld2lyZUhvcml6b250YWxSaW5nTW9kO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGN1cnJlbnRSaW5nTW9kID0gcmV3aXJlVmVydGljYWxSaW5nTW9kO1xuICAgICAgfVxuICAgICAgY3VycmVudFJpbmdNb2QodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGF1ZGlvQ3R4LFxuICAgIG9zY2lsbGF0b3JzLFxuICAgIGZpbHRlcnMsXG4gICAgZ2FpbnMsXG4gICAgc3RhcnRcbiAgfTtcbn07XG4iLCJjb25zdCB7IHJvd3MsIGNvbHVtbnMsIHdpZHRoLCBoZWlnaHQsIGFzSW5kZXggfSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbmNvbnN0IGNhbnZhc0NvbnRleHQgPSByZXF1aXJlKFwiLi9jYW52YXMtY29udGV4dFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsQm94KHRhcmdldFNlbGVjdG9yKSB7XG4gIGNvbnN0IHRhcmdldEN0eCA9IGNhbnZhc0NvbnRleHQodGFyZ2V0U2VsZWN0b3IpO1xuICBjb25zdCBib3hXaWR0aCA9IHdpZHRoIC8gY29sdW1ucztcbiAgY29uc3QgYm94SGVpZ2h0ID0gaGVpZ2h0IC8gcm93cztcblxuICByZXR1cm4gYm94Q29sb3VycyA9PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IGNvbCAqIGJveFdpZHRoO1xuICAgICAgICBjb25zdCBzdGFydFkgPSByb3cgKiBib3hIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNvbG91ciA9IGJveENvbG91cnNbYXNJbmRleChyb3csIGNvbCldO1xuXG4gICAgICAgIGNvbnN0IHsgcmdiIH0gPSBjb2xvdXI7XG4gICAgICAgIHRhcmdldEN0eC5maWxsU3R5bGUgPSByZ2I7XG4gICAgICAgIHRhcmdldEN0eC5maWxsUmVjdChzdGFydFgsIHN0YXJ0WSwgYm94V2lkdGgsIGJveEhlaWdodCk7XG4gICAgICAgIHRhcmdldEN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbiIsImNvbnN0IHsgcm93cywgY29sdW1ucywgdG90YWwsIHdpZHRoLCBoZWlnaHQsIGFzSW5kZXggfSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbmNvbnN0IGNhbnZhc0NvbnRleHQgPSByZXF1aXJlKFwiLi9jYW52YXMtY29udGV4dFwiKTtcbmNvbnN0IGNvbG9yc3lzID0gcmVxdWlyZShcImNvbG9yc3lzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldENvbG91cnMoc291cmNlU2VsZWN0b3IsIHZpZGVvKSB7XG4gIGNvbnN0IHNvdXJjZUN0eCA9IGNhbnZhc0NvbnRleHQoc291cmNlU2VsZWN0b3IpO1xuICBjb25zdCBib3hXaWR0aCA9IHdpZHRoIC8gY29sdW1ucztcbiAgY29uc3QgYm94SGVpZ2h0ID0gaGVpZ2h0IC8gcm93cztcblxuICByZXR1cm4gY29sbGF0b3IgPT4ge1xuICAgIHNvdXJjZUN0eC5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGJveENvbG91cnMgPSBuZXcgQXJyYXkodG90YWwpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICBjb25zdCBzdGFydFggPSBjb2wgKiBib3hXaWR0aDtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gcm93ICogYm94SGVpZ2h0O1xuICAgICAgICBjb25zdCBkYXRhID0gc291cmNlQ3R4LmdldEltYWdlRGF0YShcbiAgICAgICAgICBzdGFydFgsXG4gICAgICAgICAgc3RhcnRZLFxuICAgICAgICAgIGJveFdpZHRoLFxuICAgICAgICAgIGJveEhlaWdodFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb2xsYXRlZENvbG91ciA9IGNvbGxhdG9yKGRhdGEpO1xuICAgICAgICBjb25zdCB7IHIsIGcsIGIgfSA9IGNvbGxhdGVkQ29sb3VyO1xuICAgICAgICBjb25zdCB7IGgsIHMsIHYgfSA9IGNvbG9yc3lzLnJnYlRvSHN2KGNvbGxhdGVkQ29sb3VyKTtcblxuICAgICAgICBib3hDb2xvdXJzW2FzSW5kZXgocm93LCBjb2wpXSA9IHtcbiAgICAgICAgICByZ2I6IGByZ2IoJHtNYXRoLmZsb29yKHIpfSwke01hdGguZmxvb3IoZyl9LCR7TWF0aC5mbG9vcihiKX0pYCxcbiAgICAgICAgICByOiByIC8gMjU1LFxuICAgICAgICAgIGc6IGcgLyAyNTUsXG4gICAgICAgICAgYjogYiAvIDI1NSxcbiAgICAgICAgICBoOiBoIC8gMzYwLFxuICAgICAgICAgIHM6IHMgLyAxMDAsXG4gICAgICAgICAgdjogdiAvIDEwMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm94Q29sb3VycztcbiAgfTtcbn07XG4iLCJjb25zdCBsaXN0ZW5lcnMgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0b3JlKGZpZWxkLCB2YWx1ZSkge1xuICAgIHRoaXNbZmllbGRdID0gdmFsdWU7XG4gICAgbGlzdGVuZXJzLmZvckVhY2gobCA9PiBsKHsgZmllbGQsIHZhbHVlIH0pKTtcbiAgfSxcbiAgbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG59O1xuIiwiY29uc3QgY3JlYXRlQXVkaW9HcmFwaCA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1hdWRpby1ncmFwaFwiKTtcbmNvbnN0IGNvbm5lY3RDYW1lcmEgPSByZXF1aXJlKFwiLi9jb25uZWN0LWNhbWVyYVwiKTtcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSByZXF1aXJlKFwiLi9jb25uZWN0LWxpc3RlbmVyc1wiKTtcbmNvbnN0IGdldENvbG91cnNGYWN0b3J5ID0gcmVxdWlyZShcIi4vZ2V0LWNvbG91cnNcIik7XG5jb25zdCBmaWxsQm94RmFjdG9yeSA9IHJlcXVpcmUoXCIuL2ZpbGwtYm94XCIpO1xuY29uc3QgdXBkYXRlQXVkaW9HcmFwaEZhY3RvcnkgPSByZXF1aXJlKFwiLi91cGRhdGUtYXVkaW8tZ3JhcGhcIik7XG5jb25zdCB7IGF2Z0NvbG91ciwgY2VudHJlQ29sb3VyIH0gPSByZXF1aXJlKFwiLi9jb2xsYXRvcnNcIik7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbm5lY3RDYW1lcmEoZnVuY3Rpb24gKGVyciwgdmlkZW8pIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIikuaW5uZXJIVE1MID1cbiAgICAgICAgXCJGYWlsZWQgdG8gY29ubmVjdCB0byBjYW1lcmE6IFwiICsgZXJyLm1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gXCJzdGFydGVkXCI7XG4gICAgICBjb25zdCBtb2RlbCA9IGNvbm5lY3RMaXN0ZW5lcnMoKTtcbiAgICAgIGNvbnN0IGF1ZGlvR3JhcGggPSBjcmVhdGVBdWRpb0dyYXBoKG1vZGVsKTtcbiAgICAgIGNvbnN0IGdldENvbG91cnMgPSBnZXRDb2xvdXJzRmFjdG9yeShcIiNjb3B5XCIsIHZpZGVvKTtcbiAgICAgIGNvbnN0IGZpbGxCb3ggPSBmaWxsQm94RmFjdG9yeShcIiN0YXJnZXRcIik7XG4gICAgICBjb25zdCB1cGRhdGVBdWRpb0dyYXBoID0gdXBkYXRlQXVkaW9HcmFwaEZhY3RvcnkoYXVkaW9HcmFwaCwgbW9kZWwpO1xuXG4gICAgICAvLyBkZWJ1ZyEhXG4gICAgICBtb2RlbC5saXN0ZW4oeCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9kZWwgY2hhbmdlXCIsIHgpO1xuICAgICAgfSk7XG5cbiAgICAgIGF1ZGlvR3JhcGguc3RhcnQoKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb2xsYXRvciA9IG1vZGVsLmNvbGxhdG9yID09PSBcImNlbnRyZVwiID8gY2VudHJlQ29sb3VyIDogYXZnQ29sb3VyO1xuICAgICAgICBjb25zdCBjb2xvdXJzID0gZ2V0Q29sb3Vycyhjb2xsYXRvcik7XG4gICAgICAgIGZpbGxCb3goY29sb3Vycyk7XG4gICAgICAgIHVwZGF0ZUF1ZGlvR3JhcGgoY29sb3Vycyk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiY29uc3QgeyByb3dzLCBjb2x1bW5zLCBhc0luZGV4LCB0b3RhbCwgbG93RnJlcSB9ID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBzY2FsZShjb2xvdXIsIHNjYWxhciA9IDEpIHtcbiAgcmV0dXJuIE1hdGgucG93KE1hdGgucG93KDIuMCwgc2NhbGFyKSwgY29sb3VyKTtcbn1cblxuZnVuY3Rpb24gb3NjRnJlcShjb2xvdXIsIHJvdykge1xuICByZXR1cm4gKFxuICAgIGxvd0ZyZXEgKiAocm93ID8gTWF0aC5wb3coMiwgcm93KSAqIHNjYWxlKGNvbG91ciwgMSkgOiBzY2FsZShjb2xvdXIsIHJvd3MpKVxuICApO1xufVxuXG5mdW5jdGlvbiBjdXRvZmZGcmVxKGNvbG91cikge1xuICByZXR1cm4gNTAwICogc2NhbGUoY29sb3VyKTtcbn1cblxuZnVuY3Rpb24gcShjb2xvdXIpIHtcbiAgcmV0dXJuIDAuNSArIChjb2xvdXIgLyAyKTtcbn1cblxuZnVuY3Rpb24gcmVsYXRpdmUoY29sb3VyKSB7XG4gIHJldHVybiAxLjAgKyAoY29sb3VyIC0gMC41KSAvIDU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGF1ZGlvR3JhcGgsIG1vZGVsKSB7XG4gIGNvbnN0IHsgYXVkaW9DdHgsIG9zY2lsbGF0b3JzLCBmaWx0ZXJzIH0gPSBhdWRpb0dyYXBoO1xuXG4gIHJldHVybiBjb2xvdXJzID0+IHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhc0luZGV4KHJvdywgY29sKTtcbiAgICAgICAgY29uc3QgY29sb3VyID0gY29sb3Vyc1tpbmRleF07XG4gICAgICAgIGxldCBvc2NpbGxhdG9yRnJlcTtcblxuICAgICAgICBpZiAobW9kZWwuY29ubmVjdGVkID09PSBcIm9uXCIpIHtcbiAgICAgICAgICBjb25zdCBjZW50cmVJbmRleCA9XG4gICAgICAgICAgICBtb2RlbC5waXRjaFJvdyA9PT0gXCJvblwiXG4gICAgICAgICAgICAgID8gYXNJbmRleChyb3csIE1hdGguZmxvb3IoY29sdW1ucyAvIDIpKVxuICAgICAgICAgICAgICA6IGFzSW5kZXgoTWF0aC5mbG9vcihyb3cgLyAyKSwgTWF0aC5mbG9vcihjb2x1bW5zIC8gMikpO1xuICAgICAgICAgIGNvbnN0IHJlbGF0aXZlVG8gPSBvc2NGcmVxKFxuICAgICAgICAgICAgY29sb3Vyc1tjZW50cmVJbmRleF1bbW9kZWwub3NjaWxsYXRvckNvbG91cl0sXG4gICAgICAgICAgICBtb2RlbC5waXRjaFJvdyA9PT0gXCJvblwiID8gcm93IDogbnVsbFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBvc2NpbGxhdG9yRnJlcSA9XG4gICAgICAgICAgICBjZW50cmVJbmRleCA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgPyByZWxhdGl2ZVRvXG4gICAgICAgICAgICAgIDogcmVsYXRpdmVUbyAqIHJlbGF0aXZlKGNvbG91clttb2RlbC5vc2NpbGxhdG9yQ29sb3VyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3NjaWxsYXRvckZyZXEgPSBvc2NGcmVxKFxuICAgICAgICAgICAgY29sb3VyW21vZGVsLm9zY2lsbGF0b3JDb2xvdXJdLFxuICAgICAgICAgICAgbW9kZWwucGl0Y2hSb3cgPT09IFwib25cIiA/IHJvdyA6IG51bGxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgb3NjaWxsYXRvcnNbaW5kZXhdLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUoXG4gICAgICAgICAgb3NjaWxsYXRvckZyZXEsXG4gICAgICAgICAgYXVkaW9DdHguY3VycmVudFRpbWUsXG4gICAgICAgICAgMC4xXG4gICAgICAgICk7XG4gICAgICAgIGZpbHRlcnNbaW5kZXhdLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUoXG4gICAgICAgICAgY3V0b2ZmRnJlcShjb2xvdXJbbW9kZWwuZmlsdGVyQ29sb3VyXSksXG4gICAgICAgICAgYXVkaW9DdHguY3VycmVudFRpbWUsXG4gICAgICAgICAgMC4xXG4gICAgICAgICk7XG4gICAgICAgIGZpbHRlcnNbaW5kZXhdLlEuc2V0VGFyZ2V0QXRUaW1lKFxuICAgICAgICAgIHEoY29sb3VyW21vZGVsLnJlc29uYW5jZUNvbG91cl0pLFxuICAgICAgICAgIGF1ZGlvQ3R4LmN1cnJlbnRUaW1lLFxuICAgICAgICAgIDAuMVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9