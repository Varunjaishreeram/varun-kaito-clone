!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="34b00b9e-1353-4337-b243-84663f6eae7b",e._sentryDebugIdIdentifier="sentry-dbid-34b00b9e-1353-4337-b243-84663f6eae7b")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[793],{37808:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(50133).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},19548:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(14344),o=n(22342),i=r._(n(33670)),a=n(26227),l=n(39589),u=n(27333),s=n(68080),c=n(93612),d=n(65649),f=n(53783);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}n(75340);let m=i.default.forwardRef(function(e,t){let n,r;let{href:a,as:m,children:h,prefetch:g=null,passHref:w,replace:y,shallow:b,scroll:x,onClick:C,onMouseEnter:R,onTouchStart:j,legacyBehavior:N=!1,...E}=e;n=h,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let M=i.default.useContext(l.AppRouterContext),P=!1!==g,A=null===g?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:O,as:_}=i.default.useMemo(()=>{let e=v(a);return{href:e,as:m?v(m):e}},[a,m]),T=i.default.useRef(O),k=i.default.useRef(_);N&&(r=i.default.Children.only(n));let I=N?r&&"object"==typeof r&&r.ref:t,[D,S,L]=(0,u.useIntersection)({rootMargin:"200px"}),F=i.default.useCallback(e=>{(k.current!==_||T.current!==O)&&(L(),k.current=_,T.current=O),D(e)},[_,O,L,D]),U=(0,c.useMergedRef)(F,I);i.default.useEffect(()=>{M&&S&&P&&p(M,O,{kind:A})},[_,O,S,P,M,A]);let K={ref:U,onClick(e){N||"function"!=typeof C||C(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,r,o,a,l){let{nodeName:u}=e.currentTarget;"A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),i.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,M,O,_,y,b,x)},onMouseEnter(e){N||"function"!=typeof R||R(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&P&&p(M,O,{kind:A})},onTouchStart:function(e){N||"function"!=typeof j||j(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&P&&p(M,O,{kind:A})}};return(0,d.isAbsoluteUrl)(_)?K.href=_:N&&!w&&("a"!==r.type||"href"in r.props)||(K.href=(0,f.addBasePath)(_)),N?i.default.cloneElement(r,K):(0,o.jsx)("a",{...E,...K,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},27333:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(33670),o=n(1260),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},74272:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(55636);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},19645:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return l}});let r=n(22342),o=n(59405),i=n(89318),a=n(89947);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=i.workAsyncStorage.getStore();if(void 0===n)return null;let l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;l.push(...t)}}return 0===l.length?null:(0,r.jsx)(r.Fragment,{children:l.map(e=>{let t=n.assetPrefix+"/_next/"+(0,a.encodeURIPath)(e);return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,o.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},32617:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(33670);function o(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var o,i,a,l,u,s,c,d=(void 0===(o=t)&&(o=0),i=(0,r.useRef)(!1),a=(0,r.useRef)(),l=(0,r.useRef)(e),u=(0,r.useCallback)(function(){return i.current},[]),s=(0,r.useCallback)(function(){i.current=!1,a.current&&clearTimeout(a.current),a.current=setTimeout(function(){i.current=!0,l.current()},o)},[o]),c=(0,r.useCallback)(function(){i.current=null,a.current&&clearTimeout(a.current)},[]),(0,r.useEffect)(function(){l.current=e},[e]),(0,r.useEffect)(function(){return s(),c},[o]),[u,c,s]),f=d[0],p=d[1],v=d[2];return(0,r.useEffect)(v,n),[f,p]}},94948:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(33670),o=n(28436);let i=function(e,t){void 0===t&&(t=!0);var n=(0,r.useState)(!1),i=n[0],a=n[1];return(0,r.useEffect)(function(){var n=function(){return a(!0)},r=function(){return a(!1)};t&&e&&e.current&&((0,o.on)(e.current,"mouseover",n),(0,o.on)(e.current,"mouseout",r));var i=e.current;return function(){t&&i&&((0,o.AU)(i,"mouseover",n),(0,o.AU)(i,"mouseout",r))}},[t,e]),i}},15349:(e,t,n)=>{n.d(t,{UC:()=>ep,Y9:()=>ed,q7:()=>ec,bL:()=>es,l9:()=>ef});var r=n(33670),o=n(72923),i=n(58866);function a(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function l(...e){return t=>{let n=!1,r=e.map(e=>{let r=a(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():a(e[t],null)}}}}function u(...e){return r.useCallback(l(...e),e)}function s(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var c=n(79551);n(59405);var d=n(22342),f=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),a=i.find(m);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,d.jsx)(p,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,d.jsx)(p,{...o,ref:t,children:n})});f.displayName="Slot";var p=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?l(t,e):e})}return r.Children.count(n)>1?r.Children.only(null):null});p.displayName="SlotClone";var v=({children:e})=>(0,d.jsx)(d.Fragment,{children:e});function m(e){return r.isValidElement(e)&&e.type===v}var h=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?f:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,d.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),g=n(82378),w=e=>{let{present:t,children:n}=e,o=function(e){var t,n;let[o,i]=r.useState(),a=r.useRef({}),l=r.useRef(e),u=r.useRef("none"),[s,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=y(a.current);u.current="mounted"===s?e:"none"},[s]),(0,g.N)(()=>{let t=a.current,n=l.current;if(n!==e){let r=u.current,o=y(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),l.current=e}},[e,c]),(0,g.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=y(a.current).includes(e.animationName);if(e.target===o&&r&&(c("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(u.current=y(a.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}c("ANIMATION_END")},[o,c]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:r.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),i="function"==typeof n?n({present:o.isPresent}):r.Children.only(n),a=u(o.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(i));return"function"==typeof n||o.isPresent?r.cloneElement(i,{ref:a}):null};function y(e){return(null==e?void 0:e.animationName)||"none"}w.displayName="Presence";var b=n(6831),x="Collapsible",[C,R]=(0,o.A)(x),[j,N]=C(x),E=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,open:o,defaultOpen:i,disabled:a,onOpenChange:l,...u}=e,[s=!1,f]=(0,c.i)({prop:o,defaultProp:i,onChange:l});return(0,d.jsx)(j,{scope:n,disabled:a,contentId:(0,b.B)(),open:s,onOpenToggle:r.useCallback(()=>f(e=>!e),[f]),children:(0,d.jsx)(h.div,{"data-state":T(s),"data-disabled":a?"":void 0,...u,ref:t})})});E.displayName=x;var M="CollapsibleTrigger",P=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=N(M,n);return(0,d.jsx)(h.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":T(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:s(e.onClick,o.onOpenToggle)})});P.displayName=M;var A="CollapsibleContent",O=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=N(A,e.__scopeCollapsible);return(0,d.jsx)(w,{present:n||o.open,children:e=>{let{present:n}=e;return(0,d.jsx)(_,{...r,ref:t,present:n})}})});O.displayName=A;var _=r.forwardRef((e,t)=>{let{__scopeCollapsible:n,present:o,children:i,...a}=e,l=N(A,n),[s,c]=r.useState(o),f=r.useRef(null),p=u(t,f),v=r.useRef(0),m=v.current,w=r.useRef(0),y=w.current,b=l.open||s,x=r.useRef(b),C=r.useRef(void 0);return r.useEffect(()=>{let e=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,g.N)(()=>{let e=f.current;if(e){C.current=C.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,w.current=t.width,x.current||(e.style.transitionDuration=C.current.transitionDuration,e.style.animationName=C.current.animationName),c(o)}},[l.open,o]),(0,d.jsx)(h.div,{"data-state":T(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!b,...a,ref:p,style:{"--radix-collapsible-content-height":m?"".concat(m,"px"):void 0,"--radix-collapsible-content-width":y?"".concat(y,"px"):void 0,...e.style},children:b&&i})});function T(e){return e?"open":"closed"}var k=n(87313),I="Accordion",D=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[S,L,F]=(0,i.N)(I),[U,K]=(0,o.A)(I,[F,R]),V=R(),W=r.forwardRef((e,t)=>{let{type:n,...r}=e;return(0,d.jsx)(S.Provider,{scope:e.__scopeAccordion,children:"multiple"===n?(0,d.jsx)($,{...r,ref:t}):(0,d.jsx)(H,{...r,ref:t})})});W.displayName=I;var[G,B]=U(I),[z,q]=U(I,{collapsible:!1}),H=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:i=()=>{},collapsible:a=!1,...l}=e,[u,s]=(0,c.i)({prop:n,defaultProp:o,onChange:i});return(0,d.jsx)(G,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:s,onItemClose:r.useCallback(()=>a&&s(""),[a,s]),children:(0,d.jsx)(z,{scope:e.__scopeAccordion,collapsible:a,children:(0,d.jsx)(Y,{...l,ref:t})})})}),$=r.forwardRef((e,t)=>{let{value:n,defaultValue:o,onValueChange:i=()=>{},...a}=e,[l=[],u]=(0,c.i)({prop:n,defaultProp:o,onChange:i}),s=r.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[u]),f=r.useCallback(e=>u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[u]);return(0,d.jsx)(G,{scope:e.__scopeAccordion,value:l,onItemOpen:s,onItemClose:f,children:(0,d.jsx)(z,{scope:e.__scopeAccordion,collapsible:!0,children:(0,d.jsx)(Y,{...a,ref:t})})})}),[Z,X]=U(I),Y=r.forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:o,dir:i,orientation:a="vertical",...l}=e,c=u(r.useRef(null),t),f=L(n),p="ltr"===(0,k.jH)(i),v=s(e.onKeyDown,e=>{var t;if(!D.includes(e.key))return;let n=e.target,r=f().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=r.findIndex(e=>e.ref.current===n),i=r.length;if(-1===o)return;e.preventDefault();let l=o,u=i-1,s=()=>{(l=o+1)>u&&(l=0)},c=()=>{(l=o-1)<0&&(l=u)};switch(e.key){case"Home":l=0;break;case"End":l=u;break;case"ArrowRight":"horizontal"===a&&(p?s():c());break;case"ArrowDown":"vertical"===a&&s();break;case"ArrowLeft":"horizontal"===a&&(p?c():s());break;case"ArrowUp":"vertical"===a&&c()}null===(t=r[l%i].ref.current)||void 0===t||t.focus()});return(0,d.jsx)(Z,{scope:n,disabled:o,direction:i,orientation:a,children:(0,d.jsx)(S.Slot,{scope:n,children:(0,d.jsx)(h.div,{...l,"data-orientation":a,ref:c,onKeyDown:o?void 0:v})})})}),J="AccordionItem",[Q,ee]=U(J),et=r.forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,i=X(J,n),a=B(J,n),l=V(n),u=(0,b.B)(),s=r&&a.value.includes(r)||!1,c=i.disabled||e.disabled;return(0,d.jsx)(Q,{scope:n,open:s,disabled:c,triggerId:u,children:(0,d.jsx)(E,{"data-orientation":i.orientation,"data-state":eu(s),...l,...o,ref:t,disabled:c,open:s,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})})});et.displayName=J;var en="AccordionHeader",er=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=X(I,n),i=ee(en,n);return(0,d.jsx)(h.h3,{"data-orientation":o.orientation,"data-state":eu(i.open),"data-disabled":i.disabled?"":void 0,...r,ref:t})});er.displayName=en;var eo="AccordionTrigger",ei=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=X(I,n),i=ee(eo,n),a=q(eo,n),l=V(n);return(0,d.jsx)(S.ItemSlot,{scope:n,children:(0,d.jsx)(P,{"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...l,...r,ref:t})})});ei.displayName=eo;var ea="AccordionContent",el=r.forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=X(I,n),i=ee(ea,n),a=V(n);return(0,d.jsx)(O,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...a,...r,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function eu(e){return e?"open":"closed"}el.displayName=ea;var es=W,ec=et,ed=er,ef=ei,ep=el},58866:(e,t,n)=>{n.d(t,{N:()=>p});var r=n(33670),o=n(72923);function i(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function a(...e){return t=>{let n=!1,r=e.map(e=>{let r=i(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():i(e[t],null)}}}}function l(...e){return r.useCallback(a(...e),e)}var u=n(22342),s=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),a=i.find(f);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,u.jsx)(c,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,u.jsx)(c,{...o,ref:t,children:n})});s.displayName="Slot";var c=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?a(t,e):e})}return r.Children.count(n)>1?r.Children.only(null):null});c.displayName="SlotClone";var d=({children:e})=>(0,u.jsx)(u.Fragment,{children:e});function f(e){return r.isValidElement(e)&&e.type===d}function p(e){let t=e+"CollectionProvider",[n,i]=(0,o.A)(t),[a,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,u.jsx)(a,{scope:t,itemMap:i,collectionRef:o,children:n})};d.displayName=t;let f=e+"CollectionSlot",p=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=l(t,c(f,n).collectionRef);return(0,u.jsx)(s,{ref:o,children:r})});p.displayName=f;let v=e+"CollectionItemSlot",m="data-radix-collection-item",h=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,a=r.useRef(null),d=l(t,a),f=c(v,n);return r.useEffect(()=>(f.itemMap.set(a,{ref:a,...i}),()=>void f.itemMap.delete(a))),(0,u.jsx)(s,{[m]:"",ref:d,children:o})});return h.displayName=v,[{Provider:d,Slot:p,ItemSlot:h},function(t){let n=c(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},i]}},87313:(e,t,n)=>{n.d(t,{jH:()=>i});var r=n(33670);n(22342);var o=r.createContext(void 0);function i(e){let t=r.useContext(o);return e||t||"ltr"}},55101:(e,t,n)=>{n.d(t,{UC:()=>ey,C1:()=>ew,q7:()=>em,N_:()=>eg,B8:()=>ev,bL:()=>ep,l9:()=>eh,LM:()=>eb});var r=n(33670),o=n(59405),i=n(72923),a=n(97631),l=n(4165),u=n(79551),s=n(41555),c=n(87313),d=n(11251),f=n(6831),p=n(22342),v=n(61254);function m(e){let t=e+"CollectionProvider",[n,o]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),a=n.length;function l(t){let{scope:n,children:o,...l}=t,u=n?.[e][a]||i,s=r.useMemo(()=>l,Object.values(l));return(0,p.jsx)(u.Provider,{value:s,children:o})}return n=[...n,o],l.displayName=t+"Provider",[l,function(n,l){let u=l?.[e][a]||i,s=r.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return(0,p.jsx)(i,{scope:t,itemMap:a,collectionRef:o,children:n})};l.displayName=t;let u=e+"CollectionSlot",c=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=a(u,n),i=(0,s.s)(t,o.collectionRef);return(0,p.jsx)(v.DX,{ref:i,children:r})});c.displayName=u;let d=e+"CollectionItemSlot",f="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,l=r.useRef(null),u=(0,s.s)(t,l),c=a(d,n);return r.useEffect(()=>(c.itemMap.set(l,{ref:l,...i}),()=>void c.itemMap.delete(l))),(0,p.jsx)(v.DX,{[f]:"",ref:u,children:o})});return m.displayName=d,[{Provider:l,Slot:c,ItemSlot:m},function(t){let n=a(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(f,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}var h=n(75724),g=n(82378),w=n(29303),y=n(58182),b="NavigationMenu",[x,C,R]=m(b),[j,N,E]=m(b),[M,P]=(0,i.A)(b,[R,E]),[A,O]=M(b),[_,T]=M(b),k=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:i,defaultValue:a,delayDuration:d=200,skipDelayDuration:f=300,orientation:v="horizontal",dir:m,...h}=e,[g,w]=r.useState(null),y=(0,s.s)(t,e=>w(e)),b=(0,c.jH)(m),x=r.useRef(0),C=r.useRef(0),R=r.useRef(0),[j,N]=r.useState(!0),[E="",M]=(0,u.i)({prop:o,onChange:e=>{let t=f>0;""!==e?(window.clearTimeout(R.current),t&&N(!1)):(window.clearTimeout(R.current),R.current=window.setTimeout(()=>N(!0),f)),null==i||i(e)},defaultProp:a}),P=r.useCallback(()=>{window.clearTimeout(C.current),C.current=window.setTimeout(()=>M(""),150)},[M]),A=r.useCallback(e=>{window.clearTimeout(C.current),M(e)},[M]),O=r.useCallback(e=>{E===e?window.clearTimeout(C.current):x.current=window.setTimeout(()=>{window.clearTimeout(C.current),M(e)},d)},[E,M,d]);return r.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(C.current),window.clearTimeout(R.current)},[]),(0,p.jsx)(D,{scope:n,isRootMenu:!0,value:E,dir:b,orientation:v,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(x.current),j?O(e):A(e)},onTriggerLeave:()=>{window.clearTimeout(x.current),P()},onContentEnter:()=>window.clearTimeout(C.current),onContentLeave:P,onItemSelect:e=>{M(t=>t===e?"":e)},onItemDismiss:()=>M(""),children:(0,p.jsx)(l.sG.nav,{"aria-label":"Main","data-orientation":v,dir:b,...h,ref:y})})});k.displayName=b;var I="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",...s}=e,c=O(I,n),[d="",f]=(0,u.i)({prop:r,onChange:o,defaultProp:i});return(0,p.jsx)(D,{scope:n,isRootMenu:!1,value:d,dir:c.dir,orientation:a,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>f(e),onItemSelect:e=>f(e),onItemDismiss:()=>f(""),children:(0,p.jsx)(l.sG.div,{"data-orientation":a,...s,ref:t})})}).displayName=I;var D=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:i,orientation:a,children:l,value:u,onItemSelect:s,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:v,onContentEnter:m,onContentLeave:h}=e,[g,y]=r.useState(null),[b,C]=r.useState(new Map),[R,j]=r.useState(null);return(0,p.jsx)(A,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:function(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,f.B)(),dir:i,orientation:a,viewport:g,onViewportChange:y,indicatorTrack:R,onIndicatorTrackChange:j,onTriggerEnter:(0,w.c)(d),onTriggerLeave:(0,w.c)(v),onContentEnter:(0,w.c)(m),onContentLeave:(0,w.c)(h),onItemSelect:(0,w.c)(s),onItemDismiss:(0,w.c)(c),onViewportContentChange:r.useCallback((e,t)=>{C(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{C(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,p.jsx)(x.Provider,{scope:t,children:(0,p.jsx)(_,{scope:t,items:b,children:l})})})},S="NavigationMenuList",L=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=O(S,n),i=(0,p.jsx)(l.sG.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,p.jsx)(l.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,p.jsx)(x.Slot,{scope:n,children:o.isRootMenu?(0,p.jsx)(er,{asChild:!0,children:i}):i})})});L.displayName=S;var F="NavigationMenuItem",[U,K]=M(F),V=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...i}=e,a=(0,f.B)(),u=r.useRef(null),s=r.useRef(null),c=r.useRef(null),d=r.useRef(()=>{}),v=r.useRef(!1),m=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){d.current();let t=ea(u.current);t.length&&el("start"===e?t:t.reverse())}},[]),h=r.useCallback(()=>{if(u.current){let e=ea(u.current);e.length&&(d.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,p.jsx)(U,{scope:n,value:o||a||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:v,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:h,onContentFocusOutside:h,children:(0,p.jsx)(l.sG.li,{...i,ref:t})})});V.displayName=F;var W="NavigationMenuTrigger",G=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...i}=e,u=O(W,e.__scopeNavigationMenu),c=K(W,e.__scopeNavigationMenu),d=r.useRef(null),f=(0,s.s)(d,c.triggerRef,t),v=ec(u.baseId,c.value),m=ed(u.baseId,c.value),h=r.useRef(!1),g=r.useRef(!1),w=c.value===u.value;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x.ItemSlot,{scope:n,value:c.value,children:(0,p.jsx)(ei,{asChild:!0,children:(0,p.jsx)(l.sG.button,{id:v,disabled:o,"data-disabled":o?"":void 0,"data-state":es(w),"aria-expanded":w,"aria-controls":m,...i,ref:f,onPointerEnter:(0,a.m)(e.onPointerEnter,()=>{g.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,a.m)(e.onPointerMove,ef(()=>{o||g.current||c.wasEscapeCloseRef.current||h.current||(u.onTriggerEnter(c.value),h.current=!0)})),onPointerLeave:(0,a.m)(e.onPointerLeave,ef(()=>{o||(u.onTriggerLeave(),h.current=!1)})),onClick:(0,a.m)(e.onClick,()=>{u.onItemSelect(c.value),g.current=w}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];w&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),w&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y.b,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,n=e.relatedTarget,r=n===d.current,o=null==t?void 0:t.contains(n);(r||!o)&&c.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,p.jsx)("span",{"aria-owns":m})]})]})});G.displayName=W;var B="navigationMenu.linkSelect",z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return(0,p.jsx)(ei,{asChild:!0,children:(0,p.jsx)(l.sG.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:(0,a.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(B,{bubbles:!0,cancelable:!0});if(t.addEventListener(B,e=>null==o?void 0:o(e),{once:!0}),(0,l.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(J,{bubbles:!0,cancelable:!0});(0,l.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});z.displayName="NavigationMenuLink";var q="NavigationMenuIndicator",H=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,i=O(q,e.__scopeNavigationMenu),a=!!i.value;return i.indicatorTrack?o.createPortal((0,p.jsx)(d.C,{present:n||a,children:(0,p.jsx)($,{...r,ref:t})}),i.indicatorTrack):null});H.displayName=q;var $=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,i=O(q,n),a=C(n),[u,s]=r.useState(null),[c,d]=r.useState(null),f="horizontal"===i.orientation,v=!!i.value;r.useEffect(()=>{var e;let t=null===(e=a().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[a,i.value]);let m=()=>{u&&d({size:f?u.offsetWidth:u.offsetHeight,offset:f?u.offsetLeft:u.offsetTop})};return eu(u,m),eu(i.indicatorTrack,m),c?(0,p.jsx)(l.sG.div,{"aria-hidden":!0,"data-state":v?"visible":"hidden","data-orientation":i.orientation,...o,ref:t,style:{position:"absolute",...f?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...o.style}}):null}),Z="NavigationMenuContent",X=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=O(Z,e.__scopeNavigationMenu),i=K(Z,e.__scopeNavigationMenu),l=(0,s.s)(i.contentRef,t),u=i.value===o.value,c={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?(0,p.jsx)(Y,{forceMount:n,...c,ref:l}):(0,p.jsx)(d.C,{present:n||u,children:(0,p.jsx)(Q,{"data-state":es(u),...c,ref:l,onPointerEnter:(0,a.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ef(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...c.style}})})});X.displayName=Z;var Y=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=O(Z,e.__scopeNavigationMenu);return(0,g.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,g.N)(()=>()=>r(e.value),[e.value,r]),null}),J="navigationMenu.rootContentDismiss",Q=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:i,focusProxyRef:l,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:d,...f}=e,v=O(Z,n),m=r.useRef(null),g=(0,s.s)(m,t),w=ec(v.baseId,o),y=ed(v.baseId,o),b=C(n),x=r.useRef(null),{onItemDismiss:R}=v;r.useEffect(()=>{let e=m.current;if(v.isRootMenu&&e){let t=()=>{var t;R(),c(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(J,t),()=>e.removeEventListener(J,t)}},[v.isRootMenu,e.value,i,R,c]);let j=r.useMemo(()=>{let e=b().map(e=>e.value);"rtl"===v.dir&&e.reverse();let t=e.indexOf(v.value),n=e.indexOf(v.previousValue),r=o===v.value,i=n===e.indexOf(o);if(!r&&!i)return x.current;let a=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return x.current=a,a},[v.previousValue,v.value,v.dir,b,o]);return(0,p.jsx)(er,{asChild:!0,children:(0,p.jsx)(h.qW,{id:y,"aria-labelledby":w,"data-motion":j,"data-orientation":v.orientation,...f,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(J,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,a.m)(e.onFocusOutside,e=>{var t;d();let n=e.target;(null===(t=v.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,a.m)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=b().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=v.isRootMenu&&(null===(t=v.viewport)||void 0===t?void 0:t.contains(n));(r||o||!v.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(el(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=l.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,a.m)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),ee="NavigationMenuViewport",et=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!O(ee,e.__scopeNavigationMenu).value;return(0,p.jsx)(d.C,{present:n||o,children:(0,p.jsx)(en,{...r,ref:t})})});et.displayName=ee;var en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...i}=e,u=O(ee,n),c=(0,s.s)(t,u.onViewportChange),f=T(Z,e.__scopeNavigationMenu),[v,m]=r.useState(null),[h,g]=r.useState(null),w=v?(null==v?void 0:v.width)+"px":void 0,y=v?(null==v?void 0:v.height)+"px":void 0,b=!!u.value,x=b?u.value:u.previousValue;return eu(h,()=>{h&&m({width:h.offsetWidth,height:h.offsetHeight})}),(0,p.jsx)(l.sG.div,{"data-state":es(b),"data-orientation":u.orientation,...i,ref:c,style:{pointerEvents:!b&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":w,"--radix-navigation-menu-viewport-height":y,...i.style},onPointerEnter:(0,a.m)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ef(u.onContentLeave)),children:Array.from(f.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,i=x===t;return(0,p.jsx)(d.C,{present:r||i,children:(0,p.jsx)(Q,{...o,ref:(0,s.t)(n,e=>{i&&e&&g(e)})})},t)})})}),er=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=O("FocusGroup",n);return(0,p.jsx)(j.Provider,{scope:n,children:(0,p.jsx)(j.Slot,{scope:n,children:(0,p.jsx)(l.sG.div,{dir:o.dir,...r,ref:t})})})}),eo=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ei=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=N(n),i=O("FocusGroupItem",n);return(0,p.jsx)(j.ItemSlot,{scope:n,children:(0,p.jsx)(l.sG.button,{...r,ref:t,onKeyDown:(0,a.m)(e.onKeyDown,e=>{if(["Home","End",...eo].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),eo.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>el(t)),e.preventDefault()}})})})});function ea(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function el(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eu(e,t){let n=(0,w.c)(t);(0,g.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function es(e){return e?"open":"closed"}function ec(e,t){return"".concat(e,"-trigger-").concat(t)}function ed(e,t){return"".concat(e,"-content-").concat(t)}function ef(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ep=k,ev=L,em=V,eh=G,eg=z,ew=H,ey=X,eb=et},25673:(e,t,n)=>{n.d(t,{UC:()=>B,ZL:()=>G,bL:()=>V,l9:()=>W});var r=n(33670),o=n(97631),i=n(41555),a=n(72923),l=n(75724),u=n(51923),s=n(82601),c=n(6831),d=n(69143),f=n(77148),p=n(11251),v=n(4165),m=n(61254),h=n(79551),g=n(32258),w=n(15967),y=n(22342),b="Popover",[x,C]=(0,a.A)(b,[d.Bk]),R=(0,d.Bk)(),[j,N]=x(b),E=e=>{let{__scopePopover:t,children:n,open:o,defaultOpen:i,onOpenChange:a,modal:l=!1}=e,u=R(t),s=r.useRef(null),[f,p]=r.useState(!1),[v=!1,m]=(0,h.i)({prop:o,defaultProp:i,onChange:a});return(0,y.jsx)(d.bL,{...u,children:(0,y.jsx)(j,{scope:t,contentId:(0,c.B)(),triggerRef:s,open:v,onOpenChange:m,onOpenToggle:r.useCallback(()=>m(e=>!e),[m]),hasCustomAnchor:f,onCustomAnchorAdd:r.useCallback(()=>p(!0),[]),onCustomAnchorRemove:r.useCallback(()=>p(!1),[]),modal:l,children:n})})};E.displayName=b;var M="PopoverAnchor";r.forwardRef((e,t)=>{let{__scopePopover:n,...o}=e,i=N(M,n),a=R(n),{onCustomAnchorAdd:l,onCustomAnchorRemove:u}=i;return r.useEffect(()=>(l(),()=>u()),[l,u]),(0,y.jsx)(d.Mz,{...a,...o,ref:t})}).displayName=M;var P="PopoverTrigger",A=r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,a=N(P,n),l=R(n),u=(0,i.s)(t,a.triggerRef),s=(0,y.jsx)(v.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":K(a.open),...r,ref:u,onClick:(0,o.m)(e.onClick,a.onOpenToggle)});return a.hasCustomAnchor?s:(0,y.jsx)(d.Mz,{asChild:!0,...l,children:s})});A.displayName=P;var O="PopoverPortal",[_,T]=x(O,{forceMount:void 0}),k=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=N(O,t);return(0,y.jsx)(_,{scope:t,forceMount:n,children:(0,y.jsx)(p.C,{present:n||i.open,children:(0,y.jsx)(f.Z,{asChild:!0,container:o,children:r})})})};k.displayName=O;var I="PopoverContent",D=r.forwardRef((e,t)=>{let n=T(I,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=N(I,e.__scopePopover);return(0,y.jsx)(p.C,{present:r||i.open,children:i.modal?(0,y.jsx)(S,{...o,ref:t}):(0,y.jsx)(L,{...o,ref:t})})});D.displayName=I;var S=r.forwardRef((e,t)=>{let n=N(I,e.__scopePopover),a=r.useRef(null),l=(0,i.s)(t,a),u=r.useRef(!1);return r.useEffect(()=>{let e=a.current;if(e)return(0,g.Eq)(e)},[]),(0,y.jsx)(w.A,{as:m.DX,allowPinchZoom:!0,children:(0,y.jsx)(F,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),u.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;u.current=r},{checkForDefaultPrevented:!1}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),L=r.forwardRef((e,t)=>{let n=N(I,e.__scopePopover),o=r.useRef(!1),i=r.useRef(!1);return(0,y.jsx)(F,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,a;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:t=>{var r,a;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let l=t.target;(null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),F=r.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:v,...m}=e,h=N(I,n),g=R(n);return(0,u.Oh)(),(0,y.jsx)(s.n,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,y.jsx)(l.qW,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:v,onEscapeKeyDown:c,onPointerDownOutside:f,onFocusOutside:p,onDismiss:()=>h.onOpenChange(!1),children:(0,y.jsx)(d.UC,{"data-state":K(h.open),role:"dialog",id:h.contentId,...g,...m,ref:t,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),U="PopoverClose";function K(e){return e?"open":"closed"}r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=N(U,n);return(0,y.jsx)(v.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>i.onOpenChange(!1))})}).displayName=U,r.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,o=R(n);return(0,y.jsx)(d.i3,{...o,...r,ref:t})}).displayName="PopoverArrow";var V=E,W=A,G=k,B=D}}]);