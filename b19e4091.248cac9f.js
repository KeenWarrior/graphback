(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{1326:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m}));var n=t(0),c=t.n(n);function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){b(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},b=Object.keys(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=c.a.createContext({}),d=function(e){var a=c.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=d(e.components);return c.a.createElement(i.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},O=c.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(t),O=n,m=s["".concat(r,".").concat(O)]||s[O]||o[O]||b;return t?c.a.createElement(m,l(l({ref:a},i),{},{components:t})):c.a.createElement(m,l({ref:a},i))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var b=t.length,r=new Array(b);r[0]=O;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var i=2;i<b;i++)r[i]=t[i];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},947:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t(3),c=t(7),b=(t(0),t(1326)),r={id:"_datasyncplugin_.datasyncplugin",title:"DataSyncPlugin",sidebar_label:"DataSyncPlugin"},l={unversionedId:"api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",id:"version-1.0/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",isDocsHomePage:!1,title:"DataSyncPlugin",description:"DataSync plugin",source:"@site/versioned_docs/version-1.0/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin.md",slug:"/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",permalink:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin.md",version:"1.0",sidebar_label:"DataSyncPlugin",sidebar:"version-1.0/docs",previous:{title:"DataSyncCRUDService",permalink:"/docs/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"},next:{title:"ConflictError",permalink:"/docs/api/graphback-datasync/classes/_util_.conflicterror"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> config",id:"protected-config",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>Protected</code> addDataSyncFieldsToInputTypes",id:"protected-adddatasyncfieldstoinputtypes",children:[]},{value:"<code>Protected</code> addDataSyncFieldsToModel",id:"protected-adddatasyncfieldstomodel",children:[]},{value:"<code>Protected</code> addDeltaQuery",id:"protected-adddeltaquery",children:[]},{value:"<code>Protected</code> addDeltaSyncResolver",id:"protected-adddeltasyncresolver",children:[]},{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Private</code> getDeltaTypeFieldNames",id:"private-getdeltatypefieldnames",children:[]},{value:"getPluginName",id:"getpluginname",children:[]},{value:"<code>Protected</code> logError",id:"protected-logerror",children:[]},{value:"<code>Protected</code> logWarning",id:"protected-logwarning",children:[]},{value:"transformSchema",id:"transformschema",children:[]}]}],i={rightToc:p};function d(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("p",null,"DataSync plugin"),Object(b.b)("p",null,'Plugin is enabled by """ @datasync """ annotation\nIt will generate delta queries'),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"GraphbackPlugin"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"DataSyncPlugin")))),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-config"}),"config"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddatasyncfieldstoinputtypes"}),"addDataSyncFieldsToInputTypes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddatasyncfieldstomodel"}),"addDataSyncFieldsToModel")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddeltaquery"}),"addDeltaQuery")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddeltasyncresolver"}),"addDeltaSyncResolver")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#createresolvers"}),"createResolvers")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#createresources"}),"createResources")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#private-getdeltatypefieldnames"}),"getDeltaTypeFieldNames")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#getpluginname"}),"getPluginName")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logerror"}),"logError")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logwarning"}),"logWarning")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#transformschema"}),"transformSchema"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new DataSyncPlugin"),"(",Object(b.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/graphback-datasync/interfaces/_datasyncplugin_.datasyncpluginconfig"}),"DataSyncPluginConfig"),"): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L21"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:21"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"config?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/graphback-datasync/interfaces/_datasyncplugin_.datasyncpluginconfig"}),"DataSyncPluginConfig"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"protected-config"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," config"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"config"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/interfaces/_datasyncplugin_.datasyncpluginconfig"}),"DataSyncPluginConfig"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L21"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:21"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"protected-adddatasyncfieldstoinputtypes"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," addDataSyncFieldsToInputTypes"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDataSyncFieldsToInputTypes"),"(",Object(b.b)("inlineCode",{parentName:"p"},"schemaComposer"),": SchemaComposer\u2039any\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L151"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:151"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"schemaComposer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SchemaComposer\u2039any\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-adddatasyncfieldstomodel"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," addDataSyncFieldsToModel"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDataSyncFieldsToModel"),"(",Object(b.b)("inlineCode",{parentName:"p"},"schemaComposer"),": SchemaComposer\u2039any\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L129"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:129"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"schemaComposer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SchemaComposer\u2039any\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-adddeltaquery"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," addDeltaQuery"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDeltaQuery"),"(",Object(b.b)("inlineCode",{parentName:"p"},"schemaComposer"),": SchemaComposer\u2039unknown\u203a, ",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L165"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:165"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"schemaComposer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SchemaComposer\u2039unknown\u203a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-adddeltasyncresolver"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," addDeltaSyncResolver"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addDeltaSyncResolver"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"resolvers"),": IResolvers): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L108"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:108"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"model")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"resolvers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IResolvers")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createresolvers"},"createResolvers"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createResolvers"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(b.b)("em",{parentName:"p"},"IResolvers")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L78"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:78"))),Object(b.b)("p",null,"Creates resolvers for Data Synchonization"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Core metatata containing all model information")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"IResolvers")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"createresources"},"createResources"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"createResources"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L97"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:97"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-getdeltatypefieldnames"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," getDeltaTypeFieldNames"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getDeltaTypeFieldNames"),"(",Object(b.b)("inlineCode",{parentName:"p"},"modelTC"),": GraphQLObjectType): ",Object(b.b)("em",{parentName:"p"},"string[]")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L208"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:208"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"modelTC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string[]")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getpluginname"},"getPluginName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getPluginName"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L104"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:104"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-logerror"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," logError"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"logError"),"(",Object(b.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logerror"}),"logError"))),Object(b.b)("p",null,"Defined in packages/graphback-core/types/plugin/GraphbackPlugin.d.ts:37"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"message")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-logwarning"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," logWarning"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"logWarning"),"(",Object(b.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logwarning"}),"logWarning"))),Object(b.b)("p",null,"Defined in packages/graphback-core/types/plugin/GraphbackPlugin.d.ts:36"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"message")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"transformschema"},"transformSchema"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"transformSchema"),"(",Object(b.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(b.b)("em",{parentName:"p"},"GraphQLSchema")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-datasync/src/DataSyncPlugin.ts#L31"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:31"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"metadata")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"GraphQLSchema")))}d.isMDXComponent=!0}}]);