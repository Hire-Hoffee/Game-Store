<script>
import CartItem from "@/components/cards/CartItem.vue"

export default {
  components: {
    CartItem,
  },
  emits: ["changeAmountParent"],
  props: ["gamesInfo"],
  computed: {
    totalSum() {
      return this.gamesInfo.games.reduce((acc, curr) => {
        return acc + (curr.orderInfo.quantity * curr.price)
      }, 0)
    }
  }
}
</script>


<template>
  <div class="p-5 custom_shadow_out rounded">
    <h1 class="mb-10 text-2xl font-bold uppercase">Shopping cart</h1>
    <div class="hidden sm:block">
      <div class="flex mb-3 text-center text-2xl font-bold">
        <div class="sm:w-6/12 mb-5 sm:mb-0">
          <h1 class="text-center">Item</h1>
        </div>
        <div class="flex flex-col sm:flex-row items-center sm:justify-between sm:w-6/12 sm:pr-14">
          <div class="flex items-center justify-center sm:w-96 w-36 mb-3 sm:mb-0">
            <h1>Amount</h1>
          </div>
          <div class="w-full mb-3 sm:mb-0">
            <h1 class="text-center">Price</h1>
          </div>
          <div class="w-full">
            <h1 class="text-center">Total</h1>
          </div>
        </div>
      </div>
      <hr class="w-full h-0.5 bg-custom-red border-none hidden sm:block">
    </div>

    <div class="mt-10">
      <CartItem class="mb-5" v-if="gamesInfo.games.length != 0" v-for="game in gamesInfo.games" 
        :game-title="game.gameTitle" 
        :game-poster="game.poster" 
        :game-price="game.price"
        :game-amount="game.orderInfo.quantity"
        :total-price="game.price * game.orderInfo.quantity"
        :game-id="game.id"
        :key="game.id"
        @changeAmountChild="data => $emit('changeAmountParent', data)"
      />
      <div v-else>
        <p class="text-2xl text-center my-16">Your cart is empty</p>
      </div>
    </div>

    <div class="flex items-center justify-end space-x-10">
      <div>
        <CustomBtn class="bg-custom-red text-xl">Order and payment</CustomBtn>
      </div>
      <div class="p-5 font-bold text-2xl text-custom-red rounded inner_shadow_custom">
        <strong>{{ totalSum }} $</strong>
      </div>
    </div>
  </div>
</template>
