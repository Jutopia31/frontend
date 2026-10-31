<script setup>
import MyCheckbox1 from './MyCheckbox1.vue';
import MyCheckbox2 from './MyCheckbox2.vue';
import ThreeState from './ThreeState.vue';
</script>

<template>
  <main class="app">
    <MyCheckbox1 />
    <hr />
    <MyCheckbox2 />
    <hr />
    <ThreeState />
  </main>
</template>

<style scoped>
main.app {
  width: 400px;
  margin: 1em auto;
  padding: 1em;
  border: 1px solid gray;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
