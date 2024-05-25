<template>
  <div id="app" class="w-screen h-screen p-6 flex gap-6">

    <!-- Perfil Usuario 0 -->
    <div class="user" v-if="users.length > 0 && users[0]">
      <div class="flex flex-col items-center">
        <img :src="users[0].picture.large" class="user__avatar" />
        <h2 class="user__name">{{ users[0].name.first }} {{ users[0].name.last }}</h2>
      </div>
      <div class="user__color" :class="userColors[0]"></div>
      <div class="flex flex-col w-full">
        <label for="messageText0" class="text-start">Mensaje</label>
        <textarea id="messageText0" rows="6" v-model="userMessage0"></textarea>
      </div>
      <button class="btn btn--primary" @click="sendMessage(0)">enviar</button>
    </div>

    <!-- Chat -->
    <ChatMessages :messages="messages" />

    <!-- Perfil Usuario 1 -->
    <div class="user" v-if="users.length > 1 && users[1]">
      <div class="flex flex-col items-center">
        <img :src="users[1].picture.large" class="user__avatar" />
        <h2 class="user__name">{{ users[1].name.first }} {{ users[1].name.last }}</h2>
      </div>
      <div class="user__color" :class="userColors[1]"></div>
      <div class="flex flex-col w-full">
        <label for="messageText1" class="text-start">Mensaje</label>
        <textarea id="messageText1" rows="6" v-model="userMessage1"></textarea>
      </div>
      <button class="btn btn--primary" @click="sendMessage(1)">enviar</button>
    </div>
  </div>
</template>

<script>
import ChatMessages from './components/ChatMessages.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ChatMessages
  },
  data() {
    return {
      users: [],
      userColors: ['bg-whatsapp-500', 'bg-white'],
      userMessage0: '',
      userMessage1: '',
      messages: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const url = "https://randomuser.me/api?results=2";
        const { data } = await axios.get(url)
        this.users = data.results
      } catch (error) {
        console.log(error)
      }
    },
    sendMessage(userIndex) {
      const user = this.users[userIndex];
      const messageContent = this[`userMessage${userIndex}`];
      const messageData = {
        name: `${user.name.first} ${user.name.last}`,
        message: messageContent,
        style: userIndex === 0 ? `text-left ${this.userColors[0]}` : `text-right ml-auto ${this.userColors[1]}`
      };
      this.messages.push(messageData);
      this[`userMessage${userIndex}`] = '';
    }
  }
}
</script>

<style></style>
