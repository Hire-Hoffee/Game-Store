<script>
export default {
  props: ["gamePoster", "gameTitle"],
  methods: {
    clearSearchData() {
      this.$store.commit("searchGamesModule/updateFoundGames", null)
    }
  }
}
</script>


<template>
  <RouterLink @click="clearSearchData" :to="{ name: 'gameInfo', params: { title: gameTitle?.toLowerCase().split(' ').join('_'), gameTitle } }">
    <div class="flex space-x-2 dark:bg-custom-black bg-slate-300 shadow-md p-1 rounded mb-2">
      <div>
        <img :src="gamePoster" class="w-16 h-16 object-cover rounded" alt="game_poster">
      </div>
      <div class="w-full flex items-center">
        <h1 class="text-lg">
          {{ gameTitle }}
        </h1>
      </div>
    </div>
  </RouterLink>
</template>