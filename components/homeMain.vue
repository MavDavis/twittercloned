<template>
    <section class="relative w-full h-full">
    <page-header name="Home"/>
      <div class="relative w-full">
        <!-- top -->
  
        <div class="w-full pl-4  py-2 flex justify-start items-center">
          <div
            class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-500 mr-2"
          >
            <img class="relative" src="" alt="" />
          </div>
          <p class="text-lg font-semibold ml-0">What's happening?</p>
        </div>
        <div class="flex px-4 w-full justify-between items-center">
          <div class="w-full ml-12 py-2 flex justify-start items-center">
            <i
              class="fas fa-image cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100"
            ></i>
            <i
              class="fa-solid fa-note-sticky mx-1
               text-dim-500 p-1 rounded-full cursor-pointer hover:bg-dim-100"
            ></i>
            <i
              class="fa-solid fa-list cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100 "
            ></i>
         
            <i
              class="fa-regular fa-calendar cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100 mx-1"
            ></i>
            <i
              class="fa-solid fa-face-smile cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100"
            ></i>
            <i
              class="fa-solid fa-location-dot cursor-pointer text-dim-500 p-1 rounded-full hover:bg-dim-100 ml-1"
            ></i>
          </div>
          <button
            class="flex items-center justify-center w-28 relative py-1 text-sm rounded-full my-1 hover:bg-dim-600 bg-dim-500 text-white"
          >
            Tweet
          </button>
        </div>
      </div>
      <!-- tweets -->
      <div class="border w-full">
        <p
          class="cursor-pointer w-full py-2 flex items-center justify-center text-dim-500 text-sm hover:bg-slate-100"
        >
          Show All tweets
        </p>
      </div>
      <tweets/>
    </section>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style></style>
  