import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodos } from "../../features/todoSlice";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const { todoList } = useAppSelector((state) => state?.todos);
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
      setTodo("")
  }

  console.log("todoList", todoList);
  return (
    <div className="">
      Todos
      <input type="text" onChange={(e) => handleChange(e)} value={todo}/>
      <button
        onClick={handleAdd}
      >
        Add
      </button>
      <br/>
      <ul>
        {todoList.map((todo) => (
            <li key={todo?.id}>
                {todo?.item}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
