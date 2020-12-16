(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{1330:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),O=a,j=u["".concat(b,".").concat(O)]||u[O]||s[O]||c;return n?r.a.createElement(j,o(o({ref:t},p),{},{components:n})):r.a.createElement(j,o({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var p=2;p<c;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},732:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),c=(n(0),n(1330)),b={id:"_utils_converttype_",title:"utils/convertType",sidebar_label:"utils/convertType"},o={unversionedId:"api/graphback-core/modules/_utils_converttype_",id:"version-1.0/api/graphback-core/modules/_utils_converttype_",isDocsHomePage:!1,title:"utils/convertType",description:"Index",source:"@site/versioned_docs/version-1.0/api/graphback-core/modules/_utils_converttype_.md",slug:"/api/graphback-core/modules/_utils_converttype_",permalink:"/docs/api/graphback-core/modules/_utils_converttype_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-core/modules/_utils_converttype_.md",version:"1.0",sidebar_label:"utils/convertType"},l=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"convertType",id:"converttype",children:[]},{value:"<code>Const</code> isDateObject",id:"const-isdateobject",children:[]}]}],p={rightToc:l};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphback-core/modules/_utils_converttype_#converttype"}),"convertType")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/graphback-core/modules/_utils_converttype_#const-isdateobject"}),"isDateObject"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"converttype"},"convertType"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"convertType"),"(",Object(c.b)("inlineCode",{parentName:"p"},"value"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"toType"),": any): ",Object(c.b)("em",{parentName:"p"},"string | number | boolean | BigInt | ObjectID")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/utils/convertType.ts#L9"}),"packages/graphback-core/src/utils/convertType.ts:9"))),Object(c.b)("p",null,"Helper function to convert a value to another type"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"value")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Value to convert")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"toType")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"convert value to this type")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string | number | boolean | BigInt | ObjectID")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-isdateobject"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," isDateObject"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"isDateObject"),"(",Object(c.b)("inlineCode",{parentName:"p"},"value"),": any): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/utils/convertType.ts#L43"}),"packages/graphback-core/src/utils/convertType.ts:43"))),Object(c.b)("p",null,"Check if value is a Date object"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"value")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")))}i.isMDXComponent=!0}}]);