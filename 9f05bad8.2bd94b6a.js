/*! For license information please see 9f05bad8.2bd94b6a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[772],{1309:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1310:function(e,t,r){"use strict";e.exports=r(1311)},1311:function(e,t,r){"use strict";var n=r(1312),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var N=_.prototype=new v;N.constructor=_,n(N,g.prototype),N.isPureReactComponent=!0;var k={current:null},T=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},c=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)T.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===a[n]&&(a[n]=i[n]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,P=[];function C(e,t,r,n){if(P.length){var a=P.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function F(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function $(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case c:l=!0}}if(l)return r(n,e,""===t?"."+D(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var u=t+D(a=e[i],i);l+=$(a,u,r,n)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=O&&e[O]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),i=0;!(a=e.next()).done;)l+=$(a=a.value,u=t+D(a,i++),r,n);else if("object"===a)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return l}function R(e,t,r){return null==e?0:$(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?H(e,n,r,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function H(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(E,"$&/")+"/"),R(e,M,t=C(t,o,n,a)),F(t)}var A={current:null};function L(){var e=A.current;if(null===e)throw Error(y(321));return e}var U={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return H(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,I,t=C(null,null,t,r)),F(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return H(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(y(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=u,t.PureComponent=_,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var a=n({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)T.call(t,s)&&!w.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},1312:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,l,i=c(e),u=1;u<arguments.length;u++){for(var s in r=Object(arguments[u]))a.call(r,s)&&(i[s]=r[s]);if(n){l=n(r);for(var p=0;p<l.length;p++)o.call(r,l[p])&&(i[l[p]]=r[l[p]])}}return i}},827:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(1310),r(1309)),c={id:"_utils_fieldtransformhelpers_",title:"utils/fieldTransformHelpers",sidebar_label:"utils/fieldTransformHelpers"},l={unversionedId:"api/graphback-core/modules/_utils_fieldtransformhelpers_",id:"api/graphback-core/modules/_utils_fieldtransformhelpers_",isDocsHomePage:!1,title:"utils/fieldTransformHelpers",description:"Index",source:"@site/../docs/api/graphback-core/modules/_utils_fieldtransformhelpers_.md",slug:"/api/graphback-core/modules/_utils_fieldtransformhelpers_",permalink:"/docs/next/api/graphback-core/modules/_utils_fieldtransformhelpers_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_utils_fieldtransformhelpers_.md",version:"current",sidebar_label:"utils/fieldTransformHelpers"},i=[{value:"Index",id:"index",children:[{value:"Enumerations",id:"enumerations",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"FieldTransformMap",id:"fieldtransformmap",children:[]},{value:"FieldTransformer",id:"fieldtransformer",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getFieldTransformations",id:"getfieldtransformations",children:[]}]}],u={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"enumerations"},"Enumerations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/enums/_utils_fieldtransformhelpers_.transformtype"}),"TransformType"))),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_utils_fieldtransformhelpers_.fieldtransform"}),"FieldTransform"))),Object(o.b)("h3",{id:"type-aliases"},"Type aliases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_fieldtransformhelpers_#fieldtransformmap"}),"FieldTransformMap")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_fieldtransformhelpers_#fieldtransformer"}),"FieldTransformer"))),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_utils_fieldtransformhelpers_#getfieldtransformations"}),"getFieldTransformations"))),Object(o.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(o.b)("h3",{id:"fieldtransformmap"},"FieldTransformMap"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"FieldTransformMap"),": ",Object(o.b)("em",{parentName:"p"},"object")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L19"}),"packages/graphback-core/src/utils/fieldTransformHelpers.ts:19"))),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"[TransformType.CREATE]"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_utils_fieldtransformhelpers_.fieldtransform"}),"FieldTransform"),"[]"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"[TransformType.UPDATE]"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_utils_fieldtransformhelpers_.fieldtransform"}),"FieldTransform"),"[]")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"fieldtransformer"},"FieldTransformer"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"FieldTransformer"),": ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L4"}),"packages/graphback-core/src/utils/fieldTransformHelpers.ts:4"))),Object(o.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"value?"),": any): ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"value?")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"getfieldtransformations"},"getFieldTransformations"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getFieldTransformations"),"(",Object(o.b)("inlineCode",{parentName:"p"},"baseType"),": GraphQLObjectType): ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_utils_fieldtransformhelpers_#fieldtransformmap"}),"FieldTransformMap"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/utils/fieldTransformHelpers.ts#L24"}),"packages/graphback-core/src/utils/fieldTransformHelpers.ts:24"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"baseType")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/modules/_utils_fieldtransformhelpers_#fieldtransformmap"}),"FieldTransformMap"))))}s.isMDXComponent=!0}}]);