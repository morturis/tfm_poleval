import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input({ required: true }) id: string = 'Missing ID';
  @Input({ required: true }) title: string = 'Missing title';
  @Input({ required: true }) items: string[] = ['Missing items'];
  @Input({ required: false }) info: string | undefined;
}
