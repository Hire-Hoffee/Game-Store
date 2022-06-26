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
      const result = (await this.$API.mainServices.getGameInfo(urlGameTitle)).data
      this.game = result
    } catch (error) {
      this.$store.commit("updateError", error)
    }
  }
}
</script>


<template>
  <GameInfo v-if="game" :game-info="game" />
</template>
