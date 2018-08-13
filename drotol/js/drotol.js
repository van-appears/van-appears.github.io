(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function updateModelPosition (block) {
  block.dataPos += block.dataSpeed
  if (block.dataPos >= 128) {
    block.dataPos -= 128
  }
}

function updateModelPositions (model) {
  updateModelPosition(model.oscillator1Frequency)
  updateModelPosition(model.oscillator2Frequency)
  updateModelPosition(model.gain)
  updateModelPosition(model.filterFrequency)
  updateModelPosition(model.filterQ)
}

function getScaledValue (block) {
  return (254.0 - block.data[Math.floor(block.dataPos)]) / 254.0
}

function AudioGraphControl (audioGraph, model) {
  this.model = model
  this.audioGraph = audioGraph
  this.lastOscillator1Type = audioGraph.oscillator1.type
  this.lastOscillator2Type = audioGraph.oscillator2.type
  this.lastFilterType = audioGraph.filter.type
  this.lastEchoLength = audioGraph.delay.delayTime.value
}

AudioGraphControl.prototype.start = function () {
  this.audioGraph.oscillator1.start()
  this.audioGraph.oscillator2.start()
}

AudioGraphControl.prototype.update = function () {
  if (this.model.oscillator1Frequency.type !== this.lastOscillator1Type) {
    this.lastOscillator1Type = this.model.oscillator1Frequency.type
    this.audioGraph.oscillator1.type = this.lastOscillator1Type
  }
  if (this.model.oscillator2Frequency.type !== this.lastOscillator2Type) {
    this.lastOscillator2Type = this.model.oscillator2Frequency.type
    this.audioGraph.oscillator2.type = this.lastOscillator2Type
  }
  if (this.model.filterFrequency.type !== this.lastFilterType) {
    this.lastFilterType = this.model.filterFrequency.type
    this.audioGraph.filter.type = this.lastFilterType
  }
  if (this.model.echo.length !== this.lastEchoLength) {
    this.lastEchoLength = this.model.echo.length
    this.audioGraph.delay.delayTime.value = this.lastEchoLength
  }

  updateModelPositions(this.model)
  this.audioGraph.delayGain.gain.value = this.model.echo.enabled
    ? this.model.echo.sustain
    : 0

  var frequency1 = 60 * Math.pow(8, getScaledValue(this.model.oscillator1Frequency))
  this.audioGraph.oscillator1.frequency.value = frequency1

  var frequency2 = 60 * Math.pow(8, getScaledValue(this.model.oscillator2Frequency))
  this.audioGraph.oscillator2.frequency.value = frequency2

  var gain = getScaledValue(this.model.gain)
  this.audioGraph.oscillatorGain.gain.value = gain

  var filterFrequency = 60 * Math.pow(100, getScaledValue(this.model.filterFrequency))
  this.audioGraph.filter.frequency.value = filterFrequency

  var filterQ = this.model.filterQ.multiplier * getScaledValue(this.model.filterQ)
  this.audioGraph.filter.Q.value = filterQ
}

module.exports = AudioGraphControl

},{}],2:[function(require,module,exports){
var canvas = document.querySelector('#draw')
var canvasLeft = canvas.offsetLeft
var canvasTop = canvas.offsetTop
var context = canvas.getContext('2d')
var lastX = 0
var lastY = 0
var isStarted = false
var isDragging = false

function resetCanvas () {
  context.fillStyle = '#e6e6e6'
  context.fillRect(0, 0, 255, 255)
  context.beginPath()
  context.lineWidth = 1.0
  context.strokeStyle = '#ddd'
  context.moveTo(0, 128)
  context.lineTo(255, 128)
  context.stroke()
  context.closePath()
}

function renderData (data) {
  context.beginPath()
  context.strokeStyle = '#999'
  for (let i = 0; i < 128; i++) {
    const v1 = data[i]
    const v2 = data[i + 1]
    context.moveTo(i * 2, v1)
    context.lineTo((i + 1) * 2, v2)
  }
  context.stroke()
  context.closePath()
}

function renderPlayline (dataPos) {
  context.beginPath()
  context.strokeStyle = '#090'
  context.moveTo(dataPos * 2, 0)
  context.lineTo(dataPos * 2, 255)
  context.stroke()
  context.closePath()
}

function setRange (data, startX, startY, endX, endY) {
  var dist = (endY - startY) / (endX - startX)
  if (startX < endX) {
    for (let i = startX; i <= endX; i++) {
      data[i] = startY
      startY += dist
    }
  } else {
    for (let i = startX; i >= endX; i--) {
      data[i] = startY
      startY -= dist
    }
  }
}

function asX (evt) {
  var useEvent = evt.changedTouches
    ? evt.changedTouches[ 0 ]
    : evt
  return Math.floor((useEvent.pageX - canvasLeft) / 2)
}

function asY (evt) {
  var useEvent = evt.changedTouches
    ? evt.changedTouches[ 0 ]
    : evt
  return useEvent.pageY - canvasTop
}

function CanvasControl (model) {
  this.model = model
  canvas.addEventListener('mousedown', this.mouseDown.bind(this))
  canvas.addEventListener('mousemove', this.mouseMove.bind(this))
  canvas.addEventListener('mouseout', this.mouseUp.bind(this))
  canvas.addEventListener('mouseup', this.mouseUp.bind(this))
  canvas.addEventListener('touchstart', this.mouseDown.bind(this))
  canvas.addEventListener('touchmove', this.mouseMove.bind(this))
  canvas.addEventListener('touchend', this.mouseUp.bind(this))
  canvas.addEventListener('touchcancel', this.mouseUp.bind(this))
}

CanvasControl.prototype.update = function () {
  var active = this.model[this.model.active]
  this.data = active && active.data
  this.updated = false
  resetCanvas()
  if (!this.data) return
  renderData(this.data)
  renderPlayline(active && active.dataPos)
}

CanvasControl.prototype.mouseDown = function (mouseEvt) {
  if (!this.data) return
  lastX = asX(mouseEvt)
  lastY = asY(mouseEvt)
  this.data[ lastX ] = lastY
  isStarted = true
}

CanvasControl.prototype.mouseUp = function (mouseEvt) {
  if (!this.data) return
  var toX = asX(mouseEvt)
  var toY = mouseEvt.pageY - canvasTop
  if (isDragging) {
    setRange(this.data, lastX, lastY, toX, toY)
  } else if (isStarted) {
    this.data[ toX ] = toY
  }
  isStarted = false
  isDragging = false
  lastX = null
  lastY = null
}

CanvasControl.prototype.mouseMove = function (mouseEvt) {
  if (!this.data || this.updated) {
    return
  }
  if (isStarted) {
    var toX = asX(mouseEvt)
    var toY = asY(mouseEvt)
    setRange(this.data, lastX, lastY, toX, toY)
    this.updated = true
    isDragging = true
    lastX = toX
    lastY = toY
  }
}

module.exports = CanvasControl

},{}],3:[function(require,module,exports){
var createModel = require('./create-model')
var createAudioGraph = require('./create-audio-graph')
var AudioGraphControl = require('./AudioGraphControl')
var CanvasControl = require('./CanvasControl')
var connectListeners = require('./connect-listeners')
var initialiseValues = require('./initialise-values')

var model = createModel()
var audioGraph = createAudioGraph()
var graphControl = new AudioGraphControl(audioGraph, model)
var canvasControl = new CanvasControl(model)
initialiseValues(audioGraph, model)
connectListeners(model)
graphControl.start()

var flop = false
setInterval(function () {
  graphControl.update()
  if (flop) {
    canvasControl.update()
  }
  flop = !flop
}, 20)

},{"./AudioGraphControl":1,"./CanvasControl":2,"./connect-listeners":4,"./create-audio-graph":5,"./create-model":6,"./initialise-values":7}],4:[function(require,module,exports){
module.exports = function connectListeners (model) {
  var active = model[model.active]
  var speed = document.querySelector('#speed')
  var filterType = document.querySelector('#filterType')
  var echoEnabled = document.querySelector('#echoOnOff')
  var echoLength = document.querySelector('#echoLength')
  var echoSustain = document.querySelector('#echoSustain')
  var activeControlLabel = document.querySelector('.what')
  var body = document.querySelector('body')

  function setLabel(label, attr) {
    activeControlLabel.innerHTML = label
  }

  function selectOscillatorType(type) {
    document.querySelector(
      'input[name="oscillatorType"][value="' + type + '"]').click();
  }

  function radioClick (evt) {
    var selected = evt.target.value
    body.className = 'selected_' + selected
    model.active = selected
    active = model[selected]

    setLabel(active.label, active.type)
    speed.value = (Math.log(active.dataSpeed) / Math.log(2)) + 2
    if (selected === 'oscillator1Frequency') {
      selectOscillatorType(model.oscillator1Frequency.type)
    } else if (selected === 'oscillator2Frequency') {
      selectOscillatorType(model.oscillator2Frequency.type)
    }
  }

  function speedChange (evt) {
    active.dataSpeed = Math.pow(2, evt.target.value - 2)
  }

  function echoLengthChange (evt) {
    active.length = evt.target.value
  }

  function echoSustainChange (evt) {
    active.sustain = evt.target.value
  }

  function echoEnabledChange (evt) {
    active.enabled = evt.target.checked
  }

  function filterTypeChange (evt) {
    var selected = evt.target.value
    model.filterFrequency.type = selected
    setLabel(active.label, model.filterFrequency.type)

    switch (selected) {
      case 'notch':
      case 'bandpass':
        model.filterQ.multiplier = 30
        model.filterQ.label = 'Filter bandwidth'
        break
      default:
        model.filterQ.multiplier = 20
        model.filterQ.label = 'Filter resonance'
    }
  }

  function oscillatorTypeChange (evt) {
    active.type = evt.target.value
  }

  speed.addEventListener('input', speedChange)
  echoLength.addEventListener('change', echoLengthChange)
  echoSustain.addEventListener('input', echoSustainChange)
  echoEnabled.addEventListener('change', echoEnabledChange)

  var radios = document.querySelectorAll('input[name="box"]')
  for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = radioClick
  }
  radios[0].click()

  var filterTypeRadios = document.querySelectorAll('input[name="filterType"]')
  for (var i = 0; i < filterTypeRadios.length; i++) {
    filterTypeRadios[i].onclick = filterTypeChange
  }
  filterTypeRadios[0].click()

  var oscillatorTypeRadios= document.querySelectorAll('input[name="oscillatorType"]')
  for (var i = 0; i < oscillatorTypeRadios.length; i++) {
    oscillatorTypeRadios[i].onclick = oscillatorTypeChange
  }
  oscillatorTypeRadios[0].click()
}

},{}],5:[function(require,module,exports){
var audioCtx = new (window.AudioContext || window.webkitAudioContext)()

var oscillator1 = audioCtx.createOscillator()
var oscillator2 = audioCtx.createOscillator()
var ringMod = audioCtx.createGain()
var oscillatorGain = audioCtx.createGain()
var filter = audioCtx.createBiquadFilter()
var delay = audioCtx.createDelay()
var delayGain = audioCtx.createGain()

oscillator1.connect(ringMod)
oscillator2.connect(ringMod.gain)
ringMod.connect(oscillatorGain)
oscillatorGain.connect(filter)
filter.connect(audioCtx.destination)
filter.connect(delay)
delay.connect(delayGain)
delayGain.connect(audioCtx.destination)
delayGain.connect(delay)

module.exports = function createAudioGraph () {
  return {
    oscillator1: oscillator1,
    oscillator2: oscillator2,
    oscillatorGain: oscillatorGain,
    filter: filter,
    delay: delay,
    delayGain: delayGain
  }
}

},{}],6:[function(require,module,exports){
function canvasFields () {
  var arr = new Array(128)
  for (var i = 0; i < 128; i++) {
    arr[i] = 128
  }
  return {
    data: arr,
    dataPos: 0,
    dataSpeed: 0.25
  }
}

function extend (obj, additional) {
  for (var key in additional) {
    if (Object.prototype.hasOwnProperty.call(additional, key)) {
      obj[key] = additional[key]
    }
  }
  return obj
}

module.exports = function createModel () {
  return {
    active: 'oscillator1Frequency',
    oscillator1Frequency: extend({
      label: 'Frequency',
      type: 'triangle'
    }, canvasFields()),
    oscillator2Frequency: extend({
      label: 'Frequency',
      type: 'triangle'
    }, canvasFields()),
    gain: extend({
      label: 'Gain'
    }, canvasFields()),
    filterFrequency: extend({
      label: 'Filter frequency',
      type: 'allpass'
    }, canvasFields()),
    filterQ: extend({
      label: 'Filter resonance',
      multiplier: 1
    }, canvasFields()),
    echo: {
      label: 'Echo',
      length: 0.1,
      sustain: 0.5,
      enabled: true
    }
  }
}

},{}],7:[function(require,module,exports){
module.exports = function initialiseValues (audioGraph, model) {
  audioGraph.oscillator1.type = model.oscillator1Frequency.type
  audioGraph.oscillator2.type = model.oscillator2Frequency.type

  var echoEnabled = document.querySelector('#echoOnOff')
  echoEnabled.checked = model.echo.enabled

  var echoLength = document.querySelector('#echoLength')
  echoLength.value = model.echo.length
  audioGraph.delay.delayTime.value = model.echo.length

  var echoSustain = document.querySelector('#echoSustain')
  echoSustain.value = model.echo.sustain
  audioGraph.delayGain.gain.value = model.echo.sustain
}

},{}]},{},[3]);
