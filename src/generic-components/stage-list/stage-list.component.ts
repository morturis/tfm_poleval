import { CdkStep } from '@angular/cdk/stepper';
import { Component, Input, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { pairwise } from 'rxjs/internal/operators/pairwise';
import { Stage } from 'src/app/types/Stage';
import { TranslationService } from 'src/services/translation-service.service';

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

  constructor(public ts: TranslationService) {}

  ngAfterViewInit() {
    this.currentStageIndex = this.stepper.selectedIndex;
    this.currentStage = this.stages[this.currentStageIndex];
    this.stepper.selectedIndexChange.subscribe((next) => {
      if (next > this.currentStageIndex) this.advanceOneStage(next);
      else if (this.currentStageIndex > next) this.goBackOneStage(next);
    });
  }

  advanceOneStage(newIndex: number) {
    (this.currentStage as Stage).isDone = true;
    this.currentStageIndex = newIndex;
    this.currentStage = this.stages[this.currentStageIndex];
  }

  goBackOneStage(newIndex: number) {
    this.currentStageIndex = newIndex;
    this.currentStage = this.stages[this.currentStageIndex];
    (this.currentStage as Stage).isDone = false;
  }
}
