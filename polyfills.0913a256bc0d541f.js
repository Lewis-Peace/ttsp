"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6429],{5321:(ie,Ee,ce)=>{ce(3295),ce(8332)},3295:()=>{window.__Zone_disable_customElements=!0},8332:()=>{!function(e){const n=e.performance;function s(j){n&&n.mark&&n.mark(j)}function r(j,h){n&&n.measure&&n.measure(j,h)}s("Zone");const i=e.__Zone_symbol_prefix||"__zone_symbol__";function l(j){return i+j}const m=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(m||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let E=(()=>{class h{static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=h.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return re}static __load_patch(t,_,R=!1){if(oe.hasOwnProperty(t)){if(!R&&m)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const L="Zone:"+t;s(L),oe[t]=_(e,h,Y),r(L,L)}}get parent(){return this._parent}get name(){return this._name}constructor(t,_){this._parent=t,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,_)}get(t){const _=this.getZoneWith(t);if(_)return _._properties[t]}getZoneWith(t){let _=this;for(;_;){if(_._properties.hasOwnProperty(t))return _;_=_._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,_){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const R=this._zoneDelegate.intercept(this,t,_),L=this;return function(){return L.runGuarded(R,this,arguments,_)}}run(t,_,R,L){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,_,R,L)}finally{W=W.parent}}runGuarded(t,_=null,R,L){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,_,R,L)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{W=W.parent}}runTask(t,_,R){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===Q||t.type===w))return;const L=t.state!=y;L&&t._transitionTo(y,A),t.runCount++;const a=re;re=t,W={parent:W,zone:this};try{t.type==w&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,_,R)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{t.state!==G&&t.state!==d&&(t.type==Q||t.data&&t.data.isPeriodic?L&&t._transitionTo(A,y):(t.runCount=0,this._updateTaskCount(t,-1),L&&t._transitionTo(G,y,G))),W=W.parent,re=a}}scheduleTask(t){if(t.zone&&t.zone!==this){let R=this;for(;R;){if(R===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);R=R.parent}}t._transitionTo(q,G);const _=[];t._zoneDelegates=_,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(R){throw t._transitionTo(d,q,G),this._zoneDelegate.handleError(this,R),R}return t._zoneDelegates===_&&this._updateTaskCount(t,1),t.state==q&&t._transitionTo(A,q),t}scheduleMicroTask(t,_,R,L){return this.scheduleTask(new g(I,t,_,R,L,void 0))}scheduleMacroTask(t,_,R,L,a){return this.scheduleTask(new g(w,t,_,R,L,a))}scheduleEventTask(t,_,R,L,a){return this.scheduleTask(new g(Q,t,_,R,L,a))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===A||t.state===y){t._transitionTo(V,A,y);try{this._zoneDelegate.cancelTask(this,t)}catch(_){throw t._transitionTo(d,V),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(t,-1),t._transitionTo(G,V),t.runCount=0,t}}_updateTaskCount(t,_){const R=t._zoneDelegates;-1==_&&(t._zoneDelegates=null);for(let L=0;L<R.length;L++)R[L]._updateTaskCount(t.type,_)}}return h.__symbol__=l,h})();const P={name:"",onHasTask:(j,h,c,t)=>j.hasTask(c,t),onScheduleTask:(j,h,c,t)=>j.scheduleTask(c,t),onInvokeTask:(j,h,c,t,_,R)=>j.invokeTask(c,t,_,R),onCancelTask:(j,h,c,t)=>j.cancelTask(c,t)};class v{constructor(h,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=h,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this.zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const _=t&&t.onHasTask;(_||c&&c._hasTaskZS)&&(this._hasTaskZS=_?t:P,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=h,t.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),t.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),t.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(h,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,h,c):new E(h,c)}intercept(h,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,h,c,t):c}invoke(h,c,t,_,R){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,h,c,t,_,R):c.apply(t,_)}handleError(h,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,h,c)}scheduleTask(h,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,h,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=I)throw new Error("Task is missing scheduleFn.");C(c)}return t}invokeTask(h,c,t,_){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,h,c,t,_):c.callback.apply(t,_)}cancelTask(h,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,h,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(h,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,h,c)}catch(t){this.handleError(h,t)}}_updateTaskCount(h,c){const t=this._taskCounts,_=t[h],R=t[h]=_+c;if(R<0)throw new Error("More tasks executed then were scheduled.");0!=_&&0!=R||this.hasTask(this.zone,{microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:h})}}class g{constructor(h,c,t,_,R,L){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=h,this.source=c,this.data=_,this.scheduleFn=R,this.cancelFn=L,!t)throw new Error("callback is not defined");this.callback=t;const a=this;this.invoke=h===Q&&_&&_.useG?g.invokeTask:function(){return g.invokeTask.call(e,a,this,arguments)}}static invokeTask(h,c,t){h||(h=this),ee++;try{return h.runCount++,h.zone.runTask(h,c,t)}finally{1==ee&&T(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,q)}_transitionTo(h,c,t){if(this._state!==c&&this._state!==t)throw new Error(`${this.type} '${this.source}': can not transition to '${h}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`);this._state=h,h==G&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const M=l("setTimeout"),Z=l("Promise"),N=l("then");let J,U=[],x=!1;function X(j){if(J||e[Z]&&(J=e[Z].resolve(0)),J){let h=J[N];h||(h=J.then),h.call(J,j)}else e[M](j,0)}function C(j){0===ee&&0===U.length&&X(T),j&&U.push(j)}function T(){if(!x){for(x=!0;U.length;){const j=U;U=[];for(let h=0;h<j.length;h++){const c=j[h];try{c.zone.runTask(c,null,null)}catch(t){Y.onUnhandledError(t)}}}Y.microtaskDrainDone(),x=!1}}const K={name:"NO ZONE"},G="notScheduled",q="scheduling",A="scheduled",y="running",V="canceling",d="unknown",I="microTask",w="macroTask",Q="eventTask",oe={},Y={symbol:l,currentZoneFrame:()=>W,onUnhandledError:z,microtaskDrainDone:z,scheduleMicroTask:C,showUncaughtError:()=>!E[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:z,patchMethod:()=>z,bindArguments:()=>[],patchThen:()=>z,patchMacroTask:()=>z,patchEventPrototype:()=>z,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>z,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>z,wrapWithCurrentZone:()=>z,filterProperties:()=>[],attachOriginToPatched:()=>z,_redefineProperty:()=>z,patchCallbacks:()=>z,nativeScheduleMicroTask:X};let W={parent:null,zone:new E(null,null)},re=null,ee=0;function z(){}r("Zone","Zone"),e.Zone=E}(globalThis);const ie=Object.getOwnPropertyDescriptor,Ee=Object.defineProperty,ce=Object.getPrototypeOf,ge=Object.create,Ve=Array.prototype.slice,ke="addEventListener",we="removeEventListener",Ze=Zone.__symbol__(ke),Ne=Zone.__symbol__(we),ae="true",le="false",ve=Zone.__symbol__("");function Ie(e,n){return Zone.current.wrap(e,n)}function Me(e,n,s,r,i){return Zone.current.scheduleMacroTask(e,n,s,r,i)}const H=Zone.__symbol__,Re=typeof window<"u",Te=Re?window:void 0,$=Re&&Te||globalThis,ct="removeAttribute";function Le(e,n){for(let s=e.length-1;s>=0;s--)"function"==typeof e[s]&&(e[s]=Ie(e[s],n+"_"+s));return e}function Be(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ce=!("nw"in $)&&typeof $.process<"u"&&"[object process]"==={}.toString.call($.process),Ae=!Ce&&!Fe&&!(!Re||!Te.HTMLElement),Ue=typeof $.process<"u"&&"[object process]"==={}.toString.call($.process)&&!Fe&&!(!Re||!Te.HTMLElement),De={},We=function(e){if(!(e=e||$.event))return;let n=De[e.type];n||(n=De[e.type]=H("ON_PROPERTY"+e.type));const s=this||e.target||$,r=s[n];let i;return Ae&&s===Te&&"error"===e.type?(i=r&&r.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===i&&e.preventDefault()):(i=r&&r.apply(this,arguments),null!=i&&!i&&e.preventDefault()),i};function ze(e,n,s){let r=ie(e,n);if(!r&&s&&ie(s,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const i=H("on"+n+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete r.writable,delete r.value;const l=r.get,m=r.set,E=n.slice(2);let P=De[E];P||(P=De[E]=H("ON_PROPERTY"+E)),r.set=function(v){let g=this;!g&&e===$&&(g=$),g&&("function"==typeof g[P]&&g.removeEventListener(E,We),m&&m.call(g,null),g[P]=v,"function"==typeof v&&g.addEventListener(E,We,!1))},r.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;const g=v[P];if(g)return g;if(l){let M=l.call(this);if(M)return r.set.call(this,M),"function"==typeof v[ct]&&v.removeAttribute(n),M}return null},Ee(e,n,r),e[i]=!0}function Xe(e,n,s){if(n)for(let r=0;r<n.length;r++)ze(e,"on"+n[r],s);else{const r=[];for(const i in e)"on"==i.slice(0,2)&&r.push(i);for(let i=0;i<r.length;i++)ze(e,r[i],s)}}const ne=H("originalInstance");function be(e){const n=$[e];if(!n)return;$[H(e)]=n,$[e]=function(){const i=Le(arguments,e);switch(i.length){case 0:this[ne]=new n;break;case 1:this[ne]=new n(i[0]);break;case 2:this[ne]=new n(i[0],i[1]);break;case 3:this[ne]=new n(i[0],i[1],i[2]);break;case 4:this[ne]=new n(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},fe($[e],n);const s=new n(function(){});let r;for(r in s)"XMLHttpRequest"===e&&"responseBlob"===r||function(i){"function"==typeof s[i]?$[e].prototype[i]=function(){return this[ne][i].apply(this[ne],arguments)}:Ee($[e].prototype,i,{set:function(l){"function"==typeof l?(this[ne][i]=Ie(l,e+"."+i),fe(this[ne][i],l)):this[ne][i]=l},get:function(){return this[ne][i]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&($[e][r]=n[r])}function ue(e,n,s){let r=e;for(;r&&!r.hasOwnProperty(n);)r=ce(r);!r&&e[n]&&(r=e);const i=H(n);let l=null;if(r&&(!(l=r[i])||!r.hasOwnProperty(i))&&(l=r[i]=r[n],Be(r&&ie(r,n)))){const E=s(l,i,n);r[n]=function(){return E(this,arguments)},fe(r[n],l)}return l}function lt(e,n,s){let r=null;function i(l){const m=l.data;return m.args[m.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(m.target,m.args),l}r=ue(e,n,l=>function(m,E){const P=s(m,E);return P.cbIdx>=0&&"function"==typeof E[P.cbIdx]?Me(P.name,E[P.cbIdx],P,i):l.apply(m,E)})}function fe(e,n){e[H("OriginalDelegate")]=n}let qe=!1,je=!1;function ft(){if(qe)return je;qe=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(je=!0)}catch{}return je}Zone.__load_patch("ZoneAwarePromise",(e,n,s)=>{const r=Object.getOwnPropertyDescriptor,i=Object.defineProperty,m=s.symbol,E=[],P=!1!==e[m("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=m("Promise"),g=m("then"),M="__creationTrace__";s.onUnhandledError=a=>{if(s.showUncaughtError()){const u=a&&a.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(a)}},s.microtaskDrainDone=()=>{for(;E.length;){const a=E.shift();try{a.zone.runGuarded(()=>{throw a.throwOriginal?a.rejection:a})}catch(u){N(u)}}};const Z=m("unhandledPromiseRejectionHandler");function N(a){s.onUnhandledError(a);try{const u=n[Z];"function"==typeof u&&u.call(this,a)}catch{}}function U(a){return a&&a.then}function x(a){return a}function J(a){return c.reject(a)}const X=m("state"),C=m("value"),T=m("finally"),K=m("parentPromiseValue"),G=m("parentPromiseState"),q="Promise.then",A=null,y=!0,V=!1,d=0;function I(a,u){return o=>{try{Y(a,u,o)}catch(f){Y(a,!1,f)}}}const w=function(){let a=!1;return function(o){return function(){a||(a=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",oe=m("currentTaskTrace");function Y(a,u,o){const f=w();if(a===o)throw new TypeError(Q);if(a[X]===A){let k=null;try{("object"==typeof o||"function"==typeof o)&&(k=o&&o.then)}catch(b){return f(()=>{Y(a,!1,b)})(),a}if(u!==V&&o instanceof c&&o.hasOwnProperty(X)&&o.hasOwnProperty(C)&&o[X]!==A)re(o),Y(a,o[X],o[C]);else if(u!==V&&"function"==typeof k)try{k.call(o,f(I(a,u)),f(I(a,!1)))}catch(b){f(()=>{Y(a,!1,b)})()}else{a[X]=u;const b=a[C];if(a[C]=o,a[T]===T&&u===y&&(a[X]=a[G],a[C]=a[K]),u===V&&o instanceof Error){const p=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];p&&i(o,oe,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<b.length;)ee(a,b[p++],b[p++],b[p++],b[p++]);if(0==b.length&&u==V){a[X]=d;let p=o;try{throw new Error("Uncaught (in promise): "+function l(a){return a&&a.toString===Object.prototype.toString?(a.constructor&&a.constructor.name||"")+": "+JSON.stringify(a):a?a.toString():Object.prototype.toString.call(a)}(o)+(o&&o.stack?"\n"+o.stack:""))}catch(D){p=D}P&&(p.throwOriginal=!0),p.rejection=o,p.promise=a,p.zone=n.current,p.task=n.currentTask,E.push(p),s.scheduleMicroTask()}}}return a}const W=m("rejectionHandledHandler");function re(a){if(a[X]===d){try{const u=n[W];u&&"function"==typeof u&&u.call(this,{rejection:a[C],promise:a})}catch{}a[X]=V;for(let u=0;u<E.length;u++)a===E[u].promise&&E.splice(u,1)}}function ee(a,u,o,f,k){re(a);const b=a[X],p=b?"function"==typeof f?f:x:"function"==typeof k?k:J;u.scheduleMicroTask(q,()=>{try{const D=a[C],O=!!o&&T===o[T];O&&(o[K]=D,o[G]=b);const S=u.run(p,void 0,O&&p!==J&&p!==x?[]:[D]);Y(o,!0,S)}catch(D){Y(o,!1,D)}},o)}const j=function(){},h=e.AggregateError;class c{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return Y(new this(null),y,u)}static reject(u){return Y(new this(null),V,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new h([],"All promises were rejected"));const o=[];let f=0;try{for(let p of u)f++,o.push(c.resolve(p))}catch{return Promise.reject(new h([],"All promises were rejected"))}if(0===f)return Promise.reject(new h([],"All promises were rejected"));let k=!1;const b=[];return new c((p,D)=>{for(let O=0;O<o.length;O++)o[O].then(S=>{k||(k=!0,p(S))},S=>{b.push(S),f--,0===f&&(k=!0,D(new h(b,"All promises were rejected")))})})}static race(u){let o,f,k=new this((D,O)=>{o=D,f=O});function b(D){o(D)}function p(D){f(D)}for(let D of u)U(D)||(D=this.resolve(D)),D.then(b,p);return k}static all(u){return c.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof c?this:c).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,o){let f,k,b=new this((S,B)=>{f=S,k=B}),p=2,D=0;const O=[];for(let S of u){U(S)||(S=this.resolve(S));const B=D;try{S.then(F=>{O[B]=o?o.thenCallback(F):F,p--,0===p&&f(O)},F=>{o?(O[B]=o.errorCallback(F),p--,0===p&&f(O)):k(F)})}catch(F){k(F)}p++,D++}return p-=2,0===p&&f(O),b}constructor(u){const o=this;if(!(o instanceof c))throw new Error("Must be an instanceof Promise.");o[X]=A,o[C]=[];try{const f=w();u&&u(f(I(o,y)),f(I(o,V)))}catch(f){Y(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(u,o){var f;let k=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!k||"function"!=typeof k)&&(k=this.constructor||c);const b=new k(j),p=n.current;return this[X]==A?this[C].push(p,b,u,o):ee(this,p,b,u,o),b}catch(u){return this.then(null,u)}finally(u){var o;let f=null===(o=this.constructor)||void 0===o?void 0:o[Symbol.species];(!f||"function"!=typeof f)&&(f=c);const k=new f(j);k[T]=T;const b=n.current;return this[X]==A?this[C].push(b,k,u,u):ee(this,b,k,u,u),k}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;const t=e[v]=e.Promise;e.Promise=c;const _=m("thenPatched");function R(a){const u=a.prototype,o=r(u,"then");if(o&&(!1===o.writable||!o.configurable))return;const f=u.then;u[g]=f,a.prototype.then=function(k,b){return new c((D,O)=>{f.call(this,D,O)}).then(k,b)},a[_]=!0}return s.patchThen=R,t&&(R(t),ue(e,"fetch",a=>function L(a){return function(u,o){let f=a.apply(u,o);if(f instanceof c)return f;let k=f.constructor;return k[_]||R(k),f}}(a))),Promise[n.__symbol__("uncaughtPromiseErrors")]=E,c}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,s=H("OriginalDelegate"),r=H("Promise"),i=H("Error"),l=function(){if("function"==typeof this){const v=this[s];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const g=e[r];if(g)return n.call(g)}if(this===Error){const g=e[i];if(g)return n.call(g)}}return n.call(this)};l[s]=n,Function.prototype.toString=l;const m=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":m.call(this)}});let ye=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ye=!1}const ht={useG:!0},te={},Ye={},$e=new RegExp("^"+ve+"(\\w+)(true|false)$"),Ke=H("propagationStopped");function Je(e,n){const s=(n?n(e):e)+le,r=(n?n(e):e)+ae,i=ve+s,l=ve+r;te[e]={},te[e][le]=i,te[e][ae]=l}function dt(e,n,s,r){const i=r&&r.add||ke,l=r&&r.rm||we,m=r&&r.listeners||"eventListeners",E=r&&r.rmAll||"removeAllListeners",P=H(i),v="."+i+":",g="prependListener",M="."+g+":",Z=function(C,T,K){if(C.isRemoved)return;const G=C.callback;let q;"object"==typeof G&&G.handleEvent&&(C.callback=y=>G.handleEvent(y),C.originalDelegate=G);try{C.invoke(C,T,[K])}catch(y){q=y}const A=C.options;return A&&"object"==typeof A&&A.once&&T[l].call(T,K.type,C.originalDelegate?C.originalDelegate:C.callback,A),q};function N(C,T,K){if(!(T=T||e.event))return;const G=C||T.target||e,q=G[te[T.type][K?ae:le]];if(q){const A=[];if(1===q.length){const y=Z(q[0],G,T);y&&A.push(y)}else{const y=q.slice();for(let V=0;V<y.length&&(!T||!0!==T[Ke]);V++){const d=Z(y[V],G,T);d&&A.push(d)}}if(1===A.length)throw A[0];for(let y=0;y<A.length;y++){const V=A[y];n.nativeScheduleMicroTask(()=>{throw V})}}}const U=function(C){return N(this,C,!1)},x=function(C){return N(this,C,!0)};function J(C,T){if(!C)return!1;let K=!0;T&&void 0!==T.useG&&(K=T.useG);const G=T&&T.vh;let q=!0;T&&void 0!==T.chkDup&&(q=T.chkDup);let A=!1;T&&void 0!==T.rt&&(A=T.rt);let y=C;for(;y&&!y.hasOwnProperty(i);)y=ce(y);if(!y&&C[i]&&(y=C),!y||y[P])return!1;const V=T&&T.eventNameToString,d={},I=y[P]=y[i],w=y[H(l)]=y[l],Q=y[H(m)]=y[m],oe=y[H(E)]=y[E];let Y;T&&T.prepend&&(Y=y[H(T.prepend)]=y[T.prepend]);const c=K?function(o){if(!d.isExisting)return I.call(d.target,d.eventName,d.capture?x:U,d.options)}:function(o){return I.call(d.target,d.eventName,o.invoke,d.options)},t=K?function(o){if(!o.isRemoved){const f=te[o.eventName];let k;f&&(k=f[o.capture?ae:le]);const b=k&&o.target[k];if(b)for(let p=0;p<b.length;p++)if(b[p]===o){b.splice(p,1),o.isRemoved=!0,0===b.length&&(o.allRemoved=!0,o.target[k]=null);break}}if(o.allRemoved)return w.call(o.target,o.eventName,o.capture?x:U,o.options)}:function(o){return w.call(o.target,o.eventName,o.invoke,o.options)},R=T&&T.diff?T.diff:function(o,f){const k=typeof f;return"function"===k&&o.callback===f||"object"===k&&o.originalDelegate===f},L=Zone[H("UNPATCHED_EVENTS")],a=e[H("PASSIVE_EVENTS")],u=function(o,f,k,b,p=!1,D=!1){return function(){const O=this||e;let S=arguments[0];T&&T.transferEventName&&(S=T.transferEventName(S));let B=arguments[1];if(!B)return o.apply(this,arguments);if(Ce&&"uncaughtException"===S)return o.apply(this,arguments);let F=!1;if("function"!=typeof B){if(!B.handleEvent)return o.apply(this,arguments);F=!0}if(G&&!G(o,B,O,arguments))return;const he=ye&&!!a&&-1!==a.indexOf(S),se=function W(o,f){return!ye&&"object"==typeof o&&o?!!o.capture:ye&&f?"boolean"==typeof o?{capture:o,passive:!0}:o?"object"==typeof o&&!1!==o.passive?{...o,passive:!0}:o:{passive:!0}:o}(arguments[2],he);if(L)for(let _e=0;_e<L.length;_e++)if(S===L[_e])return he?o.call(O,S,B,se):o.apply(this,arguments);const xe=!!se&&("boolean"==typeof se||se.capture),nt=!(!se||"object"!=typeof se)&&se.once,kt=Zone.current;let Ge=te[S];Ge||(Je(S,V),Ge=te[S]);const rt=Ge[xe?ae:le];let Se,me=O[rt],ot=!1;if(me){if(ot=!0,q)for(let _e=0;_e<me.length;_e++)if(R(me[_e],B))return}else me=O[rt]=[];const st=O.constructor.name,it=Ye[st];it&&(Se=it[S]),Se||(Se=st+f+(V?V(S):S)),d.options=se,nt&&(d.options.once=!1),d.target=O,d.capture=xe,d.eventName=S,d.isExisting=ot;const Pe=K?ht:void 0;Pe&&(Pe.taskData=d);const de=kt.scheduleEventTask(Se,B,Pe,k,b);return d.target=null,Pe&&(Pe.taskData=null),nt&&(se.once=!0),!ye&&"boolean"==typeof de.options||(de.options=se),de.target=O,de.capture=xe,de.eventName=S,F&&(de.originalDelegate=B),D?me.unshift(de):me.push(de),p?O:void 0}};return y[i]=u(I,v,c,t,A),Y&&(y[g]=u(Y,M,function(o){return Y.call(d.target,d.eventName,o.invoke,d.options)},t,A,!0)),y[l]=function(){const o=this||e;let f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));const k=arguments[2],b=!!k&&("boolean"==typeof k||k.capture),p=arguments[1];if(!p)return w.apply(this,arguments);if(G&&!G(w,p,o,arguments))return;const D=te[f];let O;D&&(O=D[b?ae:le]);const S=O&&o[O];if(S)for(let B=0;B<S.length;B++){const F=S[B];if(R(F,p))return S.splice(B,1),F.isRemoved=!0,0===S.length&&(F.allRemoved=!0,o[O]=null,"string"==typeof f)&&(o[ve+"ON_PROPERTY"+f]=null),F.zone.cancelTask(F),A?o:void 0}return w.apply(this,arguments)},y[m]=function(){const o=this||e;let f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));const k=[],b=Qe(o,V?V(f):f);for(let p=0;p<b.length;p++){const D=b[p];k.push(D.originalDelegate?D.originalDelegate:D.callback)}return k},y[E]=function(){const o=this||e;let f=arguments[0];if(f){T&&T.transferEventName&&(f=T.transferEventName(f));const k=te[f];if(k){const D=o[k[le]],O=o[k[ae]];if(D){const S=D.slice();for(let B=0;B<S.length;B++){const F=S[B];this[l].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(O){const S=O.slice();for(let B=0;B<S.length;B++){const F=S[B];this[l].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const k=Object.keys(o);for(let b=0;b<k.length;b++){const D=$e.exec(k[b]);let O=D&&D[1];O&&"removeListener"!==O&&this[E].call(this,O)}this[E].call(this,"removeListener")}if(A)return this},fe(y[i],I),fe(y[l],w),oe&&fe(y[E],oe),Q&&fe(y[m],Q),!0}let X=[];for(let C=0;C<s.length;C++)X[C]=J(s[C],r);return X}function Qe(e,n){if(!n){const l=[];for(let m in e){const E=$e.exec(m);let P=E&&E[1];if(P&&(!n||P===n)){const v=e[m];if(v)for(let g=0;g<v.length;g++)l.push(v[g])}}return l}let s=te[n];s||(Je(n),s=te[n]);const r=e[s[le]],i=e[s[ae]];return r?i?r.concat(i):r.slice():i?i.slice():[]}function _t(e,n){const s=e.Event;s&&s.prototype&&n.patchMethod(s.prototype,"stopImmediatePropagation",r=>function(i,l){i[Ke]=!0,r&&r.apply(i,l)})}function Et(e,n,s,r,i){const l=Zone.__symbol__(r);if(n[l])return;const m=n[l]=n[r];n[r]=function(E,P,v){return P&&P.prototype&&i.forEach(function(g){const M=`${s}.${r}::`+g,Z=P.prototype;try{if(Z.hasOwnProperty(g)){const N=e.ObjectGetOwnPropertyDescriptor(Z,g);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(P.prototype,g,N)):Z[g]&&(Z[g]=e.wrapWithCurrentZone(Z[g],M))}else Z[g]&&(Z[g]=e.wrapWithCurrentZone(Z[g],M))}catch{}}),m.call(n,E,P,v)},e.attachOriginToPatched(n[r],m)}function et(e,n,s){if(!s||0===s.length)return n;const r=s.filter(l=>l.target===e);if(!r||0===r.length)return n;const i=r[0].ignoreProperties;return n.filter(l=>-1===i.indexOf(l))}function tt(e,n,s,r){e&&Xe(e,et(e,n,s),r)}function He(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,s)=>{const r=He(e);s.patchOnProperties=Xe,s.patchMethod=ue,s.bindArguments=Le,s.patchMacroTask=lt;const i=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[i]=e[l]),e[i]&&(n[i]=n[l]=e[i]),s.patchEventPrototype=_t,s.patchEventTarget=dt,s.isIEOrEdge=ft,s.ObjectDefineProperty=Ee,s.ObjectGetOwnPropertyDescriptor=ie,s.ObjectCreate=ge,s.ArraySlice=Ve,s.patchClass=be,s.wrapWithCurrentZone=Ie,s.filterProperties=et,s.attachOriginToPatched=fe,s._redefineProperty=Object.defineProperty,s.patchCallbacks=Et,s.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:te,eventNames:r,isBrowser:Ae,isMix:Ue,isNode:Ce,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:ke,REMOVE_EVENT_LISTENER_STR:we})});const Oe=H("zoneTask");function pe(e,n,s,r){let i=null,l=null;s+=r;const m={};function E(v){const g=v.data;return g.args[0]=function(){return v.invoke.apply(this,arguments)},g.handleId=i.apply(e,g.args),v}function P(v){return l.call(e,v.data.handleId)}i=ue(e,n+=r,v=>function(g,M){if("function"==typeof M[0]){const Z={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete m[Z.handleId]:Z.handleId&&(Z.handleId[Oe]=null))}};const U=Me(n,M[0],Z,E,P);if(!U)return U;const x=U.data.handleId;return"number"==typeof x?m[x]=U:x&&(x[Oe]=U),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(U.ref=x.ref.bind(x),U.unref=x.unref.bind(x)),"number"==typeof x||x?x:U}return v.apply(e,M)}),l=ue(e,s,v=>function(g,M){const Z=M[0];let N;"number"==typeof Z?N=m[Z]:(N=Z&&Z[Oe],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete m[Z]:Z&&(Z[Oe]=null),N.zone.cancelTask(N)):v.apply(e,M)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",s="clear";pe(e,n,s,"Timeout"),pe(e,n,s,"Interval"),pe(e,n,s,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{pe(e,"request","cancel","AnimationFrame"),pe(e,"mozRequest","mozCancel","AnimationFrame"),pe(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const s=["alert","prompt","confirm"];for(let r=0;r<s.length;r++)ue(e,s[r],(l,m,E)=>function(P,v){return n.current.run(l,e,v,E)})}),Zone.__load_patch("EventTarget",(e,n,s)=>{(function gt(e,n){n.patchEventPrototype(e,n)})(e,s),function mt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:s,zoneSymbolEventNames:r,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:m}=n.getGlobalObjects();for(let P=0;P<s.length;P++){const v=s[P],Z=m+(v+l),N=m+(v+i);r[v]={},r[v][l]=Z,r[v][i]=N}const E=e.EventTarget;E&&E.prototype&&n.patchEventTarget(e,n,[E&&E.prototype])}(e,s);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&s.patchEventTarget(e,s,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,n,s)=>{be("MutationObserver"),be("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,s)=>{be("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,s)=>{be("FileReader")}),Zone.__load_patch("on_property",(e,n,s)=>{!function Tt(e,n){if(Ce&&!Ue||Zone[e.symbol("patchEvents")])return;const s=n.__Zone_ignore_on_properties;let r=[];if(Ae){const i=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ut(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];tt(i,He(i),s&&s.concat(l),ce(i))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<r.length;i++){const l=n[r[i]];l&&l.prototype&&tt(l.prototype,He(l.prototype),s)}}(s,e)}),Zone.__load_patch("customElements",(e,n,s)=>{!function pt(e,n){const{isBrowser:s,isMix:r}=n.getGlobalObjects();(s||r)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,s)}),Zone.__load_patch("XHR",(e,n)=>{!function P(v){const g=v.XMLHttpRequest;if(!g)return;const M=g.prototype;let N=M[Ze],U=M[Ne];if(!N){const d=v.XMLHttpRequestEventTarget;if(d){const I=d.prototype;N=I[Ze],U=I[Ne]}}const x="readystatechange",J="scheduled";function X(d){const I=d.data,w=I.target;w[l]=!1,w[E]=!1;const Q=w[i];N||(N=w[Ze],U=w[Ne]),Q&&U.call(w,x,Q);const oe=w[i]=()=>{if(w.readyState===w.DONE)if(!I.aborted&&w[l]&&d.state===J){const W=w[n.__symbol__("loadfalse")];if(0!==w.status&&W&&W.length>0){const re=d.invoke;d.invoke=function(){const ee=w[n.__symbol__("loadfalse")];for(let z=0;z<ee.length;z++)ee[z]===d&&ee.splice(z,1);!I.aborted&&d.state===J&&re.call(d)},W.push(d)}else d.invoke()}else!I.aborted&&!1===w[l]&&(w[E]=!0)};return N.call(w,x,oe),w[s]||(w[s]=d),y.apply(w,I.args),w[l]=!0,d}function C(){}function T(d){const I=d.data;return I.aborted=!0,V.apply(I.target,I.args)}const K=ue(M,"open",()=>function(d,I){return d[r]=0==I[2],d[m]=I[1],K.apply(d,I)}),q=H("fetchTaskAborting"),A=H("fetchTaskScheduling"),y=ue(M,"send",()=>function(d,I){if(!0===n.current[A]||d[r])return y.apply(d,I);{const w={target:d,url:d[m],isPeriodic:!1,args:I,aborted:!1},Q=Me("XMLHttpRequest.send",C,w,X,T);d&&!0===d[E]&&!w.aborted&&Q.state===J&&Q.invoke()}}),V=ue(M,"abort",()=>function(d,I){const w=function Z(d){return d[s]}(d);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===n.current[q])return V.apply(d,I)})}(e);const s=H("xhrTask"),r=H("xhrSync"),i=H("xhrListener"),l=H("xhrScheduled"),m=H("xhrURL"),E=H("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const s=e.constructor.name;for(let r=0;r<n.length;r++){const i=n[r],l=e[i];if(l){if(!Be(ie(e,i)))continue;e[i]=(E=>{const P=function(){return E.apply(this,Le(arguments,s+"."+i))};return fe(P,E),P})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function s(r){return function(i){Qe(e,r).forEach(m=>{const E=e.PromiseRejectionEvent;if(E){const P=new E(r,{promise:i.promise,reason:i.rejection});m.invoke(P)}})}}e.PromiseRejectionEvent&&(n[H("unhandledPromiseRejectionHandler")]=s("unhandledrejection"),n[H("rejectionHandledHandler")]=s("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,s)=>{!function yt(e,n){n.patchMethod(e,"queueMicrotask",s=>function(r,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(e,s)})}},ie=>{ie(ie.s=5321)}]);