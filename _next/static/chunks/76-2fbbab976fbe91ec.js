"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{15234:function(e,r,n){n(67294);var t=n(94484),i=n(94359),o=n(85893);r.Z=function(e){var r=e.children;return(0,o.jsx)(t.Z,{content:r,navigation:(0,o.jsx)(i.Z,{})})}},94484:function(e,r,n){var t=n(17674),i=n(59499),o=n(4730),c=(n(67294),n(4944)),s=n(26965),a=n(32125),l=n(85893),d=["stroke","fill","height","width"];function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var f=function(e){var r=e.stroke,n=void 0===r?"currentColor":r,t=e.fill,i=void 0===t?"currentColor":t,c=e.height,s=void 0===c?"1em":c,a=e.width,h=void 0===a?"1em":a,f=(0,o.Z)(e,d);return(0,l.jsx)("svg",u(u({stroke:n,fill:i,height:s,width:h,strokeWidth:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},f),{},{children:(0,l.jsx)("path",{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"})}))},p=a.ZP.div.withConfig({displayName:"Layout__StyledSidebar",componentId:"sc-1tqca63-0"})(["height:100vh;background:rgba(255,255,255,0.76);top:0;backdrop-filter:blur(10px);left:0;padding-left:2rem;transition:transform 200ms;width:300px;position:fixed;"]),j=function(e){var r=e.children,n=(0,s.Z)("sidebar-open",!1),i=(0,t.Z)(n,2),o=i[0],c=i[1];return(0,l.jsxs)(p,{style:{transform:"translate(".concat(o?0:-350,"px)"),boxShadow:"".concat(o?"\n            0 0px 6px -1px rgb(0 0 0/0.1),\n            0 0px 4px -2px rgb(0 0 0/0.1)":"none","\n           ")},children:[(0,l.jsx)("button",{style:{width:"3rem",height:"3rem",borderRadius:"3rem",border:"1px solid #d8d8d8",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"absolute",top:"20px",right:o?"-1rem":"-5rem",transition:"transform 200ms",transform:"rotate(".concat(o?0:180,"deg)")},onClick:function(){c(!o)},children:(0,l.jsx)(f,{height:"1rem",width:"1rem"})}),r]})};r.Z=function(e){var r=e.navigation,n=e.content;return(0,l.jsx)("div",{children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("div",{children:n}),(0,l.jsx)(j,{children:r})]})})}},94359:function(e,r,n){n.d(r,{Z:function(){return u}});var t=n(59499),i=(n(67294),n(85893));function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var s=function(e){return(0,i.jsx)("ul",c({style:c({paddingLeft:"1rem"},e.style)},e))},a=n(41664),l=n.n(a),d=n(32125).ZP.li.withConfig({displayName:"Li__Styled",componentId:"sc-2pbekf-0"})(["white-space:nowrap;line-height:1.5;"]),h=function(e){var r=e.children;return(0,i.jsx)(d,{children:r})},u=function(){return(0,i.jsx)("nav",{children:(0,i.jsxs)(s,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/",children:"Home"})}),(0,i.jsxs)(h,{children:[(0,i.jsx)("h4",{children:"Utils"}),(0,i.jsxs)(s,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/Prefetch",children:(0,i.jsx)("a",{children:"Prefetched State"})})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/StateSubscription",children:"State Subscription"})})]})]}),(0,i.jsxs)(h,{children:[(0,i.jsx)("h4",{children:"Components"}),(0,i.jsxs)(s,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/suspense",children:"Suspense"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/CompoundToggle",children:"Compound Components"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/StateReducer",children:"State Reducer"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/PropCollection",children:"Props Collection"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/RenderPropsToggle",children:"Render Props"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/Factory",children:"Factory"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/ControlProps",children:"Control Props"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/Decorator",children:"Decorator"})})]})]}),(0,i.jsxs)(h,{children:[(0,i.jsx)("h4",{children:"Hooks"}),(0,i.jsxs)(s,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/ReducerHook",children:"Reducer Hook"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/UndoState",children:"Undo State"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/ThunkReducer",children:"Thunk Reducer"})}),(0,i.jsx)(h,{children:(0,i.jsx)(l(),{href:"/FetchHook",children:"Fetch Hook"})})]})]})]})})}},9668:function(e,r,n){n.d(r,{Z:function(){return j}});var t=n(59499),i=n(4730),o=(n(67294),n(65332)),c=n(92853),s=n(36334),a=n(32125).ZP.div.withConfig({displayName:"Eyebrow",componentId:"sc-nknczf-0"})(["font-size:12px;line-height:1.33337;font-weight:700;text-transform:uppercase;"]),l=n(85893),d=["name","url"],h=["name","email"];function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p=function(e){return(0,l.jsx)(o.gQ,f({},e))};p.Headline=function(e){return(0,l.jsx)(o.s0,f({},e))},p.DatePublished=function(e){var r=e.children,n=e.props;return(0,l.jsxs)("div",f(f({itemProp:"datePublished"},n),{},{children:[(0,l.jsx)(a,{as:"span",children:"Published"}),": ",r]}))},p.DateCreated=function(e){var r=e.children;return(0,l.jsx)("meta",{itemProp:"dateCreated",content:r})},p.Language=function(e){var r=e.children,n=e.props;return(0,l.jsx)(o.DC,f(f({as:"meta"},n),{},{content:r}))},p.Body=function(e){return(0,l.jsx)(o.Ml,f({},e))},p.Author=function(e){var r=e.name,n=e.url,t=(0,i.Z)(e,d);return(0,l.jsxs)(o.S3.Person,f(f({},t),{},{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(a,{as:"span",children:"Author: "}),(0,l.jsx)(c.VG,{as:"span",children:(0,l.jsx)("a",{href:n,children:r})})]}),(0,l.jsx)("div",{children:(0,l.jsx)(o.R9,{as:"meta",content:n})})]}))},p.Organization=function(e){e.name;var r=e.email,n=e.funder.name;return(0,l.jsxs)(o.FW.Organization,{children:["Published by:",(0,l.jsxs)("div",{children:["Email: ",(0,l.jsx)(s.GT,{as:"span",children:r})]}),(0,l.jsx)(s.Uk.Person,{children:(0,l.jsxs)("div",{children:["Name: ",(0,l.jsx)(c.VG,{as:"span",children:n})]})})]})},p.CopyRight=function(e){var r=e.name,n=(e.email,(0,i.Z)(e,h));return(0,l.jsxs)(o.ui.Person,f(f({},n),{},{children:["Copyright: ",(0,l.jsx)(c.VG,{as:"span",children:r})]}))},p.PartOf=function(e){var r=e.url;return(0,l.jsx)(o.aq.CreativeWork,{children:(0,l.jsx)("meta",{itemProp:"url",content:r})})};var j=p},43236:function(e,r,n){n.d(r,{E:function(){return t.Z}});var t=n(29404)},4944:function(e,r,n){n.d(r,{Z:function(){return j}});var t,i,o,c,s=n(71383),a=(n(67294),n(32125)),l=576,d=768,h=992,u=1200,f=n(85893),p=a.ZP.div.withConfig({displayName:"Container__Styled",componentId:"sc-zkefve-0"})(["margin-right:auto;margin-left:auto;padding-right:15px;padding-left:15px;width:100%;max-width:992px;",";",";",";",";"],function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],l,r)}(t||(t=(0,s.Z)(["\n    width: 99vw;\n  "]))),function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],d,r)}(i||(i=(0,s.Z)(["\n    width: 90vw;\n  "]))),function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],h,r)}(o||(o=(0,s.Z)(["\n    width: 70vw;\n  "]))),function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,a.iv)(["@media (min-width:","px){",";}"],u,r)}(c||(c=(0,s.Z)(["\n    width: 40vw;\n  "])))),j=function(e){var r=e.children;return(0,f.jsx)(p,{children:r})}},68556:function(e,r,n){var t=n(59499),i=(n(67294),n(32125)),o=n(85893);function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var s=(0,i.iv)(['font-size:48px;line-height:1.08349;font-weight:700;letter-spacing:-0.003em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),a=i.ZP.h1.withConfig({displayName:"H1__StyledH1",componentId:"sc-rl2x2k-0"})(["",";"],s);r.Z=function(e){return(0,o.jsx)(a,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e))}},84663:function(e,r,n){n.d(r,{P:function(){return d}});var t=n(59499),i=(n(67294),n(32125)),o=n(85893);function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var a=(0,i.iv)(['margin-bottom:1.4211em;font-size:1.125rem;color:#1a1a1a;line-height:1.4211;font-weight:400;letter-spacing:0.012em;font-family:"SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;']),l=i.ZP.p.withConfig({displayName:"P__StyledP",componentId:"sc-f4vqmk-0"})(["",";"],a),d=function(e){return(0,o.jsx)(l,s(s({},e),{},{style:e.style}))}}}]);