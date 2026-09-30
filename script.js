
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if(menu && nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));}

const search = document.querySelector('#articleSearch');
if(search){
  search.addEventListener('input', e=>{
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('[data-article-card]').forEach(card=>{
      card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}
