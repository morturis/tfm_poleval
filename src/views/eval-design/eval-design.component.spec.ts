import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalDesignComponent } from './eval-design.component';

describe('EvalDesignComponent', () => {
  let component: EvalDesignComponent;
  let fixture: ComponentFixture<EvalDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvalDesignComponent]
    });
    fixture = TestBed.createComponent(EvalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
