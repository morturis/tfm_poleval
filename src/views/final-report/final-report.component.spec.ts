import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';
import { FinalReportComponent } from './final-report.component';

describe('FinalReportComponent', () => {
  let rendered;
  let component: FinalReportComponent;

  beforeEach(async () => {
    await MockBuilder(FinalReportComponent, ViewsModule);
    rendered = MockRender(FinalReportComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
