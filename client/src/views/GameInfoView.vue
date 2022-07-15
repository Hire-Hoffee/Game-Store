<script>
import GameInfo from "@/components/GameInfo.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    GameInfo
  },
  data() {
    return {
      game: null
    }
  },
  computed: mapGetters(["getLoadingStatus"]),
  async mounted() {
    try {
      const urlGameTitle = this.$route.params.title
      this.game = (await this.$API.mainServices.getGameInfo(urlGameTitle)).data
    } catch (error) {
      this.$store.commit("updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <GameInfo v-if="game" :game-info="game" />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
