(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{63296:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(67294);var r=t(90005),o=t(85893),c=function(e){var n=e.children,t=e.direction,r=void 0===t?"row":t;return(0,o.jsx)("div",{style:{display:"flex",flexDirection:r},children:n})},s=function(e){var n=e.navigation,t=e.content;return(0,o.jsx)(r.Z,{children:(0,o.jsxs)(c,{children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},children:n}),(0,o.jsx)("div",{children:t})]})})}},7712:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(35830),o=t(41664),c=t.n(o),s=(t(67294),t(32125)),i=t(85893),a=s.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),l=function(e){var n=e.children;return(0,i.jsx)(a,{children:n})},u=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/",children:"Home"})}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Utils"}),(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/Prefetch",children:(0,i.jsx)("a",{children:"Prefetched State"})})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Components"}),(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/suspense",children:"Suspense"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/StateReducer",children:"State Reducer"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/PropCollection",children:"Props Collection"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/Factory",children:"Factory"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/ControlProps",children:"Control Props"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Hooks"}),(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/UndoState",children:"Undo State"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,i.jsx)(l,{children:(0,i.jsx)(c(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},77913:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,c=(o=t(67294))&&o.__esModule?o:{default:o},s=t(12199),i=t(61587),a=t(27215);function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u={};function d(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=c.default.forwardRef((function(e,n){var t,o=e.legacyBehavior,f=void 0===o?!0!==Boolean(!1):o,h=e.href,p=e.as,b=e.children,j=e.prefetch,x=e.passHref,v=e.replace,g=e.shallow,m=e.scroll,y=e.locale,w=e.onClick,T=e.onMouseEnter,P=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=b,f&&"string"===typeof t&&(t=c.default.createElement("a",null,t));var O,C=!1!==j,k=i.useRouter(),S=c.default.useMemo((function(){var e=s.resolveHref(k,h,!0),n=r(e,2),t=n[0],o=n[1];return{href:t,as:p?s.resolveHref(k,p):o||t}}),[k,h,p]),I=S.href,E=S.as,_=c.default.useRef(I),R=c.default.useRef(E);f&&(O=c.default.Children.only(t));var L=f?O&&"object"===typeof O&&O.ref:n,M=a.useIntersection({rootMargin:"200px"}),Z=r(M,3),U=Z[0],V=Z[1],H=Z[2],N=c.default.useCallback((function(e){R.current===E&&_.current===I||(H(),R.current=E,_.current=I),U(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[E,L,I,H,U]);c.default.useEffect((function(){var e=V&&C&&s.isLocalURL(I),n="undefined"!==typeof y?y:k&&k.locale,t=u[I+"%"+E+(n?"%"+n:"")];e&&!t&&d(k,I,E,{locale:n})}),[E,I,V,y,C,k]);var D={ref:N,onClick:function(e){f||"function"!==typeof w||w(e),f&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:c,locale:a,scroll:i}))}(e,k,I,E,v,g,m,y)},onMouseEnter:function(e){f||"function"!==typeof T||T(e),f&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),s.isLocalURL(I)&&d(k,I,E,{priority:!0})}};if(!f||x||"a"===O.type&&!("href"in O.props)){var B="undefined"!==typeof y?y:k&&k.locale,F=k&&k.isLocaleDomain&&s.getDomainLocale(E,B,k&&k.locales,k&&k.domainLocales);D.href=F||s.addBasePath(s.addLocale(E,B,k&&k.defaultLocale))}return f?c.default.cloneElement(O,D):c.default.createElement("a",Object.assign({},P,D),t)}));n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},27215:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!s,u=o.useRef(),d=o.useState(!1),f=r(d,2),h=f[0],p=f[1],b=o.useState(n?n.current:null),j=r(b,2),x=j[0],v=j[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||h||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=i.get(r):(n=i.get(t),a.push(t));if(n)return n;var o=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(t,n={id:t,observer:c,elements:o}),n}(t),o=r.id,c=r.observer,s=r.elements;return s.set(e,n),c.observe(e),function(){if(s.delete(e),c.unobserve(e),0===s.size){c.disconnect(),i.delete(o);var n=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&a.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:x,rootMargin:t}))}),[l,x,t,h]),m=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!s&&!h){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){n&&v(n.current)}),[n]),[g,h,m]};var o=t(67294),c=t(98065),s="undefined"!==typeof IntersectionObserver;var i=new Map,a=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},58614:function(e,n,t){"use strict";t.r(n);t(67294);var r=t(92240),o=t(63296),c=t(7712),s=t(84663),i=t(85893),a=function(e){return(0,e.render)({getValue:function(){return 41}})};a({render:function(e){var n=e.getValue;return"".concat(n()+1)}}),a({render:function(e){var n=e.getValue;return"<div>".concat(n()+1,"</div>")}});n.default=function(){return(0,i.jsx)(o.Z,{navigation:(0,i.jsx)(c.Z,{}),content:(0,i.jsx)("div",{children:(0,i.jsx)("main",{children:(0,i.jsxs)("article",{children:[(0,i.jsx)("h1",{children:"Render Props"}),(0,i.jsx)(s.P,{children:(0,i.jsx)("i",{children:"After this article you will understand what a render prop is, how and when to use it."})}),(0,i.jsx)(s.P,{children:"Take a look at the example. What does the function return?"}),(0,i.jsx)(r.Z,{children:"const func = (call) => {\n  return call();\n};\n\nconst result = func(() => 42);\nconsole.log(result);"}),(0,i.jsx)(s.P,{children:"In case you do not know, the result is 42."}),(0,i.jsx)(s.P,{children:"How about this code? What is the result?"}),(0,i.jsx)(r.Z,{children:"const func = ({ call }) => {\n  return call();\n};\n\nconst result = func({ call: () => 42 });\nconsole.log(result);"}),(0,i.jsx)(s.P,{children:'The result is the same. The difference between this and the previous example is how the function "call" is passed. In the first example I pass a function as the first argument. In the second example, I pass an object with the property "call", which is a function.'}),(0,i.jsx)(s.P,{children:"What is the result in this example?"}),(0,i.jsx)(r.Z,{children:"const func = ({ call }) => {\n  return call(41);\n};\n\nconst result = func({ call: (number) => number + 1 });\nconsole.log(result);"}),(0,i.jsx)(s.P,{children:'The result is 42, still. Now instead of the "call" function returning a value 42, I pass a number to the function from within the "func" function.'}),(0,i.jsx)(s.P,{children:"For the next example, I refactor the code."}),(0,i.jsx)(r.Z,{children:"const func = ({ call }) => {\n  return call(41);\n};\n\nconst call = (number) => {\n  return number + 1;\n};\n\nconst result = func({ call });\nconsole.log(result);"}),(0,i.jsx)(s.P,{children:"What is the result of the next example?"}),(0,i.jsx)(r.Z,{children:"const func = ({ call }) => {\n  const getNumber = () => 41;\n  \n  return call({getNumber});\n};\n\nconst call = ({getNumber}) => {\n  return getNumber() + 1;\n};\n\nconst result = func({ call });\nconsole.log(result);"}),(0,i.jsx)(s.P,{children:"This time instead of passing the number directly, I pass a function, which returns the number. The result is 42."}),(0,i.jsx)(s.P,{children:"Why all this? Ill rename some functions to make the purpose a little more clear."}),(0,i.jsx)(r.Z,{children:"const func = ({ render }) => {\n  const getValue = () => 41;\n\n  return render({ getValue });\n};\n\nconst renderToString = ({ getValue }) => {\n  return `${getValue() + 1}`;\n};\n\nconst renderToHTML = ({ getValue }) => {\n  return `<div>${getValue() + 1}</div>`;\n};\n\nconst result1 = func({ render: renderToString });\nconsole.log(result1);\n\nconst result2 = func({ render: renderToHTML });\nconsole.log(result2);"}),(0,i.jsx)(s.P,{children:'As you can see, one function returns a string, the other returns HTML. The results are different while the "func" function is the same. The "func" function contains data and logic and does not care about how the data is rendered. This is the job of the "renderToString" and the "renderToHTML" function.'}),(0,i.jsx)(s.P,{children:"How does this transfers to the react you might ask. Next example."}),(0,i.jsx)(r.Z,{children:'const User = ({ render }) => {\n  const [state, setState] = useState({});\n  useEffect(() => {\n    fetchUserData().then((data) => setState(data));\n  }, []);\n\n  return render(state);\n};\n\nconst Component = () => {\n  const renderTable = (user) => {\n    return (\n      <table>\n        <tr>\n          <th>Name</th>\n          <th>Surname</th>\n          {/* TODO: add more th elements here*/}\n        </tr>\n        <tr>\n          <td>{user.name}</td>\n          <td>{user.surname}</td>\n        </tr>\n      </table>\n    );\n  };\n  const renderToCard = (user) => {\n    return (\n      <div className={"card"}>\n        <div>{user.name}</div>\n        <div>{user.surname}</div>\n      </div>\n    );\n  };\n  return <User render={renderTable} />;\n};'}),(0,i.jsx)(s.P,{children:'The "User" component looks similar to the "func" function. It gets a function "render" as a prop, passes data to it and returns whatever the "render" function returns. It does not care how the data is rendered. It is simply a container for data and logic.'}),(0,i.jsx)(s.P,{children:'One concrete and good example of this pattern is the "Tabs" component.'}),(0,i.jsx)(r.Z,{children:'const TabsContext = createContext(["", () => {}]);\nconst useTabsContext = () => useContext(TabsContext);\n\nconst Tabs = ({ children, initialTab }) => {\n  const state = useState(initialTab);\n  return <TabsContext.Provider value={state}>{children}</TabsContext.Provider>;\n};\n\nconst TabsButton = ({ children }) => {\n  const [, setActiveTab] = useTabsContext();\n  return children(setActiveTab);\n};\n\nconst TabView = ({ children, id }) => {\n  const [activeTab] = useTabsContext();\n\n  return id === activeTab ? children : null;\n};\n\nconst Component = () => {\n  return (\n    <Tabs initialTab={"firstTab"}>\n      <div>\n        <TabsButton>\n          {(activate) => {\n            return (\n              <div>\n                <button onClick={() => activate("firstTab")}>First Tab</button>\n              </div>\n            );\n          }}\n        </TabsButton>\n        <TabsButton>\n          {(activate) => {\n            return (\n              <div>\n                <button onClick={() => activate("secondTab")}>\n                  Second Tab\n                </button>\n              </div>\n            );\n          }}\n        </TabsButton>\n      </div>\n      <div>\n        <TabView id={"firstView"}>First View</TabView>\n        <TabView id={"secondView"}>Second View</TabView>\n      </div>\n    </Tabs>\n  );\n};'}),(0,i.jsx)(s.P,{children:"Its up to the programmer to decide how to render the tab button. If you would like encapsulate logic and delegate the UI, the render props pattern can be the way to go. Although you should consider using a custom hook."})]})})})})}},90005:function(e,n,t){"use strict";t(67294);var r=t(32125),o=t(85893),c=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);n.Z=function(e){var n=e.children;return(0,o.jsx)(c,{children:n})}},84663:function(e,n,t){"use strict";t.d(n,{P:function(){return a}});var r=t(59499),o=(t(67294),t(40470)),c=t(85893);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a=function(e){var n=(0,o.Z)(i(i({},e.style),{},{lineHeight:"1.4",fontSize:"1.125rem",color:"#1a1a1a"}),[]);return(0,c.jsx)("p",i(i({},e),{},{style:n}))}},35830:function(e,n,t){"use strict";t.d(n,{Ul:function(){return i}});var r=t(59499),o=(t(67294),t(85893));function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i=function(e){return(0,o.jsx)("ul",s({style:s({paddingLeft:"1rem"},e.style)},e))}},82360:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/RenderPropsToggle",function(){return t(58614)}])},41664:function(e,n,t){e.exports=t(77913)}},function(e){e.O(0,[774,888,179],(function(){return n=82360,e(e.s=n);var n}));var n=e.O();_N_E=n}]);