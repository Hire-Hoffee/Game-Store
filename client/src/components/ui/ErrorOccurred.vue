<script>
export default {
  props: ["errorMessage"]
}
</script>


<template>
<div class="flex justify-center md:justify-end w-full">
  <div class="bg-red-600 text-white text-lg border px-10 py-1 rounded tracking-wide absolute -top-14" role="alert">
    <p class="mt-2"><strong>Error: </strong>{{ errorMessage || "Unexpected error occurred" }}</p>
  </div>
</div>
</template>
