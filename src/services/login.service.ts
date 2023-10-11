import { Injectable } from '@angular/core';
import { LoginObject, LoginResponse } from 'src/app/types/Login';
import { Permissions } from 'src/app/types/Permissions.enum';
import { UserAccount } from 'src/app/types/UserAccount';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  defaultExpirationTimeFunction = () => new Date(Date.now() + 1000 * 60 * 10);

  defaultUsers: LoginObject[] = [
    {
      username: 'dev',
      password: 'dev',
      permissions: [
        Permissions.ADD_NEW_EVAL,
        Permissions.FILL_FORM,
        Permissions.EDIT_EVAL,
      ],
      expires_at: this.defaultExpirationTimeFunction(),
    },
    {
      username: 'juanito',
      password: 'juanitoPassword',
      permissions: [Permissions.FILL_FORM],
      expires_at: this.defaultExpirationTimeFunction(),
    },
  ];

  constructor(private storage: StorageService) {
    this.defaultUsers.forEach((user) => {
      this.storage.setObject(`user-${user.username}`, user);
    });
  }

  async login(loginInfo: UserAccount): Promise<LoginResponse> {
    const user = this.storage.getObject<LoginObject>(
      `user-${loginInfo.username}`
    );

    if (!user || user.password != loginInfo.password) {
      alert('error');
      return { access_token: 'error' };
    }

    const token = btoa(JSON.stringify(user));

    this.storage.setObject('token', token);

    return {
      access_token: token,
    };
  }

  async register(loginInfo: UserAccount): Promise<LoginResponse> {
    const newUser: LoginObject = {
      username: loginInfo.username,
      password: loginInfo.password,
      permissions: [Permissions.FILL_FORM],
      expires_at: this.defaultExpirationTimeFunction(),
    };
    this.storage.setObject(`user-${newUser.username}`, newUser);
    return await this.login(newUser);
  }

  logout() {
    this.storage.setObject('token', undefined);
  }

  isLoggedIn(): boolean {
    return !!this.storage.getObject('token');
  }

  getLoggedInUsername(): string {
    const token: string = this.storage.getObject('token');
    if (!token) return 'ERROR - NOT LOGGED IN'; //Should never show
    const loginObject: LoginObject = JSON.parse(atob(token));

    return loginObject.username;
  }
}
