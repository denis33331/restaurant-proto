let current = 0;
const images = document.querySelectorAll('.hero-img');

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 60000); // 60 seconds

