<script>
export default {
  props: ["gameTitle", "gamePoster", "gamePrice", "gameAmount", "totalPrice", "gameId", "platformId", "gamePlatform"],
  emits: ["changeAmountChild", "deleteItemChild"]
}
</script>


<template>
  <div
    class="flex sm:flex-row flex-col w-full sm:h-24 sm:justify-between items-center rounded-xl inner_shadow_custom overflow-hidden text-2xl p-5 sm:p-0 relative">
    <button class="absolute top-2 right-2" @click="$emit('deleteItemChild', gameId)">
      <img src="@/assets/icons/exit.svg" class="sm:w-3 sm:h-3 w-5 h-5" alt="delete">
    </button>
    <div class="sm:w-2/12 w-full h-48 sm:h-full mb-5 sm:mb-0">
      <img class="w-full h-full rounded-xl sm:rounded-none object-cover" :src="gamePoster" :alt="gameTitle">
    </div>
    <div class="sm:w-4/12 mb-5 sm:mb-0">
      <h1 class="text-center">{{ gameTitle }}</h1>
    </div>
    <div class="flex flex-col sm:flex-row items-center sm:justify-between sm:w-6/12 sm:pr-14">
      <div class="flex items-center justify-between sm:w-96 w-36 mb-3 sm:mb-0">
        <button @click="$emit('changeAmountChild', { amount: gameAmount > 1 ? gameAmount -= 1 : false, gameId, platformId })"><img src="@/assets/icons/minus.svg" alt="minus"></button>
        <h1>{{ gameAmount }}</h1>
        <button @click="$emit('changeAmountChild', { amount: gameAmount < 10 ? gameAmount += 1 : false, gameId, platformId })"><img src="@/assets/icons/plus.svg" alt="plus"></button>
      </div>
      <div class="w-full mb-3 sm:mb-0">
        <h1 class="text-center sm:font-bold sm:text-2xl sm:hidden">Price</h1>
        <hr class="w-1/2 m-auto mb-2 h-0.5 bg-custom-red border-none sm:hidden">
        <h1 class="text-center">{{ gamePrice }} $</h1>
      </div>
      <div class="w-full mb-3 sm:mb-0">
        <h1 class="text-center sm:font-bold sm:text-2xl sm:hidden">Platform</h1>
        <hr class="w-1/2 m-auto mb-2 h-0.5 bg-custom-red border-none sm:hidden">
        <h1 class="text-center">{{ gamePlatform }}</h1>
      </div>
      <div class="w-full">
        <h1 class="text-center sm:font-bold sm:text-2xl sm:hidden">Total</h1>
        <hr class="w-1/2 m-auto mb-2 h-0.5 bg-custom-red border-none sm:hidden">
        <h1 class="text-center">{{ totalPrice }} $</h1>
      </div>
    </div>
  </div>
</template>
