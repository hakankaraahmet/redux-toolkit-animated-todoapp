import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from "../features/todoSlice"

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
