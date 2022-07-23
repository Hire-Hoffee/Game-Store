<script>
import LoginComponent from "@/components/authComponents/LoginComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    LoginComponent
  },
  computed: mapGetters('authModule', ['getUserToken']),
  methods: {
    async userLogin(credentials) {
      try {
        const { message, token, role } = (await this.$API.authServices.userLogin(credentials)).data

        localStorage.setItem("userRole", role)
        localStorage.setItem("userToken", token)
        this.$store.commit("authModule/updateUserRole", role)
        this.$store.commit("authModule/updateUserToken", token)
        this.$store.commit("alertInfoModule/updateAlert", message)

        this.$router.push({ name: "home" })
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    }
  }
}
</script>


<template>
  <div class="flex justify-center">
    <LoginComponent @logInUserData="userLogin" />
  </div>
</template>
