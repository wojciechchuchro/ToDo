import React from "react";
import "../App.css";

export default function AppTodo({ todo, toggleChecked }) {
  function handleChecked() {
    toggleChecked(todo.id);
  }

  return (
    <div>
      <label>
        <input
          className="todo-list"
          type="checkbox"
          onChange={handleChecked}
          checked={todo.completed}
        />
        {todo.name}
      </label>
    </div>
  );
}
