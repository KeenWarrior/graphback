/*! For license information please see aa158f7b.80183066.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1309:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(t),b=n,y=p["".concat(c,".").concat(b)]||p[b]||s[b]||a;return t?o.a.createElement(y,u(u({ref:r},l),{},{components:t})):o.a.createElement(y,u({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1310:function(e,r,t){"use strict";e.exports=t(1311)},1311:function(e,r,t){"use strict";var n=t(1312),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}function j(){}function S(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var k=S.prototype=new j;k.constructor=S,n(k,g.prototype),k.isPureReactComponent=!0;var w={current:null},_=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,o={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,x=[];function R(e,r,t,n){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function D(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return t(n,e,""===r?"."+q(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+q(o=e[i],i);u+=D(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=D(o=o.value,l=r+q(o,i++),t,n);else if("object"===o)throw t=""+e,Error(v(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function T(e,r,t){return null==e?0:D(e,"",r,t)}function q(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function U(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?I(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+t)),n.push(e))}function I(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(N,"$&/")+"/"),T(e,A,r=R(r,a,n,o)),$(r)}var M={current:null};function B(){var e=M.current;if(null===e)throw Error(v(321));return e}var G={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return I(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,U,r=R(null,null,r,t)),$(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return I(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(v(143));return e}},r.Component=g,r.Fragment=u,r.Profiler=l,r.PureComponent=S,r.StrictMode=i,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,r.cloneElement=function(e,r,t){if(null==e)throw Error(v(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=w.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)_.call(r,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return B().useCallback(e,r)},r.useContext=function(e,r){return B().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return B().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return B().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return B().useLayoutEffect(e,r)},r.useMemo=function(e,r){return B().useMemo(e,r)},r.useReducer=function(e,r,t){return B().useReducer(e,r,t)},r.useRef=function(e){return B().useRef(e)},r.useState=function(e){return B().useState(e)},r.version="16.13.1"},1312:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,u,i=c(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){u=n(t);for(var p=0;p<u.length;p++)a.call(t,u[p])&&(i[u[p]]=t[u[p]])}}return i}},890:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),a=(t(1310),t(1309)),c={id:"_graphbackserver_.servicebuilder",title:"ServiceBuilder",sidebar_label:"ServiceBuilder"},u={unversionedId:"api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",id:"api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",isDocsHomePage:!1,title:"ServiceBuilder",description:"Hierarchy",source:"@site/../docs/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder.md",slug:"/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",permalink:"/docs/next/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-serve/interfaces/_graphbackserver_.servicebuilder.md",version:"current",sidebar_label:"ServiceBuilder"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],l={rightToc:i};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ServiceBuilder"))),Object(a.b)("h2",{id:"callable"},"Callable"),Object(a.b)("p",null,"\u25b8 (",Object(a.b)("inlineCode",{parentName:"p"},"data"),": GraphbackDataProvider, ",Object(a.b)("inlineCode",{parentName:"p"},"sub"),": PubSub): ",Object(a.b)("em",{parentName:"p"},"Promise\u2039GraphbackCRUDService\u203a | GraphbackCRUDService")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphql-serve/src/GraphbackServer.ts#L13"}),"GraphbackServer.ts:13"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"data")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackDataProvider")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"sub")),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PubSub")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"Promise\u2039GraphbackCRUDService\u203a | GraphbackCRUDService")))}f.isMDXComponent=!0}}]);