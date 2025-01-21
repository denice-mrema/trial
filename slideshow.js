let slideIndex = 0;

// Initialize slideshow
function initSlideshow() {
  const slides = document.querySelectorAll("#slideshow img");
  const captions = [
    "HIV prevalence among adults age 15 and older-2016-17",
    "Viral load suppression",
    "Slide 3"
  ];

  slides.forEach((slide, index) => {
    slide.style.display = "none"; // Hide all slides initially
    slide.setAttribute("data-caption", captions[index]); // Set captions
  });

  slides[slideIndex].style.display = "block"; // Show first slide
  createCaption(slides[slideIndex].getAttribute("data-caption"));

  setInterval(() => {
    changeSlide(1);
  }, 5000); // Change every 5 seconds
}

// Change slide function
function changeSlide(step) {
  const slides = document.querySelectorAll("#slideshow img");
  slides[slideIndex].style.display = "none"; // Hide current slide

  // Update slide index
  slideIndex = (slideIndex + step + slides.length) % slides.length;

  slides[slideIndex].style.display = "block"; // Show new slide
  updateCaption(slides[slideIndex].getAttribute("data-caption"));
}

// Create caption
function createCaption(text) {
  const slideshow = document.querySelector("#slideshow");
  const caption = document.createElement("div");
  caption.id = "caption";
  caption.style.position = "absolute";
  caption.style.bottom = "10px";
  caption.style.background = "rgba(0, 0, 0, 0.5)";
  caption.style.color = "white";
  caption.style.padding = "10px";
  caption.style.borderRadius = "5px";
  caption.style.textAlign = "center";
  caption.style.width = "100%";
  caption.innerText = text;

  slideshow.appendChild(caption);
}

// Update caption text
function updateCaption(text) {
  const caption = document.querySelector("#caption");
  if (caption) {
    caption.innerText = text;
  }
}

// Run slideshow on page load
document.addEventListener("DOMContentLoaded", initSlideshow);


  // Function to toggle the menu on small screens
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }



// Show the button after scrolling down 200px
window.onscroll = function() {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Scroll back to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
