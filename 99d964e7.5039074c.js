(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{1328:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return r?n.a.createElement(d,b(b({ref:t},l),{},{components:r})):n.a.createElement(d,b({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},812:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(1328)),c={id:"_abstract_table_.tableunique",title:"TableUnique",sidebar_label:"TableUnique"},b={unversionedId:"api/graphql-migrations/interfaces/_abstract_table_.tableunique",id:"version-0.16.x/api/graphql-migrations/interfaces/_abstract_table_.tableunique",isDocsHomePage:!1,title:"TableUnique",description:"Hierarchy",source:"@site/versioned_docs/version-0.16.x/api/graphql-migrations/interfaces/_abstract_table_.tableunique.md",slug:"/api/graphql-migrations/interfaces/_abstract_table_.tableunique",permalink:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_table_.tableunique",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphql-migrations/interfaces/_abstract_table_.tableunique.md",version:"0.16.x",sidebar_label:"TableUnique"},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"columns",id:"columns",children:[]},{value:"name",id:"name",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"TableUnique"))),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_table_.tableunique#columns"}),"columns")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphql-migrations/interfaces/_abstract_table_.tableunique#name"}),"name"))),Object(i.b)("h2",{id:"properties-1"},"Properties"),Object(i.b)("h3",{id:"columns"},"columns"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"columns"),": ",Object(i.b)("em",{parentName:"p"},"string[]")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphql-migrations/src/abstract/Table.ts#L20"}),"abstract/Table.ts:20"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"name"},"name"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"name"),": ",Object(i.b)("em",{parentName:"p"},"string | undefined")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphql-migrations/src/abstract/Table.ts#L21"}),"abstract/Table.ts:21"))))}p.isMDXComponent=!0}}]);