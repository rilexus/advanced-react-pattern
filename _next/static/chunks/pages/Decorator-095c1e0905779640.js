(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{63296:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});r(67294);var t=r(90005),o=r(85893),c=function(e){var n=e.children,r=e.direction,t=void 0===r?"row":r;return(0,o.jsx)("div",{style:{display:"flex",flexDirection:t},children:n})},i=function(e){var n=e.navigation,r=e.content;return(0,o.jsx)(t.Z,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},children:n}),(0,o.jsx)("div",{children:r})]})})}},7712:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t=r(35830),o=r(41664),c=r.n(o),i=(r(67294),r(32125)),l=r(85893),s=i.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),a=function(e){var n=e.children;return(0,l.jsx)(s,{children:n})},u=function(){return(0,l.jsx)("nav",{children:(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/",children:"Home"})}),(0,l.jsxs)(a,{children:[(0,l.jsx)("h4",{children:"Utils"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/Prefetch",children:(0,l.jsx)("a",{children:"Prefetched State"})})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,l.jsxs)(a,{children:[(0,l.jsx)("h4",{children:"Components"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/suspense",children:"Suspense"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/StateReducer",children:"State Reducer"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/PropCollection",children:"Props Collection"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/Factory",children:"Factory"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/ControlProps",children:"Control Props"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,l.jsxs)(a,{children:[(0,l.jsx)("h4",{children:"Hooks"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/UndoState",children:"Undo State"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,l.jsx)(a,{children:(0,l.jsx)(c(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},77913:function(e,n,r){"use strict";var t=r(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,c=(o=r(67294))&&o.__esModule?o:{default:o},i=r(12199),l=r(61587),s=r(27215);function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u={};function d(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(o?"%"+o:"")]=!0}}var f=c.default.forwardRef((function(e,n){var r,o=e.legacyBehavior,f=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,v=e.children,j=e.prefetch,y=e.passHref,g=e.replace,x=e.shallow,b=e.scroll,m=e.locale,O=e.onClick,w=e.onMouseEnter,C=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,f&&"string"===typeof r&&(r=c.default.createElement("a",null,r));var E,P=!1!==j,k=l.useRouter(),R=c.default.useMemo((function(){var e=i.resolveHref(k,h,!0),n=t(e,2),r=n[0],o=n[1];return{href:r,as:p?i.resolveHref(k,p):o||r}}),[k,h,p]),_=R.href,D=R.as,L=c.default.useRef(_),S=c.default.useRef(D);f&&(E=c.default.Children.only(r));var M=f?E&&"object"===typeof E&&E.ref:n,U=s.useIntersection({rootMargin:"200px"}),I=t(U,3),Z=I[0],H=I[1],N=I[2],T=c.default.useCallback((function(e){S.current===D&&L.current===_||(N(),S.current=D,L.current=_),Z(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[D,M,_,N,Z]);c.default.useEffect((function(){var e=H&&P&&i.isLocalURL(_),n="undefined"!==typeof m?m:k&&k.locale,r=u[_+"%"+D+(n?"%"+n:"")];e&&!r&&d(k,_,D,{locale:n})}),[D,_,H,m,P,k]);var K={ref:T,onClick:function(e){f||"function"!==typeof O||O(e),f&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,c,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:c,locale:s,scroll:l}))}(e,k,_,D,g,x,b,m)},onMouseEnter:function(e){f||"function"!==typeof w||w(e),f&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),i.isLocalURL(_)&&d(k,_,D,{priority:!0})}};if(!f||y||"a"===E.type&&!("href"in E.props)){var A="undefined"!==typeof m?m:k&&k.locale,B=k&&k.isLocaleDomain&&i.getDomainLocale(D,A,k&&k.locales,k&&k.domainLocales);K.href=B||i.addBasePath(i.addLocale(D,A,k&&k.defaultLocale))}return f?c.default.cloneElement(E,K):c.default.createElement("a",Object.assign({},C,K),r)}));n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},27215:function(e,n,r){"use strict";var t=r(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,a=e.disabled||!i,u=o.useRef(),d=o.useState(!1),f=t(d,2),h=f[0],p=f[1],v=o.useState(n?n.current:null),j=t(v,2),y=j[0],g=j[1],x=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),a||h||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=l.get(t):(n=l.get(r),s.push(r));if(n)return n;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(r,n={id:r,observer:c,elements:o}),n}(r),o=t.id,c=t.observer,i=t.elements;return i.set(e,n),c.observe(e),function(){if(i.delete(e),c.unobserve(e),0===i.size){c.disconnect(),l.delete(o);var n=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&s.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[a,y,r,h]),b=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!i&&!h){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){n&&g(n.current)}),[n]),[x,h,b]};var o=r(67294),c=r(98065),i="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},7913:function(e,n,r){"use strict";r.r(n);var t=r(59499),o=r(67294),c=r(43236),i=(r(90005),r(63296)),l=r(7712),s=r(85893);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.children;return o.Children.map(n,(function(e){var n=u(u({},e.props.style),{},{backgroundColor:"#aadef6"});return o.cloneElement(e,{style:n})}))},f=function(){return(0,s.jsx)("div",{children:(0,s.jsxs)(d,{children:[(0,s.jsx)("div",{onClick:function(){console.log("Click on div")},children:"Any other element"}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{children:"Any other element"}),(0,s.jsx)("br",{})]})})};n.default=function(){return(0,s.jsx)(i.Z,{navigation:(0,s.jsx)(l.Z,{}),content:(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Decorator"}),(0,s.jsx)(f,{}),(0,s.jsx)(c.E,{children:"const Component = () => {\n  return (\n    <div>\n      <BackgroundDecorator>\n        <div>Any other element</div>\n        <br />\n        <div>Any other element</div>\n        <br />\n      </BackgroundDecorator>\n    </div>\n  );\n};"}),(0,s.jsx)(c.E,{children:'const BackgroundDecorator = ({ children }) => {\n  return React.Children.map(children, (child) => {\n    const style = {\n      ...child.props.style,\n      backgroundColor: "#aadef6",\n    };\n    return React.cloneElement(child, { style });\n  });\n};'}),(0,s.jsx)(c.E,{children:'const Component = () => {\n  return (\n    <div>\n      <EventLoggerDecorator>\n        <div\n          onClick={() => {\n            // On every click the console output will be:\n            // * "[EventLogger]: onClick"\n            // * "Click on div"\n            console.log("Click on div");\n          }}\n        >\n          Any other element\n        </div>\n        <br />\n        <div>Any other element</div>\n        <br />\n      </EventLoggerDecorator>\n    </div>\n  );\n};'}),(0,s.jsx)(c.E,{children:'function EventLoggerDecorator({ children }) {\n  return React.Children.map(children, (child) => {\n    const childrenOwnProps = child.props;\n\n    const newProps = {}; // NOTE: you can use the "reduce" function here.\n    Object.entries(childrenOwnProps).forEach(([propKey, propValue]) => {\n      // Intercept all event handlers.\n      if (propKey.startsWith("on")) {\n        newProps[propKey] = (...args) => {\n          // Log to the console.\n          console.log(`[EventLogger]: ${propKey}`);\n          // Call child event handler.\n          propValue(...args);\n        };\n      }\n    });\n\n    return React.cloneElement(child, newProps);\n  });\n}'})]})})}},43236:function(e,n,r){"use strict";r.d(n,{E:function(){return t.Z}});var t=r(92240)},90005:function(e,n,r){"use strict";r(67294);var t=r(32125),o=r(85893),c=t.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);n.Z=function(e){var n=e.children;return(0,o.jsx)(c,{children:n})}},35830:function(e,n,r){"use strict";r.d(n,{Ul:function(){return l}});var t=r(59499),o=(r(67294),r(85893));function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var l=function(e){return(0,o.jsx)("ul",i({style:i({paddingLeft:"1rem"},e.style)},e))}},76801:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Decorator",function(){return r(7913)}])},41664:function(e,n,r){e.exports=r(77913)}},function(e){e.O(0,[774,888,179],(function(){return n=76801,e(e.s=n);var n}));var n=e.O();_N_E=n}]);