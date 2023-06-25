import { Component, Input } from '@angular/core';
import { Stage } from 'src/app/types/Stage';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.scss'],
})
export class StageListComponent {
  @Input({ required: true }) stages: Stage[] = [];

  //TODO set done when leaving stage
}
