(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3072],{3296:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(7294);var r=n(5),i=n(5893),o=function(e){var t=e.children,n=e.direction,r=void 0===n?"row":n;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:r},children:t})},c=function(e){var t=e.navigation,n=e.content;return(0,i.jsx)(r.Z,{children:(0,i.jsxs)(o,{children:[(0,i.jsx)("div",{style:{marginRight:"1rem"},children:t}),(0,i.jsx)("div",{children:n})]})})}},7712:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5830),i=n(1664),o=n.n(i),c=(n(7294),n(2125)),l=n(5893),a=c.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),s=function(e){var t=e.children;return(0,l.jsx)(a,{children:t})},d=function(){return(0,l.jsx)("nav",{children:(0,l.jsxs)(r.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/",children:"Home"})}),(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:"Utils"}),(0,l.jsxs)(r.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/Prefetch",children:(0,l.jsx)("a",{children:"Prefetched State"})})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:"Components"}),(0,l.jsxs)(r.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/suspense",children:"Suspense"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/StateReducer",children:"State Reducer"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/PropCollection",children:"Props Collection"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/Factory",children:"Factory"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/ControlProps",children:"Control Props"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:"Hooks"}),(0,l.jsxs)(r.Ul,{children:[(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,l.jsx)(s,{children:(0,l.jsx)(o(),{href:"/ReducerHook",children:"Reducer Hook"})})]})]})]})})}},470:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e,t){return(0,r.useMemo)((function(){return e}),t)}},266:function(e,t,n){"use strict";n.r(t);var r=n(2640),i=n(9499),o=n(7294),c=n(3236),l=(n(5),n(3296)),a=n(7712),s=n(4663),d=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){t.type;var n=t.payload;return h(h({},e),n)}function p(e){e({type:"call api",payload:{data:"Calling API..."}}),setTimeout((function(){e({type:"call api",payload:{data:"Got data after 2sec."}})}),2e3)}var j=function(){var e=function(e,t){var n=(0,o.useReducer)(e,t),r=n[0],i=n[1];return[r,function(e){"function"===typeof e?e(i):i(e)}]}(f,{data:""}),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:JSON.stringify(n.data)}),(0,d.jsx)("button",{onClick:function(){return i(p)},children:"Call API"}),(0,d.jsx)("button",{onClick:function(){return i((function(e){e({type:"user-fetched",payload:{data:""}})}))},children:"Fetch User"})]})};t.default=function(){return(0,d.jsx)(l.Z,{navigation:(0,d.jsx)(a.Z,{}),content:(0,d.jsx)("div",{children:(0,d.jsx)("main",{children:(0,d.jsxs)("article",{children:[(0,d.jsx)("h1",{children:"Thunk Reducer"}),(0,d.jsx)(s.P,{children:"First I would like to point your attention to this code:"}),(0,d.jsx)(c.E,{children:'const reducer = (state, action) => state /* add logic here */;\nconst Component = () => {\n  const [state, dispatch] = useReducer(reducer, {\n    data: null,\n    error: null,\n    status: false /* indicate if data is being fetched */,\n  });\n\n  const handleClick = () => {\n    dispatch({\n      type: "start-fetching" /* show loading spinner or something */,\n    });\n    fetchData()\n      .then((data) => {\n        dispatch({ type: "data-fetched", data });\n      })\n      .catch((error) => {\n        dispatch({ type: "fetching-error", error });\n      });\n  };\n\n  return (\n    <div>\n      <div>{JSON.stringify(state)}</div>\n      <button onClick={handleClick}>Call API</button>\n    </div>\n  );\n};'}),(0,d.jsx)(s.P,{children:"The order of execution is as follows:"}),(0,d.jsxs)("ol",{children:[(0,d.jsx)("li",{children:"user clicks on the button"}),(0,d.jsx)("li",{children:"handleClick is called"}),(0,d.jsx)("li",{children:"dispatch is called"}),(0,d.jsx)("li",{children:"fetchData is called"}),(0,d.jsx)("li",{})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(j,{}),(0,d.jsx)(c.E,{children:'function callAPI(dispatch) {\n  dispatch({ type: "call api", payload: { data: "Calling API..." } });\n  setTimeout(() => {\n    const data = "Got data after 2sec.";\n    dispatch({ type: "call api", payload: { data } });\n  }, 2000);\n}\n\nfunction fetchUser(id) {\n  return (dispatch) => {\n    dispatch({ type: "user-fetched", payload: { data: "" } });\n  };\n}\n\nconst Thunk = () => {\n  const [state, dispatch] = useThunkReducer(reducer, { data: "" });\n\n  return (\n    <div>\n      <div>{JSON.stringify(state.data)}</div>\n      <button onClick={() => dispatch(callAPI /*pass function as action*/)}>\n        Call API\n      </button>\n      <button onClick={() => dispatch(fetchUser(1234))}>Fetch User</button>\n    </div>\n  );\n};'}),(0,d.jsx)(c.E,{children:'function useThunkReducer(reducer, initialState) {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  const thunkDispatch = (action) => {\n    if (typeof action === "function") {\n      action(dispatch);\n    } else {\n      dispatch(action);\n    }\n  };\n\n  return [state, thunkDispatch];\n}'})]})})})})}},3676:function(e,t,n){"use strict";n(7294);var r=n(939),i=n(5893),o={lineNumberColor:"#333333",lineNumberBgColor:"white",backgroundColor:"#f3f3f3",textColor:"#25282a",substringColor:"#6A8759",keywordColor:"#c95464",attributeColor:"#c95464",selectorAttributeColor:"#a71d5d",docTagColor:"#333333",nameColor:"#63a35c",builtInColor:"#333333",literalColor:"#0086b3",bulletColor:"#0086b3",codeColor:"#333333",additionColor:"#55a532",regexpColor:"#333333",symbolColor:"#0086b3",variableColor:"#df5000",templateVariableColor:"#df5000",linkColor:"#0366d6",selectorClassColor:"#795da3",typeColor:"#a71d5d",stringColor:"#6eb240",selectorIdColor:"#795da3",quoteColor:"#df5000",templateTagColor:"#a88609",deletionColor:"#bd2c00",titleColor:"#795da3",sectionColor:"#a88609",commentColor:"#969896",metaKeywordColor:"#333333",metaColor:"#969896",functionColor:"#675c98",numberColor:"#6897BB"};t.Z=function(e){var t=e.children;return(0,i.jsx)("div",{style:{margin:"1rem 0",fontSize:".9rem"},children:(0,i.jsx)(r.dn,{text:t,language:"jsx",showLineNumbers:!1,theme:o})})}},3236:function(e,t,n){"use strict";n.d(t,{E:function(){return r.Z}});var r=n(3676)},5:function(e,t,n){"use strict";n(7294);var r=n(2125),i=n(5893),o=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);t.Z=function(e){var t=e.children;return(0,i.jsx)(o,{children:t})}},4663:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});var r=n(9499),i=(n(7294),n(470)),o=n(5893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=function(e){var t=(0,i.Z)(l(l({},e.style),{},{lineHeight:"1.4",fontSize:"1.125rem",color:"#1a1a1a"}),[]);return(0,o.jsx)("p",l(l({},e),{},{style:t}))}},5830:function(e,t,n){"use strict";n.d(t,{Ul:function(){return l}});var r=n(9499),i=(n(7294),n(5893));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return(0,i.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))}},5207:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ThunkReducer",function(){return n(266)}])},2640:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(a){l=!0,i=a}finally{try{c||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[6083,9774,2888,179],(function(){return t=5207,e(e.s=t);var t}));var t=e.O();_N_E=t}]);