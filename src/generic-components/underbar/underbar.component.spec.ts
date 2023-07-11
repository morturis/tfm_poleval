import { UnderbarComponent } from './underbar.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { GenericComponentsModule } from '../generic-components.module';

describe('UnderbarComponent', () => {
  let rendered;
  let component: UnderbarComponent;

  beforeEach(async () => {
    await MockBuilder(UnderbarComponent, GenericComponentsModule);
    rendered = MockRender(UnderbarComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
