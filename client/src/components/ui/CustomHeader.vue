<script>
export default {
  data() {
    return {
      search: false,
      isMobile: false,
      isMobileMenuOpen: false,
      isTablet: false
    }
  },
  methods: {
    clickToSearch() {
      this.search = !this.search
    },
    handleView() {
      this.isMobile = window.innerWidth < 768
      this.isTablet = window.innerWidth < 1280
    },
    clickToOpenMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView)
  }
}
</script>


<template>

  <header v-if="!isMobile"
    class="bg-custom-black w-full h-16 flex justify-between items-center px-12 font-bold z-50 drop_shadow_custom_down">
    <div class="flex items-center space-x-7 text-2xl text-custom-red">
      <RouterLink v-if="isTablet" to="/"><img src="../../assets/icons/logo.svg" alt="site logo"></RouterLink>
      <img v-else src="../../assets/icons/logo.svg" alt="site logo">
      <h1 class="sm:hidden xl:block hidden">
        <router-link to="/">GameMuffin</router-link>
      </h1>
    </div>
    <nav>
      <ul class="flex space-x-6 md:space-x-8 xl:space-x-12 text-xl">
        <li>
          <RouterLink to="/games/all">All games</RouterLink>
        </li>
        <li>
          <RouterLink to="/news">News</RouterLink>
        </li>
        <li>
          <RouterLink to="/categories">Categories</RouterLink>
        </li>
        <li>
          <RouterLink to="/auth/login">Login</RouterLink>
        </li>
        <li>
          <RouterLink to="/cart">Cart</RouterLink>
        </li>
        <li>About</li>
      </ul>
    </nav>
    <div>
      <div class="sm:block lg:hidden" @click="clickToSearch">
        <img src="../../assets/icons/search.svg" alt="">
      </div>
      <div class="sm:hidden lg:block hidden">
        <form class="flex space-x-7">
          <input type="text"
            class="px-1 text-lg text-custom-black rounded focus:outline-none focus:ring-custom-red focus:ring-2"
            placeholder="Search game">
          <CustomBtn class="bg-custom-black">Search</CustomBtn>
        </form>
      </div>
    </div>

    <div v-if="search" class="absolute right-0 top-16 px-5 mt-5 w-full">
      <form class="flex space-x-7">
        <input type="text"
          class="px-1 text-lg text-custom-black rounded focus:outline-none focus:ring-custom-red focus:ring-2 w-10/12"
          placeholder="Search game">
        <CustomBtn class="bg-custom-black w-2/12">Search</CustomBtn>
      </form>
    </div>
  </header>



  <header v-else class="flex items-center bg-custom-black w-full h-16 px-6 font-bold z-50 drop_shadow_custom_down">
    <div class="flex justify-between w-full">
      <div class="w-full">
        <Transition name="bounce">
          <img class="absolute top-4 left-6" v-if="!isMobileMenuOpen" @click="clickToOpenMobileMenu"
            src="../../assets/icons/hamburgerMenu.svg" alt="">
          <img class="absolute top-4 left-6" v-else @click="clickToOpenMobileMenu" src="../../assets/icons/exit.svg"
            alt="">
        </Transition>
      </div>
      <div class="text-custom-red text-xl">
        <RouterLink v-if="isMobileMenuOpen" @click="clickToOpenMobileMenu" to="/">GameMuffin</RouterLink>
        <RouterLink v-else to="/">GameMuffin</RouterLink>
      </div>

    </div>
    <Transition name="bounce">
      <nav v-if="isMobileMenuOpen" class="absolute top-16 left-0 bg-custom-black w-full p-6 mt-1 h-screen text-2xl">
        <ul class="flex flex-col justify-evenly px-6 py-4 tracking-wide custom_inner_shadow rounded-xl h-[90%]">
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="../../assets/icons/allGames.svg" alt="">
            <div class="ml-5">
              <RouterLink to="/games/all">All games</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="../../assets/icons/news.svg" alt="">
            <div class="ml-5">
              <RouterLink to="/news">News</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="../../assets/icons/categories.svg" alt="">
            <div class="ml-5">
              <RouterLink to="/categories">Categories</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="../../assets/icons/login.svg" alt="">
            <div class="ml-5">
              <RouterLink to="/auth/login">Login</RouterLink>
            </div>
          </li>
          <li class="flex" @click="clickToOpenMobileMenu">
            <img src="../../assets/icons/cart.svg" alt="">
            <div class="ml-5">
              <RouterLink to="/cart">Cart</RouterLink>
            </div>
          </li>
          <li class="flex">
            <img src="../../assets/icons/faq.svg" alt="">
            <div class="ml-5">
              About
            </div>
          </li>
          <li>
            <form class="flex space-x-7 h-10">
              <input type="text"
                class="px-1 text-lg text-custom-black rounded focus:outline-none focus:ring-custom-red focus:ring-2 w-10/12"
                placeholder="Search game">
              <CustomBtn class="bg-custom-black w-2/12">
                <img class="w-full h-full" src="../../assets/icons/search.svg" alt="">
              </CustomBtn>
            </form>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>

</template>


<style scoped>
.drop_shadow_custom_down {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
