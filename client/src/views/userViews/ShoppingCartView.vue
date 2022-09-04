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
      cartGames: null,
      reqDelay: null
    }
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  methods: {
    async changeAmount(data) {
      try {
        if (!data.amount) {
          return
        }
        const changedAmount = {
          cartId: this.cartGames.id,
          gameId: data.gameId,
          platformId: data.platformId,
          amount: data.amount
        }
        const result = (await this.$API.userServices.changeAmount(changedAmount)).data
        this.reqDelay = null
        this.cartGames = result
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    },
    setupFunc(data) {
      if (typeof this.reqDelay === "number") {
        this.cancelRequest()
      }
      this.reqDelay = setTimeout(() => {
        this.changeAmount(data);
      }, 300);
    },
    cancelRequest() {
      clearTimeout(this.reqDelay)
    },

    async deleteGameFromCart(gameId) {
      const result = (await this.$API.userServices.deleteFromCart(gameId)).data
      this.cartGames = result
    },

  },
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
  <div>
    <CartComponent v-if="cartGames" 
      :games-info="cartGames" 
      @changeAmountParent="setupFunc" 
      @deleteItemParent="deleteGameFromCart"
    />
  </div>
</template>