(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{94484:function(e,t,n){"use strict";var r=n(17674),o=n(59499),c=n(4730),i=(n(67294),n(4944)),s=n(26965),u=n(32125),a=n(85893),l=["stroke","fill","height","width"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.stroke,n=void 0===t?"currentColor":t,r=e.fill,o=void 0===r?"currentColor":r,i=e.height,s=void 0===i?"1em":i,u=e.width,f=void 0===u?"1em":u,h=(0,c.Z)(e,l);return(0,a.jsx)("svg",d(d({stroke:n,fill:o,height:s,width:f,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h),{},{children:(0,a.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},p=u.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),j=function(e){var t=e.children,n=(0,s.Z)("sidebar-open",!1),o=(0,r.Z)(n,2),c=o[0],i=o[1];return(0,a.jsxs)(p,{style:{transform:"translate(".concat(c?0:-300,"px)"),boxShadow:"".concat(c?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,a.jsx)("button",{style:{width:"2rem",height:"2rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"-1rem",transition:"transform 200ms",transform:"rotate(".concat(c?0:180,"deg)")},onClick:function(){i(!c)},children:(0,a.jsx)(h,{height:"1rem",width:"1rem"})}),t]})};t.Z=function(e){var t=e.navigation,n=e.content;return(0,a.jsx)("div",{children:(0,a.jsxs)(i.Z,{children:[(0,a.jsx)("div",{children:n}),(0,a.jsx)(j,{children:t})]})})}},94359:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(59499),o=(n(67294),n(85893));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return(0,o.jsx)("ul",i({style:i({paddingLeft:"1rem"},e.style)},e))},u=n(41664),a=n.n(u),l=n(32125).ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),f=function(e){var t=e.children;return(0,o.jsx)(l,{children:t})},d=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/",children:"Home"})}),(0,o.jsxs)(f,{children:[(0,o.jsx)("h4",{children:"Utils"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/Prefetch",children:(0,o.jsx)("a",{children:"Prefetched State"})})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)("h4",{children:"Components"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/suspense",children:"Suspense"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/StateReducer",children:"State Reducer"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/PropCollection",children:"Props Collection"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/Factory",children:"Factory"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/ControlProps",children:"Control Props"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,o.jsxs)(f,{children:[(0,o.jsx)("h4",{children:"Hooks"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/UndoState",children:"Undo State"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,o.jsx)(f,{children:(0,o.jsx)(a(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},77913:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,c=(o=n(67294))&&o.__esModule?o:{default:o},i=n(12199),s=n(61587),u=n(27215);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=c.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,j=e.children,v=e.prefetch,g=e.passHref,x=e.replace,b=e.shallow,y=e.scroll,O=e.locale,m=e.onClick,w=e.onMouseEnter,S=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=j,d&&"string"===typeof n&&(n=c.default.createElement("a",null,n));var P,k=!1!==v,C=s.useRouter(),E=c.default.useMemo((function(){var e=i.resolveHref(C,h,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:p?i.resolveHref(C,p):o||n}}),[C,h,p]),_=E.href,R=E.as,Z=c.default.useRef(_),L=c.default.useRef(R);d&&(P=c.default.Children.only(n));var D=d?P&&"object"===typeof P&&P.ref:t,M=u.useIntersection({rootMargin:"200px"}),I=r(M,3),T=I[0],H=I[1],N=I[2],U=c.default.useCallback((function(e){L.current===R&&Z.current===_||(N(),L.current=R,Z.current=_),T(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[R,D,_,N,T]);c.default.useEffect((function(){var e=H&&k&&i.isLocalURL(_),t="undefined"!==typeof O?O:C&&C.locale,n=l[_+"%"+R+(t?"%"+t:"")];e&&!n&&f(C,_,R,{locale:t})}),[R,_,H,O,k,C]);var z={ref:U,onClick:function(e){d||"function"!==typeof m||m(e),d&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,s,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:s}))}(e,C,_,R,x,b,y,O)},onMouseEnter:function(e){d||"function"!==typeof w||w(e),d&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),i.isLocalURL(_)&&f(C,_,R,{priority:!0})}};if(!d||g||"a"===P.type&&!("href"in P.props)){var A="undefined"!==typeof O?O:C&&C.locale,B=C&&C.isLocaleDomain&&i.getDomainLocale(R,A,C&&C.locales,C&&C.domainLocales);z.href=B||i.addBasePath(i.addLocale(R,A,C&&C.defaultLocale))}return d?c.default.cloneElement(P,z):c.default.createElement("a",Object.assign({},S,z),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},27215:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,a=e.disabled||!i,l=o.useRef(),f=o.useState(!1),d=r(f,2),h=d[0],p=d[1],j=o.useState(t?t.current:null),v=r(j,2),g=v[0],x=v[1],b=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),a||h||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),u.push(n));if(t)return t;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:c,elements:o}),t}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){if(i.delete(e),c.unobserve(e),0===i.size){c.disconnect(),s.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:n}))}),[a,g,n,h]),y=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!i&&!h){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){t&&x(t.current)}),[t]),[b,h,y]};var o=n(67294),c=n(98065),i="undefined"!==typeof IntersectionObserver;var s=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},83851:function(e,t,n){"use strict";n.r(t);var r=n(59499),o=n(67294),c=n(43236),i=(n(4944),n(94484)),s=n(94359),u=n(85893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.reduceState,n=(0,o.useState)({on:!1}),r=n[0],c=n[1];return(0,u.jsx)("div",{children:(0,u.jsx)("button",{onClick:function(){return e={on:!r.on},void c((function(n){return t?t(n,e):l(l({},n),e)}));var e},children:r.on?"On":"Off"})})},d=function(){var e=(0,o.useState)(0),t=e[0],n=e[1];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{children:["Count: ",t," (max. 5)"]}),(0,u.jsx)(f,{reduceState:function(e,r){return 5===t?e:(n((function(e){return e+1})),l(l({},e),r))}})]})};t.default=function(){return(0,u.jsx)(i.Z,{navigation:(0,u.jsx)(s.Z,{}),content:(0,u.jsx)("div",{children:(0,u.jsx)("main",{children:(0,u.jsxs)("article",{children:[(0,u.jsx)("h1",{children:"State Reducer"}),(0,u.jsx)("div",{children:(0,u.jsx)(d,{})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(c.E,{children:"const Component = () => {\n  const [count, setCount] = useState(0);\n\n  const reduceState = (state, changes) => {\n    if (count === 5) {\n      return state;\n    }\n    setCount((c) => c + 1);\n    return { ...state, ...changes };\n  };\n\n  return (\n    <div>\n      <div>Count: {count} (max. 5)</div>\n      <Toggle reduceState={reduceState}></Toggle>\n    </div>\n  );\n};"}),(0,u.jsx)(c.E,{children:'const Toggle = ({ reduceState }) => {\n  const [state, setState] = useState({ on: false });\n\n  const setToState = (changes) => {\n    setState((oldState) => {\n      if (!reduceState) {\n        return { ...oldState, ...changes };\n      }\n\n      return reduceState(oldState, changes);\n    });\n  };\n\n  const handleClick = () => setToState({ on: !state.on });\n\n  return (\n    <div>\n      <button onClick={handleClick}>{state.on ? "On" : "Off"}</button>\n    </div>\n  );\n};'}),(0,u.jsx)(c.E,{children:'const useToggle = (\n  initial = false,\n  reducer = toggleReducer /* can be overwritten */\n) => {\n  const [on, dispatch] = useReducer(reducer, initial);\n\n  const toggle = () => dispatch({ type: "toggle" });\n  const reset = () => dispatch({ type: "reset" });\n\n  return { on, toggle, reset };\n};'})]})]})})})})}},43236:function(e,t,n){"use strict";n.d(t,{E:function(){return r.Z}});var r=n(29404)},4944:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r,o,c,i,s=n(71383),u=(n(67294),n(32125)),a=576,l=768,f=992,d=1200,h=n(85893),p=u.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.iv)(["@media (min-width:","px){",";}"],a,t)}(r||(r=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.iv)(["@media (min-width:","px){",";}"],l,t)}(o||(o=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.iv)(["@media (min-width:","px){",";}"],f,t)}(c||(c=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.iv)(["@media (min-width:","px){",";}"],d,t)}(i||(i=(0,s.Z)(["\n    width: 40vw;\n  "])))),j=function(e){var t=e.children;return(0,h.jsx)(p,{children:t})}},86588:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/StateReducer",function(){return n(83851)}])},41664:function(e,t,n){e.exports=n(77913)},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},71383:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=86588,e(e.s=t);var t}));var t=e.O();_N_E=t}]);