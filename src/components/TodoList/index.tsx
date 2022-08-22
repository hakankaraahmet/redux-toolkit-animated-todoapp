import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const { todoList } = useAppSelector((state) => state?.todos);
  const [sort, setSort] = useState("active");
  return (
    <div>
      <div>
        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>All</button>
      </div>
      <ul>
        {todoList.length > 0 && sort === "active"
          ? todoList.map((todo) => {
              return todo.completed === false && <TodoItem todo={todo} />;
            })
          : null}
            {todoList.length > 0 && sort === "completed"
          ? todoList.map((todo) => {
              return todo.completed === true && <TodoItem todo={todo} />;
            })
          : null}
            {todoList.length > 0 && sort === "all"
          ? todoList.map((todo) => {
              return <TodoItem todo={todo} />;
            })
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
