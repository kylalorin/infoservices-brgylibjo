import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-slider-announcement',
  template: `
    <div id="default-carousel" class="relative w-full " data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <section
            class="bg-indigo-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <div
              class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
              <div class="mx-auto max-w-4xl text-center">
                <h1
                  class="text-sm font-extrabold sm:text-5xl bg-white text-indigo-700 border-0 rounded-lg sm:p-2"
                >
                  ANNOUNCEMENT!
                </h1>
                <p class="text-white text-lg font-semibold">July 2, 2023</p>
                <p
                  class="mt-4 text-[8px] sm:text-[16px] text-white font-semibold text-justify"
                >
                  Magandang umaga po sa inyong lahat! Ang atin pong schedule ng
                  Free Legal Service ay, July 03,2023 Monday 8am-12nn Eto po ay
                  para sa mga residente ng Brgy. Libjo, Batangas City na
                  nangangailangan ng serbisyong legal. Kabilang po sa serbisyong
                  legal ang pagbibigay ng libreng payong legal, pag-gawa at
                  pagnonotaryo ng mga Affidavits, Sworn Statement/Declaration at
                  mga katulad na instrumento. Wala po kayong babayaran są aming
                  magiging serbisyo są tulong po ng ating Volunteer Lawyer na si
                  Atty. Ben John A. Maralit. At ito po ay sa pamamagitan ng
                  ating mahal na Pangulo Jorge Catilo at Brgy. Administrator
                  Joel Chavez. PAUNAWA: Hindi po kabilang sa libreng serbisyo
                  ang pag-gawa at pagnonotaryo ng mga dokumento gaya ng Deed of
                  Absolute Sale, Contract of Lease, Deed of Assignment,
                  Extra-Judicial Settlement, Extra-Judicial Settlement with
                  Sale, Memorandum of Agreement, Bidding Documents at mga
                  katulad na instrumento. MARAMING SALAMAT PO!
                </p>
              </div>
            </div>
          </section>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <section
            class="bg-indigo-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <div
              class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
              <div class="mx-auto max-w-4xl text-center">
                <h1
                  class="text-sm font-extrabold sm:text-5xl bg-white text-indigo-700 border-0 rounded-lg sm:p-2"
                >
                  ANNOUNCEMENT!
                </h1>
                <p class="text-white text-lg font-semibold">June 21, 2023</p>
                <p
                  class="mt-4 text-[8px] sm:text-[16px] text-white font-semibold text-justify"
                >
                  Ang atin pong schedule ng Free Legal Service ay, June 27,2023
                  Tuesday 8am-12nn Eto po ay para sa mga residente ng Brgy.
                  Libjo, Batangas City na nangangailangan ng serbisyong legal.
                  Kabilang po sa serbisyong legal ang pagbibigay ng libreng
                  payong legal, pag-gawa at pagnonotaryo ng mga Affidavits,
                  Sworn Statement/Declaration at mga katulad na instrumento.
                  Wala po kayong babayaran są aming magiging serbisyo są tulong
                  po ng ating Volunteer Lawyer na si Atty. Ben John A. Maralit.
                  At ito po ay sa pamamagitan ng ating mahal na Pangulo Jorge
                  Catilo at Brgy. Administrator Joel Chavez. PAUNAWA: Hindi po
                  kabilang sa libreng serbisyo ang pag-gawa at pagnonotaryo ng
                  mga dokumento gaya ng Deed of Absolute Sale, Contract of
                  Lease, Deed of Assignment, Extra-Judicial Settlement,
                  Extra-Judicial Settlement with Sale, Memorandum of Agreement,
                  Bidding Documents at mga katulad na instrumento. MARAMING
                  SALAMAT PO!
                </p>
              </div>
            </div>
          </section>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <section
            class="bg-indigo-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <div
              class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
              <div class="mx-auto max-w-4xl text-center">
                <h1
                  class="text-sm font-extrabold sm:text-5xl bg-white text-indigo-700 border-0 rounded-lg sm:p-2"
                >
                  ANNOUNCEMENT!
                </h1>
                <p class="text-white text-lg font-semibold">May 2, 2023</p>
                <p
                  class="mt-4 text-[8px] sm:text-[16px] text-white font-semibold text-justify"
                >
                  Magandang umaga po sa inyong lahat. Ang atin pong schedule ng
                  Free Legal Service ay, May 05,2023 (Friday) 8-12 nn Eto po ay
                  para sa mga residente ng Brgy. Libjo, Batangas City na
                  nangangailangan ng serbisyong legal. Kabilang po sa serbisyong
                  legal ang pagbibigay ng libreng payong legal, pag-gawa at
                  pagnonotaryo ng mga Affidavits, Sworn Statement/Declaration at
                  mga katulad na instrumento. Wala po kayong babayaran są aming
                  magiging serbisyo są tulong po ng ating Volunteer Lawyer na si
                  Atty. Ben John A. Maralit. At ito po ay sa pamamagitan ng
                  ating mahal na Pangulo Jorge Catilo at Brgy. Administrator
                  Joel Chavez. PAUNAWA: Hindi po kabilang sa libreng serbisyo
                  ang pag-gawa at pagnonotaryo ng mga dokumento gaya ng Deed of
                  Absolute Sale, Contract of Lease, Deed of Assignment,
                  Extra-Judicial Settlement, Extra-Judicial Settlement with
                  Sale, Memorandum of Agreement, Bidding Documents at mga
                  katulad na instrumento. MARAMING SALAMAT PO!
                </p>
              </div>
            </div>
          </section>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <section
            class="bg-indigo-700 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <div
              class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
              <div class="mx-auto max-w-4xl text-center">
                <h1
                  class="text-sm font-extrabold sm:text-5xl bg-white text-indigo-700 border-0 rounded-lg sm:p-2"
                >
                  ANNOUNCEMENT!
                </h1>
                <p class="text-white text-lg font-semibold">April 24, 2023</p>
                <p
                  class="mt-4 text-[8px] sm:text-[16px] text-white font-semibold text-justify"
                >
                  Magandang umaga po sa inyong lahat. Ang atin pong schedule ng
                  Free Legal Service ay, 📌April 26-27,2023 (Wednesday-Thursday)
                  8-12 nn Eto po ay para sa mga residente ng Brgy. Libjo,
                  Batangas City na nangangailangan ng serbisyong legal. Kabilang
                  po sa serbisyong legal ang pagbibigay ng libreng payong legal,
                  pag-gawa at pagnonotaryo ng mga Affidavits, Sworn
                  Statement/Declaration at mga katulad na instrumento. Wala po
                  kayong babayaran są aming magiging serbisyo są tulong po ng
                  ating Volunteer Lawyer na si Atty. Ben John A. Maralit. At ito
                  po ay sa pamamagitan ng ating mahal na Pangulo Jorge Catilo at
                  Brgy. Administrator Joel Chavez. PAUNAWA: Hindi po kabilang sa
                  libreng serbisyo ang pag-gawa at pagnonotaryo ng mga dokumento
                  gaya ng Deed of Absolute Sale, Contract of Lease, Deed of
                  Assignment, Extra-Judicial Settlement, Extra-Judicial
                  Settlement with Sale, Memorandum of Agreement, Bidding
                  Documents at mga katulad na instrumento. MARAMING SALAMAT PO!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],
})
export class SliderAnnouncementComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    initFlowbite();
  }
}
