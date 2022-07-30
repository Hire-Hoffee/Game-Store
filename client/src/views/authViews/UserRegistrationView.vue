<script>
import RegistrationComponent from "@/components/authComponents/RegistrationComponent.vue"
import { mapGetters } from "vuex"

export default {
  components: {
    RegistrationComponent
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
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
  <div class="flex justify-center" v-if="!getLoadingStatus">
    <RegistrationComponent @registrationUserData="userRegistration" />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
