import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/external/login.service';
import { LanguageService } from 'src/services/language.service';

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
    public loginService: LoginService
  ) {}

  changeLanguage() {
    this.ls.nextLanguage();
    this.languageCode = this.ls.language;
  }

  async logout() {
    await this.loginService.logout();
    this.router.navigate(['']);
  }
}
