import { useRef } from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  completeTodos,
  removeTodos,
  updateTodos,
} from "../../features/todoSlice";

const TodoItem = ({ todo }: { todo: any }) => {
  const inputRef = useRef<any>(true);
  const dispatch = useAppDispatch();

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

  const handleDelete = (id: number) => {
    alert("Are you sure you want to delete this item?");
    dispatch(removeTodos(id));
  };

  const handleComplete = (id: number) => {
    dispatch(completeTodos(id));
  };

  return (
    <li
      key={todo?.id}
      className="border-2 border-[#881bb3] rounded-lg bg-gradient-to-r from-[#ecc2f2] via-[#e9aaf2] to-[#e890f5]"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef.current}
        defaultValue={todo?.item}
        rows={5}
        className="outline-none w-full resize-none rounded-lg bg-transparent p-2"
        onKeyPress={(e) => handleUpdate(todo?.id, inputRef.current.value, e)}
      />
      <div className="flex justify-end py-4">
        <button className="pr-6" onClick={() => handleFocus()}><img src="/images/editTodo.svg" alt="edit"/></button>
        <button className="pr-6" onClick={() => handleComplete(todo?.id)}><img src="/images/completeTodo.svg" alt="complete"/></button>
        <button className="pr-2" onClick={() => handleDelete(todo?.id)}><img src="/images/deleteTodo.svg" alt="delete"/></button>
      </div>
    </li>
  );
};

export default TodoItem;
