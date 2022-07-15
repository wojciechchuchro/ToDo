import React from "react";
import AppTodo from "./AppTodo";
export default function AppTodoList({ todos, toggleChecked }) {
  return todos.map((todo) => {
    return <AppTodo key={todo.id} todo={todo} toggleChecked={toggleChecked} />;
  });
}
