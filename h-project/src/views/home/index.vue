<template>
    <div class="common-layout">
        <el-container style="height: 100%;">
            <el-aside width="200px" class="base-aside">
                <Logo />
                <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                    @close="handleClose">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group>
                            <template #title><span>Group One</span></template>
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title><span>item four</span></template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <template #title>Navigator Two</template>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <el-icon>
                            <document />
                        </el-icon>
                        <template #title>Navigator Three</template>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <template #title>Navigator Four</template>
                    </el-menu-item>
                </el-menu>

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

</script>

<style scoped lang="scss">
.common-layout {
    height: 100vh;

    .base-aside {
        background-color: $base-aside-color;

    }

    .base-header {
        background-color: $base-aside-color ;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);


    }

    .base-main {
        background-color: $base-aside-color;
        box-shadow: inset;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    }

    .base-footer {
        background-color: $base-aside-color;
    }

}
</style>