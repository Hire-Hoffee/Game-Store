<script>
import CategoryCard from "../components/CategoryCard.vue"

export default {
  components: {
    CategoryCard,
}
}
</script>


<template>
<div>
  <ParagraphHeader>All categories</ParagraphHeader>

  <div class="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4 md:gap-x-0 grid_games_cards justify-items-center">
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
    <CategoryCard />
  </div>
</div>
</template>


<style>

</style>
