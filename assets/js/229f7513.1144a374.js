"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[7146],{6138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"subtitles/webvtt","title":"WebVTT","description":"WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the HTML \\\\ element, or embedded into a webm container.","source":"@site/docs/subtitles/webvtt.mdx","sourceDirName":"subtitles","slug":"/subtitles/webvtt","permalink":"/docs/subtitles/webvtt","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/subtitles/webvtt.mdx","tags":[],"version":"current","frontMatter":{"title":"WebVTT"},"sidebar":"tutorialSidebar","previous":{"title":"SubStation Alpha","permalink":"/docs/subtitles/SSA"},"next":{"title":"Vapoursynth","permalink":"/docs/filtering/vapoursynth"}}');var i=n(4848),r=n(8453);const o={title:"WebVTT"},l="WebVTT",a={},c=[{value:"Structure",id:"structure",level:2},{value:"Cue",id:"cue",level:3},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"webvtt",children:"WebVTT"})}),"\n",(0,i.jsxs)(t.p,{children:["WebVTT, or Web Video Text Tracks, is the format for subtitles on the web. It is used with the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track",children:"HTML <track> element"}),", or embedded into a webm container."]}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.p,{children:["WebVTT is a simple, text-based format, based on ",(0,i.jsx)(t.a,{href:"/docs/subtitles/SRT",children:"SRT"}),". All files start with the string\n",(0,i.jsx)(t.code,{children:"WEBVTT"}),", optionally, some text, then two new lines. That's where the\ndata we're interested in starts."]}),"\n",(0,i.jsx)(t.h3,{id:"cue",children:"Cue"}),"\n",(0,i.jsxs)(t.p,{children:["A WebVTT file is basically a bunch of cues. They can have a line with\nan ID, then they have to have a line specifying from where to where\nthe cue should be displayed like this: ",(0,i.jsx)(t.code,{children:"STARTTIME -> ENDTIME [optional settings go here]"}),", then all the text to be displayed goes after\nit. That text can have some HTML-like formatting in it. To learn about\nthem, see ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#webvtt_cues",children:"the documentation"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"WEBVTT\n\n00:01.000 --\x3e 00:04.000\n- Never drink liquid nitrogen.\n\n00:05.000 --\x3e 00:09.000\n- It will perforate your stomach.\n- You could die.\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);