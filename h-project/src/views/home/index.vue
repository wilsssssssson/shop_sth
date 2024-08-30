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
                <el-main class="base-main">Main</el-main>
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
        background-color: $base-aside-color 
        
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