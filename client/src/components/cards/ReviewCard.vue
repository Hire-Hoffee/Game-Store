<script>
  export default {
    props: ["userEmail", "userReview", "userRating"],
  }
</script>


<template>
  <div class="w-80 min-h-[24rem] p-3 rounded custom_shadow_out m-2">
    <div class="mb-5 text-xl">
      <h1 class="mb-2">{{ userEmail }}</h1>
      <span class="mb-2 text-custom-red">{{ userRating ? `${userRating}/10` : "Not rated" }}</span>
      <hr class="h-px bg-custom-red border-none">
    </div>
    <div>
      <p>{{ userReview }}</p>
    </div>
  </div>
</template>
