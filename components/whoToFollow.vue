<template>
  <div class="flex w-full items-center flex-col">
    <div
      class="flex w-full items-center"
      v-for="(person, ind) in whoToFollow"
      :key="ind"
    >
      <div
        class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-500 mr-2"
      >
        <img class="relative" :src="person.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const whoToFollow = ref([
  { name: "PulseNigeria", nickname: "pulseSportNG", img: "" },
  { name: "Jeyi Adole", nickname: "Jeyvers", img: "" },
  { name: "David Marvelous", nickname: "Mavdavis", img: "" },
  { name: "Emmanuel Emmanuel", nickname: "Manuel", img: "" },
  { name: "Wannandah Sunny", nickname: "DahDog", img: "" },
  { name: "Wisdom Emmanuel", nickname: "Wise", img: "" },
]);
</script>

<style></style>
