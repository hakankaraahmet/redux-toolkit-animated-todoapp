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
      className="border-2 border-[#881bb3] rounded-lg bg-gradient-to-r from-[#ecc2f2] via-[#e9aaf2] to-[#e890f5] special-anim"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef.current}
        defaultValue={todo?.item}
        rows={5}
        className="w-full p-2 capitalize bg-transparent rounded-lg outline-none resize-none text-[#49045c] font-bold"
        onKeyPress={(e) => handleUpdate(todo?.id, inputRef.current.value, e)}
      />
      <div className="flex items-center justify-between">
        <div className="text-[#49045c] font-bold">
          <span className="pl-2">{todo?.date}</span>
          <span className="pl-4">{todo?.hour}</span>
        </div>
        <div className="flex justify-end py-4">
          <button className="pr-6" onClick={() => handleFocus()}>
            <img src="/images/editTodo.svg" alt="edit" />
          </button>
          <button className="pr-6" onClick={() => handleComplete(todo?.id)}>
            <img src="/images/completeTodo.svg" alt="complete" />
          </button>
          <button className="pr-2" onClick={() => handleDelete(todo?.id)}>
            <img src="/images/deleteTodo.svg" alt="delete" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
