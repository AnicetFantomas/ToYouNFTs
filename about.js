const menuBtn = document.querySelector('.about-nav-btn');
const closeBtn = document.querySelector('.close-button');
const menuBar = document.querySelector('.menu-bar');
const getBody = document.querySelector('body');

menuBar.style.display = 'none';

menuBtn.addEventListener('click', () => {
  menuBar.style.display = 'block';
  getBody.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  menuBar.style.display = 'none';
  getBody.style.overflow = 'scroll';
});
