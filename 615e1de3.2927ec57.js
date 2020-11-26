/*! For license information please see 615e1de3.2927ec57.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1328:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1329:function(e,t,n){"use strict";e.exports=n(1330)},1330:function(e,t,n){"use strict";var a=n(1331),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,b=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,f=r?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}function N(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=y.prototype;var w=v.prototype=new N;w.constructor=v,a(w,y.prototype),w.isPureReactComponent=!0;var k={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var a,r={},i=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,a)&&!S.hasOwnProperty(a)&&(r[a]=t[a]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var b=Array(l),p=0;p<l;p++)b[p]=arguments[p+2];r.children=b}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===r[a]&&(r[a]=l[a]);return{$$typeof:o,type:e,key:i,ref:c,props:r,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var G=/\/+/g,D=[];function E(e,t,n,a){if(D.length){var r=D.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function _(e,t,n,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var c=!1;if(null===e)c=!0;else switch(r){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return n(a,e,""===t?"."+A(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var b=t+A(r=e[l],l);c+=_(r,b,n,a)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=h&&e[h]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),l=0;!(r=e.next()).done;)c+=_(r=r.value,b=t+A(r,l++),n,a);else if("object"===r)throw n=""+e,Error(O(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function I(e,t,n){return null==e?0:_(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,a,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(G,"$&/")+"/")+n)),a.push(e))}function $(e,t,n,a,r){var o="";null!=n&&(o=(""+n).replace(G,"$&/")+"/"),I(e,M,t=E(t,o,a,r)),P(t)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(O(321));return e}var U={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,n){if(null==e)return e;var a=[];return $(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;I(e,R,t=E(null,null,t,n)),P(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(O(143));return e}},t.Component=y,t.Fragment=c,t.Profiler=b,t.PureComponent=v,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(O(267,e));var r=a({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(p in t)C.call(t,p)&&!S.hasOwnProperty(p)&&(r[p]=void 0===t[p]&&void 0!==b?b[p]:t[p])}var p=arguments.length-2;if(1===p)r.children=n;else if(1<p){b=Array(p);for(var s=0;s<p;s++)b[s]=arguments[s+2];r.children=b}return{$$typeof:o,type:e.type,key:i,ref:c,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},1331:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),b=1;b<arguments.length;b++){for(var p in n=Object(arguments[b]))r.call(n,p)&&(l[p]=n[p]);if(a){c=a(n);for(var s=0;s<c.length;s++)o.call(n,c[s])&&(l[c[s]]=n[c[s]])}}return l}},555:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(1329),n(1328)),i={id:"scalars",title:"Graphback Scalars",sidebar_label:"Graphback Scalars"},c={unversionedId:"model/scalars",id:"model/scalars",isDocsHomePage:!1,title:"Graphback Scalars",description:"Graphback supports commonly used Int, Float, String, Boolean, ID GraphQL scalars types. On top of these scalars, Graphback goes a step further by bringing in support of additional integration of scalar types making writing modern applications easy. This integration, offers",source:"@site/../docs/model/scalars.md",slug:"/model/scalars",permalink:"/docs/next/model/scalars",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/model/scalars.md",version:"current",sidebar_label:"Graphback Scalars",sidebar:"docs",previous:{title:"Annotations",permalink:"/docs/next/model/annotations"},next:{title:"CRUD Overview",permalink:"/docs/next/crud/overview"}},l=[{value:"Table Summary",id:"table-summary",children:[]},{value:"Example Usage",id:"example-usage",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback supports commonly used ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/learn/schema/#scalar-types"}),Object(o.b)("inlineCode",{parentName:"a"},"Int"),", ",Object(o.b)("inlineCode",{parentName:"a"},"Float"),", ",Object(o.b)("inlineCode",{parentName:"a"},"String"),", ",Object(o.b)("inlineCode",{parentName:"a"},"Boolean"),", ",Object(o.b)("inlineCode",{parentName:"a"},"ID")," GraphQL scalars")," types. On top of these scalars, Graphback goes a step further by bringing in support of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#table-summary"}),"additional integration of scalar types")," making writing modern applications easy. This integration, offers "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Out of the box proven scalar resolvers thanks to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/graphql-scalars"}),"GraphQL Scalars")," library. "),Object(o.b)("li",{parentName:"ul"},"Generation of the required input types for filtering except for ",Object(o.b)("inlineCode",{parentName:"li"},"GraphbackJSONObject")," and ",Object(o.b)("inlineCode",{parentName:"li"},"GraphbackJSON"),".   "),Object(o.b)("li",{parentName:"ul"},"Automatic inferring of the required underlying database when using the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/graphql-migrations/intro"}),"GraphQL Migrations")," package.")),Object(o.b)("p",null,"The table below shows the scalar types that Graphback supports out of the box."),Object(o.b)("h2",{id:"table-summary"},"Table Summary"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Scalar"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Database Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackTime")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A time string at UTC, such as 10:15:30Z, compliant with the ",Object(o.b)("inlineCode",{parentName:"td"},"full-time")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"time"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackDate")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A date string, such as 2007-12-03, compliant with the ",Object(o.b)("inlineCode",{parentName:"td"},"full-date")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"date"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackDateTime")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the ",Object(o.b)("inlineCode",{parentName:"td"},"date-time")," format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"datetime"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackObjectID")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A field whose value conforms with the standard mongodb object ID as described here: ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId"}),"https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId"),". You will need to have the ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.npmjs.com/package/mongodb"}),Object(o.b)("inlineCode",{parentName:"a"},"mongodb"))," package installed in order to use this"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"varchar(24)"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackJSONObject")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"JSONObject")," scalar type represents JSON objects as specified by ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"}),"ECMA-404"),"."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"json"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackJSON")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"JSON")," scalar type represents JSON values as specified by ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"}),"ECMA-404"),"."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"json"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GraphbackTimestamp")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The javascript ",Object(o.b)("inlineCode",{parentName:"td"},"Date")," as integer. Type represents date and time as number of milliseconds from start of UNIX epoch."),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"timestamp"))))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To be able to use either of those scalars, they will need to be defined in your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/model/datamodel"}),"Graphback Business Model")," file as shown in the example below."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Custom scalar types will need to be specified as you normally would i.e specifying the scalar in the model and configuring the corresponding resolvers."))),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("p",null,"Take an example ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," model, which uses each of the scalar types: ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),", ",Object(o.b)("inlineCode",{parentName:"p"},"String"),", ",Object(o.b)("inlineCode",{parentName:"p"},"GraphbackDateTime"),". "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'// highlight-start\n# Graphback DateTime scalar.\nscalar GraphbackDateTime\n// highlight-end\n\n""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  // highlight-start\n  """\n  Usage of the Graphback DateTime scalar\n  """\n  createdAt: GraphbackDateTime\n  // highlight-end\n}\n')),Object(o.b)("p",null,"The highlighted code shows how you can define and use one of the Graphback scalars."),Object(o.b)("p",null,"Graphback generates a filter input type for each model in the schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{4}","{4}":!0}),"input NoteFilter {\n  id: IDInput\n  title: StringInput\n  createdAt: GraphbackDateTimeInput\n  and: [NoteFilter!]\n  or: [NoteFilter!]\n  not: NoteFilter\n}\n")),Object(o.b)("p",null,"With the generated ",Object(o.b)("inlineCode",{parentName:"p"},"GraphbackDateTimeInput")," having the following fields:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"input GraphbackDateTimeInput {\n  ne: GraphbackDateTime\n  eq: GraphbackDateTime\n  le: GraphbackDateTime\n  lt: GraphbackDateTime\n  ge: GraphbackDateTime\n  gt: GraphbackDateTime\n  in: [GraphbackDateTime!]\n  between: [GraphbackDateTime!]\n}\n")),Object(o.b)("p",null,"So you can perform filtering of the data like this to retrive notes created after ",Object(o.b)("inlineCode",{parentName:"p"},"2020-07-27T12:11:41.288Z"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  findNotes(filter: {\n    createdAt: {\n      gt: "2020-07-27T12:11:41.288Z"\n    }\n  }) {\n    items {\n      id\n      title\n      createdAt\n    }\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For your convenience, Graphback generates a filter input for ",Object(o.b)("inlineCode",{parentName:"p"},"Date"),", ",Object(o.b)("inlineCode",{parentName:"p"},"DateTime"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Time"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Timestamp")," scalars. However we only fully support the scalars outlined above and we recommend you to use these."))))}p.isMDXComponent=!0}}]);