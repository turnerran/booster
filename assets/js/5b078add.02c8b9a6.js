"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,h=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5163:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="terminalWindow_wGrl",o="terminalWindowHeader_o9Cs",i="buttons_IGLB",s="dot_fGZE",c="terminalWindowBody_tzdS";function l(e){let{children:t}=e;return a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement("div",{className:i},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}}))),a.createElement("div",{className:c},t))}},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(5163);const i={},s="Command",c={unversionedId:"architecture/command",id:"architecture/command",title:"Command",description:"Commands are any action a user performs on your application. For example, RemoveItemFromCart, RatePhoto or AddCommentToPost. They express the intention of an user, and they are the main interaction mechanism of your application. They are a similar to the concept of a  request on a REST API. Command issuers can also send data on a command as parameters.",source:"@site/docs/03_architecture/02_command.mdx",sourceDirName:"03_architecture",slug:"/architecture/command",permalink:"/architecture/command",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_architecture/02_command.mdx",tags:[],version:"current",lastUpdatedBy:"Adri\xe1n Lorenzo",lastUpdatedAt:1671451588,formattedLastUpdatedAt:"Dec 19, 2022",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Booster architecture",permalink:"/architecture/event-driven"},next:{title:"Event",permalink:"/architecture/event"}},l={},m=[{value:"Creating a command",id:"creating-a-command",level:2},{value:"Declaring a command",id:"declaring-a-command",level:2},{value:"The command handler function",id:"the-command-handler-function",level:2},{value:"Registering events",id:"registering-events",level:3},{value:"Returning a value",id:"returning-a-value",level:3},{value:"Validating data",id:"validating-data",level:3},{value:"Throw an error",id:"throw-an-error",level:4},{value:"Register error events",id:"register-error-events",level:4},{value:"Reading entities",id:"reading-entities",level:3},{value:"Authorizing a command",id:"authorizing-a-command",level:2},{value:"Submitting a command",id:"submitting-a-command",level:2},{value:"Commands naming convention",id:"commands-naming-convention",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command"},"Command"),(0,r.kt)("p",null,"Commands are any action a user performs on your application. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoveItemFromCart"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RatePhoto")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AddCommentToPost"),". They express the intention of an user, and they are the main interaction mechanism of your application. They are a similar to the concept of a  ",(0,r.kt)("strong",{parentName:"p"},"request on a REST API"),". Command issuers can also send data on a command as parameters. "),(0,r.kt)("h2",{id:"creating-a-command"},"Creating a command"),(0,r.kt)("p",null,"The Bosoter CLI will help you to create new commands. You just need to run the following command and the CLI will generate all the boilerplate for you:"),(0,r.kt)(o.Z,{mdxType:"TerminalWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"boost new:command CreateProduct --fields sku:SKU displayName:string description:string price:Money\n"))),(0,r.kt)("p",null,"This will generate a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"create-product")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/commands")," directory. You can also create the file manually, but you will need to create the class and decorate it, so we recommend using the CLI."),(0,r.kt)("h2",{id:"declaring-a-command"},"Declaring a command"),(0,r.kt)("p",null,"In Booster you define them as TypeScript classes decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command")," decorator. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Command")," parameters will be declared as properties of the class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/command-name.ts"',title:'"src/commands/command-name.ts"'},"@Command()\nexport class CommandName {\n  public constructor(readonly fieldA: SomeType, readonly fieldB: SomeOtherType) {}\n}\n")),(0,r.kt)("p",null,"These commands are handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"Command Handlers"),", the same way a ",(0,r.kt)("strong",{parentName:"p"},"REST Controller")," do with a request. To create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Command handler")," of a specific Command, you must declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"handle")," class function inside the corresponding command you want to handle. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/command-name.ts"',title:'"src/commands/command-name.ts"'},"@Command()\nexport class CommandName {\n  public constructor(readonly fieldA: SomeType, readonly fieldB: SomeOtherType) {}\n\n  // highlight-start\n  public static async handle(command: CommandName, register: Register): Promise<void> {\n    // Validate inputs\n    // Run domain logic\n    // register.events([event1,...])\n  }\n  // highlight-end\n}\n")),(0,r.kt)("p",null,"Booster will then generate the GraphQL mutation for the corresponding command, and the infrastructure to handle them. You only have to define the class and the handler function. Commands are part of the public API, so you can define authorization policies for them, you can read more about this on ",(0,r.kt)("a",{parentName:"p",href:"/security/authorization"},"the authorization section"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using command handlers to validate input data before registering events into the event store because they are immutable once there.")),(0,r.kt)("h2",{id:"the-command-handler-function"},"The command handler function"),(0,r.kt)("p",null,"Each command class must have a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"handle"),". This function is the command handler, and it will be called by the framework every time one instance of this command is submitted. Inside the handler you can run validations, return errors, query entities to make decisions, and register relevant domain events."),(0,r.kt)("h3",{id:"registering-events"},"Registering events"),(0,r.kt)("p",null,"Within the command handler execution, it is possible to register domain events. The command handler function receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," argument, so within the handler, it is possible to call ",(0,r.kt)("inlineCode",{parentName:"p"},"register.events(...)")," with a list of events. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/create-product.ts"',title:'"src/commands/create-product.ts"'},"@Command()\nexport class CreateProduct {\n  public constructor(readonly sku: string, readonly price: number) {}\n\n  public static async handle(command: CreateProduct, register: Register): Promise<string> {\n    // highlight-next-line\n    register.event(new ProductCreated(/*...*/))\n  }\n}\n")),(0,r.kt)("p",null,"For more details about events and the register parameter, see the ",(0,r.kt)("a",{parentName:"p",href:"/architecture/event"},(0,r.kt)("inlineCode",{parentName:"a"},"Events"))," section."),(0,r.kt)("h3",{id:"returning-a-value"},"Returning a value"),(0,r.kt)("p",null,"The command handler function can return a value. This value will be the response of the GraphQL mutation. By default, the command handler function expects you to return a  ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," as a return type. Since GrahpQL does not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," type, the command handler function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when called through the GraphQL. This is because the GraphQL specification requires a response, and ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," is the most appropriate value to represent a successful execution with no return value."),(0,r.kt)("p",null,"If you want to return a value, you can change the return type of the handler function. For example, if you want to return a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/create-product.ts"',title:'"src/commands/create-product.ts"'},"@Command()\nexport class CreateProduct {\n  public constructor(readonly sku: string, readonly price: number) {}\n\n  public static async handle(command: CreateProduct, register: Register): Promise<string> {\n    register.event(new ProductCreated(/*...*/))\n    // highlight-next-line\n    return 'Product created!'\n  }\n}\n")),(0,r.kt)("h3",{id:"validating-data"},"Validating data"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Booster uses the typed nature of GraphQL to ensure that types are correct before reaching the handler, so ",(0,r.kt)("strong",{parentName:"p"},"you don't have to validate types"),".")),(0,r.kt)("h4",{id:"throw-an-error"},"Throw an error"),(0,r.kt)("p",null,"A command will fail if there is an uncaught error during its handling. When a command fails, Booster will return a detailed error response with the message of the thrown error. This is useful for debugging, but it is also a security feature. Booster will never return an error stack trace to the client, so you don't have to worry about exposing internal implementation details."),(0,r.kt)("p",null,"One case where you might want to throw an error is when the command is invalid because it breaks a business rule. For example, if the command contains a negative price. In that case, you can throw an error in the handler. Booster will use the error's message as the response to make it descriptive. For example, given this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/create-product.ts"',title:'"src/commands/create-product.ts"'},"@Command()\nexport class CreateProduct {\n  public constructor(readonly sku: string, readonly price: number) {}\n\n  public static async handle(command: CreateProduct, register: Register): Promise<void> {\n    const priceLimit = 10\n    if (command.price >= priceLimit) {\n      // highlight-next-line\n      throw new Error(`price must be below ${priceLimit}, and it was ${command.price}`)\n    }\n  }\n}\n")),(0,r.kt)("p",null,"You'll get something like this response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "price must be below 10, and it was 19.99",\n      "path": [\n        "CreateProduct"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"register-error-events"},"Register error events"),(0,r.kt)("p",null,"There could be situations in which you want to register an event representing an error. For example, when moving items with insufficient stock from one location to another:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/move-stock.ts"',title:'"src/commands/move-stock.ts"'},"@Command()\nexport class MoveStock {\n  public constructor(\n    readonly productID: string,\n    readonly origin: string,\n    readonly destination: string,\n    readonly quantity: number\n  ) {}\n\n  public static async handle(command: MoveStock, register: Register): Promise<void> {\n    if (!command.enoughStock(command.productID, command.origin, command.quantity)) {\n      // highlight-next-line\n      register.events(new ErrorEvent(`There is not enough stock for ${command.productID} at ${command.origin}`))\n    } else {\n      register.events(new StockMoved(/*...*/))\n    }\n  }\n\n  private enoughStock(productID: string, origin: string, quantity: number): boolean {\n    /* ... */\n  }\n}\n")),(0,r.kt)("p",null,"In this case, the command operation can still be completed. An event handler will take care of that `ErrorEvent and proceed accordingly."),(0,r.kt)("h3",{id:"reading-entities"},"Reading entities"),(0,r.kt)("p",null,"Event handlers are a good place to make decisions and, to make better decisions, you need information. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Booster.entity")," function allows you to inspect the application state. This function receives two arguments, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),"'s name to fetch and the ",(0,r.kt)("inlineCode",{parentName:"p"},"entityID"),". Here is an example of fetching an entity called ",(0,r.kt)("inlineCode",{parentName:"p"},"Stock"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/move-stock.ts"',title:'"src/commands/move-stock.ts"'},"@Command()\nexport class MoveStock {\n  public constructor(\n    readonly productID: string,\n    readonly origin: string,\n    readonly destination: string,\n    readonly quantity: number\n  ) {}\n\n  public static async handle(command: MoveStock, register: Register): Promise<void> {\n    // highlight-next-line\n    const stock = await Booster.entity(Stock, command.productID)\n    if (!command.enoughStock(command.origin, command.quantity, stock)) {\n      register.events(new ErrorEvent(`There is not enough stock for ${command.productID} at ${command.origin}`))\n    }\n  }\n\n  private enoughStock(origin: string, quantity: number, stock?: Stock): boolean {\n    const count = stock?.countByLocation[origin]\n    return !!count && count >= quantity\n  }\n}\n")),(0,r.kt)("h2",{id:"authorizing-a-command"},"Authorizing a command"),(0,r.kt)("p",null,"Commands are part of the public API of a Booster application, so you can define who is authorized to submit them. All commands are protected by default, which means that no one can submit them. In order to allow users to submit a command, you must explicitly authorize them. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command")," decorator to specify the authorization rule. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/commands/create-product.ts"',title:'"src/commands/create-product.ts"'},"@Command({\n  // highlight-next-line\n  authorize: 'all',\n})\nexport class CreateProduct {\n  public constructor(\n    readonly sku: Sku,\n    readonly displayName: string,\n    readonly description: string,\n    readonly price: number\n  ) {}\n\n  public static async handle(command: CreateProduct, register: Register): Promise<void> {\n    register.events(/* YOUR EVENT HERE */)\n  }\n}\n")),(0,r.kt)("p",null,"You can read more about this on the ",(0,r.kt)("a",{parentName:"p",href:"/security/authorization"},"Authorization section"),"."),(0,r.kt)("h2",{id:"submitting-a-command"},"Submitting a command"),(0,r.kt)("p",null,"Booster commands are accessible to the outside world as GraphQL mutations. GrahpQL fits very well with Booster's CQRS approach because it has two kinds of operations: Mutations and Queries. Mutations are actions that modify the server-side data, just like commands."),(0,r.kt)("p",null,"Booster automatically creates one mutation per command. The framework infers the mutation input type from the command fields. Given this ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateProduct")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Command({\n  authorize: 'all',\n})\nexport class CreateProduct {\n  public constructor(\n    readonly sku: Sku,\n    readonly displayName: string,\n    readonly description: string,\n    readonly price: number\n  ) {}\n\n  public static async handle(command: CreateProduct, register: Register): Promise<void> {\n    register.events(/* YOUR EVENT HERE */)\n  }\n}\n")),(0,r.kt)("p",null,"Booster generates the following GraphQL mutation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation CreateProduct($input: CreateProductInput!): Boolean\n")),(0,r.kt)("p",null,"where the schema for ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateProductInput")," is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"{\n  sku: String\n  displayName: String\n  description: String\n  price: Float\n}\n")),(0,r.kt)("h2",{id:"commands-naming-convention"},"Commands naming convention"),(0,r.kt)("p",null,"Semantics are very important in Booster as it will play an essential role in designing a coherent system. Your application should reflect your domain concepts, and commands are not an exception. Although you can name commands in any way you want, we strongly recommend you to ",(0,r.kt)("strong",{parentName:"p"},"name them starting with verbs in imperative plus the object being affected"),". If we were designing an e-commerce application, some commands would be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CreateProduct"),(0,r.kt)("li",{parentName:"ul"},"DeleteProduct"),(0,r.kt)("li",{parentName:"ul"},"UpdateProduct"),(0,r.kt)("li",{parentName:"ul"},"ChangeCartItems"),(0,r.kt)("li",{parentName:"ul"},"ConfirmPayment"),(0,r.kt)("li",{parentName:"ul"},"MoveStock"),(0,r.kt)("li",{parentName:"ul"},"UpdateCartShippingAddress")),(0,r.kt)("p",null,"Despite you can place commands, and other Booster files, in any directory, we strongly recommend you to put them in ",(0,r.kt)("inlineCode",{parentName:"p"},"<project-root>/src/commands"),". Having all the commands in one place will help you to understand your application's capabilities at a glance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<project-root>\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 commands <------ put them here\n\u2502\xa0\xa0 \u251c\u2500\u2500 common\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 entities\n\u2502\xa0\xa0 \u251c\u2500\u2500 events\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 read-models\n")))}u.isMDXComponent=!0}}]);