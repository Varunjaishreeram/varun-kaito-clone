!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ba24d611-e577-4747-bece-0208ad120734",e._sentryDebugIdIdentifier="sentry-dbid-ba24d611-e577-4747-bece-0208ad120734")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9315],{32258:(e,t,n)=>{n.d(t,{Eq:()=>l});var r=new WeakMap,o=new WeakMap,a={},i=0,c=function(e){return e&&(e.host||c(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=c(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],s=[],f=new Set,p=new Set(l),v=function(e){!e||f.has(e)||(f.add(e),v(e.parentNode))};l.forEach(v);var m=function(e){!e||p.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(u),a=null!==t&&"false"!==t,i=(r.get(e)||0)+1,c=(d.get(e)||0)+1;r.set(e,i),d.set(e,c),s.push(e),1===i&&a&&o.set(e,!0),1===c&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),i++,function(){s.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),u(o,a,n,"aria-hidden")):function(){return null}}},56984:(e,t,n)=>{n.d(t,{m:()=>o});var r,o=function(){return r||n.nc}},55330:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(50133).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},15967:(e,t,n)=>{n.d(t,{A:()=>B});var r=n(39147),o=n(33670),a="right-scroll-bar-position",i="width-before-scroll-bar";function c(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var u="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,l=new WeakMap,d=(0,n(98198).f)(),s=function(){},f=o.forwardRef(function(e,t){var n,a,i,f,p=o.useRef(null),v=o.useState({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:s}),m=v[0],h=v[1],g=e.forwardProps,y=e.children,b=e.className,E=e.removeScrollBar,w=e.enabled,C=e.shards,x=e.sideCar,S=e.noIsolation,R=e.inert,A=e.allowPinchZoom,N=e.as,k=e.gapMode,D=(0,r.Tt)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),I=(n=[p,t],a=function(e){return n.forEach(function(t){return c(t,e)})},(i=(0,o.useState)(function(){return{value:null,callback:a,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=a,f=i.facade,u(function(){var e=l.get(f);if(e){var t=new Set(e),r=new Set(n),o=f.current;t.forEach(function(e){r.has(e)||c(e,null)}),r.forEach(function(e){t.has(e)||c(e,o)})}l.set(f,n)},[n]),f),T=(0,r.Cl)((0,r.Cl)({},D),m);return o.createElement(o.Fragment,null,w&&o.createElement(x,{sideCar:d,removeScrollBar:E,shards:C,noIsolation:S,inert:R,setCallbacks:h,allowPinchZoom:!!A,lockRef:p,gapMode:k}),g?o.cloneElement(o.Children.only(y),(0,r.Cl)((0,r.Cl)({},T),{ref:I})):o.createElement(void 0===N?"div":N,(0,r.Cl)({},T,{className:b,ref:I}),y))});f.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},f.classNames={fullWidth:i,zeroRight:a};var p=n(90388),v=n(79781),m={left:0,top:0,right:0,gap:0},h=function(e){return parseInt(e||"",10)||0},g=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[h(n),h(r),h(o)]},y=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return m;var t=g(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},b=(0,v.T0)(),E="data-scroll-locked",w=function(e,t,n,r){var o=e.left,c=e.top,u=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(E,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(c,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(i," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(a," .").concat(a," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i," .").concat(i," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(E,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},C=function(){var e=parseInt(document.body.getAttribute(E)||"0",10);return isFinite(e)?e:0},x=function(){o.useEffect(function(){return document.body.setAttribute(E,(C()+1).toString()),function(){var e=C()-1;e<=0?document.body.removeAttribute(E):document.body.setAttribute(E,e.toString())}},[])},S=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r;x();var i=o.useMemo(function(){return y(a)},[a]);return o.createElement(b,{styles:w(i,!t,a,n?"":"!important")})},R=!1;if("undefined"!=typeof window)try{var A=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",A,A),window.removeEventListener("test",A,A)}catch(e){R=!1}var N=!!R&&{passive:!1},k=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},D=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),I(e,r)){var o=T(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},I=function(e,t){return"v"===e?k(t,"overflowY"):k(t,"overflowX")},T=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},M=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,u=n.target,l=t.contains(u),d=!1,s=c>0,f=0,p=0;do{var v=T(e,u),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&I(e,u)&&(f+=h,p+=m),u instanceof ShadowRoot?u=u.host:u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return s&&(o&&1>Math.abs(f)||!o&&c>f)?d=!0:!s&&(o&&1>Math.abs(p)||!o&&-c>p)&&(d=!0),d},j=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},O=function(e){return[e.deltaX,e.deltaY]},L=function(e){return e&&"current"in e?e.current:e},P=0,F=[];let _=(0,p.m)(d,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),i=o.useState(P++)[0],c=o.useState(v.T0)[0],u=o.useRef(e);o.useEffect(function(){u.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(0,r.fX)([e.lockRef.current],(e.shards||[]).map(L),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var r,o=j(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-o[0],l="deltaY"in e?e.deltaY:i[1]-o[1],d=e.target,s=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===s&&"range"===d.type)return!1;var f=D(s,d);if(!f)return!0;if(f?r=s:(r="v"===s?"h":"v",f=D(s,d)),!f)return!1;if(!a.current&&"changedTouches"in e&&(c||l)&&(a.current=r),!r)return!0;var p=a.current||r;return M(p,t,e,"h"===p?c:l,!0)},[]),d=o.useCallback(function(e){if(F.length&&F[F.length-1]===c){var n="deltaY"in e?O(e):j(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(L).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),f=o.useCallback(function(e){n.current=j(e),a.current=void 0},[]),p=o.useCallback(function(t){s(t.type,O(t),t.target,l(t,e.lockRef.current))},[]),m=o.useCallback(function(t){s(t.type,j(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return F.push(c),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:m}),document.addEventListener("wheel",d,N),document.addEventListener("touchmove",d,N),document.addEventListener("touchstart",f,N),function(){F=F.filter(function(e){return e!==c}),document.removeEventListener("wheel",d,N),document.removeEventListener("touchmove",d,N),document.removeEventListener("touchstart",f,N)}},[]);var h=e.removeScrollBar,g=e.inert;return o.createElement(o.Fragment,null,g?o.createElement(c,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,h?o.createElement(S,{gapMode:e.gapMode}):null)});var W=o.forwardRef(function(e,t){return o.createElement(f,(0,r.Cl)({},e,{ref:t,sideCar:_}))});W.classNames=f.classNames;let B=W},79781:(e,t,n)=>{n.d(t,{T0:()=>c});var r=n(33670),o=n(56984),a=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=(0,o.m)();return t&&e.setAttribute("nonce",t),e}())){var r,a;(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},i=function(){var e=a();return function(t,n){r.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},c=function(){var e=i();return function(t){return e(t.styles,t.dynamic),null}}},90388:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(39147),o=n(33670),a=function(e){var t=e.sideCar,n=(0,r.Tt)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.Cl)({},n))};function i(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},98198:(e,t,n)=>{n.d(t,{f:()=>a});var r=n(39147);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,i=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return i.options=(0,r.Cl)({async:!0,ssr:!1},e),i}},33678:(e,t,n)=>{n.d(t,{UC:()=>et,VY:()=>er,ZL:()=>$,bL:()=>J,bm:()=>eo,hE:()=>en,hJ:()=>ee,l9:()=>Q});var r=n(33670),o=n(97631),a=n(41555),i=n(72923),c=n(6831),u=n(79551),l=n(75724),d=n(82601),s=n(77148),f=n(11251),p=n(4165),v=n(51923),m=n(15967),h=n(32258),g=n(61254),y=n(22342),b="Dialog",[E,w]=(0,i.A)(b),[C,x]=E(b),S=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:l=!0}=e,d=r.useRef(null),s=r.useRef(null),[f=!1,p]=(0,u.i)({prop:o,defaultProp:a,onChange:i});return(0,y.jsx)(C,{scope:t,triggerRef:d,contentRef:s,contentId:(0,c.B)(),titleId:(0,c.B)(),descriptionId:(0,c.B)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:l,children:n})};S.displayName=b;var R="DialogTrigger",A=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=x(R,n),c=(0,a.s)(t,i.triggerRef);return(0,y.jsx)(p.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Z(i.open),...r,ref:c,onClick:(0,o.m)(e.onClick,i.onOpenToggle)})});A.displayName=R;var N="DialogPortal",[k,D]=E(N,{forceMount:void 0}),I=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=x(N,t);return(0,y.jsx)(k,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,y.jsx)(f.C,{present:n||i.open,children:(0,y.jsx)(s.Z,{asChild:!0,container:a,children:e})}))})};I.displayName=N;var T="DialogOverlay",M=r.forwardRef((e,t)=>{let n=D(T,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=x(T,e.__scopeDialog);return a.modal?(0,y.jsx)(f.C,{present:r||a.open,children:(0,y.jsx)(j,{...o,ref:t})}):null});M.displayName=T;var j=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=x(T,n);return(0,y.jsx)(m.A,{as:g.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,y.jsx)(p.sG.div,{"data-state":Z(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),O="DialogContent",L=r.forwardRef((e,t)=>{let n=D(O,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=x(O,e.__scopeDialog);return(0,y.jsx)(f.C,{present:r||a.open,children:a.modal?(0,y.jsx)(P,{...o,ref:t}):(0,y.jsx)(F,{...o,ref:t})})});L.displayName=O;var P=r.forwardRef((e,t)=>{let n=x(O,e.__scopeDialog),i=r.useRef(null),c=(0,a.s)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,h.Eq)(e)},[]),(0,y.jsx)(_,{...e,ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault())})}),F=r.forwardRef((e,t)=>{let n=x(O,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,y.jsx)(_,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let c=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(c))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),_=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:c,...u}=e,s=x(O,n),f=r.useRef(null),p=(0,a.s)(t,f);return(0,v.Oh)(),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.n,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:c,children:(0,y.jsx)(l.qW,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":Z(s.open),...u,ref:p,onDismiss:()=>s.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(z,{titleId:s.titleId}),(0,y.jsx)(V,{contentRef:f,descriptionId:s.descriptionId})]})]})}),W="DialogTitle",B=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=x(W,n);return(0,y.jsx)(p.sG.h2,{id:o.titleId,...r,ref:t})});B.displayName=W;var X="DialogDescription",K=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=x(X,n);return(0,y.jsx)(p.sG.p,{id:o.descriptionId,...r,ref:t})});K.displayName=X;var q="DialogClose",Y=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=x(q,n);return(0,y.jsx)(p.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>a.onOpenChange(!1))})});function Z(e){return e?"open":"closed"}Y.displayName=q;var G="DialogTitleWarning",[H,U]=(0,i.q)(G,{contentName:O,titleName:W,docsSlug:"dialog"}),z=e=>{let{titleId:t}=e,n=U(G),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},V=e=>{let{contentRef:t,descriptionId:n}=e,o=U("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},J=S,Q=A,$=I,ee=M,et=L,en=B,er=K,eo=Y},51923:(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n(33670),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},82601:(e,t,n)=>{n.d(t,{n:()=>s});var r=n(33670),o=n(41555),a=n(4165),i=n(29303),c=n(22342),u="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},s=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:s=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...y}=e,[b,E]=r.useState(null),w=(0,i.c)(h),C=(0,i.c)(g),x=r.useRef(null),S=(0,o.s)(t,e=>E(e)),R=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(s){let e=function(e){if(R.paused||!b)return;let t=e.target;b.contains(t)?x.current=t:v(x.current,{select:!0})},t=function(e){if(R.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||v(x.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&v(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[s,b,R.paused]),r.useEffect(()=>{if(b){m.add(R);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(u,d);b.addEventListener(u,w),b.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(v(r,{select:t}),document.activeElement!==n)return}(f(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&v(b))}return()=>{b.removeEventListener(u,w),setTimeout(()=>{let t=new CustomEvent(l,d);b.addEventListener(l,C),b.dispatchEvent(t),t.defaultPrevented||v(null!=e?e:document.body,{select:!0}),b.removeEventListener(l,C),m.remove(R)},0)}}},[b,w,C,R]);let A=r.useCallback(e=>{if(!n&&!s||R.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[p(t,e),p(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&v(a,{select:!0})):(e.preventDefault(),n&&v(o,{select:!0})):r===t&&e.preventDefault()}},[n,s,R.paused]);return(0,c.jsx)(a.sG.div,{tabIndex:-1,...y,ref:S,onKeyDown:A})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function v(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}s.displayName="FocusScope";var m=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=h(e,t)).unshift(t)},remove(t){var n;null===(n=(e=h(e,t))[0])||void 0===n||n.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},39147:(e,t,n)=>{n.d(t,{Cl:()=>r,Tt:()=>o,fX:()=>a});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);