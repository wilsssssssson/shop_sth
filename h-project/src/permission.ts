//路由鉴权
import router from "./router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { useUserStore } from "./store/modules/user";
import pinia from "./store";
//前置守卫 
nprogress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
  nprogress.start();
 
  if (useUserStore().token) {
    
    next();

  } else {
    if(to.path === '/login'){
      next()
    }else if(to.path === '/acl'||to.path === '/home'||to.path === '/'||to.path === '/product'||to.path === '/screen'){
      next('/login')
    }else if(to.path === '/404'){
      next()
    }else{
      next('/404')
    }
  }

  
});
//后置守卫
router.afterEach((to, from) => {
  document.title ="好" +to.meta.title ;
  nprogress.done();

});

//路由组件：login/home/acl->3/product->3/  /(layout)->   /任意路由/404