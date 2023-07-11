import { StageListComponent } from './stage-list.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { GenericComponentsModule } from '../generic-components.module';

describe('StageListComponent', () => {
  let rendered;
  let component: StageListComponent;

  beforeEach(async () => {
    await MockBuilder(StageListComponent, GenericComponentsModule);
    rendered = MockRender(StageListComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO test advancing/returning methods
});
