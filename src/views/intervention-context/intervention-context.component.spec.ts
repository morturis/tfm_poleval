import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionContextComponent } from './intervention-context.component';

describe('InterventionContextComponent', () => {
  let component: InterventionContextComponent;
  let fixture: ComponentFixture<InterventionContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterventionContextComponent]
    });
    fixture = TestBed.createComponent(InterventionContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
