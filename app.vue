<template>
  <div :class="{ dark: darkMode }">
    <ModalTweet v-if="IWantToTweet"/>

    <div
      class="w-screen max-w-full h-full relative min-h-screen flex  "
    >
      <!-- LeftSideBar -->
      <div class="w-1/4 h-screen sticky top-0">
        <SidebarLeft/>
      </div>
      <!-- Main Content -->
      <div class="w-3/4 min-h-screen  h-full relative">
<NuxtPage/>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true);
const IWantToTweet = ref(false)
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