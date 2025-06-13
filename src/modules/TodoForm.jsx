import React, { useRef } from "react";

const TodoForm = ({ todos, setTodos }) => {
  function handleAddTodo(e) {
    e.preventDefault();
    let todo = {
      id: todos[todos.length - 1]?.id ? todos[todos.length - 1]?.id + 1 : 1,
      value: e.target.todoValue.value,
      isComplated: false,
    };
    setTodos([...todos, todo]);
    e.target.reset();
    
  }
  return (
    <form
      onSubmit={handleAddTodo}
      autoComplete="off"
      className="w-[500px] p-5 flex items-center justify-between rounded-md bg-white mx-auto mt-10"
    >
      <input
        required
        className="w-[79%] py-3 pl-5 rounded-[2px] border-slate-500"
        placeholder="Enter todo..."
        name="todoValue"
      />
      <button
        className="w-[19%] py-[13px] font-bold text-5 bg-blue-700 text-white rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
