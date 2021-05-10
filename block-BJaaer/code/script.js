let form = document.querySelector("form");

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

  console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
