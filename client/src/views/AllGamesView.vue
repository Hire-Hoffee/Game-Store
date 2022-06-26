<script>
import AllGamesComponent from "@/components/AllGamesComponent.vue"
import FilterComponent from "@/components/FilterComponent.vue"

export default {
  components: {
    AllGamesComponent,
    FilterComponent
  },
  data() {
    return {
      allGames: null
    }
  },
  async mounted() {
    try {
      const result = (await this.$API.mainServices.getAllGames()).data
      this.allGames = result
    } catch (error) {
      this.$store.commit("updateError", error)
    }
  }
}
</script>


<template>
  <div class="rounded p-3 custom_shadow_out">
    <ParagraphHeader>All games</ParagraphHeader>
    <div class="flex md:justify-between justify-center">
      <AllGamesComponent class="xl:w-4/5 md:w-4/6 mt-3 mb-3" v-if="allGames" :all-games="allGames"/>
      <FilterComponent class="xl:w-1/5 md:w-2/6 mt-3 mb-3 ml-3 hidden md:block" />
    </div>
  </div>
</template>
