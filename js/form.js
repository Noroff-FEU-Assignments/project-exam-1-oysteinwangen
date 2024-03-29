const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector(".successmessage");

function validateForm(event) {
  event.preventDefault();
  let numberOfCorrect = "";
  if (checkLength(fullName.value, 5)) {
    fullNameError.style.display = "none";
    numberOfCorrect += "1";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    numberOfCorrect += "1";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 15)) {
    subjectError.style.display = "none";
    numberOfCorrect += "1";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25)) {
    messageError.style.display = "none";
    numberOfCorrect += "1";
  } else {
    messageError.style.display = "block";
  }

  console.log("hello");

  if (numberOfCorrect === "1111") {
    console.log(numberOfCorrect);
    successMessage.style.display = "block";
    form.style.display = "none";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(input, len) {
  if (input.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
