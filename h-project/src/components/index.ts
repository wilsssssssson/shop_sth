import SvgIcon from "./SvgIcon/SvgIcon.vue"

const globalComponent={SvgIcon};



export default {
    install(app){
        Object.keys(globalComponent).forEach(key=>{
            app.component(key,globalComponent[key])
        });
    }
   
    
}