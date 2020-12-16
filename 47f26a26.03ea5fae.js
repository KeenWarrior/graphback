(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1330:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var c=a(0),b=a.n(c);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,c,b=function(e,t){if(null==e)return{};var a,c,b={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),s=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=s(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=s(a),j=c,O=o["".concat(r,".").concat(j)]||o[j]||d[j]||n;return a?b.a.createElement(O,l(l({ref:t},p),{},{components:a})):b.a.createElement(O,l({ref:t},p))}));function O(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,r=new Array(n);r[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,r[1]=l;for(var p=2;p<n;p++)r[p]=a[p];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},439:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var c=a(3),b=a(7),n=(a(0),a(1330)),r={id:"_util_",title:"util",sidebar_label:"util"},l={unversionedId:"api/graphback-datasync/modules/_util_",id:"version-0.16.x/api/graphback-datasync/modules/_util_",isDocsHomePage:!1,title:"util",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphback-datasync/modules/_util_.md",slug:"/api/graphback-datasync/modules/_util_",permalink:"/docs/0.16.x/api/graphback-datasync/modules/_util_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-datasync/modules/_util_.md",version:"0.16.x",sidebar_label:"util"},i=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Object literals",id:"object-literals",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"getDataSyncAnnotationData",id:"getdatasyncannotationdata",children:[]},{value:"getModelConfigFromGlobal",id:"getmodelconfigfromglobal",children:[]},{value:"isDataSyncModel",id:"isdatasyncmodel",children:[]},{value:"isDataSyncService",id:"isdatasyncservice",children:[]},{value:"isDataSyncType",id:"isdatasynctype",children:[]}]},{value:"Object literals",id:"object-literals-1",children:[{value:"<code>Const</code> ClientSideWins",id:"const-clientsidewins",children:[]},{value:"\u25aa <strong>ClientSideWins</strong>: <em>object</em>",id:"-clientsidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete",children:[]},{value:"resolveUpdate",id:"resolveupdate",children:[]},{value:"<code>Const</code> DataSyncFieldNames",id:"const-datasyncfieldnames",children:[]},{value:"\u25aa <strong>DataSyncFieldNames</strong>: <em>object</em>",id:"-datasyncfieldnames-object",children:[]},{value:"deleted",id:"deleted",children:[]},{value:"lastUpdatedAt",id:"lastupdatedat",children:[]},{value:"ttl",id:"ttl",children:[]},{value:"version",id:"version",children:[]},{value:"<code>Const</code> ServerSideWins",id:"const-serversidewins",children:[]},{value:"\u25aa <strong>ServerSideWins</strong>: <em>object</em>",id:"-serversidewins-object",children:[]},{value:"resolveDelete",id:"resolvedelete-1",children:[]},{value:"resolveUpdate",id:"resolveupdate-1",children:[]},{value:"<code>Const</code> ThrowOnConflict",id:"const-throwonconflict",children:[]},{value:"\u25aa <strong>ThrowOnConflict</strong>: <em>object</em>",id:"-throwonconflict-object",children:[]},{value:"resolveDelete",id:"resolvedelete-2",children:[]},{value:"resolveUpdate",id:"resolveupdate-2",children:[]}]}],p={rightToc:i};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(c.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"classes"},"Classes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/classes/_util_.conflicterror"}),"ConflictError"))),Object(n.b)("h3",{id:"interfaces"},"Interfaces"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.datasyncmodelconfigmap"}),"DataSyncModelConfigMap")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"))),Object(n.b)("h3",{id:"functions"},"Functions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#getdatasyncannotationdata"}),"getDataSyncAnnotationData")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#getmodelconfigfromglobal"}),"getModelConfigFromGlobal")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#isdatasyncmodel"}),"isDataSyncModel")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#isdatasyncservice"}),"isDataSyncService")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#isdatasynctype"}),"isDataSyncType"))),Object(n.b)("h3",{id:"object-literals"},"Object literals"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#const-clientsidewins"}),"ClientSideWins")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#const-datasyncfieldnames"}),"DataSyncFieldNames")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#const-serversidewins"}),"ServerSideWins")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_util_#const-throwonconflict"}),"ThrowOnConflict"))),Object(n.b)("h2",{id:"functions-1"},"Functions"),Object(n.b)("h3",{id:"getdatasyncannotationdata"},"getDataSyncAnnotationData"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getDataSyncAnnotationData"),"(",Object(n.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L14"}),"packages/graphback-datasync/src/util.ts:14"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"model")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getmodelconfigfromglobal"},"getModelConfigFromGlobal"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getModelConfigFromGlobal"),"(",Object(n.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"globalConfig"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),"): ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L51"}),"packages/graphback-datasync/src/util.ts:51"))),Object(n.b)("p",null,"Function to get conflict configuration of specific model from specified global configuration"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Default"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"modelName")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"-"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Name of the model's GraphQL type")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"globalConfig")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"{}"),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Specified global config")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig"}),"DataSyncModelConflictConfig"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isdatasyncmodel"},"isDataSyncModel"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isDataSyncModel"),"(",Object(n.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L6"}),"packages/graphback-datasync/src/util.ts:6"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"model")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isdatasyncservice"},"isDataSyncService"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isDataSyncService"),"(",Object(n.b)("inlineCode",{parentName:"p"},"service"),": GraphbackCRUDService): ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L18"}),"packages/graphback-datasync/src/util.ts:18"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"service")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphbackCRUDService")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"}),"DataSyncCRUDService"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isdatasynctype"},"isDataSyncType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"isDataSyncType"),"(",Object(n.b)("inlineCode",{parentName:"p"},"graphqlType"),": GraphQLObjectType): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L10"}),"packages/graphback-datasync/src/util.ts:10"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"graphqlType")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h2",{id:"object-literals-1"},"Object literals"),Object(n.b)("h3",{id:"const-clientsidewins"},Object(n.b)("inlineCode",{parentName:"h3"},"Const")," ClientSideWins"),Object(n.b)("h3",{id:"-clientsidewins-object"},"\u25aa ",Object(n.b)("strong",{parentName:"h3"},"ClientSideWins"),": ",Object(n.b)("em",{parentName:"h3"},"object")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L136"}),"packages/graphback-datasync/src/util.ts:136"))),Object(n.b)("p",null,"The ClientSideWins conflict resolution strategy"),Object(n.b)("h3",{id:"resolvedelete"},"resolveDelete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L148"}),"packages/graphback-datasync/src/util.ts:148"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"conflict")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h3",{id:"resolveupdate"},"resolveUpdate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L137"}),"packages/graphback-datasync/src/util.ts:137"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"conflict")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"const-datasyncfieldnames"},Object(n.b)("inlineCode",{parentName:"h3"},"Const")," DataSyncFieldNames"),Object(n.b)("h3",{id:"-datasyncfieldnames-object"},"\u25aa ",Object(n.b)("strong",{parentName:"h3"},"DataSyncFieldNames"),": ",Object(n.b)("em",{parentName:"h3"},"object")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L80"}),"packages/graphback-datasync/src/util.ts:80"))),Object(n.b)("h3",{id:"deleted"},"deleted"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"deleted"),": ",Object(n.b)("em",{parentName:"p"},"string"),' = "_deleted"'),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L83"}),"packages/graphback-datasync/src/util.ts:83"))),Object(n.b)("h3",{id:"lastupdatedat"},"lastUpdatedAt"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"lastUpdatedAt"),": ",Object(n.b)("em",{parentName:"p"},"string"),' = "_lastUpdatedAt"'),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L82"}),"packages/graphback-datasync/src/util.ts:82"))),Object(n.b)("h3",{id:"ttl"},"ttl"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"ttl"),": ",Object(n.b)("em",{parentName:"p"},"string"),' = "_ttl"'),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L84"}),"packages/graphback-datasync/src/util.ts:84"))),Object(n.b)("h3",{id:"version"},"version"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"version"),": ",Object(n.b)("em",{parentName:"p"},"string"),' = "_version"'),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L81"}),"packages/graphback-datasync/src/util.ts:81"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"const-serversidewins"},Object(n.b)("inlineCode",{parentName:"h3"},"Const")," ServerSideWins"),Object(n.b)("h3",{id:"-serversidewins-object"},"\u25aa ",Object(n.b)("strong",{parentName:"h3"},"ServerSideWins"),": ",Object(n.b)("em",{parentName:"h3"},"object")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L115"}),"packages/graphback-datasync/src/util.ts:115"))),Object(n.b)("p",null,"The ServerSideWins conflict resolution strategy"),Object(n.b)("h3",{id:"resolvedelete-1"},"resolveDelete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L127"}),"packages/graphback-datasync/src/util.ts:127"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"conflict")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h3",{id:"resolveupdate-1"},"resolveUpdate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L116"}),"packages/graphback-datasync/src/util.ts:116"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"conflict")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"const-throwonconflict"},Object(n.b)("inlineCode",{parentName:"h3"},"Const")," ThrowOnConflict"),Object(n.b)("h3",{id:"-throwonconflict-object"},"\u25aa ",Object(n.b)("strong",{parentName:"h3"},"ThrowOnConflict"),": ",Object(n.b)("em",{parentName:"h3"},"object")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L161"}),"packages/graphback-datasync/src/util.ts:161"))),Object(n.b)("h3",{id:"resolvedelete-2"},"resolveDelete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"resolveDelete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L165"}),"packages/graphback-datasync/src/util.ts:165"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"conflict")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h3",{id:"resolveupdate-2"},"resolveUpdate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"resolveUpdate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"conflict"),": ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/util.ts#L162"}),"packages/graphback-datasync/src/util.ts:162"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"conflict")),Object(n.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-datasync/interfaces/_util_.conflictmetadata"}),"ConflictMetadata"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")))}s.isMDXComponent=!0}}]);