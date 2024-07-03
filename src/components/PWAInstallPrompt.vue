<template>
  <div v-if="deferredPrompt">
    <q-dialog position="top" v-model="confirmDialog" seamless>
      <q-card class="tw-w-96 tw-bg-white !tw-rounded-2xl">
        <div class="tw-text-center tw-text-xl tw-font-semibold tw-pt-12">
          Add to home screen?
        </div>
        <div class="row tw-justify-center tw-my-5">
          <q-btn
            color="primary"
            @click="showInstallPrompt"
            label="Install app"
            unelevated no-caps
            class="tw-h-11 tw-rounded-lg"
          />
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const deferredPrompt = ref(null);
const confirmDialog = ref(true)

const showInstallPrompt = async () => {
  console.log('showInstallPrompt called');
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt();
    const { outcome } = await deferredPrompt.value.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    deferredPrompt.value = null;
  }
};

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt event fired');
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt.value = e;
  });
});
</script>
