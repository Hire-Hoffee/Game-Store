<script>
import CustomBtn from "./CustomBtn.vue";
import { mapGetters } from "vuex"

export default {
  components: { CustomBtn },
  data() {
    return {
      search: false,
      isMobile: false,
      isMobileMenuOpen: false,
      isTablet: false,
      gameTitle: "",
      reqDelay: null
    };
  },
  computed: {
    ...mapGetters("authModule", ["getUserRole"]),
    ...mapGetters("themeModule", ["getColorMode"]),
    ...mapGetters("searchGamesModule", ["getFoundGames"])
  },
  watch: {
    getFoundGames() {
      if (this.getFoundGames == null) {
        this.isMobileMenuOpen = false
      }
    }
  },
  methods: {
    async searchGames() {
      try {
        if (!this.gameTitle) {
          this.$store.commit("searchGamesModule/updateFoundGames", null)
          return
        }
        const result = (await this.$API.mainServices.searchGames(this.gameTitle)).data
        this.$store.commit("searchGamesModule/updateFoundGames", result)
      } catch (error) {
        this.$store.commit("alertInfoModule/updateError", error)
      }
    },
    setupFunc() {
      if (typeof this.reqDelay === "number") {
        this.cancelRequest()
      }
      this.reqDelay = setTimeout(() => {
        this.searchGames();
      }, 200);
    },
    cancelRequest() {
      clearTimeout(this.reqDelay)
    },
    clearSearchData() {
      this.$store.commit("searchGamesModule/updateFoundGames", null)
    },



    clickToSearch() {
      this.search = !this.search;
    },
    handleView() {
      this.isMobile = window.innerWidth < 768;
      this.isTablet = window.innerWidth < 1280;
    },
    clickToOpenMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    switchTheme() {
      if (localStorage.getItem("colorMode") == "light") {
        localStorage.setItem("colorMode", "dark")
        this.$store.commit("themeModule/updateColorMode", "dark")
        return
      }

      if (localStorage.getItem("colorMode") == "dark") {
        localStorage.setItem("colorMode", "light")
        this.$store.commit("themeModule/updateColorMode", "light")
        return
      }
    }
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
}
</script>


<template>

  <header v-if="!isMobile"
    class="bg-slate-50 dark:bg-custom-black w-full h-16 flex justify-between items-center px-12 font-bold z-40 drop_shadow_custom_down">
    <div class="flex items-center space-x-7 text-2xl text-custom-red">
      <RouterLink v-if="isTablet" :to="{ name: 'home' }"><img src="@/assets/icons/logo.svg" alt="site logo"></RouterLink>
      <img v-else src="@/assets/icons/logo.svg" alt="site logo">
      <h1 class="sm:hidden xl:block hidden">
        <router-link :to="{ name: 'home' }">GameMuffin</router-link>
      </h1>
    </div>
    <nav>
      <ul class="flex space-x-6 md:space-x-8 xl:space-x-12 text-xl">
        <li><RouterLink :to="{ name: 'allGames' }">All games</RouterLink></li>
        <li><RouterLink :to="{ name: 'gamesNews' }">News</RouterLink></li>
        <li><RouterLink :to="{ name: 'allCategories' }">Categories</RouterLink></li>
        <li v-if="getUserRole == 'USER'"><RouterLink :to="{ name: 'userAccount' }">Account</RouterLink></li>
        <li v-else><RouterLink :to="{ name: 'login' }">Login</RouterLink></li>
        <li v-if="getUserRole == 'USER'"><RouterLink :to="{ name: 'shoppingCart' }">Cart</RouterLink></li>
        <li><RouterLink :to="{ name: 'aboutPage' }">About</RouterLink></li>
      </ul>
    </nav>
    <div class="flex">
      <div class="mr-3 flex items-center" @click="switchTheme">
        <CustomBtn class="hover:bg-slate-50 dark:hover:bg-custom-black border-none bg-slate-100 dark:bg-[#171518]">
          <img v-if="getColorMode == 'dark'" src="@/assets/icons/sun.svg" class="w-6 h-6" alt="sun">
          <img v-if="getColorMode == 'light'" src="@/assets/icons/moon.svg" class="w-6 h-6" alt="moon">
        </CustomBtn>
      </div>
      <div class="sm:block lg:hidden hover:scale-105 active:scale-95" @click="clickToSearch">
        <img src="@/assets/icons/search.svg" alt="search">
      </div>
      <div class="sm:hidden lg:block hidden">
        <form class="flex space-x-7" @submit.prevent>
          <FormInput
            @input="setupFunc"
            :input-id="'search_game'" 
            :input-img="'/src/assets/icons/search.svg'" 
            :input-placeholder="'Search...'"
            v-model:inputModel="gameTitle"
          />
        </form>
      </div>
    </div>

    <Transition name="bounce">
      <div v-if="search" class="absolute right-0 top-16 px-5 mt-5 w-full">
        <form class="flex space-x-7">
          <FormInput 
            @input="setupFunc"
            class="w-full"
            :input-id="'search_game_tablet'" 
            :input-img="'/src/assets/icons/search.svg'" 
            :input-placeholder="'Search...'"
            v-model:inputModel="gameTitle"
          />
        </form>
      </div>
    </Transition>
  </header>



  <header v-else class="flex items-center bg-slate-50 dark:bg-custom-black w-full h-16 px-6 font-bold z-40 drop_shadow_custom_down">
    <div class="flex justify-between w-full">
      <div class="w-full">
        <Transition name="bounce">
          <img class="absolute top-4 left-6" v-if="!isMobileMenuOpen" @click="clickToOpenMobileMenu(); clearSearchData();"
            src="@/assets/icons/hamburgerMenu.svg" alt="menu_icon">
          <img class="absolute top-4 left-6" v-else @click="clickToOpenMobileMenu(); clearSearchData();" src="@/assets/icons/exit.svg"
            alt="exit">
        </Transition>
      </div>
      <div class="text-custom-red text-xl">
        <RouterLink v-if="isMobileMenuOpen" @click="clickToOpenMobileMenu()" :to="{ name: 'home' }">GameMuffin</RouterLink>
        <RouterLink v-else :to="{ name: 'home' }">GameMuffin</RouterLink>
      </div>

    </div>
    <Transition name="bounce">
      <nav v-if="isMobileMenuOpen" class="absolute top-16 left-0 bg-slate-50 dark:bg-custom-black w-full p-6 mt-1 h-screen text-2xl">        
        <ul class="flex flex-col justify-evenly px-6 py-4 tracking-wide custom_inner_shadow rounded-xl h-[90%] relative">

          <div class="mr-3 flex items-center absolute top-4 right-1" @click="switchTheme">
            <CustomBtn class="hover:bg-slate-50 dark:hover:bg-custom-black">
              <img v-if="getColorMode == 'dark'" src="@/assets/icons/sun.svg" class="w-5 h-5" alt="sun">
              <img v-if="getColorMode == 'light'" src="@/assets/icons/moon.svg" class="w-5 h-5" alt="moon">
            </CustomBtn>
          </div>

          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/allGames.svg" alt="all_games">
            <div class="ml-5">
              <RouterLink :to="{ name: 'allGames' }">All games</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/news.svg" alt="news">
            <div class="ml-5">
              <RouterLink :to="{ name: 'gamesNews' }">News</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/categories.svg" alt="categories">
            <div class="ml-5">
              <RouterLink :to="{ name: 'allCategories' }">Categories</RouterLink>
            </div>
          </li>
          <li v-if="getUserRole == 'USER'" class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/login.svg" alt="login">
            <div class="ml-5">
              <RouterLink :to="{ name: 'userAccount' }">Account</RouterLink>
            </div>
          </li>
          <li v-else class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/login.svg" alt="login">
            <div class="ml-5">
              <RouterLink :to="{ name: 'login' }">Login</RouterLink>
            </div>
          </li>
          <li v-if="getUserRole == 'USER'" class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/cart.svg" alt="cart">
            <div class="ml-5">
              <RouterLink :to="{ name: 'shoppingCart' }">Cart</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="@/assets/icons/faq.svg" alt="faq">
            <div class="ml-5">
              <RouterLink :to="{ name: 'aboutPage' }">About</RouterLink>
            </div>
          </li>
          <li>
            <form class="flex space-x-7" @submit.prevent>
              <FormInput 
                @input="setupFunc"
                class="w-full"
                :input-id="'search_game_phone'" 
                :input-img="'/src/assets/icons/search.svg'" 
                :input-placeholder="'Search...'"
                v-model:inputModel="gameTitle"
              />
            </form>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>

</template>


<style scoped>
.drop_shadow_custom_down {
  @apply shadow-md dark:shadow-[0px_4px_4px_rgba(0,0,0,0.25)];
}

.custom_inner_shadow {
  box-shadow: inset 2px 2px 4px 4px rgba(0, 0, 0, 0.25);
}

.bounce-enter-active {
  animation: bounce-in .2s;
}

.bounce-leave-active {
  animation: bounce-in .2s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
