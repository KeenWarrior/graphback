/*! For license information please see 87163e72.33e9aa3c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1326:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=a.a.createContext({}),l=function(e){var t=a.a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||o;return r?a.a.createElement(m,i(i({ref:t},f),{},{components:r})):a.a.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var f=2;f<o;f++)c[f]=r[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1327:function(e,t,r){"use strict";e.exports=r(1328)},1328:function(e,t,r){"use strict";var n=r(1329),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,f=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||j}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var w=_.prototype=new v;w.constructor=_,n(w,g.prototype),w.isPureReactComponent=!0;var N={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,n)&&!P.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var f=Array(u),l=0;l<u;l++)f[l]=arguments[l+2];a.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:N.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g,E=[];function D(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function q(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return r(n,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=t+T(a=e[u],u);i+=q(a,f,r,n)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=y&&e[y]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),u=0;!(a=e.next()).done;)i+=q(a=a.value,f=t+T(a,u++),r,n);else if("object"===a)throw r=""+e,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function R(e,t,r){return null==e?0:q(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(C,"$&/")+"/"),R(e,I,t=D(t,o,n,a)),$(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(O(321));return e}var L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,A,t=D(null,null,t,r)),$(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(O(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=f,t.PureComponent=_,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(O(267,e));var a=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=N.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)x.call(t,l)&&!P.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){f=Array(l);for(var p=0;p<l;p++)f[p]=arguments[p+2];a.children=f}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},1329:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,u=c(e),f=1;f<arguments.length;f++){for(var l in r=Object(arguments[f]))a.call(r,l)&&(u[l]=r[l]);if(n){i=n(r);for(var p=0;p<i.length;p++)o.call(r,i[p])&&(u[i[p]]=r[i[p]])}}return u}},723:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(1327),r(1326)),c={id:"_diff_computediff_",title:"diff/computeDiff",sidebar_label:"diff/computeDiff"},i={unversionedId:"api/graphql-migrations/modules/_diff_computediff_",id:"api/graphql-migrations/modules/_diff_computediff_",isDocsHomePage:!1,title:"diff/computeDiff",description:"Index",source:"@site/../docs/api/graphql-migrations/modules/_diff_computediff_.md",slug:"/api/graphql-migrations/modules/_diff_computediff_",permalink:"/docs/next/api/graphql-migrations/modules/_diff_computediff_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/modules/_diff_computediff_.md",version:"current",sidebar_label:"diff/computeDiff"},u=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"computeDiff",id:"computediff",children:[]}]}],f={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/modules/_diff_computediff_#computediff"}),"computeDiff"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"computediff"},"computeDiff"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"computeDiff"),"(",Object(o.b)("inlineCode",{parentName:"p"},"from"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"to"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),", ",Object(o.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(o.b)("em",{parentName:"p"},"Promise\u2039",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]\u203a")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphql-migrations/src/diff/computeDiff.ts#L9"}),"diff/computeDiff.ts:9"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"from"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"))),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"to"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"))),Object(o.b)("p",null,"\u25aa",Object(o.b)("inlineCode",{parentName:"p"},"Default value"),"  ",Object(o.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(o.b)("em",{parentName:"p"},"object"),"= {}"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"updateComments")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise\u2039",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation"}),"Operation"),"[]\u203a")))}l.isMDXComponent=!0}}]);