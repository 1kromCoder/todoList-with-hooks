import React from "react";
import TodoItem from "../components/TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="w-[500px] bg-white p-5 rounded-md mt-5 mx-auto space-y-3">
      {todos.map((item, index) => (
        <TodoItem
          key={item.id}
          index={index}
          todos={todos}
          setTodos={setTodos}
          item={item}
        />
      ))}
    </ul>
  );
};

export default TodoList;
