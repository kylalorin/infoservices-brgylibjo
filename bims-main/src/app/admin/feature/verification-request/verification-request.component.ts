import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-request',
  template: `
    <div
      class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between">
        <h1 class="text-lg font-semibold text-gray-900 dark:text-white">
          Verification Request
        </h1>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go Back
        </button>
      </div>

      <div class="inline-flex rounded-md shadow-sm mt-4">
        <a
          href="javascript:;"
          aria-current="page"
          class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          All
        </a>
        <a
          href="javascript:;"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Approved
        </a>
        <a
          href="javascript:;"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Pending
        </a>
      </div>
      <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li *ngFor="let verificationRequest of verificationRequests">
          <a
            href="javascript:;"
            class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              class="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0"
              src="./assets/default.png"
              alt="Jese Leos image"
            />
            <div class="text-gray-600 dark:text-gray-400">
              <div class="text-base font-normal">
                <span class="font-medium text-gray-900 dark:text-white">{{
                  verificationRequest.name
                }}</span>
                {{ verificationRequest.message }}
              </div>

              <span
                class="inline-flex items-center text-xs font-normal text-blue-600 dark:text-blue-500"
              >
                {{ verificationRequest.timestamp }}
              </span>
            </div>
          </a>
        </li>
      </ol>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgFor],
})
export class VerificationRequestComponent implements OnInit {
  public verificationRequests: any[] = [
    {
      name: 'Juan P. Dela Cruz',
      message: 'request account for verification.',
      timestamp: 'a few seconds ago',
    },
    {
      name: 'Patrisha D. Hernandez',
      message: 'request account for verification.',
      timestamp: 'a few seconds ago',
    },
    {
      name: 'Joey F. Santiago',
      message: 'request account for verification.',
      timestamp: 'a few seconds ago',
    },
    {
      name: 'Melly L. Borbon',
      message: 'request account for verification.',
      timestamp: 'a few seconds ago',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
