import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  imports: [RouterOutlet],
  standalone: true,
})
export class AuthPageComponent {
  // Add any necessary logic or properties here
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  pageTouched = false;
  actions = [
    {
      action: 'sign-in',
      path: 'login',
      title: 'Login',
    },
    {
      action: 'sign-up',
      path: 'sign-up',
      title: 'Sign up',
    },
  ];

  onClick(path: string) {
    this.router.navigate([`/${path}`], { relativeTo: this.activatedRoute });
    this.pageTouched = true;
  }
}
