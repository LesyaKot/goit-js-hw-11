import{S as m,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:a,downloads:u})=>`<li class="gallery-item">
      <a href="${i}" class="gallery-link" data-lightbox="gallery">
        <img class="gallery-image"
         src="${o}"
         alt="${e}"/>
         <div class="gallery-text">
        <p>Likes: ${t}</p>
        <p>Views: ${n}</p>
        <p>Comments: ${a}</p>
        <p>Downloads: ${u}</p>
        </div>
      </a>
    </li>`).join("")}function d(s){const n=`https://pixabay.com/api/?key=42468615-7a21ca39eb8f796f5c09d98b3&q=${s}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(n).then(a=>{if(!a.ok)throw new Error("Image error!");return a.json()})}const g=document.querySelector(".btn-section"),y=document.querySelector("#data-search");document.querySelector("[data-start]");const p=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});p.innerHTML="";g.addEventListener("submit",E);function E(s){s.preventDefault();const r=y.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term."});return}l.style.display="block",d(r).then(o=>{o.hits.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(f(o.hits),l.style.display="none",h.refresh())}).catch(o=>{console.error("Error fetching images:",o),c.error({title:"Error",message:"An error occurred while fetching images."})})}
//# sourceMappingURL=commonHelpers.js.map
