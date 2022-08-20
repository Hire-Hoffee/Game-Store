<script>
import CartComponent from "@/components/userComponents/CartComponent.vue"; 
import { mapGetters } from "vuex"

export default {
  name: "ShoppingCartView",
  components: {
    CartComponent,
  },
   data() {
    return {
      cartGames: null
    }
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  async mounted() {
    try {
      this.cartGames = (await this.$API.userServices.getCartGames()).data
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
    <CartComponent v-if="cartGames" :games-info="cartGames"/>
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>