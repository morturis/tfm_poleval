import { InfoIconComponent } from './info-icon.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { GenericComponentsModule } from '../generic-components.module';

describe('InfoIconComponent', () => {
  let rendered;
  let component: InfoIconComponent;

  beforeEach(async () => {
    await MockBuilder(InfoIconComponent, GenericComponentsModule);
    rendered = MockRender(InfoIconComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
