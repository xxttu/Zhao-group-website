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
