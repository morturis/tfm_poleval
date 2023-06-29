import { Directive, Input, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicComponentLoader]',
})
export class DynamicComponentLoaderDirective {
  @Input({ required: false }) component!: Type<unknown>;

  constructor(public _vcr: ViewContainerRef) {}

  ngOnInit() {
    if (this.component) this._vcr.createComponent(this.component);
  }
}
