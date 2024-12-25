const list = document.querySelector('.list');
const input = document.querySelector('input');
let userInputValue = '';

let todoList = [
    {
        id: 1,
        task: 'Front end',
    },
    {
        id: 2,
        task: 'second',
    },
    {
        id: 3,
        task: 'something',
    },
];

function onChangeInput(event) {
   userInputValue = event.target.value;
}

function addTodo() {
    if(!userInputValue){
        return;
    }
    const task = {
        id: todoList.length + 1,
        task: userInputValue
    }
    todoList.push(task)
    console.log(userInputValue);
    renderTodo()
    input.value = '';
    userInputValue = '';
}

function deleteTodo(id) {
    todoList = todoList.filter((todo) => {
        return todo.id !== id;
    });
    console.log(todoList)
    renderTodo()
}

function renderTodo() {
    list.innerHTML = todoList.map((todo) => {
        return (
        `<li class="name">
            ${todo.task}
            <button class="todo__delete" onclick=deleteTodo(${todo.id})>
            x
            </button>
        </li>
        `
    )}).join('')
}

renderTodo()