const SITE = {};
function headerHTML(){
  const raceMenu = `
    <li><a class="dropdown-item" href="about.html"><i class="bi bi-compass"></i><span>About Jawai</span></a></li>
    <li><a class="dropdown-item" href="25km.html"><i class="bi bi-signpost-split"></i><span>25Km Trail</span></a></li>
    <li><a class="dropdown-item" href="12km.html"><i class="bi bi-signpost"></i><span>12Km Trail</span></a></li>`;
  const runnerMenu = `
    <li><a class="dropdown-item" href="event-schedule.html"><i class="bi bi-calendar-event"></i><span>Event Schedule</span></a></li>
    <li><a class="dropdown-item" href="base-camp.html"><i class="bi bi-geo-alt"></i><span>Base Camp & Facilities</span></a></li>
    <li><a class="dropdown-item" href="rules.html"><i class="bi bi-clipboard-check"></i><span>Rules & Regulations</span></a></li>
    <li><a class="dropdown-item" href="how-to-reach.html"><i class="bi bi-geo-alt"></i><span>How to Reach</span></a></li>
    <li><a class="dropdown-item" href="faqs.html"><i class="bi bi-question-circle"></i><span>FAQs</span></a></li>
    <li><a class="dropdown-item" href="waste-management.html"><i class="bi bi-recycle"></i><span>Waste Management</span></a></li>`;
  return `
  <nav class="navbar navbar-expand-xl navbar-light fixed-top">
    <div class="container header-container">
      <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
        <img src="assets/jtr-logo.png" alt="Jawai Trail Run logo" class="header-logo">
        <span>JAWAI TRAIL RUN</span>
      </a>
      <div class="header-event-meta d-none d-xl-flex" aria-label="Event date and ITRA membership">
        <div class="event-date-chip"><span><small>EVENT DATE</small><strong>31 JAN 2027</strong></span></div>
        <div class="itra-header-mark"><img src="assets/itra-member.webp" alt="ITRA member"></div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-xl-center">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">The Race <i class="bi bi-chevron-down nav-caret"></i></a><ul class="dropdown-menu dropdown-menu-jtr">${raceMenu}</ul></li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Runners Information <i class="bi bi-chevron-down nav-caret"></i></a><ul class="dropdown-menu dropdown-menu-jtr">${runnerMenu}</ul></li>
          <li class="nav-item nav-contact"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item nav-register"><a class="btn btn-jtr" href="register.html">Register Now</a></li>
        </ul>
      </div>
    </div>
  </nav>`;
}
function footerHTML(){
  return `
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <img class="footer-logo mb-3" src="assets/jtr-logo.png" alt="Jawai Trail Run emblem">
          <h4>JAWAI TRAIL RUN</h4>
          <p>A new trail-running experience in the wild heart of Rajasthan.</p>
        </div>
        <div class="col-6 col-lg-2"><h5>Race Categories</h5><p class="mb-1"><a href="25km.html"><i class="bi bi-arrow-right-short"></i>25Km</a></p><p><a href="12km.html"><i class="bi bi-arrow-right-short"></i>12Km</a></p></div>
        <div class="col-6 col-lg-3"><h5>Runners Information</h5><p class="mb-1"><a href="event-schedule.html">Event Schedule</a></p><p class="mb-1"><a href="base-camp.html">Base Camp & Facilities</a></p><p class="mb-1"><a href="how-to-reach.html">How to Reach</a></p><p><a href="faqs.html">FAQs</a></p></div>
        <div class="col-lg-3"><h5>Social Media</h5><p class="mb-1"><a href="https://www.facebook.com/profile.php?id=61593435620651" target="_blank" rel="noopener"><i class="bi bi-facebook me-2"></i>Facebook</a></p><p><a href="https://www.instagram.com/jawaitrailrun/" target="_blank" rel="noopener"><i class="bi bi-instagram me-2"></i>Instagram</a></p><p><a href="contact.html">jawaitrailrun@gmail.com</a></p></div>
      </div>
      <hr class="border-light opacity-25 my-4">
      <div class="d-flex flex-column flex-lg-row gap-3 justify-content-between"><div class="d-flex flex-wrap gap-3"><a href="rules.html">Event Rules & Regulations</a><a href="disclaimer.html">Disclaimer</a><a href="refund-policy.html">Refund Policy</a><a href="privacy-policy.html">Privacy Policy</a></div><div>© 2026-27 Seyari &amp; Ronin. All rights reserved.</div></div>
    </div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", ()=>{
  const h=document.getElementById("site-header"); if(h) h.innerHTML=headerHTML();
  const f=document.getElementById("site-footer"); if(f) f.innerHTML=footerHTML();
  const file=(location.pathname.split('/').pop() || 'index.html');
  const slug=file.replace(/\.html$/,'');
  document.querySelectorAll('.navbar a').forEach(a=>{
    const href=(a.getAttribute('href')||'').replace(/^\.\//,'').replace(/\.html$/,'').replace(/\/+$/,'');
    if((slug==='index' && (href==='' || href==='index')) || (slug!=='index' && href===slug)) a.classList.add('active');
  });

  if(!location.pathname.toLowerCase().endsWith('/rules.html') && !location.pathname.toLowerCase().endsWith('rules.html')){
    const revealTargets=document.querySelectorAll('main section > .container, .page-hero .container > *, .card, .table-responsive, .route-frame, .elevation, .accordion-item, .legal-copy > *, .feature-link');
    revealTargets.forEach((el,i)=>{el.classList.add('reveal'); el.style.transitionDelay=((i%5)*55)+'ms';});
    if('IntersectionObserver' in window){
      const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}}),{threshold:.1,rootMargin:'0px 0px -40px 0px'});
      revealTargets.forEach(el=>obs.observe(el));
    }else{revealTargets.forEach(el=>el.classList.add('is-visible'));}
  }

  const faqSearch=document.getElementById('faqSearch');
  if(faqSearch){
    const items=[...document.querySelectorAll('#faqAccordion .accordion-item')];
    const empty=document.getElementById('faqEmpty');
    faqSearch.addEventListener('input',()=>{
      const q=faqSearch.value.trim().toLowerCase(); let visible=0;
      items.forEach(item=>{const show=!q || item.textContent.toLowerCase().includes(q); item.style.display=show?'':'none'; if(show) visible++;});
      if(empty) empty.style.display=visible?'none':'block';
    });
  }
});
