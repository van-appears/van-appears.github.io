(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();class O{constructor(t,e,i,n,s){this.ctx=t,this.model=e,this.idx=i,this.type=n,this.playable=s,this.playing=!1}connector(){return{connect(){},disconnect(){}}}disconnectOtherFromParam(t,e,i){typeof t=="number"&&(this.model.items[t].connector().disconnect(e),delete this.model.connections[this.idx][`${this.idx}_${i}`])}connectOtherToParam(t,e,i){typeof t=="number"&&(this.model.items[t].connector().connect(e),this.model.connections[this.idx][`${t}_${i}`]=e)}replaceOtherOnParam(t,e,i,n){this.disconnectOtherFromParam(t,i,n),this.connectOtherToParam(e,i,n)}play(t){this.playable&&(t?(this.connector().connect(this.ctx.destination),this.playing=!0):(this.connector().disconnect(this.ctx.destination),this.playing=!1))}label(){return`${this.idx} ${this.type}`}title(){return this.label()}controls(){return[]}setValuesTo(t){const e=this.controls()||[],i=t.controls()||[];for(let n=0;n<e.length;n++){if(!i[n])return;e[n].type===i[n].type&&i[n].set(e[n].get())}}describe(){return this.controls().filter(t=>t.get()!==void 0&&t.get()!=="").map(t=>`${this.idx} ${t.short} ${t.get()}`)}destroy(){this.playing&&this.play(!1)}asOption(){return{value:this.idx,label:this.label(),type:this.type}}}const y={DELAY:"delay",ECHO:"echo",EMPTY:"empty",FILTER:"filter",GAIN:"gain",MICROPHONE:"microphone",OSCILLATOR:"oscillator",FALLBACK_DELAY_SECONDS:1,MAX_DELAY_SECONDS:10,SEQUENCE_SEPARATOR:"---seq "},x=["sawtooth","sine","square","triangle"];class P extends O{constructor(t,e,i){super(t,e,i,y.OSCILLATOR,!0),this.osc=t.createOscillator(),this.gain=t.createGain(),this.delay=t.createDelay(),this.osc.connect(this.gain),this.gain.connect(this.delay),this.osc.start(0),this.delay.delayTime.setTargetAtTime(.001,0,0),this._controls=this.initControls(),this._controls[0].set(100),this._controls[2].set(1),this._controls[4].set("sine")}title(){return`${this.idx} ${this.type} ${this.osc.type}`}connector(){return this.delay}subtype(){const t=this;return{values:[],set(e){t.osc.type=e},get(){return t.osc.type}}}destroy(){super.destroy(),this.disconnectOtherFromParam(this.freqConnectValue,this.osc.frequency),this.disconnectOtherFromParam(this.gainConnectValue,this.gain.gain),this.osc.stop()}controls(){return this._controls}initControls(){const t=this;return[{type:"val",short:"f",label:"Freq",set(e){t.osc.frequency.cancelScheduledValues(0),t.osc.frequency.setValueCurveAtTime([t.freqValue||e,e],t.ctx.currentTime,t.freqTime||.001),t.freqValue=e},get(){return t.freqValue},setTime(e){t.freqTime=e},getTime(){return t.freqTime}},{type:"in",short:"fm",label:"Freq Mod",set(e){t.replaceOtherOnParam(t.freqConnectValue,e,t.osc.frequency,"freqConnect"),t.freqConnectValue=e},get(){return t.freqConnectValue}},{type:"val",short:"g",label:"Gain",set(e){t.gain.gain.cancelScheduledValues(0),t.gain.gain.setValueCurveAtTime([t.gainValue||e,e],t.ctx.currentTime,t.gainTime||.001),t.gainValue=e},get(){return t.gainValue},setTime(e){t.gainTime=e},getTime(){return t.gainTime}},{type:"in",short:"gm",label:"Gain Mod",set(e){t.replaceOtherOnParam(t.gainConnectValue,e,t.gain.gain,"gainConnect"),t.gainConnectValue=e},get(){return t.gainConnectValue}},{type:"type",short:"t",label:"Type",values:x,set(e){x.includes(e)&&(t.osc.type=e)},get(){return t.osc.type}}]}}function I(o,t){return function(e){return new P(o,t,e)}}const w=["lowpass","highpass","bandpass","notch"];class _ extends O{constructor(t,e,i){super(t,e,i,y.FILTER,!0),this.model=e,this.filter=t.createBiquadFilter(),this._controls=this.initControls(),this._controls[0].set(100),this._controls[2].set(.707),this._controls[4].set("lowpass")}title(){return`${this.idx} ${this.type} ${this.filter.type}`}connector(){return this.filter}controls(){return this._controls}initControls(){const t=this;return[{type:"val",short:"f",label:"Freq",set(e){t.filter.frequency.cancelScheduledValues(0),t.filter.frequency.setValueCurveAtTime([t.freqValue||e,e],t.ctx.currentTime,t.freqTime||.001),t.freqValue=e},get(){return t.freqValue},setTime(e){t.freqTime=e},getTime(){return t.freqTime}},{type:"in",short:"fm",label:"Freq Mod",set(e){t.replaceOtherOnParam(t.freqConnectValue,e,t.filter.frequency,"freqConnect"),t.freqConnectValue=e},get(){return t.freqConnectValue}},{type:"val",short:"q",label:"Q",set(e){t.filter.Q.cancelScheduledValues(0),t.filter.Q.setValueCurveAtTime([t.qValue||e,e],t.ctx.currentTime,t.qTime||.001),t.qValue=e},get(){return t.qValue},setTime(e){t.qTime=e},getTime(){return t.qTime}},{type:"in",short:"qm",label:"Q Mod",set(e){t.replaceOtherOnParam(t.qConnectValue,e,t.filter.Q,"qConnect"),t.qConnectValue=e},get(){return t.qConnectValue}},{type:"type",short:"t",label:"Type",values:w,set(e){w.includes(e)&&(t.filter.type=e)},get(){return t.filter.type}},{type:"in",short:"i",label:"Input",set(e){t.replaceOtherOnParam(t.inputConnectValue,e,t.filter,"input"),t.inputConnectValue=e},get(){return t.inputConnectValue}}]}destroy(){super.destroy(),this.disconnectOtherFromParam(this.freqConnectValue,this.filter.frequency),this.disconnectOtherFromParam(this.qConnectValue,this.filter.Q),this.disconnectOtherFromParam(this.inputConnectValue,this.filter)}}function B(o,t){return function(e){return new _(o,t,e)}}class L extends O{constructor(t,e,i){super(t,e,i,y.DELAY,!0),this.delay=t.createDelay(y.MAX_DELAY_SECONDS),this._controls=this.initControls(),this._controls[0].set(1)}connector(){return this.delay}controls(){return this._controls}initControls(){const t=this;return[{type:"val",short:"t",label:"Time <= 10s",max:y.MAX_DELAY_SECONDS,set(e){t.delay.delayTime.cancelScheduledValues(0),t.delay.delayTime.setValueCurveAtTime([t.delayTimeValue||e,e],t.ctx.currentTime,t.delayTimeTime||.001),t.delayTimeValue=e},get(){return t.delayTimeValue},setTime(e){t.delayTimeTime=e},getTime(){return t.delayTimeTime}},{type:"in",short:"i",label:"Input",set(e){t.replaceOtherOnParam(t.inputConnectValue,e,t.delay,"input"),t.inputConnectValue=e},get(){return t.inputConnectValue}}]}destroy(){super.destroy(),this.disconnectOtherFromParam(this.inputConnectValue,this.delay)}}function N(o,t){return function(e){return new L(o,t,e)}}class F extends O{constructor(t,e,i){super(t,e,i,y.ECHO,!0),this.delay=t.createDelay(),this.gain=t.createGain(),this.delay.connect(this.gain),this.gain.connect(this.delay),this._controls=this.initControls(),this._controls[0].set(1),this._controls[1].set(.5)}connector(){return this.gain}controls(){return this._controls}initControls(){const t=this;return[{type:"val",short:"t",label:"Time <= 10s",max:y.MAX_DELAY_SECONDS,set(e){t.delay.delayTime.cancelScheduledValues(0),t.delay.delayTime.setValueCurveAtTime([t.delayTimeValue||e,e],t.ctx.currentTime,t.delayTimeTime||.001),t.delayTimeValue=e},get(){return t.delayTimeValue},setTime(e){t.delayTimeTime=e},getTime(){return t.delayTimeTime}},{type:"val",short:"s",label:"Sustain",set(e){t.gain.gain.cancelScheduledValues(0),t.gain.gain.setValueCurveAtTime([t.gainValue||e,e],t.ctx.currentTime,t.gainTime||.001),t.gainValue=e},get(){return t.gainValue},setTime(e){t.gainTime=e},getTime(){return t.gainTime}},{type:"in",short:"i",label:"Input",set(e){t.replaceOtherOnParam(t.inputConnectValue,e,t.delay,"input"),t.inputConnectValue=e},get(){return t.inputConnectValue}}]}destroy(){super.destroy(),this.disconnectOtherFromParam(this.inputConnectValue,this.delay)}}function D(o,t){return function(e){return new F(o,t,e)}}class G extends O{constructor(t,e,i){super(t,e,i,y.GAIN,!0),this.gain=t.createGain(),this._controls=this.initControls(),this._controls[0].set(1)}connector(){return this.gain}controls(){return this._controls}initControls(){const t=this;return[{type:"val",short:"g",label:"Gain",set(e){t.gain.gain.cancelScheduledValues(0),t.gain.gain.setValueCurveAtTime([t.gainValue||e,e],t.ctx.currentTime,t.gainTime||.001),t.gainValue=e},get(){return t.gainValue},setTime(e){t.gainTime=e},getTime(){return t.gainTime}},{type:"in",short:"gm",label:"Gain Mod",set(e){t.replaceOtherOnParam(t.gainConnectValue,e,t.gain.gain,"gainConnect"),t.gainConnectValue=e},get(){return t.gainConnectValue}},{type:"in",short:"i",label:"Input",set(e){t.replaceOtherOnParam(t.inputConnectValue,e,t.gain,"input"),t.inputConnectValue=e},get(){return t.inputConnectValue}}]}destroy(){super.destroy(),this.disconnectOtherFromParam(this.inputConnectValue,this.gain)}}function M(o,t){return function(e){return new G(o,t,e)}}function E(o){const{items:t}=o;return function(e,i,n,s){if(e<0)return;if(i==="control"&&e>0){t[e]=o.types[n](e);return}if(i==="play"){t[e].play(!0);return}if(i==="stop"){t[e].play(!1);return}const u=(t[e].controls()||[]).find(c=>c.short===i)||{};if(u.type==="val"){const c=parseFloat(n),d=parseFloat(s);c&&(d>=0&&u.setTime(d),u.set(c))}else if(u.type==="in"){const c=parseInt(n);c&&e!==c&&u.set(c)}else u.type==="type"&&u.set(n)}}const{FALLBACK_DELAY_SECONDS:A,MAX_DELAY_SECONDS:W}=y;class k{constructor(t,e){this.executeCommand=E(t),this.idx=e,this.playing=!1,this.delay=A,this.lineNum=0,this.content=""}parseDelay(){return(parseFloat(this.delay)||A)*1e3}togglePlaying(){this.playing=!this.playing,this.playing?this.timeoutId=setTimeout(this.processLine.bind(this),this.parseDelay()):clearTimeout(this.timeoutId)}processLine(){const t=this.content.split(`
`);this.lineNum>=t.length&&(this.lineNum=0);const e=(t[this.lineNum]||"").split(";");for(let i of e){const n=i.split(" ").map(d=>d),[s,l,u,c]=n;if(s==="w"){const d=parseFloat(l);if(d){this.lineNum++,this.timeoutId=setTimeout(this.processLine.bind(this),d*1e3);return}}else this.executeCommand(s,l,u,c),this.lastIdx=s}this.playing&&(this.lineNum++,this.timeoutId=setTimeout(this.processLine.bind(this),this.parseDelay()))}describe(){return"TODO"}}function $(o){const t=[];function e(d,a,h){t.forEach(f=>f(d,a,h))}const i={set(d,a,h){return d[a]=h,e(d,a,h),!0}},n=new(window.AudioContext||window.webkitAudioContext),s=new Proxy(new Array(10),i),l=new Array(10).fill(0).map(d=>({})),u={},c={currentGraphIdx:0,currentSeqIdx:0,audioCtx:n,mediaStream:o,items:s,types:u,connections:l,dispatch:e,update(d,a){this[d]=a,this.dispatch(this,d,a)},register(d){t.push(d)}};return c.sequences=new Array(10).fill(0).map((d,a)=>new k(c,a)),u.oscillator=I(n,c),u.filter=B(n,c),u.delay=N(n,c),u.echo=D(n,c),u.gain=M(n,c),window.model=c,c}function Y(o){const t={audio:!0,video:!1};navigator.mediaDevices?navigator.mediaDevices.getUserMedia(t).then(function(e){o(e)}).catch(function(e){console.log(e),o(null)}):(console.log("navigator.mediaDevices not supported"),o(null))}function S(o,t,e,i){if(o.replaceChildren(),i){const n=document.createElement("option");n.setAttribute("value",""),n.text="-",(t==null||t==="")&&n.setAttribute("selected",!0),o.appendChild(n)}for(let n=0;n<e.length;n++){const{value:s,label:l}=e[n],u=document.createElement("option");u.setAttribute("value",s),u.text=l,String(t)===String(s)&&u.setAttribute("selected",!0),o.appendChild(u)}}function r(o){function t(n){const s=n.className||"";return n.addClass=function(l){this.className=`${s} ${l||""}`},n.show=function(l){l?this.removeAttribute("data-hide"):this.setAttribute("data-hide","true")},n.tagName==="BUTTON"?(n.selected=function(){this.setAttribute("data-selected","true")},n.unselect=function(){this.removeAttribute("data-selected")}):n.tagName==="INPUT"&&n.type==="checkbox"?n.checked=!1:n.tagName==="SELECT"&&(n.value=null),n}function e(n){return Array.from(n).map(t)}const i=document.querySelectorAll(o);return i.length>1?e(i):t(i[0])}const R={graphButton:r("button[value=graph]"),sequencerButton:r("button[value=sequencer]"),backupButton:r("button[value=export]")},p={area:r(".graph"),changeButton:r(".confirm button[value=change]"),cancelButton:r(".confirm button[value=cancel]"),playLabel:r("label[for=play]"),playButton:r("#play"),optionButtons:r(".graph .options button"),convertButtons:r(".nodes button"),controlsArea:r(".graph .controls"),confirmArea:r(".confirm"),componentLabel:r(".header .name"),controls:[{area:r(".graph .controls .control:nth-child(1)"),shortText:r(".graph .controls .control:nth-child(1) .short"),longText:r(".graph .controls .control:nth-child(1) .long"),select:r(".graph .controls .control:nth-child(1) select"),time:r(".graph .controls .control:nth-child(1) input:nth-child(4)"),input:r(".graph .controls .control:nth-child(1) input:nth-child(3)")},{area:r(".graph .controls .control:nth-child(2)"),shortText:r(".graph .controls .control:nth-child(2) .short"),longText:r(".graph .controls .control:nth-child(2) .long"),select:r(".graph .controls .control:nth-child(2) select"),time:r(".graph .controls .control:nth-child(2) input:nth-child(4)"),input:r(".graph .controls .control:nth-child(2) input:nth-child(3)")},{area:r(".graph .controls .control:nth-child(3)"),shortText:r(".graph .controls .control:nth-child(3) .short"),longText:r(".graph .controls .control:nth-child(3) .long"),select:r(".graph .controls .control:nth-child(3) select"),time:r(".graph .controls .control:nth-child(3) input:nth-child(4)"),input:r(".graph .controls .control:nth-child(3) input:nth-child(3)")},{area:r(".graph .controls .control:nth-child(4)"),shortText:r(".graph .controls .control:nth-child(4) .short"),longText:r(".graph .controls .control:nth-child(4) .long"),select:r(".graph .controls .control:nth-child(4) select"),time:r(".graph .controls .control:nth-child(4) input:nth-child(4)"),input:r(".graph .controls .control:nth-child(4) input:nth-child(3)")},{area:r(".graph .controls .control:nth-child(5)"),shortText:r(".graph .controls .control:nth-child(5) .short"),longText:r(".graph .controls .control:nth-child(5) .long"),select:r(".graph .controls .control:nth-child(5) select"),time:r(".graph .controls .control:nth-child(5) input:nth-child(4)"),input:r(".graph .controls .control:nth-child(5) input:nth-child(3)")},{area:r(".graph .controls .control:nth-child(6)"),shortText:r(".graph .controls .control:nth-child(6) .short"),longText:r(".graph .controls .control:nth-child(6) .long"),select:r(".graph .controls .control:nth-child(6) select"),time:r(".graph .controls .control:nth-child(6) input:nth-child(4)"),input:r(".graph .controls .control:nth-child(6) input:nth-child(3)")}]},g={area:r(".sequencer"),delayField:r("#delay"),startStopButton:r("#startstop"),optionButtons:r(".sequencer .options button"),content:r("#sequence"),delay:r("#delay")},V={area:r(".backup"),importButton:r("#import"),copyButton:r("#copy"),resetButton:r("#reset"),content:r("#backupContent")};function Q(o){const{items:t,types:e,connections:i}=o;let n=null,s=null,l=null;function u(a){const h=t[a].type+(t[a].playing?" playing":"");p.optionButtons[a].className=h,p.optionButtons[a].setAttribute("title",h)}function c(a){n=t[a],p.componentLabel.textContent=n.label();const{playing:h,playable:f}=n;f?(p.playButton.checked=h,p.playButton.show(!0),p.playLabel.show(!0)):(p.playButton.show(!1),p.playLabel.show(!1)),p.convertButtons.forEach(m=>{m.value===n.type?m.selected():m.unselect()});const b=n.controls();for(let m=0;m<6;m++){const T=b[m],C=p.controls[m];C.area.show(!1),T&&(C.shortText.textContent=`(${T.short})`,C.longText.textContent=T.label,C.input.show(!1),C.time.show(!1),C.select.show(!1),T.type==="val"?(C.input.value=T.get(),C.input.show(!0),C.time.value=T.getTime(),C.time.show(!0)):T.type==="in"?(S(C.select,T.get(),t.map(q=>q.asOption()).filter(q=>q.value!==a&&q.type!==y.EMPTY),!0),C.select.show(!0)):T.type==="type"&&(S(C.select,T.get(),T.values.map(q=>({value:q,label:q}))),C.select.show(!0)),C.area.show(!0))}}function d(){const a=e[s](o.currentGraphIdx);l.setValuesTo(a);const h=o.connections[o.currentGraphIdx];Object.keys(h).forEach(f=>{l.connector().connect(h[f]),a.connector().connect(h[f])}),l.destroy(),t[o.currentGraphIdx]=a,c(o.currentGraphIdx),u(o.currentGraphIdx)}p.playButton.onclick=function(a){n&&(n.play(a.target.checked),u(o.currentGraphIdx))},p.optionButtons.forEach((a,h)=>{a.onclick=function(){const f=o.currentGraphIdx;o.update("currentGraphIdx",h),a.selected(),p.optionButtons[f].unselect()}}),p.controls.forEach((a,h)=>{a.select.onchange=function(f){if(n){let b=parseFloat(f.target.value);Number.isInteger(b)||(b=f.target.value),n.controls()[h].set(b),p.componentLabel.textContent=n.label()}},a.input.onchange=function(f){if(n){const b=f.target.value;let m=parseFloat(b);const T=n.controls()[h];T.max&&m&&m>T.max&&(m=T.max,a.input.value=m),n.controls()[h].set(m||b),p.componentLabel.textContent=n.label()}},a.time.onchange=function(f){if(n){const b=f.target.value,m=parseFloat(b);n.controls()[h],n.controls()[h].setTime(m)}}}),p.convertButtons.forEach((a,h)=>{a.onclick=function(f){if(n){if(s=f.target.value,l=t[o.currentGraphIdx],l.type===s||l.type===y.MICROPHONE)return;l.type===y.EMPTY?d():(p.changeButton.textContent="Change to "+s,p.controlsArea.show(!1),p.confirmArea.show(!0))}}}),p.changeButton.onclick=function(a){p.controlsArea.show(!0),p.confirmArea.show(!1),d()},p.cancelButton.onclick=function(a){p.controlsArea.show(!0),p.confirmArea.show(!1),c(o.currentGraphIdx)},o.register((a,h,f)=>{Array.isArray(a)?u(h):h==="currentGraphIdx"?c(f):h==="window"&&p.area.show(f==="graph")}),o.update("currentGraphIdx",0)}function H(o){function t(){return o.sequences[o.currentSeqIdx]}function e(){const{playing:n}=t();g.startStopButton.textContent=n?"Stop":"Start"}function i(n){const{idx:s,delay:l,content:u}=n;g.delay.value=l,g.content.value=u,g.optionButtons[s].selected(),e()}g.startStopButton.onclick=function(){t().togglePlaying(),e()},g.delay.onchange=function(n){const s=t();s.delay=n.target.value},g.content.onchange=function(n){const s=t();s.content=n.target.value},g.content.onkeyup=function(n){const s=t();s.content=n.target.value},g.optionButtons.forEach((n,s)=>{n.onclick=function(){const l=t();l.content=g.content.value,l.delay=g.delay.value,o.update("currentSeqIdx",s),g.optionButtons[l.idx].unselect()}}),o.register((n,s,l)=>{s==="window"?g.area.show(l==="sequencer"):s==="currentSeqIdx"&&i(o.sequences[l])}),o.update("currentSeqIdx",0)}class U extends O{constructor(t,e,i,n){super(t,e,i,y.MICROPHONE,!0),this.input=t.createMediaStreamSource(n),this.gain=t.createGain(),this.input.connect(this.gain),this._controls=this.initControls(),this._controls[0].set(1)}connector(){return this.gain}initControls(){const t=this;return[{type:"val",short:"g",label:"Gain",set(e){t.gain.gain.cancelScheduledValues(0),t.gain.gain.setValueCurveAtTime([t.gainValue||e,e],t.ctx.currentTime,t.gainTime||.001),t.gainValue=e},get(){return t.gainValue},setTime(e){t.gainTime=e},getTime(){return t.gainTime}}]}controls(){return this._controls}destroy(){}}function X(o,t,e,i){return new U(o,t,e,i)}function v(o){const{audioCtx:t,items:e,mediaStream:i}=o;let n=0;i&&(n=1,e[0]||(e[0]=X(t,o,0,i)));for(let s=n;s<10;s++)e[s]&&e[s].destroy(),e[s]=new O(t,o,s,y.EMPTY,!1)}const j=/^([0-9]{1}) *([a-zA-Z]*) *(.*)$/;function K(o){const t=E(o);function e(){const n=o.items.filter(c=>![y.EMPTY,y.MICROPHONE].includes(c.type)).map(c=>`${c.idx} control ${c.type}`),s=o.items.map(c=>c.describe().join(`
`)).filter(c=>c),l=o.items.filter(c=>c.type!==y.EMPTY&&c.playing).map(c=>`${c.idx} play`);let u=g.content.value||"";u.length>0&&(u=`
`+y.SEQUENCE_SEPARATOR+g.delayField.value+`
`+u),V.content.value=n.concat(s).concat(l).join(`
`)+u}function i(){v(o),g.delayField.value="",g.content.value=""}V.resetButton.onclick=function(){i(),e(),o.update("currentGraphIdx",0)},V.importButton.onclick=function(){const n=V.content.value,[s,l]=n.split(y.SEQUENCE_SEPARATOR),u=s.split(`
`);i(),u.forEach(a=>{a.split(";").forEach(f=>{const b=j.exec(f.trim());if(b){const[,m,T,C]=b;t(m,T,C)}})});const[c,d]=l.split(/\n(.*)/s);g.delayField.value=c,g.content.value=d,o.update("currentGraphIdx",0)},V.copyButton.onclick=function(){const n=V.content;n.select(),n.setSelectionRange(0,99999),navigator.clipboard.writeText(n.value)},o.register((n,s,l)=>{s==="window"&&(l==="backup"?(V.area.show(!0),e()):V.area.show(!1))})}function z(o){const{graphButton:t,sequencerButton:e,backupButton:i}=R;t.onclick=function(){t.selected(),e.unselect(),i.unselect(),o.update("window","graph")},e.onclick=function(){t.unselect(),e.selected(),i.unselect(),o.update("window","sequencer")},i.onclick=function(){t.unselect(),e.unselect(),i.selected(),o.update("window","backup")},t.click()}window.onload=function(){const o=document.querySelector(".wrapper");Y(function(t){document.body.className="started",o.style="";const e=$(t);v(e),Q(e),H(e),K(e),z(e)})};
