<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["gameData"],
  setup() {
    return {
      modules: [Navigation]
    };
  },
  data() {
    return {
      isMobile: false,
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth < 768
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
};
</script>


<template>
  <Swiper v-if="!isMobile" class="w-11/12 xl:h-112 lg:h-96 md:h-80 main_swiper rounded-3xl" :slidesPerView="1"
    :space-between="100" :loop="true" :navigation="true" :modules="modules">
    <SwiperSlide class="flex justify-center" v-for="game in gameData" :key="game.id">
      <RouterLink class="flex bg-custom-black w-full" :to="'/games/' + game.gameTitle?.toLowerCase().split(' ').join('_')">
        <div class="w-3/5">
          <img class="w-full h-full rounded-l-3xl" :src="game.poster" :alt="game.gameTitle">
        </div>
        <div class="w-2/5 flex flex-col justify-between p-8">
          <div>
            <h1 class="text-center lg:text-2xl uppercase">{{ game.gameTitle }}</h1>
          </div>
          <div class="lg:text-lg text-sm">
            <p>{{ game.description.slice(0, 200) }}...</p>
          </div>
          <div class="flex justify-around">
            <div class="bg-custom-red rounded py-1 w-2/6 flex items-center justify-center">
              <p class="text-center lg:text-2xl text-lg">{{ game.price }} $</p>
            </div>
            <CustomBtn>Add to cart</CustomBtn>
          </div>
        </div>
      </RouterLink>
    </SwiperSlide>
  </Swiper>


  <Swiper v-else class="mobile_slider rounded-3xl" :slidesPerView="1" :space-between="100" :loop="true"
    :navigation="true" :modules="modules">
    <SwiperSlide class="flex justify-center" v-for="game in gameData" :key="game.id">
      <RouterLink class="flex flex-col items-center w-full p-3" :to="'/games/' + game.gameTitle?.toLowerCase().split(' ').join('_')">
        <div class="w-full h-80">
          <img class="w-full h-full rounded-3xl" :src="game.poster" :alt="game.gameTitle">
        </div>

        <div class="w-full">
          <div class="my-10 text-2xl">
            <h1 class="text-center lg:text-2xl">{{ game.gameTitle }}</h1>
          </div>
          <div class="flex justify-around">
            <div class="bg-custom-red rounded py-1 w-2/6 flex items-center justify-center">
              <p class="text-center lg:text-2xl text-lg">{{ game.price }} $</p>
            </div>
            <CustomBtn>Add to cart</CustomBtn>
          </div>
        </div>
      </RouterLink>
    </SwiperSlide>
  </Swiper>
</template>


<style>
.main_swiper {
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
}

.main_swiper>.swiper-button-prev::after {
  content: none;
}

.main_swiper>.swiper-button-prev {
  left: 0;
  background-image: url('../assets/icons/prev.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.main_swiper>.swiper-button-next::after {
  content: none;
}

.main_swiper>.swiper-button-next {
  right: 0;
  background-image: url('../assets/icons/next.svg');
  background-size: contain;
  background-repeat: no-repeat;
}


.mobile_slider {
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
}

.mobile_slider>.swiper-button-prev,
.mobile_slider>.swiper-button-next {
  display: none;
}
</style>
