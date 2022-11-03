<template>
  <div class="flex w-full">
    <div class="w-3/5 border-x min-h-screen h-full">
      <div class="flex w-full justify-between items-center">
        <page-header name="Notification" />
        <div class="w-fit h-fit mr-4 px-2 py-1 cursor-pointer rounded-full hover:bg-slate-200">
          <i class="fa-solid fa-gear"></i>

        </div>
      </div>
    <div class="flex px-28 border-b pb-4 justify-between items-center">
      <p class="font-semibold cursor-pointer text-sm" :class="[allActive? '':'']">All</p> 
      <p class="font-semibold cursor-pointer text-sm" :class="[mentionsActive? '':'']">Mentions</p>
    </div>
    
    </div>
    <!-- Right Sidebar -->
    <div class="w-2/5">
      <SidebarRight :gray="true" />
      <who-to-follow />
    </div>
  </div>
</template>

<script setup>
const allActive = ref(false)
const mentionsActive = ref(false)
</script>

<style></style>
