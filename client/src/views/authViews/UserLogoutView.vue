<script>
import LogoutComponent from "@/components/authComponents/LogoutComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    LogoutComponent
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
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
  <div class="flex justify-center" v-if="!getLoadingStatus">
    <LogoutComponent @logOutUserData="userLogout" />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
