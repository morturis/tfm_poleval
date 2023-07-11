import { TablaDialogComponent } from './tabla-dialog.component';
import { GenericComponentsModule } from '../generic-components.module';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/types/DialogData';
import { FormBuilder, Validators } from '@angular/forms';

describe('TablaDialogComponent', () => {
  let rendered;
  let component: TablaDialogComponent;

  const mockDialogData: DialogData = {
    inputsConfig: [
      {
        header: 'mock_input',
        field: 'mock_input',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        labelOnLeftSide: true,
        placeholder: 'mock_input_placeholder',
        info: 'mock_input_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'This field is required',
        },
      },
    ],
    title: 'mock_dialog_data',
  };

  beforeEach(async () => {
    await MockBuilder(TablaDialogComponent, GenericComponentsModule).keep(
      FormBuilder
    );
    MockInstance(MAT_DIALOG_DATA, (): DialogData => mockDialogData); //necessary to mock @inject

    rendered = MockRender(TablaDialogComponent, {
      data: mockDialogData,
      fb: new FormBuilder(),
    });
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
