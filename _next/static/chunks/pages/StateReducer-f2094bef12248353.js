(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{94484:function(e,t,n){"use strict";var r=n(59499),o=n(4730),i=n(67294),c=n(4944),s=n(32125),a=n(85893),l=["stroke","fill","height","width"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.stroke,n=void 0===t?"currentColor":t,r=e.fill,i=void 0===r?"currentColor":r,c=e.height,s=void 0===c?"1em":c,u=e.width,d=void 0===u?"1em":u,h=(0,o.Z)(e,l);return(0,a.jsx)("svg",f(f({stroke:n,fill:i,height:s,width:d,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h),{},{children:(0,a.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},h=s.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),p=function(e){var t=e.children,n=(0,i.useState)("open"),r=n[0],o=n[1];return(0,a.jsxs)(h,{style:{transform:"translate(".concat("open"===r?0:-350,"px)"),boxShadow:"".concat("open"===r?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,a.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"open"===r?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat("open"===r?0:180,"deg)")},onClick:function(){o("open"===r?"close":"open")},children:(0,a.jsx)(d,{height:"1rem",width:"1rem"})}),t]})};t.Z=function(e){var t=e.navigation,n=e.content;return(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("div",{children:n}),(0,a.jsx)(p,{children:t})]})})}},52528:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(59499),o=(n(67294),n(85893));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return(0,o.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},a=n(32125),l=a.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),u=function(e){var t=e.children;return(0,o.jsx)(l,{children:t})},f=n(41664),d=n.n(f),h=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),p=function(e){var t=e.href,n=e.children;return(0,o.jsx)(d(),{href:t,children:(0,o.jsx)(h,{children:n})})},j=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/",children:"Home"})}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Utils"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Prefetch",children:"Prefetched State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Components"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/suspense",children:"Suspense"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/CompoundToggle",children:"Compound Components"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/StateReducer",children:"State Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/PropCollection",children:"Props Collection"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Factory",children:"Factory"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ControlProps",children:"Control Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Decorator",children:"Decorator"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Hooks"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/UndoState",children:"Undo State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},77913:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=n(67294))&&o.__esModule?o:{default:o},c=n(12199),s=n(61587),a=n(27215);function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=i.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,j=e.children,v=e.prefetch,g=e.passHref,x=e.replace,b=e.shallow,y=e.scroll,m=e.locale,O=e.onClick,w=e.onMouseEnter,S=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=j,d&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var P,k=!1!==v,C=s.useRouter(),E=i.default.useMemo((function(){var e=c.resolveHref(C,h,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:p?c.resolveHref(C,p):o||n}}),[C,h,p]),_=E.href,R=E.as,L=i.default.useRef(_),Z=i.default.useRef(R);d&&(P=i.default.Children.only(n));var D=d?P&&"object"===typeof P&&P.ref:t,M=a.useIntersection({rootMargin:"200px"}),I=r(M,3),T=I[0],N=I[1],H=I[2],U=i.default.useCallback((function(e){Z.current===R&&L.current===_||(H(),Z.current=R,L.current=_),T(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[R,D,_,H,T]);i.default.useEffect((function(){var e=N&&k&&c.isLocalURL(_),t="undefined"!==typeof m?m:C&&C.locale,n=u[_+"%"+R+(t?"%"+t:"")];e&&!n&&f(C,_,R,{locale:t})}),[R,_,N,m,k,C]);var z={ref:U,onClick:function(e){d||"function"!==typeof O||O(e),d&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:s}))}(e,C,_,R,x,b,y,m)},onMouseEnter:function(e){d||"function"!==typeof w||w(e),d&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),c.isLocalURL(_)&&f(C,_,R,{priority:!0})}};if(!d||g||"a"===P.type&&!("href"in P.props)){var A="undefined"!==typeof m?m:C&&C.locale,B=C&&C.isLocaleDomain&&c.getDomainLocale(R,A,C&&C.locales,C&&C.domainLocales);z.href=B||c.addBasePath(c.addLocale(R,A,C&&C.defaultLocale))}return d?i.default.cloneElement(P,z):i.default.createElement("a",Object.assign({},S,z),n)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},27215:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!c,u=o.useRef(),f=o.useState(!1),d=r(f,2),h=d[0],p=d[1],j=o.useState(t?t.current:null),v=r(j,2),g=v[0],x=v[1],b=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||h||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),a.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),s.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:n}))}),[l,g,n,h]),y=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!c&&!h){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){t&&x(t.current)}),[t]),[b,h,y]};var o=n(67294),i=n(98065),c="undefined"!==typeof IntersectionObserver;var s=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},83851:function(e,t,n){"use strict";n.r(t);var r=n(59499),o=n(67294),i=n(43236),c=(n(4944),n(94484)),s=n(52528),a=n(85893);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.reduceState,n=(0,o.useState)({on:!1}),r=n[0],i=n[1];return(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:function(){return e={on:!r.on},void i((function(n){return t?t(n,e):u(u({},n),e)}));var e},children:r.on?"On":"Off"})})},d=function(){var e=(0,o.useState)(0),t=e[0],n=e[1];return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:["Count: ",t," (max. 5)"]}),(0,a.jsx)(f,{reduceState:function(e,r){return 5===t?e:(n((function(e){return e+1})),u(u({},e),r))}})]})};t.default=function(){return(0,a.jsx)(c.Z,{navigation:(0,a.jsx)(s.Z,{}),content:(0,a.jsx)("div",{children:(0,a.jsx)("main",{children:(0,a.jsxs)("article",{children:[(0,a.jsx)("h1",{children:"State Reducer"}),(0,a.jsx)("div",{children:(0,a.jsx)(d,{})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.E,{children:"const Component = () => {\n  const [count, setCount] = useState(0);\n\n  const reduceState = (state, changes) => {\n    if (count === 5) {\n      return state;\n    }\n    setCount((c) => c + 1);\n    return { ...state, ...changes };\n  };\n\n  return (\n    <div>\n      <div>Count: {count} (max. 5)</div>\n      <Toggle reduceState={reduceState}></Toggle>\n    </div>\n  );\n};"}),(0,a.jsx)(i.E,{children:'const Toggle = ({ reduceState }) => {\n  const [state, setState] = useState({ on: false });\n\n  const setToState = (changes) => {\n    setState((oldState) => {\n      if (!reduceState) {\n        return { ...oldState, ...changes };\n      }\n\n      return reduceState(oldState, changes);\n    });\n  };\n\n  const handleClick = () => setToState({ on: !state.on });\n\n  return (\n    <div>\n      <button onClick={handleClick}>{state.on ? "On" : "Off"}</button>\n    </div>\n  );\n};'}),(0,a.jsx)(i.E,{children:'const useToggle = (\n  initial = false,\n  reducer = toggleReducer /* can be overwritten */\n) => {\n  const [on, dispatch] = useReducer(reducer, initial);\n\n  const toggle = () => dispatch({ type: "toggle" });\n  const reset = () => dispatch({ type: "reset" });\n\n  return { on, toggle, reset };\n};'})]})]})})})})}},43236:function(e,t,n){"use strict";n.d(t,{E:function(){return r.Z}});var r=n(13301)},4944:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r,o,i,c,s=n(71383),a=(n(67294),n(32125)),l=576,u=768,f=992,d=1200,h=n(85893),p=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],l,t)}(r||(r=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],u,t)}(o||(o=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],f,t)}(i||(i=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],d,t)}(c||(c=(0,s.Z)(["\n    width: 40vw;\n  "])))),j=function(e){var t=e.children;return(0,h.jsx)(p,{children:t})}},86588:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/StateReducer",function(){return n(83851)}])},41664:function(e,t,n){e.exports=n(77913)},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},71383:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=86588,e(e.s=t);var t}));var t=e.O();_N_E=t}]);