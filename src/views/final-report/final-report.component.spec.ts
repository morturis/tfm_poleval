import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReportComponent } from './final-report.component';

describe('FinalReportComponent', () => {
  let component: FinalReportComponent;
  let fixture: ComponentFixture<FinalReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalReportComponent]
    });
    fixture = TestBed.createComponent(FinalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
