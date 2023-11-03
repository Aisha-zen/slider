// SELECT THE IMAGE WRAPPER, IMAGES, LEFT ARROW AND RIGHT ARROW

const wrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const leftControl = document.querySelector('.left');
const rightControl = document.querySelector('.right');

let currentIndex = 0;
let autoSlideInterval; // Define the interval variable

function updateCarousel() {
  const translateX = currentIndex * -100;
  wrapper.style.transform = `translateX(${translateX}%)`;
}

// Function to change the slide to the next one in a loop
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

// Event listeners for left and right controls
leftControl.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

rightControl.addEventListener('click', () => {
  nextSlide();
});

// Function to automatically change the slide to the next one
function autoSlide() {
  nextSlide();
}

// Start the auto-slide interval (e.g., every 3 seconds)
autoSlideInterval = setInterval(autoSlide, 3000);

// Clear the auto-slide interval when the user interacts with the slider
wrapper.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
});

// Restart the auto-slide interval when the user stops interacting
wrapper.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
});
  
 
  
  

