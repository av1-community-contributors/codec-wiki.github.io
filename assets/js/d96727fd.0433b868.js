"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1500],{627:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"colorimetry/matrix","title":"Matrix Coefficients","description":"Matrix coefficients represent the multiplication matrix that is used when","source":"@site/docs/colorimetry/matrix.mdx","sourceDirName":"colorimetry","slug":"/colorimetry/matrix","permalink":"/docs/colorimetry/matrix","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/colorimetry/matrix.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Matrix Coefficients","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Transfer Characteristics","permalink":"/docs/colorimetry/transfer"},"next":{"title":"Aviator","permalink":"/docs/utilities/Aviator"}}');var s=i(4848),a=i(8453);const r={title:"Matrix Coefficients",sidebar_position:6},l="Matrix Coefficients",c={},o=[{value:"0: Identity",id:"0-identity",level:3},{value:"1: BT.709",id:"1-bt709",level:3},{value:"2: Unspecified",id:"2-unspecified",level:3},{value:"4: BT.470M",id:"4-bt470m",level:3},{value:"5: BT.470BG",id:"5-bt470bg",level:3},{value:"6: SMPTE 170M",id:"6-smpte-170m",level:3},{value:"7: SMPTE 240M",id:"7-smpte-240m",level:3},{value:"8: YCgCo",id:"8-ycgco",level:3},{value:"9: BT.2020 Non-Constant Luminance",id:"9-bt2020-non-constant-luminance",level:3},{value:"10: BT.2020 Constant Luminance",id:"10-bt2020-constant-luminance",level:3},{value:"11: SMPTE 2085",id:"11-smpte-2085",level:3},{value:"12: Chromaticity-Derived Non-Constant Luminance",id:"12-chromaticity-derived-non-constant-luminance",level:3},{value:"13: Chromaticity-Derived Constant Luminance",id:"13-chromaticity-derived-constant-luminance",level:3},{value:"14: ICtCp",id:"14-ictcp",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"matrix-coefficients",children:"Matrix Coefficients"})}),"\n",(0,s.jsx)(n.p,{children:"Matrix coefficients represent the multiplication matrix that is used when\nconverting from YUV to RGB. As with primaries, the integer values are defined\nwithin universal specifications, and as such they will be the same across all\nencoding and playback tools."}),"\n",(0,s.jsx)(n.p,{children:"The following values are available:"}),"\n",(0,s.jsx)(n.h3,{id:"0-identity",children:"0: Identity"}),"\n",(0,s.jsx)(n.p,{children:"Specifies that the identity matrix should be used, i.e. this data is already in an RGB-compatible colorspace."}),"\n",(0,s.jsx)(n.p,{children:"This matrix coefficient setting is used in the following standards:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GBR (often referred to as RGB)"}),"\n",(0,s.jsx)(n.li,{children:"YZX (often referred to as XYZ)"}),"\n",(0,s.jsx)(n.li,{children:"IEC 61966-2-1 sRGB"}),"\n",(0,s.jsx)(n.li,{children:"SMPTE ST 428-1 (2019)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"1-bt709",children:"1: BT.709"}),"\n",(0,s.jsx)(n.p,{children:"BT.709 is the standard used for modern high-definition video, and is a safe default assumption."}),"\n",(0,s.jsx)(n.p,{children:"This matrix coefficient setting is used in the following standards:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.709-6"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.1361-0 conventional colour gamut system and extended colour\ngamut system (historical)"}),"\n",(0,s.jsx)(n.li,{children:"IEC 61966-2-4 xvYCC709"}),"\n",(0,s.jsx)(n.li,{children:"SMPTE RP 177 (1993) Annex B"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-unspecified",children:"2: Unspecified"}),"\n",(0,s.jsx)(n.p,{children:"This value indicates that no color matrix is set for the video, and the player must decide which value to use."}),"\n",(0,s.jsx)(n.p,{children:"mpv will use the following heuristics in this case:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'if width >= 1280 || height > 576 {\n    "BT.709"\n} else {\n    "SMPTE 170M"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-bt470m",children:"4: BT.470M"}),"\n",(0,s.jsx)(n.p,{children:"BT.470M is a standard that was used in analog television systems in the United States."}),"\n",(0,s.jsx)(n.h3,{id:"5-bt470bg",children:"5: BT.470BG"}),"\n",(0,s.jsx)(n.p,{children:"BT.470BG is a standard that was used for European (PAL) television systems and DVDs."}),"\n",(0,s.jsx)(n.p,{children:"This matrix coefficient setting is used in the following standards:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.470-6 System B, G (historical)"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.601-7 625"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.1358-0 625 (historical)"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.1700-0 625 PAL and 625 SECAM"}),"\n",(0,s.jsx)(n.li,{children:"IEC 61966-2-1 sYCC"}),"\n",(0,s.jsx)(n.li,{children:"IEC 61966-2-4 xvYCC601"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-smpte-170m",children:"6: SMPTE 170M"}),"\n",(0,s.jsx)(n.p,{children:"SMPTE 170M is a stanrard that was used for NTSC television systems and DVDs. Its matrix coefficients are equivalent to BT.470BG."}),"\n",(0,s.jsx)(n.p,{children:"This matrix coefficient setting is used in the following standards:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.601-7 525"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.1358-1 525 or 625 (historical)"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.1700-0 NTSC"}),"\n",(0,s.jsx)(n.li,{children:"SMPTE ST 170 (2004)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"7-smpte-240m",children:"7: SMPTE 240M"}),"\n",(0,s.jsx)(n.p,{children:"SMPTE 240M was an interim standard used during the early days of HDTV (1988-1998)."}),"\n",(0,s.jsx)(n.h3,{id:"8-ycgco",children:"8: YCgCo"}),"\n",(0,s.jsx)(n.p,{children:"The YCoCg color model, also known as the YCgCo color model,\nis the color space formed from a simple transformation of\nan associated RGB color space into a luma value and\ntwo chroma values called chrominance green and chrominance orange."}),"\n",(0,s.jsx)(n.h3,{id:"9-bt2020-non-constant-luminance",children:"9: BT.2020 Non-Constant Luminance"}),"\n",(0,s.jsx)(n.p,{children:"BT.2020 is a standard used for ultra-high-definition video, i.e. 4K and higher. It may be used with or without HDR, as HDR is defined by the transfer characteristics. If you do not know if you want non-constant or constant luminance, you probably want non-constant."}),"\n",(0,s.jsx)(n.p,{children:"This matrix coefficient setting is used in the following standards:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.2020-2 (non-constant luminance)"}),"\n",(0,s.jsx)(n.li,{children:"Rec. ITU-R BT.2100-2 Y\u2032CbCr"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"10-bt2020-constant-luminance",children:"10: BT.2020 Constant Luminance"}),"\n",(0,s.jsx)(n.p,{children:"This is a variant of BT.2020 with constant luminance values, represented using the YcCbcCrc colorspace. You probably want the non-constant luminance variant instead, unless you know you want this one."}),"\n",(0,s.jsx)(n.h3,{id:"11-smpte-2085",children:"11: SMPTE 2085"}),"\n",(0,s.jsx)(n.p,{children:"SMPTE 2085 is a standard used with HDR signals in the XYZ colorspace. I've never actually seen it used in the wild."}),"\n",(0,s.jsx)(n.h3,{id:"12-chromaticity-derived-non-constant-luminance",children:"12: Chromaticity-Derived Non-Constant Luminance"}),"\n",(0,s.jsx)(n.p,{children:"I'm not really sure when you would use this."}),"\n",(0,s.jsx)(n.h3,{id:"13-chromaticity-derived-constant-luminance",children:"13: Chromaticity-Derived Constant Luminance"}),"\n",(0,s.jsx)(n.p,{children:"I'm not really sure when you would use this."}),"\n",(0,s.jsx)(n.h3,{id:"14-ictcp",children:"14: ICtCp"}),"\n",(0,s.jsx)(n.p,{children:"ICtCp is an alternative colorspace developed for use with HDR and wide gamut video, by Dolby because they love doing extra stuff like this. I've never actually seen it used in the wild."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);