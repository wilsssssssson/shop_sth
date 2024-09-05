<template>
    <div class="sku">
        sku
        {{ safsf }}
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const safsf=ref('sadfsafasfdsaf')

setTimeout(() => {
    safsf.value=safsf.value+'@@'
}, 3000);
</script>


<style lang="scss" scoped>
.sku{
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}
</style>