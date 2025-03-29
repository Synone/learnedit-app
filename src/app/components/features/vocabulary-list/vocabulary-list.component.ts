import { ActivatedRoute, Router } from '@angular/router';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  effect,
  inject,
} from '@angular/core';
import { CdkPortal, PortalModule, TemplatePortal } from '@angular/cdk/portal';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StateManagerService } from '../../../services/state-manager.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.scss'],
  standalone: true,
  imports: [PortalModule, MatButtonModule, MatIconModule],
})
export class VocabularyListComponent implements OnDestroy {
  @ViewChild(CdkPortal, { static: true })
  vocabActionBtns!: CdkPortal;
  private activatedRoute = inject(ActivatedRoute);
  private stateManager = inject(StateManagerService);
  private router = inject(Router);
  url = toSignal(this.activatedRoute.url);
  constructor() {
    this.trackState();
  }
  ngOnInit() {
    this.initPortalContent();
  }

  private initPortalContent() {
    this.stateManager.setPortalPackage(this.vocabActionBtns);
  }
  trackState() {
    effect(() => {
      if (this.url()?.[0].path == 'vocabulary-list') {
        this.stateManager.setInRouting(true);
      }
    });
  }
  goToMainPage() {
    this.router.navigate(['/home'], { relativeTo: this.activatedRoute });
    console.log(2);
    this.stateManager.setInRouting(false);
  }
  ngOnDestroy(): void {
    this.vocabActionBtns.detach();
  }
}
