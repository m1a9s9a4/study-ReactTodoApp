import React from 'react'

function TodoItem({title, body}) {
    return (
        <div className="todo_item">
            <div className="todo_item-title">{title}</div>
            <div className="todo_item-body">{body}</div>
        </div>
    )
}

export default TodoItem;

