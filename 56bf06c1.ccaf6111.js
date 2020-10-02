/*! For license information please see 56bf06c1.ccaf6111.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{1309:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,y=s["".concat(i,".").concat(b)]||s[b]||f[b]||o;return r?a.a.createElement(y,c(c({ref:t},p),{},{components:r})):a.a.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1310:function(e,t,r){"use strict";e.exports=r(1311)},1311:function(e,t,r){"use strict";var n=r(1312),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,y=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=_.prototype=new v;w.constructor=_,n(w,j.prototype),w.isPureReactComponent=!0;var k={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];a.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g,E=[];function T(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return r(n,e,""===t?"."+D(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=t+D(a=e[l],l);c+=$(a,p,r,n)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=m&&e[m]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),l=0;!(a=e.next()).done;)c+=$(a=a.value,p=t+D(a,l++),r,n);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function q(e,t,r){return null==e?0:$(e,"",t,r)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(R,"$&/")+"/"),q(e,I,t=T(t,o,n,a)),C(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(d(321));return e}var F={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,M,t=T(null,null,t,r)),C(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(d(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=p,t.PureComponent=_,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var a=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(u in t)P.call(t,u)&&!S.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==p?p[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){p=Array(u);for(var s=0;s<u;s++)p[s]=arguments[s+2];a.children=p}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1312:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,c,l=i(e),p=1;p<arguments.length;p++){for(var u in r=Object(arguments[p]))a.call(r,u)&&(l[u]=r[u]);if(n){c=n(r);for(var s=0;s<c.length;s++)o.call(r,c[s])&&(l[c[s]]=r[c[s]])}}return l}},479:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(1310),r(1309)),i={id:"_abstract_relationshiptypes_.onetomanyrelationship",title:"OneToManyRelationship",sidebar_label:"OneToManyRelationship"},c={unversionedId:"api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship",id:"api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship",isDocsHomePage:!1,title:"OneToManyRelationship",description:"Hierarchy",source:"@site/../docs/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship.md",slug:"/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship",permalink:"/docs/next/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship.md",version:"current",sidebar_label:"OneToManyRelationship"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"description",id:"description",children:[]},{value:"kind",id:"kind",children:[]},{value:"relation",id:"relation",children:[]},{value:"type",id:"type",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"DatabaseRelationship"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"OneToManyRelationship")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship#description"}),"description")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship#kind"}),"kind")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship#relation"}),"relation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_relationshiptypes_.onetomanyrelationship#type"}),"type"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"description"},"description"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"description"),": ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphql-migrations/src/abstract/RelationshipTypes.ts#L11"}),"abstract/RelationshipTypes.ts:11"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"kind"},"kind"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"kind"),": ",Object(o.b)("em",{parentName:"p"},'"OneToMany"')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Overrides void")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphql-migrations/src/abstract/RelationshipTypes.ts#L8"}),"abstract/RelationshipTypes.ts:8"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"relation"},"relation"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"relation"),": ",Object(o.b)("em",{parentName:"p"},"GraphQLObjectType")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphql-migrations/src/abstract/RelationshipTypes.ts#L9"}),"abstract/RelationshipTypes.ts:9"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},"GraphQLObjectType")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphql-migrations/src/abstract/RelationshipTypes.ts#L10"}),"abstract/RelationshipTypes.ts:10"))))}u.isMDXComponent=!0}}]);