import { Injectable, Signal, signal } from '@angular/core';
import { Language } from 'src/languages/enums/Language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage: keyof typeof Language = Language.ES;
  private currentLanguageSignal: Signal<keyof typeof Language> = signal(
    Language.ES
  );

  constructor() {
    sessionStorage.setItem('language', 'ES');
  }

  get language(): keyof typeof Language {
    return sessionStorage.getItem('language') as Language;
  }

  get languageSignal(): Signal<keyof typeof Language> {
    return this.currentLanguageSignal;
  }

  nextLanguage() {
    switch (this.currentLanguage) {
      case 'ES':
        sessionStorage.setItem('language', 'EN');
        this.currentLanguage = 'EN';
        this.currentLanguageSignal = signal(this.currentLanguage);
        return;
      case 'EN':
        sessionStorage.setItem('language', 'ES');
        this.currentLanguage = 'ES';
        this.currentLanguageSignal = signal(this.currentLanguage);
        return;
    }
  }
}
