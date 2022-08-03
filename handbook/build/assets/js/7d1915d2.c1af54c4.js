"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9173],{2955:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(3117),i=t(102),o=(t(7294),t(3905)),a=t(1402),p=["components"],l={id:"get-start",title:"2.1 ASP.NET 5 \u96c6\u6210",sidebar_label:"2.1 ASP.NET 5 \u96c6\u6210"},s=void 0,c={unversionedId:"get-start",id:"get-start",title:"2.1 ASP.NET 5 \u96c6\u6210",description:"\u622a\u81f3 2022 \u5e74 05 \u6708 31 \u65e5\uff0c\u5fae\u8f6f\u5df2\u7ecf\u505c\u6b62\u4e86 .NET5 \u7684\u6280\u672f\u652f\u6301\uff0c\u6240\u4ee5\u8bf7\u5c3d\u5feb\u5347\u7ea7\u5230 .NET6 \u7248\u672c\uff0c\u8be6\u7ec6\u5347\u7ea7\u53ef\u67e5\u9605 \u3010.NET5 \u5347\u7ea7 .NET6\u3011",source:"@site/docs/get-start.mdx",sourceDirName:".",slug:"/get-start",permalink:"/furion/docs/get-start",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/get-start.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1655877540,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"get-start",title:"2.1 ASP.NET 5 \u96c6\u6210",sidebar_label:"2.1 ASP.NET 5 \u96c6\u6210"},sidebar:"docs",previous:{title:"2.0 \u5165\u95e8\u6307\u5357 \u2728",permalink:"/furion/docs/serverun"},next:{title:"2.1 ASP.NET 6 \u96c6\u6210",permalink:"/furion/docs/get-start-net6"}},u={},d=[{value:"2.1 \u521b\u5efa <code>Web</code> \u9879\u76ee",id:"21-\u521b\u5efa-web-\u9879\u76ee",level:2},{value:"2.1.1 \u521b\u5efa <code>ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f</code>",id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"2.2 \u6dfb\u52a0 <code>Furion</code> \u4f9d\u8d56\u5305",id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305",level:2},{value:"2.3 <code>Furion</code> \u57fa\u672c\u914d\u7f6e",id:"23-furion-\u57fa\u672c\u914d\u7f6e",level:2},{value:"2.3.1 <code>Program.cs</code> \u6dfb\u52a0 <code>Inject()</code>",id:"231-programcs-\u6dfb\u52a0-inject",level:3},{value:"2.3.2 \u5728 <code>Startup.cs</code> \u4e2d\u6dfb\u52a0\u4e24\u4e2a <code>Inject()</code>",id:"232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject",level:3},{value:"2.4 \u542f\u52a8\u6d4f\u89c8\u5668",id:"24-\u542f\u52a8\u6d4f\u89c8\u5668",level:2}],m={toc:d};function g(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u5c3d\u5feb\u5347\u7ea7",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u622a\u81f3 ",(0,o.kt)("strong",{parentName:"p"},"2022 \u5e74 05 \u6708 31 \u65e5"),"\uff0c\u5fae\u8f6f\u5df2\u7ecf\u505c\u6b62\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET5")," \u7684\u6280\u672f\u652f\u6301\uff0c\u6240\u4ee5\u8bf7\u5c3d\u5feb\u5347\u7ea7\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET6")," \u7248\u672c\uff0c\u8be6\u7ec6\u5347\u7ea7\u53ef\u67e5\u9605 \u3010",(0,o.kt)("a",{parentName:"p",href:"/furion/docs/net5-to-net6"},".NET5 \u5347\u7ea7 .NET6"),"\u3011")),(0,o.kt)("admonition",{title:"\u63a8\u8350\u4f7f\u7528\u811a\u624b\u67b6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u5b98\u65b9\u63d0\u4f9b\u4e86\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684\u811a\u624b\u67b6\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u591a\u5c42\u67b6\u6784\u9879\u76ee\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528 \u300a",(0,o.kt)("a",{parentName:"p",href:"/furion/docs/template"},"2.2 \u5b98\u65b9\u811a\u624b\u67b6"),"\u300b\u4ee3\u66ff\u672c\u7ae0\u8282\u529f\u80fd\u3002")),(0,o.kt)("admonition",{title:"\u5165\u95e8\u6761\u4ef6",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET Core/ASP.NET Core")," \u6709\u4e00\u5b9a\u57fa\u7840\u4e86\u89e3\uff0c\u8fd8\u672a\u63a5\u89e6\u7684\u53ef\u5148\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/fundamentals/?view=aspnetcore-5.0&tabs=windows"},"\u3010ASP.NET Core \u57fa\u7840\u3011"))),(0,o.kt)("h2",{id:"21-\u521b\u5efa-web-\u9879\u76ee"},"2.1 \u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"h2"},"Web")," \u9879\u76ee"),(0,o.kt)("admonition",{title:"\u73af\u5883\u8981\u6c42",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u4e4b\u524d\u5148\u786e\u4fdd\u5b89\u88c5\u4e86\u6700\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET 5 SDK")," \u5e76\u5347\u7ea7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u81f3\u6700\u65b0\u7248\u3002")),(0,o.kt)("h3",{id:"211-\u521b\u5efa-aspnet-core-web-\u5e94\u7528\u7a0b\u5e8f"},"2.1.1 \u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"h3"},"ASP.NET Core Web \u5e94\u7528\u7a0b\u5e8f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"li"},"Visual Studio 2019")," \u5e76\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"Web")," \u9879\u76ee")),(0,o.kt)("img",{src:(0,a.Z)("img/rm1.png")}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u9879\u76ee\u540d\u79f0")),(0,o.kt)("img",{src:(0,a.Z)("img/rm2.png")}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"li"},"WebAPI")," \u9879\u76ee")),(0,o.kt)("img",{src:(0,a.Z)("img/rm3.png")}),(0,o.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u5df2\u7ecf\u5185\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Swagger")," \u89c4\u8303\u5316\u5e93\uff0c\u6240\u4ee5\u521b\u5efa\u65f6",(0,o.kt)("strong",{parentName:"p"},"\u65e0\u9700\u52fe\u9009")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable OpenAPI support")," \u9009\u9879\u3002\u5426\u5219\u63d0\u793a\u7248\u672c\u4e0d\u4e00\u81f4\u4ea7\u751f\u51b2\u7a81\u3002")),(0,o.kt)("h2",{id:"22-\u6dfb\u52a0-furion-\u4f9d\u8d56\u5305"},"2.2 \u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"h2"},"Furion")," \u4f9d\u8d56\u5305"),(0,o.kt)("img",{src:(0,a.Z)("img/rm4.png")}),(0,o.kt)("h2",{id:"23-furion-\u57fa\u672c\u914d\u7f6e"},"2.3 ",(0,o.kt)("inlineCode",{parentName:"h2"},"Furion")," \u57fa\u672c\u914d\u7f6e"),(0,o.kt)("h3",{id:"231-programcs-\u6dfb\u52a0-inject"},"2.3.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Program.cs")," \u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Inject()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {18}",showLineNumbers:!0,"":!0,"{18}":!0},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionStart\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args) =>\n            Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder\n                    .Inject()   // \u6dfb\u52a0\u8fd9\u4e00\u884c\n                    .UseStartup<Startup>();\n                });\n    }\n}\n")),(0,o.kt)("h3",{id:"232-\u5728-startupcs-\u4e2d\u6dfb\u52a0\u4e24\u4e2a-inject"},"2.3.2 \u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Startup.cs")," \u4e2d\u6dfb\u52a0\u4e24\u4e2a ",(0,o.kt)("inlineCode",{parentName:"h3"},"Inject()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {20,37}",showLineNumbers:!0,"":!0,"{20,37}":!0},"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace FurionStart\n{\n    public class Startup\n    {\n        public Startup(IConfiguration configuration)\n        {\n            Configuration = configuration;\n        }\n\n        public IConfiguration Configuration { get; }\n\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddControllers().AddInject();  // \u6dfb\u52a0 AddInject();\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            if (env.IsDevelopment())\n            {\n                app.UseDeveloperExceptionPage();\n            }\n\n            app.UseHttpsRedirection();\n\n            app.UseRouting();\n\n            app.UseAuthorization();\n\n            // \u6dfb\u52a0\u8fd9\u4e00\u884c\uff0c\u5982\u679c\u662f MVC\u548cAPI\u5171\u5b58\u9879\u76ee\uff0c\u65e0\u9700\u6dfb\u52a0 string.Empty\n            app.UseInject(string.Empty);\n\n            app.UseEndpoints(endpoints =>\n            {\n                endpoints.MapControllers();\n            });\n        }\n    }\n}\n")),(0,o.kt)("admonition",{title:"\u5c0f\u63d0\u9192",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"app.UseInject()")," \u4e0d\u8f93\u5165\u53c2\u6570\uff0c\u5219\u9ed8\u8ba4\u5730\u5740\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/api"),"\uff0c\u5982\u679c\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"string.Empty")," \u5219\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," \u76ee\u5f55\u3002\u5982\u679c\u8f93\u5165\u4efb\u610f\u5b57\u7b26\u4e32\uff0c\u5219\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"/\u4efb\u610f\u5b57\u7b26\u4e32")," \u76ee\u5f55\u3002")),(0,o.kt)("h2",{id:"24-\u542f\u52a8\u6d4f\u89c8\u5668"},"2.4 \u542f\u52a8\u6d4f\u89c8\u5668"),(0,o.kt)("p",null,"\u542f\u52a8\u6d4f\u89c8\u5668\u67e5\u770b\u6548\u679c\u3002"),(0,o.kt)("img",{src:(0,a.Z)("img/rm5.png")}),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio 2019")," \u521b\u5efa\u7684\u9879\u76ee\u4f1a\u81ea\u52a8\u914d\u7f6e\u4e86\u542f\u52a8\u9875\uff0c\u5982\u679c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"F5")," \u8fd0\u884c\uff0c\u53ef\u80fd\u4e0d\u4f1a\u81ea\u52a8\u6253\u5f00\u9996\u9875\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"launchSettings.json")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"launchUrl")," \u5373\u53ef\uff1a"),(0,o.kt)("img",{src:(0,a.Z)("img/rm6.png")})))}g.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);