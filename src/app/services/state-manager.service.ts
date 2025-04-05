import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, signal } from '@angular/core';

import { Subject } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  constructor() {}
  public inRouting = signal<boolean>(false);
  public setInRouting(value: boolean): void {
    this.inRouting.set(value);
  }
  private activePortalPackage$ = new Subject<CdkPortal | undefined>();
  activePackageSignal = toSignal(this.activePortalPackage$);

  setPortalPackage(portalPackage: TemplatePortal | undefined): void {
    this.activePortalPackage$.next(portalPackage);
  }
}
