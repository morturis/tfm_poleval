import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePickerConfig } from 'src/app/types/FieldConfig';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  id: string = 'Missing ID';
  title: string = 'Missing title';
  info: string | undefined;
  @Input({ required: true }) fieldConfig!: DatePickerConfig;
  @Input({ required: false }) control!: FormControl; //Definite assignment //Cant use formControl as name
  @Input({ required: false }) group!: FormGroup; //Definite assignment //Cant use formControl as name

  fieldIsRequired: boolean = false;

  ngOnInit() {
    this.id = this.fieldConfig.field;
    this.title = this.fieldConfig.header;
    this.info = this.fieldConfig.info;

    this.fieldIsRequired =
      this.fieldConfig.validators?.includes(Validators.required) || false;
  }

  listOfErrorsSingleDate() {
    if (!this.control.errors || !this.fieldConfig.errorMessages) return [];

    return Object.keys(this.control.errors).map((err) =>
      (this.fieldConfig.errorMessages as Record<string, Function>)[err](
        this.control.getError(err)
      )
    );
  }
  listOfErrorsDateRange() {
    if (!this.group.errors || !this.fieldConfig.errorMessages) return [];

    return Object.keys(this.group.errors).map((err) =>
      (this.fieldConfig.errorMessages as Record<string, Function>)[err](
        this.group.getError(err)
      )
    );
  }
}
