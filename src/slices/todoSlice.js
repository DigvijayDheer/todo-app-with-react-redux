// Importing createSlice function from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

// Function to get the initial todo list from local storage or set an empty array
const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");

  if (localTodoList) {
    return JSON.parse(localTodoList);
  }

  // Set initial todo list to an empty array in local storage
  window.localStorage.setItem("todoList", JSON.stringify([]));

  // Return the empty array
  return [];
};

// Initial value for the todo slice
const initialValue = {
  todoList: getInitialTodo(),
  filterStatus: "all",
};

// Creating a todoSlice using createSlice
export const todoSlice = createSlice({
  // Name of the slice
  name: "todo",

  // Initial state for the slice
  initialState: initialValue,

  // Reducers for updating state
  reducers: {
    // Reducer for adding a todo
    addTodo: (state, action) => {
      state.todoList.push(action.payload);

      // Updating local storage with the new todo
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },

    // Reducer for deleting a todo
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);

        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });

        // Update local storage and state with the modified todo list
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    // Reducer for updating a todo
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);

        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });

        // Update local storage and state with the modified todo list
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    // Reducer for updating the filter status
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

// Exporting action creators and the reducer
export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
