import React, { createContext, useContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext({
  todoList: [],
  addTodo: (todo) => {},
  clearCompletedTodo: () => {},
  toggleTodo: (id) => {},
});


export const useTodoContext = () =>{
    return useContext(TodoContext);
}

export default function TodoProvider(props) {

  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
        setTodos((prevTodoList) => [
          ...prevTodoList,
          { id: uuidv4(), title: todo, completed: false },
        ]);
      };

      const toggleTodoHandler = (id) => {
        const newtodos = [...todos];
        const todo = newtodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newtodos);
      };

      const clearCompletedTodoHandler = () => {
        const notcompleted = todos.filter(
          (todo) => todo.completed === false
        );
        setTodos(notcompleted);
      };
    
    
    return (
      <TodoContext.Provider
        value={{
          todoList: todos,
          addTodo: addTodoHandler,
          clearCompletedTodo: clearCompletedTodoHandler,
          toggleTodo: toggleTodoHandler,
        }}
      >
        {props.children}
      </TodoContext.Provider>
    );
}
