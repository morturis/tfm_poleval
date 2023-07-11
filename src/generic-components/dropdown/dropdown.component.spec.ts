import { DropdownComponent } from './dropdown.component';
import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { GenericComponentsModule } from '../generic-components.module';
import { FormControl, ValidationErrors, Validators } from '@angular/forms';

describe('DropdownComponent', () => {
  let rendered: MockedComponentFixture<any>;
  let component: DropdownComponent;

  const mockDropdownConfig = {
    header: 'mock_dropdown',
    field: 'mock_dropdown',
    fieldType: 'dropdown',
    viewOnly: false,
    defaultValue: undefined,
    labelOnLeftSide: true,
    info: 'mock_dropdown_info',
    items: ['mock_dropdown_1', 'mock_dropdown_2', 'mock_dropdown_3'],
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
    await MockBuilder(DropdownComponent, GenericComponentsModule);
    rendered = MockRender(DropdownComponent, {
      fieldConfig: mockDropdownConfig,
      control: new FormControl(
        {},
        { validators: mockDropdownConfig.validators }
      ),
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
