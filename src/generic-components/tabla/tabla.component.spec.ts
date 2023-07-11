import { Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { GenericComponentsModule } from '../generic-components.module';
import { TablaComponent } from './tabla.component';

describe('TablaComponent', () => {
  let rendered;
  let component: TablaComponent;

  const mockTableConfig = {
    header: 'intervention_indicators',
    field: 'intervention_indicators',
    fieldType: 'table',
    itemName: 'indicator_unit', //TODO translate
    canAddRemove: true,
    columns: [
      {
        header: 'intervention_indicators_name',
        field: 'intervention_indicators_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'intervention_indicators_name_placeholder',
        info: 'intervention_indicators_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'This field is required',
        },
      },
      {
        header: 'intervention_indicators_value',
        field: 'intervention_indicators_value',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'intervention_indicators_value_placeholder',
        info: 'intervention_indicators_value_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'This field is required',
        },
      },
    ],
  };

  beforeEach(async () => {
    await MockBuilder(TablaComponent, GenericComponentsModule);
    rendered = MockRender(TablaComponent, {
      config: mockTableConfig,
    });
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no items on init', () => {
    expect(component.items.length).toBe(0);
  });

  it('should have more items if dialog is closed successfully', async () => {
    //mocks the dialog closing successfully
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of('testItem'),
    } as MatDialogRef<typeof component>);

    await component.addItem();

    expect(component.items.length).toBe(1);
    expect(component.items[0]).toBe('testItem');
  });

  it('should have same number of items if dialog is canceled', async () => {
    //mocks the dialog closing successfully
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(undefined),
    } as MatDialogRef<typeof component>);

    await component.addItem();
    expect(component.items.length).toBe(0);
  });

  it('should remove items', async () => {
    //mocks the dialog closing successfully
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of('testItem'),
    } as MatDialogRef<typeof component>);

    await component.addItem();
    expect(component.items.length).toBe(1);

    component.removeItem();
    expect(component.items.length).toBe(0);
  });
});
