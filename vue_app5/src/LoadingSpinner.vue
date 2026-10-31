<template>
    <div class="spinner" />
</template>

<script setup>
</script>

<style scoped>
div.spinner {
    display: inline-block;
    padding: 0;
    margin: 0 0.4em;
    width: 1.5em;
    height: 1.5em;
    border: 0.2em solid #ddd;
    border-top: 0.2em solid #88f;
    transform: rotate(45deg);
    border-radius: 50%;
    animation: spin-animation 1s linear infinite;
}

@keyframes spin-animation{
    from{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg) scale(1.3);
    }
    to{
        transform: rotate(360deg);
    }
}
</style>