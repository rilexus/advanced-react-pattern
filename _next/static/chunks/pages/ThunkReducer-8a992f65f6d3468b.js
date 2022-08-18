(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{3296:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});t(7294);var r=t(5),i=t(5893),c=function(n){var e=n.children,t=n.direction,r=void 0===t?"row":t;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:r},children:e})},o=function(n){var e=n.navigation,t=n.content;return(0,i.jsx)(r.Z,{children:(0,i.jsxs)(c,{children:[(0,i.jsx)("div",{style:{marginRight:"1rem"},children:e}),(0,i.jsx)("div",{children:t})]})})}},7712:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var r=t(5830),i=t(1664),c=t.n(i),o=(t(7294),t(2125)),a=t(5893),s=o.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),d=function(n){var e=n.children;return(0,a.jsx)(s,{children:e})},h=function(){return(0,a.jsx)("nav",{children:(0,a.jsxs)(r.Ul,{children:[(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/",children:"Home"})}),(0,a.jsxs)(d,{children:[(0,a.jsx)("h4",{children:"Utils"}),(0,a.jsxs)(r.Ul,{children:[(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/Prefetch",children:(0,a.jsx)("a",{children:"Prefetched State"})})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)("h4",{children:"Components"}),(0,a.jsxs)(r.Ul,{children:[(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/suspense",children:"Suspense"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/StateReducer",children:"State Reducer"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/PropCollection",children:"Props Collection"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/Factory",children:"Factory"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/ControlProps",children:"Control Props"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,a.jsxs)(d,{children:[(0,a.jsx)("h4",{children:"Hooks"}),(0,a.jsxs)(r.Ul,{children:[(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/UndoState",children:"Undo State"})}),(0,a.jsx)(d,{children:(0,a.jsx)(c(),{href:"/ThunkReducer",children:"Thunk Reducer"})})]})]})]})})}},470:function(n,e,t){"use strict";var r=t(7294);e.Z=function(n,e){return(0,r.useMemo)((function(){return n}),e)}},266:function(n,e,t){"use strict";t.r(e);t(7294);var r=t(3296),i=t(7712),c=t(4663),o=t(1664),a=t.n(o),s=t(4314),d=t(3236),h=t(5893);e.default=function(){return(0,h.jsx)(r.Z,{navigation:(0,h.jsx)(i.Z,{}),content:(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Thunk Reducer"}),(0,h.jsxs)(c.P,{children:['this article builds on top of the previous "Reducer Hook" article. If you do not know how the "useReducer" hook works, take a look'," ",(0,h.jsx)(a(),{href:(0,s.Z)("/ReducerHook"),children:(0,h.jsx)("a",{children:"here"})})]}),(0,h.jsx)(c.P,{children:"A typical useReducer implementation looks like this:"}),(0,h.jsx)(d.E,{children:'const reducer = (state, action) => {\n  if (action.type === "any-action") {\n    // TODO: handle action here\n    return state;\n  }\n  return state;\n};\n\nconst initialState = {};\n\nconst Reducer = () => {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  const handle = () => {\n    dispatch({ type: "any-action" });\n  };\n\n  return (\n    <div>\n      <button onClick={handle}>Click</button>\n    </div>\n  );\n};'}),(0,h.jsx)(c.P,{children:"Sometimes its necessary to dispatch multiple actions during the execution of one function. For example, if you would like to fetch data, display a loading message and handle an error during the process like so:"}),(0,h.jsx)(d.E,{highlight:[{start:27,end:33}],children:'const loadingReducer = (state, action) => {\n  if (action.type === "fetching") {\n    // TODO: handle action here\n    return state;\n  }\n  if (action.type === "fetched") {\n    // TODO: handle action here\n    return state;\n  }\n  if (action.type === "error") {\n    // TODO: handle action here\n    return state;\n  }\n  return state;\n};\n\nconst initialLoadingState = {\n  loading: false,\n  data: null,\n  error: null,\n};\n\nconst LoadingReducer = () => {\n  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n\n  const handle = () => {\n    dispatch({ type: "loading" });\n    fetch()\n      .then((data) => {\n        dispatch({ type: "fetched", data });\n      })\n      .catch((error) => {});\n    dispatch({ type: "error", error });\n  };\n\n  return (\n    <div>\n      <button onClick={handle}>Click</button>\n    </div>\n  );\n};'}),(0,h.jsx)(c.P,{children:"This works but its not very handy and messy to test. We can move the dispatch and fetch logic to a dedicated function like so:"}),(0,h.jsx)(d.E,{highlight:[{start:1,end:10},{start:16,end:16}],children:'const fetchAndDispatch = (dispatch) => {\n  dispatch({ type: "loading" });\n\n  fetch()\n    .then((data) => {\n      dispatch({ type: "fetched", data });\n    })\n    .catch((error) => {});\n  dispatch({ type: "error", error });\n};\n\nconst LoadingReducer = () => {\n  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n\n  const handle = () => {\n    fetchAndDispatch(dispatch);\n  };\n\n  return (\n    <div>\n      <button onClick={handle}>Click</button>\n    </div>\n  );\n};'}),(0,h.jsx)(c.P,{children:'This is definitely a better solution. We pass the dispatch function as an argument to the "fetchAndDispatch" function. Now the function is pretty good testable:'}),(0,h.jsx)(d.E,{children:'describe("fetchAndDispatch", () => {\n  it("should dispatch actions", () => {\n    fetch.mockImplementationOnce(() => Promise.reject("API is down"));\n    \n    const mockedDispatch = jest.fn();\n    fetchAndDispatch(mockedDispatch);\n    \n    expect(mockedDispatch).toBeCalledWith({type: \'fetching\'})\n    expect(mockedDispatch).toBeCalledWith({type: \'error\'})\n    // TODO: test the happy path\n  });\n});'}),(0,h.jsx)(c.P,{children:"but we do not have a good way to pass additional arguments to the function anymore."}),(0,h.jsx)(d.E,{highlight:[{start:1,end:1}],children:'const fetchAndDispatch = (dispatch, arg1, arg2, arg3 /* ... */) => {\n  dispatch({ type: "loading" });\n\n  fetch()\n    .then((data) => {\n      dispatch({ type: "fetched", data });\n    })\n    .catch((error) => {});\n  dispatch({ type: "error", error });\n};'}),(0,h.jsx)(c.P,{children:'What we can do is to return a function which accepts the "dispatch" function:'}),(0,h.jsx)(d.E,{highlight:[{start:2,end:11}],children:'const fetchAndDispatch = (arg1, arg2, arg3 /* ... */) => {\n  return (dispatch) => {\n    dispatch({ type: "loading" });\n\n    fetch()\n      .then((data) => {\n        dispatch({ type: "fetched", data });\n      })\n      .catch((error) => {});\n    dispatch({ type: "error", error });\n  };\n};'}),(0,h.jsx)(c.P,{children:"A concrete implementation of this pattern can be:"}),(0,h.jsx)(d.E,{children:'const fetchUser = ({ byId }) => {\n  return (dispatch) => {\n    dispatch({ type: "loading" });\n\n    fetch(`/user/${byId}`)\n      .then((data) => {\n        dispatch({ type: "fetched", data });\n      })\n      .catch((error) => {});\n    dispatch({ type: "error", error });\n  };\n};'}),(0,h.jsx)(c.P,{children:"And the component would look like this:"}),(0,h.jsx)(d.E,{highlight:[{start:5,end:5}],children:'const LoadingReducer = () => {\n  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n\n  const handle = () => {\n    fetchUser({ byId: "1234" })(dispatch);\n  };\n\n  return (\n    <div>\n      <button onClick={handle}>Click</button>\n    </div>\n  );\n};'}),(0,h.jsx)(c.P,{children:"If you think that it looks bad, I agree! I would prefer reverse the order of the calls like so:"}),(0,h.jsx)(d.E,{highlight:[{start:5,end:5}],children:'const LoadingReducer = () => {\n  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);\n\n  const handle = () => {\n    dispatch(fetchUser({ byId: "1234" }));\n  };\n\n  return (\n    <div>\n      <button onClick={handle}>Click</button>\n    </div>\n  );\n};'}),(0,h.jsx)(c.P,{children:'To make this possible, the dispatch function would need to accept a function as an argument. The native "dispatch" provided by "react" does not support that. To make something similar, we can extend on the native "dispatch":'}),(0,h.jsx)(d.E,{highlight:[{start:2,end:2},{start:8,end:12}],children:'const LoadingReducer = () => {\n  const [state, nativeDispatch] = useReducer(\n    loadingReducer,\n    initialLoadingState\n  );\n\n  const dispatch = (actionOrFunction) => {\n    if (typeof actionOrFunction === "function") {\n      actionOrFunction(nativeDispatch);\n    } else {\n      nativeDispatch(actionOrFunction);\n    }\n  };\n\n  const handle = () => {\n    dispatch(fetchUser({ byId: "1234" }));\n  };\n\n  return (\n    <div>\n      <button onClick={handle}>Click</button>\n    </div>\n  );\n};'}),(0,h.jsx)(c.P,{children:"Implementing the custom dispatch every time we need it, is time consuming and annoying. Therefore, I would suggest to move it to a custom hook:"}),(0,h.jsx)(d.E,{highlight:[{start:1,end:1},{start:4,end:4}],children:'import { useReducer as nativeUseReducerHook } from "react";\n\nconst useReducer = (reducer, initState, initializer) => {\n  const [state, nativeDispatch] = nativeUseReducerHook(\n    reducer,\n    initState,\n    initializer\n  );\n\n  const dispatch = (actionOrFunction) => {\n    if (typeof actionOrFunction === "function") {\n      actionOrFunction(nativeDispatch);\n    } else {\n      nativeDispatch(actionOrFunction);\n    }\n  };\n\n  return [state, dispatch];\n};\n\nexport { useReducer };'}),(0,h.jsx)(c.P,{children:'From now on, as long as we use the custom hook, we can pass functions to the "dispatch" function and dispatch actions asynchronously easily.'}),(0,h.jsxs)(c.P,{children:["If you would like to read more about this pattern, feel free to take a look"," ",(0,h.jsx)(a(),{href:"https://redux.js.org/usage/writing-logic-thunks",children:(0,h.jsx)("a",{children:"here"})}),"."]})]})})}},3676:function(n,e,t){"use strict";var r=t(9499),i=t(7294),c=t(5286),o=t(1042),a=t(9622),s=t(5893);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,a=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return o=n.done,n},e:function(n){a=!0,c=n},f:function(){try{o||null==t.return||t.return()}finally{if(a)throw c}}}}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}c.Z.registerLanguage("xml",o.Z),c.Z.registerLanguage("javascript",a.Z);var u=function(n){function e(e,t,r){function i(){if(e.innerHTML=e.innerHTML.replace(/([ \S]*\n|[ \S]*$)/gm,(function(n){return'<div class="highlight-line">'+n+"</div>"})),void 0!==t){var n,r=parseInt(window.getComputedStyle(e).paddingLeft),i=parseInt(window.getComputedStyle(e).paddingRight),c=e.getElementsByClassName("highlight-line"),o=e.scrollWidth,a=h(t);try{for(a.s();!(n=a.n()).done;)for(var s=n.value,d=s.start;d<=s.end;++d)c[d].style.backgroundColor=s.color,c[d].style.minWidth=o-r-i+"px"}catch(l){a.e(l)}finally{a.f()}}}if(n.hasOwnProperty("initLineNumbersOnLoad")&&!1!==r)var c=100,o=setInterval((function(){var n=e.getElementsByTagName("table");if(0!=n.length){clearInterval(o);var r=n[0];r.style.width="100%";var a,s=h(r.getElementsByClassName("hljs-ln-numbers"));try{for(s.s();!(a=s.n()).done;)a.value.style.width="2em"}catch(g){s.e(g)}finally{s.f()}if(void 0!==t){var d,l=e.getElementsByTagName("tr"),u=h(t);try{for(u.s();!(d=u.n()).done;)for(var f=d.value,p=f.start;p<=f.end;++p)l[p].style.backgroundColor=f.color}catch(g){u.e(g)}finally{u.f()}}}else c--<0&&(clearInterval(o),i())}),100);else i()}n.highlightLinesAll=function(n){for(var t=0;t<n.length;++t){var r,i=h(n[t]);try{for(i.s();!(r=i.n()).done;){var c=r.value;--c.start,--c.end}}catch(o){i.e(o)}finally{i.f()}}!function(n){function t(){for(var t=document.getElementsByClassName("hljs"),r=0;r<t.length;++r)e(t[r],n[r])}"loading"!==document.readyState?t():window.addEventListener("DOMContentLoaded",(function(){t()}))}(n)},n.highlightLinesElement=function(n,t,r){var i,c=h(t);try{for(c.s();!(i=c.n()).done;){var o=i.value;--o.start,--o.end}}catch(a){c.e(a)}finally{c.f()}e(n,t,r)}};e.Z=function(n){var e=n.children,t=n.highlight,o=(0,i.useRef)(null);return(0,i.useEffect)((function(){c.Z.highlightElement(o.current),t&&(void 0===window.hljs&&u(c.Z),c.Z.highlightLinesElement(o.current,t.map((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({color:"#fcf7aa"},n)})),!1))}),[t]),(0,s.jsx)("pre",{ref:o,children:e})}},3236:function(n,e,t){"use strict";t.d(e,{E:function(){return r.Z}});var r=t(3676)},5:function(n,e,t){"use strict";t(7294);var r=t(2125),i=t(5893),c=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);e.Z=function(n){var e=n.children;return(0,i.jsx)(c,{children:e})}},4663:function(n,e,t){"use strict";t.d(e,{P:function(){return s}});var r=t(9499),i=(t(7294),t(470)),c=t(5893);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=function(n){var e=(0,i.Z)(a(a({},n.style),{},{lineHeight:"1.4",fontSize:"1.125rem",color:"#1a1a1a"}),[]);return(0,c.jsx)("p",a(a({},n),{},{style:e}))}},5830:function(n,e,t){"use strict";t.d(e,{Ul:function(){return a}});var r=t(9499),i=(t(7294),t(5893));function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var a=function(n){return(0,i.jsx)("ul",o({style:o({paddingLeft:"1rem"},n.style)},n))}},4314:function(n,e){"use strict";e.Z=function(n){return"".concat("/advanced-react-pattern").concat(n)}},5207:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ThunkReducer",function(){return t(266)}])}},function(n){n.O(0,[170,774,888,179],(function(){return e=5207,n(n.s=e);var e}));var e=n.O();_N_E=e}]);