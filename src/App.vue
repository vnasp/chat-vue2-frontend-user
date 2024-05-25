<template>
  <div id="app" class="w-screen h-screen p-5">
    <div class="flex gap-4 w-full h-full">
      <div class="rounded-md flex flex-col bg-chat w-1/4 p-4">
        <img src=""/>
        <h2>nombre usuario</h2>
        <select>
          <option>colores</option>
        </select>
        <textarea>blabla</textarea>
        <button>enviar</button>
      </div>
      <div id="chat" class="rounded-md w-1/2 p-4">chat</div>
      <div class="rounded-md bg-chat w-1/4 p-4">persona 2</div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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

<style>
</style>
