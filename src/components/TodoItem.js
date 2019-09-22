import React from 'react';

const TodoItem = props => {
    const todo = props.todo;

    return (
        <div className={todo.completed ? 'todo completed' : 'todo'}>
            <p>{todo.item}</p>
        </div>
    )
}

export default TodoItem;