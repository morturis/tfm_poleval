import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from './translation-service.service';
import { LanguageService } from './language.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TranslationService, LanguageService],
})
export class ServicesModule {}
