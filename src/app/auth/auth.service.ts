import { Injectable, signal } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private loggedIn = signal(false);
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
    return new Observable((observer) => {
      observer.next('loggedout');
    });
  }
}
