<script>
import CustomHeader from "./components/ui/CustomHeader.vue"
import CustomFooter from "./components/ui/CustomFooter.vue"

export default {
  components: {
    CustomHeader,
    CustomFooter
  }
}
</script>

<template>

  <div class="min-h-full flex flex-col items-center">

    <CustomHeader class="mb-24 sticky top-0" />

    <main class="container 2xl:w-5/6 flex-auto p-3">
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
