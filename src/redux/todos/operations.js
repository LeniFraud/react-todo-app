// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fakePending } from 'utils/fakeRequests';

// axios.defaults.baseURL = 'https://example-url';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const data = state.todosData.todos.items;
    // console.log(data);
    try {
      await fakePending();
      // return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const fetchTodos = createAsyncThunk(
//     'todos/fetchAll',
//     async (_, thunkAPI) => {
//       const shouldResolve = Math.random() > 0.3;
//       console.log(shouldResolve);
//       try {
//         await new Promise((resolve, reject) => {
//           setTimeout(() => {
//             if (shouldResolve) {
//               resolve(`✅ Success`);
//             }
//             reject(`❌ Error`);
//           }, 1500);
//         });
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todoInfo, thunkAPI) => {
    try {
      await fakePending();
      return todoInfo;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async (todoInfo, thunkAPI) => {
    try {
      await fakePending();
      return todoInfo;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (todoId, thunkAPI) => {
    try {
      await fakePending();
      return todoId;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
