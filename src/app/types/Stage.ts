import { Type } from '@angular/core';

export type Stage = {
  name: string;
  isDone: boolean;
  isActive?: boolean;
  isDocument?: boolean;
  contents: Type<unknown>; //TODO Type of the component to display
};
