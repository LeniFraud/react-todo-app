import { createSelector } from '@reduxjs/toolkit';

export const selectModalAddTodoOpen = state =>
  state.globalData.isModalAddTodoOpen;
export const selectModalAvatarEditor = state =>
  state.globalData.isModalAvatarEditorOpen;
export const selectModalTodoData = state => state.globalData.modalTodoData;
export const selectStatus = state => state.globalData.status;
export const selectIsLoading = state => state.globalData.isLoading;
export const selectError = state => state.globalData.error;

export const selectStatusPending = createSelector([selectStatus], status => {
  return status === 'pending';
});
