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