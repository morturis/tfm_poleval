import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let rendered;
  let component: ContactComponent;

  beforeEach(async () => {
    await MockBuilder(ContactComponent, ViewsModule);
    rendered = MockRender(ContactComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
