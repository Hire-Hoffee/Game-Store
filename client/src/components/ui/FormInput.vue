<script>
export default {
  name: "FormInput",
  props: ["inputModel", "inputId", "inputImg", "inputName", "inputPlaceholder", "inputType", "min", "max", "required"],
  emits: ["update:inputModel"],
  computed: {
    imageUrl() {
      return new URL(`/src/assets/icons/${this.inputImg}`, import.meta.url).href
    }
  }
}
</script>


<template>
  <div>
    <label :for="inputId" class="block m-1 text-white text-lg" v-if="inputName">{{ inputName }}</label>
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none" v-if="inputImg">
        <img :src="imageUrl" class="w-6 h-6" alt="icon">
      </div>
      <input 
        :required="required"
        :minlength="min"
        :maxlength="max"
        :type="inputType" 
        :id="inputId" 
        :placeholder="inputPlaceholder" 
        :value="inputModel" 
        @input="$emit('update:inputModel', $event.target.value)"
        class="bg-gray-100 dark:bg-white border focus:outline-none text-black rounded-lg focus:ring-custom-red focus:ring-1 focus:border-custom-red block w-full pl-10 p-1.5"
      >
    </div>
  </div>
</template>
