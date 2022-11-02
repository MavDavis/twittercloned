<template>
  <div class=" px-5 w-1/4 h-screen top-0 left-0 fixed py-5">
    <div class="w-8 h-8 px-5 mb-5">
      <i class="fa-brands fa-twitter text-xl text-dim-500 cursor-pointer hover:text-dim-600"></i>
    </div>
    <!-- nav-links -->
    <div class="w-full">
<nav>
  <ul class="flex flex-col justify-start items-start w-full relative">
    <li class="flex items-center px-5 py-1 text-lg rounded-full my-1 hover:bg-slate-200" v-for="item,ind in links" :key="ind">
    <i :class="item.icon"></i>
    <div>
      <NuxtLink class="ml-3" :to="{name:item.params ? item.params :item.name}">{{item.name}}</NuxtLink>
    </div>
    </li>
    <button class="flex items-center justify-center w-40 relative py-2 text-xl rounded-full my-1 hover:bg-dim-600 bg-dim-500 text-white ">Tweet</button>
  </ul>
</nav>
    </div>
    <div class="absolute bottom-0 mb-5 hover:bg-slate-300 rounded-full p-2 pr-5 justify-start  items-center flex w-fit">
  <div class="justify-center  items-center flex img w-12 h-12 rounded-full bg-dim-500 mr-2">
    <img class=" relative" src="" alt="">
  </div>
  <div class="flex flex-col items-center">
    <p class="text-lg font-semibold">Username</p>
    <p class="text-sm font-light">@nickname</p>
</div>
<div class="icon ml-8">
  <i class="fa-solid fa-ellipsis"></i>
</div>
    </div>
  </div>
</template>

<script setup>
const links = ref([
{icon:"fa-solid fas fa-house", name:'Home',params:'index'},
{icon:'fa-regular fa-hashtag', name:'Explore'},
{icon:'fa-regular fa-bell', name:'Notification'},
{icon:'fa-regular fa-envelope', name:'Messages', params:'chat'},
{icon:'fa-regular fa-bookmark', name:'Bookmark'},
{icon:'fa-regular fa-rectangle-list', name:'List'},
{icon:'fa-regular fa-user', name:'Profile'},
{icon:'fa-regular fa-circle', name:'More'},

])
</script>

<style>
</style>