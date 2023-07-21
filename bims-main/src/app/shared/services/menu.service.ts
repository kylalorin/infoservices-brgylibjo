import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService implements OnDestroy {
  private _showMobileMenu$ = new BehaviorSubject<boolean>(false);
  public _pagesMenu$ = new BehaviorSubject<any[]>([]);
  private subscription = new Subscription();

  constructor() {}

  get showMobileMenu$() {
    return this._showMobileMenu$.asObservable();
  }

  get pagesMenu$() {
    return this._pagesMenu$.asObservable();
  }

  set showMobileMenu(value: boolean) {
    this._showMobileMenu$.next(value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
