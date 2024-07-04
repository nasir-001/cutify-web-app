<template>
  <div class="tw-bg-[#4991b8] tw-mt-12 md:tw-mt-32">
    <div class="row tw-justify-center">
      <div class="col-12 col-lg-10 col-xl-9">
        <div class="tw-my-12">
          <div class="tw-text-center tw-text-white tw-text-2xl tw-font-semibold">
            Find beauty and wellness services near you
          </div>
          <div class="md:tw-flex tw-justify-center tw-mt-12">
            <div class="tw-bg-white row tw-mx-4 md:tw-mx-0 tw-rounded-[8px] tw-py-2 tw-px-2 md:tw-w-[70%]">
              <div class="row tw-justify-between tw-w-full md:tw-w-44 tw-mt-6 md:tw-mt-2 tw-border-b md:tw-border-b-0 tw-pb-2 md:tw-pb-0 md:tw-border-r tw-pr-3">
                <div class="row">
                  <q-icon size="1.5rem" name="svguse:/assets/svg/custom_svg.svg#location" />
                  <div class="tw-text-gray-400">
                    Location:
                  </div>
                </div>
                <q-select
                  v-model="location"
                  :options="['All', 'Africa', 'Asia', 'Europe']"
                  borderless dense
                  class="-tw-mt-2 tw-ml-3"
                />
              </div>
              <div class="row tw-justify-between tw-w-full md:tw-w-44 tw-mt-6 md:tw-mt-2 tw-border-b md:tw-border-b-0 tw-pb-2 md:tw-pb-0 md:tw-border-r tw-ml-3 tw-pr-3">
                <div class="row">
                  <q-icon class="-tw-ml-2 md:-tw-ml-0" size="1.5rem" name="img:/assets/svg/calendar.svg" />
                  <div class="tw-text-gray-400 tw-pl-1">
                    Date:
                  </div>
                </div>
                <q-select
                  v-model="date"
                  :options="['Any day', 'One week', 'Two weeks', 'Three weeks']"
                  borderless dense
                  class="-tw-mt-2 tw-ml-3"
                />
              </div>
              <div class="row tw-ml-3 tw-mt-6 md:tw-mt-2 tw-pb-2 md:tw-pb-0">
                <q-icon class="-tw-ml-2 md:-tw-ml-0" size="1.5rem" name="img:/assets/svg/search.svg" />
                <q-input
                  v-model="text"
                  type="text"
                  placeholder="Search for service. E.g Braids"
                  dense borderless
                  class="xl:tw-w-80 -tw-mt-2 tw-ml-3"
                />
              </div>
            </div>
            <q-btn
              color="primary"
              label="Search"
              no-caps unelevated
              class="tw-px-8 tw-rounded-[8px] tw-ml-4 tw-mt-4 md:tw-mt-0"
            />
          </div>
          <div class="row tw-flex-nowrap tw-justify-center tw-mt-6">
            <div class="row tw-flex-nowrap tw-mt-2 tw-bg-[#f1e8db] tw-px-2 md:tw-px-4 tw-py-2 tw-rounded-md">
              <q-icon size="1.5rem" name="img:/assets/svg/search.svg" />
              <div class="tw-pl-1 tw-pt-1 md:tw-pt-0 md:tw-pl-2 tw-text-[10px] md:tw-text-sm">
                Hair salon
              </div>
            </div>
            <div class="row tw-flex-nowrap tw-mt-2 tw-ml-3 tw-bg-[#f1e8db] tw-px-2 md:tw-px-4 tw-py-2 tw-rounded-md">
              <q-icon size="1.5rem" name="img:/assets/svg/search.svg" />
              <div class="tw-pl-1 tw-pt-1 md:tw-pt-0 md:tw-pl-2 tw-text-[10px] md:tw-text-sm">
                Knotless braids
              </div>
            </div>
            <div class="row tw-flex-nowrap tw-mt-2 tw-ml-3 tw-bg-[#f1e8db] tw-px-2 md:tw-px-4 tw-py-2 tw-rounded-md">
              <q-icon size="1.5rem" name="img:/assets/svg/search.svg" />
              <div class="tw-pl-1 tw-pt-1 md:tw-pt-0 md:tw-pl-2 tw-text-[10px] md:tw-text-sm">
                Hair treatment
              </div>
            </div>
          </div>
          <div class="tw-mt-12">
            <div class="row tw-mx-6 xl:tw-mx-0 tw-justify-between">
              <div class="tw-text-2xl tw-text-white tw-font-medium">
                Categories
              </div>
              <div class="row">
                <div class="tw-bg-[#68a0be] tw-mx-2 tw-h-8 tw-w-8 tw-rounded-full tw-cursor-pointer">
                  <q-icon color="white" size="md" name="chevron_left" />
                </div>
                <div class="tw-bg-[#68a0be] tw-mx-2 tw-h-8 tw-w-8 tw-rounded-full tw-cursor-pointer">
                  <q-icon color="white" size="md" name="chevron_right" />
                </div>
              </div>
            </div>
            <div class="row tw-justify-center xl:tw-justify-between tw-mt-6">
              <div class="md:tw-mx-4 xl:tw-mx-0">
                <q-img
                  src="/assets/img/dryer.png"
                  class="tw-w-80 md:tw-w-56 xl:tw-w-64 tw-rounded-lg"
                />
                <div class="tw-text-lg tw-text-center tw-text-white">
                  Hair
                </div>
              </div>
              <div class="md:tw-mx-4 xl:tw-mx-0">
                <q-img
                  src="/assets/img/barber2.png"
                  class="tw-w-80 md:tw-w-56 xl:tw-w-64 tw-rounded-lg"
                />
                <div class="tw-text-lg tw-text-center tw-text-white">
                  Barbing Salon
                </div>
              </div>
              <div class="md:tw-mx-4 xl:tw-mx-0">
                <q-img
                  src="/assets/img/massage.png"
                  class="tw-w-80 md:tw-w-56 xl:tw-w-64 tw-rounded-lg"
                />
                <div class="tw-text-lg tw-text-center tw-text-white">
                  Spa
                </div>
              </div>
              <div class="md:tw-mx-4 xl:tw-mx-0">
                <q-img
                  src="/assets/img/gym.png"
                  class="tw-w-80 md:tw-w-56 xl:tw-w-64 tw-rounded-lg"
                />
                <div class="tw-text-lg tw-text-center tw-text-white">
                  Gym center
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const location = ref('all')
const date = ref('Any day')
</script>
