import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Sitio } from '../../data-access/sitio.interface';

@Component({
  selector: 'app-sitio',
  template: `
    <div class="flex flex-col  mt-12 bg-gray-50 p-8 border-0 rounded-lg">
      <h1
        class="text-2xl font-extrabold sm:text-5xl  text-indigo-700 mt-24 text-center my-6 sm:my-12"
      >
        Sitios
      </h1>
      <div class="mt-8">
        <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          <div
            class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center bg-white"
            *ngFor="let sitio of sitios; trackBy: trackBy"
          >
            <dd class="text-xl font-extrabold  md:text-2xl">
              <div class="flex items-center gap-2">
                <span class=" p-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <p>{{ sitio.name }}</p>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
})
export class SitioComponent implements OnInit {
  @Input({ required: true }) sitios: Sitio[] = [];

  constructor() {}

  ngOnInit() {}

  trackBy(index: number) {
    return index;
  }
}
