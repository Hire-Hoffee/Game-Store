<script>
import CartItem from "@/components/cards/CartItem.vue"

export default {
  components: {
    CartItem,
  },
  emits: ["changeAmountParent", "deleteItemParent"],
  props: ["gamesInfo"],
  computed: {
    totalSum() {
      return this.gamesInfo.orderInfos.reduce((acc, curr) => {
        return acc + (curr.quantity * curr.game.price)
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
          <div class="w-full mb-3 sm:mb-0">
            <h1 class="text-center">Platform</h1>
          </div>
          <div class="w-full">
            <h1 class="text-center">Total</h1>
          </div>
        </div>
      </div>
      <hr class="w-full h-0.5 bg-custom-red border-none hidden sm:block">
    </div>

    <div class="mt-10">
      <TransitionGroup name="list" tag="ul">
        <CartItem class="mb-5" v-if="gamesInfo.orderInfos.length != 0" v-for="cartItem in gamesInfo.orderInfos" 
          :game-title="cartItem.game.gameTitle" 
          :game-poster="cartItem.game.poster" 
          :game-price="cartItem.game.price"
          :game-amount="cartItem.quantity"
          :game-platform="cartItem.platform.platformName"
          :total-price="cartItem.game.price * cartItem.quantity"
          :game-id="cartItem.gameId"
          :platform-id="cartItem.platformId"
          :key="cartItem.gameId"
          @changeAmountChild="data => $emit('changeAmountParent', data)"
          @deleteItemChild="data => $emit('deleteItemParent', data)"
        />
        <div v-else>
          <p class="text-2xl text-center my-16">Your cart is empty</p>
        </div>
      </TransitionGroup>
    </div>

    <div class="flex items-center sm:justify-end justify-between">
      <div class="sm:pr-10">
        <CustomBtn class="bg-custom-red text-xl text-white">Order and payment</CustomBtn>
      </div>
      <div class="sm:px-5 px-3 py-2 font-bold text-2xl text-custom-red rounded inner_shadow_custom">
        <strong>{{ totalSum }} $</strong>
      </div>
    </div>
  </div>
</template>


<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>