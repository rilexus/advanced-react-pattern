(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785,784],{77913:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(67294))&&o.__esModule?o:{default:o},c=n(12199),f=n(61587),i=n(27215);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={};function s(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var p=u.default.forwardRef((function(e,t){var n,o=e.legacyBehavior,p=void 0===o?!0!==Boolean(!1):o,d=e.href,v=e.as,y=e.children,b=e.prefetch,h=e.passHref,g=e.replace,O=e.shallow,m=e.scroll,j=e.locale,w=e.onClick,E=e.onMouseEnter,_=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=y,p&&"string"===typeof n&&(n=u.default.createElement("a",null,n));var k,P=!1!==b,C=f.useRouter(),M=u.default.useMemo((function(){var e=c.resolveHref(C,d,!0),t=r(e,2),n=t[0],o=t[1];return{href:n,as:v?c.resolveHref(C,v):o||n}}),[C,d,v]),L=M.href,R=M.as,x=u.default.useRef(L),I=u.default.useRef(R);p&&(k=u.default.Children.only(n));var Z=p?k&&"object"===typeof k&&k.ref:t,S=i.useIntersection({rootMargin:"200px"}),T=r(S,3),U=T[0],D=T[1],H=T[2],K=u.default.useCallback((function(e){I.current===R&&x.current===L||(H(),I.current=R,x.current=L),U(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[R,Z,L,H,U]);u.default.useEffect((function(){var e=D&&P&&c.isLocalURL(L),t="undefined"!==typeof j?j:C&&C.locale,n=l[L+"%"+R+(t?"%"+t:"")];e&&!n&&s(C,L,R,{locale:t})}),[R,L,D,j,P,C]);var N={ref:K,onClick:function(e){p||"function"!==typeof w||w(e),p&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,f,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:f}))}(e,C,L,R,g,O,m,j)},onMouseEnter:function(e){p||"function"!==typeof E||E(e),p&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),c.isLocalURL(L)&&s(C,L,R,{priority:!0})}};if(!p||h||"a"===k.type&&!("href"in k.props)){var z="undefined"!==typeof j?j:C&&C.locale,B=C&&C.isLocaleDomain&&c.getDomainLocale(R,z,C&&C.locales,C&&C.domainLocales);N.href=B||c.addBasePath(c.addLocale(R,z,C&&C.defaultLocale))}return p?u.default.cloneElement(k,N):u.default.createElement("a",Object.assign({},_,N),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},27215:function(e,t,n){"use strict";var r=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,a=e.disabled||!c,l=o.useRef(),s=o.useState(!1),p=r(s,2),d=p[0],v=p[1],y=o.useState(t?t.current:null),b=r(y,2),h=b[0],g=b[1],O=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),a||d||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=f.get(r):(t=f.get(n),i.push(n));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return f.set(n,t={id:n,observer:u,elements:o}),t}(n),o=r.id,u=r.observer,c=r.elements;return c.set(e,t),u.observe(e),function(){if(c.delete(e),u.unobserve(e),0===c.size){u.disconnect(),f.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:h,rootMargin:n}))}),[a,h,n,d]),m=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!c&&!d){var e=u.requestIdleCallback((function(){return v(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&g(t.current)}),[t]),[O,d,m]};var o=n(67294),u=n(98065),c="undefined"!==typeof IntersectionObserver;var f=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},41664:function(e,t,n){e.exports=n(77913)},10748:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},50029:function(e,t,n){"use strict";function r(e,t,n,r,o,u,c){try{var f=e[u](c),i=f.value}catch(a){return void n(a)}f.done?t(i):Promise.resolve(i).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,u){var c=e.apply(t,n);function f(e){r(c,o,u,f,i,"next",e)}function i(e){r(c,o,u,f,i,"throw",e)}f(void 0)}))}}n.d(t,{Z:function(){return o}})},92777:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},82262:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},37247:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},45959:function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,{Z:function(){return o}})},4730:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},63553:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(14027),o=n(10748);function u(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}},71383:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return r}})}}]);