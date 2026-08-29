
document.addEventListener("DOMContentLoaded", ()=>{
  const countdown=document.querySelector("[data-countdown]");
  if(countdown){
    const target = new Date("2027-01-31T06:30:00+05:30").getTime();
    function tick(){
      const diff=Math.max(0,target-Date.now());
      const d=Math.floor(diff/86400000);
      const h=Math.floor((diff%86400000)/3600000);
      const m=Math.floor((diff%3600000)/60000);
      const s=Math.floor((diff%60000)/1000);
      const vals={days:d,hours:h,mins:m,secs:s};
      Object.entries(vals).forEach(([k,v])=>{const el=document.querySelector(`[data-${k}]`);if(el)el.textContent=String(v).padStart(2,"0")});
    }
    tick(); setInterval(tick,1000);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("faqSearch");
  if (!search) return;
  const items = [...document.querySelectorAll("#faqAccordion .faq-item")];
  const empty = document.getElementById("faqNoResults");
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    items.forEach(item => {
      const match = !q || item.textContent.toLowerCase().includes(q);
      item.classList.toggle("d-none", !match);
      if (match) visible++;
    });
    if (empty) empty.classList.toggle("d-none", visible !== 0);
  });
});
