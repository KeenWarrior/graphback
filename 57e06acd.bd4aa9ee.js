/*! For license information please see 57e06acd.bd4aa9ee.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1330:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(a,".").concat(d)]||s[d]||f[d]||o;return r?c.a.createElement(b,u(u({ref:t},l),{},{components:r})):c.a.createElement(b,u({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1331:function(e,t,r){"use strict";e.exports=r(1332)},1332:function(e,t,r){"use strict";var n=r(1333),c=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,u=60110,i=60112;t.Suspense=60113;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;c=s("react.element"),o=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),a=s("react.provider"),u=s("react.context"),i=s("react.forward_ref"),t.Suspense=s("react.suspense"),l=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}function v(){}function O(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var m=O.prototype=new v;m.constructor=O,n(m,y.prototype),m.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,g={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!g.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:a,ref:u,props:o,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return a=a(i=e),e=""===n?"."+w(i,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(x,"$&/")+"/"),S(a,t,r,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(x,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=n+w(u=e[l],l);i+=S(u,t,r,p,a)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),l=0;!(u=e.next()).done;)i+=S(u=u.value,t,r,p=n+w(u,l++),a);else if("object"===u)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function E(e,t,r){if(null==e)return e;var n=[],c=0;return S(e,n,"","",(function(e){return t.call(r,e,c++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var o=n({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)j.call(t,p)&&!g.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:c,type:e.type,key:a,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},1333:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var r,u,i=a(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))c.call(r,p)&&(i[p]=r[p]);if(n){u=n(r);for(var s=0;s<u.length;s++)o.call(r,u[s])&&(i[u[s]]=r[u[s]])}}return i}},500:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),o=(r(1331),r(1330)),a={id:"_index_",title:"index",sidebar_label:"index"},u={unversionedId:"api/graphback-keycloak-authz/modules/_index_",id:"api/graphback-keycloak-authz/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/../docs/api/graphback-keycloak-authz/modules/_index_.md",slug:"/api/graphback-keycloak-authz/modules/_index_",permalink:"/docs/next/api/graphback-keycloak-authz/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-keycloak-authz/modules/_index_.md",version:"current",sidebar_label:"index"},i=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"AuthFilter",id:"authfilter",children:[]},{value:"CrudOperationAuthConfig",id:"crudoperationauthconfig",children:[]},{value:"CrudServiceAuthConfig",id:"crudserviceauthconfig",children:[]},{value:"CrudServicesAuthConfig",id:"crudservicesauthconfig",children:[]},{value:"GraphbackKeycloakContext",id:"graphbackkeycloakcontext",children:[]},{value:"KeycloakCrudService",id:"keycloakcrudservice",children:[]},{value:"KeycloakCrudServiceOptions",id:"keycloakcrudserviceoptions",children:[]},{value:"createKeycloakCRUDService",id:"createkeycloakcrudservice",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#authfilter"}),"AuthFilter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#crudoperationauthconfig"}),"CrudOperationAuthConfig")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#crudserviceauthconfig"}),"CrudServiceAuthConfig")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#crudservicesauthconfig"}),"CrudServicesAuthConfig")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#graphbackkeycloakcontext"}),"GraphbackKeycloakContext")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#keycloakcrudservice"}),"KeycloakCrudService")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#keycloakcrudserviceoptions"}),"KeycloakCrudServiceOptions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#createkeycloakcrudservice"}),"createKeycloakCRUDService"))),Object(o.b)("h2",{id:"references-1"},"References"),Object(o.b)("h3",{id:"authfilter"},"AuthFilter"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"AuthFilter"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"crudoperationauthconfig"},"CrudOperationAuthConfig"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"CrudOperationAuthConfig"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"crudserviceauthconfig"},"CrudServiceAuthConfig"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"CrudServiceAuthConfig"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"crudservicesauthconfig"},"CrudServicesAuthConfig"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"CrudServicesAuthConfig"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"graphbackkeycloakcontext"},"GraphbackKeycloakContext"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"GraphbackKeycloakContext"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"keycloakcrudservice"},"KeycloakCrudService"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"KeycloakCrudService"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"keycloakcrudserviceoptions"},"KeycloakCrudServiceOptions"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"KeycloakCrudServiceOptions"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"createkeycloakcrudservice"},"createKeycloakCRUDService"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"createKeycloakCRUDService"),":"))}p.isMDXComponent=!0}}]);