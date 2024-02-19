"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8080],{433:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var i=n(6905);const s={tabItem:"tabItem_Ymn6"};var a=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,r),hidden:n,children:t})}},2808:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(7294),s=n(6905),a=n(3735),r=n(6550),o=n(613),l=n(4423),c=n(636),d=n(9200);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=u(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,h]=f({queryString:n,groupId:s}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(n);return[s,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=n(5730);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function v(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==i&&(c(t),r(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(t))}},1019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=n(5893),s=n(1151),a=n(2808),r=n(433);const o={label:"VMAF",sidebar_position:1},l="VMAF",c={id:"metrics/VMAF",title:"VMAF",description:"The content in this entry is incomplete & is in the process of being completed.",source:"@site/docs/metrics/VMAF.mdx",sourceDirName:"metrics",slug:"/metrics/VMAF",permalink:"/docs/metrics/VMAF",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/metrics/VMAF.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{label:"VMAF",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SSIMULACRA2",permalink:"/docs/metrics/SSIMULACRA2"},next:{title:"PSNR",permalink:"/docs/metrics/XPSNR"}},d={},h=[{value:"Installation &amp; Usage",id:"installation--usage",level:2},{value:"Using VMAF with FFmpeg",id:"using-vmaf-with-ffmpeg",level:2},{value:"Note about the model path on Windows",id:"note-about-the-model-path-on-windows",level:3},{value:"Scoring",id:"scoring",level:2},{value:"Some weaknesses",id:"some-weaknesses",level:2},{value:"Comparing to SSIMULACRA2",id:"comparing-to-ssimulacra2",level:3}];function u(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"vmaf",children:"VMAF"}),"\n",(0,i.jsx)(t.admonition,{title:"Under Maintenance",type:"info",children:(0,i.jsx)(t.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,i.jsx)(t.p,{children:"Short for Video Multimethod Assessment Fusion, VMAF is a full reference video appeal metric mainly developed by netflix."}),"\n",(0,i.jsx)(t.h2,{id:"installation--usage",children:"Installation & Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Vmaf comes as a part of ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf",children:"libvmaf"}),". There are two ways it is commonly used:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["As an ",(0,i.jsx)(t.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"})," filter"]}),"\n",(0,i.jsx)(t.li,{children:"As a standalone binary"}),"\n"]}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(r.Z,{value:"bin",label:"Standalone Binary",children:[(0,i.jsxs)(t.p,{children:["If you would not like to build from source, you may grab the latest build from the VMAF ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf/releases",children:"GitHub releases"})," for your operating system."]}),(0,i.jsx)(t.p,{children:"Now, you can:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"/path/to/vmaf --reference refrence.y4m --distorted distorted.y4m\n"})}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Tip:"})," If the VMAF binary exists but is not market as executable, you might need to ",(0,i.jsx)(t.code,{children:"chmod +x /path/to/vmaf"})]}),(0,i.jsxs)(t.p,{children:["Explainer on command line flags can be found ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf/blob/master/libvmaf/tools/README.md",children:"here"})]}),(0,i.jsx)(t.p,{children:"The disadvantage of using the bin is that you need .yuv|y4m files, you can that overcome by using named pipes\nSimple example using ffmpeg as a decoder:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"# create the pipes\nmkfifo ref.pipe\nmkfido dist.pipe\n\n# run these each in a new terminal, order docent matter\nffmpeg -v error -i ref.mkv -strict -1 -f yuv4mpegpipe - > ref.pipe\nffmpeg -v error -i dist.mkv -strict -1 -f yuv4mpegpipe - > dist.pipe\n\n# after starting the two ffmpeg processes,\n# start the vmaf in a new terminal\n/path/to/vmaf --reference ref.pipe --distorted dist.pipe\n\n# delete the pipes after usage\nrm ref.pipe dist.pipe\n"})}),(0,i.jsx)(t.p,{children:"The Advantages of this are:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["No need for a ffmpeg build with ",(0,i.jsx)(t.code,{children:"--enable-libvmaf"})]}),"\n",(0,i.jsxs)(t.li,{children:["Clear & simple usage of VMAF's various options, like ",(0,i.jsx)(t.code,{children:"--aom_ctc"})]}),"\n"]}),(0,i.jsx)(t.p,{children:"Disadvantages are:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Difficult/awkward to use without a wrapper script"}),"\n"]})]}),(0,i.jsxs)(r.Z,{value:"ffmpegfilter",label:"FFmpeg Filter",children:[(0,i.jsxs)(t.p,{children:["If you are not sure if you have VMAF installed, you can check by running ",(0,i.jsx)(t.code,{children:"ffmpeg -help"})," and looking for whether or not the ",(0,i.jsx)(t.code,{children:"--enable-libvmaf"})," flag appears in the banner that is printed to the terminal. If you do not see this, you will need to build ffmpeg from source with the ",(0,i.jsx)(t.code,{children:"--enable-libvmaf"})," flag or grab a pre-compiled build of FFmpeg with the flag enabled."]}),(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["Via the ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf/blob/master/resource/doc/ffmpeg.md",children:"VMAF github repo"}),":"]})}),(0,i.jsx)(t.h2,{id:"using-vmaf-with-ffmpeg",children:"Using VMAF with FFmpeg"}),(0,i.jsxs)(t.p,{children:["After installing ",(0,i.jsx)(t.code,{children:"libvmaf"}),", you can use it with ",(0,i.jsx)(t.a,{href:"http://ffmpeg.org/",children:"FFmpeg"}),". Under the FFmpeg directory, configure, build and install FFmpeg with:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:"script",children:"./configure --enable-libvmaf\nmake -j4\nmake install\n"})}),(0,i.jsxs)(t.p,{children:["Using FFmpeg+libvmaf is very powerful, as you can create complex filters to calculate VMAF directly on videos of different encoding formats and resolutions. For the best practices of computing VMAF at the right resolution, refer to our ",(0,i.jsx)(t.a,{href:"https://medium.com/netflix-techblog/vmaf-the-journey-continues-44b51ee9ed12",children:"tech blog"}),"."]}),(0,i.jsxs)(t.p,{children:["We provide a few examples how you can construct the FFmpeg command line and use VMAF as a filter. Note that you may need to download the test videos from ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf_resource/tree/master/python/test/resource",children:"vmaf_resource"}),"."]}),(0,i.jsxs)(t.p,{children:["Below is an example on how you can run FFmpeg+libvmaf on a pair of YUV files. First, download the reference video ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf_resource/blob/master/python/test/resource/yuv/src01_hrc00_576x324.yuv",children:(0,i.jsx)(t.code,{children:"src01_hrc00_576x324.yuv"})})," and the distorted video ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf_resource/blob/master/python/test/resource/yuv/src01_hrc01_576x324.yuv",children:(0,i.jsx)(t.code,{children:"src01_hrc01_576x324.yuv"})}),". ",(0,i.jsx)(t.code,{children:"-r 24"})," sets the frame rate (note that it needs to be before ",(0,i.jsx)(t.code,{children:"-i"}),"), and ",(0,i.jsx)(t.code,{children:"PTS-STARTPTS"})," synchronizes the PTS (presentation timestamp) of the two videos (this is crucial if one of your videos does not start at PTS 0, for example, if you cut your video out of a long video stream). It is important to set the frame rate and the PTS right, since FFmpeg filters synchronize based on timestamps instead of frames."]}),(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"log_path"})," is set to standard output ",(0,i.jsx)(t.code,{children:"/dev/stdout"}),". It uses the ",(0,i.jsx)(t.code,{children:"model_path"})," at location ",(0,i.jsx)(t.code,{children:"/usr/local/share/model/vmaf_float_v0.6.1.json"})," (which is the default and can be omitted)."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:"script",children:'ffmpeg -video_size 576x324 -r 24 -pixel_format yuv420p -i src01_hrc00_576x324.yuv \\\n    -video_size 576x324 -r 24 -pixel_format yuv420p -i src01_hrc01_576x324.yuv \\\n    -lavfi "[0:v]setpts=PTS-STARTPTS[reference]; \\\n            [1:v]setpts=PTS-STARTPTS[distorted]; \\\n            [distorted][reference]libvmaf=log_fmt=xml:log_path=/dev/stdout:model_path={your_vmaf_dir}/model/vmaf_v0.6.1.json:n_threads=4" \\\n    -f null -\n'})}),(0,i.jsx)(t.p,{children:"The expected output is:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:"script",children:"[libvmaf @ 0x7fcfa3403980] VMAF score: 76.668905\n"})}),(0,i.jsxs)(t.p,{children:["Below is a more complicated example where the inputs are packaged ",(0,i.jsx)(t.code,{children:".mp4"})," files. It takes in 1) a reference video ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf_resource/blob/master/python/test/resource/mp4/Seeking_30_480_1050.mp4",children:(0,i.jsx)(t.code,{children:"Seeking_30_480_1050.mp4"})})," of 480p and 2) a distorted video ",(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf_resource/blob/master/python/test/resource/mp4/Seeking_10_288_375.mp4",children:(0,i.jsx)(t.code,{children:"Seeking_10_288_375.mp4"})})," of 288p upsampled to ",(0,i.jsx)(t.code,{children:"720x480"})," using bicubic, and compute VMAF on the two 480p videos. Bicubic is used as the recommended upsampling method (also see the ",(0,i.jsx)(t.a,{href:"https://medium.com/netflix-techblog/vmaf-the-journey-continues-44b51ee9ed12",children:"techblog"})," for more details)."]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:"script",children:'ffmpeg \\\n    -r 24 -i Seeking_30_480_1050.mp4 \\\n    -r 24 -i Seeking_10_288_375.mp4 \\\n    -lavfi "[0:v]setpts=PTS-STARTPTS[reference]; \\\n            [1:v]scale=720:480:flags=bicubic,setpts=PTS-STARTPTS[distorted]; \\\n            [distorted][reference]libvmaf=log_fmt=xml:log_path=/dev/stdout:model_path={your_vmaf_dir}/model/vmaf_v0.6.1.json:n_threads=4" \\\n    -f null -\n'})}),(0,i.jsx)(t.p,{children:"The expected output is:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",metastring:"script",children:"[libvmaf @ 0x7fb5b672bc00] VMAF score: 51.017497\n"})}),(0,i.jsxs)(t.p,{children:["See the ",(0,i.jsx)(t.a,{href:"https://ffmpeg.org/ffmpeg-filters.html#libvmaf",children:"FFmpeg's guide to libvmaf"}),", the ",(0,i.jsx)(t.a,{href:"https://trac.ffmpeg.org/wiki/FilteringGuide",children:"FFmpeg Filtering Guide"})," for more examples of complex filters, and the ",(0,i.jsx)(t.a,{href:"https://trac.ffmpeg.org/wiki/Scaling",children:"Scaling Guide"})," for information about scaling and using different scaling algorithms."]}),(0,i.jsx)(t.h3,{id:"note-about-the-model-path-on-windows",children:"Note about the model path on Windows"}),(0,i.jsxs)(t.p,{children:["Due to Windows not having a good default for where to pull the VMAF model from, you will always need to specify ",(0,i.jsx)(t.code,{children:"model_path"})," when calling libvmaf through ",(0,i.jsx)(t.code,{children:"ffmpeg"}),". However, you will need to be careful about the path you pass to ",(0,i.jsx)(t.code,{children:"model_path"}),"."]}),(0,i.jsxs)(t.p,{children:["If you are using a relative path for your ",(0,i.jsx)(t.code,{children:"model_path"}),", you can completely ignore this whole section, else if you are trying to use an absolute Windows path (",(0,i.jsx)(t.code,{children:"D:\\mypath\\vmaf_v0.6.1.json"}),") for your ",(0,i.jsx)(t.code,{children:"model_path"})," argument, you will need to be careful so ",(0,i.jsx)(t.code,{children:"ffmpeg"})," passes the right path to ",(0,i.jsx)(t.code,{children:"libvmaf"}),"."]}),(0,i.jsxs)(t.p,{children:["The final command line will depend on what shell you are running ",(0,i.jsx)(t.code,{children:"ffmpeg"})," through, so you will need to go through the following steps to make sure your path is okay."]}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Convert all of the backslashes ",(0,i.jsx)(t.code,{children:"\\"})," to forward slashes ",(0,i.jsx)(t.code,{children:"/"})," (",(0,i.jsx)(t.code,{children:"D:/mypath/vmaf_v0.6.1.json"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Escape the colon ",(0,i.jsx)(t.code,{children:":"})," character by using a backslash ",(0,i.jsx)(t.code,{children:"\\"})," (",(0,i.jsx)(t.code,{children:"D\\:/mypath/vmaf_v0.6.1.json"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Then escape that backslash with another backslash (",(0,i.jsx)(t.code,{children:"D\\\\:/mypath/vmaf_v0.6.1.json"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The next step will depend on the shell that will run ",(0,i.jsx)(t.code,{children:"ffmpeg"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["For PowerShell and Command Prompt, this will be enough and your final ",(0,i.jsx)(t.code,{children:"ffmpeg"})," command line will look something like"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:'./ffmpeg.exe -i dist.y4m -i ref.y4m \\\n    -lavfi libvmaf=model_path="D\\\\:/mypath/vmaf_v0.6.1.json" \\\n    -f null -\n'})}),"\n",(0,i.jsx)(t.admonition,{title:"Quoting the path",type:"info",children:(0,i.jsxs)(t.p,{children:["Note: I only quoted the path part for trivial reasons and in this specific case, it can be unquoted or you can quote the whole part after lavfi starting from ",(0,i.jsx)(t.code,{children:"libvmaf"})," to ",(0,i.jsx)(t.code,{children:"json"})," and it should give the same result due to neither shell treating the ",(0,i.jsx)(t.code,{children:"\\"})," as a special character"]})}),"\n",(0,i.jsxs)(t.p,{children:["For bash or specifically msys2 bash, it has some additional considerations. The first thing to know is that bash treats the backslash character ",(0,i.jsx)(t.code,{children:"\\"})," a bit special in that it's an escape character normally when not put inside single quotes. The second thing to know is that msys2's bash attempts convert a posix-like path (",(0,i.jsx)(t.code,{children:"/mingw64/share/model/vmaf_v0.6.1.json"}),") to a Windows mixed path (",(0,i.jsx)(t.code,{children:"D:/msys2/mingw64/share/model/vmaf_v0.6.1.json"}),") when passing arguments to a program. Normally, this would be fine, however, in our case, this works against us since we cannot allow it to convert the path to a normal path with an un-escaped colon. For this, we will need to not only escape the escaped backslash, but we will also need to pass the ",(0,i.jsx)(t.code,{children:"MSYS2_ARG_CONV_EXCL"})," environment variable with the value of ",(0,i.jsx)(t.code,{children:"*"})," to make sure it doesn't apply that special conversion on any of the arguments"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'MSYS2_ARG_CONV_EXCL="*" \\\n    ./ffmpeg.exe -i dist.y4m -i ref.y4m -lavfi \\\n    libvmaf=model_path="D\\\\\\:/mypath/vmaf_v0.6.1.json" -f null -\n'})}),"\n",(0,i.jsx)(t.admonition,{title:"Quotes",type:"info",children:(0,i.jsx)(t.p,{children:"Note: in this case, the quotes are not as trivial as the PowerShell/cmd version, as removing the quotes entirely will require you to re-escape the backslash resulting in 4 total backslashes, but quoting the whole argument will be fine."})}),"\n",(0,i.jsxs)(t.admonition,{title:"Single Quotes",type:"note",children:[(0,i.jsx)(t.p,{children:"Second Note: if you use single quotes around the path, it will be fine as well and the final command line would look like"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"MSYS2_ARG_CONV_EXCL=\"*\" \\\n    ./ffmpeg.exe -i dist.y4m -i ref.y4m -lavfi \\\n    libvmaf=model_path='D\\\\:/mypath/vmaf_v0.6.1.json' -f null -\n"})}),(0,i.jsx)(t.p,{children:"with only a double backslash instead of a triple."})]}),"\n"]}),"\n"]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"scoring",children:"Scoring"}),"\n",(0,i.jsxs)(t.p,{children:["scores range from 0 to 100, and are best interpreted in a linear way,\n100 meaning perfect quality, 0 meaning not recognisable,\nmore info ",(0,i.jsx)(t.a,{href:"https://netflixtechblog.com/vmaf-the-journey-continues-44b51ee9ed12",children:"in the Best Practices section here"}),(0,i.jsx)(t.br,{}),"\n","It aligns with mean opinion scores (MOS) really well at low/medium bitrates,\nas stated ",(0,i.jsx)(t.a,{href:"https://videoprocessing.ai/benchmarks/video-quality-metrics_both.html",children:"in this benchmark"})]}),"\n",(0,i.jsx)(t.h2,{id:"some-weaknesses",children:"Some weaknesses"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Newer codecs like AV1 and VVC introduce new kinds of artifacting that v0.6.2\n(current model as of Jan 2024) doesn't recognise,\nthat's why its performance might degrade, for example, high motion scenes being affected badly"}),"\n",(0,i.jsx)(t.li,{children:'It\'s bad at "transparent" levels of quality, kinds of quality that the average viewer might not notice'}),"\n",(0,i.jsx)(t.li,{children:"Synthetic grain throws off scores, this issue is not isolated to vmaf, but it should be noted regardless"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"With ffmpeg you can disable application of synthetic grain",type:"tip",children:(0,i.jsxs)(t.p,{children:["place ",(0,i.jsx)(t.code,{children:"-filmgrain 0"})," before ",(0,i.jsx)(t.code,{children:"-i"})," in the above ffmpeg commands, limited to decoding with dav1d\nTODO: replace this tip with an export_side_data solution"]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"As of January 2024, it doesn't work on HDR content, nothing prevents you from feeding it un-tonemapped PQ but scores will be off"}),"\n",(0,i.jsx)(t.li,{children:"In contrast with SSIMULACRA2, it focuses on appeal, not necessarily on fidelity. They often align, but not always."}),"\n",(0,i.jsx)(t.li,{children:"Due to the ML nature, comparing the same video to itself will not always result in a score of 100"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"comparing-to-ssimulacra2",children:"Comparing to SSIMULACRA2"}),"\n",(0,i.jsx)(t.p,{children:"One big advantage over SSIMULACRA2 is the inclusion of some temporal information.\nThis means that VMAF weights frames that have a lot of motion higher.\nMeanwhile, SSIMULACRA2 based solutions compare each frame to the reference frame individually, since it is an image\nmetric at heart.\nVMAF also wins in speed and general ease of use."}),"\n",(0,i.jsx)(t.h1,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/Netflix/vmaf/tree/master/resource/doc",children:"VMAF Documentation on GitHub"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://netflixtechblog.com/vmaf-the-journey-continues-44b51ee9ed12",children:"Medium Article by Netflix"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(7294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);