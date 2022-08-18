(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{3296:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});t(7294);var r=t(5),i=t(5893),o=function(e){var n=e.children,t=e.direction,r=void 0===t?"row":t;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:r},children:n})},c=function(e){var n=e.navigation,t=e.content;return(0,i.jsx)(r.Z,{children:(0,i.jsxs)(o,{children:[(0,i.jsx)("div",{style:{marginRight:"1rem"},children:n}),(0,i.jsx)("div",{children:t})]})})}},7712:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5830),i=t(1664),o=t.n(i),c=(t(7294),t(2125)),s=t(5893),l=c.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),a=function(e){var n=e.children;return(0,s.jsx)(l,{children:n})},u=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/",children:"Home"})}),(0,s.jsxs)(a,{children:[(0,s.jsx)("h4",{children:"Utils"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/Prefetch",children:(0,s.jsx)("a",{children:"Prefetched State"})})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("h4",{children:"Components"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/suspense",children:"Suspense"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/StateReducer",children:"State Reducer"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/PropCollection",children:"Props Collection"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/Factory",children:"Factory"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/ControlProps",children:"Control Props"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("h4",{children:"Hooks"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/UndoState",children:"Undo State"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/ThunkReducer",children:"Thunk Reducer"})})]})]})]})})}},3851:function(e,n,t){"use strict";t.r(n);var r=t(9499),i=t(7294),o=t(3236),c=(t(5),t(3296)),s=t(7712),l=t(5893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.reduceState,t=(0,i.useState)({on:!1}),r=t[0],o=t[1];return(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:function(){return e={on:!r.on},void o((function(t){return n?n(t,e):u(u({},t),e)}));var e},children:r.on?"On":"Off"})})},h=function(){var e=(0,i.useState)(0),n=e[0],t=e[1];return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:["Count: ",n," (max. 5)"]}),(0,l.jsx)(d,{reduceState:function(e,r){return 5===n?e:(t((function(e){return e+1})),u(u({},e),r))}})]})};n.default=function(){return(0,l.jsx)(c.Z,{navigation:(0,l.jsx)(s.Z,{}),content:(0,l.jsx)("div",{children:(0,l.jsx)("main",{children:(0,l.jsxs)("article",{children:[(0,l.jsx)("h1",{children:"State Reducer"}),(0,l.jsx)("div",{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.E,{children:"const Component = () => {\n  const [count, setCount] = useState(0);\n\n  const reduceState = (state, changes) => {\n    if (count === 5) {\n      return state;\n    }\n    setCount((c) => c + 1);\n    return { ...state, ...changes };\n  };\n\n  return (\n    <div>\n      <div>Count: {count} (max. 5)</div>\n      <Toggle reduceState={reduceState}></Toggle>\n    </div>\n  );\n};"}),(0,l.jsx)(o.E,{children:'const Toggle = ({ reduceState }) => {\n  const [state, setState] = useState({ on: false });\n\n  const setToState = (changes) => {\n    setState((oldState) => {\n      if (!reduceState) {\n        return { ...oldState, ...changes };\n      }\n\n      return reduceState(oldState, changes);\n    });\n  };\n\n  const handleClick = () => setToState({ on: !state.on });\n\n  return (\n    <div>\n      <button onClick={handleClick}>{state.on ? "On" : "Off"}</button>\n    </div>\n  );\n};'}),(0,l.jsx)(o.E,{children:'const useToggle = (\n  initial = false,\n  reducer = toggleReducer /* can be overwritten */\n) => {\n  const [on, dispatch] = useReducer(reducer, initial);\n\n  const toggle = () => dispatch({ type: "toggle" });\n  const reset = () => dispatch({ type: "reset" });\n\n  return { on, toggle, reset };\n};'})]})]})})})})}},3676:function(e,n,t){"use strict";var r=t(9499),i=t(7294),o=t(5286),c=t(1042),s=t(9622),l=t(5893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}o.Z.registerLanguage("xml",c.Z),o.Z.registerLanguage("javascript",s.Z);var h=function(e){function n(n,t,r){function i(){if(n.innerHTML=n.innerHTML.replace(/([ \S]*\n|[ \S]*$)/gm,(function(e){return'<div class="highlight-line">'+e+"</div>"})),void 0!==t){var e,r=parseInt(window.getComputedStyle(n).paddingLeft),i=parseInt(window.getComputedStyle(n).paddingRight),o=n.getElementsByClassName("highlight-line"),c=n.scrollWidth,s=u(t);try{for(s.s();!(e=s.n()).done;)for(var l=e.value,a=l.start;a<=l.end;++a)o[a].style.backgroundColor=l.color,o[a].style.minWidth=c-r-i+"px"}catch(d){s.e(d)}finally{s.f()}}}if(e.hasOwnProperty("initLineNumbersOnLoad")&&!1!==r)var o=100,c=setInterval((function(){var e=n.getElementsByTagName("table");if(0!=e.length){clearInterval(c);var r=e[0];r.style.width="100%";var s,l=u(r.getElementsByClassName("hljs-ln-numbers"));try{for(l.s();!(s=l.n()).done;)s.value.style.width="2em"}catch(j){l.e(j)}finally{l.f()}if(void 0!==t){var a,d=n.getElementsByTagName("tr"),h=u(t);try{for(h.s();!(a=h.n()).done;)for(var f=a.value,g=f.start;g<=f.end;++g)d[g].style.backgroundColor=f.color}catch(j){h.e(j)}finally{h.f()}}}else o--<0&&(clearInterval(c),i())}),100);else i()}e.highlightLinesAll=function(e){for(var t=0;t<e.length;++t){var r,i=u(e[t]);try{for(i.s();!(r=i.n()).done;){var o=r.value;--o.start,--o.end}}catch(c){i.e(c)}finally{i.f()}}!function(e){function t(){for(var t=document.getElementsByClassName("hljs"),r=0;r<t.length;++r)n(t[r],e[r])}"loading"!==document.readyState?t():window.addEventListener("DOMContentLoaded",(function(){t()}))}(e)},e.highlightLinesElement=function(e,t,r){var i,o=u(t);try{for(o.s();!(i=o.n()).done;){var c=i.value;--c.start,--c.end}}catch(s){o.e(s)}finally{o.f()}n(e,t,r)}};n.Z=function(e){var n=e.children,t=e.highlight,c=(0,i.useRef)(null);return(0,i.useEffect)((function(){o.Z.highlightElement(c.current),t&&(void 0===window.hljs&&h(o.Z),o.Z.highlightLinesElement(c.current,t.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({color:"#fcf7aa"},e)})),!1))}),[t]),(0,l.jsx)("pre",{ref:c,children:n})}},3236:function(e,n,t){"use strict";t.d(n,{E:function(){return r.Z}});var r=t(3676)},5:function(e,n,t){"use strict";t(7294);var r=t(2125),i=t(5893),o=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);n.Z=function(e){var n=e.children;return(0,i.jsx)(o,{children:n})}},5830:function(e,n,t){"use strict";t.d(n,{Ul:function(){return s}});var r=t(9499),i=(t(7294),t(5893));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return(0,i.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))}},6588:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/StateReducer",function(){return t(3851)}])}},function(e){e.O(0,[170,774,888,179],(function(){return n=6588,e(e.s=n);var n}));var n=e.O();_N_E=n}]);