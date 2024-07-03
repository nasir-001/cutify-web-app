<template>
  <div :class="[$route.fullPath !== '/' ? ' tw-mt-24' : '', 'tw-bg-[#4991b8] tw-w-full']">
    <div class="row tw-justify-center tw-py-12">
      <div class="col-lg-10 col-xl-9 tw-border-b tw-border-[#d3d3d4] tw-pb-12">
        <div class="md:tw-flex tw-justify-evenly">
          <div class="tw-mr-2">
            <q-img
              src="/assets/svg/logo.svg"
              class="tw-w-32"
            />
            <div class="tw-text-white tw-font-semibold">
              ...book beauty & health services
            </div>
          </div>
          <div class="tw-mx-2 tw-mt-5 md:tw-mt-0">
            <div class="tw-text-white tw-cursor-pointer tw-text-xl tw-font-semibold tw-underline">
              Quick Links
            </div>
            <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-3">
              Services
            </div>
            <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
              Testimonials
            </div>
            <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
              Blog
            </div>
            <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
              Contact Us
            </div>
          </div>
          <div class="row">
            <div class="tw-mx-2 tw-mt-5 md:tw-mt-0">
              <div class="tw-text-white tw-cursor-pointer tw-text-xl tw-font-semibold tw-underline">
                Our Categories
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-3">
                Hair Salon
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
                Barbin Shops
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
                Spa
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
                Gym Center
              </div>
            </div>
            <div class="tw-mx-2 tw-mt-5 md:tw-mt-0">
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-10">
                Hair Salon
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
                Barbin Shops
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
                Spa
              </div>
              <div class="tw-text-white tw-cursor-pointer tw-text-base tw-pt-2">
                Gym Center
              </div>
            </div>
          </div>
          <div class="tw-mt-8 md:tw-mt-0">
            <div class="row tw-flex-nowrap">
              <div class="tw-text-white tw-text-lg tw-pt-1 tw-font-semibold">
                Follow us
              </div>
              <div class="tw-bg-white tw-h-8 tw-mx-2 tw-w-8 tw-rounded-full row tw-justify-center tw-items-center">
                <q-icon class="tw-cursor-pointer" size="1.5rem" name="svguse:/assets/svg/custom_svg.svg#facebook2" />
              </div>
              <div class="tw-bg-white tw-h-8 tw-mx-2 tw-w-8 tw-rounded-full row tw-justify-center tw-items-center">
                <q-icon class="tw-cursor-pointer" size="1.5rem" name="img:/assets/svg/instagram.svg" />
              </div>
              <div class="tw-bg-white tw-h-8 tw-mx-2 tw-w-8 tw-rounded-full row tw-justify-center tw-items-center">
                <q-icon class="tw-cursor-pointer" size="1.5rem" name="img:/assets/svg/twitter.svg" />
              </div>
              <div class="tw-bg-white tw-h-8 tw-mx-2 tw-w-8 tw-rounded-full row tw-justify-center tw-items-center">
                <q-icon class="tw-cursor-pointer" size="1.5rem" name="img:/assets/svg/linkedin.svg" />
              </div>
            </div>
            <div class="tw-mt-4">
              <div class="tw-text-white tw-font-medium">
                Subscribe to our newsletter to get updates from us.
              </div>
              <div class="row tw-mt-4">
                <div class="tw-bg-white tw-px-2 tw-w-64">
                  <q-input
                    v-model="email"
                    type="text"
                    placeholder="Enter your email"
                    borderless
                  />
                </div>
                <q-btn
                  color="primary"
                  label="Subscribe"
                  unelevated
                  no-caps
                  class="tw-px-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-pb-12 tw-text-center tw-font-medium tw-text-base tw-text-white">
      Copyright &copy; {{ fullYear }} Genleaders All Rights Reserved
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref('')

const fullYear = new Date().getFullYear()
</script>
