!function(){function e(e){let t,n;let l=document.getElementById("slider"),i=l.getElementsByTagName("li");for(var s=0;s<i.length;s++)if(!0==i[s].classList.contains("slider_activa")){t=s;break}"prev"==e||"next"==e?n="prev"==e?0==t?i.length-1:t-1:t==i.length-1?0:t+1:e=t>(n=e)?"prev":"next";// Resalta els punts
let r=document.getElementsByClassName("listslider")[0].getElementsByTagName("a");r[t].classList.remove("item-select-slid"),r[n].classList.add("item-select-slid"),i[t].classList.remove("slider_activa"),i[t].classList.add("slider_inactiva"),i[n].classList.add("slider_activa"),i[n].classList.remove("slider_inactiva");/*
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
     */}async function t(){setInterval(e,5e3,"next")}document.querySelector(".listslider")&&document.querySelectorAll(".listslider li a").forEach(t=>{t.addEventListener("click",function(t){return t.preventDefault(),e(this.getAttribute("itlist").split("_")[1]),!1})}),document.getElementById("next")&&document.getElementById("next").addEventListener("click",function(t){return t.preventDefault(),e("next"),!1}),document.getElementById("prev")&&document.getElementById("prev").addEventListener("click",function(t){return t.preventDefault(),e("prev"),!1}),document.querySelector("#container-slider")&&t()}();//# sourceMappingURL=index.3d8c5b47.js.map

//# sourceMappingURL=index.3d8c5b47.js.map
