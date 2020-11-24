(window.webpackJsonp=window.webpackJsonp||[]).push([[902],{1326:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=p(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},h=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),h=n,m=b["".concat(i,".").concat(h)]||b[h]||d[h]||o;return t?a.a.createElement(m,l(l({ref:r},c),{},{components:t})):a.a.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},969:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(1326)),i={id:"index",title:"graphql-serve",sidebar_label:"README"},l={unversionedId:"api/graphql-serve/index",id:"version-1.0/api/graphql-serve/index",isDocsHomePage:!1,title:"graphql-serve",description:"Graphback",source:"@site/versioned_docs/version-1.0/api/graphql-serve/index.md",slug:"/api/graphql-serve/index",permalink:"/docs/api/graphql-serve/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphql-serve/index.md",version:"1.0",sidebar_label:"README"},s=[{value:"Graphback",id:"graphback",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Extension to GraphQL TestX",id:"extension-to-graphql-testx",children:[]}],c={rightToc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"graphback"},"Graphback"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(o.b)("br",null),"Auto generate database structure, ",Object(o.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Documentation"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev"),"\n",Object(o.b)("strong",{parentName:"p"},"Repository"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(o.b)("h1",{id:"graphql-serve"},"graphql-serve"),Object(o.b)("p",null,"Fully functional GraphQL Server based on Graphback CRUD Specification"),Object(o.b)("p",null,"graphql-serve is a full-featured GraphQL server, based on\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/"}),"Graphback")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/"}),"Apollo Server"),". With the\nminimum configuration required, you have a server ready for testing GraphQL\nclient applications or libraries. Unlike mocking alternatives, graphql-serve\noffers persistent data between queries and mutation using in-memory SQLite\ndatabase."),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"Using npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g graphql-serve\n")),Object(o.b)("p",null,"or yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add graphql-serve\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("h4",{id:"gqlserve"},"gqlserve"),Object(o.b)("p",null,"The gqlserve command only needs one or more ",Object(o.b)("inlineCode",{parentName:"p"},"*.graphql")," data model file(s) in order to setup a working GraphQL server. Here is an example model file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n')),Object(o.b)("p",null,"Assuming you have created your various ",Object(o.b)("inlineCode",{parentName:"p"},"*.graphql")," data model files in the ",Object(o.b)("inlineCode",{parentName:"p"},"models")," directory, to automatically generate resolvers and start a GraphQL server listening on port 8080 do the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve models --port=8080\n")),Object(o.b)("p",null,"If you only need to see the generated GraphQL Schema, use the ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema .\n")),Object(o.b)("p",null,"The above command prints schema generated from data model files in the current directory."),Object(o.b)("p",null,"This information is also provided with the command itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve -h\ngqlserve <command>\n\nCommands:\n  gqlserve print-schema [modelDir]     Generate and print GraphQL schema from data\n                                   model files\n  gqlserve serve [modelDir] [options]  Generate and start GraphQL server from data\n                                   model files\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n")),Object(o.b)("p",null,"For the ",Object(o.b)("inlineCode",{parentName:"p"},"serve")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve serve -h\ngqlserve serve [modelDir] [options]\n\nGenerate and start GraphQL server from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  --port, -p        Specify the port on which to listen on              [number]\n  --datasync, --ds  Enable datasynchronization features                [boolean]\n  -h, --help        Show help                                          [boolean]\n  -v, --version     Show version number                                [boolean]\n\nExamples:\n  gqlserve serve . -p 8080  generate schema from data model files in current\n                            directory and start GraphQL server on port 8080\n")),Object(o.b)("p",null,"Also for ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gqlserve print-schema -h\ngqlserve print-schema [modelDir]\n\nGenerate and print GraphQL schema from data model files\n\nPositionals:\n  modelDir, model  Directory to search for data models                  [string]\n\nOptions:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n\nExamples:\n  gqlserve print-schema modelDir  only display generated schema from data model\n                              files in modelDir directory and quit\n")),Object(o.b)("p",null,"Under to hood we use Graphback to parse the Type Definitions/Data Model and\ngenerate the GraphQL schema and resolvers. See the\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/docs/datamodel"}),"Graphback Docs on Data Model Definition")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev/docs/next/datasync/datasync-intro"}),"Data Synchronization")," for data synchronization\nfeatures."),Object(o.b)("h2",{id:"extension-to-graphql-testx"},"Extension to GraphQL TestX"),Object(o.b)("p",null,"GraphQL serve is based on GraphQL-TestX:\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/graphql-testx"}),"https://github.com/aerogear/graphql-testx")))}p.isMDXComponent=!0}}]);