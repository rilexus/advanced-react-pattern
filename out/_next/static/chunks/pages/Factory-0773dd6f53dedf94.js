(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{94484:function(e,n,t){"use strict";var r=t(59499),o=t(4730),i=t(67294),c=t(4944),s=t(32125),a=t(85893),u=["stroke","fill","height","width"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.stroke,t=void 0===n?"currentColor":n,r=e.fill,i=void 0===r?"currentColor":r,c=e.height,s=void 0===c?"1em":c,l=e.width,d=void 0===l?"1em":l,p=(0,o.Z)(e,u);return(0,a.jsx)("svg",f(f({stroke:t,fill:i,height:s,width:d,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},p),{},{children:(0,a.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},p=s.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),h=function(e){var n=e.children,t=(0,i.useState)("open"),r=t[0],o=t[1];return(0,a.jsxs)(p,{style:{transform:"translate(".concat("open"===r?0:-350,"px)"),boxShadow:"".concat("open"===r?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,a.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"open"===r?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat("open"===r?0:180,"deg)")},onClick:function(){o("open"===r?"close":"open")},children:(0,a.jsx)(d,{height:"1rem",width:"1rem"})}),n]})};n.Z=function(e){var n=e.navigation,t=e.content;return(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("div",{children:t}),(0,a.jsx)(h,{children:n})]})})}},52528:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(59499),o=(t(67294),t(85893));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return(0,o.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},a=t(32125),u=a.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),l=function(e){var n=e.children;return(0,o.jsx)(u,{children:n})},f=t(41664),d=t.n(f),p=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),h=function(e){var n=e.href,t=e.children;return(0,o.jsx)(d(),{href:n,children:(0,o.jsx)(p,{children:t})})},x=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/",children:"Home"})}),(0,o.jsxs)(l,{children:[(0,o.jsx)("h4",{children:"Utils"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/Prefetch",children:"Prefetched State"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,o.jsxs)(l,{children:[(0,o.jsx)("h4",{children:"Components"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/suspense",children:"Suspense"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/CompoundToggle",children:"Compound Components"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/StateReducer",children:"State Reducer"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/PropCollection",children:"Props Collection"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/Factory",children:"Factory"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/ControlProps",children:"Control Props"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/Decorator",children:"Decorator"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/Roles",children:"Roles"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/Layout",children:"Layout"})})]})]}),(0,o.jsxs)(l,{children:[(0,o.jsx)("h4",{children:"Hooks"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/UndoState",children:"Undo State"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/FetchHook",children:"Fetch Hook"})})]})]}),(0,o.jsxs)(l,{children:[(0,o.jsx)("h4",{children:"Patterns"}),(0,o.jsx)(s,{children:(0,o.jsx)(l,{children:(0,o.jsx)(h,{href:"/mvc",children:"MVC"})})})]})]})})}},77913:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=(o=t(67294))&&o.__esModule?o:{default:o},c=t(12199),s=t(61587),a=t(27215);function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var d=i.default.forwardRef((function(e,n){var t,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,h=e.as,x=e.children,j=e.prefetch,m=e.passHref,v=e.replace,b=e.shallow,y=e.scroll,g=e.locale,w=e.onClick,O=e.onMouseEnter,k=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=x,d&&"string"===typeof t&&(t=i.default.createElement("a",null,t));var C,P=!1!==j,S=s.useRouter(),E=i.default.useMemo((function(){var e=c.resolveHref(S,p,!0),n=r(e,2),t=n[0],o=n[1];return{href:t,as:h?c.resolveHref(S,h):o||t}}),[S,p,h]),L=E.href,_=E.as,Z=i.default.useRef(L),I=i.default.useRef(_);d&&(C=i.default.Children.only(t));var R=d?C&&"object"===typeof C&&C.ref:n,M=a.useIntersection({rootMargin:"200px"}),D=r(M,3),T=D[0],H=D[1],N=D[2],F=i.default.useCallback((function(e){I.current===_&&Z.current===L||(N(),I.current=_,Z.current=L),T(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[_,R,L,N,T]);i.default.useEffect((function(){var e=H&&P&&c.isLocalURL(L),n="undefined"!==typeof g?g:S&&S.locale,t=l[L+"%"+_+(n?"%"+n:"")];e&&!t&&f(S,L,_,{locale:n})}),[_,L,H,g,P,S]);var U={ref:F,onClick:function(e){d||"function"!==typeof w||w(e),d&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:i,locale:a,scroll:s}))}(e,S,L,_,v,b,y,g)},onMouseEnter:function(e){d||"function"!==typeof O||O(e),d&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),c.isLocalURL(L)&&f(S,L,_,{priority:!0})}};if(!d||m||"a"===C.type&&!("href"in C.props)){var z="undefined"!==typeof g?g:S&&S.locale,A=S&&S.isLocaleDomain&&c.getDomainLocale(_,z,S&&S.locales,S&&S.domainLocales);U.href=A||c.addBasePath(c.addLocale(_,z,S&&S.defaultLocale))}return d?i.default.cloneElement(C,U):i.default.createElement("a",Object.assign({},k,U),t)}));n.default=d,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},27215:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,u=e.disabled||!c,l=o.useRef(),f=o.useState(!1),d=r(f,2),p=d[0],h=d[1],x=o.useState(n?n.current:null),j=r(x,2),m=j[0],v=j[1],b=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),u||p||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=s.get(r):(n=s.get(t),a.push(t));if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(t,n={id:t,observer:i,elements:o}),n}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),s.delete(o);var n=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&a.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:t}))}),[u,m,t,p]),y=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!c&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){n&&v(n.current)}),[n]),[b,p,y]};var o=t(67294),i=t(98065),c="undefined"!==typeof IntersectionObserver;var s=new Map,a=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},61871:function(e,n,t){"use strict";t.r(n);var r,o=t(17674),i=t(59499),c=t(67294),s=t(13301),a=t(94484),u=t(52528),l=t(85893);var f=function(){return(0,l.jsx)("input",{type:"number"})},d=(r={},(0,i.Z)(r,"input",(function(){return(0,l.jsx)("input",{type:"checkbox"})})),(0,i.Z)(r,"checkbox",(function(){return(0,l.jsx)("input",{type:"checkbox"})})),(0,i.Z)(r,"number",f),{div:!0,span:!0,li:!0}),p=function(e){return e in d?c.createElement(e):null};Object.entries(d).forEach((function(e){var n=(0,o.Z)(e,1)[0];p[n]=function(e){return c.createElement(n,e)}}));p.div({prop:1});n.default=function(){return(0,l.jsx)(a.Z,{navigation:(0,l.jsx)(u.Z,{}),content:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Factory"}),(0,l.jsx)("a",{href:"https://github.com/rilexus/advanced-react-pattern/blob/master/src/components/factory/Factory.jsx",children:"GitHub: Components Factory"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Switch"}),(0,l.jsx)(s.Z,{children:'const TextInput = () => {\n  return <input type={"text"} />;\n};\n\nconst NumberInput = () => {\n  return <input type={"numbe"} />;\n};\n\nconst CheckboxInput = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst Input = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst Checkbox = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst InputFactory = ({ type }) => {\n  switch (type) {\n    case "text":\n      return <TextInput />;\n    case "number":\n      return <NumberInput />;\n    case "checkbox":\n      return <CheckboxInput />;\n    default:\n      return null;\n  }\n};'})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Dynamic"}),(0,l.jsx)(s.Z,{children:'const components = {\n  ["input"]: Input,\n  ["checkbox"]: Checkbox,\n  ["number"]: NumberInput,\n};\n\nconst DynamicComponent = ({ name, withProps }) => {\n  if (!!components[name]) {\n    const Component = components[name];\n    return <Component {...withProps} />;\n  }\n  return null;\n};'})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Static"}),(0,l.jsx)(s.Z,{children:"const SupportedHTMLTags = {\n  div: true,\n  span: true,\n  li: true,\n};\n\nconst createComponent = (tag) => {\n  return tag in SupportedHTMLTags ? React.createElement(tag) : null;\n};\n\n(function () {\n  Object.entries(SupportedHTMLTags).forEach(([tag]) => {\n    createComponent[tag] = (props) => React.createElement(tag, props);\n  });\n})();\n\n// const DivComponent = createComponent('div')\nconst DivComponent = createComponent.div({ prop: 1 });\nconst Component = () => {\n  return <DivComponent />;\n};"})]})]})})}},4944:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r,o,i,c,s=t(71383),a=(t(67294),t(32125)),u=576,l=768,f=992,d=1200,p=t(85893),h=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],u,n)}(r||(r=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],l,n)}(o||(o=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],f,n)}(i||(i=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],d,n)}(c||(c=(0,s.Z)(["\n    width: 40vw;\n  "])))),x=function(e){var n=e.children;return(0,p.jsx)(h,{children:n})}},77123:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Factory",function(){return t(61871)}])},41664:function(e,n,t){e.exports=t(77913)},4730:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},71383:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return n=77123,e(e.s=n);var n}));var n=e.O();_N_E=n}]);