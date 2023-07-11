import { InputComponent } from './input.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { GenericComponentsModule } from '../generic-components.module';
import { FormControl, ValidationErrors } from '@angular/forms';

describe('InputComponent', () => {
  let rendered;
  let component: InputComponent;

  const mockInputConfig = {
    header: 'mock_input',
    field: 'mock_input',
    fieldType: 'input',
    defaultValue: undefined,
    viewOnly: false,
    labelOnLeftSide: true,
    placeholder: 'mock_input_placeholder',
    info: 'mock_input_info',
    validators: [
      (control: any): ValidationErrors => {
        return {
          mock_error: true,
        };
      },
    ],
    errorMessages: {
      mock_error: () => 'mock_error_message',
    },
  };

  beforeEach(async () => {
    await MockBuilder(InputComponent, GenericComponentsModule);
    rendered = MockRender(InputComponent, {
      fieldConfig: mockInputConfig,
      control: new FormControl({}, { validators: mockInputConfig.validators }),
    });
    component = rendered.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to print errors', async () => {
    expect(component.listOfErrors()).toEqual(['mock_error_message']);
  });
});
