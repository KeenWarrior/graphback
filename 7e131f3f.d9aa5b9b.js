/*! For license information please see 7e131f3f.d9aa5b9b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1330:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=b(r),f=n,d=l["".concat(o,".").concat(f)]||l[f]||s[f]||c;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1331:function(e,t,r){"use strict";e.exports=r(1332)},1332:function(e,t,r){"use strict";var n=r(1333),a=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,u=60112;t.Suspense=60113;var p=60115,b=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;a=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),o=l("react.provider"),i=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),p=l("react.memo"),b=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function O(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function h(){}function j(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=O.prototype;var y=j.prototype=new h;y.constructor=j,n(y,O.prototype),y.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,c={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!_.hasOwnProperty(n)&&(c[n]=t[n]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var p=Array(u),b=0;b<u;b++)p[b]=arguments[b+2];c.children=p}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:a,type:e,key:o,ref:i,props:c,_owner:g.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var w=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return o=o(u=e),e=""===n?"."+C(u,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),x(o,t,r,"",(function(e){return e}))):null!=o&&(N(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var b=n+C(i=e[p],p);u+=x(i,t,r,b,o)}else if("function"==typeof(b=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e)))for(e=b.call(e),p=0;!(i=e.next()).done;)u+=x(i=i.value,t,r,b=n+C(i,p++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function P(e,t,r){if(null==e)return e;var n=[],a=0;return x(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function D(){var e=E.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(f(143));return e}},t.Component=O,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var c=n({},e.props),o=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(b in t)v.call(t,b)&&!_.hasOwnProperty(b)&&(c[b]=void 0===t[b]&&void 0!==p?p[b]:t[b])}var b=arguments.length-2;if(1===b)c.children=r;else if(1<b){p=Array(b);for(var l=0;l<b;l++)p[l]=arguments[l+2];c.children=p}return{$$typeof:a,type:e.type,key:o,ref:i,props:c,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return D().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,r){return D().useReducer(e,t,r)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.1"},1333:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,u=o(e),p=1;p<arguments.length;p++){for(var b in r=Object(arguments[p]))a.call(r,b)&&(u[b]=r[b]);if(n){i=n(r);for(var l=0;l<i.length;l++)c.call(r,i[l])&&(u[i[l]]=r[i[l]])}}return u}},681:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(1331),r(1330)),o={id:"_runtime_interfaces_",title:"runtime/interfaces",sidebar_label:"runtime/interfaces"},i={unversionedId:"api/graphback-core/modules/_runtime_interfaces_",id:"api/graphback-core/modules/_runtime_interfaces_",isDocsHomePage:!1,title:"runtime/interfaces",description:"Index",source:"@site/../docs/api/graphback-core/modules/_runtime_interfaces_.md",slug:"/api/graphback-core/modules/_runtime_interfaces_",permalink:"/docs/next/api/graphback-core/modules/_runtime_interfaces_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_runtime_interfaces_.md",version:"current",sidebar_label:"runtime/interfaces"},u=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"DataProviderCreator",id:"dataprovidercreator",children:[]},{value:"ServiceCreator",id:"servicecreator",children:[]},{value:"SortDirection",id:"sortdirection",children:[]}]}],p={rightToc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackcontext"}),"GraphbackContext")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackorderby"}),"GraphbackOrderBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"}),"GraphbackPage")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.graphbackserviceconfigmap"}),"GraphbackServiceConfigMap"))),Object(c.b)("h3",{id:"type-aliases"},"Type aliases"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#dataprovidercreator"}),"DataProviderCreator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#servicecreator"}),"ServiceCreator")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_runtime_interfaces_#sortdirection"}),"SortDirection"))),Object(c.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(c.b)("h3",{id:"dataprovidercreator"},"DataProviderCreator"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"DataProviderCreator"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/runtime/interfaces.ts#L50"}),"packages/graphback-core/src/runtime/interfaces.ts:50"))),Object(c.b)("p",null,"Creator method that can be used by underlying implementation to create new data service"),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"servicecreator"},"ServiceCreator"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"ServiceCreator"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/runtime/interfaces.ts#L55"}),"packages/graphback-core/src/runtime/interfaces.ts:55"))),Object(c.b)("p",null,"Creator method that can be used by underlying implementation to create new data service"),Object(c.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),", ",Object(c.b)("inlineCode",{parentName:"p"},"dataProvider"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"}),"GraphbackCRUDService"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"dataProvider")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider"}),"GraphbackDataProvider"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sortdirection"},"SortDirection"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"SortDirection"),": ",Object(c.b)("em",{parentName:"p"},'"asc" | "desc"')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/runtime/interfaces.ts#L28"}),"packages/graphback-core/src/runtime/interfaces.ts:28"))))}b.isMDXComponent=!0}}]);