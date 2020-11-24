/*! For license information please see 25cfebb4.b67180ef.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1326:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=l(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(t),s=n,g=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return t?a.a.createElement(g,i(i({ref:r},u),{},{components:t})):a.a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=s;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1327:function(e,r,t){"use strict";e.exports=t(1328)},1328:function(e,r,t){"use strict";var n=t(1329),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,p=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,l=a?Symbol.for("react.provider"):60109,b=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,g=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function k(e,r,t){this.props=e,this.context=r,this.refs=j,this.updater=t||m}function y(){}function v(e,r,t){this.props=e,this.context=r,this.refs=j,this.updater=t||m}k.prototype.isReactComponent={},k.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,r,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var C=v.prototype=new y;C.constructor=v,n(C,k.prototype),C.isPureReactComponent=!0;var _={current:null},N=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function D(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)N.call(r,n)&&!w.hasOwnProperty(n)&&(a[n]=r[n]);var p=arguments.length-2;if(1===p)a.children=t;else if(1<p){for(var u=Array(p),l=0;l<p;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var G=/\/+/g,R=[];function P(e,r,t,n){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function S(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function U(e,r,t,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case c:i=!0}}if(i)return t(n,e,""===r?"."+$(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=r+$(a=e[p],p);i+=U(a,u,t,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=h&&e[h]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),p=0;!(a=e.next()).done;)i+=U(a=a.value,u=r+$(a,p++),t,n);else if("object"===a)throw t=""+e,Error(O(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function E(e,r,t){return null==e?0:U(e,"",r,t)}function $(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function L(e,r){e.func.call(e.context,r,e.count++)}function T(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?I(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(G,"$&/")+"/")+t)),n.push(e))}function I(e,r,t,n,a){var o="";null!=t&&(o=(""+t).replace(G,"$&/")+"/"),E(e,T,r=P(r,o,n,a)),S(r)}var A={current:null};function M(){var e=A.current;if(null===e)throw Error(O(321));return e}var q={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return I(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;E(e,L,r=P(null,null,r,t)),S(r)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var r=[];return I(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(O(143));return e}},r.Component=k,r.Fragment=i,r.Profiler=u,r.PureComponent=v,r.StrictMode=p,r.Suspense=s,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,r.cloneElement=function(e,r,t){if(null==e)throw Error(O(267,e));var a=n({},e.props),c=e.key,i=e.ref,p=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,p=_.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)N.call(r,l)&&!w.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){u=Array(l);for(var b=0;b<l;b++)u[b]=arguments[b+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:p}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:b,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},r.createElement=D,r.createFactory=function(e){var r=D.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:f,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:g,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return M().useCallback(e,r)},r.useContext=function(e,r){return M().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return M().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return M().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return M().useLayoutEffect(e,r)},r.useMemo=function(e,r){return M().useMemo(e,r)},r.useReducer=function(e,r,t){return M().useReducer(e,r,t)},r.useRef=function(e){return M().useRef(e)},r.useState=function(e){return M().useState(e)},r.version="16.14.0"},1329:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,i,p=c(e),u=1;u<arguments.length;u++){for(var l in t=Object(arguments[u]))a.call(t,l)&&(p[l]=t[l]);if(n){i=n(t);for(var b=0;b<i.length;b++)o.call(t,i[b])&&(p[i[b]]=t[i[b]])}}return p}},259:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(1327),t(1326)),c={id:"_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig",title:"GraphbackCRUDGeneratorConfig",sidebar_label:"GraphbackCRUDGeneratorConfig"},i={unversionedId:"api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig",id:"api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig",isDocsHomePage:!1,title:"GraphbackCRUDGeneratorConfig",description:"Configuration for global values for graphback",source:"@site/../docs/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig.md",slug:"/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig",permalink:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig.md",version:"current",sidebar_label:"GraphbackCRUDGeneratorConfig",sidebar:"docs",previous:{title:"GraphBackPluginEngineOptions",permalink:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackpluginengine_.graphbackpluginengineoptions"},next:{title:"CreateCRUDServiceOptions",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_createcrudservice_.createcrudserviceoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> create",id:"optional-create",children:[]},{value:"<code>Optional</code> delete",id:"optional-delete",children:[]},{value:"<code>Optional</code> find",id:"optional-find",children:[]},{value:"<code>Optional</code> findOne",id:"optional-findone",children:[]},{value:"<code>Optional</code> subCreate",id:"optional-subcreate",children:[]},{value:"<code>Optional</code> subDelete",id:"optional-subdelete",children:[]},{value:"<code>Optional</code> subUpdate",id:"optional-subupdate",children:[]},{value:"<code>Optional</code> update",id:"optional-update",children:[]}]}],u={rightToc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Configuration for global values for graphback"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GraphbackCRUDGeneratorConfig"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-create"}),"create")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-delete"}),"delete")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-find"}),"find")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-findone"}),"findOne")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-subcreate"}),"subCreate")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-subdelete"}),"subDelete")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-subupdate"}),"subUpdate")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackcrudgeneratorconfig_.graphbackcrudgeneratorconfig#optional-update"}),"update"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-create"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," create"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"create"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L6"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:6"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-delete"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," delete"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"delete"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L10"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:10"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-find"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," find"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"find"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L14"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:14"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-findone"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," findOne"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"findOne"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L12"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:12"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-subcreate"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," subCreate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"subCreate"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L16"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:16"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-subdelete"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," subDelete"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"subDelete"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L20"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:20"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-subupdate"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," subUpdate"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"subUpdate"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L18"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:18"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-update"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," update"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"update"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/93a5a06/packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts#L8"}),"packages/graphback-core/src/plugin/GraphbackCRUDGeneratorConfig.ts:8"))))}l.isMDXComponent=!0}}]);