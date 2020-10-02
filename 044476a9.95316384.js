(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1309:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return s}));var c=a(0),r=a.n(c);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},b=Object.keys(e);for(c=0;c<b.length;c++)a=b[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(c=0;c<b.length;c++)a=b[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,b=e.originalType,n=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),O=o(a),j=c,s=O["".concat(n,".").concat(j)]||O[j]||d[j]||b;return a?r.a.createElement(s,l(l({ref:t},i),{},{components:a})):r.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var b=a.length,n=new Array(b);n[0]=j;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:c,n[1]=l;for(var i=2;i<b;i++)n[i]=a[i];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var c=a(2),r=a(6),b=(a(0),a(1309)),n={id:"_keycloakcrudservice_.keycloakcrudservice",title:"KeycloakCrudService",sidebar_label:"KeycloakCrudService"},l={unversionedId:"api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice",id:"version-0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice",isDocsHomePage:!1,title:"KeycloakCrudService",description:"This custom CRUD Service shows another potential way to add auth",source:"@site/versioned_docs/version-0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice.md",slug:"/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice",permalink:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice.md",version:"0.16.x",sidebar_label:"KeycloakCrudService",sidebar:"version-0.16.x/docs",previous:{title:"ClientCRUDPlugin",permalink:"/docs/0.16.x/api/graphback-codegen-client/classes/_clientcrudplugin_.clientcrudplugin"},next:{title:"createKeycloakCRUDService",permalink:"/docs/0.16.x/api/graphback-keycloak-authz/modules/_createkeycloakcrudservice_"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Private</code> authConfig",id:"private-authconfig",children:[]},{value:"<code>Private</code> model",id:"private-model",children:[]},{value:"<code>Protected</code> proxiedService",id:"protected-proxiedservice",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchLoadData",id:"batchloaddata",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"subscribeToCreate",id:"subscribetocreate",children:[]},{value:"subscribeToDelete",id:"subscribetodelete",children:[]},{value:"subscribeToUpdate",id:"subscribetoupdate",children:[]},{value:"update",id:"update",children:[]}]}],i={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(c.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This custom CRUD Service shows another potential way to add auth"),Object(b.b)("p",null,"This is actually quite nice and clean but it does not allow for field level auth.\nIt's still a possibility that we could go with though!"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Type")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"GraphbackProxyService\u2039Type\u203a"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"KeycloakCrudService")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GraphbackCRUDService\u2039Type\u203a")),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#private-authconfig"}),"authConfig")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#private-model"}),"model")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#protected-proxiedservice"}),"proxiedService"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#batchloaddata"}),"batchLoadData")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#create"}),"create")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#delete"}),"delete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#findby"}),"findBy")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#findone"}),"findOne")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#subscribetocreate"}),"subscribeToCreate")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#subscribetodelete"}),"subscribeToDelete")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#subscribetoupdate"}),"subscribeToUpdate")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(c.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#update"}),"update"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new KeycloakCrudService"),"(",Object(b.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(b.b)("inlineCode",{parentName:"p"},"__namedParameters"),": object): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice"}),"KeycloakCrudService"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L38"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:38"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"model"),": ",Object(b.b)("em",{parentName:"p"},"ModelDefinition")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"__namedParameters"),": ",Object(b.b)("em",{parentName:"p"},"object")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"authConfig")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"service")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphbackCRUDService\u2039any, any\u203a")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice"}),"KeycloakCrudService"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"private-authconfig"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," authConfig"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"authConfig"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/modules/_keycloakconfig_#crudserviceauthconfig"}),"CrudServiceAuthConfig"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L37"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:37"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"private-model"},Object(b.b)("inlineCode",{parentName:"h3"},"Private")," model"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"model"),": ",Object(b.b)("em",{parentName:"p"},"ModelDefinition")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L38"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:38"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"protected-proxiedservice"},Object(b.b)("inlineCode",{parentName:"h3"},"Protected")," proxiedService"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"proxiedService"),": ",Object(b.b)("em",{parentName:"p"},"GraphbackCRUDService")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice"}),"KeycloakCrudService"),".",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/classes/_keycloakcrudservice_.keycloakcrudservice#protected-proxiedservice"}),"proxiedService"))),Object(b.b)("p",null,"Defined in packages/graphback-core/types/runtime/GraphbackProxyService.d.ts:12"),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"batchloaddata"},"batchLoadData"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"batchLoadData"),"(",Object(b.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"id"),": string | number, ",Object(b.b)("inlineCode",{parentName:"p"},"filter"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L160"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:160"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"relationField")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"id")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"string ","|"," number")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"),", ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L46"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:46"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"delete"},"delete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"delete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"),", ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L72"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:72"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findby"},"findBy"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findBy"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": FindByArgs, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext")," | any, ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo, ",Object(b.b)("inlineCode",{parentName:"p"},"path?"),": string): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039ResultList\u2039Type\u203a\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L101"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:101"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"FindByArgs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext")," ","|"," any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"path?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039ResultList\u2039Type\u203a\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"findone"},"findOne"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"findOne"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": any, ",Object(b.b)("inlineCode",{parentName:"p"},"context"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"),", ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L83"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:83"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribetocreate"},"subscribeToCreate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribeToCreate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"),"): ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L127"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:127"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribetodelete"},"subscribeToDelete"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribeToDelete"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L149"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:149"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribetoupdate"},"subscribeToUpdate"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"subscribeToUpdate"),"(",Object(b.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L138"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:138"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"filter?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(b.b)("inlineCode",{parentName:"p"},"context?"),": ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"),", ",Object(b.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-keycloak-authz/src/KeycloakCrudService.ts#L59"}),"packages/graphback-keycloak-authz/src/KeycloakCrudService.ts:59"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"context?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(c.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-keycloak-authz/interfaces/_keycloakcrudservice_.graphbackkeycloakcontext"}),"GraphbackKeycloakContext"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"info?")),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0}}]);