<template>
  <div class="testimony_hero tw-mt-56 tw-pb-24">
    <div class="row tw-justify-center">
      <div class="col-12 col-lg-11 col-xl-10 tw-p-6 md:tw-p-4 xl:tw-p-12 tw-bg-[#f8fcfe] tw-rounded-2xl -tw-mt-36 tw-relative">
        <div class="tw-absolute tw-right-10 tw-top-10">
          <q-icon size="xl" class="" name="img:/assets/svg/qoute.svg" />
        </div>
        <div class="row tw-flex-nowrap tw-justify-center md:tw-justify-between">
          <div class="tw-w-[27%]">
            <div class="tw-text-2xl xl:tw-text-4xl tw-font-semibold">
              What people are <br class="tw-hidden xl:tw-block">
              saying about us?
            </div>
            <div class="tw-mt-2 xl:tw-text-lg testimony_path">
              Check out what customers and professionals <br class="tw-hidden xl:tw-block">
              are happily sharing about their Cutify <br class="tw-hidden xl:tw-block">
              experiences.
            </div>
          </div>
          <div class="md:tw-mt-20">
            <div class="card tw-w-72 md:tw-w-52 xl:tw-w-64 tw-px-4 tw-py-8 tw-h-44 tw-border tw-rounded-t-lg tw-rounded-br-lg">
              <div class="tw-text-sm md:tw-text-xs xl:tw-text-xs">
                I love how convenient it is to book <br class="tw-hidden xl:tw-block">
                my favorite spa treatments through <br class="tw-hidden xl:tw-block">
                this platform. The service providers <br class="tw-hidden xl:tw-block">
                are top-notch!
              </div>
            </div>
            <div class="row tw-ml-9 tw-mt-2">
              <div>
                <q-img
                  src="/assets/img/avatar.png"
                  class="tw-w-10 tw-h-10"
                />
              </div>
              <div class="tw-ml-2">
                <div class="tw-text-base tw-font-medium">
                  Jessica T.
                </div>
                <div class="tw-text-gray-500 tw-text-xs">
                  12th may, 2023
                </div>
              </div>
            </div>
          </div>
          <div class="md:tw-mt-20">
            <div class="card tw-w-72 md:tw-w-52 xl:tw-w-64 tw-px-4 tw-py-8 tw-h-44 tw-border tw-rounded-t-lg tw-rounded-br-lg">
              <div class="tw-text-sm md:tw-text-xs xl:tw-text-xs">
                I love how convenient it is to book <br class="tw-hidden xl:tw-block">
                my favorite spa treatments through <br class="tw-hidden xl:tw-block">
                this platform. The service providers <br class="tw-hidden xl:tw-block">
                are top-notch!
              </div>
            </div>
            <div class="row tw-ml-9 tw-mt-2">
              <div>
                <q-img
                  src="/assets/img/avatar2.png"
                  class="tw-w-10 tw-h-10"
                />
              </div>
              <div class="tw-ml-2">
                <div class="tw-text-base tw-font-medium">
                  Jessica T.
                </div>
                <div class="tw-text-gray-500 tw-text-xs">
                  12th may, 2023
                </div>
              </div>
            </div>
          </div>
          <div class="md:tw-mt-20">
            <div class="card tw-w-72 md:tw-w-52 xl:tw-w-64 tw-px-4 tw-py-8 tw-h-44 tw-border tw-rounded-t-lg tw-rounded-br-lg">
              <div class="tw-text-sm md:tw-text-xs xl:tw-text-xs">
                I love how convenient it is to book <br class="tw-hidden xl:tw-block">
                my favorite spa treatments through <br class="tw-hidden xl:tw-block">
                this platform. The service providers <br class="tw-hidden xl:tw-block">
                are top-notch!
              </div>
            </div>
            <div class="row tw-ml-9 tw-mt-2">
              <div>
                <q-img
                  src="/assets/img/avatar.png"
                  class="tw-w-10 tw-h-10"
                />
              </div>
              <div class="tw-ml-2">
                <div class="tw-text-base tw-font-medium">
                  Jessica T.
                </div>
                <div class="tw-text-gray-500 tw-text-xs">
                  12th may, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script setup>
import AppFooter from './AppFooter.vue';
</script>


<style scoped>
.card {
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: 0px;
  width: 50px !important;
  border-right: 50px solid transparent;
  border-top: 50px solid #fff;
}
</style>
