import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';

export interface MenuPermissions {
  only?: string | string[];
  except?: string | string[];
}

export interface MenuItem {
  label: string;
  route: string;
  permissions?: MenuPermissions;
}

@Component({
  selector: 'app-sidebar-menu',
  template: `
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <ng-container *ngFor="let menu of menus">
              <ng-template
                [ngxPermissionsOnly]="menu.permissions?.only!"
                [ngxPermissionsExcept]="menu.permissions?.except!"
              >
                <li class="text-white" >
                  <a
                    routerLink="{{ menu.route }}"
                    routerLinkActive="bg-white text-indigo-700"
                    [routerLinkActiveOptions]="{ exact: true }"
                    class=" group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  >
                    {{ menu.label }}
                  </a>
                </li>
              </ng-template>
            </ng-container>
          </ul>
        </li>
      </ul>
    </nav>
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgxPermissionsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {
  public menus: MenuItem[] = [
    {
      label: 'Home',
      route: '/homepage'
    },
    {
      label: 'E-Services',
      route: '/e-services',
      permissions: {
        only: ['ROLE_RESIDENT'],
      },
    },
    {
      label: 'Polls',
      route: '/polls',
      permissions: {
        only: ['ROLE_RESIDENT'],
      },
    },
    {
      label: 'Add Post',
      route: '/add-post',
      permissions: {
        only: ['ROLE_RESIDENT'],
      },
    },
    {
      label: 'Contact Us',
      route: '/contact-us',
      permissions: {
        only: ['ROLE_RESIDENT'],
      },
    },
    {
      label: 'Admin Account',
      route: '/admin/account',
      permissions: {
        only: ['ROLE_ADMIN'],
      },
    },
    {
      label: 'Barangay Official Account',
      route: '/admin/barangay-official-account',
      permissions: {
        only: ['ROLE_OFFICIAL'],
      },
    },
  ];

  constructor() {}

  ngOnInit() {}
}
