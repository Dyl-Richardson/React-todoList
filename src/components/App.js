import '../css/App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form';
import TodoList from './TodoList';

const LSKEY = "MyTodoApp";

function App() {
  const initialTodos = []
  const [todo, setTodo] = useState(initialTodos);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LSKEY))
    if (storage) setTodo(storage)
  }, [])

  useEffect(() => {
    localStorage.setItem(LSKEY, JSON.stringify(todo))
  }, [todo])

  function deleteTodo(id) {
    const newTodo = [...todo]
    const todos = newTodo.find(todos => todos.id === id)
    todos.complete = !todos.complete
    setTodo(newTodo)
  }

  return (
    <>
    <header>
      <h1>To-do list</h1>
      <br/>
      <Form todo={todo} setTodo={setTodo} deleteTodo={deleteTodo}/>
    </header>
    <hr/>
    <main>
      <h2>Todo :</h2>
      <ul>
        <TodoList todo={todo} deleteTodo={deleteTodo}/>
      </ul>
    </main>
    </>
  );
}

export default App;
