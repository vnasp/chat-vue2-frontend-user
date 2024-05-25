<template>
  <div id="app" class="w-screen h-screen p-6">
    <div class="flex gap-6 h-full">
      <!-- Perfil Usuario 1 -->
      <div class="user">
        <div class="flex flex-col items-center">
          <img src="./assets/img/user.png" class="user__avatar" />
          <h2 class="user__name">nombre usuario</h2>
        </div>
        <div class="flex flex-col w-full">
          <label htmlFor="messageColor" class="text-start">Color mensaje</label>
          <select id="messageColor" class="h-10">
            <option>colores</option>
          </select>
        </div>
        <div class="flex flex-col w-full">
          <label htmlFor="messageText" class="text-start">Mensaje</label>
          <textarea id="messageText" class="w-full p-4" rows="6">blabla</textarea>
        </div>
        <button class="btn btn--primary">enviar</button>
      </div>

      <div id="chat" class="rounded-md w-1/2 p-6 flex flex-col">
        un array de nombre, mensaje y color. si es usuario 1 es text-left, si es usuario 2 es text-right
        <!-- Mensaje del usuario 1 -->
        <div class="message__box--user1 bg-white">
          <h4 class="message__user">Nombre Usuario 1</h4>
          <p class="message__text--user1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci atque sapiente iusto in, obcaecati est quam tempora reiciendis sequi explicabo corporis dolores incidunt eius alias officia? Laborum suscipit quas voluptatum?</p>
        </div>

        <!-- Mensaje del usuario 2 -->
        <div class="message__box--user2 bg-whatsapp-500">
          <h4 class="message__user">Nombre Usuario 2</h4>
          <p class="message__text--user2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusamus, labore in magni voluptates esse? Voluptatem quaerat nobis fugit nesciunt. Possimus deserunt laborum quas facere sint eius cupiditate, temporibus adipisci.</p>
        </div>
      </div>

      <!-- Perfil Usuario 2 -->
      <div class="user">
        <div class="flex flex-col items-center">
          <img src="./assets/img/user.png" class="user__avatar" />
          <h2 class="user__name">nombre usuario</h2>
        </div>
        <div class="flex flex-col w-full">
          <label htmlFor="messageColor" class="text-start">Color mensaje</label>
          <select id="messageColor" class="h-10">
            <option>colores</option>
          </select>
        </div>
        <div class="flex flex-col w-full">
          <label htmlFor="messageText" class="text-start">Mensaje</label>
          <textarea id="messageText" class="w-full p-4" rows="6">blabla</textarea>
        </div>
        <button class="btn btn--primary">enviar</button>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style></style>
