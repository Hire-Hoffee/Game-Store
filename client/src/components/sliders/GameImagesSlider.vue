<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import { FreeMode, Navigation, Thumbs } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["gameData"],
  data() {
    return {
      thumbsSwiper: null,
      slidesPerView: 5,
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper
    },
    handleView() {
      this.slidesPerView = window.innerWidth <= 640 ? 4 : 5
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
  setup() {
    return {
      modules: [FreeMode, Navigation, Thumbs],
    };
  }
}
</script>


<template>
  <div class="w-full h-64 sm:h-80 lg:h-112 flex flex-col space-y-4 rounded overflow-hidden">
    <Swiper :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2 w-full h-5/6">
      <SwiperSlide v-for="item in gameData" :key="item.id"><img class="w-full h-full rounded-lg object-cover" :src="item.image"></SwiperSlide>
    </Swiper>

    <Swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="slidesPerView" :freeMode="true"
      :watchSlidesProgress="true" :navigation="true" :modules="modules" class="mySwiper w-full h-1/6 custom_swiper">
      <SwiperSlide v-for="item in gameData" :key="item.id"><img class="w-full h-full rounded-lg object-cover" :src="item.image"></SwiperSlide>
    </Swiper>
  </div>
</template>


<style>
.custom_swiper>.swiper-button-prev::after {
  content: none;
}

.custom_swiper>.swiper-button-prev {
  left: 0;
  top: calc(50% + 0.5rem);
  background-image: url('@/assets/icons/circlePrev.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.custom_swiper>.swiper-button-next::after {
  content: none;
}

.custom_swiper>.swiper-button-next {
  right: 0;
  top: calc(50% + 0.5rem);
  background-image: url('@/assets/icons/circleNext.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

@media (max-width: 1024px) {

  .custom_swiper>.swiper-button-prev,
  .custom_swiper>.swiper-button-next {
    display: none;
  }
}

.mySwiper>.swiper-wrapper>.swiper-slide {
  opacity: 0.5;
}

.swiper-slide-thumb-active {
  opacity: 1 !important;
  transform: scale(0.97) !important;
}
</style>
