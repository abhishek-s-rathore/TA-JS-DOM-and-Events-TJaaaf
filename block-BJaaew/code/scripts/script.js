`<li class="card flex-30 flex flex-column justify-between align-center padding">
<div class="imgBox">
  <img src="" alt=".">
</div>
 <cite>Name</cite>
 <p>About</p>
 <button class="btn btn-secondary">Know More!</button>
</li>`;

let root = document.querySelector("ul");
let box = document.querySelector(".houses");

got.houses.forEach((house) => {
  house.people.forEach((person) => {
    let li = document.createElement("li");
    li.classList.add(
      "card",
      "flex-30",
      "flex",
      "flex-column",
      "justify-between",
      "align-center",
      "padding"
    );
    li.innerHTML = `
     <div class="imgBox">
       <img src="${person.image}" alt="An Image Here">
     </div>
      <cite>${person.name}</cite>
      <p>${person.description}</p>
      <a href="${person.wikiLink}" class="btn btn-secondary">Know More!</a>
     `;

    root.append(li);
  });

  //Name Of Houses
  let button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.innerText = house.name;

  box.append(button);

  // Filter By Houses
});
