<script>
import GameInfo from "@/components/GameInfo.vue"

export default {
  components: {
    GameInfo
  },
  data() {
    return {
      game: null
    }
  },
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
  <GameInfo v-if="game" :game-info="game" />
</template>
