console.log(" main.js loaded");

import { updateNavbarForUser, afterSignIn } from "./navUpdate";

//Javascript to load navbar and footer
//load navbar
async function loadPages() {
  await fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
      //checking if the navbar is a function
      if (typeof updateNavbarForUser === "function") {
        updateNavbarForUser();
      }
    });

  //load footer
  await fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}
loadPages();
//calling afersignin globally
window.afterSignIn = afterSignIn; // any window on any page can access this function
//We can also add an event listener in case we have a specific function we want to execute
//document.getElementById("auth").addEventListener("click, afterSignIn"); //it executes the function when the button is clicked
