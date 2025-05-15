<template>
    <div>
        attrer
    </div>
    <p>{{ output }}</p>
</template>

<script setup>
import {getMsg} from '@/views/product/tarans'
import { onUnmounted, ref } from 'vue';
const output = ref('defauklt')

const displayMsg=(msg)=>{
    output.value=msg;
}

const cancelListen = getMsg(displayMsg);

onUnmounted(cancelListen);

</script>

<style lang="scss" scoped></style>