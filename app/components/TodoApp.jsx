const React = require("react");

const TodoList = require("TodoList");
const AddTodo = require("AddTodo");

const TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the cat"
                }, {
                    id: 2,
                    text: "Clean the soil"
                }, {
                    id: 3,
                    text: "Kiss the wife"
                }, {
                    id: 4,
                    text: "Pay the bills"
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert("new todo: " + text);
    },
    render: function() {
        const {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;