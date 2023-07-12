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

  get language(): keyof typeof Language {
    return this.currentLanguage;
  }

  get languageSignal(): Signal<keyof typeof Language> {
    return this.currentLanguageSignal;
  }

  nextLanguage() {
    switch (this.currentLanguage) {
      case 'ES':
        this.currentLanguage = 'EN';
        this.currentLanguageSignal = signal(this.currentLanguage);
        return;
      case 'EN':
        this.currentLanguage = 'ES';
        this.currentLanguageSignal = signal(this.currentLanguage);
        return;
    }
  }
}
