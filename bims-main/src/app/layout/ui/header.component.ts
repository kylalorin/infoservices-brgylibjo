import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from 'src/app/shared/services/menu.service';
import { NotificationComponent } from './notification.component';
import { UserMenuComponent } from './user-menu.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@Component({
  selector: 'app-header',
  template: `
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
    >
      <button
        (click)="toggleMobileMenu()"
        type="button"
        class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div class="relative flex flex-1"></div>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <ng-template [ngxPermissionsOnly]="['ROLE_RESIDENT']">
            <app-notification></app-notification>
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            ></div>
          </ng-template>
          <app-user-menu></app-user-menu>
        </div>
      </div>
    </div>
  `,
  imports: [
    NgIf,
    UserMenuComponent,
    RouterLink,
    NgFor,
    NgxPermissionsModule,
    NotificationComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  #cdr = inject(ChangeDetectorRef);
  #menuService = inject(MenuService);

  ngOnInit() {}

  public toggleMobileMenu(): void {
    this.#menuService.showMobileMenu = true;
  }
}
