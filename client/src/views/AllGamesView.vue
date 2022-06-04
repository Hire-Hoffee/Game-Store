<script>
import AllGamesComponent from "../components/AllGamesComponent.vue"
import FilterComponent from "../components/FilterComponent.vue"

export default {
  components: {
    AllGamesComponent,
    FilterComponent
  }
}
</script>


<template>
  <div class="rounded p-3 custom_shadow_out">
    <ParagraphHeader>All games</ParagraphHeader>
    <div class="flex md:justify-between justify-center">
      <AllGamesComponent class="xl:w-4/5 md:w-4/6 mt-3 mb-3" />
      <FilterComponent class="xl:w-1/5 md:w-2/6 mt-3 mb-3 ml-3 hidden md:block" />
    </div>
  </div>
</template>
