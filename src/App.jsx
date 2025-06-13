import "./App.css";
import TodoForm from "./modules/TodoForm";
import TodoList from "./modules/TodoList";
import React, { useState } from "react";
function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  localStorage.setItem("todos",JSON.stringify(todos))
  return (
    <>
      <TodoForm setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
