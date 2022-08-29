<script>
import GameCard from "@/components/cards/GameCard.vue"
import PagesSwitcher from "@/components/UI/PagesSwitcher.vue"

export default {
  components: {
    GameCard,
    PagesSwitcher
  },
  props: ["allGames"]
}
</script>


<template>
  <div class="flex flex-col justify-between">
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4 md:gap-x-0 grid_games_cards justify-items-center">
      <GameCard class="xl:w-52 lg:w-44" v-for="game in allGames" 
        :game-title="game.gameTitle" 
        :game-poster="game.poster"
        :game-price="game.price"
        :key="game.id"
      />
    </div>
    <div class="flex justify-center">
      <PagesSwitcher class="mt-10 mb-5" />
    </div>
  </div>
</template>


<style scoped>
@media (max-width: 375px) {
  .grid_games_cards {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
