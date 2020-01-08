var login = document.querySelector('.login');
var log = document.querySelector('.log');
var sign = document.querySelector('.sign');
var signup = document.querySelector('.signup');
var form = document.querySelector(".formContent");
var submit = document.querySelector("#submit");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var showPassword = document.querySelector("#show-password");

login.addEventListener("click", () => {
  sign.classList.remove("changeSignupA");
  sign.classList.add("changeSignupR");
  log.classList.add("changeLoginA");
  log.classList.remove("changeLoginR");
  form.style.height = "41vh";
  form.style.marginTop = "6rem";
  signup.style.borderBottom = "none";
  login.style.borderBottom = "1px solid #4286f4";
})

signup.addEventListener("click", () => {
  sign.classList.add("changeSignupA");
  log.classList.add("changeLoginR");
  log.classList.remove("changeLoginA");
  sign.classList.remove("changeSignupR");
  form.style.height = "70vh";
  form.style.marginTop = "0";
  login.style.borderBottom = "none";
  signup.style.borderBottom = "1px solid #4286f4";
})

showPassword.addEventListener("click", () => {
  if(password.type === "password" )
  {
    password.type = "text";
    confirmPassword.type = "text";
  }
  else{
    password.type = "password";
    confirmPassword.type = "password";
  }

})
