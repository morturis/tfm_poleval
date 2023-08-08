import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEvalComponent } from './edit-eval.component';

describe('EditEvalComponent', () => {
  let component: EditEvalComponent;
  let fixture: ComponentFixture<EditEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEvalComponent]
    });
    fixture = TestBed.createComponent(EditEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
