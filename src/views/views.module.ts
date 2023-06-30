import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestViewComponent } from './test-view/test-view.component';
import { TestViewDosComponent } from './test-view-dos/test-view-dos.component';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
import { ServicesModule } from 'src/services/services.module';
import { AppModule } from 'src/app/app.module';

@NgModule({
  declarations: [TestViewComponent, TestViewDosComponent],
  imports: [CommonModule, ServicesModule, GenericComponentsModule],
  exports: [TestViewComponent, TestViewDosComponent],
})
export class ViewsModule {}
