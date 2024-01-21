"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1730],{3574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(5893),r=t(1151);t(4866),t(5162);const s={label:"rav1ator-cli",sidebar_position:6,templating:!0},a="rAV1ator CLI",o={id:"utilities/rav1ator-cli",title:"rAV1ator CLI",description:"rAV1ator CLI, or just rav1ator-cli, is a TUI tool that provides an interactive command line interface for encoding videos with Av1an using various different encoders including rav1e, aomenc, SVT-AV1, x265, and x264.",source:"@site/docs/utilities/rav1ator-cli.mdx",sourceDirName:"utilities",slug:"/utilities/rav1ator-cli",permalink:"/docs/utilities/rav1ator-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/rav1ator-cli.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{label:"rav1ator-cli",sidebar_position:6,templating:!0},sidebar:"tutorialSidebar",previous:{title:"rAV1ator",permalink:"/docs/utilities/rAV1ator"},next:{title:"NMKODER",permalink:"/docs/utilities/nmkoder"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Linux (Arch)",id:"linux-arch",level:2},{value:"Linux (Other)",id:"linux-other",level:2},{value:"Windows",id:"windows",level:2},{value:"Basic installtion",id:"basic-installtion",level:3},{value:"Optional: Cleanup of the Ubuntu Distribution",id:"optional-cleanup-of-the-ubuntu-distribution",level:3},{value:"After the Installation and Cleanup, How Do I Start Arch?",id:"after-the-installation-and-cleanup-how-do-i-start-arch",level:3},{value:"Unlock WSL RAM Usage (Optional)",id:"unlock-wsl-ram-usage-optional",level:3},{value:"macOS",id:"macos",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rav1ator-cli",children:"rAV1ator CLI"}),"\n",(0,i.jsxs)(n.p,{children:["rAV1ator CLI, or just ",(0,i.jsx)(n.code,{children:"rav1ator-cli"}),", is a TUI tool that provides an interactive command line interface for encoding videos with ",(0,i.jsx)(n.a,{href:"/docs/utilities/av1an",children:"Av1an"})," using various different encoders including ",(0,i.jsx)(n.a,{href:"/docs/encoders/rav1e",children:"rav1e"}),", ",(0,i.jsx)(n.a,{href:"/docs/encoders/aomenc",children:"aomenc"}),", ",(0,i.jsx)(n.a,{href:"/docs/encoders/SVT-AV1",children:"SVT-AV1"}),", ",(0,i.jsx)(n.a,{href:"/docs/encoders/x265",children:"x265"}),", and ",(0,i.jsx)(n.a,{href:"/docs/encoders/x264",children:"x264"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"rAV1ator CLI can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check if it is installed & up to date on its own without a package manager"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download AVX2-optimized encoder binaries compiled with ",(0,i.jsx)(n.code,{children:"-O3 -flto"})," in most cases & allow the user to install them with detailed instructions"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Encode with x264, x265, aomenc, SVT-AV1, or rav1e, set a speed preset, CRF/quality value, FFmpeg parameters, and encoder parameters"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generate Av1an encoding commands with the user's chosen settings & run them to encode a provided input video to an MKV output"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Encode from scratch, or resume a previous rav1ator-cli encode"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Engage with rich interactivity featuring spinners, prompts, dropdowns, and the like"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Error check downloads by checking SHA256 hashes on the downloaded binaries for security & convenience"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Overall, it aims to provide an easy way to encode videos on the command line with helpful visual feedback. The interactive prompts help users pick encoding settings without needing deep encoding knowledge."}),"\n",(0,i.jsx)("img",{width:"640",height:"360",src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/rav1ator_cli_demo1.avif",alt:"rAV1ator-cli: Demo 1"}),"\n",(0,i.jsx)("img",{width:"640",height:"360",src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/rav1ator_cli_demo2.avif",alt:"rAV1ator-cli: Demo 2"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"rAV1ator CLI is natively supported on Linux, & is supported on Windows via WSL2. A tutorial for setting up WSL2 is provided below."}),"\n",(0,i.jsx)(n.h2,{id:"linux-arch",children:"Linux (Arch)"}),"\n",(0,i.jsxs)(n.p,{children:["These instructions are for Arch Linux specifically. Other distros should be very similar, and packages that are Arch-specific will be labelled. If you're on Ubuntu, you should see the relevant section of the ",(0,i.jsx)(n.a,{href:"https://wiki.x266.mov/blog/av1-encoding-for-dummies",children:"AV1 for Dummies"})," blog post on this site."]}),"\n",(0,i.jsxs)(n.p,{children:["If you're on another distro and you want to be able to follow these instructions specifically, see the ",(0,i.jsx)(n.a,{href:"#linux-other",children:"Linux (Other)"})," section."]}),"\n",(0,i.jsxs)(n.ol,{start:"0",children:["\n",(0,i.jsx)(n.li,{children:"Update your system before doing anything. On Arch:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Install ",(0,i.jsx)(n.code,{children:"yay"})," (Arch only) by running the following commands:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S --needed base-devel git\ngit clone https://aur.archlinux.org/yay.git\ncd yay && makepkg -si\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Next, you'll want to install all of rav1ator-cli's dependencies. You can do that by running:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yay -Syu ffmpeg python mkvtoolnix-cli vapoursynth gum numactl l-smash vapoursynth-plugin-lsmashsource av1an ffms2\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Install rav1ator-cli:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -sOJ https://raw.githubusercontent.com/gianni-rosato/rav1ator-cli/main/rav1ator-cli && chmod +x rav1ator-cli\nsudo cp rav1ator-cli /usr/local/bin\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You're done! Run ",(0,i.jsx)(n.code,{children:"rav1ator-cli -h"})," to get some help getting started. Happy encoding!"]}),"\n",(0,i.jsx)(n.h2,{id:"linux-other",children:"Linux (Other)"}),"\n",(0,i.jsxs)(n.p,{children:["If you're on Ubuntu, you can see the relevant section of the ",(0,i.jsx)(n.a,{href:"https://wiki.x266.mov/blog/av1-encoding-for-dummies",children:"AV1 for Dummies"})," blog post on this site for more information about doing this ",(0,i.jsx)(n.em,{children:"without"})," a distrobox. However, a distrobox is valuable because you can use Arch's fast-paced package management on other distros. Distroboxes are generally easier than Docker for beginners, and use Docker or Podman behind the scenes anyway. This tutorial will focus on using Distrobox with Podman."]}),"\n",(0,i.jsxs)(n.ol,{start:"0",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install Distrobox and Podman on your distro of choice. Please look up how to do this for your respective distro, and how to get everything set up properly."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you already use Podman, are re-creating a Distrobox, or you already have other Distroboxes running from long enough ago where your Arch image is outdated, you might want to run ",(0,i.jsx)(n.code,{children:"podman image rm docker.io/archlinux/archlinux:latest"}),". It won't hurt to run it anyway if you're not sure. ",(0,i.jsx)(n.strong,{children:"Do this every time you make a new Distrobox if you're experiencing issues with Distrobox creation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Now, run ",(0,i.jsx)(n.code,{children:"distrobox-create --name rvcli-box --image archlinux:latest"}),". You do not need to name yours \"rvcli-box\", but that's what we're going to call the box in this tutorial."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"distrobox enter rvcli-box"})," to go inside. You are now using Arch Linux from within your existing distro!"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["First, run ",(0,i.jsx)(n.code,{children:"sudo pacman -Syu"})," to update your system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, run ",(0,i.jsx)(n.code,{children:"sudo pacman -S --needed base-devel git && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Finally, ",(0,i.jsx)(n.code,{children:"yay -Sy rust ffmpeg python mkvtoolnix-cli vapoursynth gum numactl l-smash vapoursynth-plugin-lsmashsource av1an ffms2"})," to install the necessary dependencies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download rav1ator-cli: ",(0,i.jsx)(n.code,{children:"curl -sOJ https://raw.githubusercontent.com/gianni-rosato/rav1ator-cli/main/rav1ator-cli && chmod +x rav1ator-cli"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy rav1ator-cli to your /usr/local/bin: ",(0,i.jsx)(n.code,{children:"sudo cp rav1ator-cli /usr/local/bin"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you'd like to exit the distrobox, just do ",(0,i.jsx)(n.code,{children:"Ctrl"})," + ",(0,i.jsx)(n.code,{children:"D"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You're done! Run ",(0,i.jsx)(n.code,{children:"rav1ator-cli -h"})," to get some help getting started. Happy encoding!"]}),"\n",(0,i.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(n.admonition,{title:"Windows",type:"note",children:(0,i.jsxs)(n.p,{children:["The content in this entry was written by pat-e, or ",(0,i.jsx)(n.code,{children:"pate"})," on Discord. They have provided an ",(0,i.jsx)(n.a,{href:"https://www.pat-e.net/wsl/181796892.html",children:"in-depth tutorial"})," on setting up rav1ator-cli on Windows Server 2022 via WSL if you are interested, but this tutorial that they wrote focuses on Windows 11 via WSL. I thank them for their generous support of the project!"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:'Enable WSL2 on Windows 11 and Install "ArchWSL2"'})}),"\n",(0,i.jsx)(n.h3,{id:"basic-installtion",children:"Basic installtion"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the Terminal as Administrator:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/01_wsl_rv-cli.avif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Command-Prompt, enter the following to install WSL and (temporary) Ubuntu:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"wsl.exe --install\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/02_wsl_rv-cli.avifg",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:['If the "Host Process for Windows Services" asks for allowing changes, approve it (Press "Yes"):',(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/03_wsl_rv-cli.avif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the installation of WSL (and Ubuntu as Default) is finished, restart your Computer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"shutdown -r -f -t 1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/04_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once restarted and logged in, WSL will start with Ubuntu and ask for Username and password. Enter whatever you want as this distribution will be removed after the switch to ArchWSL2. Just exit after the Ubuntu is setup:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/05_wsl_rv-cli.avif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From ",(0,i.jsx)(n.a,{href:"https://github.com/sileshn/ArchWSL2",children:"This GitHub link"}),", download the latest release of ArchWSL2 in the Releases section:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/06_wsl_rv-cli.avif",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On your SSD, create a folder where we will place the ArchWSL2 files. This folder ",(0,i.jsx)(n.strong,{children:"must be kept and never deleted"})," as this will contain the base files for this distribution. It is advised to use an SSD instead of an HDD. The storage must be local storage, not a network-share or a removable disk. In our example, we will create a folder located at C:\\Stuff\\ArchWSL2;",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/07_wsl_rv-cli.avif",alt:""})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/08_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Extract the downloaded ZIP of "ArchWSL2" into your newly created folder:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/09_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Once extracted, start the extracted "Arch.exe":'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/10_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'On first start, the program will create a virtual disk (VHDx). Once finished, press "Enter" to continue (it will close the window)'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/11_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Once the virtual hard disk is created, restart the "arch.exe" again. It will finish some steps and ask for creating a new user-account. ',(0,i.jsx)(n.strong,{children:"This account is completely separate from your Windows user."})," Please remember the username and password you use."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/12_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/13_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsxs)(n.ol,{start:"11",children:["\n",(0,i.jsx)(n.li,{children:"The Window will close and reopen again. As fist step, update all packages. As your account you created earlier is in the sudo-group, you have to enter your password again as confirmation."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo pacman -Syu\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/14_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsx)(n.li,{children:'Approve the installation of all the updates (Type "y"):'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/15_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsx)(n.li,{children:"Done... You can now use ArchWSL2."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"optional-cleanup-of-the-ubuntu-distribution",children:"Optional: Cleanup of the Ubuntu Distribution"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open the terminal as Administrator, like we did earlier."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/16_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the current installed distributions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"wsl --list\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/17_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'To remove "Ubuntu" (and therefor make Arch as default), enter the following command:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"wsl --unregister ubuntu\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/18_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'After the removal of Ubuntu, we can list the distributions again and verify that "Arch" is now the default:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/19_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"after-the-installation-and-cleanup-how-do-i-start-arch",children:"After the Installation and Cleanup, How Do I Start Arch?"}),"\n",(0,i.jsx)(n.p,{children:"For the start of Arch, there are 2 steps possible:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'You can just start "wsl" form the command prompt, terminal or "Windows Search":'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/20_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/21_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'As another option, you can create a Shortcut to the "arch.exe" in the Installation-Folder:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/22_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/23_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/24_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hint"}),': When you open the "arch.exe", you will be placed into the directory where also the "arch.exe" is located. To change to your home directory, just enter the command below:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/25_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsx)(n.h3,{id:"unlock-wsl-ram-usage-optional",children:"Unlock WSL RAM Usage (Optional)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hint"}),": WSL caps RAM usage at 50% of the total RAM available on your system."]}),"\n",(0,i.jsx)(n.p,{children:"When you start the VM, you will see that you only will only have 50% of your total memory available:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/26_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"To allow more memory, you need to place a config-file in your profile-folder in Windows. See the instructions below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Open "notepad.exe" and enter the following:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"[wsl2]\nmemory=12GB\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/27_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The amount of memory should never be more than current memory. Set it to total memory minus 4GB to leave enough left over for Windows. In my example, Windows has 16GB of RAM available, so I select the memory to be 12GB."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When saving the file, enter the following as filename:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"%userprofile%"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/28_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When pressing enter, the directory will switch to your user-profile folder:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/29_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Select the "Save as type" to "All files (*.*)" and save as the following filename:'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:".wslconfig"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/30_wsl_rv-cli.avif",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure the file is saved as ",(0,i.jsx)(n.code,{children:".wslconfig"}),". Then exit notepad."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Exit any current running WSL / Arch (exit):"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/31_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Open the Terminal as Administrator and "shutdown" any running WSL:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"wsl --shutdown\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/32_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restart WSL again and check the memory settings from within Arch by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"free -h\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/av1-community-contributors/images/main/33_wsl_rv-cli.avif",alt:""})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you've made it this far, you should be more than ready to encode. We hope you enjoy rAV1ator CLI!"}),"\n",(0,i.jsx)(n.h2,{id:"macos",children:"macOS"}),"\n",(0,i.jsx)(n.p,{children:"No macOS support is provided at this time. It is definitely technically feasible, and I may produce a separate tool in the future with proper macOS binaries, though this would be a burden to keep up considering I don't currently see any demand for a port."}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If your encode features a grey screen flashing occaisonally in the output, create a lossless intermediary of your source with x264 ",(0,i.jsx)(n.code,{children:"-qp 0"}),". This happens because of VC-1 decoding errors, and is not something I can fix."]}),"\n",(0,i.jsxs)(n.li,{children:["If you have any more questions, please join the ",(0,i.jsx)(n.a,{href:"https://discord.gg/bbQD5MjDr3",children:"AV1 for Dummies Discord server"}),". There is a rAV1ator CLI channel over there, and I am always happy to talk!"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var i=t(6905);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(7294),r=t(6905),s=t(2466),a=t(6550),o=t(469),l=t(1980),c=t(7392),h=t(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=d(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,h.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=c??x;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function f(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:h,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(f,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);