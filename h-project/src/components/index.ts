import SvgIcon from "./SvgIcon/SvgIcon.vue"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const globalComponent={SvgIcon};



export default {
    install(app){
        //注册svgicon
        Object.keys(globalComponent).forEach(key=>{
            app.component(key,globalComponent[key])
        });
        //注册图标  icon会继承父亲的样式，所以一般这么使用
        // <el-icon >
        //       <component :is="item2.meta.icon"></component>
        // </el-icon>
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
    
    
}