const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  email.setCustomValidity("");

  if (!email.validity.valid) {
    return;
  }

  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});
