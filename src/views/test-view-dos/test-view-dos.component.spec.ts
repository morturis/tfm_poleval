import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewDosComponent } from './test-view-dos.component';

describe('TestViewDosComponent', () => {
  let component: TestViewDosComponent;
  let fixture: ComponentFixture<TestViewDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestViewDosComponent]
    });
    fixture = TestBed.createComponent(TestViewDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
