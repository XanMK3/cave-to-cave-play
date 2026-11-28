const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bundler-B5sLdop5.js","assets/_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
var O=Object.defineProperty;var N=(t,n,e)=>n in t?O(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var d=(t,n,e)=>N(t,typeof n!="symbol"?n+"":n,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();class B extends HTMLElement{constructor(){super();d(this,"activePointerId",null);d(this,"center",{x:0,y:0});d(this,"vector",{x:0,y:0,angle:0,distance:0});d(this,"baseEl");d(this,"handleEl");d(this,"boundPointerDown");d(this,"boundDynamicPointerDown");d(this,"boundPointerMove");d(this,"boundPointerUp");this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: inline-block;
                    position: relative;
                    width: var(--joystick-size, 130px);
                    height: var(--joystick-size, 130px);
                    touch-action: none;
                    user-select: none;
                    -webkit-user-select: none;
                }
                :host([mode="dynamic"]) {
                    position: absolute;
                    pointer-events: none;
                    visibility: hidden;
                    z-index: 100;
                }
                :host([mode="dynamic"][active]) {
                    visibility: visible;
                }
                .base {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: var(--joystick-base-color, rgba(255, 255, 255, 0.08));
                    border: var(--joystick-border, 1.5px solid rgba(255, 255, 255, 0.18));
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    position: relative;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: var(--joystick-shadow, 0 8px 32px rgba(0, 0, 0, 0.35));
                    transition: border-color 0.2s ease, background 0.2s ease;
                }
                :host([active]) .base {
                    border-color: var(--joystick-active-border, rgba(255, 255, 255, 0.45));
                    background: var(--joystick-active-base, rgba(255, 255, 255, 0.12));
                }
                .handle {
                    width: var(--joystick-stick-size, 52px);
                    height: var(--joystick-stick-size, 52px);
                    border-radius: 50%;
                    background: var(--joystick-stick-color, linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(200, 205, 215, 0.75)));
                    border: var(--joystick-stick-border, 1.5px solid rgba(255, 255, 255, 0.6));
                    box-shadow: var(--joystick-glow, 0 4px 16px rgba(0, 0, 0, 0.3));
                    position: absolute;
                    transform: translate(0px, 0px);
                    pointer-events: none;
                    will-change: transform;
                    transition: transform 0.05s ease-out;
                }
                :host([active]) .handle {
                    box-shadow: var(--joystick-active-glow, 0 0 18px rgba(255, 255, 255, 0.4));
                    background: var(--joystick-stick-active-color, linear-gradient(135deg, #ffffff, #e2e8f0));
                }
                .center-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.25);
                    pointer-events: none;
                }
            </style>
            <div class="base" id="base">
                <div class="center-dot"></div>
                <div class="handle" id="handle"></div>
            </div>
        `,this.baseEl=this.shadowRoot.getElementById("base"),this.handleEl=this.shadowRoot.getElementById("handle"),this.boundPointerDown=this.onPointerDown.bind(this),this.boundDynamicPointerDown=this.onDynamicPointerDown.bind(this),this.boundPointerMove=this.onPointerMove.bind(this),this.boundPointerUp=this.onPointerUp.bind(this))}static get observedAttributes(){return["deadzone","size","mode"]}attributeChangedCallback(e,o,i){o!==i&&(e==="size"&&i!==null?this.style.setProperty("--joystick-size",`${i}px`):e==="mode"&&this.setupListeners())}connectedCallback(){this.setupListeners(),this.baseEl.addEventListener("lostpointercapture",this.boundPointerUp),window.addEventListener("pointermove",this.boundPointerMove),window.addEventListener("pointerup",this.boundPointerUp),window.addEventListener("pointercancel",this.boundPointerUp)}disconnectedCallback(){this.reset(),this.baseEl.removeEventListener("lostpointercapture",this.boundPointerUp),this.baseEl.removeEventListener("pointerdown",this.boundPointerDown),window.removeEventListener("pointerdown",this.boundDynamicPointerDown),window.removeEventListener("pointermove",this.boundPointerMove),window.removeEventListener("pointerup",this.boundPointerUp),window.removeEventListener("pointercancel",this.boundPointerUp)}setupListeners(){this.baseEl.removeEventListener("pointerdown",this.boundPointerDown),window.removeEventListener("pointerdown",this.boundDynamicPointerDown),this.mode==="fixed"?this.baseEl.addEventListener("pointerdown",this.boundPointerDown):window.addEventListener("pointerdown",this.boundDynamicPointerDown)}get deadzone(){return parseFloat(this.getAttribute("deadzone")||"0.1")}set deadzone(e){this.setAttribute("deadzone",e.toString())}get size(){return parseFloat(this.getAttribute("size")||"130")}set size(e){this.setAttribute("size",e.toString())}get mode(){return this.getAttribute("mode")||"fixed"}set mode(e){this.setAttribute("mode",e)}onDynamicPointerDown(e){if(this.activePointerId!==null)return;const o=this.closest("touch-controls"),i=o?o.getBoundingClientRect():document.body.getBoundingClientRect(),r=i.width/2,a=e.clientX-i.left,c=o&&o.getAttribute("handedness")==="left";!c&&a>r||c&&a<r||(this.style.left=`${e.clientX-this.size/2}px`,this.style.top=`${e.clientY-this.size/2}px`,this.startTracking(e))}onPointerDown(e){if(this.activePointerId===null){e.preventDefault();try{this.baseEl.setPointerCapture(e.pointerId)}catch{}this.startTracking(e)}}startTracking(e){this.activePointerId=e.pointerId,this.setAttribute("active","");const o=this.baseEl.getBoundingClientRect();this.center={x:o.left+o.width/2,y:o.top+o.height/2},this.processPointer(e.clientX,e.clientY),this.dispatchEvent(new CustomEvent("joystickstart",{bubbles:!0,composed:!0,detail:{...this.vector}}))}onPointerMove(e){e.pointerId===this.activePointerId&&(e.preventDefault(),this.processPointer(e.clientX,e.clientY))}onPointerUp(e){if(e.pointerId!==this.activePointerId)return;e.preventDefault();const o=e.type!=="pointerup";this.reset(),o&&this.dispatchEvent(new CustomEvent("controlcancel",{bubbles:!0,composed:!0}))}reset(){const e=this.activePointerId;if(e===null)return;this.activePointerId=null;try{this.baseEl.hasPointerCapture(e)&&this.baseEl.releasePointerCapture(e)}catch{}this.removeAttribute("active"),this.vector={x:0,y:0,angle:0,distance:0},this.handleEl.style.transform="translate(0px, 0px)";const o={x:0,y:0,angle:0,distance:0};this.dispatchEvent(new CustomEvent("joystickend",{bubbles:!0,composed:!0,detail:o})),this.dispatchEvent(new CustomEvent("joystickmove",{bubbles:!0,composed:!0,detail:o}))}processPointer(e,o){const i=this.size/2*.75,r=e-this.center.x,a=o-this.center.y,c=Math.hypot(r,a),u=Math.atan2(a,r),l=Math.min(c,i),p=l/i;let b=0,h=0;if(p>this.deadzone){const L=(p-this.deadzone)/(1-this.deadzone);b=Math.cos(u)*L,h=Math.sin(u)*L}const w=Math.cos(u)*l,E=Math.sin(u)*l;this.handleEl.style.transform=`translate(${w}px, ${E}px)`,this.vector={x:b,y:h,angle:u,distance:p},this.dispatchEvent(new CustomEvent("joystickmove",{bubbles:!0,composed:!0,detail:{x:b,y:h,angle:u,distance:p}}))}}class $ extends HTMLElement{constructor(){super();d(this,"activePointerId",null);d(this,"buttonEl");d(this,"boundPointerDown");d(this,"boundPointerUp");this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: inline-block;
                    touch-action: none;
                    user-select: none;
                    -webkit-user-select: none;
                }
                button {
                    width: var(--button-size, 70px);
                    height: var(--button-size, 70px);
                    border-radius: var(--button-radius, 50%);
                    background: var(--button-color, linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05)));
                    border: var(--button-border, 1.5px solid rgba(255, 255, 255, 0.2));
                    color: var(--button-text-color, #e2e8f0);
                    font-family: inherit;
                    font-weight: 700;
                    font-size: var(--button-font-size, 12px);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: var(--button-shadow, 0 6px 20px rgba(0, 0, 0, 0.3));
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    outline: none;
                    transition: transform 0.08s cubic-bezier(0.4, 0, 0.2, 1), 
                                filter 0.08s ease, 
                                box-shadow 0.08s ease,
                                background 0.15s ease,
                                border-color 0.15s ease;
                    position: relative;
                    overflow: hidden;
                    box-sizing: border-box;
                }
                button:active, button.pressed {
                    transform: scale(0.93) translateY(2px);
                    background: var(--button-active-color, rgba(255, 255, 255, 0.22));
                    border-color: rgba(255, 255, 255, 0.5);
                    color: #ffffff;
                    box-shadow: var(--button-active-shadow, 0 2px 10px rgba(0, 0, 0, 0.4));
                }
                ::slotted(i), ::slotted(svg) {
                    font-size: var(--button-icon-size, 18px);
                    margin-bottom: 2px;
                    pointer-events: none;
                }
            </style>
            <button id="btn" type="button">
                <slot name="icon"></slot>
                <slot><span id="label"></span></slot>
            </button>
        `,this.buttonEl=this.shadowRoot.getElementById("btn"),this.boundPointerDown=this.onPointerDown.bind(this),this.boundPointerUp=this.onPointerUp.bind(this))}static get observedAttributes(){return["action","key-code","haptic"]}attributeChangedCallback(e,o,i){}connectedCallback(){this.buttonEl.addEventListener("lostpointercapture",this.boundPointerUp),this.buttonEl.addEventListener("pointerdown",this.boundPointerDown),this.buttonEl.addEventListener("pointerup",this.boundPointerUp),this.buttonEl.addEventListener("pointercancel",this.boundPointerUp)}disconnectedCallback(){this.reset(),this.buttonEl.removeEventListener("lostpointercapture",this.boundPointerUp),this.buttonEl.removeEventListener("pointerdown",this.boundPointerDown),this.buttonEl.removeEventListener("pointerup",this.boundPointerUp),this.buttonEl.removeEventListener("pointercancel",this.boundPointerUp)}get haptic(){return this.hasAttribute("haptic")}set haptic(e){e?this.setAttribute("haptic",""):this.removeAttribute("haptic")}get action(){return this.getAttribute("action")||"ACTION"}set action(e){this.setAttribute("action",e)}get keycode(){return this.getAttribute("key-code")||""}set keycode(e){this.setAttribute("key-code",e)}onPointerDown(e){if(this.activePointerId===null){e.preventDefault(),this.activePointerId=e.pointerId;try{this.buttonEl.setPointerCapture(e.pointerId)}catch{}if(this.buttonEl.classList.add("pressed"),this.haptic&&typeof navigator<"u"&&navigator.vibrate)try{navigator.vibrate(12)}catch{}this.dispatchEvent(new CustomEvent("buttondown",{bubbles:!0,composed:!0,detail:{action:this.action,keycode:this.keycode}}))}}onPointerUp(e){if(e.pointerId!==this.activePointerId)return;e.preventDefault();const o=e.type!=="pointerup";this.reset(),o&&this.dispatchEvent(new CustomEvent("controlcancel",{bubbles:!0,composed:!0}))}reset(){const e=this.activePointerId;if(e!==null){this.activePointerId=null;try{this.buttonEl.hasPointerCapture(e)&&this.buttonEl.releasePointerCapture(e)}catch{}this.buttonEl.classList.remove("pressed"),this.dispatchEvent(new CustomEvent("buttonup",{bubbles:!0,composed:!0,detail:{action:this.action,keycode:this.keycode}}))}}}class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot&&(this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 50;
                    overflow: hidden;
                }
                :host(:not([touch-capable]):not([debug]):not([controller])) {
                    display: none !important;
                }
                :host([controller]) {
                    position: relative;
                    min-height: 180px;
                    z-index: auto;
                    --controls-opacity: 1;
                }
                .wrapper {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: var(--controls-align, flex-end);
                    padding: var(--controls-padding, 24px 32px);
                    box-sizing: border-box;
                    opacity: var(--controls-opacity, 0.5);
                }
                .zone {
                    pointer-events: auto;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                :host([handedness="left"]) .wrapper {
                    flex-direction: row-reverse;
                }
            </style>
            <div class="wrapper">
                <div class="zone" id="left-zone">
                    <slot name="movement"></slot>
                </div>
                <div class="zone" id="right-zone">
                    <slot name="actions"></slot>
                </div>
            </div>
        `)}connectedCallback(){this.toggleAttribute("touch-capable",navigator.maxTouchPoints>0)}static get observedAttributes(){return["handedness","debug"]}attributeChangedCallback(n,e,o){}get handedness(){return this.getAttribute("handedness")||"right"}set handedness(n){this.setAttribute("handedness",n)}get debug(){return this.hasAttribute("debug")}set debug(n){n?this.setAttribute("debug",""):this.removeAttribute("debug")}}typeof window<"u"&&window.customElements&&(customElements.get("touch-joystick")||customElements.define("touch-joystick",B),customElements.get("touch-button")||customElements.define("touch-button",$),customElements.get("touch-controls")||customElements.define("touch-controls",q));function Q(){return{left:!1,right:!1,up:!1,down:!1,action:!1}}function _(t){return{left:t.x<-.3,right:t.x>.3,up:t.y<-.3,down:t.y>.3,action:!1}}function G(t){return{left:t.has("a")||t.has("arrowleft"),right:t.has("d")||t.has("arrowright"),up:t.has("w")||t.has("arrowup"),down:t.has("s")||t.has("arrowdown"),action:t.has("e")||t.has(" ")}}function Z(t,n){const e=_(n);return{left:t.has("left")||e.left,right:t.has("right")||e.right,up:t.has("up")||e.up,down:t.has("down")||e.down,action:t.has("action")}}const g={messageBytes:1024,pairingMs:3e5,authMs:5e3,establishmentMs:15e3,pending:3,inputRate:120,otherRate:40,hostMessageRate:120,violations:3,watchdogMs:500,challengeMs:100,livenessMs:1e4,snapshotMs:1e3/30,bufferBytes:8*1024,actionQueue:64},M=["menu","back","close-menu","pause","resume","restart","retry","start","continue","main-menu","campaign","level","infinity","settings","tutorial","graphics","fullscreen","disconnect","menu-refresh"],s=t=>Number.isSafeInteger(t)&&Number(t)>=0,f=t=>typeof t=="boolean",m=t=>n=>typeof n=="string"&&n.length<=t,x=t=>n=>typeof n=="string"&&t.includes(n),k=(t,n)=>{if(!t||typeof t!="object"||Array.isArray(t))return!1;const e=t;return Object.keys(e).length===Object.keys(n).length&&Object.entries(n).every(([o,i])=>Object.hasOwn(e,o)&&i(e[o]))},C=t=>k(t,{left:f,right:f,up:f,down:f,action:f}),I=t=>typeof t=="string"&&/^[a-f0-9]{32}$/.test(t),z={auth:{token:I},"auth-ok":{},"auth-ack":{},error:{code:x(["protocol","authentication","busy","congestion"])},context:{epoch:s,mode:x(["gameplay","navigation","blocked"]),challenge:s,resumeRequired:f},challenge:{epoch:s,challenge:s},"context-ack":{epoch:s,challenge:s,buttons:C},ready:{epoch:s},input:{epoch:s,challenge:s,seq:s,edgeSeq:s,buttons:C},"action-edge":{epoch:s,challenge:s,seq:s,pressed:f},"menu-command":{epoch:s,seq:s,revision:s,command:x(M),value:m(80)},"menu-state":{revision:s,page:s,pages:t=>s(t)&&Number(t)>0&&Number(t)<=128,screen:m(40),focus:m(80),items:t=>Array.isArray(t)&&t.length<=4&&t.every(n=>k(n,{id:m(80),label:m(120),enabled:f}))},"menu-chunk":{revision:s,index:s,count:t=>s(t)&&Number(t)>0&&Number(t)<=128,data:m(700)},"menu-focus":{revision:s,focus:m(80)},suspend:{epoch:s},ping:{id:s},pong:{id:s},disconnect:{}};function S(t){if(!t||typeof t!="object"||!("type"in t)||typeof t.type!="string"||!Object.hasOwn(z,t.type))return!1;const n=z[t.type];if(!k(t,{v:e=>e===1,type:e=>e===t.type,...n}))return!1;if(t.type==="menu-chunk"){const e=t;return e.index<e.count}if(t.type==="menu-state"){const e=t;return e.page<e.pages}return!0}const T=new TextEncoder;function tt(t){if(!(typeof t!="string"||t.length>g.messageBytes||T.encode(t).length>g.messageBytes))try{const n=JSON.parse(t);return S(n)?n:void 0}catch{return}}function R(t){if(!S(t))throw new Error("Invalid controller message");const n=JSON.stringify(t);if(T.encode(n).length>g.messageBytes)throw new Error("Controller message exceeds byte limit");return n}function et(t){return!t.left&&!t.right&&!t.up&&!t.down&&!t.action}class nt{constructor(n=g.otherRate){d(this,"start",-1/0);d(this,"input",0);d(this,"other",0);this.otherLimit=n}accept(n,e){return n-this.start>=1e3&&(this.start=n,this.input=this.other=0),(e==null?void 0:e.type)==="input"||(e==null?void 0:e.type)==="action-edge"?++this.input<=g.inputRate:++this.other<=this.otherLimit}}function ot(){const t=()=>Array.from(crypto.getRandomValues(new Uint8Array(16)),n=>n.toString(16).padStart(2,"0")).join("");return{peer:`cave-${t()}`,token:t()}}function it(t,n){const e=new URL("controller.html",t);return e.hash=new URLSearchParams({...n}).toString(),e.href}function H(t){const n=new URLSearchParams(t.replace(/^#/,"")),e=n.get("peer"),o=n.get("token");if(!(Array.from(n.keys()).length!==2||!e||!/^cave-[a-f0-9]{32}$/.test(e)||!I(o)))return{peer:e,token:o}}function rt(t,n){const e=t.hash;return n.replaceState(n.state,"",t.pathname+t.search),H(e)}const X="modulepreload",J=function(t){return"/cave-to-cave-play/"+t},A={},Y=function(n,e,o){let i=Promise.resolve();if(e&&e.length>0){let a=function(l){return Promise.all(l.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=a(e.map(l=>{if(l=J(l),l in A)return;A[l]=!0;const p=l.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":X,p||(h.as="script"),h.crossOrigin="",h.href=l,u&&h.setAttribute("nonce",u),document.head.appendChild(h),p)return new Promise((w,E)=>{h.addEventListener("load",w),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return n().catch(r)})},F={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};function V(){var t;if(!globalThis.isSecureContext)return"HTTPS is required for phone control.";if(!globalThis.RTCPeerConnection||!globalThis.RTCDataChannel||!globalThis.WebSocket||!((t=globalThis.crypto)!=null&&t.getRandomValues))return"This browser does not support phone control."}async function st(t,n){const e=V();if(e)throw new Error(e);const{Peer:o}=await Y(async()=>{const{Peer:i}=await import("./bundler-B5sLdop5.js");return{Peer:i}},__vite__mapDeps([0,1]));return new o(t,{...n,config:F,debug:0})}function W(t){const n=t.dataChannel;return t.serialization==="raw"&&!!n&&n.ordered&&n.maxRetransmits===null&&n.maxPacketLifeTime===null}function j(t){return"bufferSize"in t&&t.bufferSize!==0}function at(t,n,e){return{send(o){if(!n.open||!W(n)||j(n))return!1;let i;try{i=R(o)}catch{return!1}if(n.dataChannel.bufferedAmount+new TextEncoder().encode(i).length>g.bufferBytes)return!1;try{const r=n.send(i);return r&&r.catch(e),n.open&&!j(n)}catch{return!1}},close:()=>n.close(),detach:()=>t.disconnect()}}function ct(t,n){return new Promise((e,o)=>{const i=()=>{clearTimeout(l),t.off("open",r),t.off("error",a),t.off("close",c),n==null||n.removeEventListener("abort",u)},r=()=>{i(),e()},a=()=>{i(),t.destroy(),o(new Error("Signaling unavailable; try fresh pairing."))},c=()=>{i(),o(new Error("Pairing closed."))},u=()=>{i(),t.destroy(),o(new Error("Pairing canceled."))},l=setTimeout(a,g.establishmentMs);t.on("open",r),t.on("error",a),t.on("close",c),n==null||n.addEventListener("abort",u,{once:!0}),n!=null&&n.aborted&&u()})}function dt(){}const y={bytes:32768,chunks:128,entries:128,timeoutMs:5e3},P=new TextEncoder,v=(t,n)=>typeof t=="string"&&t.length<=n,D=(t,n)=>!!t&&typeof t=="object"&&!Array.isArray(t)&&Object.keys(t).length===n.length&&n.every(e=>Object.hasOwn(t,e));function U(t){if(!D(t,["revision","screen","title","focus","items"])||!Number.isSafeInteger(t.revision)||Number(t.revision)<0||!v(t.screen,40)||!v(t.title,120)||!v(t.focus,80)||!Array.isArray(t.items)||t.items.length>y.entries)return!1;const n=new Set;for(const e of t.items){if(!D(e,["id","label","command","value","enabled","selected"])||!v(e.id,80)||!e.id||n.has(e.id)||!v(e.label,3e3)||!v(e.value,80)||typeof e.enabled!="boolean"||typeof e.selected!="boolean"||!(e.command===null||M.includes(e.command)))return!1;n.add(e.id)}return t.focus===""||n.has(t.focus)}function lt(t){if(!U(t))throw new Error("Invalid menu view");const n=JSON.stringify(t);if(P.encode(n).length>y.bytes)throw new Error("Menu view too large");const e=[];let o="";for(const i of n)P.encode(JSON.stringify(o+i)).length>700&&(e.push(o),o=""),o+=i;if(o&&e.push(o),e.length>y.chunks)throw new Error("Too many menu chunks");return e.map((i,r)=>{const a={v:1,type:"menu-chunk",revision:t.revision,index:r,count:e.length,data:i};return R(a),a})}class ut{constructor(){d(this,"revision",-1);d(this,"pending")}reset(){this.pending=void 0,this.revision=-1}accept(n,e){if(n.revision<=this.revision)return;if(!this.pending||n.revision>this.pending.revision){if(n.index!==0)return;this.pending={revision:n.revision,count:n.count,parts:[],bytes:0,deadline:e+y.timeoutMs}}const o=this.pending;if(n.revision<o.revision)return;if(e>=o.deadline||n.count!==o.count||n.index!==o.parts.length)throw new Error("Invalid menu chunk sequence");if(o.bytes+=P.encode(n.data).length,o.bytes>y.bytes)throw new Error("Menu exceeds assembly limit");if(o.parts.push(n.data),o.parts.length!==o.count)return;const i=JSON.parse(o.parts.join(""));if(!U(i)||i.revision!==o.revision)throw new Error("Invalid assembled menu");return this.revision=i.revision,this.pending=void 0,i}expire(n){return!this.pending||n<this.pending.deadline?!1:(this.pending=void 0,!0)}}export{ut as M,Y as _,nt as a,ot as b,st as c,tt as d,at as e,W as f,dt as g,V as h,et as i,_ as j,it as k,g as l,lt as m,Q as n,G as o,ct as p,Z as q,rt as t};
