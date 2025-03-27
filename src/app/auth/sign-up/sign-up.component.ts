import { Component, OnInit, inject } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
})
export class SignUpComponent {
  constructor() {}
  router = inject(Router);

  goToLogin() {
    this.router.navigate(['sign-in']);
  }
}
