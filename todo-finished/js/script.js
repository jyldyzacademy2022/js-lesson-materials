const form = document.querySelector("#add-todo-form");

const todoList = document.querySelector("#todo-output");
const todoInput = document.querySelector("#input-todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoItem = document.createElement("div");
  todoItem.innerText = todoInput.value;
  todoItem.classList.add("todo-item");

  todoList.appendChild(todoItem);

  todoInput.value = "";

  todoItem.addEventListener("click", function () {
    todoItem.remove();
  });
});
