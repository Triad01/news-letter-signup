"use strict";
const form = document.querySelector(".section__form");
const emailInput = document.querySelector(".email__input");
const validationText = document.querySelector(".validation__text");

// validating upon form submission=======
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validEmail = emailInput.value.includes("@") && emailInput.value !== 0;
  if (validEmail) {
    window.location.href = "/success.html";
  } else {
    emailInput.classList.add("invalid");
    validationText.style.display = "block";
  }
});

//validating upon input change and possibly input blur
