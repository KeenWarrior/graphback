/*! For license information please see 30676278.9685af72.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=o.a.createContext({}),f=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),s=f(n),d=r,b=s["".concat(u,".").concat(d)]||s[d]||p[d]||c;return n?o.a.createElement(b,i(i({ref:t},a),{},{components:n})):o.a.createElement(b,i({ref:t},a))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,u=new Array(c);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var a=2;a<c;a++)u[a]=n[a];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1310:function(e,t,n){"use strict";e.exports=n(1311)},1311:function(e,t,n){"use strict";var r=n(1312),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}function j(){}function _(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var C=_.prototype=new j;C.constructor=_,r(C,O.prototype),C.isPureReactComponent=!0;var w={current:null},P=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,o={},u=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)P.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var a=Array(l),f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:c,type:e,key:u,ref:i,props:o,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,R=[];function N(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function U(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case u:i=!0}}if(i)return n(r,e,""===t?"."+$(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=t+$(o=e[l],l);i+=U(o,a,n,r)}else if(null===e||"object"!=typeof e?a=null:a="function"==typeof(a=g&&e[g]||e["@@iterator"])?a:null,"function"==typeof a)for(e=a.call(e),l=0;!(o=e.next()).done;)i+=U(o=o.value,a=t+$(o,l++),n,r);else if("object"===o)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function I(e,t,n){return null==e?0:U(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(E,"$&/")+"/"),I(e,L,t=N(t,c,r,o)),D(t)}var M={current:null};function V(){var e=M.current;if(null===e)throw Error(m(321));return e}var q={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,T,t=N(null,null,t,n)),D(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=i,t.Profiler=a,t.PureComponent=_,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),u=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)P.call(t,f)&&!k.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){a=Array(f);for(var s=0;s<f;s++)a[s]=arguments[s+2];o.children=a}return{$$typeof:c,type:e.type,key:u,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return V().useCallback(e,t)},t.useContext=function(e,t){return V().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return V().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return V().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return V().useLayoutEffect(e,t)},t.useMemo=function(e,t){return V().useMemo(e,t)},t.useReducer=function(e,t,n){return V().useReducer(e,t,n)},t.useRef=function(e){return V().useRef(e)},t.useState=function(e){return V().useState(e)},t.version="16.13.1"},1312:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=u(e),a=1;a<arguments.length;a++){for(var f in n=Object(arguments[a]))o.call(n,f)&&(l[f]=n[f]);if(r){i=r(n);for(var s=0;s<i.length;s++)c.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}},294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),c=(n(1310),n(1309)),u={id:"_clientcrudplugin_",title:"ClientCRUDPlugin",sidebar_label:"ClientCRUDPlugin"},i={unversionedId:"api/graphback-codegen-client/modules/_clientcrudplugin_",id:"api/graphback-codegen-client/modules/_clientcrudplugin_",isDocsHomePage:!1,title:"ClientCRUDPlugin",description:"Index",source:"@site/../docs/api/graphback-codegen-client/modules/_clientcrudplugin_.md",slug:"/api/graphback-codegen-client/modules/_clientcrudplugin_",permalink:"/docs/next/api/graphback-codegen-client/modules/_clientcrudplugin_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/modules/_clientcrudplugin_.md",version:"current",sidebar_label:"ClientCRUDPlugin"},l=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Variables",id:"variables",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"<code>Const</code> CLIENT_CRUD_PLUGIN",id:"const-client_crud_plugin",children:[]}]}],a={rightToc:l};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"}),"ClientCRUDPlugin"))),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientcrudplugin_.clientgeneratorpluginconfig"}),"ClientGeneratorPluginConfig"))),Object(c.b)("h3",{id:"variables"},"Variables"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_clientcrudplugin_#const-client_crud_plugin"}),"CLIENT_CRUD_PLUGIN"))),Object(c.b)("h2",{id:"variables-1"},"Variables"),Object(c.b)("h3",{id:"const-client_crud_plugin"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," CLIENT_CRUD_PLUGIN"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"CLIENT_CRUD_PLUGIN"),": ",Object(c.b)("em",{parentName:"p"},'"ClientCRUDPlugin"'),' = "ClientCRUDPlugin"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-codegen-client/src/ClientCRUDPlugin.ts#L24"}),"graphback-codegen-client/src/ClientCRUDPlugin.ts:24"))))}f.isMDXComponent=!0}}]);