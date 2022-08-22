import React, { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodos, removeTodos, updateTodos } from "../../features/todoSlice";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const { todoList } = useAppSelector((state) => state?.todos);
  const dispatch = useAppDispatch();
  const inputRef = useRef<any>(true);

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

  const handleDelete = (id: number) => {
    dispatch(removeTodos(id));
  };

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current?.focus();
  };

  const handleUpdate = (id: number, value: string, e: any) => {
    if (e.which === 13) {
      dispatch(updateTodos({ id, item: value }));
      inputRef.current.disabled = true;
    }
  };

  console.log("todoList", todoList);
  return (
    <div className="">
      Todos
      <input type="text" onChange={(e) => handleChange(e)} value={todo} />
      <button onClick={handleAdd}>Add</button>
      <br />
      <ul>
        {todoList.map((todo) => (
          <li key={todo?.id}>
            <textarea
              ref={inputRef}
              disabled={inputRef.current}
              defaultValue={todo?.item}
              onKeyPress={(e) =>
                handleUpdate(todo?.id, inputRef.current.value, e)
              }
            />
            <button onClick={() => handleFocus()}>Edit</button>
            <button onClick={() => handleDelete(todo?.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
