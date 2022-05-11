"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[454],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1654:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Navigation",c={unversionedId:"actions/navigation",id:"actions/navigation",title:"Navigation",description:"| /                      | parameters                 | explanation                                                                                                                   |",source:"@site/docs/actions/navigation.md",sourceDirName:"actions",slug:"/actions/navigation",permalink:"/obsidian-advanced-uri/actions/navigation",editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/actions/navigation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Actions",permalink:"/obsidian-advanced-uri/actions/"},next:{title:"Writing",permalink:"/obsidian-advanced-uri/actions/writing"}},d={},s=[],m={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"navigation"},"Navigation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"/"),(0,i.kt)("th",{parentName:"tr",align:null},"parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"workspace"),(0,i.kt)("td",{parentName:"tr",align:null},"workspace"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the workspace called ",(0,i.kt)("inlineCode",{parentName:"td"},"workspace"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"save current workspace"),(0,i.kt)("td",{parentName:"tr",align:null},"saveworkspace=true"),(0,i.kt)("td",{parentName:"tr",align:null},"Saves the current workspace. (Can be combined with ",(0,i.kt)("inlineCode",{parentName:"td"},"workspace")," to open a new workspace afterwards)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"file"),(0,i.kt)("td",{parentName:"tr",align:null},"<identification",">"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"line in file"),(0,i.kt)("td",{parentName:"tr",align:null},"<identification",">",", line"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens line ",(0,i.kt)("inlineCode",{parentName:"td"},"line")," in file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"heading"),(0,i.kt)("td",{parentName:"tr",align:null},"<identification",">",", heading"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the ",(0,i.kt)("inlineCode",{parentName:"td"},"heading")," in file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"block reference"),(0,i.kt)("td",{parentName:"tr",align:null},"<identification",">",", block"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens the ",(0,i.kt)("inlineCode",{parentName:"td"},"block")," in file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"settings tab"),(0,i.kt)("td",{parentName:"tr",align:null},"settingid"),(0,i.kt)("td",{parentName:"tr",align:null},"Opens a settings tab by id, all plugins are supported. See ",(0,i.kt)("a",{parentName:"td",href:"/obsidian-advanced-uri/actions/settings_navigation"},"here")," for a list of all available options")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Open ",(0,i.kt)("strong",{parentName:"p"},"workspace"),' "main":'),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&workspace=main\n")),(0,i.kt)("p",{parentName:"div"},"Open ",(0,i.kt)("strong",{parentName:"p"},"heading"),' "Goal" in "my-file.md" (',(0,i.kt)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,i.kt)("inlineCode",{parentName:"p"},"Goal"),"):"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&heading=Goal\n")),(0,i.kt)("p",{parentName:"div"},"Open ",(0,i.kt)("strong",{parentName:"p"},"block"),'-id "12345" in "my-file.md" (',(0,i.kt)("strong",{parentName:"p"},"Important:")," Without syntax, only ",(0,i.kt)("inlineCode",{parentName:"p"},"12345"),"):"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&block=12345\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can specify a custom ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-advanced-uri/concepts/navigation_parameters"},"view mode")))))}u.isMDXComponent=!0}}]);