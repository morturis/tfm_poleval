import { Component, Input } from '@angular/core';
import { Stage } from 'src/app/types/Stage';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.scss'],
})
export class StageListComponent {
  @Input({ required: true }) stages: Stage[] = [];
  currentStage: Stage | undefined;
  currentStageIndex: number = 0;

  ngOnInit() {
    //Set current stage
    const firstNotDoneOrLastIndex =
      this.stages.findIndex((stage) => !stage.isDone) || this.stages.length - 1;

    this.currentStageIndex = firstNotDoneOrLastIndex;
    this.currentStage = this.stages[this.currentStageIndex];
  }

  advanceOneStage() {
    (this.currentStage as Stage).isDone = true;
    this.currentStageIndex++;
    this.currentStage = this.stages[this.currentStageIndex];
  }

  goBackOneStage() {
    this.currentStageIndex--;
    this.currentStage = this.stages[this.currentStageIndex];
    (this.currentStage as Stage).isDone = false;
  }
}
