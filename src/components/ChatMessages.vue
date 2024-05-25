<template>
  <div id="chat" class="messages">
    <div class="message__box--user" v-for="(message, index) in messages" :key="index" :class="message.style">
      <h4 class="message__user">{{ message.name }}</h4>
      <p class="message__text">{{ message.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessages',
  props: {
    messages: Array
  },
}
</script>

<style></style>