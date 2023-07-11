import { InterventionContextComponent } from './intervention-context.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';
import { FormBuilder } from '@angular/forms';

describe('InterventionContextComponent', () => {
  let rendered;
  let component: InterventionContextComponent;

  beforeEach(async () => {
    await MockBuilder(InterventionContextComponent, ViewsModule).keep(
      FormBuilder
    );
    rendered = MockRender(InterventionContextComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
