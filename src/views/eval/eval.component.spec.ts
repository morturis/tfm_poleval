import { EvalComponent } from './eval.component';
import { ViewsModule } from '../views.module';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('EvalComponent', () => {
  let rendered;
  let component: EvalComponent;

  beforeEach(async () => {
    await MockBuilder(EvalComponent, ViewsModule);
    rendered = MockRender(EvalComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
