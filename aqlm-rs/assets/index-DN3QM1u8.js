(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();let o=[],c=!1;function m(){try{new WebAssembly.Memory({initial:256*256,maximum:256*256})}catch{return!1}return!0}const u=m();u||(document.getElementById("user-input").placeholder="Not enough RAM");function f(s,t){const i=document.getElementById("chat"),r=document.createElement("div");r.classList.add(t==="User"?"user-message-row":"ai-message-row");const e=document.createElement("span");e.classList.add("message"),e.textContent=s,r.appendChild(e),i.appendChild(r)}function a(s){const t=document.getElementById("chat");for(;t.firstChild;)t.removeChild(t.lastChild);s.forEach(i=>{f(i.content,i.role)})}const l=new Worker(new URL("/aqlm-rs/assets/worker-YNalhyi8.js",import.meta.url));document.getElementById("user-input-form").addEventListener("submit",function(s){if(s.preventDefault(),c)return;let t=document.getElementById("user-input").value;if(document.getElementById("user-input").value="",t===""&&(t=" "),o.push({role:"User",content:t}),!u){o.push({role:"Assistant",content:"Not enough RAM. Only devices with available 4Gb of RAM are supported."}),a(o),c=!0,document.getElementById("description").classList.add("description-hidden"),document.getElementById("chat").classList.remove("chat-hidden"),document.getElementById("chat").classList.add("chat-visible");return}a(o),l.postMessage(o),c=!0,document.getElementById("user-input-button").classList.add("inactive-button"),document.getElementById("clear-button").classList.add("inactive-button"),document.getElementById("description").classList.add("description-hidden"),document.getElementById("chat").classList.remove("chat-hidden"),document.getElementById("chat").classList.add("chat-visible")});document.getElementById("clear-button").addEventListener("click",function(s){l.postMessage([])});l.onmessage=s=>{document.getElementById("clear-button").classList.remove("clear-button-hidden"),o=s.data.messages,a(o),s.data.is_finished&&(c=!1,document.getElementById("user-input-button").classList.remove("inactive-button"),document.getElementById("clear-button").classList.remove("inactive-button"))};