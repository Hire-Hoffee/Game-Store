<script>
import { mapMutations } from "vuex"
import { mapGetters } from "vuex"

export default {
  props: ["alertMessage", "alertColor"],
  computed: mapGetters("alertInfoModule", ["getAlertColor", "getBorderWidth"]),
  methods: mapMutations("alertInfoModule", ["refreshInfo"])
}
</script>


<template>
<div class="flex justify-center md:justify-end w-full">
  <div :class="`text-white text-xl border px-10 py-2 rounded tracking-wide absolute -top-14 ${getAlertColor}`" role="alert">
    <div :style="`width: ${getBorderWidth}%;`" class="absolute opacity-80 inset-0 border-white border-b-2"></div>
    <p class="mt-2"><strong>{{ alertMessage || "Unexpected error occurred" }}</strong></p>
    <button class="absolute top-1 right-1" @click="refreshInfo(null)">
      <img src="@/assets/icons/mini_exit.svg" class="w-2.5 h-2.5" alt="mini_exit">
    </button>
  </div>
</div>
</template>
