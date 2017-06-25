const React = require("react");

const TodoApp = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        const text = this.refs.todo.value;
        if(text.length > 0){
            this.refs.todo.value = "";
            this.props.onAddTodo(text);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="todo" placeholder="What do you need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = TodoApp;