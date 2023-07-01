import { Injectable } from '@angular/core';
import { LanguageMappings } from '../languages/LanguageMappings';
import { PhraseKey } from '../languages/enums/PhraseKey.enum';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private languageService: LanguageService) {}

  translate = (phraseKey: string): string => {
    return LanguageMappings[this.languageService.language][
      phraseKey as keyof typeof PhraseKey
    ];
  };
}
