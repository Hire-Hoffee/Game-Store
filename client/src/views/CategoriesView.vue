<script>
import CategoryCard from "@/components/CategoryCard.vue"

export default {
  components: {
    CategoryCard,
  },
  data() {
    return {
      categories: null
    }
  },
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
  <div>
    <ParagraphHeader>All categories</ParagraphHeader>
    <div
      class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4 md:gap-x-0 grid_games_cards justify-items-center">
      <CategoryCard v-if="categories" v-for="category in categories" 
        :category-name="category.genreName" 
        :category-SVG="category.genreSVG" 
        :key="category.id" />
    </div>
  </div>
</template>
