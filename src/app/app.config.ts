import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './modules/shared-module/services/all-req.interecptor';
import { provideState, provideStore } from '@ngrx/store';
import { userReducer } from './store/user/user.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './store/todo/todo.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    provideState({
      name: 'user',
      reducer: userReducer,
    }),
    provideState({
      name: 'todo',
      reducer: todoReducer,
    }),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
