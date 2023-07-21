import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService, User } from 'src/app/core/authentication';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  template: `
    <div class="relative">
      <button
        type="button"
        class="-m-1.5 flex items-center p-1.5"
        (click)="toggleUserDropdown()"
        clickOutside
        (clickOutside)="isUserMenuOpen = false"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-50"
          src="./assets/default.png"
          alt=""
        />
        <span class="flex lg:items-center">
          <span
            class="ml-4 text-sm font-semibold leading-6 text-gray-900"
            aria-hidden="true"
            >{{ user.name }}</span
          >
          <svg
            class="ml-2 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        [ngClass]="
          isUserMenuOpen
            ? 'pointer-events-auto scale-100 animate-fade-in-up opacity-100 duration-200'
            : 'pointer-events-none scale-95 opacity-0 duration-100 ease-in'
        "
        class="profile absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
        tabindex="-1"
      >
        <a
          [routerLink]="['/profile']"
          class="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
          role="menuitem"
          tabindex="-1"
          >Profile</a
        >
        <a
          href="#"
          class="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
          role="menuitem"
          tabindex="-1"
          >Change Password</a
        >
        <a
          (click)="logout()"
          class="block px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
          role="menuitem"
          tabindex="-1"
          >Sign out</a
        >
      </div>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, ClickOutsideDirective, RouterLink],
})
export class UserMenuComponent implements OnInit {
  #cdr = inject(ChangeDetectorRef);
  #auth = inject(AuthService);
  #router = inject(Router);

  public isUserMenuOpen = false;

  user!: User;

  ngOnInit() {
    this.#auth
      .user()
      .pipe(
        tap((user) => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.#cdr.detectChanges());
  }

  logout() {
    this.#auth
      .logout()
      .subscribe(() => this.#router.navigateByUrl('/auth/login'));
  }

  toggleUserDropdown() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.#cdr.markForCheck();
  }
}
