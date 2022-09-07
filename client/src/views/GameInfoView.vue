<script>
import GameInfo from "@/components/GameInfo.vue"
import { mapGetters } from "vuex"

export default {
  name: "GameInfoView",
  components: {
    GameInfo
  },
  data() {
    return {
      game: null
    }
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  methods: {
    async getGameInfo() {
      try {
        this.game = (await this.$API.mainServices.getGameInfo(this.$route.params.title)).data
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    },
    async addToCart(data) {
      try {
        const { message } = (await this.$API.userServices.addToCart(data.gameId, { platform: data.chosenPlatform })).data
        this.$store.commit("alertInfoModule/updateAlert", message)
        this.$router.push({ name: "shoppingCart" })
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    },
    async postReview(data) {
      try {
        const reviewData = { 
          reviewContent: data.reviewContent,
          gameRating: data.gameRating 
        }
        const { message } = (await this.$API.userServices.postReview(data.gameId, reviewData)).data
        await this.getGameInfo()
        this.$store.commit("alertInfoModule/updateAlert", message)
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  },
  async mounted() {
    await this.getGameInfo()
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <GameInfo 
      v-if="game" 
      :game-info="game" 
      @addToCartEmit="addToCart" 
      @postReviewEmit="postReview" 
    />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
