import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderbarComponent } from './underbar.component';

describe('UnderbarComponent', () => {
  let component: UnderbarComponent;
  let fixture: ComponentFixture<UnderbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderbarComponent]
    });
    fixture = TestBed.createComponent(UnderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
