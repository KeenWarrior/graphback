/*! For license information please see a51783a2.4c6f9d66.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{1329:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,d=b["".concat(c,".").concat(f)]||b[f]||s[f]||o;return r?a.a.createElement(d,u(u({ref:t},l),{},{components:r})):a.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1330:function(e,t,r){"use strict";e.exports=r(1331)},1331:function(e,t,r){"use strict";var n=r(1332),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,u=60110,i=60112;t.Suspense=60113;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;a=b("react.element"),o=b("react.portal"),t.Fragment=b("react.fragment"),t.StrictMode=b("react.strict_mode"),t.Profiler=b("react.profiler"),c=b("react.provider"),u=b("react.context"),i=b("react.forward_ref"),t.Suspense=b("react.suspense"),l=b("react.memo"),p=b("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=m.prototype;var v=j.prototype=new O;v.constructor=j,n(v,m.prototype),v.isPureReactComponent=!0;var h={current:null},g=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)g.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:h.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var k=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case a:case o:i=!0}}if(i)return c=c(i=e),e=""===n?"."+C(i,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),P(c,t,r,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),t.push(c)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+C(u=e[l],l);i+=P(u,t,r,p,c)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(u=e.next()).done;)i+=P(u=u.value,t,r,p=n+C(u,l++),c);else if("object"===u)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function E(e,t,r){if(null==e)return e;var n=[],a=0;return P(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function x(){var e=T.current;if(null===e)throw Error(f(321));return e}var D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:h,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=m,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=h.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)g.call(t,p)&&!_.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){l=Array(p);for(var b=0;b<p;b++)l[b]=arguments[b+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return x().useCallback(e,t)},t.useContext=function(e,t){return x().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return x().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return x().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return x().useLayoutEffect(e,t)},t.useMemo=function(e,t){return x().useMemo(e,t)},t.useReducer=function(e,t,r){return x().useReducer(e,t,r)},t.useRef=function(e){return x().useRef(e)},t.useState=function(e){return x().useState(e)},t.version="17.0.1"},1332:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,u,i=c(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))a.call(r,p)&&(i[p]=r[p]);if(n){u=n(r);for(var b=0;b<u.length;b++)o.call(r,u[b])&&(i[u[b]]=r[u[b]])}}return i}},879:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(1330),r(1329)),c={id:"_utils_converttype_",title:"utils/convertType",sidebar_label:"utils/convertType"},u={unversionedId:"api/graphback-core/modules/_utils_converttype_",id:"api/graphback-core/modules/_utils_converttype_",isDocsHomePage:!1,title:"utils/convertType",description:"Index",source:"@site/../docs/api/graphback-core/modules/_utils_converttype_.md",slug:"/api/graphback-core/modules/_utils_converttype_",permalink:"/docs/next/api/graphback-core/modules/_utils_converttype_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_utils_converttype_.md",version:"current",sidebar_label:"utils/convertType"},i=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"convertType",id:"converttype",children:[]},{value:"<code>Const</code> isDateObject",id:"const-isdateobject",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_converttype_#converttype"}),"convertType")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_converttype_#const-isdateobject"}),"isDateObject"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"converttype"},"convertType"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"convertType"),"(",Object(o.b)("inlineCode",{parentName:"p"},"value"),": any, ",Object(o.b)("inlineCode",{parentName:"p"},"toType"),": any): ",Object(o.b)("em",{parentName:"p"},"string | number | boolean | BigInt | ObjectID")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/732f660/packages/graphback-core/src/utils/convertType.ts#L9"}),"packages/graphback-core/src/utils/convertType.ts:9"))),Object(o.b)("p",null,"Helper function to convert a value to another type"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value to convert")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"toType")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"convert value to this type")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"string | number | boolean | BigInt | ObjectID")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"const-isdateobject"},Object(o.b)("inlineCode",{parentName:"h3"},"Const")," isDateObject"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"isDateObject"),"(",Object(o.b)("inlineCode",{parentName:"p"},"value"),": any): ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/732f660/packages/graphback-core/src/utils/convertType.ts#L43"}),"packages/graphback-core/src/utils/convertType.ts:43"))),Object(o.b)("p",null,"Check if value is a Date object"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"boolean")))}p.isMDXComponent=!0}}]);