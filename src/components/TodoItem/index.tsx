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
    dispatch(removeTodos(id));
  };

  const handleComplete = (id: number) => {
    dispatch(completeTodos(id));
  };

  return (
    <li key={todo?.id}>
      <textarea
        ref={inputRef}
        disabled={inputRef.current}
        defaultValue={todo?.item}
        onKeyPress={(e) => handleUpdate(todo?.id, inputRef.current.value, e)}
      />
      <button onClick={() => handleFocus()}>Edit</button>
      <button onClick={() => handleComplete(todo?.id)}>Complete</button>
      <button onClick={() => handleDelete(todo?.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
