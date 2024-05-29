<script>
import CustomBtn from '@/components/UI/CustomBtn.vue';
export default {
  components: { 
    CustomBtn 
  },
  props: ["userInfo"],
  methods: {
    notWorking() {
      alert("Not implemented yet")
    }
  }
}
</script>


<template>
  <div class="p-7 custom_shadow_out w-5/6 relative">
    <div class="absolute right-3 top-3">
      <RouterLink :to="{ name: 'logout' }">
        <CustomBtn title="Sign Out" class="bg-custom-red">
          <img src="@/assets/icons/mini_exit.svg" class="w-2.5 h-2.5" alt="mini_exit">
        </CustomBtn>
      </RouterLink>
    </div>
    <h1 class="text-3xl text-center font-bold">Your Account</h1>
    <div class="flex lg:flex-row flex-col items-center lg:justify-between md:space-x-10 lg:h-96 mt-16">

      <div class="lg:w-1/2 w-full h-full flex flex-col justify-between">
        <div>
          <div class="mb-5">
            <ParagraphHeader add-class="w-1/3">Email</ParagraphHeader>
            <p class="p-2 rounded inner_shadow_custom text-xl text-center">{{userInfo.email}}</p>
          </div>
          <div>
            <ParagraphHeader add-class="w-1/3">Password</ParagraphHeader>
            <p class="p-2 rounded inner_shadow_custom text-xl text-center">******************</p>
          </div>
        </div>
        <div class="flex justify-around mt-10 space-x-4">
          <!-- <CustomBtn>Show password</CustomBtn> -->
          <CustomBtn @click="notWorking">Change account info</CustomBtn>
        </div>
      </div>

      <div class="lg:w-1/2 w-full h-full flex flex-col justify-between mt-20 lg:mt-0">
        <div>
          <ParagraphHeader class="text-center" add-class="w-1/2 m-auto">Payment information</ParagraphHeader>
          <div class="flex">
            <div class="w-1/3 hidden sm:block">
              <p class="p-2 rounded text-xl mb-3">Card holder</p>
              <p class="p-2 rounded text-xl mb-3">Credentials</p>
              <p class="p-2 rounded text-xl mb-3">CVV</p>
            </div>
            <div class="sm:w-2/3 w-full text-center">
              <div class="flex space-x-3">
                <p class="p-2 rounded inner_shadow_custom text-xl mb-3 w-1/2 uppercase">{{userInfo.payment?.cardHolder.split(" ")[0] || "empty"}}</p>
                <p class="p-2 rounded inner_shadow_custom text-xl mb-3 w-1/2 uppercase">{{userInfo.payment?.cardHolder.split(" ")[1] || "empty"}}</p>
              </div>
              <div>
                <p class="p-2 rounded inner_shadow_custom text-xl mb-3">{{userInfo.payment?.cardNumber || "empty"}}</p>
              </div>
              <div class="flex space-x-3">
                <p class="p-2 rounded inner_shadow_custom text-xl w-full uppercase">***</p>
                <!-- <CustomBtn class="bg-custom-red text-white w-1/3">Show</CustomBtn> -->
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-10">
          <CustomBtn @click="notWorking" class="">Change payment info</CustomBtn>
        </div>
      </div>

    </div>
  </div>
</template>

