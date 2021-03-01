const body = document.querySelector('body');
const slide1Preview = document.querySelector('.slide1-pr');
const slide2Preview = document.querySelector('.slide2-pr');

const changeSlide = () => {
  body.classList.toggle('scrolled');
  slide1Preview.classList.toggle('active');
  slide2Preview.classList.toggle('active');
}

slide1Preview.addEventListener('click', (evt) => {
  evt.preventDefault();
  changeSlide();
})

slide2Preview.addEventListener('click', (evt) => {
  evt.preventDefault();
  changeSlide();
})

window.addEventListener('scroll', (evt) => {
  changeSlide();
})