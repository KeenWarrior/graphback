/*! For license information please see a671ca29.fa63352a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1330:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1331:function(e,t,r){"use strict";e.exports=r(1332)},1332:function(e,t,r){"use strict";var n=r(1333),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,l=60112;t.Suspense=60113;var u=60115,b=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),c=s("react.provider"),i=s("react.context"),l=s("react.forward_ref"),t.Suspense=s("react.suspense"),u=s("react.memo"),b=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function O(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=y.prototype;var j=h.prototype=new O;j.constructor=h,n(j,y.prototype),j.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,n)&&!v.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),b=0;b<l;b++)u[b]=arguments[b+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:g.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var k=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return c=c(l=e),e=""===n?"."+w(l,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(k,"$&/")+"/"),T(c,t,r,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),t.push(c)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var b=n+w(i=e[u],u);l+=T(i,t,r,b,c)}else if("function"==typeof(b=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=b.call(e),u=0;!(i=e.next()).done;)l+=T(i=i.value,t,r,b=n+w(i,u++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,r){if(null==e)return e;var n=[],a=0;return T(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function C(){var e=E.current;if(null===e)throw Error(d(321));return e}var M={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var o=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=g.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(b in t)_.call(t,b)&&!v.hasOwnProperty(b)&&(o[b]=void 0===t[b]&&void 0!==u?u[b]:t[b])}var b=arguments.length-2;if(1===b)o.children=r;else if(1<b){u=Array(b);for(var s=0;s<b;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return C().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,r){return C().useReducer(e,t,r)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.1"},1333:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),u=1;u<arguments.length;u++){for(var b in r=Object(arguments[u]))a.call(r,b)&&(l[b]=r[b]);if(n){i=n(r);for(var s=0;s<i.length;s++)o.call(r,i[s])&&(l[i[s]]=r[i[s]])}}return l}},885:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(1331),r(1330)),c={id:"_db_index_",title:"db/index",sidebar_label:"db/index"},i={unversionedId:"api/graphback-core/modules/_db_index_",id:"api/graphback-core/modules/_db_index_",isDocsHomePage:!1,title:"db/index",description:"Index",source:"@site/../docs/api/graphback-core/modules/_db_index_.md",slug:"/api/graphback-core/modules/_db_index_",permalink:"/docs/next/api/graphback-core/modules/_db_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_db_index_.md",version:"current",sidebar_label:"db/index"},l=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"DatabaseNameTransform",id:"databasenametransform",children:[]},{value:"DatabaseNameTransformDirection",id:"databasenametransformdirection",children:[]},{value:"ModelTableMap",id:"modeltablemap",children:[]},{value:"TableDataMap",id:"tabledatamap",children:[]},{value:"TableID",id:"tableid",children:[]},{value:"buildModelTableMap",id:"buildmodeltablemap",children:[]},{value:"defaultTableNameTransform",id:"defaulttablenametransform",children:[]},{value:"getColumnName",id:"getcolumnname",children:[]},{value:"getDatabaseArguments",id:"getdatabasearguments",children:[]},{value:"getPrimaryKey",id:"getprimarykey",children:[]},{value:"getTableName",id:"gettablename",children:[]},{value:"isAutoPrimaryKey",id:"isautoprimarykey",children:[]},{value:"transformForeignKeyName",id:"transformforeignkeyname",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#databasenametransform"}),"DatabaseNameTransform")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#databasenametransformdirection"}),"DatabaseNameTransformDirection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#modeltablemap"}),"ModelTableMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#tabledatamap"}),"TableDataMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#tableid"}),"TableID")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#buildmodeltablemap"}),"buildModelTableMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#defaulttablenametransform"}),"defaultTableNameTransform")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#getcolumnname"}),"getColumnName")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#getdatabasearguments"}),"getDatabaseArguments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#getprimarykey"}),"getPrimaryKey")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#gettablename"}),"getTableName")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#isautoprimarykey"}),"isAutoPrimaryKey")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_db_index_#transformforeignkeyname"}),"transformForeignKeyName"))),Object(o.b)("h2",{id:"references-1"},"References"),Object(o.b)("h3",{id:"databasenametransform"},"DatabaseNameTransform"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"DatabaseNameTransform"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"databasenametransformdirection"},"DatabaseNameTransformDirection"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"DatabaseNameTransformDirection"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"modeltablemap"},"ModelTableMap"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"ModelTableMap"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tabledatamap"},"TableDataMap"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"TableDataMap"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tableid"},"TableID"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"TableID"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"buildmodeltablemap"},"buildModelTableMap"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"buildModelTableMap"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"defaulttablenametransform"},"defaultTableNameTransform"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"defaultTableNameTransform"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getcolumnname"},"getColumnName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"getColumnName"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getdatabasearguments"},"getDatabaseArguments"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"getDatabaseArguments"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"getprimarykey"},"getPrimaryKey"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"getPrimaryKey"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"gettablename"},"getTableName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"getTableName"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"isautoprimarykey"},"isAutoPrimaryKey"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"isAutoPrimaryKey"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"transformforeignkeyname"},"transformForeignKeyName"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"transformForeignKeyName"),":"))}b.isMDXComponent=!0}}]);