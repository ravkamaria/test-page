const t=document.querySelector(".popular-items");console.log(t),fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})).then((e=>{console.log(e),t.insertAdjacentHTML("beforeend",e.map((({description:t,title:e,preview:o})=>`<div class="popular-item">\n    <img\n      class="popular-item-img"\n      src="${o}"\n      alt="${e}"\n    />\n    <div class="popular-item-text-content">\n      <h3 class="popular-item-title">${e}</h3>\n      <p class="popular-item-descr">${t}</p>\n    </div>\n  </div>`)).join(""))})).catch((t=>{console.log(t)}));
//# sourceMappingURL=index.684c0b6b.js.map