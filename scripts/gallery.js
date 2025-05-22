function openGallery() {
  document.getElementById("galleryModal").style.display = "flex";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}


const images = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
  ];

  let index = 0;
  const heroSection = document.querySelector(".hero-section");

  function changeBackground() {
    heroSection.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  // Initial call
  changeBackground();
  // Change every 20 seconds
  setInterval(changeBackground, 20000);