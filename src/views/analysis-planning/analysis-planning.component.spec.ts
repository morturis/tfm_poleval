import { AnalysisPlanningComponent } from './analysis-planning.component';
import { ViewsModule } from '../views.module';
import { MockBuilder, MockRender } from 'ng-mocks';
import { FormBuilder, FormsModule } from '@angular/forms';

describe('AnalysisPlanningComponent', () => {
  let rendered;
  let component: AnalysisPlanningComponent;

  beforeEach(async () => {
    await MockBuilder(AnalysisPlanningComponent, ViewsModule).keep(FormBuilder);
    rendered = MockRender(AnalysisPlanningComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
