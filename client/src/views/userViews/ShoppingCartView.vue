<script>
import CartComponent from "@/components/userComponents/CartComponent.vue"; 
import { mapGetters } from "vuex"

export default {
  name: "shoppingCart",
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
      console.log(this.cartGames);
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  }
}
</script>


<template>
  <div v-if="!getLoadingStatus">
  <button @click="$forceUpdate()" class="bg-orange-300 p-4">click</button>
    <CartComponent v-if="cartGames" :games-info="cartGames"/>
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>