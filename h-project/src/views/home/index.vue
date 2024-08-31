<template>
    <div class="common-layout">
        <el-container style="height: 100%;">
            <el-aside width="200px" class="base-aside">
                <Logo />
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header class="base-header">
        
                </el-header>
                <el-main class="base-main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo/index.vue'
import Menu from '@/layout/menu/index.vue'
</script>

<style scoped lang="scss">
.common-layout {
    height: 100vh;

    .base-aside {
        background-color: $base-aside-color;
        margin-right: 5px;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        .navigator {
            width: 100%;
        }
    }

    .base-header {
        position: relative; 
        background-color: $base-aside-color ;

    }
    .base-header::after {
        content: ""; /* 必须有content属性 */
        position: absolute; /* 伪元素绝对定位 */
        bottom: 0; /* 定位到.base-header的底部 */
        left: 0; /* 从左侧开始 */
        width: 100%; /* 分割线宽度与.base-header相同 */
        height: 1px; /* 分割线高度 */
        background-image: linear-gradient(to right,  #ddd, transparent);
    }

    .base-main {
        background-color: $base-aside-color;
        box-shadow: inset;
        
    }

    .base-footer {
        background-color: $base-aside-color;
    }

}
</style>