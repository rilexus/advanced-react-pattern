(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{94484:function(e,n,t){"use strict";var r=t(59499),i=t(4730),o=t(67294),c=t(4944),s=t(32125),a=t(85893),l=["stroke","fill","height","width"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.stroke,t=void 0===n?"currentColor":n,r=e.fill,o=void 0===r?"currentColor":r,c=e.height,s=void 0===c?"1em":c,d=e.width,f=void 0===d?"1em":d,h=(0,i.Z)(e,l);return(0,a.jsx)("svg",u(u({stroke:t,fill:o,height:s,width:f,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},h),{},{children:(0,a.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},h=s.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),p=function(e){var n=e.children,t=(0,o.useState)("open"),r=t[0],i=t[1];return(0,a.jsxs)(h,{style:{transform:"translate(".concat("open"===r?0:-350,"px)"),boxShadow:"".concat("open"===r?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,a.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"open"===r?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat("open"===r?0:180,"deg)")},onClick:function(){i("open"===r?"close":"open")},children:(0,a.jsx)(f,{height:"1rem",width:"1rem"})}),n]})};n.Z=function(e){var n=e.navigation,t=e.content;return(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("div",{children:t}),(0,a.jsx)(p,{children:n})]})})}},52528:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(59499),i=(t(67294),t(85893));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return(0,i.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},a=t(32125),l=a.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),d=function(e){var n=e.children;return(0,i.jsx)(l,{children:n})},u=t(41664),f=t.n(u),h=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),p=function(e){var n=e.href,t=e.children;return(0,i.jsx)(f(),{href:n,children:(0,i.jsx)(h,{children:t})})},v=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)(s,{children:[(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/",children:"Home"})}),(0,i.jsxs)(d,{children:[(0,i.jsx)("h4",{children:"Utils"}),(0,i.jsxs)(s,{children:[(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/Prefetch",children:"Prefetched State"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("h4",{children:"Components"}),(0,i.jsxs)(s,{children:[(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/suspense",children:"Suspense"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/CompoundToggle",children:"Compound Components"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/StateReducer",children:"State Reducer"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/PropCollection",children:"Props Collection"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/Factory",children:"Factory"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/ControlProps",children:"Control Props"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/Decorator",children:"Decorator"})})]})]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("h4",{children:"Hooks"}),(0,i.jsxs)(s,{children:[(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/UndoState",children:"Undo State"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/FetchHook",children:"Fetch Hook"})})]})]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("h4",{children:"Patterns"}),(0,i.jsx)(s,{children:(0,i.jsx)(d,{children:(0,i.jsx)(p,{href:"/mvc",children:"MVC"})})})]})]})})}},77913:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,o=(i=t(67294))&&i.__esModule?i:{default:i},c=t(12199),s=t(61587),a=t(27215);function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[n+"%"+t+(i?"%"+i:"")]=!0}}var f=o.default.forwardRef((function(e,n){var t,i=e.legacyBehavior,f=void 0===i?!0!==Boolean(!1):i,h=e.href,p=e.as,v=e.children,j=e.prefetch,x=e.passHref,m=e.replace,g=e.shallow,y=e.scroll,b=e.locale,w=e.onClick,O=e.onMouseEnter,P=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=v,f&&"string"===typeof t&&(t=o.default.createElement("a",null,t));var k,C=!1!==j,S=s.useRouter(),E=o.default.useMemo((function(){var e=c.resolveHref(S,h,!0),n=r(e,2),t=n[0],i=n[1];return{href:t,as:p?c.resolveHref(S,p):i||t}}),[S,h,p]),D=E.href,Z=E.as,_=o.default.useRef(D),L=o.default.useRef(Z);f&&(k=o.default.Children.only(t));var R=f?k&&"object"===typeof k&&k.ref:n,N=a.useIntersection({rootMargin:"200px"}),I=r(N,3),H=I[0],M=I[1],T=I[2],A=o.default.useCallback((function(e){L.current===Z&&_.current===D||(T(),L.current=Z,_.current=D),H(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[Z,R,D,T,H]);o.default.useEffect((function(){var e=M&&C&&c.isLocalURL(D),n="undefined"!==typeof b?b:S&&S.locale,t=d[D+"%"+Z+(n?"%"+n:"")];e&&!t&&u(S,D,Z,{locale:n})}),[Z,D,M,b,C,S]);var F={ref:A,onClick:function(e){f||"function"!==typeof w||w(e),f&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,s,a){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[i?"replace":"push"](t,r,{shallow:o,locale:a,scroll:s}))}(e,S,D,Z,m,g,y,b)},onMouseEnter:function(e){f||"function"!==typeof O||O(e),f&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),c.isLocalURL(D)&&u(S,D,Z,{priority:!0})}};if(!f||x||"a"===k.type&&!("href"in k.props)){var J="undefined"!==typeof b?b:S&&S.locale,z=S&&S.isLocaleDomain&&c.getDomainLocale(Z,J,S&&S.locales,S&&S.domainLocales);F.href=z||c.addBasePath(c.addLocale(Z,J,S&&S.defaultLocale))}return f?o.default.cloneElement(k,F):o.default.createElement("a",Object.assign({},P,F),t)}));n.default=f,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},27215:function(e,n,t){"use strict";var r=t(85696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!c,d=i.useRef(),u=i.useState(!1),f=r(u,2),h=f[0],p=f[1],v=i.useState(n?n.current:null),j=r(v,2),x=j[0],m=j[1],g=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),l||h||e&&e.tagName&&(d.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=s.get(r):(n=s.get(t),a.push(t));if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(t,n={id:t,observer:o,elements:i}),n}(t),i=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),s.delete(i);var n=a.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));n>-1&&a.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:x,rootMargin:t}))}),[l,x,t,h]),y=i.useCallback((function(){p(!1)}),[]);return i.useEffect((function(){if(!c&&!h){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h]),i.useEffect((function(){n&&m(n.current)}),[n]),[g,h,y]};var i=t(67294),o=t(98065),c="undefined"!==typeof IntersectionObserver;var s=new Map,a=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},82573:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(67294),i=t(43236);function o(e,n){return Math.random()*(n-e)+e}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o(1e3,3e3);return new Promise((function(n,t){setTimeout((function(){n({data:{responseTime:Math.round(e)}})}),e)}))},s=t(85893),a=function(e){var n=e.children;return(0,s.jsx)("div",{style:{padding:"2rem"},children:n})},l=function(e){var n=e.children,t=(0,r.useState)(null),i=t[0],o=t[1];return(0,r.useEffect)((function(){c().then((function(e){o(e)}))}),[]),(0,s.jsxs)("div",{style:{height:"26rem",border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component A"}),(0,s.jsxs)("div",{children:["Data: ",i&&JSON.stringify(i)]}),(0,s.jsx)(a,{children:i?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},d=function(e){var n=e.children,t=(0,r.useState)(null),i=t[0],o=t[1];return(0,r.useEffect)((function(){c().then((function(e){o(e)}))}),[]),(0,s.jsxs)("div",{style:{border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component B"}),(0,s.jsxs)("div",{children:["Data: ",i&&JSON.stringify(i)]}),(0,s.jsx)(a,{children:i?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},u=function(e){var n=e.children,t=(0,r.useState)(null),i=t[0],o=t[1];return(0,r.useEffect)((function(){c().then((function(e){o(e)}))}),[]),(0,s.jsxs)("div",{style:{border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component C"}),(0,s.jsxs)("div",{children:["Data: ",i&&JSON.stringify(i)]}),(0,s.jsx)(a,{children:i?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},f=function(e){var n=e.children,t=(0,r.useState)(null),i=t[0],o=t[1];return(0,r.useEffect)((function(){c().then((function(e){o(e)}))}),[]),(0,s.jsxs)("div",{style:{border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component D"}),(0,s.jsxs)("div",{children:["Data: ",i&&JSON.stringify(i)]}),(0,s.jsx)(a,{children:i?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},h=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(l,{children:(0,s.jsx)(d,{children:(0,s.jsx)(u,{children:(0,s.jsx)(f,{})})})})})},p=t(17674),v=t(50029),j=t(87794),x=t.n(j);function m(e){var n="fetching",t=n,i=null,o=null,c=e();return c.then((function(e){t="resolved",i=e}),(function(e){t="error",o=e})),function(){var e=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return(0,r.useCallback)((function(){t((function(e){return!e}))}),[n,t])}();return(0,r.useEffect)((function(){t===n&&c.then((function(){e()}))}),[]),[i,o]}}var g=m((0,v.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c());case 1:case"end":return e.stop()}}),e)})))),y=m((0,v.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c());case 1:case"end":return e.stop()}}),e)})))),b=m((0,v.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c());case 1:case"end":return e.stop()}}),e)})))),w=m((0,v.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c());case 1:case"end":return e.stop()}}),e)})))),O=function(e){var n=e.children;return(0,s.jsx)("div",{style:{padding:"2rem"},children:n})},P=function(e){var n=e.children,t=g(),r=(0,p.Z)(t,1)[0];return(0,s.jsxs)("div",{style:{height:"26rem",border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component A"}),(0,s.jsxs)("div",{children:["Data: ",r&&JSON.stringify(r)]}),(0,s.jsx)(O,{children:r?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},k=function(e){var n=e.children,t=y(),r=(0,p.Z)(t,1)[0];return(0,s.jsxs)("div",{style:{border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component B"}),(0,s.jsxs)("div",{children:["Data: ",r&&JSON.stringify(r)]}),(0,s.jsx)(O,{children:r?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},C=function(e){var n=e.children,t=b(),r=(0,p.Z)(t,1)[0];return(0,s.jsxs)("div",{style:{border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component C"}),(0,s.jsxs)("div",{children:["Data: ",r&&JSON.stringify(r)]}),(0,s.jsx)(O,{children:r?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},S=function(e){var n=e.children,t=w(),r=(0,p.Z)(t,1)[0];return(0,s.jsxs)("div",{style:{border:"1px solid black"},children:[(0,s.jsx)("div",{children:"Component D"}),(0,s.jsxs)("div",{children:["Data: ",r&&JSON.stringify(r)]}),(0,s.jsx)(O,{children:r?(0,s.jsx)("div",{children:n}):(0,s.jsx)("div",{children:"Loading..."})})]})},E=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(P,{children:(0,s.jsx)(k,{children:(0,s.jsx)(C,{children:(0,s.jsx)(S,{})})})})})},D=t(84663),Z=t(68556),_=t(52528),L=t(94484),R=function(){return(0,s.jsx)(L.Z,{navigation:(0,s.jsx)(_.Z,{}),content:(0,s.jsx)("main",{children:(0,s.jsxs)("article",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(Z.Z,{children:"Prefetch"}),(0,s.jsx)(D.P,{children:"Fetching data in React usually looks like this:"}),(0,s.jsx)("figure",{children:(0,s.jsx)(i.E,{children:"const Component = () => {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    // fetch as soon as component mounts\n    fetchData().then((d) => {\n      setData(d);\n    });\n  }, []);\n\n  return data && <div>children</div>;\n};"})}),(0,s.jsx)(D.P,{children:"You fetch as soon as the component mounts. While the data is on the way, you postpone the rendering of children. This way of getting data does not do any harm in the majority of cases but it has one fault tho. To make my case clear, Ill provide couple of examples."}),(0,s.jsx)(D.P,{children:"In a big react application you will unavoidably end up with a nested structure like this:"}),(0,s.jsx)("figure",{children:(0,s.jsx)(i.E,{children:"const Component = () => {\n  return (\n    <div>\n      <ComponentA>\n        <ComponentB>\n          <ComponentC>\n            <ComponentD />\n          </ComponentC>\n        </ComponentB>\n      </ComponentA>\n    </div>\n  );\n};"})}),(0,s.jsx)(D.P,{children:"If you fetch data on mount as in the first example, you will end up with a fetch watterfall: a component starts fetching only when the previous component has finished. This has a devastating effect on the user experience. The application feels slow and dull. Just reload this page and take a look at the next example."}),(0,s.jsx)(D.P,{children:"There is another way to fetch data. Start fetching as soon as javascript hits the browser. And as soon as the data is available, rerender."}),(0,s.jsx)(D.P,{children:"Reload the page couple of times and take a look at the next demo."}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("figcaption",{children:"Sequence fetch (Waterfall)"}),(0,s.jsx)(h,{})]}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("figcaption",{children:"Parallel Fetch"}),(0,s.jsx)(E,{})]}),(0,s.jsx)(D.P,{children:"If we run them side by side, the difference is pretty clear. The response time for both, parallel and sequential fetching is set to be random between 1000ms and 3000ms. Parallel fetching finishes always first."}),(0,s.jsx)(D.P,{children:"Parallel fetching could look like this:"}),(0,s.jsx)("figure",{children:(0,s.jsx)(i.E,{children:'const useData = prefetch(\n  async () => fetchData()\n);\n\nconst ComponentA = ({ children }) => {\n  const [data] = useData();\n\n  return (\n    <div\n      style={{\n        height: "34rem",\n        border: "1px solid black",\n      }}\n    >\n      <div>Component A</div>\n      <div>Data: {data && JSON.stringify(data)}</div>\n      <div style={{ padding: "3rem" }}>\n        {!data ? <div>Loading...</div> : <div>{children}</div>}\n      </div>\n    </div>\n  );\n};'})})]}),(0,s.jsx)(D.P,{children:'A simple implementation of the "prefetch" function is below. Error handling is omitted here.'}),(0,s.jsx)("figure",{children:(0,s.jsx)(i.E,{children:'function prefetch(resolver) {\n  const ERROR = "error";\n  const RESOLVED = "resolved";\n  const FETCHING = "fetching";\n\n  let status = FETCHING; // initial status\n  let result = null;\n  let error = null;\n\n  const promised = resolver();\n  // subscribe to the promise as soon as this function is called\n  promised.then(\n    (_data) => {\n      status = RESOLVED;\n      result = _data;\n    },\n    (_error) => {\n      status = ERROR;\n      error = _error;\n    }\n  );\n\n  return () => {\n    // return a hook function\n    const rerender = useRerender();\n\n    useEffect(() => {\n      if (status === FETCHING) {\n        // if this hook renders before the promise is resolved\n        promised.then(() => {\n          // await the result, rerender the component\n          rerender();\n        });\n      }\n    }, []);\n\n    return [result, error];\n  };\n}'})})]})})})}},43236:function(e,n,t){"use strict";t.d(n,{E:function(){return r.Z}});var r=t(13301)},4944:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r,i,o,c,s=t(71383),a=(t(67294),t(32125)),l=576,d=768,u=992,f=1200,h=t(85893),p=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],l,n)}(r||(r=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],d,n)}(i||(i=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],u,n)}(o||(o=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,a.iv)(["@media (min-width:","px){",";}"],f,n)}(c||(c=(0,s.Z)(["\n    width: 40vw;\n  "])))),v=function(e){var n=e.children;return(0,h.jsx)(p,{children:n})}},68556:function(e,n,t){"use strict";var r=t(59499),i=(t(67294),t(32125)),o=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var s=(0,i.iv)(['font-size:48px;line-height:1.08349;font-weight:700;letter-spacing:-0.003em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),a=i.ZP.h1.withConfig({displayName:"H1__StyledH1",componentId:"sc-rl2x2k-0"})(["",";"],s);n.Z=function(e){return(0,o.jsx)(a,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))}},84663:function(e,n,t){"use strict";t.d(n,{P:function(){return d}});var r=t(59499),i=(t(67294),t(32125)),o=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a=(0,i.iv)(['margin-bottom:1.4211em;font-size:1.125rem;color:#1a1a1a;line-height:1.4211;font-weight:400;letter-spacing:0.012em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),l=i.ZP.p.withConfig({displayName:"P__StyledP",componentId:"sc-f4vqmk-0"})(["",";"],a),d=function(e){return(0,o.jsx)(l,s(s({},e),{},{style:e.style}))}},57372:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Prefetch",function(){return t(82573)}])},41664:function(e,n,t){e.exports=t(77913)},50029:function(e,n,t){"use strict";function r(e,n,t,r,i,o,c){try{var s=e[o](c),a=s.value}catch(l){return void t(l)}s.done?n(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var c=e.apply(n,t);function s(e){r(c,i,o,s,a,"next",e)}function a(e){r(c,i,o,s,a,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return i}})},4730:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})},71383:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return n=57372,e(e.s=n);var n}));var n=e.O();_N_E=n}]);