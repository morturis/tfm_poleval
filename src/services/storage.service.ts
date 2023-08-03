import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Record<string, any> = {};

  constructor() {
    //sessionStorage.setItem('user-juanito', 'juanito1234');
  }

  setObject<T>(key: string, object: T) {
    if (typeof object === 'undefined') {
      sessionStorage.removeItem(key);
      return;
    }

    this.storage[key] = object;
    sessionStorage.setItem(key, JSON.stringify(object)); //TODO this is here for testing
  }

  getObject<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) as string); //TODO this is here for testing
    return this.storage[key];
  }
}
