import { createReducer, on } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { ITodo } from '../../modules/shared-module/interfaces/ITodoResponse';

export const initialState: ITodo[] | null = null  

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.getAll, (state: ITodo[] | null, action: any) => {
    const newValue = action.actionValue
      return newValue;
  }),
  // on(TodoActions.getById, (state) => initialState),
);