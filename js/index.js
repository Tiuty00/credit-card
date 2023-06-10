"use strict";

// Global value

// Text on card
const textNumberCard = document.querySelector(".card-number");
const textNameCard = document.querySelector(".card-name");
const textMounth = document.querySelector(".mounth");
const textYear = document.querySelector(".year");
const textCvc = document.querySelector(".cvc-card");

// Inputs
const form = document.querySelector(".form-credit-card");
const inputs = document.querySelectorAll("input");
const errorMessages = document.querySelectorAll(".error-message");
const nameCard = document.getElementById("name");
const numberCard = document.getElementById("card-number-text");
const mounth = document.getElementById("mm");
const year = document.getElementById("yy");
const cvcCard = document.getElementById("cvc");
const button = document.getElementById("confirm");

// Complete section
const completeState = document.querySelector(".complete-state")
const finishButton = document.querySelector(".continue-btn");

// Invalid values for inputs
inputs.forEach((input) => {
  const errorMessageId = input.dataset.for;
  const errorMessage = document.querySelector(
    `p[data-for="${errorMessageId}"]`
  );
  const messageText = input.dataset.message;

  input.addEventListener("blur", () => {
    if (!input.validity.valid) {
      input.classList.add("invalid-input");
      errorMessage.textContent = messageText;
    } else {
      input.classList.remove("invalid-input");
      errorMessage.textContent = "";
    }
  });
});

// Functions

          // Global functions

// --- Accept only NUMBERS for Input (not name)---

const acceptOnlyNumbers = function (input) {
  // Remove all not number characters
  let value = input.value.replace(/\D/g, "");
  // Update input value
  input.value = value;
};

// --- Restore value on card images if input is empty---
const restoreValue = function (text, input) {
  const defaultValue = text.getAttribute("data-default");
  if (input.value === "") {
    text.textContent = defaultValue;
  }
};

            // single functions

// -- Changing name on credit card --
const changeName = function (text, input) {
  input.oninput = () => {
    input.value = input.value.toUpperCase();
    text.textContent = input.value.toUpperCase();
    restoreValue(text, input);
  };
};

// -- Changing number of credit card --
const changeNumber = function (text, input) {
  input.oninput = () => {
    // Remove all not number characters
    let value = input.value.replace(/\D/g, "");
    // Dived values on blocks of 4
    let groups = value.match(/(\d{1,4})/g);
    // Join group with space in the middle
    if (groups !== null) {
      value = groups.join(" ");
    }
    // Update input value
    input.value = value;
    // Update textcontet with value
    text.textContent = value;
    restoreValue(text, input);
  };
  
};

// -- Changin mounth on credit card & check if mounth is > 12 --
const changeDate = function (text, input) {
  input.oninput = () => {
    acceptOnlyNumbers(input);
    // Check if value is more 12
    if (input.value > 12) {
      // Invalid: reset input to 12
      input.value = "12";
    }
    text.textContent = input.value;
    restoreValue(text, input);
  };
}

// -- Changing textcontent on credit card --
const changeTextContent = function (text, input) {
  input.oninput = () => {
    acceptOnlyNumbers(input);
    text.textContent = input.value;
    restoreValue(text, input);
  };
};

          // -- Button function --
button.addEventListener("click", function (e) {
  // Check if form is completed correctly
  if (form.checkValidity()) {
    e.preventDefault();
    form.classList.add("invisible");
    completeState.classList.remove("invisible");
  }
});

finishButton.addEventListener("click", () => {
  window.location.reload();  // Reload page
});

// Calling functions
changeName(textNameCard, nameCard);
changeNumber(textNumberCard, numberCard);
changeDate(textMounth, mounth);
changeTextContent(textYear, year);
changeTextContent(textCvc, cvcCard);
