<template>
     <div class="max-w-full rounded-lg bg-slate-100 p-4 m-4">
  <h1 class="font-bold text-xl mb-5 ">Who to follow</h1>

  <div class="flex w-full items-center flex-col">
    <div
      class="flex justify-between w-full items-center mb-3"
      v-for="(person, ind) in whoToFollow.slice(0,3)"
      :key="ind"
    >
    <div class="flex items-center">
        <div
        class="justify-center items-center flex img w-12 h-12 rounded-full bg-dim-900 mr-2"
      >
        <img class="relative" :src="person.img" alt="" />
      </div>
      <div class=" items-start flex flex-col">
        <p>{{person.name}}</p>
        <p>@{{person.nickname}}</p>
      </div>
    </div>
      <button
            class="flex items-center justify-center w-20 relative py-1 text-sm rounded-full my-1 hover:bg-dim-800 bg-dim-900 text-white"
          >
            Tweet
          </button>
    </div>
</div>
<p class="flex cursor-pointer justify-start items-center text-dim-500">
    Show more
</p>
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
