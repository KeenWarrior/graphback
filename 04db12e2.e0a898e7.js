(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1328:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var r=a.a.useContext(b),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),l=p(n),s=t,m=l["".concat(o,".").concat(s)]||l[s]||u[s]||i;return n?a.a.createElement(m,c(c({ref:r},b),{},{components:n})):a.a.createElement(m,c({ref:r},b))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return d})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(7),i=(n(0),n(1328)),o={id:"_index_",title:"index",sidebar_label:"index"},c={unversionedId:"api/graphback-runtime-knex/modules/_index_",id:"version-1.0/api/graphback-runtime-knex/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/versioned_docs/version-1.0/api/graphback-runtime-knex/modules/_index_.md",slug:"/api/graphback-runtime-knex/modules/_index_",permalink:"/docs/api/graphback-runtime-knex/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-runtime-knex/modules/_index_.md",version:"1.0",sidebar_label:"index"},d=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"KnexDBDataProvider",id:"knexdbdataprovider",children:[]},{value:"SQLiteKnexDBDataProvider",id:"sqliteknexdbdataprovider",children:[]},{value:"createKnexDbProvider",id:"createknexdbprovider",children:[]}]}],b={rightToc:d};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-knex/modules/_index_#knexdbdataprovider"}),"KnexDBDataProvider")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-knex/modules/_index_#sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-knex/modules/_index_#createknexdbprovider"}),"createKnexDbProvider"))),Object(i.b)("h2",{id:"references-1"},"References"),Object(i.b)("h3",{id:"knexdbdataprovider"},"KnexDBDataProvider"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"KnexDBDataProvider"),":"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sqliteknexdbdataprovider"},"SQLiteKnexDBDataProvider"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"SQLiteKnexDBDataProvider"),":"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"createknexdbprovider"},"createKnexDbProvider"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"createKnexDbProvider"),":"))}p.isMDXComponent=!0}}]);