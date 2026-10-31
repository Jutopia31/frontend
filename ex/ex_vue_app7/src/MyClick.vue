<script setup>
    function showMessage(){
        alert("clicked");
    }
</script>
<template>
    <h1>@click</h1>
    <span @click="showMessage">@click</span>
    <span @click.rigth="showMessage">@click.right</span>
    <span @click.ctrl="showMessage">@click.ctrl</span>
    <span @click.alt="showMessage">@click.alt</span>
</template>
<style scoped>
h1{
    font-size: 20pt;
    margin: 4px;
}
span{
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border: 1px solid gray;
    box-shadow: 2px 2px 2px pointer;
}
span:hover{
    background-color: #ffc;
    cursor:pointer;
    box-shadow:  none;
    transform: translateY(2px);
}
</style>