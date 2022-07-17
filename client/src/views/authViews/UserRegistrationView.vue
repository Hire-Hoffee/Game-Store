<script>
import RegistrationComponent from "@/components/authComponents/RegistrationComponent.vue"

export default {
  components: {
    RegistrationComponent
  },
  methods: {
    async userRegistration(credentials) {
      try {
        const result = (await this.$API.authServices.userRegistration(credentials)).data
        console.log(result);
        this.$router.push({ name: "login" })
      } catch (error) {
        this.$store.commit("updateError", error)
      }
    }
  }
}
</script>


<template>
  <div class="flex justify-center">
    <RegistrationComponent @postUserData="userRegistration" />
  </div>
</template>
