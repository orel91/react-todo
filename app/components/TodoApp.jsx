const React = require("react");

const TodoList = require("TodoList");

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
    render: function() {
        const {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
});

module.exports = TodoApp;