(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{3296:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});n(7294);var t=n(5),o=n(5893),c=function(e){var r=e.children,n=e.direction,t=void 0===n?"row":n;return(0,o.jsx)("div",{style:{display:"flex",flexDirection:t},children:r})},i=function(e){var r=e.navigation,n=e.content;return(0,o.jsx)(t.Z,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},children:r}),(0,o.jsx)("div",{children:n})]})})}},7712:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(5830),o=n(1664),c=n.n(o),i=(n(7294),n(2125)),l=n(5893),s=i.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),u=function(e){var r=e.children;return(0,l.jsx)(s,{children:r})},a=function(){return(0,l.jsx)("nav",{children:(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/",children:"Home"})}),(0,l.jsxs)(u,{children:[(0,l.jsx)("h4",{children:"Utils"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/Prefetch",children:(0,l.jsx)("a",{children:"Prefetched State"})})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,l.jsxs)(u,{children:[(0,l.jsx)("h4",{children:"Components"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/suspense",children:"Suspense"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/StateReducer",children:"State Reducer"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/PropCollection",children:"Props Collection"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/Factory",children:"Factory"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/ControlProps",children:"Control Props"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,l.jsxs)(u,{children:[(0,l.jsx)("h4",{children:"Hooks"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,l.jsx)(u,{children:(0,l.jsx)(c(),{href:"/ReducerHook",children:"Reducer Hook"})})]})]})]})})}},470:function(e,r,n){"use strict";var t=n(7294);r.Z=function(e,r){return(0,t.useMemo)((function(){return e}),r)}},7913:function(e,r,n){"use strict";var t=n(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},i=n(2199),l=n(1587),s=n(7215);function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={};function f(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;a[r+"%"+n+(o?"%"+o:"")]=!0}}var d=c.default.forwardRef((function(e,r){var n,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,h=e.as,j=e.children,v=e.prefetch,y=e.passHref,x=e.replace,b=e.shallow,g=e.scroll,O=e.locale,m=e.onClick,w=e.onMouseEnter,P=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=j,d&&"string"===typeof n&&(n=c.default.createElement("a",null,n));var C,k=!1!==v,E=l.useRouter(),_=c.default.useMemo((function(){var e=i.resolveHref(E,p,!0),r=t(e,2),n=r[0],o=r[1];return{href:n,as:h?i.resolveHref(E,h):o||n}}),[E,p,h]),R=_.href,S=_.as,M=c.default.useRef(R),L=c.default.useRef(S);d&&(C=c.default.Children.only(n));var D=d?C&&"object"===typeof C&&C.ref:r,Z=s.useIntersection({rootMargin:"200px"}),I=t(Z,3),U=I[0],N=I[1],H=I[2],T=c.default.useCallback((function(e){L.current===S&&M.current===R||(H(),L.current=S,M.current=R),U(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[S,D,R,H,U]);c.default.useEffect((function(){var e=N&&k&&i.isLocalURL(R),r="undefined"!==typeof O?O:E&&E.locale,n=a[R+"%"+S+(r?"%"+r:"")];e&&!n&&f(E,R,S,{locale:r})}),[S,R,N,O,k,E]);var K={ref:T,onClick:function(e){d||"function"!==typeof m||m(e),d&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,c,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),r[o?"replace":"push"](n,t,{shallow:c,locale:s,scroll:l}))}(e,E,R,S,x,b,g,O)},onMouseEnter:function(e){d||"function"!==typeof w||w(e),d&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),i.isLocalURL(R)&&f(E,R,S,{priority:!0})}};if(!d||y||"a"===C.type&&!("href"in C.props)){var z="undefined"!==typeof O?O:E&&E.locale,B=E&&E.isLocaleDomain&&i.getDomainLocale(S,z,E&&E.locales,E&&E.domainLocales);K.href=B||i.addBasePath(i.addLocale(S,z,E&&E.defaultLocale))}return d?c.default.cloneElement(C,K):c.default.createElement("a",Object.assign({},P,K),n)}));r.default=d,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},7215:function(e,r,n){"use strict";var t=n(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,u=e.disabled||!i,a=o.useRef(),f=o.useState(!1),d=t(f,2),p=d[0],h=d[1],j=o.useState(r?r.current:null),v=t(j,2),y=v[0],x=v[1],b=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),u||p||e&&e.tagName&&(a.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=l.get(t):(r=l.get(n),s.push(n));if(r)return r;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return l.set(n,r={id:n,observer:c,elements:o}),r}(n),o=t.id,c=t.observer,i=t.elements;return i.set(e,r),c.observe(e),function(){if(i.delete(e),c.unobserve(e),0===i.size){c.disconnect(),l.delete(o);var r=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&s.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:y,rootMargin:n}))}),[u,y,n,p]),g=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!i&&!p){var e=c.requestIdleCallback((function(){return h(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){r&&x(r.current)}),[r]),[b,p,g]};var o=n(7294),c=n(8065),i="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},8265:function(e,r,n){"use strict";n.r(r);var t=n(7712),o=n(3296),c=n(8556),i=n(5893);r.default=function(){return(0,i.jsx)(o.Z,{content:(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{children:"Advanced React Pattern"})}),navigation:(0,i.jsx)(t.Z,{})})}},5:function(e,r,n){"use strict";n(7294);var t=n(2125),o=n(5893),c=t.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);r.Z=function(e){var r=e.children;return(0,o.jsx)(c,{children:r})}},8556:function(e,r,n){"use strict";var t=n(9499),o=(n(7294),n(470)),c=n(5893);function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.Z=function(e){var r=(0,o.Z)(l({fontSize:"2rem"},e.style),[e.style]);return(0,c.jsx)("h1",l(l({},e),{},{style:r}))}},5830:function(e,r,n){"use strict";n.d(r,{Ul:function(){return l}});var t=n(9499),o=(n(7294),n(5893));function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var l=function(e){return(0,o.jsx)("ul",i({style:i({paddingLeft:"1rem"},e.style)},e))}},5557:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8265)}])},1664:function(e,r,n){e.exports=n(7913)}},function(e){e.O(0,[9774,2888,179],(function(){return r=5557,e(e.s=r);var r}));var r=e.O();_N_E=r}]);