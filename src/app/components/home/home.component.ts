import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnInit, computed, inject } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { CardComponent } from '../common/card/card.component';
import { CdkPortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RoutingActionBtnsComponent } from '../common/routing-action-btns/routing-action-btns.component';
import { StateManagerService } from '../../services/state-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './footer.scss'],
  imports: [
    MatIconModule,
    CommonModule,
    RouterOutlet,
    CardComponent,
    RoutingActionBtnsComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}
  private authService = inject(AuthService);
  private stateManagmentService = inject(StateManagerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  //
  public inRoute = computed(() => this.stateManagmentService.inRouting());
  ngOnInit() {}
  actions = [
    {
      title: 'Vocabulary List',
      icon: 'list',
      route: '/home/vocabulary-list',
      shortDescription: 'Manage your vocabulary lists',
    },
    {
      title: 'Create new list',
      icon: 'book',
      route: '/home/new-list',
      shortDescription: 'Create a new vocabulary list',
    },
    {
      title: 'Flashcards',
      icon: 'flash_on',
      route: '/home/flashcards',
      shortDescription: 'Practice with flashcards',
    },
    {
      title: 'Quizzes',
      icon: 'quiz',
      route: '/home/quizzes',
    },
  ];
  onSignOut() {
    this.authService.logout().subscribe((res) => {
      if (res == 'loggedout') {
        if (this.stateManagmentService.activePackageSignal()) {
          this.stateManagmentService.setPortalPackage(undefined);
        }
        this.router.navigate(['/auth/login'], {
          relativeTo: this.activatedRoute,
        });
      }
    });
  }

  onCardClick(route: string) {
    this.stateManagmentService.setInRouting(true);
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
}
