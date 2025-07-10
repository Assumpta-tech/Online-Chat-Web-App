console.log(" main.js loaded");

import { updateNavbarForUser, afterSignIn } from "./navUpdate.js";

//Javascript to load navbar and footer
//load navbar
async function loadPages() {
  await fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
      //checking if the navbar is a function
      if (
        typeof updateNavbarForUser === "function" &&
        window.location.pathname.includes("Person.html") &&
        localStorage.getItem("isLoggedIn") === "true"
      ) {
        updateNavbarForUser();
      }
    });

  // Load carousel
  await fetch("carousel.html")
    .then((response) => response.text())
    .then((data) => {
      const carouselDiv = document.getElementById("carousel");
      if (carouselDiv) {
        carouselDiv.innerHTML = data;
      }
    });

  //load footer
  await fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  const authButton = document.getElementById("auth");
  // Check if the button exists to avoid errors on other pages
  if (authButton) {
    authButton.addEventListener("click", afterSignIn); //it executes the function when the button is clicked
  }
}

// Wait for the entire page content (HTML) to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  loadPages(); // loads navbar, carousel, and footer
});
//calling afersignin globally
//window.afterSignIn = afterSignIn; // any window on any page can access this function
//We can also add an event listener in case we have a specific function we want to execute
