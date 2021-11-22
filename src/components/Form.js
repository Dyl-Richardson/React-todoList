import React, { useRef } from 'react';

export default function Form({setTodo}) {
    const inputRef = useRef();

    function clickHandler() {
      const inputElement = inputRef.current.value;

      if(inputElement === '') return
      setTodo(prevTodo => {
        return [...prevTodo, inputElement]
      })

      inputRef.current.value = null
    }

    return (
      <div className="form">
        <input ref={inputRef} type="text" placeholder="Write a new todo" className="todoInput" />
        <button onClick={clickHandler} className="add">Add todo</button>
      </div>
    );
}

