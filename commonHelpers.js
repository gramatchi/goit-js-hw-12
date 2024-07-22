import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function f({largeImageURL:r,tags:e,likes:i,views:o,comments:t,downloads:s,webformatURL:n}){return`
      <a href="${r}" class="gallery-item" data-lightbox="image-${r}" data-title="${e}">
        <div class="item-gallery">
          <img src="${n}" alt="${e}" class="list-img">
          <figcaption class="figcaption">
            <div class="figcaption-item">
              <span>Likes</span>
              <span class="counter">${i}</span>
            </div>
            <div class="figcaption-item">
              <span>Views</span>
              <span class="counter">${o}</span>
            </div>
            <div class="figcaption-item">
              <span>Comments</span>
              <span class="counter">${t}</span>
            </div>
            <div class="figcaption-item">
              <span>Downloads</span>
              <span class="counter">${s}</span>
            </div>
          </figcaption>
        </div>
      </a>
    `}const p="https://pixabay.com/api/",d="45042882-3b5507a901f9feb9cee5f866e",m="photo",g="horizontal",h="true",y={method:"GET"};function $(r){return fetch(`${p}?key=${d}&q=${r}&image_type=${m}&orientation=${g}&safesearch=${h}`,y).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{throw new Error(`An error occurred: ${e.message}`)})}const v=document.querySelector("#search-form"),E=document.querySelector(".js-search-input"),c=document.querySelector(".gallery"),l=document.querySelector("#loader");v.addEventListener("submit",r=>{r.preventDefault();const e=E.value.trim();e!==""?b(e):a.warning({title:"Warning",message:"Please enter a search query!"})});function b(r){c.innerHTML="",l.style.display="block",$(r).then(e=>{e.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(e.hits.forEach(o=>{const t=f(o);c.insertAdjacentHTML("beforeend",t)}),a.success({title:"Success",message:"Images loaded successfully!"}),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh())}).catch(e=>{a.error({title:"Error",message:`An error occurred: ${e.message}`}),console.log(e)}).finally(()=>{l.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
