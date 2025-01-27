const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // in case not dispatch errors
  if (email.validity.valid) {
    // remove the content of error
    emailError.textContent = "";
    emailError.classList = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // in case email field invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // if empty field
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // if it is not an email address
    emailError.textContent = "Entered value needs to be an email address";
  } else if (email.validity.tooShort) {
    // if the value is too short
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    // added active class
    emailError.classList = "error active";
  }
}
