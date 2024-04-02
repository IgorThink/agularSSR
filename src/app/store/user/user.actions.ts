import { createAction, props } from '@ngrx/store';

import { IUserResponse } from '../../modules/shared-module/interfaces/IUserResponse';

export const auth = createAction(
  '[User Auth] Auth',
  props<{ actionValue: IUserResponse }>()
);
export const logOut = createAction('[User Auth] Log Out');
