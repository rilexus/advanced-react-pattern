(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{94484:function(e,n,r){"use strict";var t=r(59499),o=r(4730),i=r(67294),c=r(4944),l=r(32125),s=r(85893),a=["stroke","fill","height","width"];function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var f=function(e){var n=e.stroke,r=void 0===n?"currentColor":n,t=e.fill,i=void 0===t?"currentColor":t,c=e.height,l=void 0===c?"1em":c,u=e.width,f=void 0===u?"1em":u,h=(0,o.Z)(e,a);return(0,s.jsx)("svg",d(d({stroke:r,fill:i,height:l,width:f,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h),{},{children:(0,s.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},h=l.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),p=function(e){var n=e.children,r=(0,i.useState)("open"),t=r[0],o=r[1];return(0,s.jsxs)(h,{style:{transform:"translate(".concat("open"===t?0:-350,"px)"),boxShadow:"".concat("open"===t?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,s.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"open"===t?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat("open"===t?0:180,"deg)")},onClick:function(){o("open"===t?"close":"open")},children:(0,s.jsx)(f,{height:"1rem",width:"1rem"})}),n]})};n.Z=function(e){var n=e.navigation,r=e.content;return(0,s.jsx)("div",{children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)("div",{children:r}),(0,s.jsx)(p,{children:n})]})})}},52528:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(59499),o=(r(67294),r(85893));function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var l=function(e){return(0,o.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},s=r(32125),a=s.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),u=function(e){var n=e.children;return(0,o.jsx)(a,{children:n})},d=r(41664),f=r.n(d),h=s.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),p=function(e){var n=e.href,r=e.children;return(0,o.jsx)(f(),{href:n,children:(0,o.jsx)(h,{children:r})})},v=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/",children:"Home"})}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Utils"}),(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Prefetch",children:"Prefetched State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Components"}),(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/suspense",children:"Suspense"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/CompoundToggle",children:"Compound Components"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/StateReducer",children:"State Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/PropCollection",children:"Props Collection"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Factory",children:"Factory"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ControlProps",children:"Control Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Decorator",children:"Decorator"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Hooks"}),(0,o.jsxs)(l,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/UndoState",children:"Undo State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/FetchHook",children:"Fetch Hook"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Patterns"}),(0,o.jsx)(l,{children:(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/mvc",children:"MVC"})})})]})]})})}},77913:function(e,n,r){"use strict";var t=r(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=(o=r(67294))&&o.__esModule?o:{default:o},c=r(12199),l=r(61587),s=r(27215);function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u={};function d(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(o?"%"+o:"")]=!0}}var f=i.default.forwardRef((function(e,n){var r,o=e.legacyBehavior,f=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,v=e.children,j=e.prefetch,g=e.passHref,b=e.replace,y=e.shallow,x=e.scroll,m=e.locale,O=e.onClick,w=e.onMouseEnter,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,f&&"string"===typeof r&&(r=i.default.createElement("a",null,r));var k,C=!1!==j,E=l.useRouter(),S=i.default.useMemo((function(){var e=c.resolveHref(E,h,!0),n=t(e,2),r=n[0],o=n[1];return{href:r,as:p?c.resolveHref(E,p):o||r}}),[E,h,p]),L=S.href,_=S.as,D=i.default.useRef(L),R=i.default.useRef(_);f&&(k=i.default.Children.only(r));var Z=f?k&&"object"===typeof k&&k.ref:n,M=s.useIntersection({rootMargin:"200px"}),I=t(M,3),N=I[0],A=I[1],H=I[2],T=i.default.useCallback((function(e){R.current===_&&D.current===L||(H(),R.current=_,D.current=L),N(e),Z&&("function"===typeof Z?Z(e):"object"===typeof Z&&(Z.current=e))}),[_,Z,L,H,N]);i.default.useEffect((function(){var e=A&&C&&c.isLocalURL(L),n="undefined"!==typeof m?m:E&&E.locale,r=u[L+"%"+_+(n?"%"+n:"")];e&&!r&&d(E,L,_,{locale:n})}),[_,L,A,m,C,E]);var K={ref:T,onClick:function(e){f||"function"!==typeof O||O(e),f&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:i,locale:s,scroll:l}))}(e,E,L,_,b,y,x,m)},onMouseEnter:function(e){f||"function"!==typeof w||w(e),f&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),c.isLocalURL(L)&&d(E,L,_,{priority:!0})}};if(!f||g||"a"===k.type&&!("href"in k.props)){var U="undefined"!==typeof m?m:E&&E.locale,z=E&&E.isLocaleDomain&&c.getDomainLocale(_,U,E&&E.locales,E&&E.domainLocales);K.href=z||c.addBasePath(c.addLocale(_,U,E&&E.defaultLocale))}return f?i.default.cloneElement(k,K):i.default.createElement("a",Object.assign({},P,K),r)}));n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},27215:function(e,n,r){"use strict";var t=r(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,a=e.disabled||!c,u=o.useRef(),d=o.useState(!1),f=t(d,2),h=f[0],p=f[1],v=o.useState(n?n.current:null),j=t(v,2),g=j[0],b=j[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),a||h||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=l.get(t):(n=l.get(r),s.push(r));if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(r,n={id:r,observer:i,elements:o}),n}(r),o=t.id,i=t.observer,c=t.elements;return c.set(e,n),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),l.delete(o);var n=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&s.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:r}))}),[a,g,r,h]),x=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!c&&!h){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){n&&b(n.current)}),[n]),[y,h,x]};var o=r(67294),i=r(98065),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},7913:function(e,n,r){"use strict";r.r(n);var t=r(59499),o=r(67294),i=r(43236),c=(r(4944),r(94484)),l=r(52528),s=r(85893);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.children;return o.Children.map(n,(function(e){var n=u(u({},e.props.style),{},{backgroundColor:"#aadef6"});return o.cloneElement(e,{style:n})}))},f=function(){return(0,s.jsx)("div",{children:(0,s.jsxs)(d,{children:[(0,s.jsx)("div",{onClick:function(){console.log("Click on div")},children:"Any other element"}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{children:"Any other element"}),(0,s.jsx)("br",{})]})})};n.default=function(){return(0,s.jsx)(c.Z,{navigation:(0,s.jsx)(l.Z,{}),content:(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Decorator"}),(0,s.jsx)(f,{}),(0,s.jsx)(i.E,{children:"const Component = () => {\n  return (\n    <div>\n      <BackgroundDecorator>\n        <div>Any other element</div>\n        <br />\n        <div>Any other element</div>\n        <br />\n      </BackgroundDecorator>\n    </div>\n  );\n};"}),(0,s.jsx)(i.E,{children:'const BackgroundDecorator = ({ children }) => {\n  return React.Children.map(children, (child) => {\n    const style = {\n      ...child.props.style,\n      backgroundColor: "#aadef6",\n    };\n    return React.cloneElement(child, { style });\n  });\n};'}),(0,s.jsx)(i.E,{children:'const Component = () => {\n  return (\n    <div>\n      <EventLoggerDecorator>\n        <div\n          onClick={() => {\n            // On every click the console output will be:\n            // * "[EventLogger]: onClick"\n            // * "Click on div"\n            console.log("Click on div");\n          }}\n        >\n          Any other element\n        </div>\n        <br />\n        <div>Any other element</div>\n        <br />\n      </EventLoggerDecorator>\n    </div>\n  );\n};'}),(0,s.jsx)(i.E,{children:'function EventLoggerDecorator({ children }) {\n  return React.Children.map(children, (child) => {\n    const childrenOwnProps = child.props;\n\n    const newProps = {}; // NOTE: you can use the "reduce" function here.\n    Object.entries(childrenOwnProps).forEach(([propKey, propValue]) => {\n      // Intercept all event handlers.\n      if (propKey.startsWith("on")) {\n        newProps[propKey] = (...args) => {\n          // Log to the console.\n          console.log(`[EventLogger]: ${propKey}`);\n          // Call child event handler.\n          propValue(...args);\n        };\n      }\n    });\n\n    return React.cloneElement(child, newProps);\n  });\n}'})]})})}},43236:function(e,n,r){"use strict";r.d(n,{E:function(){return t.Z}});var t=r(13301)},4944:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t,o,i,c,l=r(71383),s=(r(67294),r(32125)),a=576,u=768,d=992,f=1200,h=r(85893),p=s.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,s.iv)(["@media (min-width:","px){",";}"],a,n)}(t||(t=(0,l.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,s.iv)(["@media (min-width:","px){",";}"],u,n)}(o||(o=(0,l.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,s.iv)(["@media (min-width:","px){",";}"],d,n)}(i||(i=(0,l.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,s.iv)(["@media (min-width:","px){",";}"],f,n)}(c||(c=(0,l.Z)(["\n    width: 40vw;\n  "])))),v=function(e){var n=e.children;return(0,h.jsx)(p,{children:n})}},76801:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Decorator",function(){return r(7913)}])},41664:function(e,n,r){e.exports=r(77913)},4730:function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(n,{Z:function(){return t}})},71383:function(e,n,r){"use strict";function t(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}r.d(n,{Z:function(){return t}})}},function(e){e.O(0,[774,888,179],(function(){return n=76801,e(e.s=n);var n}));var n=e.O();_N_E=n}]);