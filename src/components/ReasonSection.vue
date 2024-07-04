<template>
  <div class="tw-mt-24">
    <div class="row tw-justify-center">
      <div class="col-11 col-lg-10 col-xl-9">
        <div>
          <div class="tw-text-center tw-text-2xl md:tw-text-3xl tw-font-semibold tw-h-16 reason_hero_path">
            Why Cutify service booking app <span class="text-primary">is perfect for you</span>
          </div>
          <div class="md:tw-flex tw-justify-between tw-mt-12">
            <div class="row tw-flex-nowrap md:tw-w-[50%]">
              <div class="tw-mr-4">
                <q-img
                  src="/assets/svg/calendar_checked.svg"
                  class="tw-w-20"
                />
              </div>
              <div>
                <div class="tw-text-2xl tw-font-semibold">
                  Easy booking
                </div>
                <div class="tw-text-[#46474b] tw-text-base">
                  Say goodbye to long wait times and phone calls. Browse <br>
                  and book beauty and wellness services with ease  with our <br>
                  user-friendly interface. Book your favorite services anytime, <br>
                  anywhere
                </div>
              </div>
            </div>
            <div class="row tw-flex-nowrap md:tw-w-[50%] tw-mt-8 md:tw-mt-0">
              <div class="tw-mr-4">
                <q-img
                  src="/assets/svg/corg.svg"
                  class="tw-w-20"
                />
              </div>
              <div>
                <div class="tw-text-2xl tw-font-semibold">
                  Wide Range of Services
                </div>
                <div class="tw-text-[#46474b] tw-text-base">
                  Discover a diverse array of beauty and wellness services all <br>
                  in one place. We have everything you need to look and feel <br>
                  your best.
                </div>
              </div>
            </div>
          </div>
          <div class="md:tw-flex tw-justify-between tw-mt-8 md:tw-mt-12">
            <div class="row tw-flex-nowrap md:tw-w-[50%]">
              <div class="tw-mr-4">
                <q-img
                  src="/assets/svg/users.svg"
                  class="tw-w-20"
                />
              </div>
              <div>
                <div class="tw-text-2xl tw-font-semibold">
                  Expert Professionals
                </div>
                <div class="tw-text-[#46474b] tw-text-base">
                  Connect with top professionals who are dedicated to <br>
                  providing top-notch services tailored to your preferences.
                </div>
              </div>
            </div>
            <div class="row tw-flex-nowrap md:tw-w-[50%] tw-mt-8 md:tw-mt-0">
              <div class="tw-mr-4">
                <q-img
                  src="/assets/svg/user.svg"
                  class="tw-w-20"
                />
              </div>
              <div>
                <div class="tw-text-2xl tw-font-semibold">
                  Personalized Experience
                </div>
                <div class="tw-text-[#46474b] tw-text-base">
                  Customize your appointments according to your schedule, <br>
                  preferences, and desired treatments. Enjoy a personalized <br>
                  experience that caters to your individual needs.
                </div>
              </div>
            </div>
          </div>
          <div class="md:tw-flex tw-justify-between tw-mt-8 md:tw-mt-12">
            <div class="row tw-flex-nowrap md:tw-w-[50%]">
              <div class="tw-mr-4">
                <q-img
                  src="/assets/svg/bell.svg"
                  class="tw-w-20"
                />
              </div>
              <div>
                <div class="tw-text-2xl tw-font-semibold">
                  Convenient Reminders
                </div>
                <div class="tw-text-[#46474b] tw-text-base">
                  Never miss an appointment again with our convenient <br>
                  reminder notifications. Stay organized and keep track of <br>
                  your upcoming beauty and wellness sessions effortlessly.
                </div>
              </div>
            </div>
            <div class="row tw-flex-nowrap md:tw-w-[50%] tw-mt-8 md:tw-mt-0">
              <div class="tw-mr-4">
                <q-img
                  src="/assets/svg/wallet.svg"
                  class="tw-w-20"
                />
              </div>
              <div>
                <div class="tw-text-2xl tw-font-semibold">
                  Secure Payment
                </div>
                <div class="tw-text-[#46474b] tw-text-base">
                  Experience worry-free transactions with our secure <br>
                  payment options. Your financial information is protected, <br>
                  allowing you to focus solely on your self-care journey.
                </div>
              </div>
            </div>
          </div>
          <div class="row tw-justify-center tw-mt-12">
            <q-btn
              color="primary"
              label="Try Cutify now"
              no-caps unelevated
              @click="$router.push({ name: 'signup' })"
              class="tw-h-12 tw-px-7 tw-rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
