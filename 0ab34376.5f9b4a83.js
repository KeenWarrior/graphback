(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(1330)),o={id:"delta-queries",title:"Setting up Delta Queries",sidebar_label:"Setting up Delta Queries"},c={unversionedId:"datasync/delta-queries",id:"version-1.0/datasync/delta-queries",isDocsHomePage:!1,title:"Setting up Delta Queries",description:"It is quite straightforward to setup Delta Queries with an existing Graphback template, by following the steps outlined below:",source:"@site/versioned_docs/version-1.0/datasync/delta-queries.md",slug:"/datasync/delta-queries",permalink:"/docs/datasync/delta-queries",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/datasync/delta-queries.md",version:"1.0",sidebar_label:"Setting up Delta Queries",sidebar:"version-1.0/docs",previous:{title:"Introduction to Data Synchronization",permalink:"/docs/datasync/intro"},next:{title:"Setting up Conflict Resolution",permalink:"/docs/datasync/conflict-resolution-intro"}},l=[{value:"Setup",id:"setup",children:[{value:"Annotate the required models",id:"annotate-the-required-models",children:[]},{value:"Modify the template to use <code>createDataSyncAPI</code>",id:"modify-the-template-to-use-createdatasyncapi",children:[]}]},{value:"Issuing Delta/Sync queries from client",id:"issuing-deltasync-queries-from-client",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It is quite straightforward to setup Delta Queries with an existing Graphback template, by following the steps outlined below:"),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"Create a new Graphback project using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx create-graphback datasync-project\n")),Object(r.b)("p",null,"When asked, choose the ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-mongo-datasync-server-ts")," template and proceed to the next step when the CLI has finished bootstrapping the project."),Object(r.b)("h3",{id:"annotate-the-required-models"},"Annotate the required models"),Object(r.b)("p",null,"Add the ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," annotation to your model(s) in your GraphQL SDL found in the ",Object(r.b)("inlineCode",{parentName:"p"},"model")," folder:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{3}","{3}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n}\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," annotation is used infer if a given model requires Delta Queries. If your business logic requires delete mutations, ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," also ensures that deleted objects are maintained in the database for a given amount of time. This can either be specified by the ",Object(r.b)("em",{parentName:"p"},"optional")," ",Object(r.b)("inlineCode",{parentName:"p"},"ttl")," argument (given in seconds) otherwise defaults to a duration of 2 days (or 172800 seconds) This is done so clients can be informed about deletions in a delta query. The items are eventually deleted using a MongoDB TTL Index."),Object(r.b)("p",null,"In the default configuration, ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," transforms your model by adding a ",Object(r.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," field to it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql",metastring:"{9}","{9}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n}\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," field is automatically indexed by Graphback for faster delta queries."))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," annotation adds a ",Object(r.b)("inlineCode",{parentName:"p"},"sync")," query or the delta query:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  syncComments(lastSync: GraphbackTimestamp!, filter: CommentFilter, limit: Int): CommentDeltaList!\n}\n")),Object(r.b)("p",null,"This allows you to get all the changed documents (updated and deleted) in a collection since the ",Object(r.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp. Internally this uses the ",Object(r.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt")," database field to check if any documents in the database have been modified, by comparing client provided ",Object(r.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp value."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"sync")," query also accepts a filter argument for filtering as well as a limit argument for limiting the number of items retrieved."))),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," annotation also adds a ",Object(r.b)("inlineCode",{parentName:"p"},"Delta")," type and a ",Object(r.b)("inlineCode",{parentName:"p"},"DeltaList")," type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type CommentDelta {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _deleted: Boolean\n}\n\ntype CommentDeltaList {\n  items: [CommentDelta]!\n  lastSync: GraphbackTimestamp!\n  limit: Int\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Delta")," type for a model consists of all of the model's transformed properties, as well as a ",Object(r.b)("inlineCode",{parentName:"p"},"_deleted")," field which is used internally to mark documents as deleted in the database. Thus ",Object(r.b)("inlineCode",{parentName:"p"},"delete")," mutations only mark documents with ",Object(r.b)("inlineCode",{parentName:"p"},"_deleted: true")," instead of actually removing them."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DeltaList")," is a container for ",Object(r.b)("inlineCode",{parentName:"p"},"Delta")," type, which also returns a ",Object(r.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp, that can be used in a subsequent ",Object(r.b)("inlineCode",{parentName:"p"},"sync")," query."),Object(r.b)("h3",{id:"modify-the-template-to-use-createdatasyncapi"},"Modify the template to use ",Object(r.b)("inlineCode",{parentName:"h3"},"createDataSyncAPI")),Object(r.b)("p",null,"In the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/templates-release/templates/ts-apollo-mongodb-backend/src/index.ts"}),Object(r.b)("inlineCode",{parentName:"a"},"src/index.ts"))," file of the template, use  ",Object(r.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { createDataSyncAPI } from '@graphback/datasync'\n\n\nconst { typeDefs, resolvers, contextCreator } = createDataSyncAPI(modelDefs, { db });\n")),Object(r.b)("p",null,"The data sources provided by ",Object(r.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," ensure that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The documents are always soft deleted"),Object(r.b)("li",{parentName:"ul"},"In the current configuration, provides out of the box delta queries for models that are annotated with ",Object(r.b)("inlineCode",{parentName:"li"},"@datasync"))),Object(r.b)("h2",{id:"issuing-deltasync-queries-from-client"},"Issuing Delta/Sync queries from client"),Object(r.b)("p",null,"As an example consider the usecase when your application has stayed offline for a while. You can then use the ",Object(r.b)("inlineCode",{parentName:"p"},"sync<Type>s")," query to retrieve only the changed documents rather than having to re-fetch all of the documents."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  syncComments(lastSync: 1590679886048) {\n      items {\n        _id\n        text\n        description\n        _lastUpdatedAt\n        _deleted\n      },\n      lastSync,\n      limit\n  }\n}\n")),Object(r.b)("p",null,"As an example response you might get:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "syncComments": {\n      "items": [\n        {\n          "id": "5ee0a1da7f1f39313744185a",\n          "text": "First!",\n          "description": null,\n          "_lastUpdatedAt": 1591852693075,\n          "_deleted": true\n        },\n        {\n          "id": "5ee0a67345beff3862220be4",\n          "text": "Second!",\n          "description": null,\n          "_lastUpdatedAt": 1591780979988,\n          "_deleted": false\n        }\n      ],\n      "lastSync": "1591852700920",\n      "limit": null\n    }\n  }\n}\n')),Object(r.b)("p",null,"The response is a list of the latest versions of the changed  documents along with a ",Object(r.b)("inlineCode",{parentName:"p"},"_deleted")," flag that is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if the document has been deleted since ",Object(r.b)("inlineCode",{parentName:"p"},"lastSync")," and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," otherwise. The response also contains a ",Object(r.b)("inlineCode",{parentName:"p"},"lastSync")," timestamp which can be used in the next ",Object(r.b)("inlineCode",{parentName:"p"},"syncX")," query."),Object(r.b)("p",null,'In the example response, we get that the "First!" comment has been deleted, while another comment "Second!" has been updated.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There is no support for querying relationships through a delta query, all relationship fields are removed when constructing a delta Type."))),Object(r.b)("p",null,"Taking an example model definition with a ",Object(r.b)("inlineCode",{parentName:"p"},"oneToMany")," relationship from the ",Object(r.b)("inlineCode",{parentName:"p"},"Note")," type to the ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  _id: GraphbackObjectID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" \n@model\n@datasync\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n}\n')),Object(r.b)("p",null,"Since the ",Object(r.b)("inlineCode",{parentName:"p"},"Comment")," type has a ",Object(r.b)("inlineCode",{parentName:"p"},"@datasync")," annotation, Graphback will construct a ",Object(r.b)("inlineCode",{parentName:"p"},"CommentDelta")," type as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type CommentDelta {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _deleted: Boolean\n}\n")),Object(r.b)("p",null,"Notice that there are is no relationship field in the ",Object(r.b)("inlineCode",{parentName:"p"},"CommentDelta")," type."))}d.isMDXComponent=!0},1330:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return n?i.a.createElement(u,c(c({ref:t},s),{},{components:n})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);