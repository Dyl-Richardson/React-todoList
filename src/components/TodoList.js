import React, { useRef } from 'react'
import Todos from './Todos'

export default function TodoList({todo, deleteTodo}) {
    
    return (
        todo.map(todo => {
            return (
                <Todos todo={todo} deleteTodo={deleteTodo}/>
            )
        })
    )
}