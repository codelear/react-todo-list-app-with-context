import React from "react";
import { useTodoContext } from "./TodoContext";

export default function Todo(props) {
  const todoContext = useTodoContext();

  const todo = todoContext.todoList.find((x) => x.id === props.id);
  const toggleCheckbox = () => {
    todoContext.toggleTodo(todo.id)
  };

  
  return (
    <div>
      <input type="checkbox" onClick={toggleCheckbox}></input>
      <label>{todo.title}</label>
    </div>
  );
}
