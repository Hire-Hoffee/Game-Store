<script>
import NewsComponent from "@/components/NewsComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    NewsComponent,
  },
  data() {
    return {
      latestNews: null,
      allNews: null
    }
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  async mounted() {
    try {
      [this.latestNews, this.allNews] = (await this.$API.mainServices.getGamesNews()).data

    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <ParagraphHeader>Games news</ParagraphHeader>

    <div
      class="flex flex-col md:flex-row justify-between md:space-x-8 space-x-0 mb-20 w-full xl:h-112 lg:h-96 md:h-72 h-112 space-y-8 md:space-y-0 sm:text-xl text-base">
      <div class="md:w-1/2 h-1/2 md:h-full" v-for="item in latestNews">
        <img class="w-full h-5/6 rounded-xl" :src="item.poster" :alt="item.title">
        <h1 class="h-1/6">{{ item.title }}</h1>
      </div>
    </div>

    <div>
      <NewsComponent v-for="item in allNews" :newsTitle="item.title" :newsPoster="item.poster"
        :releaseDate="item.createdAt" />
    </div>
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
