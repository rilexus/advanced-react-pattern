(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{94484:function(e,n,t){"use strict";var r=t(59499),o=t(4730),i=t(67294),c=t(4944),s=t(32125),a=t(85893),l=["stroke","fill","height","width"];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.stroke,t=void 0===n?"currentColor":n,r=e.fill,i=void 0===r?"currentColor":r,c=e.height,s=void 0===c?"1em":c,u=e.width,f=void 0===u?"1em":u,h=(0,o.Z)(e,l);return(0,a.jsx)("svg",d(d({stroke:t,fill:i,height:s,width:f,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h),{},{children:(0,a.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},h=s.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),p=function(e){var n=e.children,t=(0,i.useState)("open"),r=t[0],o=t[1];return(0,a.jsxs)(h,{style:{transform:"translate(".concat("open"===r?0:-350,"px)"),boxShadow:"".concat("open"===r?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,a.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"open"===r?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat("open"===r?0:180,"deg)")},onClick:function(){o("open"===r?"close":"open")},children:(0,a.jsx)(f,{height:"1rem",width:"1rem"})}),n]})};n.Z=function(e){var n=e.navigation,t=e.content;return(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("div",{children:t}),(0,a.jsx)(p,{children:n})]})})}},52528:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(59499),o=(t(67294),t(85893));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return(0,o.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},a=t(32125),l=a.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),u=function(e){var n=e.children;return(0,o.jsx)(l,{children:n})},d=t(41664),f=t.n(d),h=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),p=function(e){var n=e.href,t=e.children;return(0,o.jsx)(f(),{href:n,children:(0,o.jsx)(h,{children:t})})},b=function(){return(0,o.jsx)("nav",{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/",children:"Home"})}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Utils"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Prefetch",children:"Prefetched State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Components"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/suspense",children:"Suspense"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/CompoundToggle",children:"Compound Components"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/StateReducer",children:"State Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/PropCollection",children:"Props Collection"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Factory",children:"Factory"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ControlProps",children:"Control Props"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Decorator",children:"Decorator"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Roles",children:"Roles"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/Layout",children:"Layout"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Hooks"}),(0,o.jsxs)(s,{children:[(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/UndoState",children:"Undo State"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/FetchHook",children:"Fetch Hook"})})]})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("h4",{children:"Patterns"}),(0,o.jsx)(s,{children:(0,o.jsx)(u,{children:(0,o.jsx)(p,{href:"/mvc",children:"MVC"})})})]})]})})}},77913:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=(o=t(67294))&&o.__esModule?o:{default:o},c=t(12199),s=t(61587),a=t(27215);function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u={};function d(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=i.default.forwardRef((function(e,n){var t,o=e.legacyBehavior,f=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,b=e.children,x=e.prefetch,j=e.passHref,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale,w=e.onClick,O=e.onMouseEnter,P=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=b,f&&"string"===typeof t&&(t=i.default.createElement("a",null,t));var T,k=!1!==x,C=s.useRouter(),S=i.default.useMemo((function(){var e=c.resolveHref(C,h,!0),n=r(e,2),t=n[0],o=n[1];return{href:t,as:p?c.resolveHref(C,p):o||t}}),[C,h,p]),I=S.href,Z=S.as,_=i.default.useRef(I),E=i.default.useRef(Z);f&&(T=i.default.Children.only(t));var L=f?T&&"object"===typeof T&&T.ref:n,R=a.useIntersection({rootMargin:"200px"}),M=r(R,3),N=M[0],D=M[1],V=M[2],H=i.default.useCallback((function(e){E.current===Z&&_.current===I||(V(),E.current=Z,_.current=I),N(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[Z,L,I,V,N]);i.default.useEffect((function(){var e=D&&k&&c.isLocalURL(I),n="undefined"!==typeof y?y:C&&C.locale,t=u[I+"%"+Z+(n?"%"+n:"")];e&&!t&&d(C,I,Z,{locale:n})}),[Z,I,D,y,k,C]);var U={ref:H,onClick:function(e){f||"function"!==typeof w||w(e),f&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:i,locale:a,scroll:s}))}(e,C,I,Z,m,v,g,y)},onMouseEnter:function(e){f||"function"!==typeof O||O(e),f&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),c.isLocalURL(I)&&d(C,I,Z,{priority:!0})}};if(!f||j||"a"===T.type&&!("href"in T.props)){var A="undefined"!==typeof y?y:C&&C.locale,B=C&&C.isLocaleDomain&&c.getDomainLocale(Z,A,C&&C.locales,C&&C.domainLocales);U.href=B||c.addBasePath(c.addLocale(Z,A,C&&C.defaultLocale))}return f?i.default.cloneElement(T,U):i.default.createElement("a",Object.assign({},P,U),t)}));n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},27215:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!c,u=o.useRef(),d=o.useState(!1),f=r(d,2),h=f[0],p=f[1],b=o.useState(n?n.current:null),x=r(b,2),j=x[0],m=x[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||h||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=s.get(r):(n=s.get(t),a.push(t));if(n)return n;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(t,n={id:t,observer:i,elements:o}),n}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),s.delete(o);var n=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&a.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:j,rootMargin:t}))}),[l,j,t,h]),g=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!c&&!h){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){n&&m(n.current)}),[n]),[v,h,g]};var o=t(67294),i=t(98065),c="undefined"!==typeof IntersectionObserver;var s=new Map,a=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},58614:function(e,n,t){"use strict";t.r(n);t(67294);var r=t(13301),o=t(94484),i=t(52528),c=t(84663),s=t(85893),a=function(e){return(0,e.render)({getValue:function(){return 41}})};a({render:function(e){var n=e.getValue;return"".concat(n()+1)}}),a({render:function(e){var n=e.getValue;return"<div>".concat(n()+1,"</div>")}});n.default=function(){return(0,s.jsx)(o.Z,{navigation:(0,s.jsx)(i.Z,{}),content:(0,s.jsx)("div",{children:(0,s.jsx)("main",{children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h1",{children:"Render Props"}),(0,s.jsx)(c.P,{children:(0,s.jsx)("i",{children:"After this article you will understand what a render prop is, how and when to use it."})}),(0,s.jsx)(c.P,{children:"Take a look at the example. What does the function return?"}),(0,s.jsx)(r.Z,{children:"const func = (call) => {\n  return call();\n};\n\nconst result = func(() => 42);\nconsole.log(result);"}),(0,s.jsx)(c.P,{children:"In case you do not know, the result is 42."}),(0,s.jsx)(c.P,{children:"How about this code? What is the result?"}),(0,s.jsx)(r.Z,{children:"const func = ({ call }) => {\n  return call();\n};\n\nconst result = func({ call: () => 42 });\nconsole.log(result);"}),(0,s.jsx)(c.P,{children:'The result is the same. The difference between this and the previous example is how the function "call" is passed. In the first example I pass a function as the first argument. In the second example, I pass an object with the property "call", which is a function.'}),(0,s.jsx)(c.P,{children:"What is the result in this example?"}),(0,s.jsx)(r.Z,{children:"const func = ({ call }) => {\n  return call(41);\n};\n\nconst result = func({ call: (number) => number + 1 });\nconsole.log(result);"}),(0,s.jsx)(c.P,{children:'The result is 42, still. Now instead of the "call" function returning a value 42, I pass a number to the function from within the "func" function.'}),(0,s.jsx)(c.P,{children:"For the next example, I refactor the code."}),(0,s.jsx)(r.Z,{children:"const func = ({ call }) => {\n  return call(41);\n};\n\nconst call = (number) => {\n  return number + 1;\n};\n\nconst result = func({ call });\nconsole.log(result);"}),(0,s.jsx)(c.P,{children:"What is the result of the next example?"}),(0,s.jsx)(r.Z,{children:"const func = ({ call }) => {\n  const getNumber = () => 41;\n  \n  return call({getNumber});\n};\n\nconst call = ({getNumber}) => {\n  return getNumber() + 1;\n};\n\nconst result = func({ call });\nconsole.log(result);"}),(0,s.jsx)(c.P,{children:"This time instead of passing the number directly, I pass a function, which returns the number. The result is 42."}),(0,s.jsx)(c.P,{children:"Why all this? Ill rename some functions to make the purpose a little more clear."}),(0,s.jsx)(r.Z,{children:"const func = ({ render }) => {\n  const getValue = () => 41;\n\n  return render({ getValue });\n};\n\nconst renderToString = ({ getValue }) => {\n  return `${getValue() + 1}`;\n};\n\nconst renderToHTML = ({ getValue }) => {\n  return `<div>${getValue() + 1}</div>`;\n};\n\nconst result1 = func({ render: renderToString });\nconsole.log(result1);\n\nconst result2 = func({ render: renderToHTML });\nconsole.log(result2);"}),(0,s.jsx)(c.P,{children:'As you can see, one function returns a string, the other returns HTML. The results are different while the "func" function is the same. The "func" function contains data and logic and does not care about how the data is rendered. This is the job of the "renderToString" and the "renderToHTML" function.'}),(0,s.jsx)(c.P,{children:"How does this transfers to the react you might ask. Next example."}),(0,s.jsx)(r.Z,{children:'const User = ({ render }) => {\n  const [state, setState] = useState({});\n  useEffect(() => {\n    fetchUserData().then((data) => setState(data));\n  }, []);\n\n  return render(state);\n};\n\nconst Component = () => {\n  const renderTable = (user) => {\n    return (\n      <table>\n        <tr>\n          <th>Name</th>\n          <th>Surname</th>\n          {/* TODO: add more th elements here*/}\n        </tr>\n        <tr>\n          <td>{user.name}</td>\n          <td>{user.surname}</td>\n        </tr>\n      </table>\n    );\n  };\n  const renderToCard = (user) => {\n    return (\n      <div className={"card"}>\n        <div>{user.name}</div>\n        <div>{user.surname}</div>\n      </div>\n    );\n  };\n  return <User render={renderTable} />;\n};'}),(0,s.jsx)(c.P,{children:'The "User" component looks similar to the "func" function. It gets a function "render" as a prop, passes data to it and returns whatever the "render" function returns. It does not care how the data is rendered. It is simply a container for data and logic.'}),(0,s.jsx)(c.P,{children:'One concrete and good example of this pattern is the "Tabs" component.'}),(0,s.jsx)(r.Z,{children:'const TabsContext = createContext(["", () => {}]);\nconst useTabsContext = () => useContext(TabsContext);\n\nconst Tabs = ({ children, initialTab }) => {\n  const state = useState(initialTab);\n  return <TabsContext.Provider value={state}>{children}</TabsContext.Provider>;\n};\n\nconst TabsButton = ({ children }) => {\n  const [, setActiveTab] = useTabsContext();\n  return children(setActiveTab);\n};\n\nconst TabView = ({ children, id }) => {\n  const [activeTab] = useTabsContext();\n\n  return id === activeTab ? children : null;\n};\n\nconst Component = () => {\n  return (\n    <Tabs initialTab={"firstTab"}>\n      <div>\n        <TabsButton>\n          {(activate) => {\n            return (\n              <div>\n                <button onClick={() => activate("firstTab")}>First Tab</button>\n              </div>\n            );\n          }}\n        </TabsButton>\n        <TabsButton>\n          {(activate) => {\n            return (\n              <div>\n                <button onClick={() => activate("secondTab")}>\n                  Second Tab\n                </button>\n              </div>\n            );\n          }}\n        </TabsButton>\n      </div>\n      <div>\n        <TabView id={"firstView"}>First View</TabView>\n        <TabView id={"secondView"}>Second View</TabView>\n      </div>\n    </Tabs>\n  );\n};'}),(0,s.jsx)(c.P,{children:"Its up to the programmer to decide how to render the tab button. If you would like encapsulate logic and delegate the UI, the render props pattern can be the way to go. Although you should consider using a custom hook."})]})})})})}},4944:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r,o,i,c,s=t(71383),a=(t(67294),t(32125)),l=576,u=768,d=992,f=1200,h=t(85893),p=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],l,n)}(r||(r=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],u,n)}(o||(o=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],d,n)}(i||(i=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],f,n)}(c||(c=(0,s.Z)(["\n    width: 40vw;\n  "])))),b=function(e){var n=e.children;return(0,h.jsx)(p,{children:n})}},84663:function(e,n,t){"use strict";t.d(n,{P:function(){return u}});var r=t(59499),o=(t(67294),t(32125)),i=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a=(0,o.iv)(['margin-bottom:1.4211em;font-size:1.125rem;color:#1a1a1a;line-height:1.4211;font-weight:400;letter-spacing:0.012em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),l=o.ZP.p.withConfig({displayName:"P__StyledP",componentId:"sc-f4vqmk-0"})(["",";"],a),u=function(e){return(0,i.jsx)(l,s(s({},e),{},{style:e.style}))}},82360:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RenderPropsToggle",function(){return t(58614)}])},41664:function(e,n,t){e.exports=t(77913)},4730:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})},71383:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return n=82360,e(e.s=n);var n}));var n=e.O();_N_E=n}]);