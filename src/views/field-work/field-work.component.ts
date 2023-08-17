import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field-work',
  templateUrl: './field-work.component.html',
  styleUrls: ['./field-work.component.scss'],
})
export class FieldWorkComponent {
  phase_description: string = 'field_work_phase_description';
  make_code_available_text: string = 'make_code_available_text';
  form_code_to_show!: string;

  constructor(private route: ActivatedRoute) {
    const form_code = this.route.snapshot.paramMap.get('code'); //defaults to null
    this.form_code_to_show = form_code || 'field_work_no_code';
  }
}
