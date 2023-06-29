import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestViewComponent } from './test-view/test-view.component';
import { TestViewDosComponent } from './test-view-dos/test-view-dos.component';

@NgModule({
  declarations: [TestViewComponent, TestViewDosComponent],
  imports: [CommonModule],
  exports: [TestViewComponent, TestViewDosComponent],
})
export class ViewsModule {}
