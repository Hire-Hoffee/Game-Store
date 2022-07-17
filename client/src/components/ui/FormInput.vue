<script>
export default {
  name: "FormInput",
  props: ["inputType", "inputModel", "inputId", "inputImg", "inputName", "inputPlaceholder"],
  emits: ["update:inputModel"]
}
</script>


<template>
  <div>
    <label :for="inputId" class="block m-1 text-white text-lg" v-if="inputName">{{ inputName }}</label>
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none" v-if="inputImg">
        <img :src="inputImg" class="w-6 h-6" alt="icon">
      </div>
      <input 
        :type="inputType" 
        :id="inputId" 
        :placeholder="inputPlaceholder" 
        :value="inputModel" 
        @input="$emit('update:inputModel', $event.target.value)"
        class="bg-white border focus:outline-none text-black rounded-lg focus:ring-custom-red focus:ring-1 focus:border-custom-red block w-full pl-10 p-1.5"
      >
    </div>
  </div>
</template>
