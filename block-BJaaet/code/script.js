let form = document.querySelector("form");
let movies = [];

function handleSubmit(event) {
  event.preventDefault();
  let movie = event.target.elements.movieInput.value;
  movies.push(movie);
  console.log(movies);

  let div = document.createElement("div");
  let checkbox = document.createElement("input");
  let para = document.createElement("p");
  let icon = document.createElement("i");
  checkbox.style.marginRight = "1rem";
  checkbox.setAttribute("type", "checkbox");
  para.innerText = movie;
  icon.style.color = "red";
  icon.style.marginLeft = "2.5rem";
  icon.classList.add("fas", "fa-times");
  div.append(checkbox, para, icon);
  div.classList.add("flex", "justify-start", "align-center");
  form.append(div);
}

form.addEventListener("submit", handleSubmit);
