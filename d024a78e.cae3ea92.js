/*! For license information please see d024a78e.cae3ea92.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1031],{1100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(1327),n(1326)),i={id:"api",title:"API Reference",sidebar_label:"API Reference"},l={unversionedId:"graphql-migrations/api",id:"graphql-migrations/api",isDocsHomePage:!1,title:"API Reference",description:"The migrateDB method takes the three arguments, listed below.",source:"@site/../docs/graphql-migrations/api-reference.md",slug:"/graphql-migrations/api",permalink:"/docs/next/graphql-migrations/api",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/graphql-migrations/api-reference.md",version:"current",sidebar_label:"API Reference",sidebar:"docs",previous:{title:"Database Design",permalink:"/docs/next/graphql-migrations/db-design"},next:{title:"Custom logic with Plugins",permalink:"/docs/next/graphql-migrations/plugins"}},c=[{value:"Table and Column Comments",id:"table-and-column-comments",children:[]},{value:"Scalar Mapping",id:"scalar-mapping",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"migrateDB")," method takes the three arguments, listed below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config"),": ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://knexjs.org/#Installation-client"}),"Knex")," database configuration options."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaText"),": GraphQL schema text."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dbSchemaName")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"'public'"),"): table schema: ",Object(o.b)("inlineCode",{parentName:"li"},"<schemaName>.<tableName>"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dbTablePrefix")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"): table name prefix: ",Object(o.b)("inlineCode",{parentName:"li"},"<prefix><tableName>"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dbColumnPrefix")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"): column name prefix: ",Object(o.b)("inlineCode",{parentName:"li"},"<prefix><columnName>"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#table-and-column-comments"}),Object(o.b)("inlineCode",{parentName:"a"},"updateComments"))," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"): by default, ",Object(o.b)("inlineCode",{parentName:"li"},"migrateDB")," will not create or update comments on table and columns."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#scalar-mapping"}),Object(o.b)("inlineCode",{parentName:"a"},"scalarMap"))," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"undefined"),"): Custom Scalar mapping"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mapListToJson")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"): Map scalar/enum lists to json column type by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/graphql-migrations/plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"plugins"))," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"): List of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/plugin/MigratePlugin.ts"}),"graphql-migrations plugins")," which describes queries that can be executed during migrations. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"debug")," (default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"): displays debugging informations and SQL queries."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"removeDirectivesFromSchema"),": (default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"): Strips all directives from schema before processing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/graphql-migrations/filters"}),Object(o.b)("inlineCode",{parentName:"a"},"operationFilter")),": Filter out database operations that we don't want.")))),Object(o.b)("h2",{id:"table-and-column-comments"},"Table and Column Comments"),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"updateComments")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," it will automatically create/update table and column comments.\nTable / column comments are type or field description parsed from the model schema.\nThe parsing logic takes care of stripping off all annotations leaving only business related comments.    "),Object(o.b)("p",null,"The below model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\nNote business model table comment.\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  Note title.\n  """\n  title: String!\n}\n')),Object(o.b)("p",null,"Execution with the ",Object(o.b)("inlineCode",{parentName:"p"},"updateComments")," options set to true, as shown below"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"....\nmigrateDB(dbConfig, schemaText, {\n  updateComments: true\n}).then((ops) => {\n    console.log(ops);\n});\n...\n")),Object(o.b)("p",null,"Will create / update the ",Object(o.b)("inlineCode",{parentName:"p"},"note")," table comments as shown below: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"\\d+\n                                       List of relations\n Schema |    Name     |   Type   |   Owner    |    Size    |            Description             \n--------+-------------+----------+------------+------------+------------------------------------\n public | note        | table    | postgresql | 8192 bytes | Note business model table comment.\n public | note_id_seq | sequence | postgresql | 8192 bytes | \n(2 rows)\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),'\\d+ note\n                                                     Table "public.note"\n Column |          Type          |                     Modifiers                     | Storage  | Stats target | Description \n--------+------------------------+---------------------------------------------------+----------+--------------+-------------\n title  | character varying(255) | not null                                          | extended |              | Note title.\n id     | integer                | not null default nextval(\'note_id_seq\'::regclass) | plain    |              | \nIndexes:\n    "note_pkey" PRIMARY KEY, btree (id)\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: This options may not be supported by some database. ")),Object(o.b)("h2",{id:"scalar-mapping"},"Scalar Mapping"),Object(o.b)("p",null,"This option is a function used to specify custom Scalar mapping.\nIt takes three arguments ",Object(o.b)("inlineCode",{parentName:"p"},"(field: GraphQLField, fieldType: GraphQLScalarType, dbAnnotation: any)"),", depending on the field type you could return the ",Object(o.b)("inlineCode",{parentName:"p"},"TableColumnTypeDescriptor"),": "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"interface TableColumnTypeDescriptor {\n  /**\n   * Knex column builder function name.\n   */\n  type: TableColumnType | string\n  /**\n   * Builder function arguments.\n   */\n  args: any[]\n}\n")),Object(o.b)("p",null,"For example, if you want a custom ",Object(o.b)("inlineCode",{parentName:"p"},"CustomDate")," scalar to be have a ",Object(o.b)("inlineCode",{parentName:"p"},"date")," type in the database:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { migrateDB } from 'graphql-migrations';\n\nconst schemaText = ```\n\"\"\" @model \"\"\"\ntype Note {\n  id: ID!\n  title: String!\n  createdAt: CustomDate\n}\n\nscalar CustomDate\n```;\n\nconst dbConfig = {\n   // Knex.js db configuration\n};\n\nmigrateDB(dbConfig, schemaText, {\n  scalarMap: (\n  field: GraphQLField<any, any>,\n  scalarType: GraphQLScalarType,\n  annotations: any,\n): TableColumnTypeDescriptor | null => {\n\n  // custom date converted to date type\n  if (scalarType.name === 'CustomDate') {\n    return {\n      type: 'date',\n      args: []\n    }\n  }\n\n  return undefined\n} \n}).then((ops) => {\n    console.log(ops);\n});\n")),Object(o.b)("p",null,"A good example of this function is the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphql-migrations/src/abstract/getColumnTypeFromScalar.ts#L18-L129"}),"default scalar type to database column")," function, that Graphback uses to convert scalar types based on certain creteria."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Checkout the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../model/scalars.md"}),"Graphback Scalars")," chapter to learn more of supported GraphQL scalars with automatic mapping to the underlying database type. "))))}p.isMDXComponent=!0},1326:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1327:function(e,t,n){"use strict";e.exports=n(1328)},1328:function(e,t,n){"use strict";var r=n(1329),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,m=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var C=N.prototype=new v;C.constructor=N,r(C,j.prototype),C.isPureReactComponent=!0;var w={current:null},x=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:w.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,_=[];function E(e,t,n,r){if(_.length){var a=_.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function D(e,t,n,r){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(r,e,""===t?"."+$(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=t+$(a=e[c],c);l+=D(a,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=y&&e[y]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),c=0;!(a=e.next()).done;)l+=D(a=a.value,u=t+$(a,c++),n,r);else if("object"===a)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function R(e,t,n){return null==e?0:D(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(P,"$&/")+"/"),R(e,I,t=E(t,o,r,a)),q(t)}var L={current:null};function F(){var e=L.current;if(null===e)throw Error(g(321));return e}var B={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,M,t=E(null,null,t,n)),q(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=l,t.Profiler=u,t.PureComponent=N,t.StrictMode=c,t.Suspense=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)x.call(t,p)&&!S.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){u=Array(p);for(var s=0;s<p;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},1329:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(c[p]=n[p]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}}}]);