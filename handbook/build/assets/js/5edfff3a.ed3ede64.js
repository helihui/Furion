"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[318],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(n),s=i,k=m["".concat(l,".").concat(s)]||m[s]||u[s]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6990:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=n(4996),p=["components"],l={id:"get-start-net6",title:"2.1 ASP.NET 6 \u96c6\u6210",sidebar_label:"2.1 ASP.NET 6 \u96c6\u6210"},d=void 0,c={unversionedId:"get-start-net6",id:"get-start-net6",title:"2.1 ASP.NET 6 \u96c6\u6210",description:"Furion \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002",source:"@site/docs/get-start-net6.mdx",sourceDirName:".",slug:"/get-start-net6",permalink:"/docs/get-start-net6",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/get-start-net6.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1655479621,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"get-start-net6",title:"2.1 ASP.NET 6 \u96c6\u6210",sidebar_label:"2.1 ASP.NET 6 \u96c6\u6210"},sidebar:"docs",previous:{title:"2.1 ASP.NET 5 \u96c6\u6210",permalink:"/docs/get-start"},next:{title:"2.1 ASP.NET 7 \u96c6\u6210 \u2728",permalink:"/docs/get-start-net7"}},u={},m=[{value:"2.1 \u521b\u5efa <code>Web</code> \u9879\u76ee",id:"21-\u521b\u5efa-web-\u9879\u76ee",level:2},{value:"2.1.1 \u521b\u5efa <code>ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f</code>",id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2.2 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",level:2},{value:"2.3 <code>Furion</code> \u57fa\u672c\u914d\u7f6e",id:"23-furion-\u57fa\u672c\u914d\u7f6e",level:2},{value:"2.3.1 <code>Program.cs</code> \u6dfb\u52a0 <code>Inject()</code>",id:"231-programcs-\u6dfb\u52a0-inject",level:3},{value:"2.4 \u542f\u52a8\u6d4f\u89c8\u5668",id:"24-\u542f\u52a8\u6d4f\u89c8\u5668",level:2},{value:"2.5 <code>WebApplication</code> \u8bf4\u660e \ud83c\udf83",id:"25-webapplication-\u8bf4\u660e-",level:2}],s={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,a.kt)("a",{parentName:"p",href:"/docs/template"},"2.2 \u5b98\u65b9\u811a\u624b\u67b6"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002")),(0,a.kt)("admonition",{title:"\u5165\u95e8\u6761\u4ef6",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},".NET Core/ASP.NET Core")," \u6709\u4e00\u5b9a\u57fa\u7840\u4e86\u89e3\uff0c\u8fd8\u672a\u63a5\u89e6\u7684\u53ef\u5148\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/?view=aspnetcore-6.0&tabs=windows"},"\u3010ASP.NET Core \u57fa\u7840\u3011"))),(0,a.kt)("h2",{id:"21-\u521b\u5efa-web-\u9879\u76ee"},"2.1 \u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"h2"},"Web")," \u9879\u76ee"),(0,a.kt)("admonition",{title:"\u73af\u5883\u8981\u6c42",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e4b\u524d\u5148\u786e\u4fdd\u5b89\u88c5\u4e86\u6700\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".NET 6 SDK")," \u5e76\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual Studio 2022")," \u6700\u65b0\u7248\u3002")),(0,a.kt)("h3",{id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f"},"2.1.1 \u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"h3"},"ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"li"},"Visual Studio 2022")," \u5e76\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Web")," \u9879\u76ee")),(0,a.kt)("img",{src:(0,o.Z)("img/rmn1.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76ee\u540d\u79f0")),(0,a.kt)("img",{src:(0,o.Z)("img/rmn2.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"WebAPI")," \u9879\u76ee")),(0,a.kt)("img",{src:(0,o.Z)("img/rmn3.png")}),(0,a.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u5df2\u7ecf\u5185\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Swagger")," \u89c4\u8303\u5316\u5e93\uff0c\u6240\u4ee5\u521b\u5efa\u65f6",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u9700\u52fe\u9009")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable OpenAPI support")," \u9009\u9879\u3002\u5426\u5219\u63d0\u793a\u7248\u672c\u4e0d\u4e00\u81f4\u4ea7\u751f\u51b2\u7a81\u3002")),(0,a.kt)("h2",{id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305"},"2.2 \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Furion")," \u4f9d\u8d56\u5305"),(0,a.kt)("img",{src:(0,o.Z)("img/rmn4.png")}),(0,a.kt)("h2",{id:"23-furion-\u57fa\u672c\u914d\u7f6e"},"2.3 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Furion")," \u57fa\u672c\u914d\u7f6e"),(0,a.kt)("h3",{id:"231-programcs-\u6dfb\u52a0-inject"},"2.3.1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Program.cs")," \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Inject()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,3,11}",showLineNumbers:!0,"":!0,"{1,3,11}":!0},"var builder = WebApplication.CreateBuilder(args).Inject();\n\nbuilder.Services.AddControllers().AddInject();\n\nvar app = builder.Build();\n\napp.UseHttpsRedirection();\n\napp.UseAuthorization();\n\napp.UseInject();\n\napp.MapControllers();\n\napp.Run();\n")),(0,a.kt)("admonition",{title:"\u5c0f\u63d0\u9192",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"app.UseInject()")," \u4e0d\u8f93\u5165\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u5730\u5740\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/api"),"\uff0c\u5982\u679c\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"string.Empty")," \u5219\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \u76ee\u5f55\u3002\u5982\u679c\u8f93\u5165\u4efb\u610f\u5b57\u7b26\u4e32\uff0c\u5219\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/\u4efb\u610f\u5b57\u7b26\u4e32")," \u76ee\u5f55\u3002")),(0,a.kt)("h2",{id:"24-\u542f\u52a8\u6d4f\u89c8\u5668"},"2.4 \u542f\u52a8\u6d4f\u89c8\u5668"),(0,a.kt)("p",null,"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u3002"),(0,a.kt)("img",{src:(0,o.Z)("img/rmn5.png")}),(0,a.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual Studio 2022")," \u521b\u5efa\u7684\u9879\u76ee\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e86\u542f\u52a8\u9875\uff0c\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"F5")," \u8fd0\u884c\uff0c\u53ef\u80fd\u4e0d\u4f1a\u81ea\u52a8\u6253\u5f00\u9996\u9875\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"launchUrl")," \u5373\u53ef\uff1a"),(0,a.kt)("img",{src:(0,o.Z)("img/rmn6.png")})),(0,a.kt)("h2",{id:"25-webapplication-\u8bf4\u660e-"},"2.5 ",(0,a.kt)("inlineCode",{parentName:"h2"},"WebApplication")," \u8bf4\u660e \ud83c\udf83"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".NET6")," \u7248\u672c\u65b0\u589e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebApplication")," \u5bf9\u8c61\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u6ce8\u518c\u670d\u52a1\uff0c\u53ea\u9700\u8981\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"builder.Services.AddXXX()")," \u5373\u53ef\u3002\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"var builder = WebApplication.CreateBuilder(args).Inject();\n\nbuilder.Services.AddControllers().AddInject();\nbuilder.Services.AddRemoteRequest();\n")))}k.isMDXComponent=!0}}]);