import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';
import { MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaComponent],
    });
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO test functions
  it('should have more items if dialog is closed successfully', () => {
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(true),
    } as MatDialogRef<typeof component>);
  });
});
