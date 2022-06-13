<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"

import GameCard from '@/components/GameCard.vue'

import "swiper/css"
import "swiper/css/navigation"

export default {
  components: {
    Swiper,
    SwiperSlide,
    GameCard
  },
  setup() {
    return {
      modules: [Navigation]
    };
  },
  data() {
    return {
      slidesPerView: 5,
    }
  },
  methods: {
    handleView() {
      this.slidesPerView = window.innerWidth <= 640 ? 2 : window.innerWidth >= 640 && window.innerWidth <= 1024 ? 4 : 5
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
};
</script>


<template>
  <Swiper class="flex items-center custom_swiper" :slidesPerView="slidesPerView" :space-between="10" :loop="true"
    :navigation="true" :modules="modules">

    <SwiperSlide class="flex justify-center">
      <GameCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <GameCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <GameCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <GameCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <GameCard />
    </SwiperSlide>

  </Swiper>
</template>


<style>
.custom_swiper>.swiper-button-prev::after {
  content: none;
}

.custom_swiper>.swiper-button-prev {
  left: 0;
  width: 2rem;
  background-image: url('../assets/icons/circlePrev.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.custom_swiper>.swiper-button-next::after {
  content: none;
}

.custom_swiper>.swiper-button-next {
  right: 0;
  width: 2rem;
  background-image: url('../assets/icons/circleNext.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

@media (max-width: 1024px) {

  .custom_swiper>.swiper-button-prev,
  .custom_swiper>.swiper-button-next {
    display: none;
  }
}
</style>
