"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8760],{9600:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"colorimetry/format","title":"Color Formats","description":"To represent color values, a format is agreed upon. Color formats are","source":"@site/docs/colorimetry/format.mdx","sourceDirName":"colorimetry","slug":"/colorimetry/format","permalink":"/docs/colorimetry/format","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/colorimetry/format.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Color Formats","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Intro","permalink":"/docs/colorimetry/intro"},"next":{"title":"Color Range","permalink":"/docs/colorimetry/range"}}');var s=r(4848),i=r(8453);const t={title:"Color Formats",sidebar_position:2},l="Color Formats",a={},d=[{value:"Color Models",id:"color-models",level:2},{value:"RGB",id:"rgb",level:3},{value:"YUV",id:"yuv",level:3},{value:"Component order",id:"component-order",level:3},{value:"Bit depth",id:"bit-depth",level:2},{value:"Packed vs planar",id:"packed-vs-planar",level:2},{value:"Endianness",id:"endianness",level:2},{value:"Chroma subsampling",id:"chroma-subsampling",level:2},{value:"Common formats",id:"common-formats",level:2},{value:"References",id:"references",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"color-formats",children:"Color Formats"})}),"\n",(0,s.jsxs)(n.p,{children:["To represent color values, a format is agreed upon. Color formats are\nmade up of three things, the ",(0,s.jsx)(n.a,{href:"#color-models",children:"color model"}),"--which includes the\n",(0,s.jsx)(n.a,{href:"#component-order",children:"order of the components"})," and sometimes ",(0,s.jsx)(n.a,{href:"#chroma-subsampling",children:"chroma subsampling"}),"--\nthe ",(0,s.jsx)(n.a,{href:"#bit-depth",children:"bit depth"}),", and whether it is a ",(0,s.jsx)(n.a,{href:"#packed-vs-planar",children:"packed or a planar format"}),".\nIn some cases, ",(0,s.jsx)(n.a,{href:"#endianness",children:"endianness"})," may be important."]}),"\n",(0,s.jsx)(n.h2,{id:"color-models",children:"Color Models"}),"\n",(0,s.jsx)(n.p,{children:"A color model is a method of representing colors in a video or image using data.\nDifferent color models store color and brightness information in different ways.\nThere are many different color models, but this section will cover the\nmodels most commonly used for images and video."}),"\n",(0,s.jsx)(n.h3,{id:"rgb",children:"RGB"}),"\n",(0,s.jsx)(n.p,{children:"RGB is probably the most well-known color model, and is primarily used\nin image encoding. RGB consists of three color channels, Red, Green,\nand Blue, which are then combined to determine the final color of each\npixel. Typically, RGB is the final model that a monitor or TV\nwill use to display images, because the pixels on a screen are made up\nof red, green, and blue LEDs, although it is not commonly used for video\nencoding because other models can provide better compression."}),"\n",(0,s.jsx)(n.h3,{id:"yuv",children:"YUV"}),"\n",(0,s.jsx)(n.p,{children:"YUV, also known as YCbCr, is the most widely used color model for\nvideo encoding. It consists of three components: Y aka Luma, which\nrepresents luminance or brightness, and two chroma planes, which\nrepresent color. Generally a video player will have to convert a YUV\nvideo into RGB before it can be rendered, but there are significant\ncompression benefits to using YUV over RGB for video."}),"\n",(0,s.jsxs)(n.p,{children:["The most notable reason to use YCbCr is an optimization called chroma\nsubsampling. This means that the chroma components can be encoded at a\nlower resolution than the luma components, which results in a smaller\noutput file. You can read more about chroma subsampling ",(0,s.jsx)(n.a,{href:"#chroma-subsampling",children:"further below"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"component-order",children:"Component order"}),"\n",(0,s.jsxs)(n.p,{children:["The order in which the components in a color model are arranged is simply\nrepresented by writing them out. For example, ",(0,s.jsx)(n.code,{children:"RGB"})," for red first,\nthen green, then blue, or ",(0,s.jsx)(n.code,{children:"BGR"})," for blue, green, red."]}),"\n",(0,s.jsx)(n.h2,{id:"bit-depth",children:"Bit depth"}),"\n",(0,s.jsx)(n.p,{children:"A bit depth is how many bits are available to store the sample\nvalue. There are two main ways to specify the bit depth in a :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bits per component. Here, ",(0,s.jsx)(n.code,{children:"RGB888"})," reads as ",(0,s.jsx)(n.code,{children:"RGB color model, with 8 bits for the red component, 8 bits for the green component, and 8 bits for the blue component"})," and ",(0,s.jsx)(n.code,{children:"RGB565"})," reads as ",(0,s.jsx)(n.code,{children:"RGB color model, with 5 bits for the red component, 6 bits for the green component, and 5 bits for the blue component"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["bits per sample. Here, ",(0,s.jsx)(n.code,{children:"RGB24"})," reads as ",(0,s.jsx)(n.code,{children:"RGB color model, with 24 bits in total for the red, green, and blue components"}),". This is\nambiguous, because one does not know exactly how many bits are\nallocated to each component. ",(0,s.jsx)(n.code,{children:"RGB565"}),", ",(0,s.jsx)(n.code,{children:"RGB556"}),", and ",(0,s.jsx)(n.code,{children:"RGB655"})," (even\nthough the latter ones do not make much sense as the eye is most\nsensitive to green light) all become ",(0,s.jsx)(n.code,{children:"RGB16"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"packed-vs-planar",children:"Packed vs planar"}),"\n",(0,s.jsxs)(n.p,{children:["Components can be stored either packed, where all\ncomponents are interleaved (here, ",(0,s.jsx)(n.code,{children:"RGB"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Sample number:   1   2   3   4   5\nData:          RGB RGB RGB RGB RGB\n"})}),"\n",(0,s.jsx)(n.p,{children:"or stored separately for each component:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Sample number: 1 2 3 4 5\nData:          R R R R R...\nData:          G G G G G...\nData:          B B B B B...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In planar formats, many operations can be easier to implement, as it\nis possible to implement the algorithm once and then operate on all\nplanes. On the other hand, packed formats are simpler and often used\nin hardware.",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-vlc-wiki-yuv",id:"user-content-fnref-vlc-wiki-yuv","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,s.jsx)(n.h2,{id:"endianness",children:"Endianness"}),"\n",(0,s.jsxs)(n.p,{children:["Different computer architectures store numbers differently. For more\ninformation, visit ",(0,s.jsx)(n.a,{href:"//wikipedia.org/wiki/Endianness",children:"the Wikipedia article on\nendianness"}),". There are two main ways\nto store numbers with more than 8 bits (1 is the least significant\nbyte and 4 is the most significant byte, here 4 bytes):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Most significant byte first, little endian, ",(0,s.jsx)(n.code,{children:"4321"}),". This is what\nx86-family processors use."]}),"\n",(0,s.jsxs)(n.li,{children:["Least significant byte first, big endian, ",(0,s.jsx)(n.code,{children:"1234"}),". This is what\nPowerPC-family processors use."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This can be important for color formats, as some computers might store\nit in their native endianness. VapourSynth doesn't seem to care about\nendianness, but FFmpeg does."}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.code,{children:"RGB565"})," might store its two bytes in ",(0,s.jsx)(n.code,{children:"12"})," or ",(0,s.jsx)(n.code,{children:"21"})," order,\nand if they are read in the wrong order, it will produce garbage."]}),"\n",(0,s.jsx)(n.h2,{id:"chroma-subsampling",children:"Chroma subsampling"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"#yuv",children:"Y'CbCr"})," signals, there are three widely used\nvariants of chroma subsampling:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"4:2:0 which has half the vertical and horizontal chroma resolution"}),"\n",(0,s.jsx)(n.li,{children:"4:2:2 which has half the horizontal chroma resolution but full\nvertical resolution"}),"\n",(0,s.jsx)(n.li,{children:"4:4:4 which has full chroma resolution (no subsampling)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"4:2:2 is not particularly useful over the other options, so this guide\nwill focus on 4:2:0 and 4:4:4."}),"\n",(0,s.jsx)(n.p,{children:"4:2:0 is the most commonly used format for videos. Nearly every DVD,\nblu-ray, camera recording, etc. uses 4:2:0 subsampling. This is because,\nin the majority of cases, human eyes do not notice the reduction in\nchroma resolution. There is very little benefit to using 4:4:4 in the\naverage case."}),"\n",(0,s.jsx)(n.p,{children:"However, there are some exceptions. The most notable is screen\nrecordings. Things like text overlays, video game UI overlays,\netc. have very fine, color-dependent detail that can be destroyed by\nchroma subsampling and result in an aliased look to the\nvideo. Therefore, it is recommended to use 4:4:4 subsampling when\nrecording your screen, and 4:2:0 subsampling in most other cases."}),"\n",(0,s.jsx)(n.h2,{id:"common-formats",children:"Common formats"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"VS name"}),(0,s.jsx)(n.th,{children:"FFmpeg name"}),(0,s.jsx)(n.th,{children:"Meaning"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GRAY8"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gray8"})}),(0,s.jsx)(n.td,{children:"Brightness only, 8 bits, packed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"GRAY16"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"gray16le"}),", ",(0,s.jsx)(n.code,{children:"gray16be"})," (the suffix specifies the ",(0,s.jsx)(n.a,{href:"#endianness",children:"endianness"}),")"]}),(0,s.jsx)(n.td,{children:"Brightness only, 16 bits"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RGB888"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rgb24"})}),(0,s.jsx)(n.td,{children:"red, green, blue, 8 bits per component"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"YUV420P8"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"yuv420p"})}),(0,s.jsxs)(n.td,{children:["luma, chroma blue, chroma red, 8 bits per component, planar, 4:2:0 ",(0,s.jsx)(n.a,{href:"#chroma-subsampling",children:"subsampling"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"YUV422P8"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"yuv422p"})}),(0,s.jsx)(n.td,{children:"luma, chroma blue, chroma red, 8 bits per component, planar, 4:2:2 subsampling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"YUV444P8"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"yuv444p"})}),(0,s.jsx)(n.td,{children:"luma, chroma blue, chroma red, 8 bits per component, planar, no subsampling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"YUV420P10"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"yuv420p10le"}),", ",(0,s.jsx)(n.code,{children:"yuv420p10le"})]}),(0,s.jsx)(n.td,{children:"luma, chroma blue, chroma red, 10 bits per component, planar, 4:2:0 subsampling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"YUV422P10"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"yuv422p10le"}),", ",(0,s.jsx)(n.code,{children:"yuv422p10le"})]}),(0,s.jsx)(n.td,{children:"luma, chroma blue, chroma red, 10 bits per component, planar, 4:2:2 subsampling"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"YUV444P10"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"yuv444p10le"}),", ",(0,s.jsx)(n.code,{children:"yuv444p10le"})]}),(0,s.jsx)(n.td,{children:"luma, chroma blue, chroma red, 10 bits per component, planar, no subsampling"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-vlc-wiki-yuv",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://wiki.videolan.org/YUV/#Packed_formats",children:"YUV - VideoLAN Wiki"})," ",(0,s.jsx)(n.a,{href:"#user-content-fnref-vlc-wiki-yuv","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var o=r(6540);const s={},i=o.createContext(s);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);