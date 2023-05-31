"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,v=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294);const r="terminalWindow_wGrl",i="terminalWindowHeader_o9Cs",l="buttons_IGLB",o="dot_fGZE",s="terminalWindowBody_tzdS";function d(e){let{children:t}=e;return a.createElement("div",{className:r},a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement("span",{className:o,style:{background:"#f25f58"}}),a.createElement("span",{className:o,style:{background:"#fbbe3c"}}),a.createElement("span",{className:o,style:{background:"#58cb42"}}))),a.createElement("div",{className:s},t))}},5268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(5163);const l={description:"Learn how to react to events and trigger side effects in Booster by defining event handlers."},o="Event handler",s={unversionedId:"architecture/event-handler",id:"architecture/event-handler",title:"Event handler",description:"Learn how to react to events and trigger side effects in Booster by defining event handlers.",source:"@site/docs/03_architecture/04_event-handler.mdx",sourceDirName:"03_architecture",slug:"/architecture/event-handler",permalink:"/architecture/event-handler",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_architecture/04_event-handler.mdx",tags:[],version:"current",lastUpdatedBy:"gonzalojaubert",lastUpdatedAt:1685540414,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:4,frontMatter:{description:"Learn how to react to events and trigger side effects in Booster by defining event handlers."},sidebar:"docs",previous:{title:"Event",permalink:"/architecture/event"},next:{title:"Entity",permalink:"/architecture/entity"}},d={},c=[{value:"Creating an event handler",id:"creating-an-event-handler",level:2},{value:"Declaring an event handler",id:"declaring-an-event-handler",level:2},{value:"Creating an event handler",id:"creating-an-event-handler-1",level:2},{value:"Registering events from an event handler",id:"registering-events-from-an-event-handler",level:2},{value:"Reading entities from event handlers",id:"reading-entities-from-event-handlers",level:2}],h={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"event-handler"},"Event handler"),(0,r.kt)("p",null,"An event handler is a class that reacts to events. They are commonly used to trigger side effects in case of a new event. For instance, if a new event is registered in the system, an event handler could send an email to the user."),(0,r.kt)("h2",{id:"creating-an-event-handler"},"Creating an event handler"),(0,r.kt)("p",null,"The Booster CLI will help you to create new event handlers. You just need to run the following command and the CLI will generate all the boilerplate for you:"),(0,r.kt)(i.Z,{mdxType:"TerminalWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"boost new:event-handler HandleAvailability --event StockMoved\n"))),(0,r.kt)("p",null,"This will generate a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"handle-availability.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/event-handlers")," directory. You can also create the file manually, but you will need to create the class and decorate it, so we recommend using the CLI."),(0,r.kt)("h2",{id:"declaring-an-event-handler"},"Declaring an event handler"),(0,r.kt)("p",null,"In Booster, event handlers are classes decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@EventHandler")," decorator. The parameter of the decorator is the event that the handler will react to. The logic to be triggered after an event is registered is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," method of the class. This ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," function will receive the event that triggered the handler."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/event-handlers/handle-availability.ts"',title:'"src/event-handlers/handle-availability.ts"'},"// highlight-next-line\n@EventHandler(StockMoved)\nexport class HandleAvailability {\n  // highlight-start\n  public static async handle(event: StockMoved): Promise<void> {\n    // Do something here\n  }\n  // highlight-end\n}\n")),(0,r.kt)("h2",{id:"creating-an-event-handler-1"},"Creating an event handler"),(0,r.kt)("p",null,"Event handlers can be easily created using the Booster CLI command ",(0,r.kt)("inlineCode",{parentName:"p"},"boost new:event-handler"),". There are two mandatory arguments: the event handler name, and the name of the event it will react to. For instance:"),(0,r.kt)(i.Z,{mdxType:"TerminalWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"boost new:event-handler HandleAvailability --event StockMoved\n"))),(0,r.kt)("p",null,"Once the creation is completed, there will be a new file in the event handlers directory ",(0,r.kt)("inlineCode",{parentName:"p"},"<project-root>/src/event-handlers/handle-availability.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<project-root>\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 commands\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u251c\u2500\u2500 entities\n\u2502   \u251c\u2500\u2500 events\n\u2502   \u251c\u2500\u2500 event-handlers <------ put them here\n\u2502   \u2514\u2500\u2500 read-models\n")),(0,r.kt)("h2",{id:"registering-events-from-an-event-handler"},"Registering events from an event handler"),(0,r.kt)("p",null,"Event handlers can also register new events. This is useful when you want to trigger a new event after a certain condition is met. For example, if you want to send an email to the user when a product is out of stock."),(0,r.kt)("p",null,"In order to register new events, Booster injects the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," instance in the ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," method as a second parameter. This ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," instance has a ",(0,r.kt)("inlineCode",{parentName:"p"},"events(...)")," method that allows you to store any side effect events, you can specify as many as you need separated by commas as arguments of the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/event-handlers/handle-availability.ts"',title:'"src/event-handlers/handle-availability.ts"'},"@EventHandler(StockMoved)\nexport class HandleAvailability {\n  public static async handle(event: StockMoved, register: Register): Promise<void> {\n    if (event.quantity < 0) {\n      // highlight-next-line\n      register.events([new ProductOutOfStock(event.productID)])\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"reading-entities-from-event-handlers"},"Reading entities from event handlers"),(0,r.kt)("p",null,"There are cases where you need to read an entity to make a decision based on its current state. Different side effects can be triggered depending on the current state of the entity. Given the previous example, if a user does not want to receive emails when a product is out of stock, we should be able check the user preferences before sending the email."),(0,r.kt)("p",null,"For that reason, Booster provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"Booster.entity")," function. This function allows you to retrieve the current state of an entity. Let's say that we want to check the status of a product before we trigger its availability update. In that case we would call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Booster.entity")," function, which will return information about the entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/event-handlers/handle-availability.ts"',title:'"src/event-handlers/handle-availability.ts"'},"@EventHandler(StockMoved)\nexport class HandleAvailability {\n  public static async handle(event: StockMoved, register: Register): Promise<void> {\n    // highlight-next-line\n    const product = await Booster.entity(Product, event.productID)\n    if (product.stock < 0) {\n      register.events([new ProductOutOfStock(event.productID)])\n    }\n  }\n}\n")))}p.isMDXComponent=!0}}]);