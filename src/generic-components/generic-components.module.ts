import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InfoIconComponent } from './info-icon/info-icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { StageListComponent } from './stage-list/stage-list.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TablaComponent } from './tabla/tabla.component';
import { MatButtonModule } from '@angular/material/button';
import { TablaDialogComponent } from './tabla-dialog/tabla-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DirectivesModule } from 'src/directives/directives.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServicesModule } from 'src/services/services.module';
import { UnderbarComponent } from './underbar/underbar.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/pipes/pipes.module';

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
