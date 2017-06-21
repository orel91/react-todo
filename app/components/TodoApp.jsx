const React = require("react");
const uuid = require("node-uuid");

const TodoList = require("TodoList");
const AddTodo = require("AddTodo");
const TodoSearch = require("TodoSearch");

const TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: uuid(),
                    text: "Walk the cat",
                    completed: false
                }, {
                    id: uuid(),
                    text: "Clean the soil",
                    completed: true
                }, {
                    id: uuid(),
                    text: "Kiss the wife",
                    completed: true
                }, {
                    id: uuid(),
                    text: "Pay the bills",
                    completed: false
                }
            ],
            showCompleted: false,
            searchText: ""
        };
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
        const {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;