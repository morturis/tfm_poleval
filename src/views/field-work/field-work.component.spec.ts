import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldWorkComponent } from './field-work.component';

describe('FieldWorkComponent', () => {
  let component: FieldWorkComponent;
  let fixture: ComponentFixture<FieldWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldWorkComponent]
    });
    fixture = TestBed.createComponent(FieldWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
