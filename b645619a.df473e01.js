(window.webpackJsonp=window.webpackJsonp||[]).push([[904],{1328:function(e,r,a){"use strict";a.d(r,"a",(function(){return d})),a.d(r,"b",(function(){return m}));var t=a(0),n=a.n(t);function c(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){c(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function b(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var r=n.a.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},d=function(e){var r=l(e.components);return n.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},s=n.a.forwardRef((function(e,r){var a=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=l(a),s=t,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||c;return a?n.a.createElement(m,p(p({ref:r},o),{},{components:a})):n.a.createElement(m,p({ref:r},o))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=a.length,i=new Array(c);i[0]=s;var p={};for(var b in r)hasOwnProperty.call(r,b)&&(p[b]=r[b]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var o=2;o<c;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},973:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return i})),a.d(r,"metadata",(function(){return p})),a.d(r,"rightToc",(function(){return b})),a.d(r,"default",(function(){return l}));var t=a(3),n=a(7),c=(a(0),a(1328)),i={id:"_db_datamapper_.tableid",title:"TableID",sidebar_label:"TableID"},p={unversionedId:"api/graphback-core/interfaces/_db_datamapper_.tableid",id:"version-0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid",isDocsHomePage:!1,title:"TableID",description:"Hierarchy",source:"@site/versioned_docs/version-0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid.md",slug:"/api/graphback-core/interfaces/_db_datamapper_.tableid",permalink:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid.md",version:"0.16.x",sidebar_label:"TableID"},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"name",id:"name",children:[]},{value:"<code>Optional</code> value",id:"optional-value",children:[]}]}],o={rightToc:b};function l(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},o,a,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TableID"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid#name"}),"name")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid#optional-value"}),"value"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(t.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/db/dataMapper.ts#L11"}),"packages/graphback-core/src/db/dataMapper.ts:11"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"optional-value"},Object(c.b)("inlineCode",{parentName:"h3"},"Optional")," value"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"value"),"? : ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(t.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/db/dataMapper.ts#L12"}),"packages/graphback-core/src/db/dataMapper.ts:12"))))}l.isMDXComponent=!0}}]);