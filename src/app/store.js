// Importing the configureStore function from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";

// Importing the todoReducer from the 'todoSlice' file
import todoReducer from "../slices/todoSlice";

// Configuring the Redux store using configureStore
export const store = configureStore({
  // Defining the root reducer with the 'todo' slice
  reducer: {
    todo: todoReducer,
  },
});
