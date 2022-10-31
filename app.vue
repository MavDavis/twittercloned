<template>
  <div :class="{ dark: darkMode }">
    <div
      class="w-screen h-full min-h-screen flex  "
    >
      <!-- LeftSideBar -->
      <div class="w-1/4 h-screen sticky top-0">
        <SidebarLeft/>
      </div>
      <!-- Main Content -->
      <div class="w-5/12 relative border-x  min-h-screen h-full">
<NuxtPage/>
      </div>
      <!-- Right Sidebar -->
      <div class="w-1/3 h-fit top-0 sticky overflow-y-scroll ">
<SidebarRight/>
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
</style>