import React, { useState, FC } from 'react';
import "./Todoitem.scss"

type TodoProps = {
    todo: string;
    onRemove: () => void;
};
export const Todoitem: FC<TodoProps> = ({ todo }) => {
    return (
        <div className="todoitems">
        <input type="text"/>
        <span>{todo}</span>
        
        </div>
    )
};