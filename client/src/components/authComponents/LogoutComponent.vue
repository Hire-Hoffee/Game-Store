<script>
export default {
  emits: ["logOutUserData"]
}
</script>


<template>
  <div
    class="flex md:flex-row flex-col-reverse rounded overflow-hidden justify-between custom_shadow_out md:w-4/5 lg:h-[30rem] p-2">
    <div class="md:w-1/2 w-full p-10 flex flex-col justify-center space-y-16">
      <h1 class="text-3xl text-center mb-5 font-bold">Sure you want to quit ?</h1>
      <div class="flex justify-evenly">
        <form @submit.prevent="$emit('logOutUserData')">
          <CustomBtn class="text-xl px-8" type="submit">Yes</CustomBtn>
        </form>
        <RouterLink :to="{ name: 'home' }"><CustomBtn class="text-xl px-8" type="submit">No</CustomBtn></RouterLink>
      </div>
    </div>
    <div class="md:w-1/2 w-full h-60 sm:h-auto">
      <img class="w-full h-full rounded" src="https://picsum.photos/450/300" alt="login_image">
    </div>
  </div>
</template>
