import React, { useState } from 'react';

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState();

    const handleChange = e => {
        setNewTodo(e.target.value);
    }

    return (
        <form>
            <input name="todo-field" type="text" value={newTodo} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}

export default AddTodo;