import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentLoaderDirective } from './dynamic-component-loader.directive';

@NgModule({
  declarations: [DynamicComponentLoaderDirective],
  imports: [CommonModule],
  exports: [DynamicComponentLoaderDirective],
})
export class DirectivesModule {}
