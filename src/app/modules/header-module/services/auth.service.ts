import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";

import { IUserLogin } from "../../shared-module/interfaces/IUserLogin";
import { IUserResponse } from "../../shared-module/interfaces/IUserResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userApiUrl = 'https://dummyjson.com/auth/'

  constructor(private http: HttpClient) { }

  loginUser(userData: IUserLogin): Observable<IUserResponse | null> {
    return this.http.post<IUserResponse>(`${this.userApiUrl}login`, userData).pipe(
      catchError((error: any) => {
        return of(null)
      })
    );
  }

  getUserByToken(): Observable<IUserResponse | null> {
    if(!localStorage.getItem('token')) {
      return of(null)
    }
    return this.http.get<IUserResponse>(`${this.userApiUrl}me`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      catchError((error: any) => {
        return of(null)
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token')
  }
}