<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"

import ReviewCard from '@/components/ReviewCard.vue'

import "swiper/css"
import "swiper/css/navigation"

export default {
  components: {
    Swiper,
    SwiperSlide,
    ReviewCard
  },
  setup() {
    return {
      modules: [Navigation]
    };
  },
  data() {
    return {
      slidesPerView: 3,
    }
  },
  methods: {
    handleView() {
      this.slidesPerView = window.innerWidth <= 768 ? 1 : window.innerWidth >= 768 && window.innerWidth <= 1024 ? 2 : 3
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
      <ReviewCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <ReviewCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <ReviewCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <ReviewCard />
    </SwiperSlide>
    <SwiperSlide class="flex justify-center">
      <ReviewCard />
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
