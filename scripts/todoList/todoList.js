// selector
const todoInput = document.querySelector(".inputForm");
const addButton = document.querySelector(".addBtn");
const listItem = document.querySelector(".listItem");
const filterList = document.querySelector(".filterList");

// function
const addTodo = (event) => {
    event.preventDefault();

    // get todo value
    const todoValue = todoInput.value;

    // add to dom
    const todoBox = document.createElement('li');
    todoBox.classList.add('item');
    const newTodo = `<span>${todoValue}</span>
    <div class="operationList">
        <span><i class="far fa-check-square"></i></span>
        <span><i class="fas fa-edit"></i></span>
        <span><i class="fas fa-trash-alt"></i></span>
    </div>`;
    todoBox.innerHTML = newTodo;

    // create new todo
    listItem.appendChild(todoBox);

    // reset input
    todoInput.value = "";

    // save local storage
    saveLocalStorage(todoValue);
};

const checkRemove = (event) => {
    const classList = [...event.target.classList];
    const item = event.target;

    if (classList[1] === "fa-check-square") {
        const todo = item.parentElement.parentElement.parentElement;
        todo.classList.toggle("completed")

    } else if (classList[1] === "fa-trash-alt") {
        const todo = item.parentElement.parentElement.parentElement;
        removeTodoLocalStorage(todo);
        todo.remove();
    } else {

    }
};

const filterTodo = (event) => {
    const todoList = [...listItem.childNodes];

    todoList.forEach((item) => {
        const classList = item.classList;

        switch (event.target.value) {
            case "all":
                item.style = "display:flex";
                break;
            case "completed":
                if (classList.contains("completed")) {
                    item.style = "display:flex";
                } else {
                    item.style = "display:none";
                }
                break;
            case "unCompleted":
                if (!classList.contains("completed")) {
                    item.style = "display:flex";
                } else {
                    item.style = "display:none";
                }
                break;
        }
    })
};

// local storage
const saveLocalStorage = (todo) => {
    let saveItem = localStorage.getItem("todo_list") ? JSON.parse(localStorage.getItem("todo_list")) : [];

    saveItem.push(todo);

    localStorage.setItem("todo_list", JSON.stringify(saveItem));
};

const getLocalStorage = (todo) => {
    let saveItem = localStorage.getItem("todo_list") ? JSON.parse(localStorage.getItem("todo_list")) : [];

    saveItem.forEach((item) => {
        const todoBox = document.createElement('li');
        todoBox.classList.add('item');
        const newTodo = `<span>${item}</span>
            <div class="operationList">
                <span><i class="far fa-check-square"></i></span>
                <span><i class="fas fa-edit"></i></span>
                <span><i class="fas fa-trash-alt"></i></span>
            </div>`;
        todoBox.innerHTML = newTodo;

        listItem.appendChild(todoBox);
    });
};

const removeTodoLocalStorage = (item) => {
    let saveItem = localStorage.getItem("todo_list") ? JSON.parse(localStorage.getItem("todo_list")) : [];

    const filterItems = saveItem.filter(todo => todo !== item.children[0].innerText);

    localStorage.setItem("todo_list", JSON.stringify(filterItems));
};

// event 
addButton.addEventListener("click", addTodo);
listItem.addEventListener("click", checkRemove);
filterList.addEventListener("click", filterTodo);
document.addEventListener('DOMContentLoaded', getLocalStorage);