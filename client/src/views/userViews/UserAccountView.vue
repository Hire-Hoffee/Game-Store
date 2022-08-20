<script>
import AccountComponent from "@/components/userComponents/AccountComponent.vue"
import { mapGetters } from "vuex"

export default {
  name: "UserAccountView",
  components: {
    AccountComponent
  },
   data() {
    return {
      userData: null
    }
  },
  computed: mapGetters("isLoadingModule", ["getLoadingStatus"]),
  async mounted() {
    try {
      this.userData = (await this.$API.userServices.getUserAccount()).data
    } catch (error) {
      this.$store.commit("alertInfoModule/updateError", error)
    }
  }
}
</script>


<template>
  <div class="flex justify-center" v-if="!getLoadingStatus">
    <AccountComponent v-if="userData" :user-info="userData" />
  </div>
  <div class="flex justify-center m-5" v-else>
    <img src="@/assets/icons/spinner.svg" class="animate-spin" alt="spinner">
  </div>
</template>
