(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{94484:function(e,t,r){"use strict";var n=r(17674),o=r(59499),i=r(4730),c=(r(67294),r(4944)),s=r(26965),a=r(32125),l=r(85893),u=["stroke","fill","height","width"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.stroke,r=void 0===t?"currentColor":t,n=e.fill,o=void 0===n?"currentColor":n,c=e.height,s=void 0===c?"1em":c,a=e.width,f=void 0===a?"1em":a,p=(0,i.Z)(e,u);return(0,l.jsx)("svg",d(d({stroke:r,fill:o,height:s,width:f,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},p),{},{children:(0,l.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},h=a.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),j=function(e){var t=e.children,r=(0,s.Z)("sidebar-open",!1),o=(0,n.Z)(r,2),i=o[0],c=o[1];return(0,l.jsxs)(h,{style:{transform:"translate(".concat(i?0:-350,"px)"),boxShadow:"".concat(i?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,l.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:i?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat(i?0:180,"deg)")},onClick:function(){c(!i)},children:(0,l.jsx)(p,{height:"1rem",width:"1rem"})}),t]})};t.Z=function(e){var t=e.navigation,r=e.content;return(0,l.jsx)("div",{children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("div",{children:r}),(0,l.jsx)(j,{children:t})]})})}},52528:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n=r(59499),o=(r(67294),r(85893));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return(0,o.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},a=r(32125),l=a.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),u=function(e){var t=e.children;return(0,o.jsx)(l,{children:t})},f=r(41664),d=r.n(f),p=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),h=function(e){var t=e.href,r=e.children;return(0,o.jsx)(d(),{href:t,children:(0,o.jsx)(p,{children:r})})},j=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/",children:"Home"})}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Utils"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/Prefetch",children:"Prefetched State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Components"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/suspense",children:"Suspense"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/CompoundToggle",children:"Compound Components"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/StateReducer",children:"State Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/PropCollection",children:"Props Collection"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/Factory",children:"Factory"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/ControlProps",children:"Control Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/Decorator",children:"Decorator"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Hooks"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/UndoState",children:"Undo State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(h,{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},77913:function(e,t,r){"use strict";var n=r(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=(o=r(67294))&&o.__esModule?o:{default:o},c=r(12199),s=r(61587),a=r(27215);function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=i.default.forwardRef((function(e,t){var r,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,h=e.as,j=e.children,v=e.prefetch,b=e.passHref,y=e.replace,g=e.shallow,m=e.scroll,x=e.locale,O=e.onClick,w=e.onMouseEnter,P=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=j,d&&"string"===typeof r&&(r=i.default.createElement("a",null,r));var k,S=!1!==v,C=s.useRouter(),_=i.default.useMemo((function(){var e=c.resolveHref(C,p,!0),t=n(e,2),r=t[0],o=t[1];return{href:r,as:h?c.resolveHref(C,h):o||r}}),[C,p,h]),E=_.href,Z=_.as,D=i.default.useRef(E),L=i.default.useRef(Z);d&&(k=i.default.Children.only(r));var R=d?k&&"object"===typeof k&&k.ref:t,I=a.useIntersection({rootMargin:"200px"}),H=n(I,3),M=H[0],N=H[1],z=H[2],T=i.default.useCallback((function(e){L.current===Z&&D.current===E||(z(),L.current=Z,D.current=E),M(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[Z,R,E,z,M]);i.default.useEffect((function(){var e=N&&S&&c.isLocalURL(E),t="undefined"!==typeof x?x:C&&C.locale,r=u[E+"%"+Z+(t?"%"+t:"")];e&&!r&&f(C,E,Z,{locale:t})}),[Z,E,N,x,S,C]);var A={ref:T,onClick:function(e){d||"function"!==typeof O||O(e),d&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:s}))}(e,C,E,Z,y,g,m,x)},onMouseEnter:function(e){d||"function"!==typeof w||w(e),d&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),c.isLocalURL(E)&&f(C,E,Z,{priority:!0})}};if(!d||b||"a"===k.type&&!("href"in k.props)){var F="undefined"!==typeof x?x:C&&C.locale,U=C&&C.isLocaleDomain&&c.getDomainLocale(Z,F,C&&C.locales,C&&C.domainLocales);A.href=U||c.addBasePath(c.addLocale(Z,F,C&&C.defaultLocale))}return d?i.default.cloneElement(k,A):i.default.createElement("a",Object.assign({},P,A),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},27215:function(e,t,r){"use strict";var n=r(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!c,u=o.useRef(),f=o.useState(!1),d=n(f,2),p=d[0],h=d[1],j=o.useState(t?t.current:null),v=n(j,2),b=v[0],y=v[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||p||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=a.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),a.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,c=n.elements;return c.set(e,t),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),s.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:b,rootMargin:r}))}),[l,b,r,p]),m=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!c&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&y(t.current)}),[t]),[g,p,m]};var o=r(67294),i=r(98065),c="undefined"!==typeof IntersectionObserver;var s=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},78265:function(e,t,r){"use strict";r.r(t);var n=r(52528),o=r(94484),i=r(68556),c=r(84663),s=r(85893);t.default=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{content:(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Z,{children:"Advanced React Pattern"}),(0,s.jsx)(c.P,{children:"This website provides an overview of all kinds of react patterns.."})]}),navigation:(0,s.jsx)(n.Z,{})})})}},4944:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var n,o,i,c,s=r(71383),a=(r(67294),r(32125)),l=576,u=768,f=992,d=1200,p=r(85893),h=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.iv)(["@media (min-width:","px){",";}"],l,t)}(n||(n=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.iv)(["@media (min-width:","px){",";}"],u,t)}(o||(o=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.iv)(["@media (min-width:","px){",";}"],f,t)}(i||(i=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.iv)(["@media (min-width:","px){",";}"],d,t)}(c||(c=(0,s.Z)(["\n    width: 40vw;\n  "])))),j=function(e){var t=e.children;return(0,p.jsx)(h,{children:t})}},68556:function(e,t,r){"use strict";var n=r(59499),o=(r(67294),r(32125)),i=r(85893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=(0,o.iv)(['font-size:48px;line-height:1.08349;font-weight:700;letter-spacing:-0.003em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),a=o.ZP.h1.withConfig({displayName:"H1__StyledH1",componentId:"sc-rl2x2k-0"})(["",";"],s);t.Z=function(e){return(0,i.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}},84663:function(e,t,r){"use strict";r.d(t,{P:function(){return u}});var n=r(59499),o=(r(67294),r(32125)),i=r(85893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=(0,o.iv)(['margin-bottom:1.4211em;font-size:1.125rem;color:#1a1a1a;line-height:1.4211;font-weight:400;letter-spacing:0.012em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),l=o.ZP.p.withConfig({displayName:"P__StyledP",componentId:"sc-f4vqmk-0"})(["",";"],a),u=function(e){return(0,i.jsx)(l,s(s({},e),{},{style:e.style}))}},75557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(78265)}])},41664:function(e,t,r){e.exports=r(77913)},4730:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},71383:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);