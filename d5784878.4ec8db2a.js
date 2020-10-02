(window.webpackJsonp=window.webpackJsonp||[]).push([[1055],{1111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(1309)),o={id:"overview",title:"Plugins Overview",sidebar_label:"Overview"},c={unversionedId:"plugins/overview",id:"version-1.0/plugins/overview",isDocsHomePage:!1,title:"Plugins Overview",description:"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries.",source:"@site/versioned_docs/version-1.0/plugins/overview.md",slug:"/plugins/overview",permalink:"/docs/plugins/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/plugins/overview.md",version:"1.0",sidebar_label:"Overview",sidebar:"version-1.0/docs",previous:{title:"Running an API without code",permalink:"/docs/graphqlserve/graphqlserve"},next:{title:"SchemaCRUD Plugin",permalink:"/docs/plugins/crud-schema"}},p=[{value:"Using a plugin in your GraphQL Application",id:"using-a-plugin-in-your-graphql-application",children:[{value:"At application startup",id:"at-application-startup",children:[]},{value:"File generation with CLI",id:"file-generation-with-cli",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"With Graphback plugins you can customise the generation of the GraphQL schema, automate the generation of resolvers, and create file resources such as client-side queries."),Object(i.b)("p",null,"Plugins are executed in the order that are defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," array. Each plugin passes its modified version of the GraphQL schema to the next, making incremental changes to the schema and outputs the final schema once the plugin chain is complete."),Object(i.b)("p",null,"Graphback offers a standard suite of plugins you can use to generate a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQLCRUD")," compliant schema, resolvers and client documents."),Object(i.b)("h2",{id:"using-a-plugin-in-your-graphql-application"},"Using a plugin in your GraphQL Application"),Object(i.b)("p",null,"There are two ways that a Graphback plugin can be invoked in your application - the method you choose depends on the capabilities of the plugin and/or what you need to use the plugin for."),Object(i.b)("h3",{id:"at-application-startup"},"At application startup"),Object(i.b)("p",null,"If you don't want the plugin to create files in your project, or if it is not capable of doing so, you can invoke your plugins programatically in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig#optional-plugins"}),Object(i.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// highlight-start\nimport { SchemaCRUDPlugin } from '@graphback/codegen-schema';\n// highlight-end\n\n\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  // highlight-start\n  plugins: [\n    new SchemaCRUDPlugin()\n  ]\n  // highlight-end\n});\n")),Object(i.b)("p",null,"Invoking ",Object(i.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," like this will update the in-memory schema and resolvers and return them as ",Object(i.b)("inlineCode",{parentName:"p"},"typeDefs")," and ",Object(i.b)("inlineCode",{parentName:"p"},"resolvers"),". "),Object(i.b)("h3",{id:"file-generation-with-cli"},"File generation with CLI"),Object(i.b)("p",null,"Some plugins can also create files in your project through the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"}),Object(i.b)("inlineCode",{parentName:"a"},"createResources"))," hook. Please refer to the plugin documentation to see if this is enabled."))}s.isMDXComponent=!0},1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);