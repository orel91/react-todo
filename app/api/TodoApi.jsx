const $ = require("jQuery");

const setTodos = function (todos) {
    if ($.isArray(todos)) {
        localStorage.setItem("todos", JSON.stringify(todos));
        return todos;
    }
};

const getTodos = function () {
    const stringTodos = localStorage.getItem("todos");
    let todos = [];
    try {
        todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
};

const filterTodos = (todos, showCompleted, searchText) => {
    let filteredTodos = todos.filter(todo => {
        return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter(todo => {
        const text = todo.text.toLowerCase();
        return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
    });

    filteredTodos.sort((a, b) => {
        if(!a.completed && b.completed){
            return -1;
        }
        if(a.completed && !b.completed){
            return 1;
        }
        return 0;
    });

    return filteredTodos;
}

module.exports = {
    setTodos,
    getTodos,
    filterTodos
};