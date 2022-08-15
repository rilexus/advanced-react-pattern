(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{3296:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});t(7294);var n=t(5),o=t(5893),c=function(e){var r=e.children,t=e.direction,n=void 0===t?"row":t;return(0,o.jsx)("div",{style:{display:"flex",flexDirection:n},children:r})},i=function(e){var r=e.navigation,t=e.content;return(0,o.jsx)(n.Z,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},children:r}),(0,o.jsx)("div",{children:t})]})})}},7712:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5830),o=t(1664),c=t.n(o),i=(t(7294),t(2125)),s=t(5893),l=i.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),u=function(e){var r=e.children;return(0,s.jsx)(l,{children:r})},a=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)(n.Ul,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/",children:"Home"})}),(0,s.jsxs)(u,{children:[(0,s.jsx)("h4",{children:"Utils"}),(0,s.jsxs)(n.Ul,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/Prefetch",children:(0,s.jsx)("a",{children:"Prefetched State"})})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)("h4",{children:"Components"}),(0,s.jsxs)(n.Ul,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/suspense",children:"Suspense"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/StateReducer",children:"State Reducer"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/PropCollection",children:"Props Collection"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/Factory",children:"Factory"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/ControlProps",children:"Control Props"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)("h4",{children:"Hooks"}),(0,s.jsxs)(n.Ul,{children:[(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,s.jsx)(u,{children:(0,s.jsx)(c(),{href:"/ThunkReducer",children:"Thunk Reducer"})})]})]})]})})}},470:function(e,r,t){"use strict";var n=t(7294);r.Z=function(e,r){return(0,n.useMemo)((function(){return e}),r)}},7913:function(e,r,t){"use strict";var n=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,c=(o=t(7294))&&o.__esModule?o:{default:o},i=t(2199),s=t(1587),l=t(7215);function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a={};function f(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;a[r+"%"+t+(o?"%"+o:"")]=!0}}var d=c.default.forwardRef((function(e,r){var t,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,h=e.as,j=e.children,v=e.prefetch,y=e.passHref,b=e.replace,x=e.shallow,g=e.scroll,O=e.locale,m=e.onClick,w=e.onMouseEnter,P=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=j,d&&"string"===typeof t&&(t=c.default.createElement("a",null,t));var k,E=!1!==v,C=s.useRouter(),_=c.default.useMemo((function(){var e=i.resolveHref(C,p,!0),r=n(e,2),t=r[0],o=r[1];return{href:t,as:h?i.resolveHref(C,h):o||t}}),[C,p,h]),S=_.href,R=_.as,D=c.default.useRef(S),M=c.default.useRef(R);d&&(k=c.default.Children.only(t));var Z=d?k&&"object"===typeof k&&k.ref:r,L=l.useIntersection({rootMargin:"200px"}),I=n(L,3),U=I[0],H=I[1],N=I[2],T=c.default.useCallback((function(e){M.current===R&&D.current===S||(N(),M.current=R,D.current=S),U(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[R,Z,S,N,U]);c.default.useEffect((function(){var e=H&&E&&i.isLocalURL(S),r="undefined"!==typeof O?O:C&&C.locale,t=a[S+"%"+R+(r?"%"+r:"")];e&&!t&&f(C,S,R,{locale:r})}),[R,S,H,O,E,C]);var z={ref:T,onClick:function(e){d||"function"!==typeof m||m(e),d&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,s,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:c,locale:l,scroll:s}))}(e,C,S,R,b,x,g,O)},onMouseEnter:function(e){d||"function"!==typeof w||w(e),d&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),i.isLocalURL(S)&&f(C,S,R,{priority:!0})}};if(!d||y||"a"===k.type&&!("href"in k.props)){var K="undefined"!==typeof O?O:C&&C.locale,B=C&&C.isLocaleDomain&&i.getDomainLocale(R,K,C&&C.locales,C&&C.domainLocales);z.href=B||i.addBasePath(i.addLocale(R,K,C&&C.defaultLocale))}return d?c.default.cloneElement(k,z):c.default.createElement("a",Object.assign({},P,z),t)}));r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},7215:function(e,r,t){"use strict";var n=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,u=e.disabled||!i,a=o.useRef(),f=o.useState(!1),d=n(f,2),p=d[0],h=d[1],j=o.useState(r?r.current:null),v=n(j,2),y=v[0],b=v[1],x=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),u||p||e&&e.tagName&&(a.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=s.get(n):(r=s.get(t),l.push(t));if(r)return r;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(t,r={id:t,observer:c,elements:o}),r}(t),o=n.id,c=n.observer,i=n.elements;return i.set(e,r),c.observe(e),function(){if(i.delete(e),c.unobserve(e),0===i.size){c.disconnect(),s.delete(o);var r=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&l.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:y,rootMargin:t}))}),[u,y,t,p]),g=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!i&&!p){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){r&&b(r.current)}),[r]),[x,p,g]};var o=t(7294),c=t(8065),i="undefined"!==typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},8265:function(e,r,t){"use strict";t.r(r);var n=t(7712),o=t(3296),c=t(8556),i=t(4663),s=t(5893);r.default=function(){return(0,s.jsx)(o.Z,{content:(0,s.jsxs)("div",{children:[(0,s.jsx)(c.Z,{children:"Advanced React Pattern"}),(0,s.jsx)(i.P,{children:"This website provides an overview of all kinds of react patterns."})]}),navigation:(0,s.jsx)(n.Z,{})})}},5:function(e,r,t){"use strict";t(7294);var n=t(2125),o=t(5893),c=n.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);r.Z=function(e){var r=e.children;return(0,o.jsx)(c,{children:r})}},8556:function(e,r,t){"use strict";var n=t(9499),o=(t(7294),t(470)),c=t(5893);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=(0,o.Z)(s({fontSize:"2rem"},e.style),[e.style]);return(0,c.jsx)("h1",s(s({},e),{},{style:r}))}},4663:function(e,r,t){"use strict";t.d(r,{P:function(){return l}});var n=t(9499),o=(t(7294),t(470)),c=t(5893);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var l=function(e){var r=(0,o.Z)(s(s({},e.style),{},{lineHeight:"1.4",fontSize:"1.125rem",color:"#1a1a1a"}),[]);return(0,c.jsx)("p",s(s({},e),{},{style:r}))}},5830:function(e,r,t){"use strict";t.d(r,{Ul:function(){return s}});var n=t(9499),o=(t(7294),t(5893));function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=function(e){return(0,o.jsx)("ul",i({style:i({paddingLeft:"1rem"},e.style)},e))}},5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8265)}])},1664:function(e,r,t){e.exports=t(7913)}},function(e){e.O(0,[774,888,179],(function(){return r=5557,e(e.s=r);var r}));var r=e.O();_N_E=r}]);