<script>
import LogoutComponent from "@/components/authComponents/LogoutComponent.vue"

export default {
  components: {
    LogoutComponent
  },
  methods: {
    async userLogout() {
      try {
        await this.$API.authServices.userLogout()
        localStorage.removeItem("userToken")
        localStorage.removeItem("userRole")
        location.replace("/")
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  }
}
</script>


<template>
  <div class="flex justify-center">
    <LogoutComponent @logOutUserData="userLogout" />
  </div>
</template>
