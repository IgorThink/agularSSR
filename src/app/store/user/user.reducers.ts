import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { IUserResponse } from '../../modules/shared-module/interfaces/IUserResponse';

export const initialState: IUserResponse | null = null;

export const userReducer = createReducer(
  initialState,
  on(UserActions.auth, (state: IUserResponse | null, action: any) => {
    const newValue = { ...state, ...action.actionValue };
    return newValue;
  }),
  on(UserActions.logOut, (state) => initialState)
);
