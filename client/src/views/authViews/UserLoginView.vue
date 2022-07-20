<script>
import LoginComponent from "@/components/authComponents/LoginComponent.vue"

export default {
  components: {
    LoginComponent
  },
  methods: {
    async userLogin(credentials) {
      try {
        const result = (await this.$API.authServices.userLogin(credentials)).data
        console.log(result);
        this.$router.push({ name: "home" })
      } catch (error) {
        this.$store.commit("updateError", error)
      }
    }
  }
}
</script>


<template>
  <div class="flex justify-center">
    <LoginComponent @logInUserData="userLogin"/>
  </div>
</template>
