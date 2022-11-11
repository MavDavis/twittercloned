<template>
  <div :class="{ dark: darkMode }">
    <ModalTweet v-if="IWantToTweet"/>

    <div
      class="w-screen max-w-full h-full relative min-h-screen flex"
    >
      <!-- LeftSideBar -->
      <div class="lg:w-1/4 xxs:w-1/6 w-0 h-screen sticky top-0">
        <SidebarLeft/>
      </div>
      <!-- Main Content -->
      <div class="lg:w-3/4 xxs:w-5/6 w-full min-h-screen  h-full relative">
<NuxtPage/>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-fit py-2 bg-white xxs:hidden flex">
      <nav>
  <ul class="flex justify-between items-center w-screen relative">
    <li v-for="item,ind in links" :key="ind">
      <NuxtLink  class="flex items-center px-2  py-1 text-lg rounded-full my-1 hover:bg-slate-200"  :to="{name:item.params ? item.params :item.name}">
    <i :class="item.icon"></i>
  </NuxtLink>
    </li>
  </ul>
</nav>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true);
const IWantToTweet = ref(false)
const links = ref([
{icon:"fas  fa-house", name:'Home',params:'index'},
{icon:'fa-solid fa-search', name:'Explore'},
{icon:'fa-regular fa-bell', name:'Notification'},
{icon:'fa-regular fa-envelope', name:'Messages', params:'chat'},
])
</script>
<style>
*{
padding: 0;
margin: 0;
box-sizing: border-box;
transition: all ease-in-out .6s;
}
.router-link-active{
font-weight:bolder ;
}

</style>