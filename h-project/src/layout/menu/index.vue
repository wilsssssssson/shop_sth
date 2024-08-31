<template>
    <div>
        <el-menu class="menu" :router="true">
            <template v-for="(item, index) in constantRoute">
                <template v-if="!item.meta.hidden">
                    <template v-if="item.path === '/'">
                        <!-- 和首页一样，一级路由想放在二级的放在这 -->
                        <template v-for="(item2, index) in item.children">
                            <el-menu-item v-if="!item2.hidden" :index="item2.path">
                                <el-icon>
                                    <component :is="item2.meta.icon"></component>
                                </el-icon>
                                {{ item2.meta.title }}
                            </el-menu-item>
                        </template>
                    </template>
                    <template v-else>
                        <!-- 没有二级路由 -->
                        <el-menu-item v-if="!item.children" :index="item.path">
                            <el-icon>
                                <component :is="item.meta.icon"></component>
                            </el-icon>
                            {{ item.meta.title }}
                        </el-menu-item>
                        <!-- 二级路由只有一个 -->
                        <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path">
                            <el-icon>
                                <component :is="item.children[0].meta.icon"></component>
                            </el-icon>
                            {{ item.children[0].meta.title }}
                        </el-menu-item>
                        <!-- 二级路由有两个以上 -->
                        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
                            <template #title>
                                <el-icon>
                                    <component :is="item.meta.icon"></component>
                                </el-icon>
                                {{ item.meta.title }}
                            </template>
                            <template v-for="(item2, index) in item.children">
                                <el-menu-item v-if="!item2.meta.hidden" :index="item2.path">
                                    <el-icon>
                                        <component :is="item2.meta.icon"></component>
                                    </el-icon>
                                    {{ item2.meta.title }}
                                </el-menu-item>
                            </template>



                        </el-sub-menu>
                    </template>

                </template>

            </template>
        </el-menu>
    </div>
</template>

<script setup>
import { constantRoute } from '@/router/routes';
import { useRouter } from 'vue-router';
// //使用click跳转
//click返回的是点击菜单的实例
// const $router = useRouter();
// function goRouter(vc){
//     $router.push(vc.index);
//     console.log(vc);
// }
</script>

<style lang="scss" scoped>
.menu {
    border-right: none;

}
</style>