<script>
export default {
  props: ["newsData"],
}
</script>


<template>
  <div class="flex lg:flex-row flex-col lg:h-[22rem] text-sm md:text-lg">

    <div class="flex lg:w-7/12 rounded-lg overflow-hidden custom_shadow_out mb-5 lg:mb-0">
      <div class="w-7/12">
        <img class="w-full h-full object-cover" :src="newsData[0].poster" :alt="newsData[0].title">
      </div>
      <div class="flex flex-col items-end justify-between sm:p-5 p-2 relative w-5/12">
        <h2>{{ newsData[0].title }}</h2>
        <RouterLink :to="{ name: 'newsContent', params: { newsId: newsData[0].id } }"
          class="min-w-fit text-white bg-custom-red absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg rounded-r-none rounded-b-none px-1 py-0 md:px-3 md:py-1">
          Read more
        </RouterLink>
      </div>
    </div>

    <div class="lg:w-5/12 lg:ml-5 m-2 lg:m-0 flex flex-col justify-between">

      <div class="flex rounded-lg overflow-hidden custom_shadow_out h-full mb-5">
        <div class="w-6/12">
          <img class="w-full h-full object-cover" :src="newsData[1].poster" :alt="newsData[1].title">
        </div>
        <div class="flex flex-col items-end justify-between sm:p-5 p-2 relative w-6/12">
          <h2>{{ newsData[1].title }}</h2>
          <RouterLink :to="{ name: 'newsContent', params: { newsId: newsData[1].id } }"
            class="min-w-fit text-white bg-custom-red absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg rounded-r-none rounded-b-none px-1 py-0 md:px-3 md:py-1">
            Read more
          </RouterLink>
        </div>
      </div>

      <div class="flex rounded-lg overflow-hidden custom_shadow_out h-full mb-5">
        <div class="w-6/12">
          <img class="w-full h-full object-cover" :src="newsData[2].poster" :alt="newsData[2].title">
        </div>
        <div class="flex flex-col items-end justify-between sm:p-5 p-2 relative w-6/12">
          <h2>{{ newsData[2].title }}</h2>
          <RouterLink :to="{ name: 'newsContent', params: { newsId: newsData[2].id } }"
            class="min-w-fit text-white bg-custom-red absolute bottom-0 right-0 rounded-br-lg rounded-tl-lg rounded-r-none rounded-b-none px-1 py-0 md:px-3 md:py-1">
            Read more
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
