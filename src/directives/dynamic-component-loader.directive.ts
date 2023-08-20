import {
  Directive,
  EventEmitter,
  Input,
  Output,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[dynamicComponentLoader]',
})
export class DynamicComponentLoaderDirective<T> {
  @Input({ required: false }) componentType!: Type<T>;
  @Input({ required: false }) extraBehaviour?: ((component: T) => void)[];

  @Output() output = new EventEmitter<unknown>();
  @Output() componentInstance = new EventEmitter<T>();

  constructor(public _vcr: ViewContainerRef) {}

  ngOnInit() {
    if (!this.componentType) return;
    const component = this._vcr.createComponent(this.componentType)
      .instance as T & {
      outputEvent: Observable<any>;
      handleEventFromParent: (event?: any) => {};
    };

    //when the child component outputs an outputevent, I pass it upwards to the parent
    component.outputEvent?.subscribe((val: unknown) => {
      this.output.emit(val);
    });

    //Apply extra behaviour
    if (!this.extraBehaviour) return;
    this.extraBehaviour.forEach((func) => func(component));

    this.componentInstance.emit(component);
  }
}
