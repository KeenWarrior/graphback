/*! For license information please see 86ed232a.3fdfdc9a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{1326:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},f=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(t),y=n,d=f["".concat(a,".").concat(y)]||f[y]||p[y]||c;return t?o.a.createElement(d,u(u({ref:r},l),{},{components:t})):o.a.createElement(d,u({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=y;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1327:function(e,r,t){"use strict";e.exports=t(1328)},1328:function(e,r,t){"use strict";var n=t(1329),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}function _(){}function j(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=O.prototype;var w=j.prototype=new _;w.constructor=j,n(w,O.prototype),w.isPureReactComponent=!0;var S={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,o={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,n)&&!x.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:a,ref:u,props:o,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,R=[];function $(e,r,t,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case a:u=!0}}if(u)return t(n,e,""===r?"."+U(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+U(o=e[i],i);u+=I(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=v&&e[v]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=I(o=o.value,l=r+U(o,i++),t,n);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function T(e,r,t){return null==e?0:I(e,"",r,t)}function U(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function N(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,o){var c="";null!=t&&(c=(""+t).replace(E,"$&/")+"/"),T(e,A,r=$(r,c,n,o)),D(r)}var q={current:null};function L(){var e=q.current;if(null===e)throw Error(m(321));return e}var F={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,N,r=$(null,null,r,t)),D(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!P(e))throw Error(m(143));return e}},r.Component=O,r.Fragment=u,r.Profiler=l,r.PureComponent=j,r.StrictMode=i,r.Suspense=y,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var o=n({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=S.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)k.call(r,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:c,type:e.type,key:a,ref:u,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return L().useCallback(e,r)},r.useContext=function(e,r){return L().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return L().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return L().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return L().useLayoutEffect(e,r)},r.useMemo=function(e,r){return L().useMemo(e,r)},r.useReducer=function(e,r,t){return L().useReducer(e,r,t)},r.useRef=function(e){return L().useRef(e)},r.useState=function(e){return L().useState(e)},r.version="16.14.0"},1329:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,u,i=a(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))o.call(t,s)&&(i[s]=t[s]);if(n){u=n(t);for(var f=0;f<u.length;f++)c.call(t,u[f])&&(i[u[f]]=t[u[f]])}}return i}},721:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return s}));var n=t(3),o=t(7),c=(t(1327),t(1326)),a={id:"_services_datasynccrudservice_",title:"services/DataSyncCRUDService",sidebar_label:"services/DataSyncCRUDService"},u={unversionedId:"api/graphback-datasync/modules/_services_datasynccrudservice_",id:"api/graphback-datasync/modules/_services_datasynccrudservice_",isDocsHomePage:!1,title:"services/DataSyncCRUDService",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_services_datasynccrudservice_.md",slug:"/api/graphback-datasync/modules/_services_datasynccrudservice_",permalink:"/docs/next/api/graphback-datasync/modules/_services_datasynccrudservice_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_services_datasynccrudservice_.md",version:"current",sidebar_label:"services/DataSyncCRUDService"},i=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]}]}],l={rightToc:i};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_services_datasynccrudservice_.synclist"}),"SyncList"))))}s.isMDXComponent=!0}}]);