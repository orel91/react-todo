const React = require("react");
const moment = require("moment");

const Todo = React.createClass({
    render: function() {
        const {completed, id, text, createdAt, completedAt} = this.props;
        const todoClassName = completed ? "todo todo-completed" : "todo";
        const renderDate = () => {
            let message = "Created";
            let timeStamp = createdAt;

            if(completed){
                message = "Completed";
                timeStamp = completedAt;
            }

            return `${message} ${moment.unix(timeStamp).format("MMM Do YYYY @ h:mm a")}`;
        };

        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={completed} />
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;