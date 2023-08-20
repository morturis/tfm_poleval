import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/directives/directives.module';
import { PipesModule } from 'src/pipes/pipes.module';
import { ServicesModule } from 'src/services/services.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { InputComponent } from './input/input.component';
import { StageListComponent } from './stage-list/stage-list.component';
import { TablaDialogComponent } from './tabla-dialog/tabla-dialog.component';
import { TablaComponent } from './tabla/tabla.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UnderbarComponent } from './underbar/underbar.component';

@NgModule({
  declarations: [
    DropdownComponent,
    InfoIconComponent,
    StageListComponent,
    TablaComponent,
    TablaDialogComponent,
    InputComponent,
    ToolbarComponent,
    UnderbarComponent,
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSelectModule,
    MatStepperModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DirectivesModule,
    MatToolbarModule,
    ServicesModule,
    RouterModule,
    PipesModule,
  ],
  exports: [
    DropdownComponent,
    StageListComponent,
    TablaComponent,
    InputComponent,
    ToolbarComponent,
    UnderbarComponent,
  ],
})
export class GenericComponentsModule {}
