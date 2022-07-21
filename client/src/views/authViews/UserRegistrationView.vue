<script>
import RegistrationComponent from "@/components/authComponents/RegistrationComponent.vue"

export default {
  components: {
    RegistrationComponent
  },
  methods: {
    async userRegistration(credentials) {
      try {
        const { message } = (await this.$API.authServices.userRegistration(credentials)).data
        
        this.$store.commit("alertInfoModule/updateAlert", message)
        this.$router.push({ name: "login" })
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  }
}
</script>


<template>
  <div class="flex justify-center">
    <RegistrationComponent @registrationUserData="userRegistration" />
  </div>
</template>
