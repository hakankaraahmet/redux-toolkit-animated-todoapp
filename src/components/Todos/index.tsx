import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodos } from "../../features/todoSlice";
import TodoList from "../TodoList";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    dispatch(
      addTodos({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      })
    );
    setTodo("");
  };

  return (
    <div className="">
      Todos
      <input type="text" onChange={(e) => handleChange(e)} value={todo} />
      <button onClick={handleAdd}>Add</button>
      <br />
      <TodoList />
    </div>
  );
};

export default Todos;
