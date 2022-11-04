<template>
  <div class="flex w-full">
    <div class="w-2/5 border-x min-h-screen h-full">
      <searchbar placeholder="search direct message" class="p-4" />
      <div
        v-for="(msg, ind) in chat"
        :key="ind"
        @click="showChat(msg.userId)"
        class="flex w-full items-center hover:bg-slate-100 p-4"
      >
        <div
          class="justify-center items-center flex img w-8 h-8 rounded-full bg-dim-900 mr-2"
        >
          <img class="relative" :src="msg.img" alt="" />
        </div>
        <div class="flex w-full relative flex-col">
          <div class="flex w-full relative items-center">
            <p class="text-sm font-semibold mr-2">
              {{ msg.name.slice(0, 8)
              }}<span v-if="msg.name.length > 8">...</span>
            </p>
            <p class="text-sm mr-auto">
              @{{ msg.nickname.slice(0, 8)
              }}<span v-if="msg.nickname.length > 8">...</span>
            </p>
            <p class="text-sm">
              {{ msg.message[msg.message.length - 1].time }}
            </p>
          </div>
          <p>
            <span v-if="msg.message[msg.message.length - 1].userId != 1">
              {{ msg.name }} sent
            </span>
            <span v-else>You sent </span>
            {{ msg.message[msg.message.length - 1].message }}
          </p>
        </div>
      </div>
    </div>
    <!-- Right Sidebar -->
    <div class="w-3/5">
      <div v-if="messages.length > 0">
      <div v-for="msg, ind in messages" :key="ind">
      <!--  -->
<p class="mb-3 max-w-3/4" :class="[msg.userId == 1 ? 'bg-dim-500' : 'bg-red-300']">{{msg.message}}</p>
    </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chat = ref([
  {
    name: "Jeyi",
    nickname: "Jeyvers",
    userId: 0,
    message: [
      { userId: 0, message: "hy", time: "02-sept,2022" },
      {
        userId: 0,
        message: "Good day. How are you doing?",
        time: "02-sept,2022",
      },
      { userId: 1, message: "I am good and you?", time: "02-sept,2022" },
      { userId: 0, message: "I am okay, thanks.", time: "02-sept,2023" },
    ],
    img: "",
  },
  {
    name: "Babe",
    nickname: "Adole",
    userId: 2,
    message: [
      { userId: 2, message: "hy", time: "02-sept,2022" },
      {
        userId: 2,
        message: "Do you have those papers ready?",
        time: "02-sept,2022",
      },
      {
        userId: 1,
        message: "Not yet, It will be ready soon.",
        time: "02-sept,2022",
      },
      { userId: 2, message: "Okay", time: "02-sept,2022" },
    ],
    img: "",
  },
]);
const messages = ref([]);
const showChat = (id) => {
  let msg = chat.value.find((item) => item.userId == id);
  messages.value = msg.message;
};
</script>

<style></style>
