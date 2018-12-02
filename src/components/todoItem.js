import React from "react";

export default ({todo})=>(
    <li className="todo-item">
        <input type="checkbox"/>
        <span>{todo.description}</span>
    </li>
)