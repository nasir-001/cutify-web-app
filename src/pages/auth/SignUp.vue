<template>
  <div class="row tw-w-screen">
    <div class="tw-w-screen md:tw-w-[40%] auth_background_hero">
      <div class="row tw-justify-center tw-items-center md:tw-h-screen">
        <div class="tw-pt-12 md:tw-pt-0">
          <div class="tw-text-3xl md:tw-text-7xl tw-font-semibold tw-text-white tw-text-center">
            Cutify
          </div>
          <div class="tw-text-white tw-text-lg tw-px-2 md:tw-px-0 tw-text-center">
            Embrace self-care and indulge in a world of beauty and <br class="tw-hidden md:tw-block">
            wellness. Explore our curated selection of services and <br class="tw-hidden md:tw-block">
            effortlessly book appointments right in your neighborhood.
          </div>
        </div>
      </div>
    </div>
    <div class="tw-w-screen md:tw-w-[60%] tw-h-screen tw-overflow-y-auto tw-pb-12">
      <div class="tw-w-[90%] md:tw-w-[60%] tw-mx-auto tw-mt-12 tw-border tw-border-[#d3d3d4] tw-rounded-[8px] tw-py-8 tw-px-6">
        <div class="tw-text-3xl tw-font-semibold">
          Sign up as a customer
        </div>
        <div class="tw-pt-2 tw-text-base">
          Please enter your details to continue with your account creation.
        </div>
        <div class="row tw-justify-center tw-mt-8">
          <q-btn
            color="grey-4"
            outline
            icon="img:/assets/img/google.png"
            class="tw-rounded-xl tw-h-12 tw-mx-6"
            size="sm"
          />
          <q-btn
            color="grey-4"
            outline
            icon="img:/assets/img/facebook.png"
            class="tw-rounded-xl tw-h-12 tw-mx-6"
            size="sm"
          />
          <q-btn
            color="grey-4"
            outline
            icon="img:/assets/img/apple.png"
            class="tw-rounded-xl tw-h-12 tw-mx-6"
            size="sm"
          />
        </div>
        <div class="row tw-justify-center tw-my-6">
          <div
            class="!tw-h-[1px] tw-mt-4 tw-bg-gray-300 tw-w-[45%]"
          ></div>
          <div class="tw-w-[10%] tw-text-lg tw-text-center">or</div>
          <div
            class="!tw-h-[1px] tw-mt-4 tw-bg-gray-300 tw-w-[45%]"
          ></div>
        </div>
        <div>
          <div class="row tw-justify-between">
            <q-input
              v-model="signupPayload.email"
              type="text"
              label="First name"
              outlined
              class="tw-w-full md:tw-w-[48%]"
              :rules="[
                (val) => !!val || 'Field is required',
              ]"
            />
            <q-input
              v-model="signupPayload.email"
              type="text"
              label="Last name"
              outlined
              class="tw-w-full md:tw-w-[48%]"
              :rules="[
                (val) => !!val || 'Field is required',
              ]"
            />
          </div>
          <div class="row tw-justify-between">
            <q-input
              v-model="signupPayload.email"
              type="text"
              label="Email"
              outlined
              class="tw-w-full md:tw-w-[48%]"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => validateEmail(val),
              ]"
            />
            <q-input
              v-model="signupPayload.email"
              type="text"
              label="Phone"
              outlined
              class="tw-w-full md:tw-w-[48%]"
              :rules="[
                (val) => !!val || 'Field is required',
              ]"
            />
          </div>
          <div class="row tw-justify-between">
            <q-input
              outlined
              lazy-rules
              hide-bottom-space
              v-model="signupPayload.password"
              label="Password"
              :type="showPassword ? 'password' : 'text'"
              :rules="[(val) => !!val || 'Field is required']"
              color="primary"
              class="tw-w-full md:tw-w-[48%]"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="showPassword = !showPassword"
                />
              </template>
            </q-input>
            <q-input
              outlined
              lazy-rules
              hide-bottom-space
              v-model="signupPayload.password2"
              label="Confirm Password"
              :type="showPassword2 ? 'password' : 'text'"
              :rules="[(val) => !!val || 'Field is required']"
              color="primary"
              class="tw-w-full md:tw-w-[48%] tw-mt-5 md:tw-mt-0"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="showPassword2 = !showPassword2"
                />
              </template>
            </q-input>
          </div>
          <div class="tw-mt-4">
            <div class="md:tw-flex">
              <div class="row tw-mt-2 md:tw-mt-0">
                <div
                  :class="[passwordCriteria.length ? 'tw-border-[#21d19f]' : '', 'tw-w-5 tw-h-5 tw-rounded-full tw-border-[2px] row tw-justify-center tw-items-center']"
                >
                  <q-icon :color="passwordCriteria.length ? 'accent' : 'grey'" name="check" />
                </div>
                <div class="tw-pl-2 tw-text-gray-400">
                  At least 8 characters strong
                </div>
              </div>
              <div class="row tw-mt-2 md:tw-mt-0 md:tw-ml-4">
                <div
                  :class="[passwordCriteria.lowercase ? 'tw-border-[#21d19f]' : '', 'tw-w-5 tw-h-5 tw-rounded-full tw-border-[2px] row tw-justify-center tw-items-center']"
                >
                  <q-icon :color="passwordCriteria.lowercase ? 'accent' : 'grey'" name="check" />
                </div>
                <div class="tw-pl-2 tw-text-gray-400">
                  One lower case character
                </div>
              </div>
            </div>
            <div class="md:tw-flex">
              <div class="row tw-mt-2 md:tw-mt-0">
                <div
                  :class="[passwordCriteria.uppercase ? 'tw-border-[#21d19f]' : '', 'tw-w-5 tw-h-5 tw-rounded-full tw-border-[2px] row tw-justify-center tw-items-center']"
                >
                  <q-icon :color="passwordCriteria.uppercase ? 'accent' : 'grey'" name="check" />
                </div>
                <div class="tw-pl-2 tw-text-gray-400">
                  One upper case
                </div>
              </div>
              <div class="row tw-mt-2 md:tw-mt-0 md:tw-ml-4">
                <div
                  :class="[passwordCriteria.symbol ? 'tw-border-[#21d19f]' : '', 'tw-w-5 tw-h-5 tw-rounded-full tw-border-[2px] row tw-justify-center tw-items-center']"
                >
                  <q-icon :color="passwordCriteria.symbol ? 'accent' : 'grey'" name="check" />
                </div>
                <div class="tw-pl-2 tw-text-gray-400">
                  A symbol or special character
                </div>
              </div>
            </div>
          </div>
          <div class="row tw-mt-4">
            <q-checkbox v-model="remember"/>
            <div class="tw-text-xs tw-pt-3">
              By registering you are agreeing to our <span class="text-primary">Terms of use</span> and <span class="text-primary">Privacy Policy</span>
            </div>
          </div>
          <q-btn
            color="primary"
            label="Signup"
            no-caps
            unelevated
            class="tw-w-full tw-rounded-[8px] tw-mt-5 tw-h-11"
          />
          <div class="tw-mt-4 tw-text-center">
            Already have an account?
            <span class="text-primary tw-underline tw-font-semibold tw-cursor-pointer" @click="$router.push({ name: 'signin' })">Login</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { validateEmail } from "src/boot/utils";
import { computed, reactive, ref } from "vue";

const showPassword = ref(true)
const showPassword2 = ref(true)
const remember = ref(false)
const signupPayload = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  password2: ''
})

const passwordCriteria = computed(() => {
  const password = signupPayload.password;
  return {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
});
</script>


<style scoped>
.tw-overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none;
}

.tw-overflow-y-auto::-webkit-scrollbar {
  width: 0;
  display: none;
}
</style>
