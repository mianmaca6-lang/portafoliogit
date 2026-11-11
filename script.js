document.documentElement.classList.add("js");
document.addEventListener("DOMContentLoaded",()=>{
  if(window.lucide)window.lucide.createIcons();
  const header=document.querySelector(".site-header"),button=document.querySelector(".nav-toggle"),menu=document.querySelector(".nav-links");
  const links=[...document.querySelectorAll('.nav-links a[href^="#"]')];
  const close=()=>{menu?.classList.remove("is-open");button?.setAttribute("aria-expanded","false");button?.setAttribute("aria-label","Open navigation");if(button){button.innerHTML='<i data-lucide="menu" aria-hidden="true"></i>';if(window.lucide)window.lucide.createIcons();}};
  button?.addEventListener("click",()=>{const open=button.getAttribute("aria-expanded")==="true";if(open){close();return;}menu?.classList.add("is-open");button.setAttribute("aria-expanded","true");button.setAttribute("aria-label","Close navigation");button.innerHTML='<i data-lucide="x" aria-hidden="true"></i>';if(window.lucide)window.lucide.createIcons();});
  links.forEach(link=>link.addEventListener("click",close));document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
  const update=()=>header?.classList.toggle("is-scrolled",window.scrollY>12);update();window.addEventListener("scroll",update,{passive:true});
  const reveal=document.querySelectorAll(".reveal"),reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if("IntersectionObserver"in window&&!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});reveal.forEach(el=>observer.observe(el));}else reveal.forEach(el=>el.classList.add("is-visible"));
  if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(link=>{if(link.getAttribute("href")==="#"+entry.target.id)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});}),{rootMargin:"-35% 0px -55% 0px"});document.querySelectorAll("main section[id]").forEach(section=>observer.observe(section));}
  const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
});