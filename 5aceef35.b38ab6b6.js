/*! For license information please see 5aceef35.b38ab6b6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1326:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=f(t),d=n,y=s["".concat(u,".").concat(d)]||s[d]||p[d]||a;return t?o.a.createElement(y,c(c({ref:r},l),{},{components:t})):o.a.createElement(y,c({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,u=new Array(a);u[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var l=2;l<a;l++)u[l]=t[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1327:function(e,r,t){"use strict";e.exports=t(1328)},1328:function(e,r,t){"use strict";var n=t(1329),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function _(){}function j(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var w=j.prototype=new _;w.constructor=j,n(w,O.prototype),w.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,o={},u=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)k.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,$=[];function R(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case u:c=!0}}if(c)return t(n,e,""===r?"."+A(e,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+A(o=e[i],i);c+=I(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=v&&e[v]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)c+=I(o=o.value,l=r+A(o,i++),t,n);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return c}function T(e,r,t){return null==e?0:I(e,"",r,t)}function A(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function N(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?U(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function U(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(C,"$&/")+"/"),T(e,M,r=R(r,a,n,o)),D(r)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(m(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return U(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,N,r=R(null,null,r,t)),D(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return U(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(m(143));return e}},r.Component=O,r.Fragment=c,r.Profiler=l,r.PureComponent=j,r.StrictMode=i,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var o=n({},e.props),u=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=S.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)k.call(r,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:u,ref:c,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:s,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return F().useCallback(e,r)},r.useContext=function(e,r){return F().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return F().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return F().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return F().useLayoutEffect(e,r)},r.useMemo=function(e,r){return F().useMemo(e,r)},r.useReducer=function(e,r,t){return F().useReducer(e,r,t)},r.useRef=function(e){return F().useRef(e)},r.useState=function(e){return F().useState(e)},r.version="16.14.0"},1329:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,c,i=u(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){c=n(t);for(var s=0;s<c.length;s++)a.call(t,c[s])&&(i[c[s]]=t[c[s]])}}return i}},516:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return f}));var n=t(3),o=t(7),a=(t(1327),t(1326)),u={id:"_providers_datasyncprovider_",title:"providers/DataSyncProvider",sidebar_label:"providers/DataSyncProvider"},c={unversionedId:"api/graphback-datasync/modules/_providers_datasyncprovider_",id:"api/graphback-datasync/modules/_providers_datasyncprovider_",isDocsHomePage:!1,title:"providers/DataSyncProvider",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_providers_datasyncprovider_.md",slug:"/api/graphback-datasync/modules/_providers_datasyncprovider_",permalink:"/docs/next/api/graphback-datasync/modules/_providers_datasyncprovider_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_providers_datasyncprovider_.md",version:"current",sidebar_label:"providers/DataSyncProvider"},i=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]}]}],l={rightToc:i};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"interfaces"},"Interfaces"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_providers_datasyncprovider_.datasyncprovider"}),"DataSyncProvider"))))}f.isMDXComponent=!0}}]);