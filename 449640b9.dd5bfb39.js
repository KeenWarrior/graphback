/*! For license information please see 449640b9.dd5bfb39.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1330:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,d=p["".concat(i,".").concat(h)]||p[h]||f[h]||a;return r?o.a.createElement(d,u(u({ref:t},l),{},{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1331:function(e,t,r){"use strict";e.exports=r(1332)},1332:function(e,t,r){"use strict";var n=r(1333),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,u=60110,c=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),u=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function y(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function g(){}function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var v=m.prototype=new g;v.constructor=m,n(v,y.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,a={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:O.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,r,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+C(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),S(i,t,r,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+C(u=e[l],l);c+=S(u,t,r,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(u=e.next()).done;)c+=S(u=u.value,t,r,s=n+C(u,l++),i);else if("object"===u)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,r){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function R(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function $(){var e=x.current;if(null===e)throw Error(h(321));return e}var D={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:E,forEach:function(e,t,r){E(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(h(143));return e}},t.Component=y,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var a=n({},e.props),i=e.key,u=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,c=O.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)j.call(t,s)&&!w.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:u,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return $().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,r){return $().useReducer(e,t,r)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.1"},1333:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))o.call(r,s)&&(c[s]=r[s]);if(n){u=n(r);for(var p=0;p<u.length;p++)a.call(r,u[p])&&(c[u[p]]=r[u[p]])}}return c}},421:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(1331),r(1330)),i={id:"overview",title:"Plugins Overview",sidebar_label:"Overview"},u={unversionedId:"plugins/overview",id:"plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries.",source:"@site/../docs/plugins/overview.md",slug:"/plugins/overview",permalink:"/docs/next/plugins/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/overview.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Running an API without code",permalink:"/docs/next/graphqlserve/graphqlserve"},next:{title:"SchemaCRUD Plugin",permalink:"/docs/next/plugins/crud-schema"}},c=[{value:"Using a plugin in your GraphQL Application",id:"using-a-plugin-in-your-graphql-application",children:[{value:"At application startup",id:"at-application-startup",children:[]},{value:"File generation with CLI",id:"file-generation-with-cli",children:[]}]}],l={rightToc:c};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries."),Object(a.b)("p",null,"Plugins are executed in the order that are defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"plugins")," array. Each plugin passes its modified version of the GraphQL schema to the next, making incremental changes to the schema and outputs the final schema once the plugin chain is complete."),Object(a.b)("p",null,"Graphback offers a standard suite of plugins you can use to generate a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," compliant schema, resolvers and client documents."),Object(a.b)("h2",{id:"using-a-plugin-in-your-graphql-application"},"Using a plugin in your GraphQL Application"),Object(a.b)("p",null,"There are two ways that a Graphback plugin can be invoked in your application - the method you choose depends on the capabilities of the plugin and/or what you need to use the plugin for."),Object(a.b)("h3",{id:"at-application-startup"},"At application startup"),Object(a.b)("p",null,"If you don't want the plugin to create files in your project, or if it is not capable of doing so, you can invoke your plugins programatically in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#optional-plugins"}),Object(a.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// highlight-start\nimport { SchemaCRUDPlugin } from '@graphback/codegen-schema';\n// highlight-end\n\n\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  // highlight-start\n  plugins: [\n    new SchemaCRUDPlugin()\n  ]\n  // highlight-end\n});\n")),Object(a.b)("p",null,"Invoking ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," like this will update the in-memory schema and resolvers and return them as ",Object(a.b)("inlineCode",{parentName:"p"},"typeDefs")," and ",Object(a.b)("inlineCode",{parentName:"p"},"resolvers"),". "),Object(a.b)("h3",{id:"file-generation-with-cli"},"File generation with CLI"),Object(a.b)("p",null,"Some plugins can also create files in your project through the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),Object(a.b)("inlineCode",{parentName:"a"},"createResources"))," hook. Please refer to the plugin documentation to see if this is enabled."))}s.isMDXComponent=!0}}]);