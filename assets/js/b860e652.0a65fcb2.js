"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(k,s(s({ref:t},u),{},{components:r})):o.createElement(k,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(7294),a=r(6010),n=r(3438),s=r(9960),i=r(3919),c=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return o.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function m(e){let{href:t,icon:r,title:n,description:s}=e;return o.createElement(d,{href:t},o.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:n},r," ",n),s&&o.createElement("p",{className:(0,a.Z)("text--truncate",p),title:s},s))}function k(e){let{item:t}=e;const r=(0,n.Wl)(t);return r?o.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,n.xz)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??(null==a?void 0:a.description)})}function f(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(k,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,n.jA)();return o.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return o.createElement(g,e);const s=(0,n.MN)(t);return o.createElement("section",{className:(0,a.Z)("row",r)},s.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},1398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=r(7462),a=(r(7294),r(3905)),n=r(2991);const s={},i="Extending Booster with Rockets!",c={unversionedId:"going-deeper/rockets",id:"going-deeper/rockets",title:"Extending Booster with Rockets!",description:"You can extend Booster by creating rockets (Booster Framework extensions). A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for:",source:"@site/docs/10_going-deeper/rockets.mdx",sourceDirName:"10_going-deeper",slug:"/going-deeper/rockets",permalink:"/going-deeper/rockets",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/rockets.mdx",tags:[],version:"current",lastUpdatedBy:"gonzalojaubert",lastUpdatedAt:1687446632,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Create custom providers",permalink:"/going-deeper/custom-providers"},next:{title:"File Uploads Rocket",permalink:"/going-deeper/rockets/rocket-file-uploads"}},l={},u=[{value:"Create an Infrastructure Rocket package to extend the default Booster-provided infrastructure",id:"create-an-infrastructure-rocket-package-to-extend-the-default-booster-provided-infrastructure",level:3},{value:"Provide new abtractions with custom decorators",id:"provide-new-abtractions-with-custom-decorators",level:3},{value:"Naming recommendations",id:"naming-recommendations",level:3},{value:"Booster Rockets list",id:"booster-rockets-list",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extending-booster-with-rockets"},"Extending Booster with Rockets!"),(0,a.kt)("p",null,"You can extend Booster by creating rockets (Booster Framework extensions). A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extend your infrastructure: You can write a rocket that adds provider resources to your application stack."),(0,a.kt)("li",{parentName:"ol"},"Runtime extensions: Add new annotations and interfaces, which combined with infrastructure extensions, could implement new abstractions on top of highly requested use cases.")),(0,a.kt)("p",null,"If you want to create a rocket that supports several cloud providers or want to provide extra decorators and functionality on top of the infrastructure extensions, you'll probably need to distribute it as a set of separate packages. In this scenario we recommend using a monorepo management tool like ",(0,a.kt)("a",{parentName:"p",href:"https://rushjs.io"},"Microsoft Rush")," to maintail them all together in a single repository, but this is not a requirement. Your packages will work perfectly fine if you maintain them in separate repositories."),(0,a.kt)("h3",{id:"create-an-infrastructure-rocket-package-to-extend-the-default-booster-provided-infrastructure"},"Create an Infrastructure Rocket package to extend the default Booster-provided infrastructure"),(0,a.kt)("p",null,"A rocket is an npm package that extends your current Booster architecture. The structure is simple, and it mainly has 2 methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"mountStack")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unmountStack"),". We'll explain what they are shortly."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Infrastructure Rocket")," interfaces are provider-dependant because each provider defines their own way to manage context, so ",(0,a.kt)("em",{parentName:"p"},"Infrastructure Rockets")," must import the corresponding booster infrastructure package for their chosen provider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For AWS: ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-aws-infrastructure")),(0,a.kt)("li",{parentName:"ul"},"For Azure: ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-azure-infrastructure")),(0,a.kt)("li",{parentName:"ul"},"For Local (dev environment): ",(0,a.kt)("inlineCode",{parentName:"li"},"@boostercloud/framework-provider-local-infrastructure"))),(0,a.kt)("p",null,"Notice that, as the only thing you'll need from that package is the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," interface, it is preferable to import it as a dev dependency to avoid including such a big package in your deployed lambdas."),(0,a.kt)("p",null,"So let's start by creating a new package and adding the provider-depdendent dependency as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"typescript")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@boostercloud/framework-types")," packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir rocket-your-rocket-name-aws-infrastructure\ncd rocket-your-rocket-name-aws-infrastructure\nnpm init\n...\nnpm install --save-dev @boostercloud/framework-provider-aws-infrastructure @boostercloud/framework-types typescript\n")),(0,a.kt)("p",null,"In the case of AWS we use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html"},"AWS CDK for TypeScript"),", so you'll also need to import the AWS CDK package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @aws-cdk/core\n")),(0,a.kt)("p",null,"The basic structure of an ",(0,a.kt)("em",{parentName:"p"},"Infrastructure Rocket")," project is quite simple as you can see here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"rocket-your-rocket-name-aws-infrastructure\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 your-main-class.ts\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<your-main-class>.ts"),"  can be named as you want and this is where we define the mountStack and unmount methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RocketUtils } from '@boostercloud/framework-provider-aws-infrastructure'\nimport { BoosterConfig } from '@boostercloud/framework-types'\nimport { Stack } from '@aws-cdk/core'\nimport { YourRocketParams } from '.'\n\nexport class YourMainClass {\n  public static mountStack(params: YourRocketParams, stack: Stack, config: BoosterConfig): void {\n    /* CDK code to expand your Booster infrastructure */\n  }\n  public static unmountStack(params: YourRocketParams, utils: RocketUtils): void {\n    /* Optional code that runs before removing the stack */\n  }\n}\n")),(0,a.kt)("p",null,"Let's look in more detail these two special functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"mountStack"),": Whenever we are deploying our Booster application (",(0,a.kt)("inlineCode",{parentName:"p"},"boost deploy"),") this method will also be run.  It receives two params:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stack"),": An initialized AWS CDK stack that you can use to add new resources. Check out ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/latest/guide/stacks.html#stack_api"},"the Stack API in the official CDK documentation"),". This is the same stack instance that Booster uses to deploy its resources, so your resources will automatically be deployed along with the Booster's ones on the same stack."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config"),": It includes properties of the Booster project (e.g. project name) that come in handy for your rocket."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"unmountStack"),": This function executes when you run the ",(0,a.kt)("inlineCode",{parentName:"p"},"boost nuke")," command, just before starting the deletion of the cloud resources. When you nuke your Booster application, resources added by your rocket are automatically destroyed with the rest of the application stack. However, in certain cases, you may need extra steps during the deletion process. The ",(0,a.kt)("inlineCode",{parentName:"p"},"unmountStack")," function serves this purpose. For example, in AWS, you must first empty any S3 buckets before deleting your stack. You can achieve this within the ",(0,a.kt)("inlineCode",{parentName:"p"},"unmountStack")," method."))),(0,a.kt)("p",null,"In addition to your main rocket class, you'll need an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file that default exports an object that conforms to the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface InfrastructureRocket {\n  mountStack: (stack: Stack, config: BoosterConfig) => void\n  unmountStack?: (utils: RocketUtils) => void\n}\n")),(0,a.kt)("p",null,"You'll have to implement a default exported function that accepts a parameters object and returns an initialized ",(0,a.kt)("inlineCode",{parentName:"p"},"InfrastructureRocket")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { InfrastructureRocket } from '@boostercloud/framework-provider-aws-infrastructure'\nimport { YourMainClass } from './your-main-class';\n\nexport interface YourRocketParams {\n  param1: string\n}\n\nconst YourRocketInitializator = (params: YourRocketParams): InfrastructureRocket => ({\n  mountStack: SomePrivateObject.mountStack.bind(null, params),\n  unmountStack: SomePrivateObject.unmountStack.bind(null, params),\n})\n\nexport default YourRocketInitializator\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("em",{parentName:"p"},"Infrastructure Rockets")," must not be part of the Booster application code to prevent including the CDK and other unnecessary dependencies in the deployed lambdas. This is due to strict code size restrictions on most platforms. To address this, ",(0,a.kt)("em",{parentName:"p"},"Infrastructure Rockets")," are dynamically loaded by Booster, using package names as strings in the application config file:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"src/config/production.ts:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"Booster.configure('development', (config: BoosterConfig): void => {\n  config.appName = 'my-store'\n  config.providerPackage = '@boostercloud/framework-provider-aws'\n  config.rockets = [\n    {\n      packageName: 'rocket-your-rocket-name-aws-infrastructure', // Your infrastructure rocket package name\n      parameters: {\n        // A custom object with the parameters needed by your infrastructure rocket initializer\n        hello: 'world',\n      },\n    },\n  ]\n})\n")),(0,a.kt)("p",null,"Your rocket implementation will have access to the stack (CDK in AWS or Terraform in Azure) just after Booster has finished to add all its default resources, so while the most common scenario to implement a rocket is to create additional resources, it's also possible to inspect or alter the Booster stack. If you're considering creating and maintaining your own fork of one of the default provider runtime implementations, it could be easier to create a rocket instead."),(0,a.kt)("h3",{id:"provide-new-abtractions-with-custom-decorators"},"Provide new abtractions with custom decorators"),(0,a.kt)("p",null,"Rockets can be utilized to extend the Booster framework by providing additional decorators that offer new abstractions. When creating a decorator as part of your rocket, you should deliver it as a package that, once compiled, does not have any infrastructure dependencies, so if your rocket provides both infrastructure and runtime extensions, it's advisable to deliver it as a pair of packages or more."),(0,a.kt)("p",null,"A common pattern when creating decorators for Booster is to use a singleton object to store metadata about the decorated structures. This singleton object stores data generated during the decorator's execution, which can then be accessed from other parts of the user's project, the rocket's infrastructure package or even other rockets. This data can be used during deployment to generate extra tables, endpoints, or other resources."),(0,a.kt)("p",null,"To create a new custom decorator for the Booster framework with singleton storage, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new npm package for your rocket. This package should not have any infrastructure dependencies once compiled.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir my-booster-rocket\n$ cd my-booster-rocket\n$ npm init\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add typescript as a dependency")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install typescript --save-dev\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a src directory to hold your decorator code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir src\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Inside the src directory, create a new TypeScript file for your singleton object, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"RocketSingleton.ts"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ touch src/RocketSingleton.ts\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},'Implement your singleton object to store your metadata, for instance, a list of special classes that we will "mark" for later:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/RocketSingleton.ts\nexport class RocketSingleton {\n  public static specialClasses: Function[] = [];\n\n  private constructor() {}\n\n  public static addSpecialClass(target: Function): void {\n    RocketSingleton.specialClasses.push(target)\n  }\n}\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Create a new TypeScript file for your custom decorator, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"MyCustomDecorator.ts"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ touch src/MyCustomDecorator.ts\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Implement your custom decorator using the singleton object:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// src/MyCustomDecorator.ts\nimport { RocketSingleton } from "./RocketSingleton"\n\nexport function MyCustomDecorator(): (target: Function) => void {\n  return (target: Function) => {\n    // Implement your decorator logic here.\n    console.log(`MyCustomDecorator applied on ${target.name}`)\n    RocketSingleton.addSpecialClass(target)\n  }\n}\n')),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Export your decorator from the package's entry point, e.g., index.ts:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\nexport * from './MyCustomDecorator';\nexport * from './RocketSingleton';\n")),(0,a.kt)("p",null,"Now you have a custom decorator that can be used within the Booster framework. Users can install your rocket package and use the decorator in their Booster applications:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install my-booster-rocket\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/MySpecialClass.ts\nimport { MyCustomDecorator, RocketSingleton } from 'my-booster-rocket';\n\n@MyCustomDecorator()\nclass MySpecialClass {\n  // Application logic here\n}\n\nconsole.log(RocketSingleton.specialClasses) // [ [Function: MySpecialClass] ]\n")),(0,a.kt)("p",null,"This example demonstrates how to create a custom decorator with a singleton object for storing data and package it as a rocket for use with the Booster framework. Following this pattern will allow you to extend Booster with new abstractions and provide additional functionality for users. The singleton object can be used to store and retrieve data across different parts of the user's project, enabling features such as generating extra tables or endpoints during deployment. This approach ensures a consistent and flexible way to extend the Booster framework while maintaining ease of use for developers."),(0,a.kt)("h3",{id:"naming-recommendations"},"Naming recommendations"),(0,a.kt)("p",null,"There are no restrictions on how you name your rocket packages, but we propose the following naming convention to make it easier to find your extensions in the vast npm library and find related packages (code and infrastructure extensions cannot be distributed in the same package)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-{rocket-name}-{provider}"),": A rocket that adds runtime functionality or init scripts. This code will be deployed along with your application code to the lambdas."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-{rocket-name}-{provider}-infrastructure"),": A rocket that provides infrastructure extensions or implements deploy hooks. This code will only be used on developer's or CI/CD systems machines and won't be deployed to lambda with the rest of the application code.")),(0,a.kt)("p",null,"Notice that some functionalities, for instance an S3 uploader, might require both runtime and infrastructure extensions. In these cases, the convention is to use the same name ",(0,a.kt)("inlineCode",{parentName:"p"},"rocket-name")," and add the suffix ",(0,a.kt)("inlineCode",{parentName:"p"},"-infrastructure")," to the infrastructure rocket. It's recommended, but not required, to manage these dependent packages in a monorepo and ensure that the versions match on each release."),(0,a.kt)("p",null,"If you want to support the same functionality in several providers, it could be handy to also have a package named ",(0,a.kt)("inlineCode",{parentName:"p"},"rocket-{rocket-name}-{provider}-core")," where you can have cross-provider code that you can use from all the provider-specific implementations. For instance, a file uploader rocket that supports both AWS and Azure could have an structure like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-core"),": Defines abstract decorators and interfaces to handle uploaded files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-aws"),": Implements the API calls to S3 to get the uploaded files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-aws-infrastructure"),": Adds a dedicated S3 bucket."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-azure"),": Implements the API calls to Azure Storage to get the uploaded files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rocket-file-uploader-azure-infrastructure"),": Configures file storage.")),(0,a.kt)("h3",{id:"booster-rockets-list"},"Booster Rockets list"),(0,a.kt)("p",null,"Here you can check out the official Booster Rockets developed at this time:"),(0,a.kt)(n.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);