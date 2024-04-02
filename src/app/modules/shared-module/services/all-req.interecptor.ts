import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const cloned = req.clone({
    setHeaders: {
      'Access-Control-Allow-Origin': '*',
      'redirect': 'follow',
      'Content-Type': 'application/json',
    },
  });
  return next(cloned);
};
