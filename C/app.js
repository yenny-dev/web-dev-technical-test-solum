// Valid credentials
const validUsers = {
  "test@example.com": "Test123!",
  "user2@example.com": "test123!A",
};

// Theme toggle
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// Elements
const loginForm = document.getElementById("loginForm");
const successView = document.getElementById("successView");
const welcomeText = document.getElementById("welcomeText");
const logoutBtn = document.getElementById("logoutBtn");

// Errors
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Password toggle elements
const pwInput = document.getElementById("password");
const pwToggle = document.getElementById("pwToggle");

// Toggle password visibility
pwToggle.addEventListener("click", () => {
  const isHidden = pwInput.type === "password";
  pwInput.type = isHidden ? "text" : "password";
  pwToggle.src = isHidden ? "./assets/show.png" : "./assets/hide.png";
});

// Validation helpers
function isValidPassword(pw) {
  const length = pw.length >= 8 && pw.length <= 16;
  const upper = /[A-Z]/.test(pw);
  const lower = /[a-z]/.test(pw);
  const number = /[0-9]/.test(pw);
  const symbol = /[^A-Za-z0-9]/.test(pw);

  return length && upper && lower && number && symbol;
}

// Submit handler
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email) {
    emailError.textContent = "Email is required";
    return;
  }
  if (!validUsers[email]) {
    emailError.textContent = "Email not found";
    return;
  }

  if (!isValidPassword(password)) {
    passwordError.textContent = "Invalid password format";
    return;
  }

  if (validUsers[email] !== password) {
    passwordError.textContent = "Incorrect password";
    return;
  }

  // Success
  loginForm.classList.add("hidden");
  successView.classList.remove("hidden");
  welcomeText.textContent = `Welcome, ${email}!`;
});

// Logout
logoutBtn.addEventListener("click", () => {
  successView.classList.add("hidden");
  loginForm.classList.remove("hidden");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
