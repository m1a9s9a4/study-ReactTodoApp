import React from 'react'

function TodoItem(propss) {
    const {title, body, ...props} = propss;
    const style = {
        "backgroundColor": "red",
    };

    return (
        <div className="todo_item" style={style} {...props}>
            <h3 className="todo_item-title">{title}</h3>
            <div className="todo_item-body">{body}</div>
        </div>
    )
}

export default TodoItem;

