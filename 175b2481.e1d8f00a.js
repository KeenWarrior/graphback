(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1326:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return h}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),g=function(e){var a=n.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=g(e.components);return n.a.createElement(l.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=g(t),u=r,h=s["".concat(b,".").concat(u)]||s[u]||o[u]||c;return t?n.a.createElement(h,p(p({ref:a},l),{},{components:t})):n.a.createElement(h,p({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,b=new Array(c);b[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var l=2;l<c;l++)b[l]=t[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},190:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return g}));var r=t(3),n=t(7),c=(t(0),t(1326)),b={id:"_plugin_graphbackpluginengine_.graphbackpluginengine",title:"GraphbackPluginEngine",sidebar_label:"GraphbackPluginEngine"},p={unversionedId:"api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",id:"version-0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",isDocsHomePage:!1,title:"GraphbackPluginEngine",description:"Allows to execute chain of plugins that create resources.",source:"@site/versioned_docs/version-0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine.md",slug:"/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",permalink:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine.md",version:"0.15.x",sidebar_label:"GraphbackPluginEngine"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Private</code> metadata",id:"private-metadata",children:[]},{value:"<code>Private</code> plugins",id:"private-plugins",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>Private</code> createResolvers",id:"private-createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Private</code> createSchema",id:"private-createschema",children:[]},{value:"registerPlugin",id:"registerplugin",children:[]}]}],l={rightToc:i};function g(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Allows to execute chain of plugins that create resources.\nCommon use case is to decorate GraphQL schema with additional\nactions and generate files like resolvers and database access logic"),Object(c.b)("p",null,"Usage:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const engine = GraphbackPluginEngine({ schema });\nengine.registerPlugin(plugin);\nprintSchema(engine.createResources());\n")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackPluginEngine"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-metadata"}),"metadata")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-plugins"}),"plugins"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-createresolvers"}),"createResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#createresources"}),"createResources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#private-createschema"}),"createSchema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine#registerplugin"}),"registerPlugin"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new GraphbackPluginEngine"),"(",Object(c.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine"}),"GraphbackPluginEngine"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L29"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:29"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(c.b)("em",{parentName:"p"},"object")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/interfaces/_plugin_graphbackglobalconfig_.graphbackglobalconfig"}),"GraphbackGlobalConfig"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"plugins")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"\u2039\u203a[]")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," GraphQLSchema\u2039\u203a")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackpluginengine_.graphbackpluginengine"}),"GraphbackPluginEngine"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"private-metadata"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," metadata"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"metadata"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L29"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:29"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-plugins"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," plugins"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"plugins"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L28"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:28"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"private-createresolvers"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," createResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResolvers"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L80"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:80"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresources"},"createResources"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResources"),"(): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L54"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:54"))),Object(c.b)("p",null,"Allows the transformation of schema by applying transformation logic for each plugin\nCreation of resolvers, which has to come after all the changes in schema have been applied\nSaving of the transformed schema and related files"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),"GraphbackCoreMetadata"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-createschema"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," createSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createSchema"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L71"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:71"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"registerplugin"},"registerPlugin"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"registerPlugin"),"(...",Object(c.b)("inlineCode",{parentName:"p"},"plugins"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"[]): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPluginEngine.ts#L45"}),"packages/graphback-core/src/plugin/GraphbackPluginEngine.ts:45"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"...plugins")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin"}),"GraphbackPlugin"),"[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}g.isMDXComponent=!0}}]);