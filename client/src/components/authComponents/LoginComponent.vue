<script>

</script>


<template>
  <div
    class="flex md:flex-row flex-col-reverse rounded overflow-hidden justify-between custom_shadow_out md:w-4/5 lg:h-[30rem] p-2">
    <div class="md:w-1/2 w-full p-10 flex flex-col justify-center">
      <h1 class="text-3xl text-center mb-5 font-bold">Log in</h1>
      <form @submit.prevent>
        <div class="flex flex-col text-black">
            <FormInput 
            class="my-1.5"
            :input-name="'Your Email'"
            :input-type="'email'"
            :input-id="'user_email'" 
            :input-img="'/src/assets/icons/email.svg'" 
            :input-placeholder="'name@mail.com'"
          />
          <FormInput 
            class="my-1.5"
            :input-name="'Your Password'"
            :input-type="'password'"
            :input-id="'user_password'" 
            :input-img="'/src/assets/icons/password.svg'" 
            :input-placeholder="'8 to 50 characters long'"
          />
        </div>
        <div>
          <p class="mt-1">New user ?
            <span class="text-custom-red hover:opacity-90 duration-100 ml-2">
              <RouterLink :to="{ name: 'registration' }">Sign Up</RouterLink>
            </span>
          </p>
        </div>
        <div class="mt-5 flex justify-center">
          <CustomBtn class="min-w-[65%]" type="submit">Sign Up</CustomBtn>
        </div>
      </form>
    </div>
    <div class="md:w-1/2 w-full h-60 sm:h-auto">
      <img class="w-full h-full rounded" src="https://picsum.photos/450/300" alt="login_image">
    </div>
  </div>
</template>
