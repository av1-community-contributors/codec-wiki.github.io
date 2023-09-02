"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const i={label:"MKVToolNix",sidebar_position:2},a="MKVToolNix",l={unversionedId:"utilities/MKVToolNix",id:"utilities/MKVToolNix",title:"MKVToolNix",description:"Your average MKVToolNix workload.",source:"@site/docs/utilities/MKVToolNix.md",sourceDirName:"utilities",slug:"/utilities/MKVToolNix",permalink:"/docs/utilities/MKVToolNix",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/utilities/MKVToolNix.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{label:"MKVToolNix",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Av1an",permalink:"/docs/utilities/av1an"},next:{title:"rAV1ator",permalink:"/docs/utilities/rAV1ator"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mkvtoolnix"},"MKVToolNix"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1104704457096306758/mkvtoolnix-gui_7lzrlaJwOp.png",alt:"Your average MKVToolNix workload."})),(0,n.kt)("p",null,"MKVToolNix is FOSS GUI frontend to a set of tools (mkvmerge, mkvinfo, mkvpropedit, mkvextract) to create, alter and inspect Matroska files under Linux, other Unices and Windows."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Fortunately, Moritz Bunkus (Creator) is sane enough to provide downloads for pretty much all desktop operating systems normal people use which can be found ",(0,n.kt)("a",{parentName:"p",href:"https://mkvtoolnix.download/downloads.html"},"here"),". If not available, check your local package manager."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,'Drag and drop media files (or use "Add source files") to the application and modify, remux, demux, add streams, drop streams, anything and when done set your output destination and click "Start multiplexing" to start writing the output.'),(0,n.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You can import unencrypted BDMV (",(0,n.kt)("inlineCode",{parentName:"li"},"index.bdmv"),") or Blu-ray playlist files into MKVToolNix and it will prompt you to select which stream you would want to import."),(0,n.kt)("li",{parentName:"ol"},'You can set a WebM output in Output > Miscellaneous > "Create WebM compliant file"'),(0,n.kt)("li",{parentName:"ol"},"You can split videos in multiple ways in Output > Splitting. Best of all? No freeze frames unlike in FFmpeg and no re-encoding required."),(0,n.kt)("li",{parentName:"ol"},'You can edit metadata without remuxing (Albeit rather limited) in the "Header Editor".')))}d.isMDXComponent=!0}}]);