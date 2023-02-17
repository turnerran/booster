"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l="Customizing CLI resource templates",s={unversionedId:"going-deep/custom-templates",id:"going-deep/custom-templates",title:"Customizing CLI resource templates",description:"You can change what the newly created Booster resources will contain by customizing the resource template files.",source:"@site/docs/10_going-deep/custom-templates.mdx",sourceDirName:"10_going-deep",slug:"/going-deep/custom-templates",permalink:"/going-deep/custom-templates",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deep/custom-templates.mdx",tags:[],version:"current",lastUpdatedBy:"Borja Zarco",lastUpdatedAt:1676636036,formattedLastUpdatedAt:"Feb 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Extending Booster with Rockets!",permalink:"/going-deep/rockets"},next:{title:"Frequently Asked Questions",permalink:"/frequently-asked-questions"}},i={},u=[{value:"QA",id:"qa",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customizing-cli-resource-templates"},"Customizing CLI resource templates"),(0,o.kt)("p",null,"You can change what the newly created Booster resources will contain by customizing the resource template files."),(0,o.kt)("p",null,"To do this, you first need to publish the resource templates by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"boost stub:publish")," command. This will create a folder ",(0,o.kt)("inlineCode",{parentName:"p"},"stubs")," in the root directory of the project, and it will contain all the resources that you can customize:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"stubs/\n\u251c\u2500 command.stub\n\u251c\u2500 entity.stub\n\u251c\u2500 event.stub\n\u251c\u2500 event-handler.stub\n\u251c\u2500 read-model.stub\n\u251c\u2500 scheduled-command.stub\n\u2514\u2500 type.stub\n")),(0,o.kt)("p",null,"After that, Booster CLI will start using your local templates instead of the default ones.\nLet's try this by adding a simple comment to the ",(0,o.kt)("inlineCode",{parentName:"p"},"type.stub")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Look I am a comment that will now appear in every new type file \ud83d\udc19\nexport class {{{ name }}} {\n  public constructor(\n    {{#fields}}\n    public {{{name}}}: {{{type}}},\n    {{/fields}}\n  ) {}\n}\n")),(0,o.kt)("p",null,"Now if you run ",(0,o.kt)("inlineCode",{parentName:"p"},"boost new:type CartItem --fields sku:string")," command, you will get ",(0,o.kt)("inlineCode",{parentName:"p"},"common/cart-item.ts")," file with following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Look I am a comment that will now appear in every new type file \ud83d\udc19\nexport class CartItem {\n  public constructor(\n      public sku: string,\n  ) {}\n}\n")),(0,o.kt)("p",null,"You did it, we just updated our resource template file! Now when you run `boost new:type', it will contain the comment you added earlier \ud83d\ude80\nOf course, this is a simple example, and you may want to add new methods, import something, you name it!"),(0,o.kt)("p",null,"Here are some answers to questions you may have:"),(0,o.kt)("h4",{id:"qa"},"QA"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can I have only one stub for a certain resource?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Yes! The resource generator will check if you have a custom template or it will use the default template\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How can I keep up with new template updates?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Run `boost stub:publish --force` command\n2. Review changes\n3. Done!\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can I adjust the command template and leave the other resources as they are?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Yes. You can only have the `command.stub` file in the `/stubs` folder and customize it.\nThe generator will use the default templates for the other resources.\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How can I use the default templates again!?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Simply delete the `/stubs` folder or a specific resource file.\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What are these strange name, #fields, etc. things????"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"These are the variables and sections used by the mustache.js templating engine.\nThey allow us to dynamically generate new resources.\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I change what `new:project` command generates?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"At the moment there is no way to do this.\nBut in the future we will move the new project template from the CLI package( https://github.com/boostercloud/booster/issues/1078 ), and then you will be able to create and use your own templates for new projects.\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"I have another question!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You can ask questions on our Discord channel or create discussion on Github.\n"))))}p.isMDXComponent=!0}}]);