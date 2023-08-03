import { Injectable } from '@angular/core';
import { LoginObject, LoginResponse } from 'src/app/types/Login';
import { Permissions } from 'src/app/types/Permissions.enum';
import { UserAccount } from 'src/app/types/UserAccount';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private storage: StorageService) {}

  async login(loginInfo: UserAccount): Promise<LoginResponse> {
    const loginObject: LoginObject = {
      username: loginInfo.username,
      permissions: [Permissions.ADD_NEW_EVAL, Permissions.FILL_FORM],
      expires_at: new Date(Date.now() + 1000 * 60 * 10),
    };

    const token = btoa(JSON.stringify(loginObject));
    this.storage.setObject('token', token);

    return {
      access_token: token,
    };
  }

  async register(loginInfo: UserAccount): Promise<LoginResponse> {
    return this.login(loginInfo); //TODO dev code
  }

  logout() {
    this.storage.setObject('token', undefined);
  }
}
