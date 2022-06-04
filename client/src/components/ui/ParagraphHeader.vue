<script>
export default {
  props: ['addClass'],
  name: "ParagraphHeader"
}
</script>


<template>
  <div class="mb-5 text-2xl font-bold">
    <h1 class="mb-2">
      <slot>Header</slot>
    </h1>
    <hr class="h-0.5 bg-custom-red border-none" :class="addClass">
  </div>
</template>
