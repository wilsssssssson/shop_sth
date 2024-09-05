<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <el-icon style="margin-right: 10px;" @click="expandMenu">
                <component :is="isfold ? 'Expand' : 'Fold'"></component>
            </el-icon>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="(item,index) in $route.matched" :key='index' :to="item.path">
                    <el-icon style="margin-right:5px ;">
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{item.meta.title}}</span>
                </el-breadcrumb-item>
            
            </el-breadcrumb>
        </div>

        <div class="tabbar-right">
            <el-button icon="refresh" size="small" circle @click="refresh"></el-button>
            <el-button icon="FullScreen" size="small" circle @click="fullScreen"></el-button>
            <el-button icon="setting" size="small" circle></el-button>
            <el-avatar :src="imgPath" class="avatar">
                <template #default>

                    <PictureFilled style="width: 12px;"></PictureFilled>

                </template>
            </el-avatar>

            <el-dropdown>
                <span class="el-dropdown-link">
                    {{ useUserStore().userInfo.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts" name="tablebar">
import { ref } from 'vue';
import { useUserStore } from '@/store/modules/user.ts'
import { useRoute } from 'vue-router'
import {useSettingStore }from '@/store/setting/refresh.ts'

const imgPath = ref('/src/assets/images/qingque.png')//在这里@不会解析要用/src/
const isfold = defineModel()
function expandMenu() {
    isfold.value = !isfold.value
}

const $route = useRoute()

function refresh(){
    useSettingStore().refresh=!useSettingStore().refresh
}
function fullScreen(){
    useSettingStore().isFullScreen=true
}

</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .tabbar-left {
        display: flex;
        align-items: center;

    }

    .tabbar-right {
        display: flex;
        align-items: center;

        .avatar {
            height: 24px;
            width: 24px;
            background-color: aquamarine;
            margin: 0 10px;
        }

    }

}
</style>