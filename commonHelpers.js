import{S as d,i as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(n){const t=document.querySelector(".gallery");t.innerHTML=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:i,comments:a,downloads:m})=>`<li class="gallery-item">
      <a href="${s}" class="gallery-link" data-lightbox="gallery">
        <img class="gallery-image"
         src="${o}"
         alt="${e}"/>
         <div class="gallery-text">
        <p>Likes: ${r}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${a}</p>
        <p>Downloads: ${m}</p>
        </div>
      </a>
    </li>`).join("")}function g(n){const i=`https://pixabay.com/api/?key=42468615-7a21ca39eb8f796f5c09d98b3&q=${n}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(i).then(a=>{if(!a.ok)throw new Error("Image error!");return a.json()})}const y=document.querySelector(".btn-section"),p=document.querySelector("#data-search");document.querySelector("[data-start]");const u=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});u.innerHTML="";y.addEventListener("submit",E);function E(n){n.preventDefault();const t=p.value.trim();if(!t){l.warning({title:"Warning",message:"Please enter a search term."}),u.innerHTML="";return}u.innerHTML="",c.classList.add("loader-visible"),g(t).then(o=>{o.hits.length===0?l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):(f(o.hits),c.classList.remove("loader-visible"),h.refresh())}).catch(o=>{console.error("Error fetching images:",o),l.error({title:"Error",message:"An error occurred while fetching images."})}).finally(()=>{c.classList.remove("loader-visible")})}
//# sourceMappingURL=commonHelpers.js.map
