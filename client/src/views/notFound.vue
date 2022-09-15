<template>
  <div class="bg-custom-black flex flex-col items-center justify-around shadow-custom-outer p-10 rounded-lg h-[25vh]">
    <h1 class="text-3xl">Page not found</h1>
    <p class="text-lg text-custom-red">
      <RouterLink :to="{ name: 'home' }">Go to the home page</RouterLink>
    </p>
  </div>
</template>