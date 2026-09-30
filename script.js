// Vercel Web Analytics for this static HTML site.
window.va = window.va || function () {
  (window.vaq = window.vaq || []).push(arguments);
};

if (!document.querySelector('script[data-vercel-analytics]')) {
  const analyticsScript = document.createElement('script');
  analyticsScript.defer = true;
  analyticsScript.src = '/_vercel/insights/script.js';
  analyticsScript.dataset.vercelAnalytics = 'true';
  document.head.appendChild(analyticsScript);
}
const menu = document.querySelector('.menu');
// Vercel Speed Insights
window.si = window.si || function () {
  (window.siq = window.siq || []).push(arguments);
};

if (!document.querySelector('script[data-vercel-speed-insights]')) {
  const speedScript = document.createElement('script');
  speedScript.defer = true;
  speedScript.src = '/_vercel/speed-insights/script.js';
  speedScript.dataset.vercelSpeedInsights = 'true';
  document.head.appendChild(speedScript);
}
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu && nav){
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

const search = document.querySelector('#articleSearch');
if(search){
  search.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('[data-article-card]').forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}
