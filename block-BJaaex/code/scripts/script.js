let game = document.querySelector("#game");
let refreshBtn = document.querySelector("#refresh");

let grid = cards.concat(cards);

grid.sort(()=> Math.random()- 0.5);


function createUI(){

grid.forEach(elem =>{

  let card = document.createElement("div");
  card.setAttribute("class", "cards");
  card.style.marginBottom = ".35rem";
  card.style.backgroundImage = `url("${elem.image}")`
  game.append(card);

  setTimeout(() => {
    game.innerHTML = "";

    grid.forEach(elem =>{

      let card = document.createElement("div");
      card.setAttribute("class", "cards");
      card.style.marginBottom = ".25rem";
      card.style.backgroundImage = `url("${elem.image}")`;
      
      let cover = document.createElement("div");
      cover.setAttribute("class", "cover");
      cover.dataset.name = `${elem.name}`;
      card.append(cover);

      game.append(card);
    
//Action On Card

//Action On Card Ends
      });
    
  }, 5000);

});

};

createUI();
refreshBtn.addEventListener("click", createUI);

let name1, name2;

function handleClick2(event, name1){
  
  // console.log(event.target);
  event.target.remove();
  name2 =event.target.dataset.name;
  console.log(name1, name2);
}

function handleClick(event){
  
  // console.log(event.target);
  event.target.remove();
  name1 =event.target.dataset.name;
  game.addEventListener("click", handleClick2(name1));
 
}

game.addEventListener("click", handleClick);



