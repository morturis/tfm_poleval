import { WhoWeAreComponent } from './who-we-are.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';

describe('WhoWeAreComponent', () => {
  let rendered;
  let component: WhoWeAreComponent;

  beforeEach(async () => {
    await MockBuilder(WhoWeAreComponent, ViewsModule);
    rendered = MockRender(WhoWeAreComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
