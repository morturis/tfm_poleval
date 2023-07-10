import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastPipe } from './cast.pipe';
import { TranslatePipe } from './translate.pipe';
import { ServicesModule } from 'src/services/services.module';

@NgModule({
  declarations: [CastPipe, TranslatePipe],
  imports: [CommonModule, ServicesModule],
  exports: [CastPipe, TranslatePipe],
})
export class PipesModule {}
