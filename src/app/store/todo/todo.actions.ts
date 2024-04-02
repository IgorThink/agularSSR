import { createAction, props } from '@ngrx/store';

import { ITodo } from '../../modules/shared-module/interfaces/ITodoResponse';

export const getAll = createAction(
  '[Todo] Get All',
  props<{ actionValue: ITodo[] }>()
);
export const getById = createAction(
  '[Todo] Get By Id',
  props<{ id: number }>()
);
