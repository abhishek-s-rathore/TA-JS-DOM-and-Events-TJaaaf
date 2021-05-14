const game = document.getElementById("game");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");

game.appendChild(grid);

let gridArray = cardsArray.concat(cardsArray);

gridArray.sort(() => Math.random()- 0.5) ;

gridArray.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card", "flex", "justify-center", "align-center");
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.image})`;

card.addEventListener("click", handleClick);

  grid.appendChild(card);


});

function handleClick(event){
  
event.target.classList.add("selected");

};
