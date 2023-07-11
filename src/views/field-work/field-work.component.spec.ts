import { FieldWorkComponent } from './field-work.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';

describe('FieldWorkComponent', () => {
  let rendered;
  let component: FieldWorkComponent;

  beforeEach(async () => {
    await MockBuilder(FieldWorkComponent, ViewsModule);
    rendered = MockRender(FieldWorkComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
