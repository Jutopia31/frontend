<script setup>
import HelloOne from './HelloOne.vue'
import HelloTwo from './helloTwo.vue'
import helloThree from './helloThree.vue';
</script>

<template>
  <main class="app">
  <HelloOne />
  <hr />
  <HelloTwo />
  <hr />
  <helloThree />
  </main>
</template>

<style scoped>
main.app {
width: 500px; min-height: 300px;
margin: 1em auto; padding: 1em;
border: 1px solid gray;
box-shadow: 3px 3px 3px #ddd;
}
</style>