<script>
import AllGamesComponent from "@/components/AllGamesComponent.vue"
import FilterComponent from "@/components/FilterComponent.vue"
import { mapGetters } from "vuex"

export default {
  name: "AllGamesView",
  components: {
    AllGamesComponent,
    FilterComponent
  },
  data() {
    return {
      allGames: null,
    }
  },
  computed: {
    ...mapGetters("pagesCountModule", ["getCurrentPage"]),
    ...mapGetters("isLoadingModule", ["getLoadingStatus"]),
  },
  methods: {
    async getGames(pageNum) {
      try {
        const { count, rows, limit } = (await this.$API.mainServices.getAllGames(pageNum)).data
        this.allGames = rows
        this.$store.commit("pagesCountModule/updateTotalPages", Math.ceil(count / limit))

        this.$router.push({ query: { page: pageNum } })
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  },
  watch: {
    async getCurrentPage(newValue) {
      await this.getGames(newValue)
    }
  },
  async mounted() {
    await this.getGames(this.$route.query.page)
  }
}
</script>


<template>
  <div class="rounded p-3 custom_shadow_out" v-if="!getLoadingStatus">
    <ParagraphHeader>All games</ParagraphHeader>
    <div class="flex md:justify-between justify-center">
      <AllGamesComponent class="xl:w-4/5 md:w-4/6 mt-3 mb-3" v-if="allGames" :all-games="allGames" />
      <FilterComponent class="xl:w-1/5 md:w-2/6 mt-3 mb-3 ml-3 hidden md:block" />
    </div>
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
