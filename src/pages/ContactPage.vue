<template>
  <div>
    <div class="contact_background_hero tw-h-80">
      <div class="row tw-justify-center">
        <div class="col-11 col-lg-10 col-xl-9">
          <div class="tw-mt-28 tw-hidden md:tw-block">
            <div class="row">
              <div class="tw-bg-white tw-w-24 tw-mt-4 tw-mr-4 tw-h-0.5"></div>
              <div class="tw-text-2xl tw-font-semibold tw-text-white">
                Contact us
              </div>
            </div>
            <div class="row tw-mt-4">
              <q-icon class="tw-cursor-pointer tw-mr-2" size="1.5rem" name="svguse:/assets/svg/custom_svg.svg#facebook" />
              <q-icon class="tw-cursor-pointer tw-mx-2" size="1.5rem" name="svguse:/assets/svg/custom_svg.svg#instagram" />
              <q-icon class="tw-cursor-pointer tw-mx-2" size="1.5rem" name="svguse:/assets/svg/custom_svg.svg#twitter" />
              <q-icon class="tw-cursor-pointer tw-mx-2" size="1.5rem" name="svguse:/assets/svg/custom_svg.svg#linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row tw-justify-center tw-pt-80">
      <div class="col-lg-10 col-xl-9">
        <div class="row tw-flex-wrap-reverse md:tw-flex-nowrap tw-justify-evenly tw-w-full">
          <div class="tw-mt-8 md:tw-mt-0">
            <div class="tw-text-4xl tw-font-semibold tw-pb-6">
              Our contact info
            </div>
            <div class="row tw-flex-nowrap">
              <q-icon size="1.5rem" class="tw-pt-0.5" name="svguse:/assets/svg/custom_svg.svg#mail_plus" />
              <div class="tw-font-[300] tw-pl-2 tw-text-lg">
                <a href="mailto:Cutify_ng@info.com">Cutify_ng@info.com</a>
              </div>
            </div>
            <div class="row tw-flex-nowrap tw-mt-4">
              <q-icon size="1.5rem" class="tw-pt-0.5" name="svguse:/assets/svg/custom_svg.svg#phone" />
              <div class="tw-font-[300] tw-pl-2 tw-text-lg">
                <a href="tel:++234- 8123456789">+234- 8123456789</a>
              </div>
            </div>
            <div class="row tw-flex-nowrap tw-mt-4">
              <q-icon size="1.5rem" class="tw-pt-0.5" name="svguse:/assets/svg/custom_svg.svg#location" />
              <div class="tw-font-[300] tw-pl-2 tw-text-lg tw-w-80">
                Goldlink House, 2 Harare Steet, Off Rabat Street, Zone 6, Wuse, Abuja
              </div>
            </div>
          </div>
          <div class="contact_info tw-mt-32 tw-hidden md:tw-block"></div>
          <div class="tw-border tw-border-[#d3d3d4] tw-mx-4 md:tw-mx-0 tw-shadow-md tw-rounded-[8px] tw-px-6 tw-py-8 -tw-mt-44 md:-tw-mt-36 tw-z-0 tw-bg-white">
            <div class="tw-text-2xl tw-font-medium">
              Send a message
            </div>
            <div class="tw-text-[#46474b] tw-pt-1">
              Fell free to contact us anytime. We will get back to you as soon as we can.
            </div>
            <div class="tw-mt-6">
              <q-input
                outlined
                v-model="contactPayload.name"
                type="text"
                label="Name"
                :rules="[(val) => !!val || 'Field is required']"
              />
              <q-input
                outlined
                v-model="contactPayload.email"
                type="text"
                label="Email"
                :rules="[
                  (val) => !!val || 'Field is required',
                  (val) => validateEmail(val),
                ]"
              />
              <q-input
                outlined
                v-model="contactPayload.message"
                type="textarea"
                label="Message"
                :rules="[
                  (val) => !!val || 'Field is required'
                ]"
              />
              <div class="tw-mt-6">
                <q-btn
                  color="primary"
                  label="Send message"
                  unelevated
                  no-caps
                  class="tw-w-full tw-h-12 tw-rounded-[8px]"
                 />
              </div>
            </div>
          </div>
        </div>
        <div class="contact_info_mobile tw-mt-8 md:tw-hidden"></div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import AppFooter from 'components/AppFooter.vue'

const contactPayload = reactive({
  name: '',
  email: '',
  message: ''
})

function validateEmail(val) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(val) || "Please enter a valid email.";
}
</script>
