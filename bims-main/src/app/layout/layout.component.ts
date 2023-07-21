import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./ui/header.component";
import { SidebarComponent } from "./ui/sidebar.component";
import { SidebarMobileComponent } from './ui/sidebar-mobile.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    template: `
    <div>
      <app-sidebar-mobile></app-sidebar-mobile>
      <app-sidebar></app-sidebar>
      <div class="lg:pl-72">
        <app-header></app-header>
        <main class="py-10">
          <div class="px-4 sm:px-6 lg:px-8">
            <router-outlet />
          </div>
        </main>
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, SidebarMobileComponent]
})
export default class LayoutComponent {}
