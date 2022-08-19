(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{3296:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(7294);var r=n(5),a=n(5893),o=function(t){var e=t.children,n=t.direction,r=void 0===n?"row":n;return(0,a.jsx)("div",{style:{display:"flex",flexDirection:r},children:e})},s=function(t){var e=t.navigation,n=t.content;return(0,a.jsx)(r.Z,{children:(0,a.jsxs)(o,{children:[(0,a.jsx)("div",{style:{marginRight:"1rem"},children:e}),(0,a.jsx)("div",{children:n})]})})}},7712:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5830),a=n(1664),o=n.n(a),s=(n(7294),n(2125)),i=n(5893),c=s.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),u=function(t){var e=t.children;return(0,i.jsx)(c,{children:e})},l=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/",children:"Home"})}),(0,i.jsxs)(u,{children:[(0,i.jsx)("h4",{children:"Utils"}),(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/Prefetch",children:(0,i.jsx)("a",{children:"Prefetched State"})})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,i.jsxs)(u,{children:[(0,i.jsx)("h4",{children:"Components"}),(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/suspense",children:"Suspense"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/StateReducer",children:"State Reducer"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/PropCollection",children:"Props Collection"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/Factory",children:"Factory"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/ControlProps",children:"Control Props"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,i.jsxs)(u,{children:[(0,i.jsx)("h4",{children:"Hooks"}),(0,i.jsxs)(r.Ul,{children:[(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/UndoState",children:"Undo State"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,i.jsx)(u,{children:(0,i.jsx)(o(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},470:function(t,e,n){"use strict";var r=n(7294);e.Z=function(t,e){return(0,r.useMemo)((function(){return t}),e)}},7183:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(7674),a=n(9499),o=n(4666);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=n(2937),c=n(4882);var u=n(2587);function l(t){return function(t){if(Array.isArray(t))return(0,u.Z)(t)}(t)||s(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(7294),h=n(3296),f=n(7712),p=n(8556),g=n(4663),v=n(3236),y=n(5893);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=function(t){var e=(0,d.useState)({past:[],initialState:t,current:t,future:[]}),n=e[0],r=e[1];return[n.current,function(t){r((function(e){var n,r=[];if(e.past.length<=10)r=[].concat(l(e.past),[e.current]);else{var a=(n=e.past,(0,o.Z)(n)||s(n)||(0,i.Z)(n)||(0,c.Z)()).slice(1);r=[].concat(l(a),[e.current])}return j(j({},e),{},{past:r,current:"function"===typeof t?t(e.current):t,future:[]})}))},{undo:function(){r((function(t){if(0===t.past.length)return t;var e=[].concat(l(t.future),[t.current]),n=l(t.past),r=n.pop();return j(j({},t),{},{past:n,current:r,future:e})}))},redo:function(){r((function(t){if(0===t.future.length)return t;var e=[].concat(l(t.past),[t.current]),n=l(t.future),r=n.pop();return j(j({},t),{},{past:e,current:r,future:n})}))},reset:function(){r((function(t){return j(j({},t),{},{past:[],current:n.initialState,future:[]})}))},canUndo:n.past.length>0,canRedo:n.future.length>0}]},m=function(){var t=w(""),e=(0,r.Z)(t,3),n=e[0],a=e[1],o=e[2],s=o.undo,i=o.redo,c=o.reset,u=o.canUndo,l=o.canRedo;return(0,y.jsxs)("div",{children:[(0,y.jsx)("input",{placeholder:"Type",type:"text",value:n,onChange:function(t){a(t.target.value)}}),(0,y.jsx)("button",{disabled:!u,onClick:s,children:"undo"}),(0,y.jsx)("button",{disabled:!l,onClick:i,children:"redo"}),(0,y.jsx)("button",{onClick:c,children:"reset"})]})},b=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)(p.Z,{children:"Undo State"}),(0,y.jsx)(g.P,{children:"Very common requirements in some what complex web applications is the \u201cundo\u201c functionality. The user wants to undo the recent changes made in the application by pressing a button. You'll know this behaviour when you press \u201ccommand-z\u201c on mac or \u201cstrg-z\u201c on windows."}),(0,y.jsx)(g.P,{children:"Example:"}),(0,y.jsx)(m,{}),(0,y.jsx)(g.P,{children:"Translating this requirements in to react would means setting the current state of a component to the previous states."}),(0,y.jsx)(g.P,{children:"First we would need a component any state:"}),(0,y.jsx)(v.E,{children:'const Component = () => {\n  const [state, setState] = useState("");\n\n  const handleChange = (e) => {\n    setState(e.target.value);\n  };\n\n  return (\n    <div>\n      <input type="text" onChange={handleChange} value={state} />\n    </div>\n  );\n};'}),(0,y.jsx)(g.P,{children:"When we set a new state, We would need to keep track of all the previous states:"}),(0,y.jsx)(v.E,{highlight:[{start:3,end:4},{start:10,end:14}],children:'const Component = () => {\n  const [state, setState] = useState({\n    current: "",\n    past: [],\n  });\n\n  const handleChange = (e) => {\n    setState((oldState) => {\n      const { value } = e.target;\n      return {\n        ...oldState,\n        past: [...oldState.past, oldState.current],\n        current: value,\n      };\n    });\n  };\n\n  return (\n    <div>\n      <input type="text" onChange={handleChange} value={state.current} />\n    </div>\n  );\n};'}),(0,y.jsx)(g.P,{children:"We save all the past states by adding the current value from the oldState to the past array and in the same time add the new value to the current."}),(0,y.jsx)(v.E,{highlight:[{start:12,end:13}],children:'const Component = () => {\n  const [state, setState] = useState({\n    current: "",\n    past: [],\n  });\n\n  const handleChange = (e) => {\n    setState((oldState) => {\n      const { value } = e.target;\n      return {\n        ...oldState,\n        past: [...oldState.past, oldState.current],\n        current: value,\n      };\n    });\n  };\n\n  return (\n    <div>\n      <input type="text" onChange={handleChange} value={state.current} />\n    </div>\n  );\n};'}),(0,y.jsx)(g.P,{children:"Now to undo the state change, we would need to take the last value from the past and save it in the current."}),(0,y.jsx)(v.E,{highlight:[{start:23,end:24},{start:28,end:29}],children:'const Component = () => {\n  const [state, setState] = useState({\n    current: "",\n    past: [],\n  });\n\n  const handleChange = (e) => {\n    setState((oldState) => {\n      const { value } = e.target;\n      return {\n        ...oldState,\n        past: [...oldState.past, oldState.current],\n        current: value,\n      };\n    });\n  };\n\n  const undo = () => {\n    setState((oldState) => {\n      if (oldState.past.length === 0) {\n        return oldState;\n      }\n      const newPast = [...oldState.past];\n      const pastValue = newPast.pop();\n\n      return {\n        ...oldState,\n        past: newPast,\n        current: pastValue,\n      };\n    });\n  };\n\n  return (\n    <div>\n      <input type="text" onChange={handleChange} value={state.current} />\n      <button onClick={undo}>undo</button>\n    </div>\n  );\n};'}),(0,y.jsx)(g.P,{children:"First we make sure that we have values in the past. If we do not, we return the old state. If we have past states, we break the reference to the old past array, pop the last value and save everything to the new state."}),(0,y.jsx)(g.P,{children:"While this works, we have an issue! The past array could grow until we run out of memory. We can prevent this from happening, by limiting the length of the past array. If the array grows beyond a certain limit, we remove values from the beginning of the array, effectively limiting the amount of past states."}),(0,y.jsx)(v.E,{highlight:[{start:11,end:17}],children:'const Component = () => {\n  const [state, setState] = useState({\n    current: "",\n    past: [],\n  });\n\n  const handleChange = (e) => {\n    setState((oldState) => {\n      const { value } = e.target;\n\n      let newPast = [];\n      if (oldState.past.length <= 10) {\n        newPast = [...oldState.past];\n      } else {\n        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;\n        newPast = [...rest];\n      }\n\n      return {\n        ...oldState,\n        past: [...newPast, oldState.current],\n        current: value,\n      };\n    });\n  };\n\n  const undo = () => {\n    setState((oldState) => {\n      if (oldState.past.length === 0) {\n        return oldState;\n      }\n      const newPast = [...oldState.past];\n      const pastValue = newPast.pop();\n\n      return {\n        ...oldState,\n        past: newPast,\n        current: pastValue,\n      };\n    });\n  };\n  \n  return (\n    <div>\n      <input type="text" onChange={handleChange} value={state.current} />\n      <button onClick={undo}>undo</button>\n    </div>\n  );\n};'}),(0,y.jsx)(g.P,{children:"If we have more then 10 past states, we remove the first (the oldest) state, preventing the past from growing."}),(0,y.jsx)(g.P,{children:"The current implementation works. Lets make this code reusable and move it in to a dedicated hook."}),(0,y.jsx)(v.E,{highlight:[{start:48,end:48}],children:'const useUndo = (initialState) => {\n  const [state, _setState] = useState({\n    current: initialState,\n    past: [],\n  });\n\n  const undo = () => {\n    _setState((oldState) => {\n      if (oldState.past.length === 0) {\n        return oldState;\n      }\n      const newPast = [...oldState.past];\n      const pastValue = newPast.pop();\n\n      return {\n        ...oldState,\n        past: newPast,\n        current: pastValue,\n      };\n    });\n  };\n\n  const setState = (newState) => {\n    _setState((oldState) => {\n      const value =\n        typeof newState === "function" ? newState(oldState) : newState;\n\n      let newPast = [];\n      if (oldState.past.length <= 10) {\n        newPast = [...oldState.past];\n      } else {\n        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;\n        newPast = [...rest];\n      }\n\n      return {\n        ...oldState,\n        past: [...newPast, oldState.current],\n        current: value,\n      };\n    });\n  };\n\n  return [state.current, { setState, undo }];\n};\n\nconst Component = () => {\n  const [state, { setState, undo }] = useUndo("");\n\n  const handleChange = (e) => {\n    setState(e.target.value);\n  };\n\n  return (\n    <div>\n      <input type="text" onChange={handleChange} value={state} />\n      <button onClick={undo}>undo</button>\n    </div>\n  );\n};'}),(0,y.jsx)(g.P,{children:"It would be great to redo changes again. If the user undoes changes, goes in to the past, it would be great to go in to the future again to the last changes. I would encourage you to implement this feature yourself. If youre interested in seeing the end result, feel free to open the drop down."}),(0,y.jsxs)("details",{children:[(0,y.jsx)("summary",{style:{cursor:"pointer"},children:"End result"}),(0,y.jsx)(v.E,{children:'const useUndo = (initialState) => {\n  const [state, _setState] = useState({\n    past: [],\n    initialState: initialState,\n    current: initialState,\n    future: [],\n  });\n\n  const setState = (newState) => {\n    _setState((oldState) => {\n      let newPast = [];\n      if (oldState.past.length <= 10) {\n        newPast = [...oldState.past, oldState.current];\n      } else {\n        const [, /*remove first: the oldest element*/ ...rest] = oldState.past;\n        newPast = [...rest, oldState.current];\n      }\n      return {\n        ...oldState,\n        past: newPast,\n        current:\n          typeof newState === "function"\n            ? newState(oldState.current)\n            : newState,\n        future: [],\n      };\n    });\n  };\n\n  const undo = () => {\n    _setState((oldState) => {\n      if (oldState.past.length === 0) {\n        return oldState;\n      }\n      const newFuture = [...oldState.future, oldState.current];\n\n      let newPast = [...oldState.past];\n      const newState = newPast.pop();\n\n      return {\n        ...oldState,\n        past: newPast,\n        current: newState,\n        future: newFuture,\n      };\n    });\n  };\n\n  const redo = () => {\n    _setState((oldState) => {\n      if (oldState.future.length === 0) {\n        return oldState;\n      }\n      const newPast = [...oldState.past, oldState.current];\n\n      const newFuture = [...oldState.future];\n      const newState = newFuture.pop();\n\n      return {\n        ...oldState,\n        past: newPast,\n        current: newState,\n        future: newFuture,\n      };\n    });\n  };\n\n  const reset = () => {\n    _setState((oldState) => {\n      return {\n        ...oldState,\n        past: [],\n        current: state.initialState,\n        future: [],\n      };\n    });\n  };\n\n  return [\n    state.current,\n    {\n      setState,\n      undo,\n      redo,\n      reset,\n      canUndo: state.past.length > 0,\n      canRedo: state.future.length > 0,\n    },\n  ];\n};'})]})]})},x=function(){return(0,y.jsx)(h.Z,{navigation:(0,y.jsx)(f.Z,{}),content:(0,y.jsx)(b,{})})}},3676:function(t,e,n){"use strict";var r=n(9499),a=n(7294),o=n(5286),s=n(1042),i=n(9622),c=n(5893);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){i=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}o.Z.registerLanguage("xml",s.Z),o.Z.registerLanguage("javascript",i.Z);var h=function(t){function e(e,n,r){function a(){if(e.innerHTML=e.innerHTML.replace(/([ \S]*\n|[ \S]*$)/gm,(function(t){return'<div class="highlight-line">'+t+"</div>"})),void 0!==n){var t,r=parseInt(window.getComputedStyle(e).paddingLeft),a=parseInt(window.getComputedStyle(e).paddingRight),o=e.getElementsByClassName("highlight-line"),s=e.scrollWidth,i=l(n);try{for(i.s();!(t=i.n()).done;)for(var c=t.value,u=c.start;u<=c.end;++u)o[u].style.backgroundColor=c.color,o[u].style.minWidth=s-r-a+"px"}catch(d){i.e(d)}finally{i.f()}}}if(t.hasOwnProperty("initLineNumbersOnLoad")&&!1!==r)var o=100,s=setInterval((function(){var t=e.getElementsByTagName("table");if(0!=t.length){clearInterval(s);var r=t[0];r.style.width="100%";var i,c=l(r.getElementsByClassName("hljs-ln-numbers"));try{for(c.s();!(i=c.n()).done;)i.value.style.width="2em"}catch(g){c.e(g)}finally{c.f()}if(void 0!==n){var u,d=e.getElementsByTagName("tr"),h=l(n);try{for(h.s();!(u=h.n()).done;)for(var f=u.value,p=f.start;p<=f.end;++p)d[p].style.backgroundColor=f.color}catch(g){h.e(g)}finally{h.f()}}}else o--<0&&(clearInterval(s),a())}),100);else a()}t.highlightLinesAll=function(t){for(var n=0;n<t.length;++n){var r,a=l(t[n]);try{for(a.s();!(r=a.n()).done;){var o=r.value;--o.start,--o.end}}catch(s){a.e(s)}finally{a.f()}}!function(t){function n(){for(var n=document.getElementsByClassName("hljs"),r=0;r<n.length;++r)e(n[r],t[r])}"loading"!==document.readyState?n():window.addEventListener("DOMContentLoaded",(function(){n()}))}(t)},t.highlightLinesElement=function(t,n,r){var a,o=l(n);try{for(o.s();!(a=o.n()).done;){var s=a.value;--s.start,--s.end}}catch(i){o.e(i)}finally{o.f()}e(t,n,r)}};e.Z=function(t){var e=t.children,n=t.highlight,s=(0,a.useRef)(null);return(0,a.useEffect)((function(){o.Z.highlightElement(s.current),n&&(void 0===window.hljs&&h(o.Z),o.Z.highlightLinesElement(s.current,n.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({color:"#fcf7aa"},t)})),!1))}),[n]),(0,c.jsx)("pre",{ref:s,children:e})}},3236:function(t,e,n){"use strict";n.d(e,{E:function(){return r.Z}});var r=n(3676)},5:function(t,e,n){"use strict";n(7294);var r=n(2125),a=n(5893),o=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);e.Z=function(t){var e=t.children;return(0,a.jsx)(o,{children:e})}},8556:function(t,e,n){"use strict";var r=n(9499),a=(n(7294),n(470)),o=n(5893);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.Z=function(t){var e=(0,a.Z)(i({fontSize:"2rem"},t.style),[t.style]);return(0,o.jsx)("h1",i(i({},t),{},{style:e}))}},4663:function(t,e,n){"use strict";n.d(e,{P:function(){return c}});var r=n(9499),a=(n(7294),n(470)),o=n(5893);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=function(t){var e=(0,a.Z)(i(i({},t.style),{},{lineHeight:"1.4",fontSize:"1.125rem",color:"#1a1a1a"}),[]);return(0,o.jsx)("p",i(i({},t),{},{style:e}))}},5830:function(t,e,n){"use strict";n.d(e,{Ul:function(){return i}});var r=n(9499),a=(n(7294),n(5893));function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var i=function(t){return(0,a.jsx)("ul",s({style:s({paddingLeft:"1rem"},t.style)},t))}},9771:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/UndoState",function(){return n(7183)}])},2587:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},4666:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,{Z:function(){return r}})},4882:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,{Z:function(){return r}})},7674:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(4666);var a=n(2937),o=n(4882);function s(t,e){return(0,r.Z)(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],s=!0,i=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);s=!0);}catch(c){i=!0,a=c}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,e)||(0,a.Z)(t,e)||(0,o.Z)()}},2937:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(2587);function a(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}},function(t){t.O(0,[170,774,888,179],(function(){return e=9771,t(t.s=e);var e}));var e=t.O();_N_E=e}]);