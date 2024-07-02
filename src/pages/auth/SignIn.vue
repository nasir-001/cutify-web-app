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
          Welcome Back
        </div>
        <div class="tw-pt-2 tw-text-base">
          Enter your details to login to your account.
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
          <q-input
            v-model="loginPayload.email"
            type="text"
            label="Email"
            outlined
            :rules="[
              (val) => !!val || 'Field is required',
              (val) => validateEmail(val),
            ]"
          />
          <q-input
            outlined
            lazy-rules
            hide-bottom-space
            v-model="loginPayload.password"
            label="Password"
            :type="showPassword ? 'password' : 'text'"
            :rules="[(val) => !!val || 'Field is required']"
            color="primary"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <div class="row tw-justify-between tw-mt-4">
            <q-checkbox v-model="remember" label="Remember me" />
            <div class="tw-font-semibold text-primary tw-cursor-pointer">
              Forgot password?
            </div>
          </div>
          <q-btn
            color="primary"
            label="Login"
            no-caps
            unelevated
            class="tw-w-full tw-rounded-[8px] tw-mt-5 tw-h-11"
            :disable="!loginPayload.email || !loginPayload.password"
          />
          <div class="tw-mt-4 tw-text-center">
            Don't have an account?
          </div>
          <q-btn
            color="primary"
            label="Sign up as customer"
            no-caps
            unelevated
            class="tw-w-full tw-rounded-[8px] tw-mt-5 tw-h-11"
            @click="$router.push({ name: 'signup' })"
          />
          <q-btn
            color="secondary"
            label="Sign up as professional"
            no-caps
            unelevated
            class="tw-w-full tw-rounded-[8px] tw-mt-5 tw-h-11"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { validateEmail } from "src/boot/utils";
import { reactive, ref } from "vue";

const showPassword = ref(true)
const remember = ref(false)
const loginPayload = reactive({
  email: '',
  password: ''
})
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
