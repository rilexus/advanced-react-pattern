(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{3296:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});r(7294);var t=r(5),o=r(5893),i=function(e){var n=e.children,r=e.direction,t=void 0===r?"row":r;return(0,o.jsx)("div",{style:{display:"flex",flexDirection:t},children:n})},c=function(e){var n=e.navigation,r=e.content;return(0,o.jsx)(t.Z,{children:(0,o.jsxs)(i,{children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},children:n}),(0,o.jsx)("div",{children:r})]})})}},7712:function(e,n,r){"use strict";r.d(n,{Z:function(){return f}});var t=r(5830),o=r(1664),i=r.n(o),c=(r(7294),r(2125)),l=r(5893),u=c.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),s=function(e){var n=e.children;return(0,l.jsx)(u,{children:n})},f=function(){return(0,l.jsx)("nav",{children:(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/",children:"Home"})}),(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:"Utils"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/Prefetch",children:(0,l.jsx)("a",{children:"Prefetched State"})})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:"Components"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/suspense",children:"Suspense"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/StateReducer",children:"State Reducer"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/PropCollection",children:"Props Collection"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/Factory",children:"Factory"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/ControlProps",children:"Control Props"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:"Hooks"}),(0,l.jsxs)(t.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/UndoState",children:"Undo State"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,l.jsx)(s,{children:(0,l.jsx)(i(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},7913:function(e,n,r){"use strict";var t=r(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},c=r(2199),l=r(1587),u=r(7215);function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function a(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;f[n+"%"+r+(o?"%"+o:"")]=!0}}var d=i.default.forwardRef((function(e,n){var r,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,g=e.children,v=e.prefetch,j=e.passHref,x=e.replace,O=e.shallow,y=e.scroll,b=e.locale,m=e.onClick,C=e.onMouseEnter,w=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=g,d&&"string"===typeof r&&(r=i.default.createElement("a",null,r));var P,T=!1!==v,k=l.useRouter(),E=i.default.useMemo((function(){var e=c.resolveHref(k,h,!0),n=t(e,2),r=n[0],o=n[1];return{href:r,as:p?c.resolveHref(k,p):o||r}}),[k,h,p]),_=E.href,R=E.as,S=i.default.useRef(_),L=i.default.useRef(R);d&&(P=i.default.Children.only(r));var M=d?P&&"object"===typeof P&&P.ref:n,U=u.useIntersection({rootMargin:"200px"}),I=t(U,3),B=I[0],D=I[1],H=I[2],Z=i.default.useCallback((function(e){L.current===R&&S.current===_||(H(),L.current=R,S.current=_),B(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[R,M,_,H,B]);i.default.useEffect((function(){var e=D&&T&&c.isLocalURL(_),n="undefined"!==typeof b?b:k&&k.locale,r=f[_+"%"+R+(n?"%"+n:"")];e&&!r&&a(k,_,R,{locale:n})}),[R,_,D,b,T,k]);var N={ref:Z,onClick:function(e){d||"function"!==typeof m||m(e),d&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,l,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:i,locale:u,scroll:l}))}(e,k,_,R,x,O,y,b)},onMouseEnter:function(e){d||"function"!==typeof C||C(e),d&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),c.isLocalURL(_)&&a(k,_,R,{priority:!0})}};if(!d||j||"a"===P.type&&!("href"in P.props)){var F="undefined"!==typeof b?b:k&&k.locale,K=k&&k.isLocaleDomain&&c.getDomainLocale(R,F,k&&k.locales,k&&k.domainLocales);N.href=K||c.addBasePath(c.addLocale(R,F,k&&k.defaultLocale))}return d?i.default.cloneElement(P,N):i.default.createElement("a",Object.assign({},w,N),r)}));n.default=d,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},7215:function(e,n,r){"use strict";var t=r(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,s=e.disabled||!c,f=o.useRef(),a=o.useState(!1),d=t(a,2),h=d[0],p=d[1],g=o.useState(n?n.current:null),v=t(g,2),j=v[0],x=v[1],O=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),s||h||e&&e.tagName&&(f.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=l.get(t):(n=l.get(r),u.push(r));if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return l.set(r,n={id:r,observer:i,elements:o}),n}(r),o=t.id,i=t.observer,c=t.elements;return c.set(e,n),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),l.delete(o);var n=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&u.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:j,rootMargin:r}))}),[s,j,r,h]),y=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!c&&!h){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){n&&x(n.current)}),[n]),[O,h,y]};var o=r(7294),i=r(8065),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},2815:function(e,n,r){"use strict";r.r(n),r.d(n,{Toggle:function(){return f}});var t=r(7294),o=r(3236),i=(r(5),r(3296)),c=r(7712),l=r(5893),u=(0,t.createContext)({on:!1,toggle:function(){}});function s(){return(0,t.useContext)(u)}function f(e){var n=e.children,r=e.initValue,o=(0,t.useState)((function(){return r||!1})),i=o[0],c=o[1];return(0,l.jsx)(u.Provider,{value:{toggle:function(){return c((function(e){return!e}))},on:i},children:n})}f.On=function(e){var n=e.children;return s().on?(0,l.jsx)("div",{children:n}):null},f.Off=function(e){var n=e.children;return s().on?null:(0,l.jsx)("div",{children:n})},f.Button=function(e){var n=e.children,r=s().toggle;return(0,l.jsx)("button",{onClick:r,children:n})};var a=function(){return(0,l.jsxs)(f,{children:[(0,l.jsx)(f.On,{children:"On"}),(0,l.jsx)(f.Off,{children:"Off"}),(0,l.jsx)(f.Button,{children:"Toggle"})]})};n.default=function(){return(0,l.jsx)(i.Z,{navigation:(0,l.jsx)(c.Z,{}),content:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Compound Component"}),(0,l.jsx)(a,{}),(0,l.jsx)(o.E,{children:"const Compound = () => {\n  return (\n    <Toggle>\n      <Toggle.On>On</Toggle.On>\n      <Toggle.Off>Off</Toggle.Off>\n      <Toggle.Button>Toggle</Toggle.Button>\n    </Toggle>\n  );\n};"}),(0,l.jsx)(o.E,{children:"export function Toggle({ children, initValue }) {\n  const [on, setOn] = useState(() => initValue || false);\n\n  const toggle = () => setOn((prevOn) => !prevOn); // save the ref\n\n  return (\n    <ToggleContext.Provider value={{ toggle, on }}>\n      {children}\n    </ToggleContext.Provider>\n  );\n}"}),(0,l.jsx)(o.E,{children:"function On({ children }) {\n  const { on } = useToggleContext();\n  return on ? <div>{children}</div> : null;\n}\n\nfunction Off({ children }) {\n  const { on } = useToggleContext();\n  return on ? null : <div>{children}</div>;\n}\n\nfunction Button({ children }) {\n  const { toggle } = useToggleContext();\n  return <button onClick={toggle}>{children}</button>;\n}\n\nToggle.On = On;\nToggle.Off = Off;\nToggle.Button = Button;"})]})})}},3236:function(e,n,r){"use strict";r.d(n,{E:function(){return t.Z}});var t=r(2240)},5:function(e,n,r){"use strict";r(7294);var t=r(2125),o=r(5893),i=t.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);n.Z=function(e){var n=e.children;return(0,o.jsx)(i,{children:n})}},5830:function(e,n,r){"use strict";r.d(n,{Ul:function(){return l}});var t=r(9499),o=(r(7294),r(5893));function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var l=function(e){return(0,o.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))}},1463:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CompoundToggle",function(){return r(2815)}])},1664:function(e,n,r){e.exports=r(7913)}},function(e){e.O(0,[774,888,179],(function(){return n=1463,e(e.s=n);var n}));var n=e.O();_N_E=n}]);