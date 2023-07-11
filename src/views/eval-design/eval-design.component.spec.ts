import { EvalDesignComponent } from './eval-design.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';

describe('EvalDesignComponent', () => {
  let rendered;
  let component: EvalDesignComponent;

  beforeEach(async () => {
    await MockBuilder(EvalDesignComponent, ViewsModule);
    rendered = MockRender(EvalDesignComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
