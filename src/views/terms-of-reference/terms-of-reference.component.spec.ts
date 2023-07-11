import { TermsOfReferenceComponent } from './terms-of-reference.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ViewsModule } from '../views.module';
import { FormBuilder } from '@angular/forms';

describe('TermsOfReferenceComponent', () => {
  let rendered;
  let component: TermsOfReferenceComponent;

  beforeEach(async () => {
    await MockBuilder(TermsOfReferenceComponent, ViewsModule).keep(FormBuilder);
    rendered = MockRender(TermsOfReferenceComponent);
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
