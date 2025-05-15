<template>
    <div>
        spu
    </div>
    <input type="text" id="myInput" value="Hello World">
    <button id="myButton">发送消息</button>
</template>

<script setup>
import {sendMsg} from '@/views/product/tarans'
import { onMounted, onUnmounted } from 'vue';

const handler = (e)=>{
    var data = document.getElementById('myInput').value;
    sendMsg(data);
}
onMounted(() => {
      const button = document.getElementById('myButton');
      if (button) button.addEventListener('click', handler);
    });

onUnmounted(() => {
    const button = document.getElementById('myButton');
    if (button) button.removeEventListener('click', handler);
});
</script>

<style lang="scss" scoped>

</style>