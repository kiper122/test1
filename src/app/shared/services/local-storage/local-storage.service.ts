import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getitem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  }

  setitem<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
