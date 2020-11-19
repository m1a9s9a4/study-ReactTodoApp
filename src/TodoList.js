import React from 'react';
import TodoItem from './TodoItem';

function TodoList(todos) {
    console.log(todos);
    return (
        <div className="todo_list">
            {todos.map(todo => {
                <TodoItem title={todo.title} body={todo.body} />
            })}
        </div>
    )
}

export default TodoList;