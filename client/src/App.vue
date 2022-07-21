<script>
import CustomHeader from "@/components/UI/CustomHeader.vue"
import CustomFooter from "@/components/UI/CustomFooter.vue"
import AlertInformation from "@/components/UI/AlertInformation.vue"

import { mapGetters } from "vuex"

export default {
  components: {
    CustomHeader,
    CustomFooter,
    AlertInformation
  },
  computed: mapGetters("alertInfoModule", ["getErrorInfo", "getAlertInfo"])
}
</script>

<template>

  <div class="min-h-full flex flex-col items-center">

    <CustomHeader class="mb-24 sticky top-0" />

    <main class="container 2xl:w-5/6 flex-auto flex flex-col justify-center p-3 relative">
      <Transition name="error_fade" mode="out-in">
        <AlertInformation 
          v-if="getErrorInfo || getAlertInfo"
          :alert-message="getErrorInfo?.response.data.message || getAlertInfo" 
        />
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
