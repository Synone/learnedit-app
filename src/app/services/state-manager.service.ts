import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  constructor() {}
  public inRouting = signal(false);
  setInRouting(value: boolean) {
    this.inRouting.set(value);
  }
}
