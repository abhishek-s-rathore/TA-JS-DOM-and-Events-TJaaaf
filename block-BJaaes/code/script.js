let form = document.querySelector("form");

let inputError = "";

function handleSubmit(event) {
  event.preventDefault();

  let nameElem = event.target.elements.name;
  let usernameElem = event.target.elements.username;
  let emailElem = event.target.elements.email;
  let phoneElem = event.target.elements.phone;
  let passwordElem = event.target.elements.password;
  let confirmElem = event.target.elements.confirm;

  //   Validation for name
  if (nameElem.value.split("").some((e) => Number(e))) {
    inputError = "Name can not contain number.";
    nameElem.nextElementSibling.innerText = inputError;
  } else if (nameElem.value === "") {
    inputError = "Name can not be empty.";
    nameElem.nextElementSibling.innerText = inputError;
  }

  //   Validation for username
  if (usernameElem.value === "") {
    inputError = "Userame can not be empty.";
    usernameElem.nextElementSibling.innerText = inputError;
  } else if (usernameElem.value.length < 4) {
    inputError = "Username can not be less than four characters.";
    usernameElem.nextElementSibling.innerText = inputError;
  } else if (!usernameElem.value.split("").some((e) => Number(e))) {
    inputError = "Username must conatin a number.";
    usernameElem.nextElementSibling.innerText = inputError;
  }

  //   Validation for email
  if (emailElem.value === "") {
    inputError = "Email can not be empty.";
    emailElem.nextElementSibling.innerText = inputError;
  } else if (emailElem.value.length < 6) {
    inputError = "Email can not be less than six characters.";
    emailElem.nextElementSibling.innerText = inputError;
  } else if (!emailElem.value.split("").some((e) => e === "@")) {
    inputError = "Email must contain @.";
    emailElem.nextElementSibling.innerText = inputError;
  }

  //   Validation for phone number
  if (phoneElem.value === "") {
    inputError = "Phone Number can not be empty.";
    phoneElem.nextElementSibling.innerText = inputError;
  } else if (phoneElem.value.length < 10) {
    inputError = "Phone number can not be less than ten characters.";
    phoneElem.nextElementSibling.innerText = inputError;
  } else if (!phoneElem.value.split("").every((e) => Number(e))) {
    inputError = "Phone number can only contain numbers.";
    phoneElem.nextElementSibling.innerText = inputError;
  }

  //   Validation for password
  if (passwordElem.value === "") {
    inputError = "Password can not be empty.";
    passwordElem.nextElementSibling.innerText = inputError;
  } else if (passwordElem.value.length < 8) {
    inputError = "Password can not be less than eight characters.";
    passwordElem.nextElementSibling.innerText = inputError;
  } else if (
    !passwordElem.value.split("").some((e) => Number(e)) ||
    !passwordElem.value.split("").some((e) => String(e))
  ) {
    inputError =
      "Password must contain alphabets, numbers and special characters like @, #";
    passwordElem.nextElementSibling.innerText = inputError;
  } else if (
    !passwordElem.value.split("").includes("@") &&
    !passwordElem.value.split("").includes("#")
  ) {
    inputError =
      "Password must contain alphabets, numbers and special characters like @, #";
    passwordElem.nextElementSibling.innerText = inputError;
  }

  //   Validation for password confirmation
  if (passwordElem.value !== confirmElem.value) {
    inputError = "Password must be same as above.";
    confirmElem.nextElementSibling.innerText = inputError;
  }
}

form.addEventListener("submit", handleSubmit);
