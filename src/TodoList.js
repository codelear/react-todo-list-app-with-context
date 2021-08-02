import React from "react";
import Todo from "./Todo";
import { useTodoContext } from "./TodoContext";

export default function TodoList(props) {
  const todoContext = useTodoContext();
  return (
    <>
      {todoContext.todoList.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
        ></Todo>
      ))}
    </>
  );
}
