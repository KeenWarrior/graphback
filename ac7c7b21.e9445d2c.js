/*! For license information please see ac7c7b21.e9445d2c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1330:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(r),s=a,d=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return r?n.a.createElement(d,i(i({ref:t},u),{},{components:r})):n.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1331:function(e,t,r){"use strict";e.exports=r(1332)},1332:function(e,t,r){"use strict";var a=r(1333),n=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,p=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),o=b("react.portal"),t.Fragment=b("react.fragment"),t.StrictMode=b("react.strict_mode"),t.Profiler=b("react.profiler"),c=b("react.provider"),i=b("react.context"),p=b("react.forward_ref"),t.Suspense=b("react.suspense"),u=b("react.memo"),l=b("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function y(){}function O(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(s(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var j=O.prototype=new y;j.constructor=O,a(j,h.prototype),j.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var a,o={},c=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=t[a]);var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){for(var u=Array(p),l=0;l<p;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(a in p=e.defaultProps)void 0===o[a]&&(o[a]=p[a]);return{$$typeof:n,type:e,key:c,ref:i,props:o,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,a,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case n:case o:p=!0}}if(p)return c=c(p=e),e=""===a?"."+P(p,0):a,Array.isArray(c)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),E(c,t,r,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||p&&p.key===c.key?"":(""+c.key).replace(N,"$&/")+"/")+e)),t.push(c)),1;if(p=0,a=""===a?".":a+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=a+P(i=e[u],u);p+=E(i,t,r,l,c)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),u=0;!(i=e.next()).done;)p+=E(i=i.value,t,r,l=a+P(i,u++),c);else if("object"===i)throw t=""+e,Error(s(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function C(e,t,r){if(null==e)return e;var a=[],n=0;return E(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function M(){var e=x.current;if(null===e)throw Error(s(321));return e}var $={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(s(143));return e}},t.Component=h,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(s(267,e));var o=a({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,p=g.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)v.call(t,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){u=Array(l);for(var b=0;b<l;b++)u[b]=arguments[b+2];o.children=u}return{$$typeof:n,type:e.type,key:c,ref:i,props:o,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="17.0.1"},1333:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,i,p=c(e),u=1;u<arguments.length;u++){for(var l in r=Object(arguments[u]))n.call(r,l)&&(p[l]=r[l]);if(a){i=a(r);for(var b=0;b<i.length;b++)o.call(r,i[b])&&(p[i[b]]=r[i[b]])}}return p}},918:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(1331),r(1330)),c={id:"_db_datamapper_.tabledatamap",title:"TableDataMap",sidebar_label:"TableDataMap"},i={unversionedId:"api/graphback-core/interfaces/_db_datamapper_.tabledatamap",id:"api/graphback-core/interfaces/_db_datamapper_.tabledatamap",isDocsHomePage:!1,title:"TableDataMap",description:"Hierarchy",source:"@site/../docs/api/graphback-core/interfaces/_db_datamapper_.tabledatamap.md",slug:"/api/graphback-core/interfaces/_db_datamapper_.tabledatamap",permalink:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tabledatamap",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_db_datamapper_.tabledatamap.md",version:"current",sidebar_label:"TableDataMap"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> data",id:"optional-data",children:[]},{value:"<code>Optional</code> fieldMap",id:"optional-fieldmap",children:[]},{value:"<code>Optional</code> idField",id:"optional-idfield",children:[]},{value:"<code>Optional</code> table",id:"optional-table",children:[]}]}],u={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TableDataMap"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tabledatamap#optional-data"}),"data")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tabledatamap#optional-fieldmap"}),"fieldMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tabledatamap#optional-idfield"}),"idField")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tabledatamap#optional-table"}),"table"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-data"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," data"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"data"),"? : ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/db/dataMapper.ts#L6"}),"packages/graphback-core/src/db/dataMapper.ts:6"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-fieldmap"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," fieldMap"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"fieldMap"),"? : ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/db/dataMapper.ts#L7"}),"packages/graphback-core/src/db/dataMapper.ts:7"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-idfield"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," idField"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"idField"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tableid"}),"TableID"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/db/dataMapper.ts#L4"}),"packages/graphback-core/src/db/dataMapper.ts:4"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-table"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," table"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"table"),"? : ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b947d2b/packages/graphback-core/src/db/dataMapper.ts#L5"}),"packages/graphback-core/src/db/dataMapper.ts:5"))))}l.isMDXComponent=!0}}]);