import React from 'react'

class TodoItem extends React.Component {
    render() {
        const {title, body, ...props} = this.props;
        return (
            <div className="todo_item" {...props}>
                <h3 className="todo_item-title">{title}</h3>
                <div className="todo_item-body">{body}</div>
            </div>
        )
    }
}

export default TodoItem;

