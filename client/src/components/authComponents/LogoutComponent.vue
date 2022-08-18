<script>
export default {
  emits: ["logOutUserData"]
}
</script>


<template>
  <div
    class="flex md:flex-row flex-col-reverse rounded overflow-hidden justify-between custom_shadow_out md:w-4/5 lg:h-[30rem] p-2">
    <div class=" w-full p-10 flex flex-col justify-center space-y-16">
      <h1 class="text-3xl text-center mb-5 font-bold">Sure you want to quit ?</h1>
      <div class="flex justify-evenly">
        <form @submit.prevent="$emit('logOutUserData')" class="w-1/2 text-center">
          <CustomBtn type="submit" class="bg-custom-red text-white">Yes</CustomBtn>
        </form>
        <div class="w-1/2 text-center">
          <CustomBtn class="bg-custom-red text-white" @click="$router.push({ name: 'home'})">No</CustomBtn>
        </div>
      </div>
    </div>
  </div>
</template>
