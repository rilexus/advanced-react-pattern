(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{94484:function(e,t,n){"use strict";var r=n(59499),i=n(4730),o=n(67294),s=n(4944),c=n(32125),a=n(85893),u=["stroke","fill","height","width"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.stroke,n=void 0===t?"currentColor":t,r=e.fill,o=void 0===r?"currentColor":r,s=e.height,c=void 0===s?"1em":s,l=e.width,d=void 0===l?"1em":l,f=(0,i.Z)(e,u);return(0,a.jsx)("svg",h(h({stroke:n,fill:o,height:c,width:d,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},f),{},{children:(0,a.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},f=c.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),p=function(e){var t=e.children,n=(0,o.useState)("open"),r=n[0],i=n[1];return(0,a.jsxs)(f,{style:{transform:"translate(".concat("open"===r?0:-350,"px)"),boxShadow:"".concat("open"===r?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,a.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:"open"===r?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat("open"===r?0:180,"deg)")},onClick:function(){i("open"===r?"close":"open")},children:(0,a.jsx)(d,{height:"1rem",width:"1rem"})}),t]})};t.Z=function(e){var t=e.navigation,n=e.content;return(0,a.jsx)("div",{children:(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("div",{children:n}),(0,a.jsx)(p,{children:t})]})})}},52528:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(59499),i=(n(67294),n(85893));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e){return(0,i.jsx)("ul",s({style:s({paddingLeft:"1rem"},e.style)},e))},a=n(32125),u=a.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;padding-bottom:0.4rem;"]),l=function(e){var t=e.children;return(0,i.jsx)(u,{children:t})},h=n(41664),d=n.n(h),f=a.ZP.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-wozd19-0"})(["cursor:pointer;font-size:1.1rem;text-decoration:none;color:blue;position:relative;",' &:after{content:" ";width:0.5rem;height:0.5rem;opacity:0;position:absolute;transform:translateY(-50%) rotate(-45deg);transform-origin:50% 50%;transition:transform 200ms,opacity 200ms;right:0;top:50%;border-right:2px solid blue;border-bottom:2px solid blue;}'],(function(e){return!1===e.animate?"":"&:hover {\n    &:after {\n      transform: translateX(1rem) translateY(-50%) rotate(-45deg);\n      opacity: 1;\n    }\n  }"})),p=function(e){var t=e.href,n=e.children;return(0,i.jsx)(d(),{href:t,children:(0,i.jsx)(f,{children:n})})},b=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/",children:"Home"})}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Utils"}),(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/Prefetch",children:"Prefetched State"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Components"}),(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/suspense",children:"Suspense"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/CompoundToggle",children:"Compound Components"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/StateReducer",children:"State Reducer"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/PropCollection",children:"Props Collection"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/RenderPropsToggle",children:"Render Props"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/Factory",children:"Factory"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/ControlProps",children:"Control Props"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/Decorator",children:"Decorator"})})]})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Hooks"}),(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/ReducerHook",children:"Reducer Hook"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/UndoState",children:"Undo State"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/FetchHook",children:"Fetch Hook"})})]})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("h4",{children:"Patterns"}),(0,i.jsx)(c,{children:(0,i.jsx)(l,{children:(0,i.jsx)(p,{href:"/mvc",children:"MVC"})})})]})]})})}},64930:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(17674),i=n(10748),o=n(45959),s=n(63553),c=n(37247),a=n(92777),u=n(82262),l=n(59499),h=n(67294),d=n(52528),f=n(94484),p=n(68556),b=n(84663),v=n(43236),m=n(85893),j=function(e){var t=e.justify,n=void 0===t?"start":t,r=e.children,i=e.direction,o=void 0===i?"row":i;return(0,m.jsx)("div",{style:{display:"flex",justifyContent:n,flexDirection:o},children:r})};function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.Z)(e);if(t){var i=(0,c.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var x=new(function(){function e(t){(0,a.Z)(this,e),(0,l.Z)(this,"state",null),(0,l.Z)(this,"subscribers",[]),this.state=t,this.setState=this.setState.bind(this)}return(0,u.Z)(e,[{key:"subscribe",value:function(e){this.subscribers.push(e)}},{key:"unsubscribe",value:function(){}},{key:"notify",value:function(){var e=this;this.subscribers.forEach((function(t){t(e.state)}))}},{key:"setState",value:function(e){this.state="function"===typeof e?e(this.state):e,this.notify()}},{key:"getState",value:function(){return this.state}}]),e}())(0),y=new(function(e){(0,o.Z)(n,e);var t=g(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,i.Z)(r)),r.decrement=r.decrement.bind((0,i.Z)(r)),r}return(0,u.Z)(n,[{key:"decrement",value:function(){this.setState((function(e){return e-1}))}},{key:"increment",value:function(){this.setState((function(e){return e+1}))}}]),n}(function(){function e(t){(0,a.Z)(this,e),(0,l.Z)(this,"state",null),this.state=t,this.setState=this.setState.bind(this),this.getState=this.getState.bind(this)}return(0,u.Z)(e,[{key:"subscribe",value:function(e){this.state.subscribe(e)}},{key:"unsubscribe",value:function(){this.state.unsubscribe()}},{key:"getState",value:function(){return this.state.getState()}},{key:"setState",value:function(e){this.state.setState(e)}}]),e}()))(x),w=(0,h.createContext)({getState:function(){return 0},subscribe:function(){},unsubscribe:function(){}}),S=w.Provider,O=function(){return function(e){var t=(0,h.useReducer)((function(){return{}}),{})[1],n=e.getState();return(0,h.useEffect)((function(){return e.subscribe(t),function(){e.unsubscribe(t)}}),[]),[n,e]}((0,h.useContext)(w))},P=function(){var e=O(),t=(0,r.Z)(e,2),n=t[0],i=t[1],o=i.increment,s=i.decrement;return(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{onClick:function(){return s()},children:"-"}),n,(0,m.jsx)("button",{onClick:function(){return o()},children:"+"})]})},C=function(){return(0,m.jsx)(S,{value:y,children:(0,m.jsx)(P,{})})},k=function(){return(0,m.jsx)(f.Z,{navigation:(0,m.jsx)(d.Z,{}),content:(0,m.jsxs)("main",{children:[(0,m.jsx)(p.Z,{children:"Model View Controller"}),(0,m.jsx)(b.P,{children:"Every React developer should be aware of one important thing. That is that React is a library for building user interfaces. That is its primary purpose and concern. It is not advisable to treat React as something different than that."}),(0,m.jsx)(b.P,{children:"Theoretically its is possible to write a complex application using only React and its concepts. To do that, we would need to locate the business logic in components and context providers. As someone who migrated multiple applications from one stack to another and modernized project by moving it from legacy libraries to React, I would strongly advice against doing that. Unless you do not not plan to maintain the application over multiple years, never mind, go ahead."}),(0,m.jsx)(b.P,{children:"Through the painful past experiences, I have learned that business logic should be located somewhere else other then in React components. React should be treated as the View in MCV Pattern. The Model (state), Controllers and the View should be separated from each other and communicate only through hard defined interfaces. The View acts as the representational layer and should be synchronized with the rest."}),(0,m.jsx)(b.P,{children:"By using the the Observer pattern it is reasonably easy to synchronize React with a Model or a Controller. Take a look at the following code."}),(0,m.jsx)(v.E,{highlight:[{start:42,end:42},{start:46,end:46},{start:52,end:52},{start:63,end:63}],children:'class State {\n  state = null;\n  subscribers = [];\n\n  constructor(initialState) {\n    this.state = initialState;\n    this.setState = this.setState.bind(this);\n  }\n\n  subscribe(subscriber) {\n    this.subscribers.push(subscriber);\n  }\n\n  unsubscribe() {\n    /**\n     * TODO: implement\n     */\n  }\n\n  notify() {\n    this.subscribers.forEach((subscriber) => {\n      subscriber(this.state);\n    });\n  }\n\n  setState(stateOrReducer) {\n    if (typeof stateOrReducer === "function") {\n      this.state = stateOrReducer(this.state);\n    } else {\n      this.state = stateOrReducer;\n    }\n    this.notify();\n  }\n\n  getState() {\n    return this.state;\n  }\n}\n\nconst counterState = new State(0);\n\nconst Counter = () => {\n  const [, rerender] = useReducer(() => ({}), {});\n  /**\n   * Get value from the counter state\n   */\n  const counterValue = counterState.getState();\n\n  useEffect(() => {\n    /**\n     * We will be notified on every state change\n     */\n    counterState.subscribe(rerender);\n    return () => {\n      counterState.unsubscribe(rerender);\n    };\n  }, []);\n\n  return (\n    <div>\n      <button onClick={() => counterState.setState((value) => value - 1)}>\n        -\n      </button>\n      {counterValue}\n      <button onClick={() => counterState.setState((value) => value + 1)}>\n        +\n      </button>\n    </div>\n  );\n};'}),(0,m.jsx)(b.P,{children:"Here is the working example."}),(0,m.jsx)(j,{justify:"center",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:"Counter"}),(0,m.jsx)(C,{})]})}),(0,m.jsx)(b.P,{children:"We can abstract the subscription in to a hook."}),(0,m.jsx)(v.E,{children:"const useSubscription = (source) => {\n  const [, rerender] = useReducer(() => ({}), {});\n  /**\n   * Get value from the counter state\n   */\n  const value = source.getState();\n\n  useEffect(() => {\n    /**\n     * We will be notified on every state change\n     */\n    source.subscribe(rerender);\n    return () => {\n      source.unsubscribe(rerender);\n    };\n  }, []);\n\n  return [value, source];\n};\n\nconst useCounter = () => useSubscription(counterState);\n\nconst Counter = () => {\n  const [counterValue, counter] = useCounter();\n\n  return (\n    <div>\n      <button onClick={() => counter.setState((value) => value - 1)}>-</button>\n      {counterValue}\n      <button onClick={() => counter.setState((value) => value + 1)}>+</button>\n    </div>\n  );\n};"}),(0,m.jsx)(b.P,{children:"The Model (state) is outside of React now. At the moment business logic is still written in to the component. Im talking about the increment and decrement buttons. We can create a dedicated controller class which is responsible for handling the logic."}),(0,m.jsx)(v.E,{highlight:[{start:33,end:35},{start:37,end:39},{start:42,end:43},{start:46,end:46}],children:"class Controller {\n  state = null;\n  constructor(stateInstance) {\n    this.state = stateInstance;\n    this.setState = this.setState.bind(this);\n    this.getState = this.getState.bind(this);\n  }\n\n  subscribe(subscriber) {\n    this.state.subscribe(subscriber);\n  }\n\n  unsubscribe() {\n    this.state.unsubscribe();\n  }\n\n  getState() {\n    return this.state.getState();\n  }\n\n  setState(stateOrReducer) {\n    this.state.setState(stateOrReducer);\n  }\n}\n\nclass CounterController extends Controller {\n  constructor(stateInstance) {\n    super(stateInstance);\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n  }\n\n  decrement() {\n    this.setState((value) => value - 1);\n  }\n\n  increment() {\n    this.setState((value) => value + 1);\n  }\n}\n\nconst counterController = new CounterController(counterState);\nconst useCounter = () => useSubscription(counterController);\n\nconst Counter = () => {\n  const [counterValue, { increment, decrement }] = useCounter();\n\n  return (\n    <div>\n      <button onClick={() => decrement()}>-</button>\n      {counterValue}\n      <button onClick={() => increment()}>+</button>\n    </div>\n  );\n};"}),(0,m.jsx)(b.P,{children:"I hide the model from the component altogether and delegate the handling of incrementing and decrementing of the state to the controller class. I would point you attention to the fact that the counterState is passed as dependency and is therefor interchangeable. The CounterController can accept all kinds of other dependencies. For example I could pass a service which saves the counter values to a server. Or I could pass other controllers, if needed."}),(0,m.jsx)(b.P,{children:"If we provide the controller though the context, we could pass a mocked version of it for testing purposes."}),(0,m.jsx)(v.E,{highlight:[{start:9,end:12},{start:28,end:30}],children:"const Context = createContext({\n  getState: () => 0,\n  subscribe: () => {},\n  unsubscribe: () => {},\n});\n\nconst CounterProvider = Context.Provider;\n\nconst useCounter = () => {\n  const counterControllerInstance = useContext(Context);\n  return useSubscription(counterControllerInstance);\n};\n\nconst Counter = () => {\n  const [counterValue, { increment, decrement }] = useCounter();\n\n  return (\n    <div>\n      <button onClick={() => decrement()}>-</button>\n      {counterValue}\n      <button onClick={() => increment()}>+</button>\n    </div>\n  );\n};\n\nconst App = () => {\n  return (\n    <CounterProvider value={counterController}>\n      <Counter />\n    </CounterProvider>\n  );\n};"}),(0,m.jsx)(b.P,{children:"Pretty power full pattern!"})]})})}},43236:function(e,t,n){"use strict";n.d(t,{E:function(){return r.Z}});var r=n(13301)},4944:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,i,o,s,c=n(71383),a=(n(67294),n(32125)),u=576,l=768,h=992,d=1200,f=n(85893),p=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],u,t)}(r||(r=(0,c.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],l,t)}(i||(i=(0,c.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],h,t)}(o||(o=(0,c.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],d,t)}(s||(s=(0,c.Z)(["\n    width: 40vw;\n  "])))),b=function(e){var t=e.children;return(0,f.jsx)(p,{children:t})}},68556:function(e,t,n){"use strict";var r=n(59499),i=(n(67294),n(32125)),o=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=(0,i.iv)(['font-size:48px;line-height:1.08349;font-weight:700;letter-spacing:-0.003em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),a=i.ZP.h1.withConfig({displayName:"H1__StyledH1",componentId:"sc-rl2x2k-0"})(["",";"],c);t.Z=function(e){return(0,o.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},84663:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var r=n(59499),i=(n(67294),n(32125)),o=n(85893);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=(0,i.iv)(['margin-bottom:1.4211em;font-size:1.125rem;color:#1a1a1a;line-height:1.4211;font-weight:400;letter-spacing:0.012em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),u=i.ZP.p.withConfig({displayName:"P__StyledP",componentId:"sc-f4vqmk-0"})(["",";"],a),l=function(e){return(0,o.jsx)(u,c(c({},e),{},{style:e.style}))}},76499:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mvc",function(){return n(64930)}])}},function(e){e.O(0,[784,774,888,179],(function(){return t=76499,e(e.s=t);var t}));var t=e.O();_N_E=t}]);