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
      categories: null,
      filteredGames: null
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
    },
    async searchByFilter(data) {
      try {
        const searchParams = {
          price: data.price,
          genre: data.genre,
          platform: data.platform,
        }

        this.$router.push({ query: searchParams })
        this.filteredGames = (await this.$API.mainServices.searchByFilter(searchParams)).data
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
    try {
      await this.getGames(this.$route.query.page)
      this.categories = (await this.$API.mainServices.getAllCategories()).data
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  },
  beforeRouteUpdate(to, from) {
    this.filteredGames = null
  },
  beforeRouteLeave(to, from) {
    this.filteredGames = null
  },
}
</script>


<template>
  <div class="rounded p-3 custom_shadow_out" v-if="!getLoadingStatus">
    <ParagraphHeader>{{ filteredGames ? "Found games" : "All games" }}</ParagraphHeader>
    <div class="flex md:justify-between justify-center relative">
      <AllGamesComponent 
        class="xl:w-4/5 md:w-4/6 mt-3 mb-3" 
        v-if="filteredGames" 
        :all-games="filteredGames"
        :switch-pages="false"
      />
      
      <AllGamesComponent 
        class="xl:w-4/5 md:w-4/6 mt-3 mb-3" 
        v-else-if="allGames"
        :all-games="allGames" 
        :switch-pages="true"
      />

      <div v-if="filteredGames?.length == 0">
        <h1 class="text-4xl absolute left-1/3 top-1/3">Not found</h1>
      </div>
      
      <FilterComponent 
        class="xl:w-1/5 md:w-2/6 mt-3 mb-3 ml-3 hidden md:block" 
        v-if="categories" 
        :all-categories="categories" 
        @searchGamesEmit="searchByFilter" 
      />
    </div>
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
