import { CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  computed,
  effect,
  inject,
} from '@angular/core';

import { PortalModule } from '@angular/cdk/portal';
import { StateManagerService } from '../../../services/state-manager.service';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-routing-action-btns',
  templateUrl: './routing-action-btns.component.html',
  styleUrls: ['./routing-action-btns.component.scss'],
  standalone: true,
  imports: [CdkPortalOutlet, PortalModule],
})
export class RoutingActionBtnsComponent {
  constructor() {
    effect(() => {
      console.log(this.package());
    });
  }
  private stateManager = inject(StateManagerService);
  @Output() currentPackage = new EventEmitter<CdkPortal>();
  package = computed<CdkPortal | undefined>(() =>
    this.stateManager.activePackageSignal()
  );
}
