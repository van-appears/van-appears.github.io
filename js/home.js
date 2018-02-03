window.onload = function () {
  var webAudioTestEl = document.querySelector('.web-audio-test')
  if (typeof window.AudioContext === 'function' ||
    typeof window.webkitAudioContext === 'function') {
    webAudioTestEl.innerHTML = 'Yay!'
    webAudioTestEl.className = 'web-audio-test yay'
  } else {
    webAudioTestEl.innerHTML = 'Nope.'
    webAudioTestEl.className = 'web-audio-test nope'
  }
}
