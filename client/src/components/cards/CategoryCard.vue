<script>
export default {
  props: ["categoryName", "categorySVG"]
}
</script>


<template>
  <RouterLink style="border: none;" :to="{ name: 'allCategories', query: { genre: categoryName } }">
    <div
      class="flex flex-col items-center justify-center custom_shadow_out xl:w-56 xl:h-56 lg:w-40 lg:h-40 w-32 h-32 m-3 rounded-lg hover:scale-105 duration-300 cursor-pointer">
      <img class="w-[70%] h-[70%]" :src="categorySVG" alt="category_img">
      <h2 class="lg:text-xl text-lg mt-3">{{ categoryName || "Category" }}</h2>
    </div>
  </RouterLink>
</template>
