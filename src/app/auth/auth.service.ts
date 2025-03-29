import { Injectable, inject, signal } from '@angular/core';

import { Observable } from 'rxjs';
import { StateManagerService } from '../services/state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private loggedIn = signal(false);
  private stateManager = inject(StateManagerService);
  isLoggedIn() {
    // Check if user is logged in
    let user_profile = localStorage.getItem('user_profile');
    if (user_profile) {
      let profile = JSON.parse(user_profile);
      if (
        profile.hasOwnProperty('username') &&
        profile.hasOwnProperty('password')
      ) {
        this.loggedIn.set(true);
      }
    }
    return this.loggedIn();
  }

  logIn(profile: any) {
    // call api to check if user exists
    // if user exists, set loggedIn to true
    this.loggedIn.set(true);
    localStorage.setItem('user_profile', JSON.stringify(profile));
    return 'success';
  }

  logout() {
    localStorage.clear();
    this.loggedIn.set(false);
    this.stateManager.setInRouting(false);
    this.stateManager.currrentPortalContent.set(undefined);
    return new Observable((observer) => {
      observer.next('loggedout');
    });
  }
}
