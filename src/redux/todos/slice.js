import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchTodos, addTodo, editTodo, deleteTodo } from './operations';

const handlePending = state => {
  state.todos.isLoading = true;
  state.todos.error = null;
};

const handleRejected = (state, action) => {
  state.todos.isLoading = false;
  state.todos.error = action.payload;
};

const initialState = {
  todos: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const todosSlice = createSlice({
  name: 'todos',

  initialState: initialState,

  reducers: {
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
    orderChange: (state, action) => {
      state.todos.items = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos.isLoading = false;
        // state.todos.items = action.payload;
      })
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.pending, handlePending)
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.isLoading = false;
        state.todos.items = [action.payload, ...state.todos.items];
      })
      .addCase(addTodo.rejected, handleRejected)
      .addCase(editTodo.pending, handlePending)
      .addCase(editTodo.fulfilled, (state, action) => {
        state.todos.isLoading = false;
        state.todos.items = state.todos.items.map(todo =>
          todo.id !== action.payload.id ? todo : action.payload
        );
      })
      .addCase(editTodo.rejected, handleRejected)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos.isLoading = false;
        state.todos.items = state.todos.items.filter(
          todo => todo.id !== action.payload
        );
      })
      .addCase(deleteTodo.rejected, handleRejected);
  },
});

const persistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

export const todosReducer = persistReducer(persistConfig, todosSlice.reducer);

export const { filterChange, orderChange } = todosSlice.actions;
