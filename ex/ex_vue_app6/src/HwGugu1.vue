<script setup>
    const n_idx = 8;
    const m_idx = 9;

</script>
<template>
    <table>
        <tr v-for="m in m_idx" :key ="m">
            <td v-for="n in n_idx" :key = "n">
               {{ n+1 }} * {{ m }} = {{ (n + 1) * m }} 
            </td>
        </tr>
    </table>
</template>

<style scoped>
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