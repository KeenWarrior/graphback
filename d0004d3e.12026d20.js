/*! For license information please see d0004d3e.12026d20.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1029],{1085:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),c=(n(1310),n(1309)),u={id:"_clientdocuments_",title:"ClientDocuments",sidebar_label:"ClientDocuments"},i={unversionedId:"api/graphback-codegen-client/modules/_clientdocuments_",id:"api/graphback-codegen-client/modules/_clientdocuments_",isDocsHomePage:!1,title:"ClientDocuments",description:"Index",source:"@site/../docs/api/graphback-codegen-client/modules/_clientdocuments_.md",slug:"/api/graphback-codegen-client/modules/_clientdocuments_",permalink:"/docs/next/api/graphback-codegen-client/modules/_clientdocuments_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/modules/_clientdocuments_.md",version:"current",sidebar_label:"ClientDocuments"},a=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]}]}],l={rightToc:a};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments"}),"ClientDocuments"))))}f.isMDXComponent=!0},1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=f(n),d=r,y=s["".concat(u,".").concat(d)]||s[d]||p[d]||c;return n?o.a.createElement(y,i(i({ref:t},l),{},{components:n})):o.a.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,u=new Array(c);u[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var l=2;l<c;l++)u[l]=n[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1310:function(e,t,n){"use strict";e.exports=n(1311)},1311:function(e,t,n){"use strict";var r=n(1312),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function j(){}function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var w=_.prototype=new j;w.constructor=_,r(w,O.prototype),w.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:c,type:e,key:u,ref:i,props:o,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,$=[];function R(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case u:i=!0}}if(i)return n(r,e,""===t?"."+N(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+N(o=e[a],a);i+=I(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=b&&e[b]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)i+=I(o=o.value,l=t+N(o,a++),n,r);else if("object"===o)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function T(e,t,n){return null==e?0:I(e,"",t,n)}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(E,"$&/")+"/"),T(e,M,t=R(t,c,r,o)),D(t)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,A,t=R(null,null,t,n)),D(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=l,t.PureComponent=_,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=k.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)S.call(t,f)&&!x.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:c,type:e.type,key:u,ref:i,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},1312:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,a=u(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(a[f]=n[f]);if(r){i=r(n);for(var s=0;s<i.length;s++)c.call(n,i[s])&&(a[i[s]]=n[i[s]])}}return a}}}]);