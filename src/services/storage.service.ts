import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Record<string, any> = {};

  setObject<T>(key: string, object: T) {
    this.storage[key] = object;
    sessionStorage.setItem(key, JSON.stringify(object)); //TODO this is here for testing
  }

  getObject<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) as string); //TODO this is here for testing
    return this.storage[key];
  }
}
