import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addTodo, editTodo, deleteTodo } from './operations';

const initialState = {
  todos: [],
  filter: '',
};

const todosSlice = createSlice({
  name: 'todos',

  initialState: initialState,

  reducers: {
    filterChange: (state, { payload }) => {
      state.filter = payload;
    },
    orderChange: (state, { payload }) => {
      state.todos = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.todos = [payload, ...state.todos];
      })
      .addCase(editTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.map(todo =>
          todo.id !== payload.id ? todo : payload
        );
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter(todo => todo.id !== payload);
      });
  },
});

const persistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

export const todosReducer = persistReducer(persistConfig, todosSlice.reducer);

export const { filterChange, orderChange } = todosSlice.actions;
