<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="tw-bg-white tw-h-16">
      <q-toolbar class="tw-mt-2">
        <q-img
          src="/assets/svg/logo.svg"
          class="tw-w-16"
        />
        <q-space />
        <q-btn
          flat
          dense
          round
          color="black"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >

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
