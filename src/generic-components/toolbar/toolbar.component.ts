import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginObject } from 'src/app/types/Login';
import { LanguageService } from 'src/services/language.service';
import { LoginService } from 'src/services/login.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  languageCode: string = this.ls.language;
  constructor(
    public ls: LanguageService,
    public router: Router,
    private storage: StorageService,
    public loginService: LoginService
  ) {}

  changeLanguage() {
    this.ls.nextLanguage();
    this.languageCode = this.ls.language;
  }

  async userHasPermissions(buttonPermission: string): Promise<boolean> {
    const token: string = await this.storage.getObject('token');
    if (!token) return false;
    const loginObject: LoginObject = JSON.parse(atob(token));

    return loginObject.permissions.includes(buttonPermission);
  }

  async logout() {
    await this.loginService.logout();
    this.router.navigate(['']);
  }
}
