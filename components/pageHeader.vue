<template>
    <div
        class="sticky h-fit top-0 left-0 z-50 bg-white w-full p-4 flex justify-start"
      >
        <p class="text-xl font-bold">{{name}}</p>
      </div>
</template>

<script setup>
 const props = defineProps(['name'])

</script>

<style>

</style>