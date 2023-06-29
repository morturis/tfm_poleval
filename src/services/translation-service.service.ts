import { Injectable } from '@angular/core';
import { LanguageMappings } from '../languages/LanguageMappings';
import { Language } from '../languages/enums/Language.enum';
import { PhraseKey } from '../languages/enums/PhraseKey.enum';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor() {}

  localize = (phraseKey: keyof typeof PhraseKey): string => {
    return LanguageMappings[this.getLanguage()][phraseKey];
  };

  translate = this.localize;

  private getLanguage = (): keyof typeof Language => {
    return Language.EN;
  };
}
