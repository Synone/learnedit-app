import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [RouterLink, MatFormFieldModule],
})
export class LoginPageComponent implements OnInit {
  constructor() {}
  private authService = inject(AuthService);
  private router = inject(Router);
  ngOnInit() {}
  sampleProfile = {
    username: 'user',
    password: 'password',
  };
  login(profile: any) {
    let status = this.authService.logIn(profile);
    if (status == 'success') {
      this.router.navigate(['home']);
    }
  }
}
