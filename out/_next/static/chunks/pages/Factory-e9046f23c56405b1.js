(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8405],{1871:function(n,t,e){"use strict";e.r(t);var r,o=e(2640),c=e(9499),i=e(7294),u=e(3676),a=e(5),l=e(5893);var s=function(){return(0,l.jsx)("input",{type:"number"})},p=(r={},(0,c.Z)(r,"input",(function(){return(0,l.jsx)("input",{type:"checkbox"})})),(0,c.Z)(r,"checkbox",(function(){return(0,l.jsx)("input",{type:"checkbox"})})),(0,c.Z)(r,"number",s),{div:!0,span:!0,li:!0}),d=function(n){return n in p?i.createElement(n):null};Object.entries(p).forEach((function(n){var t=(0,o.Z)(n,1)[0];d[t]=function(n){return i.createElement(t,n)}}));d.div({prop:1});t.default=function(){return(0,l.jsxs)(a.Z,{children:[(0,l.jsx)("h1",{children:"Factory"}),(0,l.jsx)("a",{href:"https://github.com/rilexus/advanced-react-pattern/blob/master/src/components/factory/Factory.jsx",children:"GitHub: Components Factory"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Switch"}),(0,l.jsx)(u.Z,{children:'const TextInput = () => {\n  return <input type={"text"} />;\n};\n\nconst NumberInput = () => {\n  return <input type={"numbe"} />;\n};\n\nconst CheckboxInput = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst Input = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst Checkbox = () => {\n  return <input type={"checkbox"} />;\n};\n\nconst InputFactory = ({ type }) => {\n  switch (type) {\n    case "text":\n      return <TextInput />;\n    case "number":\n      return <NumberInput />;\n    case "checkbox":\n      return <CheckboxInput />;\n    default:\n      return null;\n  }\n};'})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Dynamic"}),(0,l.jsx)(u.Z,{children:'const components = {\n  ["input"]: Input,\n  ["checkbox"]: Checkbox,\n  ["number"]: NumberInput,\n};\n\nconst DynamicComponent = ({ name, withProps }) => {\n  if (!!components[name]) {\n    const Component = components[name];\n    return <Component {...withProps} />;\n  }\n  return null;\n};'})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Static"}),(0,l.jsx)(u.Z,{children:"const SupportedHTMLTags = {\n  div: true,\n  span: true,\n  li: true,\n};\n\nconst createComponent = (tag) => {\n  return tag in SupportedHTMLTags ? React.createElement(tag) : null;\n};\n\n(function () {\n  Object.entries(SupportedHTMLTags).forEach(([tag]) => {\n    createComponent[tag] = (props) => React.createElement(tag, props);\n  });\n})();\n\n// const DivComponent = createComponent('div')\nconst DivComponent = createComponent.div({ prop: 1 });\nconst Component = () => {\n  return <DivComponent />;\n};"})]})]})}},3676:function(n,t,e){"use strict";e(7294);var r=e(939),o=e(5893),c={lineNumberColor:"#333333",lineNumberBgColor:"white",backgroundColor:"#f3f3f3",textColor:"#25282a",substringColor:"#6A8759",keywordColor:"#c95464",attributeColor:"#c95464",selectorAttributeColor:"#a71d5d",docTagColor:"#333333",nameColor:"#63a35c",builtInColor:"#333333",literalColor:"#0086b3",bulletColor:"#0086b3",codeColor:"#333333",additionColor:"#55a532",regexpColor:"#333333",symbolColor:"#0086b3",variableColor:"#df5000",templateVariableColor:"#df5000",linkColor:"#0366d6",selectorClassColor:"#795da3",typeColor:"#a71d5d",stringColor:"#6eb240",selectorIdColor:"#795da3",quoteColor:"#df5000",templateTagColor:"#a88609",deletionColor:"#bd2c00",titleColor:"#795da3",sectionColor:"#a88609",commentColor:"#969896",metaKeywordColor:"#333333",metaColor:"#969896",functionColor:"#675c98",numberColor:"#6897BB"};t.Z=function(n){var t=n.children;return(0,o.jsx)("div",{style:{margin:"1rem 0",fontSize:".9rem"},children:(0,o.jsx)(r.dn,{text:t,language:"jsx",showLineNumbers:!1,theme:c})})}},5:function(n,t,e){"use strict";e(7294);var r=e(2125),o=e(5893),c=r.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;@media screen and (max-width:575px){min-width:97vw;}@media screen and (min-width:576px){max-width:1024px;}"]);t.Z=function(n){var t=n.children;return(0,o.jsx)(c,{children:t})}},7123:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Factory",function(){return e(1871)}])},2640:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,c=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return c}}(n,t)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,{Z:function(){return o}})}},function(n){n.O(0,[939,9774,2888,179],(function(){return t=7123,n(n.s=t);var t}));var t=n.O();_N_E=t}]);