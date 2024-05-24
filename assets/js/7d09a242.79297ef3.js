"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[6692],{1991:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=i(4848),t=i(8453),a=i(1470),r=i(9365);const l={title:"aomenc",sidebar_position:4,keywords:["AV1","encoding","video encoding","AOM AV1"]},o="aomenc",c={id:"encoders/aomenc",title:"aomenc",description:"aomenc, AOM-AV1, or just libaom is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1.",source:"@site/docs/encoders/aomenc.mdx",sourceDirName:"encoders",slug:"/encoders/aomenc",permalink:"/docs/encoders/aomenc",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/aomenc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"aomenc",sidebar_position:4,keywords:["AV1","encoding","video encoding","AOM AV1"]},sidebar:"tutorialSidebar",previous:{title:"x266",permalink:"/docs/encoders/x266"},next:{title:"SVT-AV1-PSY",permalink:"/docs/encoders/SVT-AV1-PSY"}},d={},h=[{value:"Choosing forks",id:"choosing-forks",level:2},{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Supported Color Space",id:"supported-color-space",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"AV1 Encoding",id:"av1-encoding",level:3},{value:"AVIF Encoding",id:"avif-encoding",level:3},{value:"Recommendations",id:"recommendations",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"aomenc",children:"aomenc"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://aomedia.googlesource.com/aom/",children:"aomenc"}),", AOM-AV1, or just ",(0,s.jsx)(n.strong,{children:"libaom"})," is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1."]}),"\n",(0,s.jsx)(n.h2,{id:"choosing-forks",children:"Choosing forks"}),"\n",(0,s.jsxs)(n.p,{children:["Mainline aomenc is unfortunately not perfect. It suffers from bad defaults, a heavy focus on the perceptually flawed ",(0,s.jsx)(n.a,{href:"/docs/metrics/PSNR",children:"PSNR"})," metric, misleading settings, and other issues. Fortunately, there are a couple of forks developed by the encoding community that were created to combat aomenc's underlying issues."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/BlueSwordM/aom-av1-psy",children:"aom-av1-psy"})," ",(0,s.jsx)(n.em,{children:"No longer maintained as of 13th January 2023"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/encoders/aom-av1-lavish",children:"aom-av1-lavish"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/encoders/aom-psy101",children:"aom-psy101"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/porcino/aom-av1ador",children:"aom-av1ador"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These forks fix up the poor decisions made by the original AOM devs and most importantly introduce new parameters and tunes to help fine-tune the encoder even more."}),"\n",(0,s.jsx)(n.h2,{id:"ffmpeg",children:"FFmpeg"}),"\n",(0,s.jsxs)(n.p,{children:["aomenc is available in FFmpeg via ",(0,s.jsx)(n.code,{children:"libaom-av1"}),", check if you have it by running ",(0,s.jsx)(n.code,{children:"ffmpeg -h encoder=libaom-av1"}),". You can input non-FFmpeg standard aomenc parameters via ",(0,s.jsx)(n.code,{children:"-aom-params"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-color-space",children:"Supported Color Space"}),"\n",(0,s.jsx)(n.p,{children:"aomenc supports the following color spaces:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Format"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Chroma Subsampling"}),(0,s.jsx)(n.th,{children:"Supported Bit Depth(s)"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV420P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV422P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV444P"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GBRP"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GRAY8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"8-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV420P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV422P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV444P10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GBRP10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GRAY10LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"10-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV420P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:0"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV422P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:2:2"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"YUV444P12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4:4:4"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GBRP12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"12-bit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GRAY12LE"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(n.td,{children:"12-bit"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsxs)(r.A,{value:"unixlike",label:"Linux & macOS",default:!0,children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clone the mainline aom repo:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Clone the aom repo"',children:"git clone https://aomedia.googlesource.com/aom\ncd aom && mkdir aom_build && cd aom_build\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Configure compilation. The following flags are set to ensure the ",(0,s.jsx)(n.code,{children:"aomenc"})," binary is build for optimal performance:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Set CMake flags"',children:'cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\n'})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Compile:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Compile"',children:"make -j$(nproc)\n"})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Install to your system. This may require elevated privileges:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Install"',children:"make install\n"})})]}),(0,s.jsxs)(r.A,{value:"wind",label:"Windows",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MSYS2"})," is the best option for building in Windows, as it provides a Unix-like environment for compilation."]}),(0,s.jsxs)(n.ol,{start:"0",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure you have downloaded & installed MSYS2 from ",(0,s.jsx)(n.a,{href:"https://www.msys2.org/",children:"the MSYS2 website"})," before beginning the build process."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the UCRT64 console & install the required dependencies:"}),"\n"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pacman -S cmake git perl yasm nasm python3 doxygen mingw-w64-x86_64-gcc mingw-w64-x86_64-cmake base-devel\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Clone the mainline aom repo:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Clone the aom repo"',children:"git clone https://aomedia.googlesource.com/aom\ncd aom && mkdir aom_build && cd aom_build\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Configure compilation. The following flags are set to ensure the ",(0,s.jsx)(n.code,{children:"aomenc"})," binary is build for optimal performance:"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Set CMake flags"',children:'cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\n'})}),(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Compile:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Compile"',children:"make -j$(nproc)\n"})}),(0,s.jsxs)(n.p,{children:["The resulting binary will be available within the home folder of the location where you installed MSYS2 (usually ",(0,s.jsx)(n.code,{children:"C:"}),"). Navigate there, and then to the ",(0,s.jsx)(n.code,{children:"aom"})," folder; the binary should be there."]}),(0,s.jsx)(n.p,{children:'Built files should be in the "Debug" folder.'})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Sharing Native Binaries",type:"warning",children:(0,s.jsx)(n.p,{children:"Avoid sharing binaries compiled with native CPU optimizations unless the person you're sharing to has the same CPU architecture, as this can lead to incorrect encoder behavior."})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"av1-encoding",children:"AV1 Encoding"}),"\n",(0,s.jsx)(n.admonition,{title:"2-Pass Encoding",type:"note",children:(0,s.jsx)(n.p,{children:"The way aomenc was developed requires 2-pass to take full advantage of its efficiency which include better rate controls and encoding features. So always specify the encoder to use 2 passes when encoding."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Simple Y4M input with CQ 22, 1 pass, and raw ivf bitstream output"',children:"aomenc --end-usage=q --cq-level=32 --bit-depth=10 --passes=1 --ivf -o output.ivf input.y4m\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Pipe from FFmpeg"',children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | aomenc - --end-usage=q --cq-level=32 --bit-depth=10 --passes=1 --ivf -o output.ivf\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Pipe from FFmpeg, 2-pass, pass 1"',children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | aomenc - --end-usage=q --cq-level=32 --bit-depth=10 --passes=2 --pass=1 --fpf-log=aom-pass.log  --ivf -o output.ivf\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Pipe from FFmpeg, 2-pass, pass 2"',children:"ffmpeg -v error -i input.mkv -f yuv4mpegpipe -strict -1 - | aomenc - --end-usage=q --cq-level=32 --bit-depth=10 --passes=2 --pass=2 --fpf-log=aom-pass.log  --ivf -o output.ivf\n"})}),"\n",(0,s.jsx)(n.h3,{id:"avif-encoding",children:"AVIF Encoding"}),"\n",(0,s.jsx)(n.p,{children:"Using aomenc through avifenc is widely considered to be the best way to encode AVIF images, as SVT-AV1 only supports 4:2:0 chroma subsampling, rav1e isn't fast enough for still images, & the libaom team have put more effort into intra coding than the teams responsible for producing the other prominent open source AV1 encoders. A sample command for encoding AVIF looks like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"avifenc -c aom -s 4 -j 8 -d 10 -y 444 --min 1 --max 63 -a end-usage=q -a cq-level=16 -a tune=ssim [input] output.avif"})}),"\n",(0,s.jsx)(n.p,{children:"Where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-c aom"})," is the encoder"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-s 4"})," is the speed. Speeds 4 & below offer the best compression quality at the expense of longer encode times."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-j 8"})," is the number of threads the encoder is allowed to use. Increasing this past 12 will sometimes hurt encode times, as AVIF encoding via aomenc doesn't parallelize perfectly. Test using a speed benchmark to verify which value works best for you."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-d 10"})," is the bit depth. Specifying a value below 10 isn't recommended, as it will hurt coding efficiency even with an 8-bit source image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-y 444"})," is the chroma subsampling mode. 4:4:4 chroma subsampling tends to provide better compression than 4:2:0 with AVIF, though on some images 4:2:0 chroma subsampling might be the better choice."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cq-level=16"})," is how you specify quality. Lower values correspond to higher quality & filesize, while higher values mean a smaller, lower-quality output is desired. This is preceded by ",(0,s.jsx)(n.code,{children:"-a"})," because it is an aomenc option, not an avifenc one."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tune=ssim"})," is how the encoder handles RDO (rate-distortion optimization). This may be redundant with the default aomenc parameters, but specifying doesn't hurt to avoid an unintended change if a default is modified sometime in the future."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,s.jsxs)(n.p,{children:["aomenc is largely lacking in its ability to take advantage of multiple threads, so a tool like ",(0,s.jsx)(n.a,{href:"/docs/utilities/av1an",children:"Av1an"})," should be utilized for effective parallelization. The parameters shown will be biased towards Av1an and ",(0,s.jsx)(n.a,{href:"/docs/encoders/aom-av1-lavish",children:"aom-av1-lavish"})," usage, so if you plan on using standalone aomenc please adjust as needed."]}),"\n",(0,s.jsx)(n.p,{children:"Here are some recommended parameters:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"--bit-depth=10 --cpu-used=4 --end-usage=q --cq-level=24 --threads=2 --tile-columns=0 --tile-rows=0 --lag-in-frames=64 --tune=ssim --enable-keyframe-filtering=1 --disable-kf --kf-max-dist=9999 --enable-qm=1 --deltaq-mode=0 --aq-mode=0 --enable-fwd-kf=0 --arnr-strength=1 --sb-size=dynamic --enable-dnl-denoising=0 --denoise-noise-level=8"})}),"\n",(0,s.jsx)(n.p,{children:"Now let's break it down."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--bit-depth=10"})," We're using 10bit because weird linear algebra allows the video to become smaller and reduces banding."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--cpu-used=4"})," This is the preset which ranges from 0-9, you can go to 3 if you want more efficiency, 2 if you have a lot of time, 4 is the sweet spot, and 6 if you want speed. Don't go above 6 (Worst efficiency) or even 0 (It would take WEEKS to finish)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--end-usage=q --cq-level=24"})," This specifies that we are going to use a knockoff version of CRF level similar to x264/x265 encoders, in this case CRF 24."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--tile-columns=0 --tile-rows=0"})," This is the tiles options, where the encoder splits the videos into tiles to encode faster. See the image below (Yellow lines):"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("picture",{children:[(0,s.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/images/main/tiling_av1.avif?token=GHSAT0AAAAAACEZPDXIZARY5MGSTJW4SI22ZHY636A",type:"image/avif"}),(0,s.jsx)("img",{src:"https://autumn.revolt.chat/attachments/HwhZjoDsdzLZsJM2mjzX7lEDmJn1xcYNdrQqmOxPYW/tiling_av1.jpeg",alt:"Tiling",loading:"lazy"})]}),"\n",(0,s.jsxs)(n.admonition,{title:"Tile usage",type:"note",children:[(0,s.jsxs)(n.p,{children:["Do NOT use tiles for 1080p and below, use 1 ",(0,s.jsx)(n.code,{children:"tile-columns"})," at 1440p (2K), 2 ",(0,s.jsx)(n.code,{children:"tile-columns"})," and 1 ",(0,s.jsx)(n.code,{children:"tile-rows"})," for 2160p (4K)."]}),(0,s.jsxs)(n.p,{children:["If you would like an easy way to calculate the necessary number of tiles for your video, you can use ",(0,s.jsx)(n.a,{href:"https://autocompressor.net/tools/av1-calculator",children:"the AV1 Encoding Calculator"})," online or run ",(0,s.jsx)(n.a,{href:"https://github.com/gianni-rosato/av1-tile-calc",children:"this local tile calculator"}),"."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--lag-in-frames=64"})," Similar to x264/x265 ",(0,s.jsx)(n.code,{children:"rc-lookahead"}),". Sets a number of frames to look ahead for frametype and ratecontrol, allowing for better compression decision making. Setting to a value greater than 64 is generally not considered useful."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--aq-mode=0"})," adaptive quantization mode, a mostly debatable area nowadays. 0 is better most of the time but some say 1 is also good."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-keyframe-filtering=1"})," We're setting it to 1 because of compatibility reasons, 2 is more efficient but there are seeking issues and FFmpeg can't input it."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--sb-size=dynamic"})," Allows the encoder to use 128x128 block partitioning besides 64x64 which gives an efficiency boost."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--deltaq-mode=0"})," This value has been tested to be more perceptually efficient."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--arnr-strength=1"})," Controls how strong the filtering (smoothing) will be, always been a hot topic. Most agree on the default of 4. Others think 1 is good for 3D Pixar CGI-like and 2D animation and 4 for live action content, and a higher value for lower bitrate encodes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-kf --enable-fwd-kf=0"})," We're disabling keyframes cause Av1an already did scene detection, so we wont have to. Plus it speeds things up."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--kf-max-dist=9999"})," Maximum keyframe interval, we're setting it at the highest possible value since Av1an's scene detection keyframe interval is already 240 by default"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-chroma-deltaq=1 --enable-qm=1"})," Parameters that give you free efficiency boost discovered via testing."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--enable-dnl-denoising=0"})," Disables the encoder's built-in denoising technique when grain synthesis is enabled, you can optionally set it to 1 when you have a pretty noisy video since it works quite well (NLMeans is the denoiser used)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--denoise-noise-level=8"})," AV1 grain synthesis, which is a technique where the encoder puts fake grain in so it looks more natural and potentially hiding video artifacts (cause grain is hard to encode and explodes bitrate usage because of their randomness). Don't attempt to use it at high values (>12) since it creates noticeable grain patterns."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can use photon noise tables as an alternative via ",(0,s.jsx)(n.code,{children:"--film-grain-table"}),", which is also conveniently available in Av1an as ",(0,s.jsx)(n.code,{children:"--photon-noise=X"})]})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,n,i)=>{i.d(n,{A:()=>r});i(6540);var s=i(4164);const t={tabItem:"tabItem_Ymn6"};var a=i(4848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,r),hidden:i,children:n})}},1470:(e,n,i)=>{i.d(n,{A:()=>w});var s=i(6540),t=i(4164),a=i(3104),r=i(6347),l=i(205),o=i(7485),c=i(1682),d=i(9466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const t=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,a=u(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,h]=p({queryString:i,groupId:t}),[x,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(i);return[t,(0,s.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:t}),g=(()=>{const e=c??x;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=i(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(4848);function b(e){let{className:n,block:i,selectedValue:s,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,i=o.indexOf(n),t=l[i].value;t!==s&&(c(n),r(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,t.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:t}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);