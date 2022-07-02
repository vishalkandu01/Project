// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);

// Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // iska matlab hum class add kar rahe hai div element ke andar
    // Create LI
    const newTodo = document.createElement("li");
    // newTodo.innerText = "hey";
    newTodo.innerText = todoInput.value; // todoInput.value ke through hum user se input le pa rahe honge. Ab jo bhi innerText hoga user daalega
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAR Todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;  // e.target se hume pata chal raha hoga ki hum kis button ke uppar click kar rahe hai
    // if(item.classList[0] === 'trash-btn') {
    if(item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        // removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        // todo.remove(); // it removes the div element which we were created
    }

    //CHECK MARK 
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch(e.target.value) {
//             case "all":
//                 todos.style.display = "flex";
//                 break;
//             case "completed":
//                 if(todo.classList.contains('completed')){
//                     todo.style.display = 'flex';
//                 }else{
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if(!todo.classList.contains('completed')){
//                     todo.style.display = 'flex';
//                 }else{
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }


function saveLocalTodos(todo) {
    //CHECK---HEY Do I already have thing in there?
    let todos;
    if(sessionStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(sessionStorage.getItem('todos'));
    }

    todos.push(todo);
    sessionStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    //CHECK---Hey Do I already have thing in there?
    let todos;
    if (sessionStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(sessionStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        // Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo"); // iska matlab hum class add kar rahe hai div element ke andar
        // Create LI
        const newTodo = document.createElement("li");
        // newTodo.innerText = "hey";
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //CHECK MARK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        //CHECK trash BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //APPEND TO LIST
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    //CHECK---HEY DO I already have thing in there?
    let todos;
    if (sessionStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos.JSON.parse(sessionStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    sessionStorage.setItem("todos", JSON.stringify(todos));
}