import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPlanningComponent } from './analysis-planning.component';

describe('AnalysisPlanningComponent', () => {
  let component: AnalysisPlanningComponent;
  let fixture: ComponentFixture<AnalysisPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalysisPlanningComponent]
    });
    fixture = TestBed.createComponent(AnalysisPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
