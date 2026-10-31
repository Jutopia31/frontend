<script setup>
import { ref } from 'vue';
const name = ref("홍길동");
const studentNo = ref(202410101);
</script>

<template>
    <div>
        <p>{{ name }}</p>
        <input type="text" v-model="name" />
        <p>{{ studentNo }}</p>
        <input type="text" v-model="studentNo" />
    </div>
</template>

<style scoped>

</style>