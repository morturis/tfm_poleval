import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginObject, LoginResponse } from 'src/app/types/Login';
import { StorageService } from '../storage.service';

const baseUrl = 'http://localhost';
const basePort = '3000';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  defaultUsers: LoginObject[] = [
    {
      username: 'dev',
      password: 'dev',
    },
    {
      username: 'juanito',
      password: 'juanitoPassword',
    },
  ];

  constructor(private http: HttpClient, private localStorage: StorageService) {}

  login(loginInfo: LoginObject): Observable<LoginResponse> {
    const loginObservable = this.http.post<LoginResponse>(
      `${baseUrl}:${basePort}/user/login`,
      loginInfo
    );

    return loginObservable;
  }

  register(loginInfo: LoginObject): Observable<LoginResponse> {
    const loginObservable = this.http.post<LoginResponse>(
      `${baseUrl}:${basePort}/user/register`,
      loginInfo
    );

    return loginObservable;
  }
  logout() {
    this.localStorage.setObject('token', undefined);
    this.localStorage.setObject('username', undefined);
  }

  isLoggedIn(): boolean {
    return (
      !!this.localStorage.getObject('token') &&
      !!this.localStorage.getObject('username')
    );
  }

  getLoggedInUsername(): string {
    return this.localStorage.getObject('username') || '';
  }
}
