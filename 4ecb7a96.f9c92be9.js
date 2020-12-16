/*! For license information please see 4ecb7a96.f9c92be9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{1330:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1331:function(e,t,n){"use strict";e.exports=n(1332)},1332:function(e,t,n){"use strict";var r=n(1333),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,l=60112;t.Suspense=60113;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),t.Suspense=p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function h(){}function O(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var j=O.prototype=new h;j.constructor=O,r(j,y.prototype),j.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!N.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+_(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+_(c=e[u],u);l+=S(c,t,n,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),u=0;!(c=e.next()).done;)l+=S(c=c.value,t,n,s=r+_(c,u++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function M(){var e=T.current;if(null===e)throw Error(f(321));return e}var E={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(f(143));return e}},t.Component=y,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var a=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=g.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)v.call(t,s)&&!N.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return M().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,n){return M().useReducer(e,t,n)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="17.0.1"},1333:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},465:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(1331),n(1330)),i={id:"datamodel",title:"Data Model",sidebar_label:"Data Model"},c={unversionedId:"model/datamodel",id:"model/datamodel",isDocsHomePage:!1,title:"Data Model",description:"Graphback generates a GraphQL API and client-side documents using your data models. The data models are represented in the GraphQL Schema language as GraphQL types.",source:"@site/../docs/model/datamodel.md",slug:"/model/datamodel",permalink:"/docs/next/model/datamodel",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/model/datamodel.md",version:"current",sidebar_label:"Data Model",sidebar:"docs",previous:{title:"Adding Graphback to your project",permalink:"/docs/next/getting-started/add-to-project"},next:{title:"Annotations",permalink:"/docs/next/model/annotations"}},l=[{value:"Model",id:"model",children:[]},{value:"Primary key",id:"primary-key",children:[{value:"PostgreSQL",id:"postgresql",children:[]},{value:"MongoDB",id:"mongodb",children:[]}]},{value:"Relationships",id:"relationships",children:[{value:"OneToMany",id:"onetomany",children:[]},{value:"OneToOne",id:"onetoone",children:[]},{value:"ManyToMany",id:"manytomany",children:[]}]},{value:"Type fields",id:"type-fields",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback generates a GraphQL API and client-side documents using your data models. The data models are represented in the GraphQL Schema language as GraphQL types."),Object(a.b)("p",null,"In this section you will learn how to design and configure your data models for use with Graphback and how they can be used for multiple datasources."),Object(a.b)("h2",{id:"model"},"Model"),Object(a.b)("p",null,"Graphback processes GraphQL Schema types annotated with ",Object(a.b)("inlineCode",{parentName:"p"},"@model"),".\nAdding this annotation to your type will generate CRUD resolvers, services, data providers and client queries following the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD")," format. For the full annotation definition see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#model"}),Object(a.b)("inlineCode",{parentName:"a"},"@model")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  ...\n}\n')),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Check out the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/model/scalars"}),"Graphback Scalars")," chapter to see the list of scalars supported out of the box. "))),Object(a.b)("h2",{id:"primary-key"},"Primary key"),Object(a.b)("p",null,"Graphback requires each data model to have one primary key field which is used to uniquely represent every object in the database."),Object(a.b)("h3",{id:"postgresql"},"PostgreSQL"),Object(a.b)("p",null,"For PostgreSQL, the default primary key format is ",Object(a.b)("inlineCode",{parentName:"p"},"id: ID!"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  """Default primary key format for PostgreSQL"""\n  id: ID!\n  ...\n}\n')),Object(a.b)("p",null,"You can also use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#id"}),Object(a.b)("inlineCode",{parentName:"a"},"@id"))," annotation to set a custom primary field."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  This becomes the primary key\n  @id\n  """\n  title: String\n  ...\n}\n')),Object(a.b)("h3",{id:"mongodb"},"MongoDB"),Object(a.b)("p",null,"If you are using MongoDB you should use ",Object(a.b)("inlineCode",{parentName:"p"},"_id: GraphbackObjectID"),", as ",Object(a.b)("inlineCode",{parentName:"p"},"_id")," in MongoDB documents is reserved for the primary key."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  """Primary key format for MongoDB"""\n  _id: GraphbackObjectID!\n  ...\n}\n\nscalar GraphbackObjectID\n')),Object(a.b)("h2",{id:"relationships"},"Relationships"),Object(a.b)("p",null,"Graphback provides support for one-to-many, one-to-one and many-to-many relationships."),Object(a.b)("h3",{id:"onetomany"},"OneToMany"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]\n}\n')),Object(a.b)("p",null,"This creates a one-to-many relationship from ",Object(a.b)("inlineCode",{parentName:"p"},"Note.comments")," to ",Object(a.b)("inlineCode",{parentName:"p"},"Comment.note"),". If ",Object(a.b)("inlineCode",{parentName:"p"},"Comment.note")," does not exist Graphback will create it for you, otherwise you can define it yourself."),Object(a.b)("p",null,"For more on creating one-to-many relationships see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#onetomany"}),Object(a.b)("inlineCode",{parentName:"a"},"@oneToMany"))," annotation reference guide."),Object(a.b)("h3",{id:"onetoone"},"OneToOne"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n')),Object(a.b)("p",null,"This creates a one-sided relationship between the ",Object(a.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(a.b)("inlineCode",{parentName:"p"},"User")," models."),Object(a.b)("p",null,"For more on creating one-to-one relationships see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#onetoone"}),Object(a.b)("inlineCode",{parentName:"a"},"@oneToOne"))," annotation reference guide."),Object(a.b)("h3",{id:"manytomany"},"ManyToMany"),Object(a.b)("p",null,"To create a many-to-many relationship, add a model for your join table and use two one-to-many relationships."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model \n"""\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  authors: [NoteAuthor]\n}\n\n"""\n@model\n"""\ntype NoteAuthor {\n  id: ID!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n  """\n  @oneToMany(field: \'author\')\n  """\n  notes: [NoteAuthor]\n}\n')),Object(a.b)("p",null,"For more on creating many-to-many relationships see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./annotations#onetomany"}),Object(a.b)("inlineCode",{parentName:"a"},"@oneToMany"))," annotation reference guide."),Object(a.b)("h2",{id:"type-fields"},"Type fields"),Object(a.b)("p",null,"You can use GraphQL types to get strongly-typed fields which maps to a JSON column in PostgreSQL or an embedded/nested document in MongoDB."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  """\n  @db(type: \'json\')\n  """\n  comments: [Comment]\n}\n\n"""\nA custom type that does \nnot have a database table\n"""\ntype Comment {\n  id: ID!\n  text: String\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: The ",Object(a.b)("inlineCode",{parentName:"p"},"@db(type: 'json')")," annotation is only required for PostgreSQL.")))}s.isMDXComponent=!0}}]);