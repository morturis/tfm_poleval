import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageService } from './language.service';
import { LoginService } from './login.service';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LanguageService, StorageService, LoginService],
})
export class ServicesModule {}
