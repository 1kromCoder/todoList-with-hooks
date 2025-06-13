import React from "react";

const TodoItem = ({ item, todos, setTodos, index }) => {
  function handleDelete() {
    todos.splice(index, 1);
    setTodos([...todos]);
  }
  function handleEdit() {
    let newValue = prompt(item.value);
    item.value = newValue;
    setTodos([...todos]);
  }
  function handleClick() {
    item.isComplated = !item.isComplated;
    setTodos([...todos]);
  }
  return (
    <li
      className={`${
        item.isComplated
          ? "opacity-[50%] before:absolute before:w-[95%] before:h-[10px]"
          : ""
      } relative flex items-center justify-between`}
    >
      <div className="flex items-center gap-1">
        <strong className="text-[20px]">{index + 1}.</strong>
        <p className="font-bold text-[20px]">{item.value}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleEdit}
          className="p-2 rounded-md w-[100px] bg-yellow-600 text-white "
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="p-2 rounded-md w-[100px] bg-red-800 text-white "
        >
          Delete
        </button>
        <label>
          <input className="check-input hidden" type="checkbox" />
          <div
            onClick={handleClick}
            className="check-wrapper w-[20px] h-[20px] rounded-full border-[1px] border-slate-500"
          ></div>
        </label>
      </div>
    </li>
  );
};

export default TodoItem;
