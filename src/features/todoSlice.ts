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
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return state;
    },
    updateTodos: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodos: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
