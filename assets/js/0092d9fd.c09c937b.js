"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[9057],{3372:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(4848),t=i(8453);const s={title:"FLAC",sidebar_position:7},a="FLAC",r={id:"audio/FLAC",title:"FLAC",description:"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!",source:"@site/docs/audio/FLAC.mdx",sourceDirName:"audio",slug:"/audio/FLAC",permalink:"/docs/audio/FLAC",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/audio/FLAC.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"FLAC",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Speex",permalink:"/docs/audio/Speex"},next:{title:"WavPack",permalink:"/docs/audio/WavPack"}},c={},d=[{value:"Software support",id:"software-support",level:2},{value:"WAV to FLAC using FFmpeg:",id:"wav-to-flac-using-ffmpeg",level:3},{value:"WAV to FLAC using FLAC command-line tool:",id:"wav-to-flac-using-flac-command-line-tool",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"flac",children:"FLAC"}),"\n",(0,n.jsx)(o.admonition,{title:"Help Wanted",type:"danger",children:(0,n.jsxs)(o.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,n.jsx)(o.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,n.jsx)(o.p,{children:"FLAC (Free Lossless Audio Coding) is an open-source lossless audio codec with widespread support & compatibility released in 2001. It represents the most efficent lossless audio format in common use today."}),"\n",(0,n.jsxs)(o.p,{children:["FLAC is commonly contained in a ogg container with either a ",(0,n.jsx)(o.code,{children:".flac"})," or ",(0,n.jsx)(o.code,{children:".ogg"})," extension. It can less commonly be used within a matroska container (",(0,n.jsx)(o.code,{children:".mkv"})," or ",(0,n.jsx)(o.code,{children:".mka"}),") for mixing with a video stream."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsx)(o.p,{children:"It is not recommended to transcode a lossily encoded file to FLAC as the file size will grow tremendously while any quality loss from lossy encoding will remain. FLAC is best if you need to preserve existing lossless audio."})}),"\n",(0,n.jsx)(o.h2,{id:"software-support",children:"Software support"}),"\n",(0,n.jsx)(o.p,{children:"FLAC is supported by the majority of web browsers and media players in common use as of 2024."}),"\n",(0,n.jsxs)(o.h3,{id:"wav-to-flac-using-ffmpeg",children:["WAV to FLAC using ",(0,n.jsx)(o.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"ffmpeg -i example.wav -c:a flac example.flac\n"})}),"\n",(0,n.jsx)(o.h3,{id:"wav-to-flac-using-flac-command-line-tool",children:"WAV to FLAC using FLAC command-line tool:"}),"\n",(0,n.jsx)(o.p,{children:"You can include an argument of a number 0-8 to specify the compression effort, 0 being fastest and 8 having the highest compression."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"flac example.wav -8 -o example.flac\n"})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,i)=>{i.d(o,{R:()=>a,x:()=>r});var n=i(6540);const t={},s=n.createContext(t);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);