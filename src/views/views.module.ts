import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestViewComponent } from './test-view/test-view.component';
import { TestViewDosComponent } from './test-view-dos/test-view-dos.component';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
import { ServicesModule } from 'src/services/services.module';
import { AppModule } from 'src/app/app.module';
import { ContactComponent } from './contact/contact.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { EvalComponent } from './eval/eval.component';
import { AnalysisPlanningComponent } from './analysis-planning/analysis-planning.component';
import { TermsOfReferenceComponent } from './terms-of-reference/terms-of-reference.component';
import { InterventionContextComponent } from './intervention-context/intervention-context.component';
import { EvalDesignComponent } from './eval-design/eval-design.component';
import { FieldWorkComponent } from './field-work/field-work.component';
import { FinalReportComponent } from './final-report/final-report.component';

@NgModule({
  declarations: [TestViewComponent, TestViewDosComponent, ContactComponent, WhoWeAreComponent, EvalComponent, AnalysisPlanningComponent, TermsOfReferenceComponent, InterventionContextComponent, EvalDesignComponent, FieldWorkComponent, FinalReportComponent],
  imports: [CommonModule, ServicesModule, GenericComponentsModule],
  exports: [TestViewComponent, TestViewDosComponent],
})
export class ViewsModule {}
