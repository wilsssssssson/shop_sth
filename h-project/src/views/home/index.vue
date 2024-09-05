<template>
    <div class="common-layout">
        <el-container style="height: 100%;">
            <el-aside class="base-aside" :class="{ fold: isfold ? true : false }">
                <div class="logo-top">
                    <Logo :style="{ 'margin-left': isfold ? '7px' : '25px' }"></Logo>

                </div>
                <Menu v-model="isfold"></Menu>
            </el-aside>
            <el-container>
                <el-header class="base-header">
                    <Tablebar v-model="isfold"></Tablebar>
                </el-header>
                <el-main class="base-main">
                    <ReFresh>
                            <router-view v-slot="{ Component }">
                                <transition name="fade">
                                    <component :is="Component" />
                                </transition>
                            </router-view>           
                    </ReFresh>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts" name="home">
import Logo from '@/components/Logo/index.vue'
import Menu from '@/layout/menu/index.vue'
import Tablebar from '@/layout/tablebar/index.vue'
import ReFresh from '@/layout/refresh/index.vue'
import { ref } from 'vue';
const isfold = ref(false);

</script>

<style scoped lang="scss">
.common-layout {
    height: 100vh;

    .base-aside {
        width: $menu-width;
        background-color: $base-aside-color;
        margin-right: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        transition: all 0.5s;

        .logo-top {
            display: flex;
            width: 100%;
            align-items: center;


        }

        &.fold {
            width: $menu-fold-width;
        }
    }

    .base-header {
        position: relative;
        background-color: $base-aside-color ;

    }

    .base-header::after {
        content: "";
        /* 必须有content属性 */
        position: absolute;
        /* 伪元素绝对定位 */
        bottom: 0;
        /* 定位到.base-header的底部 */
        left: 0;
        /* 从左侧开始 */
        width: 100%;
        /* 分割线宽度与.base-header相同 */
        height: 1px;
        /* 分割线高度 */
        background-image: linear-gradient(to right, #ddd, transparent);
    }

    .base-main {
        background-color: $base-aside-color;
        box-shadow: inset;

        .fade-enter-from {
            opacity: 0;
            transform: scale(0);
        }

        .fade-enter-active {
            transition: all .3s ease;
        }

        .fade-enter-to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .base-footer {
        background-color: $base-aside-color;
    }

}
</style>