/*! For license information please see cf8f2f84.b206b7d5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1081:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(1310),n(1309)),o={id:"_relationships_relationshiphelpers_",title:"relationships/relationshipHelpers",sidebar_label:"relationships/relationshipHelpers"},l={unversionedId:"api/graphback-core/modules/_relationships_relationshiphelpers_",id:"api/graphback-core/modules/_relationships_relationshiphelpers_",isDocsHomePage:!1,title:"relationships/relationshipHelpers",description:"Index",source:"@site/../docs/api/graphback-core/modules/_relationships_relationshiphelpers_.md",slug:"/api/graphback-core/modules/_relationships_relationshiphelpers_",permalink:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/modules/_relationships_relationshiphelpers_.md",version:"current",sidebar_label:"relationships/relationshipHelpers"},c=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"addRelationshipFields",id:"addrelationshipfields",children:[]},{value:"extendOneToManyFieldArguments",id:"extendonetomanyfieldarguments",children:[]},{value:"extendRelationshipFields",id:"extendrelationshipfields",children:[]},{value:"isOneToManyField",id:"isonetomanyfield",children:[]},{value:"parseRelationshipAnnotation",id:"parserelationshipannotation",children:[]},{value:"<code>Const</code> relationshipFieldDescriptionTemplate",id:"const-relationshipfielddescriptiontemplate",children:[]},{value:"<code>Const</code> relationshipOneToOneFieldDescriptionTemplate",id:"const-relationshiponetoonefielddescriptiontemplate",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#addrelationshipfields"}),"addRelationshipFields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#extendonetomanyfieldarguments"}),"extendOneToManyFieldArguments")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#extendrelationshipfields"}),"extendRelationshipFields")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#isonetomanyfield"}),"isOneToManyField")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#parserelationshipannotation"}),"parseRelationshipAnnotation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#const-relationshipfielddescriptiontemplate"}),"relationshipFieldDescriptionTemplate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/modules/_relationships_relationshiphelpers_#const-relationshiponetoonefielddescriptiontemplate"}),"relationshipOneToOneFieldDescriptionTemplate"))),Object(i.b)("h2",{id:"functions-1"},"Functions"),Object(i.b)("h3",{id:"addrelationshipfields"},"addRelationshipFields"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"addRelationshipFields"),"(",Object(i.b)("inlineCode",{parentName:"p"},"model"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),", ",Object(i.b)("inlineCode",{parentName:"p"},"typeComposer"),": ObjectTypeComposer): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L77"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:77"))),Object(i.b)("p",null,"Generate relationship fields inferred from metadata\nand add to the model type"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"model")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Graphback model definition")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"typeComposer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ObjectTypeComposer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQL Compose Type composer for the model")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"extendonetomanyfieldarguments"},"extendOneToManyFieldArguments"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"extendOneToManyFieldArguments"),"(",Object(i.b)("inlineCode",{parentName:"p"},"model"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),", ",Object(i.b)("inlineCode",{parentName:"p"},"typeComposer"),": ObjectTypeComposer): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L127"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:127"))),Object(i.b)("p",null,"Extend one-to-many field by adding filter arguments"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"model")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Graphback model definition")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"typeComposer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ObjectTypeComposer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQL Compose Type composer for the model")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"extendrelationshipfields"},"extendRelationshipFields"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"extendRelationshipFields"),"(",Object(i.b)("inlineCode",{parentName:"p"},"model"),": ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition"),", ",Object(i.b)("inlineCode",{parentName:"p"},"typeComposer"),": ObjectTypeComposer): ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L101"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:101"))),Object(i.b)("p",null,"Extends an existing relationship field by adding metadata such as annotations"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"model")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_plugin_modeldefinition_#modeldefinition"}),"ModelDefinition")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Graphback model definition")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"typeComposer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ObjectTypeComposer"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQL Compose Type composer for the model")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"void")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isonetomanyfield"},"isOneToManyField"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"isOneToManyField"),"(",Object(i.b)("inlineCode",{parentName:"p"},"field"),": GraphQLField\u2039any, any\u203a): ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L42"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:42"))),Object(i.b)("p",null,"Helper to check if a field is a oneToMany"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"field")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GraphQLField\u2039any, any\u203a")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"parserelationshipannotation"},"parseRelationshipAnnotation"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"parseRelationshipAnnotation"),"(",Object(i.b)("inlineCode",{parentName:"p"},"description"),": string): ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.relationshipannotation"}),"RelationshipAnnotation")," | undefined")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L13"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:13"))),Object(i.b)("p",null,"Parse relationship metadata string to strongly-typed interface"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""'),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"field description")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/interfaces/_relationships_relationshipmetadatabuilder_.relationshipannotation"}),"RelationshipAnnotation")," | undefined")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"const-relationshipfielddescriptiontemplate"},Object(i.b)("inlineCode",{parentName:"h3"},"Const")," relationshipFieldDescriptionTemplate"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"relationshipFieldDescriptionTemplate"),"(",Object(i.b)("inlineCode",{parentName:"p"},"relationshipKind"),': "oneToOne" | "oneToMany" | "manyToOne", ',Object(i.b)("inlineCode",{parentName:"p"},"fieldName"),": string, ",Object(i.b)("inlineCode",{parentName:"p"},"columnKey"),": string): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L55"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:55"))),Object(i.b)("p",null,"Generic template for relationship annotations"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"relationshipKind")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"oneToOne" ',"|",' "oneToMany" ',"|",' "manyToOne"'),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fieldName")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"columnKey")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"const-relationshiponetoonefielddescriptiontemplate"},Object(i.b)("inlineCode",{parentName:"h3"},"Const")," relationshipOneToOneFieldDescriptionTemplate"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"relationshipOneToOneFieldDescriptionTemplate"),"(",Object(i.b)("inlineCode",{parentName:"p"},"relationshipKind"),': "oneToOne" | "oneToMany" | "manyToOne", ',Object(i.b)("inlineCode",{parentName:"p"},"columnKey"),": string): ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/f4179fe/packages/graphback-core/src/relationships/relationshipHelpers.ts#L66"}),"packages/graphback-core/src/relationships/relationshipHelpers.ts:66"))),Object(i.b)("p",null,"Template for one-to-one relationship annotations"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"relationshipKind")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"oneToOne" ',"|",' "oneToMany" ',"|",' "manyToOne"'),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"columnKey")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"string")))}b.isMDXComponent=!0},1309:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1310:function(e,t,n){"use strict";e.exports=n(1311)},1311:function(e,t,n){"use strict";var a=n(1312),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,p=r?Symbol.for("react.profiler"):60114,b=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,O=r?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function N(){}function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=y.prototype;var v=_.prototype=new N;v.constructor=_,a(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},C=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var a,r={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)C.call(t,a)&&!x.hasOwnProperty(a)&&(r[a]=t[a]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var p=Array(c),b=0;b<c;b++)p[b]=arguments[b+2];r.children=p}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:i,type:e,key:o,ref:l,props:r,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var P=/\/+/g,R=[];function D(e,t,n,a){if(R.length){var r=R.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function S(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function F(e,t,n,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var l=!1;if(null===e)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return n(a,e,""===t?"."+M(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=t+M(r=e[c],c);l+=F(r,p,n,a)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=j&&e[j]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),c=0;!(r=e.next()).done;)l+=F(r=r.value,p=t+M(r,c++),n,a);else if("object"===r)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function E(e,t,n){return null==e?0:F(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,a,n,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),a.push(e))}function A(e,t,n,a,r){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),E(e,H,t=D(t,i,a,r)),S(t)}var L={current:null};function I(){var e=L.current;if(null===e)throw Error(h(321));return e}var G={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,n){if(null==e)return e;var a=[];return A(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;E(e,$,t=D(null,null,t,n)),S(t)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(h(143));return e}},t.Component=y,t.Fragment=l,t.Profiler=p,t.PureComponent=_,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var r=a({},e.props),o=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(b in t)C.call(t,b)&&!x.hasOwnProperty(b)&&(r[b]=void 0===t[b]&&void 0!==p?p[b]:t[b])}var b=arguments.length-2;if(1===b)r.children=n;else if(1<b){p=Array(b);for(var s=0;s<b;s++)p[s]=arguments[s+2];r.children=p}return{$$typeof:i,type:e.type,key:o,ref:l,props:r,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return I().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,n){return I().useReducer(e,t,n)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},1312:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,l,c=o(e),p=1;p<arguments.length;p++){for(var b in n=Object(arguments[p]))r.call(n,b)&&(c[b]=n[b]);if(a){l=a(n);for(var s=0;s<l.length;s++)i.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}}}]);