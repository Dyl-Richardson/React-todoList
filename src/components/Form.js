import React, { useRef } from 'react';
import uuidv4 from 'uuid/dist/v4'

export default function Form({setTodo}) {
    const inputRef = useRef();

    function addTodo() {
      const inputElement = inputRef.current.value;

      if(inputElement === '') return
      setTodo(prevTodo => {
        return [...prevTodo, {name:inputElement, id: uuidv4(), complete:false}]
      })

      inputRef.current.value = null
    }

    function removeTodo() {
      
    }

    return (
      <div className="form">
        <input ref={inputRef} type="text" placeholder="Write a new todo" className="todoInput" />
        <button onClick={addTodo} className="add">Add todo</button>
        <button onClick={removeTodo} className="clear">Clear todo</button>
      </div>
    );
}

