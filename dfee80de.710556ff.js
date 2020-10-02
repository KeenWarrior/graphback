/*! For license information please see dfee80de.710556ff.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1103],{1159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return i}));var a=r(2),n=r(6),c=(r(1310),r(1309)),o={id:"_plugin_graphbackplugin_.graphbackplugin",title:"GraphbackPlugin",sidebar_label:"GraphbackPlugin"},b={unversionedId:"api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",id:"api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",isDocsHomePage:!1,title:"GraphbackPlugin",description:"Graphback plugin interface",source:"@site/../docs/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin.md",slug:"/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",permalink:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin.md",version:"current",sidebar_label:"GraphbackPlugin",sidebar:"docs",previous:{title:"ResultList",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"},next:{title:"CRUDService",permalink:"/docs/next/api/graphback-core/classes/_runtime_crudservice_.crudservice"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Abstract</code> getPluginName",id:"abstract-getpluginname",children:[]},{value:"<code>Protected</code> logError",id:"protected-logerror",children:[]},{value:"<code>Protected</code> logWarning",id:"protected-logwarning",children:[]},{value:"transformSchema",id:"transformschema",children:[]}]}],p={rightToc:l};function i(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback plugin interface\nPlugins are base for every graphback generator and schema transformers.\nSee documentation for the complete list of the plugins."),Object(c.b)("p",null,"Plugins can:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Modify the schema"),Object(c.b)("li",{parentName:"ul"},"Create resources like files, db tables etc."),Object(c.b)("li",{parentName:"ul"},"Perform some in memory operations based on configuration")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackPlugin"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#createresolvers"}),"createResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#createresources"}),"createResources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#abstract-getpluginname"}),"getPluginName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#protected-logerror"}),"logError")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#protected-logwarning"}),"logWarning")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#transformschema"}),"transformSchema"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"createresolvers"},"createResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResolvers"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L42"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:42"))),Object(c.b)("p",null,"Method to create in-memory resolvers which will be\nadded to a list of resolvers output by Graphback"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"metadata object with model metadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresources"},"createResources"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResources"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L32"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:32"))),Object(c.b)("p",null,"Create resources like files etc. for this plugin.\nThis method should write resouces to filesystem"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"abstract-getpluginname"},Object(c.b)("inlineCode",{parentName:"h3"},"Abstract")," getPluginName"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getPluginName"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L59"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:59"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Unique name of the plugin"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logerror"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logError"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logError"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L51"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:51"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logwarning"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logWarning"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logWarning"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L46"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:46"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transformschema"},"transformSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"transformSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L24"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:24"))),Object(c.b)("p",null,"Performs transformation on the schema and returns target schema\nImplementations should extend this method if they wish to apply some changes\nto schema. Otherwise unchanged schema should be returned"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"metadata object containing schema")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")))}i.isMDXComponent=!0},1309:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),i=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=i(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),g=a,m=u["".concat(o,".").concat(g)]||u[g]||s[g]||c;return r?n.a.createElement(m,b(b({ref:t},p),{},{components:r})):n.a.createElement(m,b({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=g;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var p=2;p<c;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1310:function(e,t,r){"use strict";e.exports=r(1311)},1311:function(e,t,r){"use strict";var a=r(1312),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,b=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.forward_ref"):60112,g=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function y(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}function k(){}function N(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||O}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var v=N.prototype=new k;v.constructor=N,a(v,y.prototype),v.isPureReactComponent=!0;var _={current:null},P=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var a,n={},o=null,b=null;if(null!=t)for(a in void 0!==t.ref&&(b=t.ref),void 0!==t.key&&(o=""+t.key),t)P.call(t,a)&&!w.hasOwnProperty(a)&&(n[a]=t[a]);var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){for(var p=Array(l),i=0;i<l;i++)p[i]=arguments[i+2];n.children=p}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===n[a]&&(n[a]=l[a]);return{$$typeof:c,type:e,key:o,ref:b,props:n,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var S=/\/+/g,R=[];function E(e,t,r,a){if(R.length){var n=R.pop();return n.result=e,n.keyPrefix=t,n.func=r,n.context=a,n.count=0,n}return{result:e,keyPrefix:t,func:r,context:a,count:0}}function G(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function $(e,t,r,a){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var b=!1;if(null===e)b=!0;else switch(n){case"string":case"number":b=!0;break;case"object":switch(e.$$typeof){case c:case o:b=!0}}if(b)return r(a,e,""===t?"."+M(e,0):t),1;if(b=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=t+M(n=e[l],l);b+=$(n,p,r,a)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=f&&e[f]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),l=0;!(n=e.next()).done;)b+=$(n=n.value,p=t+M(n,l++),r,a);else if("object"===n)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return b}function D(e,t,r){return null==e?0:$(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var a=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,a,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(S,"$&/")+"/")+r)),a.push(e))}function L(e,t,r,a,n){var c="";null!=r&&(c=(""+r).replace(S,"$&/")+"/"),D(e,I,t=E(t,c,a,n)),G(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(d(321));return e}var q={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,r){if(null==e)return e;var a=[];return L(e,a,null,t,r),a},forEach:function(e,t,r){if(null==e)return e;D(e,T,t=E(null,null,t,r)),G(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(d(143));return e}},t.Component=y,t.Fragment=b,t.Profiler=p,t.PureComponent=N,t.StrictMode=l,t.Suspense=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(d(267,e));var n=a({},e.props),o=e.key,b=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(b=t.ref,l=_.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(i in t)P.call(t,i)&&!w.hasOwnProperty(i)&&(n[i]=void 0===t[i]&&void 0!==p?p[i]:t[i])}var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){p=Array(i);for(var u=0;u<i;u++)p[u]=arguments[u+2];n.children=p}return{$$typeof:c,type:e.type,key:o,ref:b,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1312:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,b,l=o(e),p=1;p<arguments.length;p++){for(var i in r=Object(arguments[p]))n.call(r,i)&&(l[i]=r[i]);if(a){b=a(r);for(var u=0;u<b.length;u++)c.call(r,b[u])&&(l[b[u]]=r[b[u]])}}return l}}}]);