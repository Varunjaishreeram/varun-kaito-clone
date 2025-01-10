!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="05b449b8-991e-44ca-ba72-85daa11d9ac0",e._sentryDebugIdIdentifier="sentry-dbid-05b449b8-991e-44ca-ba72-85daa11d9ac0")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2215],{92215:(e,t,n)=>{n.r(t),n.d(t,{Provider:()=>i,useAtom:()=>w,useAtomValue:()=>h,useSetAtom:()=>v,useStore:()=>a});var r=n(33670),l=n(40371);let o=(0,r.createContext)(void 0),a=e=>{let t=(0,r.useContext)(o);return(null==e?void 0:e.store)||t||(0,l.zp)()},i=e=>{let{children:t,store:n}=e,a=(0,r.useRef)();return n||a.current||(a.current=(0,l.y$)()),(0,r.createElement)(o.Provider,{value:n||a.current},t)},u=e=>"function"==typeof(null==e?void 0:e.then),s=e=>{e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t})},d=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw s(e),e}),f=new WeakMap,c=e=>{let t=f.get(e);return t||(t=new Promise((n,r)=>{let l=e,o=e=>t=>{l===e&&n(t)},a=e=>t=>{l===e&&r(t)},i=e=>{"onCancel"in e&&"function"==typeof e.onCancel&&e.onCancel(r=>{if(r===e)throw Error("[Bug] p is not updated even after cancelation");u(r)?(f.set(r,t),l=r,r.then(o(r),a(r)),i(r)):n(r)})};e.then(o(e),a(e)),i(e)}),f.set(e,t)),t};function h(e,t){let n=a(t),[[l,o,i],f]=(0,r.useReducer)(t=>{let r=n.get(e);return Object.is(t[0],r)&&t[1]===n&&t[2]===e?t:[r,n,e]},void 0,()=>[n.get(e),n,e]),h=l;(o!==n||i!==e)&&(f(),h=n.get(e));let v=null==t?void 0:t.delay;return((0,r.useEffect)(()=>{let t=n.sub(e,()=>{if("number"==typeof v){let t=n.get(e);u(t)&&s(c(t)),setTimeout(f,v);return}f()});return f(),t},[n,e,v]),(0,r.useDebugValue)(h),u(h))?d(c(h)):h}function v(e,t){let n=a(t);return(0,r.useCallback)(function(){for(var t=arguments.length,r=Array(t),l=0;l<t;l++)r[l]=arguments[l];if(!("write"in e))throw Error("not writable atom");return n.set(e,...r)},[n,e])}function w(e,t){return[h(e,t),v(e,t)]}},40371:(e,t,n)=>{let r;n.d(t,{eU:()=>o,y$:()=>C,zp:()=>O});let l=0;function o(e,t){let n=`atom${++l}`,r={toString(){return this.debugLabel?n+":"+this.debugLabel:n}};return"function"==typeof e?r.read=e:(r.init=e,r.read=a,r.write=i),t&&(r.write=t),r}function a(e){return e(this)}function i(e,t,n){return t(this,"function"==typeof n?n(e(this)):n)}let u=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,s=e=>"init"in e,d=e=>!!e.write,f=new WeakMap,c=e=>{var t;return w(e)&&!(null==(t=f.get(e))?void 0:t[1])},h=(e,t)=>{let n=f.get(e);if(n)n[1]=!0,n[0].forEach(e=>e(t));else throw Error("[Bug] cancelable promise not found")},v=e=>{if(f.has(e))return;let t=[new Set,!1];f.set(e,t);let n=()=>{t[1]=!0};e.then(n,n),e.onCancel=e=>{t[0].add(e)}},w=e=>"function"==typeof(null==e?void 0:e.then),m=e=>"v"in e||"e"in e,b=e=>{if("e"in e)throw e.e;if(!("v"in e))throw Error("[Bug] atom state is not initialized");return e.v},g=(e,t,n)=>{n.p.has(e)||(n.p.add(e),t.then(()=>{n.p.delete(e)},()=>{n.p.delete(e)}))},p=(e,t,n,r,l)=>{var o;if(r===t)throw Error("[Bug] atom cannot depend on itself");n.d.set(r,l.n),c(n.v)&&g(t,n.v,l),null==(o=l.m)||o.t.add(t),e&&E(e,r,t)},_=()=>[new Map,new Map,new Set],y=(e,t,n)=>{e[0].has(t)||e[0].set(t,new Set),e[1].set(t,n)},E=(e,t,n)=>{let r=e[0].get(t);r&&r.add(n)},S=(e,t)=>e[0].get(t),k=(e,t)=>{e[2].add(t)},A=e=>{for(;e[1].size||e[2].size;){e[0].clear();let t=new Set(e[1].values());e[1].clear();let n=new Set(e[2]);e[2].clear(),t.forEach(e=>{var t;return null==(t=e.m)?void 0:t.l.forEach(e=>e())}),n.forEach(e=>e())}},T=e=>{let t;t=new Set;let n=(t,n,r)=>{let l="v"in n,o=n.v,a=c(n.v)?n.v:null;if(w(r)){for(let l of(v(r),n.d.keys()))g(t,r,e(l,n));n.v=r,delete n.e}else n.v=r,delete n.e;l&&Object.is(o,n.v)||(++n.n,a&&h(a,r))},r=(t,l,o,a)=>{var c;let h,v;if(!(null==a?void 0:a(l))&&m(o)&&(o.m||Array.from(o.d).every(([n,l])=>r(t,n,e(n,o),a).n===l)))return o;o.d.clear();let g=!0;try{let y=l.read(i=>{if(u(l,i)){let t=e(i,o);if(!m(t)){if(s(i))n(i,t,i.init);else throw Error("no atom init")}return b(t)}let d=r(t,i,e(i,o),a);if(g)p(t,l,o,i,d);else{let e=_();p(e,l,o,i,d),f(e,l,o),A(e)}return b(d)},{get signal(){return h||(h=new AbortController),h.signal},get setSelf(){return d(l)||console.warn("setSelf function cannot be used with read-only atom"),!v&&d(l)&&(v=(...e)=>{if(g&&console.warn("setSelf function cannot be called in sync"),!g)return i(l,...e)}),v}});if(n(l,o,y),w(y)){null==(c=y.onCancel)||c.call(y,()=>null==h?void 0:h.abort());let e=()=>{if(o.m){let e=_();f(e,l,o),A(e)}};y.then(e,e)}return o}catch(e){return delete o.v,o.e=e,++o.n,o}finally{g=!1}},l=(t,n,r)=>{var l,o;let a=new Map;for(let t of(null==(l=r.m)?void 0:l.t)||[])a.set(t,e(t,r));for(let t of r.p)a.set(t,e(t,r));return null==(o=S(t,n))||o.forEach(t=>{a.set(t,e(t,r))}),a},o=(e,t,n)=>{let o=[],a=new Set,i=(t,n)=>{if(!a.has(t)){for(let[r,o]of(a.add(t),l(e,t,n)))t!==r&&i(r,o);o.push([t,n,n.n])}};i(t,n);let u=new Set([t]),s=e=>a.has(e);for(let t=o.length-1;t>=0;--t){let[n,l,i]=o[t],d=!1;for(let e of l.d.keys())if(e!==n&&u.has(e)){d=!0;break}d&&(r(e,n,l,s),f(e,n,l),i!==l.n&&(y(e,n,l),u.add(n))),a.delete(n)}},a=(t,l,i,...d)=>l.write(n=>b(r(t,n,e(n,i))),(r,...d)=>{let c;let h=e(r,i);if(u(l,r)){if(!s(r))throw Error("atom not writable");let e="v"in h,l=h.v;n(r,h,d[0]),f(t,r,h),e&&Object.is(l,h.v)||(y(t,r,h),o(t,r,h))}else c=a(t,r,h,...d);return A(t),c},...d),i=(t,...n)=>{let r=_(),l=a(r,t,e(t),...n);return A(r),l},f=(t,n,r)=>{if(r.m&&!c(r.v)){for(let l of r.d.keys())r.m.d.has(l)||(E(t,l,e(l,r)).t.add(n),r.m.d.add(l));for(let l of r.m.d||[])if(!r.d.has(l)){r.m.d.delete(l);let o=C(t,l,e(l,r));null==o||o.t.delete(n)}}},E=(n,l,o)=>{if(!o.m){for(let t of(r(n,l,o),o.d.keys()))E(n,t,e(t,o)).t.add(l);if(o.m={l:new Set,d:new Set(o.d.keys()),t:new Set},t.add(l),d(l)&&l.onMount){let e=o.m,{onMount:t}=l;k(n,()=>{let r=t((...e)=>a(n,l,o,...e));r&&(e.u=r)})}}return o.m},C=(n,r,l)=>{if(l.m&&!l.m.l.size&&!Array.from(l.m.t).some(t=>{var n;return null==(n=e(t,l).m)?void 0:n.d.has(r)})){let o=l.m.u;for(let a of(o&&k(n,o),delete l.m,t.delete(r),l.d.keys())){let t=C(n,a,e(a,l));null==t||t.t.delete(r)}return}return l.m},O={get:t=>b(r(void 0,t,e(t))),set:i,sub:(t,n)=>{let r=_(),l=e(t),o=E(r,t,l);A(r);let a=o.l;return a.add(n),()=>{a.delete(n);let e=_();C(e,t,l),A(e)}},unstable_derive:t=>T(...t(e))};return Object.assign(O,{dev4_get_internal_weak_map:()=>({get:t=>{let n=e(t);if(0!==n.n)return n}}),dev4_get_mounted_atoms:()=>t,dev4_restore_atoms:t=>{let r=_();for(let[l,a]of t)if(s(l)){let t=e(l),i="v"in t,u=t.v;n(l,t,a),f(r,l,t),i&&Object.is(u,t.v)||(y(r,l,t),o(r,l,t))}A(r)}}),O},C=()=>{let e=new WeakMap;return T(t=>{let n=e.get(t);return n||(n={d:new Map,p:new Set,n:0},e.set(t,n)),n})},O=()=>(r||(r=C(),globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=r),globalThis.__JOTAI_DEFAULT_STORE__!==r&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")),r)}}]);