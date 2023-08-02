import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageService } from './language.service';
import { StorageService } from './storage.service';
import { TranslationService } from './translation-service.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TranslationService, LanguageService, StorageService],
})
export class ServicesModule {}
