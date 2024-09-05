//路由鉴权
import router from "./router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

//前置守卫
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  nprogress.start();
  next();
});       
//后置守卫
router.afterEach((to, from) => {
    nprogress.done();
  
});   