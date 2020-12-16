/*! For license information please see 4fdef4e1.be2fb1d9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1330:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,m=d["".concat(o,".").concat(s)]||d[s]||b[s]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1331:function(e,t,n){"use strict";e.exports=n(1332)},1332:function(e,t,n){"use strict";var a=n(1333),r=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,c=60110,l=60112;t.Suspense=60113;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;r=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),o=d("react.provider"),c=d("react.context"),l=d("react.forward_ref"),t.Suspense=d("react.suspense"),p=d("react.memo"),u=d("react.lazy")}var b="function"==typeof Symbol&&Symbol.iterator;function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function h(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}function O(){}function j(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(s(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=h.prototype;var g=j.prototype=new O;g.constructor=j,a(g,h.prototype),g.isPureReactComponent=!0;var y={current:null},N=Object.prototype.hasOwnProperty,v={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var a,i={},o=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)N.call(t,a)&&!v.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var p=Array(l),u=0;u<l;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===i[a]&&(i[a]=l[a]);return{$$typeof:r,type:e,key:o,ref:c,props:i,_owner:y.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var S=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,n,a,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case i:l=!0}}if(l)return o=o(l=e),e=""===a?"."+k(l,0):a,Array.isArray(o)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),I(o,t,n,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=a+k(c=e[p],p);l+=I(c,t,n,u,o)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=b&&e[b]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),p=0;!(c=e.next()).done;)l+=I(c=c.value,t,n,u=a+k(c,p++),o);else if("object"===c)throw t=""+e,Error(s(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var a=[],r=0;return I(e,a,"","",(function(e){return t.call(n,e,r++)})),a}function M(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function T(){var e=x.current;if(null===e)throw Error(s(321));return e}var E={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:y,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:_,forEach:function(e,t,n){_(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(s(143));return e}},t.Component=h,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,n){if(null==e)throw Error(s(267,e));var i=a({},e.props),o=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=y.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(u in t)N.call(t,u)&&!v.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==p?p[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){p=Array(u);for(var d=0;d<u;d++)p[d]=arguments[d+2];i.children=p}return{$$typeof:r,type:e.type,key:o,ref:c,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.1"},1333:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,c,l=o(e),p=1;p<arguments.length;p++){for(var u in n=Object(arguments[p]))r.call(n,u)&&(l[u]=n[u]);if(a){c=a(n);for(var d=0;d<c.length;d++)i.call(n,c[d])&&(l[c[d]]=n[c[d]])}}return l}},470:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(1331),n(1330)),o={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},c={unversionedId:"crud/mutations",id:"crud/mutations",isDocsHomePage:!1,title:"Mutations",description:"Graphback provides three mutation types for every model.",source:"@site/../docs/crud/mutations.md",slug:"/crud/mutations",permalink:"/docs/next/crud/mutations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/crud/mutations.md",version:"current",sidebar_label:"Mutations",sidebar:"docs",previous:{title:"Queries",permalink:"/docs/next/crud/queries"},next:{title:"Subscriptions",permalink:"/docs/next/crud/subscriptions"}},l=[{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback provides three mutation types for every model."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#create"}),Object(i.b)("inlineCode",{parentName:"a"},"create<Type>")),": create a new item in the database of and return the created object in the response."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#update"}),Object(i.b)("inlineCode",{parentName:"a"},"update<Type>")),": update an existing item in the database and return the updated object in the response."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#delete"}),Object(i.b)("inlineCode",{parentName:"a"},"delete<Type>")),": delete a single item in the database and return the deleted object in the response.")),Object(i.b)("h2",{id:"create"},"Create"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"create")," mutation allows the client to insert a new item in the database."),Object(i.b)("p",null,"The mutation follows the naming format ",Object(i.b)("inlineCode",{parentName:"p"},"create<Type>"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  createNote(input: CreateNoteInput!): Note\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Arguments:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for creating a new ",Object(i.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(i.b)("p",null,"Graphback creates a ",Object(i.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," input type for each of the data models you define, where the ",Object(i.b)("inlineCode",{parentName:"p"},"create")," configuration is enabled. Relationship object fields in models map to the foreign key field in the database. "),Object(i.b)("p",null,"Each input field in ",Object(i.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," directly maps to the fields in the model. With the exception of the primary field, each field added to the input type preserves field nullability from the original model."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Primary fields will be nullable in the input type as they are often auto-generated by the database."))),Object(i.b)("p",null,"Take the following ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @manyToOne(field: \'notes\', key: \'authorId\')\n  """\n  author: User\n}\n\n// highlight-start\ninput CreateNoteInput {\n  title: String!\n  description: String\n  authorId: ID\n}\n// highlight-end\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CreateNoteInput")," input type is created from the ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Auto-incrementing primary key fields: ",Object(i.b)("inlineCode",{parentName:"p"},"id: ID")," and ",Object(i.b)("inlineCode",{parentName:"p"},"_id: GraphbackObjectID")," are excluded from the ",Object(i.b)("inlineCode",{parentName:"p"},"Create<Type>Input")," type."))),Object(i.b)("p",null,"Example of a typical create mutation on ",Object(i.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createNote(input: {\n    title: "Do shopping",\n    description: "Get groceries for party",\n    authorId: 19\n  }) {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n}\n')),Object(i.b)("p",null,"You can also perform ",Object(i.b)("inlineCode",{parentName:"p"},"create")," mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  metadata: NoteMetadata\n}\n\n"""Regular non-model GraphQL type"""\ntype NoteMetadata {\n  createdAt: String\n  updatedAt: String\n}\n\n// highlight-start\ninput CreateNoteInput {\n  title: String!\n  description: String\n  metadata: CreateNoteMetadataInput\n}\n\ninput CreateNoteMetadataInput {\n  createdAt: String\n  updatedAt: String\n}\n// highlight-end\n')),Object(i.b)("p",null,"Graphback generates the appropriate input types for regular types that do not map to any database table/collection but are used as a field in a model."),Object(i.b)("p",null,"You can create a new ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," with ",Object(i.b)("inlineCode",{parentName:"p"},"NoteMetadata")," in a single mutation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createNote(input: {\n    title: "Do shopping",\n    description: "Get groceries for party",\n    metadata: {\n      createdAt: "2340324024",\n      updatedAt: "2340324024"\n    }\n  }) {\n    id\n    title\n    description\n    metadata {\n      createdAt\n      updatedAt\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"update"},"Update"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"update")," mutation allows the client to update an existing item in the database."),Object(i.b)("p",null,"The mutation follows the naming format ",Object(i.b)("inlineCode",{parentName:"p"},"update<Type>"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  updateNote(input: MutateNoteInput!): Note\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Arguments:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for updating an existing ",Object(i.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(i.b)("p",null,"Graphback creates a ",Object(i.b)("inlineCode",{parentName:"p"},"Mutate<Type>Input")," input type for each of the data models you define, where either the ",Object(i.b)("inlineCode",{parentName:"p"},"update")," or ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," configuration is enabled. Relationship object fields in models map to the foreign key field in the database. "),Object(i.b)("p",null,"With the exception of the primary field, all input fields are set to nullable to allow for partial updates. Graphback uses the primary field to ensure the correct item is being updated."),Object(i.b)("p",null,"Take the following ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @manyToOne(field: \'notes\', key: \'authorId\')\n  """\n  author: User\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n  authorId: ID\n}\n// highlight-end\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," input type is created from the ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model."),Object(i.b)("p",null,"Example of a typical create mutation on ",Object(i.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateNote(input: {\n    id: 10,\n    description: "Get remainder of groceries"\n  }) {\n    id\n    title\n    description\n    author {\n      id\n      name\n    }\n  }\n}\n')),Object(i.b)("p",null,"You can also perform ",Object(i.b)("inlineCode",{parentName:"p"},"update")," mutations on models with GraphQL type fields which map to a JSON column or an embedded document (MongoDB):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  metadata: NoteMetadata\n}\n\n"""Regular non-model GraphQL type"""\ntype NoteMetadata {\n  createdAt: String\n  updatedAt: String\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n  metadata: MutateNoteMetadataInput\n}\n\ninput MutateNoteMetadataInput {\n  createdAt: String\n  updatedAt: String\n}\n// highlight-end\n')),Object(i.b)("p",null,"Graphback generates the appropriate input types for regular GraphQL types that do not map to any database table/collection but are used as a field in a model."),Object(i.b)("p",null,"You can update an existing ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," with ",Object(i.b)("inlineCode",{parentName:"p"},"NoteMetadata")," in a single mutation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateNote(input: {\n    id: 10,\n    description: "Get prosecco for party",\n    metadata: {\n      createdAt: "2340349036",\n      updatedAt: "2340349036"\n    }\n  }) {\n    id\n    title\n    description\n    metadata {\n      createdAt\n      updatedAt\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"delete"},"Delete"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," mutation allows the client to delete an existing item from the database."),Object(i.b)("p",null,"The mutation follows the naming format ",Object(i.b)("inlineCode",{parentName:"p"},"delete<Type>"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  deleteNote(input: MutateNoteInput!): Note\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Arguments:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": input type created by Graphback for updating an existing ",Object(i.b)("inlineCode",{parentName:"li"},"Note")," object.")),Object(i.b)("p",null,"Graphback creates a ",Object(i.b)("inlineCode",{parentName:"p"},"Mutate<Type>Input")," input type for each of the data models you define, when either the the ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," or ",Object(i.b)("inlineCode",{parentName:"p"},"update")," CRUD configuration is enabled."),Object(i.b)("p",null,"With the exception of the primary field, all input fields are set to nullable. Graphback uses the value from the primary field to ensure the correct is being deleted."),Object(i.b)("p",null,"Take the following ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model as an example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n}\n\n// highlight-start\ninput MutateNoteInput {\n  id: ID!\n  title: String\n  description: String\n}\n// highlight-end\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," input type is created from the ",Object(i.b)("inlineCode",{parentName:"p"},"Note")," model. Each input field in ",Object(i.b)("inlineCode",{parentName:"p"},"MutateNoteInput")," maps to the fields defined in ",Object(i.b)("inlineCode",{parentName:"p"},"Note"),"."),Object(i.b)("p",null,"Example of a typical ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," mutation on ",Object(i.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteNote(input: {\n    id: 10\n  }) {\n    id\n  }\n}\n")))}u.isMDXComponent=!0}}]);