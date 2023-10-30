import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todosData.todos.items;
export const selectIsLoading = state => state.todosData.todos.isLoading;
export const selectError = state => state.todosData.todos.error;
export const selectFilter = state => state.todosData.filter;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return todos?.filter(
      todo =>
        todo.name.toLowerCase().includes(normalizedFilter) ||
        todo.description.toLowerCase().includes(normalizedFilter)
    );
  }
);
