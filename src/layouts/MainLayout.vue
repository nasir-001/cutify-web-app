<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="tw-bg-white tw-h-20">
      <q-toolbar class="tw-mt-2">
        <div class="row tw-justify-between tw-w-full">
          <q-img
            src="/assets/svg/logo.svg"
            class="tw-w-20 tw-cursor-pointer"
            @click="$router.push('/')"
          />
          <div class="tw-hidden md:tw-flex tw-justify-evenly tw-mt-4 tw-text-base tw-font-medium tw-text-black tw-w-[50%]">
            <div :class="[$route.fullPath === '/' ? 'text-primary tw-underline' : '', 'tw-cursor-pointer']"
              @click="$router.push('/')"
            >
              Home
            </div>
            <div :class="[$route.fullPath === '/services' ? 'text-primary tw-underline' : '', 'tw-cursor-pointer']"
              @click="$router.push({ name: 'services' })"
            >
              Services
            </div>
            <div :class="[$route.fullPath === '/testimonial' ? 'text-primary tw-underline' : '', 'tw-cursor-pointer']"
              @click="$router.push({ name: 'testimonial' })"
            >
              Testimonial
            </div>
            <div :class="[$route.fullPath === '/blog' ? 'text-primary tw-underline' : '', 'tw-cursor-pointer']"
              @click="$router.push({ name: 'blog' })"
            >
              Blog
            </div>
            <div :class="[$route.fullPath === '/contact' ? 'text-primary tw-underline' : '', 'tw-cursor-pointer']"
              @click="$router.push({ name: 'contact' })"
            >
              Contact us
            </div>
            <div class="row -tw-mt-2">
              <q-btn
                color="primary"
                label="Create account"
                no-caps
                unelevated
                outline
                class="tw-px-5 tw-h-11 tw-rounded-[8px]"
              />
              <q-btn
                color="primary"
                label="Login"
                no-caps
                unelevated
                class="tw-px-5 tw-h-11 tw-rounded-[8px] tw-ml-5"
              />
            </div>
          </div>
          <div class="tw-hidden md:tw-block"></div>
          <q-btn
            flat
            dense
            round
            color="black"
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            class="tw-h-8 tw-w-8 md:tw-hidden"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list class="tw-mt-12">
        <q-item to="/" clickable v-ripple>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item to="/services" clickable v-ripple>
          <q-item-section>Services</q-item-section>
        </q-item>
        <q-item to="/testimonial" clickable v-ripple>
          <q-item-section>Testimonial</q-item-section>
        </q-item>
        <q-item to="/blog" clickable v-ripple>
          <q-item-section>Blog</q-item-section>
        </q-item>
        <q-item to="/contact" clickable v-ripple>
          <q-item-section>Contact us</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
