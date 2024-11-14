"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[4794],{6500:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"video/prores","title":"ProRes","description":"ProRes is a family of lossy video compression codecs developed by Apple Inc. ProRes is designed to serve as a high-quality \\"visually lossless\\" video editing codec that offers superior image quality compared to many other editing codecs while still maintaining a relatively compact file size compared to uncompressed video.","source":"@site/docs/video/prores.mdx","sourceDirName":"video","slug":"/video/prores","permalink":"/docs/video/prores","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/video/prores.mdx","tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"ProRes","sidebar_position":14},"sidebar":"tutorialSidebar","previous":{"title":"UT Video","permalink":"/docs/video/utvideo"},"next":{"title":"ECM","permalink":"/docs/video/ECM"}}');var r=t(4848),n=t(8453);const o={title:"ProRes",sidebar_position:14},d="ProRes",a={},l=[{value:"Format Breakdown",id:"format-breakdown",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"prores",children:"ProRes"})}),"\n",(0,r.jsx)(i.p,{children:'ProRes is a family of lossy video compression codecs developed by Apple Inc. ProRes is designed to serve as a high-quality "visually lossless" video editing codec that offers superior image quality compared to many other editing codecs while still maintaining a relatively compact file size compared to uncompressed video.'}),"\n",(0,r.jsxs)(i.p,{children:["ProRes uses 4:2:2 or 4:4:4 chroma subsampling depending on the specific subset. This provides greater color fidelity and precision than typical 8-bit 4:2:0 codecs like what can commonly be seen with ",(0,r.jsx)(i.a,{href:"/docs/video/AVC",children:"AVC"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["ProRes compression uses the ",(0,r.jsx)(i.a,{href:"/docs/introduction/terminology#discrete-cosine-transform-dct",children:"Discrete Cosine Transform"})," and intra-frame compression techniques; there is no inter-frame compression applied, meaning redundancy between frames isn't utilized to increase compression efficiency; this keeps decoding light, and simplifies the codec. ProRes is able to achieve very high quality video with relatively low data rates around 100-400 MB/s depending on the resolution and specific ProRes variant."]}),"\n",(0,r.jsx)(i.h2,{id:"format-breakdown",children:"Format Breakdown"}),"\n",(0,r.jsx)(i.p,{children:"There are multiple variants of ProRes that offer different combinations of image quality and compression ratios:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Format"}),(0,r.jsx)(i.th,{style:{textAlign:"center"},children:"Chroma Subsampling"}),(0,r.jsx)(i.th,{style:{textAlign:"right"},children:"Supported Bit Depth(s)"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://www.apple.com/final-cut-pro/docs/Apple_ProRes_RAW.pdf",children:"ProRes RAW"})}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"N/A"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"12-bit"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRes 4444 XQ"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"10-bit, 12-bit*"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRes 4444"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"10-bit, 12-bit*"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRes HQ"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"10-bit"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRes"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"10-bit"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRes LT"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"10-bit"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"ProRes Proxy"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,r.jsx)(i.td,{style:{textAlign:"right"},children:"10-bit"})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["*",(0,r.jsx)(i.em,{children:"ProRes 4444 XQ and 4444 support 12-bit color depth, but the lossless alpha channel is 16-bit if included."})]}),"\n",(0,r.jsx)(i.p,{children:"The higher data rate variants like 4444 XQ and HQ prioritize maximum fidelity at the expense of larger file sizes. The lower data rate variants trade off some quality for much smaller file sizes suitable for editing where storage space is constrained."}),"\n",(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i.p,{children:"Apple ProRes Raw is available in LUMIX cameras & the Sony Alpha FX3 via Atomos Ninja V. Both cameras are capable of recording 12-bit uncompressed RAW video in the ProRes RAW format."}),"\n",(0,r.jsx)(i.p,{children:"ProRes has become widely adopted in professional video post-production workflows due to its quality, performance, metadata handling, and tight integration with Apple's Final Cut Pro editing software & ecosystem."}),"\n",(0,r.jsx)(i.p,{children:"ProRes is supported by most major non-linear editing systems beyond just Final Cut Pro, including Adobe Premiere Pro & BlackMagic's DaVinci Resolve. This cross-platform compatibility makes it a convenient codec for exchange between different video editing applications."}),"\n",(0,r.jsx)(i.p,{children:"While designed primarily as an editing codec, Apple has also implemented hardware acceleration for ProRes encode & decode in recent Mac devices via Apple Silicon starting with the M2 chip. This hardware acceleration enables higher performance for tasks like playback, transcoding, and export compared to software-only implementations."})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>d});var s=t(6540);const r={},n=s.createContext(r);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);