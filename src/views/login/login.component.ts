import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { InputConfig } from 'src/app/types/FieldConfig';
import { LoginService } from 'src/services/external/login.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends DynamicFormView {
  usernameConfig: InputConfig = {
    fieldType: 'input',
    header: 'username',
    field: 'username',
    placeholder: 'username_placeholder',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      ...CustomErrorMessages.required,
    },
  };

  passwordConfig: InputConfig = {
    fieldType: 'input',
    inputType: 'password',
    header: 'password',
    field: 'password',
    placeholder: 'password_placeholder',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      ...CustomErrorMessages.required,
    },
  };

  constructor(
    fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private localStorage: StorageService
  ) {
    super(fb);

    this.buildForm([this.usernameConfig, this.passwordConfig]);
  }

  async login() {
    const formValue = this.form.value;
    this.loginService.login(formValue).subscribe((res) => {
      this.localStorage.setObject('token', res.token);
      this.localStorage.setObject('username', res.username);
      this.router.navigate(['']);
    });
  }
}
