<script>
export default {
  emits: ["searchGamesEmit"],
  props: ["allCategories"],
  data() {
    return {
      searchData: {
        price: "",
        genre: "",
        platform: ""
      }
    }
  },
  methods: {
    searchFilteredGames() {
      this.$emit("searchGamesEmit", this.searchData)
    }
  }
}
</script>


<template>
  <div class="text-xl inner_shadow_custom p-4 rounded-xl h-full">
    <h1 class="text-2xl mt-3 font-bold mb-2">Filters</h1>
    <hr class="w-full h-0.5 mb-3 bg-custom-red border-none">

    <form @submit.prevent="searchFilteredGames" class="mt-5">
      <div class="flex flex-col">
        <h1 class="text-2xl mt-3 font-bold mb-2">Price</h1>
        <hr class="w-1/3 h-0.5 mb-3 bg-custom-red border-none">
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="price" v-model="searchData.price" value="0-20">
          Under 20$
        </label>
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="price" v-model="searchData.price" value="20-40">
          From 20$ to 40$
        </label>
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="price" v-model="searchData.price" value="40-60">
          From 40$ to 60$
        </label>
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="price" v-model="searchData.price" value="60-999">
          More than 60$
        </label>
      </div>

      <div class="flex flex-col">
        <h1 class="text-2xl mt-3 font-bold mb-2">Genres</h1>
        <hr class="w-1/3 h-0.5 mb-3 bg-custom-red border-none">
        <div class="flex flex-col h-32 overflow-auto">
          <label v-for="genre in allCategories">
            <input type="radio" class="h-4 w-4 accent-custom-red" name="genre" v-model="searchData.genre" :value="genre.genreName">
            {{ genre.genreName }}
          </label>
        </div>
      </div>

      <div class="flex flex-col">
        <h1 class="text-2xl mt-3 font-bold mb-2">Platform</h1>
        <hr class="w-1/3 h-0.5 mb-3 bg-custom-red border-none">
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="platform" v-model="searchData.platform" value="PlayStation">
          PlayStation
        </label>
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="platform" v-model="searchData.platform" value="Xbox">
          Xbox
        </label>
        <label>
          <input type="radio" class="h-4 w-4 accent-custom-red" name="platform" v-model="searchData.platform" value="Windows">
          Windows
        </label>
      </div>

      <div class="flex justify-center mt-5">
        <CustomBtn type="submit" class="bg-custom-red px-7 text-white">Search</CustomBtn>
      </div>
      
    </form>
  </div>
</template>
