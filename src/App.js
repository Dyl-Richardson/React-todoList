import './css/App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

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

  return (
    <>
    <header>
      <h1>TodoList</h1>
      <br/>
      <Form setTodo={setTodo} />
    </header>
    <hr/>
    <main>
      <h2>Todo :</h2>
      <ul>
        <TodoList todo={todo} />
      </ul>
    </main>
    </>
  );
}

export default App;
