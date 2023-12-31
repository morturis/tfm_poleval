import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss'],
})
export class InfoIconComponent {
  @Input({ required: false }) info: string | undefined;
  @Input({ required: false }) size: number = 16;
}
