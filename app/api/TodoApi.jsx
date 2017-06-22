const $ = require("jQuery");

const setTodos = function(todos) {
    if($.isArray(todos)){
        localStorage.setItem("todos", JSON.stringify(todos));
        return todos;
    }
};

const getTodos = function() {
    const stringTodos = localStorage.getItem("todos");
    let todos = [];
    try {
        todos = JSON.parse(stringTodos);
    } catch(e) {

    }
    return $.isArray(todos) ? todos: [];
};

module.exports = {
    setTodos,
    getTodos
};