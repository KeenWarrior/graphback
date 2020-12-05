/*! For license information please see 79470378.c0f973cb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(o,".").concat(f)]||s[f]||d[f]||c;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1330:function(e,t,n){"use strict";e.exports=n(1331)},1331:function(e,t,n){"use strict";var r=n(1332),a=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,u=60112;t.Suspense=60113;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),c=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),o=s("react.provider"),i=s("react.context"),u=s("react.forward_ref"),t.Suspense=s("react.suspense"),l=s("react.memo"),p=s("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function O(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function h(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=O.prototype;var j=y.prototype=new h;j.constructor=y,r(j,O.prototype),j.isPureReactComponent=!0;var g={current:null},_=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,c={},o=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)_.call(t,r)&&!v.hasOwnProperty(r)&&(c[r]=t[r]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];c.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:a,type:e,key:o,ref:i,props:c,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var k=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return o=o(u=e),e=""===r?"."+N(u,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),C(o,t,n,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(k,"$&/")+"/")+e)),t.push(o)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=r+N(i=e[l],l);u+=C(i,t,n,p,o)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(i=e.next()).done;)u+=C(i=i.value,t,n,p=r+N(i,l++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function S(e,t,n){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:S,forEach:function(e,t,n){S(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(f(143));return e}},t.Component=O,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var c=r({},e.props),o=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)_.call(t,p)&&!v.hasOwnProperty(p)&&(c[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)c.children=n;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];c.children=l}return{$$typeof:a,type:e.type,key:o,ref:i,props:c,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},1332:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,u=o(e),l=1;l<arguments.length;l++){for(var p in n=Object(arguments[l]))a.call(n,p)&&(u[p]=n[p]);if(r){i=r(n);for(var s=0;s<i.length;s++)c.call(n,i[s])&&(u[i[s]]=n[i[s]])}}return u}},664:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(1330),n(1329)),o={id:"_templates_index_",title:"templates/index",sidebar_label:"templates/index"},i={unversionedId:"api/graphback-codegen-client/modules/_templates_index_",id:"api/graphback-codegen-client/modules/_templates_index_",isDocsHomePage:!1,title:"templates/index",description:"Index",source:"@site/../docs/api/graphback-codegen-client/modules/_templates_index_.md",slug:"/api/graphback-codegen-client/modules/_templates_index_",permalink:"/docs/next/api/graphback-codegen-client/modules/_templates_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/modules/_templates_index_.md",version:"current",sidebar_label:"templates/index"},u=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"createClientDocumentsGQL",id:"createclientdocumentsgql",children:[]},{value:"createClientDocumentsTS",id:"createclientdocumentsts",children:[]},{value:"createFragments",id:"createfragments",children:[]},{value:"createMutation",id:"createmutation",children:[]},{value:"createQueries",id:"createqueries",children:[]},{value:"deleteMutation",id:"deletemutation",children:[]},{value:"expandedFragment",id:"expandedfragment",children:[]},{value:"findOneQuery",id:"findonequery",children:[]},{value:"findQuery",id:"findquery",children:[]},{value:"fragment",id:"fragment",children:[]},{value:"subscription",id:"subscription",children:[]},{value:"updateMutation",id:"updatemutation",children:[]}]}],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#createclientdocumentsgql"}),"createClientDocumentsGQL")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#createclientdocumentsts"}),"createClientDocumentsTS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#createfragments"}),"createFragments")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#createmutation"}),"createMutation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#createqueries"}),"createQueries")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#deletemutation"}),"deleteMutation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#expandedfragment"}),"expandedFragment")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#findonequery"}),"findOneQuery")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#findquery"}),"findQuery")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#fragment"}),"fragment")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#subscription"}),"subscription")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/modules/_templates_index_#updatemutation"}),"updateMutation"))),Object(c.b)("h2",{id:"references-1"},"References"),Object(c.b)("h3",{id:"createclientdocumentsgql"},"createClientDocumentsGQL"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createClientDocumentsGQL"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createclientdocumentsts"},"createClientDocumentsTS"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createClientDocumentsTS"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createfragments"},"createFragments"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createFragments"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createmutation"},"createMutation"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createMutation"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createqueries"},"createQueries"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createQueries"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"deletemutation"},"deleteMutation"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"deleteMutation"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"expandedfragment"},"expandedFragment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"expandedFragment"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findonequery"},"findOneQuery"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"findOneQuery"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findquery"},"findQuery"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"findQuery"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fragment"},"fragment"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"fragment"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscription"},"subscription"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"subscription"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"updatemutation"},"updateMutation"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"updateMutation"),":"))}p.isMDXComponent=!0}}]);