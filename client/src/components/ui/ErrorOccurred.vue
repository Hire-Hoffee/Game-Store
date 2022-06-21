<script>
export default {
  props: ["errorMessage"]
}
</script>


<template>
<div class="bg-custom-red text-white text-lg border p-3 mb-20 rounded tracking-wide" role="alert">
  <strong class="font-bold">Error</strong>
  <hr>
  <p class="mt-2">{{ errorMessage || "Unexpected error occurred" }}</p>
</div>
</template>
