//added export keyword
export function afterSignIn() {
  const email = document.getElementById("form3Example3c").value;
  const password = document.getElementById("form3Example4c").value;

  if (email && password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "Person.html";
  } else {
    alert("Please enter both email and password.");
  }
}

// Update navbar only on Person.html
//added export keyword
export function updateNavbarForUser() {
  //checking if the user is loggedin, to get the key then the navbar will be updated
  const user = localStorage.getItem("isLoggedIn");
  if (!user) return;
  const feature = document.getElementById("nav-feature");
  const subscription = document.getElementById("nav-subscription");
  const signin = document.getElementById("nav-signin");
  const signup = document.getElementById("nav-signup");

  if (feature) {
    feature.textContent = "Messages";
    feature.href = "messages.html";
  }

  if (subscription) {
    subscription.textContent = "Friends";
    subscription.href = "friends.html";
  }

  if (signin) {
    signin.textContent = "Profile";
    signin.href = "profile.html";
  }

  if (signup) {
    signup.textContent = "Settings";
    signup.href = "settings.html";
  }
}
