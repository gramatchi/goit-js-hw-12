import{a as y,i,S as g}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",v="45042882-3b5507a901f9feb9cee5f866e",E="photo",b="horizontal",S="true",w=15;async function L(o,r=1){try{return(await y.get(h,{params:{key:v,q:o,image_type:E,orientation:b,safesearch:S,per_page:w,page:r}})).data}catch(s){throw new Error(`Oooops error: ${s.message}`)}}function P({largeImageURL:o,tags:r,likes:s,views:n,comments:e,downloads:t,webformatURL:a}){return`
      <a href="${o}" class="gallery-item" data-lightbox="image-${o}" data-title="${r}">
        <div class="item-gallery">
          <img src="${a}" alt="${r}" class="list-img">
          <figcaption class="figcaption">
            <div class="figcaption-item">
              <span>Likes</span>
              <span class="counter">${s}</span>
            </div>
            <div class="figcaption-item">
              <span>Views</span>
              <span class="counter">${n}</span>
            </div>
            <div class="figcaption-item">
              <span>Comments</span>
              <span class="counter">${e}</span>
            </div>
            <div class="figcaption-item">
              <span>Downloads</span>
              <span class="counter">${t}</span>
            </div>
          </figcaption>
        </div>
      </a>
    `}const $=document.querySelector("#search-form"),q=document.querySelector(".js-search-input"),d=document.querySelector(".gallery"),f=document.querySelector("#loader"),l=document.querySelector("#load-more");let u=1,c="",p=0;$.addEventListener("submit",o=>{o.preventDefault(),c=q.value.trim(),c!==""?(u=1,p=0,d.innerHTML="",l.style.display="none",m(c,u)):i.warning({title:"Warning",message:"Please enter a search query!"})});l.addEventListener("click",()=>{u+=1,m(c,u)});async function m(o,r){f.style.display="block";try{const s=await L(o,r);if(r===1&&(p=s.totalHits),s.hits.length===0&&r===1)i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});else{s.hits.forEach(t=>{const a=P(t);d.insertAdjacentHTML("beforeend",a)}),i.success({title:"Success",message:"Images loaded successfully!"}),new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),d.childElementCount<p?l.style.display="block":(l.style.display="none",i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}catch(s){i.error({title:"Error",message:`An error occurred: ${s.message}`}),console.log(s)}finally{f.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
