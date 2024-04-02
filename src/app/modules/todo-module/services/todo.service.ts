import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import {
  ITodoResponse,
} from '../../shared-module/interfaces/ITodoResponse';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoUrl: string = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  getAllTask(): Observable<ITodoResponse | null> {
    return this.http.get<ITodoResponse | null>(this.todoUrl).pipe(
      catchError((error: any) => {
        return of(null);
      })
    );
  }
}
