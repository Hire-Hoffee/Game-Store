<script>
import CustomHeader from "@/components/UI/CustomHeader.vue"
import CustomFooter from "@/components/UI/CustomFooter.vue"
import AlertInformation from "@/components/UI/AlertInformation.vue"
import FoundGame from "@/components/cards/FoundGame.vue"

import { mapGetters } from "vuex"

export default {
  components: {
    CustomHeader,
    CustomFooter,
    AlertInformation,
    FoundGame
},
  computed: {
    ...mapGetters("alertInfoModule", ["getErrorInfo", "getAlertInfo"]),
    ...mapGetters("themeModule", ["getColorMode"]),
    ...mapGetters("searchGamesModule", ["getFoundGames"])
  },
  mounted() {
    if (!localStorage.getItem("colorMode")) {
      localStorage.setItem("colorMode", "light")
    }
  }
}
</script>

<template>

  <span :class="getColorMode">
    <div class="min-h-full flex flex-col items-center bg-slate-50 text-custom-black dark:bg-custom-black dark:text-white">
  
      <CustomHeader class="mb-24 sticky top-0 md:z-50" />
  
      <main class="container 2xl:w-5/6 flex-auto flex flex-col justify-center p-3 relative">

        <Transition name="error_fade" mode="out-in">
          <div v-if="getFoundGames" class="absolute w-full md:h-screen h-[70vh] -top-20 md:-top-10 inset-0 z-50 p-2 bg-slate-200 dark:bg-custom-gray bg-opacity-80 rounded-lg overflow-auto shadow-xl">
            <TransitionGroup name="list" tag="ul">
              <li class="list-none" v-for="game in getFoundGames" :key="game.id">
                <FoundGame :game-poster="game.poster" :game-title="game.gameTitle" />
              </li>
            </TransitionGroup>
          </div>
        </Transition> 

        <Transition name="error_fade" mode="out-in">
          <AlertInformation 
            v-if="getErrorInfo || getAlertInfo"
            :alert-message="getErrorInfo?.response.data.message || getAlertInfo" 
          />
        </Transition>
  
        <RouterView v-slot="{ Component, route }">
          <Transition name="fade" mode="out-in">

            <KeepAlive :exclude="['ShoppingCartView']">
              <component :is="Component" :key="route.path" />
            </KeepAlive>
            
          </Transition>
        </RouterView>
      </main>
  
      <CustomFooter class="mt-24" />
    </div>
  </span>

</template>

<style>
.error_fade-enter-active,
.error_fade-leave-active {
  transition: opacity 0.2s ease;
}

.error_fade-enter-from,
.error_fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
