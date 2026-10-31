<script setup>
    // const size = 5;
    const row_size = 4;
    const col_size = 4;
</script>
<template>
    <!-- <span v-for="i in size" :key = "i">
        {{ i }}
    </span> -->
    <table>
        <tr v-for="r in row_size" :key="r">
            <td v-for="c in col_size" :key="c">
                {{ (r - 1) * col_size + c }}
            </td>
        </tr>
    </table>
</template>
<style scoped>
span{
    display: inline-block;
    margin: 5px;
    padding: 8px 15px;
    border: 1px solid black;
}

table{
    border-collapse:collapse;
    margin: auto;
}
td{
    padding: 15px;
    border: 1px solid black;
    text-align: center;
}
</style>