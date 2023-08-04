import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from 'src/services/translation-service.service';

@Pipe({
  name: 'translate',
  pure: false, //angular does not currently offer pure + stateful pipes
})
export class TranslatePipe implements PipeTransform {
  constructor(private ts: TranslationService) {}

  transform(value: string | undefined): string {
    const translatedValue = this.ts.translate(value);

    //If translatedValue is undefined, that means the translation is not yet set. Return "NOT TRANSLATED `${value}`"
    //Else return translated value

    if (typeof translatedValue === 'undefined')
      return `NOT TRANSLATED ${value}`;
    return translatedValue;
  }
}
