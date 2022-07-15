import "./App.css";
import React, { useState, useRef } from "react";
import AppTodoList from "./components/AppTodoList";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  function handleAddTodo() {
    const todo = inputRef.current.value;
    const newTodos = [...todos, { id: uuid(), name: todo, completed: false }];
    if (todo) setTodos(newTodos);
    inputRef.current.value = null;
  }

  function handleRemoveToDo() {}

  function toggleChecked(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  function handleRemoveCompletedTodos() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="container">
        <input
          placeholder="write a todo"
          ref={inputRef}
          type="text"
          name="input"
          className="input todo-input"
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          add task
        </button>
        <button
          className="btn btn-primary"
          onClick={handleRemoveCompletedTodos}
        >
          remove completed todo
        </button>
        <AppTodoList
          className="input todo-list"
          todos={todos}
          toggleChecked={toggleChecked}
        />
      </div>
    </>
  );
}

export default App;
