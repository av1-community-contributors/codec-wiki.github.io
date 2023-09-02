"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[9612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?o.createElement(y,a(a({ref:t},u),{},{components:n})):o.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},a="Psycho-visual",s={unversionedId:"introduction/psychovisual",id:"introduction/psychovisual",title:"Psycho-visual",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/introduction/psychovisual.md",sourceDirName:"introduction",slug:"/introduction/psychovisual",permalink:"/docs/introduction/psychovisual",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/introduction/psychovisual.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Spotting Video Artifacts",permalink:"/docs/introduction/video-artifacts"},next:{title:"High Dynamic Range",permalink:"/docs/introduction/high-dynamic-range"}},c={},l=[{value:"In English",id:"in-english",level:2}],u={toc:l},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"psycho-visual"},"Psycho-visual"),(0,r.kt)("admonition",{title:"Under Maintenance",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The content in this entry is incomplete & is in the process of being completed.")),(0,r.kt)("admonition",{title:"Pending Review",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information.")),(0,r.kt)("p",null,'"',(0,r.kt)("em",{parentName:"p"},"Traditionally, the encoder tends to favor blurred reconstructed blocks over blocks which have wrong motion. The human eye generally prefers the wrong motion over the blur. Psycho-visual options combat this. While technically less \u201ccorrect\u201d, which is why they are disabled for research purposes, they should be enabled for content intended for \u201chuman eyes\u201d."),' "'),(0,r.kt)("p",null,"-- Kokomins' x265 ",(0,r.kt)("a",{parentName:"p",href:"https://kokomins.wordpress.com/2019/10/10/anime-encoding-guide-for-x265-and-why-to-never-use-flac"},"guide")),(0,r.kt)("h2",{id:"in-english"},"In English"),(0,r.kt)("p",null,'Encoders favor blurring out fine details whenever possible because that is what\'s mathematically correct, but the human eye prefers them to look sharp. Just like how Tiktok users say "16K quality" whenever an oversharpened image of a waifu upscaled using AI is posted. But the encoder says "hell no wtf" because it doesn\'t "fit" correctly with the other blocks. But "Psycho-visual" options that exist combat this by giving some needed "confidence" to the encoder that it\'s okay to put in the wrong blocks.'),(0,r.kt)("p",null,"Although blurring also have their benefits especially at lower bitrates, because at that point there's not much detail to retain from the original source form, you do prefer to look at a blurry picture than a blocky DCT mess right? As always, setting psycho-visual options too high is also bad. Experiment and find the sweet spot for your type of content."))}h.isMDXComponent=!0}}]);