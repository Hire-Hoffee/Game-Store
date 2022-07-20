<script>
export default {
  emits: ["registrationUserData"],
  data() {
    return {
      userData: {
        userEmail: null,
        userPassword: null,
        passwordAgain: null
      }
    };
  },
  methods: {
    getUserData() {
      this.$emit("registrationUserData", this.userData);
      this.userData = {
        userEmail: null,
        userPassword: null,
        passwordAgain: null
      };
    }
  },
}
</script>


<template>
  <div
    class="flex md:flex-row flex-col-reverse rounded overflow-hidden justify-between custom_shadow_out md:w-4/5 lg:h-[30rem] p-1">
    <div class="md:w-1/2 w-full p-10 flex flex-col justify-center">
      <h1 class="text-3xl text-center mb-3 font-bold">Registration</h1>
      <form @submit.prevent="getUserData">
        <div class="flex flex-col text-black">
          <FormInput 
            :required="true"
            :min="10"
            :max="50"
            class="my-1.5"
            :input-name="'Your Email'"
            :input-type="'email'"
            :input-id="'email_address'" 
            :input-img="'/src/assets/icons/email.svg'" 
            :input-placeholder="'name@mail.com'"
            v-model:inputModel="userData.userEmail"
          />
          <FormInput 
            :required="true"
            :min="8"
            :max="50"
            class="my-1.5"
            :input-name="'Your Password'"
            :input-type="'password'"
            :input-id="'user_password'" 
            :input-img="'/src/assets/icons/password.svg'" 
            :input-placeholder="'8 to 50 characters long'"
            v-model:inputModel="userData.userPassword"
          />
          <FormInput 
            :required="true"
            :min="8"
            :max="50"
            class="my-1.5"
            :input-name="'Repeat Password'"
            :input-type="'password'"
            :input-id="'password_again'" 
            :input-img="'/src/assets/icons/password.svg'" 
            :input-placeholder="'8 to 50 characters long'"
            v-model:inputModel="userData.passwordAgain"
          />
        </div>
        <div>
          <p class="mt-1">Already have an account ?
            <span class="text-custom-red hover:opacity-90 duration-100">
              <RouterLink :to="{ name: 'login' }">Sign In</RouterLink>
            </span>
          </p>
        </div>
        <div class="mt-5 flex justify-center">
          <CustomBtn class="min-w-[65%]" type="submit">Sign Up</CustomBtn>
        </div>
      </form>
    </div>
    <div class="md:w-1/2 w-full h-60 sm:h-auto">
      <img class="w-full h-full rounded" src="https://picsum.photos/450/700" alt="login_image">
    </div>
  </div>
</template>
