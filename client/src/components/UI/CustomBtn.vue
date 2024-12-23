<script>
export default {
  name: "CustomBtn"
}
</script>


<template>
  <button
    class="border-custom-red border-opacity-50 border-2 rounded py-1 px-3 w-1/3 lg:text-lg hover:bg-[#be302b] hover:text-white duration-300 min-w-fit active:scale-95 active:duration-100 hover:scale-100">
    <slot>Button</slot>
  </button>
</template>
