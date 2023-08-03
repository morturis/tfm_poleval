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
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      required: () => 'This field is required',
    },
  };

  passwordConfig: InputConfig = {
    fieldType: 'input',
    header: 'password',
    field: 'password',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      required: () => 'This field is required',
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
