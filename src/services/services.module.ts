import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginService } from './external/login.service';
import { LanguageService } from './language.service';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LanguageService, StorageService, LoginService],
})
export class ServicesModule {}
