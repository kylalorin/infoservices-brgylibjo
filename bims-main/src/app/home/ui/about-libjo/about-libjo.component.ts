import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-libjo',
  template: `
    <div class="flex flex-col  bg-gray-50 p-8 mt-12 border-0 rounded-lg">
      <h1
        class="text-2xl font-extrabold sm:text-5xl  text-indigo-700 my-6 sm:my-12 text-center"
      >
        About Barangay Libjo
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4">
        <div class="bg-white p-4 rounded-lg border-gray-300 border">
          <div>
            <dl class="divide-y divide-gray-100">
              <div class="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Land Area (has)
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                >
                  472.4304
                </dd>
              </div>
              <div class="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Population 2015 (PSA)
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                >
                  12,190
                </dd>
              </div>
              <div class="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Classification
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                >
                  URBAN
                </dd>
              </div>
              <div class="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Number of Purok/Sitios
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                >
                  9
                </dd>
              </div>
              <div class="px-4  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Boundaries
                </dt>
                <dd
                  class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                >
                  North - PallocanSouth - Shell SGEIWest - Calumpang RiverEast -
                  Dumuclay & Sirang Lupa
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg border border-gray-300">
          <p class="text-justify">
            <span class="text-lg font-bold">Barangay Libjo</span> is one of the main barangays that can be found in the
            city of Batangas. This barangay has nine (9) major sitios, Lamao,
            Central, New San Vicente, D’Hope, Tangisan, Calejon, Takad Old San
            Vicente, and GK. It is also known as one of the biggest barangay in
            Batangas City. Libjo is situated at approximately 13.7445, 121.0703,
            on the island of Luzon. Elevation at these coordinates is estimated
            at 14.0 meters or 45.9 feet above mean sea level.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 mt-4 gap-4">
        <img
          class="h-auto mx-autp border-0 rounded-2xl"
          src="./assets/image-0.jpg"
        />
        <img
          class="h-auto mx-auto border-0 rounded-2xl"
          src="./assets/image-2.jpg"
        />
        <img
          class="h-auto mx-auto border-0 rounded-2xl lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          src="./assets/image-1.jpg"
        />
      </div>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutLibjoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
