import { Injectable } from '@angular/core';
import { Language } from 'src/languages/enums/Language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: keyof typeof Language = Language.ES;
  constructor() {
    sessionStorage.setItem('language', 'ES');
  }

  get language(): keyof typeof Language {
    return sessionStorage.getItem('language') as Language;
  }

  nextLanguage() {
    switch (this.currentLanguage) {
      case 'ES':
        sessionStorage.setItem('language', 'EN');
        this.currentLanguage = 'EN';
        return;
      case 'EN':
        sessionStorage.setItem('language', 'ES');
        this.currentLanguage = 'ES';
        return;
    }
  }
}
