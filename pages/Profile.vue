<template>
  <div class="flex w-full">
    <div class="w-3/5 border-x min-h-screen h-full">
      <!-- top -->
      <div>
        <page-header :name="user.name" nomOfTweets="61" :py="true" />
      </div>
      <div class="relative w-full h-fit">
        <div class="h-40 w-full bg-slate-200 relative"></div>
        <div class="profile-pic bg-slate-200">
          <img src="" alt="" />
          <div class="hover"></div>
        </div>
        <button class="editProfile font-semibold text-xs hover:bg-slate-200 border rounded-full px-2 py-1">Edit profile</button>
      </div>


      <!-- details -->
<div class="relative top-20 px-4 ">
<div class="my-4">  <h3 class="text-xl font-bold">{{user.name}}</h3>
  <p class="text-xs">@{{user.name}}</p></div>
  <!-- about -->
  <p class="text-sm">Software Engineer - JavaScript: Vue.js  | Nuxt.js  |  Node.js http://github.com/MavDavis
Music producer,</p>
<div class="flex">
  <p><i class="fas fa-location"></i>{{user.location}}</p>
</div>
</div>  

</div>
    <!-- Right Sidebar -->
    <div class="w-2/5"></div>
  </div>
</template>

<script setup>
const user = ref({
  name:'User',
  location:'Abuja, Nigeria'
});
</script>

<style scoped>
.editProfile{
  position: absolute;
  bottom: -25%;
  right: 1rem;
}
.profile-pic {
  position: absolute;
  bottom: -50%;
  left: 1rem;
  border: 2px solid #fff;
  height: 9rem;
  width: 9rem;
  border-radius: 9999px;
  z-index: 9999px;
}
.hover {
  background: rgba(0, 0, 0, 0.1);
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.profile-pic:hover .hover {
  display: block;
  border-radius: 9999px;
  cursor: pointer;
}
</style>
