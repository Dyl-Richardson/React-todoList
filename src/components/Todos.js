import React from 'react'

export default function Todos({todo}) {
    return (
        <li key={todo.id}>
            <input type="checkbox" checked={todo.complete} />
            {todo.name}
        </li> 
    )
}
