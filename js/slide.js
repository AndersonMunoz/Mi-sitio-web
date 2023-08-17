/* let leftArrow = document.getElementById("fleIzquierda");
let rightArrow = document.getElementById("fleDerecha");
let imagenPrin = document.getElementById("imagenPrin");
let wall1 = document.getElementById("pWall1");
let wall2 = document.getElementById("pWall2");
let wall3 = document.getElementById("pWall3");
let counter=0;
let numImg=["img/wall1.jpg","img/wall2.jpg","img/wall3.jpg"];

leftArrow.addEventListener("click",function(){
    if (counter>0) {
        counter--;
    } else {
        counter = numImg.length-1;
    }
    imagenPrin.setAttribute("src",numImg[counter]);   
    
    if (counter==0) {
        imagenPrin.setAttribute("src",numImg[counter]); 
        imagenPrin.classList.add("wall2-hidden-left");
        imagenPrin.classList.remove("wall3-hidden-left");

    } else if(counter==1) {
        imagenPrin.setAttribute("src",numImg[counter]); 
        imagenPrin.classList.add("wall3-hidden-left");
        imagenPrin.classList.remove("wall1-hidden-left");

    } else{
        imagenPrin.setAttribute("src",numImg[counter]); 
        imagenPrin.classList.add("wall1-hidden-left");
        imagenPrin.classList.remove("wall2-hidden-left");
        wall1.classList.add("wall1-superhidden")
    } 

})

rightArrow.addEventListener("click",function(){
    if (counter<2) {
        counter++;
     } else {
         counter =0;
     }
     imagenPrin.setAttribute("src",numImg[counter]);
 
     if (counter==0) {
        imagenPrin.setAttribute("src",numImg[counter]); 
        wall1.classList.add("wall1-hidden-left");
        wall2.classList.remove("wall2-hidden-left");
    } else if(counter==1) {
        imagenPrin.setAttribute("src",numImg[counter]); 
        wall2.classList.add("wall2-hidden-left");
        wall3.classList.remove("wall1-hidden-left");

    } else  {
        imagenPrin.setAttribute("src",numImg[counter]); 
        wall1.classList.add("wall2-hidden-left");
        wall3.classList.remove("wall2-hidden-left");
    } 
}) */

const leftArrow = document.querySelector('.fle-izquierda');
const rightArrow = document.querySelector('.fle-derecha');
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider-image');
const imageWidth = sliderImages[0].clientWidth;

let counter = 0;

leftArrow.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
  } else {
    counter = sliderImages.length - 1;
  }
  slider.style.transform = `translateX(${-counter * imageWidth}px)`;
});

rightArrow.addEventListener('click', () => {
  if (counter < sliderImages.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slider.style.transform = `translateX(${-counter * imageWidth}px)`;
});