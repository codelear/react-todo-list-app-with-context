import { useState } from "react";
import "./App.css";
import { useTodoContext } from "./TodoContext";
import TodoList from "./TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const todoContext = useTodoContext();

  const inputTodoHandler = (event) => {
    setTodoInput(event.target.value);
  };

  const submitTodoHandler = () => {
    todoContext.addTodo(todoInput);
    setTodoInput("");
  };

  const clearTodoHandler = () => {
    todoContext.clearCompletedTodo();
  };

  return (
    <>
      <div className="container">
        <div className="todoinput">
          <input
            type="text"
            onChange={inputTodoHandler}
            value={todoInput}
          ></input>
        </div>
        <div className="submittodo">
          <button onClick={submitTodoHandler}>Add Todo</button>
        </div>
        <div className="cleartodo">
          <button onClick={clearTodoHandler}>Clear Completed</button>
        </div>
      </div>
      <div className="todolist">
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;
