import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cast',
  pure: true,
})
export class CastPipe implements PipeTransform {
  /**
   * Cast (S: SuperType) into (T: Type) using @Generics.
   * @param value (S: SuperType) obtained from input type.
   * @optional @param type (T CastingType)
   * type?: { new (): T }
   * type?: new () => T
   */
  transform<S, T extends S>(value: S, type?: T): T {
    return <T>value;
  }
}
