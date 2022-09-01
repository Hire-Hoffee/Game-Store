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
    async addToCart(gameId) {
      try {
        const { message } = (await this.$API.userServices.addToCart(gameId)).data

        this.$store.commit("alertInfoModule/updateAlert", message)
        this.$router.push({ name: "shoppingCart" })
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    },
    async postReview(data) {
      try {
        const { message } = (await this.$API.userServices.postReview(data.gameId, { reviewContent: data.reviewContent })).data
        this.$store.commit("alertInfoModule/updateAlert", message)
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  },
  async mounted() {
    try {
      const urlGameTitle = this.$route.params.title
      this.game = (await this.$API.mainServices.getGameInfo(urlGameTitle)).data
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <GameInfo 
      v-if="game" 
      :game-info="game" 
      @buyGame="addToCart" 
      @postReviewEmit="postReview" 
    />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
