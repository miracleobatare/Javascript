const todoList = [{name: 'make dinner', dueDate: '23-05-2025'}];
renderTodoList();

function renderTodoList () {
    let todoListHTML = ''
    ;

    todoList.forEach((todoObject, index ) => {
        const {name, dueDate} = todoObject;

        const html = `
            <div>${name}</div>     
            <div>${dueDate}</div>
            
        <button class="delete-todo js-delete-todo"
            >Delete</button>`;

        todoListHTML += html;
    })




    /*for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            
        <button onclick="todoList.splice(${i}, 1);
            renderTodoList()" class="delete-todo"
            >Delete</button>`;

        todoListHTML += html;
    }*/


    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
    document.querySelectorAll('.js-delete-todo')
        .forEach((deleteButton, index)=> {
            deleteButton.addEventListener('click', (e) => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo')
    .addEventListener('click', ()=> {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due');
    const dueDate = inputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name, dueDate
    });

    inputElement.value = '';
    renderTodoList();
}