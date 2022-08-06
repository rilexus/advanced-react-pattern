(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{3296:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});t(7294);var r=t(5),a=t(5893),o=function(e){var n=e.children,t=e.direction,r=void 0===t?"row":t;return(0,a.jsx)("div",{style:{display:"flex",flexDirection:r},children:n})},i=function(e){var n=e.navigation,t=e.content;return(0,a.jsx)(r.Z,{children:(0,a.jsxs)(o,{children:[(0,a.jsx)("div",{style:{marginRight:"1rem"},children:n}),(0,a.jsx)("div",{children:t})]})})}},7712:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5830),a=t(1664),o=t.n(a),i=(t(7294),t(2125)),s=t(5893),l=i.ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),c=function(e){var n=e.children;return(0,s.jsx)(l,{children:n})},u=function(){return(0,s.jsx)("nav",{children:(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/",children:"Home"})}),(0,s.jsxs)(c,{children:[(0,s.jsx)("h4",{children:"Utils"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/Prefetch",children:(0,s.jsx)("a",{children:"Prefetched State"})})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("h4",{children:"Components"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/suspense",children:"Suspense"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/StateReducer",children:"State Reducer"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/PropCollection",children:"Props Collection"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/Factory",children:"Factory"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/ControlProps",children:"Control Props"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)("h4",{children:"Hooks"}),(0,s.jsxs)(r.Ul,{children:[(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,s.jsx)(c,{children:(0,s.jsx)(o(),{href:"/ThunkReducer",children:"Thunk Reducer"})})]})]})]})})}},470:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e,n){return(0,r.useMemo)((function(){return e}),n)}},4155:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(3236),a=t(3296),o=t(7712),i=t(4663),s=t(5893);n.default=function(){return(0,s.jsx)(a.Z,{navigation:(0,s.jsx)(o.Z,{}),content:(0,s.jsx)("div",{children:(0,s.jsx)("main",{children:(0,s.jsxs)("article",{children:[(0,s.jsx)("h1",{children:"Reducer Hook"}),(0,s.jsx)(i.P,{children:(0,s.jsx)("i",{children:"After this article you will understand how the useReducer hook works and why we need it."})}),(0,s.jsx)(i.P,{children:"The useReducer hook helps you with handling a big state object which data needs to be processed with complex logic. And it creates pretty, uniform interface to other components."}),(0,s.jsx)(i.P,{children:"Lets look at an example."}),(0,s.jsx)(r.E,{children:'const Component = () => {\n  const [name, setName] = useState("");\n  const [surname, setSurname] = useState("");\n  const [tel, setTel] = useState("");\n  const [street, setStreet] = useState("");\n  const [city, setCity] = useState("");\n  // ... add other user and address states\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    fetch("/api/user", {\n      method: "post",\n      body: JSON.stringify({\n        name,\n        surname,\n        tel,\n        city,\n        street,\n        /* add other values */\n      }),\n    });\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          value={name}\n          onChange={(e) => {\n            setName(e.target.value);\n          }}\n        />\n        <input\n          type="text"\n          value={surname}\n          onChange={(e) => {\n            setSurname(e.target.value);\n          }}\n        />\n        <input\n          type="tel"\n          value={tel}\n          onChange={(e) => {\n            setTel(e.target.value);\n          }}\n        />\n        <input\n          type="text"\n          value={street}\n          onChange={(e) => {\n            setStreet(e.target.value);\n          }}\n        />\n        <input\n          type="text"\n          value={city}\n          onChange={(e) => {\n            setCity(e.target.value);\n          }}\n        />\n        <button type={"submit"}>Submit</button>\n      </form>\n    </div>\n  );\n};'}),(0,s.jsx)(i.P,{children:"As you can see this is a form. A form is usually not complicated but they are almost every time pretty complex from the programmer perspective. Take a moment and remember the times you needed to write validation logic for a form."}),(0,s.jsx)("img",{src:"https://media.giphy.com/media/Wh3ugh7bXTxUk/giphy.gif",alt:""}),(0,s.jsx)(i.P,{children:"For this example ill stick with 5 inputs but in the reality, you would have many more. Imagine options input, select inputs, file upload etc. Lets rewrite this component in such a way that its manageable and extendable."}),(0,s.jsx)(r.E,{children:'const Component = () => {\n  const [formValues, setFormValues] = useState({\n    city: "",\n    tel: "",\n    street: "",\n    name: "",\n    surname: "",\n  });\n  // ... add other user and address states\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    fetch("/api/user", {\n      method: "post",\n      body: JSON.stringify(formValues),\n    });\n  };\n\n  const createOnChangeHandler = (name) => {\n    return (e) => {\n      const value = e.target.value;\n      setFormValues((state) => ({ ...state, [name]: value }));\n    };\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          value={formValues.name}\n          onChange={createOnChangeHandler("name")}\n          {/* nothing changed here */}\n        />\n      </form>\n    </div>\n  );\n};'}),(0,s.jsx)(i.P,{children:"That looks better. We have a single state and one single function to update it. But we still lack the validation tho."}),(0,s.jsx)(i.P,{children:"We could come up with something like this."}),(0,s.jsx)(r.E,{children:'const Component = () => {\n  const [formValues, setFormValues] = useState({\n    city: {\n      error: null,\n      value: "",\n    },\n    tel: {\n      error: null,\n      value: "",\n    },\n    street: {\n      error: null,\n      value: "",\n    },\n    name: {\n      error: null,\n      value: "",\n    },\n    surname: {\n      error: null,\n      value: "",\n    },\n  });\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    fetch("/api/user", {\n      method: "post",\n      body: JSON.stringify(formValues),\n    });\n  };\n\n  const validate = (state, value) => {\n    // TODO:\n    //  implement validation based on the current state and the current value,\n    //  return error string e.g. "Must of length ..."\n    return null;\n  };\n\n  const createOnChangeHandler = (name) => {\n    return (e) => {\n      const value = e.target.value;\n\n      const error = validate(formValues, value);\n\n      setFormValues((state) => ({\n        ...state,\n        [name]: { ...state[name], value, error },\n      }));\n    };\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          value={formValues.name.value}\n          onChange={createOnChangeHandler("name")}\n        />\n        {/* nothing changed here */}\n      </form>\n    </div>\n  );\n};'}),(0,s.jsx)(i.P,{children:"I provide a validation function and the state is larger now. As you can see, the component grows. And as soon as we start handling onClick and on onBlur events, because we do not like to display error messages as soon as the user makes a mistake, the component will explode in complexity. The state, the validation function and the event handler need to go!"}),(0,s.jsx)(r.E,{children:'const initialState = {\n  city: {\n    error: null,\n    value: "",\n  },\n  tel: {\n    error: null,\n    value: "",\n  },\n  street: {\n    error: null,\n    value: "",\n  },\n  name: {\n    error: null,\n    value: "",\n  },\n  surname: {\n    error: null,\n    value: "",\n  },\n};\n\nconst validate = (state, value) => {\n  // TODO:\n  //  implement validation based on the current state and the current value,\n  //  return error string e.g. "Must of length ..."\n  return null;\n};\n\nconst getNewState = (state, { name, value }) => {\n  const error = validate(state, value);\n\n  return {\n    ...state,\n    [name]: { ...state[name], value, error },\n  };\n};\n\nconst Component = (reduceState = getNewState, state = initialState) => {\n  const [formValues, setFormValues] = useState(state);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    fetch("/api/user", {\n      method: "post",\n      body: JSON.stringify(formValues),\n    });\n  };\n\n  const createOnChangeHandler = (name) => {\n    return (e) => {\n      const value = e.target.value;\n      const newState = reduceState(formValues, { name, value });\n      setFormValues(newState);\n    };\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          value={formValues.name.value}\n          onChange={createOnChangeHandler("name")}\n        />\n        {/* nothing changed here */}\n      </form>\n    </div>\n  );\n};'}),(0,s.jsx)(i.P,{children:"I have moved out the initial state outside of the component and provide it as a default prop to the component. The validation and the state merging is outside now as well. Because of this the component and all the logic is pretty easy to unit test as well."}),(0,s.jsx)("img",{src:"https://media.giphy.com/media/hXDrTueJWAscK3xWQ2/giphy.gif",alt:""}),(0,s.jsx)(i.P,{children:"We can refactor the useState and the reduceState function to something like this."}),(0,s.jsx)(r.E,{children:"const useStateReducer = (getNewState, initialState) => {\n  const [state, setState] = useState(initialState);\n\n  const reduceState = (action) => {\n    const newState = getNewState(state, action);\n    setState(newState);\n  };\n\n  return [state, reduceState];\n};"}),(0,s.jsx)(i.P,{children:"Now we do not need to set the new state ourself. The custom hook does that for us. The form implementation looks like this now."}),(0,s.jsx)(r.E,{children:'const Component = (reducer = getNewState, state = initialState) => {\n  const [formValues, dispatch] = useStateReducer(reducer, state);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    fetch("/api/user", {\n      method: "post",\n      body: JSON.stringify(formValues),\n    });\n  };\n\n  const createOnChangeHandler = (name) => {\n    return (e) => {\n      const value = e.target.value;\n      dispatch({ name, value });\n    };\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          value={formValues.name.value}\n          onChange={createOnChangeHandler("name")}\n        />\n        {/*nothing changed here*/}\n      </form>\n    </div>\n  );\n};'}),(0,s.jsx)(i.P,{children:"Now if we would like to handle the onClick and onBlur events as well, we can easily do that by adjusting the getState function and adding a new attribute to the dispatch object."}),(0,s.jsx)(r.E,{children:'const getNewState = (state, { type, name, value }) => {\n  if (type === "onChange") {\n    const error = validate(state, value);\n    return {\n      ...state,\n      [name]: { ...state[name], value, error },\n    };\n  }\n  if (type === "onBlur") {\n    // TODO:\n    //   handle onBlur event\n    return state;\n  }\n};\n\nconst Component = (reducer = getNewState, state = initialState) => {\n  const [formValues, dispatch] = useStateReducer(reducer, state);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    fetch("/api/user", {\n      method: "post",\n      body: JSON.stringify(formValues),\n    });\n  };\n\n  const createOnChangeHandler = (name) => {\n    return (e) => {\n      const value = e.target.value;\n      dispatch({ type: "onChange", name, value });\n    };\n  };\n\n  const createOnClickHandler = (name) => {\n    return (e) => {\n      const value = e.target.value;\n      dispatch({ type: "onClick", name, value });\n    };\n  };\n\n  return (\n    <div>\n      <form onSubmit={handleSubmit}>\n        <input\n          type="text"\n          onClick={createOnClickHandler("name")}\n          value={formValues.name.value}\n          onChange={createOnChangeHandler("name")}\n        />\n        {/*nothing changed here*/}\n      </form>\n    </div>\n  );'}),(0,s.jsx)(i.P,{children:"The only thing left to do is to rename the custom hook and we would get the implementation of the useReducer."}),(0,s.jsx)(r.E,{children:"const useReducer = (reducer, initialState) => {\n  const [state, setState] = useState(initialState);\n\n  const dispatch = (action) => {\n    const newState = reducer(state, action);\n    setState(newState);\n  };\n\n  return [state, dispatch];\n};"}),(0,s.jsx)(i.P,{children:"That is the benefit of the useReducer hook: the component stays small and cute. All the heavy logic is outside of it. And everything is testable."}),(0,s.jsx)("img",{src:"https://media.giphy.com/media/xSM46ernAUN3y/giphy.gif",alt:""})]})})})})}},3676:function(e,n,t){"use strict";var r=t(9499),a=t(7294),o=t(5286),i=t(1042),s=t(9622),l=t(5893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}o.Z.registerLanguage("xml",i.Z),o.Z.registerLanguage("javascript",s.Z);var h=function(e){function n(n,t,r){function a(){if(n.innerHTML=n.innerHTML.replace(/([ \S]*\n|[ \S]*$)/gm,(function(e){return'<div class="highlight-line">'+e+"</div>"})),void 0!==t){var e,r=parseInt(window.getComputedStyle(n).paddingLeft),a=parseInt(window.getComputedStyle(n).paddingRight),o=n.getElementsByClassName("highlight-line"),i=n.scrollWidth,s=u(t);try{for(s.s();!(e=s.n()).done;)for(var l=e.value,c=l.start;c<=l.end;++c)o[c].style.backgroundColor=l.color,o[c].style.minWidth=i-r-a+"px"}catch(d){s.e(d)}finally{s.f()}}}if(e.hasOwnProperty("initLineNumbersOnLoad")&&!1!==r)var o=100,i=setInterval((function(){var e=n.getElementsByTagName("table");if(0!=e.length){clearInterval(i);var r=e[0];r.style.width="100%";var s,l=u(r.getElementsByClassName("hljs-ln-numbers"));try{for(l.s();!(s=l.n()).done;)s.value.style.width="2em"}catch(p){l.e(p)}finally{l.f()}if(void 0!==t){var c,d=n.getElementsByTagName("tr"),h=u(t);try{for(h.s();!(c=h.n()).done;)for(var m=c.value,f=m.start;f<=m.end;++f)d[f].style.backgroundColor=m.color}catch(p){h.e(p)}finally{h.f()}}}else o--<0&&(clearInterval(i),a())}),100);else a()}e.highlightLinesAll=function(e){for(var t=0;t<e.length;++t){var r,a=u(e[t]);try{for(a.s();!(r=a.n()).done;){var o=r.value;--o.start,--o.end}}catch(i){a.e(i)}finally{a.f()}}!function(e){function t(){for(var t=document.getElementsByClassName("hljs"),r=0;r<t.length;++r)n(t[r],e[r])}"loading"!==document.readyState?t():window.addEventListener("DOMContentLoaded",(function(){t()}))}(e)},e.highlightLinesElement=function(e,t,r){var a,o=u(t);try{for(o.s();!(a=o.n()).done;){var i=a.value;--i.start,--i.end}}catch(s){o.e(s)}finally{o.f()}n(e,t,r)}};n.Z=function(e){var n=e.children,t=e.highlight,i=(0,a.useRef)(null);return(0,a.useEffect)((function(){o.Z.highlightElement(i.current),t&&(void 0===window.hljs&&h(o.Z),o.Z.highlightLinesElement(i.current,t.map((function(e){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({color:"#fcf7aa"},e)})),!1))}),[t]),(0,l.jsx)("pre",{ref:i,children:n})}},3236:function(e,n,t){"use strict";t.d(n,{E:function(){return r.Z}});var r=t(3676)},5:function(e,n,t){"use strict";t(7294);var r=t(2125),a=t(5893),o=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);n.Z=function(e){var n=e.children;return(0,a.jsx)(o,{children:n})}},4663:function(e,n,t){"use strict";t.d(n,{P:function(){return l}});var r=t(9499),a=(t(7294),t(470)),o=t(5893);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e){var n=(0,a.Z)(s(s({},e.style),{},{lineHeight:"1.4",fontSize:"1.125rem",color:"#1a1a1a"}),[]);return(0,o.jsx)("p",s(s({},e),{},{style:n}))}},5830:function(e,n,t){"use strict";t.d(n,{Ul:function(){return s}});var r=t(9499),a=(t(7294),t(5893));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return(0,a.jsx)("ul",i({style:i({paddingLeft:"1rem"},e.style)},e))}},1040:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ReducerHook",function(){return t(4155)}])}},function(e){e.O(0,[170,774,888,179],(function(){return n=1040,e(e.s=n);var n}));var n=e.O();_N_E=n}]);