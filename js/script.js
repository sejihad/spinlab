// Select the navigation bar
const nav = document.querySelector(".nav");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");
// Add a scroll event listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    // Check if the page is scrolled
    nav.classList.add("scrolled"); // Add the 'scrolled' class
  } else {
    nav.classList.remove("scrolled"); // Remove the 'scrolled' class
  }
});
mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.style.display = "none";

  mobileMenuClose.style.display = "block";
  mobileMenu.style.right = "0px";
});
mobileMenuClose.addEventListener("click", () => {
  mobileMenuClose.style.display = "none";
  mobileMenuBtn.style.display = "block";
  mobileMenu.style.right = "-100%";
});

// Select all anchor links in the navigation menu
const menuLinks = document.querySelectorAll(".menu li a");

// Add click event to each link
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Get the target section's ID
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    // Get the position of the section and apply offset
    const offset = 60; // Adjust offset value as needed
    const targetPosition = targetElement.offsetTop - offset;

    // Scroll to the section with offset
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
