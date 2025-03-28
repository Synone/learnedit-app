import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnInit, computed, inject } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { CardComponent } from '../common/card/card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StateManagerService } from '../../services/state-manager.service';
import { VocabularyListComponent } from '../features/vocabulary-list/vocabulary-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './footer.scss'],
  imports: [MatIconModule, CommonModule, RouterOutlet, CardComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}
  private authService = inject(AuthService);
  private stateManger = inject(StateManagerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  //
  public inRoute = computed(() => this.stateManger.inRouting());
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
    console.log('sign out');

    this.authService.logout().subscribe((res) => {
      console.log(res);
      if (res == 'loggedout') {
        this.router.navigate(['/auth/login'], {
          relativeTo: this.activatedRoute,
        });
      }
    });
  }
  onCardClick(route: string) {
    console.log(route);
    this.stateManger.setInRouting(true);
    this.router.navigate([route], { relativeTo: this.activatedRoute });
  }
}
