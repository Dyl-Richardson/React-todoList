import React from 'react'

export default function Todos({todo, deleteTodo}) {
    function todoClick() {
        deleteTodo(todo.id)
    }
    return (
        <li key={todo.id}>
            <input type="checkbox" checked={todo.complete} onChange={todoClick}/>
            {todo.name}
        </li> 
    )
}
