(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c="42468615-7a21ca39eb8f796f5c09d98b3",a="https://pixabay.com/api/",u="",f="photo",l="horizontal",d=`${a}?key=${c}&q=${u}&image_type=${f}&orientation=${l}&safesearch=${!0}`;function h(){return fetch(d).then(r=>{if(!r.ok)throw new Error("Image error!");return r.json()}).catch(r=>{alert("ERROR")})}h().then(r=>{const o=r.hits.slice(0,9);document.body.innerHTML=o.map(({webformatURL:n})=>`<img src="${n}" width="360" height="300">`).join("")});
//# sourceMappingURL=commonHelpers.js.map
