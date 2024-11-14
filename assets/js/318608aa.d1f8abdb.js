"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[6003],{3239:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"encoders/vpxenc","title":"vpxenc","description":"The content in this entry is incomplete & is in the process of being completed.","source":"@site/docs/encoders/vpxenc.mdx","sourceDirName":"encoders","slug":"/encoders/vpxenc","permalink":"/docs/encoders/vpxenc","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/vpxenc.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"vpxenc","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Aurora1 AV1","permalink":"/docs/encoders/Aurora1"},"next":{"title":"SVT-VP9","permalink":"/docs/encoders/SVT-VP9"}}');var s=i(4848),r=i(8453);i(1470),i(9365);const l={title:"vpxenc",sidebar_position:8},c="vpxenc",o={},a=[{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Supported Color Space",id:"supported-color-space",level:2},{value:"Installing (Binary)",id:"installing-binary",level:2},{value:"Compiling (Windows/MacOS/Linux)",id:"compiling-windowsmacoslinux",level:2},{value:"Cloning",id:"cloning",level:3},{value:"./configure file",id:"configure-file",level:3},{value:"Other ./configure options",id:"other-configure-options",level:3},{value:"Running GNU make",id:"running-gnu-make",level:3},{value:"VP8",id:"vp8",level:2},{value:"VP9",id:"vp9",level:2},{value:"Encoding",id:"encoding",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"vpxenc",children:"vpxenc"})}),"\n",(0,s.jsx)(n.admonition,{title:"Under Maintenance",type:"info",children:(0,s.jsx)(n.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,s.jsxs)(n.p,{children:["vpxenc is part of the libvpx library for working with the ",(0,s.jsx)(n.a,{href:"/docs/video/VP9",children:"VP9"})," & ",(0,s.jsx)(n.a,{href:"/docs/video/VP8",children:"VP8"})," video codecs. It is capable of encoding & decoding both formats, where vpxenc is the multipurpose encoder. VP9 competes with ",(0,s.jsx)(n.a,{href:"/docs/video/HEVC",children:"HEVC"})," (h265) & ",(0,s.jsx)(n.a,{href:"/docs/video/AVC",children:"AVC"})," (h264) in coding efficiency, and has been superseded by ",(0,s.jsx)(n.a,{href:"/docs/video/AV1",children:"AV1"}),". VP8 competes with AVC."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, vpxenc isn't as competitive as it could be, but even when used properly, most tests show that h265 offers slightly better quality per bit with efficient encoders like ",(0,s.jsx)(n.a,{href:"/docs/encoders/x265",children:"x265"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,s.jsxs)(n.p,{children:["vpxenc is available in FFmpeg via ",(0,s.jsx)(n.code,{children:"libvpx"})," for ",(0,s.jsx)(n.strong,{children:"VP8"})," and ",(0,s.jsx)(n.code,{children:"libvpx-vp9"})," for ",(0,s.jsx)(n.strong,{children:"VP9"}),", to check if you have it, run ",(0,s.jsx)(n.code,{children:"ffmpeg -h encoder=libvpx"})," or ",(0,s.jsx)(n.code,{children:"ffmpeg -h encoder=libvpx-vp9"}),".\nNon-FFmpeg standard VP8/VP9 parameters are ",(0,s.jsx)(n.strong,{children:"not"})," supported."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-color-space",children:"Supported Color Space"}),"\n",(0,s.jsx)(n.p,{children:"vpxenc supports the following color spaces:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Format"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Chroma Subsampling"}),(0,s.jsx)(n.th,{children:"Supported Bit Depth(s)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV420P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUVA420P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"8-bit (Alpha Channel)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV422P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV440P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:0"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV444P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GBRP"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV420P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV422P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV440P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:0"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV444P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GBRP10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV420P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV422P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV440P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:0"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV444P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GBRP12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"12-bit"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"installing-binary",children:"Installing (Binary)"}),"\n",(0,s.jsxs)(n.p,{children:["Windows builds are available on Lastrosade's ",(0,s.jsx)(n.a,{href:"https://jeremylee.sh/bins/",children:"website"})," and can be downloaded ",(0,s.jsx)(n.a,{href:"https://jeremylee.sh/bins/vpx.7z",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'For Linux and MacOS, it may be be available when searching "vpxenc" or "libvpx" in their respective package managers.'}),"\n",(0,s.jsx)(n.h2,{id:"compiling-windowsmacoslinux",children:"Compiling (Windows/MacOS/Linux)"}),"\n",(0,s.jsxs)(n.p,{children:["Windows users are recommended to compile via MinGW-W64 which comes with ",(0,s.jsx)(n.a,{href:"https://msys2.org/",children:"MSYS2"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"nasm/yasm, and the GNU build tools (make, configure) are required for this operation."}),"\n",(0,s.jsx)(n.h3,{id:"cloning",children:"Cloning"}),"\n",(0,s.jsx)(n.p,{children:"First, cloning"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://chromium.googlesource.com/webm/libvpx\ncd libvpx\nmkdir libvpx_build && cd libvpx_build\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configure-file",children:"./configure file"}),"\n",(0,s.jsx)(n.p,{children:"Now here comes the annoying part, the configure file have really bad defaults. So you will need to adjust them, here are some recommended options you should use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'../configure --cpu=native --extra-cxxflags="-ffat-lto-objects -flto" --extra-cflags="-ffat-lto-objects -flto" --as=auto --enable-vp9-highbitdepth --enable-libyuv --enable-webm-io --enable-vp9 --enable-runtime-cpu-detect --enable-internal-stats --enable-postproc --enable-vp9-postproc --enable-static --disable-shared --enable-vp9-temporal-denoising --disable-unit-tests --disable-docs --enable-multithread\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now let's break down what each of them do."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--cpu=native"}),"\nNative CPU optimizations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'--extra-cxxflags="-ffat-lto-objects -flto" --extra-cflags="-ffat-lto-objects -flto"'}),"\nMore CPU optimizations for faster encoding."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--as=auto"}),"\nSet the assembler to auto, so it can choose between ",(0,s.jsx)(n.code,{children:"yasm"})," and ",(0,s.jsx)(n.code,{children:"nasm"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-vp9-highbitdepth"}),"\nEnables high bit depth (>=10 bits) when encoding VP9."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-libyuv"}),"\nEnables YUV4MPEG input support (IMPORTANT), otherwise it will only accept RAW."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-webm-io"}),"\nEnables input and output support for WebM container."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-vp9"}),"\nEnables VP9 encoding support."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-runtime-cpu-detect"}),"\nEnables runtime CPU detection."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-internal-stats"}),"\nEnables internal statistics for the encoder for debug purposes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-postproc"}),"\nEnables postprocessing stuff for better video quality."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-vp9-postproc"}),"\nEnables VP9-specific postprocessing stuff for better video quality."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-static"}),"\nEnables static builds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-shared"}),"\nDisables shared builds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-vp9-temporal-denoising"}),"\nDisables spatial denoising for VP9 and enables temporal instead."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-unit-tests"}),"\nDisables unit tests, unless you want to test the encoder as a developer. This should be disabled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-docs"}),"\nDisables documentation, as enabling this also requires doxygen."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-multithread"}),"\nEnables the usage of multiple CPU threads for encoding and decoding."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"other-configure-options",children:"Other ./configure options"}),"\n",(0,s.jsx)(n.p,{children:"There are other options you may want use to either speed up compiliation or drop unwanted features."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-vp8 --disable-vp9-decoder --disable-vp8-decoder"}),"\nDisables VP8 encoding and ",(0,s.jsx)(n.code,{children:"vpxdec"})," (decoder) to be compiled."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-small"}),"\nPrioritizes smaller encoder binary size over encoding speed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--target="}),"\nEnables target compilation for a specific operating system or CPU architecture. There's a lot of them. Here's an exhaustive list of all of them based on the configure file:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"arm64-android-gcc\narm64-darwin-gcc\narm64-darwin20-gcc\narm64-darwin21-gcc\narm64-darwin22-gcc\narm64-darwin23-gcc\narm64-linux-gcc\narm64-win64-gcc\narm64-win64-vs15\narm64-win64-vs16\narm64-win64-vs16-clangcl\narm64-win64-vs17\narm64-win64-vs17-clangcl\narmv7-android-gcc\narmv7-darwin-gcc\narmv7-linux-rvct\narmv7-linux-gcc\narmv7-none-rvct\narmv7-win32-gcc\narmv7-win32-vs14\narmv7-win32-vs15\narmv7-win32-vs16\narmv7-win32-vs17\narmv7s-darwin-gcc\narmv8-linux-gcc\nloongarch32-linux-gcc\nloongarch64-linux-gcc\nmips32-linux-gcc\nmips64-linux-gcc\nppc64le-linux-gcc\nsparc-solaris-gcc\nx86-android-gcc\nx86-darwin8-gcc\nx86-darwin8-icc\nx86-darwin9-gcc\nx86-darwin9-icc\nx86-darwin10-gcc\nx86-darwin11-gcc\nx86-darwin12-gcc\nx86-darwin13-gcc\nx86-darwin14-gcc\nx86-darwin15-gcc\nx86-darwin16-gcc\nx86-darwin17-gcc\nx86-iphonesimulator-gcc\nx86-linux-gcc\nx86-linux-icc\nx86-os2-gcc\nx86-solaris-gcc\nx86-win32-gcc\nx86-win32-vs14\nx86-win32-vs15\nx86-win32-vs16\nx86-win32-vs17\nx86_64-android-gcc\nx86_64-darwin9-gcc\nx86_64-darwin10-gcc\nx86_64-darwin11-gcc\nx86_64-darwin12-gcc\nx86_64-darwin13-gcc\nx86_64-darwin14-gcc\nx86_64-darwin15-gcc\nx86_64-darwin16-gcc\nx86_64-darwin17-gcc\nx86_64-darwin18-gcc\nx86_64-darwin19-gcc\nx86_64-darwin20-gcc\nx86_64-darwin21-gcc\nx86_64-darwin22-gcc\nx86_64-darwin23-gcc\nx86_64-iphonesimulator-gcc\nx86_64-linux-gcc\nx86_64-linux-icc\nx86_64-solaris-gcc\nx86_64-win64-gcc\nx86_64-win64-vs14\nx86_64-win64-vs15\nx86_64-win64-vs16\nx86_64-win64-vs17\ngeneric-gnu\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.strong,{children:"Windows"})," compilation with MinGW you may need to use ",(0,s.jsx)(n.code,{children:"--target=x86_64-win64-gcc"})," and ",(0,s.jsx)(n.code,{children:"--target=arm64-darwin22-gcc"})," for ",(0,s.jsx)(n.strong,{children:"MacOS"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"running-gnu-make",children:"Running GNU make"}),"\n",(0,s.jsxs)(n.p,{children:["After successfully running the configure command above, run ",(0,s.jsx)(n.code,{children:"make -j $(nproc)"})," to start compiling with your CPU count. The resulting binary will be called ",(0,s.jsx)(n.code,{children:"vpxenc"})," and you can copy it wherever you like."]}),"\n",(0,s.jsx)(n.h2,{id:"vp8",children:"VP8"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Incomplete"})}),"\n",(0,s.jsx)(n.h2,{id:"vp9",children:"VP9"}),"\n",(0,s.jsxs)(n.p,{children:["For encoding VP9, vpxenc's default parameters are not considered optimal. There are a lot of options that are either disabled without reason or are simply misconfigured, hurting coding efficiency at little cost otherwise. As of mid-2021, some parameters (the TPL-model, lag-in-frames and auto-alt-ref frames) were changed (since libvpx 1.9.0 and libvpx 1.10.0) which means that there's not much use of setting these three parameters unless you're in ",(0,s.jsx)(n.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"}),". This section covers the most important options libvpx-vp9 has to offer, recommended settings, & what they do."]}),"\n",(0,s.jsx)(n.p,{children:"It is important to note that the vpxenc parameters provided below are considered optimal because they are efficient, but VP9 Profile 2 isn't compatible with many hardware-accelerated VP9 decoding implementations."}),"\n",(0,s.jsx)(n.h3,{id:"encoding",children:"Encoding"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--codec=vp9"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Self-explanatory."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--passes=2"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["vpxenc's 2-pass mode is quite fast compared to 2-pass in ",(0,s.jsx)(n.a,{href:"/docs/encoders/x264",children:"x264"})," and x265. Only use 1-pass mode for real-time applications, which won't be covered here yet. It is the default in the standalone vpxenc libvpx-vp9 encoder."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--webm"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Enables WebM output for the encoder, and passes the encoder flags set. It is not necessary to enable it, but since it passes the encoder flags, I would use it. Can be changed to ",(0,s.jsx)(n.code,{children:"--ivf"})," for an ivf video stream."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--good"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is a sort of quality deadline, the minimum speed the encoder is allowed to go to. It isn't recommended to use ",(0,s.jsx)(n.code,{children:"--best"})," as it is slow for the quality uplift you get. Do not use RT for anything but real-time encoding."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--threads=8"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Dictates the number of threads the encoder should spawn. It doesn\u2019t mean it\u2019ll scale all that well over those 8 threads. On a 16 thread CPU with a single encoder instance, I would use 8 threads. With multiple encoder instance encoding(with qencoder/av1an/neav1e), I would set it to 2 threads."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--profile=2"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"VP9 profile 2 is obligatory if you want 10-bit & 12-bit support for HDR, and improved quality from 8-bit."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--lag-in-frames=25"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Lag-in-frames is the libvpx equivalent of lookahead in x264. The higher the number, the slower the encoder will be, but at the upside of making it more efficient. Going above \u2013lag-in-frames=12 also activates another setting called alternate reference frames. 25 is the maximum you can get in libvpx-vp9. It is the default in the standalone vpxenc libvpx-vp9 encoder."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--end-usage=q"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Q mode is the closest equivalent to CRF that libvpx-vp9 offers, so use it if maximum quality is desired."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--cq-level=25"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For 1080p30 8-bit content, it is recommended to go with a Q of 25; you can go lower if you value higher quality over pure efficiency. For 1080p60 8-bit content, I would recommend going with a higher Q value with a delta of around 15. So, a Q of 30 to 40 is usually recommended. Depending on the content, you may have to tune this value, so this advice is only useful in choosing a starting point."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--kf-max-dist=[input FPS * 10]"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This tells the encoder to have a maximum number of frames between keyframes. It will usually place a lower number of keyframes in content like movies, TV shows, or animated shows, so you can set it to a very high number or not set it at all if you want maximum efficiency for this kind of content. Otherwise, I would go with the 10-second rule: ",(0,s.jsx)(n.code,{children:"--kf-max-dist=240"})," for 24FPS content, 300 for 30FPS content, 600 for 60FPS content, and so on."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--cpu-used=3"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is where the biggest balance of quality to speed is with libvpx-vp9. This is similar to presets in x264 and x265, except the lower the number, the slower the encoder takes. Using ",(0,s.jsx)(n.code,{children:"--cpu-used=3"})," & below enables RDO, which increases quality at the expense of speed."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--cpu-used=5"})," and above are ",(0,s.jsx)(n.em,{children:"slower"})," in the 1st pass, so it isn't recommended to use them anyway."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--auto-alt-ref=6"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Activates alternate reference frames. Alternate reference frames are "invisible" frames which are used as references when creating the final display frames.'}),"\n",(0,s.jsx)(n.p,{children:"More alternate reference frames is typically more efficient. Setting this greater than 1 activates overlay frames and isn't compatible with the 8-bit color profiles."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--arnr-maxframes=7"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This is the maximum number of alternate reference frames the encoder is allowed to use. For most content, 7 is usually a good bet, and it is the default. With animated content, going with a value of 12 or to the max is a good bet, as animated content benefits from more additional alt-ref frames than other content. Be aware that increasing this value will impact encode speed."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--arnr-strength=4"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This setting dictates how much denoising will occur in the alt-ref frames. Lowering it to 2 or 3 is usually a good bet for noisier/grainy content to try and retain more detail, but 4 is a sane starting place. The default setting is 5, which is fine for most content, but it can be beneficial going a bit lower. For animation, keeping the default of 5 is likely a better option."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--aq-mode=0"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Adaptive quantization is the way for an encoder to spend more bits in certain areas to improve ",(0,s.jsx)(n.a,{href:"/docs/introduction/psychovisual",children:"psychovisual fidelity"}),". ",(0,s.jsx)(n.code,{children:"--aq-mode=0"})," works well on clean content (animation, video games, screen content). ",(0,s.jsx)(n.code,{children:"--aq-mode=2"})," is recommended when you want to give more detail to more complex parts of a video."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--frame-boost=1"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This flag lets the encoder periodically boost the bitrate of a scene/frame if it needs it. Leaving it at the default ",(0,s.jsx)(n.code,{children:"--frame-boost=0"})," is usually a good bet, & this isn't a particularly salient change."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--tune-content=default"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This determines how the encoder is tuned. In libvpx-vp9, there are three options: ",(0,s.jsx)(n.code,{children:"default"}),", ",(0,s.jsx)(n.code,{children:"screen"}),", and ",(0,s.jsx)(n.code,{children:"film"}),". Default is for most scenarios, screen is for screen content(video games, live-streaming content like web pages & your screen), and film is for heavily dithered/grainy video. Leaving it at the default for about everything but screen content as described above is probably the best option. ",(0,s.jsx)(n.code,{children:"--tune-content=screen"})," with ",(0,s.jsx)(n.code,{children:"--aq-mode=2"})," is not recommended, as it creates some odd artifacts. It is advised to use ",(0,s.jsx)(n.code,{children:"--aq-mode=0"})," if ",(0,s.jsx)(n.code,{children:"--tune-content=screen"})," is activated, or if you want better perceptual quality, ",(0,s.jsx)(n.code,{children:"--aq-mode=1"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--row-mt=1"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Enables row multi-threading in libvpx-vp9. ",(0,s.jsx)(n.em,{children:"Always"})," enable it no matter what, as it does not hurt efficiency, but boosts speed considerably. This feature is disabled by default."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--bit-depth=10"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Always use 10-bit for maximum efficiency & minimal banding, even with an 8-bit source. Make sure to enable ",(0,s.jsx)(n.code,{children:"--profile=2"})," as mentioned above."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--tile-columns=1"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This setting divides the video into tile columns for easier parallelization when encoding & decoding. Setting ",(0,s.jsx)(n.code,{children:"--tile-columns=1"}),", you will get 2\xb9 tile columns. Setting it higher is a trade-off between parallelization & coding efficiency, as more tiles means less information your encoder can work with, and this will result in decreased efficiency. Do note there is an upper threshold in regards to the number of tile columns you can get due to the fixed minimum tile width of 256 pixels. So, this means 4 tile columns (2\xb2) for 720p and 1080p, 8 tile columns (2\u2074) for 1440p/4k, and so on. If you set a tile column number that is too high, it will drop down to the lowest supported number of tile columns at the input resolution."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--tile-rows=0"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This setting divides the video into tile rows. This option is different from columns because although it also makes decoding performance higher, it does not scale as well as tile columns & doesn\u2019t increase encoder threading nearly as much. Always use more tile-columns than rows, or leave the number of tile rows at default (0). Leaving the encoder defaults at ",(0,s.jsx)(n.code,{children:"--tile-rows=0"})," & ",(0,s.jsx)(n.code,{children:"--tile-columns=0"})," will result in the highest overall coding efficiency possible with these options."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"--enable-tpl=1"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This option enables a temporal layer model, which helps with coding efficiency. It is the default in the standalone vpxenc libvpx-vp9 encoder."}),"\n",(0,s.jsx)(n.p,{children:"All of these options are only available for the standalone vpxenc program. Here is a sample FFmpeg command line interpretation of the commands above, with some options missing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ffmpeg -i input.mkv -c:v libvpx-vp9 -pix_fmt yuv420p10le -pass 1 -quality good -threads 4 -profile:v 2 -lag-in-frames 25 -crf 25 -b:v 0 -g 240 -cpu-used 3 -auto-alt-ref 6 -arnr-maxframes 7 -arnr-strength 4 -aq-mode 0 -tune-content default -tile-rows 0 -tile-columns 1 -enable-tpl 1 -row-mt 1 -f null -\nffmpeg -i input.mkv -c:v libvpx-vp9 -pix_fmt yuv420p10le -pass 2 -quality good -threads 4 -profile:v 2 -lag-in-frames 25 -crf 25 -b:v 0 -g 240 -cpu-used 3 -auto-alt-ref 6 -arnr-maxframes 7 -arnr-strength 4 -aq-mode 0 -tune-content default -tile-rows 0 -tile-columns 1 -enable-tpl 1 -row-mt 1 output.mkv\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can pass a raw .y4m stream to standalone vpxenc & encode that way."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"VP9 section written based on work by BlueSwordM, who has granted written permission for this wiki page to exist in its current fashion"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,n,i)=>{i.d(n,{A:()=>l});i(6540);var t=i(4164);const s={tabItem:"tabItem_Ymn6"};var r=i(4848);function l(e){let{children:n,hidden:i,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:i,children:n})}},1470:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(6540),s=i(4164),r=i(3104),l=i(6347),c=i(205),o=i(7485),a=i(1682),d=i(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function x(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,r=u(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[a,h]=p({queryString:i,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(i);return[s,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),j=(()=>{const e=a??m;return x({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=i(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(4848);function b(e){let{className:n,block:i,selectedValue:t,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,r.a_)(),d=e=>{const n=e.currentTarget,i=o.indexOf(n),s=c[i].value;s!==t&&(a(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},n),children:c.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:r}=e;const l=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);