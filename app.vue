<template>
  <div :class="{ dark: darkMode }">
    <div
      class="w-screen max-w-full h-full min-h-screen flex  "
    >
      <!-- LeftSideBar -->
      <div class="w-1/4 h-screen sticky top-0">
        <SidebarLeft/>
      </div>
      <!-- Main Content -->
      <div class="w-3/4 min-h-screen h-full">
<NuxtPage/>
      </div>
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(true);
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