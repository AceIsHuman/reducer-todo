import React, { useReducer } from 'react';
import { todoReducer, initialTodoState } from '../reducers/todoReducer';

import TodoItem from './TodoItem';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialTodoState);
    console.log(state);

    return (
        <div className="todo-list">
            {state.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList;