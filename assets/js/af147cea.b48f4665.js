"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Framework packages",p={unversionedId:"going-deeper/framework-packages",id:"going-deeper/framework-packages",title:"Framework packages",description:"The framework is already splitted into different packages:",source:"@site/docs/10_going-deeper/framework-packages.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/framework-packages",permalink:"/going-deeper/framework-packages",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/framework-packages.mdx",tags:[],version:"current",lastUpdatedBy:"Juan Sagasti",lastUpdatedAt:1679592288,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Customizing CLI resource templates",permalink:"/going-deeper/custom-templates"},next:{title:"Frequently Asked Questions",permalink:"/frequently-asked-questions"}},c={},s=[{value:"Framework Core",id:"framework-core",level:2},{value:"Framework Types",id:"framework-types",level:2}],l={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"framework-packages"},"Framework packages"),(0,o.kt)("p",null,"The framework is already splitted into different packages:"),(0,o.kt)("h2",{id:"framework-core"},"Framework Core"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"framework-core")," package includes the most important components of the framework abstraction. It can be seen as skeleton or the main architecture of the framework."),(0,o.kt)("p",null,"The package defines the specification of how should a Booster application work without taking into account the specific providers that could be used. Every Booster provider package is based on the components that the framework core needs in order to work on the platform."),(0,o.kt)("h2",{id:"framework-types"},"Framework Types"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"framework-types")," packages includes the types that define the domain of the Booster framework. It defines domain concepts like an ",(0,o.kt)("inlineCode",{parentName:"p"},"Event"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Role"),"."))}m.isMDXComponent=!0}}]);