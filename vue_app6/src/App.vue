<script setup>
import MyList1 from './MyList1.vue';
import MyList2 from './MyList2.vue';
</script>

<template>
  <div id="app">
    <MyList1 />
  </div>
  <div id="app">
    <MyList2 />
  </div>
</template>

<style scoped>
div#app{
  padding: 30px;
  margin: 30px auto;
  max-width: 600px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #ddd;
}
</style>
