import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  template: `
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-10 w-auto"
            src="./assets/logo.png"
            alt="BIMS"
          />
          <span class="text-white pl-4 text-2xl font-bold">
            Barangay Libjo
          </span>
        </div>
        <app-sidebar-menu />
      </div>
    </div>
  `,
  standalone: true,
  imports: [SidebarMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
