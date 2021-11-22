import React, { useRef } from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function TodoList({todo}) {
    const value = useRef()
    
    function removeTodo() {

    }
    
    return (
        todo.map(todo => {
            return (
            <li key={uuidv4()}>
                <input type="checkbox" className="checkbox" onClick={removeTodo}></input>
                {todo}
            </li>
            )
        })
    )
}