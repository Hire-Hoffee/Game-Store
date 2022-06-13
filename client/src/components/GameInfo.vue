<script>
import GameImagesSlider from "@/components/GameImagesSlider.vue"
import ReviewsSlider from "@/components/ReviewsSlider.vue"

export default {
  components: {
    GameImagesSlider,
    ReviewsSlider
  }
}
</script>


<template>
  <div class="p-5 rounded custom_shadow_out">

    <ParagraphHeader>HITMAN 3</ParagraphHeader>

    <div class="flex flex-col-reverse md:flex-row justify-between md:space-x-14 font-bold mb-28">
      <div class="md:w-7/12">
        <GameImagesSlider />
      </div>

      <div class="md:w-5/12 flex flex-col space-y-4 justify-between mb-16 md:mb-0">
        <div class="rounded overflow-hidden">
          <img class="w-full lg:h-52 h-40" src="https://picsum.photos/id/71/300/200" alt="">
        </div>

        <div class="flex justify-between text-center lg:text-2xl text-lg">
          <div class="p-2 w-1/3 rounded inner_shadow_custom"><strong>60$</strong></div>
          <CustomBtn class="uppercase bg-custom-red">Buy now</CustomBtn>
        </div>

        <div class="lg:text-xl text-lg">
          <div class="flex justify-between mb-1 lg:mb-3">
            <div>Rating</div>
            <div class="font-normal">
              <img class="inline mr-3" src="../assets/icons/star.svg" alt="">
              <span>8,3</span>
            </div>
          </div>
          <div class="flex justify-between mb-1 lg:mb-3">
            <div>Release date</div>
            <div class="font-normal">01/20/21</div>
          </div>
          <div class="flex justify-between mb-1 lg:mb-3">
            <div>Developer</div>
            <div class="font-normal">IO Interactive</div>
          </div>
          <div class="flex justify-between">
            <div>Platform</div>
            <div class="font-normal">
              <img class="inline mr-3" src="../assets/icons/win.svg" alt="">
              <img class="inline mr-3" src="../assets/icons/xbox.svg" alt="">
              <img class="inline" src="../assets/icons/ps.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Description</ParagraphHeader>
      <div class="text-lg mb-2 font-normal">
        <p>HITMAN 3 is the best place to play every game in the World of Assassination trilogy. If you’ve already played
          HITMAN 2 on Steam, the locations that you can access in that game will be converted into an ‘Access Pass’ for
          HITMAN 3 when you buy the latest game. The Access Pass DLCs will be applied to your account and the locations
          will be available and ready to play from the first time you launch the game.</p>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Genres</ParagraphHeader>
      <div class="text-2xl font-bold flex space-x-4">
        <div>Action</div>
        <div>Stealth</div>
      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Specifications</ParagraphHeader>
      <div class="text-2xl flex space-x-10">

        <div class="flex text-base">
          <div>
            <h1 class="text-2xl mb-5 text-custom-red">Minimum</h1>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">OS</ParagraphHeader>
              <p>OS 64-bit Windows 10</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Processor</ParagraphHeader>
              <p>Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Memory</ParagraphHeader>
              <p>8 GB</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Storage</ParagraphHeader>
              <p>80 GB</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Graphics</ParagraphHeader>
              <p>NVIDIA GeForce GTX 660 / Radeon HD 7870</p>
            </div>
          </div>
        </div>

        <div class="flex text-base">
          <div>
            <h1 class="text-2xl mb-5 text-custom-red">Recommended</h1>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">OS</ParagraphHeader>
              <p>OS 64-bit Windows 10</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Processor</ParagraphHeader>
              <p>Intel CPU Core i7 4790 4 GHz</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Memory</ParagraphHeader>
              <p>16 GB</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Storage</ParagraphHeader>
              <p>80 GB</p>
            </div>
            <div class="mb-5">
              <ParagraphHeader class="text-lg mb-2 font-normal" add-class="w-1/3 h-px">Graphics</ParagraphHeader>
              <p>Nvidia GPU GeForce GTX 1070 / AMD GPU Radeon RX Vega 56</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="mb-28">
      <ParagraphHeader add-class="w-1/3">Reviews</ParagraphHeader>
      <ReviewsSlider />
    </div>

    <div>
      <ParagraphHeader add-class="w-1/3">Post review</ParagraphHeader>
      <div class="w-11/12 m-auto">
        <form>
          <div class="flex justify-center">
            <textarea
              class="w-full sm:h-56 h-36 text-lg text-custom-black p-2 rounded focus:outline-none focus:ring-custom-red focus:ring-2 inner_shadow_custom"
              placeholder="Type here..."></textarea>
          </div>
          <div class="flex justify-end mt-5">
            <CustomBtn class="w-fit bg-custom-red uppercase sm:px-12 px-16">Post</CustomBtn>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
