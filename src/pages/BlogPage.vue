<template>
  <div>
    <div class="blog_background_hero tw-h-80">
      <div class="row tw-justify-center">
        <div class="col-11 col-lg-10 col-xl-9">
          <div class="tw-mt-28">
            <div class="row">
              <div class="tw-bg-white tw-w-24 tw-mt-4 tw-mr-4 tw-h-0.5"></div>
              <div class="tw-text-2xl tw-font-semibold tw-text-white">
                Blog
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tw-pt-56 md:tw-pt-72">
      <div class="row tw-justify-center">
        <div class="col-11 col-lg-10 col-xl-9">
          <div class="row tw-justify-center">
            <div>
              <div class="tw-text-2xl md:tw-text-3xl tw-font-semibold tw-text-center">
                Our Blog: Your Beauty and Wellness Guide
              </div>
              <div class="tw-text-center tw-text-[#46474b] tw-text-base tw-pt-2">
                Explore our weekly tips for maintaining gorgeous hair and managing your facial glow. <br class="tw-hidden md:tw-block">
                We're here to help you master the art of self-care."
              </div>
              <div class="row md:tw-flex-nowrap tw-justify-center tw-mt-6 tw-relative">
                <div v-for="blog in blogList" :key="blog.id" class="tw-w-[90%] md:tw-w-[23%] tw-border tw-rounded-[8px] tw-m-2">
                  <div class="tw-flex tw-flex-col">
                    <q-img
                      :src="blog.jetpack_featured_media_url"
                      class="tw-w-full tw-h-44 tw-object-cover tw-rounded-t-[8px]"
                    />
                    <div class="tw-px-2 tw-pt-4 tw-font-medium">
                      {{ blog.title.rendered }}
                    </div>
                    <div class="tw-flex tw-justify-between tw-mx-2 tw-my-4">
                      <div>
                        {{ formatTimestamp(blog.modified) }}
                      </div>
                      <a :href="`${blog.link}`" target="_blank" rel="noopener noreferrer">
                        <q-icon size="1.5rem" name="img:/assets/svg/arrow_right.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="blogIsLoading" class="row tw-justify-center tw-mt-5">
                <q-spinner
                  color="primary"
                  size="3rem"
                  :thickness="5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>


<script setup>
import { ref } from "vue"
import axios from 'axios'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AppFooter from "src/components/AppFooter.vue";

const blogIsLoading = ref(false)
const blogList = ref([])

const fetchBlogList = () => {
  blogIsLoading.value = true
  axios.get('https://tespire.tech/wp-json/wp/v2/posts?categories=36')
  .then((response) => {
    if (response.status === 200) {
      blogIsLoading.value = false
      blogList.value = response.data
    }
  }).catch(() => blogIsLoading.value = false)
}
fetchBlogList()


const formatTimestamp = (timestamp) => {
  dayjs.extend(relativeTime);
  return dayjs(timestamp).fromNow();
};

</script>
