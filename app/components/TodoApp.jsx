const React = require("react");
const uuid = require("node-uuid");

const TodoAPI = require("TodoApi");
const TodoList = require("TodoList");
const AddTodo = require("AddTodo");
const TodoSearch = require("TodoSearch");

const TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ""
        };
    },
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id)
                todo.completed = !todo.completed;
            return todo;
        });
        this.setState({todos: updatedTodos});
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        const {todos, showCompleted, searchText} = this.state;
        const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;