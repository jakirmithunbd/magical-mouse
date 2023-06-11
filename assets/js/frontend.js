/*! For license information please see magicmouse.min.js.LICENSE.txt */
(()=>{var e={763:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"body #magicMouseCursor{position:fixed;width:35px;height:35px;border:1px solid #fff;border-radius:50%;z-index:9999;left:0;top:0;transition:transform .07s,width .3s,height .3s;pointer-events:none}body #magicMouseCursor.cursor-square{border-radius:0}body #magicPointer{height:5px;width:5px;top:0;left:0;position:fixed;background:#fff;border-radius:50%;pointer-events:none;transition:background .2s,width .2s,height .2s,box-shadow .2s}body #magicPointer.pointer-blur{height:50px;width:50px;background:none;border:1px solid #fff;box-shadow:0px 0px 15px -5px #fff}body #magicPointer.pointer-overlay{height:50px;width:50px;mix-blend-mode:difference;box-shadow:0px 0px 15px -5px #fff}body #magicPointer.is-hover{background:red}body .magic-hover{transition:all .2s}body .magic-hover:hover{cursor:none}","",{version:3,sources:["webpack://./src/scss/style.scss"],names:[],mappings:"AACE,uBACE,cAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,YAAA,CACA,MAAA,CACA,KAAA,CACA,8CAAA,CACA,mBAAA,CAEA,qCACE,eAAA,CAIJ,mBACE,UAAA,CACA,SAAA,CACA,KAAA,CACA,MAAA,CACA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CACA,6DAAA,CAEA,gCACE,WAAA,CACA,UAAA,CACA,eAAA,CACA,qBAAA,CACA,iCAAA,CAGF,mCACE,WAAA,CACA,UAAA,CACA,yBAAA,CACA,iCAAA,CAGF,4BACE,cAAA,CAIJ,kBACE,kBAAA,CAEA,wBACE,WAAA",sourcesContent:["body {\n  #magicMouseCursor {\n    position: fixed;\n    width: 35px;\n    height: 35px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    z-index: 9999;\n    left: 0;\n    top: 0;\n    transition: transform 0.07s, width 0.3s, height 0.3s;\n    pointer-events: none;\n\n    &.cursor-square {\n      border-radius: 0;\n    }\n  }\n\n  #magicPointer {\n    height: 5px;\n    width: 5px;\n    top: 0;\n    left: 0;\n    position: fixed;\n    background: #fff;\n    border-radius: 50%;\n    pointer-events: none;\n    transition: background 0.2s, width 0.2s, height 0.2s, box-shadow 0.2s;\n\n    &.pointer-blur {\n      height: 50px;\n      width: 50px;\n      background: none;\n      border: 1px solid #fff;\n      box-shadow: 0px 0px 15px -5px white;\n    }\n\n    &.pointer-overlay {\n      height: 50px;\n      width: 50px;\n      mix-blend-mode: difference;\n      box-shadow: 0px 0px 15px -5px white;\n    }\n\n    &.is-hover {\n      background: red;\n    }\n  }\n\n  .magic-hover {\n    transition: all 0.2s;\n\n    &:hover {\n      cursor: none;\n    }\n  }\n}\n"],sourceRoot:""}]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var u=e[s],c=r.base?u[0]+r.base:u[0],l=i[c]||0,f="".concat(c," ").concat(l);i[c]=l+1;var d=n(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var h=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var u=r(e,o),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},942:()=>{!function(e,t,n){function r(e,t){return typeof e===t}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):d?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||((e=o(d?"svg":"body")).fake=!0),e}var a=[],s=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},c=function(){};c.prototype=u,c=new c;var l=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=l;var f=t.documentElement,d="svg"===f.nodeName.toLowerCase(),p=u.testStyles=function(e,n,r,a){var s,u,c,l,d="modernizr",p=o("div"),h=i();if(parseInt(r,10))for(;r--;)(c=o("div")).id=a?a[r]:d+(r+1),p.appendChild(c);return(s=o("style")).type="text/css",s.id="s"+d,(h.fake?h:p).appendChild(s),h.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),u=n(p,e),h.fake?(h.parentNode.removeChild(h),f.style.overflow=l,f.offsetHeight):p.parentNode.removeChild(p),!!u};c.addTest("touchevents",(function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",l.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");p(r,(function(e){n=9===e.offsetTop}))}return n})),function(){var e,t,n,o,i,u;for(var l in s)if(s.hasOwnProperty(l)){if(e=[],(t=s[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(u=e[i].split(".")).length?c[u[0]]=o:(!c[u[0]]||c[u[0]]instanceof Boolean||(c[u[0]]=new Boolean(c[u[0]])),c[u[0]][u[1]]=o),a.push((o?"":"no-")+u.join("-"))}}(),function(e){var t=f.className,n=c._config.classPrefix||"";if(d&&(t=t.baseVal),c._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}c._config.enableClasses&&(t+=" "+n+e.join(" "+n),d?f.className.baseVal=t:f.className=t)}(a),delete u.addTest,delete u.addAsyncTest;for(var h=0;h<c._q.length;h++)c._q[h]();e.Modernizr=c}(window,document)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>ce,magicMouse:()=>ue});var e=n(379),t=n.n(e),o=n(795),i=n.n(o),a=n(569),s=n.n(a),u=n(565),c=n.n(u),l=n(216),f=n.n(l),d=n(589),p=n.n(d),h=n(763),y={};function A(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function m(e){return function t(n){return 0===arguments.length||A(n)?t:e.apply(this,arguments)}}function v(e){return function t(n,r){switch(arguments.length){case 0:return t;case 1:return A(n)?t:m((function(t){return e(n,t)}));default:return A(n)&&A(r)?t:A(n)?m((function(t){return e(t,r)})):A(r)?m((function(t){return e(n,t)})):e(n,r)}}}y.styleTagTransform=p(),y.setAttributes=c(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f(),t()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const g=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)};function b(e){return null!=e&&"function"==typeof e["@@transducer/step"]}function C(e,t,n){return function(){if(0===arguments.length)return n();var r=arguments[arguments.length-1];if(!g(r)){for(var o=0;o<e.length;){if("function"==typeof r[e[o]])return r[e[o]].apply(r,Array.prototype.slice.call(arguments,0,-1));o+=1}if(b(r)){var i=t.apply(null,Array.prototype.slice.call(arguments,0,-1));return i(r)}}return n.apply(this,arguments)}}const x=function(){return this.xf["@@transducer/init"]()},w=function(e){return this.xf["@@transducer/result"](e)};function E(e){return"[object String]"===Object.prototype.toString.call(e)}const S=m((function(e){return!!g(e)||!!e&&"object"==typeof e&&!E(e)&&(0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));var O=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}();function j(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,o){return t.apply(this,arguments)};case 5:return function(e,n,r,o,i){return t.apply(this,arguments)};case 6:return function(e,n,r,o,i,a){return t.apply(this,arguments)};case 7:return function(e,n,r,o,i,a,s){return t.apply(this,arguments)};case 8:return function(e,n,r,o,i,a,s,u){return t.apply(this,arguments)};case 9:return function(e,n,r,o,i,a,s,u,c){return t.apply(this,arguments)};case 10:return function(e,n,r,o,i,a,s,u,c,l){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}const q=v((function(e,t){return j(e.length,(function(){return e.apply(t,arguments)}))}));function k(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function T(e,t,n,r){return e["@@transducer/result"](n[r](q(e["@@transducer/step"],e),t))}var B="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";var L=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=x,e.prototype["@@transducer/result"]=w,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}();const M=v((function(e,t){return new L(e,t)}));function P(e,t,n){return function(){for(var r=[],o=0,i=e,a=0;a<t.length||o<arguments.length;){var s;a<t.length&&(!A(t[a])||o>=arguments.length)?s=t[a]:(s=arguments[o],o+=1),r[a]=s,A(s)||(i-=1),a+=1}return i<=0?n.apply(this,r):j(i,P(e,r,n))}}const I=v((function(e,t){return 1===e?m(t):j(e,P(e,[],t))}));function N(e,t){return Object.prototype.hasOwnProperty.call(t,e)}var _=Object.prototype.toString;const U=function(){return"[object Arguments]"===_.call(arguments)?function(e){return"[object Arguments]"===_.call(e)}:function(e){return N("callee",e)}}();var z=!{toString:null}.propertyIsEnumerable("toString"),R=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],F=function(){return arguments.propertyIsEnumerable("length")}(),W=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1};const D="function"!=typeof Object.keys||F?m((function(e){if(Object(e)!==e)return[];var t,n,r=[],o=F&&U(e);for(t in e)!N(t,e)||o&&"length"===t||(r[r.length]=t);if(z)for(n=R.length-1;n>=0;)N(t=R[n],e)&&!W(r,t)&&(r[r.length]=t),n-=1;return r})):m((function(e){return Object(e)!==e?[]:Object.keys(e)})),H=v(C(["fantasy-land/map","map"],M,(function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return I(t.length,(function(){return e.call(this,t.apply(this,arguments))}));case"[object Object]":return function(e,t,n){if("function"==typeof e&&(e=function(e){return new O(e)}(e)),S(n))return function(e,t,n){for(var r=0,o=n.length;r<o;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return T(e,t,n,"fantasy-land/reduce");if(null!=n[B])return k(e,t,n[B]());if("function"==typeof n.next)return k(e,t,n);if("function"==typeof n.reduce)return T(e,t,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}((function(n,r){return n[r]=e(t[r]),n}),{},D(t));default:return function(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}(e,t)}}))),J=Number.isInteger||function(e){return e<<0===e},K=v((function(e,t){var n=e<0?t.length+e:e;return E(t)?t.charAt(n):t[n]})),X=v((function(e,t){if(null!=t)return J(e)?K(e,t):t[e]})),Y=v((function(e,t){return H(X(e),t)}));function Z(e){return function t(n,r,o){switch(arguments.length){case 0:return t;case 1:return A(n)?t:v((function(t,r){return e(n,t,r)}));case 2:return A(n)&&A(r)?t:A(n)?v((function(t,n){return e(t,r,n)})):A(r)?v((function(t,r){return e(n,t,r)})):m((function(t){return e(n,r,t)}));default:return A(n)&&A(r)&&A(o)?t:A(n)&&A(r)?v((function(t,n){return e(t,n,o)})):A(n)&&A(o)?v((function(t,n){return e(t,r,n)})):A(r)&&A(o)?v((function(t,r){return e(n,t,r)})):A(n)?m((function(t){return e(t,r,o)})):A(r)?m((function(t){return e(n,t,o)})):A(o)?m((function(t){return e(n,r,t)})):e(n,r,o)}}}function V(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function $(e,t,n){for(var r=0,o=n.length;r<o;){if(e(t,n[r]))return!0;r+=1}return!1}const G="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},Q=m((function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}));function ee(e,t,n,r){var o=V(e);function i(e,t){return te(e,t,n.slice(),r.slice())}return!$((function(e,t){return!$(i,t,e)}),V(t),o)}function te(e,t,n,r){if(G(e,t))return!0;var o,i,a=Q(e);if(a!==Q(t))return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(a){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(o=e.constructor,null==(i=String(o).match(/^function (\w*)/))?"":i[1]))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!G(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!G(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var s=n.length-1;s>=0;){if(n[s]===e)return r[s]===t;s-=1}switch(a){case"Map":return e.size===t.size&&ee(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":return e.size===t.size&&ee(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var u=D(e);if(u.length!==D(t).length)return!1;var c=n.concat([e]),l=r.concat([t]);for(s=u.length-1;s>=0;){var f=u[s];if(!N(f,t)||!te(t[f],e[f],c,l))return!1;s-=1}return!0}const ne=v((function(e,t){return te(e,t,[],[])}));Date.prototype.toISOString;var re=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=x,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){return this.f(t)&&(this.found=!0,e=(n=this.xf["@@transducer/step"](e,t))&&n["@@transducer/reduced"]?n:{"@@transducer/value":n,"@@transducer/reduced":!0}),e;var n},e}();const oe=v(C(["find"],v((function(e,t){return new re(e,t)})),(function(e,t){for(var n=0,r=t.length;n<r;){if(e(t[n]))return t[n];n+=1}})));"function"==typeof Object.assign&&Object.assign;const ie=Z((function(e,t,n){return ne(t,X(e,n))}));String.prototype.trim;const ae=[{name:"outerWidth",type:"number",required:!1,default:30},{name:"outerHeight",type:"number",required:!1,default:30},{name:"outerStyle",type:"enum",required:!1,default:"circle",allowed:["circle","square","diamond","disable"]},{name:"hoverEffect",type:"enum",required:!1,default:"circle-move",allowed:["circle-move","pointer-blur","pointer-overlay"]},{name:"hoverItemMove",type:"boolean",required:!1,default:!1},{name:"defaultCursor",type:"boolean",required:!1,default:!1}];class se{defaultOptions={};constructor(e){this.defaultOptions=this.generateDefault();for(let t in e)this.isValid(t,e[t])&&(this.defaultOptions[t]=e[t]);return this.defaultOptions}generateDefault(){const e=Y("name",ae);let t={};for(let n of e)t[n]=this.getOptionByKey(n).default;return t}isValid(e,t){if(!Y("name",ae).includes(e))return console.error(`${e} is not a valid option`),!1;const n=this.getOptionByKey(e);let r=!1;switch(n.type){case"number":r=Number.isInteger(t);break;case"enum":r=n.allowed.includes(t);break;case"boolean":r="boolean"==typeof t;break;default:r=!1}return r}getOptionByKey(e){return oe(ie("name",e),ae)}}n(942);const ue=e=>{if(e=new se(e),!Modernizr.touchevents){if("disable"!=e.outerStyle){var t=document.createElement("div");t.setAttribute("id","magicMouseCursor"),document.body.appendChild(t);var n=document.getElementById("magicMouseCursor")}if(!e.defaultCursor){document.body.style.cursor="none";var r=document.createElement("div");r.setAttribute("id","magicPointer"),document.body.appendChild(r);var o=document.getElementById("magicPointer")}if(n){n.style.width=e.outerWidth+"px",n.style.height=e.outerHeight+"px";var i=e.outerWidth,a=e.outerHeight,s=e.outerWidth,u=e.outerHeight}var c=0,l=0,f=0,d=0,p=!1;document.addEventListener("mousemove",(function(e){f=e.clientX,d=e.clientY,setTimeout((()=>{p||(c=e.clientX-i/2,l=e.clientY-a/2)}),50)})),document.querySelectorAll(".magic-hover").forEach(((t,n)=>{t.addEventListener("mouseenter",(n=>{switch(e.hoverEffect){case"circle-move":y(t),e.hoverItemMove&&g(n,t);break;case"pointer-blur":m(t,"pointer-blur");break;case"pointer-overlay":m(t,"pointer-overlay")}})),t.addEventListener("mouseleave",(n=>{switch(t.style.transform="translate3d(0,0,0)",e.hoverEffect){case"circle-move":A();break;case"pointer-blur":v("pointer-blur");break;case"pointer-overlay":v("pointer-overlay")}}))})),document.querySelectorAll(".no-cursor").forEach(((e,t)=>{e.addEventListener("mouseenter",(e=>{n.style.opacity=0,o.style.opacity=0,document.body.style.cursor="auto"})),e.addEventListener("mouseleave",(e=>{n.style.opacity=1,o.style.opacity=1,document.body.style.cursor="none"}))}));var h=()=>{n&&(n.style.transform="matrix(1, 0, 0, 1, "+c+", "+l+")",n.style.width=i+"px",n.style.height=a+"px"),o&&(o.style.transform="matrix(1, 0, 0, 1, "+f+", "+d+") translate3d(-50%, -50%, 0)"),requestAnimationFrame(h)};requestAnimationFrame(h);const y=e=>{if(p=!0,n){n.style.transition="transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s",n.classList.add("is-hover");var t=event.currentTarget.getBoundingClientRect();e.classList.contains("magic-hover__square")?(n.classList.add("cursor-square"),c=t.left,l=t.top,i=t.width,a=t.height):(c=t.left,l=t.top,i=t.width,a=t.height)}o&&o.classList.add("is-hover")},A=()=>{p=!1,n&&(i=s,a=u,n.style.transition="transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s",n.classList.remove("cursor-square"),n.classList.remove("is-hover")),o&&o.classList.remove("is-hover")},m=(e,t)=>{o&&o.classList.add(t)},v=e=>{o&&o.classList.remove(e)},g=(e,t)=>{e.clientX,e.clientY,t.addEventListener("mousemove",(e=>{t.style.transform="matrix(1,0,0,1,"+(e.offsetX-e.target.offsetWidth/2)/2+", "+(e.offsetY-e.target.offsetHeight/2)/2+")"}))}}};class ce{constructor(e,t){this.element=e,"string"==typeof this.element&&(this.element=document.querySelector(this.element)),this.options=t}}})(),module.exports=r})();
//# sourceMappingURL=magicmouse.min.js.map