<template>
    <div>
        <el-menu class="menu" :router="true"  :default-active="$route.path" :collapse="isfold?true:false" :collapse-transition="false">
            <template v-for="(item, index) in constantRoute">
                <template v-if="!item.meta.hidden">
                    <template v-if="item.path === '/'">
                        <!-- 和首页一样，一级路由想放在二级的放在这 -->
                        <template v-for="(item2, index) in item.children">
                            <el-menu-item v-if="!item2.hidden" :index="item2.path">
                                <el-icon>
                                    <component :is="item2.meta.icon"></component>
                                </el-icon>
                                <template #title>
                                    <span>{{ item2.meta.title }}</span>
                                </template>
                            </el-menu-item>
                        </template>
                    </template>
                    <template v-else>
                        <!-- 没有二级路由 -->
                        <el-menu-item v-if="!item.children" :index="item.path">
                            <el-icon>
                                <component :is="item.meta.icon"></component>
                            </el-icon>
                            <template #title>
                                <span>{{ item.meta.title }}</span>
                            </template>

                        </el-menu-item>
                        <!-- 二级路由只有一个 -->
                        <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path">
                            <el-icon>
                                <component :is="item.children[0].meta.icon"></component>
                            </el-icon>
                            <template #title>
                                {{ item.children[0].meta.title }}
                            </template>

                        </el-menu-item>
                        <!-- 二级路由有两个以上 -->
                        <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
                            
                            <template #title>
                                <el-icon>
                                    <component :is="item.meta.icon"></component>
                                </el-icon>
                                <span> {{ item.meta.title }}</span>
                               
                            </template>

                            <template v-for="(item2, index) in item.children">
                                <el-menu-item v-if="!item2.meta.hidden" :index="item2.path">
                                    <el-icon>
                                        <component :is="item2.meta.icon"></component>
                                    </el-icon>
                                    <template #title>
                                        <span>{{ item2.meta.title }}</span>
                                    </template>

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
import { useRouter,useRoute } from 'vue-router';
const $route =useRoute();
const isfold=defineModel();
// //使用click跳转
//click返回的是点击菜单的实例
// const $router = useRouter();
// console.log($router)
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