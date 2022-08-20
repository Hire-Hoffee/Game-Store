<script>
export default {
  props: ["gameTitle", "gamePoster", "gamePrice"]
}
</script>


<template>
  <div
    class="flex sm:flex-row flex-col w-full sm:h-24 sm:justify-between items-center rounded-xl inner_shadow_custom overflow-hidden text-2xl p-5 sm:p-0">
    <div class="sm:w-2/12 w-full h-48 sm:h-full mb-5 sm:mb-0">
      <img class="w-full h-full rounded-xl sm:rounded-none" :src="gamePoster" :alt="gameTitle">
    </div>
    <div class="sm:w-4/12 mb-5 sm:mb-0">
      <h1 class="text-center">{{ gameTitle }}</h1>
    </div>
    <div class="flex flex-col sm:flex-row items-center sm:justify-between sm:w-6/12 sm:pr-14">
      <div class="flex items-center justify-between sm:w-96 w-36 mb-3 sm:mb-0">
        <button><img src="@/assets/icons/minus.svg" alt="minus"></button>
        <h1>1</h1>
        <button><img src="@/assets/icons/plus.svg" alt="plus"></button>
      </div>
      <div class="w-full mb-3 sm:mb-0">
        <h1 class="text-center sm:font-bold sm:text-2xl sm:hidden">Price</h1>
        <hr class="w-1/2 m-auto mb-2 h-0.5 bg-custom-red border-none sm:hidden">
        <h1 class="text-center">{{gamePrice}} $</h1>
      </div>
      <div class="w-full">
        <h1 class="text-center sm:font-bold sm:text-2xl sm:hidden">Total</h1>
        <hr class="w-1/2 m-auto mb-2 h-0.5 bg-custom-red border-none sm:hidden">
        <h1 class="text-center">60 $</h1>
      </div>
    </div>
  </div>
</template>
