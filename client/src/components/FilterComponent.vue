
<template>
  <div class="text-xl inner_shadow_custom p-4 rounded-xl h-full">
    <h1 class="text-2xl mt-3 font-bold mb-2">Filters</h1>
    <hr class="w-full h-0.5 mb-3 bg-custom-red border-none">

    <form class="mt-5">
      <div class="flex flex-col">
        <h1 class="text-2xl mt-3 font-bold mb-2">Price</h1>
        <hr class="w-1/3 h-0.5 mb-3 bg-custom-red border-none">
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          Under 20$
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          From 20$ to 40$
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          From 40$ to 60$
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          More than 60$
        </label>
      </div>

      <div class="flex flex-col">
        <h1 class="text-2xl mt-3 font-bold mb-2">Genres</h1>
        <hr class="w-1/3 h-0.5 mb-3 bg-custom-red border-none">
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          Adventure
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          Action
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          Survival
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          Horror
        </label>
        <div class="flex justify-center mt-1">
          <CustomBtn class="px-7">View all</CustomBtn>
        </div>
      </div>

      <div class="flex flex-col">
        <h1 class="text-2xl mt-3 font-bold mb-2">Platform</h1>
        <hr class="w-1/3 h-0.5 mb-3 bg-custom-red border-none">
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          PlayStation
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          Xbox
        </label>
        <label>
          <input type="checkbox" class="h-4 w-4" name="" value="">
          PC
        </label>
      </div>
      <div class="flex justify-center mt-5">
        <CustomBtn class="bg-custom-red px-7">Search</CustomBtn>
      </div>
    </form>
  </div>
</template>
