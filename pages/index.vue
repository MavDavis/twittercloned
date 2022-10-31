<template>
  <section>
    <div>
      <!-- top -->
      <div class="name w-full p-4 flex justify-start">
        <p class="text-xl font-bold">Home</p>
      </div>
      <div class="w-full px-4 py-2 flex justify-start items-center">
        <div
          class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-100 mr-2"
        >
          <img class="relative" src="" alt="" />
        </div>
        <p class="text-lg font-semibold ml-2">What's happening?</p>
      </div>
      <div class="flex px-4 w-full justify-between items-center">
        <div class="w-full  ml-16 py-2 flex justify-start items-center">
          <i
            class="fas fa-image text-dim-100 p-1 rounded-full hover:bg-dim-600"
          ></i>
          <i
            class="fas fa-image text-dim-100 p-1 rounded-full hover:bg-dim-600 mx-3"
          ></i>
          <i
            class="fas fa-image text-dim-100 p-1 rounded-full hover:bg-dim-600"
          ></i>
          <i
            class="fas fa-image text-dim-100 p-1 rounded-full hover:bg-dim-600 mx-3"
          ></i>
          <i
            class="fas fa-image text-dim-100 p-1 rounded-full hover:bg-dim-600"
          ></i>
          <i
            class="fas fa-image text-dim-100 p-1 rounded-full hover:bg-dim-600 ml-3"
          ></i>
          <i class="fas fa-gif"></i>
        </div>
        <button
          class="flex items-center justify-center w-32 relative py-1 text-sm rounded-full my-1 hover:bg-dim-500 bg-dim-100 text-white"
        >
          Tweet
        </button>
      </div>
    </div>
    <!-- tweets -->
    <div class="border w-full ">
        <p class=" cursor-pointer w-full py-2 flex items-center justify-center text-dim-500 text-sm hover:bg-slate-100">Show All tweets</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
