const slides = document.getElementsByClassName('wraper-item');
const totalSlides = slides.length;
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
let slidePositon = 0;

btnNext.addEventListener('click', moveNext);
btnPrev.addEventListener('click', movePrev);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('item-visible');
    slide.classList.add('item-hidden');
  }
}

function moveNext() {
  hideAllSlides();
  if (slidePositon === totalSlides - 1) {
    slidePositon = 0;
  } else {
    slidePositon++;
  }
  slides[slidePositon].classList.add('item-visible');
}

function movePrev() {
  hideAllSlides();
  if (slidePositon === 0) {
    slidePositon = totalSlides - 1;
  } else {
    slidePositon--;
  }
  slides[slidePositon].classList.add('item-visible');
}