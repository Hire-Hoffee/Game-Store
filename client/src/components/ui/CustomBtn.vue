<template>
  <button
    class="border-custom-red border-opacity-50 border-2 rounded py-1 px-3 w-1/3 lg:text-lg hover:bg-[#ba2824] duration-300 min-w-fit active:scale-95 active:duration-100 hover:scale-100">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "CustomBtn"
}
</script>