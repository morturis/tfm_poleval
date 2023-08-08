import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
import { PipesModule } from 'src/pipes/pipes.module';
import { ServicesModule } from 'src/services/services.module';
import { AnalysisPlanningComponent } from './analysis-planning/analysis-planning.component';
import { ContactComponent } from './contact/contact.component';
import { EvalDesignComponent } from './eval-design/eval-design.component';
import { EvalComponent } from './eval/eval.component';
import { FieldWorkComponent } from './field-work/field-work.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { FinalReportComponent } from './final-report/final-report.component';
import { FormMakerComponent } from './form-maker/form-maker.component';
import { InterventionContextComponent } from './intervention-context/intervention-context.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TermsOfReferenceComponent } from './terms-of-reference/terms-of-reference.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { EditEvalComponent } from './edit-eval/edit-eval.component';

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
  ],
  imports: [CommonModule, ServicesModule, GenericComponentsModule, PipesModule],
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
