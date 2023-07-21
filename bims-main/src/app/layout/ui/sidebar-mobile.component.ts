import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-sidebar-mobile',
  template: `
    <div
      [ngClass]="
        (showMobileMenu$ | async)
          ? 'pointer-events-auto transition-opacity ease-linear duration-300 opacity-100'
          : 'pointer-events-none transition-opacity ease-linear duration-300 opacity-0'
      "
      class=" relative z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-900/80"></div>

      <div
        [ngClass]="
          (showMobileMenu$ | async)
            ? 'pointer-events-auto transition ease-in-out duration-300 transform translate-x-0'
            : 'pointer-events-none transition ease-in-out duration-300 transform -translate-x-full'
        "
        class="fixed inset-0 flex"
      >
        <div
          [ngClass]="
            (showMobileMenu$ | async)
              ? 'pointer-events-auto ease-in-out duration-300 opacity-100'
              : 'pointer-events-none ease-in-out duration-300 opacity-0'
          "
          class="relative mr-16 flex w-full max-w-xs flex-1"
        >
          <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button
              (click)="toggleMobileMenu()"
              type="button"
              class="-m-2.5 p-2.5"
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
          >
            <div class="flex h-16 shrink-0 items-center">
              <img class="h-10 w-auto" src="./assets/logo.png" alt="BIMS" />
              <span class="text-white pl-4 text-2xl font-bold">
                Barangay Libjo
              </span>
            </div>
            <app-sidebar-menu />
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [SidebarMenuComponent, NgClass, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMobileComponent implements OnInit {
  #menuService = inject(MenuService);

  public showMobileMenu$: Observable<boolean> = new Observable<boolean>();

  ngOnInit() {
    this.showMobileMenu$ = this.#menuService.showMobileMenu$;
  }

  public toggleMobileMenu(): void {
    this.#menuService.showMobileMenu = false;
  }
}
