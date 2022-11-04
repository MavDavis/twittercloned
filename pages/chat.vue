<template>
  <div class="flex w-full">
    <div class="w-2/5 border-x min-h-screen h-full">
      <searchbar placeholder="search direct message" class="p-4" />
      <div v-for="msg,ind in chat" :key="ind" class="flex w-full items-center hover:bg-slate-100 p-4">
        <div
          class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-900 mr-2"
        >
          <img class="relative" :src="msg.img" alt="" />
        </div>
        <div class="flex flex-col">
        <div class="flex">
          <p class="text-sm font-semibold">{{msg.name.slice(0, 8)
            }}<span v-if="msg.name.length > 8">...</span></p>
          <p class="text-sm ">{{msg.nickname.slice(0, 4)
            }}<span v-if="msg.nickname.length > 4">...</span>
          </p>
          <p class="text-sm ">{{msg.message[1].time}}</p>
        </div>
        </div>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="w-3/5"></div>
  </div>
</template>

<script setup>
const chat = ref([
  {
    name: "Jeyi",
    nickname:'Jeyvers',
    message: [
      { userId: 0, message: "hy", time: "02-sept,2022" },
      {
        userId: 0,
        message: "Good day. How are you doing?",
        time: "02-sept,2022",
      },
      { userId: 1, message: "hy", time: "02-sept,2022" },
      { userId: 0, message: "hy", time: "02-sept,2022" },
    ],
    img: "",
  },
  {
    name: "Babe",
    nickname:'Adole',
    message: [
      { userId: 2, message: "hy", time: "02-sept,2022" },
      {
        userId: 2,
        message: "Good day. How are you doing?",
        time: "02-sept,2022",
      },
      { userId: 1, message: "hy", time: "02-sept,2022" },
      { userId: 2, message: "hy", time: "02-sept,2022" },
    ],
    img: "",
  },
]);
</script>

<style></style>
