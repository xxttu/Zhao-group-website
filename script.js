document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger"); // Select the button
  const navMenu = document.querySelector("nav"); // Select the menu

  // Debugging: Check if elements are found
  if (!hamburger) {
    console.error("Error: Hamburger button not found!");
  }
  if (!navMenu) {
    console.error("Error: Navigation menu not found!");
  }

  // Ensure both elements exist before adding the event listener
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      console.log("Hamburger clicked!"); // Log click event
      navMenu.classList.toggle("open"); // Toggle menu visibility
      console.log("Nav class list:", navMenu.classList); // Check applied classes
    });
  }
});

//Dynamic figure
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change every 5 seconds
}

// Manual navigation
function changeSlide(n) {
  let slides = document.getElementsByClassName("slide");
  slideIndex += n;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Start slideshow
document.addEventListener("DOMContentLoaded", showSlides);
