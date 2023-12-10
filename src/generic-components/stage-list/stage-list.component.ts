import { Component, Input, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Stage } from 'src/app/types/Stage';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.scss'],
})
export class StageListComponent {
  @ViewChild('stepper') private stepper!: MatStepper; //Definite assignment

  @Input({ required: true }) stages: Stage[] = [];
  currentStage!: Stage; //Definite assignment
  currentStageIndex: number = 0;

  childOutput: any = {};

  constructor() {}

  ngAfterViewInit() {
    this.currentStageIndex = this.stepper.selectedIndex;
    this.currentStage = this.stages[this.currentStageIndex];
    this.stepper.selectedIndexChange.subscribe((next) => {
      if (next > this.currentStageIndex) this.advanceOneStage(next);
      else if (this.currentStageIndex > next) this.goBackOneStage(next);
    });
  }

  advanceOneStage(newIndex: number) {
    this.currentStage.isActive = false;
    (this.currentStage as Stage).isDone = true;
    this.currentStageIndex = newIndex;
    this.currentStage = this.stages[this.currentStageIndex];
    this.currentStage.isActive = true;
  }

  goBackOneStage(newIndex: number) {
    this.currentStage.isActive = false;
    this.currentStageIndex = newIndex;
    this.currentStage = this.stages[this.currentStageIndex];
    (this.currentStage as Stage).isDone = false;
    this.currentStage.isActive = true;
  }

  handleChildOutput(index: number, output: any) {
    this.childOutput[index] = output;
  }

  childIsValid(index: number) {
    return this.childOutput[index]?.status == 'VALID' || 'DISABLED';
  }
}
