<script>
export default {
  props: ["newsData"],
}
</script>


<template>
  <div>
    <div class="flex flex-col items-center">
      <img :src="newsData.poster" class="md:w-5/6 md:h-[32rem] w-full h-96 lg:object-fill object-cover rounded-md" alt="news poster">
      <div class="flex my-8 w-full justify-between">
        <h1 class="text-xl font-bold">{{ newsData.title }}</h1>
        <h1 class="text-md font-bold">{{ newsData.createdAt }}</h1>
      </div>
    </div>
    <div>
      <p>{{ newsData.content }}</p>
    </div>
  </div>
</template>
