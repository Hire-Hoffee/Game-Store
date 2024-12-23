<script>
import { mapGetters } from "vuex"

export default {
  computed: mapGetters("themeModule", ["getColorMode"]),
}
</script>


<template>
  <footer class="bg-slate-50 dark:bg-custom-black w-full h-16 flex justify-between items-center px-12 font-bold drop_shadow_custom_up">
    <div class="text-xl text-custom-red ">
      <h1>GameMuffin</h1>
    </div>
    <div v-if="getColorMode == 'dark'" class="space-x-12 px-4 py-2 rounded inner_shadow hidden sm:flex">
      <img src="@/assets/icons/githubLogo_white.svg" alt="githubLogo">
      <img src="@/assets/icons/telegramLogo_white.svg" alt="telegramLogo">
      <img src="@/assets/icons/vkLogo_white.svg" alt="vkLogo">
    </div>
    <div v-else class="space-x-12 px-4 py-2 rounded inner_shadow hidden sm:flex">
      <img src="@/assets/icons/githubLogo_black.svg" alt="githubLogo">
      <img src="@/assets/icons/telegramLogo_black.svg" alt="telegramLogo">
      <img src="@/assets/icons/vkLogo_black.svg" alt="vkLogo">
    </div>
    <div>
      <img class="w-[80%] h-[80%] sm:w-full sm:h-full" src="@/assets/icons/logo.svg" alt="site logo">
    </div>
  </footer>
</template>


<style scoped>
.drop_shadow_custom_up {
  @apply shadow-2xl dark:shadow-[0px_-4px_4px_rgba(0,0,0,0.25)];
}

.inner_shadow {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
