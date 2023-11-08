// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fakePending } from 'utils/fakeRequests';
import {
  alertOnAddTodo,
  alertOnEditTodo,
  alertOnDeleteTodo,
} from 'utils/alerts';

// axios.defaults.baseURL = 'https://example-url';

export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    try {
      await fakePending();
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todoInfo, thunkAPI) => {
    try {
      await fakePending();
      alertOnAddTodo();
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
      alertOnEditTodo();
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
      alertOnDeleteTodo();
      return todoId;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
