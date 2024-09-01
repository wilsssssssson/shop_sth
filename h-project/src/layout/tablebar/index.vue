<template>
    <div class="tabbar">
        <div class="tabbar-left">
            <el-icon style="margin-right: 10px;">
                <Expand />
            </el-icon>
            <el-breadcrumb separator-icon="ArrowRight">
                <el-breadcrumb-item>iiiiiiii</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="tabbar-right">
            <el-button icon="refresh" size="small" circle></el-button>
            <el-button icon="FullScreen" size="small" circle></el-button>
            <el-button icon="setting" size="small" circle></el-button>
            <div class="img-box">
                <el-image :src='src' fit="cover">
                   
                </el-image>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const src='../../assets/images/qingque.png'

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

        .img-box {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: aquamarine;
            .error-img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }

        }

    }

}
</style>