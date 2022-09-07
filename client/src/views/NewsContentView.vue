<script>
import NewsContentComponent from '@/components/NewsContentComponent.vue';
import { mapGetters } from "vuex"

export default {
  components: {
    NewsContentComponent
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  data() {
    return {
      newsContent: null
    }
  },
  async mounted() {
    try {
      const result = (await this.$API.mainServices.getNewsContent(this.$route.params.newsId)).data
      result.createdAt = new Date(result.createdAt).toLocaleString()
      this.newsContent = result
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <NewsContentComponent v-if="newsContent" :news-data="newsContent" />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
