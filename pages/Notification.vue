<template>
  <div class="flex w-full">
    <div class="w-3/5 border-x min-h-screen h-full">
      <div class="flex w-full justify-between items-center">
        <page-header name="Notification" />
        <div class="w-8 h-8 rounded-full hover:bg-slate-">
          <i class="fa-regular fa-gear"></i>

        </div>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="w-2/5">
      <SidebarRight :gray="true" />
      <who-to-follow />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
