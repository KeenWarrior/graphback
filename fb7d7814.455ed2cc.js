(window.webpackJsonp=window.webpackJsonp||[]).push([[1230],{1286:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(1309)),l={id:"_plugin_migrateplugin_",title:"plugin/MigratePlugin",sidebar_label:"plugin/MigratePlugin"},c={unversionedId:"api/graphql-migrations/modules/_plugin_migrateplugin_",id:"version-0.16.x/api/graphql-migrations/modules/_plugin_migrateplugin_",isDocsHomePage:!1,title:"plugin/MigratePlugin",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphql-migrations/modules/_plugin_migrateplugin_.md",slug:"/api/graphql-migrations/modules/_plugin_migrateplugin_",permalink:"/docs/0.16.x/api/graphql-migrations/modules/_plugin_migrateplugin_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphql-migrations/modules/_plugin_migrateplugin_.md",version:"0.16.x",sidebar_label:"plugin/MigratePlugin"},p=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"WriteCallback",id:"writecallback",children:[]}]}],o={rightToc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"interfaces"},"Interfaces"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin"}),"MigratePlugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_plugin_migrateplugin_.writeparams"}),"WriteParams"))),Object(i.b)("h3",{id:"type-aliases"},"Type aliases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphql-migrations/modules/_plugin_migrateplugin_#writecallback"}),"WriteCallback"))),Object(i.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(i.b)("h3",{id:"writecallback"},"WriteCallback"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"WriteCallback"),": ",Object(i.b)("em",{parentName:"p"},"function")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphql-migrations/src/plugin/MigratePlugin.ts#L4"}),"plugin/MigratePlugin.ts:4"))),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"op"),": any, ",Object(i.b)("inlineCode",{parentName:"p"},"transaction"),": Transaction): ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"op")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"transaction")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transaction")))))}b.isMDXComponent=!0},1309:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(a),g=n,m=u["".concat(l,".").concat(g)]||u[g]||s[g]||i;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);