import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Record<string, any> = {};

  setObject<T>(key: string, object: T) {
    if (typeof object === 'undefined') {
      sessionStorage.removeItem(key); //TODO this is for testing
      delete this.storage[key];
      return;
    }

    sessionStorage.setItem(
      key,
      typeof object === 'string' ? object : JSON.stringify(object)
    ); //TODO this is here for testing
    this.storage[key] = object;
  }

  getObject<T>(key: string): T {
    return this.storage[key];
  }
}
