import { Pipe, PipeTransform, Signal } from '@angular/core';
import { TranslationService } from 'src/services/translation-service.service';

@Pipe({
  name: 'translate',
  pure: false, //angular does not currently offer pure + stateful pipes
})
export class TranslatePipe implements PipeTransform {
  constructor(private ts: TranslationService) {}

  transform(value: string | undefined): string {
    return this.ts.translate(value) || `NOT TRANSLATED ${value}`;
  }
}
