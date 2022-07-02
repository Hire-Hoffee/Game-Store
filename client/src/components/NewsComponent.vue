<script>
export default {
  props: ["newsTitle", "newsPoster", "releaseDate"],
}
</script>


<template>
  <div class="sm:h-36 h-full">
    <div class="flex flex-col sm:flex-row space-x-10 w-full h-full py-3 space-y-8 sm:space-y-0">
      <div class="lg:w-1/5 md:w-1/4 w-full h-48 sm:h-auto">
        <img class="w-full h-full rounded-xl" :src="newsPoster" alt="poster">
      </div>
      <div class="lg:w-4/5 md:w-3/4 w-full flex flex-col justify-between space-y-8 sm:space-y-0">
        <div class="w-4/5">
          <h1 class="font-bold text-xl">{{ newsTitle }}</h1>
        </div>
        <div class="flex space-x-8">
          <div>
            <h2>{{ new Date(releaseDate).toLocaleDateString() }}</h2>
          </div>
          <button class="text-custom-red hover:opacity-95">Read more</button>
        </div>
      </div>
    </div>
    <hr class="w-full h-[1px] bg-custom-red border-none mb-5">
  </div>
</template>
