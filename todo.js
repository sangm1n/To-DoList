const secondForm = document.querySelector(".js-secondForm"),
  todoInput = secondForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const BTN_CL = "btn";
const TODO_LIST = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODO_LIST, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = new Image();
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.src = "cross_icon.png";
  delBtn.classList.add(BTN_CL);
  delBtn.addEventListener("click", deleteToDo);

  span.innerText = text;
  li.style.marginBottom = "10px";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LIST);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);
  todoInput.value = "";
}

function init() {
  loadToDos();
  secondForm.addEventListener("submit", handleSubmit);
}

init();
