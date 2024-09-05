<template>

    <div v-if="windowRefresh" class="refresh-window" :class="{ isFullscreen : useSettingStore().isFullScreen?true:false}">
        <el-button 
            v-show="useSettingStore().isFullScreen"
            class="quit-full-screen" 
            icon="FullScreen" 
            size="small" 
            type="primary" 
            link 
            @click="quitFullScreen"
        >
        退出全屏
        </el-button>
        <slot>
        </slot>
    </div>
</template>

<script setup lang="ts" name="refresh">
import { useSettingStore } from '@/store/setting/refresh.ts'
import { nextTick } from 'vue';
import { watch } from 'vue';
import { ref } from 'vue';
let windowRefresh = ref(true);

watch(() => useSettingStore().refresh, () => {
    windowRefresh.value = !windowRefresh.value;
    nextTick(() => {
        windowRefresh.value = !windowRefresh.value;
    })
   

})



function quitFullScreen(){
    useSettingStore().isFullScreen=false;
    if (document.fullscreenElement){
        document.exitFullscreen();
    }
}

</script>

<style lang="scss" scoped>
.refresh-window {
    width: 100%;
    height: 100%;

    &.isFullscreen {
        background-color:$base-main-window-color;
        padding: 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1024;
    }
    .quit-full-screen{
        position:fixed;
        top: 0;
        right: 25px;
        z-index: 1025;
    }
}
</style>