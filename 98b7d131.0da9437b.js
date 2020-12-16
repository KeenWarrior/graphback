(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1330:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||l[d]||a;return n?i.a.createElement(h,c(c({ref:t},p),{},{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},806:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(1330)),o={id:"intro",title:"Subscriptions",sidebar_label:"Subscriptions"},c={unversionedId:"subscriptions/intro",id:"version-1.0/subscriptions/intro",isDocsHomePage:!1,title:"Subscriptions",description:"Graphback provides out of the box subscriptions support by providing one of the PubSubEngines",source:"@site/versioned_docs/version-1.0/subscriptions/subscriptions.md",slug:"/subscriptions/intro",permalink:"/docs/subscriptions/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/subscriptions/subscriptions.md",version:"1.0",sidebar_label:"Subscriptions",sidebar:"version-1.0/docs",previous:{title:"Using SQLite with Graphback",permalink:"/docs/databases/sqlite"},next:{title:"Authentication and authorization for Graphback",permalink:"/docs/authentication/intro"}},s=[{value:"Subscriptions explained",id:"subscriptions-explained",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Changing Subscription Topics",id:"changing-subscription-topics",children:[]},{value:"Running example",id:"running-example",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Graphback provides out of the box subscriptions support by providing one of the ",Object(a.b)("inlineCode",{parentName:"p"},"PubSubEngines"),"\nfrom ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-subscriptions"}),"https://github.com/apollographql/graphql-subscriptions")," library.\nDevelopers can connect to any publish subscribe mechanism that is officially supported by graphql-subscriptions\nor even write their own.\nGraphback templates by default using ",Object(a.b)("inlineCode",{parentName:"p"},"InMemoryPubSubEngine")," which is not designed to be used for production\nuse cases."),Object(a.b)("p",null,"We recomend following engines:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AMQ (MQTT) using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/aerogear/graphql-mqtt-subscriptions"}),"https://github.com/aerogear/graphql-mqtt-subscriptions")),Object(a.b)("li",{parentName:"ul"},"Redis - using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/davidyaha/graphql-redis-subscriptions"}),"https://github.com/davidyaha/graphql-redis-subscriptions"))),Object(a.b)("h2",{id:"subscriptions-explained"},"Subscriptions explained"),Object(a.b)("p",null,"Graphback provides subscriptions for every type of the operation that is happening on the server.\nThis means that developers can explicitly subscribe to create, update and delete operations for particular resource."),Object(a.b)("p",null,"Subscriptions can be also suppressed by developers by enabling or disabling subscription CRUD flags when initializing Graphback server "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"    {\n        ...\n        subCreate: true\n        subUpdate: true\n        subDelete: false\n    }\n")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"By default, Graphback uses an in-memory PubSub mechanism. You can configure your own in ",Object(a.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," through the ",Object(a.b)("inlineCode",{parentName:"p"},"serviceCreator"),"."),Object(a.b)("p",null,"In this example, we are using a MQTT enabled broker with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@aerogear/graphql-mqtt-subscriptions"}),Object(a.b)("inlineCode",{parentName:"a"},"@aerogear/graphql-mqtt-subscriptions")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI, createCRUDService } from 'graphback'\nimport { MQTTPubSub } from '@aerogear/graphql-mqtt-subscriptions';\n\nconst mqttConfig = {...};\n\nconst client = mqtt.connect(mqttConfig.mqttHost, mqttConfig);\n\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  // highlight-start\n  serviceCreator: createCRUDService({\n    pubSub: new MQTTPubSub({ client })\n  })\n  // highlight-end\n});\n")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"In this example the default ",Object(a.b)("inlineCode",{parentName:"p"},"createCRUDService")," service creator is used. There can be variations in how to configure your PubSub mechanism depending on what service creator you choose to use."))),Object(a.b)("h2",{id:"changing-subscription-topics"},"Changing Subscription Topics"),Object(a.b)("p",null,"Some of the pub sub mechanism will require different format of the topic.\nGraphback CRUD services expose method that can be used to override how topics are build.\nFor example for AMQ we can create extension of the CRUD service as follows"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export class AMQCRUDService extends CrudService {\n    protected subscriptionTopicMapping(triggerType: GraphbackOperationType, objectName: string) {\n        // Support AMQ topic creation format\n        return `graphql/${objectName}_${triggerType}`\n    }\n}\n")),Object(a.b)("h2",{id:"running-example"},"Running example"),Object(a.b)("p",null,"If you wish to use authorization mechanism you can try it on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/datasync-starter"}),"DataSync starter")," project"))}b.isMDXComponent=!0}}]);