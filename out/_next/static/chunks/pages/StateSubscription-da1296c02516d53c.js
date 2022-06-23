(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8430],{3296:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});t(7294);var r=t(5),o=t(5893),i=function(n){var e=n.children,t=n.direction,r=void 0===t?"row":t;return(0,o.jsx)("div",{style:{display:"flex",flexDirection:r},children:e})},s=function(n){var e=n.navigation,t=n.content;return(0,o.jsx)(r.Z,{children:(0,o.jsxs)(i,{children:[(0,o.jsx)("div",{style:{marginRight:"1rem"},children:e}),(0,o.jsx)("div",{children:t})]})})}},7712:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(5830),o=t(1664),i=t.n(o),s=(t(7294),t(2125)),c=t(5893),u=s.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),l=function(n){var e=n.children;return(0,c.jsx)(u,{children:e})},a=function(){return(0,c.jsx)("nav",{children:(0,c.jsxs)(r.Ul,{children:[(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/",children:"Home"})}),(0,c.jsxs)(l,{children:[(0,c.jsx)("h4",{children:"Utils"}),(0,c.jsxs)(r.Ul,{children:[(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/Prefetch",children:(0,c.jsx)("a",{children:"Prefetched State"})})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,c.jsxs)(l,{children:[(0,c.jsx)("h4",{children:"Components"}),(0,c.jsxs)(r.Ul,{children:[(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/suspense",children:"Suspense"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/StateReducer",children:"State Reducer"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/PropCollection",children:"Props Collection"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/Factory",children:"Factory"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/ControlProps",children:"Control Props"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,c.jsxs)(l,{children:[(0,c.jsx)("h4",{children:"Hooks"}),(0,c.jsxs)(r.Ul,{children:[(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,c.jsx)(l,{children:(0,c.jsx)(i(),{href:"/ReducerHook",children:"Reducer Hook"})})]})]})]})})}},2314:function(n,e,t){"use strict";t.r(e);var r=t(5959),o=t(2179),i=t(7247),s=t(2777),c=t(2262),u=t(9499),l=t(7294),a=t(3236),d=(t(5),t(3296)),f=t(7712),h=t(5893);function b(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=(0,i.Z)(n);if(e){var s=(0,i.Z)(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return(0,o.Z)(this,t)}}var p=new(function(n){(0,r.Z)(t,n);var e=b(t);function t(){return(0,s.Z)(this,t),e.call(this,0)}return(0,c.Z)(t,[{key:"add",value:function(n){this.setState(this.getState()+n)}}]),t}(function(){function n(e){(0,s.Z)(this,n),(0,u.Z)(this,"subscribers",[]),this.state=e}return(0,c.Z)(n,[{key:"subscribe",value:function(n){"function"===typeof n&&this.subscribers.push(n)}},{key:"unsubscribe",value:function(n){this.subscribers=this.subscribers.filter((function(e){return e!==n}))}},{key:"notify",value:function(){var n=this;this.subscribers.forEach((function(e){e(n.state)}))}},{key:"setState",value:function(n){this.state=n,this.notify()}},{key:"getState",value:function(){return this.state}}]),n}())),j=function(){var n=p.getState(),e=(0,l.useState)(!0)[1];return(0,l.useEffect)((function(){var n=function(){e((function(n){return!n}))};return p.subscribe(n),function(){p.unsubscribe(n)}}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:n}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:function(){return p.add(1)},children:"Add"})})]})};e.default=function(){return(0,h.jsx)(d.Z,{navigation:(0,h.jsx)(f.Z,{}),content:(0,h.jsx)("div",{children:(0,h.jsx)("main",{children:(0,h.jsxs)("article",{children:[(0,h.jsx)("h1",{children:"State Subscription"}),(0,h.jsx)(j,{}),(0,h.jsx)(a.E,{children:"const Component = () => {\n  const count = controller.getState();\n  const [, setFlag] = useState(true);\n\n  useEffect(() => {\n    const handler = () => {\n      setFlag((toggle) => !toggle);\n    };\n    controller.subscribe(handler);\n    return () => {\n      controller.unsubscribe(handler);\n    };\n  }, []);\n  return (\n    <div>\n      <div>{count}</div>\n      <div>\n        <button onClick={() => controller.add(1)}>Add</button>\n      </div>\n    </div>\n  );\n};"}),(0,h.jsx)(a.E,{children:'class State {\n  subscribers = [];\n  constructor(state) {\n    this.state = state;\n  }\n\n  subscribe(subscriber) {\n    if (typeof subscriber !== "function") return;\n    this.subscribers.push(subscriber);\n  }\n\n  unsubscribe(subscriber) {\n    this.subscribers = this.subscribers.filter((s) => s !== subscriber);\n  }\n\n  notify() {\n    this.subscribers.forEach((subscriber) => {\n      subscriber(this.state);\n    });\n  }\n\n  setState(newState) {\n    this.state = newState;\n    this.notify();\n  }\n\n  getState() {\n    return this.state;\n  }\n}\n\n\n\nclass Controller extends State {\n  constructor() {\n    super(0);\n  }\n\n  add(value) {\n    this.setState(this.getState() + value);\n  }\n}'}),(0,h.jsx)(a.E,{children:"const useCount = () => {\n  const count = controller.getState();\n  const [, setFlag] = useState(true);\n\n  useEffect(() => {\n    const handler = () => {\n      setFlag((toggle) => !toggle);\n    };\n    controller.subscribe(handler);\n    return () => {\n      controller.unsubscribe(handler);\n    };\n  }, []);\n  \n  return [count, controller.add];\n}"}),(0,h.jsx)(a.E,{children:"const Component = () => {\n  const [count, add] = useCount();\n  \n  return (\n    <div>\n      <div>{count}</div>\n      <div>\n        <button onClick={() => add(1)}>Add</button>\n      </div>\n    </div>\n  );\n};"})]})})})})}},3676:function(n,e,t){"use strict";t(7294);var r=t(939),o=t(5893),i={lineNumberColor:"#333333",lineNumberBgColor:"white",backgroundColor:"#f3f3f3",textColor:"#25282a",substringColor:"#6A8759",keywordColor:"#c95464",attributeColor:"#c95464",selectorAttributeColor:"#a71d5d",docTagColor:"#333333",nameColor:"#63a35c",builtInColor:"#333333",literalColor:"#0086b3",bulletColor:"#0086b3",codeColor:"#333333",additionColor:"#55a532",regexpColor:"#333333",symbolColor:"#0086b3",variableColor:"#df5000",templateVariableColor:"#df5000",linkColor:"#0366d6",selectorClassColor:"#795da3",typeColor:"#a71d5d",stringColor:"#6eb240",selectorIdColor:"#795da3",quoteColor:"#df5000",templateTagColor:"#a88609",deletionColor:"#bd2c00",titleColor:"#795da3",sectionColor:"#a88609",commentColor:"#969896",metaKeywordColor:"#333333",metaColor:"#969896",functionColor:"#675c98",numberColor:"#6897BB"};e.Z=function(n){var e=n.children;return(0,o.jsx)("div",{style:{margin:"1rem 0",fontSize:".9rem"},children:(0,o.jsx)(r.dn,{text:e,language:"jsx",showLineNumbers:!1,theme:i})})}},3236:function(n,e,t){"use strict";t.d(e,{E:function(){return r.Z}});var r=t(3676)},5:function(n,e,t){"use strict";t(7294);var r=t(2125),o=t(5893),i=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);e.Z=function(n){var e=n.children;return(0,o.jsx)(i,{children:e})}},5830:function(n,e,t){"use strict";t.d(e,{Ul:function(){return c}});var r=t(9499),o=(t(7294),t(5893));function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var c=function(n){return(0,o.jsx)("ul",s({style:s({paddingLeft:"1rem"},n.style)},n))}},7633:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/StateSubscription",function(){return t(2314)}])},2777:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{Z:function(){return r}})},2262:function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}t.d(e,{Z:function(){return o}})},7247:function(n,e,t){"use strict";function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},5959:function(n,e,t){"use strict";function r(n,e){return r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},r(n,e)}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}t.d(e,{Z:function(){return o}})},2179:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(4027);function o(n,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}}},function(n){n.O(0,[6083,9774,2888,179],(function(){return e=7633,n(n.s=e);var e}));var e=n.O();_N_E=e}]);