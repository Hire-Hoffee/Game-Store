<script>
import CategoryCard from "@/components/CategoryCard.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      categories: null
    }
  },
  computed: mapGetters(["getLoadingStatus"]),
  async mounted() {
    try {
      this.categories = (await this.$API.mainServices.getAllCategories()).data
    } catch (error) {
      this.$store.commit("updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <ParagraphHeader>All categories</ParagraphHeader>
    <div
      class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4 md:gap-x-0 grid_games_cards justify-items-center">
      <CategoryCard v-if="categories" v-for="category in categories" 
        :category-name="category.genreName" 
        :category-SVG="category.genreSVG" 
        :key="category.id" />
    </div>
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
