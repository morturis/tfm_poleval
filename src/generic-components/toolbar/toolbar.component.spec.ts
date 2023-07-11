import { ToolbarComponent } from './toolbar.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { GenericComponentsModule } from '../generic-components.module';

describe('ToolbarComponent', () => {
  let rendered;
  let component: ToolbarComponent;

  beforeEach(async () => {
    await MockBuilder(ToolbarComponent, GenericComponentsModule);
    rendered = MockRender(ToolbarComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
