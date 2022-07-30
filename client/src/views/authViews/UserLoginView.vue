<script>
import LoginComponent from "@/components/authComponents/LoginComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    LoginComponent
  },
  computed: {
    ...mapGetters('authModule', ['getUserToken']),
    ...mapGetters("isLoadingModule", ["getLoadingStatus"]),
  },
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
  },
  mounted() {
    if (this.$route.query.verifyEmail == "true") {
      this.$store.commit("alertInfoModule/updateAlert", "Email has been verified")
    }
  }
}
</script>


<template>
  <div class="flex justify-center" v-if="!getLoadingStatus">
    <LoginComponent @logInUserData="userLogin" />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
