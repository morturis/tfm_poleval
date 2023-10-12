import { Pipe, PipeTransform } from '@angular/core';
import { LanguageMappings } from 'src/languages/LanguageMappings';
import { PhraseKey } from 'src/languages/enums/PhraseKey.enum';
import { LanguageService } from 'src/services/language.service';

@Pipe({
  name: 'translate',
  pure: false, //angular does not currently offer pure + stateful pipes
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(value: string | undefined): string {
    if (!value) return ''; //in case there is no placeholder/hint etc declared

    const translatedValue =
      LanguageMappings[this.languageService.language][
        value as keyof typeof PhraseKey
      ];

    //If translatedValue is undefined, that means the translation is not yet set.
    if (!translatedValue) return `NOT TRANSLATED ${value}`;
    return translatedValue;
  }
}
