(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1309:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),b=r,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?n.a.createElement(h,c(c({ref:t},p),{},{components:a})):n.a.createElement(h,c({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1318:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/diagramsmall-86366b66395bdeb97f55903cbd515788.png"},344:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(2),n=a(6),o=(a(0),a(1309)),i={id:"introduction",title:"Why use Graphback?",sidebar_label:"Why use Graphback?"},c={unversionedId:"introduction",id:"version-1.0/introduction",isDocsHomePage:!1,title:"Why use Graphback?",description:"Graphback simplifies application development by generating a production-ready API from data models to access data from one or more data sources. Graphback uses GraphQL and GraphQLCRUD to make it easy to get the data you need, and follows the convention over configuration paradigm to to reduce the amount of setup and boilerplate costs associated with creating GraphQL applications.",source:"@site/versioned_docs/version-1.0/intro-to-graphback.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/intro-to-graphback.md",version:"1.0",sidebar_label:"Why use Graphback?",sidebar:"version-1.0/docs",next:{title:"Creating a new application",permalink:"/docs/getting-started/create-new-app"}},s=[{value:"Benefits",id:"benefits",children:[{value:"Focus on your data",id:"focus-on-your-data",children:[]},{value:"Database migrations",id:"database-migrations",children:[]},{value:"Easy to extend",id:"easy-to-extend",children:[]}]},{value:"How it works",id:"how-it-works",children:[]}],p={rightToc:s};function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback simplifies application development by generating a production-ready API from data models to access data from one or more data sources. Graphback uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org"}),"GraphQL")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," to make it easy to get the data you need, and follows the convention over configuration paradigm to to reduce the amount of setup and boilerplate costs associated with creating GraphQL applications."),Object(o.b)("p",null,"Graphback provides a number of independent, interoperable libraries and tools to create and develop modern applications.\nWith Graphback you can build and deploy a scalable data-driven GraphQL API, complete with real-time updates and data synchronization capabilities, using either a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/databases/mongodb"}),"MongoDB")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/databases/postgres"}),"PostgreSQL")," database which is automatically created from your GraphQL schema.\nGraphback can also create client-side GraphQL documents for your mobile or web app, bootstrapping your entire application instantly."),Object(o.b)("h2",{id:"benefits"},"Benefits"),Object(o.b)("h3",{id:"focus-on-your-data"},"Focus on your data"),Object(o.b)("p",null,"Graphback bootstraps your entire application using the types described in your GraphQL schema to instantly create an API with data sources and a ready-to-use CRUD implementation of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD"),"."),Object(o.b)("p",null,"This enables you to spend more time focusing on your data to deliver the core business value of your application or service."),Object(o.b)("h3",{id:"database-migrations"},"Database migrations"),Object(o.b)("p",null,"For PostgreSQL users, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/graphql-migrations/intro"}),"GraphQL Migrations")," can migrate your database schema to match the data described in your GraphQL schema."),Object(o.b)("h3",{id:"easy-to-extend"},"Easy to extend"),Object(o.b)("p",null,"Graphback was designed to work with your existing GraphQL API as well as for greenfield projects. Graphback also has its own plugin system, so you can create your own plugins or use some of the community plugins that are available."),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,Object(o.b)("img",{src:a(1318).default})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Graphback uses your data models, written as GraphQL types, to instantly build a GraphQL CRUD API.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String!\n}\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next, choose one of the Graphback supported data sources.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start your application."))))}l.isMDXComponent=!0}}]);