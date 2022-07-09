<template>
  <div
    class="flex md:flex-row flex-col-reverse rounded overflow-hidden justify-between custom_shadow_out md:w-4/5 lg:h-112 p-2">
    <div class="md:w-1/2 w-full p-10 flex flex-col justify-center">
      <h1 class="text-3xl text-center mb-10 font-bold">Registration</h1>
      <form>
        <div class="flex flex-col space-y-5">
          <input type="email" class="rounded p-2 text-xl focus:outline-none focus:ring-custom-red focus:ring-2"
            placeholder="Email">
          <input type="password" class="rounded p-2 text-xl focus:outline-none focus:ring-custom-red focus:ring-2"
            placeholder="Password">
          <input type="password" class="rounded p-2 text-xl focus:outline-none focus:ring-custom-red focus:ring-2"
            placeholder="Repeat password">
        </div>
        <div>
          <p class="text-lg mt-1">Already have an account ? 
            <span class="text-custom-red hover:opacity-90 duration-100">
              <RouterLink to="/auth/login">Sign In</RouterLink>
            </span>
          </p>
        </div>
        <div class="mt-10 flex justify-center">
          <CustomBtn class="min-w-[90%]">Sign Up</CustomBtn>
        </div>
      </form>
    </div>
    <div class="md:w-1/2 w-full h-60 sm:h-auto">
      <img class="w-full h-full rounded" src="https://picsum.photos/450/300" alt="login_image">
    </div>
  </div>
</template>
