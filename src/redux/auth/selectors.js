import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.authData.user;
export const selectUserName = state => state.authData.user.name;
export const selectIsLoggedIn = state => state.authData.isLoggedIn;
export const selectIsRefreshing = state => state.authData.isRefreshing;
export const selectStatus = state => state.authData.status;

export const selectStatusPending = createSelector([selectStatus], status => {
  return status === 'pending';
});
