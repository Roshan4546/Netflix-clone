// Step 1: Get elements
const loginBtn = document.querySelector(".login-btn");
const wrapper = document.querySelector(".wrapper");
const iconClose = document.querySelector(".icon-close");

const loginForm = document.querySelector(".form-box.login");
const registerForm = document.querySelector(".form-box.register");

const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

// Step 2: Show login modal
loginBtn.addEventListener("click", () => {
  wrapper.style.display = "flex";
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

// Step 3: Close modal
iconClose.addEventListener("click", () => {
  wrapper.style.display = "none";
  loginForm.classList.remove("active");
  registerForm.classList.remove("active");
});

// Step 4: Go to register form
registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

// Step 5: Go to login form
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});
