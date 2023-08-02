import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDragAndDropComponent } from './form-drag-and-drop.component';

describe('FormDragAndDropComponent', () => {
  let component: FormDragAndDropComponent;
  let fixture: ComponentFixture<FormDragAndDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDragAndDropComponent]
    });
    fixture = TestBed.createComponent(FormDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
