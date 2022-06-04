
<template>
<footer class="bg-custom-black w-full h-16 flex justify-between items-center px-12 font-bold drop_shadow_custom_up">
  <div class="text-xl text-custom-red ">
    <h1>GameMuffin</h1>
  </div>
  <div class="space-x-12 px-4 py-2 rounded inner_shadow hidden sm:flex">
    <img src="../../assets/icons/githubLogo.svg" alt="githubLogo">
    <img src="../../assets/icons/telegramLogo.svg" alt="telegramLogo">
    <img src="../../assets/icons/vkLogo.svg" alt="vkLogo">
  </div>
  <div>
    <img class="w-[80%] h-[80%] sm:w-full sm:h-full" src="../../assets/icons/logo.svg" alt="site logo">
  </div>
</footer>
</template>


<style scoped>
.drop_shadow_custom_up {
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
}
.inner_shadow {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
