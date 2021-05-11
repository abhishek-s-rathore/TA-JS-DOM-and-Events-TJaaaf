let form = document.querySelector("form");
let model = document.querySelector(".model");
let closeBtn = document.querySelector(".closeBtn");
let name = document.querySelector(".name");
let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.name = form.elements.text.value;
  userInfo.email = form.elements.email.value;
  userInfo.genre = form.elements.genre.value;
  userInfo.color = form.elements.color.value;
  userInfo.rating = form.elements.rating.value;
  userInfo.book = form.elements.drone.value;
  userInfo.terms = form.elements.terms.checked;

  name.innerText = `${userInfo.name}`;
  para1 = document.createElement("p");
  para1.innerText = `Email: ${userInfo.email}`;
  para2 = document.createElement("p");
  para2.innerText = `You Love: ${userInfo.genre}`;
  para3 = document.createElement("p");
  para3.innerText = `Color: ${userInfo.color}`;
  para4 = document.createElement("p");
  para4.innerText = `Rating: ${userInfo.rating}`;
  para5 = document.createElement("p");
  para5.innerText = `Book genre: ${userInfo.book}`;
  small = document.createElement("small");

  if (userInfo.terms === true) {
    small.innerText = `You agreed to Terms and Conditions.`;
  } else {
    small.innerText = `Please agree  to Terms and Conditions!`;
  }
  model.append(para1, para2, para3, para4, para5, small);
  form.style.display = "none";
  model.style.display = "inline-block";
  model.style.marginTop = "300px";
}

form.addEventListener("submit", handleSubmit);

function handleClick(event) {
  model.style.display = "none";
  form.style.display = "inline-block";
}

closeBtn.addEventListener("click", handleClick);
