"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[237],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6030:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},p="Hook",d={unversionedId:"external/hook",id:"external/hook",title:"Hook",description:"Hook manages links to various third party applications. Since version 3.4.3 they support Advanced URI to get file// links and create new files via URI.",source:"@site/docs/external/hook.md",sourceDirName:"external",slug:"/external/hook",permalink:"/obsidian-advanced-uri/external/hook",editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/external/hook.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Helper commands",permalink:"/obsidian-advanced-uri/tips/helper_commands"}},l={},c=[{value:"Get <code>file://</code> and <code>obsidian://</code> URIs",id:"get-file-and-obsidian-uris",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hook"},"Hook"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hookproductivity.com"},"Hook")," manages links to various third party applications. Since version 3.4.3 they support ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Vinzent03/obsidian-advanced-uri"},"Advanced URI")," to get ",(0,i.kt)("inlineCode",{parentName:"p"},"file://")," links, robust ",(0,i.kt)("inlineCode",{parentName:"p"},"obsidian://")," links and create new files via URI."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://hookproductivity.com/help/integration/using-hook-with-obsidian/#advanced"},"their documentation")," for a detailed explanation."),(0,i.kt)("h2",{id:"get-file-and-obsidian-uris"},"Get ",(0,i.kt)("inlineCode",{parentName:"h2"},"file://")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"obsidian://")," URIs"),(0,i.kt)("p",null,"That as today, the only action not starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"advanced-uri"),". Instead it uses ",(0,i.kt)("inlineCode",{parentName:"p"},"hook-get-advanced-uri"),"."),(0,i.kt)("p",null,"It requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-success")," parameter and optionally the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-error")," parameter. It appends an ",(0,i.kt)("inlineCode",{parentName:"p"},"obsidian://advanced-uri")," URI via the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"advanceduri")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"file://")," URI via the ",(0,i.kt)("inlineCode",{parentName:"p"},"fileuri")," parameter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-success")," uri and launches that URI."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The benefit of this plugin over the default Obsidian URI is the feature of using robust links via frontmatter keys. By enabling ",(0,i.kt)("inlineCode",{parentName:"p"},"Use UID instead of file paths")," in the plugin's settings, it creates those IDs automatically for ",(0,i.kt)("inlineCode",{parentName:"p"},"obsidian://advanced-uri")," URIs."))))}m.isMDXComponent=!0}}]);