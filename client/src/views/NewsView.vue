<script>
import NewsComponent from "../components/NewsComponent.vue"

export default {
  components: {
    NewsComponent,
  }
}
</script>


<template>
  <div>
    <ParagraphHeader>Games news</ParagraphHeader>

    <div
      class="flex flex-col md:flex-row justify-between md:space-x-8 space-x-0 mb-20 w-full xl:h-112 lg:h-96 md:h-72 h-112 space-y-8 md:space-y-0 sm:text-xl text-base">

      <div class="md:w-1/2 h-1/2 md:h-full">
        <img class="w-full h-5/6 rounded-xl" src="https://picsum.photos/500/300" alt="">
        <h1 class="h-1/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit.</h1>
      </div>

      <div class="md:w-1/2 h-1/2 md:h-full">
        <img class="w-full h-5/6 rounded-xl" src="https://picsum.photos/500/300" alt="">
        <h1 class="h-1/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit.</h1>
      </div>

    </div>

    <div>
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
    </div>
  </div>
</template>


<style>
</style>
