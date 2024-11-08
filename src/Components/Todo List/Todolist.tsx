import React, { FC, useState } from 'react';
import { Todoitem } from '../Todo Item';


export const Todolist: FC = () => {
    const [todo, setTodo] = useState("");

    const onSubmit = () => {
        {
            alert(`Todo added: ${todo}`);
            setTodo(todo)
        }
    };

    return (
        <div className="todolist">
            <h2>Todo List</h2>
            <input 
                type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)} 
                placeholder="Enter a new todo"
            />
            <button onClick={onSubmit}>Add Todo</button>
            {todo}

            {/* Display the current todo */}
            
        </div>
    );
};