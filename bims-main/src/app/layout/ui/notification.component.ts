import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initDropdowns } from 'flowbite';
import { NgxPermissionsModule } from 'ngx-permissions';

@Component({
  selector: 'app-notification',
  template: `
    <button
      id="dropdownNotificationButton"
      data-dropdown-toggle="dropdownNotification"
      class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
      type="button"
    >
      <span class="sr-only">View notifications</span>
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
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
      <div class="relative flex">
        <div
          class="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900"
        ></div>
      </div>
    </button>
    <!-- Dropdown menu -->
    <div
      id="dropdownNotification"
      class="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
      aria-labelledby="dropdownNotificationButton"
    >
      <div
        class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white"
      >
        Notifications
      </div>
      <div class="divide-y divide-gray-100 dark:divide-gray-700">
        <a
          href="#"
          *ngFor="let announcement of announcements"
          class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div class="flex-shrink-0">
            <div
              class="flex items-center justify-center w-11 h-11 bg-blue-600 border border-white rounded-full dark:border-gray-800"
            >
              <svg
                class="w-5 h-5 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path
                  d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"
                />
                <path
                  d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"
                />
              </svg>
            </div>
          </div>
          <div class="w-full pl-3">
            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
              {{ announcement.message }}
            </div>
            <div class="text-xs text-blue-600 dark:text-blue-500">
              {{ announcement.timestamp }}
            </div>
          </div>
        </a>
      </div>
      <a
        [routerLink]="['/notification']"
        class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
      >
        <div class="inline-flex items-center ">
          <svg
            class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path
              d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            />
          </svg>
          View all
        </div>
      </a>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, RouterLink],
})
export class NotificationComponent implements OnInit {
  public announcements: any[] = [
    {
      message: 'Barangay Libjo has posted new announcement!',
      timestamp: 'a few moments ago',
    },
    {
      message: 'You may now claim your requested Certificate!',
      timestamp: '10 minutes ago',
    },
    {
      message: 'Your request is now being processed!',
      timestamp: '44 minutes ago',
    },
    {
      message: 'Your request has been sent!',
      timestamp: '1 hour ago',
    },
  ];

  constructor() {}

  ngOnInit() {
    initDropdowns();
  }
}
