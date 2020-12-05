/*! For license information please see 4e4a78e7.e38bfb36.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return n?c.a.createElement(d,i(i({ref:t},l),{},{components:n})):c.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1330:function(e,t,n){"use strict";e.exports=n(1331)},1331:function(e,t,n){"use strict";var r=n(1332),c=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,i=60110,u=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;c=p("react.element"),o=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),a=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||d}function g(){}function O(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var y=O.prototype=new g;y.constructor=O,r(y,h.prototype),y.isPureReactComponent=!0;var j={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)v.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:c,type:e,key:a,ref:i,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case c:case o:u=!0}}if(u)return a=a(u=e),e=""===r?"."+N(u,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),P(a,t,n,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=r+N(i=e[l],l);u+=P(i,t,n,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(i=e.next()).done;)u+=P(i=i.value,t,n,s=r+N(i,l++),a);else if("object"===i)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function D(e,t,n){if(null==e)return e;var r=[],c=0;return P(e,r,"","",(function(e){return t.call(n,e,c++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function S(){var e=E.current;if(null===e)throw Error(b(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:D,forEach:function(e,t,n){D(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(b(143));return e}},t.Component=h,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(b(267,e));var o=r({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)v.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:c,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return S().useCallback(e,t)},t.useContext=function(e,t){return S().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return S().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return S().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return S().useLayoutEffect(e,t)},t.useMemo=function(e,t){return S().useMemo(e,t)},t.useReducer=function(e,t,n){return S().useReducer(e,t,n)},t.useRef=function(e){return S().useRef(e)},t.useState=function(e){return S().useState(e)},t.version="17.0.1"},1332:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var n,i,u=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))c.call(n,s)&&(u[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},462:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),o=(n(1330),n(1329)),a={id:"_clientdocuments_.clientdocuments",title:"ClientDocuments",sidebar_label:"ClientDocuments"},i={unversionedId:"api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",id:"api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",isDocsHomePage:!1,title:"ClientDocuments",description:"Represents generated templates for different operations",source:"@site/../docs/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments.md",slug:"/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",permalink:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments.md",version:"current",sidebar_label:"ClientDocuments"},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> fragments",id:"optional-fragments",children:[]},{value:"<code>Optional</code> mutations",id:"optional-mutations",children:[]},{value:"<code>Optional</code> queries",id:"optional-queries",children:[]},{value:"<code>Optional</code> subscriptions",id:"optional-subscriptions",children:[]}]}],l={rightToc:u};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Represents generated templates for different operations"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ClientDocuments"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-fragments"}),"fragments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-mutations"}),"mutations")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-queries"}),"queries")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-subscriptions"}),"subscriptions"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-fragments"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," fragments"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"fragments"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/732f660/packages/graphback-codegen-client/src/ClientDocuments.ts#L8"}),"graphback-codegen-client/src/ClientDocuments.ts:8"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-mutations"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," mutations"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"mutations"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/732f660/packages/graphback-codegen-client/src/ClientDocuments.ts#L7"}),"graphback-codegen-client/src/ClientDocuments.ts:7"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-queries"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," queries"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"queries"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/732f660/packages/graphback-codegen-client/src/ClientDocuments.ts#L6"}),"graphback-codegen-client/src/ClientDocuments.ts:6"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-subscriptions"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," subscriptions"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"subscriptions"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/732f660/packages/graphback-codegen-client/src/ClientDocuments.ts#L9"}),"graphback-codegen-client/src/ClientDocuments.ts:9"))))}s.isMDXComponent=!0}}]);