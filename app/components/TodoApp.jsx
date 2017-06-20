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
                    text: "Walk the cat"
                }, {
                    id: uuid(),
                    text: "Clean the soil"
                }, {
                    id: uuid(),
                    text: "Kiss the wife"
                }, {
                    id: uuid(),
                    text: "Pay the bills"
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
                    text
                }
            ]
        });
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;