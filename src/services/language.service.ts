import { Injectable } from '@angular/core';
import { Language } from 'src/languages/enums/Language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: keyof typeof Language = Language.ES;
  constructor() {}

  get language(): keyof typeof Language {
    return this.currentLanguage;
  }

  nextLanguage() {
    switch (this.currentLanguage) {
      case 'ES':
        this.currentLanguage = 'EN';
        return;
      case 'EN':
        this.currentLanguage = 'ES';
        return;
    }
  }
}
