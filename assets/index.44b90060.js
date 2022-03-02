import{r as f,c as h,u as m,o as _,a as y,b as l,w as g,F as v,d as w,e as u,f as k,t as E,g as b,h as O,i as L,j as $}from"./vendor.a9a39246.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};x();var P=(n,s)=>{const i=n.__vccOpts||n;for(const[o,e]of s)i[o]=e;return i};const A={setup(){const n=f({count:0});function s(){n.count++}const i=h(()=>({title:"My Title"+n.count,description:`Counted ${n.count} times`,meta:[{charset:"utf-8"},{name:"description",content:"Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work."},{property:"og:description",content:"Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work."+n.count},{property:"og:title",content:"Epiloge - Build your network in your field of interest"+n.count},{property:"og:site_name",content:"Epiloge"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"},{property:"robots",content:"index,follow"}]}));return m(i),{state:n,increment:s}},mounted(){document.dispatchEvent(new Event("render-event"))}},N=w("br",null,null,-1);function C(n,s,i,o,e,t){const r=u("metainfo"),c=u("router-view");return _(),y(v,null,[l(r,null,{title:g(({content:a})=>[k(E(a),1)]),_:1}),N,l(c)],64)}var M=P(A,[["render",C]]);const V="modulepreload",p={},B="/",d=function(s,i){return!i||i.length===0?s():Promise.all(i.map(o=>{if(o=`${B}${o}`,o in p)return;p[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":V,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((c,a)=>{r.addEventListener("load",c),r.addEventListener("error",a)})})).then(()=>s())},R=b({history:O(),routes:[{path:"/",component:()=>d(()=>import("./Page1.fde458df.js"),["assets/Page1.fde458df.js","assets/Page1.8f1cbfcb.css","assets/vendor.a9a39246.js"])},{path:"/page2",component:()=>d(()=>import("./Page2.42c84f80.js"),["assets/Page2.42c84f80.js","assets/Page2.fb8a6fa6.css","assets/vendor.a9a39246.js"])}]});L(M).use(R).use($()).mount("#app");export{P as _};
