import {
  CdkDrag,
  CdkDragPlaceholder,
  CdkDragPreview,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DirectivesModule } from 'src/directives/directives.module';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
import { PipesModule } from 'src/pipes/pipes.module';
import { ServicesModule } from 'src/services/services.module';
import { AnalysisPlanningComponent } from './analysis-planning/analysis-planning.component';
import { ContactComponent } from './contact/contact.component';
import { EditEvalComponent } from './edit-eval/edit-eval.component';
import { EvalDesignComponent } from './eval-design/eval-design.component';
import { EvalComponent } from './eval/eval.component';
import { FieldWorkComponent } from './field-work/field-work.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { FinalReportComponent } from './final-report/final-report.component';
import {
  DragDropDropdownComponent,
  DragDropInputComponent,
  FormMakerComponent,
} from './form-maker/form-maker.component';
import { InterventionContextComponent } from './intervention-context/intervention-context.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermsOfReferenceComponent } from './terms-of-reference/terms-of-reference.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

@NgModule({
  declarations: [
    ContactComponent,
    WhoWeAreComponent,
    EvalComponent,
    AnalysisPlanningComponent,
    TermsOfReferenceComponent,
    InterventionContextComponent,
    EvalDesignComponent,
    FieldWorkComponent,
    FinalReportComponent,
    FormMakerComponent,
    FillFormComponent,
    LoginComponent,
    RegisterComponent,
    EditEvalComponent,
    DragDropInputComponent,
    DragDropDropdownComponent,
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GenericComponentsModule,
    DirectivesModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    PipesModule,
    CdkDropList,
    CdkDrag,
    CdkDragPreview,
    CdkDragPlaceholder,
  ],
  exports: [
    ContactComponent,
    WhoWeAreComponent,
    EvalComponent,
    AnalysisPlanningComponent,
    TermsOfReferenceComponent,
    InterventionContextComponent,
    EvalDesignComponent,
    FieldWorkComponent,
    FinalReportComponent,
    FormMakerComponent,
    FillFormComponent,
    LoginComponent,
    RegisterComponent,
  ],
})
export class ViewsModule {}
