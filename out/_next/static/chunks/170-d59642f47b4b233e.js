(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{7913:function(e,n,t){"use strict";var a=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,i=(r=t(7294))&&r.__esModule?r:{default:r},s=t(2199),o=t(1587),c=t(7215);function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u={};function d(e,n,t,a){if(e&&s.isLocalURL(n)){e.prefetch(n,t,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[n+"%"+t+(r?"%"+r:"")]=!0}}var g=i.default.forwardRef((function(e,n){var t,r=e.legacyBehavior,g=void 0===r?!0!==Boolean(!1):r,f=e.href,h=e.as,p=e.children,b=e.prefetch,m=e.passHref,E=e.replace,y=e.shallow,v=e.scroll,w=e.locale,_=e.onClick,x=e.onMouseEnter,N=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);t=p,g&&"string"===typeof t&&(t=i.default.createElement("a",null,t));var O,A=!1!==b,k=o.useRouter(),M=i.default.useMemo((function(){var e=s.resolveHref(k,f,!0),n=a(e,2),t=n[0],r=n[1];return{href:t,as:h?s.resolveHref(k,h):r||t}}),[k,f,h]),S=M.href,R=M.as,I=i.default.useRef(S),T=i.default.useRef(R);g&&(O=i.default.Children.only(t));var j=g?O&&"object"===typeof O&&O.ref:n,L=c.useIntersection({rootMargin:"200px"}),C=a(L,3),B=C[0],D=C[1],P=C[2],U=i.default.useCallback((function(e){T.current===R&&I.current===S||(P(),T.current=R,I.current=S),B(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[R,j,S,P,B]);i.default.useEffect((function(){var e=D&&A&&s.isLocalURL(S),n="undefined"!==typeof w?w:k&&k.locale,t=u[S+"%"+R+(n?"%"+n:"")];e&&!t&&d(k,S,R,{locale:n})}),[R,S,D,w,A,k]);var $={ref:U,onClick:function(e){g||"function"!==typeof _||_(e),g&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,i,o,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),n[r?"replace":"push"](t,a,{shallow:i,locale:c,scroll:o}))}(e,k,S,R,E,y,v,w)},onMouseEnter:function(e){g||"function"!==typeof x||x(e),g&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),s.isLocalURL(S)&&d(k,S,R,{priority:!0})}};if(!g||m||"a"===O.type&&!("href"in O.props)){var z="undefined"!==typeof w?w:k&&k.locale,H=k&&k.isLocaleDomain&&s.getDomainLocale(R,z,k&&k.locales,k&&k.domainLocales);$.href=H||s.addBasePath(s.addLocale(R,z,k&&k.defaultLocale))}return g?i.default.cloneElement(O,$):i.default.createElement("a",Object.assign({},N,$),t)}));n.default=g,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},7215:function(e,n,t){"use strict";var a=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!s,u=r.useRef(),d=r.useState(!1),g=a(d,2),f=g[0],h=g[1],p=r.useState(n?n.current:null),b=a(p,2),m=b[0],E=b[1],y=r.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||f||e&&e.tagName&&(u.current=function(e,n,t){var a=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},a=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));a?n=o.get(a):(n=o.get(t),c.push(t));if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(t,n={id:t,observer:i,elements:r}),n}(t),r=a.id,i=a.observer,s=a.elements;return s.set(e,n),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),o.delete(r);var n=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:t}))}),[l,m,t,f]),v=r.useCallback((function(){h(!1)}),[]);return r.useEffect((function(){if(!s&&!f){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),r.useEffect((function(){n&&E(n.current)}),[n]),[y,f,v]};var r=t(7294),i=t(8065),s="undefined"!==typeof IntersectionObserver;var o=new Map,c=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},1664:function(e,n,t){e.exports=t(7913)},3390:function(e){var n={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var a=e[n];"object"!=typeof a||Object.isFrozen(a)||t(a)})),e}n.exports=t,n.exports.default=t;class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const s=e=>!!e.scope||e.sublanguage&&e.language;class o{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!s(e))return;let n="";n=e.sublanguage?`language-${e.language}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(e.scope,{prefix:this.classPrefix}),this.span(n)}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const c=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class l{constructor(){this.rootNode=c(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n=c({scope:e});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"===typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every((e=>"string"===typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class u extends l{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.sublanguage=!0,t.language=n,this.add(t)}toHTML(){return new o(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"===typeof e?e:e.source:null}function g(e){return p("(?=",e,")")}function f(e){return p("(?:",e,")*")}function h(e){return p("(?:",e,")?")}function p(...e){return e.map((e=>d(e))).join("")}function b(...e){const n=function(e){const n=e[e.length-1];return"object"===typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e);return"("+(n.capture?"":"?:")+e.map((e=>d(e))).join("|")+")"}function m(e){return new RegExp(e.toString()+"|").exec("").length-1}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let a=d(e),r="";for(;a.length>0;){const e=E.exec(a);if(!e){r+=a;break}r+=a.substring(0,e.index),a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+n):(r+=e[0],"("===e[0]&&t++)}return r})).map((e=>`(${e})`)).join(n)}const v="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",_="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",N="\\b(0b[01]+)",O={begin:"\\\\[\\s\\S]",relevance:0},A={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[O]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[O]},M=function(e,n,t={}){const a=i({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:p(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},S=M("//","$"),R=M("/\\*","\\*/"),I=M("#","$"),T={scope:"number",begin:_,relevance:0},j={scope:"number",begin:x,relevance:0},L={scope:"number",begin:N,relevance:0},C={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]}]},B={scope:"title",begin:v,relevance:0},D={scope:"title",begin:w,relevance:0},P={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var U=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:v,UNDERSCORE_IDENT_RE:w,NUMBER_RE:_,C_NUMBER_RE:x,BINARY_NUMBER_RE:N,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=p(n,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:O,APOS_STRING_MODE:A,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:M,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:I,NUMBER_MODE:T,C_NUMBER_MODE:j,BINARY_NUMBER_MODE:L,REGEXP_MODE:C,TITLE_MODE:B,UNDERSCORE_TITLE_MODE:D,METHOD_GUARD:P,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function $(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function z(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function H(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=$,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function Z(e,n){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function K(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function G(e,n){void 0===e.relevance&&(e.relevance=1)}const F=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=p(t.beforeMatch,g(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},W=["of","and","for","in","not","or","if","then","parent","list","value"];function X(e,n,t="keyword"){const a=Object.create(null);return"string"===typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach((function(t){Object.assign(a,X(e[t],n,t))})),a;function r(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");a[t[0]]=[e,J(t[0],t[1])]}))}}function J(e,n){return n?Number(n):function(e){return W.includes(e.toLowerCase())}(e)?0:1}const V={},q=e=>{console.error(e)},Q=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Y=(e,n)=>{V[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),V[`${e}/${n}`]=!0)},ee=new Error;function ne(e,n,{key:t}){let a=0;const r=e[t],i={},s={};for(let o=1;o<=n.length;o++)s[o+a]=r[o],i[o+a]=!0,a+=m(n[o-1]);e[t]=s,e[t]._emit=i,e[t]._multi=!0}function te(e){!function(e){e.scope&&"object"===typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"===typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"===typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ee;if("object"!==typeof e.beginScope||null===e.beginScope)throw q("beginScope must be object"),ee;ne(e,e.begin,{key:"beginScope"}),e.begin=y(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ee;if("object"!==typeof e.endScope||null===e.endScope)throw q("endScope must be object"),ee;ne(e,e.end,{key:"endScope"}),e.end=y(e.end,{joinWith:""})}}(e)}function ae(e){function n(n,t){return new RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=m(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(y(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function t(r,s){const o=r;if(r.isCompiled)return o;[z,K,te,F].forEach((e=>e(r,s))),e.compilerExtensions.forEach((e=>e(r,s))),r.__beforeBegin=null,[H,Z,G].forEach((e=>e(r,s))),r.isCompiled=!0;let c=null;return"object"===typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),c=r.keywords.$pattern,delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=X(r.keywords,e.case_insensitive)),o.keywordPatternRe=n(c,!0),s&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(o.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=n(o.end)),o.terminatorEnd=d(o.end)||"",r.endsWithParent&&s.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+s.terminatorEnd)),r.illegal&&(o.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return i(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(re(e))return i(e,{starts:e.starts?i(e.starts):null});if(Object.isFrozen(e))return i(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,o)})),r.starts&&t(r.starts,s),o.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(o),o}(e)}function re(e){return!!e&&(e.endsWithParent||re(e.starts))}class ie extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const se=r,oe=i,ce=Symbol("nomatch");var le=function(e){const t=Object.create(null),r=Object.create(null),i=[];let s=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function d(e){return l.noHighlightRe.test(e)}function m(e,n,t){let a="",r="";"object"===typeof n?(a=e,t=n.ignoreIllegals,r=n.language):(Y("10.7.0","highlight(lang, code, ...args) has been deprecated."),Y("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,a=n),void 0===t&&(t=!0);const i={code:a,language:r};A("before:highlight",i);const s=i.result?i.result:E(i.language,i.code,t);return s.code=i.code,A("after:highlight",s),s}function E(e,n,r,i){const c=Object.create(null);function u(){if(!O.keywords)return void k.addText(M);let e=0;O.keywordPatternRe.lastIndex=0;let n=O.keywordPatternRe.exec(M),t="";for(;n;){t+=M.substring(e,n.index);const r=w.case_insensitive?n[0].toLowerCase():n[0],i=(a=r,O.keywords[a]);if(i){const[e,a]=i;if(k.addText(t),t="",c[r]=(c[r]||0)+1,c[r]<=7&&(S+=a),e.startsWith("_"))t+=n[0];else{const t=w.classNameAliases[e]||e;k.addKeyword(n[0],t)}}else t+=n[0];e=O.keywordPatternRe.lastIndex,n=O.keywordPatternRe.exec(M)}var a;t+=M.substring(e),k.addText(t)}function d(){null!=O.subLanguage?function(){if(""===M)return;let e=null;if("string"===typeof O.subLanguage){if(!t[O.subLanguage])return void k.addText(M);e=E(O.subLanguage,M,!0,A[O.subLanguage]),A[O.subLanguage]=e._top}else e=y(M,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(S+=e.relevance),k.addSublanguage(e._emitter,e.language)}():u(),M=""}function g(e,n){let t=1;const a=n.length-1;for(;t<=a;){if(!e._emit[t]){t++;continue}const a=w.classNameAliases[e[t]]||e[t],r=n[t];a?k.addKeyword(r,a):(M=r,u(),M=""),t++}}function f(e,n){return e.scope&&"string"===typeof e.scope&&k.openNode(w.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(k.addKeyword(M,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),M=""):e.beginScope._multi&&(g(e.beginScope,n),M="")),O=Object.create(e,{parent:{value:O}}),O}function h(e,n,t){let r=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(r){if(e["on:end"]){const t=new a(e);e["on:end"](n,t),t.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function p(e){return 0===O.matcher.regexIndex?(M+=e[0],1):(T=!0,0)}function b(e){const t=e[0],a=n.substring(e.index),r=h(O,e,a);if(!r)return ce;const i=O;O.endScope&&O.endScope._wrap?(d(),k.addKeyword(t,O.endScope._wrap)):O.endScope&&O.endScope._multi?(d(),g(O.endScope,e)):i.skip?M+=t:(i.returnEnd||i.excludeEnd||(M+=t),d(),i.excludeEnd&&(M=t));do{O.scope&&k.closeNode(),O.skip||O.subLanguage||(S+=O.relevance),O=O.parent}while(O!==r.parent);return r.starts&&f(r.starts,e),i.returnEnd?0:t.length}let m={};function v(t,i){const o=i&&i[0];if(M+=t,null==o)return d(),0;if("begin"===m.type&&"end"===i.type&&m.index===i.index&&""===o){if(M+=n.slice(i.index,i.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=m.rule,n}return 1}if(m=i,"begin"===i.type)return function(e){const n=e[0],t=e.rule,r=new a(t),i=[t.__beforeBegin,t["on:begin"]];for(const a of i)if(a&&(a(e,r),r.isMatchIgnored))return p(n);return t.skip?M+=n:(t.excludeBegin&&(M+=n),d(),t.returnBegin||t.excludeBegin||(M=n)),f(t,e),t.returnBegin?0:n.length}(i);if("illegal"===i.type&&!r){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(O.scope||"<unnamed>")+'"');throw e.mode=O,e}if("end"===i.type){const e=b(i);if(e!==ce)return e}if("illegal"===i.type&&""===o)return 1;if(I>1e5&&I>3*i.index){throw new Error("potential infinite loop, way more iterations than matches")}return M+=o,o.length}const w=x(e);if(!w)throw q(o.replace("{}",e)),new Error('Unknown language: "'+e+'"');const _=ae(w);let N="",O=i||_;const A={},k=new l.__emitter(l);!function(){const e=[];for(let n=O;n!==w;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>k.openNode(e)))}();let M="",S=0,R=0,I=0,T=!1;try{for(O.matcher.considerAll();;){I++,T?T=!1:O.matcher.considerAll(),O.matcher.lastIndex=R;const e=O.matcher.exec(n);if(!e)break;const t=v(n.substring(R,e.index),e);R=e.index+t}return v(n.substring(R)),k.closeAllNodes(),k.finalize(),N=k.toHTML(),{language:e,value:N,relevance:S,illegal:!1,_emitter:k,_top:O}}catch(j){if(j.message&&j.message.includes("Illegal"))return{language:e,value:se(n),illegal:!0,relevance:0,_illegalBy:{message:j.message,index:R,context:n.slice(R-100,R+100),mode:j.mode,resultSoFar:N},_emitter:k};if(s)return{language:e,value:se(n),illegal:!1,relevance:0,errorRaised:j,_emitter:k,_top:O};throw j}}function y(e,n){n=n||l.languages||Object.keys(t);const a=function(e){const n={value:se(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return n._emitter.addText(e),n}(e),r=n.filter(x).filter(O).map((n=>E(n,e,!1)));r.unshift(a);const i=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(x(e.language).supersetOf===n.language)return 1;if(x(n.language).supersetOf===e.language)return-1}return 0})),[s,o]=i,u=s;return u.secondBest=o,u}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=l.languageDetectRe.exec(n);if(t){const n=x(t[1]);return n||(Q(o.replace("{}",t[1])),Q("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>d(e)||x(e)))}(e);if(d(t))return;if(A("before:highlightElement",{el:e,language:t}),e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),l.throwUnescapedHTML)){throw new ie("One of your code blocks includes unescaped HTML.",e.innerHTML)}n=e;const a=n.textContent,i=t?m(a,{language:t,ignoreIllegals:!0}):y(a);e.innerHTML=i.value,function(e,n,t){const a=n&&r[n]||t;e.classList.add("hljs"),e.classList.add(`language-${a}`)}(e,t,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),A("after:highlightElement",{el:e,result:i,text:a})}let w=!1;function _(){if("loading"===document.readyState)return void(w=!0);document.querySelectorAll(l.cssSelector).forEach(v)}function x(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function N(e,{languageName:n}){"string"===typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=n}))}function O(e){const n=x(e);return n&&!n.disableAutodetect}function A(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){w&&_()}),!1),Object.assign(e,{highlight:m,highlightAuto:y,highlightAll:_,highlightElement:v,highlightBlock:function(e){return Y("10.7.0","highlightBlock will be removed entirely in v12.0"),Y("10.7.0","Please use highlightElement now."),v(e)},configure:function(e){l=oe(l,e)},initHighlighting:()=>{_(),Y("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){_(),Y("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(n,a){let r=null;try{r=a(e)}catch(i){if(q("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw i;q(i),r=c}r.name||(r.name=n),t[n]=r,r.rawDefinition=a.bind(null,e),r.aliases&&N(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const n of Object.keys(r))r[n]===e&&delete r[n]},listLanguages:function(){return Object.keys(t)},getLanguage:x,registerAliases:N,autoDetection:O,inherit:oe,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.6.0",e.regex={concat:p,lookahead:g,either:b,optional:h,anyNumberOfTimes:f};for(const a in U)"object"===typeof U[a]&&n.exports(U[a]);return Object.assign(e,U),e}({});e.exports=le,le.HighlightJS=le,le.default=le},5286:function(e,n,t){"use strict";var a=t(3390);n.Z=a},9622:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});const a="[A-Za-z$_][0-9A-Za-z$_]*",r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],i=["true","false","null","undefined","NaN","Infinity"],s=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],o=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],c=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],l=["arguments","this","super","console","window","document","localStorage","module","global"],u=[].concat(c,s,o);function d(e){const n=e.regex,t=a,d="<>",g="</>",f={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];if("<"===a||","===a)return void n.ignoreMatch();let r;">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch());(r=e.input.substring(t).match(/^\s+extends\s+/))&&0===r.index&&n.ignoreMatch()}},h={$pattern:a,keyword:r,literal:i,built_in:u,"variable.language":l},p="\\.([0-9](_?[0-9])*)",b="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${b})((${p})|\\.)?|(${p}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${b})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",end:"\\}",keywords:h,contains:[]},y={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,E],subLanguage:"css"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,E]},_={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,v,w,m];E.contains=x.concat({begin:/\{/,end:/\}/,keywords:h,contains:["self"].concat(x)});const N=[].concat(_,E.contains),O=N.concat([{begin:/\(/,end:/\)/,keywords:h,contains:["self"].concat(N)}]),A={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:h,contains:O},k={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},M={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...s,...o]}},S={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[A],illegal:/%/};const R={match:n.concat(/\b/,(I=[...c,"super"],n.concat("(?!",I.join("|"),")")),t,n.lookahead(/\(/)),className:"title.function",relevance:0};var I;const T={begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},j={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},A]},L="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",C={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(L)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[A]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:h,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:M},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,y,v,w,_,m,M,{className:"attr",begin:t+n.lookahead(":"),relevance:0},C,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,e.REGEXP_MODE,{className:"function",begin:L,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:h,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d,end:g},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:f.begin,"on:begin":f.isTrulyOpeningTag,end:f.end}],subLanguage:"xml",contains:[{begin:f.begin,end:f.end,skip:!0,contains:["self"]}]}]},S,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[A,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},T,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[A]},R,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},k,j,{match:/\$[(.]/}]}}},1042:function(e,n,t){"use strict";function a(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(r,{begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:"string"}),o=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,o,s,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,i,o,s]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[o]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}t.d(n,{Z:function(){return a}})}}]);