<script>
import CustomHeader from "@/components/UI/CustomHeader.vue"
import CustomFooter from "@/components/UI/CustomFooter.vue"
import ErrorOccurred from "@/components/UI/ErrorOccurred.vue"

import { mapGetters } from "vuex"

export default {
  components: {
    CustomHeader,
    CustomFooter,
    ErrorOccurred
  },
  computed: mapGetters(["getErrorInfo", "getShowError"])
}
</script>

<template>

  <div class="min-h-full flex flex-col items-center">

    <CustomHeader class="mb-24 sticky top-0" />

    <main class="container 2xl:w-5/6 flex-auto flex flex-col justify-center p-3">
      <Transition name="error_fade" mode="out-in">
        <ErrorOccurred v-if="getErrorInfo && getShowError" :error-message="getErrorInfo.response.data.message" />
      </Transition>

      <RouterView v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <CustomFooter class="mt-24" />
  </div>

</template>

<style>
.error_fade-enter-active,
.error_fade-leave-active {
  transition: opacity 0.2s ease;
}

.error_fade-enter-from,
.error_fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
