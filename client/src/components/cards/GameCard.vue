<script>
export default {
  props: ["gameTitle", "gamePoster", "gamePrice"],
}
</script>


<template>
  <RouterLink :to="{ name: 'gameInfo', params: { title: gameTitle?.toLowerCase().split(' ').join('_'), gameTitle } }">
    <div class="xl:w-56 lg:w-48 w-40 h-full flex flex-col relative">
      <div class="xl:h-56 lg:h-48 h-40">
        <img class="rounded-xl w-full h-full object-cover" :src="gamePoster" :alt="gameTitle">
      </div>
      <h2 class="text-xl mt-3">{{ gameTitle || "Title" }}</h2>
      <div class="absolute top-0 right-0 bg-custom-red rounded-bl-xl rounded-tr-xl px-2 text-lg text-white" v-if="gamePrice"><strong>{{ gamePrice }} $</strong>
      </div>
    </div>
  </RouterLink>
</template>
