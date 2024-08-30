<template>
    <div>
        <el-menu class="menu">
            <template v-for="(item, index) in constantRoute">
                <template v-if="!item.meta.hidden">
                    <!-- 没有二级路由 -->
                    <el-menu-item v-if="!item.children" :index="item.path">
                        {{ item.meta.title }}
                    </el-menu-item>
                    <!-- 二级路由只有一个 -->
                    <el-menu-item v-if="item.children&&item.children.length===1" :index="item.path">
                        {{ item.children[0].meta.title }}
                    </el-menu-item>
                    <!-- 二级路由有两个以上 -->
                    <el-sub-menu v-if="item.children&&item.children.length>1" :index="item.path">
                        <template #title>
                            {{ item.meta.title }}
                        </template>
                        <el-menu-item v-for="(item2,index) in item.children" :index="item2.path">
                            {{ item2.meta.title }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>

            </template>
        </el-menu>
    </div>
</template>

<script setup>
import { constantRoute } from '@/router/routes';

</script>

<style lang="scss" scoped>
.menu{
    border-right: none;

}

</style>