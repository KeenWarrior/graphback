(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1326:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=b(a),u=n,d=s["".concat(p,".").concat(u)]||s[u]||m[u]||c;return a?r.a.createElement(d,l(l({ref:t},o),{},{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,p=new Array(c);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var o=2;o<c;o++)p[o]=a[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},324:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(1326)),p={id:"_init_startertemplates_",title:"init/starterTemplates",sidebar_label:"init/starterTemplates"},l={unversionedId:"api/create-graphback/modules/_init_startertemplates_",id:"version-0.15.x/api/create-graphback/modules/_init_startertemplates_",isDocsHomePage:!1,title:"init/starterTemplates",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/create-graphback/modules/_init_startertemplates_.md",slug:"/api/create-graphback/modules/_init_startertemplates_",permalink:"/docs/0.15.x/api/create-graphback/modules/_init_startertemplates_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/create-graphback/modules/_init_startertemplates_.md",version:"0.15.x",sidebar_label:"init/starterTemplates"},i=[{value:"Index",id:"index",children:[{value:"Variables",id:"variables",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"<code>Const</code> allTemplates",id:"const-alltemplates",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"extractTemplate",id:"extracttemplate",children:[]}]}],o={rightToc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"variables"},"Variables"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/create-graphback/modules/_init_startertemplates_#const-alltemplates"}),"allTemplates"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/create-graphback/modules/_init_startertemplates_#extracttemplate"}),"extractTemplate"))),Object(c.b)("h2",{id:"variables-1"},"Variables"),Object(c.b)("h3",{id:"const-alltemplates"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," allTemplates"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"allTemplates"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/0.15.x/api/create-graphback/interfaces/_init_templatemetadata_.template"}),"Template"),"[]")," = [\n{\nname: 'apollo-fullstack-react-postgres-ts',\ndescription: 'Apollo GraphQL Server connecting to Postgres database and React client using TypeScript',\nrepos: ","[\n{\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-react-apollo-client',\nmountpath: \"client\"\n}, {\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-apollo-postgres-backend',\n}]","\n},\n{\nname: 'apollo-fullstack-react-mongo-ts',\ndescription: 'Apollo GraphQL Server connecting to Mongo database and React client using TypeScript',\nrepos: ","[\n{\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-react-apollo-client',\nmountpath: \"client\"\n},{\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-apollo-mongodb-backend',\n}]","\n},\n{\nname: 'apollo-mongo-server-ts',\ndescription: 'Apollo GraphQL Server connecting to Mongo database using TypeScript',\nrepos: ","[{\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-apollo-mongodb-backend',\n}]","\n},\n{\nname: 'apollo-mongo-datasync-server-ts',\ndescription: 'Apollo GraphQL Server connecting to Mongo database using TypeScript. Contains Data Synchronization features.',\nrepos: ","[{\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-apollo-mongodb-datasync-backend',\n}]","\n},\n{\nname: 'apollo-postgres-server-ts',\ndescription: 'Apollo GraphQL Server connecting to Postgres database using TypeScript',\nrepos: ","[{\nuri: 'https://github.com/aerogear/graphback',\nbranch: 'templates-0.15.0',\npath: '/templates/ts-apollo-postgres-backend',\n}]","\n}\n]"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/create-graphback/src/init/starterTemplates.ts#L13"}),"init/starterTemplates.ts:13"))),Object(c.b)("p",null,"available templates"),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"extracttemplate"},"extractTemplate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"extractTemplate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"template"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/api/create-graphback/interfaces/_init_templatemetadata_.template"}),"Template"),", ",Object(c.b)("inlineCode",{parentName:"p"},"name"),": string): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/create-graphback/src/init/starterTemplates.ts#L157"}),"init/starterTemplates.ts:157"))),Object(c.b)("p",null,"download and extract template from repository into project folder"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"template")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.15.x/api/create-graphback/interfaces/_init_templatemetadata_.template"}),"Template")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"template information")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name of project folder")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}b.isMDXComponent=!0}}]);