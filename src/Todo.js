import { useState } from "react";

export const Todo = () => {
    return (
        <div>
            <label htmlFor="#todoInput">Enter a todo</label>
            <input
                id='todoInput'
                placeholder='Add a todo ex: Walk the dog'
            />
        </div>
    )
}