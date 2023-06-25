import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { StageListComponent } from './stage-list/stage-list.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DropdownComponent, InfoIconComponent, StageListComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
  ],
  exports: [DropdownComponent, StageListComponent],
})
export class GenericComponentsModule {}
