(window.webpackJsonp=window.webpackJsonp||[]).push([[819],{1309:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m}));var r=t(0),c=t.n(r);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,c=function(e,a){if(null==e)return{};var t,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=c.a.createContext({}),o=function(e){var a=c.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=o(e.components);return c.a.createElement(i.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},u=c.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=o(t),u=r,m=s["".concat(b,".").concat(u)]||s[u]||g[u]||n;return t?c.a.createElement(m,p(p({ref:a},i),{},{components:t})):c.a.createElement(m,p({ref:a},i))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,b=new Array(n);b[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var i=2;i<n;i++)b[i]=t[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},873:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return o}));var r=t(2),c=t(6),n=(t(0),t(1309)),b={id:"_plugin_graphbackplugin_.graphbackplugin",title:"GraphbackPlugin",sidebar_label:"GraphbackPlugin"},p={unversionedId:"api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",id:"version-0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",isDocsHomePage:!1,title:"GraphbackPlugin",description:"Graphback plugin interface",source:"@site/versioned_docs/version-0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin.md",slug:"/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",permalink:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin.md",version:"0.16.x",sidebar_label:"GraphbackPlugin",sidebar:"version-0.16.x/docs",previous:{title:"ResultList",permalink:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"},next:{title:"CRUDService",permalink:"/docs/0.16.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Abstract</code> getPluginName",id:"abstract-getpluginname",children:[]},{value:"<code>Protected</code> logError",id:"protected-logerror",children:[]},{value:"<code>Protected</code> logWarning",id:"protected-logwarning",children:[]},{value:"transformSchema",id:"transformschema",children:[]}]}],i={rightToc:l};function o(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Graphback plugin interface\nPlugins are base for every graphback generator and schema transformers.\nSee documentation for the complete list of the plugins."),Object(n.b)("p",null,"Plugins can:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Modify the schema"),Object(n.b)("li",{parentName:"ul"},"Create resources like files, db tables etc."),Object(n.b)("li",{parentName:"ul"},"Perform some in memory operations based on configuration")),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"GraphbackPlugin"))),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#createresolvers"}),"createResolvers")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#createresources"}),"createResources")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#abstract-getpluginname"}),"getPluginName")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#protected-logerror"}),"logError")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#protected-logwarning"}),"logWarning")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#transformschema"}),"transformSchema"))),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"createresolvers"},"createResolvers"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createResolvers"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"IResolvers")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L42"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:42"))),Object(n.b)("p",null,"Method to create in-memory resolvers which will be\nadded to a list of resolvers output by Graphback"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"metadata object with model metadata")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"IResolvers")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"createresources"},"createResources"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"createResources"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L32"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:32"))),Object(n.b)("p",null,"Create resources like files etc. for this plugin.\nThis method should write resouces to filesystem"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"abstract-getpluginname"},Object(n.b)("inlineCode",{parentName:"h3"},"Abstract")," getPluginName"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getPluginName"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L59"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:59"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Unique name of the plugin"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-logerror"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," logError"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"logError"),"(",Object(n.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L51"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:51"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"message")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-logwarning"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," logWarning"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"logWarning"),"(",Object(n.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L46"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:46"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"message")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"transformschema"},"transformSchema"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"transformSchema"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"GraphQLSchema")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L24"}),"packages/graphback-core/src/plugin/GraphbackPlugin.ts:24"))),Object(n.b)("p",null,"Performs transformation on the schema and returns target schema\nImplementations should extend this method if they wish to apply some changes\nto schema. Otherwise unchanged schema should be returned"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"metadata object containing schema")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"GraphQLSchema")))}o.isMDXComponent=!0}}]);