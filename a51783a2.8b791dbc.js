/*! For license information please see a51783a2.8b791dbc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[808],{1328:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,y=b["".concat(c,".").concat(f)]||b[f]||s[f]||a;return r?o.a.createElement(y,u(u({ref:t},i),{},{components:r})):o.a.createElement(y,u({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1329:function(e,t,r){"use strict";e.exports=r(1330)},1330:function(e,t,r){"use strict";var n=r(1331),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||j}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var N=_.prototype=new g;N.constructor=_,n(N,v.prototype),N.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)w.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var i=Array(l),p=0;p<l;p++)i[p]=arguments[p+2];o.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,E=[];function T(e,t,r,n){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return r(n,e,""===t?"."+I(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=t+I(o=e[l],l);u+=$(o,i,r,n)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(o=e.next()).done;)u+=$(o=o.value,i=t+I(o,l++),r,n);else if("object"===o)throw r=""+e,Error(O(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function R(e,t,r){return null==e?0:$(e,"",t,r)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(P,"$&/")+"/"),R(e,F,t=T(t,a,n,o)),D(t)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(O(321));return e}var q={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,A,t=T(null,null,t,r)),D(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(O(143));return e}},t.Component=v,t.Fragment=u,t.Profiler=i,t.PureComponent=_,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(O(267,e));var o=n({},e.props),c=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in t)w.call(t,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==i?i[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){i=Array(p);for(var b=0;b<p;b++)i[b]=arguments[b+2];o.children=i}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},1331:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,l=c(e),i=1;i<arguments.length;i++){for(var p in r=Object(arguments[i]))o.call(r,p)&&(l[p]=r[p]);if(n){u=n(r);for(var b=0;b<u.length;b++)a.call(r,u[b])&&(l[u[b]]=r[u[b]])}}return l}},878:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(1329),r(1328)),c={id:"_utils_converttype_",title:"utils/convertType",sidebar_label:"utils/convertType"},u={unversionedId:"api/graphback-core/modules/_utils_converttype_",id:"api/graphback-core/modules/_utils_converttype_",isDocsHomePage:!1,title:"utils/convertType",description:"Index",source:"@site/../docs/api/graphback-core/modules/_utils_converttype_.md",slug:"/api/graphback-core/modules/_utils_converttype_",permalink:"/docs/next/api/graphback-core/modules/_utils_converttype_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_utils_converttype_.md",version:"current",sidebar_label:"utils/convertType"},l=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"convertType",id:"converttype",children:[]},{value:"<code>Const</code> isDateObject",id:"const-isdateobject",children:[]}]}],i={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"functions"},"Functions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_converttype_#converttype"}),"convertType")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_converttype_#const-isdateobject"}),"isDateObject"))),Object(a.b)("h2",{id:"functions-1"},"Functions"),Object(a.b)("h3",{id:"converttype"},"convertType"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"convertType"),"(",Object(a.b)("inlineCode",{parentName:"p"},"value"),": any, ",Object(a.b)("inlineCode",{parentName:"p"},"toType"),": any): ",Object(a.b)("em",{parentName:"p"},"string | number | boolean | BigInt | ObjectID")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/68e0e3f/packages/graphback-core/src/utils/convertType.ts#L9"}),"packages/graphback-core/src/utils/convertType.ts:9"))),Object(a.b)("p",null,"Helper function to convert a value to another type"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"value")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value to convert")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"toType")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"convert value to this type")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"string | number | boolean | BigInt | ObjectID")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"const-isdateobject"},Object(a.b)("inlineCode",{parentName:"h3"},"Const")," isDateObject"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"isDateObject"),"(",Object(a.b)("inlineCode",{parentName:"p"},"value"),": any): ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/68e0e3f/packages/graphback-core/src/utils/convertType.ts#L43"}),"packages/graphback-core/src/utils/convertType.ts:43"))),Object(a.b)("p",null,"Check if value is a Date object"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"value")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"boolean")))}p.isMDXComponent=!0}}]);