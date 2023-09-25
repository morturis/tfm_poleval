import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  async setObject<T>(key: string, object: T) {
    if (typeof object === 'undefined') {
      sessionStorage.removeItem(key);
      return;
    }

    sessionStorage.setItem(key, JSON.stringify(object)); //TODO this is here for testing
  }

  async getObject<T>(key: string): Promise<T> {
    return JSON.parse(sessionStorage.getItem(key) as string) as T; //TODO this is here for testing
  }
}
