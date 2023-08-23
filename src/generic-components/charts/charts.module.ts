import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { HistogramComponent } from './histogram/histogram.component';

@NgModule({
  declarations: [HistogramComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [HistogramComponent],
})
export class ChartsModule {}
