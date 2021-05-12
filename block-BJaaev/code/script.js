function main() {
  let input = document.querySelector("#text");
  let addTodo = document.querySelector("#addTodo");
  let root = document.querySelector("ul");

  let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

  function handleInput(event) {
    if (
      (event.keyCode === 13 || event.type === "click") &&
      input.value !== ""
    ) {
      let todo = {
        name: input.value,
        isCompleted: false,
      };
      allTodos.push(todo);
      input.value = "";

      createUI();
    }
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }

  function handleDelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);

    createUI();
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }

  function handleChange(event) {
    let id = event.target.dataset.id;
    allTodos[id].isCompleted = !allTodos[id].isCompleted;

    createUI();
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }

  function createUI() {
    root.innerHTML = "";

    allTodos.forEach((todo, index) => {
      let li = document.createElement("li");
      li.classList.add("flex", "justify-between", "align-center");
      let div = document.createElement("div");
      div.classList.add("flex", "justify-between", "align-center");
      let check = document.createElement("input");
      check.type = "checkbox";
      check.classList.add("check");
      check.checked = todo.isCompleted;
      check.setAttribute("data-id", index);
      let p = document.createElement("p");
      p.classList.add("para");
      p.innerText = todo.name;
      let cross = document.createElement("span");
      cross.classList.add("cross");
      cross.innerHTML = "&times;";
      cross.setAttribute("data-id", index);

      div.append(check, p);
      li.append(div, cross);

      root.append(li);

      check.addEventListener("change", handleChange);
      cross.addEventListener("click", handleDelete);
    });
  }

  input.addEventListener("keyup", handleInput);
  addTodo.addEventListener("click", handleInput);
}

main();
