import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DropdownComponent, InfoIconComponent],
  imports: [CommonModule, MatTooltipModule, MatSelectModule],
  exports: [DropdownComponent],
})
export class GenericComponentsModule {}
