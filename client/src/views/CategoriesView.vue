<script>
import CategoryCard from "@/components/cards/CategoryCard.vue"
import GameCard from "@/components/cards/GameCard.vue"
import { mapGetters } from "vuex"

export default {
  name: "CategoriesView",
  components: {
    CategoryCard,
    GameCard
  },
  data() {
    return {
      categories: null,
      foundGames: null
    }
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  methods: {
    async searchGamesOnGenres(genre) {
      try {
        this.foundGames = (await this.$API.mainServices.searchGamesOnGenres(genre)).data
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  },
  async mounted() {
    try {
      this.categories = (await this.$API.mainServices.getAllCategories()).data
      if (this.$route.query.genre) {
        this.searchGamesOnGenres(this.$route.query.genre)
      }
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  },
  beforeRouteUpdate(to, from) {
    if (to.query.genre) {
      this.searchGamesOnGenres(to.query.genre)
      return
    }
    this.foundGames = null
  },
  beforeRouteLeave(to, from) {
    this.foundGames = null
  },
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <ParagraphHeader>{{ $route.query.genre ? `${$route.query.genre} games` : "All categories" }}</ParagraphHeader>

    <div v-if="!foundGames"
      class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4 md:gap-x-0 grid_games_cards justify-items-center">
      <CategoryCard v-if="categories" v-for="category in categories" 
        :category-name="category.genreName" 
        :category-SVG="category.genreSVG" 
        :key="category.id" 
      />
    </div>

    <div v-else
      class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4 md:gap-x-0 grid_games_cards justify-items-center">
      <GameCard class="xl:w-52 lg:w-44" v-for="game in foundGames" 
        :game-title="game.gameTitle" 
        :game-poster="game.poster"
        :game-price="game.price" 
        :key="game.id" 
      />
    </div>

  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
