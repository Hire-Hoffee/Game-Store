<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  computed: mapGetters("pagesCountModule", ["getTotalPages"]),
  methods: mapMutations("pagesCountModule", ["updateCurrentPage"])
}
</script>


<template>
  <div class="md:w-112 w-full flex justify-between items-center inner_shadow_custom p-3 rounded-xl text-white">
    <div>
      <img src="@/assets/icons/arrowLeft.svg" alt="arrow_left">
    </div>

    <div class="flex space-x-3">
      <div
        class="md:px-4 md:py-2 px-3 py-1 text-center rounded-full bg-custom-red hover:cursor-pointer hover:opacity-80 duration-200"
        v-for="page in getTotalPages" @click="updateCurrentPage(page)">
        {{ page }}</div>
    </div>

    <div>
      <img src="@/assets/icons/arrowRight.svg" alt="arrow_right">
    </div>
  </div>
</template>
