<script>
import GameImagesSlider from "@/components/sliders/GameImagesSlider.vue"
import ReviewsSlider from "@/components/sliders/ReviewsSlider.vue"
import { mapGetters } from "vuex"

export default {
  emits: ["buyGame", "postReviewEmit"],
  components: {
    GameImagesSlider,
    ReviewsSlider
  },
  data() {
    return {
      reviewContent: ""
    }
  },
  props: ["gameInfo"],
  computed: mapGetters("authModule", ["getUserRole"]),
}
</script>


<template>
  <div class="p-5 rounded custom_shadow_out">

    <ParagraphHeader class="uppercase">{{ gameInfo.gameTitle }}</ParagraphHeader>

    <div class="flex flex-col-reverse md:flex-row justify-between md:space-x-14 font-bold mb-28">
      <div class="md:w-7/12">
        <GameImagesSlider v-if="gameInfo" :game-data="gameInfo.images"/>
      </div>

      <div class="md:w-5/12 flex flex-col space-y-4 justify-between mb-16 md:mb-0">
        <div class="rounded overflow-hidden">
          <img class="w-full lg:h-52 h-40 object-cover" :src="gameInfo.poster" :alt="gameInfo.gameTitle">
        </div>

        <div class="flex justify-between text-center lg:text-2xl text-lg">
          <div class="p-2 w-1/3 rounded inner_shadow_custom"><strong>{{ gameInfo.price ? `${gameInfo.price} $` : "-" }}</strong></div>
          <CustomBtn 
            v-if="gameInfo.price"
            @click="getUserRole ? $emit('buyGame', gameInfo.id) : false" 
            class="text-white uppercase bg-custom-red">
            {{ getUserRole ? "Buy now" : "Login to buy" }}
          </CustomBtn>
          <CustomBtn v-else>Coming soon</CustomBtn>
        </div>

        <div class="lg:text-xl text-lg">
          <div class="flex justify-between mb-1 lg:mb-3">
            <div>User rating</div>
            <div class="font-normal">
              <img class="inline mr-3" src="@/assets/icons/star.svg" alt="rating_star">
              <span>{{ gameInfo.rating }}</span>
            </div>
          </div>
          <div class="flex justify-between mb-1 lg:mb-3" v-if="gameInfo.metacritic">
            <div>Metacritic</div>
            <div class="font-normal">
              <img class="inline mr-3" src="@/assets/icons/star.svg" alt="rating_star">
              <span>{{ gameInfo.metacritic }}</span>
            </div>
          </div>
          <div class="flex justify-between mb-1 lg:mb-3">
            <div>Release date</div>
            <div class="font-normal">{{ gameInfo.releaseDate }}</div>
          </div>
          <div class="flex justify-between mb-1 lg:mb-3">
            <div>Developer</div>
            <div class="font-normal">{{ gameInfo.developer.developerName }}</div>
          </div>
          <div class="flex justify-between">
            <div>Platforms</div>
            <div class="font-normal">
              <img class="inline lg:ml-4 ml-2" v-if="gameInfo.platforms.length !== 0" v-for="platform in gameInfo.platforms" :src="platform.platformSVG" :alt="platform.platformName">
              <div class="text-xl" v-else>__</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Description</ParagraphHeader>
      <div class="text-lg mb-2 font-normal">
        <p v-if="gameInfo.description">{{ gameInfo.description }}</p>
        <p class="text-xl" v-else>__</p>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Genres</ParagraphHeader>
      <div class="text-xl font-bold flex space-x-4">
        <div v-if="gameInfo.genres.length !== 0" v-for="genre in gameInfo.genres">{{ genre.genreName }}</div>
        <div class="text-xl" v-else>__</div>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Specifications</ParagraphHeader>
      <div class="text-2xl flex space-x-10" v-if="gameInfo.minimumSR || gameInfo.recommendedSR">

        <div class="flex text-base" v-if="gameInfo.minimumSR">
          <div>
            <h1 class="text-2xl mb-5 text-custom-red">Minimum</h1>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">OS</ParagraphHeader>
              <p>{{ gameInfo.minimumSR.os }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Processor</ParagraphHeader>
              <p>{{ gameInfo.minimumSR.processor }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Memory</ParagraphHeader>
              <p>{{ gameInfo.minimumSR.memory }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Storage</ParagraphHeader>
              <p>{{ gameInfo.minimumSR.storage }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Graphics</ParagraphHeader>
              <p>{{ gameInfo.minimumSR.graphics }}</p>
            </div>
          </div>
        </div>

        <div class="flex text-base" v-if="gameInfo.recommendedSR">
          <div>
            <h1 class="text-2xl mb-5 text-custom-red">Recommended</h1>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">OS</ParagraphHeader>
              <p>{{ gameInfo.recommendedSR.os }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Processor</ParagraphHeader>
              <p>{{ gameInfo.recommendedSR.processor }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Memory</ParagraphHeader>
              <p>{{ gameInfo.recommendedSR.memory }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Storage</ParagraphHeader>
              <p>{{ gameInfo.recommendedSR.storage }}</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Graphics</ParagraphHeader>
              <p>{{ gameInfo.recommendedSR.graphics }}</p>
            </div>
          </div>
        </div>

      </div>

      <div v-else>
        <p class="text-xl">To be announced or unknown</p>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Reviews</ParagraphHeader>
      <ReviewsSlider v-if="gameInfo.reviews.length != 0" :reviews-data="gameInfo.reviews" />
      <div v-else><h1 class="text-2xl">Reviews not found</h1></div>
    </div>

    <div>
      <ParagraphHeader add-class="w-1/3">Post review</ParagraphHeader>
      <div class="w-11/12 m-auto">
        <form @submit.prevent="$emit('postReviewEmit', { reviewContent, gameId: gameInfo.id })">
          <div class="flex justify-center">
            <textarea
              v-model="reviewContent"
              class="w-full sm:h-56 h-36 text-lg text-custom-black p-2 rounded focus:outline-none focus:ring-custom-red focus:ring-2 inner_shadow_custom"
              placeholder="Type here..."></textarea>
          </div>
          <div class="flex justify-end mt-5">
            <CustomBtn type="submit" class="w-fit text-white bg-custom-red uppercase sm:px-12 px-16">Post</CustomBtn>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
