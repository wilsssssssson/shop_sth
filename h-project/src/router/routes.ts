
export const constantRoute = [
    {
        path:'/login',
        component:()=>import('@/views/login/index.vue'),
        name:'login',
        meta:{
            hidden:true
        }
    },
    {
        path:'/',
        component:()=>import('@/views/home/index.vue'),
        name:'layout',
        redirect:'/home',
        meta:{
            hidden:true
        },
        // 数据大屏二级路由显示就用这个
        // children:[
        //     {
        //         path:'/screen1',
        //         component:()=>import('@/views/screen/index.vue'),
        //         name:'screen1',
        //         meta:{
        //             title:'数据大屏',
        //             hidden:false,
        //             icon:'DataLine'
        //         } 
        //     }
        // ]
    },
    {
        path:'/home',
        component:()=>import('@/views/home/index.vue'),
        name:'home',
        meta:{
            title:'首页',
            icon:'Plus'
        }
    },
    {
        path:'/screen',
        component:()=>import('@/views/screen/index.vue'),
        name:'screen',
        meta:{
            title:'数据大屏',
            hidden:false,
            icon:'DataLine'
        }
    },
    {
        path:'/acl',
        name:'acl',
        component:()=>import('@/views/home/index.vue'),
        meta:{
            title:'权限管理',
            hidden:false,
            icon:'Lock'
        },
        children:[
            {
                path:'/acl/user',
                name:'user',
                component:()=>import('@/views/acl/user/index.vue'),
                meta:{
                    title:'用户管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            {
                path:'/acl/role',
                name:'role',
                component:()=>import('@/views/acl/role/index.vue'),
                meta:{
                    title:'角色管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            {
                path:'/acl/permission',
                name:'permission',
                component:()=>import('@/views/acl/permission/index.vue'),
                meta:{
                    title:'菜单管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            

        ]
    },
    {
        path:'/product',
        name:'product',
        component:()=>import('@/views/home/index.vue'),
        meta:{
            title:'商品管理',
            hidden:false,
            icon:'Lock'
        },
        children:[
            {
                path:'/product/spu',
                name:'spu',
                component:()=>import('@/views/acl/user/index.vue'),
                meta:{
                    title:'SPU管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            {
                path:'/product/trademark',
                name:'trademark',
                component:()=>import('@/views/acl/role/index.vue'),
                meta:{
                    title:'品牌管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            {
                path:'/product/attr',
                name:'attr',
                component:()=>import('@/views/acl/permission/index.vue'),
                meta:{
                    title:'属性管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            {
                path:'/product/sku',
                name:'sku',
                component:()=>import('@/views/acl/permission/index.vue'),
                meta:{
                    title:'SKU管理',
                    icon:'Plus',
                    hidden:false
                }
            },
            

        ]
    },
    {
        path:'/404',
        component:()=>import('@/views/404/index.vue'),
        name:'404',
        meta:{
            hidden:true
        }
    },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'any',
        meta:{
            hidden:true
        }
    }
]

