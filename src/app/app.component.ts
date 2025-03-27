import { Component, HostListener, OnDestroy, inject } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private authService = inject(AuthService);
  title = 'Learned It';
}
