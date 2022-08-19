(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3296:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});t(7294);var r=t(5),i=t(5893),o=function(n){var e=n.children,t=n.direction,r=void 0===t?"row":t;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:r},children:e})},c=function(n){var e=n.navigation,t=n.content;return(0,i.jsx)(r.Z,{children:(0,i.jsxs)(o,{children:[(0,i.jsx)("div",{style:{marginRight:"1rem"},children:e}),(0,i.jsx)("div",{children:t})]})})}},7712:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5830),i=t(1664),o=t.n(i),c=(t(7294),t(2125)),s=t(5893),u=c.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),a=function(n){var e=n.children;return(0,s.jsx)(u,{children:e})},l=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/",children:"Home"})}),(0,s.jsxs)(a,{children:[(0,s.jsx)("h4",{children:"Utils"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/Prefetch",children:(0,s.jsx)("a",{children:"Prefetched State"})})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("h4",{children:"Components"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/suspense",children:"Suspense"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/StateReducer",children:"State Reducer"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/PropCollection",children:"Props Collection"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/Factory",children:"Factory"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/ControlProps",children:"Control Props"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("h4",{children:"Hooks"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/UndoState",children:"Undo State"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,s.jsx)(a,{children:(0,s.jsx)(o(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},1871:function(n,e,t){"use strict";t.r(e);var r,i=t(7674),o=t(9499),c=t(7294),s=t(3676),u=t(3296),a=t(7712),l=t(5893);var h=function(){return(0,l.jsx)("input",{type:"number"})},d=(r={},(0,o.Z)(r,"input",(function(){return(0,l.jsx)("input",{type:"checkbox"})})),(0,o.Z)(r,"checkbox",(function(){return(0,l.jsx)("input",{type:"checkbox"})})),(0,o.Z)(r,"number",h),{div:!0,span:!0,li:!0}),f=function(n){return n in d?c.createElement(n):null};Object.entries(d).forEach((function(n){var e=(0,i.Z)(n,1)[0];f[e]=function(n){return c.createElement(e,n)}}));f.div({prop:1});e.default=function(){return(0,l.jsx)(u.Z,{navigation:(0,l.jsx)(a.Z,{}),content:(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Factory"}),(0,l.jsx)("a",{href:"https://github.com/rilexus/advanced-react-pattern/blob/master/src/components/factory/Factory.jsx",children:"GitHub: Components Factory"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Switch"}),(0,l.jsx)(s.Z,{children:'const TextInput = () => {\n  return <input type={"text"} />;\n};\n\nconst NumberInput = () => {\n  return <input type={"numbe"} />;\n};\n\nconst CheckboxInput = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst Input = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst Checkbox = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst InputFactory = ({ type }) => {\n  switch (type) {\n    case "text":\n      return <TextInput />;\n    case "number":\n      return <NumberInput />;\n    case "checkbox":\n      return <CheckboxInput />;\n    default:\n      return null;\n  }\n};'})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Dynamic"}),(0,l.jsx)(s.Z,{children:'const components = {\n  ["input"]: Input,\n  ["checkbox"]: Checkbox,\n  ["number"]: NumberInput,\n};\n\nconst DynamicComponent = ({ name, withProps }) => {\n  if (!!components[name]) {\n    const Component = components[name];\n    return <Component {...withProps} />;\n  }\n  return null;\n};'})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Static"}),(0,l.jsx)(s.Z,{children:"const SupportedHTMLTags = {\n  div: true,\n  span: true,\n  li: true,\n};\n\nconst createComponent = (tag) => {\n  return tag in SupportedHTMLTags ? React.createElement(tag) : null;\n};\n\n(function () {\n  Object.entries(SupportedHTMLTags).forEach(([tag]) => {\n    createComponent[tag] = (props) => React.createElement(tag, props);\n  });\n})();\n\n// const DivComponent = createComponent('div')\nconst DivComponent = createComponent.div({ prop: 1 });\nconst Component = () => {\n  return <DivComponent />;\n};"})]})]})})}},3676:function(n,e,t){"use strict";var r=t(9499),i=t(7294),o=t(5286),c=t(1042),s=t(9622),u=t(5893);function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){s=!0,o=n},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw o}}}}function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}o.Z.registerLanguage("xml",c.Z),o.Z.registerLanguage("javascript",s.Z);var d=function(n){function e(e,t,r){function i(){if(e.innerHTML=e.innerHTML.replace(/([ \S]*\n|[ \S]*$)/gm,(function(n){return'<div class="highlight-line">'+n+"</div>"})),void 0!==t){var n,r=parseInt(window.getComputedStyle(e).paddingLeft),i=parseInt(window.getComputedStyle(e).paddingRight),o=e.getElementsByClassName("highlight-line"),c=e.scrollWidth,s=l(t);try{for(s.s();!(n=s.n()).done;)for(var u=n.value,a=u.start;a<=u.end;++a)o[a].style.backgroundColor=u.color,o[a].style.minWidth=c-r-i+"px"}catch(h){s.e(h)}finally{s.f()}}}if(n.hasOwnProperty("initLineNumbersOnLoad")&&!1!==r)var o=100,c=setInterval((function(){var n=e.getElementsByTagName("table");if(0!=n.length){clearInterval(c);var r=n[0];r.style.width="100%";var s,u=l(r.getElementsByClassName("hljs-ln-numbers"));try{for(u.s();!(s=u.n()).done;)s.value.style.width="2em"}catch(y){u.e(y)}finally{u.f()}if(void 0!==t){var a,h=e.getElementsByTagName("tr"),d=l(t);try{for(d.s();!(a=d.n()).done;)for(var f=a.value,p=f.start;p<=f.end;++p)h[p].style.backgroundColor=f.color}catch(y){d.e(y)}finally{d.f()}}}else o--<0&&(clearInterval(c),i())}),100);else i()}n.highlightLinesAll=function(n){for(var t=0;t<n.length;++t){var r,i=l(n[t]);try{for(i.s();!(r=i.n()).done;){var o=r.value;--o.start,--o.end}}catch(c){i.e(c)}finally{i.f()}}!function(n){function t(){for(var t=document.getElementsByClassName("hljs"),r=0;r<t.length;++r)e(t[r],n[r])}"loading"!==document.readyState?t():window.addEventListener("DOMContentLoaded",(function(){t()}))}(n)},n.highlightLinesElement=function(n,t,r){var i,o=l(t);try{for(o.s();!(i=o.n()).done;){var c=i.value;--c.start,--c.end}}catch(s){o.e(s)}finally{o.f()}e(n,t,r)}};e.Z=function(n){var e=n.children,t=n.highlight,c=(0,i.useRef)(null);return(0,i.useEffect)((function(){o.Z.highlightElement(c.current),t&&(void 0===window.hljs&&d(o.Z),o.Z.highlightLinesElement(c.current,t.map((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({color:"#fcf7aa"},n)})),!1))}),[t]),(0,u.jsx)("pre",{ref:c,children:e})}},5:function(n,e,t){"use strict";t(7294);var r=t(2125),i=t(5893),o=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);e.Z=function(n){var e=n.children;return(0,i.jsx)(o,{children:e})}},5830:function(n,e,t){"use strict";t.d(e,{Ul:function(){return s}});var r=t(9499),i=(t(7294),t(5893));function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=function(n){return(0,i.jsx)("ul",c({style:c({paddingLeft:"1rem"},n.style)},n))}},7123:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Factory",function(){return t(1871)}])},2587:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,{Z:function(){return r}})},4666:function(n,e,t){"use strict";function r(n){if(Array.isArray(n))return n}t.d(e,{Z:function(){return r}})},4882:function(n,e,t){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(e,{Z:function(){return r}})},7674:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var r=t(4666);var i=t(2937),o=t(4882);function c(n,e){return(0,r.Z)(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,s=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(u){s=!0,i=u}finally{try{c||null==t.return||t.return()}finally{if(s)throw i}}return o}}(n,e)||(0,i.Z)(n,e)||(0,o.Z)()}},2937:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(2587);function i(n,e){if(n){if("string"===typeof n)return(0,r.Z)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(n,e):void 0}}}},function(n){n.O(0,[170,774,888,179],(function(){return e=7123,n(n.s=e);var e}));var e=n.O();_N_E=e}]);