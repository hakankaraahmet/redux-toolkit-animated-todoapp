import { createSlice } from "@reduxjs/toolkit";

type TodoProps = {
  todoList: { id: number; item: string; completed: boolean }[];
};

const initialState: TodoProps = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todoList.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
      return state;
    },
  },
});

export const { addTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
