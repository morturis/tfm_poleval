import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { DialogData } from 'src/app/types/DialogData';
import { GenericComponentsModule } from '../generic-components.module';
import { TablaDialogComponent } from './tabla-dialog.component';

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
          required: () => 'error_required_field',
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
