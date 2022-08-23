import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodos } from "../../features/todoSlice";
import TodoList from "../TodoList";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();
  const dateObj = new Date();
  const today =
    dateObj.getUTCDate() +
    "/" +
    dateObj.getUTCMonth() +
    "/" +
    dateObj.getUTCFullYear();
  const hour = dateObj.getHours() + ":" + dateObj.getMinutes();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    dispatch(
      addTodos({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
        date: today,
        hour: hour,
      })
    );
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <div className="py-4 w-full md:w-2/3  text-center tracking-wider text-2xl text-[#881bb3] flex-col lg:flex-row flex items-center justify-center">
        Hakan Karaahmetoglu{" "}
        <span className="p-2 font-bold lg:p-4"> Todo App</span>
      </div>
      <div className="flex justify-center w-full p-4 md:w-2/3 lg:w-1/3">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={todo}
          placeholder="Please add your task"
          className="outline-2 outline outline-[#881bb3] rounded p-2 w-full focus:outline-4 placeholder:text-[#881bb3]"
        />
        <button onClick={handleAdd} className="pl-8">
          <img src="/images/addTodo.svg" alt="add" />
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default Todos;
