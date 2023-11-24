 
 function fntExecuteSlider(side){
     const parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for (var i=0; i<elements.length;i++) {
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }

     if (side == 'prev' || side == 'next') {
 
         if (side == 'prev') {
             nextElement = (curElement == 0) ? elements.length -1 : curElement -1;
         } else {
             nextElement = (curElement == elements.length -1) ? 0 : curElement +1;
         }
     } else {
         nextElement = side;
         side = (curElement > nextElement) ? 'prev' : 'next';
 
     }
     // Resalta els punts
     let elementSel = document.getElementsByClassName('listslider')[0].getElementsByTagName('a');
     elementSel[curElement].classList.remove('item-select-slid');
     elementSel[nextElement].classList.add('item-select-slid');
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }
 
 async function runSlider() {
    setInterval(fntExecuteSlider, 5000, "next");
 }

 //------------------------------ LIST SLIDER -------------------------
 if (document.querySelector('.listslider')) {
    let links = document.querySelectorAll('.listslider li a');
    links.forEach( link => {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split('_');
          fntExecuteSlider(arrItem[1]);
          return false;
       });
     });
 }

 if (document.getElementById('next')) {
    let next = document.getElementById('next');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        fntExecuteSlider('next');
        return false;
    });
 }

 if (document.getElementById('prev')) {
    let next = document.getElementById('prev');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        fntExecuteSlider('prev');
        return false;
    });
 }

 if (document.querySelector('#container-slider')){
    runSlider();
 }
  
