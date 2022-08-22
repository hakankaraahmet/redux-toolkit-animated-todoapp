import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const { todoList } = useAppSelector((state) => state?.todos);
  const [sort, setSort] = useState("active");
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-full md:w-2/3 lg:w-1/3 py-4 flex justify-evenly">
        <button
          className={`${
            sort === "active"
              ? "from-[#eba2f5] via-[#df77ed] to-[#e77ff5] text-white"
              : "border-2 border-[#881bb3] text-[#881bb3]"
          }  bg-gradient-to-r hover:scale-125 ease-in-out duration-300  px-4 py-2  font-medium tracking-wider rounded-2xl`}
          onClick={() => setSort("active")}
        >
          Active
        </button>
        <button
          className={`${
            sort === "completed"
              ? "from-[#df40f5] via-[#dc2af5] to-[#870599] text-white"
              : "border-2 border-[#881bb3] text-[#881bb3]"
          }  bg-gradient-to-r hover:scale-125 ease-in-out duration-300  px-4 py-2  font-medium tracking-wider rounded-2xl`}
          onClick={() => setSort("completed")}
        >
          Completed
        </button>
        <button
          className={`${
            sort === "all"
              ? "from-[#870599] via-[#660e73] to-[#50025c] text-white"
              : "border-2 border-[#881bb3] text-[#881bb3]"
          }  bg-gradient-to-r hover:scale-125 ease-in-out duration-300  px-4 py-2  font-medium tracking-wider rounded-2xl`}
          onClick={() => setSort("all")}
        >
          All
        </button>
      </div>
      <ul className=" w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
