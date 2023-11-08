import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
} from 'redux/todos/operations';
import { register, logIn, logOut, refreshUser } from 'redux/auth/operations';

const initialState = {
  isModalAddTodoOpen: false,
  isModalAvatarEditorOpen: false,
  modalTodoData: null,
  status: 'idle', // 'idle' | 'pending' | 'fulfilled' | 'rejected'
  isLoading: false,
  error: null,
};

const extraActions = [
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
  register,
  logIn,
  logOut,
  refreshUser,
];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.status = 'pending';
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = state => {
  state.status = 'fulfilled';
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.status = 'rejected';
  state.isLoading = false;
  state.error = payload;
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTodo(state) {
      state.isModalAddTodoOpen = true;
    },
    openModalEditTodo(state, { payload }) {
      state.isModalAddTodoOpen = true;
      state.modalTodoData = payload;
    },
    openModalEditAvatar(state) {
      state.isModalAvatarEditorOpen = true;
    },
    closeModalAddTodo(state) {
      state.isModalAddTodoOpen = false;
      state.modalTodoData = null;
    },
    closeModalEditAvatar(state) {
      state.isModalAvatarEditorOpen = false;
    },
    closeModal(state) {
      state.isModalAddTodoOpen = false;
      state.isModalAvatarEditorOpen = false;
      state.modalTodoData = null;
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const {
  openModalAddTodo,
  openModalEditTodo,
  openModalEditAvatar,
  closeModalAddTodo,
  closeModal,
  closeModalEditAvatar,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
