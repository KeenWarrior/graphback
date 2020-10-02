(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1309:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(a),f=r,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||c;return a?n.a.createElement(d,o(o({ref:t},l),{},{components:a})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},501:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),c=(a(0),a(1309)),i={id:"_util_.conflictstatemap",title:"ConflictStateMap",sidebar_label:"ConflictStateMap"},o={unversionedId:"api/graphback-datasync/interfaces/_util_.conflictstatemap",id:"version-0.15.x/api/graphback-datasync/interfaces/_util_.conflictstatemap",isDocsHomePage:!1,title:"ConflictStateMap",description:"Interface for holding the conflicting states",source:"@site/versioned_docs/version-0.15.x/api/graphback-datasync/interfaces/_util_.conflictstatemap.md",slug:"/api/graphback-datasync/interfaces/_util_.conflictstatemap",permalink:"/docs/0.15.x/api/graphback-datasync/interfaces/_util_.conflictstatemap",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-datasync/interfaces/_util_.conflictstatemap.md",version:"0.15.x",sidebar_label:"ConflictStateMap"},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"clientState",id:"clientstate",children:[]},{value:"serverState",id:"serverstate",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Interface for holding the conflicting states\nbetween server and client"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ConflictStateMap"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-datasync/interfaces/_util_.conflictstatemap#clientstate"}),"clientState")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-datasync/interfaces/_util_.conflictstatemap#serverstate"}),"serverState"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"clientstate"},"clientState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"clientState"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-datasync/src/util.ts#L28"}),"packages/graphback-datasync/src/util.ts:28"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serverstate"},"serverState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"serverState"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-datasync/src/util.ts#L27"}),"packages/graphback-datasync/src/util.ts:27"))))}s.isMDXComponent=!0}}]);