import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.scss'],
})
export class FormMakerComponent {
  @Output() outputEvent = new EventEmitter<any>();
}
