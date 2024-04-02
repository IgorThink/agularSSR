import { createSelector } from '@ngrx/store';

import { IUserResponse } from '../../modules/shared-module/interfaces/IUserResponse';
import { ITodo } from '../../modules/shared-module/interfaces/ITodoResponse';

export interface AppState {
  user: IUserResponse;
  todo: ITodo[];
}

export const selectUser = (state: AppState) => {
  return state.user;
};
export const selectTodo = (state: AppState) => {
  return state.todo;
};
export const selectAllTodos = createSelector(
  selectUser,
  selectTodo,
  (selectedUser: IUserResponse, selectedTodo: ITodo[]) => {
    return selectedTodo || [];
  }
);
export const selectCurrentUser = createSelector(
  selectUser,
  selectTodo,
  (selectedUser: IUserResponse) => {
    if (selectedUser) {
      return selectedUser;
    } else {
      return null;
    }
  }
);
