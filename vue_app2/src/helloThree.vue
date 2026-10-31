<script setup>
import { ref } from 'vue';
const studentNo = ref("202417147");
const name = ref("김주현");
console.log(studentNo.value);
console.log(name.value);
</script>
<template>
<div>
<p>학번</p>
<input type="text" v-model="studentNo" />
</div>
<div>
<p>이름</p>
<input type="text" v-model="name" />
</div>
</template>
<style scoped>
div { background-color: #f8f8f8; text-align: center; }
p{display: inline-block;padding-right: 10px;}
input { padding: 4px; }
</style>