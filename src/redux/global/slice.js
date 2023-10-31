import { createSlice } from '@reduxjs/toolkit';
// import { isAnyOf } from '@reduxjs/toolkit';
// import {
//   fetchTransactions,
//   addTransaction,
//   deleteTransaction,
//   updateTransaction,
//   fetchCategories,
//   summaryTransactions,
// } from 'redux/transactions/operations';
// import {
//   registration,
//   logIn,
//   logOut,
//   fetchCurrentUser,
// } from 'redux/auth/authOperation';

const initialState = {
  isModalAddTodoOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  error: null,
  modalTodoData: null,
};

// const extraActions = [
//   fetchTransactions,
//   addTransaction,
//   deleteTransaction,
//   updateTransaction,
//   fetchCategories,
//   summaryTransactions,
//   registration,
//   logIn,
//   logOut,
//   fetchCurrentUser,
// ];

// const getActions = type => extraActions.map(action => action[type]);

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTodo(state) {
      state.isModalAddTodoOpen = true;
    },
    openModalEditTodo(state, action) {
      state.isModalAddTodoOpen = true;
      state.modalTodoData = action.payload;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalAddTodo(state) {
      state.isModalAddTodoOpen = false;
      state.modalTodoData = null;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    closeModal(state) {
      state.isModalAddTodoOpen = false;
      state.isModalLogoutOpen = false;
      state.modalTodoData = null;
    },
  },
  //   extraReducers: builder => {
  //     builder
  //       .addMatcher(isAnyOf(...getActions('pending')), handlePending)
  //       .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
  //       .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  //   },
});

export const {
  openModalAddTodo,
  openModalLogout,
  closeModalAddTodo,
  closeModalLogout,
  closeModal,
  openModalEditTodo,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
