/*! For license information please see e8ea1d96.65651bdc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1147],{1217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(1331),r(1330)),a={id:"intro",title:"Subscriptions",sidebar_label:"Subscriptions"},c={unversionedId:"subscriptions/intro",id:"subscriptions/intro",isDocsHomePage:!1,title:"Subscriptions",description:"Graphback provides out of the box subscriptions support by providing one of the PubSubEngines",source:"@site/../docs/subscriptions/subscriptions.md",slug:"/subscriptions/intro",permalink:"/docs/next/subscriptions/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/subscriptions/subscriptions.md",version:"current",sidebar_label:"Subscriptions",sidebar:"docs",previous:{title:"Using SQLite with Graphback",permalink:"/docs/next/databases/sqlite"},next:{title:"Authentication and authorization for Graphback",permalink:"/docs/next/authentication/intro"}},u=[{value:"Subscriptions explained",id:"subscriptions-explained",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Changing Subscription Topics",id:"changing-subscription-topics",children:[]},{value:"Running example",id:"running-example",children:[]}],s={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback provides out of the box subscriptions support by providing one of the ",Object(i.b)("inlineCode",{parentName:"p"},"PubSubEngines"),"\nfrom ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-subscriptions"}),"https://github.com/apollographql/graphql-subscriptions")," library.\nDevelopers can connect to any publish subscribe mechanism that is officially supported by graphql-subscriptions\nor even write their own.\nGraphback templates by default using ",Object(i.b)("inlineCode",{parentName:"p"},"InMemoryPubSubEngine")," which is not designed to be used for production\nuse cases."),Object(i.b)("p",null,"We recomend following engines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AMQ (MQTT) using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/aerogear/graphql-mqtt-subscriptions"}),"https://github.com/aerogear/graphql-mqtt-subscriptions")),Object(i.b)("li",{parentName:"ul"},"Redis - using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/davidyaha/graphql-redis-subscriptions"}),"https://github.com/davidyaha/graphql-redis-subscriptions"))),Object(i.b)("h2",{id:"subscriptions-explained"},"Subscriptions explained"),Object(i.b)("p",null,"Graphback provides subscriptions for every type of the operation that is happening on the server.\nThis means that developers can explicitly subscribe to create, update and delete operations for particular resource."),Object(i.b)("p",null,"Subscriptions can be also suppressed by developers by enabling or disabling subscription CRUD flags when initializing Graphback server "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    {\n        ...\n        subCreate: true\n        subUpdate: true\n        subDelete: false\n    }\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"By default, Graphback uses an in-memory PubSub mechanism. You can configure your own in ",Object(i.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," through the ",Object(i.b)("inlineCode",{parentName:"p"},"serviceCreator"),"."),Object(i.b)("p",null,"In this example, we are using a MQTT enabled broker with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@aerogear/graphql-mqtt-subscriptions"}),Object(i.b)("inlineCode",{parentName:"a"},"@aerogear/graphql-mqtt-subscriptions")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI, createCRUDService } from 'graphback'\nimport { MQTTPubSub } from '@aerogear/graphql-mqtt-subscriptions';\n\nconst mqttConfig = {...};\n\nconst client = mqtt.connect(mqttConfig.mqttHost, mqttConfig);\n\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  // highlight-start\n  serviceCreator: createCRUDService({\n    pubSub: new MQTTPubSub({ client })\n  })\n  // highlight-end\n});\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In this example the default ",Object(i.b)("inlineCode",{parentName:"p"},"createCRUDService")," service creator is used. There can be variations in how to configure your PubSub mechanism depending on what service creator you choose to use."))),Object(i.b)("h2",{id:"changing-subscription-topics"},"Changing Subscription Topics"),Object(i.b)("p",null,"Some of the pub sub mechanism will require different format of the topic.\nGraphback CRUD services expose method that can be used to override how topics are build.\nFor example for AMQ we can create extension of the CRUD service as follows"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export class AMQCRUDService extends CrudService {\n    protected subscriptionTopicMapping(triggerType: GraphbackOperationType, objectName: string) {\n        // Support AMQ topic creation format\n        return `graphql/${objectName}_${triggerType}`\n    }\n}\n")),Object(i.b)("h2",{id:"running-example"},"Running example"),Object(i.b)("p",null,"If you wish to use authorization mechanism you can try it on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/datasync-starter"}),"DataSync starter")," project"))}p.isMDXComponent=!0},1330:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,d=l["".concat(a,".").concat(f)]||l[f]||b[f]||i;return r?o.a.createElement(d,c(c({ref:t},s),{},{components:r})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1331:function(e,t,r){"use strict";e.exports=r(1332)},1332:function(e,t,r){"use strict";var n=r(1333),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,c=60110,u=60112;t.Suspense=60113;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),a=l("react.provider"),c=l("react.context"),u=l("react.forward_ref"),t.Suspense=l("react.suspense"),s=l("react.memo"),p=l("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function y(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=g.prototype=new y;v.constructor=g,n(v,m.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,i={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(i[n]=t[n]);var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){for(var s=Array(u),p=0;p<u;p++)s[p]=arguments[p+2];i.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:O.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===n?"."+k(u,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),x(a,t,r,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(_,"$&/")+"/")+e)),t.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+k(c=e[s],s);u+=x(c,t,r,p,a)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),s=0;!(c=e.next()).done;)u+=x(c=c.value,t,r,p=n+k(c,s++),a);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function P(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function N(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function q(){var e=E.current;if(null===e)throw Error(f(321));return e}var R={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(f(143));return e}},t.Component=m,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var i=n({},e.props),a=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(p in t)j.call(t,p)&&!w.hasOwnProperty(p)&&(i[p]=void 0===t[p]&&void 0!==s?s[p]:t[p])}var p=arguments.length-2;if(1===p)i.children=r;else if(1<p){s=Array(p);for(var l=0;l<p;l++)s[l]=arguments[l+2];i.children=s}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="17.0.1"},1333:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=a(e),s=1;s<arguments.length;s++){for(var p in r=Object(arguments[s]))o.call(r,p)&&(u[p]=r[p]);if(n){c=n(r);for(var l=0;l<c.length;l++)i.call(r,c[l])&&(u[c[l]]=r[c[l]])}}return u}}}]);