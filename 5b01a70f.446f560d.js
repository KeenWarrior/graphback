/*! For license information please see 5b01a70f.446f560d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),f=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=f(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=f(n),s=r,d=p["".concat(c,".").concat(s)]||p[s]||b[s]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1310:function(e,t,n){"use strict";e.exports=n(1311)},1311:function(e,t,n){"use strict";var r=n(1312),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,f=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}function v(){}function _(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var k=_.prototype=new v;k.constructor=_,r(k,j.prototype),k.isPureReactComponent=!0;var N={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,a={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),f=0;f<i;f++)u[f]=arguments[f+2];a.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:N.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,E=[];function R(e,t,n,r){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return n(r,e,""===t?"."+I(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var u=t+I(a=e[i],i);l+=$(a,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),i=0;!(a=e.next()).done;)l+=$(a=a.value,u=t+I(a,i++),n,r);else if("object"===a)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function D(e,t,n){return null==e?0:$(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(P,"$&/")+"/"),D(e,M,t=R(t,o,r,a)),T(t)}var G={current:null};function U(){var e=G.current;if(null===e)throw Error(g(321));return e}var q={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,L,t=R(null,null,t,n)),T(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=l,t.Profiler=u,t.PureComponent=_,t.StrictMode=i,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=N.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in t)C.call(t,f)&&!w.hasOwnProperty(f)&&(a[f]=void 0===t[f]&&void 0!==u?u[f]:t[f])}var f=arguments.length-2;if(1===f)a.children=n;else if(1<f){u=Array(f);for(var p=0;p<f;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1312:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,i=c(e),u=1;u<arguments.length;u++){for(var f in n=Object(arguments[u]))a.call(n,f)&&(i[f]=n[f]);if(r){l=r(n);for(var p=0;p<l.length;p++)o.call(n,l[p])&&(i[l[p]]=n[l[p]])}}return i}},505:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),o=(n(1310),n(1309)),c={id:"_util_.globalconflictconfig",title:"GlobalConflictConfig",sidebar_label:"GlobalConflictConfig"},l={unversionedId:"api/graphback-datasync/interfaces/_util_.globalconflictconfig",id:"api/graphback-datasync/interfaces/_util_.globalconflictconfig",isDocsHomePage:!1,title:"GlobalConflictConfig",description:"Interface for global configuration of conflicts",source:"@site/../docs/api/graphback-datasync/interfaces/_util_.globalconflictconfig.md",slug:"/api/graphback-datasync/interfaces/_util_.globalconflictconfig",permalink:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/interfaces/_util_.globalconflictconfig.md",version:"current",sidebar_label:"GlobalConflictConfig"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> conflictResolution",id:"optional-conflictresolution",children:[]},{value:"<code>Optional</code> deltaTTL",id:"optional-deltattl",children:[]},{value:"<code>Optional</code> enabled",id:"optional-enabled",children:[]},{value:"<code>Optional</code> models",id:"optional-models",children:[]}]}],u={rightToc:i};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Interface for global configuration of conflicts"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"GlobalConflictConfig")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-conflictresolution"}),"conflictResolution")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-deltattl"}),"deltaTTL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-enabled"}),"enabled")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-models"}),"models"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-conflictresolution"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," conflictResolution"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"conflictResolution"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-conflictresolution"}),"conflictResolution"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-datasync/src/util.ts#L102"}),"packages/graphback-datasync/src/util.ts:102"))),Object(o.b)("p",null,"One of the conflict resolutions strategies:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ThrowOnConflict,"),Object(o.b)("li",{parentName:"ul"},"ClientSideWins,"),Object(o.b)("li",{parentName:"ul"},"ServerSideWins")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-deltattl"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," deltaTTL"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"deltaTTL"),"? : ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-deltattl"}),"deltaTTL"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-datasync/src/util.ts#L106"}),"packages/graphback-datasync/src/util.ts:106"))),Object(o.b)("p",null,"Value in seconds used to delete old history entries wth diffs that may no longer be needed."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," enabled"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"enabled"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),".",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig#optional-enabled"}),"enabled"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-datasync/src/util.ts#L95"}),"packages/graphback-datasync/src/util.ts:95"))),Object(o.b)("p",null,"Flag that enables conflict resolution"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-models"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," models"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"models"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconfigmap"}),"DataSyncModelConfigMap"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-datasync/src/util.ts#L43"}),"packages/graphback-datasync/src/util.ts:43"))))}f.isMDXComponent=!0}}]);