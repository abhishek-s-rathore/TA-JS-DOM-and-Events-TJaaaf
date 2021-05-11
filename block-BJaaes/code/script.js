let form = document.querySelector("form");

let inputError = {};

function updateError(elemName) {
  form.elements[elemName].nextElementSibling.innerText = inputError[elemName];
  form.elements[elemName].classList.add("error");
}

function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.elements.name;
  let username = event.target.elements.username;
  let email = event.target.elements.email;
  let phone = event.target.elements.phone;
  let password = event.target.elements.password;
  let confirm = event.target.elements.confirm;

  //   Validation for name
  if (name.value.split("").some((e) => Number(e))) {
    inputError.name = "Name can not contain number.";
    updateError("name");
  } else if (name.value === "") {
    inputError.name = "Name can not be empty.";
    updateError("name");
  } else {
    name.classList.remove("error");
    name.classList.add("success");
    inputError.name = "";
    updateError("name");
  }

  //   Validation for username
  if (username.value === "") {
    inputError.username = "Userame can not be empty.";
    updateError("username");
  } else if (username.value.length < 4) {
    inputError.username = "Username can not be less than four characters.";
    updateError("username");
  } else if (!username.value.split("").some((e) => Number(e))) {
    inputError.username = "Username must conatin a number.";
    updateError("username");
  } else {
    username.classList.remove("error");
    username.classList.add("success");
    inputError.username = "";
    updateError("username");
  }

  //   Validation for email
  if (email.value === "") {
    inputError.email = "Email can not be empty.";
    updateError("email");
  } else if (email.value.length < 6) {
    inputError.email = "Email can not be less than six characters.";
    updateError("email");
  } else if (!email.value.split("").some((e) => e === "@")) {
    inputError.email = "Email must contain @.";
    updateError("email");
  } else {
    email.classList.remove("error");
    email.classList.add("success");
    inputError.email = "";
    updateError("email");
  }

  //   Validation for phone number
  if (phone.value === "") {
    inputError.phone = "Phone Number can not be empty.";
    updateError("phone");
  } else if (phone.value.length < 10) {
    inputError.phone = "Phone number can not be less than ten characters.";
    updateError("phone");
  } else if (!phone.value.split("").every((e) => Number(e))) {
    inputError.phone = "Phone number can only contain numbers.";
    updateError("phone");
  } else {
    phone.classList.remove("error");
    phone.classList.add("success");
    inputError.phone = "";
    updateError("phone");
  }

  //   Validation for password
  if (password.value === "") {
    inputError.password = "Password can not be empty.";
  } else if (password.value.length < 8) {
    inputError.password = "Password can not be less than eight characters.";
    updateError("password");
  } else if (
    !password.value.split("").some((e) => Number(e)) ||
    !password.value.split("").some((e) => String(e))
  ) {
    inputError.passord =
      "Password must contain alphabets, numbers and special characters like @, #";
    updateError("password");
  } else if (
    !password.value.split("").includes("@") &&
    !password.value.split("").includes("#")
  ) {
    inputError.password =
      "Password must contain alphabets, numbers and special characters like @, #";
    updateError("password");
  } else {
    password.classList.remove("error");
    password.classList.add("success");
    inputError.password = "";
    updateError("password");
  }

  //   Validation for password confirmation
  if (password.value !== confirm.value) {
    inputError.confirm = "Password must be same as above.";
    updateError("confirm");
  } else {
    confirm.classList.remove("error");
    confirm.classList.add("success");
    inputError.confirm = "";
    updateError("confirm");
  }
}

form.addEventListener("submit", handleSubmit);
