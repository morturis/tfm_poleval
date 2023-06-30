import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/services/language.service';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  languageCode: string = this.ls.language;
  constructor(
    public ts: TranslationService,
    public ls: LanguageService,
    public router: Router
  ) {}

  changeLanguage() {
    this.ls.nextLanguage();
    this.languageCode = this.ls.language;
  }
}
