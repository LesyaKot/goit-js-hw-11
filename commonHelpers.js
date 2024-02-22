import{i as c,S as u}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(n){const r=document.querySelector(".gallery");r.innerHTML=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:a,downloads:l})=>`<li class="gallery-item">
      <a href="${s}" class="gallery-link" data-lightbox="gallery">
        <img class="gallery-image"
         src="${o}"
         alt="${e}"/>
         <div class="gallery-text">
        <p>Likes: ${t}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${a}</p>
        <p>Downloads: ${l}</p>
        </div>
      </a>
    </li>`).join(""),window.simpleLightbox&&window.simpleLightbox.refresh()}function f(n){const i=`https://pixabay.com/api/?key=42468615-7a21ca39eb8f796f5c09d98b3&q=${n}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(i).then(a=>{if(!a.ok)throw new Error("Image error!");return a.json()})}const g=document.querySelector(".btn-section"),d=document.querySelector("#data-search");document.querySelector("[data-start]");const p=document.querySelector(".gallery");p.innerHTML="";g.addEventListener("submit",y);function y(n){n.preventDefault();const r=d.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search term."});return}f(r).then(o=>{o.hits.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):m(o.hits)}).catch(o=>{console.error("Error fetching images:",o),c.error({title:"Error",message:"An error occurred while fetching images."})})}new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
