const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let all=[];
function render(cat="全部"){
  const rows=cat==="全部"?all:all.filter(x=>x.category===cat);
  document.getElementById("projects").innerHTML=rows.map(r=>`
    <article class="card">
      <div class="meta">${esc(r.category)} · ${esc(r.language)}</div>
      <h3>${esc(r.name)}</h3><p>${esc(r.description||"AI engineering project.")}</p>
      <div>★ ${r.stars} · Fork ${r.forks}</div>
      <p><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">打开项目 →</a></p>
    </article>`).join("");
}
fetch("assets/projects.json").then(r=>r.json()).then(data=>{
  all=data.projects||[];
  const cats=["全部",...new Set(all.map(x=>x.category))];
  document.getElementById("filters").innerHTML=cats.map(c=>`<button data-c="${esc(c)}">${esc(c)}</button>`).join("");
  document.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>render(b.dataset.c));
  render();
}).catch(()=>document.getElementById("projects").textContent="项目数据暂不可用。");
