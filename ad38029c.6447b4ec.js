(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1328:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=a,u=p["".concat(b,".").concat(d)]||p[d]||m[d]||c;return r?n.a.createElement(u,o(o({ref:t},l),{},{components:r})):n.a.createElement(u,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,b=new Array(c);b[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var l=2;l<c;l++)b[l]=r[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},923:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return i}));var a=r(3),n=r(7),c=(r(0),r(1328)),b={id:"_commands_serve_",title:"commands/serve",sidebar_label:"commands/serve"},o={unversionedId:"api/graphql-serve/modules/_commands_serve_",id:"version-1.0/api/graphql-serve/modules/_commands_serve_",isDocsHomePage:!1,title:"commands/serve",description:"Index",source:"@site/versioned_docs/version-1.0/api/graphql-serve/modules/_commands_serve_.md",slug:"/api/graphql-serve/modules/_commands_serve_",permalink:"/docs/api/graphql-serve/modules/_commands_serve_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphql-serve/modules/_commands_serve_.md",version:"1.0",sidebar_label:"commands/serve"},s=[{value:"Index",id:"index",children:[{value:"Variables",id:"variables",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"<code>Const</code> command",id:"const-command",children:[]},{value:"<code>Const</code> desc",id:"const-desc",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> builder",id:"const-builder",children:[]},{value:"handler",id:"handler",children:[]}]}],l={rightToc:s};function i(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"variables"},"Variables"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphql-serve/modules/_commands_serve_#const-command"}),"command")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphql-serve/modules/_commands_serve_#const-desc"}),"desc"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphql-serve/modules/_commands_serve_#const-builder"}),"builder")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphql-serve/modules/_commands_serve_#handler"}),"handler"))),Object(c.b)("h2",{id:"variables-1"},"Variables"),Object(c.b)("h3",{id:"const-command"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," command"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"command"),": ",Object(c.b)("em",{parentName:"p"},'"serve ',"[modelDir][options]",'"'),' = "serve ',"[modelDir][options]",'"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphql-serve/src/commands/serve.ts#L5"}),"commands/serve.ts:5"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-desc"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," desc"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"desc"),": ",Object(c.b)("em",{parentName:"p"},'"Generate and start GraphQL server from data model files"'),' = "Generate and start GraphQL server from data model files"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphql-serve/src/commands/serve.ts#L7"}),"commands/serve.ts:7"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"const-builder"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," builder"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"builder"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": Argv): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphql-serve/src/commands/serve.ts#L10"}),"commands/serve.ts:10"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Argv")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"handler"},"handler"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"handler"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/graphql-serve/modules/_components_servehandler_#graphqlserveparams"}),"GraphQLServeParams"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphql-serve/src/commands/serve.ts#L41"}),"commands/serve.ts:41"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/graphql-serve/modules/_components_servehandler_#graphqlserveparams"}),"GraphQLServeParams"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}i.isMDXComponent=!0}}]);