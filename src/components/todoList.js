import React from "react"
import TodoItem from "./todoItem";

export default ({todos})=>(
    <ul className="todo-list">
        {todos.map((el,ind)=>
            <TodoItem todo={el} key={ind}/>
        )}
    </ul>
)