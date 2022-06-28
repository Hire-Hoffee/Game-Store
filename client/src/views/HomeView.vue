<script>
import MainSlider from "@/components/MainSlider.vue"
import CustomSlider from "@/components/CustomSlider.vue"
import GameNews from "@/components/GameNews.vue"
import CategoryCard from "@/components/CategoryCard.vue"

export default {
  components: {
    MainSlider,
    CustomSlider,
    GameNews,
    CategoryCard
  },
  data() {
    return {
      comingSoonGames: null,
      newGames: null,
      oldGames: null,
      latestNews: null,
      popCategories: null
    }
  },
  async mounted() {
    try {
      [this.comingSoonGames,
      this.newGames,
      this.oldGames,
      this.latestNews,
      this.popCategories] = (await this.$API.mainServices.getMainPage()).data
    } catch (error) {
      this.$store.commit("updateError", error)
    }
  }
}
</script>


<template>

  <div class="main_page">
    <div class="mb-28">
      <ParagraphHeader add-class="w-1/6">New games</ParagraphHeader>
      <MainSlider class="mt-3" v-if="comingSoonGames" :game-data="newGames" />
    </div>

    <div class="mb-28">
      <div class="flex justify-between mb-5">
        <h1 class="text-2xl font-bold">Coming soon</h1>
        <h1 class="text-xl text-custom-red">View all</h1>
      </div>
      <hr class="w-full h-0.5 bg-custom-red border-none">
      <CustomSlider class="mt-5" v-if="comingSoonGames" :game-data="comingSoonGames" />
    </div>

    <div class="mb-28 bg-custom-gray bg-opacity-50 p-3 rounded">
      <div class="flex justify-between mb-3">
        <h1 class="text-2xl font-bold">Game news</h1>
        <h1 class="text-xl text-custom-red">View all</h1>
      </div>
      <hr class="w-full h-0.5 bg-custom-red border-none">
      <GameNews class="mt-5" v-if="latestNews" :news-data="latestNews" />
    </div>

    <div class="mb-28">
      <div class="flex justify-between mb-5">
        <h1 class="text-2xl font-bold">Good old games</h1>
        <h1 class="text-xl text-custom-red">View all</h1>
      </div>
      <hr class="w-full h-0.5 bg-custom-red border-none">
      <CustomSlider class="mt-5" v-if="oldGames" :game-data="oldGames" />
    </div>

    <div>
      <div class="flex justify-between mb-5">
        <h1 class="text-2xl font-bold">Popular categories</h1>
        <h1 class="text-xl text-custom-red">View all</h1>
      </div>
      <hr class="w-full h-0.5 bg-custom-red border-none">
      <div class="flex justify-between flex-wrap mt-5 p-5">
        <CategoryCard v-if="popCategories" v-for="category in popCategories" :category-name="category.genreName"
          :category-SVG="category.genreSVG" :key="category.id" />
      </div>
    </div>
  </div>

</template>
