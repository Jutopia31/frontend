<script setup>
import { ref, onMounted} from "vue";
import moment from "moment";

const time = ref(null);

onMounted(() => {
    const callback = () => {
        time.value = moment().format("HH:mm:ss");
    };
    callback();
    setInterval(callback, 1000);
})
</script>

<template>
    <div>{{ time }}</div>
</template>

<style scoped>
div{display:inline-block; font-size: 20pt; padding: 3px 12px; border: 1px solid gray;}
</style>