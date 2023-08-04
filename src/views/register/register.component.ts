import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { InputConfig } from 'src/app/types/FieldConfig';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends DynamicFormView {
  usernameConfig: InputConfig = {
    fieldType: 'input',
    header: 'username',
    field: 'username',
    placeholder: 'username_placeholder',
    info: 'username_info',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      required: () => 'error_required_field',
    },
  };

  passwordConfig: InputConfig = {
    fieldType: 'input',
    header: 'password',
    field: 'password',
    placeholder: 'password_placeholder',
    info: 'password_info',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      required: () => 'error_required_field',
    },
  };

  constructor(
    fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    super(fb);

    this.buildForm([this.usernameConfig, this.passwordConfig]);
  }

  async register() {
    const formValue = this.form.value;
    await this.loginService.register(formValue);

    this.router.navigate(['']);
  }
}
