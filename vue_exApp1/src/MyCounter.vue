<script setup>
import { ref } from 'vue';
defineProps(['title','step']);
const count = ref(0);
</script>

<template>
    <div>
        <p>{{ title }}</p>
        <p>{{ count }}</p>
        <button type="button" v-on:click="count += step">Increase</button>
        <button type="button" v-on:click="count -= step">Decrease</button>
    </div>
</template>