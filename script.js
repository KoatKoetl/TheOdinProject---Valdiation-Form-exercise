const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

passwordConfirm.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirmation = passwordConfirm.value;

  if (password !== confirmation) {
    passwordConfirm.setCustomValidity("Password isn't match");
  } else {
    passwordConfirm.setCustomValidity("");
  }
}
