(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{8892:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/showcase",function(){return t(7254)}])},4494:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/beams-index-dark@75.8f02ce8a.jpg",height:1190,width:1318,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJaKS//EABgQAAIDAAAAAAAAAAAAAAAAAAARAhIh/9oACAEBAAE/AHGqWn//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:7}},8650:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/beams@75.2e4c33d3.jpg",height:1494,width:2170,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAWEAADAAAAAAAAAAAAAAAAAAAAESH/2gAIAQEAAT8AVP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:6}},9805:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/og.e0fc150c.jpg",height:590,width:1128,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAuwv/xAAcEAACAgIDAAAAAAAAAAAAAAADBAIRAAUSQVH/2gAIAQEAAT8A2jp1yphhXFg0hz9qus//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAgEBPwCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:4}},33:function(A,e,t){"use strict";t.d(e,{$:function(){return Footer}});var s=t(5893),a=t(6010),r=t(6876);function Footer({className:A}){return(0,s.jsx)("footer",{className:(0,a.Z)("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",A),children:(0,s.jsx)("div",{className:"border-t border-slate-200 pt-10 pb-16 dark:border-slate-200/5",children:(0,s.jsx)(FooterContent,{})})})}function FooterContent(){return(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(r.T,{className:"h-0 w-0 mx-auto"}),(0,s.jsxs)("p",{className:"mt-4 text-sm leading-6 text-slate-500",children:["\xa9 ",new Date().getFullYear()," Desci Cyou Labs Inc. All rights reserved."]})]})}Footer.Content=FooterContent},7254:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Showcase}});var s=t(5893),a=t(7294),r=t(1664),i=t.n(r),n=t(9426),o=t(5675),l=t.n(o),d=t(33),c=t(6010);function Site({site:A,priority:e=!1}){let t=(0,a.useRef)(),r=(0,a.useRef)(),n=(0,a.useRef)(),o=(0,a.useRef)("idle");function forceLayout(){r.current.offsetWidth}function showVideo(){forceLayout(),t.current.style.opacity=1,t.current.style.transition=""}function hideVideo(A=.5){forceLayout(),t.current.style.opacity=0,t.current.style.transition=`opacity ${A}s linear`}function onEnded(){o.current="looping",hideVideo()}function getVideo(){return A.dark&&document.documentElement.classList.contains("dark")?n.current:r.current}return(0,s.jsxs)("li",{className:"group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50",onMouseEnter:()=>{"idle"===o.current?(o.current="playing",getVideo().play(),showVideo()):"leaving"===o.current&&(o.current="looping")},onMouseLeave:()=>{o.current="leaving",hideVideo()},children:[(0,s.jsxs)("div",{className:"aspect-[672/494] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700",children:[(0,s.jsx)(l(),{src:A.thumbnail,alt:"",className:(0,c.Z)("absolute inset-0 w-full h-full",A.dark&&"dark:hidden"),priority:e,unoptimized:!0}),A.dark&&(0,s.jsx)(l(),{src:A.dark.thumbnail,alt:"",className:"absolute inset-0 w-full h-full hidden dark:block",priority:e,unoptimized:!0}),(0,s.jsxs)("div",{ref:t,onTransitionEnd:()=>{"leaving"===o.current?(o.current="idle",getVideo().currentTime=0,getVideo().pause()):"looping"===o.current&&(o.current="playing",getVideo().currentTime=0,getVideo().play(),showVideo())},children:[(0,s.jsx)("video",{ref:r,preload:"none",muted:!0,playsInline:!0,className:(0,c.Z)("absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)]",A.dark&&"dark:hidden"),onEnded:onEnded,children:(0,s.jsx)("source",{src:A.video,type:A.videoType??"video/mp4"})}),A.dark&&(0,s.jsx)("video",{ref:n,preload:"none",muted:!0,playsInline:!0,className:"absolute inset-0 w-full h-full [mask-image:radial-gradient(white,black)] hidden dark:block",onEnded:onEnded,children:(0,s.jsx)("source",{src:A.dark.video,type:A.dark.videoType??"video/mp4"})})]})]}),(0,s.jsxs)("div",{className:"flex flex-wrap items-center mt-6",children:[(0,s.jsx)("h2",{className:"text-sm leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400",children:(0,s.jsxs)(i(),{href:`/showcase/${A.slug}`,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-3xl"}),A.name]})}),A.isTemplate&&(0,s.jsx)("p",{"aria-label":"This site is a Desci Cyou web app template",className:"ml-2 text-[0.6875rem] leading-5 px-1.5 border border-transparent font-semibold text-sky-500 bg-sky-100 rounded-full dark:bg-slate-600/50 dark:text-slate-200 dark:group-hover:bg-sky-500 dark:group-hover:text-white",children:"Template"}),(0,s.jsx)("svg",{className:"w-6 h-6 flex-none opacity-0 group-hover:opacity-100",viewBox:"0 0 24 24",fill:"none",children:(0,s.jsx)("path",{d:"M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15",stroke:"#0EA5E9",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,s.jsx)("p",{className:"w-full flex-none text-[0.8125rem] leading-6 text-slate-500 dark:text-slate-400",children:A.description})]})]})}function Showcase(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("main",{className:"mt-16 sm:mt-20 relative",children:[(0,s.jsx)(l(),{src:t(8650),alt:"",className:"hidden dark:sm:hidden sm:block absolute top-[-6.25rem] left-1/2 max-w-none w-[67.8125rem] ml-[-46.875rem] pointer-events-none",priority:!0,unoptimized:!0}),(0,s.jsx)(l(),{src:t(4494),alt:"",className:"hidden dark:block absolute top-[-5rem] left-1/2 max-w-none w-[41.1875rem] ml-[-40rem] pointer-events-none",priority:!0,unoptimized:!0}),(0,s.jsxs)("div",{className:"relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center",children:[(0,s.jsx)("h1",{className:"text-sm leading-6 font-semibold text-sky-500",children:"Showcase"}),(0,s.jsx)("p",{className:"mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white",children:"You can build anything with Desci Cyou."}),(0,s.jsxs)("p",{className:"mt-4 text-lg text-slate-600 dark:text-slate-400",children:["Well not quite ",(0,s.jsx)("em",{children:"anything"}),", like you can't build a spaceship with it. But you can definitely build the website for the spaceship —"," ",(0,s.jsx)(i(),{href:"/showcase/nasa",className:"font-semibold border-b border-sky-300 text-gray-900 hover:border-b-2 dark:text-white dark:border-sky-400",children:"NASA did"}),"."]})]}),(0,s.jsx)("ul",{className:"grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8",children:n.Q.map((A,e)=>(0,s.jsx)(Site,{site:A,priority:e<6},A.name))})]}),(0,s.jsx)(d.$,{className:"mt-32"})]})}Showcase.layoutProps={meta:{title:"Example Showcase",description:"Beautiful websites built with Desci Cyou, including marketing sites, SaaS applications, ecommerce stores, and more.",ogImage:t(9805)}}},9426:function(A,e,t){"use strict";t.d(e,{Q:function(){return s}});let s=[]}},function(A){A.O(0,[675,774,888,179],function(){return A(A.s=8892)}),_N_E=A.O()}]);